---
layout: post

title:  "Learn Recursion Without Wanting to Shoot Yourself"
tagline: "A practical self-help guide."
excerpt: "For those of us who are not naturally math + science inclined, recursion can be less of a tool and more of a nemesis. Allow me to explain."

category: technical
date:   2018-04-20 19:55:46 -0700
image_url: "/assets/posts/recursion.jpg"
display: portrait
---

<p class="big"><span class="lead">For those of us</span> who are not naturally math + science inclined, recursion can often be less of a tool and more of a nemesis. Let me start by setting a scene.</p>

<p class="big">You've been a hard-working, scrappy professional developer for several years. Over these years, you've managed to create real, useful things. You've regularly handled deluges of uncertainty. You've taken full responsibility for finding tangible, working solutions to critical problems. You've locked yourself in rooms and paced, consumed stimulants, cursed and brutally iterated until things finally, finally worked. You should, if you really looked objectively, be really dang proud of youself. You should have core confidence in your identity and craft, as a brave and experienced coder with metaphoric digital purple hearts.</p>

<p class="big">But, you don't. Because you know deep down that you aren't a "real" programmer. Because you don't really understand things like recursion.</p>

It's not that you don't *get the rough idea* and all. Yes, yes, frames within frames within frames. Yes, yes, turtles all the way down. Yes, yes, you nod at technical buzzwords and giggle at programming memes. But when you sit down to solve a real-life problem with code and start considering implementations you think about how there is undoubtedly some more mathematically elegant approach to succinctly decimate the task, then you… swear under your breath and begin typing out another f***ing `for` loop.

And truthfully, `for` loops are probably fine. Most meaningful success from coding comes more from tenacity and careful planning than from dazzling our fellow under-the-hood jockeys. In tech, straightforward is better than magical.

But, there will also inevitably be times when we *do* need some magic, and that's where these slightly more sophisticated CS concepts like recursion really shine. They also can help to keep our craft exciting and fresh, and keep our problem-solver brains from stagnating around old patterns.

So, let's dig in and see what we can unearth. We will cover what recursion *is* in simplest terms. Then, we will cover *where exactly you should use it* during implementations, and *what those implementations look like.*

### <span>What Is Recursion?</span>

