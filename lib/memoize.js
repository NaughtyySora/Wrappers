"use strict";

const memoize = (fn, ms) => {
  const cache = new Map();

  const wrapper = (...args) => {
    const key = args.join("|");

    if (cache.has(key)) return cache.get(key);

    const result = fn(...args);
    cache.set(key, result);

    if (ms) {
      setTimeout(() => {
        cache.delete(key);
      }, ms);
    }

    return result;
  };

  wrapper.clean = () => {
    cache.clear();
    return wrapper;
  };

  return wrapper;
};

module.exports = memoize;