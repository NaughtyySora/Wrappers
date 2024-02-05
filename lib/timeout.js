"use strict";

const timeout = (ms, fn) => {
  let timer = setTimeout(() => {
    if (timer) console.log("timeout");
    timer = null;
  }, ms);

  return (...args) => {
    if (!timer) return;
    timer = null;
    return fn(...args);
  }
};

module.exports = timeout;