---
layout: post

title:  "Do Artists Make Good Engineers?"
tagline: "Nikola Tesla believed artists made the best technicians.<br /> He also was by some measures clinically insane."
excerpt: "In my 20s, I was a professional musician. Half of my life was spent touring the country, and the other half was spent in California recording studios producing records. I had no idea I would one day write code"

category: editorial
date:   2018-10-16 19:55:46 -0700
image_url: "/assets/posts/artists/beauty.jpg"
---

<p class="big"><span class="lead">In my twenties,</span> my day job was being a musician. Half of my life was spent touring the country, and the other half was spent in California recording studios producing records. I had no idea I would one day write code.</p>

My conception of "programming" at the time was something akin to data entry, but maybe in a basement with a large bottle of Mountain Dew; it sounded mostly like carpal tunnel syndrome to me and my instrumentalist's brain. It made my forearms hurt just thinking about it. I had no idea that for each hour it was 58 minutes of pacing and thinking, followed by type-type-typing in three lines. I had no idea it was as creative as any fine art form.

In hindsight, it is easy to see how music producers and coders share the same challenge: take scattered gobs of complex technical stuff and somehow jam them together in a way that appears simple, natural, and magically human to the outside world. Recording an album and building an app both tend to have timelines of several months or more, with discrete brainstorming, planning, execution, and deployment phases. Both require persistent problem solving and committed decision-making in the face of uncertainty, at both micro and macro levels. Both are about leveraging technical things to achieve a non-technical human experience.

#### The Disparities

