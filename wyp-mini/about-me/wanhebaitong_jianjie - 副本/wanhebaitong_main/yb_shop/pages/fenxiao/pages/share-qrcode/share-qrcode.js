var e = getApp(), o = e.requirejs("core");

Page({
    data: {
        qrcode: "",
        show: !1
    },
    onLoad: function(t) {
        o.ReName(t.title);
        var n = this, c = e.getCache("qrcode");
        c ? n.setData({
            qrcode: c,
            show: !0
        }) : o.get("Distribe/getShareCode", {
            uid: e.getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (e.setCache("qrcode", t.info, 300), n.setData({
                qrcode: t.info,
                show: !0
            })) : o.alert(t.msg, function() {
                o.jump("", 5);
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    click: function() {
        wx.previewImage({
            current: this.data.qrcode,
            urls: [ this.data.qrcode ]
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});