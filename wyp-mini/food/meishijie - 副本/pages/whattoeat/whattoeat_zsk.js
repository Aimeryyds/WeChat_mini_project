var a = getApp();

Page({
    data: {
        barHeight_nobar: wx.getSystemInfoSync().statusBarHeight,
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        leftbar_height: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44,
        enable: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        showtopbar: !0,
        cj_swiper_current: 0,
        hide_loadtip: !1,
        tab_current: 100,
        pageNum: 1,
        scrollTop: 0,
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
    cjSwiperChange: function(a) {
        this.setData({
            cj_swiper_current: a.detail.current
        }), console.log(this.data.cj_swiper_current);
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
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
            tab_current: s,
            scrollTop: 0
        }), wx.request({
            url: a.globalData.newlocalhost + "/Knowledge/list",
            data: {
                source: "微信小程序",
                format: "json",
                class_id: e.data.tab_current,
                scene_id: e.data.option.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), e.setData({
                    zskdata_list: a.data
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 300), a.data.data && a.data.data.current_page == a.data.data.total_page && (e.setData({
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
    onLoad: function(t) {
        this.setData({
            option: t
        }), this.data.option.scene_id = "2";
        var e = this;
        e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Knowledge/tab",
            data: {
                source: "微信小程序",
                format: "json",
                scene_id: t.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(s) {
                console.log(s), e.setData({
                    zskdata_tab: s.data,
                    tab_current: s.data.data[0].id
                }), e.setData({
                    requeseFail: !1
                }), wx.request({
                    url: a.globalData.newlocalhost + "/Knowledge/list",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        class_id: s.data.data[0].id,
                        scene_id: t.scene_id
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        console.log(a), e.setData({
                            zskdata_list: a.data
                        }), setTimeout(function() {
                            e.setData({
                                hide_loadtip: !0
                            });
                        }, 1e3), setTimeout(function() {
                            e.setData({
                                requeseDone: !0
                            });
                        }, 300), a.data.data && a.data.data.current_page == a.data.data.total_page && (e.setData({
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
    loadmore_wz: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Knowledge/list",
            data: {
                source: "微信小程序",
                format: "json",
                class_id: t.data.tab_current,
                scene_id: t.data.option.scene_id,
                page: t.data.pageNum + 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (console.log(a), a.data.data.items && a.data.data.items.length > 0) {
                    var e = t.data.zskdata_list.data.items.concat(a.data.data.items);
                    t.setData({
                        "zskdata_list.data.items": e
                    }), t.setData({
                        requeseDone: !0
                    }), console.log(t.data.zskdata_list);
                }
                var s = t.data.pageNum + 1;
                t.setData({
                    pageNum: s
                }), t.setData({
                    requeseDone: !0
                }), a.data && a.data.data.current_page == a.data.data.total_page && (t.setData({
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