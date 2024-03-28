---
title: Redis now closed source 😭
author: Jon Brookes
isDraft: false
publishedDate: 03-28-2024
tags:
  - laravel 
  - livewire 
  - jetstream 
  - filament 
  - JavaScript
  - LLMs
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![portal](/images/portculis02.webp)

We often take the freedom of open source licensing for granted or see it as a given. Until that is when it isn't. Those who control the Github repository of Redis have chosen to take this away, locking Redis behind a commercially binding license that is no longer open source at all.

It was announced by the company that owns Redis that this software, traditionally open source, will now be closed source, requiring some to enter into partnership arrangements to offer support for the product. Fundamentally, this is the end of the open source arrangements that this project has enjoyed up to now. 

In a [video by Bufferhead](https://www.youtube.com/watch?v=S3LtOQDxCJk) there is a potted history of redis from 2009 to date at which point the open source license is now removed and some controversy is caused in the community.

Many applications and frameworks have used Redis by default for what seems decades. This may change now, however interestingly alternatives are available, one of which is a direct fork of redis by snapchat :

 * https://github.com/Snapchat/KeyDB
 * https://docs.keydb.dev/

and another by microsoft also suggested as a drop in replacement for redis

 * https://github.com/microsoft/garnet
 * https://microsoft.github.io/garnet/

mean time though Im using much simpler stuff for micro projects / low impact configurations

 * https://github.com/beanstalkd/beanstalkd
 * https://github.com/headshed-dev/queue-lite ( currently dev only and in pre release / alpha )

the latter of which whilst it ( currently ) uses beanstalkd it is written in a way I can abstract the storage back end in a way that other cache dbs could be added by 'Accepting Interfaces and Return Structs' - a pattern taken from the Go community.

This provides an api that abstracts queue based communications between instances of a cms using 

https://github.com/headshed-dev/cms-lite

which I am developing for a client and for open source, self hosted or SaaS of static sites, such as Astro, Gatsby, Hugo etc. 

This was born out of frustration looking for a genuine 'free tier' for CMS SaaS for non-profits and a realistic cost for non enterprise customers that make less than 10 edits a day and typically have just one or a handful of staff submitting content. In this marketplace, seemingly 30+ USD per month is seen as 'cheap' for something that would barely be used, if at all on a month to month basis.