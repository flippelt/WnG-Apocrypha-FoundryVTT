# Editable pack sources

This folder holds the **editable source** for the module's compendium packs.
Each subfolder mirrors a pack declared in `module.json`:

| Source folder | Compendium pack | Type |
| --- | --- | --- |
| `an-abundance-of-apocrypha-items/` | Items (archetypes, talents, wargear, …) | Item |
| `an-abundance-of-apocrypha-journals/` | Journals | JournalEntry |
| `an-abundance-of-apocrypha-actors/` | Actors (NPC stat blocks) | Actor |

## Workflow

The distributable packs under `../../packs/` are LevelDB databases (Foundry
v11+) and are not meant to be hand-edited. Instead:

1. **Extract once** (on the Foundry host, Linux, or WSL — anywhere the LevelDB
   packs open):
   ```
   npm install
   npm run unpack
   ```
   This fills these folders with one YAML file per document.

2. **Edit the YAML** here — add archetypes, ascension packages, etc.

3. **Rebuild** the distributable packs:
   ```
   npm run pack
   ```

4. **Verify in Foundry** — the Wrath & Glory archetype schema references
   talents and wargear by id, so always load the module once to confirm the
   compendium opens cleanly.

Until `npm run unpack` has been run, these folders are empty placeholders.
