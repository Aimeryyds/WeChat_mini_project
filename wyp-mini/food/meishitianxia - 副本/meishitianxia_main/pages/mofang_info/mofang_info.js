var a = getApp();

Page({
    data: {
        haveuid: !1,
        loading: !0,
        loading_fail: !1,
        loading_ok: !1,
        show_data: 0
    },
    onLoad: function(t) {
        var o = this;
        o.setData({
            domain: t.domain
        }), o.loadMofang_info(t.domain), a.globalData.uid > 0 && o.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                o.setData({
                    statusBarHeight: a.statusBarHeight
                });
            }
        });
    },
    loadMofang_info: function(t) {
        var o = this, e = "mofang_getMofangInfo", n = {
            domain: t
        }, i = a.getParam(e, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: i
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[e].error) {
                    o.setData({
                        loading: !1,
                        loading_ok: !0,
                        title: a.data[e].data.subject,
                        bannerpic: a.data[e].data.bannerpic,
                        quote: a.data[e].data.quote,
                        isfav: a.data[e].data.isfav
                    }), a.data[e].data.quote.length > 59 && o.setData({
                        show_data: 1
                    });
                    var t, n, i = [];
                    for (3 == a.data[e].data.bannertype ? t = a.data[e].data.kinfo : (t = [ {
                        info: {
                            subtype: "recipe"
                        },
                        infoin: ""
                    } ])[0].infoin = a.data[e].data.kinfo, n = 0; n < t.length; n++) t.length < 3 ? i.push(0) : t[n].infoin.length > 4 ? i.push(1) : i.push(0);
                    o.setData({
                        mflist: t,
                        recipe_show: i
                    });
                } else o.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                o.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {
                wx.stopPullDownRefresh(), o.switch_v();
            }
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            loading_fail: !1
        }), this.loadMofang_info(this.data.domain);
    },
    onReady: function() {},
    shareSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    clickinfo: function(t) {
        var o = this, e = t.currentTarget.dataset.type;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(t) {
                a.getId(function(a) {
                    a > 0 && (o.setData({
                        haveuid: !0
                    }), "fav" == e && o.setFavMofang());
                });
            }
        });
    },
    formSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    do_fav: function(a) {
        var t = this;
        "fav_do" == a.currentTarget.dataset.type ? t.setFavMofang() : t.delFavMofang();
    },
    setFavMofang: function() {
        var t = this;
        a.globalData.uid, a.globalData.key;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var o = "fav_addMofangFav", e = {
            id: t.data.domain
        }, n = a.getParam(o, e);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: n
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[o].error ? (t.setData({
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
    delFavMofang: function() {
        var t = this;
        a.globalData.uid, a.globalData.key;
        wx.showModal({
            content: "真的不再收藏了",
            confirmColor: "#ff6767",
            success: function(o) {
                if (o.confirm) {
                    var e = "fav_delMofangFav", n = {
                        id: t.data.domain
                    }, i = a.getParam(e, n);
                    wx.request({
                        url: a.globalData.murl5,
                        data: {
                            p: i
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(a) {
                            0 == a.data[e].error && (t.setData({
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
                } else o.cancel;
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
    recipe_show: function(a) {
        var t = this, o = t.data.recipe_show, e = a.currentTarget.dataset.index, n = a.currentTarget.dataset.v;
        o[e] = 1 == n ? 2 : 1, t.setData({
            recipe_show: o
        });
    },
    message_show: function() {
        var a = this;
        1 == a.data.show_data ? a.setData({
            message_show: !1,
            show_data: 2
        }) : 2 == a.data.show_data && a.setData({
            message_show: !0,
            show_data: 1
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            desc: "专题 | 美食天下",
            path: "/pages/index/index?type=mofang_info&domain=" + this.data.domain + "&inviteuid=" + a.globalData.uid
        };
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    }
});