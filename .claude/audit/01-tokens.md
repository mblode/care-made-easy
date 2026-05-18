# Phase 1 — Token map & drift inventory

Source of truth before audits start. All references point at `app/globals.css` and `components/slides/`.

## 1. What IS tokenised (good)

### Colors (`:root` — `globals.css:50-89`)

- `--background: #d1d7dc` — slide background
- `--foreground: oklch(0.145 0 0)` — primary text
- `--card: oklch(1 0 0)` — pure white cards
- `--card-foreground: oklch(0.145 0 0)`
- `--primary: oklch(0.205 0 0)` (near-black)
- `--primary-foreground: oklch(0.985 0 0)` (near-white)
- `--muted: oklch(0.97 0 0)`, `--muted-foreground: oklch(0.556 0 0)`
- `--accent`, `--secondary` — both `oklch(0.97 0 0)` (light-gray)
- `--destructive: oklch(0.577 0.245 27.325)` — red
- `--border: oklch(0.922 0 0)`, `--input`, `--ring: oklch(0.708 0 0)`
- `--chart-1` … `--chart-5` — defined but **unused on slides**
- Dark mode (`.dark` `globals.css:867-876`) only redefines sidebar tokens — **not used by slides**

### Typography (`globals.css:9-11`, fonts in `app/layout.tsx:7-23`)

- `--font-sans` → Inter (Google Fonts)
- `--font-heading` → Editorial New (local)
- `--font-glide` → Glide variable (local)
- Fluid type scale `--slide-text-xs` → `--slide-text-5xl` (`globals.css:227-237`) using `clamp(min, vw, max)` — well-designed.

### Spacing (`globals.css:215-225`)

- `--slide-space-1` → `--slide-space-16` fluid via `clamp()`. Mapped to utility classes `.slide-gap-N`, `.slide-p-N`, `.slide-py-N`, `.slide-px-N`, `.slide-mb-N`, `.slide-mt-N`.

### Radius (`globals.css:239-243`)

- Fluid `--slide-radius-sm` → `--slide-radius-2xl`, exposed as `.slide-rounded-*` utilities.

### Shadow (`globals.css:52-57`)

- `--shadow-color: 208deg 7% 52%`
- `--shadow-elevation-medium` defined and used **only** by `.paper` class — **never used by Card or any slide**.

## 2. What is NOT tokenised — drift inventory

### A. Hardcoded background literal

- `components/slides/slide-container.tsx:10` — `bg-[#D1D7DC]`. The CSS variable `--background` already holds this; the literal duplicates it and breaks any future palette swap.

### B. Hardcoded text-on-bg using opacity

- `slide-container.tsx:10` — `text-black/80` (works, but bypasses `--foreground`)
- `slide-navigation.tsx:77` — `text-black/60` (nav counter; passes contrast on its own glass background but disconnected from token system)

### C. Tailwind `text-gray-*` shades — 50 occurrences across 22 slides

Distribution:

- `text-gray-600` × 30 — body copy on slide bg
- `text-gray-500` × 12 — small captions / labels / strikethrough text
- `text-gray-400` × 6 — decorative numbers and separators (slide 6:47, 11:61, 12:54, 21:39 are big step numerals; 1:30 is a `+` separator; 5:43 is a `→` arrow)
- `text-gray-700` × 2 — slide 1 only (`slide-01-intro.tsx:12, 15`)

These are Tailwind defaults, **not** semantic tokens. The system has `--muted-foreground` (`oklch(0.556 0 0)`) which is roughly equivalent to `text-gray-500`, but no semantic alias for `text-gray-600` (the primary body shade).

### D. Shadow drift on `<Card>` — 26 occurrences, three values

- `shadow-lg` × 12 (slides 2, 4, 7, 8, 9, 10, 16, 17, 18, 20)
- `shadow-md` × 9 (slides 3, 5, 6, 11, 12, 14, 15, 19, 21)
- `shadow-none` × 5 (slides 5, 6, 11, 12, 16 — all are summary/callout boxes that pair with `bg-foreground/5`)

Pattern is _somewhat_ coherent (heavier shadow on primary cards, none on callout boxes) but the choice between `lg` and `md` looks arbitrary. Worth normalising to two tokens: `card-elevated` and `card-flat`.

### E. Inline `style={{...}}`

- `slide-navigation.tsx:16-30` — large object: `backdropFilter`, frosted background gradient, three `borderXxxWidth` lines, `borderRadius: "35px"`, multi-line `boxShadow`. None of this is in tokens.
- No other `style={{...}}` in slide files. Good.

### F. One-off arbitrary type sizes

- `slide-01-intro.tsx:9` — `font-heading text-6xl leading-[0.98] tracking-tight md:text-[110px] xl:text-[130px]`. Two arbitrary px values. Bypasses the fluid `--slide-text-5xl` ramp (which tops out at 72px). The intent (huge hero title) is right; the implementation is non-fluid and a mobile/desktop step rather than fluid.

### G. Animation tokens defined but unused

`globals.css:122-184` defines `@keyframes flip`, `flip-back`, `scan-sweep`, `calm-breathe`, `render-flash`. None of these is invoked from any slide. `accordion-up/down` is used by Radix accordion only.

There is **no** transition-duration / easing token. Inline `duration-150 ease-out` lives in `components/ui/button.tsx`.

