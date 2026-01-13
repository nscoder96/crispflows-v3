# Website Rebuild Plan - CrispFlows

> Focus: Alleen "doeners" (hoveniers, aannemers, bouwbedrijven)
> Segmentatie: Bedrijfsgrootte (1-5 vs 5+ personeel)

---

## Huidige Situatie

```
Homepage (/)
├── "Voor de Doeners" → /aannemers
└── "Voor de Scalers" → /agencies (VERVALT)
```

**Probleem:** Agency-focus past niet meer bij de strategie. De focus ligt 100% op de bouw- en groensector.

---

## Nieuwe Situatie

```
Homepage (/)
├── "ZZP / Klein team" (1-5 personeel) → /zzp
└── "MKB / Groeiend bedrijf" (5+ personeel) → /mkb
```

**Beide routes spreken dezelfde sector aan (hoveniers, aannemers, bouw), maar met andere:**
- Pijnpunten
- Taal en toon
- Oplossingshoek
- Voorbeelden

**Beslissingen:**
- URL's: `/zzp` en `/mkb`
- /aannemers: wordt verwijderd (homepage is nu de main page)
- /agencies: wordt verwijderd
- Trust Strip: identiek voor beide pagina's
- Founder foto: bestaande of van computer

---

## Vergelijking Doelgroepen

| Aspect | 1-5 personeel (Versie A) | 5+ personeel (Versie B) |
|--------|--------------------------|-------------------------|
| **Hoofdpersoon** | De ondernemer zelf | Kantoorteam / binnendienst |
| **Pijnpunt** | Avonden/weekenden kwijt aan admin | Kantoor is bottleneck voor groei |
| **Emotie** | "Ik wil mijn tijd terug" | "Ik wil kunnen schalen" |
| **Oplossing** | Persoonlijke tijdsbesparing | Team-efficiëntie, snelheid |
| **Offerte-angle** | Jij maakt offertes in 2 min | Je team stuurt dezelfde dag |
| **Toon** | Informeel, "jij" | Zakelijker, "je bedrijf" |
| **Audit duur** | 30 minuten | 45 minuten |
| **Key metric** | 10+ uur/week besparen | 60-70% automatiseerbaar |

---

## Nieuwe Website Structuur

### Optie A: Twee losse pagina's

```
/
├── page.js                    # Homepage met keuze
├── /zzp
│   └── page.js                # Landingspagina versie A
├── /mkb
│   └── page.js                # Landingspagina versie B
└── /aannemers (redirect naar /)
```

**Voordeel:** Duidelijke scheiding, aparte URL's voor marketing
**Nadeel:** Dubbel onderhoud

### Optie B: Eén pagina met dynamische content

```
/
├── page.js                    # Homepage met keuze
└── /[segment]
    └── page.js                # Dynamische pagina op basis van segment
```

**Voordeel:** Eén codebase
**Nadeel:** Complexer, minder flexibel

### Optie C: Eén hoofdpagina met toggle (AANBEVOLEN)

```
/
├── page.js                    # Homepage met keuze
└── /aannemers
    └── page.js                # Landingspagina met optionele toggle
                               # of query param ?size=klein|groot
```

**Voordeel:** Simpel, één URL voor SEO, toggle voor personalisatie
**Nadeel:** Minder gerichte URL's

---

## Aanbevolen Aanpak: Optie A

Twee duidelijke routes met eigen identiteit:

### Route 1: `/zzp`
- **URL:** crispflows.nl/zzp
- **Copy:** Versie A (WEBSITE-COPY-HOVENIERS.md)
- **Hero:** "Bespaar 10+ uur per week op administratie"
- **Doelgroep:** ZZP'ers, kleine teams (1-5 personen)

### Route 2: `/mkb`
- **URL:** crispflows.nl/mkb
- **Copy:** Versie B (WEBSITE-COPY-HOVENIERS-B.md)
- **Hero:** "Laat je kantoorteam doen waar ze écht goed in zijn"
- **Doelgroep:** Bedrijven met kantoorpersoneel (5+ personen)

### Homepage: `/`
- Split-screen keuze (zoals nu, maar andere labels)
- Links: "1-5 medewerkers" → /zzp
- Rechts: "5+ medewerkers" → /mkb

---

## Te Bouwen / Aanpassen

### 1. Homepage (/) - AANPASSEN
**Bestand:** `src/app/page.js`

| Huidig | Nieuw |
|--------|-------|
| "Voor de Doeners" | "1-5 medewerkers" |
| "BOUW & GROEN" | "VOOR KLEINE TEAMS" |
| "Ik wil minder kantoorwerk" | "Ik wil mijn tijd terug" |
| Link naar /aannemers | Link naar /zzp |
| | |
| "Voor de Scalers" | "5+ medewerkers" |
| "AGENCIES & CREATORS" | "VOOR GROEIENDE BEDRIJVEN" |
| "Ik wil schalen zonder personeel" | "Ik wil mijn kantoor versterken" |
| Link naar /agencies | Link naar /mkb |

### 2. Kleinbedrijf pagina - NIEUW
**Bestand:** `src/app/zzp/page.js`

Secties (op basis van Versie A copy):
1. Hero - "Bespaar 10+ uur per week"
2. Probleemherkenning - "Herken je dit?" (4 pijnpunten)
3. Oplossing - Offertegenerator + andere tools
4. Audit Aanbod - "Jouw gratis AI-audit" (30 min)
5. Waarom CrispFlows - Founder story
6. FAQ - 8 vragen
7. CTA Herhaling - "Klaar om tijd terug te winnen?"
8. Footer