The best practical definition of recursion I've heard comes from Mattias Petter Johansson's [superb video](https://www.youtube.com/watch?v=k7-N8R0-KY4) on the subject, as it is dead simple while remaining concrete:

**Recursion is when a function calls itself until it doesn't.**

In my experience, when someone first encounters and struggles with a new concept, it is less that they are not able to *grasp the idea* and more than it isn't clear *why the idea is useful.* This is certainly true for me, and recursion was no exception.

When I first heard the definition, I recognized it as the endless mirrors meme that almost everyone has seen. I tried to think about what this would look like as code.

```javascript
function reflect(image) {
  // but how do you stop?
  return reflect(image); // what is the point?
}
```

Uhh, hmm. Okay. I had many questions. *Why would anyone ever do this?* And how would it know when to stop calling itself? An arbitrary counter? And isn't the *cardinal sin* of explaining what a word means to use the word in your explanation? It didn't seem practical. It seemed like theory for theory's sake.

The whole thing felt somehow fundamentally nonsensical, counterintuitive, and on an outside chance might possibly cause the universe to implode.

#### Eureka Moment

I visualized the endless mirrors again, and after some marinating it hit me my code representation was missing something crucial: *the mirrors were shrinking the image slightly with each reflection.* In other words, in code terms, the function must call itself *with an updated argument* each time.

```javascript
function reflect(image) {
  image.size = image.size - 1;
  // same `reflect()` but updated `image`
  return reflect(image);
}
```

This also explained how to stop the otherwise endless call loop.

```javascript
function reflect(image) {
  image.size = image.size - 1;
  // ah, HERE's how we stop.
  if (image.size == 0)
    return image;

  return reflect(image);
}
```

*Oooooohhhhhhhh.* Everything started to make sense. Is there any dopamine rush sweeter than that of a spontaneous eureka moment? I'll fight anyone who says there is.

So, at the risk of flagrantly tramping over elegance in the service of being explicit, I'll augment MPJ's definition:

**Recursion is when a function calls itself *with an updated argument each time* until a condition is satisfied.**

For me, this was a key insight: just as with taking repeated bites of an apple, calling the same function over and over with new arguments isn't *actually* repeating yourself. Rather, you are performing the same action on a continuously evolving object that is carrying you towards a desired outcome.

And this, it turns out, has real practical power.

<!-- #### Intuitions for Natural Language vs. Code

There is a second (smaller) elephant in the room worth addressing here: *in computer science, it isn't at all weird to define something and then include that something in the definition itself.* This is the *exact opposite* of our intuitions around natural spoken language. The cardinal sin of explaining what a word means is to use the word in your explanation! So, the feeling that this principle is somehow fundamentally nonsensical, counterintuitive, or will cause the universe to implode is understandable.

This dichotomy actually makes sense, though &mdash; spoken languages are designed to reduce the complexity of the world into tamable tokens, whereas math and science are designed to reflect the complexity of the world accurately. And the fact is, as humans in real life, we do this self-referencing recursion stuff all the time. -->

### <span>Recursion In Real Life</span>

This is the part that gave me that lovely deer-in-headlights feeling for so many years, every time I sat down to solve an actual problem. It is all well and good to talk theory, but nuts-and-bolts implementation is always harder. At the end of the day, when pressed against a corner, we reach for what we know.

It turns out though, that buried beneath the fanciness, recursion implementations follow a simple and fairly reliable set of patterns. These are the two that I see most often, and that I’ve learned to rely upon during "actual" coding.

## Pattern 1: The Russian Dolls

![some cats and one mouse](/assets/posts/recursion_cats.jpg)

The Russian doll metaphor is one of the "classic" recursion examples, and it is a good one. This being the internet, you'll understand that one or more of our dolls are legally required to be anthropomorphic cats. When you want to take them out to play with them (okay... clearly playing with dolls is not a common modern thing. Perhaps "hypothesize about the leisure activities of a deceased and once-great ancient civilization" is more appropriate), you unpack them and line them up side-by-side, as above. When you put them away, the dolls all fit nicely inside one another, so that from the outside one only sees the biggest one.

Here are our Russian cat-dolls in this put-away state, represented as a data structure.

```javascript
// Ivan is the mouse
const catDolls = {
  name: "Katerina",
  inside: {
    name: "Dimitri",
    inside: {
      name: "Alyosha",
      inside: {
        name: "Grushenka",
        inside: {
          name: "Ivan",
          inside: null
        }
      }
    }
  }
}
```
Notice how for a structure like the dolls above, a traditional loop would only “see" it as one item. Yet functionally, it is not — our human mind clearly understands it to be a repeating pattern, and we want to iterate on it. This is where recursion rides in on its shining golden rainbow pegasus.

#### Tunneling To the Center

Recursion is an amazing tool for operating on data structures with *depth or nesting*. Recursive patterns allow us to easily "drill down" into data structures, instead of "skimming across" them like `for` and `while` loops do.  Recursion lets us iterate *into* something instead of *across* it.

Okay, enough with the wild claims. Let's see some hard evidence.

Here's a recursive function to unpack our cat-dolls into a simple array:
```javascript
let unpackedDolls = [];

function unpack(doll) {
  // add the current doll to our array.
  unpackedDolls.push(doll.name);
  // if nothing inside the doll, we are done
  if (!doll.inside)
    return doll;
  // re-run with modified argument
  let nextDoll = doll.inside;
  return unpack(nextDoll)  // ding ding! recursive call here
}

unpack(catDolls);
```

Look familiar? Like the earlier endless mirrors code, this function a) modifies the argument and re-runs itself with it during each loop, and b) checks the argument against a *base case* to see if it should break the loop. The part that is new &mdash; and incidentally what nudges it towards being actual, useable code &mdash; is the first line, where we snag each doll name for the `unpackedDolls` array. In other words, it's where we leverage our loop to do *meaningful work* of some kind.

This gives us a generic pattern with three meaningful components:
1. **Do meaningful work.** Extract to an external array, print to console, etc.
2. **Check for the base case.** Without this, our loop will careen on infinitely until we hit the lovely `StackOverflowError`.
3. **Modify the argument and re-run the function with it.** Hopefully, self-explanatory at this point.

