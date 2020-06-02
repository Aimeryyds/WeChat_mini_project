var a = getApp(), t = !1;

Page({
    data: {
        WeekRecipeList: [],
        haveuid: !1,
        info: 1,
        page: [ 1, 1, 1, 1 ],
        loading: !0,
        loading_end: [ !1, !1, !1, !1 ],
        loading_nodata: [ !1, !1, !1, !1 ],
        loading_fail: !1,
        list: [ [], [], [], [] ],
        status: !0,
        status2: !0,
        mask_login: !1,
        bank_gold: 0,
        bank_time: "--:--:--",
        lasttime: 0,
        tip: "",
        vip: !1,
        FavRecipePic: {
            photolist: [ "", "", "" ],
            recipecollcount: "0"
        },
        refresh: !1,
        lastY: 0
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        });
    },
    onShow: function() {
        var a = this, t = wx.getStorageSync("showmy_info"), e = t || a.data.info;
        1 == wx.getStorageSync("showmy") && (a.setData({
            info: e,
            page: [ 1, 1, 1, 1 ],
            loading: !0,
            loading_end: [ !1, !1, !1, !1 ],
            loading_nodata: [ !1, !1, !1, !1 ],
            loading_fail: !1,
            list: [ [], [], [], [] ],
            lasttime: 0
        }), a.get_id(), wx.setStorageSync("showmy_info", ""));
        var o = wx.getStorageSync("loginerror");
        o && a.setData({
            tip: o
        });
    },
    clickinfo: function() {
        var t = this;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(a) {
                t.get_id(1);
            },
            fail: function() {}
        });
    },
    get_id: function(t) {
        1 == t && wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4
        });
        var e = this;
        a.getId(function(t) {
            if (t > 0) {
                var o = "user_getUserinfo", n = {
                    uid: t
                }, i = a.getParam(o, n);
                wx.request({
                    url: a.globalData.murl5,
                    data: {
                        p: i
                    },
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(t) {
                        if (0 == t.data[o].error) {
                            wx.hideToast();
                            var n = t.data[o].data, i = a.showstaruser(t.data[o].data.uid);
                            if (n.usertotal > 9999 && (n.usertotal = Math.floor(n.usertotal / 1e4 * 10) / 10 + "万"), 
                            n.followedcount > 9999 && (n.followedcount = Math.floor(n.followedcount / 1e4 * 10) / 10 + "万"), 
                            n.followingcount > 9999 && (n.followingcount = Math.floor(n.followingcount / 1e4 * 10) / 10 + "万"), 
                            n.pic = escape(n.avatar), e.setData({
                                haveuid: !0,
                                uid: t.data[o].data.uid,
                                vip: i,
                                userInfo: n
                            }), e.data.info > -1) return e.loadMore(e.data.info), !1;
                        } else wx.showToast({
                            image: "../../image/delete_popmenu.png",
                            title: "出现异常"
                        });
                    }
                });
            } else {
                var l = wx.getStorageSync("loginerror");
                l && e.setData({
                    tip: l
                });
            }
        });
    },
    onPullDownRefresh: function() {
        t = !0;
        var a = this;
        a.setData({
            page: [ 1, 1, 1, 1 ],
            loading: !0,
            loading_end: [ !1, !1, !1, !1 ],
            loading_nodata: [ !1, !1, !1, !1 ],
            loading_fail: !1,
            list: [ [], [], [], [] ]
        }), a.get_id(), wx.stopPullDownRefresh();
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
        3 == a ? this.loadMore_recipe() : 2 == a ? this.loadMore_pai() : 1 == a ? 1 == this.data.page[1] ? this.loadMore_favrecipe() : this.loadMore_collect() : 0 == a && this.loadMore_feed();
    },
    loadMore_recipe: function(t) {
        var e = this, o = e.data.loading_end, n = e.data.loading_nodata;
        if (!o[3] && !n[3] && e.data.status) {
            o[3] = !1, e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var i = "user_getUserRecipe", l = {
                uid: e.data.uid,
                type: 1,
                pageindex: e.data.page[3]
            }, d = a.getParam(i, l);
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
                        var t = e.data.list, l = e.data.page;
                        t[3] = t[3].concat(a.data[i].data), l[3] = l[3] + 1, e.setData({
                            list: t,
                            loading: !1,
                            page: l
                        }), 0 == a.data[i].data.length && (2 == l[3] ? (n[3] = !0, e.setData({
                            loading: !1,
                            loading_nodata: n
                        })) : (o[3] = !0, e.setData({
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
        var e = this, o = e.data.loading_end, n = e.data.loading_nodata;
        if (!o[2] && !n[2] && e.data.status) {
            o[2] = !1, e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var i = "user_getUserPaiList", l = {
                uid: e.data.uid,
                pageindex: e.data.page[2]
            }, d = a.getParam(i, l);
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
                        var t, l = e.data.list, d = e.data.page, s = a.data[i].data;
                        for (t = 0; t < s.length; t++) s[t].photo[0] && (s[t].photo[0].pic = s[t].photo[0].pic.replace("p500GIF", "c320"));
                        l[2] = l[2].concat(s), d[2] = d[2] + 1, e.setData({
                            list: l,
                            loading: !1,
                            page: d
                        }), 0 == a.data[i].data.length && (2 == d[2] ? (n[2] = !0, e.setData({
                            loading: !1,
                            loading_nodata: n
                        })) : (o[2] = !0, e.setData({
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
        var e = this, o = "fav_getUserFavRecipePic", n = {
            uid: e.data.uid
        }, i = a.getParam(o, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: i
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[o].error && e.setData({
                    FavRecipePic: a.data[o].data
                });
            },
            fail: function() {
                e.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {
                e.loadMore_collect();
            }
        });
    },
    loadMore_collect: function(t) {
        var e = this, o = e.data.loading_end, n = e.data.loading_nodata;
        if (!o[1] && !n[1] && e.data.status) {
            o[1] = !1, e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var i = "collect_getUserCollectList", l = {
                pageindex: e.data.page[1]
            }, d = a.getParam(i, l);
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
                        var t = e.data.list, l = e.data.page;
                        t[1] = t[1].concat(a.data[i].data), l[1] = l[1] + 1, e.setData({
                            list: t,
                            loading: !1,
                            page: l
                        }), 0 == a.data[i].data.length && (2 == l[1] ? (n[1] = !0, e.setData({
                            loading: !1,
                            loading_nodata: n
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
                        status: !0,
                        refresh: !1
                    });
                }
            });
        }
    },
    loadMore_feed: function(t) {
        var e = this, o = e.data.loading_end, n = e.data.loading_nodata;
        if (!o[0] && !n[0] && e.data.status) {
            o[0] = !1;
            var i = "feed_getFeedList", l = {
                type: "original",
                lasttime: e.data.lasttime
            }, d = a.getParam(i, l);
            e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            }), wx.request({
                url: a.globalData.murl5,
                data: {
                    p: d
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[i].error) {
                        var t, l = e.data.list, d = a.data[i].data, s = e.data.lasttime, r = e.data.page;
                        for (t = 0; t < d.length; t++) d[t].template_data.commentnote && (d[t].template_data.commentnote = e.get_img_txt(d[t].template_data.commentnote)), 
                        d[t].template_data.reply_summary && (d[t].template_data.reply_summary = e.get_img_txt(d[t].template_data.reply_summary)), 
                        d[t].template_data.replycommentnote && (d[t].template_data.replycommentnote = e.get_img_txt(d[t].template_data.replycommentnote)), 
                        t == d.length - 1 && (s = d[t].template_data.dateline);
                        l[0] = l[0].concat(d), r[0] = r[0] + 1, e.setData({
                            list: l,
                            lasttime: s,
                            page: r,
                            loading: !1
                        }), 0 == a.data[i].data.length && (o[0] = !0, 1 == e.data.page[0] ? (n[0] = !0, 
                        e.setData({
                            loading: !1,
                            loading_nodata: n
                        })) : e.setData({
                            loading_end: o
                        }));
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
    pic_error: function() {
        var a = this.data.userInfo;
        a.avatar = "http://static.meishichina.com/u2/res/n2.jpg", this.setData({
            userInfo: a
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.userInfo.username + "的美食空间",
            imageUrl: this.data.userInfo.avatar,
            path: "/pages/index/index?type=space&uid=" + this.data.uid + "&inviteuid=" + a.globalData.uid
        };
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    },
    onHide: function() {
        wx.setStorageSync("showmy", 0);
    },
    show_mask_login: function() {
        this.setData({
            mask_login: !0
        });
    },
    btn_no: function() {
        this.setData({
            mask_login: !1
        });
    },
    btn_in: function() {
        this.setData({
            mask_login: !1
        });
    },
    btn_phone_login: function() {
        wx.redirectTo({
            url: "../phone_login1/phone_login1"
        });
    },
    get_img_txt: function(a) {
        for (var t = "", e = /(\[em\:)+[a-z0-9]+(\:\])*/gi, o = (t = a.replace(e, function(a) {
            var t = a;
            return t = t.replace("[em:", "******https://static.meishichina.com/u2/i/face/"), 
            t = t.replace(":]", ".gif******");
        })).split("******"), n = [], i = 0; i < o.length; i++) "" != o[i] && (/https:/.test(o[i]) ? n.push({
            type: "img",
            value: o[i]
        }) : n.push({
            type: "txt",
            value: o[i]
        }));
        return n;
    },
    getPhoneNumber: function(a) {
        console.log(a.detail);
    },
    do_dd: function() {
        wx.requestSubscribeMessage({
            tmplIds: [ "ww-yww5vnTFXQ92jyIHzJtbeUUVy85wYbg2_ekGCsOk" ],
            success: function(a) {
                console.log("成功："), console.log(a);
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    handletouchend: function(a) {
        var t = this;
        if (a.changedTouches[0].pageY - this.data.lastY > 100 && 0 == t.data.top) {
            var e = t.data.page, o = t.data.list, n = t.data.loading_end, i = t.data.loading_nodata;
            e[1] = 1, o[1] = [], n[1] = !1, i[1] = !1, t.setData({
                refresh: !0,
                page: e,
                loading_end: n,
                loading_nodata: i,
                list: o
            }), t.loadMore(t.data.info);
        }
    },
    handletouchtart: function(a) {
        var t = this;
        wx.createSelectorQuery().selectAll(".infos").boundingClientRect(function(e) {
            t.setData({
                top: e[0].top,
                lastY: a.changedTouches[0].pageY
            });
        }).exec();
    }
});