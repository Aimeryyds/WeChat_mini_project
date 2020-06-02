var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        route: "order",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons"),
        status: "",
        list: [],
        page: 1,
        cancel: [ "我不想买了", "信息填写错误，重新拍", "其他原因" ],
        cancelindex: 0
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(a) {
        console.log(a), null != a && null != a && this.setData({
            tabbar_index: a.tabbar_index ? a.tabbar_index : -1
        }), e.setting(), "" == t.getCache("userinfo") && wx.redirectTo({
            url: "/yb_shop/pages/index/index"
        }), this.setData({
            options: a,
            status: a.status || a.id || "",
            menu: getApp().tabBar,
            config: getApp().config
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.get_list();
    },
    get_list: function() {
        var t = this;
        t.setData({
            loading: !0
        }), e.get("Order/OrderList", {
            page: t.data.page,
            status: t.data.status,
            uid: getApp().getCache("userinfo").uid
        }, function(a) {
            console.log(a), 0 == a.code ? (t.setData({
                loading: !1,
                show: !0,
                total: a.info.length
            }), 0 < a.info.length && t.setData({
                page: t.data.page + 1,
                list: t.data.list.concat(a.info)
            }), a.info.length < 10 && t.setData({
                loaded: !0
            })) : e.alert(a.msg);
        }, this.data.show);
    },
    selected: function(t) {
        var a = e.data(t).type;
        this.setData({
            list: [],
            page: 1,
            status: a
        }), this.get_list();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.data.loaded || this.get_list();
    },
    cancel: function(t) {
        var a = this, i = this.data.cancel[t.detail.value], n = e.data(t).orderid;
        e.get("Order/CancelOrder", {
            order_id: n,
            cancel_text: i,
            buyer_id: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (a.setData({
                page: 1,
                list: []
            }), a.get_list(), e.alert("取消订单成功！")) : e.alert(t.msg);
        });
    },
    delete: function(t) {
        var a = this, i = e.data(t).orderid;
        e.get("Order/DelOrder", {
            order_id: i,
            buyer_id: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (a.setData({
                page: 1,
                list: []
            }), a.get_list(), e.alert("删除订单成功！")) : e.alert(t.msg);
        });
    },
    to_barcode: function(t) {
        var a = e.pdata(t).code;
        e.jump("/yb_shop/pages/barcode/index?code=" + a);
    },
    refund: function(t) {
        var a = this, i = e.data(t).orderid;
        e.confirm("申请退款后请联系客服", function() {
            e.get("order/RefundOrder", {
                order_id: i,
                buyer_id: getApp().getCache("userinfo").uid
            }, function(t) {
                0 == t.code ? (a.setData({
                    page: 1,
                    list: []
                }), a.get_list(), e.toast("申请成功")) : e.alert(t.msg);
            });
        });
    },
    url_member: function() {
        var t = "/yb_shop/pages/member/index/index?key=1";
        wx.navigateTo({
            url: t,
            fail: function(a) {
                0 <= a.errMsg.indexOf("tabbar") && e.jump(t, 4);
            }
        });
    },
    finish: function(t) {
        var a = this, i = e.data(t).orderid;
        e.get("order/SignOrder", {
            order_id: i,
            buyer_id: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (a.setData({
                page: 1,
                list: []
            }), a.get_list(), e.alert("收货成功！")) : e.alert(t.msg);
        });
    }
});