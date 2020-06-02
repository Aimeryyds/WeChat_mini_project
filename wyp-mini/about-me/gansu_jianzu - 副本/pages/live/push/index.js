var t = function() {
    function t(t, e) {
        var n = [], a = !0, r = !1, c = void 0;
        try {
            for (var o, i = t[Symbol.iterator](); !(a = (o = i.next()).done) && (n.push(o.value), 
            !e || n.length !== e); a = !0) ;
        } catch (t) {
            r = !0, c = t;
        } finally {
            try {
                !a && i.return && i.return();
            } finally {
                if (r) throw c;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Page({
    data: {},
    checkAuth: function() {
        var e = this;
        Promise.all([ this.checkCamera(), this.checkRecord() ]).then(function(n) {
            var a = t(n, 2), r = a[0], c = a[1];
            console.log(r, c), r && c ? e.setData({
                auth: !0
            }) : e.setData({
                auth: !1
            });
        }).catch(function(t) {
            e.setData({
                auth: !1
            });
        });
    },
    checkCamera: function() {
        return new Promise(function(t, e) {
            wx.authorize({
                scope: "scope.camera",
                success: function() {
                    t(!0);
                },
                fail: function() {
                    t(!1);
                }
            });
        });
    },
    checkRecord: function() {
        return new Promise(function(t, e) {
            wx.authorize({
                scope: "scope.record",
                success: function() {
                    t(!0);
                },
                fail: function() {
                    t(!1);
                }
            });
        });
    },
    handleOpenSetting: function() {
        var t = this;
        wx.openSetting({
            success: function(e) {
                var n = e.authSetting;
                n["scope.camera"] && n["scope.record"] ? t.setData({
                    auth: !0
                }) : t.setData({
                    auth: !1
                });
            }
        });
    },
    handleStopPush: function() {
        wx.navigateBack({});
    },
    onLoad: function(t) {
        var e = getApp().getFlash("live");
        this.setData({
            live: e
        }), this.checkAuth();
    }
});