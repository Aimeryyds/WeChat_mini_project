function t(t, a, i) {
    return a in t ? Object.defineProperty(t, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = i, t;
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a];
        for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
    }
    return t;
}, i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api.js")), e = require("../../../dist/index.js");

Page(Object.assign({}, e.TopTips, e.Quantity, {
    data: {
        quantityList: [],
        giftDetail: {},
        selectedImgUrl: "",
        imgUrlList: [],
        isStorelistShow: !1
    },
    onLoad: function(t) {
        console.log(t, "hhhhhhhhhhhhhhhhhhhhhhh"), this.setData({
            id: t.id,
            urlType: t.urlType,
            loading: !0
        }), wx.showLoading({
            title: "请稍候"
        }), this.queryGiftDetail(t.id);
    },
    queryGiftDetail: function(t) {
        var e = this;
        t && i.default.queryGiftDetail({
            id: t
        }).then(function(t) {
            wx.hideLoading();
            var i = t.data, n = t.data.imgUrl.map(function(t, a) {
                return {
                    imgUrl: t,
                    selected: 0 == a
                };
            }), s = t.data.specList.map(function(t) {
                return a({}, t, {
                    selected: !1,
                    quantity: 0,
                    min: t.minBuy,
                    max: t.maxBuy > 0 && t.total > t.maxBuy ? t.maxBuy : t.total,
                    message: e.getSpecItemMessage(t.minBuy, t.maxBuy, t.total)
                });
            });
            e.setData({
                giftDetail: i,
                loading: !1,
                selectedImgUrl: i.imgUrl[0],
                imgUrlList: n,
                quantityList: s
            });
        }).catch(function(t) {
            wx.hideLoading(), console.log(t);
        });
    },
    getSpecItemMessage: function(t, a, i) {
        var e = "";
        return t > i ? "起售数量大于库存" : (t > 0 && (e += t + "张起售\n"), a > 0 && (e += "最多购买", 
        e += a > 0 && i > a ? a : i, e += "张"), console.log("getSpecItemMessage====>", e), 
        e);
    },
    selectImgUrl: function(t) {
        console.log(t, "]]]]]]]]]]]]]]]]]]]]");
        var i = t.currentTarget.dataset.index, e = this.data.imgUrlList;
        e = e.map(function(t, e) {
            return a({}, t, {
                selected: i == e
            });
        }), this.setData({
            selectedImgUrl: e[i].imgUrl,
            imgUrlList: e
        });
    },
    quantityOn: function(a) {
        var i;
        console.log(a, "-----------quantityOn");
        var e = a.currentTarget.dataset, n = e.total, s = (e.max, e.min);
        if (n <= 0) this.showTopTips("此面额礼品卡已售完"); else if (s > n) this.showTopTips("起售数量大于库存"); else {
            var o = a.currentTarget.dataset.index, r = this.data.quantityList[o];
            r.quantity > 0 || r.selected || this.setData((i = {}, t(i, "quantityList[" + o + "].selected", !0), 
            t(i, "quantityList[" + o + "].quantity", s > 0 ? s : 1), i));
        }
    },
    handleZanQuantityChange: function(a) {
        console.log(a, "-----------handleZanQuantityChange");
        var i = a.componentId, e = a.quantity;
        if (e >= this.data.quantityList[i].total || this.data.quantityList[i].max > 0 && e >= this.data.quantityList[i].max) return this.setData(t({}, "quantityList[" + i + "].quantity", this.data.quantityList[i].max > this.data.quantityList[i].total ? this.data.quantityList[i].total : this.data.quantityList[i].max)), 
        void this.showTopTips("已达最大数量");
        if (this.setData(t({}, "quantityList[" + i + "].quantity", e)), console.log("handleZanQuantityChange", e, this.data.quantityList[i].min), 
        e < this.data.quantityList[i].min || e < 1) {
            var n;
            this.setData((n = {}, t(n, "quantityList[" + i + "].quantity", 0), t(n, "quantityList[" + i + "].selected", !1), 
            n));
        }
    },
    buyCard: function(t) {
        var a = this;
        if (!this.data.isPaying) if (wx.getStorageSync("userinfo").mobile) {
            var e = this, n = this.data.quantityList.filter(function(t) {
                return t.selected;
            }).map(function(t) {
                return {
                    quantity: t.quantity,
                    id: t.id,
                    imgUrl: a.data.selectedImgUrl
                };
            });
            n.length > 0 ? (e.setData({
                isPaying: !0
            }), wx.showLoading({
                title: "请稍候"
            }), i.default.commitGiftCard({
                giftCardOrder: n
            }).then(function(t) {
                wx.hideLoading(), 0 == t.status && wx.requestPayment({
                    timeStamp: t.data.timeStamp + "",
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(a) {
                        e.setData({
                            isPaying: !1
                        }), wx.redirectTo({
                            url: "/pages/giftcard/result/index?result=1&tradeNo=" + t.data.out_trade_no + "&pkgId=" + t.data.pkgId + "&imgUrl=" + e.data.selectedImgUrl + "&urlType=" + e.data.urlType
                        });
                    },
                    fail: function(t) {
                        e.setData({
                            isPaying: !1
                        });
                    }
                });
            }).catch(function(t) {
                a.showTopTips("网络连接错误"), wx.hideLoading();
            })) : this.showTopTips("请选择要购买的礼品卡");
        } else this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    showTopTips: function(t) {
        this.showZanTopTips(t);
    },
    toggleStoreDialog: function() {
        1 != this.data.giftDetail.platformRange && this.setData({
            isStorelistShow: !this.data.isStorelistShow
        });
    }
}));