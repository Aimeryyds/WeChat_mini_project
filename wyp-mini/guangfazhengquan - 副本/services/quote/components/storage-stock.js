function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), n = require("../../../components/bridge"), i = require("../../../components/utils"), o = function() {
    function o(t) {
        e(this, o), this.options = t;
    }
    return t(o, [ {
        key: "all",
        value: function(e) {
            return e ? ((0, n.setStorageSync)(this.options.key, e), e) : (0, n.getStorageSync)(this.options.key) || [];
        }
    }, {
        key: "find",
        value: function(e) {
            var t = this.all();
            if (!e) return t;
            for (var n = 0, o = t.length; n < o; n++) {
                var s = t[n];
                if (e.market == s.market && e.code == s.code) return (0, i.assign)({
                    $index: n
                }, s);
            }
        }
    }, {
        key: "unshift",
        value: function(e) {
            this.remove(e);
            var t = this.all();
            return t.unshift(e), this.options.size && t.length > this.options.size && (t.length = this.options.size), 
            (0, n.setStorageSync)(this.options.key, t), this.find(e);
        }
    }, {
        key: "update",
        value: function(e) {
            for (var t = this.all(), i = 0, o = t.length; i < o; i++) {
                var s = t[i];
                if (s.exchange == e.exchange && s.code == e.code) {
                    t[i] = e;
                    break;
                }
            }
            (0, n.setStorageSync)(this.options.key, t);
        }
    }, {
        key: "push",
        value: function(e) {
            this.remove(e);
            var t = this.all();
            return t.push(e), this.options.size && t.length > this.options.size && (t.length = this.options.size), 
            (0, n.setStorageSync)(this.options.key, t), this.find(e);
        }
    }, {
        key: "remove",
        value: function(e) {
            var t = this.find(e);
            if (t) {
                var i = this.all();
                i.splice(t.$index, 1), (0, n.setStorageSync)(this.options.key, i);
            }
        }
    }, {
        key: "clear",
        value: function() {
            (0, n.removeStorageSync)(this.options.key);
        }
    } ]), o;
}();

exports.default = o;