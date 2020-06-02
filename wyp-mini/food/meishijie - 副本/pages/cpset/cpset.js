var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        shareicon: "../../images/rd_b_fx@3x.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0,
        wfdata_left: [],
        wfdata_right: [],
        wfheight_left: 0,
        wfheight_right: 0,
        hasNextPage: !0,
        pageNum: 1
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "",
            path: "",
            imageUrl: "",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onShow: function() {
        var a = this, e = a.data.option;
        a.setData({
            requeseDone: !1
        }), wx.setNavigationBarTitle({
            title: e.title
        }), wx.request({
            url: t.globalData.newlocalhost + "/index/home_feeds_applet",
            data: {
                source: "微信小程序",
                format: "json",
                cid: e.cid,
                title: e.title
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                a.setData({
                    requeseFail: !1
                }), console.log("瀑布流数据"), console.log(t), a.doWfdata(t), console.log(a.data.wfdata_left), 
                console.log(a.data.wfdata_right), console.log(a.data.wfheight_left), console.log(a.data.wfheight_right), 
                setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600);
            },
            fail: function(t) {
                a.setData({
                    requeseFail: !0
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600);
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
    },
    doWfdata: function(t) {
        var a = this;
        for (var e in t.data.data.items) {
            if (1 == t.data.data.items[e].type || 7 == t.data.data.items[e].type || 8 == t.data.data.items[e].type) {
                var i = 0;
                i += 335 * parseFloat(t.data.data.items[e].wh_ratio), 1 == t.data.data.items[e].type && (i += parseFloat(44 * Math.ceil(t.data.data.items[e].recipe.title.length / 8))), 
                7 == t.data.data.items[e].type && (i += parseFloat(44 * Math.ceil(t.data.data.items[e].video_recipe.title.length / 8))), 
                8 == t.data.data.items[e].type && (i += parseFloat(44 * Math.ceil(t.data.data.items[e].video_article.title.length / 8)));
            }
            a.data.wfheight_left <= a.data.wfheight_right ? (a.setData({
                wfdata_left: a.data.wfdata_left.concat(t.data.data.items[e])
            }), 1 != t.data.data.items[e].type && 7 != t.data.data.items[e].type && 8 != t.data.data.items[e].type || a.setData({
                wfheight_left: a.data.wfheight_left + i
            })) : (a.setData({
                wfdata_right: a.data.wfdata_right.concat(t.data.data.items[e])
            }), 1 != t.data.data.items[e].type && 7 != t.data.data.items[e].type && 8 != t.data.data.items[e].type || a.setData({
                wfheight_right: a.data.wfheight_right + i
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
            url: t.globalData.newlocalhost + "/index/home_feeds_classify_applet",
            data: {
                format: "json",
                page: a.data.pageNum + 1,
                type: a.data.tab_type,
                wxxcc_v: t.globalData.wxxcc_v
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), t.data.data.total_page == t.data.data.current_page && a.setData({
                    hasNextPage: !1
                }), t.data.data.items && t.data.data.items.length > 0 ? (a.setData({
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
    }
});