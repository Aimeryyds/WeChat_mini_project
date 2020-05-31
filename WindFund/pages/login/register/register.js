var t = getApp();

Page({
    data: {
        mobile: "",
        smsCode: "",
        smsBtnContent: "获取验证码",
        hiddenModal: !0,
        timer: null,
        num: 60,
        serialNo: ""
    },
    bindSmsInput: function(t) {
        this.setData({
            smsCode: t.detail.value
        });
    },
    bindMobileInput: function(t) {
        this.setData({
            mobile: t.detail.value
        });
    },
    checkMobile: function() {
        return this.data.mobile ? /1[34578]\d{9}$/.test(this.data.mobile) ? "" : "请输入正确的手机号" : "手机号不能为空";
    },
    changeSmsBtn: function() {
        this.data.num >= 0 ? this.setData({
            smsBtnContent: this.data.num + "秒后重试",
            num: this.data.num - 1
        }) : (clearInterval(this.data.timer), this.setData({
            smsBtnContent: "获取验证码",
            num: 60
        }));
    },
    getSMS: function() {
        var e = this.checkMobile();
        if (e) wx.showModal({
            content: e,
            showCancel: !1,
            confirmColor: "#FBA52F"
        }); else {
            var n = {
                mobilePhone: this.data.mobile
            }, a = this;
            t.getData("SEND_REGISTER_VERIFY_COED", n, function(t) {
                a.changeSmsBtn(), a.setData({
                    timer: setInterval(function() {
                        a.changeSmsBtn();
                    }, 1e3)
                });
            }, function(t) {
                console.log("发送验证码失败" + t);
            }, 1);
        }
    },
    checkSMS: function() {
        return this.data.smsCode ? /\d{6}$/.test(this.data.smsCode) ? "" : "验证码为6位数字" : "验证码不能为空";
    },
    commit: function() {
        var e = this.checkMobile() || this.checkSMS();
        if (e) wx.showModal({
            content: e,
            showCancel: !1,
            confirmColor: "#FBA52F"
        }); else {
            var n = {
                mobilePhone: this.data.mobile,
                serialNo: this.data.serialNo,
                smsCode: this.data.smsCode
            };
            t.getData("VERIFY_THIRD_PARTY_USER", n, function(e) {
                "1" === e.existFlag ? (t.globalData.sessionId = e.sessionId, wx.navigateBack({
                    delta: 1
                })) : wx.redirectTo({
                    url: "../setpwd/setpwd?serialNo=" + e.serialNo
                });
            }, function(t) {}, 1);
        }
    },
    listenerConfirm: function() {
        this.setData({
            hiddenModal: !0
        });
    },
    showsmstips: function() {
        this.setData({
            hiddenModal: !this.data.hiddenModal
        });
    },
    onLoad: function(t) {
        this.setData({
            serialNo: t.serialNo || ""
        }), wx.setNavigationBarTitle({
            title: "登录"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});