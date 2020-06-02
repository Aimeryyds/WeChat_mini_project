function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/const.js")), t(require("../../utils/notification.js"));

var e = t(require("../../network/api.js"));

Page({
    data: {},
    onLoad: function(t) {
        var e = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: e
        }), wx.showLoading({
            title: "请稍后",
            mask: !0
        });
    },
    queryCarts: function() {
        var t = this;
        e.default.queryCarts().then(function(e) {
            wx.hideLoading(), t.setData({
                carts: e.data
            });
        });
    },
    onShow: function() {
        this.queryCarts();
        var t = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: t
        });
    },
    deleteStore: function(t) {
        var a = t.currentTarget.dataset.storeid, n = this;
        wx.showModal({
            content: "确定清空购物车的商品吗？",
            cancelText: "取消",
            confirmText: "确定",
            success: function(t) {
                t.confirm && (wx.showLoading({
                    title: "请稍后",
                    mask: !0
                }), e.default.clearCartStoreAll({
                    storeId: a
                }).then(function(t) {
                    t && t.data && t.data.result && (wx.showLoading({
                        title: "请稍后",
                        mask: !0
                    }), n.queryCarts());
                }).catch(function(t) {
                    return console.log(t);
                }));
            }
        }), console.log(a);
    },
    changeuser: function() {
        var t = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: t
        });
    }
});