Array.prototype.reduce || Object.defineProperty(Array.prototype, "reduce", {
    value: function(e) {
        if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        var t, r = Object(this), n = r.length >>> 0, o = 0;
        if (2 <= arguments.length) t = arguments[1]; else {
            for (;o < n && !(o in r); ) o++;
            if (n <= o) throw new TypeError("Reduce of empty array with no initial value");
            t = r[o++];
        }
        for (;o < n; ) o in r && (t = e(t, r[o], o, r)), o++;
        return t;
    }
});

var reduce = Function.bind.call(Function.call, Array.prototype.reduce), isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), concat = Function.bind.call(Function.call, Array.prototype.concat), keys = Reflect.ownKeys;

Object.values || (Object.values = function(r) {
    return reduce(keys(r), function(e, t) {
        return concat(e, "string" == typeof t && isEnumerable(r, t) ? [ r[t] ] : []);
    }, []);
}), Object.entries || (Object.entries = function(r) {
    return reduce(keys(r), function(e, t) {
        return concat(e, "string" == typeof t && isEnumerable(r, t) ? [ [ t, r[t] ] ] : []);
    }, []);
}), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function(e, t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var r = Object(this), n = r.length >>> 0;
        if (0 === n) return !1;
        for (var o = 0 | t, i = Math.max(0 <= o ? o : n - Math.abs(o), 0); i < n; ) {
            if (r[i] === e) return !0;
            i++;
        }
        return !1;
    }
}), String.prototype.includes || (String.prototype.includes = function(e, t) {
    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
});