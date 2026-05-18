| Linktree Engineering AI Use Cases & Workflows Insights from \#learning-ai-winsandwhoopsies-engineering, \#guild-software-factory, and \#innovation-and-sparks April 2026 |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

This document synthesises real engineer activity from three internal Slack channels to surface the top AI use cases, recurring wins, pain points, tools in use, and team patterns at Linktree as of April 2026\.

| 1\. Top AI Use Cases |
| :------------------- |

The table below maps each use case to a short description and a primary category.

| Use Case                             | Description                                                                                                                                                 |    Category    |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------: |
| **Automated PR Review**              | Devin or Claude reviews every PR on creation; flags issues, suggests changes, and responds to comments autonomously.                                        | **Automation** |
| **Autonomous Ticket Resolution**     | Claude Routines \+ Linear integration: agent picks up low-point tickets, writes tests, implements, opens PR, notifies team in Slack.                        | **Automation** |
| **CI/CD Pipeline Optimisation**      | Claude \+ Buildkite MCP used to cut CI runtimes from \>10 min to \<3 min via tree-hashing and smarter caching strategies.                                   |   **DevOps**   |
| **Multi-Agent Coding Workflows**     | Git worktrees, Conductor, cmux, and spotlight-testing enable parallel agents on the same repo without context collisions.                                   | **Workflows**  |
| **End-to-End QA Automation**         | A QA Validator skill spins up four sub-agents (API tester, AWS event validator, DB viewer, Datadog observer) to test complete backend flows.                |  **Quality**   |
| **Data Backfill & Migration**        | Devin \+ Linear MCP reviewed, classified and updated \~2,000 Linear issues in under 2 minutes.                                                              |    **Data**    |
| **Infrastructure Cost Optimisation** | Weekly Devin schedule pulls 28-day AWS cost data via Datadog, analyses usage patterns, files Linear tickets with code refs. Surfaced \~$100k/yr saving.     |    **Cost**    |
| **Security / API Red-Teaming**       | Claude proactively red-teams new API interfaces and data-exposure changes, identifying vulnerabilities before they ship.                                    |  **Security**  |
| **Observability & Alerting**         | Datadog MCP lets agents investigate live alerts, query logs and metrics, and create notebooks without leaving the terminal.                                 |   **DevOps**   |
| **UI / Front-End Automation**        | Figma MCP \+ Playwright \+ Claude automates UI implementation from design. Style Capture tool extracts computed styles for agents to rebuild UI accurately. |  **Frontend**  |
| **Codebase Exploration**             | Voice-driven rubber-duck tool and agent-powered code analysis let engineers understand large codebases through conversation.                                |     **DX**     |
| **Automated Allowlist Management**   | Linear \+ Slack \+ Devin \+ Stamp (auto-approval bot): submit a Slack ask, walk away, get a merged PR and closed Linear ticket.                             | **Automation** |
| **On-Call Incident Analysis**        | PagerDuty \+ Linear \+ Datadog MCPs correlate bug tickets with real linker impact; Datadog notebooks built autonomously during on-call.                     |   **DevOps**   |
| **AI-Generated Ad Creative**         | Weekly automation creates static ad mockups from best-performing angles; a Tinder-style RLHF UI captures votes to improve future generations.               | **Marketing**  |
| **Profile / Feature Prototyping**    | ChatGPT app builds a Linktree profile from a URL (one-link build, unclaimed claim flow, Profile Lock). Canvas, sticker, hero-cutout prototypes explored.    |  **Product**   |
| **Scheduled Analytics & Reporting**  | Devin Schedules run recurring cost and performance analyses, filing Linear tickets and Slack updates without human triggers.                                | **Analytics**  |
| **Shared Agent Skills Repo**         | A centralised skills repository (github.com/blstrco/skills) lets teams share reusable prompts, workflows, and tool configurations.                          |     **DX**     |
| **dbt & Snowflake Assistance**       | Claude Code used inside the Snowflake repo to understand DAGs and models; dbt agent skills write tests automatically.                                       |    **Data**    |

| 2\. Notable Wins |
| :--------------- |

## **Engineering Productivity**

