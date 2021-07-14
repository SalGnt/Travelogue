Travelogue
==========
[![Live Demo](http://img.shields.io/badge/Travelogue-DEMO-7D8866.svg?style=flat)](https://salgnt.github.io/Travelogue)&nbsp;
[![The MIT License](http://img.shields.io/badge/License-MIT-green.svg?style=flat)](#license)&nbsp;
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SalGnt/Travelogue?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Travelogue is a minimal, single-column [Jekyll](http://jekyllrb.com/) theme that provides an immersive read experience for your readers.

![Post](https://dl.dropboxusercontent.com/u/18322837/GitHub/Travelogue/Post.png)


## Getting Started
The theme provides a complete Jekyll setup. Download it and start the Jekyll server.

    git clone https://github.com/SalGnt/Travelogue.git
    cd Travelogue
    jekyll serve

Visit the [Jekyll website](http://jekyllrb.com/) for more information.


### Features
* Minimal, content focused design;
* Responsive and mobile friendly;
* Integrated slideshow activated on page scroll;
* Customizable share buttons;
* Disqus integration;

#### Sidebar
A link of each page will be added to the menu integrated in the sidebar.

![Post Header](https://dl.dropboxusercontent.com/u/18322837/GitHub/Travelogue/Sidebar.png)

#### Post Thumbnail
The thumbnail can be added by specifying a path to an image in the front matter.

    thumb: http://yourdomain.com/public/images/post_title/thumb.jpeg

#### Backgrounds
The theme has an integrated slideshow. Its control is attached to the scroll action on the page, as shown in the [original concept](http://on.be.net/1zUTXz0).

You can add one or more `backgrounds` in the front matter by using the syntax shown below.

    backgrounds:
        - http://yourdomain.com/public/images/post_title/background_01.jpeg
        - http://yourdomain.com/public/images/post_title/background_02.jpeg
        - http://yourdomain.com/public/images/post_title/background_03.jpeg
        - ...

#### Info
All the details about a post are located after its content. Tags and categories can be hidden by adding the following variables in the front matter.

    show_tags: false
    show_categories: false

You can also specify the author's name for each post by adding the following variable in the front matter.

    author: John Doe

![Post Footer](https://dl.dropboxusercontent.com/u/18322837/GitHub/Travelogue/Footer.png)

#### Share Buttons
The template make use of [RRSSB](https://github.com/kni-labs/rrssb). You can enable it in the `_config.yml` file.

    share_buttons: true

If you want you can also enable or disable each share button by editing the `# RRSSBB` section in the `_data/social.yml` file.

#### Disqus
The template let you use [Disqus](https://disqus.com). You can enable it in the `_config.yml` file.

    disqus: true

You should set your Disqus shortname under the `# Disqus` section in the `_data/social.yml` file.

#### Next Post
A link to the next post will be placed at the end of each post.


# Authors
Dmitry Zelinsky (Designer)

* [Dribbble](https://dribbble.com/dddzzzru)
* [Twitter](https://twitter.com/dddzzzru)

Salvatore Gentile (Developer)

* [GitHub](https://github.com/SalGnt)
* [Twitter](https://twitter.com/_sgentile)
* [Dribbble](https://dribbble.com/SalGnt)


# License
The theme is released under **The MIT License (MIT)**.

    The MIT License (MIT)

    Copyright (c) 2015 Salvatore Gentile

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
