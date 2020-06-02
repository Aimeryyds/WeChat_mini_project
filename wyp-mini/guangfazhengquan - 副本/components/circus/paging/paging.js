function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

require("../../utils");

exports.default = function e(n) {
    t(this, e), (this.options = n).ctx._paging0 = function() {
        console.log("123456");
    };
};