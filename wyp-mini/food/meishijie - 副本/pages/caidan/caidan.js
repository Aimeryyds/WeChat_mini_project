var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scrollDone: !1,
        hasNextPage: 1,
        pageNum: 1,
        caidanResult: ""
    },
    scrollFinish: function() {
        this.setData({
            scrollDone: !0
        });
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
    onShow: function() {
        this.onLoad(this.data.option);
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var e = this;
        e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v9/fx_caidan.php",
            data: {
                source: "微信小程序",
                format: "json",
                page: 1,
                pre_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0 && e.setData({
                    caidanResult: a.data.data.items
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 300), a.data.data.current_page == a.data.data.total_page && e.setData({
                    hasNextPage: !1
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        });
    },
    onReachBottom: function(a) {
        this.loadMore();
    },
    loadMore: function(t) {
        var e = this;
        e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v9/fx_caidan.php",
            data: {
                source: "微信小程序",
                format: "json",
                page: e.data.pageNum + 1,
                pre_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0 && (e.setData({
                    caidanResult: e.data.caidanResult.concat(a.data.data.items)
                }), e.setData({
                    requeseDone: !0
                }));
                var t = e.data.pageNum + 1;
                e.setData({
                    pageNum: t
                }), e.setData({
                    requeseDone: !0
                }), a.data.data.current_page == a.data.data.total_page && (e.setData({
                    hasNextPage: !1
                }), e.setData({
                    bottomline: !0
                }));
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        });
    }
});