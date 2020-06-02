var t = require("../../14E98D478A740DDF728FE5401BCCC841.js"), e = getApp(), i = 0;

Component({
    properties: {
        signShow: {
            type: Boolean,
            value: !1
        },
        signHas: {
            type: Boolean,
            value: !1
        },
        signNowDay: {
            type: Number,
            value: 0
        },
        signDay: {
            type: Number,
            value: 0
        },
        signImgs: {
            type: Array,
            value: []
        },
        signGetShow: {
            type: Boolean,
            value: !1
        },
        signGetImg: {
            type: String,
            value: ""
        },
        signGetTxt: {
            type: String,
            value: ""
        },
        signShareClick: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    ready: function() {},
    methods: {
        showSign: function(e) {
            var n = this;
            1 == e.data.result ? n.setData({
                signHas: !0,
                signDay: e.data.signDay
            }) : n.setData({
                signHas: !1,
                signDay: e.data.signDay
            }), t.getCompleteDetail(), t.getCompleteDetailCallBack = function(t) {
                var e = [];
                i = t.data.sequence, i %= 7, e = n.signCssSet(i), n.setData({
                    signNowDay: i,
                    signImgs: e,
                    signShow: !0
                });
            };
        },
        onSignShow: function() {
            var e = this;
            t.isReceiveGiftToday(), t.isReceiveGiftTodayCallBack = function(t) {
                e.showSign(t);
            };
        },
        onSign: function() {
            var n = this, s = this;
            t.gainReceiveGift(), t.gainReceiveGiftCallBack = function(t) {
                var a;
                if (2 == t.data.result) {
                    var g = [];
                    i += 1, g = s.signCssSet(i), s.setData({
                        signDay: s.data.signDay + 1,
                        signNowDay: i,
                        signImgs: g,
                        signGetImg: g[i - 1].img.slice(0, -9) + ".png",
                        signGetTxt: g[i - 1].str + "X" + g[i - 1].num,
                        signHas: !0,
                        signGetShow: !0
                    });
                    var r = setTimeout(function() {
                        s.setData({
                            signGetShow: !1
                        }), clearTimeout(r);
                    }, 1500), o = g[i - 1].num, u = e.giftList, l = u.mFindIndex(function(t) {
                        return 7 == t.id;
                    });
                    l >= 0 && "小星星" == g[i - 1].str && (void 0 != u[l].giftTicketNum ? u[l].giftTicketNum += g[i - 1].num : u[l].giftTicketNum = g[i - 1].num, 
                    o = u[l].giftTicketNum), e.giftList = u;
                    var c = {
                        name: g[i - 1].str,
                        num: o
                    };
                    n.triggerEvent("success", c);
                } else a = 1 == t.data.result ? "已领取过" : 3 == t.data.result ? "未绑定手机号" : "领取失败，稍候再领";
                2 != t.data.result && wx.showToast({
                    title: a,
                    icon: "none"
                });
            };
        },
        closeSign: function() {
            var t = this;
            t.setData({
                signShow: !1
            }), t.triggerEvent("closeSign", {
                signCloseClick: !0
            });
        },
        onSignShare: function() {
            this.triggerEvent("signShare", {
                signShareClick: !0
            }), e.aldstat.sendEvent("每日签到弹出框点击分享", "分享");
        },
        signImgFun: function(t) {
            var e, i, n;
            switch (t) {
              case 0:
                i = "星辰", n = 5, e = "star";
                break;

              case 1:
                i = "EXP", n = 10, e = "exp";
                break;

              case 2:
                i = "小星星", n = 3, e = "xing";
                break;

              case 3:
                i = "星辰", n = 10, e = "star";
                break;

              case 4:
                i = "EXP", n = 30, e = "exp";
                break;

              case 5:
                i = "星辰", n = 30, e = "star";
                break;

              default:
                i = "小星星", n = 7, e = "xing";
            }
            return {
                str: i,
                num: n,
                img: "./../../images/sign/sign_" + e
            };
        },
        signCssSet: function(t) {
            for (var e = this, i = [], n = 0; n < 7; n++) {
                var s, a, g = e.signImgFun(n);
                n < t ? (s = g.img + "_gray.png", a = "has") : n >= t && (s = g.img + ".png", a = "no"), 
                i.push({
                    day: n + 1,
                    classStr: a,
                    img: s,
                    num: g.num,
                    str: g.str
                });
            }
            return i;
        }
    }
}), Array.prototype.mFindIndex = function(t) {
    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.length, n = e; n < i; n++) if (t.call(this, this[n], n, this)) return n;
    return -1;
};