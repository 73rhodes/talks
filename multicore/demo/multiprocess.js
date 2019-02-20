#!/usr/bin/env node
const cluster = require('cluster');
const numWorkers = require('os').cpus().length;
const { fibonacci } = require('./fibonacci.js');

let total = 0;

if (cluster.isMaster) {
  // Master process.

  // Fork workers
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  // Print result when all workers exit.
  cluster.on("exit", (worker, code, signal) => {
    if(Object.keys(cluster.workers).length === 0) {
      console.log(`The answer is: ${total}`);
    }
  });

  // Handle messages from workers.
  cluster.on("message", (worker, message, handle) => {
    console.log(`Worker ${worker.id} performed work.`);
    total += message;
  });

  // Allocate work to worker processes
  for (let i = 0; i < 12; i++) {
    let id = (i%4)+1;
    cluster.workers[id].send("calculate");
  }

  // Finally tell workers to shut down.
  for (const id in cluster.workers) {
    cluster.workers[id].send("shutdown");
  }

} else {
  // Worker process.

  // Handle messages from master process.
  process.on("message", msg => {
    if (msg === "shutdown") process.exit(0);
    else process.send(fibonacci(40));
  });
}