### 3. Groeibedrijf pagina - NIEUW
**Bestand:** `src/app/mkb/page.js`

Secties (op basis van Versie B copy):
1. Hero - "Laat je kantoorteam doen waar ze écht goed in zijn"
2. Probleemherkenning - "Je kantoorteam is goud waard" (4 pijnpunten)
3. Oplossing - Snelle offertes + transformatie-tabel
4. Audit Aanbod - "Jouw gratis AI-audit" (45 min)
5. Waarom CrispFlows - Founder story
6. FAQ - 8 vragen
7. CTA Herhaling - "Geef je kantoorteam hun werk terug"
8. Footer

### 4. Agencies pagina - VERWIJDEREN
**Bestand:** `src/app/agencies/` → DELETE

### 5. Oude aannemers pagina - REDIRECT of VERWIJDEREN
**Optie A:** Redirect /aannemers → /
**Optie B:** Verwijderen (als er geen SEO waarde is)

---

## Gedeelde Componenten

### Bestaand (herbruikbaar)
- `Footer.js` - Aanpassen met nieuwe CTA tekst
- `FAQItem` component - Hergebruiken
- Calendly integratie - Behouden
- Trust Strip - Behouden

### Nieuw te maken
- `HeroSection.js` - Herbruikbaar met props voor tekst
- `ProblemSection.js` - 4 pijnpunten met iconen
- `SolutionSection.js` - Offertegenerator uitleg
- `AuditSection.js` - Wat zit er in de audit
- `FounderSection.js` - Aangepaste versie huidige
- `FAQSection.js` - Wrapper voor FAQ items
- `CTASection.js` - Herhaling van CTA

---

## Implementatie Stappenplan

### Fase 1: Voorbereiding
- [ ] Backup maken van huidige website
- [ ] Beslissen over URL-structuur (kleinbedrijf/mkb of anders?)
- [ ] Bestaande aannemers/concept pagina reviewen voor bruikbare code

### Fase 2: Shared Components
- [ ] HeroSection component maken
- [ ] ProblemSection component maken
- [ ] SolutionSection component maken
- [ ] AuditSection component maken
- [ ] FounderSection component updaten
- [ ] FAQSection component maken
- [ ] CTASection component maken

### Fase 3: Kleinbedrijf Pagina
- [ ] Route aanmaken: /zzp
- [ ] Alle secties implementeren met Versie A copy
- [ ] Styling consistent met huidige design
- [ ] Testen op mobile/desktop

### Fase 4: Groeibedrijf Pagina
- [ ] Route aanmaken: /mkb
- [ ] Alle secties implementeren met Versie B copy
- [ ] Styling consistent met huidige design
- [ ] Testen op mobile/desktop

### Fase 5: Homepage Aanpassen
- [ ] Labels en teksten updaten
- [ ] Links aanpassen naar nieuwe routes
- [ ] Eventueel visuele aanpassingen

### Fase 6: Cleanup
- [ ] /agencies verwijderen
- [ ] /aannemers redirect of verwijderen
- [ ] /aannemers/concept verwijderen
- [ ] Ongebruikte components opruimen

### Fase 7: Testing & Launch
- [ ] Alle links testen
- [ ] Calendly integratie testen
- [ ] Mobile responsiveness checken
- [ ] Lighthouse check (performance, SEO)
- [ ] Live zetten

---

## Beslissingen (Afgerond)

| Vraag | Beslissing |
|-------|-----------|
| URL-structuur | `/zzp` en `/mkb` |
| /aannemers | Verwijderen (homepage is main page) |
| /agencies | Verwijderen |
| Trust Strip | Identiek voor beide pagina's |
| Founder foto | Bestaande gebruiken of van computer |
| Testimonials | 3 stuks uitgeschreven (zie hieronder) |

---

## Testimonials

### Testimonial 1: Kleine hovenier (voor /zzp pagina)

> *"Het offerteproces is enorm versneld. Soms is er nog een kleine aanpassing nodig, maar niet meer dan dat. Ik ben in een fractie van de tijd klaar."*
> — Hovenier, ZZP

### Testimonial 2: Groter bedrijf (voor /mkb pagina)

> *"Met vier teams in dienst was administratie een volle dagtaak. Nu kunnen aantekeningen van een schouw direct worden omgezet in een basisofferte. Dat scheelt ons meer dan 30 minuten per offerte."*
> — Hoveniersbedrijf, 4 teams

### Testimonial 3: Audit-ervaring (voor beide pagina's)

> *"Ze namen de tijd om echt te begrijpen hoe wij werken. We hebben op dit moment nog niet de ruimte om te implementeren, maar dit staat zeker op de planning voor eind 2026."*
> — Aannemersbedrijf

---

## Tijdsinschatting

| Fase | Geschatte inspanning |
|------|---------------------|
| Voorbereiding | Klein |
| Shared Components | Medium |
| Kleinbedrijf Pagina | Medium |
| Groeibedrijf Pagina | Medium |
| Homepage Aanpassen | Klein |
| Cleanup | Klein |
| Testing | Klein |

---

**Volgende stap:** Beslissing nemen over open vragen, daarna starten met Fase 1.
