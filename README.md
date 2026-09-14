# An Abundance of Apocrypha for Foundry VTT

[![Release](https://img.shields.io/github/v/release/flippelt/WnG-Apocrypha-FoundryVTT)](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT/releases) ![Foundry](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fflippelt%2FWnG-Apocrypha-FoundryVTT%2Fmain%2Fmodule.json&query=%24.compatibility.verified&prefix=v&label=Foundry&color=fe6a1f) [![CI](https://img.shields.io/github/actions/workflow/status/flippelt/WnG-Apocrypha-FoundryVTT/ci.yml?label=CI)](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT/actions/workflows/ci.yml) [![Last commit](https://img.shields.io/github/last-commit/flippelt/WnG-Apocrypha-FoundryVTT)](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT/commits) [![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT/blob/main/LICENSE)

A player-facing content module for **Wrath & Glory** (Cubicle 7) on Foundry VTT.
It adapts Nathan Dowdell's *An Abundance of Apocrypha* and its expansions —
**with his permission**.

Archetypes, species, talents, psychic powers and wargear, wired into the
system's character generator, plus NPC stat blocks and journals.

**181 archetypes.** 18 ascension packages, 249 talents, 199 psychic powers,
54 NPC stat blocks and 173 journals, plus the armoury, in three compendia.

> Compatible with Foundry VTT **v11–v14**, verified on **v14**. Module id:
> `wng-apocrypha`.
>
> Wrath & Glory **8.0.0+ is Foundry v14 exclusive**, so a current system install
> is on v14. Older Foundry generations still work with correspondingly older
> system releases.
>
> Companion to
> [An Abundance of Apocryphal Adversaries](https://github.com/flippelt/WnG-Apocryphal-Adversaries)
> (threats, war machines, named warlords).

## Install

Listed in the Foundry package browser:

1. In Foundry, open **Add-on Modules** → **Install Module**.
2. Search **An Abundance of Apocrypha**, or install from
   [foundryvtt.com/packages/wng-apocrypha](https://foundryvtt.com/packages/wng-apocrypha).
3. Enable **Wrath and Glory - An Abundance of Apocrypha** in the world.
4. Open the **An Abundance of Apocrypha** folder in the compendium directory.
   Archetypes and wargear feed the character generator; drag NPC actors onto
   the canvas; journals hold the lore.

Requires the [Wrath & Glory](https://github.com/moo-man/WrathAndGlory-FoundryVTT)
system (`wrath-and-glory`, 4.0.1+, verified on 8.1.2).

## Recommended companions

These are listed as `recommends` in `module.json`, so this module **installs and
runs without them**. Without them, some icons and linked items break:

| Module | What it supplies | Without it |
| --- | --- | --- |
| **`wng-core`** | Icons and the official items the actors and journals link to | Links show as unlinked; many icons missing |
| **`wng-forsaken`**, **`wng-records1`**, **`wng-xenos`** | A handful of extra item links | Those few links unlinked |
| **`wng-cos`** (Church of Steel) | Vehicles for some archetypes | Those vehicles are missing |

Install them for the full, linked experience.

## Contents

| Content | Count |
| --- | ---: |
| Archetypes | 181 |
| Ascension packages | 18 |
| Talents | 249 |
| Psychic powers | 199 |
| Abilities | 313 |
| Weapons / ammo / upgrades | 401 / 24 / 30 |
| Gear / armour / augmetics | 121 / 74 / 35 |
| Keywords | 176 |
| Species | 29 |
| Factions | 15 |
| NPC stat blocks | 54 |
| Journals | 173 |

Numbers come from the unpacked pack sources. The conversion diary lives in
[CONVERSION-STATUS.md](CONVERSION-STATUS.md).

## Development

You do not need this section to play. The compendium ships as LevelDB under
`packs/` (not meant to be hand-edited). Editable source lives under `src/packs/`
as YAML, compiled with the
[Foundry CLI](https://github.com/foundryvtt/foundryvtt-cli).

```bash
npm install
npm run unpack
```

Edit the YAML under `src/packs/`. Sources must stay **flat** in each pack
directory — `compilePack` does not recurse into subfolders. See
[src/packs/README.md](src/packs/README.md).

```bash
npm run validate
npm run pack
```

`validate` checks YAML parse, unique 16-character ids, `_key` agreement, and the
flat layout. Pull requests run `validate` + `pack` via
[CI](.github/workflows/ci.yml). Reload the module in Foundry after packing to
confirm the compendium loads.

Pack and unpack run on macOS, Linux, and Windows. LevelDB files are marked
binary in `.gitattributes` so Git does not corrupt them with line-ending
conversion.

### Releasing

Bump `version` (and the `download` tag) in `module.json`, then create a GitHub
Release on a `vX.Y.Z` tag. The
[release workflow](.github/workflows/release.yml) builds `wng-apocrypha.zip`,
attaches it, refreshes the `latest` manifest, and (if the `FVTT_RELEASE_TOKEN`
secret is set) registers with the Foundry Package Release API. The workflow can
also be run manually against an existing tag, with a dry-run option.

## Related modules

| Module | Role |
| --- | --- |
| [An Abundance of Apocryphal Adversaries](https://github.com/flippelt/WnG-Apocryphal-Adversaries) | Bestiary of threats from Nathan's companion series |
| [Wrath & Glory](https://github.com/moo-man/WrathAndGlory-FoundryVTT) | The game system this module requires |

## Authors

- [@flippelt](https://github.com/flippelt)
- [Nathan Dowdell](https://twitter.com/n01h3r3) — original author of *An Abundance of Apocrypha*
- [Owen May](https://github.com/Vulcan98)

## Contributors

- [Alexandru "Ashendar" Dracea](https://github.com/adracea)
- [Michael Mars](https://twitter.com/MichaelMarsRPG)

## License

This module's own packaging/code is released under the **MIT License** — see
[LICENSE](LICENSE).

The game content it adapts (*An Abundance of Apocrypha*) is the homebrew of
**Nathan Dowdell**, converted here **with his permission**. Warhammer 40,000 and
Wrath & Glory are the intellectual property of **Games Workshop** and
**Cubicle 7**; this is an unofficial, non-commercial fan project, not affiliated
with or endorsed by them. The MIT license covers only this module's own
packaging/code, not that third-party content.
