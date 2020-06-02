var o, t = require("../../utils/functions"), a = require("../../utils/util");

Page({
    data: {
        page: 1,
        size: 6,
        hasNextPage: !1,
        showMore: !1,
        goodsSn: null
    },
    onLoad: function(t) {
        o = this, t.groupMarketId && this.getGroupList(t.groupMarketId), t.goodsSn && this.setData({
            goodsSn: t.goodsSn
        });
    },
    getGroupList: function(e) {
        t.getGroupedList({
            groupMarketId: e,
            p: o.data.page,
            s: o.data.size
        }, function(t) {
            console.log(t);
            var e = !1;
            t.page.totalPages > o.data.page && (e = !0), t.page.list.forEach(function(o) {
                o.coundown_str = "剩余" + a.countdown_str(o.timerOver);
            }), o.setData({
                showMore: !1,
                hasNextPage: e,
                group_info: t.page
            });
        });
    },
    loadmore: function(t) {
        console.log(t), o.data.hasNextPage && (o.setData({
            showMore: !0
        }), o.data.page++, o.getGroupList());
    },
    onReachBottom: function() {
        this.loadmore();
    }
});