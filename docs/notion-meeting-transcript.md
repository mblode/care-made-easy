Summary

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
- Notion connector used for meeting transcription

Notes

Transcript

Have you been using the Okay, I've sent an invite. Have you been using like linear MCP?

Yes, I basically use... So my workflow is really interesting. I was put on recommendations and I was able to implement the whole thing pretty much in a week. Because it's recommendations.

I feel like I've heard that, but I don't know what it means.

Yeah. So there's this recommendations platform. It's essentially a framework where different teams can register different recommendation types. So link optimization is an example of this. Another example is like product recommendations for the earn team. And it's in this like generalized config. So it can essentially serve any type of recommendation. MCP tools there's this embedded agent that talks to these tools from chat and Chat has like 42 really great MC2 tools, as you know, collects context and then generates a recommendation with that recommendation type, stores it, and then any team can then call a simple API, get recommendations and serve it across the app.

Sick.

So yeah, it's so good to have a generic platform for that stuff.

Yeah, so I can talk about what I did for that. Took brads. design doc, I created a linear project iterating on it for a few days to get it to be really good. And then I created a cloud routine that literally every hour picked up a PR, created it, Through the night and then every morning, I would sit with the PRs and... add comments, debug, and then let it keep going. And there's like a review routine.

So it's, Yeah, sick.

So I can talk about how I did that. I don't know, it's... Yeah, okay.

I think that's good. I think if it's like concrete workflows that we're sharing. Um, Even like specific pain points, like, how we solved it. I think that's really compelling instead of like vague. abstract stuff. Because that kind of shows like this is gold standard because it's moving so fast. Like this is actually what I'm doing. Yeah.

I think maybe we can start off with a A brief intro and then go into the, like, I think it would be really cool to talk about where AI coding is now. Like, we can talk about how good it's gotten. Like, the head of Cloud Code said that he writes 90% of his code with Cloud Code. So, you know, if someone... at that caliber is doing it, I think it's just a sign. So we can just like do a brief slide on that. And then we can go into the framework. Like we can write frameworks for decomposing a problem and approaching it.

I wanted to write a slide on change. Choosing the right MCPs, I think that's a big part of it. I don't work with a lot of UI code, so maybe you can add color to that part. I don't anymore. Yeah. What else?

Makes sense.

And then we can talk about when to use Devin versus when to use Cloud Code. I don't use Codex, so maybe you can talk about Codex more. Yeah.

I think it can be sort of like a discussion. Yeah. And sharing. our workflows and then like Q&A or like opening it up to questions. Um, I think also I'm I'm relatively new to the code bases that I'm working in, so I'm sort of like yoloing out a solution and then like Zach or Lee or someone will be like this is completely fucked and then just be like cool because I just gave it my first attempt as quickly as possible and met reality quickly I just pivot on that and I haven't wasted too much time um which I think has been good. Like I was working on the MCP, the public MCP server.

And then I was like going down the rabbit hole doing the auth one way and then I got feedback quickly on the direction and then I just like was going down the wrong way completely. So I think that's also powerful with, um, with Discovery and Claude, I feel like if you write the code quickly, you sort of also Figure out. the blind spots or like you just move much faster because that's like the only way to figure it out.

Yes. And I think maybe we can talk about leveraging SkillMD, role sets, et cetera, and setting these guardrails that are really useful. Um... And then pulling in maybe like unexpected sources of contacts, like Slack conversations, 'cause that's an MCP. Yeah. What there's people probably, I don't know if are as familiar with, what else?

Yeah. I think. pulling lots of our experience, our workflows and yeah, like, even just suggesting, yeah, the specific MCPs, like the Datadog MCP or Slack MCP, Linear MCP, like these are tools that you might not think to use as well. Like, Tyler was writing comments on Slack. And so then I used the Slack MCP to turn them into linear tickets. And then I used plan mode in Claude to like beef them out. Um, and then I used work trees to do like 20 hours in, in like in parallel.

So it's like, how far can you take, um, the tools. Which I think is like just also changing the way that you can, the bottlenecks move because you can like parallelize tasks as well. And then you can like I have a babysit PR skill that just kind of polls and checks for Devin and Codex and Curses comments. So stuff like that where it's like the bottlenecks moving, how do you gather the context? How do you do the tickets?

How do you do the whole thing end to end?

Yeah. And another thing is like when I see myself manually doing work, for example, like creating a dashboard or taking a look at logs, I'm like, wait, can an MCB do it?

you Yeah. Yeah. As like a general guiding principle. I'm just talking out loud. Hopefully this transcript.

I think there's enough data we can just like spitball. Yeah. And if we share our process, I think we'll be good. I have so many tools that I'm making for the front end side. Like I know like there's the Arbor app I got them to set up like an Arbor skill for the UI components as well. And then there's also like, I've made like Chrome extensions and like my own tools and stuff for that. So I think Yeah, I don't know. It should just be like fun to share like how we're doing things, but I'm not sure how we engage 40 people into like sharing their workflows.

Yeah, that's the harder part. I do want them to go off for like 20 minutes and do their own thing and then report back.

Maybe it can be like These are some ideas and how we're doing things maybe They can discuss problems they faced and now in hindsight, or problems they need to tackle. Um, What is some like more creative, broader, like one-shotted ways to like solve it.

