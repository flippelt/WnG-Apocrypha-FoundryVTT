# Conversion status — *An Abundance of Apocrypha* → Foundry VTT

Status of the Foundry compendium content, generated from the **actual unpacked
pack sources** (`src/packs/`), not from a guess. An earlier revision of this
file was written before the LevelDB packs could be opened and badly
**underestimated** the module — almost everything it marked "to do" was in fact
already present. This version reflects what is really in the packs.

> How to regenerate the raw numbers: `npm run unpack`, then count by
> `type:` field under `src/packs/an-abundance-of-apocrypha-items/`.

## Headline

The module is **substantially complete**. The compendium contains:

| Content | In packs |
| --- | --- |
| Archetypes | **181** (incl. species/build variants) |
| Ascension packages | **18** |
| Talents | 249 |
| Psychic powers | 199 |
| Abilities | 313 |
| Weapons / ammo / upgrades | 401 / 24 / 30 |
| Gear / armour / augmetics | 121 / 74 / 35 |
| Keywords | 176 |
| Species | 29 |
| Factions | 15 |
| Actors (NPC stat blocks) | 64 |
| Journals | 50 |

All the major factions, species, talents, psychic powers, gear and the vast
majority of archetypes and ascension packages are **done**. The remaining work
is narrow and is listed below.

## Remaining work

### 1. The 9 `(NYI)` archetype stubs — ✅ resolved

All nine `(NYI)` stubs have been closed (the `(NYI)` marker is removed from
their names).

**Eight were blocked on a vehicle/mount.** In *An Abundance of Apocrypha* these
archetypes don't carry homebrew vehicle stats — they **reference vehicles from
the official *Church of Steel* supplement**. Reproducing those stat blocks would
redistribute Games Workshop / Cubicle 7 content, which this module does not do.
So each placeholder is now a **citation**, not a copy:

| Archetype | Tier | Vehicle reference |
| --- | --- | --- |
| Windrider | 1 | Aeldari Jetbike (Church of Steel, p. 92) |
| Reaver | 2 | Reaver Jetbike (Church of Steel, p. 100) |
| Speed Freek | 2 | Ork Warbike (Church of Steel) |
| Hernkyn Pioneer (Kin) | 2 | Magna-Coil Bike (Church of Steel) |
| Hernkyn Pioneer (Ironkin) | 2 | Magna-Coil Bike (Church of Steel) |
| Aeronautica Pilot | 2 | Thunderbolt Fighter / Lightning Interceptor (Church of Steel) |
| Crimson Hunter Aspect Warrior | 3 | Nightshade Interceptor (Church of Steel, p. 95) |
| Shining Spear Aspect Warrior | 3 | Aeldari Jetbike (Church of Steel, p. 92) |

The **Autarch** (T5 Aeldari), which offers an Aeldari Jetbike as optional
wargear, was updated to the same citation.

**The ninth, Wraithblade, was a different case** — its primary weapon was simply
missing. It now grants its **Force Shield** plus a choice of **Ghostsword or
Ghostaxe** (both already in the compendium), mirroring the Wraithguard's wargear
structure.

> Note on vehicles: W&G models vehicles as **Actors** (`type: vehicle`), not
> Items, and an archetype's `wargear` can only reference Items — so a vehicle
> cannot be granted directly by an archetype regardless. Citing the source book
> is both the license-clean and the mechanically-correct approach; anyone who
> owns *Church of Steel* adds the vehicle Actor themselves.

### 2. Spot fixes

- ✅ **Primaris Agressor** `tier: 41` corrected to `4`.
- ✅ **Right of Duplessence** ascension renamed to **Rite of Duplessence** (the
  spelling used throughout the PDF v9, e.g. p. 217).
- ✅ **Duplicate audit done.** Of 29 names that appear more than once, 25 are
  legitimate species/build variants (distinct content). Four had a content-
  identical accidental copy — the same gameplay data with only a
  `flags.core.sourceId` (Foundry's "duplicated-from" stamp) differing. The
  copies were removed (kept the originals): **Beast Snagga Boy**, **Hearthkyn
  Warrior (Ironkin)**, **Slaangor**, **Storm Guardian** — each now has its two
  genuine variants. (Archetype count 185 → 181.)
- ✅ **"Agressor" → "Aggressor"** spelling fixed across all six affected
  documents: the two Primaris Aggressor archetypes, the Aggressor Imperative
  ability (×2), and the references to it in Bulwark/Conqueror Imperative.

## Suggested plan (priority)

1. Sweep names against the PDF v9 table of contents for anything genuinely
   absent or misspelled.

## Workflow

Edit the YAML under `src/packs/`, then `npm run pack` to rebuild the LevelDB
packs, and reload the module in Foundry to verify (the archetype schema
references talents and wargear by id). See [README](README.md#development) and
[src/packs/README.md](src/packs/README.md).
