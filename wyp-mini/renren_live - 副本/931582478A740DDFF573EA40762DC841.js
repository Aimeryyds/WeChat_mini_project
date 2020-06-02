function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), n = function() {
    function n() {
        e(this, n);
    }
    return t(n, [ {
        key: "_getIndex",
        value: function(e) {
            return e.currentTarget.dataset.index;
        }
    }, {
        key: "_getMoveX",
        value: function(e, t) {
            return this.getClientX(e) - t;
        }
    }, {
        key: "_getEndX",
        value: function(e, t) {
            var n = e.changedTouches;
            if (1 === n.length) return n[0].clientX - t;
        }
    }, {
        key: "_resetData",
        value: function(e) {
            for (var t in e) e[t].left = 0;
            return e;
        }
    }, {
        key: "getClientX",
        value: function(e) {
            var t = e.touches;
            if (1 === t.length) return t[0].clientX;
        }
    }, {
        key: "touchM",
        value: function(e, t, n) {
            var r = this._resetData(t);
            return r[this._getIndex(e)].left = this._getMoveX(e, n), r;
        }
    }, {
        key: "touchE",
        value: function(e, t, n, r) {
            var u = this._resetData(t), a = this._getEndX(e, n), i = 0;
            return i = a < 0 && Math.abs(a) > r / 2 ? -r : 0, u[this._getIndex(e)].left = i, 
            u;
        }
    }, {
        key: "deleteItem",
        value: function(e, t) {
            return t.splice(this._getIndex(e), 1), t;
        }
    } ]), n;
}();

exports.default = n;