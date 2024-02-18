---
title: Self Host Workflow Runners
author: Jon Brookes
isDraft: false
publishedDate: 02-18-2024
tags:
  - Web Development
  - JavaScript
  - Astro
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![runner](/images/runner01.webp)

Pipelines are a great way to automate workflows. They can be used to build, test, and deploy code. However, they can incur costs when run on cloud services. In this missive, I look back on how easy it can be to  self-host a Github workflow runners that would normally run in the cloud, consuming paid or free build minutes. It's not just build minutes that can be saved by self hosting a runner. We can extend workflows to reach into our own infrastructure, previously not possible in standard cloud-based CI/CD.

GitHub runners can be run at the organization, account, or repository level. I recently configured a runner on a project by following these steps:

1. Go to the project's settings and navigate to Actions > Runners.
1. Click "New Runner."
1. Select "New self-hosted runner."
1. Choose your operating system (macOS, Linux, or Windows). I picked Linux, natually.
1. Follow the provided installation instructions. Make sure to check the GitHub web console for the latest process.

Run the runner using ./run.sh or wrap it in a systemctl service in Linux. Adapt to suit if you chose another OS.

To use this runner in a workflow, simply edit your YAML file like this:



```yaml
jobs:
  build:
    # runs-on: ubuntu-latest
    runs-on: self-hosted
```
In this example, I commented out the default runs-on command and change it to self-hosted, indicating that a self-hosted runner should be used. This picks a runner from the organization-level pool, so the agent can run on your own infrastructure (cloud, server, data center, behind a firewall, Raspberry Pi, home server, etc.).

The agent has access to the user account under which it runs, so its access level depends on the operating system hosting it and the placement of this in your infrastructure and networks but we have the flexibility also to host this on bare metal, a virtual intance, a container, whatever takes our fancy.

Some tips for using self-hosted runners:

* Make sure your runner is properly configured and has the necessary permissions to access the resources it needs.
* Be aware of the security implications of running workflows on your own infrastructure.
* Consider using a tool like Terraform or Ansible to manage your self-hosted runners.




