var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        backiconUrl: "../../images/nav_icon_black.png",
        showToast: !1,
        toastTitle: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0,
        showGoHomepage: !1,
        enable: !0,
        showtopbar: !1,
        hasNextPage: !0,
        pageNum: 1
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: this.data.cpDetail.title,
            path: "/pages/sc_content/sc_content?id=" + option.id + "&&title=" + option.title,
            imageUrl: this.data.cpDetail.cover_img.big + "?imageMogr2/gravity/Center/crop/328x262",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            option: a
        }), e.setData({
            requeseDone: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/shicai/shicai_recipe_recommend_list",
            data: {
                source: "微信小程序",
                format: "json",
                sc_id: a.sc_id,
                scene_id: a.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 600), e.setData({
                    cplist: t.data
                }), t.data.data.current_page == t.data.data.total_page && e.setData({
                    hasNextPage: !1
                });
            },
            fail: function(t) {
                e.setData({
                    requeseFail: !0
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 600);
            }
        });
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/shicai/shicai_recipe_recommend_list",
            data: {
                format: "json",
                page: a.data.pageNum + 1,
                sc_id: a.data.option.sc_id,
                scene_id: a.data.option.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t), t.data.data.items && t.data.data.items.length > 0) {
                    a.setData({
                        "cplist.data.items": a.data.cplist.data.items.concat(t.data.data.items)
                    });
                    var e = a.data.pageNum + 1;
                    a.setData({
                        pageNum: e
                    }), a.setData({
                        requeseDone: !0
                    }), t.data.data.current_page == t.data.data.total_page && a.setData({
                        hasNextPage: !1
                    });
                }
            }
        });
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
    }
});