"use strict";

const throttle = require("../lib/throttle");

const throttled = throttle(3, 1000, Math.random);

let key = 0;

const interval = setInterval(() => {
  key++;
  console.log("\x1b[1;34m throttled value: ", throttled(), "\x1b[0m");
  if (key >= 200) {
    clearInterval(interval);
    console.log("---throttled end---");
  }
}, 10);