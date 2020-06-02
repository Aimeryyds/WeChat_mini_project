var o = getApp().requirejs("core");

Page({
    data: {
        code: !1,
        consume: !1,
        store: !1,
        cancelindex: 0,
        diyshow: {}
    },
    onLoad: function(e) {
        o.setting(), this.setData({
            options: e,
            config: getApp().config
        });
    },
    onShow: function() {
        this.get_list();
    },
    onPullDownRefresh: function() {
        this.onShow(), wx.stopPullDownRefresh();
    },
    get_list: function() {
        var e = this;
        o.get("Order/GetOrder", {
            buyer_id: getApp().getCache("userinfo").uid,
            order_id: e.data.options.order_id
        }, function(t) {
            console.log(t), 0 == t.code ? (t.show = !0, e.setData(t)) : (o.alert(t.msg), wx.redirectTo({
                url: "/yb_shop/pages/order/index"
            }));
        });
    },
    goods_like: function() {
        var e = this;
        o.get("index/index", {}, function(o) {
            e.setData({
                goods_like: o.info.goods_list
            });
        });
    },
    phone: function(e) {
        o.phone(e);
    },
    fuzhi: function(e) {
        var t = o.pdata(e).cont;
        o.Clipboard(t);
    },
    to_barcode: function(e) {
        var t = o.pdata(e).code;
        o.jump("/yb_shop/pages/barcode/index?code=" + t);
    },
    onShareAppMessage: function() {
        return o.onShareAppMessage();
    }
});