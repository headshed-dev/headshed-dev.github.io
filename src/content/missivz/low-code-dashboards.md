---
title: Low Code Dashboards
author: Jon Brookes
isDraft: false
publishedDate: 03-04-2024
tags:
  - Web Development
  - JavaScript
  - LLMs
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![elevator-into-space](/images/jack04.webp)

Within 30 minutes, I'd like to set up a web app that has a mind to security, is server side rendered for SEO, can have some of the benefits of Single Page Apps ( SPAs ), has user account management built in, the ability to create, update and delete ( CRUD ) and can be extended to use both custom and opinionated management content using widgets that cover a comprehensive set of goals and are at least relatively easy to work with.

Out of the box, how can we get all of this?

here we go then ...

 laravel jetstream filament custom widget
create a laravel project environment with sail, employing a running local docker service
```
curl -s "https://laravel.build/laravel-filament-app" | bash
cd laravel-filament-app
sail up -d
```
install jetstream
```bash
sail composer require laravel/jetstream
sail artisan jetstream:install livewire
```
install filament
```bash
sail composer require filament/filament:"^3.2" -W
sail artisan filament:install --panels
sail artisan migrate
sail artisan make:filament-user
```
anwering promtps to create an `admin` endpoint and add an initial user for filament
for testing I used `admin / admin@admin.com / password`
Laravel is now running on port 80 by default thanks to sail. The development environment is in containers, running under docker and we have
development environment that is repeatrable, reliable and consistent for development on multiple platforms and which can be translated to production using some of the composer and docker container configuration already present
a modern password authenticaion framework built in thanks to jetstream
management interface starting framework using filament under `/admin`
Laravel is now running on port 80 by default thanks to sail.
To create an empty page not associated with a resource
```bash
sail artisan make:filament-page CounterPage
...
   INFO  Filament page [app/Filament/Pages/CounterPage.php] created successfully.  
```
(pressing return to not enter any resource) and which will subsequently create
```
resources/views/filament/pages/counter-page.blade.php
app/Filament/Pages/CounterPage.php
```
in the admin panel, this page, all be it an empty one, will be found at
`http://localhost/admin/counter-page`
for a livewire component to be created
```bash
sail artisan make:livewire counter
 COMPONENT CREATED  🤙

CLASS: app/Livewire/Counter.php
VIEW:  resources/views/livewire/counter.blade.php
```
edit `counter.blade.php` to contain similar to
```php
<div>
    <p class="text-xl ">The Master doesn't talk, he acts.</p>
    <div style="text-xl m-10">

        <span>
            <x-filament::button wire:click="increment">
                +
            </x-filament::button>

            <div>{{ $count }}</div>
            <span>
    </div>
</div>
```
counter-php to have something like
```php
<?php

namespace App\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public $count = 0;

    public function increment()
    {
        $this->count++;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
```
then `counter-page.blade.php`
```php
<x-filament-panels::page>
    <livewire:counter />
</x-filament-panels::page>
```
to see the custom livewire component displayed in the counter page section within the `/admin` of filament !
> [https://github.com/tuto1902](https://github.com/tuto1902)
[https://github.com/tuto1902/laravel-lms/](https://github.com/tuto1902/laravel-lms/)
[https://www.youtube.com/@Tuto1902](https://www.youtube.com/@Tuto1902)
[https://jorgearturorojas.gumroad.com/l/filament-bootcamp](https://jorgearturorojas.gumroad.com/l/filament-bootcamp)
[https://gumroad.com/](https://gumroad.com/)

