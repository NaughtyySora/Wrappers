"use strict";

const throttle = (count, ms, fn) => {
  let timer = timeout();
  let counter = 0;

  function timeout() {
    return setTimeout(() => {
      timer = null;
      counter = 0;
    }, ms);
  };

  return (...args) => {
    if (counter < count) {
      counter++;
      return fn(...args);
    }
    if(!timer) timer = timeout();
  };
};

module.exports = throttle;