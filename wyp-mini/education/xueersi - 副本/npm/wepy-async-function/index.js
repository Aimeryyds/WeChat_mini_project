var g = require("./global.js");

g.Promise || (g.Promise = require("./../promise-polyfill/promise.js")), g.regeneratorRuntime || (g.regeneratorRuntime = require("./../regenerator-runtime/runtime.js"));