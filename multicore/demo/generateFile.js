#!/usr/bin/env node
let i = 0;
let rc = [];

for (i = 1; i <= 20000; i++) {
  rc.push({
    name: 'item' + i,
    value: Math.floor(Math.random() * 10)
  });
}

console.log(JSON.stringify(rc, null, 2));
