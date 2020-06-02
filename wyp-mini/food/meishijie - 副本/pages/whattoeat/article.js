function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        backiconUrl: "../../images/nav_icon_black.png",
        searchIconwhite: "../../images/searchiconwhite.png",
        moreArrowBlue: "../../images/more_arrow_blue.png",
        addXccimg: "../../images/addXccimg.png",
        articleId: "",
        indicatorDots: !0,
        icon11: "../../images/fsc_i1_1.png",
        icon21: "../../images/fsc_i2_1.png",
        icon22: "../../images/fsc_i2_2.png",
        icon31: "../../images/fsc_i3_1.png",
        icon41: "../../images/fsc_i4_1.png",
        icon42: "../../images/fsc_i4_2.png",
        fsc_icon: "../../images/fsc_icon.png",
        icon1936_1: "../../images/icon1936_1.png",
        icon1936_2: "../../images/icon1936_2.png",
        addfavicon: "../../images/rd_b_sc@3x.png",
        addfavedicon: "../../images/rd_b_sc_h@3x.png",
        shareicon: "../../images/rd_b_fx@3x.png",
        faved: 0,
        showToast: !1,
        toastTitle: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0,
        vAutoplay: !0,
        showAddXcc: !1,
        showdlbox: !1,
        dlsuccesstip: ""
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
    shutdlbox: function() {
        this.setData({
            showdlbox: !1
        });
    },
    showdlbox: function() {
        this.setData({
            showdlbox: !0
        });
    },
    launchAppError: function(a) {
        console.log(a), this.showdlbox();
    },
    dlqrcode: function() {
        var a = this;
        "✓ 保存成功" == a.data.dlsuccesstip || wx.saveImageToPhotosAlbum({
            filePath: "/images/dlqrcode.png",
            success: function(t) {
                console.log("res"), a.setData({
                    dlsuccesstip: "✓ 保存成功"
                });
            }
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
        var t = this;
        return a.from, {
            title: this.data.articleDetail.title,
            path: "/pages/index/index?goArticle=" + this.data.articleId,
            imageUrl: this.data.articleDetail.cover_img.big + "?imageMogr2/gravity/Center/crop/328x262",
            success: function(a) {
                if ("+" == t.data.shareAmount.substr(-1)) ; else {
                    var e = parseInt(t.data.shareAmount) + 1;
                    t.setData({
                        shareAmount: e
                    });
                }
            },
            fail: function(a) {}
        };
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onShow: function(a) {
        this.onLoad(this.data.option);
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            articleId: a.id
        }), this.setData({
            option: a
        }), t.globalData.token ? e.setData({
            is_login: !0
        }) : e.setData({
            is_login: !1
        }), wx.getNetworkType({
            success: function(a) {
                "wifi" != a.networkType && e.setData({
                    vAutoplay: !1
                });
            }
        }), e.setData({
            requeseDone: !1
        }), wx.request({
            url: t.globalData.apph5localhost + "/article/weixin_detail.php",
            data: {
                source: "微信小程序",
                format: "json",
                id: a.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data);
                var t = a.data.data.content;
                t = (t = (t = t.replace(/\<img/gi, '<img style="width:100%;height:auto;margin:10px 0px!important;padding:0px!important;border:0px!important;font-size:0px!important;float:left;" ')).replace(/\<p/gi, '<p style="padding:0px 0px 0px 0px;margin:10px 0px;font-size:16px;line-height:24px;font-weight:400;color:#666;" ')).replace(/\<strong/gi, '<strong style="font-weight:600;color:#333;" '), 
                e.setData({
                    nodes: t
                }), console.log(t);
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
        }), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/comment",
            data: {
                source: "微信小程序",
                format: "json",
                article_id: a.id,
                type: "detail",
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("评论data"), console.log(a.data), e.setData({
                    pllist: a.data
                });
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
        }), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/detail",
            data: {
                source: "微信小程序",
                format: "json",
                id: a.id,
                uid: t.globalData.userId,
                act: 2,
                token: t.globalData.token
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data), e.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 600), e.setData({
                    articleDetail: a.data.data,
                    faved: a.data.data.is_collection,
                    favorAmount: "" == a.data.data.favor_amount ? "0" : a.data.data.favor_amount,
                    shareAmount: "" == a.data.data.share_amount ? "0" : a.data.data.share_amount,
                    shortTitle: a.data.data.title.substring(0, 6) + "..."
                }), e.data.articleDetail.video.height > 0 && e.setData({
                    isVideocp: !0
                }), wx.setNavigationBarTitle({
                    title: e.data.articleDetail.title
                });
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
        }), wx.request({
            url: t.globalData.newlocalhost + "/knowledge/recommend",
            data: {
                source: "微信小程序",
                format: "json",
                article_id: a.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data), e.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 600), e.setData({
                    recommend_list: a.data.data
                });
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
    showToastss: function(a) {
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
    },
    tapFavBtn: function(a) {
        var e = this, o = a.currentTarget.dataset.type;
        if (console.log("index:"), console.log(0), 1 == e.data.requesting) ; else if (e.setData({
            requesting: 1
        }), "" != t.globalData.userId && void 0 != t.globalData.userId) "dofav" == o ? e.doFAv("", 0) : "dozan" == o && e.doZan("", 0), 
        console.log(t.globalData.userId); else {
            var s = a;
            "getUserInfo:fail auth deny" == a.detail.errMsg ? (console.log("fail"), e.setData({
                requesting: 0
            })) : wx.request({
                url: t.globalData.localhost + "/v9/winxin_auth.php",
                data: {
                    source: "微信小程序",
                    format: "json",
                    site: "weixin",
                    code: t.globalData.userCode
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    var i = a.data.data.wx_sesson, n = s.detail.encryptedData, l = s.detail.iv;
                    wx.setStorage({
                        key: "wx_sesson",
                        data: i
                    }), wx.request({
                        url: t.globalData.newlocalhost + "/user/weixin_login/",
                        data: {
                            source: "微信小程序",
                            format: "json",
                            site: "weixin",
                            wx_sesson: i,
                            epd: n,
                            iv: l
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(a) {
                            wx.setStorage({
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
                            }), t.globalData.userNickName = a.data.data.user_name, t.globalData.userAvatar = a.data.data.avatar, 
                            wx.setStorage({
                                key: "userAvatar",
                                data: a.data.data.avatar
                            }), wx.setStorage({
                                key: "userNickName",
                                data: a.data.data.user_name
                            }), t.globalData.userNickName = a.data.data.user_name, t.globalData.userAvatar = a.data.data.avatar, 
                            t.globalData.userId = a.data.data.user_id, t.globalData.token = a.data.data.access_token, 
                            t.globalData.tokenRefresh = a.data.data.refresh_token, "dofav" == o ? e.doFAv("add", 0) : "dozan" == o ? e.doZan("zan", 0) : "dopl" == o && (t.globalData.token ? e.setData({
                                is_login: !0
                            }) : e.setData({
                                is_login: !1
                            }), e.setData({
                                isfocus: !0
                            }), e.setData({
                                requesting: 0
                            }));
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
    sendPl: function(a) {
        var e = this;
        console.log(a.detail), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/comment_add",
            data: {
                source: "微信小程序",
                format: "json",
                token: t.globalData.token,
                uid: t.globalData.userId,
                article_id: e.data.option.id,
                content_text: a.detail.value,
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                if (console.log("提交评论："), console.log(o), 1 == o.data.code) {
                    e.showToastss({
                        title: "评论成功",
                        duration: 2e3
                    }), e.setData({
                        "articleDetail.comment_amount_new": e.add1(e.data.articleDetail.comment_amount_new)
                    });
                    var s = [ {
                        comment_id: "",
                        content: a.detail.value,
                        create_time: "刚刚",
                        user_info: {
                            avatar_url: t.globalData.userAvatar,
                            id: t.globalData.userId,
                            if_v: "",
                            nickname: t.globalData.userNickName
                        }
                    } ];
                    e.data.pllist.data && e.data.pllist.data.items && e.data.pllist.data.items.length > 0 ? e.setData({
                        "pllist.data.items": s.concat(e.data.pllist.data.items)
                    }) : e.setData({
                        "pllist.data.items": s
                    });
                } else e.showToastss({
                    title: o.data.msg,
                    duration: 2e3
                });
                e.setData({
                    emptystring: ""
                });
            },
            fail: function(a) {}
        });
    },
    doFAv: function(e, o) {
        var s = this;
        if ("add" == e) i = "add"; else if ("del" == e) i = "del"; else var i = "1" == s.data.articleDetail.is_collection ? "del" : "add";
        s.setData({
            requesting: 1
        }), wx.request({
            url: t.globalData.newlocalhost + "/fav/do_fav_recipe",
            data: {
                source: "微信小程序",
                format: "json",
                item_id: s.data.option.id + ":3",
                in_detail: 1,
                uid: t.globalData.userId,
                operate_type: i,
                token: t.globalData.token
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t), t.data.code) if ("取消收藏成功" == t.data.msg) {
                    var e;
                    wx.showToast({
                        title: "取消收藏成功",
                        icon: "success",
                        duration: 2e3
                    });
                    l = parseInt(s.data.articleDetail.favor_amount);
                    s.isNumber(l) && (l -= 1);
                    var o = "articleDetail.favor_amount", i = "articleDetail.is_collection";
                    s.setData((e = {}, a(e, i, 0), a(e, o, l), e));
                } else if ("增加成功" == t.data.msg) {
                    var n;
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    });
                    var l = parseInt(s.data.articleDetail.favor_amount);
                    s.isNumber(l) && (l += 1);
                    var o = "articleDetail.favor_amount", i = "articleDetail.is_collection";
                    s.setData((n = {}, a(n, i, 1), a(n, o, l), n));
                } else console.log("收藏异常");
            },
            complete: function() {
                s.setData({
                    requesting: 0
                });
            }
        });
    },
    add1: function(a) {
        return "string" == typeof a || (a = String(a)), "+" == a.charAt(a.length - 1) ? a : parseInt(a) + 1;
    },
    reduce1: function(a) {
        return "string" == typeof a || (a = String(a)), "+" == a.charAt(a.length - 1) ? a : parseInt(a) - 1;
    },
    doZan: function(e, o) {
        var s = this;
        if ("zan" == e) i = "add"; else if ("remove" == e) i = "del"; else var i = "1" == s.data.articleDetail.zan_user.is_zan ? "del" : "add";
        s.setData({
            requesting: 1
        }), wx.request({
            url: t.globalData.newlocalhost + "/Knowledge/zan",
            data: {
                source: "微信小程序",
                format: "json",
                article_id: s.data.option.id,
                uid: t.globalData.userId,
                token: t.globalData.token,
                act: i,
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t), t.data.code) if ("取消点赞成功" == t.data.msg) {
                    var e, o = "articleDetail.zan_amount", i = "articleDetail.zan_user.is_zan", n = s.reduce1(s.data.articleDetail.zan_amount);
                    s.setData((e = {}, a(e, i, "0"), a(e, o, n), e));
                } else {
                    var l;
                    console.log("shoucangchenggong_go");
                    var o = "articleDetail.zan_amount", i = "articleDetail.zan_user.is_zan", n = s.add1(s.data.articleDetail.zan_amount);
                    console.log(s.data.articleDetail.zan_amount), console.log(n), s.setData((l = {}, 
                    a(l, i, "1"), a(l, o, n), l));
                }
            },
            complete: function() {
                s.setData({
                    requesting: 0
                });
            }
        });
    },
    isNumber: function(a) {
        var t = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
        return !(!/^\d+(\.\d+)?$/.test(a) && !t.test(a));
    }
});