Yeah, we can also draw up a scenario and have them go into breakout. sessions of like five people and come up with a plan of how they would use Devon, Codex, Yeah. Whatever. to execute on it. I...

Or like we could ask them to focus on like projects they have upcoming or something like, and discuss it together about like, and Yeah. novel ways because I think when you just get given a linear ticket or a linear project, you kind of just like You just do your old workflow, but maybe it's worth discussing. Yes. how far you can take like. Yeah.

Yeah, and then we can also talk about AI for debugging and also test-driven development. Like, you know, we have all the tools to make it work locally, right? And I get stuck on maybe some dumb questions, but they're easily answered with AI now. And then get it working in QA and then prod. And it has access to all these logs and failures. So it makes that process easier. So I think one... One thing that I like to do is put my QA hat on.

I can shove that in there in the presentation. Should we be opinionated about when to use Devin, when to use Claude Code versus Codex? and then share that or...

Yeah, I probably... My workflow is way more Clawed and Codex heavy than Devon. Okay. I can do that, Devon. I use it. I like it. Yeah, I feel like I find to... To some extent, the wiki is really good to reference and like, but I'm not such like, I probably am not like... the clearest example of like, this is when you should use Devon, because I don't really know. Bye. The team seems to love it.

Yeah. I use search a lot because there's a lot of cross repo work. Um... So if I don't have a repo cloned on my laptop and I have to do something in Urn, I'll just ask Devon a bunch of questions. It's like my online buddy. So I can talk about how it's like your onboarding buddy. Yes. Okay, cool, cool. And then how do we get them to go off for 30 minutes and figure something out?

Sorry, I just, one hour is a lot. Yeah, I think if it's like... We I don't know if we show on our laptops like concretely like how we might tackle a task. I don't know if that's boring because it might just be a cloud loading for a while. But if we maybe individually, like I'll do this and maybe you do it, like screenshots and like dot points on like... your workflow for that example, which is awesome with the routines and stuff.

And I can maybe do my workflow with... Tyler's bugs from Slack because then That's okay. normal scenario. That could work. Um... And then we break it up like, based on these ideas like Yeah, how might you tackle, think of like a project you're working on or kind of have I've been dreading working on. Maybe you would... In a group of five, you choose a project and you kind of bounce off each other on like, how you can break it down or think of it in like these, yeah, these new kind of bottleneck ways.

Yeah, and then we can just have like five minutes for each team for people to present. Yeah. Okay, cool. Yeah, that's perfect. I think that'll... Yeah, that's lovely. Okay, cool, cool. Sweet.

I will, what's this called? It's called like AI... We are called AI usage for engineers. So. Okay. Did you get that invite? Did it work?

We don't have to use Linktree assets, right? I like the simplicity of your PowerPoint. It's really aesthetic.

Yeah, it's a great platform. I will. Um... I'll just do a few slides for my workflow. And then if you want to do slides for your workflow, it should be... a good start and we can just keep it like talking to the slides and stuffs.

Okay, yeah. And then I think what I'm going to do is also try to connect the Slack MCP to learning AI wins and blah, blah, blah, and then create some top stories.

Yeah, I think there's the software factory as well and the innovation and Sparks channel as well.

Okay, cool. I'll just like rank the most upvoted as useful or whatever. Okay, we'll see. Well, I need to test it out and see if it'll actually work. Okay, cool. And I will, I just took notes on our call about everything we spitballed. So I'm going to send that over to you as well.

Amazing. I will make a note to make a presentation. Sweet. Sorry.

Oh, it did. Yay. Okay, good. There were times that it just doesn't record and I'm like...

How do you do it? Is it granola or something?

I use Notion connector. Oh, yeah. Yeah. This is also part of my workflow, taking notes, eating it. I'm too, I'm too Claude Pille. I need to like go touch grass. It's fine.

Um, yeah. Okay, cool. I was looking at my usage and I think it was $17,000 worth of Codex. I maxed out the Claude code 2000 tokens and I maxed out my 20x Claude plan.

That's how Jio picked us up. He's like, you too.

Yeah, just ranking. Okay, cool. This is breaking my brain. But WAP just went open source, which is cool. Oh, that's cool. Hey, can you do, it's like what I think it is. It's like workspaces and tabs.

Yeah. Now they updated it to do that. I just like their autocomplete feature, honestly. I think you can get that anywhere. I tried using it with Ghosty. Ghosty didn't have that. And I was like, that's such a basic feature. thing to have. Okay, yeah. CMUX, I'm going to try CMUX.

Yeah, check it out. I used Warp like... version alpha like so I don't know what it is today because it's so much more agent-y yes we can also add a page for how do you keep up with like AI and tech stuff in general I started a WhatsApp group with my friend and now there's like almost 100 people in there. So it's crazy because that's like, I just don't have X. So this is kind of how I follow up.

Okay, I can also share my how I keep up to date framework, which is a combination of X. and TikTok and... these some newsletters that I follow. So yeah, awesome.

Yeah, I think that that's great because we can yeah, we can I think we each have our perspectives, which is good, and there's not a crazy amount of overlap. But I think if we're just showing like... these are how we do it and obviously Your flow sounds awesome, so I'll definitely be learning from it.

Cool. Okay, sounds good. Okay, we have something. I'll try to add to the PowerPoint tomorrow. And then maybe we can like sync again. around this time is fine and like see what we can do next. Awesome.

Okay. Nice. See ya. See ya. Bye. Bye.
