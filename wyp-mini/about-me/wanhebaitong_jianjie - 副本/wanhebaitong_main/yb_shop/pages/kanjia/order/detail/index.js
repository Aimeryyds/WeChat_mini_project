var e = getApp(), o = e.requirejs("api/kjb"), t = e.requirejs("core");

Page({
    data: {
        code: !1,
        consume: !1,
        store: !1,
        cancelindex: 0,
        diyshow: {},
        list: []
    },
    onLoad: function(e) {
        t.setting(), this.setData({
            options: e,
            config: getApp().config
        }), this.get_list();
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.get_list(), wx.stopPullDownRefresh();
    },
    get_list: function() {
        var e = this;
        t.get("Bargain/GetOrder", {
            buyer_id: getApp().getCache("userinfo").uid,
            order_id: e.data.options.order_id
        }, function(o) {
            console.log(o), 0 == o.code ? (o.show = !0, e.setData(o)) : (t.alert(o.msg), wx.redirectTo({
                url: "/yb_shop/pages/kanjia/order/index"
            }));
        });
    },
    goods_like: function() {
        var e = this;
        o.kj_list("", 1, 1, e, function(o) {
            e.setData(o);
        });
    },
    phone: function(e) {
        t.phone(e);
    },
    url: function(e) {
        var o = t.pdata(e);
        wx.navigateTo({
            url: "/yb_shop/pages/kanjia/goods_info/index?id=" + o.id
        });
    }
});