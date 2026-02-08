# SEVEN music Website

Moderne, responsive Band-Website mit dynamischem Header, Material Design und vollständig lokalisierten Ressourcen.

## 🎸 Features

### Dynamischer Header
- **Versteckter Header**: Beim Laden der Seite ist der Header unsichtbar
- **Scroll-Aktivierung**: Ab 200px Scroll-Position erscheint der Header elegant
- **Logo-Animation**: 
  - Die Schallplatte (Record.svg) gleitet von links ein mit Rotation
  - Der SEVEN-Schriftzug (Text.svg) erscheint daneben
  - Beide Elemente animieren sich beim Scrollen in den Header

### Hero Section
- Großes, zentriertes Logo (Logo.svg) mit Float-Animation
- Instagram Quick-Link rechts (auf Mobile unten verschoben)
- Scroll-Indikator mit Bounce-Animation
- Responsive Layout für niedrige Viewports (Landscape Mobile)

### Next Gig Feature
- **Dynamische Anzeige** des nächsten öffentlichen Auftritts
- Lädt Daten aus `assets/data/gigs.json`
- Filtert automatisch nach Datum (nur zukünftige Gigs)
- Zeigt nur öffentliche Events (`type: "public"`)
- Optional: Ticket- und Info-Links
- Dezentes Design, das sich in die Seite einfügt

### Instagram Integration
- **DSGVO-konform**: Nutzer muss explizit zustimmen
- Consent wird in localStorage gespeichert
- 8 Instagram-Posts in responsivem Grid
- Lightbox2-Galerie für Vollbildansicht
- Custom Styling passend zum SEVEN-Design

