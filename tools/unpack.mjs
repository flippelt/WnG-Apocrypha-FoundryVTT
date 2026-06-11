// Extract the Foundry LevelDB compendium packs into editable YAML sources.
//
// Run this ONCE in an environment where the packs open (the Foundry host
// machine, Linux, or WSL). After that, edit the YAML under src/packs/<name>/
// and rebuild the distributable packs with `npm run pack`.
//
//   npm install
//   npm run unpack
//
import { extractPack } from "@foundryvtt/foundryvtt-cli";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const module = JSON.parse(await readFile(join(root, "module.json"), "utf8"));

for (const pack of module.packs ?? []) {
  const src = join(root, pack.path);
  const dest = join(root, "src", "packs", pack.name);
  console.log(`Unpacking ${pack.name}\n  ${src}\n  -> src/packs/${pack.name}`);
  await extractPack(src, dest, { yaml: true });
}

console.log("Done. Editable sources are under src/packs/.");
