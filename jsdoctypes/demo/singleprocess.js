#!/usr/bin/env node
const { fibonacci } = require('./fibonacci.js');
let total = 0;

for (let i = 0; i < 12; i++) {
  let f = fibonacci(40);
  console.log(`Performed work ${i+1}.`);
  total += f;
}
console.log(`The answer is: ${total}`);
