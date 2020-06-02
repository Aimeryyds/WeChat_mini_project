var e = require("../../utils/https.js"), t = 60, o = function e(o) {
    if (0 == t) return o.setData({
        is_show: !0
    }), void (t = 60);
    o.setData({
        is_show: !1,
        last_time: t
    }), t--, setTimeout(function() {
        e(o);
    }, 1e3);
};

Page({
    data: {
        value: "",
        registerList: [ {
            icon: "../../images/use.png",
            type: "number",
            name: "username",
            placeholder: "请输入手机号"
        }, {
            icon: "../../images/yzm.png",
            type: "number",
            name: "yzmname",
            placeholder: "请输入验证码"
        }, {
            icon: "../../images/pwd.png",
            type: "password",
            name: "password",
            placeholder: "请设置新密码"
        }, {
            icon: "../../images/pwd.png",
            type: "password",
            name: "confirmpwd",
            placeholder: "请确认新密码"
        } ],
        disabled: !1,
        is_show: !0
    },
    onLoad: function(e) {},
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    clickVerify: function(t) {
        var a = this, n = a.data.inputValue;
        if (/^1[3456789]\d{9}$/.test(n)) {
            a.setData({
                is_show: !a.data.is_show
            }), o(a);
            var i = {
                account: n,
                type: 2
            };
            e.req("User/GetCode", i, function(e, t) {
                0 == t.code ? wx.showToast({
                    title: "发送成功",
                    icon: "success",
                    duration: 2e3
                }) : wx.showModal({
                    title: "操作失败",
                    content: t.data.retmsg,
                    showCancel: !1
                });
            });
        } else wx.showToast({
            title: "请正确填写手机号码",
            icon: "none",
            duration: 2e3
        });
    },
    formSubmit: function(t) {
        var o = this;
        if (/^[a-zA-Z0-9\.\@\!\#\$\%\^\&\*\(\)]{6,12}$/.test(t.detail.value.password)) if (t.detail.value.password == t.detail.value.confirmpwd) {
            var a = {
                account: t.detail.value.username,
                pwd: t.detail.value.password,
                code: t.detail.value.yzmname
            };
            e.req("User/ModifyPwd", a, function(e, t) {
                var a = t.data.retmsg;
                0 == t.data.code ? (wx.showToast({
                    title: "修改成功",
                    icon: "success",
                    duration: 2e3
                }), wx.navigateTo({
                    url: "../login/phoneLogin"
                })) : wx.showModal({
                    title: "",
                    content: a,
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && o.setData({
                            value: ""
                        });
                    }
                });
            });
        } else wx.showToast({
            title: "两次输入密码不一致",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请输入长度至少6位的密码！",
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