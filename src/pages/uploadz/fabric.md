---
layout: "../../layouts/CustomMarkdown.astro"
title: "The Rise of Prompt Engineering and how Fabric Makes it Easy"
image: shiny04.jpg
created: 2024-06-07
updated: 2024-06-08
author: "Jon Brookes"
tags: ["python", "LLms"]
description: "The Rise of Prompt Engineering and how Fabric Makes it Easy"
keywords: "python, LLM, pipx, AI"
---

# TL;DR

The world of AI is full of tools and libraries, but Fabric stands out for its focus on prompt engineering. Prompt engineering involves crafting clever questions for large language models (LLMs) to improve the quality and accuracy of their responses. Fabric simplifies prompt creation and management, making it easy to use prompts for various tasks, including content creation and document analysis.

The following command line using Fabric takes the transcript from a YouTube video and creates a quality summary that could be used in an article, journal, even a knowledge base or whatever takes your fancy :

```bash
	  yt --transcript https://www.youtube.com/watch?v=3ODP6tTpjqA | fabric --stream --pattern extract_wisdom
```

# The Rise of Prompt Engineering and how Fabric Makes it Easy

There are many AI tools and libraries available, but [fabric](https://github.com/danielmiessler) from Daniel Miessler offers a unique approach focused on prompt engineering.

## What is Prompt Engineering?

Prompt engineering involves crafting specific questions for large language models (LLMs) to enhance the quality and accuracy of their responses. Traditionally, we rely on "clever prompts" embedded with instructions or prerequisites. These prompts can improve the LLM's understanding and allow us to "augment" its knowledge with recent information not included in its training data.

## Retrieval-Augmented Generation (RAG) and Vector Databases

RAG is an architectural approach that leverages custom data to improve LLM efficacy. RAGs often utilize vector-based databases, which function like search engines, to identify relevant information based on your query. This information is then fed into your prompt, providing the LLM with readily available and potentially curated data from the latest sources. Additionally, personal data reflecting your preferences and interests can further enrich the prompt.

# Crafting Powerful Prompts with Fabric

Fabric simplifies the creation and management of prompts, making it easier for anyone to leverage prompt engineering. You can create your own prompts or use pre-built ones for various tasks, saving you significant time and effort compared to manual methods.

# Fabric's Appeal for Developers

Fabric's command-line interface utilizes a familiar Unix-style "piped" input/output system, a well-established and efficient method of human-computer interaction. Developers, particularly those with DevOps, SysOps, system administration, or full-stack development experience, will find Fabric's interface intuitive and user-friendly.

# Initial Exploration with Fabric

While vector database integration with Fabric is not something I have found yet, I've already begun exploring its existing capabilities. With minimal effort, I've successfully used Fabric for content creation and technical document analysis, including analyzing YouTube transcripts without needing to watch the videos. Fabric's ease of use has allowed me to become proficient quickly

# Getting Started with Fabric

I'm using Linux mint just now but the binary you need can be downloaded from [here](https://github.com/danielmiessler/fabric?tab=readme-ov-file#get-latest-release-binaries)

so I ran 

```bash
curl -L https://github.com/danielmiessler/fabric/releases/latest/download/fabric-linux-amd64 > fabric && chmod +x fabric
sudo cp fabric /usr/local/bin
fabric --version
```
from [fabrics README](https://github.com/danielmiessler/fabric?tab=readme-ov-file#add-aliases-for-all-patterns) I added the following to my `~/.bashrc` and then `source ~/.bashrc` to activate this in the current session :

```bash
# Fabric ...
#
## Loop through all files in the ~/.config/fabric/patterns directory
for pattern_file in $HOME/.config/fabric/patterns/*; do
    # Get the base name of the file (i.e., remove the directory path)
    pattern_name=$(basename "$pattern_file")

    # Create an alias in the form: alias pattern_name="fabric --pattern pattern_name"
    alias_command="alias $pattern_name='fabric --pattern $pattern_name'"

    # Evaluate the alias command to add it to the current shell
    eval "$alias_command"
done

yt() {
    local video_link="$1"
    fabric -y "$video_link" --transcript
}
```

to setup you just need to run

```bash
fabric --setup
```

and pick and run each of the following items untill all are configured

* Default AI Vendor and Model [required] (configured)
* Patterns - Downloads patterns [required] (configured)
* YouTube - to grab video transcripts and comments (configured)

if your intered to know what model I used it was Gemini an its latest beta version but an API key will allow you to choose which one to use

youtube I also configured with an API token I set up already



I can now run `fabric`

```bash
fabric on  main is 📦 v1.2.0 via 🐍 v3.10.12 took 47s
❯ fabric

```

and get literally nothing back, no errors, nada as is common with something command line that is awaiting piped input.

The main thing is that there are no errors so I am a happy camper. Now, I'd like to take it for a run with a youtube video

<iframe src="https://www.youtube.com/embed/3ODP6tTpjqA" title="Progressive Web Apps in 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[by awesome](https://www.youtube.com/watch?v=3ODP6tTpjqA) talking about PWAs and if they are still relevant, spoiler alert it appears that they are, despite the nay sayers

this is how `yt` a part of `fabric` can be used in a command line pipe to get a summary without having to watch the video :

```bash
yt https://www.youtube.com/watch?v=3ODP6tTpjqA | fabric --stream --pattern extract_wisdom
```

and here follows the formatted markdown that this outputs to standard out :

> ## SUMMARY
>		  
> A developer discusses the appeal of Progressive Web Apps (PWAs), demonstrating how to build one from scratch, and highlighting their benefits and success stories.
>
> ## IDEAS:
>
> Progressive Web Apps allow developers to write code once for both web and mobile.
>
> PWAs offer a native app experience on mobile devices using web technologies.
>
> Building a PWA involves creating a manifest file for a native-like experience.
>
> The manifest file enables app installation on device home screens.
>
> PWAs can provide a full-screen, immersive user experience similar to native apps.
>
> Registering the manifest file in the app header is crucial for PWAs.
>
> Service workers enable offline support, background sync, and push notifications for PWAs.
>
> Google's Workbox library simplifies resource caching for offline PWA support.
>
> Images in PWAs can use a cache-first strategy to minimize network calls.
>
> Scripts in PWAs may use a network-first strategy to ensure updates are used.
>
> Web APIs enable PWAs to access device features like geolocation and media capture.
>
> PWAs can utilize device position, orientation, and support passwordless authentication.
>
> Speech recognition can be implemented in PWAs through web APIs.
>
> Twitter's PWA significantly increased engagement and reduced app size by over 97%.
>
> Hulu's switch to a PWA for desktop improved return visits by 27%.
>
> PWAs can lead to better performance metrics and user engagement.
>
> The development of PWAs is cost-effective compared to native apps.
>
> PWAs are becoming more viable with increased web API capabilities.
>
> Offline support in PWAs enhances user experience in low connectivity areas.
>
> Background sync in PWAs allows for seamless updates and notifications.
>
> Push notifications in PWAs engage users even when they are not active on the site.
>
> The success of PWAs depends on the effective use of service workers and caching strategies.
>
> The appeal of PWAs lies in their ability to update content dynamically.
>
> ## INSIGHTS:
>
> PWAs bridge the gap between web and mobile app development efficiency.
>
> Manifest files and service workers are foundational to the PWA experience.
>
> Offline capabilities of PWAs redefine user expectations of web applications.
>
> The success stories of Twitter and Hulu underscore the business impact of PWAs.
>
> Cost-effectiveness and enhanced user engagement make PWAs appealing for developers.
>
> The evolution of web APIs expands the functionality of PWAs beyond traditional web apps.
>
> Dynamic content updating in PWAs improves user retention and engagement.
>
> The strategic caching of resources is crucial for the performance of PWAs.
>
> Access to device features via web APIs enhances the versatility of PWAs.
>
> The shift towards PWAs reflects a broader trend towards unified web development practices.
>
> ## QUOTES:
>
> "Progressive Web Apps allow developers to write code once for both web and mobile."
>
> "Building a PWA involves creating a manifest file for a native-like experience."
>
> "Service workers enable offline support, background sync, and push notifications for PWAs."
>
> "Google's Workbox library simplifies resource caching for offline PWA support."
>
> "Web APIs enable PWAs to access device features like geolocation and media capture."
>
> "Twitter's PWA significantly increased engagement and reduced app size by over 97%."
>
> "Hulu's switch to a PWA for desktop improved return visits by 27%."
>
> "The development of PWAs is cost-effective compared to native apps."
>
> "Offline support in PWAs enhances user experience in low connectivity areas."
>
> "The success of PWAs depends on the effective use of service workers and caching strategies."
>
> "The appeal of PWAs lies in their ability to update content dynamically."
>
> "PWAs can lead to better performance metrics and user engagement."
>
> "Images in PWAs can use a cache-first strategy to minimize network calls."
>
> "Scripts in PWAs may use a network-first strategy to ensure updates are used."
>
> "The evolution of web APIs expands the functionality of PWAs beyond traditional web apps."
>
>
> ## HABITS:
>
> Regularly updating the manifest file to ensure a consistent PWA experience.
>
> Utilizing service workers for offline functionality and background tasks in PWAs.
>
> Implementing caching strategies based on content type for efficient PWA performance.
>
> Engaging with the latest web APIs to enhance PWA capabilities and features.
>
> Monitoring successful PWA case studies to apply learnings to own projects.
>
> Prioritizing user experience by leveraging PWA advantages like fast load times.
>
> Continuously testing PWA on various devices for consistent behavior across platforms.
>
> Adopting a mobile-first approach when designing and developing Progressive Web Apps.
>
> Keeping app size minimal to improve load times and reduce data usage for users.
>
> Incorporating feedback loops into development process to refine PWA based on user input.
>
> Staying informed about new developments in PWA technology and standards.
>
> Experimenting with different caching strategies to find the optimal balance for each project.
>
> Regularly reviewing app analytics to understand user behavior and improve PWA accordingly.
>
> Emphasizing security measures, especially when implementing features like passwordless authentication.
>
> Actively seeking opportunities to replace traditional web or mobile apps with PWAs.
>
> ## FACTS:
>
> Progressive Web Apps combine the best of web and mobile app features.
>
> Manifest files are essential for providing a native app-like experience on the web.
>
> Service workers are key to enabling offline support and push notifications in PWAs.
>
> Google's Workbox library aids in simplifying resource caching for offline support in PWAs.
>
> Web APIs have expanded to allow access to device features such as geolocation and media capture.
>
> Twitter's Progressive Web App led to significant increases in engagement metrics and reduced app size by over 97%.
>
> Hulu saw a 27% increase in return visits after switching to a Progressive Web App for desktop.
>
> The number of Progressive Web App features has increased significantly in recent years.
>
> Offline support in PWas enhances user experience, especially in low connectivity areas.
>
> Background sync allows PWAs to update content seamlessly, improving user engagement.
>
> ## REFERENCES:
> Solid JS project
> Google's Workbox library
> Twitter's Progressive Web App
> Hulu's Progressive Web App
> ## ONE-SENTENCE TAKEAWAY:
>  
> Progressive Web Apps offer a cost-effective, engaging, and versatile solution for unified web and mobile development."
>
> ## RECOMMENDATIONS:
>
> Explore building a Progressive Web App to enhance cross-platform user experience.
>
> Utilize service workers for offline functionality and improved app performance.
>
> Implement caching strategies wisely based on your app's content type.
>
> Keep your PWA's app size minimal for faster load times and better performance.
>
> Regularly update your manifest file to ensure a consistent user experience.
>
> Leverage the latest web APIs to access device features within your PWA.
>
> Study successful PWA case studies like Twitter and Hulu for inspiration.
>
> Prioritize security, especially when implementing passwordless authentication in your PWA

# Writing your own prompts

Creating your own [custom patterns](https://github.com/danielmiessler/fabric?tab=readme-ov-file#custom-patterns) is straightforward. The patterns that come with `fabric` are installed locally to `~/.config/fabric/patterns` so you can add your own here, each of which are held in their own directory and called at the command line by the folder name.

Reading through the patterns, or prompts that come with `fabric` shows how existing prompts are used to create essays, write newsletters, generate tweets and more. As prompts are written in markdown they are easy to read for us as humans and work for AIs such as OpenAI. 

For example, copying the `extract_wisdom` directory to your own say `my_extract_wisdom` and then editing `system.md` in your new folder to suit your use case is used as above with 

```bash
yt --transcript https://www.youtube.com/watch?v=3ODP6tTpjqA | fabric --stream --pattern my_extract_wisdom
```

# Conclusion

Fabric offers a compelling solution for those seeking to leverage the power of prompt engineering. Its user-friendly interface and pre-built prompts make it accessible for anyone, while its command-line structure caters specifically to developers. By simplifying prompt creation and management, Fabric empowers users to unlock the potential of large language models for various tasks, including content creation, document analysis, and information extraction from multimedia sources like YouTube videos. As the field of AI continues to evolve, Fabric positions itself as a valuable tool for maximizing the effectiveness of large language models and their interactions with human users.
