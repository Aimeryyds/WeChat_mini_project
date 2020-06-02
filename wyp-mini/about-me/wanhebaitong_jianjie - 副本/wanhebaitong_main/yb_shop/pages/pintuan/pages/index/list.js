var t = getApp(), a = t.requirejs("core");

Page({
    data: {
        cid: 0,
        show: !1,
        scrollLeft: 0,
        scrollTop: 0,
        page: 1,
        goodsList: [],
        loading: !0,
        suspension: []
    },
    onLoad: function(t) {
        this.setData({
            cid: t.cid ? t.cid : 0
        }), this.systemInfo = wx.getSystemInfoSync(), this.setIndexData(), this.setGoodsData();
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.setData({
            goodsList: [],
            page: 1,
            loaded: !1
        }), this.setIndexData(), this.setGoodsData(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        console.log("加载更多"), this.data.loaded || this.setGoodsData();
    },
    setIndexData: function() {
        var t = this;
        a.get("Pintuan/ptIndex", {}, function(o) {
            0 == o.code ? t.setData({
                windowHeight: t.systemInfo.windowHeight,
                advert: o.info.advert,
                category: o.info.cate
            }) : a.alert(o.msg);
        });
    },
    setGoodsData: function() {
        if (!this.data.loading) return !1;
        var t = this;
        a.get("Pintuan/ptGoodsList", {
            page: t.data.page,
            cate_id: t.data.cid
        }, function(o) {
            if (console.log(o), 0 == o.code) {
                var s = {
                    loading: !1
                };
                0 < o.info.length && (s.page = t.data.page + 1, s.goodsList = t.data.goodsList.concat(o.info)), 
                o.info.length < 10 && (s.loaded = !0), t.setData(s);
            } else a.alert(o.msg);
        });
    },
    showList: function(a) {
        var o = a.currentTarget.dataset.id;
        t.redirect("index/list", "cid=" + o);
    },
    showGoodsDetial: function(a) {
        var o = a.currentTarget.dataset.id;
        o && t.redirect("goods/detail", "gid=" + o);
    },
    switchNav: function(t) {
        if (this.data.cid != t.currentTarget.dataset.cid || 0 == t.currentTarget.dataset.cid) {
            this.data.cid = t.currentTarget.dataset.cid, this.data.page = 0, this.data.loading = !0, 
            this.data.goodsList = [];
            var a = this.systemInfo.windowWidth, o = t.currentTarget.offsetLeft, s = this.data.scrollLeft;
            s = a / 2 < o ? o : 0, this.setData({
                goodsList: [],
                childCate: [],
                loading: !0,
                scrollLeft: s,
                scrollTop: 0,
                cid: this.data.cid
            }), this.setGoodsData();
        }
    },
    scrolltolower: function(t) {
        console.log("加载更多"), this.data.loaded || this.setGoodsData();
    },
    consultation: function(t) {
        suspension.call();
    }
});