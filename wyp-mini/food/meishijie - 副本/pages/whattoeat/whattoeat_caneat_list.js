var a = getApp();

Page({
    data: {
        barHeight_nobar: wx.getSystemInfoSync().statusBarHeight,
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        list_pt: wx.getSystemInfoSync().statusBarHeight + 44 + 48,
        enable: !0,
        showtopbar: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        tab_current: 0,
        pageNum: 1,
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
    onPageScroll: function(a) {
        a.scrollTop > 400 ? this.setData({
            showTopbar: !0
        }) : this.setData({
            showTopbar: !1
        });
    },
    changtab: function(t) {
        var e = this, s = t.currentTarget.dataset.index;
        e.setData({
            hasNextPage: !0,
            pageNum: 1
        }), e.setData({
            tab_current: s
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), wx.request({
            url: a.globalData.newlocalhost + "/shicai/shicai_tag_list",
            data: {
                source: "微信小程序",
                format: "json",
                tag_id: s,
                c_id: e.data.option.c_id,
                scene_id: e.data.option.scene_id,
                page: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), a.data.data && a.data.data.items && a.data.data.items.length > 0 ? (e.setData({
                    noData: !1
                }), e.setData({
                    listdata: a.data
                })) : (e.setData({
                    noData: !0
                }), e.setData({
                    "listdata.data.items": []
                })), e.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 300), a.data.data && a.data.data.current_page && a.data.data.total_page && a.data.data.current_page < a.data.data.total_page || (e.setData({
                    hasNextPage: !1
                }), e.setData({
                    bottomline: !1
                }));
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
        e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/shicai/shicai_classify_tag",
            data: {
                source: "微信小程序",
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(s) {
                console.log(s), e.setData({
                    tablist: s.data.data
                }), e.setData({
                    tab_current: s.data.data[0].id
                }), e.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 300), wx.request({
                    url: a.globalData.newlocalhost + "/shicai/shicai_tag_list",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        tag_id: s.data.data[0].id,
                        c_id: t.c_id,
                        scene_id: t.scene_id,
                        page: 1
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        console.log(a), a.data.data && a.data.data.items && a.data.data.items.length > 0 ? (e.setData({
                            noData: !1
                        }), e.setData({
                            listdata: a.data
                        })) : (e.setData({
                            noData: !0
                        }), e.setData({
                            "listdata.data.items": []
                        })), e.setData({
                            requeseFail: !1
                        }), setTimeout(function() {
                            e.setData({
                                requeseDone: !0
                            });
                        }, 300), a.data.data.current_page == a.data.data.total_page && (e.setData({
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
        }), wx.request({
            url: a.globalData.newlocalhost + "/shicai/shicai_tag_list",
            data: {
                source: "微信小程序",
                format: "json",
                tag_id: t.data.tab_current,
                c_id: t.data.option.c_id,
                scene_id: t.data.option.scene_id,
                page: t.data.pageNum + 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (console.log(a), a.data.data && a.data.data.items && a.data.data.items.length > 0) {
                    var e = t.data.listdata.data.items.concat(a.data.data.items);
                    t.setData({
                        "listdata.data.items": e
                    }), t.setData({
                        requeseDone: !0
                    }), console.log(t.data.listdata);
                }
                var s = t.data.pageNum + 1;
                t.setData({
                    pageNum: s
                }), t.setData({
                    requeseDone: !0
                }), a.data.data.current_page == a.data.data.total_page && (t.setData({
                    hasNextPage: !1
                }), t.setData({
                    bottomline: !0
                })), t.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    t.setData({
                        requeseDone: !0
                    });
                }, 300);
            },
            fail: function(a) {
                t.setData({
                    requeseFail: !0
                });
            }
        });
    }
});