var t = getApp(), a = require("data.js");

Page({
    data: {
        toView: "item0",
        llist: [ "推荐", "常见菜式", "场景", "适宜人群", "甜品饮品", "主食小吃", "中式菜系", "外国美食", "节日节气", "烘焙", "健康食谱", "口味", "烹饪方式", "烹饪时间", "家常菜" ],
        rlist: [ "" ],
        on: 0,
        more: [ 0 ],
        hs: [],
        season: ""
    },
    onLoad: function() {
        var t, e = this, n = [];
        for (wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    height: t.windowHeight
                });
            }
        }), t = 0; t < e.data.llist.length; t++) n.push(0);
        var i, o = new Date().getMonth() + 1;
        i = 3 == o || 4 == o || 5 == o ? "chun" : 6 == o || 7 == o || 8 == o ? "xia" : 9 == o || 10 == o || 11 == o ? "qiu" : "dong", 
        e.setData({
            more: n,
            rlist: e.data.rlist.concat(a.tag_data),
            season: i
        });
    },
    onShow: function() {
        wx.setStorageSync("showmy", 1);
    },
    queryMultipleNodes: function() {
        var t = this, a = 0, e = [];
        wx.createSelectorQuery().selectAll(".tag_right_item").boundingClientRect(function(n) {
            n.forEach(function(t) {
                e.push(a), a += t.height - 10;
            }), e.push(a), t.setData({
                hs: e
            });
        }).exec();
    },
    on_tag_main: function(t) {
        var a = this, e = t.currentTarget.dataset.idx;
        a.setData({
            on: e,
            toView: "item" + e
        });
    },
    onReady: function() {
        this.queryMultipleNodes();
    },
    show_more: function(t) {
        var a = this, e = a.data.more, n = t.currentTarget.dataset.idx;
        e[n] = 1 == e[n] ? 0 : 1, a.setData({
            more: e
        }, function() {
            a.queryMultipleNodes();
        });
    },
    scroll: function(t) {
        var a, e = this, n = t.detail.scrollTop, i = e.data.hs[e.data.on], o = e.data.hs[e.data.on + 1];
        if (n > i && n < o) return !1;
        for (a = 0; a < e.data.hs.length; a++) if (n < e.data.hs[a]) {
            e.setData({
                on: a - 1
            });
            break;
        }
    },
    open_tag: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.type, n = t.currentTarget.dataset.name;
        101 == e ? wx.navigateTo({
            url: "/pages/mofang_info/mofang_info?domain=" + a
        }) : wx.navigateTo({
            url: "/pages/tag_info/tag_info?tid=" + a + "&title=" + n + "&type=" + e
        });
    },
    onShareAppMessage: function() {
        return {
            title: "菜谱分类",
            path: "/pages/index/index?type=tag&inviteuid=" + t.globalData.uid
        };
    }
});