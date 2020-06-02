var t = getApp(), a = t.requirejs("core");

Page({
    data: {
        route: "pintuan",
        cid: 0,
        show: !1,
        scrollLeft: 0,
        scrollTop: 0,
        page: 1,
        goodsList: [],
        loading: !0,
        suspension: []
    },
    menu_url: function(t) {
        a.menu_url(t, 2);
    },
    onLoad: function(t) {
        a.setting(), null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
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
        a.get("Pintuan/ptIndex", {}, function(e) {
            0 == e.code ? t.setData({
                windowHeight: t.systemInfo.windowHeight,
                advert: e.info.advert,
                category: e.info.cate
            }) : a.alert(e.msg);
        });
    },
    setGoodsData: function() {
        if (!this.data.loading) return !1;
        var t = this;
        a.get("Pintuan/ptGoodsList", {
            page: t.data.page,
            cate_id: t.data.cid
        }, function(e) {
            if (console.log(e), 0 == e.code) {
                var s = {
                    loading: !1
                };
                0 < e.info.length && (s.page = t.data.page + 1, s.goodsList = t.data.goodsList.concat(e.info)), 
                e.info.length < 10 && (s.loaded = !0), t.setData(s);
            } else a.alert(e.msg);
        });
    },
    showList: function(a) {
        var e = a.currentTarget.dataset.id;
        t.redirect("index/list", "cid=" + e);
    },
    showGoodsDetial: function(a) {
        var e = a.currentTarget.dataset.id;
        e && t.redirect("goods/detail", "gid=" + e);
    },
    switchNav: function(t) {
        if (this.data.cid != t.currentTarget.dataset.cid || 0 == t.currentTarget.dataset.cid) {
            this.data.cid = t.currentTarget.dataset.cid, this.data.page = 0, this.data.loading = !0, 
            this.data.goodsList = [];
            var a = this.systemInfo.windowWidth, e = t.currentTarget.offsetLeft, s = this.data.scrollLeft;
            s = a / 2 < e ? e : 0, this.setData({
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