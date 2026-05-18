### Overview

Planning session for an upcoming presentation/workshop on AI coding tools and workflows for approximately 40 engineers . The presentation is titled "AI usage for engineers" and will focus on sharing concrete workflows and best practices for AI-assisted development.

### Presentation Structure & Content

- **Opening**: Brief intro covering how good AI coding has become, noting that the head of Claude Code writes 90% of code with Claude Code
- **Framework section**: Frameworks for decomposing problems and approaching them
- **MCP selection**: Guidance on choosing the right MCPs, with focus on UI code considerations
- **Tool comparison**: When to use Devin vs Claude Code vs Codex
- **Workflow sharing**: Concrete examples from both presenters showing specific workflows rather than abstract concepts
- **Best practices**: Leveraging SkillMD, role sets, guardrails, and unexpected context sources like Slack conversations
- **AI for debugging and testing**: Using AI tools with local development, QA, and production logs
- **Staying current**: Section on keeping up with AI and tech developments

### Venkata's Workflow Example

Implemented a recommendations platform in approximately one week using AI tools :

- Platform serves as framework where teams can register different recommendation types (link optimization, product recommendations)
- Used embedded agent with MCP tools from Chat (42 MCP tools available) to collect context and generate recommendations
- Workflow: Created linear project from design doc, set up Claude routine that created PRs every hour through the night, reviewed and debugged PRs each morning
- Uses search extensively for cross-repo work, leveraging Devin as "onboarding buddy" for unfamiliar codebases

### Matthew's Workflow Example

Working on Tyler's bugs from Slack as concrete scenario :

- Used Slack MCP to convert Slack comments into Linear tickets
- Used plan mode in Claude to expand ticket details
- Employed work trees to parallelize 20 hours of work
- Created "babysit PR skill" that polls and checks for Devin, Codex, and Cursor comments
- Approach: Rapidly implement first attempt, get feedback quickly, pivot based on reality rather than spending too much time upfront
- Example: Working on public MCP server, went down wrong path on auth implementation, got quick feedback and corrected direction
- General principle: When doing manual work (creating dashboards, checking logs), consider if an MCP can do it instead
- Tools include Arbor skill for UI components, Chrome extensions, and custom tools
- Heavy Claude and Codex user (maxed out Claude Code 2000 tokens and 20x Claude plan, ~$17k worth of Codex usage)

### Interactive Session Planning

- **Breakout sessions**: 20-30 minute group discussions in teams of 5 people
- **Focus**: Participants will discuss projects they're working on or dreading, exploring creative solutions using AI tools
- **Alternative approach**: Present a scenario and have groups plan how to use Devin, Codex, etc. to execute
- **Presentations**: 5 minutes per team to share their approaches
- **Goal**: Move beyond default linear ticket workflow to explore novel approaches

### Specific Tools & MCPs Mentioned

- Linear MCP
- Slack MCP
- Datadog MCP
- Arbor skill for UI components
- Warp terminal (recently went open source)
- TMUX

### Key Principles Discussed

- **Bottlenecks are shifting**: With AI tools, bottlenecks move from coding to context gathering, ticket creation, and parallelization
- **Speed to feedback**: Writing code quickly with AI allows faster discovery of blind spots and wrong directions
- **QA mindset**: Putting on QA hat to test locally, then QA, then prod with access to logs and failures

### Action Items

- [ ] Venkata to add slides to PowerPoint tomorrow
- [ ] Matthew to create slides showing their workflow
- [ ] Venkata to create slides showing their workflow
- [ ] Venkata to test connecting Slack MCP to learning AI wins channel and create top stories from most upvoted content
- [ ] Venkata to send meeting notes to Matthew
- [ ] Both to sync again around the same time to review progress and plan next steps

### Additional Context

- Presentation will use simple PowerPoint format rather than Linktree assets
- Both presenters use different approaches: Venkata more Claude and Codex heavy, Matthew also uses Devin
- Reference sources for staying current include X (Twitter), TikTok, newsletters, and WhatsApp groups (~100 people)
-
