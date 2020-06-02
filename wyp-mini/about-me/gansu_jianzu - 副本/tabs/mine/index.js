function o(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}

function e(o, e, n) {
    return e in o ? Object.defineProperty(o, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = n, o;
}

var n = o(require("../../utils/util")), t = o(require("../../network/api")), i = o(require("../../utils/const.js")), a = o(require("../../utils/notification.js")), c = o(require("../../dist/index")), s = {
    data: {
        isShow: !1,
        order: {}
    }
};

n.default.registComp(s, c.default.Toast, {
    onShareAppMessage: function() {
        return {
            path: "/tabs/home/index"
        };
    },
    onLoad: function() {
        wx.showLoading({
            title: "加载中"
        });
        var o = getApp().globalData.color;
        this.setData({
            color: o
        });
    },
    onShow: function() {
        var o = this, n = wx.getStorageSync("userinfo");
        console.log(n, "++++++++++++++++++++++++"), this.setData({
            userInfo: n
        }), this.updateUser(), this.queryMine(), t.default.getStaticticsOrderNum().then(function(n) {
            n && n.data && n.data.forEach(function(n) {
                o.setData(e({}, "order[" + n.orderStatus + "]", n.num));
            });
        });
    },
    updateUser: function() {
        var o = this;
        wx.getStorageSync("userUpdated") ? this.lookup() : wx.getUserInfo({
            success: function(e) {
                t.default.updateWXUserInfo(e.userInfo).then(function() {
                    wx.setStorageSync("userUpdated", "yes"), o.lookup();
                });
            },
            fail: function() {
                o.lookup();
            }
        });
    },
    lookup: function() {
        var o = this, e = this;
        t.default.queryUserInfo().then(function(n) {
            if (wx.stopPullDownRefresh(), console.log("bingooooooooooooo", n), wx.hideLoading(), 
            wx.setStorageSync("userinfo", n.data), e.setData({
                userInfo: n.data
            }), n.data && n.data.mobile) {
                console.log(" res.data---\x3e", n.data);
                var t = n.data.mobile.substring(0, 3) + "****" + n.data.mobile.substr(7, 10);
                o.setData({
                    mobile: t
                });
            }
        }).catch(function(o) {
            return console.log(o);
        });
    },
    logout: function() {
        var o = this;
        wx.showLoading({
            title: "加载中"
        }), t.default.logout().then(function(e) {
            wx.stopPullDownRefresh(), console.log("bingooooooooooooo", e), e.data.result && o.lookup();
        }).catch(function(o) {
            return console.log(o);
        });
    },
    showToast: function(o) {
        this.showZanToast(o);
    },
    queryMine: function() {
        var o = this, e = {
            sign: "profile"
        };
        t.default.getIndexMenu(e).then(function(e) {
            wx.stopPullDownRefresh(), console.log("bingooooooooooooo", e), wx.hideLoading(), 
            o.setData({
                mine: e.data.options,
                isShow: !0
            }), o.genMenu(e.data.options);
        }).catch(function(o) {
            return console.log(o);
        });
    },
    genMenu: function(o) {
        var e = [];
        1 == o.balanceIsShow && e.push({
            type: "balance",
            title: "我的余额",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/1120/balance.png",
            url: "/pages/storevalue/mybalance/index"
        }), 1 == o.collectionIsShow && e.push({
            type: "collection",
            title: "我的收藏",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/1120/mine-collection.png",
            url: "/pages/mine/collection/index"
        }), 1 == o.couponIsShow && e.push({
            type: "coupon",
            title: "优惠券",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/coupon.png",
            url: "/pages/mine/coupons/coupons"
        }), 1 == o.cardIsShow && e.push({
            type: "card",
            title: "会员卡",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/card.png",
            url: "/pages/mine/cards/cards"
        }), 1 == o.pointsIsShow && e.push({
            type: "score",
            title: "我的积分",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/score.png",
            url: "/pages/mine/scores/scores"
        }), 1 == o.foodIsShow && e.push({
            type: "food",
            title: "我的点餐",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/food.png",
            url: "/pages/food/myfood/index"
        }), 1 == o.giftCardShow && e.push({
            type: "giftcard",
            title: "我的礼品卡",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/giftcards.png",
            url: "/pages/giftcard/mygiftcard/index"
        }), 1 == o.yuyueIsShow && e.push({
            type: "yuyue",
            title: "我的预约",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/yuyue.png",
            url: "/pages/services/orders/index"
        }), 1 == o.evaluateIsShow && e.push({
            type: "evaluate",
            title: "我的评价",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/1120/evaluate.png",
            url: "/pages/pingjia/myevaluate/index?sType=8"
        }), 1 == o.fightGroupShow && e.push({
            type: "tuan",
            title: "我的拼团",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/tuan.png",
            url: "/pages/tuan/mytuan/index"
        }), 1 == o.distributionIsShow && e.push({
            type: "fenxiao",
            title: o.distributionName,
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/fenxiao.png",
            url: "/pages/fenxiao/center/index"
        }), 1 == o.supplyShow && e.push({
            type: "supply",
            title: "我的供求",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/supply.png",
            url: "/pages/gongqiu/mygongqiu/index"
        }), 1 == o.hotelIsShow && e.push({
            type: "hotel",
            title: "我的酒店",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/hotel.png",
            url: "/pages/hotel/orders/index"
        }), 1 == o.online.isShow && e.push({
            type: "contact",
            title: "客服",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/contact.png"
        }), 1 == o.link.isShow && e.push({
            type: "phone",
            title: "电话",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/phone.png",
            bindtap: "makephone"
        }), 1 == o.about.isShow && e.push({
            type: "about",
            title: "关于我们",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/sicons/about.png",
            bindtap: "makeabout"
        }), 1 == o.liveIsShow && e.push({
            type: "live",
            title: "我的直播",
            icon: "http://imgcdnali.wfenxiao.com.cn/xcx/c/live/mylive.png",
            url: "/pages/live/favorites/index"
        }), this.setData({
            menus: e
        });
    },
    makephone: function() {
        var o = this.data.mine.link, e = o.telephone, n = o.phone, t = [];
        e && t.push(e), n && t.push(n), t.length > 1 ? wx.showActionSheet({
            itemList: t,
            success: function(o) {
                void 0 != o.tapIndex && wx.makePhoneCall({
                    phoneNumber: t[o.tapIndex].replace("-", "")
                });
            }
        }) : wx.makePhoneCall({
            phoneNumber: t[0]
        });
    },
    makeabout: function() {
        wx.navigateTo({
            url: "/pages/aboutmine/aboutmine?aboutmine=" + JSON.stringify(this.data.mine.about)
        });
    },
    handleLogin: function() {
        wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    handleMakeUrl: function(o) {
        var e = o.currentTarget.dataset.url;
        this.data.userInfo.mobile ? wx.navigateTo({
            url: e
        }) : this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    onUnload: function() {
        a.default.remove(i.default.action.BIND_PHONE_SUCCESS, this);
    },
    onHide: function() {
        this.setData({
            showModal: !1,
            url: "/pages/login/login"
        });
    },
    changeuser: function() {
        var o = wx.getStorageSync("userinfo");
        this.setData({
            userInfo: o
        });
    }
}), Page(s);