There are also notable contrasts. While there *are* actual technical problems in music (microphone doesn't work, etc), the real problems to solve are aesthetic. This means, how do you adjust things to make something feel more fragile, more aggressive, more like snow falling in a big city at night? Why does this one line of a vocal performance "work" while this other one does not?

To deal with these kinds of problems, you have to deal with the *gestalt*, the totality, the simultaneity of things. One takes in all aspects at once, makes subtle iterative movements toward the desired effect, and observes how those movements ripple outward to affect the whole. You take a bunch of linear elements, stack them all on top of each other, zoom waaaay out and judge the effect. In other words, your goal is to "make a good forest."

Coding is the opposite. You take a naturally simultaneous process, chop it up into all these bite-sized, grok-able components, and then string them all out like a clothesline into a step-by-step procedure. And yes, in a display of tidy symmetry, there are aesthetic considerations involved in coding, but the *real* problems to solve are technical. Roughly speaking, your goal as a programmer is to "make good trees."

![yinyang](/assets/posts/artists/yinyang.jpg)

I mention all this because it defined my process of *making things*. Perhaps more crucially, it informed some initial blind spots to best practices that had to be seared away with painful outcomes.

From a process standpoint, the technical and the artistic also have their differences. The biggest of these lies in what happens at the moment where we *finally get our thing to work*. This moment is a shared and cherished universal of anyone who creates; both technicians and artists all know and hunger after the vivid dopamine aftershocks from those precious occasions. We even have the same phrases to describe them:

*"Then things fell into place."*

*"Then everything came together."*

For most creators, such moments are the literal peak experiences of life. That electric, child-like manifestor essence within us is jumping up and down ecstatically with clapping hands. What proceeds from here, however, is very different.

#### Finish Line or Starting Line?

If I play back my song and everything feels balanced and just so and makes the persons in the room feel the things they want to feel, I can pack it all up and call it a day. With art, deployment time is party time. The only real uncertainty after the initial victory is, "will I still feel the same things when I play this back tomorrow?" (which oftentimes you don't, because things feel different at different times and contexts, and all that is terrifying and mysterious, but that is another article) But really, you are more or less finished. The race is ended. You *won*.

Technical things are different. That first eureka moment is only the first leg in the race. Okay, this thing *works*, for a single user, in a single environment, in a single test. But will it work *again?* Will it work *a thousand times in a row?* Will it work for *a thousand people at once?* How about a *million?* When it doesn't work, how will we know about it? As an artist, these were completely foreign considerations. Scale and consistency were not issues I had ever needed to handle.

<figure class="image full">
  <img src="/assets/posts/artists/streams.jpg" />
</figure>

### <span>The Learning Curve</span>

At the time of this writing, I can articulate all these distinctions. But clearly, this was not always so. Let's rewind a bit to where this article began: at some point in my past, I was an artist. Then, later, I became an engineer. As some of the language above might imply, there was a period of transition between these two states. What was this transition like? Was it trivial, or earthshattering? What helped? What hurt? What were the lessons learned? Hopefully by the end of writing this I'll have a better idea.

#### Wikipedia + Me: A Tragic Love Story

There are many things that don't come naturally to me, and many endeavors where I've bait-and-switched pure talent with obsessive behavior and sweat, but let me tell you &mdash; being introverted is *not* one of them. I've taken more than one Meyers-Briggs test over the years, and am proud to say I consistently demolish my competition on the "happier-alone-than-at-party" questions. Whatever my phases, I inevitably settle back to being a sojourn-alone-into-a-desert kind of fellow.

One thing about introverts: we choose DIY over dealing with other people, no matter how much it needlessly bolsters our workload, *whenever and wherever we can*.

Okay, allow me to briefly defend this behavior: *introverts keep score of their professional life by tallying skills learned, instead of relationships created.* While an introvert is spending time interacting with people, they view it as time they could be spending alone "getting ahead" by learning new things. Extroverts see it the other way around; in their mind's eye they are building a network of human connections upon which they can then traverse to reach unreachable places. Because of this, we solitary types prefer skills that can be learned and practiced without the aid of others (i.e. playing guitar > playing racketball). Observe your peers and you will see this: when faced with the choice of learning a new thing in private or having to interact with strangers in order to hire someone who already does it, the introvert opts for the alone-time learning.

Needless to say, this is how and why I learned to code. Some other job I was performing (publishing, branding, marketing, etc) required some custom digital thing, and I found the prospect of interacting w some strange outside technician to be infinitely abhorrent. Besides, personality tests declared my need to avoid such a thing was Supported By Science. Much better to embrace its opposite: burn up each day's potential leisure hours tunneling through wikipedia computer science links until I achieved existential crisis.

<i>Me: "What is a string?" [click]  <br />
Wiki: "A string is often a type of literal."  <br />
Me: "Okay... what is a literal?" [click]  <br />
Wiki: "A literal is notation to represent a fixed value."  <br />
Me: "Value? Like money? ..." [click]  <br />
Wiki: "The members of a type are the values of that type."  <br />
Me: "That... type...?" [click]  <br />
Wiki: "Data types are used within type systems, which offer various ways of defining, implementing and using them."  <br />
Me: "All things are devoid of meaning."</i>

Despite the inefficacy of these dialogues, a roughly effective approach to handling technical tasks was beginning to emerge for me: if I locked myself in a room with the problem at hand for a sufficiently lengthy and vociferous period of time, I would miraculously emerge with a thing that worked. Even if I couldn't say *precisely how* it worked. This latter fact did not alarm me. In music, it didn't matter how something worked; just that it *did*. If it made you feel something, the case was closed. I had no reason to believe coding to be any different.

Here are some other questions that were absent from my process:

- *Yay, it works! Now, what should happen when it breaks?*
- *Yay, it works! Now, how will I know when / if it breaks?*
- *Yay, it works! Now, how do I know it will work again?*
- *Yay, it works! Now, how do I know it will work for a bunch of users at once?*

I got by on this methodology for quite a while. I built blogs and e-commerce web apps and photographer portfolios and restaurant sites. I egregiously undercharged (artists expect a much higher labor / earnings ratio than most people). I did not know what a "best practice" was. I put all my code in one file, top to bottom. I didn’t use versioning. I used unnecessarily verbose variable names. I worked directly on the server without a local copy. But, the products always looked pretty, had just the right tone and vibe, and did what my clients wanted (at least when they worked as expected). I was, after all, a producer; shepherding someone's vision to a gratifying reality was my habitual livelihood.

#### "Real" Engineers

Somewhere around the end of 2014, I decided I didn't want to build websites anymore.

I wanted to build things that, like, *really did things*. No more cute, meticulous little blogs for newly retired folks with pent-up fantasies of becoming famous thought leaders who end up only writing one and a half posts. Platform wasn’t important, but I wanted to build apps. You know, like a *real programmer*.

So, I set my intention and put out the word. No more front end thingies for individuals. I would work exclusively for companies. I would work exclusively on *serious stuff*. I started turning down smaller things, and took up hot yoga.

This — for whatever reason (the California hippie in me openly suspects setting my intention) — worked, and worked rapidly. Within a few weeks I was contacted and scooped up by [Michael Shores][1] — at the time the creative director of IDMLOCO and a real swiss army knife of a person, with a background in pure math, philosophy, design, and deep programming — who set me to work helping to automate back end workflows for [centerforjobs.org][2], a django-based data viz app that lets users quickly and clearly compare economic indicators across California geographic divisions (note: they do this for all 50 states now and it is pretty badass).

This all went shockingly smoothly, mainly because Michael kept my tasks manageable and perfectly bite-sized. Ten hours of estimated work was ten hours of work. Hell yeah. I was engineering things. Emboldened, I asked the universe for something bigger and harder. I upped my yoga frequency to six times a week. Code could solve anything. Time to save the world.

#### The Everything Machine

Whatever allegiances I now have around rationality and skeptical inquiry, I have to begrudgingly admit one thing as I write this &mdash; whenever I asked the universe for something, it damn well seemed to deliver. And deliver *fast*.

In early 2015, pretty much right after my *give me something bigger and harder* request via my crown chakra, IDMLOCO approached Michael and I with an ambitious project. The client was *CALmatters*, a budding nonpartisan, [nonprofit journalism venture][3] with a modern, expository approach to California state politics. The project had two arms. First, a conventional one: build a pitch-perfect online publishing platform for their journalists. Second, something much more intense: build an app that pulled in *every piece of public data in California that touched state politics*, connected it all together canonically. Then, build an interface for journalists to ask complex questions and get back concise, relevant tabular results. For example, a journalist could ask something like:

<blockquote class="alt"><p>Show me <b>campaign contributions</b> from the <b>agricultural industry</b> in <b>2015</b> to <b>senate candidates</b> that previously voted <b>against bill SB 203</b>.</p></blockquote>

It was this second, crazy one that was presented for me to spearhead. To be honest, I salivated at it. Was such a thing feasible? *Of course it was!* Anything was possible, with grit and belief. One put oneself in impossible situations, which forced one to shatter perceived internal barriers and rise to the challenge. After all, *the seed must split open in order for the plant to grow.*

Sheesh. These are the kind of spontaneous thoughts churned out by brains doused in 90 minutes of daily yoga.

Loosely Vedic aphorisms aside, my operating principle at the time was that you got hired by saying yes, then worried about veracity later. Plus, I didn't see what was so insane about this idea &mdash; it just seemed *big*. *Involved*. *Extensive*. But not *impossible*. Not *ill-advised*.

If my mind had such a thing as a feasibility analysis engine, it was trained on art and athletics. Mulling over this idea of ramping up to tackling something huge and new, I thought about my recent first half-marathon. The race was three times as long as earlier 5K runs I had done, but despite concerns over my super-rickety knees, I had completed it and found it exhilarating. During training, the slope of difficulty I experienced was a gentle *log(n)* &mdash; the more miles I added, the less each new one seemed to matter.

From that vantage point, it seemed to me everything could be achieved with proper amounts of grit, pacing, and passion. The notions of runaway complexity, of [combinatorial explosions of test cases][4], of the fact that *running in a straight line from point A to B was the exact opposite of what I was about to attempt*, were all summarily ignored.

Suffice to say, this would be the last time in my life I ignored such things.

#### Failure, Inc.

Over the next four months, Michael and I slowly worked up a version of this thing, and as best as we were able, we committed absolutely and fully to *doing everything right.* And, we felt like we more or less *were* doing that successfully.

We chose modern, sensible technologies: python and *pandas* for the data science, PostgreSQL to hold it all, Django to orchestrate and deploy it on the web. We were in communication constantly. We traded volleys of technical emails about the smartest architectures, the savviest paths forward on all the particulars. We dug into the latest in natural language processing. We unraveled, sussed out, and carefully reassembled a dozen different California public data sources into clearer, more complete versions of themselves. We worked perpetually, and really, *really* hard.

We wanted this thing to happen. We wanted to manifest our client's vision in the world. We were driven toward it, beyond all distraction. Yet despite all of that, despite all the grit, passion, and above-and-beyond-ness I could personally squeeze out of myself, it *simply didn't happen.*

Every two weeks or so, we would meet with some *CALmatters* folks to illustrate our progress and run a demo. These were supposed to be happy meetings. *Demos were supposed to be rituals of victory.* In previous projects, I'd be stressed and panicked beforehand, but then I'd manage to push a little harder and suddenly I'd burst through. The demo then came and things worked as promised and everyone was happy. I'd breathe a sigh of relief. I'd feel relaxed, satisfied, filled with that movie-ending, just-by-the-skin-of-our-teeth feeling. I loved that feeling.

These demos were not like that.

Basically, the *success version* of these demos involved the app limping its way slowly up to the lowest possible performance bar we could set, and displaying some underwhelming, pedestrian, and occasionally confusing result. Success meant that nothing overtly exploded in front of already tense stakeholders. It meant whatever elephants might be evident to everyone in the room, we could maintain a veneer of client-agency normalcy.

The *failure version*, on the other hand, involved the app completely freezing or crashing while asking it to do pretty much anything. Failure meant our poor project manager &mdash; who was pretty much as deft and sharp and diplomatic as they come &mdash; had to somehow navigate her in-the-moment commentary to a narrative that reframed these events as a completely normal on the path to assured victory.

As these demos stacked up, it was clear the failure version was decidedly not the outlier.

#### What Happened?

[1]: http://michaelshores.com
[2]: https://centerforjobs.org
[3]: https://calmatters.org
[4]: https://www.youtube.com/watch?v=glZ1C-Yu5tw&t=123s
