# Phase 2c — UI redesign targets

Five highest-leverage slide redesigns, ranked by leverage = (severity of current density/clarity problem) × (reusability of the new primitive).

Assumes the Phase 2b visual system (semantic body text token, normalised card shadow, fluid hero size, optional `--shadow-card`/`--shadow-callout`) is in place by the time these land.

---

## Pick 1 — Slide 11: Tyler's 20 Slack bugs, end-to-end

**File**: `components/slides/slide-11-workflow-matthew.tsx`

### Why this slide

Worst density flag in the deck. Seven equal-weight cards squeezed into `xl:grid-cols-7` at 1280×800 → each card is ~165 px wide, body text drops below `slide-text-sm` once the gap is paid for, and there is no flow line so the eye reads it as a static 7-up grid instead of a workflow. Below `xl:` it falls back to `md:grid-cols-4` which orphans steps 5–7 onto a second row of three (no rhythm). This slide is the centrepiece of the demo — if it doesn't read as a pipeline it tanks the narrative.

### Wireframe (proposed)

```
┌────────────────────────────────────────────────────────────────────┐
│  Tyler's 20 Slack bugs, end-to-end           (h1, centred)         │
│  Matthew's workflow — ~20 hours of work running in parallel.       │
│                                                                    │
│  ┌── Phase A: INTAKE ─────────────────────────────────────────┐    │
│  │  ① Slack MCP    →   ② Linear tickets                      │    │
│  │     pull comments      one ticket per comment              │    │
│  └────────────────────────────────────────────────────────────┘    │
│                              │                                     │
│                              ▼                                     │
│  ┌── Phase B: FAN OUT ───────────────────────────────────────┐     │
│  │  ③ linear-worktree  →  ④ cmux × 20  →  ⑤ Claude plan     │     │
│  │    20 isolated branches  20 terminals    phased todos      │     │
│  └────────────────────────────────────────────────────────────┘    │
│                              │                                     │
│                              ▼                                     │
│  ┌── Phase C: SHIP ──────────────────────────────────────────┐     │
│  │  ⑥ Execute → draft PR   →   ⑦ babysit-pr                  │     │
│  │     Claude / Codex 5.5        polls, merges when green     │     │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ Callout: First attempt fast → meet reality fast → pivot. │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                    │
│  Footnote: github.com/mblode/agent-skills                          │
└────────────────────────────────────────────────────────────────────┘
```

Three horizontal phase rows stacked vertically. Inside each row, 2–3 step "chips" arranged left-to-right with a thin connector arrow between them. Vertical arrow between phases. Phase label in small caps acts as the chapter heading.

### What stays the same

- Title, subtitle, callout copy, footnote, QR corner.
- All 7 step titles and bodies — same data, same order, just regrouped into 3 phases (2 + 3 + 2).
- Numbering 1–7 preserved.

### What changes

- The `STEPS` array gains a `phase: "intake" | "fanout" | "ship"` discriminator (or is restructured into a `PHASES` array of step groups).
- Replace `grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7` with a vertical `flex flex-col` of phase rows. Inside each row: a `flex flex-row` of step chips with `→` separators between them and a phase label on the left edge.
- Card → `WorkflowStepChip` primitive (same content, lighter chrome — drop `shadow-md`, use `border` + `bg-card`). Step number becomes a small leading badge instead of a giant `text-2xl text-gray-400` numeral.
- Down-arrow connectors between phases (CSS-only, no library needed).

### Effort

~45 min once `WorkflowStepChip` and `WorkflowPhaseRow` exist. ~75 min including those primitives (which slide 12 reuses).

### Before/after success criteria

- No card uses `slide-text-xs` (currently the Tyler slide is borderline at 1280px on the body copy).
- At 1280×800 the slide reads as 3 phases top-to-bottom, not a 7-up grid.
- At 768px the phases stack but each phase row still shows its 2–3 chips horizontally (no 7-tall vertical list).
- A visible flow exists: arrows between chips inside a phase, arrow between phases.
- Step number is no longer the visually loudest element on each card; the title is.
- Callout and footnote remain visible without scroll at 1280×800.

---

## Pick 2 — Slide 12: A recommendations platform in a week

**File**: `components/slides/slide-12-workflow-mru.tsx`

### Why this slide

