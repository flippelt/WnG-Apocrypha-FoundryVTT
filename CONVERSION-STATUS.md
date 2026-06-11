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
| Journals | 173 (incl. 123 archetype lore journals) |

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

### 3. Archetype journals — ✅ linked

Every archetype that lacked a lore journal now has one — **123 created** from
the PDF v9 flavour text, filed in the **Archetypes** folder and linked via
`system.journal`. **178 of 181** archetypes are linked (journals 46 → 169
entries). The new journals carry the narrative text; the original 32 also embed
a full stat-block table.

## Remaining for 1.0

- [ ] **Storm Guardian** and **Windrider** journals — no dedicated section was
  found in the PDF v9 to auto-extract; create and link them manually.
- [ ] *(polish, optional)* Add the stat-block HTML table to the 123 new lore
  journals, for parity with the original 32 (the archetype sheet already shows
  the stats, so this is cosmetic).
- [ ] **Verify "Sainthood"** — it appears indented under *Blessed by the
  Emperor* in the PDF TOC, so it is most likely a sub-section rather than a
  separate ascension package; confirm nothing is missing.

Already complete: all **139** PDF archetypes · all ascension packages ·
companions & familiars · Chapter/Legion options · talents · psychic & Navigator
powers · wargear · species · factions · NPC stat blocks.

### Out of scope (by design — not a 1.0 blocker)

- **Vehicles.** The PDF's Vehicles appendix (pp. 483–503) and the jetbikes /
  bikes / aircraft referenced by 8 archetypes reproduce official **Church of
  Steel** content. They are **referenced, not copied** (see §1), to avoid
  redistributing Games Workshop / Cubicle 7 IP.

**When the boxes above are checked, tag `v1.0`.**

## Workflow

Edit the YAML under `src/packs/`, then `npm run pack` to rebuild the LevelDB
packs, and reload the module in Foundry to verify (the archetype schema
references talents and wargear by id). See [README](README.md#development) and
[src/packs/README.md](src/packs/README.md).
