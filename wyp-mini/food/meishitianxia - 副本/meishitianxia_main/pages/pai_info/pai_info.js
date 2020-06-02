var a = getApp(), t = [];

Page({
    data: {
        vote: "",
        vote_allow: !1,
        vote_status: !0,
        haveuid: !1,
        isfav: 0,
        islike: 0,
        loading: !0,
        loading_fail: !1,
        loading_ok: !1,
        p: "",
        page: 1,
        commentlist: [],
        loading_c: !0,
        loading_c_fail: !1,
        loading_c_end: !1,
        status: !0,
        show_tip: !1,
        refresh: 0,
        refresh_b: 0,
        refresh_end: !1,
        refresh_b_end: !1,
        lastY: 0,
        zShowFrom: "",
        slidepai_idx: "",
        vip: !1
    },
    onLoad: function(e) {
        var i = this, o = e.zShowFrom ? e.zShowFrom : "";
        "" == o ? (wx.setStorageSync("slidepai", []), t = []) : (t = wx.getStorageSync("slidepai"), 
        i.setData({
            slidepai_idx: wx.getStorageSync("slidepai").indexOf(e.id)
        })), i.setData({
            id: e.id,
            zShowFrom: o
        }), a.globalData.uid > 0 && i.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                i.setData({
                    statusBarHeight: a.statusBarHeight,
                    height: a.windowHeight
                });
            }
        }), i.loadPai_info();
    },
    loadPai_info: function(e) {
        var i = this, o = "pai_getPaiInfo", n = {
            id: i.data.id
        }, s = a.getParam(o, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[o].error) {
                    var e = a.showstaruser(t.data[o].data.uid);
                    i.setData({
                        p: t.data[o].data,
                        isfav: t.data[o].data.isfav,
                        vip: e
                    }), 3 == t.data[o].data.type && i.getPaiVoteInfo();
                } else t.data[o].error < 0 ? (i.setData({
                    status: !1
                }), wx.redirectTo({
                    url: "/pages/blank404/blank404"
                })) : i.setData({
                    loading_fail: !0
                });
            },
            fail: function() {
                i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {
                "" == i.data.zShowFrom ? i.load_slidePailist("prev", 1) : 0 == i.data.slidepai_idx ? i.load_slidePailist("prev") : i.data.slidepai_idx == t.length - 1 && i.load_slidePailist("next");
            }
        });
    },
    scrolltolower: function() {
        this.loadComment();
    },
    comment_do: function() {
        wx.navigateTo({
            url: "../comment_add/comment_add?type=pai&id=" + this.data.id
        });
    },
    loadComment: function() {
        var t = this;
        t.data.page;
        if (!t.data.loading_c_end && t.data.status) {
            t.setData({
                loading_c: !0,
                loading_c_end: !1,
                loading_c_fail: !1,
                status: !1
            });
            var e = "comment_getCommentList", i = {
                id: t.data.id,
                type: "pai",
                show: "asc",
                pageindex: t.data.page,
                pagesize: 10
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
                    var o, n = i.data[e].data;
                    if (0 == i.data[e].error) {
                        if (null == n) return t.setData({
                            loading_c: !1,
                            loading_c_end: !0
                        }), !1;
                        for (o = 0; o < n.length; o++) n[o].message = t.get_img_txt(n[o].message), n[o].vip = a.showstaruser(n[o].authorid);
                        t.setData({
                            commentlist: t.data.commentlist.concat(n),
                            loading_c: !1,
                            page: t.data.page + 1
                        });
                    } else t.setData({
                        loading_c: !1,
                        loading_c_fail: !0
                    });
                },
                fail: function() {
                    t.setData({
                        loading_c: !1,
                        loading_c_fail: !0
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
    get_img_txt: function(a) {
        for (var t = "", e = /(\[em\:)+[a-z0-9]+(\:\])*/gi, i = /<img.*?(?:>|\/>)/gi, o = (t = (t = (t = (t = a.replace(e, function(a) {
            var t = a;
            return t = t.replace("[em:", "******https://static.meishichina.com/u2/i/face/"), 
            t = t.replace(":]", ".gif******");
        })).replace(i, function(a) {
            return "******https://static.meishichina.com/u2/i/face/" + a.match(/[^\/\s]+\.gif/gi)[0] + "******";
        })).replace(/<div(.*?)\<\/div>/g, "")).replace(/&nbsp;/g, " ")).split("******"), n = [], s = 0; s < o.length; s++) "" != o[s] && (/https:/.test(o[s]) ? n.push({
            type: "img",
            value: o[s]
        }) : n.push({
            type: "txt",
            value: o[s]
        }));
        return n;
    },
    onShow: function() {
        this.setData({
            page: 1,
            commentlist: [],
            loading_c: !0,
            loading_c_fail: !1,
            loading_c_end: !1
        }), this.loadComment();
    },
    onReady: function() {},
    formSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    clickinfo: function(t) {
        var e = this, i = t.currentTarget.dataset.type;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(t) {
                a.getId(function(a) {
                    a > 0 && (e.setData({
                        haveuid: !0
                    }), "vote" == i ? (e.setData({
                        vote_allow: !1
                    }), e.getPaiVoteInfo()) : "comment" == i ? e.comment_do() : "fav" == i ? e.setFavPai() : "like" == i && e.setLikePai());
                });
            }
        });
    },
    getPaiVoteInfo: function() {
        var t = this, e = "pai_getVoteInfo", i = {
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
                if (0 == a.data[e].error) {
                    var i, o, n = a.data[e].data, s = 0;
                    for (i = 0; i < n.optionlist.length; i++) null != n.useroption && n.useroption.indexOf(n.optionlist[i].id) > -1 ? n.optionlist[i].checked = !0 : n.optionlist[i].checked = !1, 
                    1 != n.optionlist[i].istrue || t.data.show_tip || t.setData({
                        show_tip: !0
                    }), s += parseInt(n.optionlist[i].num);
                    for (o = 0; o < n.optionlist.length; o++) n.optionlist[o].percent = 0 == s ? 0 : Math.floor(n.optionlist[o].num / s * 100);
                    t.setData({
                        vote: n
                    });
                }
            }
        });
    },
    radioChange: function(a) {
        a.detail.value && this.setData({
            vote_allow: !0
        });
    },
    checkboxChange: function(a) {
        a.detail.value.length > 0 ? this.setData({
            vote_allow: !0
        }) : this.setData({
            vote_allow: !1
        });
    },
    voteSubmit: function(t) {
        var e = this;
        if (!e.data.vote_allow || !e.data.vote_status) return !1;
        var i = [];
        if (t.detail.value.checkbox) {
            if (t.detail.value.checkbox.length > e.data.vote.choosenum) return wx.showToast({
                title: "最多选择" + e.data.vote.choosenum + "项",
                icon: "none"
            }), !1;
            for (var o = 0; o < t.detail.value.checkbox.length; o++) i.push(t.detail.value.checkbox[o]);
        }
        t.detail.value.radio && i.push(t.detail.value.radio), e.setData({
            vote_status: !1
        }), wx.showToast({
            title: "投票中...",
            icon: "loading"
        });
        var n = {
            vid: e.data.vote.id,
            options: i
        }, s = a.getParam("pai_addVoteLog", n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: s
            },
            success: function(a) {
                0 == a.data.pai_addVoteLog.error ? (wx.hideToast(), e.getPaiVoteInfo(), e.setData({
                    vote_allow: !1
                })) : (e.setData({
                    vote_status: !0
                }), wx.showToast({
                    image: "../../image/delete_popmenu.png",
                    title: "操作失败"
                }));
            },
            fail: function() {
                e.setData({
                    vote_status: !0
                }), wx.showToast({
                    image: "../../image/delete_popmenu.png",
                    title: "操作失败"
                });
            },
            complete: function() {}
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
    do_fav: function(a) {
        var t = this;
        "fav_do" == a.currentTarget.dataset.type ? t.setFavPai() : t.delFavPai();
    },
    setFavPai: function() {
        var t = this;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var e = {
            id: t.data.id
        }, i = a.getParam("fav_addPaiFav", e);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: i
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data.fav_addPaiFav.error ? (t.setData({
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
    delFavPai: function() {
        var t = this, e = {
            id: t.data.id
        }, i = a.getParam("fav_delPaiFav", e);
        wx.showModal({
            content: "真的不再收藏了",
            confirmColor: "#ff6767",
            success: function(e) {
                e.confirm ? wx.request({
                    url: a.globalData.murl5,
                    data: {
                        p: i
                    },
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(a) {
                        0 == a.data.fav_delPaiFav.error && (t.setData({
                            isfav: 0
                        }), wx.hideToast(), wx.showToast({
                            title: "取消成功",
                            icon: "success",
                            duration: 1e3
                        }));
                    },
                    fail: function() {},
                    complete: function() {}
                }) : e.cancel;
            }
        });
    },
    do_like: function(a) {
        var t = this;
        "like_do" == a.currentTarget.dataset.type ? t.setLikePai() : wx.showToast({
            title: "添加成功",
            icon: "none"
        });
    },
    setLikePai: function() {
        var t = this, e = {
            id: t.data.id
        }, i = a.getParam("pai_addLikePai", e);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: i
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data.pai_addLikePai.error && (t.setData({
                    islike: 1
                }), wx.showToast({
                    title: "添加成功",
                    icon: "none",
                    duration: 1e3
                }));
            }
        });
    },
    backindex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    handletouchtart: function(a) {
        var t = this;
        t.data.tag;
        wx.createSelectorQuery().selectAll(".infos").boundingClientRect(function(e) {
            t.setData({
                top1: e[0].top,
                top2: e[1].top,
                lastY: a.changedTouches[0].pageY
            });
        }).exec();
    },
    handletouchmove: function(a) {
        var t = this, e = a.changedTouches[0].pageY - t.data.lastY;
        if (t.data.loading_fail || t.data.loading_c_fail) return !1;
        e > 0 && t.data.top1 > -1 && (e > 100 && !t.data.refresh_end ? t.setData({
            ty: e,
            refresh: 2
        }) : t.setData({
            ty: e,
            refresh: 1
        })), e < 0 && t.data.top2 - t.data.height < 5 && t.data.loading_c_end && (e < -100 && !t.data.refresh_b_end ? t.setData({
            ty: e,
            refresh_b: 2
        }) : t.setData({
            ty: e,
            refresh_b: 1
        }));
    },
    handletouchend: function(a) {
        var t = this;
        2 == t.data.refresh ? t.goto_slidePai("prev") : t.setData({
            refresh: 0
        }), 2 == t.data.refresh_b ? t.goto_slidePai("next") : t.setData({
            refresh_b: 0
        });
    },
    goto_slidePai: function(a) {
        var e, i = this;
        "prev" == a ? e = t[i.data.slidepai_idx - 1] : "next" == a && (e = t[i.data.slidepai_idx + 1]), 
        wx.redirectTo({
            url: "/pages/pai_info/pai_info?id=" + e + "&zShowFrom=" + a
        });
    },
    load_slidePailist: function(e, i) {
        var o = this, n = "prev" == e ? e : "", s = [];
        1 == i && t.push(o.data.id);
        var d = "user_getUserPaiIdList", l = {
            pagesize: 10,
            dateline: o.data.p.posttime,
            uid: o.data.p.uid,
            show: n
        }, r = a.getParam(d, l);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: r
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                var e;
                if (0 == a.data[d].error) {
                    if ("prev" == n) {
                        for (e = a.data[d].data.length - 1; e > -1; e--) s.push(a.data[d].data[e].id);
                        t = s.concat(t);
                    } else {
                        for (e = 0; e < a.data[d].data.length; e++) s.push(a.data[d].data[e].id);
                        t = t.concat(s), 1 == i && o.setData({
                            slidepai_idx: t.indexOf(o.data.id)
                        });
                    }
                    wx.setStorageSync("slidepai", t), o.setData({
                        slidepai_idx: t.indexOf(o.data.id)
                    });
                }
                0 == a.data[d].data.length && ("prev" == n ? o.setData({
                    refresh_end: !0
                }) : o.setData({
                    refresh_b_end: !0
                }));
            },
            fail: function() {
                "prev" == n ? o.setData({
                    refresh_end: !1
                }) : o.setData({
                    refresh_b_end: !1
                });
            },
            complete: function() {
                "prev" == n && 1 == i && o.load_slidePailist("next");
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "帖子",
            path: "/pages/pai/pai?type=pai_info&id=" + this.data.id + "&inviteuid=" + a.globalData.uid
        };
    }
});