### H. `text-foreground` / `bg-foreground/5` — semantic, partially adopted

Slides 7, 10, 11, 12, 16, 20, 21 use `text-foreground` for emphasised body or `bg-foreground/5` for callout cards. Other slides default to `text-gray-600`. Inconsistent — should be globalised.

### I. Mixed grid breakpoints

- `md:grid-cols-3`, `md:grid-cols-4`, `md:grid-cols-5` (slide 6), `xl:grid-cols-4` (slide 2). Slides 11 and 12 jump straight to 7-col / 6-col grids on `md:` (768px) which is too tight for the content. Below `md:` everything stacks to one column — which is correct but means slides 11/12/14 become 7-/6-/8-tile vertical lists with no rhythm.

## 3. WCAG AA contrast — current colors

Background: `#D1D7DC` ≈ rgb(209, 215, 220), relative luminance ≈ **0.660**.

| Token                                       | Color                    | Luminance | Contrast vs. `#D1D7DC` | AA body (≥4.5) | AA large (≥3.0) |
| ------------------------------------------- | ------------------------ | --------- | ---------------------- | -------------- | --------------- |
| `text-black/80`                             | rgb(0,0,0) @ 80% over bg | ~0.024    | **9.6 : 1**            | PASS (AAA)     | PASS            |
| `text-gray-700` (#374151)                   | —                        | 0.064     | **6.2 : 1**            | PASS           | PASS            |
| `text-gray-600` (#4B5563)                   | —                        | 0.099     | **4.76 : 1**           | PASS           | PASS            |
| `text-gray-500` (#6B7280)                   | —                        | 0.176     | **3.14 : 1**           | **FAIL**       | PASS            |
| `text-gray-400` (#9CA3AF)                   | —                        | 0.360     | **1.73 : 1**           | **FAIL**       | **FAIL**        |
| `--muted-foreground` oklch(0.556) ≈ #757575 | —                        | ~0.230    | ~2.5 : 1               | **FAIL**       | **FAIL**        |

### Contrast findings

- **`text-gray-500` (used 12×)** fails AA body text. Affected: small captions, uppercase tag-style labels (`slide-text-sm font-semibold uppercase`), strikethrough "from" labels in slide 5, footnote text indirectly (slide-footnote uses `text-gray-600` so OK).
- **`text-gray-400` (used 6×)** fails AA Large. The big step numerals on slides 6, 11, 12, 21 are display-size and _visually_ pass via size, but the contrast math still fails. The decorative `+` (slide 1:30) and `→` (slide 5:43) are even smaller and definitely fail.
- **`--muted-foreground`** as currently defined would also fail on this background. Not used in slides today, but if Phase 2b/4 normalises body to `text-muted-foreground` we have to either (a) darken `--muted-foreground`, or (b) lighten the slide background, or (c) switch to dark mode.

## 4. Drift summary — what to fix in Phase 4

Concrete, ranked by blast radius (smallest → largest):

1. **`slide-container.tsx:10`** — replace `bg-[#D1D7DC] text-black/80` with `bg-background text-foreground/85` (1 line).
2. **`slide-01-intro.tsx:9`** — replace `text-6xl md:text-[110px] xl:text-[130px]` with a single `slide-text-5xl` (or extend the fluid scale with `--slide-text-6xl` if 72px feels small for the hero).
3. **Replace all `text-gray-600` body usages → semantic `text-muted-foreground`** _after_ darkening `--muted-foreground` to ≥ #4B5563 luminance (oklch ≈ 0.42).
4. **Replace all `text-gray-500` → semantic `text-muted-foreground/strong`** at ≥ AA contrast (e.g. oklch 0.50). Currently fails AA body.
5. **Replace all `text-gray-400` decorative shades → `text-foreground/30`** (visual only, not body text), and acknowledge they fail contrast — keep only on display-size numerals.
6. **Normalise `<Card>` shadows** to two tokens: `--shadow-card` and `--shadow-callout` (or just keep `bg-foreground/5 shadow-none` and `shadow-md` and drop `shadow-lg`).
7. **Tokenise navigation bar style object** in `slide-navigation.tsx:16-30`. Move radius `35px`, backdrop blur, glass gradient, and shadow into CSS variables. Reuse on any other floating UI later.
8. **Add transition tokens** — `--motion-duration-fast: 150ms`, `--motion-duration-base: 200ms`, `--motion-easing: cubic-bezier(0.2, 0, 0, 1)` (already exists in dnd-grid scope; promote it). Then we can use them on slide entrance later.

## 5. Baseline screenshots

Deferred to Phase 2a — the `ui-audit` agent will start the dev server and capture slides 1, 11, 22 at 375 / 768 / 1280 / 1920 px. We need browser tooling for that, not static reads.

## 6. Open questions for Phase 2b

- Keep light bg `#D1D7DC` (slightly cool gray) or swap to a warmer paper tone, or flip to dark? `#D1D7DC` is unusual — most decks use either pure white or near-black. The off-white is intentional and works, but reads "muted" rather than "premium". Phase 2b decides.
- `Glide` variable font is loaded but never used — drop it or actually use it (display accents)?
- Editorial New for headings is strong. Inter for body is fine but generic. Could pair with a more distinctive monospace for code/tags.
