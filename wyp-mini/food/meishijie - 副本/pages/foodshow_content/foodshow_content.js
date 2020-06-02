function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = getApp();

Page((t = {
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        backiconUrl: "../../images/nav_icon_black.png",
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        searchIconwhite: "../../images/searchiconwhite.png",
        moreArrowBlue: "../../images/more_arrow_blue.png",
        arrowicon: "../../images/arrow.png",
        defaultimg: "",
        icon11: "../../images/fsc_i1_1.png",
        icon21: "../../images/fsc_i2_1.png",
        icon22: "../../images/fsc_i2_2.png",
        icon31: "../../images/fsc_i3_1.png",
        icon41: "../../images/fsc_i4_1.png",
        icon42: "../../images/fsc_i4_2.png",
        fsc_icon: "../../images/fsc_icon.png",
        icon1936_1: "../../images/icon1936_1.png",
        icon1936_2: "../../images/icon1936_2.png",
        addXccimg: "../../images/addXccimg.png",
        recipeId: "",
        indicatorDots: !0,
        autoplay: !1,
        interval: 5e3,
        duration: 400,
        circular: !0,
        indicatorColor: "rgba(255, 255, 255,.5)",
        indicatorActiveColor: "rgba(255, 81, 81, 1)",
        addfavicon: "../../images/rd_b_sc@3x.png",
        addfavedicon: "../../images/rd_b_sc_h@3x.png",
        shareicon: "../../images/rd_w_fx@3x.png",
        faved: 0,
        showToast: !1,
        toastTitle: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0,
        showpage: !1,
        vAutoplay: !1,
        vAutoplay_first: !0,
        hasNextPage: !0,
        openCpdesShow: !1,
        cpdeswShowBtn: "",
        flShowBtn: "",
        showTopbar: !1,
        navbarShow: "",
        swipertip: "",
        rpxR: e.globalData.rpxR,
        showAddXcc: !1,
        recipeHC: [],
        arrivedSwiper: 0,
        emptystring: "",
        showBottombar: !0
    },
    showbigimg: function(a) {
        var t = this, e = a.currentTarget.dataset.img, o = a.currentTarget.dataset.index, s = [];
        t.data.showData_items[o].cook.top_list.forEach(function(a) {
            a.vendor_video || s.push(a.img);
        }), wx.previewImage({
            current: e,
            urls: s
        });
    },
    isNumber: function(a) {
        var t = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
        return !(!/^\d+(\.\d+)?$/.test(a) && !t.test(a));
    },
    addXcc: function() {
        this.setData({
            showAddXcc: !0
        });
    },
    hideAddXcc: function() {
        this.setData({
            showAddXcc: !1
        });
    },
    onPageScroll: function(a) {
        a.scrollTop > 400 ? this.setData({
            showTopbar: !0
        }) : this.setData({
            showTopbar: !1
        });
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onShareAppMessage: function(a) {
        console.log(a);
        var t = a.target.dataset.index, e = this;
        return a.from, {
            title: e.data.showData_items[t].cook.share.share_title,
            path: "/pages/index/index?goFsContent=" + e.data.showData_items[t].food_id,
            imageUrl: e.data.showData_items[t].cook.share.share_img
        };
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onReachBottom: function() {
        this.data.current_page < this.data.total_page && this.loadMore();
    },
    pauseVideo: function() {
        var a = this;
        for (var t in a.data.showData_items) wx.createVideoContext("myVideo" + t).pause();
    },
    onHide: function() {
        var a = this;
        for (var t in a.data.showData_items) wx.createVideoContext("myVideo" + t).pause();
    }
}, a(t, "onPageScroll", function(a) {
    a.scrollTop > 600 ? this.setData({
        showBottombar: !1
    }) : this.setData({
        showBottombar: !0
    });
}), a(t, "sendPl", function(a) {
    var t = this;
    console.log(a.detail), wx.request({
        url: e.globalData.localhost + "/v9/post_comment_cook_my_applet.php",
        data: {
            source: "微信小程序",
            format: "json",
            token: e.globalData.token,
            user_id: e.globalData.userId,
            cid: a.currentTarget.dataset.id,
            content: a.detail.value
        },
        header: {
            "content-type": "application/json"
        },
        success: function(a) {
            console.log("提交评论："), console.log(a), 1 == a.data.code ? t.showToastss({
                title: "评论" + a.data.msg,
                duration: 2e3
            }) : t.showToastss({
                title: a.data.msg,
                duration: 2e3
            }), t.setData({
                emptystring: ""
            });
        },
        fail: function(a) {}
    });
}), a(t, "loadMore", function() {
    var a = this;
    a.setData({
        requeseDone: !1
    }), a.data.current_page < a.data.total_page && wx.request({
        url: e.globalData.newlocalhost + "/Foodbask/foodbask_detail",
        data: {
            source: "微信小程序",
            format: "json",
            id: a.data.option.id,
            page: parseInt(a.data.current_page) + 1,
            token: e.globalData.token
        },
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            console.log("追加内容："), console.log(t), a.setData({
                showData_items: a.data.showData_items.concat(t.data.data.items),
                requeseDone: !0,
                current_page: t.data.data.current_page
            });
        },
        fail: function(a) {}
    });
}), a(t, "onShow", function() {
    var a = this;
    wx.getNetworkType({
        success: function(t) {
            "wifi" != t.networkType || wx.createVideoContext("myVideo" + a.data.playing).play();
        }
    });
}), a(t, "swipeit", function(a) {
    var t = a.detail.current, e = a.currentTarget.dataset.swiperid;
    console.log(e), t > 0 ? wx.createVideoContext("myVideo" + e).pause() : wx.createVideoContext("myVideo" + e).play();
}), a(t, "playthis", function(a) {
    var t = this;
    t.setData({
        playing: a.currentTarget.dataset.index
    });
    for (var e in t.data.showData_items) e != a.currentTarget.dataset.index && wx.createVideoContext("myVideo" + e).pause();
}), a(t, "onLoad", function(a) {
    var t = this;
    wx.getSystemInfo({
        success: function(a) {
            var e = 750 / a.windowWidth;
            t.setData({
                rpxR: e
            });
        },
        fail: function() {}
    }), this.setData({
        option: a
    }), e.globalData.token ? t.setData({
        is_login: !0
    }) : t.setData({
        is_login: !1
    }), wx.getNetworkType({
        success: function(a) {
            "wifi" != a.networkType && t.setData({
                vAutoplay_first: !1
            });
        }
    }), t.setData({
        requeseDone: !1
    }), wx.request({
        url: e.globalData.newlocalhost + "/Foodbask/foodbask_detail",
        data: {
            source: "微信小程序",
            format: "json",
            id: a.id,
            page: 1,
            token: e.globalData.token
        },
        header: {
            "content-type": "application/json"
        },
        success: function(a) {
            console.log("内容："), console.log(a), t.setData({
                showData: a.data.data,
                showData_items: a.data.data.items,
                requeseDone: !0,
                current_page: a.data.data.current_page,
                total_page: a.data.data.total_page
            });
        },
        fail: function(a) {}
    });
}), a(t, "showToastss", function(a) {
    var t = this, e = a.duration, o = a.title;
    t.setData({
        showToast: !0,
        toastTitle: o
    }), setTimeout(function() {
        t.setData({
            showToast: !1,
            toastTitle: ""
        });
    }, e);
}), a(t, "tapFavBtn", function(a) {
    var t = this, o = a.currentTarget.dataset.index, s = a.currentTarget.dataset.type;
    if (console.log("index:"), console.log(o), 1 == t.data.requesting) ; else if (t.setData({
        requesting: 1
    }), "" != e.globalData.userId && void 0 != e.globalData.userId) "dofav" == s ? t.doFAv("", o) : "dozan" == s && t.doZan("", o); else {
        var n = a;
        "getUserInfo:fail auth deny" == a.detail.errMsg || wx.request({
            url: e.globalData.localhost + "/v9/winxin_auth.php",
            data: {
                source: "微信小程序",
                format: "json",
                site: "weixin",
                code: e.globalData.userCode
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                var i = a.data.data.wx_sesson, r = n.detail.encryptedData, c = n.detail.iv;
                wx.setStorage({
                    key: "wx_sesson",
                    data: i
                }), wx.request({
                    url: e.globalData.newlocalhost + "/user/weixin_login/",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        site: "weixin",
                        wx_sesson: i,
                        epd: r,
                        iv: c
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        if (wx.setStorage({
                            key: "userId",
                            data: a.data.data.user_id
                        }), wx.setStorage({
                            key: "token",
                            data: a.data.data.access_token
                        }), wx.setStorage({
                            key: "token_refresh",
                            data: a.data.data.refresh_token
                        }), wx.setStorage({
                            key: "userAvatar",
                            data: a.data.data.avatar
                        }), wx.setStorage({
                            key: "userNickName",
                            data: a.data.data.user_name
                        }), e.globalData.userNickName = a.data.data.user_name, e.globalData.userAvatar = a.data.data.avatar, 
                        e.globalData.userId = a.data.data.user_id, e.globalData.token = a.data.data.access_token, 
                        e.globalData.tokenRefresh = a.data.data.refresh_token, "dofav" == s) t.doFAv("add", o); else if ("dozan" == s) t.doZan("zan", o); else if ("dopl" == s) {
                            e.globalData.token ? t.setData({
                                is_login: !0
                            }) : t.setData({
                                is_login: !1
                            });
                            var n = [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,  ];
                            n.splice(o, 0, !0), t.setData({
                                isfocus: n
                            });
                        }
                    },
                    fail: function() {
                        t.setData({
                            requesting: 0
                        });
                    }
                });
            },
            fail: function() {
                t.setData({
                    requesting: 0
                });
            }
        });
    }
}), a(t, "doFAv", function(t, o) {
    var s = this;
    if ("add" == t) n = "add"; else if ("del" == t) n = "del"; else var n = "1" == s.data.showData_items[o].cook.is_favor ? "del" : "add";
    s.setData({
        requesting: 1
    }), wx.request({
        url: e.globalData.newlocalhost + "/Fav/foodbask_fav/",
        data: {
            source: "微信小程序",
            format: "json",
            food_id: s.data.showData_items[o].food_id,
            uid: e.globalData.userId,
            token: e.globalData.token,
            type: n
        },
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            if (console.log(t), t.data.code) if ("取消成功" == t.data.msg) {
                var e;
                wx.showToast({
                    title: "取消收藏成功",
                    icon: "success",
                    duration: 2e3
                });
                c = parseInt(s.data.showData_items[o].cook.favor_amount);
                s.isNumber(c) && (c -= 1);
                var n = "showData_items[" + o + "].cook.favor_amount", i = "showData_items[" + o + "].cook.is_favor";
                s.setData((e = {}, a(e, i, 0), a(e, n, c), e));
            } else if ("收藏成功" == t.data.msg) {
                var r;
                wx.showToast({
                    title: "收藏成功",
                    icon: "success",
                    duration: 2e3
                });
                var c = parseInt(s.data.showData_items[o].cook.favor_amount);
                s.isNumber(c) && (c += 1);
                var n = "showData_items[" + o + "].cook.favor_amount", i = "showData_items[" + o + "].cook.is_favor";
                s.setData((r = {}, a(r, i, 1), a(r, n, c), r));
            } else console.log("收藏异常");
        },
        complete: function() {
            s.setData({
                requesting: 0
            });
        }
    });
}), a(t, "add1", function(a) {
    return "string" == typeof a || (a = String(a)), "+" == a.charAt(a.length - 1) ? a : parseInt(a) + 1;
}), a(t, "reduce1", function(a) {
    return "string" == typeof a || (a = String(a)), "+" == a.charAt(a.length - 1) ? a : parseInt(a) - 1;
}), a(t, "avatarFilter", function(a, t) {
    for (var e = [], o = 0, s = 0; s < a.length; s++) a[s].user_id != t.user_id ? e.push(a[s]) : o = 1;
    return 0 == o && e.unshift(t), console.log(e), e;
}), a(t, "doZan", function(t, o) {
    var s = this;
    if ("zan" == t) n = "zan"; else if ("remove" == t) n = "remove"; else var n = "1" == s.data.showData_items[o].cook.is_zan ? "remove" : "zan";
    s.setData({
        requesting: 1
    }), wx.request({
        url: e.globalData.newlocalhost + "/foodbask/foodbask_zan",
        data: {
            source: "微信小程序",
            format: "json",
            cid: s.data.showData_items[o].food_id,
            user_id: e.globalData.userId,
            token: e.globalData.token,
            action: n
        },
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            if (console.log(t), t.data.code) if ("取消点赞成功" == t.data.msg) {
                var n, i = "showData_items[" + o + "].cook.zan_num", r = "showData_items[" + o + "].cook.is_zan", c = "showData_items[" + o + "].cook.zan_users", d = s.reduce1(s.data.showData_items[o].cook.zan_num), l = {
                    if_v: "",
                    user_id: e.globalData.userId,
                    avatar: e.globalData.userAvatar
                }, u = s.avatarFilter(s.data.showData_items[o].cook.zan_users, l);
                s.setData((n = {}, a(n, r, "0"), a(n, i, d), a(n, c, u), n));
            } else {
                var g, i = "showData_items[" + o + "].cook.zan_num", r = "showData_items[" + o + "].cook.is_zan", c = "showData_items[" + o + "].cook.zan_users", d = s.add1(s.data.showData_items[o].cook.zan_num), l = {
                    if_v: "",
                    user_id: e.globalData.userId,
                    avatar: e.globalData.userAvatar
                }, u = s.avatarFilter(s.data.showData_items[o].cook.zan_users, l);
                s.setData((g = {}, a(g, r, "1"), a(g, i, d), a(g, c, u), g));
            }
        },
        complete: function() {
            s.setData({
                requesting: 0
            });
        }
    });
}), t));