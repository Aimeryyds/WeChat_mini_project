function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t = require("../../../utils/https.js"), n = 60, o = function e(t) {
    if (0 == n) return t.setData({
        is_show: !0
    }), void (n = 60);
    t.setData({
        is_show: !1,
        last_time: n
    }), n--, setTimeout(function() {
        e(t);
    }, 1e3);
};

Page({
    data: {
        tit1: "更换手机号后",
        tit2: "下次登录可使用新手机号",
        tit3: "原账户相关信息不变",
        registerList: [ {
            type: "number",
            name: "oldphone",
            placeholder: "输入当前手机号",
            value: ""
        }, {
            type: "number",
            name: "newphone",
            placeholder: "输入新手机号",
            value: ""
        }, {
            type: "number",
            name: "yzm",
            placeholder: "输入新手机号验证码",
            value: ""
        } ],
        disabled: !1,
        is_show: !0
    },
    onLoad: function(t) {
        this.setData(e({}, "registerList[0].value", t.phone));
    },
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    clickVerify: function(e) {
        var n = this, a = n.data.inputValue;
        if (/^1[3456789]\d{9}$/.test(a)) if (a != wx.getStorageSync("account")) {
            var i = {
                account: a,
                type: 5
            };
            t.req("User/GetCode", i, function(e, t) {
                0 == t.data.code ? (wx.showToast({
                    title: "发送成功",
                    icon: "success",
                    duration: 2e3
                }), n.setData({
                    is_show: !n.data.is_show
                }), o(n)) : (wx.showModal({
                    title: "发送失败",
                    content: t.data.retmsg,
                    showCancel: !1
                }), n.setData({
                    is_show: !0
                }));
            });
        } else wx.showToast({
            title: "新旧手机号码相同",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请正确填写手机号码",
            icon: "none",
            duration: 2e3
        });
    },
    formSubmit: function(e) {
        if ("" != e.detail.value.newphone && "" != e.detail.value.yzmname) {
            var n = {
                uid: wx.getStorageSync("uid"),
                account: e.detail.value.oldphone,
                newaccount: e.detail.value.newphone,
                code: e.detail.value.yzm
            };
            e.detail.value.newphone;
            t.req("User/ChangeAccount", n, function(e, t) {
                var n = t.data.retmsg;
                0 == t.data.code ? (wx.showToast({
                    title: "修改成功",
                    icon: "success",
                    duration: 2e3,
                    mask: !0
                }), wx.clearStorage(), setTimeout(function() {
                    wx.reLaunch({
                        url: "../../login/phoneLogin"
                    });
                }, 1500)) : wx.showModal({
                    title: "",
                    content: n,
                    showCancel: !1,
                    success: function(e) {
                        e.confirm;
                    }
                });
            });
        } else wx.showToast({
            title: "请填写新手机号码或者验证码",
            icon: "none",
            duration: 2e3
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});