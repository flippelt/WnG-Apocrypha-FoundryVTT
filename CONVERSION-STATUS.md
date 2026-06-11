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
| Archetypes | **185** (incl. species/build variants) |
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

### 1. The 9 `(NYI)` archetype stubs — all but one blocked on a vehicle/mount

These archetypes are fully statted **except** they reference a mount/vehicle
item that does not exist yet (the wargear entry is a `type: generic` placeholder
named `… (NYI)`). The module has **no `vehicle` item type**, so closing these
requires deciding how mounts/vehicles are represented and then authoring them.

| Archetype | Tier | Faction | Missing item |
| --- | --- | --- | --- |
| Windrider | 1 | Aeldari | Aeldari Jetbike |
| Reaver | 2 | Drukhari | Reaver Jetbike |
| Speed Freek | 2 | Ork | Ork Warbike |
| Hernkyn Pioneer (Kin) | 2 | Leagues of Votann | Magna-Coil Bike |
| Hernkyn Pioneer (Ironkin) | 2 | Leagues of Votann | Magna-Coil Bike |
| Aeronautica Pilot | 2 | Imperial Navy | Thunderbolt Fighter, Lightning Interceptor |
| Crimson Hunter Aspect Warrior | 3 | Aeldari | Nightshade Interceptor |
| Shining Spear Aspect Warrior | 3 | Aeldari | Aeldari Jetbike |
| Wraithblade | 5 | Aeldari | *no generic-wargear placeholder — blocker differs; needs review* |

Distinct vehicles/mounts to create: **Aeldari Jetbike** (Windrider + Shining
Spear), **Reaver Jetbike**, **Ork Warbike**, **Magna-Coil Bike**, and the
aircraft **Thunderbolt Fighter**, **Lightning Interceptor**, **Nightshade
Interceptor**. Stat blocks come from the PDF v9 *Vehicles* section.

### 2. Vehicles subsystem (the real blocker for §1)

There is no vehicle representation in the module. Options, in rough order of
effort:

- **Minimal:** model each mount/vehicle as a `gear`/`weapon` item carrying its
  weapons and the relevant traits, then point each NYI archetype's wargear at
  it. Unblocks the 9 archetypes with the least machinery.
- **Full:** model vehicles as Actors (or a dedicated type) with their own
  Cognis/Lance/Mounted traits. Closer to the PDF but much more work and depends
  on what `wng-core` supports.

### 3. Spot fixes found while auditing

- **Primaris Aggressor** has `tier: 41` (typo for `4`) in one of its two
  entries — should be corrected.
- Several archetypes appear two or three times (e.g. Hearthkyn Warrior, Storm
  Guardian, Slaangor). Most are legitimate **species/build variants**; worth a
  pass to confirm none are accidental duplicates.
- **Right of Duplessence** ascension is likely a typo for **Rite of
  Duplessence**.

## Suggested plan (priority)

1. **Decide the vehicle model** (minimal vs full) — everything in §1 depends on
   it.
2. **Author the 7 distinct vehicles/mounts** from the PDF and wire them into the
   8 vehicle-dependent NYI archetypes.
3. **Investigate the Wraithblade stub** (different blocker) and close it.
4. **Apply the spot fixes** in §3.
5. Optional polish: confirm the variant duplicates, sweep names against the
   PDF v9 table of contents for anything genuinely absent.

## Workflow

Edit the YAML under `src/packs/`, then `npm run pack` to rebuild the LevelDB
packs, and reload the module in Foundry to verify (the archetype schema
references talents and wargear by id). See [README](README.md#development) and
[src/packs/README.md](src/packs/README.md).
