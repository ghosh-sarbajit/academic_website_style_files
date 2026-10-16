# "Terminal Chemist" style — from sameersaurav.github.io

This style is taken from [sameersaurav.github.io](https://sameersaurav.github.io/)
([source](https://github.com/sameersaurav/sameersaurav.github.io)). The original
site puts a copy of its CSS inside every page. The copies are combined here into one
reusable stylesheet.

The look is a white page with a dotted "graph paper" grid, **monospace headings**
(JetBrains Mono), **IBM Plex Sans** body text and a single **green accent**.
Terminal touches include a blinking block caret, `❯` prompts before section headings
and diamond bullets. Article pages can switch to a dark terminal theme.

| File | What it is |
|---|---|
| `style.css` | The stylesheet (tokens, both themes, every component) |
| `site.js` | Optional: scroll-reveal animation + highlights the nav link for the section in view |
| `example.html` | Home / CV page template (light theme) |
| `example-article.html` | Essay page template (dark `terminal` theme) |

## Quick start

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  …
  <script src="site.js"></script>
</body>
```

Copy `example.html` and replace the placeholder content. Noto Sans Devanagari is
only needed if you write in Hindi (`lang="hi"`).

## Design tokens

| Token | Light (default) | Terminal (`data-theme="terminal"`) |
|---|---|---|
| `--paper` | `#ffffff` | `#0a0d0c` |
| `--card` | `#f7f8f6` | `#0f1513` |
| `--ink` / `--ink-2` | `#111111` / `#333333` | `#d6ddd3` / `#b4bcb0` |
| `--muted` | `#6b6b6b` | `#6f786e` |
| `--rule` | `#e3e3e0` | `#222b26` |
| `--accent` | `#0f8a45` | `#4fe08a` |
| `--accent-soft` | `rgba(15,138,69,.12)` | `rgba(79,224,138,.13)` |

The layout tokens are `--maxw: 1080px` (page), `--postw: 720px` (essay column),
`--readw: 38rem` (long-read column) and `--rail: 200px` (section heading column).
To re-brand, change `--accent`, `--accent-2`, `--accent-soft` and `--accent-glow`
in `:root`.

## Components

**Page shell**
- `nav > .nav-inner`: sticky blurred bar. It holds `.nav-name` (add `<span class="dot">.</span>` after the name)
  and either `ul.nav-links` (an `a.active` link gets highlighted) or a back link (`.back` / `.nav-back`).
- `header.hero > .hero-inner`: two-column hero. Use `.hero-inner.single` when there is no portrait.
  - `h1` + `<span class="caret"></span>` gives the blinking cursor; `.lede` is the intro paragraph; `.eyebrow` is an optional kicker.
  - `.meta-row > a.chip` are pill links with an optional 14px SVG icon; `.chip.static` is a pill that isn't a link.
  - `.portrait-stack` holds `svg.molecule` (slowly rotating) and `img.portrait`, or a `.monogram` fallback.
- `section.block > .wrap.block-grid > .rail + .body`: the main page sections. The heading
  (`.rail h2`, with an optional `.num`) sticks in the left rail while the content scrolls.
- `footer > .f-inner > .f-name / .f-meta / .f-meta.disclaimer`

**Content**
- `.tags > .tag`: keyword pills
- `.entry` (`.entry-head > .entry-title + .entry-date`, `.entry-sub`, `.note`, `ul > li`), `.badge`: CV entries
- `.pub` (`.pub-title > a`, `.pub-authors` with `<b>` for your name, `.pub-venue`): publications / writing list
- `.subhead`: small uppercase green label; `ul.talks > li > span + span.when`: talks with dates
- `.skillrow > .k + .v`: key/value rows
- `a.inline`: green underlined links inside `.body`

**Article pages** (add `data-theme="terminal"` on `<html>` to get the dark look)
- English essay: `article.post` with `.eyebrow`, `h1`, `.standfirst`, `.byline`, `h2` (gets a `❯`), `h3`,
  `figure.fig` (`.narrow`), `figcaption`, `aside.try > .try-label + p`, `.eq` (equation box),
  `.endmatter`, `.about`. Use `footer.plain > div` as the footer.
- Long-read / Hindi: `.wrap > .art-head` (`.kicker`, `h1`, `.standfirst`, `.byline` with `.sep`),
  `article.longread` (`p.lead`, `.lat` for Latin words inside Devanagari text), `.art-foot`, `a.back-link`.
  Use `footer.split > .wrap` as the footer.
- `<body class="scanlines">` adds an optional faint CRT scanline overlay.

**Behaviour**
- Add `.reveal` to an element to make it fade up when scrolled into view (needs `site.js`). Without JS, the content stays visible.
- The layout collapses to one column below 820px, and `prefers-reduced-motion` turns off all animation.

## Differences from the original

- The CSS from every page is combined into one file, and the hard-coded dark-page colours became a `data-theme="terminal"` token set.
- Some selectors are scoped to avoid clashes between page types: `article` → `article.post` / `article.longread`, and the article footers are now `footer.plain` / `footer.split`.
- `.hero-inner.single` replaces an inline style; `.reveal` only hides content when JS is running.
