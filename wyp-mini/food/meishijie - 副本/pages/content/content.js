var a = getApp();

Page({
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
        vAutoplay: !0,
        hasNextPage: !0,
        openCpdesShow: !1,
        cpdeswShowBtn: "",
        flShowBtn: "",
        showTopbar: !1,
        navbarShow: "",
        swipertip: "",
        rpxR: a.globalData.rpxR,
        showAddXcc: !1,
        recipeHC: [],
        arrivedSwiper: 0,
        vEnd: !1
    },
    add1: function(a) {
        return "string" == typeof a || (a = String(a)), "+" == a.charAt(a.length - 1) ? a : parseInt(a) + 1;
    },
    reduce1: function(a) {
        return "string" == typeof a || (a = String(a)), "+" == a.charAt(a.length - 1) ? a : parseInt(a) - 1;
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
        a.scrollTop > 400 ? (this.setData({
            showTopbar: !0
        }), this.setData) : this.setData({
            showTopbar: !1
        });
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onShareAppMessage: function(a) {
        var t = this;
        return a.from, {
            title: this.data.cpDetail.title,
            path: "/pages/index/index?goContent=" + this.data.recipeId,
            imageUrl: this.data.cpDetail.cover_img.big + "?imageMogr2/gravity/Center/crop/328x262",
            success: function(a) {
                if ("+" == t.data.shareAmount.substr(-1)) ; else {
                    var e = parseInt(t.data.shareAmount) + 1;
                    t.setData({
                        shareAmount: e
                    });
                    var i;
                    for (i in t.data.recipeHC) t.data.recipeHC[i].data.data.id == t.data.recipeId && (t.data.recipeHC[i].data.data.share_amount = e);
                }
            },
            fail: function(a) {}
        };
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/weixin/wenzhang_recommend.php",
            data: {
                format: "json",
                page: t.data.pageNum + 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.data && a.data.data.items && a.data.data.items.length > 0) {
                    t.setData({
                        tjInfo: t.data.tjInfo.concat(a.data.data.items)
                    });
                    var e = t.data.pageNum + 1;
                    t.setData({
                        pageNum: e
                    }), t.setData({
                        requeseDone: !0
                    });
                } else t.setData({
                    hasNextPage: !1
                }), t.setData({
                    bottomline: !0
                }), t.setData({
                    requeseDone: !0
                });
            }
        });
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(a) {
                var t = 750 / a.windowWidth;
                e.setData({
                    rpxR: t
                });
            },
            fail: function() {}
        }), this.setData({
            option: t
        }), wx.getNetworkType({
            success: function(a) {
                "wifi" != a.networkType && e.setData({
                    vAutoplay: !1
                });
            }
        }), e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/search/about_recipe_list",
            data: {
                source: "微信小程序",
                format: "json",
                news_id: t.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(i) {
                if (console.log("列表："), console.log(i), i.data.data && i.data.data.items && i.data.data.items.length > 0) {
                    var o = i.data.data.items;
                    o = e.removeVideoitem(o), e.setData({
                        about_recipe_list: o
                    });
                }
                wx.request({
                    url: a.globalData.newlocalhost + "/recipe/detail",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        id: t.id,
                        uid: a.globalData.userId,
                        token: a.globalData.token
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(i) {
                        if (console.log("成功成功成功成功成功成功成功成功"), console.log(i), i.data.data) if (console.log("成功成功成功成功成功成功成功成1功"), 
                        console.log(e.data.about_recipe_list), e.data.about_recipe_list) (o = e.data.about_recipe_list).unshift(i.data.data), 
                        e.setData({
                            about_recipe_list: o,
                            showpage: !0
                        }); else {
                            var o = [];
                            o.unshift(i.data.data), e.setData({
                                about_recipe_list: o,
                                showpage: !0
                            });
                        }
                        e.setrecipedetail(i);
                        var s = e.data.recipeHC;
                        s.push(i), e.setData({
                            recipeHC: s
                        }), wx.request({
                            url: "https://newapi.meishi.cc/Recipe/YingYang",
                            data: {
                                source: "微信小程序",
                                format: "json",
                                news_id: t.id,
                                type: "YYList"
                            },
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(a) {
                                console.log(a.data), e.setData({
                                    yydata: a.data.data
                                });
                            },
                            fail: function(a) {}
                        }), setTimeout(function() {
                            e.setswiperheight(0), wx.request({
                                url: a.globalData.localhost + "/weixin/wenzhang_recommend.php",
                                data: {
                                    format: "json"
                                },
                                header: {
                                    "content-type": "application/json"
                                },
                                success: function(a) {
                                    a.data.data && a.data.data.items && a.data.data.items.length > 0 && e.setData({
                                        tjInfo: a.data.data.items
                                    });
                                }
                            });
                        }, 1e3);
                    },
                    fail: function(a) {
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
            fail: function(a) {}
        });
    },
    removeVideoitem: function(a) {
        for (var t = 0, e = !0, i = a.length; t < i; e ? t++ : t) a[t] && 3 == a[t].item_type ? (a.splice(t, 1), 
        e = !1) : e = !0;
        return a;
    },
    goNext_about_recipe: function(a) {
        var t = this, e = this.data.about_recipe_list[a.detail.current].id;
        this.loadrecipecontent(e), 0 == a.detail.current ? t.setData({
            swipertip: ""
        }) : t.setData({
            swipertip: a.detail.current + " / " + (t.data.about_recipe_list.length - 1)
        }), a.detail.current > t.data.arrivedSwiper && t.setData({
            arrivedSwiper: a.detail.current
        }), setTimeout(function() {
            t.setswiperheight(a.detail.current);
        }, 1e3);
    },
    setswiperheight: function(a) {
        var t = this, e = 0, i = 0;
        console.log("current:" + a), setTimeout(function() {
            if (t.data.isVideocp) (o = wx.createSelectorQuery()).select("#myVideo" + a).boundingClientRect(), 
            o.exec(function(a) {
                console.log(a), e = a[0].height;
            }); else {
                var o = wx.createSelectorQuery();
                o.select("#topimg" + a).boundingClientRect(), o.exec(function(a) {
                    console.log(a), e = a[0].height;
                });
            }
            var s = wx.createSelectorQuery();
            s.select("#toptitle" + a).boundingClientRect(), s.exec(function(a) {
                console.log(a), i = a[0].height;
            });
            var n = e + i;
            t.setData({
                swiperheight: n
            });
        }, 10);
    },
    loadrecipecontent: function(t) {
        var e, i, o = this, s = !1;
        for (i in o.data.recipeHC) o.data.recipeHC[i].data && o.data.recipeHC[i].data.data.id == t && (s = !0, 
        e = o.data.recipeHC[i]);
        if (s) {
            var n = e;
            o.setrecipedetail(n, 1), o.setData({
                requeseDone: !0
            });
        } else o.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/recipe/detail",
            data: {
                source: "微信小程序",
                format: "json",
                id: t,
                uid: a.globalData.userId,
                token: a.globalData.token
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                o.setrecipedetail(a);
                var t = o.data.recipeHC;
                t.push(a), o.setData({
                    recipeHC: t
                });
            },
            fail: function(a) {
                o.setData({
                    requeseFail: !0
                }), setTimeout(function() {
                    o.setData({
                        requeseDone: !0
                    });
                }, 600);
            }
        });
        wx.request({
            url: "https://newapi.meishi.cc/Recipe/YingYang",
            data: {
                source: "微信小程序",
                format: "json",
                news_id: t,
                type: "YYList"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data), o.setData({
                    yydata: a.data.data
                });
            },
            fail: function(a) {}
        });
    },
    videoEnd: function() {
        this.setData({
            vEnd: !0
        });
    },
    videoPlay: function() {
        this.setData({
            vEnd: !1
        });
    },
    replayVideo: function() {
        this.setData({
            vEnd: !1
        }), console.log(123123), wx.createVideoContext("myVideo0").play();
    },
    setrecipedetail: function(a, t) {
        var e = this;
        1 == t || e.setData({
            requeseFail: !1
        }), 1 == a.data.code ? (e.setData({
            cpDetail: a.data.data,
            faved: a.data.data.is_favored,
            favorAmount: a.data.data.favor_amount_new,
            shareAmount: a.data.data.share_amount,
            recipeId: a.data.data.id
        }), e.data.cpDetail.secondary_ingredient && e.data.cpDetail.secondary_ingredient.length > 4 ? e.setData({
            flShowBtn: "showOpenbtn"
        }) : e.setData({
            flShowBtn: ""
        }), 3 == e.data.cpDetail.recipe_type ? e.setData({
            isVideocp: !0
        }) : e.setData({
            isVideocp: !1
        }), wx.setNavigationBarTitle({
            title: e.data.cpDetail.title
        }), setTimeout(function() {
            var a = wx.createSelectorQuery();
            a.select("#cpdes").boundingClientRect(), wx.getSystemInfo({
                success: function(t) {
                    t.windowHeight;
                    var i = 750 / t.windowWidth;
                    a.exec(function(a) {
                        a[0] && a[0].height * i > 174 ? e.setData({
                            cpdeswShowBtn: "showOpenbtn"
                        }) : e.setData({
                            cpdeswShowBtn: ""
                        });
                    });
                }
            }), e.setData({
                requeseDone: !0
            });
        }, 1e3)) : (e.setData({
            requeseDone: !0
        }), wx.showToast({
            title: "菜谱不存在",
            icon: "none",
            duration: 2e3
        }));
    },
    tapOpenCpdesBtn: function() {
        this.setData({
            cpdeswShowBtn: ""
        });
    },
    tapOpenFlBtn: function() {
        this.setData({
            flShowBtn: ""
        });
    },
    showToastss: function(a) {
        var t = this, e = a.duration, i = a.title;
        t.setData({
            showToast: !0,
            toastTitle: i
        }), setTimeout(function() {
            t.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, e);
    },
    tapFavBtn: function(t) {
        var e = this;
        if (1 == e.data.requesting) ; else if (e.setData({
            requesting: 1
        }), "" != a.globalData.userId && void 0 != a.globalData.userId) e.doFAv(); else {
            var i = t;
            "getUserInfo:fail auth deny" == t.detail.errMsg || wx.request({
                url: a.globalData.localhost + "/v9/winxin_auth.php",
                data: {
                    source: "微信小程序",
                    format: "json",
                    site: "weixin",
                    code: a.globalData.userCode
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    var o = t.data.data.wx_sesson, s = i.detail.encryptedData, n = i.detail.iv;
                    wx.setStorage({
                        key: "wx_sesson",
                        data: o
                    }), wx.request({
                        url: a.globalData.newlocalhost + "/user/weixin_login/",
                        data: {
                            source: "微信小程序",
                            format: "json",
                            site: "weixin",
                            wx_sesson: o,
                            epd: s,
                            iv: n
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(t) {
                            wx.setStorage({
                                key: "userId",
                                data: t.data.data.user_id
                            }), wx.setStorage({
                                key: "token",
                                data: t.data.data.access_token
                            }), wx.setStorage({
                                key: "token_refresh",
                                data: t.data.data.refresh_token
                            }), wx.setStorage({
                                key: "userAvatar",
                                data: t.data.data.avatar
                            }), wx.setStorage({
                                key: "userNickName",
                                data: t.data.data.user_name
                            }), a.globalData.userNickName = t.data.data.user_name, a.globalData.userAvatar = t.data.data.avatar, 
                            a.globalData.userId = t.data.data.user_id, a.globalData.token = t.data.data.access_token, 
                            a.globalData.tokenRefresh = t.data.data.refresh_token, e.doFAv("add");
                        },
                        fail: function() {
                            e.setData({
                                requesting: 0
                            });
                        }
                    });
                },
                fail: function() {
                    e.setData({
                        requesting: 0
                    });
                }
            });
        }
    },
    doFAv: function(t) {
        var e = this;
        if ("add" == t) i = "add"; else if ("del" == t) i = "del"; else var i = "1" == e.data.faved ? "del" : "add";
        e.setData({
            requesting: 1
        }), wx.request({
            url: a.globalData.newlocalhost + "/fav/do_fav_recipe",
            data: {
                source: "微信小程序",
                format: "json",
                item_id: e.data.recipeId,
                uid: a.globalData.userId,
                operate_type: i
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.code) if ("取消收藏成功" == a.data.msg) {
                    wx.showToast({
                        title: "取消收藏成功",
                        icon: "success",
                        duration: 2e3
                    });
                    t = e.reduce1(e.data.favorAmount);
                    e.setData({
                        faved: 0,
                        favorAmount: t
                    });
                    for (i in e.data.recipeHC) e.data.recipeHC[i].data.data.id == e.data.recipeId && (e.data.recipeHC[i].data.data.is_favored = 0, 
                    e.data.recipeHC[i].data.data.favor_amount_new = t);
                } else {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    });
                    var t = e.add1(e.data.favorAmount);
                    e.setData({
                        faved: 1,
                        favorAmount: t
                    });
                    var i;
                    for (i in e.data.recipeHC) e.data.recipeHC[i].data.data.id == e.data.recipeId && (e.data.recipeHC[i].data.data.is_favored = 1, 
                    e.data.recipeHC[i].data.data.favor_amount_new = t);
                }
            },
            complete: function() {
                e.setData({
                    requesting: 0
                });
            }
        });
    }
});