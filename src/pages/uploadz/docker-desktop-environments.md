---
layout: "../../layouts/CustomMarkdown.astro"
title: "Get going with Docker Containers"
image: "container.webp"
---

# TLDR

[Install Docker](https://www.docker.com/products/docker-desktop/)

edit a `run.sh` file and run it with `sh run.sh`

access a local wiki.js instance at `http://localhost:3000`

# Get Docker

 Installing Docker to Windows, Mac and Linux is straight forward using [Dockers product download](https://www.docker.com/products/docker-desktop/) page
 
 
 installed and used in conjunction with [VSCode](https://code.visualstudio.com/download)

# Install and run a container

Lets install an application that is a wiki, a place to store and share information, notes, knowledge base, etc.

wiki.js is a modern, lightweight and powerful wiki app built on Node.js, Git and Markdown. It runs on the blazing fast Node.js runtime environment to provide a powerful wiki app to document your projects, Git repositories, notes, knowledge base, etc.

To do this, we can take a look at [hub.docker.com](https://hub.docker.com/r/linuxserver/wikijs/tags) to see the `latest` tag is at the top. This defaults to be the current, latest version of the container and we can use `latest` if we want and just let it return to us the current, at time of writing, 2.5.300 however to specify this, we can choose to download this version tag by using it in place of `latest`


```
docker pull lscr.io/linuxserver/wikijs:2.5.300
```

which when run will look something like this ( and will take as long as a few seconds to several minutes depending on your network connection and the size of the container you are downloading )

```
❯ docker pull lscr.io/linuxserver/wikijs:2.5.300
2.5.300: Pulling from linuxserver/wikijs
8b16ab80b9bd: Pull complete
07a0e16f7be1: Pull complete
145cda5894de: Pull complete
1a16fa4f6192: Pull complete
84d558be1106: Pull complete
4573be43bb06: Downloading [==========================>                        ]  53.52MB/102MB
20b23561c7ea: Download complete
```

when this is finished downloading, we can list our local images with

```
❯ docker images
REPOSITORY                   TAG       IMAGE ID       CREATED      SIZE
lscr.io/linuxserver/wikijs   2.5.300   869729f6d3c5   7 days ago   441MB
```

Creating a shell script file called `run.sh` with the following contents

```bash

docker run -d \
  --name=wikijs \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Europe/London \
  -e DB_TYPE=sqlite \
  -p 3000:3000 \
  -v $(pwd)/config:/config \
  -v $(pwd)/data:/data \
  --restart unless-stopped \
  lscr.io/linuxserver/wikijs:2.5.300
  
```
Be sure to change `TZ` to your timezone, and change the `PUID` and `PGID` to your own user id and group id. You can find these by running the `id` command in terminal. If you don't know what your timezone is, you can find it by running the `timedatectl` command in terminal.

Also, the port 3000 needs changed if you already have something running on that port. To change the port, change the first number in `-p 3000:3000` to whatever port you want to use.

then run the script

```bash
sh run.sh
```

the container is now running and we can check this with

```
❯ docker ps
```

we will also see that there are 2 directories created in the current directory, `config` and `data` and these are where the configuration and data for the container are stored

```bash
❯ ls
config  data  run.sh
```
open a browser and navigate to `http://localhost:3000` and you will be presented with the wiki.js install prompt

![Wiki JS Install prompt](/images/wiki-js-install.webp)

As this is for local development for now, we can use the following

| Field | Value |
| --- | --- |
| Administrator Email | your email |
| Password | set your password |
| Confirm | confirm your password |
| Site URL | http://localhost:3000 |

On completion of the install, you will be presented with the wiki.js welome page and call to action to create your first page.

Pages are by default created using Markdown, which is my preference as this translates to other media easily.

We now have a local only, private copy of our own wiki.js instance running in a container on our local machine.
