module.exports = {};

var e, t, n, r = {}, s = window = require("../../../labrador/global.js"), o = require("./_ctx.js"), i = require("./_invoke.js"), a = require("./_html.js"), c = require("./_dom-create.js"), r = (s = require("./_global.js")).process, u = s.setImmediate, l = s.clearImmediate, d = s.MessageChannel, p = 0, f = {}, m = function() {
    var e = +this;
    if (f.hasOwnProperty(e)) {
        var t = f[e];
        delete f[e], t();
    }
}, g = function(e) {
    m.call(e.data);
};

u && l || (u = function(t) {
    for (var n = [], r = 1; arguments.length > r; ) n.push(arguments[r++]);
    return f[++p] = function() {
        i("function" == typeof t ? t : Function(t), n);
    }, e(p), p;
}, l = function(e) {
    delete f[e];
}, "process" == require("./_cof.js")(r) ? e = function(e) {
    r.nextTick(o(m, e, 1));
} : d ? (n = (t = new d()).port2, t.port1.onmessage = g, e = o(n.postMessage, n, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (e = function(e) {
    s.postMessage(e + "", "*");
}, s.addEventListener("message", g, !1)) : e = "onreadystatechange" in c("script") ? function(e) {
    a.appendChild(c("script")).onreadystatechange = function() {
        a.removeChild(this), m.call(e);
    };
} : function(e) {
    setTimeout(o(m, e, 1), 0);
}), module.exports = {
    set: u,
    clear: l
};