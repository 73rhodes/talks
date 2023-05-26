#!/usr/bin/env node
const {Worker, isMainThread, parentPort, workerData, threadId} = require('worker_threads');
const numCpus = require('os').cpus().length;
const { fibonacci } = require('./fibonacci.js');

let total = 0;

if (isMainThread) {
  // console.log("This is the main thread.");
  let threads = new Set();

  console.log(`spawning ${numCpus} threads...`);
  for (let i=0; i < numCpus; i++) {
    threads.add(new Worker(__filename, { workerData: (12/numCpus) }));
  }
  for (let worker of threads) {
    worker.on("message", (msg) => {
      console.log(`Worker ${worker.threadId} performed work.`);
      total += msg;
    });
    worker.on("error", console.error);
    worker.on("exit", (code) => {
      threads.delete(worker);
      if (code != 0) console.error(new Error(`Worker stopped with exit code ${code}.`));
      if (threads.size === 0) {
        console.log("The answer is", total);
      }
    });
  }
} else {
  // console.log(`This is a worker thread ${threadId} with workerData ${workerData}.`);
  for (let i=0; i < workerData; i++) {
    parentPort.postMessage(fibonacci(40));
  }
}
