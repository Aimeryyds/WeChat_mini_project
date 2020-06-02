Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../utils"), e = require("../../../components/bridge"), i = {
    show: function(i) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "已完成";
        this.hide(i);
        var a = null, s = null;
        a = setTimeout(function() {
            var o = (0, e.createAnimation)({
                duration: 200,
                timingFunction: "ease"
            });
            o.opacity(0).step(), (0, t.setData)(i, "_toast.animation", o), s = setTimeout(function() {
                (0, t.setData)(i, "_toast.show", !1);
            }, 300);
        }, 3e3), (0, t.setData)(i, "_toast", {
            timeoutid0: a,
            timeoutid1: s,
            text: o,
            show: !0
        });
    },
    hide: function(e) {
        clearTimeout((0, t.getData)(e, "_toast.timeoutid0")), clearTimeout((0, t.getData)(e, "_toast.timeoutid1")), 
        (0, t.setData)(e, "_toast.show", !1);
    }
};

exports.default = i;