Or the same thing expressed as pseudo-code:
```javascript
function doSomething(argument) {
  // 1. DO MEANINGFUL WORK with current argument:
  //    extract it to an external array, print it to console, etc.
  doStuffWith(argument);
  // 2. TEST FOR "BASE CASE" or "catcher" condition, which
  //    if true returns the argument without recursion.
  if (nothingMoreToDo(argument))
    return argument;
  // 3. MODIFY THE ARGUMENT, then
  //    re-run the function with the new argument.
  let modified = modify(argument);
  return doSomething(modified); // recursive call!
}
```

Note that the *ordering* of these components is arbitrarily swappable depending on particulars, with the possible exception of the recursive call generally occurring at the end.

Just to widen perspective a bit, here is another bare-bones use case.

```javascript
// Count to ten.
function countUp(num) {
  // do meaningful stuff
  console.log(num);
  // base case
  if (num == 10)
    return num;
  // re-run with updated argument
  let newNum = num + 1;
  return countUp(newNum);
}
countUp(0); // 1 2 3 4 5 6 7 8 9 10
```
#### Wrapping It Up

In the cat-dolls example, you may have noticed that defining the `unpackedDolls` array outside the function was a bit awkward. Specifically, it's not so great that the arrays get populated as a *side effect* &mdash; intuitively the function should return the array itself when invoked.

This is because *any variables we initialize inside a recursive function will turn to vapor at the next iteration.* In other words, the body of a recursive function operates basically the same as the body of a `for` loop.

