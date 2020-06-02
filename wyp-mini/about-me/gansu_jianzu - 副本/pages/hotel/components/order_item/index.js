Component({
    properties: {
        item: {
            type: Object,
            value: {},
            observer: function(t, e) {
                clearInterval(this.timer), this._init();
            }
        },
        hide: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                !0 === t && clearInterval(this.timer);
            }
        }
    },
    data: {
        remainTime: 0,
        bookInTime: "",
        bookOutTime: "",
        pay: !1,
        cancel: !1,
        evaluate: !1,
        orderStatusName: ""
    },
    ready: function() {},
    detached: function() {
        10 === this.data.item.status && clearInterval(this.timer);
    },
    methods: {
        _init: function() {
            var t = this.data.item.bookInTime, e = this.data.item.bookOutTime, a = this.data.item.actionList;
            if (this.setData({
                bookInTime: t.substring(5, 7) + "月" + t.substring(8, 10) + "日",
                bookOutTime: e.substring(5, 7) + "月" + e.substring(8, 10) + "日",
                pay: -1 !== a.indexOf("pay"),
                cancel: -1 !== a.indexOf("cancel"),
                evaluate: -1 !== a.indexOf("evaluate"),
                orderStatusName: this.data.item.orderStatusName
            }), 10 === this.data.item.status) {
                var i = this.data.item.remainTime;
                i > 0 && (this.setData({
                    remainTime: i - 1
                }), this._countDown());
            }
        },
        _countDown: function() {
            var t = this;
            this.timer = setInterval(function() {
                var e = t.data.remainTime;
                e > 1 ? t.setData({
                    remainTime: e - 1
                }) : (t.setData({
                    orderStatusName: "已取消",
                    pay: !1
                }), t.triggerEvent("removedata", t.data.item.id), clearInterval(t.timer));
            }, 1e3);
        },
        _gotoDetails: function() {
            wx.navigateTo({
                url: "/pages/hotel/order_detail/index?id=" + this.data.item.id
            });
        },
        _gotoEvaluate: function() {
            wx.navigateTo({
                url: "/pages/pingjia/evaluateform/index?type=3&orderNo=" + this.data.item.orderNo
            });
        },
        _payOrder: function() {
            this.triggerEvent("payorder", {
                orderNo: this.data.item.orderNo,
                id: this.data.item.id
            });
        },
        _cancelOrder: function() {
            this.triggerEvent("cancelorder", {
                id: this.data.item.id
            });
        }
    }
});