# Phase 2b — Visual system rework

Followed `ui-design` (marketing track) + `aesthetic-direction`. The deck is closer to a "branded landing-page sequence" than a product UI: 22 hero-style screens, one dominant idea each, image-poster framing. Every recommendation honours the marketing-UI rules: cardless-first, one accent, two typefaces max, distinctive type, no AI-slop gradients.

## Visual thesis (one sentence)

> A warm-paper editorial deck. Confident black ink on bone, one Linktree-coded green accent, signature serif headlines that earn their size — premium technical talk, not corporate slide library.

---

## A. Light vs. dark decision

**Decision: stay light. Commit to it.** Move from cool gray `#D1D7DC` → warm bone `oklch(0.93 0.012 85)`.

Reasoning:

- Editorial New is a high-contrast didone serif. It reads as a literary face, not a UI face. Dark-mode editorial serifs are a niche aesthetic (think _The Atlantic_ online); light editorial-on-paper is the canonical, premium reading. Most "tech talk" decks default to dark — going light is the move that _differentiates_ without trying.
- The current `#D1D7DC` is cool and "muted" rather than "considered". One hue rotation toward warm and a tiny lightness bump turns "office gray" into "uncoated card stock". Same blast radius (one token), totally different feel.
- AA contrast head-room is much better at L=0.93 than at L=0.66 (current). Phase 1 found `text-gray-500` and `--muted-foreground` failing AA on the current bg; on warm bone they comfortably pass.
- A live conference room with stage lighting handles light better than dark — projector contrast collapses on near-black bg in non-controlled rooms. Linktree all-hands rooms aren't blacked out.

**Reversibility note**:

- **Going light-warm** = token swap, low blast radius. Roughly **5 lines** in `app/globals.css` (`--background`, `--foreground`, `--muted-foreground`, `--card`, `--border`) plus one literal swap in `slide-container.tsx`. No shadow/border re-tuning needed because we stay in the same lightness regime.
- **Flipping to dark** = global rewrite, high blast radius. Every `<Card>` shadow has to be re-authored (shadows on dark surfaces use light/glow, not drop), every `bg-foreground/5` callout inverts meaning, the glass nav bar gradient breaks, all `text-gray-*` literals (50 occurrences across 22 slides) need new mappings, the `--shadow-elevation-medium` HSL needs re-tuning, and Editorial New on dark needs a slight tracking + weight adjustment to avoid sparkle. Estimate **2–3 hours** of rework + a full visual QA pass.

We pick light. If the user later wants dark, we add a `.dark` block and a single class toggle on `<html>`; the token names below are designed to support that without rename.

---

## B. Color palette

All values in `oklch(L C H)`. All text/bg pairs verified against WCAG 2.1 (using approximate sRGB relative luminance from oklch L → CIE L\* → Y).

### Tokens

| Token (CSS var)              | Role                       | oklch                   | Approx hex | Notes                                                            |
| ---------------------------- | -------------------------- | ----------------------- | ---------- | ---------------------------------------------------------------- |
| `--background`               | Slide bg (warm bone)       | `oklch(0.93 0.012 85)`  | `#e8e3d8`  | Replaces `#D1D7DC`. Slightly darker than card so cards lift.     |
| `--surface` _(new)_          | Card fill (paper-white)    | `oklch(0.985 0.004 85)` | `#fbf9f5`  | Cards float on bone. Was `--card: oklch(1 0 0)`.                 |
| `--surface-elevated` _(new)_ | Floating UI (nav, dialogs) | `oklch(0.995 0.002 85)` | `#fefdfa`  | Used by `slide-navigation` glass + future popovers.              |
| `--foreground`               | Body & headlines (ink)     | `oklch(0.18 0.012 270)` | `#1f2329`  | Slight cool tint pairs against warm bg without going pure black. |
| `--muted-foreground`         | Body sub-copy, captions    | `oklch(0.42 0.010 270)` | `#5a5e66`  | Darkened from current `0.556`.                                   |
| `--accent`                   | Single sharp accent        | `oklch(0.62 0.165 145)` | `#46a557`  | Linktree-coded green, desaturated for editorial restraint.       |
| `--accent-foreground`        | Text on accent fill        | `oklch(0.985 0.004 85)` | `#fbf9f5`  | Reuse surface.                                                   |
| `--border`                   | Hairline rules, card edges | `oklch(0.86 0.008 85)`  | `#cdc7b9`  | Calm warm border, not gray.                                      |
| `--destructive`              | Errors / "don't do this"   | `oklch(0.55 0.205 27)`  | `#c4422a`  | Warmer than current red, harmonises with bone.                   |

