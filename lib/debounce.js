"use strict";

const debounce = (ms, fn) => {
  let timer = timeout();
  let params = null;

  function timeout() {
    return setTimeout(() => {
      timer = null;
    }, ms);
  }

  return (...args) => {
    if (timer) params = args;
    else (timer = timeout(), fn(...params));
  };
};

module.exports = debounce;