This won't work...
```javascript
function count(num) {
  let counted = []; // !! paved over with each iteration
  counted.push(count)

  if (num <= 10)
    return num;
  return count(num + 1);
}
count(0);
```
...for the same reason this won't work:
```javascript
for (num = 1; num <= 10; num++) {
  let counted = []; // !! paved over with each iteration
  counted.push(num);
}
```
The `for` loop version of this is everywhere, and we habitually solve it by properly moving `counted` outside the loop so it isn't paved over, then encapsulating the whole thing in a function call.
```javascript
function countToTen(start) {
  let counted = []; // safe from the loop!
  // begin loop
  for (num = start; num <= 10; num++) {
    counted.push(num);
  }
  // end loop
  return counted;
}
countToTen(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
There, nice and tidy. And likely super obvious. But hang tight, the point is we do this with recursion too.

The recursive version of this might *seem* more sophisticated on first glance because it has a function within a function, but it is the *exact same pattern* done for the *exact same reasons.*
```javascript
function countToTen(start) {
  let counted = []; // safe from the (recursive) loop!
  // begin loop
  function count(num) {
    counted.push(count)

    if (num <= 10)
      return num;

    return count(num + 1);
  }
  count(start);
  // end loop
  return counted;
}
countToTen(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
Back to our dolls. This pattern works exactly the same for them.
```javascript
function collectDolls(dolls) {
  var collected = []; // safe from the loop!

  function unpack(doll) {
    collected.push(doll.name);

    if (!doll.inside)
      return doll;

    return unpack(doll.inside)
  }
  unpack(dolls);
  return collected;
}

collectDolls(catDolls);
// ["Katerina", "Dimitri", "Alyosha", "Grushenka", "Ivan"]
```
This encapsulation now gives us a pure function without side effects, which is pretty great. Things are starting to be genuinely useful.

Still, we are fairly limited &mdash; this pattern will only work with nested structures that deal with *one object at a time*. In other words, we can only drill straight down. Roughly speaking, we have traditional loops to traverse horizontally, and now recursive loops to traverse vertically. But what about the ability to do both? How do we handle *nested lists* of objects?

## Pattern 2: Amazon UnBoxing

![box party](/assets/posts/recursion_unboxing.jpg)

Imagine you receive two packages from Amazon. Now, you order a lot of stuff from Amazon, so you have no idea what’s in the packages, but it’s not a problem as your brain has a comfortable routine for opening these packages and getting at the happy treasures within them. You tear open the first one and discover whiskey-scented pillar candles. Sweet. First giddy consumerism high of the day. You tear open the second one and discover… three smaller boxes. OH GOD. This was not the expected results! What shall we do????

Yet you know, reading and imagining this stuation, that there would be no panic. You wouldn't think twice about it — you would simply execute your brain's `open Amazon package` routine on the three smaller packages. If there are *even smaller packages inside those,* that'd be fine too (and also adorably, whimsically surreal). You would simply keep going until you hit the paydirt of an actual ordered product.  

We could roughly etch this out in code like this:

```javascript
function unpack(box) {
  let contents = box.contents;

  if (isActualProduct(contents)) {
    return contents
  }
  else {
    return unpack(contents);
  }
}
```
Looks familiar, right? But, there's a problem. The above will only work if there is a *single* box inside the larger box.

[ dolls algo ]

This, of course, would be pointless — the whole reason for a larger box is to carry multiple smaller boxes inside. In that scenario, that means `box.contents` above will be an *array*.

Okay, let's back up and try and visualize what an Amazon Prime delivery of a large and a small mystery box would be in data structure form.

```javascript
// Don't judge me.
const smallBox = { contents: ["scented candles"] };

const largeBox = { contents: [
  { contents: ["stuffed giraffe", "stuffed polar bear"]},
  { contents: ["sewing thread", "sewing needle"]},
  { contents: ["power drill"]}
]}
```

Notice that the actual products in each box are nested in an array. This means each time we unpack a box and find its contents, we *must* begin by *iterating across those contents*.

```javascript
// tiny helper function for legibility
const isProduct = (item) => typeof(item) == "string";

let products = []; // our collector array

function unpack(box) {
  // start by iterating over the expected array
  box.contents.forEach(item => {
    // now apply our normal components
    if (isProduct(item)) { // CHECK BASE CASE
      products.push(item); // DO MEANINGFUL WORK
      return;
    }
    return unpack(item); // RE-RUN W NEW ARG
  })
}
```

You'll notice our three basic recursion components still apply here, but now they are all happening *inside a traditional array loop.*

This means we are actually now running *two* loops that work together: a "vertical" recursive loop that progresses layer-by-layer deeper *into* the object, and a "horizontal" array loop that scours *across* each layer upon arrival. Because of this, our function not only *drills down* but also *fans out*, giving it that gratifying tree-like shape so beloved by CS professors across the world.

[ algo image ]

Ah, the abstracted patterns of the natural world. Let's try to generalize this as pseudo-code like we did for the Russian dolls:

```javascript
function doSomething(object) {
  // 1. EXPECT SOME ITERABLE that we can loop across:
  object.contents.iterate(child => {
    // 2a. DO MEANINGFUL WORK
    doStuffWith(child);
    // 2b. TEST FOR "BASE CASE"
    if (nothingMoreToDo(child))
      return child;
    // 2c. MODIFY THE ARGUMENT THEN RE-RUN
    let modified = modify(child);
    return doSomething(modified); // recursive call!
  })
}
```

It's worth noting that the *type* of loop does not have to be `forEach()` &mdash; you could use `map()`, `reduce()`, a straight `for` loop, etc. It simply depends on the particulars of the situation and your own preference.

It is particularly common to see this pattern implemented with `reduce()`, which slims things down quite a bit in a quasi-voodoo-magic-seeming way.

```javascript
function unpack(box) {
  return box.contents.reduce((products, child) => {
    if (isProduct(child)) { // CHECK BASE CASE
      return products.concat(child); // DO MEANINGFUL WORK
    }
    return products.concat(unpack(child)); // RE-RUN W NEW ARG
  }, [])
}
```

I'll refrain from turning this into a tutorial on `reduce()`, but notice that "collector" array, `products`, is no longer initialized outside the function, and instead magically appears as an argument to the function passed to `reduce()`. This is actually `reduce`'s primary purpose &mdash; to abstract and handle this common "do stuff over and over and add it to a collector" pattern.

If you'd like to learn more about `reduce()` used specifically with recursion, I highly recommend this [clear and cuddly article](https://vickylai.com/verbose/understanding-array-prototype-reduce-and-recursion-using-apple-pie/) by developer / entrepreneur Vicky Lai. For `reduce()` in general, check out [MPJ's series](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) on functional programming.

<div class="divider"></div>
