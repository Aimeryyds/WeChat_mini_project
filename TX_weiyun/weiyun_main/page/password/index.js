var e = require("../../external/mta_analysis.js"), o = require("../../common/md.js"), n = require("../../common/request.js"), t = require("../../common/user.js"), i = require("../../external/md5.js"), a = void 0, r = !1;

Page({
    onLoad: function(n) {
        var i = this;
        o.log("password onLoad"), e.Page.init();
        var a = decodeURIComponent((n || {}).uin || "");
        t.getWxUserInfo().then(function(e) {
            i.setData({
                user: e.nickName + "(" + a + ")"
            });
        });
    },
    onReady: function() {
        o.log("password onReady");
    },
    onShow: function() {
        o.log("password onShow");
    },
    onForgetShow: function() {
        this.setData({
            forget: !0
        });
    },
    onForgetHide: function() {
        this.setData({
            forget: !1
        });
    },
    onInput: function(e) {
        a = e.detail.value;
    },
    onConfirm: function(e) {
        var t = (e.detail.value || a || "").trim();
        if (t) {
            if (r) return;
            r = !0, wx.showLoading(), n.webapp({
                cmd: "PwdVerify",
                data: {
                    pwd_md5: i(t)
                }
            }).then(function(e) {
                wx.setStorageSync("indepInfo", {
                    access: !0,
                    expire: +new Date() + 72e5
                }), global.indep = !1, r = !1, wx.hideLoading(), wx.reLaunch({
                    url: "../index/index"
                });
            }, function(e) {
                o.log("[password page]: PwdVerify fail"), o.log("more info: " + JSON.stringify(e)), 
                o.write(), r = !1, wx.hideLoading(), wx.showToast({
                    title: "独立密码错误，请重新输入",
                    icon: "none",
                    duration: 3e3
                });
            });
        } else wx.showToast({
            title: "请输入独立密码进行验证",
            icon: "none",
            duration: 3e3
        });
    },
    onStatusBarInited: function(e) {
        this.setData({
            statusBarHeight: e.detail.height || 64
        });
    },
    data: {
        user: "",
        forget: !1,
        nodes: "<b>第一步</b>：在浏览器中打开 https://aq.qq.com (建议在电脑中打开)<br><b>第二步</b>：登录QQ帐号<br><b>第三步</b>：找到“密码管理” -> “独立密码管理” -> “微云独立密码”，点击重置按钮<br><b>第四步</b>：重置后回到小程序重新登录",
        dialogDisplay: !1,
        dialogText: "",
        dialogButtonComfirm: "确定",
        dialogButtonCancel: ""
    }
});