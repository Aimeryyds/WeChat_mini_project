function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _class = function() {
    function e(t, n, a) {
        _classCallCheck(this, e), this.active = !0, this.name = t, this.source = n, this.type = a;
    }
    return _createClass(e, [ {
        key: "$destroy",
        value: function() {
            this.active = !1;
        }
    }, {
        key: "$transfor",
        value: function(e) {
            var t = 0;
            for (t in e) this[t] = e[t];
        }
    } ]), e;
}();

exports.default = _class;