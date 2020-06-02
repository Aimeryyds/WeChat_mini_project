var e = getApp(), t = require("../lib/es6-promise").Promise, s = {
    getSubscribeStatusUrl: e.globalData.baseUrl + "api/applet/sub/subStatus.go",
    setSubscribeStatusUrl: e.globalData.baseUrl + "api/applet/sub/operator.go"
};

module.exports.getSubscribeStatus = function() {
    return new t(function(t, r) {
        var a = {
            openId: e.globalData.usrKey.openid
        };
        wx.request({
            url: s.getSubscribeStatusUrl,
            data: a,
            success: function(e) {
                t(e.data);
            },
            fail: function(e) {
                r(new Error(e.message));
            }
        });
    });
}, module.exports.setSubscribeStatus = function(r) {
    return new t(function(t, a) {
        var u = {
            openId: e.globalData.usrKey.openid,
            type: r
        };
        wx.request({
            url: s.setSubscribeStatusUrl,
            data: u,
            success: function(e) {
                t(e.data);
            },
            fail: function(e) {
                console.error("设置订阅失败: ", e.message), a(new Error(e.message));
            }
        });
    });
};