function t(t, a) {
    return Math.round(t * (Math.log(2 * t) / Math.log(a || 1.7)));
}

var a = require("../../../utils/functions"), e = require("../../../utils/util"), i = getApp();

Page({
    data: {
        tabs: [ {
            nor: "icon_commodity_nor.png",
            sel: "icon_commodity_sel.png",
            name: "砍价商品"
        }, {
            nor: "icon_mylist_nor.png",
            sel: "icon_mylist_sel.png",
            name: "我的砍价"
        } ],
        selected: 0,
        page: 1,
        page2: 1,
        size: 6,
        arrow_deg: 0,
        arrow_opc: 0,
        is_refreshing: 0,
        list_top: 0,
        list: [],
        list2: [],
        is_loadmore: 0,
        is_nomore2: 0,
        can_loadmore: 1,
        is_nomore: 0,
        bannerPics: null,
        statusArr: [ "未开始", "有效", "已售空", "已过期", "已下架" ]
    },
    onShow: function(t) {
        var a = this;
        i.getUserInfo(function(t) {
            a.getBargainList(), a.getBargainSelfList(), a.getBargainBanner();
        }), i.getShopInfo(function(t) {
            wx.setNavigationBarTitle({
                title: t.name
            });
        });
    },
    getBargainBanner: function() {
        var t = this;
        a.getBargainBanner(function(a) {
            console.log(a), t.setData({
                bannerPics: a.bannerPics
            });
        });
    },
    getBargainList: function() {
        var t = this;
        this.data.is_loadmore || (this.data.can_loadmore = 0, this.data.page = 1, a.getBargainGoodsList({
            p: this.data.page,
            s: this.data.size
        }, function(a) {
            console.log(a), t.setData({
                list: a.page.list
            });
        }, function() {
            t.setData({
                is_refreshing: 0,
                is_loadmore: 0,
                arrow_opc: 0
            }), setTimeout(function() {
                t.data.can_loadmore = 1;
            }, 500);
        }));
    },
    getMoreBargainList: function() {
        var t = this;
        this.setData({
            is_loadmore: 1
        }), a.getBargainGoodsList({
            p: this.data.page,
            s: this.data.size
        }, function(a) {
            t.setData({
                list: t.data.list.concat(a.page.list)
            }), console.log(t.data.list.length), t.data.list.length >= a.page.totalRows && t.setData({
                is_nomore: 1
            });
        }, function() {
            t.setData({
                is_refreshing: 0,
                is_loadmore: 0,
                arrow_opc: 0
            });
        });
    },
    getBargainSelfList: function() {
        var t = this;
        a.getBargainSelfList({
            p: this.data.page2,
            s: this.data.size
        }, function(a) {
            t.setData({
                list2: a.page.list
            }), t.setData({
                is_refreshing: 0,
                arrow_opc: 0
            }), setTimeout(function() {
                t.data.can_loadmore = 1;
            }, 1e3);
        });
    },
    getMoreBargainSelfList: function() {
        var t = this;
        this.setData({
            is_loadmore: 1
        }), a.getBargainSelfList({
            p: this.data.page2,
            s: this.data.size
        }, function(a) {
            t.setData({
                list2: t.data.list2.concat(a.page.list)
            }), t.data.list2.length >= a.page.totalRows && t.setData({
                is_nomore2: 1
            }), t.setData({
                is_loadmore: 0,
                arrow_opc: 0
            });
        });
    },
    startRefresh: function() {
        this.data.is_refreshing || (this.setData({
            is_refreshing: 1
        }), 0 == this.data.selected ? (this.data.page = 1, this.getBargainList()) : (this.data.page2 = 1, 
        this.getBargainSelfList()));
    },
    loadmore: function() {
        if (console.log("is_loadmore: " + this.data.is_loadmore), !this.data.is_loadmore) {
            if (console.log(this.data.selected), 0 == this.data.selected) {
                if (this.data.is_nomore) return;
                this.data.page++, this.getMoreBargainList();
            } else {
                if (this.data.is_nomore2) return;
                this.data.page2++, this.getMoreBargainSelfList();
            }
            console.log("more");
        }
    },
    clickTag: function(t) {
        var a = parseInt(t.currentTarget.id);
        this.setData({
            selected: a
        });
    },
    scroll: function(a) {
        if (!this.data.is_refreshing && a.detail.scrollTop < 0) {
            var e = Math.abs(a.detail.scrollTop), i = Math.pow(e, t(100, 180) / 90), s = e / 100;
            i >= 180 && (i = 180, s = 1, this.startRefresh()), this.setData({
                arrow_deg: i,
                arrow_opc: s
            });
        }
    },
    scrollContent: function(t) {
        var a = t.detail.current;
        this.setData({
            selected: a
        });
    },
    goToDetail: function(t) {
        var a = t.currentTarget.dataset.url, i = t.currentTarget.dataset.status;
        1 == i ? wx.navigateTo({
            url: a
        }) : -1 == i ? e.toast("该活动已无效") : e.toast("该活动" + this.data.statusArr[i]);
    }
});