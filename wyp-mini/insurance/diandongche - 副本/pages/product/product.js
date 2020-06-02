var t = getApp();

Page({
    data: {
        StatusBar: t.globalData.StatusBar,
        CustomBar: t.globalData.CustomBar,
        Custom: t.globalData.Custom,
        TabCur: 0,
        MainCur: 0,
        VerticalNavTop: 0,
        list: [],
        load: !0
    },
    onLoad: function() {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        for (var t = [ {} ], a = 0; a < 26; a++) t[a] = {}, t[a].name = String.fromCharCode(65 + a), 
        t[a].id = a;
        this.setData({
            list: t,
            listCur: t[0]
        });
    },
    onReady: function() {
        wx.hideLoading();
    },
    tabSelect: function(t) {
        this.setData({
            TabCur: t.currentTarget.dataset.id,
            MainCur: t.currentTarget.dataset.id,
            VerticalNavTop: 50 * (t.currentTarget.dataset.id - 1)
        });
    },
    VerticalMain: function(t) {
        var a = this, e = this.data.list, i = 0;
        if (this.data.load) {
            for (o = 0; o < e.length; o++) !function(t) {
                wx.createSelectorQuery().select("#main-" + e[t].id).fields({
                    size: !0
                }, function(a) {
                    e[t].top = i, i += a.height, e[t].bottom = i;
                }).exec();
            }(o);
            a.setData({
                load: !1,
                list: e
            });
        }
        for (var r = t.detail.scrollTop + 20, o = 0; o < e.length; o++) if (r > e[o].top && r < e[o].bottom) return a.setData({
            VerticalNavTop: 50 * (e[o].id - 1),
            TabCur: e[o].id
        }), !1;
    }
});