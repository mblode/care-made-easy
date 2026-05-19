# Care made easy — Speaker Notes

## 1. Care made easy

- Yes, I built a to-do list app in 2026. The most overdone app in software.
- But the app isn't the point. The tools are.
- By the end of this talk, you'll know how to build your own stack that makes everything you ship from here better.

## 2. About me

- I only build things I personally want to use. That principle has held across two startups — VenueSafe and Fingertip, both acquired.
- Now I run AI at Linktree and I'm an OpenAI Codex Ambassador.
- But the principle is the same: audience of one.

## 3. You can sense carelessness

- Jony Ive, Patrick Collison interview
- Users can't see your code but they feel care
- Care is about the user, not vanity

**[PAUSE]** Let it land. Two full beats of silence.

## 4. You won't use this app

- You won't use my to-do app. And honestly, I won't use yours either. That's fine.
- But the tools that built it keep paying dividends.
- Everything is open source. The tools are the gift.

**[PAUSE]** "You won't use this app" is confrontational on purpose. Own the pause. Then continue: "But everything that built it is open source."

> **Transition to 5:** "So you saw the list. But the list is the smallest part of what makes this work."

## 5. The list is the smallest part

- Sync: tasks survive offline
- Surfaces: people and agents enter from different places
- Agents: the app is agent-native — CLI, MCP, skills all have full access
- Polish: the app has to feel trustworthy

> **Transition to 6:** "Every one of those has to be simple. And simple is a specific word."

## 6. Easy is nearby. Simple is one fold.

- Rich Hickey: simple = one fold (Latin sim-plex), no braiding. Easy = nearby (Latin adjacens), familiar.
- Easy tools let you sprint early, but complexity kills you over the long haul.
- "Simplicity is a prerequisite for reliability." — Dijkstra

**[PAUSE]** This is the intellectual anchor. Let it breathe.

## 7. The bottleneck has changed

- Agents made code cheaper. The construct is easy. The artifact is what matters.
- I shipped Done Bear's offline sync in a weekend. It works in airplane mode. That kind of speed is normal now.
- The question is: does what you ship have taste? Or does it feel like AI slop?

**[PAUSE]** This is the thesis. Slow down before delivering it.

> **Transition to 8:** "Here's what the stack looks like."

## 8. Introducing the Blode Stack

- Infrastructure makes the app shippable
- Defaults give agents taste
- Context gives agents memory
- Feedback keeps parallel work honest

## 9. Sync is where demos become products

- Before: a task exists on one screen
- After: order, history, recovery
- Users never think about sync. That's how you know it works.

## 10. One model. Many ways in.

- Web is only one way in
- CLI and MCP make the app agent-native
- Meet users where they work

## 11. Your own typeface

- Variable typeface, 400–900
- Roman and italic
- This is the visual voice of everything I ship. When the agent generates UI, it uses my typeface, not a system font. That's taste by default.

## 12. Blode Icons

- 3,754 icons, same API as Lucide
- The agent already knows Lucide. Same names, same props, so it picks these up without being told.
- That's what "taste by default" means — the agent reaches for your icons, not generic ones.

## 13. Blode UI

- 69 shadcn/ui components in a registry
- A moodboard dies on deployment. A registry lives in your dependency tree.
- The agent runs `npx shadcn add button` and gets your button, not the default one.

## 14. Style Capture

- Capture computed CSS, map to Tailwind
- Prompt with evidence, not adjectives
- Review becomes compare-to-target

## 15. Agent Skills

- 24 skills across planning, design, dev, quality
- Instructions, examples, and checks travel together
- Install once, reuse everywhere

## 16. Context starts as markdown

- AllMD turns anything into markdown
- Blode.md turns markdown into docs
- Same source feeds humans and agents

## 17. DiffHub

- Opens your branch in a cmux browser split, compares it to the detected base branch
- Leave notes on any line, copy them as a prompt
- `npx diffhub@latest cmux` — review before opening a PR without leaving your terminal

## 18. Spotlight Testing

- See worktree changes in a running dev server without rebuilding
- Useful when your first build is slow, or your dev environment depends on shared Docker or database setup
- On, test, off — clean restore

> **Transition to 19:** "That's the last tool. Now zoom out."

## 19. Build to solve your own problems

- None of these is impressive alone. A typeface? Icons? A diff viewer? Small.
- But each one removes a decision the agent used to get wrong. Stack enough of those and the bottleneck moves again.
- Give it away for free. If it helps you, it probably helps someone.

**[SLOW]** This is the callback. Deliver each phrase deliberately.

## 20. Find the problem that bothers you

- When you own the problem and the solution, you can experiment without asking permission.
- That headspace is where the best tools come from.
- Find a problem that bothers you. Build the tool. Ship it tomorrow.

**[SLOW]** This is the call to action. Make eye contact.

## 21. Questions

- matthewblode.com for the stack and everything else
