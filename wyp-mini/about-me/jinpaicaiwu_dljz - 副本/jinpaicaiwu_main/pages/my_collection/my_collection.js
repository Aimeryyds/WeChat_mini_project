var t = getApp();

Page({
    data: {
        items: [],
        activeIndex: "product",
        showtab: !1,
        pro_total: 0,
        art_total: 0
    },
    onLoad: function(t) {
        this.get_collection();
    },
    changActive: function(t) {
        var a = t.currentTarget.dataset.id;
        this.get_collection(a);
    },
    get_collection: function(a) {
        var e = this;
        void 0 === a && (a = ""), t.apiRequest("user", "my_collection", {
            data: {
                type: a
            },
            success: function(t) {
                "OK" == t.data.result && e.setData({
                    items: t.data.data,
                    showtab: t.data.showtab,
                    activeIndex: t.data.activeIndex,
                    pro_total: t.data.pro_total,
                    art_total: t.data.art_total
                });
            }
        });
    },
    del_collection: function(a) {
        var e = a.currentTarget.dataset.id, o = this, n = o.data.activeIndex;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消收藏",
            success: function(a) {
                a.confirm && t.apiRequest("user", "del_collection", {
                    data: {
                        id: e
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "该商品已取消收藏",
                            icon: "none",
                            duration: 2e3
                        }), o.get_collection(n)) : wx.showToast({
                            title: "取消失败",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    turnToPage: function(a) {
        var e = this.data.items[a.currentTarget.dataset.index], o = JSON.parse(e.params).pageid, n = e.product_id;
        if (o && n) {
            if ("product" == this.data.activeIndex) i = o + "?product_id=" + n; else var i = o + "?article_id=" + n;
            t.turnToPage(i);
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});