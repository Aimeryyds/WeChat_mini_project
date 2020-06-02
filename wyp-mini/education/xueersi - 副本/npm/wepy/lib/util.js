Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

exports.default = {
    $isEmpty: function(t) {
        return 0 === Object.keys(t).length;
    },
    $isEqual: function(t, e, r, o) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (t !== t) return e !== e;
        if (!t || !e) return t === e;
        var n = void 0 === t ? "undefined" : _typeof(t);
        return ("function" === n || "object" === n || "object" === (void 0 === e ? "undefined" : _typeof(e))) && this.$isDeepEqual(t, e, r, o);
    },
    $isDeepEqual: function(t, e, r, o) {
        var n = this, i = toString.call(t);
        if (i !== toString.call(e)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + t == "" + e;

          case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

          case "[object Date]":
          case "[object Boolean]":
            return +t == +e;

          case "[object Symbol]":
            var c = "undefined" != typeof Symbol ? Symbol.prototype : null;
            return c.valueOf.call(t) === c.valueOf.call(e);
        }
        var u = "[object Array]" === i;
        if (!u) {
            if ("object" !== (void 0 === t ? "undefined" : _typeof(t)) || "object" !== (void 0 === e ? "undefined" : _typeof(e))) return t === e;
            var a = t.constructor, f = e.constructor;
            if (a !== f && !("function" == typeof a && a instanceof a && "function" == typeof f && f instanceof f) && "constructor" in t && "constructor" in e) return !1;
        }
        r = r || [], o = o || [];
        for (var s = r.length; s--; ) if (r[s] === t) return o[s] === e;
        if (r.push(t), o.push(e), u) {
            if ((s = t.length) !== e.length) return !1;
            for (;s--; ) if (!n.$isEqual(t[s], e[s], r, o)) return !1;
        } else {
            var l, p = Object.keys(t);
            if (s = p.length, Object.keys(e).length !== s) return !1;
            for (;s--; ) if (l = p[s], !n.$has(e, l) || !n.$isEqual(t[l], e[l], r, o)) return !1;
        }
        return r.pop(), o.pop(), !0;
    },
    $has: function(t, e) {
        if ("[object Array]" !== toString.call(e)) return t && hasOwnProperty.call(t, e);
        for (var r = e.length, o = 0; o < r; o++) {
            var n = e[o];
            if (!t || !hasOwnProperty.call(t, n)) return !1;
            t = t[n];
        }
        return !!r;
    },
    $extend: function() {
        var t, e, r, o, n, i, c = arguments[0] || {}, u = 1, a = arguments.length, f = !1, s = this;
        for ("boolean" == typeof c && (f = c, c = arguments[u] || {}, u++), "object" !== (void 0 === c ? "undefined" : _typeof(c)) && "function" != typeof c && (c = {}), 
        u === a && (c = this, u--); u < a; u++) if (t = arguments[u]) for (e in t) r = c[e], 
        o = t[e], c !== o && (f && o && (s.$isPlainObject(o) || (n = Array.isArray(o))) ? (n ? (n = !1, 
        i = r && Array.isArray(r) ? r : []) : i = r && s.$isPlainObject(r) ? r : {}, c[e] = s.$extend(f, i, o)) : c[e] = o);
        return c;
    },
    $copy: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.isArray(t) ? this.$extend(e, [], t) : "" + t == "null" ? t : "object" === (void 0 === t ? "undefined" : _typeof(t)) ? this.$extend(e, {}, t) : t;
    },
    $isPlainObject: function(t) {
        var e, r;
        return !(!t || "[object Object]" !== Object.prototype.toString.call(t)) && (!(e = Object.getPrototypeOf(t)) || "function" == typeof (r = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor) && Object.prototype.hasOwnProperty.toString.call(r) === Object.prototype.hasOwnProperty.toString.call(Object));
    },
    $resolvePath: function(t, e) {
        if (!e) return t;
        if ("/" === e[0]) return e = e.substr(1), this.$resolvePath("", e);
        if ("." !== e[0]) return this.$resolvePath(t, "./" + e);
        var r = t.split("/");
        return "." === e[0] && "/" === e[1] ? (e = e.substr(2), "." !== e[0] ? (r.length ? r[r.length - 1] = e : r = [ e ], 
        1 === r.length ? "/" + r[0] : r.join("/")) : this.$resolvePath(r.join("/"), e)) : "." === e[0] && "." === e[1] && "/" === e[2] ? (e = e.replace(/^\.*/gi, ""), 
        r.pop(), this.$resolvePath(r.join("/"), "." + e)) : "." === e[0] ? this.$resolvePath(t, e.substr(1)) : void 0;
    },
    $getParams: function(t) {
        var e = {}, r = t.indexOf("?");
        if (-1 !== r) {
            var o = t.substr(r + 1), n = void 0;
            o.split("&").forEach(function(t) {
                n = t.split("="), e[n[0]] = decodeURIComponent(n[1]);
            });
        }
        return e;
    },
    hyphenate: function(t) {
        return t.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase();
    },
    camelize: function(t) {
        return t.replace(/-(\w)/g, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }
};