var a = getApp();

Page({
    data: {
        loading_end: !1,
        loading: !0,
        loading_fail: !1,
        page: 0,
        status: !0,
        timelist: [],
        hotkey: "",
        index_tip: !1,
        search_q: "",
        bestIndexElite: [ {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            url: ""
        } ]
    },
    onLoad: function(a) {
        var e = this;
        a.type && e.shareTo(a), e.getHotKey();
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        wx.setStorageSync("showmy", 1);
        var e = wx.getStorageSync("index_tip") ? wx.getStorageSync("index_tip") : 0;
        e < 3 && (a.setData({
            index_tip: !0
        }), setTimeout(function() {
            a.setData({
                index_tip: !1
            }), wx.setStorageSync("index_tip", e + 1);
        }, 4e3));
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var e = this, t = e.data.page;
        if (!e.data.loading_end && e.data.status) {
            e.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var i = "adver_getRefreshTimeLineList", n = {
                actiontime: 0,
                endtime: t,
                type: 0 == t ? 0 : 2
            }, o = a.getParam(i, n);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    var t = a.data[i].data;
                    if (0 == a.data[i].error) {
                        var n = a.data[i].data.length - 1, o = a.data[i].data[n].sendtime, s = e.data.timelist.concat(t);
                        e.setData({
                            timelist: s,
                            loading: !1,
                            page: o
                        });
                    } else a.data[i].error < 0 ? e.setData({
                        loading: !1,
                        loading_end: !0
                    }) : e.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                fail: function() {
                    e.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    e.setData({
                        status: !0
                    }), e.switch_v();
                }
            });
        }
    },
    concat_list: function(a, e) {
        for (var t = 0; t < a.length; t++) for (var i = 0; i < e.length; i++) a[t].adid == e[i].adid && e.splice(i, 1);
        return a.concat(e);
    },
    open_timeline: function(e) {
        var t = e.currentTarget.dataset.id, i = e.currentTarget.dataset.adid, n = e.currentTarget.dataset.type, o = e.currentTarget.dataset.url, s = {
            mid: i,
            type: "timeline",
            order: e.currentTarget.dataset.index
        }, r = a.getParam("adver_mSetAdClick", s);
        switch (wx.request({
            url: a.globalData.murl5,
            data: {
                p: r
            },
            header: {
                "Content-Type": "application/json"
            }
        }), n) {
          case "collect":
            wx.navigateTo({
                url: "/pages/collect_info/collect_info?id=" + t
            });
            break;

          case "recipe":
            wx.navigateTo({
                url: "/pages/recipe_info/recipe_info?id=" + t
            });
            break;

          case "pai":
            wx.navigateTo({
                url: "/pages/pai_info/pai_info?id=" + t
            });
            break;

          case "mofang":
            wx.navigateTo({
                url: "/pages/mofang_info/mofang_info?domain=" + t
            });
            break;

          case "article":
            wx.navigateTo({
                url: "/pages/health_detail/health_detail?id=" + t
            });
            break;

          case "event":
            wx.navigateTo({
                url: "/pages/event_info/event_info?id=" + t
            });
            break;

          case "miniprogram":
            t && "wxe345ce9de63a222d" != t ? wx.navigateToMiniProgram({
                appId: t,
                path: o
            }) : wx.navigateTo({
                url: "/" + o
            });
            break;

          default:
            return;
        }
    },
    do_search: function(a) {
        wx.navigateTo({
            url: "/pages/search/search?q=" + this.data.search_q
        });
    },
    open_p: function() {
        wx.navigateToMiniProgram({
            appId: "wx245301a2f53d316b",
            path: "pages/goods/detail/index?alias=1yclbz5kvklf0"
        });
    },
    shareTo: function(a) {
        switch (a.type) {
          case "recipe_info":
            wx.navigateTo({
                url: "/pages/recipe_info/recipe_info?id=" + a.id
            });
            break;

          case "classify":
            wx.navigateTo({
                url: "/pages/classify/classify?id=" + a.id
            });
            break;

          case "collect":
            wx.navigateTo({
                url: "/pages/collect/collect"
            });
            break;

          case "collect_info":
            wx.navigateTo({
                url: "/pages/collect_info/collect_info?id=" + a.id
            });
            break;

          case "ingredient":
            wx.switchTab({
                url: "/pages/ingredient/ingredient"
            });
            break;

          case "ingredient_info":
            wx.navigateTo({
                url: "/pages/ingredient_info/ingredient_info?id=" + a.id + "&title=" + a.title
            });
            break;

          case "mofang":
            wx.navigateTo({
                url: "/pages/mofang/mofang"
            });
            break;

          case "mofang_info":
            wx.navigateTo({
                url: "/pages/mofang_info/mofang_info?domain=" + a.domain
            });
            break;

          case "event_info":
            wx.navigateTo({
                url: "/pages/event_info/event_info?id=" + a.id
            });
            break;

          case "recipe_menu":
            wx.navigateTo({
                url: "/pages/recipe_menu/recipe_menu"
            });
            break;

          case "space":
            wx.navigateTo({
                url: "/pages/space/space?uid=" + a.uid
            });
            break;

          case "tag":
            wx.switchTab({
                url: "/pages/tag/tag"
            });
            break;

          case "tag_info":
            wx.navigateTo({
                url: "/pages/tag_info/tag_info?tid=" + a.tid + "&title=" + a.title + "&type=" + a.t
            });
            break;

          case "health_detail":
            wx.navigateTo({
                url: "/pages/health_detail/health_detail?id=" + a.id
            });
            break;

          case "health_index":
            wx.navigateTo({
                url: "/pages/health_index/health_index"
            });
            break;

          case "minisite":
            wx.navigateTo({
                url: "/pages/minisite/" + a.id + "/" + a.id
            });
            break;

          case "videorecipe":
            wx.navigateTo({
                url: "/pages/videorecipe/videorecipe"
            });
            break;

          case "event":
            wx.navigateTo({
                url: "/pages/event/event"
            });
            break;

          case "goods":
            wx.navigateTo({
                url: "/pages/goods/goods"
            });
            break;

          case "draw":
            wx.navigateTo({
                url: "/pages/draw/draw"
            });
            break;

          case "trial":
            wx.navigateTo({
                url: "/pages/trial/trial"
            });
            break;

          case "draw_info":
            wx.navigateTo({
                url: "/pages/draw_info/draw_info?id=" + a.id
            });
            break;

          case "trial_info":
            wx.navigateTo({
                url: "/pages/trial_info/trial_info?id=" + a.id
            });
            break;

          default:
            return;
        }
    },
    onShareAppMessage: function() {
        return {
            title: "美食天下：菜谱与美食社区",
            desc: "让吃更美好",
            path: "/pages/index/index?inviteuid=" + a.globalData.uid
        };
    },
    timelineSubmit: function(e) {
        a.save_formid(e.detail.formId);
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    },
    getbestIndexElite: function() {
        var a = this;
        wx.request({
            url: "https://static.meishichina.com/app/api/bestIndexElite.json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                a.setData({
                    bestIndexElite: e.data.index_eliteTag.data
                });
            },
            complete: function() {
                a.loadMore();
            }
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            page: 0,
            timelist: []
        }), this.getHotKey(), wx.stopPullDownRefresh();
    },
    getHotKey: function() {
        var a = this;
        wx.request({
            url: "https://static.meishichina.com/app/api/hotsearchword.json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                a.setData({
                    hotkey: e.data.search_getHotWord.data
                });
            },
            complete: function() {
                a.getbestIndexElite();
            }
        });
    }
});