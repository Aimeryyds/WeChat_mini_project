function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../../network/api")), i = t(require("../../../dist/index"));

Page(Object.assign({}, i.default.Toast, {
    data: {},
    onLoad: function(t) {
        var o = t.id;
        this.setData({
            id: o
        }), t.isdetail && this.setData({
            isdetail: !0
        }), t.color && this.setData({
            couponcolor: t.color
        });
    },
    onShow: function() {
        var t = this.data.id, o = this;
        wx.showLoading({
            title: "加载中"
        }), setTimeout(function() {
            o.queryCouponDetail({
                id: t
            });
        }, 1e3);
        var i = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: i
        });
    },
    receiveCoupon: function(t) {
        var i = this, e = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: e
        }), e.mobile ? (wx.showLoading({
            title: "加载中"
        }), o.default.receiveCoupon({
            id: this.data.id
        }).then(function(t) {
            wx.hideLoading(), i.showZanToast("领取成功"), i.queryCouponDetail({
                id: i.data.id
            });
        }).catch(function(t) {
            wx.hideLoading(), i.showZanToast(o.default.errors(t.error) || "网络链接错误");
        })) : this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    queryCouponDetail: function(t) {
        var i = this;
        o.default.queryCouponDetail(t).then(function(t) {
            wx.hideLoading(), i.setData({
                coupondetail: t.data,
                isShow: !0
            }), console.log(t, "+_+_+_+_");
        }).catch(function(t) {
            return console.log(t, "++++++++++++");
        });
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    showStoreList: function() {
        this.setData({
            isShowStoreList: !0
        });
    },
    toggleStoreDialog: function() {
        this.setData({
            isShowStoreList: !1
        });
    }
}));