### Contrast verification

Computed using oklch L → CIE L\* (multiply by 100) → Y via standard sRGB inverse companding. Spot-checked against the WebAIM checker on the approximated hex values.

| Pair                                                       | L (fg) | L (bg) | Approx Y(fg) | Approx Y(bg) | Contrast     | AA body (≥4.5) | AA large (≥3)                                        |
| ---------------------------------------------------------- | ------ | ------ | ------------ | ------------ | ------------ | -------------- | ---------------------------------------------------- |
| `--foreground` on `--background`                           | 0.18   | 0.93   | 0.025        | 0.846        | **11.9 : 1** | PASS (AAA)     | PASS                                                 |
| `--foreground` on `--surface` (cards)                      | 0.18   | 0.985  | 0.025        | 0.965        | **13.5 : 1** | PASS (AAA)     | PASS                                                 |
| `--muted-foreground` on `--background`                     | 0.42   | 0.93   | 0.131        | 0.846        | **4.95 : 1** | PASS           | PASS                                                 |
| `--muted-foreground` on `--surface`                        | 0.42   | 0.985  | 0.131        | 0.965        | **5.61 : 1** | PASS           | PASS                                                 |
| `--accent` on `--background` (display only)                | 0.62   | 0.93   | 0.328        | 0.846        | **2.37 : 1** | FAIL           | FAIL — _do not put text on bare bg in green_         |
| `--accent-foreground` on `--accent` (filled chip)          | 0.985  | 0.62   | 0.965        | 0.328        | **2.69 : 1** | FAIL           | FAIL — _don't fill in accent + put white text on it_ |
| White on `--accent` darker variant `oklch(0.50 0.165 145)` | 1.00   | 0.50   | 1.00         | 0.197        | **4.10 : 1** | FAIL           | PASS — for filled CTA chips, drop accent L to 0.50   |
| `--foreground` on `--accent`                               | 0.18   | 0.62   | 0.025        | 0.328        | **5.0 : 1**  | PASS           | PASS — _use ink-on-green for chips_                  |
| `--destructive` on `--background`                          | 0.55   | 0.93   | 0.243        | 0.846        | **3.06 : 1** | FAIL           | PASS — large-text only                               |
| `--border` on `--background`                               | 0.86   | 0.93   | 0.713        | 0.846        | **1.16 : 1** | n/a (non-text) | n/a                                                  |

**Operating rules** that fall out of the math:

1. Body copy uses `--foreground` or `--muted-foreground` only. Both pass AA.
2. Accent green is for **graphic emphasis** (underline of a heading word, rule line, icon stroke, filled chip with **ink** text), never green text on bone.
3. For a green-filled CTA chip, override to `oklch(0.50 0.165 145)` for ≥4:1 with white. The lighter base is for hover and decorative use only.
4. Decorative numerals/symbols already at huge display sizes (slide 6, 11, 12, 21) can use `--foreground` at 25 % alpha (`text-foreground/25`), which is intentionally non-AA — accept that they are decoration, not text. Mark them `aria-hidden`.

### Why these hues

