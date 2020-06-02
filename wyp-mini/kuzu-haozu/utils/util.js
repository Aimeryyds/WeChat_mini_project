var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, n = function(o) {
    return "object" === (void 0 === o ? "undefined" : t(o));
};

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), e = t.getMonth() + 1, r = t.getDate(), i = t.getHours(), u = t.getMinutes(), f = t.getSeconds();
        return [ n, e, r ].map(o).join("/") + " " + [ i, u, f ].map(o).join(":");
    },
    mix: function t(o, e, r, i) {
        if (n(o) && n(e)) for (var u in e) e.hasOwnProperty(u) && (u in o ? r && (i && n(o[u]) && n(e[u]) ? t(o[u], e[u], r, i) : o[u] = e[u]) : o[u] = e[u]);
        return o;
    }
};