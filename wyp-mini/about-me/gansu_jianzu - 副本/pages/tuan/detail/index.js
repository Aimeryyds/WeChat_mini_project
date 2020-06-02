function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, i = e(require("../../../network/api.js")), o = e(require("../../../utils/util.js")), r = e(require("../../../component/cart_popup/index.js")), n = require("../../../dist/index"), d = {};

o.default.registComp(d, r.default, n.TopTips, {
    data: {},
    onLoad: function(e) {
        var t = e.id;
        wx.showLoading({
            title: "请稍后"
        }), wx.hideShareMenu(), this.queryTuanDetail(t);
    },
    onUnload: function() {
        this.timer && (clearInterval(this.timer), this.timer = void 0);
    },
    queryTuanDetail: function(e) {
        var t = this;
        i.default.queryOpenTuanDetail({
            id: e
        }).then(function(e) {
            var a = e.data;
            wx.hideLoading(), t.setData({
                detail: a
            }), 1 == a.status && (console.log("bingo"), wx.showShareMenu()), a.remainTime > 0 && t.startCount();
        }).catch(function(e) {
            console.log(e), wx.hideLoading();
        });
    },
    queryTuanGoodsSku: function() {
        var e = this, t = getApp().globalData.userinfo;
        if (t && t.mobile) {
            var a = this.data.detail;
            wx.showLoading({
                title: "请稍后"
            }), i.default.queryTuanGoodsSku({
                id: a.id
            }).then(function(t) {
                wx.hideLoading();
                var i = t.data, o = i.stock, r = i.goodsItem, n = i.goodsSku;
                e.setData({
                    "currentGood.id": a.goodsId,
                    "currentGood.name": a.goodsName,
                    "currentGood.imgUrl": a.imgUrl,
                    "currentGood.price": a.groupPrice,
                    "currentGood.stock": o,
                    "currentGood.num": 1,
                    "currentGood.specs": r,
                    "currentGood.skus": n,
                    "currentGood.selectedSpec": new Array(r.length),
                    "currentGood.selectedSpecValue": "",
                    "currentGood.selectedSku": void 0,
                    showDialog: !0
                });
            }).catch(function(e) {
                wx.hideLoading(), console.log(e);
            });
        } else this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    startCount: function() {
        var e = this, a = this.data.detail;
        this.setData(t({}, "detail.leftTime", o.default.renderTimer(a.remainTime)));
        var i = this;
        this.timer = setInterval(function() {
            var r;
            if (0 == a.remainTime) return clearInterval(e.timer), void i.setData(t({}, "detail.status", 3));
            var n = a.remainTime - 1;
            i.setData((r = {}, t(r, "detail.remainTime", n), t(r, "detail.leftTime", o.default.renderTimer(n)), 
            r));
        }, 1e3);
    },
    handleBuy: function(e) {
        var t = e.currentTarget.dataset.type;
        this.setData({
            openType: t
        }), this.queryTuanGoodsSku();
    },
    handleCreateTuan: function(e) {
        var t = this;
        console.log("e--\x3e", e);
        var r = this.data, n = r.openType, d = r.detail, s = e.detail, u = {};
        "join" == n ? u.sponsorId = d.id : u.groupId = d.groupId, wx.showLoading({
            title: "请稍候"
        }), i.default.checkoutSingleOrder(a({
            goodsId: s.id,
            propertiesId: s.selectedSku && s.selectedSku.propertiesId ? s.selectedSku.propertiesId : 0,
            num: s.num,
            consigneeId: -1
        }, u)).then(function(e) {
            wx.hideLoading();
            var t = e.data;
            wx.navigateTo({
                url: "/pages/orders/new/new?order=" + o.default.stringify(t)
            });
        }).catch(function(e) {
            console.log("err----\x3e", e), "100001" == e.error ? t.showZanTopTips(e.errorMessage || "网络链接错误") : t.showZanTopTips("订单提交失败"), 
            wx.hideLoading();
        });
    },
    onShareAppMessage: function() {
        var e = this.data.detail;
        return {
            title: "[" + e.limitPeople + "人团]" + e.goodsName,
            path: "/pages/tuan/detail/index?id=" + item.id
        };
    }
}), Page(d);