- **Warm bone bg** (hue 85, near-yellow) reads as paper, not as office gray. The 0.012 chroma is the _minimum_ for "warmth" without going beige.
- **Cool ink fg** (hue 270, near-blue-violet) at 0.012 chroma keeps the ink from looking dead. This is the same trick _The New York Times_ and _Stripe_ use for their "near-black".
- **Green accent at hue 145** is unambiguously Linktree without literally being `#43E660`. The desaturated chroma (0.165 instead of brand 0.20+) keeps it editorial. Avoids "purple/blue SaaS" generic and avoids "bright sticker" loud.

---

## C. Typography

### Roles — keep, drop, or replace

- **Heading — Editorial New**: **keep**. This face is the deck's signature. Keep it for h1, hero numerals, slide titles, and section headings. It's the single biggest reason the deck doesn't look like a generic Inter-on-white SaaS pitch.
- **Body — Inter**: **keep, but tighten**. Inter is generic (an "AI slop signal" per the skill rules), but it's the right call here for technical clarity, code adjacency, and screen reading at distance. Specify `font-feature-settings: 'cv11', 'ss01', 'ss03'` to use the Inter stylistic alternates that round off the most-Inter-looking glyphs (single-storey `a`, straight `l`).
- **Display / glyph — Glide**: **drop unless used in two specific places** (described below). It's loaded today, never used, costs ~80KB. Two acceptable fates:
  - (a) **Drop entirely** — remove from `app/layout.tsx`. -80KB on first load. Cleanest.
  - (b) **Use as numeric display** — Glide is a strong geometric variable face. Use it for the big step numerals on slide 6/11/12/21 and the slide counter in the nav bar. _Recommendation: drop it._ The deck doesn't need a third voice; Editorial New + Inter + restraint is enough.

### Type scale — extend the existing fluid ramp

Current ramp tops at `--slide-text-5xl: clamp(42px, 3.2vw, 72px)`. The slide-1 hero needs more (currently uses `text-[130px]` literal). Add:

```css
--slide-text-6xl: clamp(56px, 5.5vw, 128px); /* hero on slide 1 */
--slide-text-7xl: clamp(72px, 8.5vw, 200px); /* reserved — display numerals only, not text */
```

Full proposed scale (no other ramp values change):

| Token                          | Clamp                       | Use                                     |
| ------------------------------ | --------------------------- | --------------------------------------- |
| `--slide-text-xs`              | `clamp(10px, 0.65vw, 14px)` | Footnote, caption                       |
| `--slide-text-sm`              | `clamp(12px, 0.8vw, 16px)`  | Eyebrow labels (uppercase tag)          |
| `--slide-text-base`            | `clamp(14px, 0.95vw, 20px)` | Body                                    |
| `--slide-text-lg`              | `clamp(16px, 1.1vw, 24px)`  | Lead paragraph below h1                 |
| `--slide-text-xl`              | `clamp(18px, 1.3vw, 28px)`  | Card title                              |
| `--slide-text-2xl`             | `clamp(22px, 1.6vw, 36px)`  | Card section heading                    |
| `--slide-text-3xl`             | `clamp(28px, 2vw, 44px)`    | Sub-deck heading                        |
| `--slide-text-4xl`             | `clamp(34px, 2.5vw, 56px)`  | Standard slide title                    |
| `--slide-text-5xl`             | `clamp(42px, 3.2vw, 72px)`  | Big slide title                         |
| **`--slide-text-6xl`** _(new)_ | `clamp(56px, 5.5vw, 128px)` | **Slide 1 hero, slide 22 "Questions?"** |
| **`--slide-text-7xl`** _(new)_ | `clamp(72px, 8.5vw, 200px)` | Decorative display numerals only        |

### Tracking, leading, optical adjustments

