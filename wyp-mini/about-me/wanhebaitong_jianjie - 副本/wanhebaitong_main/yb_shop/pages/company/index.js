var n = getApp().requirejs("core");

Page({
    data: {},
    onLoad: function(n) {},
    onShow: function() {
        var o = this;
        n.get("index/Support", {}, function(n) {
            0 == n.code && o.setData({
                info: n.info
            });
        });
    },
    Clipboard: function() {
        n.Clipboard("liu2417301781");
    },
    navigate: function() {
        n.tx_map(34.62845, 112.42821, "壹佰网络");
    },
    calling: function(o) {
        n.phone(o);
    },
    previewImage: function() {
        wx.previewImage({
            current: this.data.info.qrcode,
            urls: [ this.data.info.qrcode ]
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});