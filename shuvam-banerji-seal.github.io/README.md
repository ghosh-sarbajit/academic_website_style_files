# "Element" style — from shuvam-banerji-seal.github.io

This style is taken from [shuvam-banerji-seal.github.io](https://shuvam-banerji-seal.github.io/)
([source](https://github.com/Shuvam-Banerji-Seal/Shuvam-Banerji-Seal.github.io)). The
original homepage loads five stylesheets (`theme.css`, `main.css`, `mobile-fixes.css`,
`home.css`, `element.css`), plus legacy aliases kept for older themes. This folder
combines what the homepage actually uses into one stylesheet.

The look: a calm sage paper page, a large **Newsreader** serif display name with an
underline in the accent colour, **Hanken Grotesk** body text, and **Martian Mono** used
only inside a terminal window. Every section sits on the same two-column grid: headings
and dates on the left, content on the right. The colours follow the **CPK atom palette**
used by molecular viewers:

| Atom | Role | Light | Dark |
|---|---|---|---|
| hydrogen | `--paper` page background | `#F1F4EE` | `#0B1311` |
| carbon | `--ink` text | `#0F1B18` | `#E7F0EB` |
| nitrogen | `--nitrogen` links and actions | `#00776F` | `#3CCFC4` |
| oxygen | `--oxygen` errors, + phase | `#E0432A` | `#FF7458` |
| sulfur | `--sulfur` selection, `<mark>` | `#FFC93C` | `#F2C94C` |

The other tokens are `--surface`, `--surface-2`, `--graphite` (secondary text), `--rule`,
`--rule-strong`, the radii `--r-s/m/l` (4/8/14px) and `--container`
(`min(1200px, 100% − 2×gutter)`).

**Orbital accent.** The homepage accent follows the hydrogen orbital picked in the
figure. Set it with `data-accent` on `<html>`: `1s` (vermilion), `2pz` (teal), `3dz2`
(amber, the default), `3dxy` (blue) or `4fxyz` (magenta). This changes the hero name
underline, the primary hero button and the pressed picker button.

| File | What it is |
|---|---|
| `style.css` | The stylesheet (tokens, light + dark, every homepage component) |
| `site.js` | Dark/light toggle (saved in `localStorage`) + orbital picker that sets the accent |
| `example.html` | Homepage template: hero with terminal and picker, research, software, tools, writing, contact |

## Quick start

```html
<html lang="en" data-accent="3dz2">
<head>
  <script>
    (function(){var s=null;try{s=localStorage.getItem('theme')}catch(e){}
    var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    document.documentElement.setAttribute('data-theme',t);})();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300..800&family=Newsreader:opsz,wght@6..72,300..800&family=Martian+Mono:wdth,wght@75..112,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  …
  <script src="site.js"></script>
</body>
```

The inline script picks the theme before the page paints, so it never flashes the
wrong colours. It follows the visitor's system setting until they press the toggle.

## Components

**Shell**
- `nav.site-nav > .nav-content`: `.nav-logo` (serif), `ul.nav-links > li > a.nav-link`
  (`.active` turns teal), and `button.theme-toggle[data-theme-toggle]`.
- `footer.site-foot`, `.skip-link`, `.container`.

**Hero** (`section.hero-el`)
- `h1.hero-name > span` ×2: each line gets the accent underline.
- `p.hero-statement`, `.hero-actions > a.btn.btn-primary + a.btn`.
- `.hero-stage`: two columns. `.terminal-window` has a `.term-titlebar` (`.path-host`,
  `.path-sep`, `.path-dir`, `.term-meta`) and a `.term-body` (`.term-prompt`,
  `.term-output.highlight`, `.term-comment`, `.term-error`, `.term-cursor`).
  `figure.orbital` holds any canvas/SVG (`.orbital-canvas`), plus
  `.orbital-picker > button[data-orbital][aria-pressed]`, `.orbital-title`,
  `.orbital-qn` and `.orbital-note` (`.phase-plus` / `.phase-minus`).
- `.hero-about > p.hero-lead + p.hero-now`.

**Blocks** (`section.block`): all of these use the 4/7 two-column grid.
- `header.block-head > h2 + p`.
- `ol.dated > li > span.when + div` (`h3 > a`, `p`, `p.links > a…`) for publications and roles.
- `.feature`: `figure.feature-figure` (`.frame`, a `figcaption` with a `.cpk-key`) next to
  `.feature-text` (`h3`, `p`, `dl.feature-facts`, `.feature-actions`).
- `.index > .index-group` (`h3` + `ul > li > a + span`) and `.block-foot`.
- `.tool-index`: a four-column directory (`div > h3 + ul > li > a + span`).
- `ul.posts > li > time + a` for writing.
- `.prizes` (`.sub-h` + `ul.plain`).
- `section.block.contact > .about` (`img`, `h2`, `p`, `p.mail`, `ul.elsewhere`) and
  `form.contact-form` (`label`, `.field-row`, `.form-foot`, `.form-status`).

**Base pieces**: `.btn`, `.btn-primary`, `.tag`, `.panel`, `.prose a` / `.el-link`,
inputs, focus rings and reduced-motion handling.

## Differences from the original

- The navbar is static HTML. The original builds it with JavaScript, with dropdown menus and a slide-in mobile sheet.
- The live WebGL orbital and molecule viewers are left out; any canvas, SVG or image goes in their slots.
  The interactive terminal shell is reduced to static markup.
- Music-player, audio-studio and timer styles, and the legacy theme aliases (`dracula`,
  `tokyo-night`, …), are not included.
