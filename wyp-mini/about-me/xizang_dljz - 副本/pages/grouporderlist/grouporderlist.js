var t, a = getApp(), e = require("../../utils/util"), r = require("../../utils/functions");

Page({
    data: {
        shop: null,
        status_arr: [ "", "待付款", "拼团中", "拼团成功", "", "", "", "", "拼团失败" ],
        tags: [ "全部", "待付款", "拼团中", "拼团成功", "拼团失败" ],
        list: null,
        page: 1,
        size: 10,
        selected: 0,
        hasNextPage: !1,
        showMore: !1
    },
    onLoad: function(e) {
        t = this, a.getShopInfo(function(a) {
            t.setData({
                shop: a
            });
        }), void 0 != e.status && t.setData({
            selected: e.status
        });
    },
    onShow: function() {
        t.getList();
    },
    onPullDownRefresh: function() {
        t.getList();
    },
    onReachBottom: function() {
        t.data.hasNextPage && (t.setData({
            showMore: !0
        }), t.data.page++, t.getList());
    },
    getList: function() {
        r.getOrdersList({
            status: t.data.selected,
            p: t.data.page,
            s: t.data.size,
            isGroup: 1
        }, function(a) {
            var e = !1;
            a.page.totalPages > t.data.page && (e = !0);
            var r = a.page.list.map(function(t) {
                var a = 0;
                return null != t.itemList && t.itemList.forEach(function(t) {
                    a += t.number, null != t.attrs && (t.attrsStr = JSON.parse(t.attrs).join(" & "));
                }), t.number = a, t;
            });
            t.setData({
                showMore: !1,
                hasNextPage: e,
                list: 1 == t.data.page ? r : t.data.list.concat(r)
            }), wx.stopPullDownRefresh();
        });
    },
    orderDetail: function(a) {
        wx.navigateTo({
            url: "../orderdetail/orderdetail?orderNo=" + t.data.list[a.currentTarget.id].orderNo
        });
    },
    pay: function(t) {
        var a = t.currentTarget.id, o = this.data.list[a].orderNo;
        r.getPayJson({
            ordersNo: o
        }, function(t) {
            if (null != t.payJson) {
                var a = JSON.parse(t.payJson);
                wx.requestPayment({
                    appId: a.appId,
                    timeStamp: a.timeStamp,
                    nonceStr: a.nonceStr,
                    package: a.package,
                    signType: a.signType,
                    paySign: a.paySign,
                    success: function(t) {
                        wx.showToast({
                            title: "支付成功",
                            icon: "success",
                            duration: 2e3,
                            complete: function() {
                                wx.navigateTo({
                                    url: "../orderdetail/orderdetail?orderNo=" + o
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        e.alert("提示", "您已取消或支付失败!");
                    }
                });
            } else wx.navigateTo({
                url: "../orderdetail/orderdetail?orderNo=" + o
            });
        });
    },
    cancel: function(a) {
        var o = a.currentTarget.id, s = this.data.list[o].orderNo;
        e.confirm("确认取消该订单？", "", function() {
            r.deleteOrders(s, function(a) {
                e.toast("订单已取消", function() {
                    t.data.list[o].status = 6, t.setData({
                        list: t.data.list
                    });
                });
            });
        });
    },
    receive: function(a) {
        var o = a.currentTarget.id, s = this.data.list[o].orderNo;
        e.confirm("确认商品已送达？", "", function() {
            r.receiptOrders(s, function(a) {
                t.data.list[o].status = 4, t.setData({
                    list: t.data.list
                });
            });
        });
    },
    go2Comment: function(t) {
        var a = this.data.list[t.currentTarget.id], e = {
            id: a.id,
            username: a.username,
            phone: a.phone,
            ordersNo: a.orderNo,
            itemList: a.itemList
        };
        wx.navigateTo({
            url: "../comment/comment?orders=" + encodeURIComponent(JSON.stringify(e))
        });
    },
    go2Delivery: function(t) {
        wx.navigateTo({
            url: "../logistics/logistics?orderNo=" + t.currentTarget.id
        });
    },
    concat: function() {
        a.concat();
    },
    clickTag: function(a) {
        t.setData({
            page: 1,
            selected: a.currentTarget.id
        }), t.getList();
    },
    initGroupSatusArr: function() {
        (t = this).status_arr_group = new Array(), t.status_arr_group[10] = "待付款", t.status_arr_group[20] = "待成团", 
        t.status_arr_group[30] = "已成团，待发货", t.status_arr_group[40] = "已发货，待收货", t.status_arr_group[50] = "已完成，待评价", 
        t.status_arr_group[60] = "已评价", t.status_arr_group[70] = "已取消", t.status_arr_group[80] = "已关闭", 
        t.status_arr_group[90] = "已退款";
    },
    go2GroupDetail: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    }
});