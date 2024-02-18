---
title: Self Host Workflow Runners
author: Jon Brookes
isDraft: false
publishedDate: 03-18-2024
tags:
  - Web Development
  - JavaScript
  - Astro
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![runner](/images/runner01.webp)

Pipelines are a great way to automate workflows. They can be used to build, test, and deploy code. However, they can incur costs when run on cloud services. In this missive, I look back on how easy it can be to  self-host a Github workflow runners that would normally run in the cloud, consuming paid or free build minutes. It's not just build minutes that can be saved by self hosting a runner. We can extend workflows to reach into our own infrastructure, previously not possible in standard cloud-based CI/CD.

In Github runners can be run at the level of an organisation or account and at the repository level. I recently configred on a project under its 

```
settings => Actions => Runners => select 'New Runner'
```

and picked 'New self-hosted runner' 

Next, from macOS / Linux / Windows I naturally pick `[Linux]`

Install instructions are provided by the next step to install the binary, ofcourse go check on the Github web console to get the latest / current process and at that point, you can just run the runner with `.\run.sh` and be done with it or wrap this in a systemctl service.

To use this agent, within a workflow a simple edit something like

```yaml
jobs:
  build:
    # runs-on: ubuntu-latest
    runs-on: self-hosted
```

here I commented out the runs on by default and changed it to self-hosted

a self hosted running is picked from the pool of runners at the organisation level in this instance and away the agent goes, running on your own infra be it in the cloud, on a server in a data center, behind a firewall in a back office, on a rasberry pi or home server. 

The agent has access to which ever user you ran it under, so its access is as fine grained as your imagination and the operating system that is hosting it. 




