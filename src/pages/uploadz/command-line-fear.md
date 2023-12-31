---
layout: "../../layouts/CustomMarkdown.astro"
title: "Conquer your fear of the command line"
image: "frightened-robot.webp"
created: 2023-12-22
updated: 2023-12-22
author: "Jon"
tags: ["command line", "cli", "shell", "bash", "zsh", "powershell", "wsl", "windows", "linux", "mac", "docker", "vscode"]
description: "Conquer your fear of the command line"
keywords: "command line, cli, shell, bash, zsh, powershell, wsl, windows, linux, mac, docker, vscode"
---

# TLDR

if your on windows :

[Installing WSL](https://learn.microsoft.com/en-us/windows/wsl/install) is relatively easy with a few clicks to make sure prequisite modules are in place with

```
wsl --install
```

open your shiny new ubuntu shell and carry on

on mac, open the command line then simply get on with it

# Why the command line?

The once-ubiquitous command prompt faded from the forefront of personal computing, leaving many technology workers like myself having to do more work to regain direct access to its power. While this shift caters to the needs of mobile and, to some extent, tablet users, it comes at the expense of efficiency and flexibility for those who rely on their computers as professional tools.

This has led to a fear of or at lease a lack of familiarity with the CLI. We need to abandon any fear we may have or had in the past of the command line and embrace it in order to go forward in this ever changing technological landscape.

This can be a sticking point for many but in the way that some politicians now say all students must learn math, we must learn and be conversant with the command line perhaps more so now than in the past

It is possible to drive LLMs entirely with custom prompts using a web interface and there are jobs you can get as a 'prompt engineer' but sooner or later, such folks need to automate their prompts with Python or something similar and this requires us to be at least minimally conversant with a shell and command line interface

Perhaps the best thing to happen to Windows was [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

Windows Subsystem for Linux permits the installation of Linux onto Windows acting as a virtual host and this gives us the best of both worlds in a way I believe Mac simply cannot, without installing further commercial software such as [Parallels](https://www.parallels.com/uk/products/desktop/) weighing in at just under $90 USD a year at current reading. Surprisingly I have had mac users suggest to me that this is free, when it is likely pre-installed and paid for by their employers but let us not dwell on such oversights

[Installing WSL](https://learn.microsoft.com/en-us/windows/wsl/install) is relatively easy with a few clicks to make sure prequisite modules are in place with

```
wsl --install
```
For years, I wrestled with Windows before WSL and Windows 10 bridged the gap and enabled interoperability. Necessity drove this, as my work involved deploying to Linux from a primarily Windows environment. WSL transformed me from a die-hard Linux user into a Windows user with WSL practically overnight.

Some like me opted for the Mac, drawn to its "Darwinian" shell (as I call it): an OS rooted in a FreeBSD kernel but now entirely closed-source as "Darwin," with an aging Bash but their preferred Zsh ("zee-shell"). For me, it's neither Bash nor Linux. Some advocate for Mac, but I hold to using Linux and current bash as found in the containers and VMs we use daily.

To cap it off, on mac it is fair to say, Docker can be installed in the same way as indeed it can also for any  mainstream Linux, any shell in [VSCode](https://code.visualstudio.com/docs/devcontainers/containers) but exactly the same can be said of Windows or Linux desktop, also with [Docker for desktop](https://www.docker.com/products/docker-desktop/) installed and used in conjunction with [VSCode](https://code.visualstudio.com/download)