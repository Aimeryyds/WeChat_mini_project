getApp();

var a, t = require("../../../utils/functions");

require("../../../utils/util");

Page({
    data: {
        list: null,
        page: 1,
        size: 10,
        showMore: !1,
        hasNextPage: !1
    },
    onLoad: function(t) {
        (a = this).getList();
    },
    getList: function() {
        t.getWithdrawList({
            p: a.data.page,
            s: a.data.size
        }, function(t) {
            var e = !1;
            t.page.totalPages > a.data.page && (e = !0);
            var s = t.page.list.map(function(a) {
                return a.remark = (1 == a.status ? "正" : "已") + "提现至", 1 == a.payway ? a.remark += "零钱" : 2 == a.payway ? a.remark += "支付宝" : 3 == a.payway && (a.remark += a.bank), 
                a.amount = a.amount.toFixed(2), a;
            });
            a.setData({
                showMore: !1,
                hasNextPage: e,
                list: 1 == a.data.page ? s : a.data.list.concat(s)
            }), wx.stopPullDownRefresh();
        });
    },
    onPullDownRefresh: function() {
        a.getList();
    },
    onReachBottom: function() {
        a.data.hasNextPage && (a.setData({
            showMore: !0
        }), a.data.page++, a.getList());
    }
});