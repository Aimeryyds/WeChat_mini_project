var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = require("./wx-queue-request"), a = require("./static/config.js");

(0, t.queue)(5), App({
    onLaunch: function() {
        if (!this.globalData._isdesigner) {
            var e = this, t = wx.getStorageSync("logs") || [];
            t.unshift(Date.now()), wx.setStorageSync("logs", t);
            var o = wx.getStorageSync("openid");
            o ? e.getSignIn(o) : wx.login({
                success: function(t) {
                    if (t.code) {
                        var o = {
                            code: t.code,
                            apitoken: a.apitoken
                        };
                        e.apiRequest("weixin", "get_wxaopenid", {
                            data: o,
                            success: function(t) {
                                t.data.errcode || (wx.setStorageSync("openid", t.data.openid), wx.setStorageSync("session_key", t.data.session_key), 
                                t.data.openid && e.getSignIn(t.data.openid));
                            }
                        });
                    } else console.log("获取用户登录态失败！" + t.errMsg);
                }
            });
        }
    },
    getUserInfo: function(e) {
        var t = this;
        if (this.globalData.userInfo) "function" == typeof e && e(this.globalData.userInfo); else {
            var a = wx.getStorageSync("openid");
            a ? (t.getSignIn(a), "function" == typeof e && e(t.globalData.userInfo)) : wx.showModal({
                title: "获取openid失败！",
                content: "请检查相关配置！"
            });
        }
    },
    getSignIn: function(e) {
        if (!e) return !1;
        var t = this;
        t.apiRequest("weixin", "signin", {
            data: {
                openid: e
            },
            method: "GET",
            success: function(e) {
                if ("OK" == e.data.result) {
                    wx.setStorageSync("fxkey", e.data.fxkey), t.fxkeyCallback && t.fxkeyCallback(e.data.fxkey);
                    var a = {
                        nickName: e.data.weixin_nickname,
                        avatarUrl: e.data.headphoto,
                        account_money: e.data.account_money,
                        account_points: e.data.account_points,
                        user_lever_name: e.data.user_lever_name
                    };
                    t.globalData.cuser = e.data, t.globalData.userInfo = a;
                }
            }
        });
    },
    globalData: {
        userInfo: null,
        cuser: [],
        carts: [],
        APISESSID: "",
        config: a
    },
    onShow: function() {
        wx.getSystemInfo({
            success: function(e) {
                -1 != e.model.search("iPhone X") && (a.tabBar.isIphoneX = !0);
            }
        });
    },
    sendRequest: function(e, t) {},
    apiRequest: function(t, a, o) {
        var n = this.globalData.config.domain || "", i = this.globalData.config.checkcode || "";
        o.data.APISESSID = this.globalData.APISESSID || "", this.globalData._isdesigner && this.globalData._designerData && (o.data.domain = this.globalData._designerData.sitename, 
        o.data.wxpreview = 1), "object" != (void 0 === o ? "undefined" : e(o)) && (o = {});
        var r = this;
        return wx.request({
            url: n + "/wxappapi/" + t + "/" + a,
            header: o.header || {
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            data: Object.assign(o.data || {}, {
                apitoken: i
            }),
            dataType: o.dataType || "json",
            method: o.method || "GET",
            success: function(e) {
                "function" == typeof o.success && o.success(e), !r.globalData.APISESSID && e.data.APISESSID && (r.globalData.APISESSID = e.data.APISESSID);
            },
            complete: o.complete || null,
            fail: function(e) {
                var t = e.errMsg, a = o.fail || null;
                wx.showToast({
                    title: t || "errorCode: " + e[0].error,
                    duration: 2e3,
                    icon: "none"
                }), "function" == typeof a && a.call(this, e);
            }
        });
    },
    moduleBindTap: function(t) {
        if ("object" != (void 0 === t ? "undefined" : e(t)) || "{}" == JSON.stringify(t)) return !1;
        var a = t.type || "none";
        if ("none" == a) return !1;
        var o = t.param.value || "", n = t.param.pagevalue || "", i = t.param.idsvalue || "", r = !!(parseInt(t.param.redirect) || 0);
        switch (a) {
          case "func":
            if ("callto" == t.param.type) {
                if (!/^\d[0-9\-]+$/.test(o)) return !1;
                wx.makePhoneCall({
                    phoneNumber: o
                });
            } else if ("coupon" == t.param.type) {
                this.turnToPage("coupon/coupon", r);
            } else if ("previewImage" == t.param.type) this.previewImage(t); else {
                var s = t.param.type, c = s.split("_"), l = "";
                if (o = n, c[0] && c[1] && "list" == c[1]) l = c[0] + "_category"; else {
                    if (!c[0] || !c[1] || "detail" != c[1]) return "getCoupon" == s ? (this.getCoupon(n), 
                    !1) : (console.log("Type error!"), !1);
                    l = c[0] + "_id";
                }
                if (!l) return !1;
                var u = "";
                i.length > 0 && (u = i.toString());
                var g = "page" + o;
                this.turnToPage(g + "/" + g + "?" + l + "=" + u, r);
            }
            break;

          case "page":
            if (/^\d+$/.test(o)) {
                var p = "page" + o;
                this.turnToPage(p + "/" + p, r);
            } else this.turnToPage(o + "/" + o, r);
        }
    },
    previewImage: function(e) {
        wx.previewImage({
            urls: [ e.src ]
        });
    },
    getCoupon: function(e) {
        e ? this.apiRequest("user", "gotcoupon", {
            data: {
                cid: e
            },
            success: function(e) {
                if ("OK" == e.data.result) wx.showToast({
                    title: "领取成功",
                    icon: "success",
                    duration: 2e3
                }), that.changActive("", "nouse"); else if ("2" == e.data.errmsg) wx.showToast({
                    title: "请先登录",
                    icon: "loading",
                    duration: 2e3
                }), this.navigateTo({
                    url: "../login/login"
                }); else {
                    var t = e.data.errmsg || "领取失败";
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        }) : wx.showToast({
            title: "优惠券ID错误",
            icon: "none",
            duration: 2e3
        });
    },
    turnToPage: function(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = "/pages/" + e, o = this.getTabPagePathArr(), n = !1, i = 0; i < o.length; i++) {
            var r = o[i], s = "/pages/" + r + "/" + r;
            if (0 === a.indexOf(s)) {
                n = !0;
                break;
            }
        }
        n ? this.switchToTab(a) : t ? this.redirectTo({
            url: a
        }) : this.navigateTo({
            url: a
        });
    },
    getTabPagePathArr: function() {
        return [];
    },
    switchToTab: function(e) {
        wx.switchTab({
            url: e
        });
    },
    goToHome: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.globalData.config.homepage;
        t || (t = "page1/page1");
        var a = "/pages/" + t;
        e ? this.redirectTo({
            url: a
        }) : this.navigateTo({
            url: a
        });
    },
    normalizePagePath: function(e) {
        if (!this.globalData._isdesigner) return e;
        var t = e, a = e.match(/^\/pages\/page(\d+)\/page\1(\?.+)?$/);
        if (a) {
            var o = a[1], n = a[2];
            o > 0 && (t = "/pages/page/page", t += n && "" != n ? n + "&pageid=" + o : "?pageid=" + o);
        }
        return t;
    },
    navigateTo: function(e) {
        return e.url && (e.url = this.normalizePagePath(e.url)), wx.navigateTo(e);
    },
    redirectTo: function(e) {
        return e.url && (e.url = this.normalizePagePath(e.url)), wx.redirectTo(e);
    },
    setPageTitle: function(e) {
        wx.setNavigationBarTitle({
            title: e
        });
    },
    pageScrollTo: function(e) {
        wx.pageScrollTo ? wx.pageScrollTo({
            scrollTop: e
        }) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    toLocalTime: function(e) {
        var t = new Date();
        return t.setTime(1e3 * e), t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate();
    },
    px2rpx: function(e) {
        return 2 * e + "rpx";
    }
});