# PokéTrainer AR Experience

## Concept

De **PokéTrainer AR Experience** is een kleine web‑AR game waarin je zelf een Pokémon‑trainer wordt.  
Met **face tracking** kan je een virtuele trainer‑pet dragen met een pikachu op je schouder en met **image tracking** vang je een Pokémon door verschillende kaarten (markers) te scannen.  
Elke kaart stelt een item of moment uit het spel voor: aanval, potion, pokéball en pokédex.

## Werking

### Face tracking (face.html)

- Zet automatisch een trainer‑pet op je hoofd en een pikachu op je schouder.
- Met een knop kan je wisselen tussen twee stijlen petten.
- Gebruikte anchors:
  - **151:** bovenkant voorhoofd (voor pet)
  - **288:** zijkant kaak (voor kleine Pikachu‑buddy)

### Image tracking (image.html)

- 4 markers in vaste volgorde:
  1. **Pikachu kaart** – aanvallen
  2. **Potion kaart** – genezing
  3. **Pokéball kaart** – vangen
  4. **Pokédex kaart** – registratie
- Iedere marker toont een bijhorend 3D‑model en aangepaste instructies.
- Extra knoppen: Continue Exploring (andere Pokémon zoeken), Reset Pokemon (Opnieuw beginnen) en Download Markers.

## 3D‑modellen

Alle modellen komen van Sketchfab:

- **Pikachu** – https://sketchfab.com/3d-models/pikachu-8a42658573e94468ace3f0af195f3721
- **Pokéball** – https://sketchfab.com/3d-models/pokemon-basic-pokeball-9b29539199c14ddea4de7776c4d758df
- **Potion** – https://sketchfab.com/3d-models/pokemon-potion-d9926d50667a411a81345799befb377e
- **Pokédex** – https://sketchfab.com/3d-models/low-poly-pokedex-pokemon-4801739ba36e4774af5d2b84a7f70b81
- **Trainer‑caps** – Geen attributie nodig

## Techniek

- **Frameworks:** A‑Frame 1.7.1 + MindAR 1.2.5
- **Codeertalen:** html, css, js
- **Tracking types:** mindar‑face en mindar‑image

---

**Gemaakt door:** Joran Vreye  
**Vak:** Digital Product Studio 2
**Academiejaar:** 2025 – 2026
