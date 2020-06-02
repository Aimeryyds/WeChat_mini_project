var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        winHeight: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scrollDone: !1,
        currenttab: 0,
        currentTopicid: "",
        checkedTopic: "选择话题",
        checkedTopicid: "",
        liststyle: "recent",
        pageNum: 1
    },
    onShareAppMessage: function(e) {
        return e.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    checkthisrecipe: function(e) {
        var t = e.currentTarget.dataset.recipeid, a = e.currentTarget.dataset.recipetitle;
        console.log("执行选择话题操作：" + t);
        var s = getCurrentPages();
        s[s.length - 2].setData({
            checkedRecipeid: t,
            checkedRecipe: a
        }), wx.navigateBack(1);
    },
    inputing: function(e) {
        var t = e.detail.value;
        console.log(t), this.setData({
            inputing_str: t
        });
    },
    dosearch: function() {
        var t = this;
        t.data.inputing_str ? (t.setData({
            liststyle: "search"
        }), t.setData({
            pageNum: 1
        }), t.setData({
            hasNextPage: !0
        }), t.setData({
            inputing_str_searching: t.data.inputing_str
        }), wx.request({
            url: e.globalData.newlocalhost + "/search/recipe",
            data: {
                format: "json",
                page: "1",
                keyword: t.data.inputing_str,
                order: "-hot"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                t.setData({
                    requeseFail: !1
                }), e.data.data.top_results && t.setData({
                    topResults: e.data.data.top_results
                }), e.data.data.items.length > 0 ? (t.setData({
                    recent_recipe: e.data.data,
                    recent_recipe_items: e.data.data.items
                }), e.data.data.current_page == e.data.data.total_page && t.setData({
                    hasNextPage: !1
                }), t.setData({
                    requeseDone: !0
                })) : (t.setData({
                    recent_recipe: {},
                    recent_recipe_items: []
                }), t.setData({
                    nodata: !0
                }));
            },
            fail: function(e) {
                t.setData({
                    requeseFail: !0
                });
            }
        })) : console.log("请输入搜索关键词");
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var a = this;
        a.setData({
            recent_recipe: {},
            recent_recipe_items: []
        }), a.setData({
            requeseDone: !0,
            nodata: !1
        }), wx.getSystemInfo({
            success: function(e) {
                var t = e.windowHeight * (750 / e.windowWidth) - 88 - 148;
                console.log(t), a.setData({
                    cHeight: t
                });
            }
        }), wx.request({
            url: e.globalData.newlocalhost + "/Recent/recipe",
            data: {
                format: "json",
                token: e.globalData.token,
                page: 1,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                e.data.data.items && e.data.data.items.length > 0 ? (a.setData({
                    recent_recipe: e.data.data,
                    recent_recipe_items: e.data.data.items
                }), console.log("recent_recipe:"), console.log(e), e.data.data.current_page == e.data.data.total_page ? a.setData({
                    hasNextPage: !1
                }) : a.setData({
                    hasNextPage: !0
                })) : (a.setData({
                    recent_recipe: {},
                    recent_recipe_items: []
                }), a.setData({
                    nodata: !0
                }));
            }
        });
    },
    onReachBottom: function() {
        console.log(0), this.data.hasNextPage ? (console.log(1), this.loadMore()) : console.log(2);
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), "recent" == t.data.liststyle ? wx.request({
            url: e.globalData.newlocalhost + "/Recent/recipe",
            data: {
                format: "json",
                page: t.data.pageNum + 1,
                token: e.globalData.token,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (e.data.data.items && e.data.data.items.length > 0) {
                    t.setData({
                        recent_recipe_items: t.data.recent_recipe_items.concat(e.data.data.items)
                    });
                    var a = t.data.pageNum + 1;
                    t.setData({
                        pageNum: a
                    }), t.setData({
                        requeseDone: !0
                    }), e.data.data.current_page == e.data.data.total_page && t.setData({
                        hasNextPage: !1
                    });
                } else t.setData({
                    requeseDone: !0
                });
            }
        }) : "search" == t.data.liststyle && wx.request({
            url: e.globalData.newlocalhost + "/search/recipe",
            data: {
                format: "json",
                page: t.data.pageNum + 1,
                keyword: t.data.inputing_str,
                per_page: 10,
                order: "-hot"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log(e), e.data.data.items && e.data.data.items.length > 0) {
                    t.setData({
                        recent_recipe_items: t.data.recent_recipe_items.concat(e.data.data.items)
                    });
                    var a = t.data.pageNum + 1;
                    t.setData({
                        pageNum: a
                    }), t.setData({
                        requeseDone: !0
                    }), e.data.data.current_page == e.data.data.total_page && t.setData({
                        hasNextPage: !1
                    });
                } else t.setData({
                    requeseDone: !0
                });
            }
        });
    },
    pxToRpx: function(e) {
        return (e = parseInt(e)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
    },
    rpxTopx: function(e) {
        return (e = parseInt(e)) / 2 * (wx.getSystemInfoSync().windowWidth / 375);
    }
});