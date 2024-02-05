"use strict";

const dir = "./lib";
const ext = ".js";
const keys = ["cancelable", "debounce", "limit", "memoize", "once", "throttle", "timeout"];
const libs = {};

for (const key of keys) {
  const path = `${dir}/${key}${ext}`;
  const resolved = require.resolve(path);
  libs[key] = require(resolved);
}

module.exports = libs;