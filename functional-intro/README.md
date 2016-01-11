# Intro to Functional Programming

 - Darren DeRidder @73rhodes
 - Georgey Shibaev rangermauve

## Intro

### What is FP?

 - Programming with functions.
 - Building more complex behavior from simple functions.
 - Separating state from behavior.

### Functional JavaScript

 - Note that JS is a functional language.
 - Started out as Lisp in the browser.

### Quotes on OO and FP.

 - I think the lack of reusability comes in object-oriented languages, not functional languages. Because the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.

 - Joe Armstrong
 
 - If you're creating constructor functions and calling new on them, you don't know javascript.
 - Eric Elliot
 
 - I now see my early attempts to support the classical model in JavaScript as a mistake.
 - Douglas Crockford

### Why Functional Programming?

#### Benefits

 - Simpler code, less code.
 - Function composition makes reuse your first consideration.
 - Easier to test
 - Easier to support concurrency
 - Not mutating shared state makes it easier to run things in parallel
 - Composable functions - building blocks for programs

 - Fewer race conditions / state mismatches.
 - Program flow is more obvious from function composition.
 - State gets mutated in few places.

####  Why OO sometimes sucks
 - State and functionality are mixed together.
 - People sometimes focus too much on class hierarchy.
 - Calling a method might change state somewhere unexpected.
 - Unexpected state somewhere may break your method.

#### Why do people sometimes say state is evil?
 - Harder to reason about if it changes by reference.
 - Creates dependencies between things.
 - Grouping state and behaviour together in objects makes it very hard to know the overall program state at any given time.

## Definitions

### First class function
 - Functions that can be created and passed around just like any other type

   `var a = function(x){ return x;};`

 - Allows you to pass bits of code around and compose simple functions to create more complex functionality
 
### Pure function
 - Functions that don't mutate any state
 - Return a new piece of data from their arguments with out modifying existing data
 - Always returns the same value when given the same arguments

`// Not pure
var count = 0;
function increment(amount){
count += amount || 0;
return count;
}

increment(1); // 1
increment(1); // 2
`

``` js
// Pure
function add(a, b){
 return a + b;
}

add(1, 1); // 2
add(1, 1); // 2
```

### Referential transparency
 - Functions calls that can be replaced by their result without affecting the program
 - Allows for optimizations where entire call stacks get replaced with just the result

``` js
function fib(n){
 if(n <= 1) return 1;
 return fib(n -1) + fib(n - 2);
}

// Heavy computation
var value = fib(13);

// Replacement can be done at compile time
var value = 233;
```

### Immutability

### Higher order function
 - function that takes another function as an argument


## Examples: Compare OO / imperative vs FP / declarative

 - list iteration example

 - memoization

 - currying  / partial function applition
 def. show mutating object state vs calling function and getting new object with changed state

 - Really simple example of an OO vs FP approach to a simple problem (fizz buzz or whatever ... Need to think of a good example)

 - partial function application (may not be useful)
  - Eliminate the troubles with `this` in callbacks
```js

events.on("something", par(doTheThing, this));

function doTheThing(importantContext, eventData){
 importantContext.doStuff(eventData.thing); // Don't have to use `.bind(this)` 
}

```

## Downsides to FP
 - Immutable data structures and many functions / closures end up taking up more memory
 - Having pure functions everywhere can be less efficient due to context switching

## Resources

[Professor Frisby's Mostly Adequate Gide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)

http://reactivex.io/learnrx/
