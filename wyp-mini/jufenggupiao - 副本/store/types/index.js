Object.defineProperty(exports, "__esModule", {
    value: true
});

var _counter = require("./counter.js");

Object.keys(_counter).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _counter[key];
        }
    });
});