function e(e) {
    var t = Object.create(null), a = !0, o = !1, i = void 0;
    try {
        for (var r, s = e[Symbol.iterator](); !(a = (r = s.next()).done); a = !0) {
            var c = n(r.value, 2), d = c[0], l = c[1];
            t[d] = l;
        }
    } catch (e) {
        o = !0, i = e;
    } finally {
        try {
            !a && s.return && s.return();
        } finally {
            if (o) throw i;
        }
    }
    return t;
}

function t(e) {
    var t = new Map(), a = !0, o = !1, n = void 0;
    try {
        for (var i, r = Object.keys(e)[Symbol.iterator](); !(a = (i = r.next()).done); a = !0) {
            var s = i.value;
            t.set(s, e[s]);
        }
    } catch (e) {
        o = !0, n = e;
    } finally {
        try {
            !a && r.return && r.return();
        } finally {
            if (o) throw n;
        }
    }
    return t;
}

var a, o, n = function() {
    function e(e, t) {
        var a = [], o = !0, n = !1, i = void 0;
        try {
            for (var r, s = e[Symbol.iterator](); !(o = (r = s.next()).done) && (a.push(r.value), 
            !t || a.length !== t); o = !0) ;
        } catch (e) {
            n = !0, i = e;
        } finally {
            try {
                !o && s.return && s.return();
            } finally {
                if (n) throw i;
            }
        }
        return a;
    }
    return function(t, a) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("759AD3B38A740DDF13FCBBB4F6ECC841.js")), r = (require("759AD3B38A740DDF13FCBBB4F6ECC841.js"), 
"wxd889b93f7e88344e"), s = '{"uniqid":"104C2BAC-6E2C-4723-A55E-F66FE1206D29","os":"iOS11.2","mac":"6C:40:08:8E:96:CE","screen":"2436X1125","from":"5000","model":"Simulator","other":",","version":"9.1.6"}', c = "wxd889b93f7e88344e", d = "1a8b4feb5f1715b5bc9bec0fe768f940", l = "https://apim.renren.com/api/", u = "2.3.14", f = void 0, g = void 0;