| Role                    | Font                   | Size token                 | Tracking   | Leading | Notes                                                                          |
| ----------------------- | ---------------------- | -------------------------- | ---------- | ------- | ------------------------------------------------------------------------------ |
| Hero (slide 1, 22)      | Editorial New          | `--slide-text-6xl`         | `-0.025em` | `0.92`  | Tight tracking, near-set leading. Ligatures on.                                |
| Slide title             | Editorial New          | `--slide-text-4xl` / `5xl` | `-0.015em` | `1.05`  | Default for all 22 titles.                                                     |
| Section h2 (card title) | Editorial New          | `--slide-text-2xl` / `xl`  | `-0.01em`  | `1.15`  |                                                                                |
| Body                    | Inter                  | `--slide-text-base` / `lg` | `0`        | `1.5`   | `font-feature-settings: 'cv11','ss01','ss03';`                                 |
| Eyebrow (uppercase tag) | Inter                  | `--slide-text-sm`          | `0.08em`   | `1.2`   | Wider tracking is mandatory at small caps; `font-weight: 600`.                 |
| Footnote / caption      | Inter                  | `--slide-text-xs`          | `0`        | `1.4`   | `--muted-foreground`.                                                          |
| Display numeral         | Editorial New          | `--slide-text-7xl`         | `-0.04em`  | `1`     | `aria-hidden`. Tabular nums: `font-variant-numeric: tabular-nums lining-nums;` |
| Code, monospace         | (existing system mono) | `--slide-text-sm`          | `0`        | `1.45`  | Inline code only. No new font added.                                           |

Add these as new tokens too:

```css
--slide-tracking-tight: -0.025em;
--slide-tracking-snug: -0.015em;
--slide-tracking-normal: 0;
--slide-tracking-wide: 0.08em;

--slide-leading-display: 0.92;
--slide-leading-tight: 1.05;
--slide-leading-snug: 1.15;
--slide-leading-normal: 1.5;
```

---

## D. Tokenised motion / shadow / radius

### Motion

```css
--motion-duration-fast: 120ms; /* button hover, focus rings */
--motion-duration-base: 200ms; /* card hover, link underline */
--motion-duration-slow: 480ms; /* slide-entrance reveal */

--motion-easing-standard: cubic-bezier(0.2, 0, 0, 1); /* in-out, default */
--motion-easing-emphasised: cubic-bezier(0.3, 0, 0.1, 1); /* hero entrance, snappier finish */
--motion-easing-exit: cubic-bezier(0.4, 0, 1, 1); /* leaving, fast tail */
```

The dnd-grid scope already defines `--dnd-grid-transition-duration: 200ms` and `--dnd-grid-transition-easing: cubic-bezier(0.2, 0, 0, 1)`. Promote to global; have dnd-grid read from the global tokens. Drop ad-hoc `duration-150 ease-out` inside `components/ui/button.tsx`.

### Shadows

Three semantic levels — drop `shadow-md` / `shadow-lg` / `shadow-none` ad-hoc usage.

```css
--shadow-card: 0 1px 2px oklch(0.18 0.012 270 / 0.04), 0 4px 12px oklch(0.18 0.012 270 / 0.06);

--shadow-callout: none; /* tonal-fill cards, no elevation */

--shadow-floating:
  0 0 0 1px oklch(0.18 0.012 270 / 0.04), 0 2px 4px oklch(0.18 0.012 270 / 0.06),
  0 12px 32px oklch(0.18 0.012 270 / 0.1); /* nav bar, dialogs */

--shadow-focus-ring: 0 0 0 2px var(--background), 0 0 0 4px var(--accent);
```

Mapping rule:

- **Standard `<Card>`** → `--shadow-card`. Replaces the 12 `shadow-lg` and 9 `shadow-md` occurrences. They become one consistent value.
- **Callout / summary cards** with `bg-foreground/5` → `--shadow-callout` (= no shadow). Replaces the 5 `shadow-none` occurrences.
- **Glass nav bar** (`slide-navigation.tsx`) → `--shadow-floating`. Replaces the multi-line inline style.

### Radius

Existing fluid scale is fine; one addition:

```css
--slide-radius-pill: 9999px; /* nav bar, chips, avatars */
```

