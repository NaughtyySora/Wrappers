"use strict";

const limit = (count, fn) => {
  let counter = 0;
  return (...args) => {
    if(counter >= count) return;
    counter++;
    return fn(...args);
  }
};

module.exports = limit;