module.exports = {
    init: function(e, t, n) {
        f = e, a = t, o = n;
    },
    stringToJson: function(e) {
        return JSON.parse(e);
    },
    jsonToString: function(e) {
        return JSON.stringify(e);
    },
    mapToJson: function(t) {
        return JSON.stringify(e(t));
    },
    jsonToMap: function(e) {
        return t(JSON.parse(e));
    },
    strMapToObj: e,
    objToStrMap: t,
    jumpToChargeView: function(e) {
        var t = getApp().globalData.platform;
        e && ("ios" == t || "android" == t || wx.redirectTo({
            url: "../charge_ios/charge_ios"
        }));
    },
    isString: function(e) {
        return "[object String]" === Object.prototype.toString.call(e);
    },
    getsign: function(e) {
        var t = this.objKeySort(e), a = d;
        void 0 !== o.secret_key && o.secret_key && o.secret_key.length > 0 && (a = o.secret_key);
        var n = t + a;
        return (0, i.default)(n);
    },
    getLoginsign: function(e) {
        var t = this.objKeySort(e) + d;
        return (0, i.default)(t);
    },
    objKeySort: function(e) {
        for (var t = "", a = Object.keys(e).sort(), o = 0; o < a.length; o++) {
            var n = e[a[o]];
            void 0 !== n && n && n.length > 50 && (n = n.substring(0, 50)), t = t + a[o] + "=" + n;
        }
        return t;
    },
    setuserinfo: function(e) {
        var t = this.isString(e.uid) ? parseFloat(e.uid) : e.uid, a = {
            fill_stage: e.fill_stage,
            head_url: e.head_url,
            is_guide: e.is_guide,
            secret_key: e.secret_key,
            session_key: e.session_key,
            ticket: e.ticket,
            uid: t,
            uniq_key: e.uniq_key,
            user_name: e.user_name,
            vip_icon_url: e.vip_icon_url,
            vip_url: e.vip_url,
            web_ticket: e.web_ticket
        }, n = getApp();
        o = a, n.currentUser = a;
    },
    setwxpersonuserinfo: function(e) {
        var t = {
            nickName: e.user_name,
            avatarUrl: e.head_url,
            unionid: e.h5AuthCookieInfo._unionid,
            openid: e.h5AuthCookieInfo._rrod,
            session_key: e.session_key
        }, o = getApp();
        a = t, o.wxpersonInfo = t;
    },
    saveLocalCookie: function(e) {
        try {
            wx.setStorageSync("_rtk", e._rtk), wx.setStorageSync("cookiesdata", JSON.stringify(e).replace(/,/g, ";").replace(/"/g, "").replace(/:/g, "=").replace(/{/g, "").replace(/}/g, "").replace(/ /g, ""));
        } catch (e) {
            console.log("saveLocalCookie storageSync exception" + e);
        }
    },
    removeLocalCookie: function() {
        wx.removeStorageSync("cookiesdata");
    },
    switchTabToHome: function() {
        getApp().currentUser = "", wx.switchTab({
            url: "../home/home",
            success: function() {},
            fail: function() {},
            complete: function() {}
        });
    },
    wxLogin: function(e) {
        var t = this;
        wx.login({
            success: function(e) {
                wx.getUserInfo({
                    success: function(a) {
                        console.log("code======" + e.code), console.log("getUserInfo ====", a), wx.setStorage({
                            key: "wxcode",
                            data: e.code
                        }), t.loginrequest(e.code, a);
                    },
                    fail: function(e) {
                        if (t.switchTabToHome(), e && e.data && e.data.error_msg) {
                            var a = e.data.error_msg;
                            a && a.indexOf("您的账号已停止使用") > -1 && (a = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                            wx.showToast({
                                title: a,
                                icon: "none",
                                duration: 2e3
                            });
                        }
                    }
                });
            },
            fail: function(e) {
                if (t.switchTabToHome(), e && e.data && e.data.error_msg) {
                    var a = e.data.error_msg;
                    a && a.indexOf("您的账号已停止使用") > -1 && (a = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                    wx.showToast({
                        title: a,
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        });
    },
    loginrequest: function(e, t) {
        var n = Date.parse(new Date()), i = null, r = this, d = t.encryptedData, u = t.iv;
        if (e) i = {
            api_key: c,
            v: "1",
            third_type: "6",
            client_info: s,
            call_id: n,
            isNeedH5Auth: "1",
            code: e,
            user: "1",
            third_token: "1",
            encryptedData: d,
            iv: u
        }, f = this.getLoginsign(i), i.sig = f; else {
            if (!(a.openid && a.unionid && a.session_key)) return void this.wxLogin("");
            i = {
                api_key: c,
                v: "1",
                user: a.openid,
                third_type: "6",
                client_info: s,
                third_token: a.session_key,
                call_id: n,
                unionid: a.unionid,
                isNeedH5Auth: "1"
            };
            var f = this.getsign(i);
            i.sig = f;
        }
        console.log("client/loginThirdParty2  param", i), wx.request({
            url: l + "client/loginThirdParty2",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: i,
            method: "POST",
            success: function(e) {
                if (e.data.error_code && 10020 == e.data.error_code) r.weixinCreateUser(); else if (e.data.error_code && 104 == e.data.error_code) r.wxLogin(""); else if (e.data.uid && e.data.uid > 0) r.setuserinfo(e.data), 
                r.saveLocalCookie(e.data.h5AuthCookieInfo), r.setwxpersonuserinfo(e.data), wx.setStorage({
                    key: "currentUser",
                    data: o
                }), wx.setStorage({
                    key: "wxpersonInfo",
                    data: a
                }), r.loginSuccess && r.loginSuccess(!0); else {
                    r.loginSuccess && r.loginSuccess(!1), r.switchTabToHome();
                    var t = e.data.error_msg;
                    t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                }
            },
            fail: function(e) {
                if (r.loginSuccess && r.loginSuccess(!1), r.switchTabToHome(), e && e.data && e.data.error_msg) {
                    var t = e.data.error_msg;
                    t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        });
    },
    weixinCreateUser: function() {
        var e = this;
        wx.login({
            success: function(t) {
                console.log("code===weixinCreateUser===" + t.code), wx.setStorage({
                    key: "wxcode",
                    data: t.code
                }), wx.getUserInfo({
                    success: function(a) {
                        console.log("getUserInfo ====", a), e.createUserWithUserInfo(t.code, a);
                    },
                    fail: function(t) {
                        e.switchTabToHome();
                    }
                });
            },
            fail: function(t) {
                e.switchTabToHome();
            }
        });
    },
    createUserWithUserInfo: function(e, t) {
        var n = getApp(), i = Date.parse(new Date()), r = this, d = null, u = "", f = t.userInfo.avatarUrl;
        1 === t.userInfo.gender ? u = "男生" : 2 === t.userInfo.gender && (u = "女生");
        var g = t.userInfo.nickName, p = t.encryptedData, h = t.iv, w = s;
        JSON.parse(w).from || (w = '{"uniqid":"104C2BAC-6E2C-4723-A55E-F66FE1206D29","os":"iOS11.2","mac":"6C:40:08:8E:96:CE","screen":"2436X1125","from":"5000","model":"Simulator","other":",","version":"9.1.6"}'), 
        e && (d = {
            api_key: c,
            v: "1",
            third_type: "6",
            user: "1",
            client_info: w,
            third_token: "1",
            call_id: i,
            headUrl: f,
            gender: u,
            name: g,
            isNeedH5Auth: "1",
            code: e,
            need_fill_info: "1",
            inviterId: n.globalData.invitorId,
            encryptedData: p,
            iv: h
        });
        var y = this.getLoginsign(d);
        d.sig = y, console.log("client/createThirdParty  param", d), wx.request({
            url: l + "client/createThirdParty",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: d,
            method: "POST",
            success: function(e) {
                if (console.log("create res", e), e.data.uid && e.data.uid > 0) r.setuserinfo(e.data), 
                r.saveLocalCookie(e.data.h5AuthCookieInfo), r.setwxpersonuserinfo(e.data), wx.setStorage({
                    key: "currentUser",
                    data: o
                }), wx.setStorage({
                    key: "wxpersonInfo",
                    data: a
                }), r.loginSuccess && r.loginSuccess(!0); else {
                    r.loginSuccess && r.loginSuccess(!1), r.switchTabToHome();
                    var t = e.data.error_msg;
                    t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                }
            },
            fail: function(e) {
                if (console.log("create fail res", e), r.loginSuccess && r.loginSuccess(!1), r.switchTabToHome(), 
                e && e.data && e.data.error_msg) {
                    var t = e.data.error_msg;
                    t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        });
    },
    updateUserInfo: function(e) {
        if (e.session_key) {
            var t = Date.parse(new Date()), n = {
                api_key: c,
                v: "1",
                openId: a.openid,
                third_type: "6",
                client_info: s,
                session_key: e.session_key,
                call_id: t,
                unionid: a.unionid,
                isNeedH5Auth: "1"
            }, i = this, r = this.getsign(n);
            n.sig = r, console.log("client/getLoginInfo  param", n), wx.request({
                url: l + "client/getLoginInfo",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                data: n,
                method: "POST",
                success: function(e) {
                    if (console.log("updateUserInfo", e), 102 === e.data.error_code) i.loginrequest("", ""); else if (10202 == e.data.error_code) i.loginrequest("", ""); else if (e.data.uid && e.data.uid > 0) i.setuserinfo(e.data), 
                    i.saveLocalCookie(e.data.h5AuthCookieInfo), i.setwxpersonuserinfo(e.data), wx.setStorage({
                        key: "currentUser",
                        data: o
                    }), wx.setStorage({
                        key: "wxpersonInfo",
                        data: a
                    }), i.loginSuccess && i.loginSuccess(!1); else if (i.switchTabToHome(), e && e.data && e.data.error_msg) {
                        var t = e.data.error_msg;
                        t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        });
                    }
                },
                fail: function(e) {
                    if (i.switchTabToHome(), e && e.data && e.data.error_msg) {
                        var t = e.data.error_msg;
                        t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                        wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }
            });
        } else i = this, wx.getUserInfo({
            success: function(e) {
                i.loginrequest("", "");
            }
        });
    },
    updateLoginStatus: function() {
        this.loginrequest("", "");
    },
    getMyTimeAccount: function(e) {
        if (o.session_key) {
            var t = getApp(), a = Date.parse(new Date()), n = {
                api_key: c,
                v: "1",
                session_key: t.currentUser.session_key,
                client_info: s,
                call_id: a,
                userId: t.currentUser.uid
            }, i = this, r = this.getsign(n);
            n.sig = r, wx.request({
                url: l + e,
                data: n,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    e.data && (getApp().currentUser.minute_count = e.data.count, wx.setStorage({
                        key: "currentUser",
                        data: o
                    }), i.myMinuteAccountCallback && i.myMinuteAccountCallback(e));
                },
                fail: function(e) {
                    e && e.data && e.data.error_msg && wx.showToast({
                        title: e.data.error_msg,
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    getMyTokensAccount: function(e) {
        if (a.openid) {
            var t = Date.parse(new Date()), n = {
                api_key: c,
                v: "1",
                session_key: o.session_key,
                client_info: s,
                call_id: t
            }, i = this, r = this.getsign(n);
            n.sig = r, wx.request({
                url: l + e,
                data: n,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    e.data && (getApp(), o.renrenguo_count = parseInt(e.data.TokensAccountResponse.tokensAmount), 
                    wx.setStorage({
                        key: "currentUser",
                        data: o
                    }), i.myTokenAccountCallback && i.myTokenAccountCallback(e));
                },
                fail: function(e) {
                    if (e && e.data && e.data.error_msg) {
                        var t = e.data.error_msg;
                        t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                        wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }
            });
        }
    },
    privateTimeProductList: function(e) {
        if (o.session_key) {
            var t = Date.parse(new Date()), a = {
                api_key: c,
                v: "1",
                session_key: o.session_key,
                call_id: t
            }, n = this, i = this.getsign(a);
            a.sig = i, wx.request({
                url: l + e,
                data: a,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    console.log("json time", e), e.data && n.privateTimeProductListCallback && n.privateTimeProductListCallback(e.data);
                },
                fail: function(e) {
                    e && e.data && e.data.error_msg && wx.showToast({
                        title: e.data.error_msg,
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    renrenguoProductList: function(e) {
        if (o.session_key) {
            var t = Date.parse(new Date()), a = {
                api_key: c,
                v: "1",
                session_key: o.session_key,
                call_id: t,
                productType: "0",
                status: "1"
            }, n = this, i = this.getsign(a);
            a.sig = i, wx.request({
                url: l + e,
                data: a,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    console.log("s", e), e.data && n.renrengupProductListCallback && n.renrengupProductListCallback(e.data);
                },
                fail: function(e) {
                    if (e && e.data && e.data.error_msg) {
                        var t = e.data.error_msg;
                        t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                        wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }
            });
        }
    },
    createPrivateTimeOrder: function(e, t) {
        if (t) {
            g = !1;
            var a = Date.parse(new Date()), n = {
                api_key: c,
                v: "1",
                session_key: o.session_key,
                call_id: a,
                productId: t.id,
                productCount: "1",
                payType: "19",
                clientInfo: s,
                appId: r
            }, i = this, d = this.getsign(n);
            n.sig = d, wx.request({
                url: l + e,
                data: n,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    console.log("createPrivateTimeOrder", e), e.data.orderInfo ? i.createTradeOrder(e.data.orderInfo) : wx.showToast({
                        title: e.data.msg,
                        icon: "none",
                        duration: 2e3
                    });
                },
                fail: function(e) {
                    e && e.data && e.data.error_msg && wx.showToast({
                        title: e.data.error_msg,
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    createRenrenguoOrder: function(e, t, a) {
        if (t) {
            var n;
            n = "zidingyi" == a && 7 == t.id ? t.tokensCount : 1, g = !0;
            var i = Date.parse(new Date()), r = {
                api_key: c,
                v: "1",
                session_key: o.session_key,
                call_id: i,
                productId: t.id,
                productAmount: n,
                payType: "19",
                clientInfo: s
            }, d = this, u = this.getsign(r);
            r.sig = u, wx.request({
                url: l + e,
                data: r,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    if (console.log("createRenrenguoOrder", e), e.data.rechargeOrderInfo) d.createRenrenguoOrder2(e.data.rechargeOrderInfo); else {
                        var t = e.data.error_msg;
                        t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                        wx.showToast({
                            title: t,
                            icon: "success",
                            duration: 2e3
                        });
                    }
                },
                fail: function(e) {
                    if (e && e.data && e.data.error_msg) {
                        var t = e.data.error_msg;
                        t && t.indexOf("您的账号已停止使用") > -1 && (t = "您的账号已停止使用，如有疑问请联系客服QQ：2433099001咨询。"), 
                        wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }
            });
        }
    },
    createRenrenguoOrder2: function(e) {
        var t = Date.parse(new Date()), a = {
            api_key: c,
            v: "1",
            session_key: o.session_key,
            call_id: t,
            bizid: e.rrPayBizId,
            tokensAmount: e.totalTokensCount,
            payType: e.payType,
            ticket: e.ticket
        }, n = this, i = this.getsign(a);
        a.sig = i, console.log("222222", a), wx.request({
            url: l + "token/rrPayOrderCreate",
            data: a,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                console.log("createRenrenguoOrder2", e), e.data.rechargeOrderInfo ? n.createTradeOrder(e.data.rechargeOrderInfo) : wx.showToast({
                    title: e.data.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {
                e && e.data && e.data.error_msg && wx.showToast({
                    title: e.data.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    createTradeOrder: function(e) {
        var t = e.orderId;
        if (g && (t = e.rechargeOrderId), console.log("createTradeOrder", t), e) {
            Date.parse(new Date());
            var a = getApp(), o = {
                bizId: e.rrPayBizId,
                userId: e.userId,
                ticket: e.ticket,
                openId: a.wxpersonInfo.openid,
                orderId: t
            }, n = this, i = this.getsign(o);
            o.sig = i, wx.request({
                url: "https://wxpayment.renren.com/weixin/pay/createTradeInpage",
                data: o,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(t) {
                    console.log("createTradeOrder ====", t), t.data.timeStamp ? n.wxPayExcute(t.data, e) : (n.createTradeInpageFallCallBack && n.createTradeInpageFallCallBack(t), 
                    wx.showToast({
                        title: t.data.msg,
                        icon: "none",
                        duration: 2e3
                    }));
                },
                fail: function(e) {
                    n.createTradeInpageFallCallBack && n.createTradeInpageFallCallBack(e), e && e.data && e.data.error_msg && wx.showToast({
                        title: e.data.error_msg,
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    wxPayExcute: function(e, t) {
        var a = this;
        wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.paySign,
            success: function(e) {
                console.log("成功回调 微信支付:", e.requestPayment), a.paySuccessCheck(t);
            },
            fail: function(e) {
                console.log("失败回调 微信支付:", e.requestPayment), a.paySuccessCheck(t);
            }
        });
    },
    paySuccessCheck: function(e) {
        var t = e.orderId;
        if (g && (t = e.rechargeOrderId), o.session_key) {
            var a = Date.parse(new Date()), n = {
                api_key: c,
                v: "1",
                session_key: o.session_key,
                call_id: a,
                clientInfo: s,
                orderId: t,
                ticket: e.ticket,
                rechargeOrderId: t
            }, i = this, r = this.getsign(n);
            n.sig = r;
            var d = g ? "token/rechargeOrderCheck" : "whisper/rrpayOrderCheck";
            wx.request({
                url: l + d,
                data: n,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    console.log("guo renrenguoPaySuccessCheck", g, e), g ? 27 === e.data.rechargeOrderInfo.status ? (i.paySuccessCheckCallback && i.paySuccessCheckCallback(e), 
                    wx.showToast({
                        title: "充值成功",
                        icon: "success",
                        duration: 2e3
                    })) : (i.payFailCheckCallback && i.payFailCheckCallback(e), wx.showToast({
                        title: "充值失败",
                        icon: "none",
                        duration: 2e3
                    })) : (console.log("status", 8 === e.data.orderInfo.status), 15 === e.data.orderInfo.status ? (i.paySuccessCheckCallback && i.paySuccessCheckCallback(e), 
                    wx.showToast({
                        title: "充值成功",
                        icon: "success",
                        duration: 2e3
                    })) : (console.log("fail status", e.data.orderInfo.status), i.payFailCheckCallback && i.payFailCheckCallback(e), 
                    wx.showToast({
                        title: "充值失败",
                        icon: "none",
                        duration: 2e3
                    })));
                },
                fail: function(e) {
                    e && e.data && e.data.error_msg && wx.showToast({
                        title: e.data.error_msg,
                        icon: "success",
                        duration: 2e3
                    });
                }
            });
        }
    },
    wxpersonInfo: a,
    currentUser: o,
    resetClient_info: function(e) {
        s = e, console.log("---222--- client_info---", s);
    },
    randomShareTitle: function() {
        var e = [ "我今年20了还是单身，你来撩我吧", "你约我试试，信不信……", "点一下即可获得与我视频交友特权", "有毒，别点，非单身狗不得进入", "小哥哥有对象吗？介不介意换个新的？", "手机在手，告别单身狗，进来撩个女盆友", "我喜欢你已超过2分钟，不能撤回了", "小哥哥能做我男票吗？不行我再想想办法", "确认过眼神，你是我一直在等的人！", "老虎不发威，你当……", "课间休息都在偷偷挣钱和交友，根本停不下来", "有时候，我不是不理你，只是在等你先开口", "发现一个好看的小姐姐！", "不求别的，只愿心声有人懂，视频聊会儿吧~", "邀请你视频聊天，快来加入！", "在吗？可以跟我聊5分钟么！", "见过劈叉的，没见过直播劈叉的，太拼了！", "被这个小姐姐天籁歌声深深吸引了！", "现在主播都直播这些事，不看都不知道！", "小主播没有家人售守护，人美歌甜，求抱走！", "小哥哥，我有些心事想唱给你听", "主播被台风刮走了", "你的小公主直播了，火速来围观", "有美女，快进来涨姿势！", "这个主播没人看，是你的菜吗？", "在吗？可以跟我聊5分钟么！", "还没睡就陪我聊聊可以吗？", "漫漫长夜，你是夜猫吗？出来唠嗑吧??", "今天心情不太好，你会说甜言蜜语吗？", "嗨哥哥玩吗视屏直接看", "喵女王来啦，专职解救寂寞的你?", "每晚23点，小女子与你不见不散?", "当夜幕降临，我在这里等你?" ], t = e.length;
        return "【有人@我】" + e[Math.floor(Math.random() * t)];
    },
    randomShareImage: function() {
        return "http://a.xnimg.cn/wap/mobile/wxMiniApp/onlineImgs/share/share" + Math.floor(10 * Math.random() + 1) + ".jpg";
    },
    setNewSessionKey: function(e) {
        o.session_key = session_key, app.currentUser.session_key = session_key;
    },
    canSmallGainSignGift: function() {
        var e = {
            api_key: c,
            v: "1",
            call_id: new Date().getTime(),
            session_key: o.session_key,
            version: u
        }, t = this;
        e.sig = this.getsign(e), wx.request({
            url: l + "whisper/canSmallGainSignGift",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                t.canSmallGainSignGiftCallBack && t.canSmallGainSignGiftCallBack(e);
            },
            fail: function() {}
        });
    },
    isReceiveGiftToday: function() {
        var e = {
            api_key: c,
            v: "1",
            call_id: new Date().getTime(),
            session_key: o.session_key,
            type: 1,
            userId: o.uid
        }, t = this;
        e.sig = this.getsign(e), wx.request({
            url: l + "profile/sign",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                t.isReceiveGiftTodayCallBack && t.isReceiveGiftTodayCallBack(e);
            },
            fail: function() {}
        });
    },
    gainReceiveGift: function() {
        var e = {
            api_key: c,
            v: "1",
            call_id: new Date().getTime(),
            session_key: o.session_key,
            type: 1,
            userId: o.uid
        }, t = this;
        e.sig = this.getsign(e), wx.request({
            url: l + "profile/gainSignGift",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                t.gainReceiveGiftCallBack && t.gainReceiveGiftCallBack(e);
            },
            fail: function() {}
        });
    },
    getUserPhone: function(e, t) {
        var a = this, o = getApp();
        o.aldstat.sendEvent("所有提示用户是否绑定手机号", t + "是否绑定手机号"), wx.login({
            success: function(n) {
                if (n.code) if ("getPhoneNumber:fail user deny" == e.detail.errMsg) o.aldstat.sendEvent("所有用户手机号绑定点击否", t + "手机号绑定点击否"); else {
                    var i = e.detail.encryptedData, r = e.detail.iv;
                    o.aldstat.sendEvent("所有用户手机号绑定点击是", t + "手机号绑定点击是"), a.uploadMobilePhone(n.code, i, r, t);
                }
            }
        });
    },
    uploadMobilePhone: function(e, t, n, i) {
        var r = getApp(), d = Date.parse(new Date()), u = {
            api_key: c,
            v: "1",
            client_info: s,
            session_key: o.session_key,
            call_id: d,
            user: a.openid,
            third_type: "6",
            third_code: e,
            encryptedData: t,
            iv: n
        }, f = this, g = this.getsign(u);
        u.sig = g, wx.request({
            url: l + "user/bindThirdPartyMobile",
            data: u,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                1 === e.data.result ? (r.aldstat.sendEvent("所有用户手机号绑定成功", i + "手机号绑定成功"), f.uploadMobilePhoneCallBack && f.uploadMobilePhoneCallBack(e)) : 10142 === e.data.error_code ? wx.showToast({
                    title: "手机号格式错误",
                    icon: "none",
                    duration: 2e3
                }) : 10141 === e.data.error_code || 10143 === e.data.error_code || 10144 === e.data.error_code ? wx.showToast({
                    title: "绑定手机号出错",
                    icon: "none",
                    duration: 2e3
                }) : 10145 === e.data.error_code || 10146 === e.data.error_code || 10147 === e.data.error_code ? wx.showToast({
                    title: "该手机号已被绑定,请联系客服",
                    icon: "none",
                    duration: 2e3
                }) : wx.showToast({
                    title: "绑定失败",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {}
        });
    },
    sendStarSmallZhiBo: function() {
        var e = {
            api_key: c,
            v: "1",
            call_id: new Date().getTime(),
            session_key: o.session_key,
            clientInfo: s
        }, t = this;
        e.sig = t.getsign(e), wx.request({
            url: l + "reward/sendStarSmallZhiBo",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                1 == e.data.result && t.sendStarSmallZhiBoCallBack && t.sendStarSmallZhiBoCallBack(e);
            }
        });
    },
    isBindMobile: function() {
        var e = l + "user/isBindMobileMulti", t = {
            api_key: c,
            v: "1.0",
            call_id: new Date().getTime(),
            session_key: o.session_key
        }, a = this;
        t.sig = a.getsign(t), wx.request({
            data: t,
            url: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                a.isBindMobileCallBack && a.isBindMobileCallBack(e);
            }
        });
    },
    getCompleteDetail: function() {
        var e = {
            api_key: c,
            v: "1",
            call_id: new Date().getTime(),
            session_key: o.session_key,
            type: 1
        }, t = this;
        e.sig = this.getsign(e), wx.request({
            url: l + "dailytask/getCompleteDetail",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                t.getCompleteDetailCallBack && t.getCompleteDetailCallBack(e);
            },
            fail: function() {}
        });
    },
    wechatSingleSubscription: function(e, t) {
        var n = this, i = "4W7C16gAzCWfUHmj4N8z8Hoiv7CUSiugm2Ks9317_-A", r = getApp();
        wx.requestSubscribeMessage({
            tmplIds: [ i ],
            success: function(d) {
                if ("accept" === d[i]) {
                    var u = Date.parse(new Date()), f = {
                        api_key: c,
                        v: "1",
                        client_info: s,
                        session_key: o.session_key,
                        call_id: u,
                        openId: a.openid
                    };
                    t && (f.uid = t);
                    var g = n.getsign(f);
                    f.sig = g, wx.request({
                        url: l + "livevideoext/wechatSingleSubscription",
                        data: f,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                        },
                        success: function(e) {
                            wx.showToast({
                                title: "订阅成功",
                                icon: "none"
                            }), n.wechatSingleSubscriptionCallBack && n.wechatSingleSubscriptionCallBack(e);
                        },
                        fail: function() {
                            wx.showToast({
                                title: "订阅失败，请稍后再试",
                                icon: "none"
                            });
                        }
                    }), r.aldstat.sendEvent(e + '点击"订阅"', "允许");
                } else r.aldstat.sendEvent(e + '点击"订阅"', "取消");
            },
            fail: function() {
                wx.showToast({
                    title: "订阅失败，请稍后再试",
                    icon: "none"
                });
            }
        });
    }
};