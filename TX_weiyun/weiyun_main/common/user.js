var e = {
    has: !1,
    data: {}
}, n = function(n) {
    e.has = !0, e.data = n;
}, o = (getApp() || {}).global;

module.exports = {
    getWxUserInfo: function() {
        return e.has ? Promise.resolve(e.data) : new Promise(function(e, s) {
            wx.getUserInfo({
                success: function(o) {
                    n(o.userInfo), e(o.userInfo);
                },
                fail: function(e) {
                    o.guideBlock || (wx.navigateTo({
                        url: "/page/guide/index"
                    }), o.guideBlock = !0), s(e);
                }
            });
        });
    }
};