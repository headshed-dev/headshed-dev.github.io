---
layout: "../../layouts/CustomMarkdown.astro"
title: "python virtual environments"
image: python03.webp
created: 2023-12-19
updated: 2023-12-26
author: "Jon"
tags: ["python", "devops"]
description: "Python virtual environments isolate projects, letting you use different Python versions and packages without conflicts"
keywords: "python, virtualenv, venv, docker, vscode"
---

# TL;DR

typically on Linux, you can create a virtual environment with as little as:

```bash
python  -m venv venv
```

but you may need to use `python3` depending on your system and perhaps to specify a path to pythyon with

```bash
python3 -m venv venv --python=/path/to/python3
```

then activate the environment with:

```bash
source venv/bin/activate
```

on some system you may need to install `virtualenv` first:

```bash
pip install virtualenv
```

changes you make in your environment with `pip install [insert pip module here]` may be stored for future use with 

```bash
pip freeze > requirements.txt
```

and re-applied with 

```bash
pip install -r requirements.txt
```

# Why Python ?

As a part of our ventures into second brain techniques and technologies, our current interests are beginning to center more around AI and in particular services such as Chat GPT, Google's recent PaLM2 LLM, Hugging Face's Transformers and even locally hosted LLMs such as [olama](https://ollama.ai/).

Whilst Python is a programming language that is used in many different fields such as web development, data science, machine learning, and many others, primarily, to use LLMs (Large Language Models) such as GPT-3, you typically need to use Python or be at least familiar with it. This is because many of the APIs that are used to interact with these models are written in Python and the greater community of developers that are working on these models are often using Python.

# What is a virtual environment?

Python virtual environments isolate projects, letting you use different Python versions and packages without conflicts.

# Why use a virtual environment?

You may want to use a virtual environment if you are working on multiple python projects that require different versions of python or different versions of python packages.

Another more precient need in my view is to maintain a clean build environment for any given project. In order to do so, it is often a chosen pattern to isolate each project in such a way as to be easy to reproduce elesewher be it for other developers or for deployment to production.

One, very common way to do this for python is to use `virtualenv` or `venv` which is a built in module in python.

typically on Linux, you can create a virtual environment with:

```bash
python3 -m venv venv --python=/path/to/python3
```

and activate it with:

```bash
source venv/bin/activate
```

on other system you may need to install `virtualenv` first:

```bash
pip install virtualenv
```

you may need to use `python` instead of `python3` depending on your system.

Once activated, you can install any packages you need for your project and they will be installed in the virtual environment.

To save away the packages you have installed, you can use:

```bash
pip freeze > requirements.txt
```

Once this is checked in to your project using version control, you or those that check out this project can then install the packages on another system with:

```bash
pip install -r requirements.txt
```

to leave the virtual environment, you can use:

```bash
deactivate
```

and subsequently reactivate it with:

```bash
source venv/bin/activate
``` 

This is a common pattern for moving around python projects and is often used in production environments as well.

# Another way

There are several other ways in which we can control python environments but more generally, any environment can be controlled with Docker. Docker is a containerization technology that allows us to create a container that has all the dependencies we need for a project and then run that container on any system that has Docker installed.

When used in conjuction with VSCode and the Remote Containers extension, we can create a container that has all the dependencies we need for a project and then VSCode will automatically connect to that container and allow us to edit the code and run it from within the container.

Prerequisites are to have Docker installed and the Remote Containers extension installed in VSCode. This may pose a challenge more than the virtual environment approach but it is a very powerful way to manage environments and is becoming more popular. 

# Getting started with VSCode and Docker

For a new project, create a named repo in github, choose a .gitignore and license so as to initialise the repo.

With Devcontaiers extension installed, in VSCode, open the command palette with 
CNTRL+SHIFT+P ( winoows / Linux ) or CMD+SHIFT+P ( mac ) and type `DevContainers` then choose to 'Clone Repository in Container Volume'.


Pick a git repo - the one we just created and its main branch. This will download and boot a container - vsc-volume-bootstrap:latest


you can view logs when it says its starting by clicking on its link
click 'show all definitions' in the next prompt and pick an appropriate one for your purposes. One such is labelled as python 3 by Microsoft - which I use that has the fully named continer reference of `mcr.microsoft.com/devcontainers/python:1-3.12-bullseye`. More general purpose ones are available such as "Default Linux Universal" - `mcr.microsoft.com/devcontainers/universal:2-linux` and this is the image that Github uses in its 'codespaces'. This is a much larger image and takes a lot longer to download and boot but is a more general purpose environment. 



When for example the general purpose image has been downloaded and we open a shell in the new container environment in VSCode we see something like,
```bash
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ whoami
	  codespace
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ cat /etc/issue
	  Ubuntu 20.04.6 LTS \n \l
	  
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ git --version
	  git version 2.43.0
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ go version
	  go version go1.21.5 linux/amd64
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ php --version
	  PHP 8.2.13 (cli) (built: Dec  8 2023 04:51:20) (NTS)
	  Copyright (c) The PHP Group
	  Zend Engine v4.2.13, Copyright (c) Zend Technologies
	      with Xdebug v3.3.0, Copyright (c) 2002-2023, by Derick Rethans
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ ruby --version
	  ruby 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-linux]
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ node --version
	  v20.10.0
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ python -V
	  Python 3.10.13
	  codespace ➜ /workspaces/vscode-dev-container-002 (main) $ 
```
we can see that we are user `codespace` - this is the same / similar environment that we get in github codespaces of this name and is why it took so long to download
basically we have a comprehensive virtual environment that we can use locally and when done, can open exactly the same in codespaces using the git repo that this is stored to to get the same eperience anywhere we can get to a competent browser. this is quite significant, perhaps even a reason for some degree of jubilation.

So long as you commit any code you write back to the Git repo, you can pick up where you left off using the same environment or one that is created by checking out this repository and choosing to `Clone Repository in Container Volume` using the same VSCode extension.


