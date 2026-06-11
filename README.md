# An Abundance of Apocrypha for Foundry VTT

A passion project, done in my free time, adapting the content of the incredible
**An Abundance of Apocrypha** and its expansions — by Nathan Dowdell — to the
**Wrath & Glory** system (Cubicle 7) for Foundry VTT.

> Compatible with Foundry VTT **v11–v12**. Module id: `wng-apocrypha`.

## Status / Progress

See **[CONVERSION-STATUS.md](CONVERSION-STATUS.md)** for the full, detailed
checklist (PDF **v9** × compendium): every archetype and ascension package marked
✅ done / 🟡 stub / ❌ to do, plus a prioritized conversion plan.

**Highlights (vs PDF v9):**

- ✅ **Done:** factions, species & variants, talents, psychic powers, gear,
  weapons, armour, augmetics, keywords, and many NPC stat blocks.
- 🟡 **In progress:** archetypes (~16 of 139) and ascension packages (7 of 16) —
  including started T'au Empire and Leagues of Votann.
- ❌ **To do:** most archetypes, the remaining ascension packages, and the new
  v9 sections (Vehicles, Navigators, Imperial Navy, Companions, new Astartes
  Chapters & Heretic Legions).

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

## License

This module's own packaging/code is released under the **MIT License** — see
[LICENSE](LICENSE).

The game content it adapts (*An Abundance of Apocrypha*) is the homebrew of
**Nathan Dowdell**, converted here **with his permission**. Warhammer 40,000 and
Wrath & Glory are the intellectual property of **Games Workshop** and
**Cubicle 7**; this is an unofficial, non-commercial fan project, not affiliated
with or endorsed by them. The MIT license covers only this module's own
packaging/code, not that third-party content.
