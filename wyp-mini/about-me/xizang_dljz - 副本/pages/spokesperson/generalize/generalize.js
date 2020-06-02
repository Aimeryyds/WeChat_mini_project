var t, a = getApp(), e = require("../../../utils/functions"), s = require("../../../utils/util");

Page({
    data: {
        goods: null,
        distribution: null,
        keywords: null,
        list: null,
        page: 1,
        size: 10,
        showMore: !1,
        hasNextPage: !1,
        price_rank: 0,
        current_type: 0,
        show_generate: 0,
        generate_w: 1,
        generate_h: 1
    },
    onLoad: function(e) {
        wx.hideShareMenu(), t = this, a.getUserInfo(function(a) {
            t.getDistribution();
        }), t.setData({
            alias: a.globalData.distribution.alias
        });
    },
    getDistribution: function() {
        e.getDistributionInfo(function(a) {
            t.data.distribution = a.distribution, t.getTglist();
        });
    },
    search: function(a) {
        t.setData({
            keywords: a.detail.value
        }), t.getTglist();
    },
    getTglist: function() {
        var a = {
            sortType: t.data.current_type,
            p: t.data.page,
            s: t.data.size
        };
        3 == a.sortType && (a.sortStr = 1 == t.data.price_rank ? "asc" : "desc"), t.data.keywords && (a.name = t.data.keywords), 
        e.getGoodsTgList(a, function(a) {
            var e = !1;
            a.page.totalPages > t.data.page && (e = !0);
            var s = t.data.distribution, o = a.page.list.map(function(t) {
                return t.rate = s.rate1 * t.rate, t.amount = (t.amount * s.rate1).toFixed(2), t;
            });
            t.setData({
                showMore: !1,
                hasNextPage: e,
                list: 1 == t.data.page ? o : t.data.list.concat(o)
            }), wx.stopPullDownRefresh();
        });
    },
    cateDidClick: function(a) {
        var e = parseInt(a.currentTarget.id);
        this.setData({
            current_type: e
        }), 3 === e ? 0 == this.data.current_type ? this.setData({
            price_rank: 1
        }) : this.setData({
            price_rank: 1 == this.data.price_rank ? -1 : 1
        }) : this.setData({
            price_rank: 0
        }), t.getTglist();
    },
    onPullDownRefresh: function() {
        t.getTglist();
    },
    onReachBottom: function() {
        t.data.hasNextPage && (t.setData({
            showMore: !0
        }), t.data.page++, t.getTglist());
    },
    generateDidClick: function(e) {
        var s = e.currentTarget.id, o = a.getGoodsShareUrl(s, t.data.goods.goodsSn);
        if (this.closeSSWrap(), this.setData({
            show_generate: 1,
            box_h: 1 == s ? 640 : 990
        }), !this.data.photo) {
            wx.createCanvasContext("cas");
            wx.downloadFile({
                url: o,
                success: function(a) {
                    t.setData({
                        photo: a.tempFilePath
                    }), setTimeout(function() {
                        t.setData({
                            generate_w: 640,
                            generate_h: 1 == s ? 640 : 990,
                            generate_l: 0,
                            generate_t: 0
                        });
                    }, 10);
                }
            });
        }
    },
    openSSWrap: function(a) {
        wx.showShareMenu();
        var e = t.data.list[a.currentTarget.id];
        this.setData({
            goods: e,
            show_s_wrap: 1
        });
    },
    closeSSWrap: function(t) {
        this.setData({
            show_s_wrap: 0
        });
    },
    closeGenWrap: function() {
        this.setData({
            photo: null,
            show_generate: 0
        });
    },
    savePhoto: function() {
        null != this.data.photo && wx.saveImageToPhotosAlbum({
            filePath: this.data.photo,
            success: function() {
                t.closeGenWrap(), s.toast("保存成功");
            }
        });
    },
    onShareAppMessage: function() {
        if (t.data.goods) {
            t.closeSSWrap();
            var e = t.data.goods, s = a.getGoodsShareUrl(0, e.goodsSn);
            return {
                title: e.name,
                path: s
            };
        }
        return {
            title: null,
            path: s = a.getHomeShareUrl(0)
        };
    }
});