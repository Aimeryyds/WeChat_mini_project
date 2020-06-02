Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        lbmdata: {
            type: Object
        },
        domain: {
            type: String,
            value: "thirdlogin.yy.com"
        },
        downBtnTxt: {
            type: String,
            value: "立即绑定"
        },
        upBtnTxt: {
            type: String,
            value: "我已经发送，立即绑定"
        }
    },
    data: {
        delay: 60,
        mobile: "",
        appid: "",
        mobileTemp: "",
        vcodeLock: !1,
        gateway: "",
        upcontent: "",
        curStep: "sms_down",
        vcodeInterval: null,
        vcode: "",
        locked: !1,
        errmsg: ""
    },
    onLoad: function() {},
    ready: function() {},
    onHide: function() {
        this.stopCounter();
    },
    methods: {
        request: function(t) {
            var e = this;
            wx.request({
                url: t.url,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: t.data,
                method: t.method || "GET",
                success: function(a) {
                    return 200 !== a.statusCode ? (wx.showToast({
                        title: "网络异常",
                        icon: "none"
                    }), void (t && t.fail && t.fail({
                        code: "-1",
                        msg: "网络异常"
                    }))) : (a.data.stoken && e.setData({
                        stoken: a.data.stoken
                    }), "0" != a.data.code ? ("1" != a.data.code && wx.showToast({
                        title: a.data.msg,
                        icon: "none"
                    }), void (t && t.fail && t.fail(a.data))) : void (t && t.success && t.success(a.data)));
                },
                fail: function(e) {
                    wx.showToast({
                        title: "网络异常，请稍后重试",
                        icon: "none"
                    }), t && t.fail && t.fail({
                        code: "-1",
                        msg: "网络异常，请稍后重试"
                    });
                },
                complete: function(e) {
                    t && t.complete && t.complete(e);
                }
            });
        },
        showError: function(t) {
            wx.showToast({
                title: t,
                icon: "none"
            });
        },
        bindVcodeKeyInput: function(t) {
            var e = t.detail.value;
            this.setData({
                vcode: e
            });
        },
        counter: function() {
            var t = this;
            this.data.vcodeLock || (clearInterval(t.data.vcodeInterval), this.setData({
                vcodeLock: !0
            }), this.data.vcodeInterval = setInterval(function() {
                0 !== t.data.delay ? t.setData({
                    delay: t.data.delay - 1
                }) : t.stopCounter();
            }, 1e3));
        },
        stopCounter: function() {
            clearInterval(this.data.vcodeInterval), this.setData({
                delay: 60,
                vcodeLock: !1
            });
        },
        sendVcode: function() {
            var t = this;
            this.data.vcodeLock || (/^1[3456789]\d{9}$/.test(this.data.mobile) ? this.request({
                url: "https://" + t.properties.domain + "/open/loginbind/v2/sendsms.do",
                data: {
                    appid: this.data.appid,
                    stoken: this.data.stoken,
                    mobile: this.data.mobile
                },
                success: function(e) {
                    t.counter(), t.setData({
                        mobileTemp: this.data.mobile
                    });
                },
                fail: function(e) {
                    "1" === e.code && t.setData({
                        locked: !1,
                        curStep: "sms_up",
                        gateway: e.data.gateway,
                        upcontent: e.data.upcontent
                    });
                }
            }) : this.showError("请输入正确的手机号！"));
        },
        bind: function() {
            if (!this.data.locked) {
                var t = this;
                if ("sms_down" === this.data.curStep) {
                    if (!/^1[3456789]\d{9}$/.test(this.data.mobile)) return void this.showError("请输入正确的手机号！");
                    if ("" === this.data.mobileTemp) return void this.showError("请先获取手机验证码！");
                    if (this.data.mobile !== this.data.mobileTemp) return void this.showError("手机号已变更，请重新获取手机验证码！");
                    if ("" === this.data.vcode) return void this.showError("请输入手机验证码！");
                }
                t.setData({
                    locked: !0
                }), this.request({
                    url: "https://" + t.properties.domain + "/open/loginbind/v2/bind.do",
                    data: {
                        appid: this.properties.appid,
                        stoken: this.data.stoken,
                        code: this.data.vcode
                    },
                    success: function(e) {
                        t.setData({
                            locked: !1
                        }), t.triggerEvent("lgnbindmobsuccess", {
                            type: "success",
                            data: e.data.returndata,
                            msg: ""
                        });
                    },
                    fail: function(e) {
                        t.setData({
                            locked: !1
                        });
                    }
                });
            }
        },
        initLgnbindmobComp: function() {
            var t = this;
            t.request({
                url: "https://" + t.properties.domain + "/open/loginbind/v2/mpIndex.do",
                data: t.properties.lbmdata,
                success: function(e) {
                    t.setData({
                        errmsg: "",
                        appid: e.appid,
                        curStep: e.verifytype,
                        gateway: e.gateway ? e.gateway : "",
                        upcontent: e.upcontent ? e.upcontent : ""
                    });
                },
                fail: function(e) {
                    t.setData({
                        errmsg: e.msg
                    }), t.triggerEvent("lgnbindmoberror", {
                        type: "error",
                        msg: e.msg
                    });
                }
            });
        },
        bindMobileInput: function(t) {
            var e = t.detail.value;
            this.setData({
                mobile: e
            });
        }
    }
});