var t = require("../../utils/network.js"), i = (require("../../utils/util.js"), 
require("../../utils/WxNotificationCenter.js"));

Page({
    data: {
        _vs: 0,
        usc: "",
        rid: ""
    },
    onLoad: function(t) {
        this.setData({
            _vs: t._vs,
            usc: t.usc,
            rid: t.rid
        });
    },
    onShow: function() {
        this.request();
    },
    request: function() {},
    getPhoneNumber: function(e) {
        if (e.detail.iv && e.detail.encryptedData && e.detail.iv.length > 0 && e.detail.encryptedData.length > 0) {
            var a = this;
            wx.showLoading({
                title: "加载中"
            }), wx.getUserInfo({
                success: function(o) {
                    t.request("https://passport.douguo.com/mitoSign/login", {
                        iv: o.iv,
                        encryptedData: o.encryptedData,
                        phone_number_authorize: JSON.stringify({
                            iv: e.detail.iv,
                            encryptedData: e.detail.encryptedData
                        }),
                        _vs: a.data._vs,
                        usc: a.data.usc
                    }, function(t) {
                        if (wx.hideLoading(), wx.setStorageSync("user_activity", t.user), wx.setStorageSync("user", t.user), 
                        i.postNotificationName("userLoginedNotificationName"), wx.showToast({
                            title: "登录成功",
                            duration: 2e3
                        }), t.user && t.user.positive_activity) {
                            if (t.user.positive_activity.action_url && t.user.positive_activity.action_url.startsWith("http")) {
                                var e = encodeURIComponent(t.user.positive_activity.action_url);
                                wx.redirectTo({
                                    url: "../browser/browser?url=" + e + "&rid=" + a.data.rid
                                });
                            }
                        } else wx.navigateBack({});
                    }, function(t) {
                        wx.showModal({
                            title: "",
                            content: "别着急，网有点慢，再试试",
                            showCancel: !1
                        }), a.loginfailed(t);
                    });
                },
                fail: function(t) {
                    a.loginfailed(t);
                }
            });
        }
    },
    loginfailed: function(t) {
        wx.hideLoading(), wx.showToast({
            title: "登录失败",
            duration: 2e3,
            image: "../../images/error.png"
        });
    }
});