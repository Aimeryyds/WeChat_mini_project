var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        icons: t.requirejs("icons"),
        status: "",
        list: [],
        page: 1,
        cancel: [ "我不想买了", "信息填写错误，重新拍", "其他原因" ],
        cancelindex: 0,
        alert_color: t.config.alert_color,
        button_color: t.config.button_color
    },
    onLoad: function(a) {
        e.setting(), "" == t.getCache("userinfo") && wx.redirectTo({
            url: "/pages/error/index"
        }), this.setData({
            options: a,
            status: a.status || "",
            alert_color: getApp().config.alert_color,
            button_color: getApp().config.button_color
        }), this.get_list();
    },
    get_list: function() {
        var t = this;
        t.setData({
            loading: !0
        }), e.get("Bargain/OrderList", {
            page: t.data.page,
            status: t.data.status,
            uid: getApp().getCache("userinfo").uid
        }, function(a) {
            0 == a.code ? (t.setData({
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
        this.setData({
            list: [],
            page: 1
        }), this.get_list(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.data.loaded || this.get_list();
    },
    cancel: function(t) {
        var a = this, i = this.data.cancel[t.detail.value], o = e.data(t).orderid;
        e.get("Bargain/CancelOrder", {
            order_id: o,
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
        e.get("Bargain/DelOrder", {
            order_id: i,
            buyer_id: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (a.setData({
                page: 1,
                list: []
            }), a.get_list(), e.alert("删除订单成功！")) : e.alert(t.msg);
        });
    },
    refund: function(t) {
        var a = this, i = e.data(t).orderid;
        e.confirm("申请退款后请联系客服", function() {
            e.get("Bargain/RefundOrder", {
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
    finish: function(t) {
        var a = this, i = e.data(t).orderid;
        e.get("Bargain/SignOrder", {
            order_id: i,
            buyer_id: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (a.setData({
                page: 1,
                list: []
            }), a.get_list(), e.alert("使用成功！")) : e.alert(t.msg);
        });
    }
});