The nav bar's `borderRadius: "35px"` literal becomes `var(--slide-radius-pill)`. The 35px value on a viewport-fluid container was always going to drift; pill is the right intent.

---

## E. Hero treatments

### Slide 1 — Intro (poster, not document)

**Current**: centered title at literal `text-[130px]`, two avatars and a `+` separator below, subtitle, links row. Readable, but reads as "title slide" not "poster".

**Proposed**: full-bleed asymmetric poster. The brand of the _talk_ (the title) is the loudest thing. Authors are a quiet sub-strip pinned bottom-left. QR pinned top-right. One rule line in accent green. No avatar circles in the hero — they fight the typography.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  AI USAGE  ·  001 / 022             [QR — top-right ── ▢]  │  ← eyebrow tag (left), QR (right)
│  ─────────────                                             │  ← accent green hairline (4px wide)
│                                                            │
│                                                            │
│         AI usage                                           │
│         for engineers                                      │  ← Editorial New, --slide-text-6xl,
│                                                            │     2 lines, left-aligned, hangs into
│                                                            │     left half of viewport
│                                                            │
│                              Concrete workflows from       │
│                              two engineers shipping with   │  ← Inter, --slide-text-lg, right column,
│                              Claude Code, Codex, Devin.    │     starts at 60% width, --muted-fg
│                                                            │
│                                                            │
│  MATTHEW BLODE  +  MRU                          LINKTREE   │  ← Inter eyebrow caps, bottom strip
│  blode.co                               OCT 2026   │
└────────────────────────────────────────────────────────────┘
```

Tokens consumed:

- Type: `--slide-text-6xl` (title), `--slide-text-lg` (subtitle), `--slide-text-sm` + `--slide-tracking-wide` (eyebrow / footer).
- Space: `slide-p-12` (outer padding), `slide-gap-8` between title block and subtitle.
- Color: `--foreground` (title, eyebrow), `--muted-foreground` (subtitle, footer right), `--accent` (4px rule line).
- Leading: `--slide-leading-display` on title.
- Asymmetry: title hangs left, subtitle right-aligned in right column. Negative space dominates centre.

Vibe: **editorial, confident, set**.

### Slide 22 — Closing (resolved, QR has hierarchy)

**Current**: split with bio + links left, QR right at 200px. Reads as a "contact card" — fine, but the QR is the _call to action_, and right now it's the same visual weight as the bio.

**Proposed**: invert the hierarchy. Big "Questions?" headline, QR is a _poster element_ — large, framed, and on a paper-white surface that tonally matches `--surface`. Bio is a single quiet line beneath. Links become a single row of inline anchors, not a bulleted list.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  THANKS                                       022 / 022    │  ← eyebrow caps, top strip
│  ─────────────                                             │  ← accent rule line
│                                                            │
│                                                            │
│  Questions?                            ┌──────────────┐    │
│                                        │              │    │
│                                        │     [QR]     │    │  ← QR on --surface card,
│                                        │              │    │     bigger (~280px), --shadow-card,
│                                        │              │    │     pill caption beneath.
│                                        └──────────────┘    │
│                                          Scan for slides   │
│                                                            │
│  Matthew Blode  +  Mru   ·   blode.co              │  ← single bio line, --slide-text-lg
│                                                            │
│  ─────────────                                             │  ← second accent rule
│  agent-skills    ·    allmd    ·    spotlight-testing      │  ← inline links, --muted-fg w/ hover
│                                                            │
└────────────────────────────────────────────────────────────┘
```

Tokens consumed:

- Type: `--slide-text-6xl` for "Questions?" (matches slide 1 hero), `--slide-text-sm` + `--slide-tracking-wide` for eyebrow & footer caps, `--slide-text-lg` for bio line, `--slide-text-base` for inline links.
- Space: `slide-p-12` outer, `slide-gap-10` between title and bio strip.
- Color: `--foreground` (title), `--muted-foreground` (bio, links), `--accent` (rule lines).
- Surface: QR sits on `--surface` with `--shadow-card`, `--slide-radius-2xl`.
- Asymmetry: title left, QR right but visually the dominant rectangle. Bio bridges the two beneath.