Same disease as slide 11, slightly less acute: 6 equal cards in `xl:grid-cols-6` (~190 px each) that are conceptually a sequence ("plan → plan with MCPs → models → routines → lifecycle → docs"). Below `xl:` falls back to `md:grid-cols-3` for a 2×3 grid that still doesn't communicate sequence. Reusing the same primitive as slide 11 is high leverage — one design decision, two slides fixed, and the audience sees Matthew's and Mru's workflows in the same visual language, which is the whole narrative point.

### Wireframe (proposed)

```
┌────────────────────────────────────────────────────────────────────┐
│  A recommendations platform in a week                              │
│  Plan once. Let routines ship through the night.                   │
│                                                                    │
│  ┌── Phase A: PLAN ──────────────────────────────────────────┐     │
│  │  ① Plan in Linear   →   ② Plan with MCPs                  │     │
│  └────────────────────────────────────────────────────────────┘    │
│                              │                                     │
│                              ▼                                     │
│  ┌── Phase B: BUILD ─────────────────────────────────────────┐     │
│  │  ③ Opus → Sonnet   →   ④ Claude routines                  │     │
│  └────────────────────────────────────────────────────────────┘    │
│                              │                                     │
│                              ▼                                     │
│  ┌── Phase C: VALIDATE ──────────────────────────────────────┐     │
│  │  ⑤ Local → QA → Prod   →   ⑥ Onboarding docs              │     │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ Callout: Bonus — Devin as the onboarding buddy ...       │      │
│  └──────────────────────────────────────────────────────────┘      │
│                                                                    │
│  Footnote                                                          │
└────────────────────────────────────────────────────────────────────┘
```

Three phases of two steps each. Symmetric, easy to read.

### What stays the same

- Title, subtitle, callout, footnote, QR corner.
- All 6 step titles and bodies, in order.

### What changes

- Same `WorkflowPhaseRow` + `WorkflowStepChip` primitives as slide 11.
- `STEPS` array regrouped into 3 phases (2 + 2 + 2).
- Phase labels: PLAN / BUILD / VALIDATE.

### Effort

~20 min after slide 11 lands (data restructure + phase labels — primitive already exists).

### Before/after success criteria

- Visual parity with slide 11 — audience sees "another workflow, same shape".
- No card below `slide-text-sm` body.
- 1280×800 fits without scroll.
- 768px shows 3 phases stacked, each phase still horizontal.

---

## Pick 3 — Slide 14: Wins from across Linktree

**File**: `components/slides/slide-14-wins.tsx`

### Why this slide

