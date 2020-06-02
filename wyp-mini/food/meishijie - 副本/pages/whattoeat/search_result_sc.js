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
        hasNextPage: !0
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
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var e = this;
        this.setData({
            words: t.words.length > 6 ? t.words.substring(0, 6) + "..." : t.words,
            pageNum: 1
        }), wx.request({
            url: a.globalData.newlocalhost + "/shicai/shicai_search_list",
            data: {
                format: "json",
                page: "1",
                q: t.words,
                scene_id: t.scene_id || ""
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), e.setData({
                    requeseFail: !1
                }), a.data.data && a.data.data.items && a.data.data.items.length > 0 ? (console.log(a.data.data.items.length), 
                e.setData({
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
            url: a.globalData.newlocalhost + "/shicai/shicai_search_list",
            data: {
                format: "json",
                page: t.data.pageNum + 1,
                q: t.data.words,
                scene_id: t.data.option.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (console.log(a), a.data.data.items && a.data.data.items.length > 0) {
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