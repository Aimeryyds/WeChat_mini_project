require("./common/manifest.js"), require("./common/vendor.js"), global.webpackJsonpMpvue([ 9 ], [ , , , , , , , , , , , , , function(e, n, o) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = o(1), r = o.n(t), u = o(15), a = o(18);
    o.n(a);
    r.a.config.productionTip = !1, u.a.mpType = "app", new r.a(u.a).$mount();
}, , function(e, n, o) {
    var t = o(17), r = !1, u = o(0)(t.a, null, function(e) {
        r || o(16);
    }, null, null);
    u.options.__file = "src\\App.vue", u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    }) && console.error("named exports are not supported in *.vue files."), n.a = u.exports;
}, function(e, n) {}, function(e, n, o) {
    n.a = {
        created: function() {
            var e = wx.getStorageSync("logs") || [];
            e.unshift(Date.now()), wx.setStorageSync("logs", e), console.log("app created and cache logs by setStorageSync");
        }
    };
}, function(e, n) {} ], [ 13 ]);