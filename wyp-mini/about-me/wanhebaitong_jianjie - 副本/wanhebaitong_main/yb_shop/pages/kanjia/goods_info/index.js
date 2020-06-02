var a = getApp(), t = a.requirejs("core"), i = a.requirejs("api/kjb");

Page({
    data: {
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        countDownDay: 0,
        countDownHour: 0,
        countDownMinute: 0,
        countDownSecond: 0,
        list: [],
        show_time: !0
    },
    onLoad: function(a) {
        t.setting(), this.setData(a), this.detail(), this.goodslist();
    },
    detail: function() {
        var a = this, t = a.data.id;
        i.kj_detail(t, a, function(t) {
            if (a.setData(t), t.bargain_info.end_time) {
                var n = t.bargain_info.end_time;
                wx.setNavigationBarTitle({
                    title: t.bargain_info.bargain_name || "活动详情"
                }), i.Countdown(n, function(t) {
                    a.setData(t);
                });
            }
        });
    },
    goodslist: function() {
        var a = this;
        i.kj_list("", 1, 1, a, function(t) {
            a.setData(t);
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: []
        }), this.detail(), this.goodslist(), wx.stopPullDownRefresh();
    },
    navigate: function() {
        var a = this.data.about_info;
        a.name && a.lat && a.lng ? t.tx_map(a.lat, a.lng, a.name) : t.toast("获取位置失败");
    },
    url: function(a) {
        var i = t.pdata(a);
        wx.navigateTo({
            url: "/yb_shop/pages/kanjia/goods_info/index?id=" + i.id
        });
    },
    shoping: function(a) {
        var i = this;
        return t.pdata(a), i.data.show_time ? i.data.bargain_info.bargain_inventory < 1 ? (t.alert("库存不足"), 
        !1) : void wx.navigateTo({
            url: "/yb_shop/pages/kanjia/order/create/index?bargain_id=" + i.data.bargain_info.id + "&total=1&uid=" + getApp().getCache("userinfo").uid + "&activity_order_type=0&current_price=" + i.data.bargain_info.original_price
        }) : (t.alert("该活动已经结束"), !1);
    },
    formSubmit: function(a) {
        var i = a.detail.formId, n = a.detail.value.id;
        return t.pdata(a), this.data.show_time ? this.data.bargain_info.bargain_inventory < 1 ? (t.alert("库存不足"), 
        !1) : void wx.navigateTo({
            url: "/yb_shop/pages/kanjia/discount_info/index?id=" + n + "&form_id=" + i
        }) : (t.alert("该活动已经结束"), !1);
    },
    phone: function(a) {
        t.phone(a);
    }
});