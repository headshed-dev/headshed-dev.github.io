---
title: Testing, testing, 123
author: Jon Brookes
isDraft: false
publishedDate: 05-01-2024
tags:
  - Web Development
  - JavaScript
  - LLMs
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![testing laboratory](/images/lab02.webp)

A great deal has been said and often times little done about the issue of testing in software and systems. I remember when Computing Weekly brought to our attention issues with the Horizon system that we have recently become very aware of in connection with Post Office. I have to wonder if testing had been more rigorous for this ill fated system, how differently things could have turned out.

Tests are all too often left to be manual, by humans and taking a long time to complete.

Greater efficiencies can be gained by automating tests so that they are repeatable, reliable, re-producible and above all, cheaper to run, if not to write. When a test is written however, if written well, it will not need constant re-writes and it will not require expensive user intervention at each and every stage.

So widely has this approach become accepted, it is often assumed that testing will be automated in code. I am sorry to say that is not always the case, however in order to achieve more for less, I prefer to automate as much as I can.

When the idea of automated test driven development became popular, TDD as it is often referred to now, I adopted it full on so as to go for 100% coverage. I believe many did similar and some came to the conclusion that whilst this is laudable, it can lead to the implementation of code becoming embedded into test suites. This can lead to tests becoming rigid, fragile even and when code is refactored, the implementation often changes. Thus the tests can easily break. To get the project moving some find themselves ditching the automated tests and in my view, weakening confidence in the application tests and perhaps, testing in general.

An evolution of this I often see now is feature testing, where things that are mission critical for the application are tested, even if this means not testing everything. Thus, the ways in which functional implementation is delivered may be re-factored. Over arching tests are retained such that they may sustain the application ‘drop dead’, ‘must have’ features so as to protect us from ‘losing our job’ or otherwise ‘losing a client’.

We have starting using the word ‘lite’ with a couple of projects, namely, cms-lite and share-lite, the latter is under more heavy development and its code will be made public soon. It partly runs clc. Its the ‘app’ in the Canalside Life Coach app.

So I guess we would call this ‘feature driven testing’ of this and other projects ‘lite-testing’, at least until such projects become greater than MVPs and move into more mature stages.

It is said by some that in order to get things to market quickly, it is necessary to cut corners. I rather prefer to use a reduced instruction set of what would be the perfect approach, so as not to slow development of new ideas to a grinding halt but enough to give some confidence of better and ultimately best practices to come and to move forwards at a rational and useful pace.