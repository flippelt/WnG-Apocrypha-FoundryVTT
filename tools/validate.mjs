// Validate the editable YAML sources under src/packs/<name>/ before they are
// compiled into the distributable Foundry compendium packs.
//
//   npm run validate
//
// Catches the mistakes that would otherwise only surface as a broken (or
// silently empty) compendium inside Foundry:
//
//   * a source file that is not valid YAML;
//   * a missing/malformed `_id`, or two documents sharing one;
//   * a `_key` that disagrees with the document's `_id` or collection;
//   * a duplicate `_id` among a document's embedded items/pages;
//   * a subdirectory under src/packs/<name> — `compilePack` does NOT recurse,
//     so anything nested there is dropped and the pack compiles short;
//   * a pack declared in module.json with no sources (or the other way round).
//
// Ported from WnG-Apocryphal-Adversaries' tools/validate.mjs; this repo adds a
// JournalEntry pack (`!journal!` keys, embedded `pages`) and marks its folder
// documents only by `_key` (no `_Folder_` filename convention).
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import yaml from "js-yaml";

const root = fileURLToPath(new URL("..", import.meta.url));
const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);

// `!<collection>!<id>` for top-level documents; embedded docs use a longer key.
const KEY_COLLECTION = { Actor: "actors", Item: "items", JournalEntry: "journal" };
// Foundry generates 16-character ids, but hand-written mnemonic ones are valid
// too — what matters is that an id is alphanumeric, plausible, and unique, not
// that it is exactly 16 long.
const ID_PATTERN = /^[A-Za-z0-9]{8,16}$/;

const module = JSON.parse(await readFile(join(root, "module.json"), "utf8"));
const declared = module.packs ?? [];
if (declared.length === 0) fail("module.json", "declares no packs");

const srcDirs = (await readdir(join(root, "src", "packs"), { withFileTypes: true }))
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

for (const name of srcDirs) {
  if (!declared.some((p) => p.name === name)) {
    fail(`src/packs/${name}`, "has sources but is not declared in module.json packs");
  }
}

// Embedded collections whose documents carry their own `_id`.
const EMBEDDED = ["items", "pages", "effects"];

for (const pack of declared) {
  const dir = join(root, "src", "packs", pack.name);
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    fail(`module.json`, `pack "${pack.name}" is declared but src/packs/${pack.name} does not exist`);
    continue;
  }

  for (const entry of entries.filter((e) => e.isDirectory())) {
    fail(`src/packs/${pack.name}/${entry.name}/`, "is a subdirectory — compilePack does not recurse, these documents would be dropped; keep sources flat");
  }

  const files = entries
    .filter((e) => e.isFile() && /\.ya?ml$/.test(e.name))
    .map((e) => e.name)
    .sort();
  if (files.length === 0) fail(`src/packs/${pack.name}`, "contains no YAML sources");

  const seen = new Map();

  for (const file of files) {
    const where = `src/packs/${pack.name}/${file}`;
    let doc;
    try {
      doc = yaml.load(await readFile(join(dir, file), "utf8"));
    } catch (err) {
      fail(where, `is not valid YAML — ${err.message.split("\n")[0]}`);
      continue;
    }
    if (doc === null || typeof doc !== "object" || Array.isArray(doc)) {
      fail(where, "does not contain a single document mapping");
      continue;
    }
    if (!doc.name) fail(where, "has no `name`");

    const id = doc._id;
    if (typeof id !== "string" || !ID_PATTERN.test(id)) {
      fail(where, `has an invalid \`_id\` (${JSON.stringify(id)}) — expected 16 alphanumeric characters`);
    } else if (seen.has(id)) {
      fail(where, `reuses \`_id\` ${id}, already used by ${seen.get(id)}`);
    } else {
      seen.set(id, file);
    }

    // A folder document is `type: <DocumentClass>` + `!folders!<id>`; a content
    // document carries the pack's own collection instead.
    const isFolder = doc._key?.startsWith("!folders!");
    const collection = isFolder ? "folders" : KEY_COLLECTION[pack.type];
    if (!collection) {
      fail(`module.json`, `pack "${pack.name}" has unsupported type "${pack.type}"`);
    } else if (typeof id === "string" && doc._key !== `!${collection}!${id}`) {
      fail(where, `has \`_key\` ${JSON.stringify(doc._key)} — expected "!${collection}!${id}"`);
    }

    for (const embeddedName of EMBEDDED) {
      const docs = doc[embeddedName];
      if (!Array.isArray(docs)) continue;
      const embedded = new Set();
      for (const item of docs) {
        if (typeof item?._id !== "string" || !ID_PATTERN.test(item._id)) {
          fail(where, `embedded ${embeddedName} entry ${JSON.stringify(item?.name ?? "(unnamed)")} has an invalid \`_id\``);
        } else if (embedded.has(item._id)) {
          fail(where, `embedded ${embeddedName} reuse \`_id\` ${item._id}`);
        } else {
          embedded.add(item._id);
        }
      }
    }
  }

  console.log(`src/packs/${pack.name}: ${files.length} sources, ${seen.size} unique ids`);
}

if (errors.length > 0) {
  console.error(`\n${errors.length} problem(s) found:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log("\nAll pack sources look good.");
