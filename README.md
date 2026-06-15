# An Abundance of Apocrypha for Foundry VTT

A passion project, done in my free time, adapting the content of the incredible
**An Abundance of Apocrypha** and its expansions — by Nathan Dowdell — to the
**Wrath & Glory** system (Cubicle 7) for Foundry VTT.

> Compatible with Foundry VTT **v11–v14**. Module id: `wng-apocrypha`.

> ⚠️ **Recommended companion — `wng-core` (optional):** the bundled actors link
> their keywords, talents, weapons and abilities to the official **`wng-core`**
> content module, and use its icons. `wng-core` is **optional** — this module
> installs and runs without it — but **without `wng-core` those links won't
> resolve and many item icons will be missing**. The content is all still there;
> it just shows up "unlinked". Install `wng-core` for the full, linked experience.

## Status / Progress

See **[CONVERSION-STATUS.md](CONVERSION-STATUS.md)** for the full, detailed
checklist (PDF **v9** × compendium): every archetype and ascension package marked
✅ done / 🟡 stub / ❌ to do, plus a prioritized conversion plan.

**Highlights:**

- ✅ **Done:** factions, species & variants, talents, psychic powers, gear,
  weapons, armour, augmetics, keywords, NPC stat blocks, **185 archetypes** and
  **18 ascension packages** — the module is substantially complete.
- 🟡 **Remaining:** 9 `(NYI)` archetype stubs (Windrider, Reaver, Speed Freek,
  Hernkyn Pioneer ×2, Aeronautica Pilot, Crimson Hunter, Shining Spear,
  Wraithblade), 8 of which are blocked on a **vehicle/mount** item that the
  module does not model yet.
- ❌ **To do:** the **Vehicles** subsystem (no `vehicle` item type), which
  unblocks those stubs, plus minor spot fixes.

## Roadmap — *The Mekhanical Update*

### Part 1

- [x] All the new Factions
- [x] All the new Species and Variants
- [x] Update to Foundry V11

### Part 2

- [x] All the new Talents
- [x] All the new Psychic Powers
- [x] All the new Gear

### Part 3

- [ ] All the new Archetypes — *in progress (see CONVERSION-STATUS.md)*
- [ ] All the new Ascension Packages — *in progress*

## Contributing

Contributions are welcome! Please reach out to ask how you can help.

## Authors

- [@flippelt](https://www.github.com/flippelt)
- [Nathan Dowdell](https://twitter.com/n01h3r3) (original author of *An Abundance of Apocrypha*)
- [Owen May](https://github.com/Vulcan98)

## Contributors

- [Alexandru "Ashendar" Dracea](https://github.com/adracea)
- [Michael Mars](https://twitter.com/MichaelMarsRPG)

## Development

The compendium packs ship as LevelDB databases under `packs/`, which are not
meant to be hand-edited. The editable source lives under `src/packs/` as YAML,
with a small build step (the [Foundry CLI](https://github.com/foundryvtt/foundryvtt-cli))
to extract and recompile them:

```bash
npm install
npm run unpack   # LevelDB packs -> editable YAML in src/packs/ (run once)
# ...edit the YAML...
npm run pack     # YAML sources -> LevelDB packs
```

`npm run unpack` must be run in an environment where the packs open (the
Foundry host, Linux, or WSL). After editing, always reload the module in
Foundry to confirm the compendium loads — see [src/packs/README.md](src/packs/README.md).

### Releasing

`module.json` keeps a **fixed** `manifest` URL pointing at the moving `latest`
release (`releases/download/latest/module.json`) — never change it, or Foundry
installs stop seeing updates. The `download` URL points at a versioned release
tag.

To cut a release: bump `version` (and the `download` tag) in `module.json`, then
create a GitHub Release on that tag. The [Release workflow](.github/workflows/release.yml)
then builds `wng-apocrypha.zip`, attaches it plus `module.json` to the release,
refreshes the `latest` manifest, and — if the repository secret
`FVTT_RELEASE_TOKEN` (the Package Release Token from the package's
[foundryvtt.com](https://foundryvtt.com) page) is set — registers the release
with the Foundry Package Release API. The workflow can also be run manually
("Run workflow") against an existing tag, with a dry-run option.

## License

This module's own packaging/code is released under the **MIT License** — see
[LICENSE](LICENSE).

The game content it adapts (*An Abundance of Apocrypha*) is the homebrew of
**Nathan Dowdell**, converted here **with his permission**. Warhammer 40,000 and
Wrath & Glory are the intellectual property of **Games Workshop** and
**Cubicle 7**; this is an unofficial, non-commercial fan project, not affiliated
with or endorsed by them. The MIT license covers only this module's own
packaging/code, not that third-party content.
