getApp();

Page({
    data: {},
    onLoad: function(t) {
        console.log(t), this.setData({
            close: t.close,
            text: t.text
        });
    },
    onShow: function() {
        wx.setNavigationBarTitle({
            title: "提示"
        });
    }
});