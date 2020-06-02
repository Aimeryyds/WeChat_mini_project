var a = getApp(), i = a.requirejs("core"), e = a.requirejs("api/kjb");

Page({
    data: {
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        popup: !1,
        countDownDay: 0,
        countDownHour: 0,
        countDownMinute: 0,
        countDownSecond: 0,
        show_time: !0,
        active: ""
    },
    onLoad: function(a) {
        i.setting();
        var t = this, o = !1, n = a.id;
        if (a.form_id) var s = a.form_id;
        t.setData(a), a.kj_stu && 1 == a.kj_stu && (o = !0), e.BargainCreate(n, function(a) {
            t.setData(a), t.detail(), s && a.code;
        }, o);
    },
    detail: function() {
        var a = this, i = getApp().getCache("userinfo").uid, t = a.data.id;
        e.kj_info(t, i, a, function(i) {
            if (a.setData(i), i.bargain_info.end_time) {
                var t = i.bargain_info.end_time;
                e.Countdown(t, function(i) {
                    a.setData(i);
                });
            }
        });
    },
    push: function(a, e) {
        console.log(a), i.get("Bargain/Push", {
            bargain_id: a,
            user_id: getApp().getCache("userinfo").uid,
            form_id: e
        }, function(a) {
            console.log(a);
        });
    },
    onShow: function() {},
    tankuang: function() {
        this.setData({
            popup: !1
        });
    },
    onPullDownRefresh: function() {
        this.detail(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    record: function() {
        wx.navigateTo({
            url: "/yb_shop/pages/kanjia/record/index?id=" + this.data.user_info.id
        });
    },
    buyNow: function(a) {
        var e = this.data;
        return 1 == e.overtime ? (i.alert("该活动已过期"), !1) : e.bargain_info.bargain_inventory < 1 ? (i.alert("库存不足"), 
        !1) : void wx.navigateTo({
            url: "/yb_shop/pages/kanjia/order/create/index?bargain_id=" + e.bargain_info.id + "&total=1&sku_id=&uid=" + getApp().getCache("userinfo").uid + "&activity_order_type=1&current_price=" + e.user_info.current_price
        });
    },
    Forsubmit: function(a) {
        this.setData({
            formId: a.detail.formId
        });
    },
    onShareAppMessage: function(a) {
        var i = this.data;
        return console.log("/yb_shop/pages/kanjia/share_info/index?id=" + i.user_info.id + "&uid=" + i.user_info.user_id + "&bargain_id=" + i.user_info.bargain_id + "&form_id=" + i.formId), 
        {
            title: "我正在参加：" + i.bargain_info.bargain_name,
            path: "/yb_shop/pages/kanjia/share_info/index?id=" + i.user_info.id + "&uid=" + i.user_info.user_id + "&bargain_id=" + i.user_info.bargain_id + "&form_id=" + i.formId,
            success: function(a) {},
            fail: function(a) {}
        };
    },
    selectPicker: function(a) {
        var e = this;
        if (e.data.bargain_info.bargain_inventory < 1) i.alert("当前库存不足，请稍后再试"); else {
            0 == e.data.goods_detail.goods_spec_format.length && wx.redirectTo({
                url: "/pages/order/create/index?bargain_id=" + e.data.bargain_info.id + "&goods_id=" + e.data.goods_detail.goods_id + "&total=1&sku_id=" + e.data.goods_detail.sku[0].sku_id + "&uid=" + getApp().getCache("userinfo").uid + "&activity_order_type=1&current_price=" + e.data.user_info.current_price
            }), e.setData({
                active: "active",
                slider: "in",
                tempname: "select-picker"
            });
            var t = e.data.goods_detail.sku;
            if (0 != e.data.goods_detail.goods_spec_format.length) {
                e.setData({
                    optionid: t[0].sku_id,
                    "goods_detail.sku_pic": null != t[0].pic ? t[0].pic.img_cover_small : ""
                });
                var o = "", n = [];
                e.data.goods_detail.goods_spec_format.forEach(function(a, i) {
                    n[i] = {
                        id: a.spec_id,
                        vid: a.value[0].spec_value_id,
                        spec_name: a.value[0].spec_value_name
                    }, o += a.value[0].spec_value_name + "， ";
                }), e.setData({
                    specsData: n,
                    specsTitle: o
                });
            } else e.setData({
                "goods.sku_pic": null != t[0].pic ? t[0].pic.img_cover_small : ""
            });
        }
    },
    specsTap: function(a) {
        var i = this, e = "", t = "", o = a.target.dataset.idx, n = i.data.goods_detail.sku, s = i.data.specsData;
        s[o] = {
            id: a.target.dataset.id,
            vid: a.target.dataset.vid,
            spec_name: a.target.dataset.spec_name
        }, s.forEach(function(a) {
            e += a.spec_name + "， ", t += a.id + ":" + a.vid + ";";
        }), t = t.substring(0, t.length - 1), n.forEach(function(a) {
            console.log(a), a.attr_value_items == t && i.setData({
                optionid: a.sku_id,
                "goods.sku_pic": null != a.pic ? a.pic.img_cover_small : ""
            });
        }), i.setData({
            specsData: s,
            specsTitle: e
        });
    },
    emptyActive: function() {
        this.setData({
            active: "",
            slider: "out"
        });
    }
});