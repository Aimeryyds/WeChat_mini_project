function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), n = function() {
    function n() {
        e(this, n);
    }
    return t(n, [ {
        key: "request",
        value: function(e, t, n) {
            var o = this;
            return new Promise(function(r, a) {
                wx.getNetworkType({
                    success: function(s) {
                        "none" == s.networkType ? (wx.showToast({
                            title: "当前无网络",
                            icon: "none",
                            duration: 2e3
                        }), a()) : o.req(e, t, n, r, a);
                    }
                });
            });
        }
    }, {
        key: "req",
        value: function(e, t, n, o, r) {
            wx.request({
                url: e,
                data: n,
                method: "post",
                header: t,
                success: function(e) {
                    if (200 === e.statusCode) {
                        var t = e.data.state, n = e.data.result;
                        "success" == t ? o(n) : (r(e.data.message), wx.showToast({
                            title: e.data.message,
                            icon: "none",
                            duration: 2e3
                        }));
                    } else {
                        var a = e.statusCode;
                        r(a);
                    }
                },
                fail: function(e) {
                    r(e);
                }
            });
        }
    } ]), n;
}();

exports.Http = n;