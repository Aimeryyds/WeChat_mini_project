module.exports = {};

var e = {}, r = window = require("../../../labrador/global.js"), r = require("./_global.js"), t = require("./_task.js").set, o = r.MutationObserver || r.WebKitMutationObserver, e = r.process, n = r.Promise, i = "process" == require("./_cof.js")(e);

module.exports = function() {
    var a, s, c, u = function() {
        var r, t;
        for (i && (r = e.domain) && r.exit(); a; ) {
            t = a.fn, a = a.next;
            try {
                t();
            } catch (e) {
                throw a ? c() : s = void 0, e;
            }
        }
        s = void 0, r && r.enter();
    };
    if (i) c = function() {
        e.nextTick(u);
    }; else if (o) {
        var f = !0, l = document.createTextNode("");
        new o(u).observe(l, {
            characterData: !0
        }), c = function() {
            l.data = f = !f;
        };
    } else if (n && n.resolve) {
        var v = n.resolve();
        c = function() {
            v.then(u);
        };
    } else c = function() {
        t.call(r, u);
    };
    return function(e) {
        var r = {
            fn: e,
            next: void 0
        };
        s && (s.next = r), a || (a = r, c()), s = r;
    };
};