var a = getApp();

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
    onLoad: function(t) {
        var e = this;
        this.setData({
            articleId: t.id
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
            url: a.globalData.apph5localhost + "/article/weixin_detail.php",
            data: {
                source: "微信小程序",
                format: "json",
                id: t.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data);
                var t = a.data.data.content;
                t = (t = (t = (t = "<div style='font-size:0px;'>" + t + "</div>").replace(/\<img/gi, '<img style="width:100%;height:auto;margin:0px 0px!important;padding:0px!important;border:0px!important;font-size:0px!important;float:left;" ')).replace(/\<p/gi, '<p style="padding:0px 0px 0px 0px;font-size:16px;line-height:24px;font-weight:400;color:#666;" ')).replace(/\<strong/gi, '<strong style="margin:10px 0px 0px;padding:0px;font-size:16px;line-height:24px;font-weight:600;color:#666;" '), 
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
            url: a.globalData.newlocalhost + "/darenwz/index",
            data: {
                source: "微信小程序",
                format: "json",
                id: t.id,
                uid: a.globalData.userId,
                act: 2,
                token: a.globalData.token
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
        });
    },
    showToastss: function(a) {
        var t = this, e = a.duration, s = a.title;
        t.setData({
            showToast: !0,
            toastTitle: s
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
            var s = t;
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
                    var o = t.data.data.wx_sesson, i = s.detail.encryptedData, n = s.detail.iv;
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
                            epd: i,
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
                            }), a.globalData.userAvatar = t.data.data.avatar, a.globalData.userNickName = t.data.data.user_name, 
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
        if ("add" == t) s = "add"; else if ("del" == t) s = "del"; else var s = "1" == e.data.faved ? "del" : "add";
        e.setData({
            requesting: 1
        }), wx.request({
            url: a.globalData.newlocalhost + "/fav/do_fav_recipe",
            data: {
                source: "微信小程序",
                format: "json",
                item_id: e.data.articleId + ":3",
                in_detail: 1,
                uid: a.globalData.userId,
                operate_type: s
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
                    t = parseInt(e.data.favorAmount) - 1;
                    e.setData({
                        faved: 0,
                        favorAmount: t
                    });
                } else {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    });
                    var t = parseInt(e.data.favorAmount) + 1;
                    e.setData({
                        faved: 1,
                        favorAmount: t
                    });
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