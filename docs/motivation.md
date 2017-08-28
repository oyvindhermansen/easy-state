---
layout: page
title: Motivation
permalink: /motivation/
---

# The motivation behind Easy State

For the last couple of years I've been coding quite amount of JavaScript, and specifically
React with Redux or Mobx as state management. I have started adopting more and more against
using React at my work place, but the standard go-to have always been Wordpress (PHP) with vanilla JavaScript or jQuery.

### There has to be an easier way
One day when I was coding on a project for work, with jQuery, I was thinking: This would have been much easier if I just
could make a state object and render jQuery stuff based on that state. That's when I begun thinking about the idea.

### Grab the best of two worlds
I researched how React updated state with their function `this.setState({})`, and I was thinking, hmm, I want this
without using any frameworks or UI library. I started implementing several versions, but never got happy with either the
source code or the API.

That's when I started looking at how Redux solves listening to changes in the `redux-store` with the subscribe method.
At this point I was thinking, I want to `subscribe` like Redux, and update state with `setState`, so this would be like
the easiest state management possible.

I'm not saying this is a better solution than using React with Redux or any other state management, because It's not. I just wanted
a simpler way for JavaScript developers to start thinking in a more functional and state driven way of coding.

If you can appriciate this small state library, give me a humble star on github! :) 
