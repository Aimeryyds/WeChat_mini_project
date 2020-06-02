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
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
}, o = e(require("../../../network/api")), n = e(require("../../../dist/index")), r = e(require("../../../utils/util"));

Page(Object.assign({}, n.default.Toast, {
    data: {
        toggle: !0,
        rechargeList: [],
        showDialog: !1
    },
    onLoad: function(e) {},
    onShow: function() {
        var e = wx.getStorageSync("userinfo");
        console.log(e, "++++++++++++++++++++++++"), this.setData({
            userInfo: e
        }), this.updateUser();
    },
    updateUser: function() {
        var e = this;
        wx.getStorageSync("userUpdated") ? this.lookup() : wx.getUserInfo({
            success: function(t) {
                o.default.updateWXUserInfo(t.userInfo).then(function(t) {
                    wx.setStorageSync("userUpdated", "yes"), e.lookup();
                });
            },
            fail: function() {
                e.lookup();
            }
        });
    },
    lookup: function() {
        var e = this, t = this;
        o.default.queryUserInfo().then(function(a) {
            wx.stopPullDownRefresh(), console.log("bingooooooooooooo", a), wx.hideLoading(), 
            wx.setStorageSync("userinfo", a.data), t.setData({
                userInfo: a.data
            }), e.queryToRecharge();
        }).catch(function(e) {
            return console.log(e);
        });
    },
    queryToRecharge: function() {
        var e = this;
        wx.showLoading({
            title: "请稍后"
        }), o.default.queryToRecharge().then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), e.setData({
                rechargeListData: t.data
            });
        }).catch(function(e) {
            return console.log(e);
        });
    },
    selectOn: function(e) {
        var o;
        console.log(e, "]]]]]]]]]]]]]]]]]]]]"), console.log(e.currentTarget.dataset.item.id, "11111111111111");
        var n = e.currentTarget.dataset.item, r = e.currentTarget.dataset.index, i = this.data.rechargeListData.rechargeList.map(function(e, t) {
            return a({}, e, {
                toggle: r == t
            });
        });
        this.setData((o = {}, t(o, "rechargeListData.rechargeList", i), t(o, "item", n), 
        o));
    },
    rechargeOn: function() {
        var e = this;
        wx.getStorageSync("userinfo").mobile ? this.data.item ? o.default.queryImmediateRecharge({
            rechargeId: this.data.item.id
        }).then(function(t) {
            if (wx.hideLoading(), 0 == t.status) {
                var a = e;
                wx.requestPayment({
                    timeStamp: t.data.timeStamp + "",
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: t.data.signType,
                    paySign: t.data.paySign,
                    success: function(e) {
                        wx.redirectTo({
                            url: "/pages/storevalue/result/index?result=1&data=" + r.default.stringify(a.data.item)
                        });
                    },
                    fail: function(e) {
                        wx.redirectTo({
                            url: "/pages/storevalue/result/index?result=0&data=" + r.default.stringify(a.data.item)
                        });
                    }
                });
            }
        }).catch(function(t) {
            e.showTopTips("网络连接错误"), wx.hideLoading();
        }) : this.showZanToast("请选择充值金额") : this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    couponShow: function() {
        this.setData({
            showDialog: !this.data.showDialog
        });
    }
}));