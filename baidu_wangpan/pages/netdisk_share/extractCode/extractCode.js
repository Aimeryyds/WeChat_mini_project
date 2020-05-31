var e = require("../../../netdisk_utils/storage.js"), t = require("../../../netdiisk_requestapi/shareVerify.js"), o = require("../../../netdisk_utils/transform"), i = getApp(), r = null, a = function() {
    r && (clearTimeout(r), r = null);
}, n = function(e, t) {
    return function() {
        var o = this, i = arguments;
        a(), r = setTimeout(function() {
            e.apply(o, i);
        }, t);
    };
};

Component({
    properties: {
        sharedUser: {
            type: Object
        },
        shareUrlInfo: {
            type: Object
        }
    },
    data: {
        extractCode: "",
        extractCodeErr: "",
        showVerifyCode: !1,
        verifyCodeImgInfo: {},
        verifyCode: "",
        verifyCodeErr: "",
        verifyCodeImgErr: !1,
        scrollTop: 0,
        scrollTopWithVerify: 0,
        viewScrollTop: 0,
        keyboardHeight: 0,
        systemInfo: {},
        navHeight: i.globalData.navHeight,
        formItemFullHeight: 158,
        viewHeight: 658,
        viewHeightWithVerifyCode: 816,
        keyboardGap: 31,
        countdown: ""
    },
    created: function() {
        wx.toasthide(), this.initScrollTopFn();
    },
    attached: function() {
        this.initSystemInfo(), this.initKeyboardHeight(), this.initScrollTop();
    },
    detached: function() {
        this.countdownTimer && clearInterval(this.countdownTimer);
    },
    methods: {
        handleInput: function(e) {
            var t = e.detail.value;
            this.setData({
                extractCode: t
            });
        },
        handleVerifyCodeInput: function(e) {
            var t = e.detail.value;
            this.setData({
                verifyCode: t
            });
        },
        handleObtainTap: function() {
            var e = this;
            setTimeout(function() {
                e.handleObtain();
            }, 200);
        },
        handleObtain: function() {
            var o = this;
            wx.log.extractCode.obtainBtn.send();
            var i = this.data;
            if (this.validateExtractCode() && (!i.showVerifyCode || this.validateVerifyCode())) {
                var r = {
                    pwd: i.extractCode,
                    surl: i.shareUrlInfo.shortUrl,
                    vcode: i.verifyCode,
                    vcode_str: i.verifyCodeImgInfo.vcodeStr || ""
                };
                i.showVerifyCode && (r.vcode = i.verifyCode), (0, t.shareVerify)(this.properties.shareUrlInfo, r).then(function(t) {
                    if (0 === t.errno) t.header["Set-Cookie"] && t.header["Set-Cookie"].indexOf("BDCLND") > -1 && (0, 
                    e.setCookieToStorage)(t.header, [ "BDCLND" ]), wx.wetoast({
                        content: "请稍候...",
                        loading: !0,
                        duration: !0
                    }), o.triggerEvent("getFileList", {
                        pwd: o.data.extractCode
                    }); else {
                        var i = o.data.showVerifyCode;
                        -62 === t.errno && i ? o.setData({
                            verifyCodeErr: "验证码错误",
                            extractCodeErr: ""
                        }) : o.setData({
                            extractCodeErr: "提取码错误，请检查后重试",
                            verifyCodeErr: ""
                        }), -62 === t.errno ? (o.getVerifyCode(), o.setData({
                            showVerifyCode: !0
                        })) : o.setData({
                            showVerifyCode: !1,
                            verifyCode: ""
                        });
                    }
                }).catch(function(e) {
                    wx.wetoast({
                        content: "出错了，请稍后重试",
                        duration: 2e3
                    }), console.error(e);
                });
            }
        },
        changeVerifyCode: function() {
            this.getVerifyCode();
        },
        handleVerifyCodeImgErr: function() {
            this.setData({
                verifyCodeImgErr: !0
            });
        },
        handleVerifyCodeImgTap: function() {
            this.data.verifyCodeImgErr || this.getVerifyCode();
        },
        getVerifyCode: function() {
            var e = this;
            wx.log.extractCode.verifyCode.send(), (0, t.getVerifyCode)().then(function(t) {
                0 === t.errno && (e.data.verifyCodeImgErr && e.setData({
                    verifyCodeImgErr: !1
                }), e.setData({
                    verifyCodeImgInfo: {
                        vcodeImg: t.vcode_img,
                        vcodeStr: t.vcode_str
                    }
                }));
            }).catch(function(e) {
                wx.wetoast({
                    content: "出错了，请稍后重试",
                    duration: 2e3
                }), console.error(e);
            });
        },
        validateExtractCode: function() {
            var e = this.data;
            return e.extractCode.length ? (e.extractCodeErr.length && this.setData({
                extractCodeErr: ""
            }), !0) : (this.setData({
                extractCodeErr: "请输入提取码"
            }), !1);
        },
        validateVerifyCode: function() {
            return !!this.data.verifyCode.length || (this.setData({
                verifyCodeErr: "请输入验证码"
            }), !1);
        },
        rpx2px: function(e) {
            return e * this.data.systemInfo.windowWidth / 750;
        },
        setViewScrollTop: function() {
            var e = this.data;
            e.showVerifyCode ? this.debounceSetScrollTop(e.scrollTopWithVerify) : this.setScrollTop(e.scrollTop);
        },
        keyboardBack: function() {
            this.data.showVerifyCode ? this.debounceSetScrollTop(0) : this.setScrollTop(0);
        },
        calcScrollTop: function(e) {
            var t = e.keyboardHeight, o = void 0 === t ? 0 : t, i = this.data, r = i.systemInfo.windowHeight, a = this.rpx2px(i.viewHeight), n = this.rpx2px(i.viewHeightWithVerifyCode), s = i.navHeight + this.rpx2px(i.keyboardGap) - (r - o);
            return {
                scrollTop: a + s,
                scrollTopWithVerify: n + s
            };
        },
        extractCodeFocus: function(e) {
            this.inputFocus(e);
        },
        verifyCodeFocus: function(e) {
            this.inputFocus(e);
        },
        inputFocus: function(e) {
            var t = e.detail.height;
            this.checkScrollTop(t), this.setViewScrollTop();
        },
        extractCodeBlur: function(e) {
            this.handleInput(e), this.inputBlur(), this.validateExtractCode();
        },
        verifyCodeBlur: function(e) {
            this.handleVerifyCodeInput(e), this.inputBlur(), this.validateVerifyCode();
        },
        inputBlur: function() {
            this.keyboardBack();
        },
        initScrollTopFn: function() {
            var e = this, t = function(t) {
                e.setData({
                    viewScrollTop: t
                });
            };
            this.setScrollTop = t, this.debounceSetScrollTop = n(t, 500);
        },
        initSystemInfo: function() {
            var e = i.globalData.systemInfo;
            this.setData({
                systemInfo: e
            });
        },
        checkScrollTop: function(e) {
            e !== this.data.keyboardHeight && (this.setKeyboardHeight(e), this.setData({
                keyboardHeight: e
            }), this.initScrollTop());
        },
        setKeyboardHeight: function(e) {
            try {
                wx.setStorageSync("keyboardHeight", e);
            } catch (e) {
                console.error(e);
            }
        },
        initKeyboardHeight: function() {
            var e = 0;
            try {
                e = wx.getStorageSync("keyboardHeight");
            } catch (e) {
                console.error(e);
            }
            e = e > 0 ? e : 300, this.setData({
                keyboardHeight: e
            });
        },
        initScrollTop: function() {
            var e = this.data.keyboardHeight, t = this.calcScrollTop({
                keyboardHeight: e
            }), o = t.scrollTop, i = t.scrollTopWithVerify;
            o = o < 0 ? 0 : o, i = i < 0 ? 0 : i, this.setData({
                scrollTop: o,
                scrollTopWithVerify: i
            });
        },
        initCountdown: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (0 !== t.expiredType) {
                var i = t.expireTimestamp;
                this.countdownTimer = setInterval(function() {
                    e.setData({
                        countdown: (0, o.toFriendlyPeriod)(i - parseInt(Date.now() / 1e3), 1e3 * i)
                    });
                }, 1e3);
            }
        }
    }
});