---
layout: post

title:  "Learn Recursion Without Wanting to Shoot Yourself"
tagline: "A practical self-help guide."
excerpt: "For those of us who are not naturally math + science inclined, recursion can be a very special nemesis. But all that ends today."

category: technical
date:   2018-04-20 19:55:46 -0700
image_url: "/assets/posts/recursion.jpg"
display: portrait
---

<p class="big"><span class="lead">For those of us</span> who are not naturally math + science inclined, recursion can be a very special nemesis. As we progress as programmers, we can look back and see how over and over, we've managed to create real, useful things. We've regularly handled diluges of uncertainty. We've taken full responsibility for finding tangible, working solutions to critical problems. We've locked ourselves in rooms and paced, consumed stimulants, cursed and brutally iterated until things finally, finally worked. We should, if we really looked objectively, be really dang proud of ourselves. We should have core confidence in our identity as programmers, as brave and experienced coders with metaphoric digital purple hearts.</p>

<p class="big">But, we don't. Because we know deep down that we aren't "real" programmers. Because we don't really understand things like recursion.</p>

Okay look, we *get the rough idea* and all. Yes, yes, frames within frames within frames. Yes, yes, turtles all the way down. Yes, yes, we nod at the technical buzzwords and giggle at the programming memes. But when we sit down to solve a real-life problem with code and start considering implementations we think about how there is undoubtedly some more mathematically elegant approach to succinctly decimate the task, then we… swear under our breath and begin typing out another f***ing `for` loop.

And truthfully, `for` loops are probably fine. Most meaningful success from coding comes more from tenacity and careful planning than from dazzling our fellow under-the-hood jockeys. In most technical endeavors, straightforward is better than magical. But, there will also inevitably be times when we do need some magic, and that's where these slightly more sophisticated CS concepts like recursion really shine. They also can help to keep our craft exciting and fresh, and keep our problem-solver brains from stagnating around old patterns.

So, let's dig in and see what we can unearth. We will cover what recursion *is* in simplest terms. Then, we will cover *where exactly you should use it* during implementations, and *what those implementations look like.*

### The Basics

