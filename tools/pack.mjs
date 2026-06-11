// Compile the editable YAML sources under src/packs/<name>/ back into the
// distributable Foundry LevelDB compendium packs under packs/.
//
//   npm run pack
//
// Always re-open the module in Foundry afterwards to confirm the compendium
// loads — the Wrath & Glory archetype schema references talents and wargear
// by id, so a bad reference only surfaces at load time.
import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const module = JSON.parse(await readFile(join(root, "module.json"), "utf8"));

for (const pack of module.packs ?? []) {
  const src = join(root, "src", "packs", pack.name);
  const dest = join(root, pack.path);
  try {
    await access(src);
  } catch {
    console.warn(`Skipping ${pack.name}: no sources at src/packs/${pack.name} (run \`npm run unpack\` first).`);
    continue;
  }
  console.log(`Packing src/packs/${pack.name}\n  -> ${dest}`);
  await compilePack(src, dest, { yaml: true });
}

console.log("Done. Distributable packs under packs/ are up to date.");
