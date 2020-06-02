function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a];
        for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
    }
    return t;
}, i = t(require("../../network/api.js")), e = t(require("../../utils/const.js")), n = t(require("../../utils/notification")), o = t(require("../../utils/location.js"));

Page({
    data: {
        locationSuccess: !0,
        activityCards: []
    },
    onLoad: function(t) {
        this.registeNotification(), this.init(), this.setData({
            code: t.scene || ""
        });
    },
    onShow: function() {
        var t = this.data.code, a = getApp().globalData.scene;
        this.queryActivity(a, t);
    },
    onHide: function() {
        var t = this.data, a = t.activityCards, i = t.tabName, e = t.activityIndex;
        e < a.length - 1 ? wx.setStorageSync("activity", {
            activityCards: a,
            tabName: i,
            activityIndex: e
        }) : wx.setStorageSync("activity", {});
    },
    onShareAppMessage: function(t) {
        var a = t.from, i = t.target, e = i && i.dataset.shareimg, n = i && i.dataset.sharemsg;
        return {
            imageUrl: "button" === a ? e : this.data.shareImg,
            title: "button" === a ? n : this.data.desc || this.data.title,
            path: "/tabs/home/index"
        };
    },
    onUnload: function() {
        this.removeNotification();
    },
    init: function() {
        var t = this, i = getApp().globalConfig;
        i && (this.setData(a({}, this.data, {
            globalConfig: i
        })), i.isEnableLocation ? (wx.showLoading({
            title: "定位中..."
        }), o.default.ensureLocation(i).then(function() {}).catch(function(a) {
            console.log(a), t.setData({
                locationSuccess: !1
            }), wx.stopPullDownRefresh(), wx.hideLoading();
        })) : this.queryData());
    },
    queryData: function() {
        var t = this;
        wx.showLoading({
            title: "请稍候"
        }), i.default.init().then(function(i) {
            t.setData(a({}, i.data, {
                serverTime: i.serverTime
            })), wx.stopPullDownRefresh(), wx.hideLoading();
        }).catch(function(t) {
            console.log(t), wx.stopPullDownRefresh(), wx.hideLoading();
        });
    },
    onPullDownRefresh: function() {
        var t = this.data, a = t.globalConfig, i = t.location;
        1 == a.locationType ? this.init() : i && i.location ? this.queryData() : this.init();
    },
    registeNotification: function() {
        var t = this;
        n.default.register(e.default.action.QUERY_CONFIG_SUCCESS, this, function() {
            t.init();
        }), n.default.register(e.default.action.LOCATION_CHANGED, this, function(a) {
            console.log("location_changed", a.data), t.setData({
                location: a.data,
                locationSuccess: !0
            }), t.queryData();
        }), n.default.register(e.default.action.GOTO_SHOP, this, function(t) {
            console.log("get notif从订单页面跳转到店铺首页", t), wx.navigateTo({
                url: "/pages/shop/products/products?storeid=" + t.data.storeId
            });
        });
    },
    removeNotification: function() {
        n.default.remove(e.default.action.QUERY_CONFIG_SUCCESS, this), n.default.remove(e.default.action.LOCATION_CHANGED, this), 
        n.default.remove(e.default.action.GOTO_SHOP, this);
    },
    handlePhoneBtnTap: function(t) {
        var a = t.currentTarget.dataset.phone, i = a.telephone, e = a.cellphone;
        console.log(i, e);
        var n = [];
        i && n.push(i), e && n.push(e), n.length > 1 ? wx.showActionSheet({
            itemList: n,
            success: function(t) {
                void 0 != t.tapIndex && wx.makePhoneCall({
                    phoneNumber: n[t.tapIndex].replace("-", "")
                });
            }
        }) : wx.makePhoneCall({
            phoneNumber: n[0]
        });
    },
    handleChooseAddress: function() {
        var t = this.data, a = t.globalConfig, i = t.location, e = void 0;
        e = 0 == a.locationType ? "/pages/citys/citys" : "/pages/addressdetail/addressdetail?addressid=" + (i ? i.addressId : ""), 
        wx.navigateTo({
            url: e
        });
    },
    queryActivity: function(t, a) {
        var e = this;
        i.default.queryActivity({
            scene: t,
            code: a
        }).then(function(t) {
            if (t && t.data && t.data.list) {
                var a = [];
                if (t.data.list.forEach(function(t) {
                    5 === t.status && (t.VIPCardList && t.VIPCardList.length && a.push({
                        name: "card",
                        data: t.VIPCardList
                    }), t.couponList && t.couponList.length && a.push({
                        name: "coupon",
                        data: t.couponList.map(function(t) {
                            return t.useTime = t.useTime.substring(0, 11), t.useEndTime = t.useEndTime.substring(0, 11), 
                            t;
                        })
                    }), t.giftCardList && t.giftCardList.length && a.push({
                        name: "gift",
                        data: t.giftCardList
                    }), t.point && a.push({
                        name: "score",
                        data: {
                            score: t.point
                        }
                    }), "smyl" === t.type && (t.VIPCardList && t.VIPCardList.length || t.couponList && t.couponList.length || t.giftCardList && t.giftCardList.length || t.point) && a.push({
                        name: "share",
                        data: t.share
                    }));
                }), a.length) e.setData({
                    activityCards: a,
                    tabName: t.data.myName,
                    activityIndex: 0
                }), e.showGiftPopup(); else {
                    var i = e.data, n = i.activityCards;
                    if (i.activityIndex < n.length - 1) return;
                    var o = wx.getStorageSync("activity");
                    o.activityCards && o.activityCards.length && (e.setData({
                        activityCards: o.activityCards,
                        tabName: o.tabName,
                        activityIndex: o.activityIndex
                    }), e.showGiftPopup());
                }
            }
        }).catch(function(t) {
            console.log("---err---", t);
        });
    },
    showGiftPopup: function() {
        var t = this.selectComponent(".home_gift_popup");
        t && t.show();
    },
    hideGiftPopup: function() {
        var t = this.selectComponent(".home_gift_popup");
        t && t.hide();
    },
    updateindex: function(t) {
        this.setData({
            activityIndex: t.detail.index
        });
    }
});