var e = require("../../utils/network.js"), t = require("../../utils/util.js"), o = require("../../utils/WxNotificationCenter.js"), a = getApp().API, i = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
}, n = {
    unpurchase: 0,
    animation: 1,
    purchased: 2
};

Page({
    onReady: function(e) {
        this.videoContext = wx.createVideoContext("videoPlayer");
    },
    data: {
        _vs: 100,
        showPage: !1,
        showError: !1,
        play: !1,
        purchaseState: n.purchased,
        animationData: "",
        logined: !1,
        isIpx: getApp().globalData.isIpx,
        isIpad: !1,
        appScene: getApp().globalData.appScene,
        recipeID: "",
        recipeName: "",
        authorID: "",
        authorNickname: "",
        authorAvatarURL: "",
        imageURL: "",
        tips: "",
        story: "",
        ingredients: [],
        directions: [],
        viewsCount: 0,
        favosCount: 0,
        dishesCount: 0,
        collected: !1,
        videoPageURL: "",
        videoFileURL: "",
        recipe: {},
        activity: {},
        usc: "",
        showDownloadAlert: !1,
        showReloadView: !1,
        showLuckyMoneyToggle: !1,
        showLuckyMoney: !1,
        showNegativeView: !1,
        offset: 0,
        num: 4,
        recommends: [],
        footerState: i.normal,
        tipCommercialId: "",
        isPlayEnd: !1
    },
    onVideoPlayEnd: function() {
        this.setData({
            isPlayEnd: !0
        });
    },
    onShow: function() {
        var e = this;
        wx.getStorageSync("user") ? e.setData({
            logined: !0
        }) : e.setData({
            logined: !1
        });
        var t = wx.getStorageSync("user_activity");
        t && (t.positive_activity ? (e.setData({
            showLuckyMoney: !1,
            showNegativeView: !1
        }), t.positive_activity) : t.negative_activity && (e.data.activity.large_image = t.negative_activity.image, 
        e.setData({
            activity: e.data.activity,
            showLuckyMoney: !1,
            showNegativeView: !0
        })), wx.removeStorageSync("user_activity"));
    },
    onLoad: function(a) {
        var i = this;
        this.appScene = getApp().globalData.appScene, wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        });
        var s = a.rid ? a.rid : "", c = a.usc ? a.usc : "", r = decodeURIComponent(a.scene);
        if (console.log("scene = " + r), r && r.length) {
            for (var u = {}, d = r.split(","), l = 0; l < d.length; ++l) {
                var p = d[l].split(":");
                !p || p.length < 2 || (u[p[0]] = p[1]);
            }
            var h = u.rid;
            h && h.length > 0 && (s = h);
        }
        console.log("windowWidth = " + wx.getSystemInfoSync().windowWidth + wx.getSystemInfoSync().windowHeight);
        var g = !1;
        wx.getSystemInfoSync().windowWidth >= 768 && wx.getSystemInfoSync().windowWidth / wx.getSystemInfoSync().windowHeight == .5625 && (g = !0), 
        this.setData({
            recipeID: s,
            usc: c,
            appScene: getApp().globalData.appScene,
            isIpad: g
        }), console.log("appScene = " + this.appScene);
        var m = wx.getStorageSync("last_impress");
        m || (m = 0);
        var w = "https://m.douguo.com/wxn/detail/" + s;
        if (e.request(w, {
            usc: c,
            last_impress: m
        }, function(e) {
            if (0 != t.isObject(e.recipe)) {
                var o = e.recipe, a = e.activity, n = !1, s = !1;
                a && ((a.large_image || a.small_image) && (s = !0), 1 == a.show_image && (wx.setStorageSync("last_impress", Date.parse(new Date()) / 1e3), 
                n = !0, setTimeout(function() {
                    i.setData({
                        showLuckyMoneyToggle: !1
                    });
                }, 5e3))), i.setData({
                    showPage: !0,
                    recipe: o,
                    activity: a,
                    recipeID: o.cook_id,
                    recipeName: o.title,
                    authorID: o.author_id,
                    authorNickname: o.author,
                    authorAvatarURL: o.author_photo,
                    imageURL: o.photo_path,
                    tips: o.tips,
                    story: o.cookstory,
                    ingredients: o.major,
                    directions: o.cookstep,
                    viewsCount: o.clicks,
                    favosCount: o.favo_counts,
                    dishesCount: o.dish_count,
                    collected: 1 == o.collect_status,
                    videoPageURL: o.vu ? o.vu : "",
                    videoFileURL: o.vfurl ? o.vfurl : "",
                    showLuckyMoneyToggle: n,
                    showLuckyMoney: s,
                    tipCommercialId: e.tip_commercial_id
                }), console.log(o), wx.hideToast();
            }
        }, function(e) {
            wx.hideToast(), e && e.length > 0 ? i.setData({
                showPage: !0,
                showError: !0
            }) : i.setData({
                showReloadView: !0
            });
        }), this.request(), wx.getStorageSync("user")) {
            var f = wx.getStorageSync("purchased");
            if (f) i.setData({
                purchaseState: "0" == f ? n.unpurchase : n.purchased
            }); else {
                var v = wx.getStorageSync("open_id");
                e.request("https://wapi.douguo.com/wxapp/getrecipepurchase", {
                    open_id: v
                }, function(e) {
                    wx.setStorageSync("purchased", e.form_id), i.setData({
                        purchaseState: "0" == e.form_id ? n.unpurchase : n.purchased
                    });
                }, function(e) {});
            }
        } else i.setData({
            purchaseState: n.unpurchase
        });
        var y = this;
        o.addNotification("reloadButtonPressedNotificationName", y.reloadButtonPressed, y);
    },
    request: function() {
        var o = this;
        if (!(this.data.recipeID.length <= 0)) {
            this.setData({
                footerState: i.loading
            });
            var a = "https://wapi.douguo.com/wxapp/mixedRecommend/" + this.data.offset + "/" + this.data.num;
            e.request(a, {
                id: this.data.recipeID
            }, function(e) {
                var a, n;
                t.isArray(e.recommends) ? (console.log(e), a = 0 == o.data.offset ? e.recommends : o.data.recommends.concat(e.recommends), 
                n = e.recommends.length < o.data.num ? i.end : i.normal, a.length <= 0 && (n = i.noData)) : (a = [], 
                n = i.noData), o.setData({
                    footerState: n,
                    recommends: a
                });
            }, function(e) {
                var t = o.data.offset - o.data.num;
                t = t < 0 ? 0 : t, o.setData({
                    offset: t,
                    footerState: i.error
                });
            });
        }
    },
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.recommends.length <= 0 || this.data.footerState == i.end)) {
            var e = this.data.offset + this.data.num;
            this.setData({
                offset: e
            }), this.request();
        }
    },
    reloadButtonPressed: function() {
        var o = this, a = "https://m.douguo.com/wxn/detail/" + this.data.recipeID;
        if (e.request(a, {}, function(e) {
            if (0 != t.isObject(e.recipe)) {
                var a = e.recipe;
                o.setData({
                    showPage: !0,
                    recipe: a,
                    recipeID: a.cook_id,
                    recipeName: a.title,
                    authorID: a.author_id,
                    authorNickname: a.author,
                    authorAvatarURL: a.author_photo,
                    imageURL: a.photo_path,
                    tips: a.tips,
                    story: a.cookstory,
                    ingredients: a.major,
                    directions: a.cookstep,
                    viewsCount: a.clicks,
                    favosCount: a.favo_counts,
                    dishesCount: a.dish_count,
                    collected: 1 == a.collect_status,
                    videoPageURL: a.vu ? a.vu : "",
                    videoFileURL: a.vfurl ? a.vfurl : "",
                    tipCommercialId: e.tip_commercial_id,
                    showReloadView: !1
                }), console.log(a), wx.hideToast();
            }
        }, function(e) {
            wx.hideToast(), e && e.length > 0 ? (wx.showToast({
                title: e,
                image: "../../images/error.png"
            }), setTimeout(function() {
                wx.navigateBack({
                    delta: 1,
                    success: function() {
                        console.log("返回成功");
                    },
                    fail: function() {
                        console.log("返回失败"), wx.switchTab({
                            url: "/pages/home/home"
                        });
                    },
                    complete: function() {}
                });
            }, 2e3)) : o.setData({
                showReloadView: !0
            });
        }), this.request(), wx.getStorageSync("user")) {
            var i = wx.getStorageSync("purchased");
            if (i) o.setData({
                purchaseState: "0" == i ? n.unpurchase : n.purchased
            }); else {
                var s = wx.getStorageSync("open_id");
                e.request("https://wapi.douguo.com/wxapp/getrecipepurchase", {
                    open_id: s
                }, function(e) {
                    wx.setStorageSync("purchased", e.form_id), o.setData({
                        purchaseState: "0" == e.form_id ? n.unpurchase : n.purchased
                    });
                }, function(e) {});
            }
        } else o.setData({
            purchaseState: n.unpurchase
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.recipeName,
            desc: "豆果美食 开启美味生活",
            path: "/pages/recipe/recipe?rid=" + this.data.recipeID
        };
    },
    recipeItemPressed: function(e) {
        var t = e.currentTarget.dataset.recipeId;
        wx.navigateTo({
            url: "../recipe/recipe?rid=" + t
        });
    },
    noteItemPressed: function(e) {
        var t = e.currentTarget.dataset.noteId;
        wx.navigateTo({
            url: "../note/note?id=" + t
        });
    },
    commentButtonPressed: function() {
        wx.navigateTo({
            url: "../recipe_comments/recipe_comments?recipeID=" + this.data.recipeID
        });
    },
    collectionActionPressed: function() {
        var e = this;
        wx.getStorageSync("user") ? 1 == this.data.collected ? e.uncollectRecipe() : e.collectRecipe() : e.onlogin();
    },
    shareButtonPressed: function() {
        wx.reportAnalytics("recipe_forward_button_clicked", {
            recipe_id: this.data.recipeID
        });
    },
    hidePurchaseAnimation: function() {
        var e = wx.createAnimation({
            duration: 250,
            timingFunction: "ease",
            delay: 2e3
        });
        this.animation = e, e.opacity(0).step(), this.setData({
            animationData: e.export(),
            purchaseState: n.animation
        }), setTimeout(function() {
            this.setData({
                purchaseState: n.purchased
            });
        }.bind(this), 2250);
    },
    submitPurchase: function(t) {
        var o = this, a = wx.getStorageSync("user"), i = wx.getStorageSync("open_id");
        if (a && i.length > 0) {
            wx.showLoading({
                title: "开启中",
                mask: !0
            });
            var n = t.detail.formId;
            e.request("https://wapi.douguo.com/wxapp/recipepurchase", {
                open_id: i,
                form_id: n
            }, function(e) {
                wx.hideLoading(), wx.setStorageSync("purchased", e.form_id), o.hidePurchaseAnimation();
            }, function(e) {
                wx.hideLoading(e), wx.showToast({
                    title: e.message,
                    duration: 1500,
                    image: "../../images/error.png"
                });
            });
        } else o.onlogin();
    },
    returnToHome: function() {
        wx.switchTab({
            url: "/pages/home/home"
        });
    },
    commentsMoreViewPressed: function() {
        var e = this;
        wx.navigateTo({
            url: "../recipe_comments/recipe_comments?recipeID=" + e.data.recipeID
        });
    },
    collectRecipe: function() {
        var t = this;
        e.request("https://m.douguo.com/wxapp/collect/addcollect", {
            recipe_id: t.data.recipeID
        }, function(e) {
            t.setData({
                collected: 1
            });
        }, function(e) {
            console.log("收藏失败");
        });
    },
    uncollectRecipe: function() {
        var t = this;
        e.request("https://m.douguo.com/wxapp/collect/cancelCollect", {
            recipe_id: t.data.recipeID
        }, function(e) {
            t.setData({
                collected: 0
            });
        }, function(e) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            }), console.log("取消收藏失败");
        });
    },
    favoRecipe: function(e) {
        a.likeComment({
            entity_type: 9,
            id: e.id
        }).then(function(e) {
            console.log("点赞成功");
        }).catch(function(e) {
            console.log("点赞失败");
        });
    },
    unfavoRecipe: function(e) {
        a.unLikeComment({
            entity_type: 9,
            id: e.id
        }).then(function(e) {
            console.log("取消赞成功");
        }).catch(function(e) {
            console.log("取消赞失败");
        });
    },
    onlogin: function(e) {
        this.loginAction();
    },
    loginAction: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(o) {
                wx.getUserInfo({
                    success: function(a) {
                        wx.setStorageSync("nickName", a.userInfo.nickName), wx.setStorageSync("avatarUrl", a.userInfo.avatarUrl), 
                        e.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: o.code,
                            iv: a.iv,
                            encryptedData: a.encryptedData
                        }, function(o) {
                            wx.hideLoading(), e.initSessionParams(o.union_id, o.third_session_key), wx.setStorageSync("open_id", o.openid), 
                            wx.navigateTo({
                                url: "../authorize/authorize?_vs=" + t.data._vs + "&usc=" + t.data.usc + "&rid=" + t.data.recipeID
                            });
                        }, function(e) {
                            wx.showModal({
                                title: "",
                                content: "别着急，网有点慢，再试试",
                                showCancel: !1
                            }), t.loginfailed(e);
                        });
                    },
                    fail: function(e) {
                        t.loginfailed(e);
                    }
                });
            },
            fail: function(e) {
                t.loginfailed(e);
            }
        });
    },
    loginfailed: function(e) {
        wx.hideLoading(), wx.showToast({
            title: "授权失败",
            duration: 2e3,
            image: "../../images/error.png"
        });
    },
    videoPlay: function() {
        var e = encodeURIComponent(this.data.videoPageURL);
        wx.navigateTo({
            url: "../video/video?url=" + e
        });
    },
    favoViewPressed: function(e) {
        var t = this;
        if (console.log("favoViewPressed" + e.currentTarget.dataset.commentIndex), wx.getStorageSync("user")) {
            var o = e.currentTarget.dataset.commentIndex, a = this.data.recipe.comments[o].id;
            this.data.recipe.comments[o].like ? (this.data.recipe.comments[o].like = !1, this.data.recipe.comments[o].like_count -= 1, 
            t.unfavoRecipe({
                id: a
            })) : (this.data.recipe.comments[o].like = !0, this.data.recipe.comments[o].like_count += 1, 
            t.favoRecipe({
                id: a
            })), this.setData({
                recipe: this.data.recipe
            });
        } else t.onlogin();
    },
    replyViewPressed: function(e) {
        var t = this;
        wx.navigateTo({
            url: "../recipe_replies/recipe_replies?recipeID=" + t.data.recipeID + "&commentID=" + e.currentTarget.dataset.commentId
        }), console.log("replyViewPressed" + e.currentTarget.dataset.commentId);
    },
    commentViewPressed: function(e) {
        var t = this;
        wx.navigateTo({
            url: "../recipe_replies/recipe_replies?recipeID=" + t.data.recipeID + "&commentID=" + e.currentTarget.dataset.commentId
        }), console.log("commentViewPressed" + e.currentTarget.dataset.commentId);
    },
    emptyFunction: function() {},
    videoErrorCallback: function(e) {
        console.log("视频错误信息:"), console.log(e.detail.errMsg);
    },
    luckyMoneyPressed: function(e) {
        var t = this;
        if (console.log("拆红包"), this.data.activity && this.data.activity.negative_large_image) t.data.activity.large_image = this.data.activity.negative_large_image, 
        t.setData({
            activity: t.data.activity,
            showLuckyMoney: !1,
            showNegativeView: !0
        }); else if (wx.getStorageSync("user")) {
            if (this.data.activity && this.data.activity.action_url && this.data.activity.action_url.startsWith("http")) {
                var o = encodeURIComponent(this.data.activity.action_url);
                wx.navigateTo({
                    url: "../browser/browser?url=" + o
                });
            }
        } else t.setData({
            _vs: 101
        }), t.onlogin();
    },
    luckyMoneyIntercept: function(e) {
        console.log("luckyMoneyIntercept");
    },
    luckyMoneyShow: function(e) {
        var t = this;
        wx.setStorageSync("last_impress", Date.parse(new Date()) / 1e3), wx.reportAnalytics("recipe_event_button_clicked", {
            recipe_id: this.data.recipeID
        }), t.setData({
            showLuckyMoneyToggle: !0
        });
    },
    luckyMoneyDismiss: function(e) {
        console.log("红包消失"), this.setData({
            showLuckyMoneyToggle: !1
        });
    },
    negativeViewDismiss: function(e) {
        console.log("negativeViewDismiss"), this.setData({
            showNegativeView: !1
        });
    },
    download_app: function(e) {
        this.setData({
            showDownloadAlert: !0
        });
    },
    launchAppError: function(e) {
        this.download_app(e);
    },
    alertCoverPressed: function(e) {
        this.setData({
            showDownloadAlert: !1
        });
    },
    contactError: function(e) {
        console.log("前往回话失败");
    },
    onUnload: function() {
        o.removeNotification("reloadButtonPressedNotificationName", this);
    }
});