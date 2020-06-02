var t, a = getApp(), e = require("../../../utils/functions");

require("../../../utils/util");

Page({
    data: {
        memberId: null,
        type_arr: [ "全部", "客户", "代言人" ],
        customType: 0,
        show_wrap: 0,
        totalNum: 0,
        list: null,
        page: 1,
        size: 10,
        showMore: !1,
        hasNextPage: !1
    },
    onLoad: function(e) {
        t = this, a.getUserInfo(function(a) {
            t.setData({
                memberId: a.spokesman.memberId
            }), t.getCustomList();
        }), t.setData({
            alias: a.globalData.distribution.alias
        });
    },
    onPullDownRefresh: function() {
        t.getCustomList();
    },
    onReachBottom: function() {
        t.data.hasNextPage && (t.setData({
            showMore: !0
        }), t.data.page++, t.getCustomList());
    },
    selectType: function(a) {
        t.setData({
            customType: a.currentTarget.id
        }), t.getCustomList();
    },
    getCustomList: function() {
        t.closeWrap(), e.getCustomList({
            customType: t.data.customType,
            p: t.data.page,
            s: t.data.size
        }, function(a) {
            var e = !1;
            a.page.totalPages > t.data.page && (e = !0);
            var s = a.page.list;
            t.setData({
                totalNum: a.page.totalRows,
                showMore: !1,
                hasNextPage: e,
                list: 1 == t.data.page ? s : t.data.list.concat(s)
            }), wx.stopPullDownRefresh();
        });
    },
    openWrap: function() {
        this.setData({
            show_wrap: 1
        });
    },
    closeWrap: function() {
        this.setData({
            show_wrap: 0
        });
    }
});