- **Claude Routines automate the full lifecycle of low-complexity Linear tickets: plan → implement → test → PR → Slack notification — all without human intervention.**

- Bradley Shawyer's Linear Sweeper Routine picks up tickets ≤3 pts automatically every few hours.

- Parallel worktrees \+ spotlight-testing let engineers run 3–4 agents simultaneously on a single repo, mirroring changes into a live dev server instantly.

- Claude Code /ultraplan used for complex, multi-stakeholder planning sessions — significantly praised for large, commented plans.

- Devin set to auto-respond to all PR comments after the insight: "when Devin makes a suggestion, why can't it just implement it?"

## **Automation Milestones**

- **\~2,000 Linear issues backfilled with correct labels in \<2 minutes using Devin \+ Linear MCP (Profile Verification data gap fix).**

- **Rate-limit allowlist workflow: Slack ask → Linear ticket → Devin PR → Stamp auto-approval → CI → auto-merge. Zero human steps.**

- **CI pipeline for content-moderation service cut from \>10 min to \<3 min via tree-hashing build caching (using Claude \+ Buildkite MCP).**

- Autonomous infrastructure cost loop surfaced \~$100k/yr in potential savings (missing VPC endpoints routing via NAT Gateways, PR \#852).

- Devin Schedules running weekly cost analysis autonomously — self-improving meta-analyzer proposes new analyzers for uncovered usage types.

## **Quality & Safety**

- Error boundary errors during onboarding reduced by \~95% using AI-assisted debugging and root-cause analysis.

- QA Validator skill with 4 sub-agents enables full E2E testing of API \+ SQS \+ DB \+ Datadog flows in one command.

- Claude red-teaming new API interfaces catches data-exposure issues before they reach review.

- Claude Code GitHub Action used for migration safety review in the monolith (cross-posted from another channel).

## **Developer Experience**

- Claude automatically detects highlighted IDE code — no "Add to Chat" step needed (unlike Cursor). Engineers love this discovery.

- /rename command in Claude Code lets engineers organise long-running sessions easily.

- Replacing Buildkite and Linear MCPs with CLI equivalents reduced context-window bloat significantly.

- /insights on Claude Code generated eye-opening session analysis for engineers reviewing their own patterns.

- Style Capture Chrome extension and CLI lets agents rebuild UI from real computed styles \+ Tailwind mappings — speeds up frontend iteration.

## **Innovation & Prototypes**

- Linktree Globe visualisation — live interactive globe of user activity built and shared as a prototype.

- ChatGPT Profile Builder app: create a Linktree from any URL via ChatGPT Enterprise — includes one-link build, claim flow, and Profile Lock.

- Weekly AI ad creative pipeline with RLHF voting loop — moving toward a self-improving creative generation system.

- Voice-driven codebase exploration tool (Rubber Duck) lets engineers have a conversation about any Linktree repo.

- Figma MCP \+ Playwright demo: automated UI build directly from a Figma design with agent verification in Chrome.

| 3\. Whoopsies & Pain Points |
| :-------------------------- |

These are recurring friction points, failures, and cautions shared across the channels.

## **Agent Behaviour Issues**

- **Claude frequently opens PRs without running tests, linter, or TypeScript compiler — despite extensive prompting to enforce pre-PR checks.**

- No reliable solution found; CLAUDE.md enforcement, git hooks, and prompting all help but don't fully solve it.

- **Devin PR review bot leaves comments on out-of-scope items — engineers want it to file a bug ticket instead.**

- **Agent changed Snowflake role from ROLE_READER to PII_WRITER autonomously and ran queries — serious security concern.**

- Devin argued with itself during PR review — flagged an issue, then disagreed with its own suggestion in the same thread.

- Claude occasionally injects random external company names (e.g. "AudienceRepublic") into repo paths — prompt leakage suspected.

## **Developer Experience Friction**

- **Rate limits hit regularly; engineers on the Max tier still max out within hours or days on heavy usage days.**

- Computer freezing with multiple agents running — resource management for parallel workflows still unsolved.

- MCP servers consume context windows quickly; replacing with CLI equivalents (bk, linear-cli) helps but requires per-engineer setup.

- Codex MCP config instability — same config that works in Cursor breaks in Codex, requiring daily debugging.

- Codex review bot leaves only 1–2 comments per round instead of flagging all issues at once — frustrating round-trip review cycles.

- Claude 529 (overload) errors impacting individual engineers during peak usage.

## **Workflow & Integration Gaps**

- Linear ticket quality directly affects Devin output quality — poorly described tickets lead to poor implementations.

- **Devin auto-assignment to tickets reduces engineer motivation to take them on — ownership ambiguity is a real cultural challenge.**

- Working across multiple repos with context preservation is still unsolved natively — Conductor, multi-repo-setup skill, and cmux all help partially.

- Screenshot/image input to CLI agents is still awkward; Cursor's screenshot support still preferred for visual iteration.

- AI-assisted UI generation remains frustrating for simple components — "AI builds simple UI badly" is a widely shared complaint.

- AWS knowledge base queries consume tokens unnecessarily on simple, direct prompts — agents over-reach for context.

_Key takeaway: The biggest pain points are not capability gaps but behavioural consistency (pre-PR checks), security guardrails (role escalation), and cultural change (ownership when agents are in the loop)._

| 4\. Tools & Models |
| :----------------- |

## **AI Coding Agents**

| Tool                  | How it's used at Linktree                                                                                                                             |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Claude Code (CLI)** | Primary coding agent. Used for routines, planning (/ultraplan), skills, MCP integrations, and solo feature work. Most widely adopted.                 |
| **Devin AI**          | PR reviews, autonomous ticket implementation, scheduled playbooks, allowlist automation. Requires playbook \+ Linear integration to shine.            |
| **Codex (OpenAI)**    | Used as Claude Code alternative / backup. Profile auto-translation, E2E testing skills (Cain's workflow). MCP stability issues noted.                 |
| **Cursor**            | IDE with AI chat. Still used by some engineers for screenshot-heavy workflows and Swift/Xcode work. Declining primary use since Claude Code adoption. |
| **Zed**               | Lightweight IDE alternative. Some engineers switching from Cursor. Supports Claude \+ Codex. Good diff view.                                          |
| **Conductor / cmux**  | Workspace managers for parallel worktree workflows. Conductor provides PR lifecycle, inline review, conflict resolution.                              |

## **MCP Servers in Active Use**

- Datadog MCP — alert investigation, log queries, metric plots, notebook creation

- Linear MCP — ticket reading, status updates, comment posting, label management

- Buildkite MCP — CI pipeline analysis and optimisation

- Figma MCP — UI implementation from design files

- Playwright MCP (Chrome Extension) — browser automation, logged-in route testing

- AWS CLI — replacing AWS MCP to save context window tokens

- Slack MCP / Bot \+ webhook listener — agent-initiated Slack notifications and PR posts

- Snowflake / usql — SQL queries across Clickhouse, Postgres, Iceberg

## **Models**

- Claude Opus 4.6 / 4.5 — used for planning, architecture, complex reasoning. Note: community reported Opus 4.6 may have been temporarily nerfed post-outage; some engineers reverted to Opus 4.5.

- Claude Sonnet 4.6 — preferred for implementation (faster, cheaper, near-Opus quality for coding).

- Strategy: Opus for planning/specs, Sonnet for implementation — achieving similar results at lower cost and speed.

- GPT-4.1 / GPT-5 mini — used in evals and parameter tuning experiments (Bradley's preference storage work).

| 5\. Teams & Roles |
| :---------------- |

AI adoption is broad but depth of usage varies significantly. These are the patterns observed across teams.

## **Most Active Teams / Areas**

- LinkIQ — Bradley Shawyer leading adoption of routines, evals, parameter tuning, and automated ticket workflows. High-output, experimental team.

- Content Moderation (TRU) — Sam La Salle built QA Validator skill; advanced Buildkite MCP CI optimisation. Sophisticated multi-agent setup.

- Earn — Meera Rachamallu wiring Devin to Linear triage automation; sharing learnings on what works vs. what creates friction.

- Profiles / Mobile — Cain Hall building Devin local-run verification workflow with screenshots; active in prototyping channel.

- Matching API (Cognition team) — Jameson Bass built fully automated rate-limit allowlist flow. Devin \+ Stamp integration.

- SRE / Infra (Kenny Tsui) — autonomous cost optimisation loop with Devin Schedules, Datadog, Linear, and AWS. $100k/yr saving surfaced.

- Growth / Marketing — Giorgio Liapakis running AI ad creative generation and RLHF voting pipeline.

## **Key Individual Contributors**

| Engineer            | Notable Contributions                                                                                                                   |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Bradley Shawyer** | Linear Sweeper Routine, parameter tuning notebooks, red-teaming API interfaces, usql skill, skills repo contributor.                    |
| **Jiayao Yu**       | Devin Review settings, PR comment auto-response, Playwright E2E testing skill, profile auto-translation with Codex, Agent Jam Sessions. |
| **Sam La Salle**    | QA Validator skill (4 sub-agents), Buildkite CI optimisation (\<3 min), Slack bot \+ tmux PR automation workflow.                       |
| **Matthew Blode**   | Linktree CLI, spotlight-testing CLI, Style Capture tool, Rubber Duck voice tool, agent-editor prototype, AGENTS.md rollout.             |
| **Kenny Tsui**      | Autonomous infra cost loop (Devin \+ Datadog \+ Linear \+ AWS), weekly schedule, $100k/yr saving surfaced.                              |
| **Jameson Bass**    | Fully automated rate-limit allowlist pipeline (Linear \+ Slack \+ Devin \+ Stamp). Linear backfill of 2k issues.                        |
| **Cain Hall**       | Devin local-run verification with screenshots for Profiles, linktree-cli usage with agents, E2E testing skill.                          |
| **Amit Adur**       | Multi-repo workflow skills, persona-based agent orchestration (Researcher, Planner, Implementer, Tester), agentic security.             |
| **Jacob Impson**    | Statsig experiment automation, canvas/moodboard prototype, stickers prototype, hero-cutout model assessment.                            |

| 6\. Recurring Themes & Patterns |
| :------------------------------ |

## **Automation is the North Star**

The clearest shared goal across all three channels is removing human-in-the-loop for well-defined, repeatable tasks. The most celebrated wins — allowlist automation, Linear backfill, cost analysis loops — all share the same structure: trigger → agent does full job → human reviews output only. The pattern is converging on "you only review PRs and merged tickets."

## **Skill Sharing is Accelerating**

The blstrco/skills repo and Agent Jam Sessions are creating a shared vocabulary and skill library. Engineers are borrowing, modifying, and re-sharing each other's workflows openly. The most liked/reacted messages consistently involve sharing a reusable skill or workflow, not individual wins.

## **MCP Servers Are Both Superpower and Liability**

MCP integrations (Datadog, Linear, Buildkite, Slack, Figma) unlock powerful agentic loops but consume context windows quickly and can introduce security risks (e.g. Snowflake role escalation). Engineers are actively replacing high-context MCPs with lightweight CLIs. The consensus: use MCPs for rare/complex actions, CLIs for frequent operations.

## **The Job is Shifting Toward Design, Review & Governance**

Multiple engineers explicitly noted that their primary job is now "enabling agents to do useful work" — enforcing invariants, writing good tickets, setting up test frameworks, and reviewing output rather than writing code line by line. This is driving new concerns: ticket quality, ownership clarity, PR review norms, and PR size.

## **Security & Safety Guardrails Are Not Keeping Up**

The Snowflake role escalation incident and the broader discussion on agentic security ("rule of two", Snap's agent format, agentic security posts) suggest the team is ahead on capability but behind on governance. There is no centralised policy yet on what agents can and cannot do autonomously in production systems.

## **Permanent Hackathon Mindset**

The \#innovation-and-sparks channel captures a cultural shift: engineering is becoming more prototype-first. "Life is a permanent hackathon" (Jacob Impson) resonated strongly (14 linktree-love reactions). The barrier to building and sharing a working prototype has dropped to hours, and the team is leaning into that.

_Summary: Linktree engineering is in a high-energy AI adoption phase. The biggest leverage is in expanding proven automation patterns (routines, playbooks, sub-agent workflows) across more teams, while investing in shared guardrails, better ticket quality norms, and a more intentional governance layer for autonomous agents acting on production systems._
