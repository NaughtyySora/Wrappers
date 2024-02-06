"use strict";

const fs = require("node:fs");
const path = require("node:path");

const dir = "./lib";

const files = fs.readdirSync(dir, { encoding: "utf8" });

const libs = files.reduce((acc, file) => {
  const { name } = path.parse(file);
  const resolved = require.resolve(`${dir}/${file}`);
  acc[name] = require(resolved);
  return acc;
}, {});

module.exports = libs;