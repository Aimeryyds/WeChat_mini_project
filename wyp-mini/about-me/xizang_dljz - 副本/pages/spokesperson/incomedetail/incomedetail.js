getApp();

var t, a = require("../../../utils/functions");

require("../../../utils/util");

Page({
    data: {
        payway_arr: [ "微信零钱", "支付宝", "银行卡" ],
        list: null,
        page: 1,
        size: 10,
        showMore: !1,
        hasNextPage: !1
    },
    onLoad: function(a) {
        (t = this).getList();
    },
    getList: function() {
        a.getDetailsList({
            p: t.data.page,
            s: t.data.size
        }, function(a) {
            var e = !1;
            a.page.totalPages > t.data.page && (e = !0);
            var s = a.page.list.map(function(t) {
                return t.amount = t.amount.toFixed(2), t;
            });
            t.setData({
                showMore: !1,
                hasNextPage: e,
                list: 1 == t.data.page ? s : t.data.list.concat(s)
            }), wx.stopPullDownRefresh();
        });
    },
    onPullDownRefresh: function() {
        t.getList();
    },
    onReachBottom: function() {
        t.data.hasNextPage && (t.setData({
            showMore: !0
        }), t.data.page++, t.getList());
    }
});