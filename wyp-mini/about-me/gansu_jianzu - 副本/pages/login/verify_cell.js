function o(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}

o(require("../../utils/util"));

var t = o(require("../../network/api")), e = (o(require("../../utils/const.js")), 
o(require("../../utils/notification.js")), require("../../dist/index"));

Page(Object.assign({}, e.TopTips, {
    data: {
        loading: !1,
        verify: !1,
        count: 60,
        countDown: !1
    },
    onLoad: function(o) {
        var t = o.mobile, e = o.fomatMobile;
        this.setData({
            mobile: t,
            fomatMobile: e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getCode: function(o) {
        var e = this;
        if (console.log(this.data.mobile), !this.data.loading && !this.data.countDown) {
            wx.showLoading({
                title: "请稍候"
            }), this.setData({
                loading: !0,
                countDown: !0
            });
            var i = this, n = {
                mobile: this.data.mobile
            };
            t.default.getVerifyCode(n).then(function(o) {
                wx.hideLoading(), e.setData({
                    loading: !1
                }), wx.stopPullDownRefresh(), o.data.result ? i.setCount() : e.showZanTopTips("获取验证码失败");
            }).catch(function(o) {
                console.log(o), wx.hideLoading(), e.setData({
                    loading: !1
                });
            });
        }
    },
    setCount: function() {
        var o = this.data, t = o.count, e = o.mobile, i = this;
        if (0 != t) {
            var n = t - 1;
            this.setData({
                count: n
            }), setTimeout(function() {
                i.setCount();
            }, 1e3);
        } else this.setData({
            verify: !0,
            mobile: e,
            count: 60,
            countDown: !1
        });
    },
    formSubmit: function(o) {
        var e = this;
        console.log(o.detail.value);
        var i = o.detail.value, n = void 0;
        if (!i.verifyCode || 0 == i.verifyCode.trim().length) return n = "验证码不能为空", void this.showZanTopTips(n);
        t.default.checkVerifyCode({
            verifyCode: i.verifyCode
        }).then(function(o) {
            wx.stopPullDownRefresh(), console.log("bingooooooooooooo", o), o.data.result ? wx.redirectTo({
                url: "/pages/login/login?type=rebind"
            }) : e.showZanTopTips("验证码不正确");
        }).catch(function(o) {
            return console.log(o);
        });
    }
}));