### Design
- **Farbschema**: Schwarz/Gold (#EDAC00) - passend zum Logo
- **Schlichtes Design**: Minimalistisch und elegant
- **Material Design**: Moderne Cards mit Elevation und Hover-Effekten
- **Responsive**: Optimiert für alle Bildschirmgrößen
- **Barrierefreiheit**: WCAG 2.1 AA konform

### Sections
1. **Home**: Hero mit großem Logo und Instagram-Link
2. **Next Gig**: Dynamische Anzeige des nächsten Auftritts
3. **Über uns**: Band-Geschichte und Sound mit Bandfoto
4. **Instagram**: DSGVO-konforme Galerie mit 8 Posts
5. **Media**: Videos und Live-Mitschnitte (Platzhalter)
6. **Downloads**: Technical Rider, Stageplot, Pressekit für Veranstalter
7. **Kontakt**: Booking + Presse/Sonstiges E-Mail, Social Media

## 📁 Projektstruktur

```
material-website/website/
├── index.html              # Hauptseite
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── README.md               # Diese Datei
├── CNAME                   # Custom Domain für GitHub Pages
├── robots.txt              # SEO: Crawler-Anweisungen
├── sitemap.xml             # SEO: Sitemap
├── .htaccess               # Apache-Konfiguration
├── favicon.ico             # Browser-Icon
├── favicon.svg             # Modernes SVG-Favicon
├── apple-touch-icon.png    # iOS Home Screen Icon
├── web-app-manifest-*.png  # PWA Icons
├── site.webmanifest        # PWA Manifest
│
├── assets/                 # Alle Assets organisiert
│   ├── css/
│   │   └── styles.css      # Alle Styles inkl. Scroll-Effekte
│   ├── js/
│   │   └── script.js       # JavaScript für Interaktivität
│   ├── brand/              # Brand Assets (Logos)
│   │   ├── Logo.svg        # Komplettes Logo (Hero)
│   │   ├── Record.svg      # Schallplatten-Icon (Header)
│   │   └── Text.svg        # SEVEN Schriftzug (Header)
│   ├── images/             # Bilder (Bandfotos, Instagram)
│   │   ├── bandfoto.jpg    # Hauptbandfoto
│   │   ├── icons.svg       # SVG Sprite (Instagram Icon)
│   │   └── 0K0A*.JPG       # Instagram-Fotos (8 Stück)
│   ├── data/               # JSON-Daten
│   │   └── gigs.json       # Gig-Daten für Next Gig Feature
│   └── vendor/             # Externe Bibliotheken (lokal)
│       ├── bootstrap/
│       │   ├── css/
│       │   │   └── bootstrap.min.css
│       │   └── js/
│       │       └── bootstrap.bundle.min.js
│       ├── lightbox2/
│       │   ├── css/
│       │   │   └── lightbox.min.css
│       │   ├── js/
│       │   │   └── lightbox-plus-jquery.min.js
│       │   └── images/
│       │       ├── close.png
│       │       ├── loading.gif
│       │       ├── prev.png
│       │       └── next.png
│       ├── material-icons/
│       │   ├── material-icons.css
│       │   └── MaterialIcons-Regular.woff2
│       └── fonts/
│           ├── roboto.css
│           ├── roboto-300.woff2
│           ├── roboto-400.woff2
│           ├── roboto-500.woff2
│           ├── roboto-700.woff2
│           └── roboto-900.woff2
│
└── downloads/              # Downloads für Veranstalter
    ├── README.md           # Infos zu den Downloads
    ├── .gitkeep            # Platzhalter für Git
    ├── SEVEN_technical-rider.pdf
    ├── SEVEN_stageplot.pdf
    └── SEVEN_stageplot_detail.pdf
```

## 🚀 Verwendung

### Lokal testen
1. **Direkt öffnen**: `index.html` im Browser öffnen
2. **Live Server**: Mit VS Code Live Server für beste Erfahrung
3. **Python Server**: `python -m http.server 8000` im Projektordner

### Deployment

#### GitHub Pages
Die Website ist für GitHub Pages optimiert:
1. Repository auf GitHub erstellen
2. Alle Dateien hochladen
3. In Repository Settings → Pages → Source: `main` branch auswählen
4. Custom Domain `www.seven-music.de` in Settings konfigurieren
5. `CNAME`-Datei ist bereits vorhanden

#### Andere Hosting-Anbieter
- Alle Dateien auf Webserver hochladen
- `.htaccess` für Apache-Server ist vorhanden
- Keine serverseitige Verarbeitung nötig (statische Website)

## 🎯 Lokalisierte Ressourcen

**Keine externen CDN-Abhängigkeiten!**

Alle Bibliotheken, Fonts und Icons sind lokal gespeichert:
- ✅ Bootstrap 5.3.2 (CSS + JS)
- ✅ Material Icons (WOFF2)
- ✅ Google Fonts Roboto (5 Gewichte)
- ✅ Lightbox2 (CSS + JS + Images)

**Vorteile:**
- 🚀 Schnellere Ladezeiten (kein externes Laden)
- 🔒 Bessere Privatsphäre (keine Tracking durch CDNs)
- 📡 Funktioniert offline
- 🎯 DSGVO-konform (keine Datenübertragung an Dritte)

## 🎨 Anpassungen

### Next Gig aktualisieren
Bearbeite `assets/data/gigs.json`:

```json
{
  "gigs": [
    {
      "date": "2026-03-07",
      "time": "21:00",
      "venue": "Roter Hirsch, Restaurant & Club",
      "location": "Marktplatz 10, 48431 Rheine",
      "description": "Hutkonzert mit anschließender karaoke Party",
      "type": "public",
      "ticketUrl": "",
      "infoUrl": "https://www.roterhirsch.com/event/2026-03-07/"
    }
  ]
}
```

- `type`: "public" (wird angezeigt) oder "private" (wird versteckt)
- Automatische Filterung nach Datum
- Optional: `ticketUrl` und `infoUrl` für Buttons

### Instagram-Fotos aktualisieren
1. Neue Fotos in `assets/images/` hochladen
2. In `index.html` die Bildpfade und Captions anpassen (Zeile ~320-450)
3. Empfohlene Größe: 1080x1080px (Instagram-Format)

### Farben ändern
In `assets/css/styles.css` die CSS-Variablen anpassen:

```css
:root {
    --primary-gold: #EDAC00;    /* Hauptfarbe */
    --dark-gold: #C89000;       /* Dunklere Variante */
    --light-gold: #F5C842;      /* Hellere Variante */
    --black: #000000;
    --gray-dark: #1a1a1a;
    --gray-medium: #333333;
    --gray-light: #666666;
}
```

### Kontaktdaten anpassen
In `index.html` (Zeile ~485-505):
- **Booking**: booking@seven-music.de
- **Presse/Sonstiges**: info@seven-music.de
- **Instagram**: @7even.band

## 📥 Downloads für Veranstalter

Im Ordner `downloads/` sind folgende Dateien verfügbar:

1. **SEVEN_technical-rider.pdf**: Technische Anforderungen
2. **SEVEN_stageplot.pdf**: Bühnenplan (Übersicht)
3. **SEVEN_stageplot_detail.pdf**: Detaillierter Bühnenplan

Siehe `downloads/README.md` für Details.

## 🎯 SEO & Performance

### SEO-Optimierung
- ✅ Semantisches HTML5
- ✅ Meta-Tags (Title, Description, Keywords)
- ✅ Open Graph (Facebook, Twitter)
- ✅ Strukturierte Daten (JSON-LD Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt-Texte für alle Bilder
- ✅ Lokale Keywords (Münsterland, Münster, Emsdetten, Greven, Borghorst)

### Performance
- ✅ Lokale Ressourcen (keine CDN-Ladezeiten)
- ✅ Minifizierte CSS/JS
- ✅ WOFF2-Fonts (beste Kompression)
- ✅ Lazy Loading für Bilder
- ✅ Optimierte Animationen
- ✅ Keine unnötigen Dependencies

### Barrierefreiheit (WCAG 2.1 AA)
- ✅ Skip-Link für Screenreader
- ✅ ARIA-Labels und Roles
- ✅ Keyboard-Navigation
- ✅ Fokus-Indikatoren
- ✅ Ausreichende Kontraste
- ✅ Semantische HTML-Struktur
- ✅ Alt-Texte für alle Bilder
- ✅ Reduced Motion Support

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px - Volle Features
- **Tablet**: 576px - 768px - Angepasste Größen
- **Mobile**: < 576px - Kompakte Ansicht
- **Landscape Mobile**: max-height 600px - Optimiertes Layout

### Mobile Optimierungen
- Instagram-Icon unten statt mittig (kein Overlap mit Logo)
- Kompakteres Next Gig Design
- Angepasste Hero-Section für niedrige Viewports
- Touch-optimierte Buttons und Links

## 🎵 JavaScript Features

- **Smooth Scrolling**: Sanftes Scrollen zu Sections
- **Active Navigation**: Aktuelle Section wird im Menü hervorgehoben
- **Scroll-to-Top Button**: Erscheint ab 300px Scroll, stoppt vor Footer
- **Card Animations**: Fade-in beim Scrollen in den Viewport
- **Next Gig Loader**: Async/Await für JSON-Daten
- **Instagram Consent**: LocalStorage für DSGVO-Compliance
- **Lightbox2**: Galerie mit Custom Styling

## 🔧 Technologien

- **HTML5**: Semantisches Markup, Schema.org
- **CSS3**: Custom Properties, Flexbox, Grid, Animations
- **JavaScript (Vanilla)**: Keine Frameworks, pure Performance
- **Bootstrap 5.3.2**: Grid-System und Utilities (lokal)
- **Material Icons**: Google Material Icons (lokal)
- **Google Fonts Roboto**: 5 Gewichte (lokal)
- **Lightbox2**: Bildergalerie (lokal)

## 🌐 Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt
- Mobile Browser: ✅ Optimiert
- IE11: ⚠️ Nicht unterstützt (moderne Features)

## ✅ Changelog

### Version 2.0 (Februar 2026)
- ✅ Alle externen Ressourcen lokalisiert (Bootstrap, Fonts, Icons, Lightbox2)
- ✅ Next Gig Feature mit JSON-Datenquelle
- ✅ Instagram-Galerie mit DSGVO-Consent
- ✅ Lightbox2 für Bildergalerie
- ✅ Presse/Sonstiges E-Mail-Kontakt hinzugefügt
- ✅ Mobile Optimierungen (Instagram-Icon, niedrige Viewports)
- ✅ SEO-Optimierung (Schema.org, Sitemap, Meta-Tags)
- ✅ Barrierefreiheit (WCAG 2.1 AA)
- ✅ Performance-Optimierungen

### Version 1.0 (Januar 2026)
- ✅ Initiale Website mit dynamischem Header
- ✅ Material Design
- ✅ Responsive Layout
- ✅ Downloads-Bereich

## 📝 Rechtliches

- **Impressum**: `impressum.html` - Vollständig ausgefüllt
- **Datenschutz**: `datenschutz.html` - DSGVO-konform
- **Social Media**: Instagram (@7even.band)
- **Cookies**: Nur technisch notwendig (localStorage für Instagram-Consent)

## 📝 Lizenz

© 2026 SEVEN music. Alle Rechte vorbehalten.

## 🎸 Kontakt

**Booking**: booking@seven-music.de  
**Presse/Sonstiges**: info@seven-music.de  
**Instagram**: [@7even.band](https://instagram.com/7even.band)  
**Website**: [www.seven-music.de](https://www.seven-music.de)

---

**Viel Erfolg mit der Website! 🎵**