Vibe: **resolved, generous, scannable**.

---

## F. Migration plan

### F.1 Token additions / changes to `app/globals.css`

**Replace** the 9 lines in `:root` for color tokens:

```css
/* old → new */
--background: oklch(0.93 0.012 85); /* was #d1d7dc */
--foreground: oklch(0.18 0.012 270); /* was oklch(0.145 0 0) */
--card: oklch(0.985 0.004 85); /* was oklch(1 0 0) */
--card-foreground: oklch(0.18 0.012 270);
--muted-foreground: oklch(0.42 0.01 270); /* was oklch(0.556 0 0) */
--accent: oklch(0.62 0.165 145); /* was oklch(0.97 0 0) */
--accent-foreground: oklch(0.18 0.012 270); /* ink on green */
--border: oklch(0.86 0.008 85); /* was oklch(0.922 0 0) */
--destructive: oklch(0.55 0.205 27); /* was oklch(0.577 0.245 27.325) */
```

**Add** new tokens (append to `:root`):

```css
--surface: oklch(0.985 0.004 85);
--surface-foreground: var(--foreground);
--surface-elevated: oklch(0.995 0.002 85);

--accent-strong: oklch(0.5 0.165 145); /* for filled chips needing white text */

--slide-text-6xl: clamp(56px, 5.5vw, 128px);
--slide-text-7xl: clamp(72px, 8.5vw, 200px);

--slide-tracking-tight: -0.025em;
--slide-tracking-snug: -0.015em;
--slide-tracking-wide: 0.08em;

--slide-leading-display: 0.92;
--slide-leading-tight: 1.05;
--slide-leading-snug: 1.15;
--slide-leading-normal: 1.5;

--slide-radius-pill: 9999px;

--motion-duration-fast: 120ms;
--motion-duration-base: 200ms;
--motion-duration-slow: 480ms;
--motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
--motion-easing-emphasised: cubic-bezier(0.3, 0, 0.1, 1);
--motion-easing-exit: cubic-bezier(0.4, 0, 1, 1);

--shadow-card: 0 1px 2px oklch(0.18 0.012 270 / 0.04), 0 4px 12px oklch(0.18 0.012 270 / 0.06);
--shadow-callout: none;
--shadow-floating:
  0 0 0 1px oklch(0.18 0.012 270 / 0.04), 0 2px 4px oklch(0.18 0.012 270 / 0.06),
  0 12px 32px oklch(0.18 0.012 270 / 0.1);
--shadow-focus-ring: 0 0 0 2px var(--background), 0 0 0 4px var(--accent);
```

**Add** corresponding `@theme inline` mappings so Tailwind picks them up:

```css
--color-surface: var(--surface);
--color-surface-foreground: var(--surface-foreground);
--color-surface-elevated: var(--surface-elevated);
--color-accent-strong: var(--accent-strong);
```

**Add** utility classes (mirror existing `slide-text-N` pattern):

```css
.slide-text-6xl {
  font-size: var(--slide-text-6xl);
}
.slide-text-7xl {
  font-size: var(--slide-text-7xl);
}

.slide-tracking-tight {
  letter-spacing: var(--slide-tracking-tight);
}
.slide-tracking-snug {
  letter-spacing: var(--slide-tracking-snug);
}
.slide-tracking-wide {
  letter-spacing: var(--slide-tracking-wide);
}

.slide-leading-display {
  line-height: var(--slide-leading-display);
}
.slide-leading-tight {
  line-height: var(--slide-leading-tight);
}
.slide-leading-snug {
  line-height: var(--slide-leading-snug);
}
.slide-leading-normal {
  line-height: var(--slide-leading-normal);
}

.slide-shadow-card {
  box-shadow: var(--shadow-card);
}
.slide-shadow-callout {
  box-shadow: var(--shadow-callout);
}
.slide-shadow-floating {
  box-shadow: var(--shadow-floating);
}
```

