Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../utils"), e = {
    activateTimer: function(e) {
        var a = this, i = (0, t.getData)(e, "_loading_.checkingtimer");
        clearTimeout(i);
        var o = setTimeout(function() {
            a.hide(e, !0);
        }, 6e3);
        (0, t.setData)(e, "_loading_.checkingtimer", o);
    },
    show: function(e) {
        var a = (0, t.getData)(e, "_loading_.counter") || 0;
        a++, (0, t.setData)(e, "_loading_.show", !0), (0, t.setData)(e, "_loading_.counter", a), 
        this.activateTimer(e);
    },
    hide: function(e, a) {
        var i = (0, t.getData)(e, "_loading_.counter");
        a ? i = 0 : i--, i < 0 && (i = 0), (0, t.setData)(e, "_loading_.counter", i), setTimeout(function() {
            (0, t.setData)(e, "_loading_.show", i > 0);
        }, 80);
    }
};

exports.default = e;