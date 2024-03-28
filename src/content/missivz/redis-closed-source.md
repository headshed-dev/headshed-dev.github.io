---
title: Redis now closed source 😭
author: Jon Brookes
isDraft: false
publishedDate: 03-20-2024
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

We often take the freedom of open source licensing for granted or see it as a given. Untill that is when it isnt. Those who control the Github repository of Redis have chosen to take this away, locking Redis behind a commercially binding license that is no longer open source at all.

It was announced by the company that owns Redis that this software, tradinionally open source, will now be closed source, requiring some to enter into partnership arrangements to offer support for the product. Funcamentally, this is the end of open the open source arrangements that this project has enjoyed up to now. 

In a [video by Bufferhead](https://www.youtube.com/watch?v=S3LtOQDxCJk) there is a potted history of redis from 2009 to date at which point the open source license is now removed and some controversey is caused in the community.

Many applications and frameworks have used Redis by default for what seems decades. This may change now, however interestingly alternatives are available, one of which are direct fork of redis by snapchat :

 * https://github.com/Snapchat/KeyDB
 * https://docs.keydb.dev/

and another by microsoft also quoted the same breath by the guy in the video as a drop in replacement for redis
 * https://github.com/microsoft/garnet
 * https://microsoft.github.io/garnet/

mean time though Im using much simpler stuff for micro projects / low impact configurations

 * https://github.com/beanstalkd/beanstalkd
 * https://github.com/headshed-dev/queue-lite ( currently dev only and in pre release / alpha )

the latter of which whilst it ( currently ) uses beanstalkd it is written in a way I can abstract the 'db' back end in a way that other cache stores could be added by 'Accepting Interfaces and Return Structs'

https://github.com/TutorialEdge/go-rest-api-course/tree/version-2

This provides an api that abstracts queue based communictions between instances of a cms using 

https://github.com/headshed-dev/cms-lite

which I am developing for a client and for open source, self hosted or SaaS of static sites, such as Astro, Gatsby, Hugo etc. 

This was born out of frustraion looking for a genuine 'free teir' for CMS SaaS for non-profits and a realistic low cost for non enterprise customers that make less than 10 edits a day and typically have a hanful of staff submitting content. 