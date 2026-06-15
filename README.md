# An Abundance of Apocrypha for Foundry VTT

A passion project, done in my free time, adapting the content of the incredible
**An Abundance of Apocrypha** and its expansions — by Nathan Dowdell — to the
**Wrath & Glory** system (Cubicle 7) for Foundry VTT.

> Compatible with Foundry VTT **v11–v14**. Module id: `wng-apocrypha`.
>
> ⚠️ **Recommended companion — `wng-core` (optional):** the bundled actors link
> their keywords, talents, weapons and abilities to the official **`wng-core`**
> content module, and use its icons. `wng-core` is **optional** — this module
> installs and runs without it — but **without `wng-core` those links won't
> resolve and many item icons will be missing**. The content is all still there;
> it just shows up "unlinked". Install `wng-core` for the full, linked experience.

## Status / Progress

The module is **substantially complete**. See
**[CONVERSION-STATUS.md](CONVERSION-STATUS.md)** for the full breakdown, generated
from the actual unpacked pack sources (PDF **v9** × compendium).

**In the compendium:** 181 archetypes (incl. species/build variants), 18 ascension
packages, 249 talents, 199 psychic powers, 313 abilities, 401 weapons, 121 gear,
74 armour, 35 augmetics, 176 keywords, 29 species, 15 factions, **64 NPC stat
blocks**, and 173 journals.

- ✅ **Done:** factions, species & variants, talents, psychic powers, gear,
  weapons, armour, augmetics, keywords, NPC stat blocks, and **all 181 archetypes
  and 18 ascension packages**.
- ✅ **Vehicle-dependent archetypes resolved.** The nine former `(NYI)` stubs are
  closed. Eight reference vehicles from the official *Church of Steel* supplement,
  so they **cite** that source rather than reproducing Games Workshop / Cubicle 7
  stat blocks (license-clean); the ninth, Wraithblade, got its missing weapon.
  W&G models vehicles as Actors, so an archetype's wargear can't grant one
  directly anyway — anyone who owns *Church of Steel* adds the vehicle Actor.
- ✅ **Actor item links fixed (v1.0.1, [#37](https://github.com/flippelt/WnG-Apocrypha-FoundryVTT/issues/37)):**
  the bundled NPCs' keywords, talents, weapons and abilities now reference real
  compendia instead of broken world references (see the `wng-core` note above).

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
