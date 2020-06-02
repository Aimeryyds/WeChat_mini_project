function t(t) {
    if (Array.isArray(t)) {
        for (var r = 0, n = Array(t.length); r < t.length; r++) n[r] = t[r];
        return n;
    }
    return Array.from(t);
}

function r() {
    this._events = {};
}

var n = function() {
    function t(t, r) {
        var n = [], e = !0, o = !1, i = void 0;
        try {
            for (var a, f = t[Symbol.iterator](); !(e = (a = f.next()).done) && (n.push(a.value), 
            !r || n.length !== r); e = !0) ;
        } catch (t) {
            o = !0, i = t;
        } finally {
            try {
                !e && f.return && f.return();
            } finally {
                if (o) throw i;
            }
        }
        return n;
    }
    return function(r, n) {
        if (Array.isArray(r)) return r;
        if (Symbol.iterator in Object(r)) return t(r, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

r.prototype.on = function(t, r) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
    this._events[t] || (this._events[t] = []), this._events[t].push([ r, n ]);
}, r.prototype.once = function(t, r) {
    function n() {
        this.off(t, n), o || (o = !0, r.apply(e, arguments));
    }
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this, o = !1;
    this.on(t, n);
}, r.prototype.off = function(t, r) {
    var n = this._events[t];
    if (n) for (var e = n.length; e--; ) n[e][0] === r && n.splice(e, 1);
}, r.prototype.trigger = function(r) {
    for (var e, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
    (e = console).log.apply(e, [ "trigger", r ].concat(i));
    var f = this._events[r];
    if (f) for (var s = f.length, u = [].concat(t(f)), l = 0; l < s; l++) {
        var c = u[l], h = n(c, 2), v = h[0], y = h[1];
        v && v.apply(y, i);
    }
}, module.exports = r;