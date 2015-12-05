Intro quick bio 

purpose of talk 

What is FP? quick mention of that it has benefits in some cases

quotes on FP
 > You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.
 > - Joe Armstrong
 
 
 > If you're creating ctor functions and calling new on them, you don't know javascript
 >  - Eric Elliot

Motivation:
 - Why OO sometimes sucks
  - State and functionality mixed together
  - People sometimes focus too much on class hierarchy
  - Calling a method might change state somewhere unexpected
 - fewer race cond / state mismatches
  - Flow is more obvious from function composition
  - Code gets mutaed in few places
 - simpler code, less code?
  - Function composition makes reuse your first consideration
 - concurrent code
  - Not mutagin shared state makes it easier to run things in parallel

Why people sometimes say state is evil
 - Harder to reason about if it changes by reference

Definitions
-----------

First class function
 - Functions that can be created and passed around just like any other type
 - `var a = function(x){ return x;};`
 - Allows you to pass bits of code around and compose simple functions to create more complex functionality
 
Pure function
 - Functions that don't mutate any state
 - Return a new piece of data from their arguments with out modifying existing data
 - Always returns the same value when given the same arguments
``` js
// Not pure
var count = 0;
function increment(amount){
count += amount || 0;
return count;
}

increment(1); // 1
increment(1); // 2
```

``` js
// Pure
function add(a, b){
 return a + b;
}

add(1, 1); // 2
add(1, 1); // 2
```

Referential transparency
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

Immutability

Higher order function
 - function that takes another function as an argument

Compare OO vs FP
 - list iteration
 - memoization
 - currying  / partial function applition
 def. show mutating object state vs calling function and getting new object with changed state

Really simple example of an OO vs FP approach to a simple problem (fizz buzz or whatever ... Need to think of a good example)

more exmamples
--------------

partial function application (may not be useful)
 - Eliminate the troubles with `this` in callbacks
```js

events.on("something", par(doTheThing, this));

function doTheThing(importantContext, eventData){
 importantContext.doStuff(eventData.thing); // Don't have to use `.bind(this)` 
}

```

Downsides to FP
 - Immutable data structures and many functions / closures end up taking up more memory
 - Having pure functions everywhere can be less efficient due to context switching

Resources
---------
http://reactivex.io/learnrx/
