var a = getApp(), e = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        items: [],
        disabled: !1,
        money: "",
        selfInput: !1,
        mainColor: "",
        textColor: "",
        headColor: "",
        selfMoney: "",
        selected: 1
    },
    onLoad: function(e) {
        var t = this;
        this.setData({
            textColor: a.globalData.textColor,
            mainColor: a.globalData.mainColor,
            headColor: a.globalData.headColor
        }), this.getRecharge(function(a) {
            a || t.setData({
                items: [ {
                    id: 0,
                    name: "5.00元",
                    value: "5",
                    radioCan: !1
                }, {
                    id: 1,
                    name: "10.00元",
                    value: "10",
                    radioCan: !1
                }, {
                    id: 2,
                    name: "20.00元",
                    value: "20",
                    radioCan: !1
                }, {
                    id: 3,
                    name: "50.00元",
                    value: "50",
                    radioCan: !1
                }, {
                    id: 50,
                    name: "其他金额￥",
                    value: "",
                    tip: "请输入整数金额",
                    input: !0,
                    radioCan: !1
                } ]
            });
            var o = t.data.items, n = !0, i = !1, l = void 0;
            try {
                for (var s, d = o[Symbol.iterator](); !(n = (s = d.next()).done); n = !0) {
                    var c = s.value;
                    if (c.id == t.data.selected) {
                        t.setData({
                            money: c.value
                        });
                        break;
                    }
                }
            } catch (a) {
                i = !0, l = a;
            } finally {
                try {
                    !n && d.return && d.return();
                } finally {
                    if (i) throw l;
                }
            }
            var r = t, u = e.debt;
            u < 0 ? (r.data.items.unshift({
                name: "骑行欠款费用：￥" + -1 * u + "元",
                value: -1 * u,
                checked: !0,
                id: -1
            }), r.setData({
                items: r.data.items,
                money: -1 * u,
                selected: -1
            })) : (r.data.items[0].checked = !0, r.setData({
                items: r.data.items
            }));
            var h = e.money;
            void 0 != h && t.setData({
                selfMoney: h,
                money: h,
                selected: 50
            });
        });
    },
    getRecharge: function(t) {
        var o = this;
        a.checkToken(function(n) {
            if (n.length > 0) {
                var i = a.globalData.baseUrl + "rechargeConfig/getByAccountId.do", l = {
                    token: n
                };
                a.globalData.adAccountId && 0 != a.globalData.adAccountId.length ? (l.accountId = a.globalData.adAccountId, 
                e.request(i, l, function(a) {
                    a.ret && a.data && a.data.length > 0 ? (console.log(a), o.accountForm(a.data, t)) : t && t(!1);
                })) : t && t(!1);
            } else t && t(!1);
        });
    },
    accountForm: function(a, e) {
        var t = [], o = {};
        a.forEach(function(a, e) {
            var n = {};
            if (-1 != a.money) {
                var i = Number(a.money / 100).toFixed(2);
                n = {
                    id: e,
                    name: i + "元",
                    value: Number(i)
                }, a.desc && a.desc.length > 0 && (n.tip = a.desc), t.push(n);
            } else o = {
                id: 50,
                name: "其他金额￥",
                value: "",
                tip: "请输入整数金额",
                input: !0
            };
        }), -1 == a[0].money && t.push(o), this.setData({
            items: t
        }), e && e(!0);
    },
    onShow: function() {},
    otherBalance: function(a) {
        this.setData({
            money: a.detail.value,
            selfMoney: a.detail.value,
            selfInput: !0
        });
    },
    radioChange: function(a) {
        this.setData({
            money: a.detail.value,
            selfMoney: ""
        });
    },
    selectBalance: function(a) {
        var e = a.currentTarget.dataset.money, t = a.currentTarget.dataset.id;
        this.setData({
            money: e,
            selected: t,
            selfMoney: ""
        });
    },
    auth: function(t) {
        var o = this;
        if (0 != this.data.money.length) {
            if (1 == this.data.selfInput && this.data.money % 1 != 0) return this.setData({
                selfInput: !1
            }), void e.showModal("请输入整数金额！");
            if (0 != this.data.money) if (1 == this.data.selfInput && this.data.money.length > 4) e.showModal("充值金额过大!"); else {
                wx.showToast({
                    title: "请稍候...",
                    icon: "loading",
                    mask: !0,
                    duration: 2e3
                });
                a.checkToken(function(t) {
                    t.length > 0 ? wx.login({
                        success: function(n) {
                            if (n.code) {
                                var i = a.globalData.baseUrl + "weixinPay/createOrder_weixin.do", l = {
                                    token: t,
                                    deposit: !1,
                                    money: 100 * Number(o.data.money),
                                    code: n.code
                                };
                                a.globalData.adAccountId && 0 != a.globalData.adAccountId.length && (l.adAccountId = a.globalData.adAccountId), 
                                console.log("区域id", l.adAccountId), e.request(i, l, function(e) {
                                    var t = JSON.parse("{" + e.data.replace(/'/g, '"') + "}");
                                    o.setData({
                                        disabled: !1
                                    }), wx.requestPayment({
                                        timeStamp: t.timeStamp,
                                        nonceStr: t.nonceStr,
                                        package: t.package,
                                        signType: "MD5",
                                        paySign: t.paySign,
                                        success: function(e) {
                                            a.initUserInfo(function() {
                                                wx.navigateBack({
                                                    delta: 1
                                                });
                                            });
                                        },
                                        fail: function(a) {}
                                    });
                                });
                            }
                        },
                        fail: function(a) {
                            e.showModal(a.errMsg);
                        }
                    }) : (wx.hideToast(), e.showModal_nocancel("请重新登录"));
                });
            } else e.showModal("金额不能为0！");
        } else e.showModal("请输入金额！");
    },
    fail: function() {},
    complete: function() {}
});