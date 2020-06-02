Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../utils"), e = require("../../bridge"), o = function(o, r) {
    var n = function(n) {
        var i = (0, e.createAnimation)({
            duration: 300,
            timingFunction: "ease"
        });
        i.translateY(n).step(), (0, t.setData)(o, "_network." + r + ".animation", i.export());
    };
    (0, t.setData)(o, "_network." + r + ".show", !0), o.timeout(function() {
        n(36);
    }, 10), ((0, t.getData)(o, "_network." + r + ".timeout") || function() {})(), (0, 
    t.setData)(o, "_network." + r + ".timeout", o.timeout(function() {
        n(0), o.timeout(function() {
            (0, t.setData)(o, "_network." + r + ".show", !1);
        }, 500);
    }, 3e3));
}, r = {
    error: function(t) {
        o(t, "error");
    },
    recover: function(t) {
        o(t, "recover");
    }
};

exports.default = r;