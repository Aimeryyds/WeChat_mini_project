var a = require("../../wxParse/wxParse.js"), t = getApp();

Page({
    data: {
        wxParseData: [],
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        loadCmsRecommList: []
    },
    onLoad: function(e) {
        var i = this;
        i.setData({
            id: e.id
        }), (t.globalData.uid > 0 ? t.globalData.uid : -1) > 0 && i.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                i.setData({
                    statusBarHeight: a.statusBarHeight,
                    height: a.windowHeight
                });
            }
        });
        var o = "article_getArticleInfo", n = {
            articleid: e.id
        }, s = t.getParam(o, n);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[o].error) {
                    var e = t.data[o].data.Content.replace(/\$kongge\$|<br\/>/g, " ");
                    e = e.replace(/: /g, ":"), a.wxParse("article", "html", e, i, 5), i.setData({
                        loading: !1,
                        loading_fail: !1,
                        title: t.data[o].data.Title,
                        timeline: t.data[o].data.timeline,
                        articleid: t.data[o].data.ArticleID,
                        classid: t.data[o].data.ClassID,
                        isfav: t.data[o].data.isfav
                    }), i.loadCmsRecommList();
                } else i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {}
        });
    },
    wxParseImgTap: function(t) {
        var e = this;
        a.wxParseImgTap(t, e);
    },
    wxParseImgLoad: function(t) {
        var e = this;
        a.wxParseImgLoad(t, e);
    },
    shareSubmit: function(a) {
        t.save_formid(a.detail.formId);
    },
    loadCmsRecommList: function() {
        var a = this, e = "article_getArticleList", i = {
            classid: a.data.classid,
            pageindex: 1,
            pagesize: 5,
            articleid: a.data.id
        }, o = t.getParam(e, i);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[e].error && a.setData({
                    loadCmsRecommList: t.data[e].data
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    clickinfo: function(a) {
        var e = this, i = a.currentTarget.dataset.type;
        t.globalData.uid = -1, wx.getUserInfo({
            success: function(a) {
                t.getId(function(a) {
                    a > 0 && (e.setData({
                        haveuid: !0
                    }), "fav" == i && e.setFavArticle());
                });
            }
        });
    },
    formSubmit: function(a) {
        t.save_formid(a.detail.formId);
    },
    do_fav: function(a) {
        var t = this;
        "fav_do" == a.currentTarget.dataset.type ? t.setFavArticle() : t.delFavArticle();
    },
    setFavArticle: function() {
        var a = this;
        t.globalData.uid, t.globalData.key;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var e = "fav_addArticleFav", i = {
            id: a.data.id
        }, o = t.getParam(e, i);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[e].error ? (a.setData({
                    isfav: 1
                }), wx.hideToast(), wx.showToast({
                    title: "收藏成功",
                    icon: "success",
                    duration: 1e3
                })) : wx.hideToast();
            },
            fail: function() {
                wx.hideToast();
            },
            complete: function() {}
        });
    },
    delFavArticle: function() {
        var a = this;
        t.globalData.uid, t.globalData.key;
        wx.showModal({
            content: "真的不再收藏了",
            confirmColor: "#ff6767",
            success: function(e) {
                if (e.confirm) {
                    var i = "fav_delArticleFav", o = {
                        id: a.data.id
                    }, n = t.getParam(i, o);
                    wx.request({
                        url: t.globalData.murl5,
                        data: {
                            p: n
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(t) {
                            0 == t.data[i].error && (a.setData({
                                isfav: 0
                            }), wx.hideToast(), wx.showToast({
                                title: "取消成功",
                                icon: "success",
                                duration: 1e3
                            }));
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                } else e.cancel;
            }
        });
    },
    do_backhome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    fulishe: function() {
        wx.navigateTo({
            url: "/pages/goods/goods"
        });
    },
    wxParseTagATap: function(a) {
        var t, e = a.currentTarget.dataset.src;
        /recipe-/.test(e) ? (t = e.split(".html")[0].split("-")[1], wx.navigateTo({
            url: "/pages/recipe_info/recipe_info?id=" + t
        })) : /mofang/.test(e) ? (t = (t = e.split("/"))[t.length - 2], wx.navigateTo({
            url: "/pages/mofang_info/mofang_info?domain=" + t
        })) : /collect-/.test(e) ? (t = e.split(".html")[0].split("-")[1], wx.navigateTo({
            url: "/pages/collect_info/collect_info?id=" + t
        })) : /YuanLiao/.test(e) ? (t = (t = e.split("/"))[t.length - 2], wx.navigateTo({
            url: "/pages/ingredient_info/ingredient_info?id=" + t
        })) : /www.meishichina.com\/+[a-zA-Z]+\/+[a-zA-Z]+\/+[0-9]+/.test(e) && (t = (t = e.split(".html")[0].split("/"))[t.length - 1], 
        wx.navigateTo({
            url: "/pages/health_detail/health_detail?id=" + t
        }));
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/pages/index/index?type=health_detail&id=" + this.data.id + "&inviteuid=" + t.globalData.uid
        };
    }
});