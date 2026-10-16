# "Warm Academic" style — from hrishikeshrt.github.io

This style is taken from [hrishikeshrt.github.io](https://hrishikeshrt.github.io/)
([source](https://github.com/hrishikeshrt/hrishikeshrt.github.io)). The original is a
Hugo site built with the Wowchemy "Academic" theme, which ships about 280 KB of
Bootstrap and theme CSS. This folder recreates the same look in **one small standalone
stylesheet**, so you don't need Bootstrap or Hugo.

The look: **Roboto Slab** headings, **Fira Sans** body text, a quiet grey primary
colour (`#707070`), a warm blush navbar (`#f6eee9`) and sections that alternate between
warm off-white (`#f9f7f6`) and white. The name sits in the navbar in Devanagari
(**Sahitya**), and the profile shows a round portrait with a romanised name in ruby
text above it. It also has publication lists with small outline buttons and an
experience timeline.

| File | What it is |
|---|---|
| `style.css` | The stylesheet (tokens, light + dark, every component) |
| `example.html` | Home page template: profile, biography, interests, education, publications, experience, contact |
| `example-post.html` | Blog post template |

## Quick start

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&family=Fira+Sans:ital,wght@0,400;0,700;1,400&family=Fira+Mono:wght@400;700&family=Sahitya:wght@400;700&display=swap" rel="stylesheet">
  <!-- optional icons for social links and list bullets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1.9.4/css/academicons.min.css">
  <link rel="stylesheet" href="style.css">
</head>
```

Copy `example.html` and replace the placeholder content. The page needs no JavaScript.

## Design tokens

| Token | Light | Dark (`<body class="dark">`) |
|---|---|---|
| `--primary` | `#707070` | `#707070` |
| `--nav-bg` | `#f6eee9` | `#282a36` |
| `--section-bg` / `--section-bg-alt` | `#f9f7f6` / `#ffffff` | `#23252f` / `#282a36` |
| `--heading` | `#313131` | `#ffffff` |
| `--text` | `rgba(0,0,0,.8)` | `#f8f8f2` |
| `--muted` | `rgba(0,0,0,.54)` | `rgba(255,255,255,.54)` |
| `--info` (date pill) | `#17a2b8` | same |
| `--warning` (call-out border) | `#ffc107` | same |
| `--note-*` (blue alert) | `#12537e` text, `#f6fbfe` bg, `#1976d2` border | darker variant |
| `--code` | `#e83e8c` | same |

The base font size is 13.86px and grows to 18px on screens wider than 58em, the same
as the original.

## Components

**Page shell**
- `nav.navbar > .navbar-inner`: sticky blush bar with `.navbar-brand` (set in Devanagari)
  and `ul.nav-links > li > a.nav-link` (`.active` is bold).
- `section.home-section > .container.section-row`: a full-width band. Odd and even
  sections alternate background. `.section-row` is a 4/8 two-column grid on desktop.
- `.section-heading > h1`: the section title in the left column.
- `footer.site-footer`: small centred copyright line.

**Profile + biography**
- `.profile`: `img.avatar` (round), `.portrait-title` with `h2` (use
  `<ruby><rb>Name</rb><rt>Romanised</rt></ruby>`) and muted `h3` lines, plus
  `ul.network-icon` social icons that grow on hover.
- `.article-style > h1.bio-heading + .bio-text`: justified biography with underlined links.
- `.callout`: yellow-bordered box. `.alert.alert-note > div`: blue info box with an ⓘ badge.
- `.about-lists > div`: Interests (`ul.ul-interests`) and Education (`ul.ul-edu` with
  `p.course` + `p.institution`). Put an `<i>` icon first in each `li`; if you don't use
  icons, CSS bullets appear instead.

**Publications**
- `.pub-list-item`: `i.pub-icon`, `a.pub-title`, venue text, `p.article-metadata`
  (authors; wrap yourself in `span.author-highlighted`), `span.btn.pub-date` (floats
  right), and `p.btn-links > a.btn.btn-outline` (Cite, PDF, Code …).
- `.see-all > a`: uppercase "See all" link.

**Experience**
- `ol.timeline > li.timeline-item(.current) > .card`: a vertical line with a dot for each
  job (`.current` gets a filled dot). The card holds `.exp-head` (optional
  `img.exp-logo`), `p.exp-title`, `p.exp-company`, `.exp-meta` (use
  `span.middot-divider` between items) and an optional `p.card-text`.

**Posts**
- `article.article-container` with `.article-header` (`h1.article-title`,
  `p.page-subtitle`, `.article-metadata`), `.article-style` body, `.article-tags >
  a.badge-light`, and an `.author-card`.

## Differences from the original

- Bootstrap's grid, utilities and JavaScript are replaced by a few CSS grid rules.
  Class names follow Wowchemy's (`home-section`, `portrait-title`, `pub-list-item`,
  `article-metadata`, `ul-edu` …) so the markup is familiar.
- The experience timeline is drawn with pseudo-elements instead of nested Bootstrap columns.
- The search box, cite modal, map and dark-mode switcher are left out (they need the theme's JavaScript).
