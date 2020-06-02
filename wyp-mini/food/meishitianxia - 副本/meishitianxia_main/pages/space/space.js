var a = getApp();

Page({
    data: {
        haveuid: !1,
        WeekRecipeList: [],
        info: 0,
        page: [ 1, 1, 1 ],
        loading: !0,
        loading_end: [ !1, !1, !1 ],
        loading_nodata: [ !1, !1, !1 ],
        loading_fail: !1,
        list: [ [], [], [] ],
        status: !0,
        guanzhu: 3,
        show_guanzhu: !1,
        vip: !1
    },
    onLoad: function(t) {
        var e = this, o = a.globalData.uid != t.uid;
        e.setData({
            uid: t.uid,
            show_guanzhu: o
        }), "pai" == t.info ? e.setData({
            info: 1
        }) : "fav" == t.info && e.setData({
            info: 2
        }), a.globalData.uid > 0 && e.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    height: a.windowHeight
                });
            }
        });
    },
    onShow: function() {
        var t = this, e = a.showstaruser(t.data.uid), o = "user_getUserinfo", i = {
            uid: t.data.uid
        }, n = a.getParam(o, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: n
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[o].error) {
                    var i = a.data[o].data, n = 3;
                    i.usertotal > 9999 && (i.usertotal = Math.floor(i.usertotal / 1e4 * 10) / 10 + "万"), 
                    i.followedcount > 9999 && (i.followedcount = Math.floor(i.followedcount / 1e4 * 10) / 10 + "万"), 
                    i.followingcount > 9999 && (i.followingcount = Math.floor(i.followingcount / 1e4 * 10) / 10 + "万"), 
                    i.guanZhu && (n = i.guanZhu), t.setData({
                        userInfo: i,
                        vip: e,
                        guanzhu: n
                    }), 0 == a.data[o].data.recipecount ? 0 == a.data[o].data.paicount ? (t.setData({
                        info: 2
                    }), t.loadMore(2)) : (t.setData({
                        info: 1
                    }), t.loadMore(1)) : t.loadMore(0);
                } else wx.showToast({
                    image: "../../image/delete_popmenu.png",
                    title: "出现异常"
                });
            }
        });
    },
    list_onReachBottom: function() {
        var a = this;
        this.loadMore(a.data.info);
    },
    my_info: function(a) {
        this.setData({
            info: a.currentTarget.dataset.n
        }), 1 == this.data.page[a.currentTarget.dataset.n] && this.loadMore(a.currentTarget.dataset.n);
    },
    swiper_list_change: function(a) {
        this.setData({
            info: a.detail.current
        }), 1 == this.data.page[a.detail.current] && this.loadMore(a.detail.current);
    },
    loadMore: function(a) {
        0 == a ? this.loadMore_recipe() : 1 == a ? this.loadMore_pai() : 2 == a && this.loadMore_favrecipe();
    },
    loadMore_recipe: function(t) {
        var e = this, o = e.data.loading_end, i = e.data.loading_nodata;
        if (!o[0] && !i[0] && e.data.status) {
            o[0] = !1, e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var n = "user_getUserRecipe", s = {
                uid: e.data.uid,
                type: 1,
                pageindex: e.data.page[0]
            }, d = a.getParam(n, s);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: d
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[n].error) {
                        var t = e.data.list, s = e.data.page;
                        t[0] = t[0].concat(a.data[n].data), s[0] = s[0] + 1, e.setData({
                            list: t,
                            loading: !1,
                            page: s
                        }), 0 == a.data[n].data.length && (2 == s[0] ? (i[0] = !0, e.setData({
                            loading: !1,
                            loading_nodata: i
                        })) : (o[0] = !0, e.setData({
                            loading_end: o
                        })));
                    } else e.setData({
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
    loadMore_pai: function(t) {
        var e = this, o = e.data.loading_end, i = e.data.loading_nodata;
        if (!o[1] && !i[1] && e.data.status) {
            o[1] = !1, e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var n = "user_getUserPaiList", s = {
                uid: e.data.uid,
                pageindex: e.data.page[1]
            }, d = a.getParam(n, s);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: d
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[n].error) {
                        var t, s = e.data.list, d = e.data.page, l = a.data[n].data;
                        for (t = 0; t < l.length; t++) l[t].photo[0] && (l[t].photo[0].pic = l[t].photo[0].pic.replace("p500GIF", "c320"));
                        s[1] = s[1].concat(l), d[1] = d[1] + 1, e.setData({
                            list: s,
                            loading: !1,
                            page: d
                        }), 0 == a.data[n].data.length && (2 == d[1] ? (i[1] = !0, e.setData({
                            loading: !1,
                            loading_nodata: i
                        })) : (o[1] = !0, e.setData({
                            loading_end: o
                        })));
                    } else e.setData({
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
                    });
                }
            });
        }
    },
    loadMore_favrecipe: function(t) {
        var e = this, o = e.data.loading_end, i = e.data.loading_nodata;
        if (!o[2] && !i[2] && e.data.status) {
            o[2] = !1, e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var n = "fav_getUserFavRecipeList", s = {
                uid: e.data.uid,
                pageindex: e.data.page[2]
            }, d = a.getParam(n, s);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: d
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[n].error) {
                        var t = e.data.list, s = e.data.page;
                        t[2] = t[2].concat(a.data[n].data), s[2] = s[2] + 1, e.setData({
                            list: t,
                            loading: !1,
                            page: s
                        }), 0 == a.data[n].data.length && (2 == s[2] ? (i[2] = !0, e.setData({
                            loading: !1,
                            loading_nodata: i
                        }), e.getRandWeekRecipeList()) : (o[2] = !0, e.setData({
                            loading_end: o
                        })));
                    } else e.setData({
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
    getRandWeekRecipeList: function() {
        var t = this, e = "recipe_getRecipeList", o = {
            type: "weekhot",
            pageindex: 1,
            pagesize: 5
        }, i = a.getParam(e, o);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: i
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[e].error && t.setData({
                    WeekRecipeList: a.data[e].data
                });
            }
        });
    },
    pic_error: function() {
        var a = this.data.userInfo;
        a.avatar = "http://static.meishichina.com/u2/res/n2.jpg", this.setData({
            userInfo: a
        });
    },
    clickinfo: function(t) {
        var e = this;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(t) {
                a.getId(function(a) {
                    a > 0 && e.setData({
                        haveuid: !0
                    });
                });
            }
        });
    },
    do_follow: function() {
        var t = this, e = {
            otheruid: t.data.uid
        }, o = a.getParam("follow_followMe", e);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data.follow_followMe.error ? (t.setData({
                    guanzhu: 2
                }), wx.showToast({
                    title: "关注成功",
                    icon: "success",
                    duration: 1e3
                })) : wx.showToast({
                    title: "操作失败，请重试",
                    icon: "none"
                });
            },
            fail: function() {
                wx.showToast({
                    title: "操作失败，请重试",
                    icon: "none"
                });
            }
        });
    },
    do_unfollow: function() {
        var t = this;
        wx.showModal({
            content: "确定要取消关注吗？",
            confirmColor: "#ff6767",
            success: function(e) {
                if (e.confirm) {
                    var o = "follow_unfollowMe", i = {
                        otheruid: t.data.uid
                    }, n = a.getParam(o, i);
                    wx.request({
                        url: a.globalData.murl5,
                        data: {
                            p: n
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(a) {
                            0 == a.data[o].error ? t.setData({
                                guanzhu: 3
                            }) : wx.showToast({
                                title: "操作失败，请重试",
                                icon: "none"
                            });
                        },
                        fail: function() {
                            wx.showToast({
                                title: "操作失败，请重试",
                                icon: "none"
                            });
                        }
                    });
                } else e.cancel;
            }
        });
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.userInfo.username + "的美食空间",
            imageUrl: this.data.userInfo.avatar,
            path: "/pages/index/index?type=space&uid=" + this.data.uid + "&inviteuid=" + a.globalData.uid
        };
    }
});