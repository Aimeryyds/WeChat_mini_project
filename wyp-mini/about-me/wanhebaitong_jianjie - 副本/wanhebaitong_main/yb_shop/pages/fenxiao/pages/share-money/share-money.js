var e = getApp(), a = e.requirejs("core");

Page({
    data: {
        block: !1,
        active: "",
        share_userinfo: {
            today_price: 0,
            price: 0,
            un_pay: 0,
            get_price: 0
        }
    },
    onLoad: function(e) {
        a.ReName(e.title);
    },
    onShow: function() {
        this.setData({
            share_setting: e.getCache("shareSetting"),
            share_userinfo: e.getCache("share_userinfo")
        });
    },
    tapName: function(e) {
        var a = this, t = "";
        a.data.block || (t = "active"), a.setData({
            block: !a.data.block,
            active: t
        });
    }
});