### F.2 Files that need touching

**Swap-in (zero visible change beyond palette refresh)** — replace literals with semantic tokens. ~20 minutes.

| File                                        | Change                                                                                                                   | Lines                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `app/globals.css`                           | All token edits above                                                                                                    | ~35 lines added/changed                                 |
| `components/slides/slide-container.tsx`     | `bg-[#D1D7DC] text-black/80` → `bg-background text-foreground/85`                                                        | 1 line                                                  |
| `components/slides/slide-navigation.tsx`    | Inline `style={slideNavigationStyle}` → CSS class using `--shadow-floating`, `--slide-radius-pill`, `--surface-elevated` | ~15 lines (delete inline obj, add class to globals.css) |
| `components/slides/slide-navigation.tsx:77` | `text-black/60` → `text-muted-foreground`                                                                                | 1 line                                                  |
| `app/layout.tsx`                            | Drop `glide` font import (or keep if (b) chosen)                                                                         | 7 lines removable                                       |
| `app/layout.tsx:59`                         | `theme-color: "#f0f0f0"` → match new bg `#e8e3d8`                                                                        | 1 line                                                  |
| All 22 slide files                          | `text-gray-600` → `text-muted-foreground` (30 sites)                                                                     | mechanical find/replace                                 |
| All 22 slide files                          | `text-gray-500` → `text-muted-foreground` (12 sites — same token, contrast now passes because of palette change)         | mechanical find/replace                                 |
| All 22 slide files                          | `text-gray-400` → `text-foreground/25` + `aria-hidden` (6 sites)                                                         | per-site, audit each                                    |
| All 22 slide files                          | `text-gray-700` → `text-foreground` (2 sites in slide-01)                                                                | mechanical                                              |
| All 22 slide files                          | `shadow-lg` / `shadow-md` on `<Card>` → `slide-shadow-card` (21 sites)                                                   | mechanical                                              |
| All 22 slide files                          | `shadow-none` on tonal cards → `slide-shadow-callout` (5 sites)                                                          | mechanical                                              |
| All 22 slide files                          | `decoration-gray-300 hover:decoration-gray-500` link styles → `decoration-border hover:decoration-foreground`            | mechanical                                              |

Total swap-in effort: **~45 minutes**. Mostly `sd` / Biome-assisted find/replace + visual diff.

**Redesign (visible change)** — ~90 minutes.

