var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        noDataTips: "没有找到相关菜谱...",
        pageNum: 1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        bottomline: !1,
        foodsnameArr: [],
        foodsnameArr_checked: [],
        foodsnameStr_checked: ""
    },
    onShareAppMessage: function(a) {
        return a.from, {
            title: "智能组菜 - 有什么食材做什么菜",
            path: "/pages/index/index?goSmart=1",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514152042_276.jpg",
            success: function(a) {},
            fail: function(a) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    checktag: function(a) {
        var t = this, e = a.currentTarget.dataset.foodname;
        console.log(e);
        var s = t.data.foodsnameArr_checked;
        -1 != s.indexOf(e) ? s.length > 1 ? (s.splice(s.indexOf(e), 1), t.setData({
            foodsnameArr_checked: s,
            foodsnameStr_checked: s.join(",")
        }), t.dochecktag()) : wx.showModal({
            title: "提示",
            content: "最少选择一种食材",
            showCancel: !1
        }) : (s.push(e), t.setData({
            foodsnameArr_checked: s,
            foodsnameStr_checked: s.join(",")
        }), t.dochecktag());
    },
    dochecktag: function() {
        var t = this;
        wx.request({
            url: a.globalData.newlocalhost + "/search/smart_cook",
            data: {
                format: "json",
                foodsname: t.data.foodsnameStr_checked,
                page: "1",
                per_page: "10"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), t.setData({
                    requeseFail: !1
                }), t.setData({
                    smartData: a.data.data,
                    hasNextPage: !0,
                    bottomline: !1
                }), a.data.data.items ? (t.setData({
                    smartResult: a.data.data.items
                }), a.data.data.current_page == a.data.data.total_page && t.setData({
                    hasNextPage: !1
                }), t.setData({
                    requeseDone: !0
                })) : t.setData({
                    noData: !0
                });
            },
            fail: function(a) {
                t.setData({
                    requeseFail: !0
                });
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            option: t,
            pageNum: 1
        });
        var e = this, s = t.foodsname.substring(0, t.foodsname.length - 1);
        e.setData({
            foodsnameArr: s.split(","),
            foodsnameArr_checked: s.split(","),
            foodsnameStr_checked: t.foodsname
        }), console.log(e.data.foodsnameArr), wx.request({
            url: a.globalData.newlocalhost + "/search/smart_cook",
            data: {
                format: "json",
                foodsname: t.foodsname,
                page: "1",
                per_page: "10"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), e.setData({
                    requeseFail: !1
                }), e.setData({
                    smartData: a.data.data
                }), a.data.data.items ? (e.setData({
                    smartResult: a.data.data.items
                }), a.data.data.current_page == a.data.data.total_page && e.setData({
                    hasNextPage: !1
                }), e.setData({
                    requeseDone: !0
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
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        });
        var e = t.data.foodsnameStr_checked;
        wx.request({
            url: a.globalData.newlocalhost + "/search/smart_cook",
            data: {
                format: "json",
                foodsname: e,
                page: t.data.pageNum + 1,
                per_page: "10"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (console.log(a), a.data.data.items.length > 0) {
                    t.setData({
                        smartResult: t.data.smartResult.concat(a.data.data.items)
                    });
                    var e = t.data.pageNum + 1;
                    t.setData({
                        pageNum: e
                    }), t.setData({
                        requeseDone: !0
                    }), a.data.data.current_page == a.data.data.total_page && (t.setData({
                        hasNextPage: !1
                    }), t.setData({
                        bottomline: !0
                    }));
                }
            }
        });
    }
});