var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        barHeight_rpx: function(t) {
            return (t = parseInt(t)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
        }(wx.getSystemInfoSync().statusBarHeight + 44),
        searchPlh: "美食杰什么菜都有",
        userId: t.globalData.userId,
        userInfo: {},
        searchTips: {},
        sancanInfo: {},
        tjInfo: {},
        tjItems: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        favbtnicon: "../../images/favbtnicon_red.png",
        searchicon: "../../images/searchicon.png",
        addbtn_img: "../../images/addd.png",
        addbtns_1: "../../images/btns_1.png",
        addbtns_2: "../../images/btns_2.png",
        addbtns_3: "../../images/btns_3.png",
        showAddbtnsCover: !1,
        searchedWords: [],
        hideSearchedWords: !0,
        noSearchedWords: !0,
        showToast: !1,
        toastTitle: "",
        searchRequesting: !1,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        pageNum: 1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        scSvwShow: "",
        searchInputing: !1,
        siStatClass: "",
        nowords: "",
        bottomline: !1,
        wfdata_left: [],
        wfdata_right: [],
        wfheight_left: 1e5,
        wfheight_right: 1e5,
        tab_type: "200",
        showdlbox: !1,
        dlsuccesstip: ""
    },
    onPageScroll: function(t) {
        t.scrollTop > this.data.nav_init_top - this.data.barHeight - 10 ? this.setData({
            showTopbar: !0
        }) : this.setData({
            showTopbar: !1
        });
    },
    isEmptyObject: function(t) {
        var a;
        for (a in t) return !1;
        return !0;
    },
    pxToRpx: function(t) {
        return (t = parseInt(t)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
    },
    rpxTopx: function(t) {
        return (t = parseInt(t)) / 2 * (wx.getSystemInfoSync().windowWidth / 375);
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    showToastss: function(t) {
        var a = this, e = t.duration, s = t.title;
        a.setData({
            showToast: !0,
            toastTitle: s
        }), setTimeout(function() {
            a.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, e);
    },
    doWfdata: function(t) {
        var a = this;
        for (var e in t.data.data.items) {
            if (1 == t.data.data.items[e].type || 7 == t.data.data.items[e].type) {
                var s = 0;
                s += parseFloat(t.data.data.items[e].wh_ratio), 1 == t.data.data.items[e].type && (s += parseFloat(.06 * Math.floor(t.data.data.items[e].recipe.title.length / 8)), 
                t.data.data.items[e].recipe.label && (s += .06)), 7 == t.data.data.items[e].type && (s += parseFloat(.06 * Math.floor(t.data.data.items[e].video_recipe.title.length / 8)), 
                t.data.data.items[e].video_recipe.label && (s += .06)), 8 == t.data.data.items[e].type && (s += parseFloat(.06 * Math.floor(t.data.data.items[e].video_article.title.length / 8)), 
                t.data.data.items[e].video_article.label && (s += .06));
            }
            a.data.wfheight_left >= a.data.wfheight_right ? (a.setData({
                wfdata_left: a.data.wfdata_left.concat(t.data.data.items[e])
            }), 1 != t.data.data.items[e].type && 7 != t.data.data.items[e].type && 8 != t.data.data.items[e].type || a.setData({
                wfheight_left: a.data.wfheight_left - s
            })) : (a.setData({
                wfdata_right: a.data.wfdata_right.concat(t.data.data.items[e])
            }), 1 != t.data.data.items[e].type && 7 != t.data.data.items[e].type && 8 != t.data.data.items[e].type || a.setData({
                wfheight_right: a.data.wfheight_right - s
            }));
        }
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/scene_recipe_tag_list",
            data: {
                format: "json",
                page: a.data.pageNum + 1,
                scene_id: a.data.option.scene_id,
                label_id: a.data.current_tab
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), t.data.data.items && t.data.data.items.length > 0 ? (a.setData({
                    requeseDone: !0,
                    pageNum: a.data.pageNum + 1
                }), a.doWfdata(t)) : (a.setData({
                    hasNextPage: !1
                }), a.setData({
                    bottomline: !0
                }), a.setData({
                    requeseDone: !0
                }));
            }
        });
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    switchtab: function(a) {
        var e = this, s = a.currentTarget.dataset.id;
        e.setData({
            current_tab: s,
            requeseDone: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/scene_recipe_tag_list",
            data: {
                format: "json",
                page: 1,
                scene_id: e.data.option.scene_id,
                label_id: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    wfdata_left: [],
                    wfdata_right: [],
                    wfheight_left: 0,
                    wfheight_right: 0,
                    pageNum: 1
                }), t.data.data.items && t.data.data.items.length > 0 ? (e.setData({
                    noData: !1
                }), e.doWfdata(t), e.setData({
                    requeseDone: !0
                })) : (e.setData({
                    noData: !0
                }), e.setData({
                    hasNextPage: !1
                }), e.setData({
                    bottomline: !1
                }), e.setData({
                    requeseDone: !0
                }));
            }
        });
    },
    onLoad: function(a) {
        var e = this;
        e.setData({
            option: a
        }), e.setData({
            requeseFail: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/scene_recipe_tag_tab",
            data: {
                format: "json",
                scene_id: a.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(s) {
                console.log(s), e.setData({
                    tablist: s.data,
                    current_tab: s.data.data[0].id
                }), wx.request({
                    url: t.globalData.newlocalhost + "/Knowledge/scene_recipe_tag_list",
                    data: {
                        format: "json",
                        page: 1,
                        scene_id: a.scene_id,
                        label_id: s.data.data[0].id
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        console.log("瀑布流数据"), console.log(t), e.doWfdata(t), console.log(e.data.wfdata_left), 
                        console.log(e.data.wfdata_right), console.log(e.data.wfheight_left), console.log(e.data.wfheight_right), 
                        e.setData({
                            requeseDone: !0,
                            requeseFail: !1
                        });
                    },
                    fail: function() {
                        e.setData({
                            requeseFail: !0
                        });
                    }
                });
            },
            fail: function() {
                e.setData({
                    requeseFail: !0
                });
            }
        }), wx.getStorage({
            key: "userId",
            success: function(t) {
                e.setData({
                    userId: t.data
                });
            }
        });
    }
});