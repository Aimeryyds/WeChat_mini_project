function n(t, r, o, i) {
    var u;
    if (p.isArray(r)) p.each(r, function(r, u) {
        o || y.test(t) ? i(t, u) : n(t + "[" + ("object" === (void 0 === u ? "undefined" : e(u)) ? r : "") + "]", u, o, i);
    }); else if (o || "object" !== p.type(r)) i(t, r); else for (u in r) n(t + "[" + u + "]", r[u], o, i);
}

function t(n) {
    var t = n.length, r = p.type(n);
    return !p.isWindow(n) && (!(1 !== n.nodeType || !t) || "array" === r || "function" !== r && (0 === t || "number" == typeof t && 0 < t && t - 1 in n));
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
}, o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(n) {
    return void 0 === n ? "undefined" : r(n);
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : r(n);
}, e = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(n) {
    return void 0 === n ? "undefined" : o(n);
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : o(n);
}, i = {}, u = [], f = u.push, c = u.indexOf, l = i.toString, a = i.hasOwnProperty, s = "1.10.2".trim, y = /\[\]$/, p = {
    isFunction: function(n) {
        return "function" === p.type(n);
    },
    isArray: Array.isArray || function(n) {
        return "array" === p.type(n);
    },
    isWindow: function(n) {
        return null != n && n == n.window;
    },
    isNumeric: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    type: function(n) {
        return null == n ? String(n) : "object" === (void 0 === n ? "undefined" : e(n)) || "function" == typeof n ? i[l.call(n)] || "object" : void 0 === n ? "undefined" : e(n);
    },
    isPlainObject: function(n) {
        var t;
        if (!n || "object" !== p.type(n) || n.nodeType || p.isWindow(n)) return !1;
        try {
            if (n.constructor && !a.call(n, "constructor") && !a.call(n.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (n) {
            return !1;
        }
        if (p.support.ownLast) for (t in n) return a.call(n, t);
        for (t in n) ;
        return void 0 === t || a.call(n, t);
    },
    isEmptyObject: function(n) {
        var t;
        for (t in n) return !1;
        return !0;
    },
    each: function(n, r, o) {
        var e = 0, i = n.length, u = t(n);
        if (o) {
            if (u) for (;e < i && !1 !== r.apply(n[e], o); e++) ; else for (e in n) if (!1 === r.apply(n[e], o)) break;
        } else if (u) for (;e < i && !1 !== r.call(n[e], e, n[e]); e++) ; else for (e in n) if (!1 === r.call(n[e], e, n[e])) break;
        return n;
    },
    trim: s && !s.call("\ufeff?") ? function(n) {
        return null == n ? "" : s.call(n);
    } : function(n) {
        return null == n ? "" : (n + "").replace(y, "");
    },
    makeArray: function(n, r) {
        var o = r || [];
        return null != n && (t(Object(n)) ? p.merge(o, "string" == typeof n ? [ n ] : n) : f.call(o, n)), 
        o;
    },
    inArray: function(n, t, r) {
        var o;
        if (t) {
            if (c) return c.call(t, n, r);
            for (o = t.length, r = r ? r < 0 ? Math.max(0, o + r) : r : 0; r < o; r++) if (r in t && t[r] === n) return r;
        }
        return -1;
    },
    merge: function(n, t) {
        var r = t.length, o = n.length, e = 0;
        if ("number" == typeof r) for (;e < r; e++) n[o++] = t[e]; else for (;void 0 !== t[e]; ) n[o++] = t[e++];
        return n.length = o, n;
    },
    isMobile: function(n) {
        return "" !== p.trim(n) && /^1[3|4|5|7|8][0-9]\d{8}$/.test(p.trim(n));
    },
    toFixed: function(n, t) {
        var r = parseInt(t) || 0;
        if (r < -20 || 100 < r) throw new RangeError("Precision of " + r + " fractional digits is out of range");
        var o = Number(n);
        if (isNaN(o)) return "NaN";
        var e, i = "";
        if (o <= 0 && (i = "-", o = -o), o >= Math.pow(10, 21)) return i + o.toString();
        if (e = 0 == (t = Math.round(o * Math.pow(10, r))) ? "0" : t.toString(), 0 == r) return i + e;
        var u = e.length;
        return u <= r && (e = Math.pow(10, r + 1 - u).toString().substring(1) + e, u = r + 1), 
        0 < r && (e = e.substring(0, u - r) + "." + e.substring(u - r)), i + e;
    },
    extend: function() {
        var n, t, r, o, i, u, f = arguments[0] || {}, c = 1, l = arguments.length, a = !1;
        for ("boolean" == typeof f && (a = f, f = arguments[1] || {}, c = 2), "object" === (void 0 === f ? "undefined" : e(f)) || p.isFunction(f) || (f = {}), 
        l === c && (f = this, --c); c < l; c++) if (null != (n = arguments[c])) for (t in n) r = f[t], 
        f !== (o = n[t]) && (a && o && (p.isPlainObject(o) || (i = p.isArray(o))) ? (i ? (i = !1, 
        u = r && p.isArray(r) ? r : []) : u = r && p.isPlainObject(r) ? r : {}, f[t] = p.extend(a, u, o)) : void 0 !== o && (f[t] = o));
        return f;
    },
    param: function(t, r) {
        var o, e = [], i = function(n, t) {
            t = p.isFunction(t) ? t() : null == t ? "" : t, e[e.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
        };
        if (void 0 === r && (r = !1), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
            i(this.name, this.value);
        }); else for (o in t) n(o, t[o], r, i);
        return e.join("&").replace(/%20/g, "+");
    }
};

module.exports = p;