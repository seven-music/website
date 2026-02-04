# SEVEN music Website

Moderne, responsive Band-Website mit dynamischem Header und Material Design Elementen.

## 🎸 Features

### Dynamischer Header
- **Versteckter Header**: Beim Laden der Seite ist der Header unsichtbar
- **Scroll-Aktivierung**: Ab 200px Scroll-Position erscheint der Header elegant
- **Logo-Animation**: 
  - Die Schallplatte (Record.svg) gleitet von links ein mit Rotation
  - Der SEVEN-Schriftzug (Text.svg) erscheint daneben
  - Beide Elemente animieren sich beim Scrollen in den Header

### Hero Section
- Großes, zentriertes Logo (Logo-clean.svg) mit Float-Animation
- Scroll-Indikator mit Bounce-Animation

### Design
- **Farbschema**: Schwarz/Gold (#EDAC00) - passend zum Logo
- **Schlichtes Design**: Minimalistisch und elegant
- **Material Design**: Moderne Cards mit Elevation und Hover-Effekten
- **Responsive**: Optimiert für alle Bildschirmgrößen

### Sections
1. **Home**: Hero mit großem Logo
2. **Bandinfo**: Band-Geschichte und Sound
3. **Wofür steht SEVEN?**: Philosophie der Band mit Bandfoto
4. **Media**: Videos und Live-Mitschnitte
5. **Downloads**: Technical Rider, Stageplot, Pressekit für Veranstalter
6. **Kontakt**: Booking-Formular und Social Media

## 📁 Projektstruktur

```
material-website/
├── index.html              # Hauptseite
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
├── README.md               # Diese Datei
├── bandfoto.jpg            # Bandfoto
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
│   └── images/             # Bilder (Bandfotos, etc.)
│       └── bandfoto.jpg    # Hauptbandfoto
│
└── downloads/              # Downloads für Veranstalter
    ├── README.md           # Infos zu den Downloads
    ├── .gitkeep            # Platzhalter für Git
    ├── technical-rider.pdf # (noch zu erstellen)
    ├── stageplot.pdf       # (noch zu erstellen)
    └── pressekit.zip       # (noch zu erstellen)
```

## 🚀 Verwendung

1. **Lokal öffnen**: Einfach `index.html` im Browser öffnen
2. **Live Server**: Mit VS Code Live Server für beste Erfahrung
3. **Hosting**: Alle Dateien auf Webserver hochladen

### GitHub Pages Deployment
Die Website ist für GitHub Pages vorbereitet:
1. Repository auf GitHub erstellen
2. Alle Dateien hochladen
3. In Repository Settings → Pages → Source: `main` branch auswählen
4. Domain `seven-music.de` in Settings konfigurieren

## 🎨 Anpassungen

### Farben ändern
In `assets/css/styles.css` die CSS-Variablen anpassen:

```css
:root {
    --primary-gold: #EDAC00;    /* Hauptfarbe */
    --dark-gold: #C89000;       /* Dunklere Variante */
    --light-gold: #F5C842;      /* Hellere Variante */
    --black: #000000;
    --gray-dark: #1a1a1a;
    --gray-light: #cccccc;
    --white: #ffffff;
}
```

### Scroll-Schwellenwert ändern
In `assets/js/script.js`:

```javascript
const scrollThreshold = 200; // Pixel bis Header erscheint
```

### Inhalte anpassen
- **Band-Name**: In allen HTML-Dateien "SEVEN music" anpassen
- **Sections**: Sections hinzufügen/entfernen in `index.html`
- **Social Media**: Instagram (@7even.band), YouTube (noch nicht aktiv)
- **Kontakt**: E-Mail und Booking-Kontakt in `index.html` anpassen

## 📥 Downloads für Veranstalter

Im Ordner `downloads/` müssen noch folgende Dateien erstellt werden:

1. **technical-rider.pdf**: Technische Anforderungen (Bühne, Sound, Monitoring)
2. **stageplot.pdf**: Bühnenplan mit Positionen und Kanalliste
3. **pressekit.zip**: Pressepaket mit:
   - Bandbiografie
   - Hochauflösende Fotos
   - Logos in verschiedenen Formaten
   - Pressetexte

Siehe `downloads/README.md` für Details.

## 🎯 Scroll-Effekte im Detail

### Header-Animation
1. **Initial**: Header ist außerhalb des Viewports (`translateY(-100%)`)
2. **Bei Scroll > 200px**: 
   - Header gleitet nach unten (`translateY(0)`)
   - Hintergrund wird sichtbar (schwarz mit Transparenz)
   - Schallplatte rotiert rein und skaliert von 0 auf 1
   - Text erscheint mit Fade-in

### Logo-Animationen
- **Hero-Logo**: Float-Animation (8s Loop)
- **Header-Record**: Rotation + Scale + Translate beim Erscheinen
- **Header-Text**: Fade-in + Slide von rechts

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Volle Features
- **Tablet**: 576px - 768px - Angepasste Größen
- **Mobile**: < 576px - Kompakte Ansicht

## 🎵 Weitere Features

- **Smooth Scrolling**: Sanftes Scrollen zu Sections
- **Active Navigation**: Aktuelle Section wird im Menü hervorgehoben
- **Scroll-to-Top Button**: Erscheint ab 300px Scroll
- **Card Animations**: Fade-in beim Scrollen in den Viewport
- **Material Icons**: Gold-farbige Icons für visuelle Konsistenz

## 🔧 Technologien

- **HTML5**: Semantisches Markup
- **CSS3**: Custom Properties, Flexbox, Grid, Animations
- **JavaScript (Vanilla)**: Keine Frameworks, pure Performance
- **Bootstrap 5.3**: Grid-System und Utilities
- **Material Icons**: Google Material Icons
- **Google Fonts**: Roboto

## 🌐 Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt
- Mobile Browser: ✅ Optimiert

## ✅ To-Do Liste

- [ ] Technical Rider PDF erstellen und in `downloads/` ablegen
- [ ] Stageplot PDF erstellen und in `downloads/` ablegen
- [ ] Pressekit ZIP erstellen und in `downloads/` ablegen
- [ ] Bandfoto `bandfoto.jpg` durch echtes Foto ersetzen
- [ ] YouTube-Kanal erstellen und Videos einbinden
- [ ] Booking-Kontakt von "Max Mustermann" auf echten Kontakt ändern
- [ ] Impressum: Adresse und Kontaktdaten vervollständigen
- [ ] Domain `seven-music.de` konfigurieren

## 📝 Rechtliches

- **Impressum**: `impressum.html` - Muss mit echten Daten ausgefüllt werden
- **Datenschutz**: `datenschutz.html` - DSGVO-konform für GitHub Pages
- **Social Media**: Instagram (@7even.band), YouTube (in Vorbereitung)

## 📝 Lizenz

© 2026 SEVEN music. Alle Rechte vorbehalten.

## 🎸 Kontakt

**Booking**: booking@seven-music.de  
**Instagram**: [@7even.band](https://instagram.com/7even.band)  
**YouTube**: (in Vorbereitung)

---

**Viel Erfolg mit der Website! 🎵**