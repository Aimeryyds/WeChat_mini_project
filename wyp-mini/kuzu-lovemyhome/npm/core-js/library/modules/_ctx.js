module.exports = {};

var r = require("./_a-function.js");

module.exports = function(n, t, e) {
    if (r(n), void 0 === t) return n;
    switch (e) {
      case 1:
        return function(r) {
            return n.call(t, r);
        };

      case 2:
        return function(r, e) {
            return n.call(t, r, e);
        };

      case 3:
        return function(r, e, u) {
            return n.call(t, r, e, u);
        };
    }
    return function() {
        return n.apply(t, arguments);
    };
};