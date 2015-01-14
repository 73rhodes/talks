Flow
====

http://flowtype.org

## A static type checker for JavaScript

  * Opt-in: tell it which files to check (via `/* @flow */` header, at top of file)
  * Optional type annotations that transpile to plain JS (a la TypeScript)
  * Beta work-in-progress. Linux & Mac OS X only

## Some thoughts on the value of static type checking
  * Eric Elliot at Fluent 2014: ["Static Types are Over-rated: The Dynamic Duo - Loose Types and Object Extension"](https://www.youtube.com/watch?v=_kXiH1Yiemw)
  * Myth (can't build complex apps) vs. Reality (37signals, FB, Dow Jones, Adobe...)
  * Type correctness does not guarantee program correctness
  * When languages lack dynamic types, people fake it with ugly hacks
  * "Any sufficiently advanced [C / Fortran / Java ...] program contains an ad hoc, informally specified, bug-ridden, slow implementation of half of common Lisp" - Greenspun's Tenth Rule
  * ie. `void *`, generics, variadic functions. 
  * Dynamic types added to C++11, Objective-C
  * Benefit of functions that work on any type that implements the requirements (ie. valueOf method). Allow map, filter, forEach etc to be used generically
  * Necessity of automated testing
  * Code that is well organized (simple modules), linted, unit tested, peer reviewed, integration tested -- very rare to have type errors
  * Still a place for static analysis - my preference: up front in dev tool chain, ie. SublimeText plugin

## What Flow gets wrong
  * Opt-in file selection via header rather than command line (cannot compose unix command chains, ie. does not play well with others)
  * Annotations as invalid JavaScript (should have used JSDoc-formatted comment blocks to glean type info)
  * For this, Tern.JS may be preferable
  * Doxli - my attempt to get module JSDoc info on CLI
    ```
    var doxli = require('./doxli');
    var u = require('./test/utils.js');
    doxli('./test/utils.js');
    u.countfoo.help()
    ```
 
## Examples
  * Prerequisites - `.flowconfig` file in dir or parent dir, `/* @flow */` header.
  * Hello World - basic type checking; ie multiply function called with a string
  * Nullable Types - function to return x.length called with null
  * Dynamic Code - function to return x.length called with string and number

## More advanced usage
  * Flow does not do type inference across module boundaries. That requires type annotations in the `require`d module
  * Also check out Google's Closure Compiler and Tern.JS for JSDoc static analysis
