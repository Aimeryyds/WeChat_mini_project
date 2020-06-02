function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../utils/util")), e = t(require("../../network/api")), a = t(require("../../utils/const.js")), n = t(require("../../utils/notification.js")), i = require("../../dist/index"), s = {
    data: {
        loading: !1,
        verify: !1,
        count: 60,
        countDown: !1,
        steps: [ {
            current: !0,
            done: !0,
            text: "步骤一",
            desc: "10.01"
        }, {
            done: !1,
            current: !1,
            text: "步骤二",
            desc: "10.02"
        } ]
    }
};

o.default.registComp(s, i.Toast, i.TopTips, {
    onLoad: function(t) {
        var o = t.type, e = t.from, a = t.zhaomuName;
        this.setData({
            type: o,
            from: e,
            zhaomuName: a
        });
    },
    getCode: function(t) {
        var o = this;
        if (this.data.verify) {
            var a = this, n = {
                mobile: this.data.phone
            };
            this.data.loading || this.data.countDown || (wx.showLoading({
                title: "请稍候"
            }), this.setData({
                loading: !0
            }), e.default.checkBindMobileIsExist(n).then(function(t) {
                wx.hideLoading(), wx.stopPullDownRefresh(), o.setData({
                    loading: !1
                }), t.data.exist ? o.showZanTopTips("该手机号已经被绑定过") : (o.setData({
                    countDown: !0
                }), e.default.getVerifyCode(n).then(function(t) {
                    wx.stopPullDownRefresh(), console.log("bingooooooooooooo", t), t.data.result ? a.setCount() : o.showZanTopTips("获取验证码失败");
                }).catch(function(t) {
                    return console.log(t);
                }));
            }).catch(function(t) {
                console.log(t), wx.hideLoading(), o.setData({
                    loading: !1
                });
            }));
        }
    },
    verifyPhone: function(t) {
        console.log(t.detail.value, "++++++++++++++"), 11 == t.detail.value.length && /^1[3|4|5|7|8][0-9]{9}$/.test(t.detail.value) && this.setData({
            verify: !0,
            phone: t.detail.value
        });
    },
    formSubmit: function(t) {
        var o = this;
        console.log(t.detail.value);
        var a = t.detail.value, n = void 0;
        return a.phone && 0 != a.phone.trim().length ? /^1[3|4|5|7|8][0-9]{9}$/.test(a.phone) ? a.verifyCode && 0 != a.verifyCode.trim().length ? void e.default.bindMobile({
            verifyCode: a.verifyCode,
            mobile: a.phone
        }).then(function(t) {
            if (wx.stopPullDownRefresh(), console.log("bingooooooooooooo", t), t.data.result) {
                o.showZanToast("手机号绑定成功");
                var e = wx.getStorageSync("userinfo");
                e.mobile = a.phone, wx.setStorageSync("userinfo", e), getApp().globalData.userinfo = e, 
                console.log("this.data.type=" + o.data.type), "zhaomu" === o.data.type ? o.applyRecruitment() : wx.navigateBack({
                    delta: 1
                });
            } else o.showZanTopTips(t.data.msg ? t.data.msg : "验证码不正确");
        }).catch(function(t) {
            return console.log(t);
        }) : (n = "验证码不能为空", void this.showZanTopTips(n)) : (n = "请输入正确手机号", void this.showZanTopTips(n)) : (n = "手机号不能为空", 
        void this.showZanTopTips(n));
    },
    applyRecruitment: function() {
        var t = this;
        e.default.applyRecruitment({
            from: this.data.from
        }).then(function(o) {
            var e = wx.getStorageSync("userinfo");
            e.isDist = !0, wx.setStorageSync("userinfo", e), getApp().globalData.userinfo = e, 
            console.log("----userInfo--54545-------", e), t.showZanToast("恭喜您，已成功申请为" + t.data.zhaomuName + "！"), 
            n.default.post(a.default.action.BIND_PHONE_SUCCESS, {}), setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 2e3);
        }).catch(function(o) {
            console.log("apply err=>", o), wx.hideLoading(), t.showZanToast(e.default.errors(o.error) || "网络连接错误，请稍后重试"), 
            setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 2e3);
        });
    },
    setCount: function() {
        var t = this.data, o = t.count, e = t.phone, a = this;
        if (0 == o && 11 == e.length && /^1[3|4|5|7|8][0-9]{9}$/.test(e)) this.setData({
            verify: !0,
            phone: e,
            count: 60,
            countDown: !1
        }); else {
            var n = o - 1;
            this.setData({
                count: n
            }), setTimeout(function() {
                a.setCount();
            }, 1e3);
        }
    }
}), Page(s);