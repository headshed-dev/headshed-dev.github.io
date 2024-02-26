---
title: Low/No Code FlowiseAI
author: Jon Brookes
isDraft: false
publishedDate: 02-26-2024
tags:
  - Web Development
  - JavaScript
  - LLMs
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![elevator-into-space](/images/elevator01.webp)

In [FlowiseAI](https://flowiseai.com/), applications based on the JavaScript fork of LangChain are modeled in a 'no/low-code' environment. If you are coming from a closed source world, yet trying to implement devops principles this may fill you with fear, dread and uncertainty. FlowiseAI offers the advantage of using plain-text JSON files to represent each workflow. These files are easy to understand, open, and readily backup-able, unlike opaque proprietary binary formats
The data used at runtime and other component prerequisites like credentials are stored in the FlowiseAI data volume, which looks like this

```bash
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          17/02/2024    12:11                logs
-a---          16/02/2024    15:51            306 api.json
-a---          18/02/2024    15:35        6164480 database.sqlite
-a---          16/02/2024    12:28             32 encryption.key
-a---          16/02/2024    15:54             58 settings.json
```

Nothing much to write home about here then and mostly things that can be seen as open standard  and clearly understandable data formats. There are no opaque proprietary binary encoded files and formats, at least not as to yet. Lets hope this stays this way an as a constant but the license under which FlowiseAI ai is published is an [apache](https://github.com/FlowiseAI/Flowise/blob/main/LICENSE.md) one so this is to be expected.

What is more, the gui that we use in FlowiseAI is pleasant to the eye and clearly shows a 'LangChain' flow from left to right.

![flowise workflow](/images/flowise01.webp)

My preference I must say will always be code over graphical user interface but in the case of FlowiseAI I see the benefit of having a visual and easy to see 'LangChain' or chain of language models and supportive roles that will, beyond a level of complexity, become too large to hold in the front space of your noggin brain bonce at first glance. Similar is seen in some state management frameworks and I like what is going on here.

The FlowiseAI team is considering adding the ability to generate code from each flow, which would be a fantastic addition and make the platform even more appealing. However, even without that feature, FlowiseAI offers a shortcut to implementing solutions users can interact with, allowing developers to focus on problem-solving rather than low-level implementation details.

That aside, just learning and getting your head around LangChain can be time consuming and this is a short cut to implementing something that your users can get their hands on and you can focus on problem solving rather than fine grained implementation steps.

When a product and solution is closer to maturity, there can be time taken to finesse and refactor all you like, once you have a use case that is actually of interest to customers.
This approach to me seems to feel a bit like the 'rapid application development' of old that has become the so called agile approach of recent. 

It makes sense to me to use things that may not be as 'optimal' as coding from scratch, all be it, LangChain is a significant level of abstraction in and of itself. It is sufficient to get the rocket off of the launch pad and its payload into orbit. More efficient methods of lifting our satellites into space can come later when there is time to invent a planetary elevator system or in more realistic time frames, a reusable rocket launch platform such as that used by SpaceX to land booster rockets vertically onto ocean going landing platforms.

Now that's what I call rocket science !