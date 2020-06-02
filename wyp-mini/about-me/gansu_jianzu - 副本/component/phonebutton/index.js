function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../network/api")), o = (t(require("../../utils/const.js")), 
t(require("../../behaviors/toast.js")));

t(require("../../utils/notification.js"));

Component({
    behaviors: [ o.default ],
    properties: {
        size: {
            type: String,
            value: "primary"
        },
        loginUrl: {
            type: String
        }
    },
    data: {},
    methods: {
        _getPhoneNumber: function(t) {
            var o = this;
            if (-1 !== t.detail.errMsg.indexOf("ok")) {
                console.log(t.detail.errMsg);
                var a = t.detail.iv, i = t.detail.encryptedData;
                wx.showLoading({
                    title: "请稍候"
                }), e.default.bindSimple({
                    encryptedData: i,
                    iv: a
                }).then(function(t) {
                    if (wx.hideLoading(), t && 0 == t.status && t.data.result) {
                        var e = wx.getStorageSync("userinfo");
                        e.mobile = t.data.mobile, wx.setStorageSync("userinfo", e), getApp().globalData.userinfo = e, 
                        o.showToast("手机号绑定成功"), o.triggerEvent("showtoast", {
                            title: "手机号绑定成功"
                        }), o.triggerEvent("changeuser");
                    } else if (t && 0 == t.status && 0 == t.data.result) {
                        o.triggerEvent("showtoast", {
                            title: t.data.msg
                        }), o.showToast(t.data.msg);
                        var a = o;
                        setTimeout(function() {
                            wx.navigateTo({
                                url: a.data.loginUrl
                            });
                        }, 1500);
                    } else {
                        o.showToast("手机号绑定失败,请到登录页绑定"), o.triggerEvent("showtoast", {
                            title: "手机号绑定失败,请到登录页绑定"
                        });
                        var i = o;
                        setTimeout(function() {
                            wx.navigateTo({
                                url: i.data.loginUrl
                            });
                        }, 1500);
                    }
                    console.log(t);
                }).catch(function(t) {
                    wx.hideLoading(), console.log(t), o.triggerEvent("showtoast", {
                        title: "手机号绑定失败,请到登录页绑定"
                    }), o.showToast("手机号绑定失败,请到登录页绑定");
                    var e = o;
                    setTimeout(function() {
                        wx.navigateTo({
                            url: e.data.loginUrl
                        });
                    }, 1500);
                }), console.log(t.detail.iv), console.log(t.detail.encryptedData);
            } else console.log(this.data.loginUrl), wx.navigateTo({
                url: this.data.loginUrl
            });
        }
    }
});