var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scrollDone: !1,
        hasNextPage: 1,
        pageNum: 1,
        videoResult: "",
        vAutoplay: !0
    },
    scrollFinish: function() {
        this.setData({
            scrollDone: !0
        });
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
    go_videoCp: function() {
        console.log("1111");
        var e = this;
        wx.navigateTo({
            url: "/pages/content/content?id=" + e.data.videoitem.video_info.id
        });
    },
    onShow: function() {
        this.onLoad(this.data.option), wx.getNetworkType({
            success: function(e) {
                "wifi" != e.networkType || wx.createVideoContext("myVideo1").play();
            }
        });
    },
    onHide: function() {
        wx.createVideoContext("myVideo1").pause();
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.getNetworkType({
            success: function(e) {
                "wifi" != e.networkType && a.setData({
                    vAutoplay: !1
                });
            }
        }), wx.request({
            url: e.globalData.newlocalhost + "/index/home_recommend_new",
            data: {
                source: "微信小程序",
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                a.setData({
                    videoitem: e.data.data[1]
                }), a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 300);
            },
            fail: function(e) {
                a.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: e.globalData.newlocalhost + "/video/video_list",
            data: {
                source: "微信小程序",
                format: "json",
                page: 1,
                pre_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                a.setData({
                    requeseFail: !1
                }), e.data.data.items.length > 0 && a.setData({
                    videoResult: e.data.data.items
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 300), e.data.data.current_page == e.data.data.total_page && a.setData({
                    hasNextPage: !1
                });
            },
            fail: function(e) {
                a.setData({
                    requeseFail: !0
                });
            }
        });
    },
    onReachBottom: function(e) {
        this.loadMore();
    },
    loadMore: function(t) {
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.request({
            url: e.globalData.newlocalhost + "/video/video_list",
            data: {
                source: "微信小程序",
                format: "json",
                page: a.data.pageNum + 1,
                pre_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                a.setData({
                    requeseFail: !1
                }), e.data.data.items.length > 0 && (a.setData({
                    videoResult: a.data.videoResult.concat(e.data.data.items)
                }), a.setData({
                    requeseDone: !0
                }));
                var t = a.data.pageNum + 1;
                a.setData({
                    pageNum: t
                }), a.setData({
                    requeseDone: !0
                }), e.data.data.current_page == e.data.data.total_page && (a.setData({
                    hasNextPage: !1
                }), a.setData({
                    bottomline: !0
                }));
            },
            fail: function(e) {
                a.setData({
                    requeseFail: !0
                });
            }
        });
    }
});