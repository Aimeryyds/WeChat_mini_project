var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        noDataTips: "没有搜到相关内容哦~",
        pageNum: 1,
        keyword: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        filter: 0,
        order: "-hot"
    },
    onShareAppMessage: function(a) {
        return a.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(a) {},
            fail: function(a) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    switchTab: function(t) {
        var e = this, s = t.currentTarget.dataset.order, o = t.currentTarget.dataset.index;
        this.setData({
            filter: o,
            order: s
        }), e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/search/recipe",
            data: {
                format: "json",
                page: "1",
                keyword: e.data.option.keyword,
                order: e.data.order
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                wx.pageScrollTo && wx.pageScrollTo({
                    scrollTop: 0
                }), e.setData({
                    requeseFail: !1
                }), e.setData({
                    pageNum: 1
                }), a.data.data.top_results && e.setData({
                    topResults: a.data.data.top_results
                }), a.data.data.items.length > 0 ? (e.setData({
                    searchResult: a.data.data.items
                }), a.data.data.current_page == a.data.data.total_page && e.setData({
                    hasNextPage: !1
                }), e.setData({
                    requeseDone: !0
                }), e.data.searchResult.map(function(a, t, s) {
                    "11" != a.item_type && e.setData({
                        noData: !1
                    });
                }), !1 !== e.data.noData && e.setData({
                    noData: !0
                })) : e.setData({
                    noData: !0
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var e = this;
        this.setData({
            keyword: t.keyword,
            pageNum: 1
        }), wx.setNavigationBarTitle({
            title: t.keyword
        }), wx.request({
            url: a.globalData.newlocalhost + "/Searchabout/condition",
            data: {
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data), e.setData({
                    tabData: a.data
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: a.globalData.newlocalhost + "/search/recipe",
            data: {
                format: "json",
                page: "1",
                keyword: t.keyword,
                order: e.data.order
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    requeseFail: !1
                }), a.data.data.top_results && e.setData({
                    topResults: a.data.data.top_results
                }), a.data.data.items.length > 0 ? (e.setData({
                    searchResult: a.data.data.items
                }), a.data.data.current_page == a.data.data.total_page && e.setData({
                    hasNextPage: !1
                }), e.setData({
                    requeseDone: !0
                }), e.data.searchResult.map(function(a, t, s) {
                    "11" != a.item_type && e.setData({
                        noData: !1
                    });
                }), !1 !== e.data.noData && e.setData({
                    noData: !0
                })) : e.setData({
                    noData: !0
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        });
    },
    scrolltoupper: function() {},
    scrolltolower: function() {},
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/search/recipe",
            data: {
                format: "json",
                page: t.data.pageNum + 1,
                keyword: t.data.keyword,
                order: t.data.order
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.data.items.length > 0) {
                    t.setData({
                        searchResult: t.data.searchResult.concat(a.data.data.items)
                    });
                    var e = t.data.pageNum + 1;
                    t.setData({
                        pageNum: e
                    }), t.setData({
                        requeseDone: !0
                    }), a.data.data.current_page == a.data.data.total_page && t.setData({
                        hasNextPage: !1
                    });
                }
            }
        });
    }
});