| File                                     | Change                                                                                                                                                                                         |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components/slides/slide-01-intro.tsx`   | Full rewrite per Section E wireframe. Drop avatars from hero, add eyebrow tag + accent rule, asymmetric layout, footer strip with names + venue. Replace `text-[130px]` with `slide-text-6xl`. |
| `components/slides/slide-22-closing.tsx` | Full rewrite per Section E wireframe. Promote QR (280px, on `--surface` card with `--shadow-card`), reduce bio to single line, links inline.                                                   |
| `components/slides/slide-footnote.tsx`   | Confirm uses `--muted-foreground`. Already does (from audit). Verify visually.                                                                                                                 |

**Optional polish (defer)** — ~30 minutes if/when you want.

- Add a single hero entrance animation using the new motion tokens (one fade-up on title, 480ms `--motion-easing-emphasised`). Honour `prefers-reduced-motion`.
- Add a subtle paper-grain SVG noise overlay at 3 % opacity, `pointer-events: none`, on `slide-container`. Lifts bone bg from "flat fill" to "stock". One file, ~10 lines.

**Total**: ~165 minutes (~2.75 hours) for full migration end-to-end. Of which ~45 min is mechanical swap-in (visually identical at the pixel level except palette refresh) and ~120 min is the two redesigned heroes + nav-bar tokenisation.

### F.3 Order of operations

1. Land `globals.css` changes + `slide-container.tsx` swap. Visual diff: warm bone instead of cool gray, contrast passes everywhere. (15 min)
2. Mechanical find/replace for all `text-gray-*` and shadow drift across 22 slides. Visual diff: zero new bugs, semantic tokens in place. (30 min)
3. Tokenise nav bar style object. (15 min)
4. Redesign slide 1. (45 min)
5. Redesign slide 22. (30 min)
6. Drop Glide if not adopted. (5 min + verify no broken imports)

---

## G. Tradeoffs considered and rejected

### Palettes considered

- **Pure white bg + black ink**. Rejected: too generic, feels like Notion/Apple keynote default. The deck's Editorial New deserves a paper substrate, not a screen substrate.
- **Dark mode (near-black bg, off-white ink)**. Rejected: reasoned in Section A. High blast radius, competes with every other dev-tool talk deck, breaks current shadow tokens.
- **Cream/sepia bg with warm sienna accent (no green)**. Rejected: too "blog" and too far from any Linktree visual cue. Would feel like a personal portfolio, not a company talk.
- **Bone bg + Klein blue accent (`oklch(0.45 0.20 270)`)**. Considered seriously. Rejected because the green has a Linktree association the audience will recognise without being explained. Klein blue is a stronger graphic colour but a weaker brand signal.
- **Bone bg + oxblood/burgundy accent (`oklch(0.40 0.12 25)`)**. Rejected: pairs beautifully with Editorial New (very _Harper's Magazine_) but is a dated, "literary review" mood that fights the technical content.

### Type pairings considered

- **Editorial New + Söhne / Inter Display / GT America** (replace Inter). Rejected: all three are subscription/commercial faces. Adding any requires either a license cost or self-hosting the foundry's web kit. Inter with stylistic alternates (`cv11`, `ss01`, `ss03`) closes ~70 % of the gap for free.
- **Editorial New + JetBrains Mono for code**. Considered. Not rejected — recommend revisiting in Phase 4 if any slide adds inline code samples. For now, system mono via Tailwind's `font-mono` is fine.
- **Drop Editorial New, use a single sans (Söhne or Inter only)**. Rejected — explicitly forbidden by brief, and the right call: Editorial New is the deck's voice.
- **Use Glide as the heading face**. Rejected: Glide is a strong geometric face but not editorial; pairing it with Inter would push the deck toward "tech startup brand book" generic. Drop Glide.
- **Two-weight Editorial New (Light + Regular for hierarchy)**. Considered if Editorial New ships with Light — most cuts of "Editorial New" do (Pangram Pangram). Worth checking the licensed cut's available weights and using Light for sub-headings, Regular for h1. Note as a Phase-4 follow-up.

### Layouts considered for slide 1

- **Centered title with avatars** (current). Rejected per marketing-UI rule: "make the brand or product name the loudest text" — avatars compete with the title.
- **Full-bleed photograph behind the title**. Rejected: no good photograph available, AI-generated imagery is forbidden by aesthetic rules, and a photo would dilute the editorial feel.
- **Title only, dead-centre, nothing else** (most minimal option). Considered. Rejected because the QR + venue/date metadata are useful for a _recorded_ talk or a deck that gets shared — slide 1 is also doing wayfinding work.

---

## Acceptance checks before merging

- [ ] All 22 slides render. Eyeball test at 1920 / 1280 / 768 / 375.
- [ ] No remaining `text-gray-*` literals in `components/slides/`.
- [ ] No remaining `shadow-lg`/`shadow-md`/`shadow-none` literals on `<Card>`.
- [ ] No remaining hex literals or inline `style={{...}}` in slide components (excluding the dnd-grid sub-system, which has its own scope).
- [ ] WebAIM contrast spot-check on the three rendered hero slides: 1, 11, 22. All text passes AA body or AA large.
- [ ] `prefers-reduced-motion` respected on any new entrance animation.
- [ ] Visual QA pass against Phase 2a baseline screenshots once they exist.
