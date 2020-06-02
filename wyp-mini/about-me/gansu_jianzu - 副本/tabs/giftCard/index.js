var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api.js"));

Page({
    data: {
        giftcardlistData: []
    },
    onLoad: function(t) {
        this.queryGiftcardList();
    },
    onPullDownRefresh: function() {
        this.queryGiftcardList();
    },
    queryGiftcardList: function() {
        var a = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.getIndexMenu({
            sign: "giftCard"
        }).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), a.setData({
                giftcardlistData: t.data.options.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    onTapGiftCardBuy: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/giftcard/buy/index?urlType=tabGigtCard&id=" + a
        });
    }
});