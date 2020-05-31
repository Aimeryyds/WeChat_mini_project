Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("./apiAjax"), e = require("../pass_config");

exports.passLoginForWechat = function(n) {
    var e = function(e, o) {
        wx.navigateTo({
            url: "/pages/pass_normal/normal?backUrl=" + encodeURIComponent(n) + "&code=" + encodeURIComponent(e) + "&encryptedData=" + encodeURIComponent(o.encryptedData) + "&iv=" + encodeURIComponent(o.iv) + "&signature=" + encodeURIComponent(o.signature) + "&type=login&u=" + encodeURIComponent("https://www.baidu.com" + n)
        });
    }, o = function() {
        wx.login({
            success: function(n) {
                n.code ? function() {
                    var o = n.code;
                    wx.getUserInfo({
                        withCredentials: !0,
                        success: function(n) {
                            e(o, n);
                        }
                    });
                }() : wx.showToast({
                    title: "授权失败！",
                    icon: "none"
                });
            }
        });
    };
    wx.getSetting({
        success: function(n) {
            n.authSetting["scope.userInfo"] && o();
        }
    });
};

exports.passChangeNormal = function(o) {
    var t = wx.getStorageSync("userInfo");
    t ? n.apiAjax("v3/login/getlogintoken", {
        BDUSS: t.bduss,
        STOKEN: t.stoken,
        u: "https://www.baidu.com" + o,
        tpl: e.tpl
    }, "POST", function(n) {
        0 === n.data.errno ? (n.encryptInfo, wx.navigateTo({
            url: "/pages/pass_normal/normal?backUrl=" + encodeURIComponent(o) + "&type=normal&lstr=" + encodeURIComponent(n.data.lstr) + "&ltoken=" + encodeURIComponent(n.data.ltoken) + "&u=" + encodeURIComponent("https://www.baidu.com" + o)
        })) : wx.showToast({
            title: n.data.errmsg,
            icon: "none"
        });
    }, "") : wx.showToast({
        title: "请先登录",
        icon: "none"
    });
};

exports.wechatUnbind = function(o, t) {
    var a = wx.getStorageSync("userInfo");
    a ? n.apiAjax("v3/ucenter/phoenixunbind", {
        BDUSS: a.bduss,
        STOKEN: a.stoken,
        u: "https://passport.baidu.com" + o,
        ostype: 42,
        clientfrom: "wap",
        client: "wechat",
        adapter: 3,
        bdstoken: t,
        tpl: e.tpl
    }, "POST", function(n) {
        var e = "/pages/pass_normal/normal?backUrl=" + encodeURIComponent(o) + "&u=" + encodeURIComponent("https://passport.baidu.com" + o) + "&type=unbind&jumpUrl=";
        0 == +n.data.errno ? wx.setStorage({
            key: "wechatBindStatus",
            data: "unbind",
            success: function() {
                wx.reLaunch({
                    url: o
                });
            }
        }) : 2 == +n.data.errno ? wx.navigateTo({
            url: e + encodeURIComponent(n.data.wapBindMobileUrl)
        }) : 3 == +n.data.errno ? wx.navigateTo({
            url: e + encodeURIComponent(n.data.wapFillUsernameUrl)
        }) : wx.showToast(5 == +n.data.errno ? {
            title: "未绑定百度帐号",
            icon: "none"
        } : {
            title: n.data.errmsg,
            icon: "none"
        });
    }, "") : wx.showToast({
        title: "请先登录",
        icon: "none"
    });
};