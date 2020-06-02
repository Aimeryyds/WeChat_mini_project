var a = getApp();

Page({
    data: {
        haveuid: !1,
        page: 1,
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        recipelist: [],
        status: !0,
        show_data: 0,
        vip: !1,
        showActionsheet: !1,
        groups: [],
        mask_dialog: !1
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var t = this;
        if (!t.data.loading_end && t.data.status) {
            t.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var e = "collect_getCollectRecipeList", i = {
                id: t.data.id,
                pageindex: t.data.page,
                pagesize: 20,
                uid: t.data.uid,
                state: t.data.state,
                lastactivity: t.data.lasttime
            }, o = a.getParam(e, i);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[e].error) {
                        if ("" == a.data[e].data) return void t.setData({
                            loading: !1,
                            loading_end: !0
                        });
                        t.setData({
                            recipelist: t.data.recipelist.concat(a.data[e].data),
                            loading: !1,
                            page: t.data.page + 1
                        }), a.data[e].data.length < 20 && t.setData({
                            loading_end: !0
                        });
                    } else t.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                fail: function() {
                    t.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    t.setData({
                        status: !0
                    });
                }
            });
        }
    },
    onLoad: function(t) {
        var e = this, i = a.globalData.uid > 0 ? a.globalData.uid : -1;
        e.setData({
            id: t.id,
            statusBarHeight: a.globalData.statusBarHeight
        }), i > 0 && e.setData({
            myuid: i,
            haveuid: !0
        });
    },
    onShow: function() {
        var a = this;
        1 != wx.getStorageSync("showmy_collect") && 1 != a.data.page || (a.setData({
            page: 1,
            loading: !0,
            loading_end: !1,
            loading_fail: !1,
            recipelist: []
        }), a.getCollectInfo(), wx.setStorageSync("showmy_collect", 0));
    },
    getCollectInfo: function() {
        var t = this, e = "collect_getCollectInfo", i = {
            id: t.data.id
        }, o = a.getParam(e, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(i) {
                if (0 == i.data[e].error) {
                    var o = a.showstaruser(i.data[e].data.uid);
                    t.setData({
                        uid: i.data[e].data.uid,
                        username: i.data[e].data.username,
                        subject: i.data[e].data.subject,
                        message: i.data[e].data.message,
                        avatar: i.data[e].data.avatar,
                        isfav: i.data[e].data.isfav,
                        lastactivity: i.data[e].data.lastactivity,
                        lasttime: i.data[e].data.lasttime,
                        state: i.data[e].data.state,
                        vip: o
                    }), i.data[e].data.message.length > 59 && t.setData({
                        show_data: 1
                    }), t.loadMore();
                } else i.data[e].error < 0 && (t.setData({
                    status: !1
                }), wx.redirectTo({
                    url: "/pages/blank404/blank404"
                }));
            }
        });
    },
    clickinfo: function(t) {
        var e = this, i = t.currentTarget.dataset.type;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(t) {
                a.getId(function(a) {
                    a > 0 && (e.setData({
                        haveuid: !0
                    }), "fav" == i && e.setFavRecipe());
                });
            }
        });
    },
    formSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    do_fav: function(a) {
        var t = this;
        "fav_do" == a.currentTarget.dataset.type ? t.setFavRecipe() : t.delFavRecipe();
    },
    setFavRecipe: function() {
        var t = this;
        a.globalData.uid, a.globalData.key;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var e = "fav_addCollectFav", i = {
            id: t.data.id
        }, o = a.getParam(e, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[e].error ? (t.setData({
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
    delFavRecipe: function() {
        var t = this;
        a.globalData.uid, a.globalData.key;
        wx.showModal({
            content: "真的不再收藏了",
            confirmColor: "#ff6767",
            success: function(e) {
                if (e.confirm) {
                    var i = "fav_delCollectFav", o = {
                        id: t.data.id
                    }, s = a.getParam(i, o);
                    wx.request({
                        url: a.globalData.murl5,
                        data: {
                            p: s
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(a) {
                            0 == a.data[i].error && (t.setData({
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
    edit_collect: function() {
        wx.navigateTo({
            url: "/pages/collect_add/collect_add?id=" + this.data.id
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
    do_edit: function(a) {
        var t = this, e = a.currentTarget.dataset.index, i = t.data.recipelist[e].weight, o = (t.data.recipelist[e].unote, 
        t.data.recipelist[e].id, [ {
            text: "写推荐语",
            value: 0
        } ]);
        i > 1 ? o.push({
            text: "取消置顶",
            value: 2
        }) : o.push({
            text: "置顶",
            value: 1
        }), o.push({
            text: "移除",
            type: "warn",
            value: 3
        }), t.setData({
            groups: o,
            showActionsheet: !0,
            edit_index: e
        });
    },
    do_action: function(a) {
        var t = this, e = a.detail.value, i = t.data.edit_index, o = t.data.recipelist[i].id;
        0 == e && t.editCollectRecipeUnote(i), 1 == e && t.editTopCollectRecipe(0, o), 2 == e && t.editTopCollectRecipe(1, o), 
        3 == e && t.unRecipeFavById(i, o), t.setData({
            showActionsheet: !1
        });
    },
    editTopCollectRecipe: function(t, e) {
        var i = this, o = "collect_editTopCollectRecipe", s = {
            recipeid: e,
            collectid: i.data.id
        };
        1 == t && (s.cancel = 1);
        var d = a.getParam(o, s);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: d
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[o].error && (i.setData({
                    page: 1,
                    loading: !0,
                    loading_end: !1,
                    loading_fail: !1,
                    recipelist: []
                }), i.loadMore());
            },
            fail: function() {},
            complete: function() {}
        });
    },
    unRecipeFavById: function(t, e) {
        var i = this;
        wx.showModal({
            content: "确定要移除本菜谱吗？",
            confirmColor: "#ff6767",
            success: function(o) {
                if (o.confirm) {
                    var s = "recipe_unRecipeFavById", d = {
                        collectid: i.data.id,
                        id: e
                    }, n = a.getParam(s, d);
                    wx.request({
                        url: a.globalData.murl5,
                        data: {
                            p: n
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(a) {
                            if (0 == a.data[s].error) {
                                wx.showToast({
                                    title: "取消成功",
                                    icon: "success",
                                    duration: 1e3
                                });
                                var e = i.data.recipelist;
                                e[t].hidden = !0, i.setData({
                                    recipelist: e
                                }), wx.setStorageSync("showmy", 1);
                            }
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                } else o.cancel;
            }
        });
    },
    editCollectRecipeUnote: function(a) {
        wx.hideShareMenu();
        var t = this, e = t.data.recipelist[a].unote;
        t.setData({
            mask_dialog: !0,
            unote: e
        });
    },
    edit_unote: function(a) {
        this.setData({
            unote: a.detail.value
        });
    },
    do_edit_unote: function(t) {
        var e = this, i = "collect_editCollectRecipeUnote", o = e.data.edit_index, s = {
            recipeid: e.data.recipelist[o].id,
            collectid: e.data.id,
            unote: e.data.unote
        }, d = a.getParam(i, s);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: d
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[i].error) {
                    var t = e.data.recipelist;
                    t[o].unote = e.data.unote, e.setData({
                        recipelist: t,
                        mask_dialog: !1
                    }), wx.showShareMenu();
                } else e.setData({
                    mask_dialog: !1
                }), wx.showShareMenu(), wx.showToast({
                    icon: "none",
                    title: a.data[i].msg ? a.data[i].msg : "操作失败",
                    duration: 2e3
                });
            },
            fail: function() {
                wx.showToast({
                    icon: "none",
                    title: "操作失败"
                });
            },
            complete: function() {}
        });
    },
    myCatchTouch: function() {},
    mask_close: function() {
        this.setData({
            mask_dialog: !1
        }), wx.showShareMenu();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.subject,
            desc: this.data.username + "的菜单",
            path: "/pages/index/index?type=collect_info&id=" + this.data.id + "&inviteuid=" + a.globalData.uid
        };
    }
});