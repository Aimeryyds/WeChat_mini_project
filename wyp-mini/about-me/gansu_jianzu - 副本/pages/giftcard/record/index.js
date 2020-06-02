var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api.js"));

Page({
    data: {
        recordData: []
    },
    onLoad: function(t) {},
    onShow: function() {
        this.queryGiftcardRecordList();
    },
    queryGiftcardRecordList: function() {
        var a = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryGiftcardRecordList().then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), a.setData({
                recordData: t.data.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    linkUrl: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/giftcard/detail/index?type=myCardRcord&id=" + a
        });
    }
});