First of all, the two best introductory tutorials on recursion have already been written, and you should consume them top to bottom before doing anything else. The first is the [recursion video](https://www.youtube.com/watch?v=k7-N8R0-KY4) from Mattias Petter Johansson, who in my opinion creates the best content about programming on YouTube. The second is this [wonderful introduction](https://vickylai.com/verbose/understanding-array-prototype-reduce-and-recursion-using-apple-pie/) to recursion in tandem with javascript's `reduce` by Vicky Lai, lovingly and simply illustrated with apple pie baking metaphors.

I like MPJ's definition from his video, as it is dead simple while remaining concrete:

**Recursion is when a function calls itself until it doesn't.**

Let’s unpack this a bit. Firstly, there is a more general elephant in the room worth addressing here: *in computer science, it isn't at all weird to define something and then include that something in the definition itself.* This is the exact opposite of how we approach natural spoken language! The cardinal sin of explaining what a word means is to use the word in your explanation. So, the feeling that this principle is somehow fundamentally nonsensical, counterintuitive, or will cause the universe to implode is understandable.

This dichotomy actually makes sense, though &mdash; spoken languages are designed to reduce the complexity of the world into tamable tokens, whereas math and science are designed to reflect the complexity of the world accurately. And the fact is, as humans in real life, we do this self-referencing recursion stuff all the time.

#### Amazon Prime Unboxing

Ms. Lai has a great example of this, which I will do a slightly more bro-y version of here. Imagine you receive two packages from Amazon. Now, you order a lot of stuff from Amazon, so you have no idea what’s in the packages, but it’s not a problem as your brain has a comfortable routine for opening these packages and getting at the happy treasures within them. You tear open the first one and discover whiskey-scented pillar candles. Sweet. First consumerist dopamine hit of the day. You tear open the second one and discover… three smaller boxes. OH GOD. This was not the expected results! What shall we do????

Yet you know, reading and imagining this stuation, that there would be zero panic. You wouldn’t think twice about it — you would simply execute your brain's "open Amazon package" routine on the three smaller packages. If there are *even smaller packages inside those,* that'd be fine too (though admittedly, whimsically surreal). You would simply keep going until you hit the paydirt of an actual ordered product.  

We could roughly etch this out in code like this:

```javascript
function unpack(item) {
  let contents = item.contents;

  if (isActualProduct(contents)) {
    return contents
  }
  else {
    return unpack(contents);
  }
}
```
The `isActualProduct` bit is known as the *base case* of the pattern. The base case is the case that can be solved without recursion. This bit is foundational to every recursion function, as it acts as the “catcher” that ensures that at some point — even if that point is far in the future — the function will stop calling itself and begin unwinding towards a final returned solution.

### Implementation

This is the part that gave me that lovely deer-in-headlights feeling for so many years, every time I sat down to solve an actual problem. It is all well and good to talk theory, but nuts-and-bolts implementation is always harder. At the end of the day, when pressed against a corner, we reach for what we know.

It turns out though, that buried beneath the fanciness, recursion implementations follow a simple and fairly reliable set of patterns. These are the two that I see most often, and that I’ve learned to rely upon when in actual coding trenches.

## Pattern 1: The Russian Dolls

![some cats and one mouse](/assets/posts/recursion_cats.jpg)

The Russian doll metaphor is one of the "classic" recursion examples, and it is a good one. This being the internet, you'll understand that our dolls are legally required to be anthropomorphic cats. The dolls all fit nicely inside one another, so that from the outside one only sees the biggest one. Here are our Russian cat-dolls in this state, represented as a data structure.

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
Notice how for a structure like the dolls above, a traditional loop would only “see" it as one item. Yet functionally, it is not — our human mind clearly understands it to be a repeating pattern, and we want to iterate on it. This is where recursion rides in on its shining golden pegasus.

Recursion is an amazing tool for operating on data structures with *depth or nesting*. Recursive patterns allow us to easily "drill down" into data structures, instead of "skimming across" them like for and while loops do.  Recursion lets us iterate *into* something instead of *across* it.

Okay, enough with the hype. Let’s look at some code.

Here's how we could use a recursive function to unpack our cat-dolls into a neat horizontal array:
```javascript
let unpackedDolls = [];

function unpack(doll) {
  // Step 1: extract the current doll to our `unpackedDolls` array.
  unpackedDolls.push(doll.name);

   // Step 2: if nothing inside the doll, we are done
  if (!doll.inside)
    return doll;

  // Step 3: re-run with modified argument
  let nextDoll = doll.inside;
  return unpack(nextDoll)  // ding ding! recursive call here
}

unpack(catDolls);
```
We can generalize this into the underlying pattern that `unpack` is built upon:
```javascript
function doSomething(argument) {
  // Step 1: Do meaningful stuff with current argument:
  //         extract it to an external array, print it to console, etc.
  doStuffWith(argument);
  // Step 2: the "base case" or "catcher" condition, which
  //         if true returns the argument without recursion.
  //         Every recursive function MUST have something like this,
  //         else it will recurse endlessly.
  if (nothingMoreToDo(argument))
    return argument;
  // Step 3: Modify the argument somewhere, then
  //         re-run the function with the new argument.
  let modified = modify(argument);
  return doSomething(modified); // recursive call!
}
```
This implementation pattern is the simplest that I know of, and though the details can vary, it is *very* common. In the pattern, you write a function that takes a single argument, which then:
1. **Performs meaningful work with the current argument.** Extract to an external array, print to console, etc.
2. **Checks for our base case conditional, and if true return the function without recursion.** This conditional "catcher" clause MUST exist, otherwise your function will call itself forever and you will get a lovely `StackOverflowError`.
3. **Reruns the entire function with a new, modified argument.**

*Note that the order of steps 1 and 2 is arbitarily swappable depending on particulars.*

Just to widen perspective a bit, here is another bare-bones use case.
```javascript
// Count to ten.
function countUp(num) {
  // step 1: do the meaningful stuff, in this case print the current count.
  console.log(num);
  // step 2: base case conditional that halts the recursion loop.
  if (num == 10)
    return num;
  // step 3: re-run with modified argument, in this case incrementing `num` by 1.
  let newNum = num + 1;
  return countUp(newNum);
}
countUp(0); // 1 2 3 4 5 6 7 8 9 10
```
#### Wrapping It Up

Back to our cat-dolls, though. You may have noticed that defining the `unpackedDolls` array outside the function a bit awkward, and it highlights a minor but common structural problem with recursive patterns: we can’t initialize variables inside the recursive function that we plan on recursively updating or adding to. This is because the body of a recursive function operates basically the same as the body of a `for` loop.

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

  for (num = start; num <= 10; num++) {
    counted.push(num);
  }
  return counted;
}
countToTen(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
There, nice and tidy.

The recursive version of this might *seem* more sophisticated on first glance because it has a function within a function, but it is the *exact same pattern* done for the *exact same reasons.*
```javascript
function countToTen(start) {
  let counted = []; // safe from the (recursive) loop!

  function count(num) {
    counted.push(count)

    if (num <= 10)
      return num;

    return count(num + 1);
  }
  count(start);
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
This is actually pretty useful now, but still limited as this pattern will only work with nested structures that deal with *one object at a time*. In other words, we can only drill straight down. Roughly speaking, we have traditional loops to traverse horizontally, and recursive loops to traverse vertically. But what about the ability to do both? How do we handle *nested lists* of objects?

This is actually the recursive pattern that would describe our real life example of the two Amazon boxes from earlier. Let’s see if we can suss out a generic implementation for that.

## Pattern 2: Amazon UnBoxing

Like before, let's start by representing what Amazon Prime delivery of a large and a small mystery box would be in data structure form.

```javascript
var smallBox = { contents: ["scented candles"] };

var largeBox = { contents: [
  { contents: ["stuffed giraffe", "stuffed polar bear"]},
  { contents: ["sewing thread", "sewing needle"]},
  { contents: ["power drill"]}
]}

// Small helper function to improve legibility
const isBox = (item) => Object.keys(item).includes("contents");
```
