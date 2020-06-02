function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), n = function() {
    var t = this, e = arguments;
    return setTimeout(function() {
        t.state = "resolved";
        for (var n = 0, i = t.dones.length; n < i; n++) t.dones[n].apply(t, e);
        t.dones = [];
    }, 0), this;
}, i = function() {
    var t = this, e = arguments;
    return setTimeout(function() {
        t.state = "rejected";
        for (var n = 0, i = t.fails.length; n < i; n++) "function" == typeof t.fails[n] ? t.fails[n].apply(t, e) : console.warn("no fail deferred", t);
        t.fails = [];
    }, 0), this;
}, s = function() {
    return "resolved" == this.state && n.apply(this, arguments), "rejected" == this.state && i.apply(this, arguments), 
    this;
}, r = function() {
    function r() {
        t(this, r), this.args = null, this.dones = [], this.fails = [], this.state = "pending";
    }
    return e(r, [ {
        key: "then",
        value: function(t, e) {
            return this.done(t).fail(e);
        }
    }, {
        key: "done",
        value: function(t) {
            return this.dones.push(t), s.apply(this, this.args);
        }
    }, {
        key: "fail",
        value: function(t) {
            return this.fails.push(t), s.apply(this, this.args);
        }
    }, {
        key: "always",
        value: function(t) {
            return this.done(t).fail(t), s.apply(this, this.args);
        }
    }, {
        key: "resolve",
        value: function() {
            if ("pending" === this.state) return n.apply(this, this.args = arguments);
        }
    }, {
        key: "reject",
        value: function() {
            if ("pending" === this.state) return i.apply(this, this.args = arguments);
        }
    } ]), r;
}();

r.when = function() {
    var t = new r(), e = arguments.length, n = [];
    return Array.prototype.slice.call(arguments).map(function(i, s) {
        i.always(function() {
            "resolved" == this.state ? (n[s] = Array.prototype.slice.call(arguments), "pending" == t.state && 0 == --e && t.resolve.apply(t, n)) : "rejected" == this.state && (n[s] = arguments, 
            t.reject.apply(t, n));
        });
    }), t;
}, exports.default = r;