Eight cards in `xl:grid-cols-4` = a 2-row grid where every card has a **headline / owner-name / 2-line body** stack with `slide-text-xs text-gray-500` for the owner (which fails AA per Phase 1). The 8 cards are not a sequence; they're 8 unrelated wins. The current grid is fine _structurally_ but the typographic weight is wrong: the owner name is the smallest, faintest element when culturally it's the most important attribution (these are real teammates' wins). Plus `slide-text-xs` is a Phase-1 density flag.

The unlock: turn it from a card grid into a **two-column "wins ledger"** where each row has owner avatar + name + win headline + body. More legible, more human, and at 8 entries it fits comfortably in two columns.

### Wireframe (proposed)

```
┌────────────────────────────────────────────────────────────────────┐
│  Wins from across Linktree                                         │
│  Real shipped work. Steal liberally.                               │
│                                                                    │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │ [J] Jameson                 │  │ [J] Jameson                 │  │
│  │     Rate-limit allowlist    │  │     Linear backfill         │  │
│  │     Slack ask → Linear → …  │  │     ~2,000 issues in <2 min │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │ [K] Kenny                   │  │ [S] Sam                     │  │
│  │     $100k/yr cost loop      │  │     Buildkite CI            │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │ [S] Sam                     │  │ [M] Matthew                 │  │
│  │     QA Validator            │  │     Style Capture           │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │ [M] Matthew                 │  │ [G] Giorgio                 │  │
│  │     Rubber Duck             │  │     AI ad creative          │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
│                                                                    │
│  Footnote                                                          │
└────────────────────────────────────────────────────────────────────┘
```

Two-column "ledger". Each row: owner avatar/initial as a leading visual anchor + owner name (regular weight, full size), then headline (semibold), then 1-line body. No more `text-xs` owner crumb. Optionally group rows by owner using a subtle divider — but a flat 2×4 ledger is simpler and reads top-to-bottom.

### What stays the same

- Title, subtitle, all 8 win entries (headline / body / owner), order, footnote, QR corner.

### What changes

- `WINS` data unchanged.
- Replace `xl:grid-cols-4` Card grid with `md:grid-cols-2` ledger rows of `WinRow` components.
- Owner name is no longer `slide-text-xs text-gray-500` (Phase 1 contrast fail). Becomes `slide-text-sm` semantic muted text + a small initial avatar (consistent with slide 22 closing slide).
- Drop `shadow-md` cards; use a thin border + generous padding for ledger rows.

### Effort

~30 min. Could potentially share a `PersonAttributedRow` primitive with slide 22, but only if there's clear reuse — see "Patterns to extract".

### Before/after success criteria

- Owner name passes AA contrast (no more `text-gray-500`).
- No `slide-text-xs` anywhere on the slide.
- At 1280×800 all 8 wins are visible without scroll.
- Owner attribution reads as a peer credit, not a footnote.
- At 768px ledger collapses to a single column of 8 rows — still legible because each row is shorter than the current card.

---

## Pick 4 — Slide 6: How we break down a problem

**File**: `components/slides/slide-06-frameworks.tsx`

### Why this slide

This is a 5-step process _masquerading_ as a card grid (`md:grid-cols-5`). It's the methodology slide that the next two workflow slides (11, 12) instantiate. If we redesign 11 and 12 to use a phased-flow primitive, slide 6 has to look like the same family — otherwise the audience sees three different visual languages for "a sequence of steps". This is the "establish the pattern" slide; 11 and 12 are "here's the pattern in action". Same primitive, simpler version (single phase, 5 steps in a row).

### Wireframe (proposed)

```
┌────────────────────────────────────────────────────────────────────┐
│  How we break down a problem            (h1, centred)              │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  ① Gather   →  ② Plan    →  ③ Decompose →  ④ Parallelize → ⑤ Babysit │
│  │    context     mode         independent   worktrees +        & merge │
│  │    MCPs, …     phases…      tracks        agents…           ship    │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ Research → plan → decompose → parallelize → merge.       │      │
│  │ "Do extensive research. Make a plan with phases…"        │      │
│  └──────────────────────────────────────────────────────────┘      │
└────────────────────────────────────────────────────────────────────┘
```

A single horizontal `WorkflowPhaseRow` with 5 step chips and arrows between them — same primitive as slides 11/12, just one phase. The callout box stays as-is.

### What stays the same

- Title, all 5 step labels and bodies, callout text, QR corner.

### What changes

- 5-up Card grid → one `WorkflowPhaseRow` (no phase label needed since there's only one). Arrows between chips. The giant `slide-text-2xl text-gray-400` step numerals become small leading badges (matching slides 11/12).

### Effort

~15 min after slide 11's primitive exists.

### Before/after success criteria

- Visual family with slides 11/12 ("this is the framework, those are the instances").
- Step numerals no longer the loudest visual element.
- 1280×800 fits without scroll, callout visible.
- 768px wraps step chips to 2 lines but preserves arrow flow.

---

## Pick 5 — Slide 1: AI usage for engineers

**File**: `components/slides/slide-01-intro.tsx`

### Why this slide

Phase 1 flagged it as "currently OK but flat" and noted the hero type uses arbitrary `md:text-[110px] xl:text-[130px]` instead of the fluid scale. It's also the first impression — the audience decides in 5 seconds whether this deck is worth their attention. Currently: huge title, generic subtitle, two avatars + "+", QR corner. It's _fine_ but reads like a default Tailwind starter. Smallest risk, highest narrative payoff if we land it well — and it normalises the hero pattern that the closing slide (22) should mirror.

### Wireframe (proposed)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  ┌──────────────── eyebrow ──────────────┐                         │
│  │  LINKTREE · INTERNAL TALK             │                         │
│  └────────────────────────────────────────┘                        │
│                                                                    │
│  ┌────────────────────────────────────────────────────────┐        │
│  │  AI usage for engineers                                │        │
│  │  (huge fluid Editorial New, --slide-text-6xl)          │        │
│  └────────────────────────────────────────────────────────┘        │
│                                                                    │
│  ┌────────────────────────────────────────────────────────┐        │
│  │  Concrete workflows from two engineers shipping with   │        │
│  │  Claude Code, Codex, and Devin.                        │        │
│  └────────────────────────────────────────────────────────┘        │
│                                                                    │
│  ┌─ presenters row (left-aligned, not centred + clutter) ─┐        │
│  │  [M] Matthew Blode → matthewblode.com                  │        │
│  │  [M] Mru                                               │        │
│  └────────────────────────────────────────────────────────┘        │
│                                                                    │
│  ┌─ corner: QR ─────────────────────────────────────┐ │            │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

Add an eyebrow (small caps "Linktree · Internal Talk" or similar) that anchors context. Hero h1 gets fluid `--slide-text-6xl` (extension of the type scale) instead of the breakpoint hop. Presenters become a small left-aligned stack of two rows ("[avatar] Name + link") instead of an awkward `Avatar + + Avatar` centre-aligned pile.

### What stays the same

- The h1 string, subtitle string, both presenter names, link to matthewblode.com, QR corner.
- Vertical centring of the slide.

### What changes

- Add eyebrow `<p>` above the h1 (1 new line; copy is editable).
- Replace `text-6xl md:text-[110px] xl:text-[130px]` with `slide-text-6xl` (Phase 4 task is to add `--slide-text-6xl` to the fluid scale; this slide is the first consumer).
- Presenter row becomes `flex flex-col items-start gap-2` (or `md:flex-row gap-6`) instead of `flex-wrap justify-center` with a `+` separator. Drop the `text-gray-400` `+`.
- Subtitle and presenter copy use the new semantic body token (`text-foreground/85` or `text-muted-foreground` after Phase 2b's contrast fix), not `text-gray-700`.

### Effort

~20 min, plus one shared task: add `--slide-text-6xl` to the fluid scale (a globals.css edit; ~5 min).

### Before/after success criteria

- No arbitrary px font sizes (`text-[110px]`, `text-[130px]` gone).
- Hero scales fluidly between 375px and 1920px (no mobile/desktop step).
- No `text-gray-700`, no `text-gray-400` (Phase 1 drift items resolved on this slide).
- Eyebrow gives the title a frame so the slide reads less like a Tailwind template.
- Closing slide (22) can mirror the same eyebrow + name-row pattern for narrative bookends.

---

## Slides we are NOT redesigning (and why)

- **Slide 3 (evolution timeline)** — already story-shaped: 5 era cards in a 5-up grid with year labels. The grid _is_ the timeline; adding a flow-line treatment would be gold-plating. Phase 4's body-text token swap is enough. Keep.
- **Slide 15 (whoopsies)** — 6 cards in `xl:grid-cols-3` is the right density for this content (these are _unrelated_ failure modes, not a sequence). The grid is correct. Once `slide-text-xs` is gone and `text-gray-600` becomes semantic, this slide is fine.
- **Slide 22 (closing)** — split QR/bio layout already works. After slide 1 establishes the eyebrow + presenter-row pattern, slide 22 will inherit it via Phase 4 normalisation (small refactor, not a redesign).
- **All other slides (2, 4, 5, 7–10, 13, 16–21)** — either single-image / two-column / hero patterns that already work, or low-density list slides that the Phase 4 token sweep will fix. Redesigning them buys little; the dense-grid slides are where the audience actually loses the thread.

## Patterns to extract

Two reusable primitives drop out of these picks:

1. **`<WorkflowPhaseRow>`** with child **`<WorkflowStepChip>`**.
   - Used by slides 6 (1 phase × 5 steps), 11 (3 phases × 2/3/2 steps), 12 (3 phases × 2/2/2 steps).
   - API sketch: `<WorkflowPhaseRow label="INTAKE">{steps.map(s => <WorkflowStepChip n={s.n} title={s.title}>{s.body}</WorkflowStepChip>)}</WorkflowPhaseRow>`.
   - Internally: `flex flex-row items-stretch` with `<Arrow />` interleaved between chips. Phase row renders an optional small-caps label on the left and an optional down-arrow connector below it (when not the last phase).
   - Replaces three near-identical `grid grid-cols-N` blocks with one shared component. Wins for visual consistency across the methodology arc (slide 6 = principle, 11 = Matthew's instance, 12 = Mru's instance).

2. **`<PersonAttributedRow>`** (lighter-weight, lower confidence).
   - Used by slide 14 (8 win rows) and possibly slide 22 (presenters in closing) and slide 1 (presenters in hero).
   - API sketch: `<PersonAttributedRow avatar="/profile.jpg" name="Matthew" headline="Style Capture">…body…</PersonAttributedRow>`.
   - Worth extracting if and only if slides 1 and 22 land on the same row pattern. If 1 and 22 stay simpler, this collapses into a slide-14-local component.

Pattern (1) is unambiguous. Pattern (2) is an "extract if convenient" — don't block Phase 4 on it.
