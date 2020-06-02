var t = require("../../../utils/https.js"), a = require("../../../utils/util.js");

Page(function(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}({
    onShareAppMessage: function() {
        return {
            title: "scroll-view",
            path: "page/component/pages/scroll-view/scroll-view"
        };
    },
    data: {
        card: [],
        cardTop: [],
        istopShow: "",
        smallSelect: "",
        big: "../../../Content/images/wallet/061.png",
        bigNo: "../../../Content/images/wallet/06.png",
        scrollCard: [],
        toView: "green",
        obj: {},
        hideModal: !0,
        status: "",
        animationData: {},
        myHight: "",
        monthly: !1
    },
    myEventListener: function(t) {
        this.setData({
            myHight: t.detail
        });
    },
    pay: function(a) {
        var e = this;
        this.close(), wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t.req11("RidingCard/BuyRidingCard", {
            id: e.data.obj.id,
            areaid: e.data.obj.areaid,
            paytype: 4
        }, function(t, a) {
            if (0 == a.data.code) {
                var e = JSON.parse(JSON.parse(a.data.data).Obj);
                console.log(e), wx.requestPayment({
                    timeStamp: e.timeStamp,
                    nonceStr: e.nonceStr,
                    package: e.package,
                    signType: "MD5",
                    paySign: e.paySign,
                    success: function(t) {
                        wx.hideLoading(), wx.showToast({
                            title: "支付成功",
                            icon: "success",
                            mask: !0
                        });
                    },
                    fail: function(t) {
                        wx.hideLoading();
                    }
                });
            } else wx.hideLoading(), wx.showToast({
                title: a.data.retmsg,
                icon: "none",
                mask: !0
            });
        });
    },
    showModal: function() {
        var t = this, a = this.data.obj;
        t.setData({
            obj: a,
            hideModal: !1,
            status: 2 == a.type
        });
        var e = wx.createAnimation({
            duration: 600,
            timingFunction: "ease"
        });
        this.animation = e, setTimeout(function() {
            t.fadeIn();
        }, 200);
    },
    close: function() {
        var t = this, a = wx.createAnimation({
            duration: 800,
            timingFunction: "ease"
        });
        this.animation = a, t.fadeDown(), setTimeout(function() {
            t.setData({
                hideModal: !0
            });
        }, 720);
    },
    hideModal: function() {
        var t = this, a = wx.createAnimation({
            duration: 800,
            timingFunction: "ease"
        });
        this.animation = a, t.fadeDown(), setTimeout(function() {
            t.setData({
                hideModal: !0
            });
        }, 720);
    },
    fadeIn: function() {
        this.animation.translateY(0).step(), this.setData({
            animationData: this.animation.export()
        });
    },
    fadeDown: function() {
        this.animation.translateY(1050).step(), this.setData({
            animationData: this.animation.export()
        });
    },
    navBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("adcode");
        this.GetMonthlyCardList(a);
    },
    selectCard: function(t) {
        this.setData({
            smallSelect: t.currentTarget.dataset.item.id,
            obj: t.currentTarget.dataset.item
        }), this.setData({
            monthly: 6 == this.data.obj.type
        });
    },
    GetMonthlyCardList: function(e) {
        var n = this;
        t.req11("RidingCard/GetMonthlyCardList", {
            areaid: e
        }, function(t, e) {
            if (0 == e.data.code) {
                var i = e.data.data;
                n.setData({
                    card: i
                });
                for (var o = 0; o < i.length; o++) i[o].specialprice = a.keep1(a.floatMul(a.floatDiv(i[o].price, 10), i[o].discount));
                var s = i.sort(function(t, a) {
                    return a.type - t.type;
                });
                s = i.sort(function(t, a) {
                    if (t.type == a.type) return a.usecount - t.usecount;
                }), n.setData({
                    monthly: s.filter(function(t) {
                        return 6 == t.type;
                    }).length > 0
                }), s.map(function(t) {
                    t.price = parseInt(10 * t.price) / 10, t.shen = parseInt(10 * (t.price - t.specialprice)) / 10;
                });
                var r = s.filter(function(t) {
                    return 1 != t.istop;
                }), c = s.filter(function(t) {
                    return 1 == t.istop;
                });
                if (n.data.card.length > 0) if (c.length > 0) {
                    d = c[0].id;
                    n.setData({
                        istopShow: !0,
                        obj: c[0],
                        cardTop: c
                    });
                } else {
                    c.push(r[0]);
                    var d = c[0].id, r = r.slice(1);
                    n.setData({
                        istopShow: !0,
                        obj: c[0],
                        cardTop: c,
                        scrollCard: r
                    }), n.setData({
                        monthly: 6 == n.data.obj.type
                    });
                }
                n.setData({
                    scrollCard: r,
                    smallSelect: d
                });
            }
        });
    },
    btnCard: function(t) {
        console.log(t.target);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
}, "onShareAppMessage", function() {}));