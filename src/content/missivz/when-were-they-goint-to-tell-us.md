---
title: When were they going to tell us ?
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

![portal](/images/portal01.webp)

Distributing apps from a development environment into a production one is not always straight forward. Often the process is described as 'challenging'. Even with docker / container orchestration, the underlying applications when put together innevitably in a different configuration than can practially be reproduced in any development environment may well have so called 'side effects'.

Here are just a couple I've come across when deploying PHP Laravel apps behind a load balancer that handles certificate termination for TLS / https connections.

The latter is not initially a problem, rather, subtle configuration options that are mostly dealt with by 'back end as a service' operations, so remain as just that, back end / back office and hidden from ( developer ) view. Admittedly, these are the kind of 'headaches' some would seek at their own cost to avoid and I can understand that if all you are about is adding features and closing off tickets in a sprint, being given zero time to understand infrastructure deployment issues. But I don't live in such a world as I handle all things from UI through to back end, so 'full stack' and the underlying infrastructure also, so the whole kaboodle. This is what I like to call true dev / ops. 

The initial symptoms were that the app seems functional for the most part, however attempts to upload certain images using the web interface resulted in 'error has occured' and red bar of some kind being displayed in the browser UI. Nothing is showing in server logs and oly the following appears in the console of the browser using its 'dev tools' :

`422 Unprocessable Entity when upload an image` 

I'm just guessing but if this were allowed to go to customers this log is likely to be lost without using 3rd party instrumentation. I'm thinking New Relic perhaps or other such. Logrocket is one I genuinely  really like as it has a very rich feature set, plus a 'generous free tier', but that's perhaps for another time. 

I took a punt and added a `php.ini` file to the configuration of a compose stack to test this out :

```
services:
  laravel-docker:
    container_name: laravel-docker
    build: .
    volumes:
      - ./laravel-app:/var/www/html
      - ./custom-php.ini:/usr/local/etc/php/php.ini
```
using a `php.ini` file to add to the running container with :
```
memory_limit = 256M
upload_max_filesize = 64M
post_max_size = 64M
```

And the above cryptic error went away. Typically web servers have 'sensible defaults' for things like image sizes and memory allocations. These are quite often not enough for things involving users uploading anything beyond a couple of meg and since when has anything been less than a meg since before 2000 and we still used floppy disks.

A second problem and this time directly connected to there being a front facing load balancer ahead of the same PHP and Laravel app was a server side log of the type `401` errors being logged but without any great detail on the server side and again, when uploading images.

The cause of this was Laravel itself this time where its security settings by default distrust proxies that sit upstream.

The addition of `protected $proxies = '*';` to one of its configuration files `app/Http/Middleware/TrustProxies.php` being a logical choice to make in dynamically configured environments such as kubernetes, docker, swarm and others. If you were deploying in a traditional data center where the load balancer(s) are fixed and known addresses, we would not use `*` here, rather the known address(es).

So out of the box so to speak, 'safe settings' prevail that just breaks in modern application settings where configuration of ip addresses for routing and load balancing can be dynamic. 

```class
{
    /**
     * The trusted proxies for this application.
     *
     * @var array<int, string>|string|null
     */

    protected $proxies = '*';
```

I don't know really if these sort of gotchas could be built in to application setups in the way many packages for example do this, such as tailwind in say astro where a sinlge command just sets up everything for you. In a production settings this would be truly challenging to implement safely in all instances and to be fair, you do need to know what is going on here and how best to deploy things so as to not leave services open to abuse.