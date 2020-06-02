var a = getApp(), t = [];

Page({
    data: {
        haveuid: !1,
        title: "",
        isfav: 0,
        islike: 0,
        loading: !0,
        loading_fail: !1,
        loading_ok: !1,
        page: 1,
        commentlist: [],
        timeline: [],
        taglist: [],
        loading_c: !1,
        loading_c_fail: !1,
        loading_c_end: !1,
        status: !0,
        step_down: !1,
        q: "",
        videourl: "",
        isplay: !1,
        show_data: 0,
        refresh: 0,
        refresh_b: 0,
        refresh_end: !1,
        refresh_b_end: !1,
        lastY: 0,
        zShowFrom: "",
        sliderecipe_idx: "",
        vip: !1,
        comment_more: !1,
        swiper_height: "",
        photoallpic: [],
        photoallpic_current: 1,
        mask_dialog: !1,
        page_cl: 1,
        loading_cl: !1,
        loading_cl_end: !1,
        status_cl: !0,
        collectlist: [],
        openapp: !1
    },
    onLoad: function(e) {
        var i, n = this;
        i = void 0 != e.scene && "" != e.scene ? e.scene : e.id;
        var o = e.zShowFrom ? e.zShowFrom : "";
        "" == o ? (wx.setStorageSync("sliderecipe", []), t = []) : (t = wx.getStorageSync("sliderecipe"), 
        n.setData({
            sliderecipe_idx: wx.getStorageSync("sliderecipe").indexOf(i)
        })), a.globalData.uid > 0 && n.setData({
            myuid: a.globalData.uid,
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                n.setData({
                    statusBarHeight: a.statusBarHeight,
                    height: a.windowHeight,
                    width: a.windowWidth
                });
            }
        }), this.setData({
            id: i,
            zShowFrom: o
        }), this.loadRecipe_info();
        var d = wx.getStorageSync("recipeinfo_time") ? wx.getStorageSync("recipeinfo_time") : 0, s = wx.getStorageSync("recipeinfo_num") ? wx.getStorageSync("recipeinfo_num") : 0, c = new Date().getTime();
        s < 4 ? wx.setStorageSync("recipeinfo_time", c) : c > d + 864e5 && (wx.setStorageSync("recipeinfo_time", c), 
        wx.setStorageSync("recipeinfo_num", 0));
    },
    loadRecipe_info: function() {
        var e = this, i = (a.globalData.uid > 0 && a.globalData.uid, "recipe_getRecipeInfo"), n = {
            id: e.data.id
        }, o = a.getParam(i, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[i].error) {
                    if (t.data[i].data.state < 0) return e.setData({
                        status: !1
                    }), wx.redirectTo({
                        url: "/pages/blank404/blank404"
                    }), !1;
                    for (var n = [], o = t.data[i].data.ingredientgroups.ingredient_groups, d = 0; d < o.length; d++) {
                        var s = new Object(), c = [];
                        s.group_name = o[d].group_name;
                        for (var r in o[d].ingredient) {
                            var l = new Object();
                            l.name = r, l.value = o[d].ingredient[r], null != o[d].pinyin && (l.pinyin = o[d].pinyin[r] ? o[d].pinyin[r] : ""), 
                            c.push(l);
                        }
                        s.ingredient = c, n.push(s);
                    }
                    var p = a.showstaruser(t.data[i].data.uid), g = t.data[i].data.photoallpic, u = e.data.width * g[0].pic_h / g[0].pic_w;
                    e.setData({
                        loading: !1,
                        loading_ok: !0,
                        title: t.data[i].data.title,
                        subject: t.data[i].data.subject,
                        pic: t.data[i].data.c640,
                        sosopic: t.data[i].data.sosopic ? t.data[i].data.sosopic : "",
                        username: t.data[i].data.username,
                        avatar: t.data[i].data.avatar,
                        message: t.data[i].data.message,
                        mainingredient: t.data[i].data.mainingredient,
                        ingredients: n,
                        steps: t.data[i].data.steps,
                        tips: t.data[i].data.tips,
                        isfav: t.data[i].data.isfav,
                        uid: t.data[i].data.uid,
                        tags: t.data[i].data.tags,
                        posttime: t.data[i].data.dateline,
                        level: t.data[i].data.level,
                        during: t.data[i].data.during,
                        cuisine: t.data[i].data.cuisine,
                        technics: t.data[i].data.technics,
                        levelid: t.data[i].data.levelid,
                        duringid: t.data[i].data.duringid,
                        cuisineid: t.data[i].data.cuisineid,
                        technicsid: t.data[i].data.technicsid,
                        vip: p,
                        photoallpic: g,
                        swiper_height: u
                    }), t.data[i].data.message.length > 89 && e.setData({
                        show_data: 1
                    }), 1 == t.data[i].data.r4 && e.setData({
                        videourl: t.data[i].data.videoinfo ? t.data[i].data.videoinfo : ""
                    });
                } else t.data[i].error < 0 ? (e.setData({
                    status: !1
                }), wx.redirectTo({
                    url: "/pages/blank404/blank404"
                })) : e.setData({
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
                e.switch_v(), "" == e.data.zShowFrom ? e.load_slideRecipelist("prev", 1) : 0 == e.data.sliderecipe_idx ? e.load_slideRecipelist("prev") : e.data.sliderecipe_idx == t.length - 1 && e.load_slideRecipelist("next");
            }
        });
    },
    gettimeline: function(t) {
        var e = this, i = "adver_getRefreshTimeLineList", n = {
            type: 99
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
                0 == a.data[i].error && e.setData({
                    timeline: a.data[i].data
                });
            },
            complete: function() {
                e.data.tags.length > 0 ? e.getRecipeTagList(e.data.tags[0].id) : e.getRecipeTagList(0);
            }
        });
    },
    getRecipeTagList: function(t) {
        var e = this, i = "recipe_getRecipeSamelikeList", n = {
            tid: t,
            id: e.data.id,
            pagesize: 5,
            title: e.data.title
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
                0 == a.data[i].error && e.setData({
                    taglist: e.data.taglist.concat(a.data[i].data)
                });
            }
        });
    },
    check_url: function(a, t) {
        var e;
        for (e = 0; e < t.length; e++) if (a == t[e].name) return t[e].value;
        return "";
    },
    comment_do: function() {
        var a = this;
        wx.navigateTo({
            url: "../comment_add/comment_add?type=recipe&id=" + a.data.id
        });
    },
    formSubmit: function(a) {},
    do_fav: function(a) {
        var t = this;
        "fav_do" == a.currentTarget.dataset.type ? t.setFavRecipe() : t.delFavRecipe();
    },
    setFavRecipe: function() {
        var t = this;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var e = "recipe_recipeFavById", i = {
            id: t.data.id
        }, n = a.getParam(e, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: n
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
        wx.showModal({
            content: "真的不再收藏了",
            confirmColor: "#ff6767",
            success: function(e) {
                if (e.confirm) {
                    var i = "recipe_unRecipeFavById", n = {
                        id: t.data.id
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
    scrolltolower: function() {
        var a = this;
        0 == a.data.timeline.length && a.gettimeline(), (a.data.timeline.length > 0 || a.data.taglist.length > 0) && a.loadComment();
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
                type: "recipe",
                show: "desc",
                pageindex: t.data.page,
                pagesize: 3
            }, n = a.getParam(e, i);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: n
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(i) {
                    var n, o = i.data[e].data;
                    if (0 == i.data[e].error) {
                        if (null == o) return t.setData({
                            loading_c: !1,
                            loading_c_end: !0
                        }), !1;
                        for (n = 0; n < o.length; n++) o[n].message = t.get_img_txt(o[n].message), o[n].vip = a.showstaruser(o[n].authorid);
                        t.setData({
                            commentlist: t.data.commentlist.concat(o),
                            loading_c: !1,
                            comment_more: 3 == o.length,
                            loading_c_end: !0
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
        for (var t = "", e = /(\[em\:)+[a-z0-9]+(\:\])*/gi, i = /<img.*?(?:>|\/>)/gi, n = (t = (t = (t = (t = a.replace(e, function(a) {
            var t = a;
            return t = t.replace("[em:", "******https://static.meishichina.com/u2/i/face/"), 
            t = t.replace(":]", ".gif******");
        })).replace(i, function(a) {
            return "******https://static.meishichina.com/u2/i/face/" + a.match(/[^\/\s]+\.gif/gi)[0] + "******";
        })).replace(/<div(.*?)\<\/div>/g, "")).replace(/&nbsp;/g, " ")).split("******"), o = [], d = 0; d < n.length; d++) "" != n[d] && (/https:/.test(n[d]) ? o.push({
            type: "img",
            value: n[d]
        }) : o.push({
            type: "txt",
            value: n[d]
        }));
        return o;
    },
    open_timeline: function(t) {
        var e = t.currentTarget.dataset.id, i = t.currentTarget.dataset.adid, n = t.currentTarget.dataset.type, o = t.currentTarget.dataset.url, d = (t.currentTarget.dataset.app, 
        {
            mid: i,
            type: "timeline",
            order: 0
        }), s = a.getParam("adver_mSetAdClick", d);
        switch (wx.request({
            url: a.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            }
        }), n) {
          case "collect":
            wx.navigateTo({
                url: "/pages/collect_info/collect_info?id=" + e
            });
            break;

          case "recipe":
            wx.navigateTo({
                url: "/pages/recipe_info/recipe_info?id=" + e
            });
            break;

          case "pai":
            wx.navigateTo({
                url: "/pages/pai_info/pai_info?id=" + e
            });
            break;

          case "mofang":
            wx.navigateTo({
                url: "/pages/mofang_info/mofang_info?domain=" + e
            });
            break;

          case "article":
            wx.navigateTo({
                url: "/pages/health_detail/health_detail?id=" + e
            });
            break;

          case "event":
            wx.navigateTo({
                url: "/pages/event_info/event_info?id=" + e
            });
            break;

          case "miniprogram":
            e && "wxe345ce9de63a222d" != e ? wx.navigateToMiniProgram({
                appId: e,
                path: o
            }) : wx.navigateTo({
                url: "/" + o
            });
            break;

          default:
            return;
        }
    },
    onShow: function(t) {
        var e = this;
        1 == wx.getStorageSync("showcomment") && (e.setData({
            loading_c: !0,
            loading_c_end: !1,
            loading_c_fail: !1,
            commentlist: []
        }), e.loadComment(), wx.setStorageSync("showcomment", 0)), a.globalData.openapp && e.setData({
            openapp: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReady: function() {},
    clickinfo: function(t) {
        var e = this, i = t.currentTarget.dataset.type;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(t) {
                a.getId(function(a) {
                    a > 0 && (e.setData({
                        haveuid: !0
                    }), "comment" == i ? e.comment_do() : "fav" == i ? e.setFavRecipe() : "like" == i && e.setLikeRecipe());
                });
            }
        });
    },
    recipe_step: function(a) {
        var t = a.currentTarget.dataset.idx, e = this.data.tags[0] ? this.data.tags[0].id : 102;
        wx.navigateTo({
            url: "/pages/recipe_step/recipe_step?id=" + this.data.id + "&current=" + t + "&tagid=" + e
        });
    },
    step_down: function() {
        this.setData({
            step_down: !0
        });
    },
    do_backhome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    bindKeyInput: function(a) {
        this.setData({
            q: a.detail.value
        });
    },
    do_search: function(a) {
        wx.navigateTo({
            url: "../search/search?q=" + this.data.q
        });
    },
    searchSubmit: function(t) {
        a.save_formid(t.detail.formId), wx.navigateTo({
            url: "../search/search?q=" + this.data.q
        });
    },
    do_play: function() {
        this.setData({
            isplay: !0
        });
    },
    recipe_info_ingredient: function() {},
    recipe_info_category: function() {},
    recipe_info_recommend: function() {},
    timelineSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    open_tplist: function(a) {
        var t = a.currentTarget.dataset.view;
        1 == t ? wx.navigateTo({
            url: "/pages/tag/tag"
        }) : 2 == t ? wx.navigateTo({
            url: "/pages/ingredient/ingredient"
        }) : 7 == t && wx.switchTab({
            url: "/pages/index/index"
        });
    },
    backindex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    fulishe: function() {
        wx.navigateTo({
            url: "/pages/goods/goods"
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
        2 == t.data.refresh ? t.goto_slideRecipe("prev") : t.setData({
            refresh: 0
        }), 2 == t.data.refresh_b ? t.goto_slideRecipe("next") : t.setData({
            refresh_b: 0
        });
    },
    goto_slideRecipe: function(a) {
        var e, i = this;
        "prev" == a ? e = t[i.data.sliderecipe_idx - 1] : "next" == a && (e = t[i.data.sliderecipe_idx + 1]), 
        wx.redirectTo({
            url: "/pages/recipe_info/recipe_info?id=" + e + "&zShowFrom=" + a
        });
    },
    load_slideRecipelist: function(e, i) {
        var n = this, o = "prev" == e ? e : "", d = [];
        1 == i && t.push(n.data.id);
        var s = "user_getUserRecipeIdList", c = {
            pagesize: 10,
            dateline: n.data.posttime,
            uid: n.data.uid,
            show: o
        }, r = a.getParam(s, c);
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
                if (0 == a.data[s].error) {
                    if ("prev" == o) {
                        for (e = a.data[s].data.length - 1; e > -1; e--) d.push(a.data[s].data[e].id);
                        t = d.concat(t);
                    } else {
                        for (e = 0; e < a.data[s].data.length; e++) d.push(a.data[s].data[e].id);
                        t = t.concat(d), 1 == i && n.setData({
                            sliderecipe_idx: t.indexOf(n.data.id)
                        });
                    }
                    wx.setStorageSync("sliderecipe", t), n.setData({
                        sliderecipe_idx: t.indexOf(n.data.id)
                    });
                }
                0 == a.data[s].data.length && ("prev" == o ? n.setData({
                    refresh_end: !0
                }) : n.setData({
                    refresh_b_end: !0
                }));
            },
            fail: function() {
                "prev" == o ? n.setData({
                    refresh_end: !1
                }) : n.setData({
                    refresh_b_end: !1
                });
            },
            complete: function() {
                "prev" == o && 1 == i && n.load_slideRecipelist("next");
            }
        });
    },
    goheight: function(a) {
        var t = this, e = a.detail.current, i = t.data.width * t.data.photoallpic[e].pic_h / t.data.photoallpic[e].pic_w;
        t.setData({
            swiper_height: i,
            photoallpic_current: e + 1
        });
    },
    previewImage: function(a) {
        return !1;
    },
    collect_do: function() {
        var a = this;
        a.load_collectlist(), a.setData({
            mask_dialog: !0
        });
    },
    myCatchTouch: function() {},
    mask_close: function() {
        this.setData({
            mask_dialog: !1,
            page_cl: 1,
            loading_cl: !1,
            loading_cl_end: !1,
            status_cl: !0,
            collectlist: []
        });
    },
    do_addcollect: function() {
        var a = this, t = a.data.tags[0].tagname ? a.data.tags[0].tagname : "";
        wx.navigateTo({
            url: "/pages/collect_add/collect_add?subject=" + t
        }), a.mask_close();
    },
    load_collectlist: function() {
        var t = this, e = t.data.page_cl;
        if (!t.data.loading_cl_end && t.data.status_cl) {
            t.setData({
                loading_cl: !0,
                status_cl: !1
            });
            var i = "collect_getUserCollectList", n = {
                pageindex: e,
                id: t.data.id
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
                    if (0 == a.data[i].error) {
                        var n = t.data.collectlist.concat(a.data[i].data);
                        t.setData({
                            collectlist: n,
                            loading_cl: !1,
                            page_cl: e + 1
                        }), a.data[i].data.length < 10 && t.setData({
                            loading_cl: !1,
                            loading_cl_end: !0
                        });
                    }
                },
                fail: function() {},
                complete: function() {
                    t.setData({
                        status_cl: !0
                    });
                }
            });
        }
    },
    collect_tolower: function() {
        this.load_collectlist();
    },
    do_collect: function(t) {
        var e = this, i = t.currentTarget.dataset.isfav, n = t.currentTarget.dataset.collectid, o = 1 == i ? "recipe_unRecipeFavById" : "recipe_recipeFavById", d = {
            collectid: n,
            id: e.data.id
        }, s = a.getParam(o, d);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[o].error && e.mask_close();
            },
            fail: function() {},
            complete: function() {}
        });
    },
    onShareAppMessage: function() {
        return {
            title: "学好菜，跟我来！" + this.data.title,
            imageUrl: this.data.pic,
            path: "/pages/index/index?type=recipe_info&id=" + this.data.id + "&inviteuid=" + a.globalData.uid
        };
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    },
    launchAppError: function(a) {
        console.log(a), wx.showToast({
            icon: "none",
            title: "请下载客户端"
        });
    }
});