"use strict";

const once = fn => (...args) => {
  if (fn) {
    const result = fn(...args);
    fn = null;
    return result;
  }
};

module.exports = once;