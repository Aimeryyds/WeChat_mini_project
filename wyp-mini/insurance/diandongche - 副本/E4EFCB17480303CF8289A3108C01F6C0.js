function o(t) {
    return (o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(o) {
        return void 0 === o ? "undefined" : r(o);
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : r(o);
    })(t);
}

function t() {
    for (var r = [], n = 0; n < arguments.length; n++) {
        var u = arguments[n];
        if (u) {
            var f = o(u);
            if ("string" === f || "number" === f) r.push(u); else if (Array.isArray(u) && u.length) {
                var y = t.apply(null, u);
                y && r.push(y);
            } else if ("object" === f) for (var i in u) e.call(u, i) && u[i] && r.push(i);
        }
    }
    return r.join(" ");
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {}.hasOwnProperty, n = t;

exports.default = n;