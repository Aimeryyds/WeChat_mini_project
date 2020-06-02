var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
}, o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : e(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
}, n = require("./check");

module.exports = {
    toQueryPair: function(t, e) {
        return void 0 === e ? t : t + "=" + encodeURIComponent(null === e ? "" : String(e));
    },
    getUrl: function(t, e) {
        t = t.replace(/\//gi, "/");
        var i = getApp().globalData.api + "api/" + t;
        return e && ("object" == (void 0 === e ? "undefined" : o(e)) ? i += "?app_id=" + getApp().globalData.appid + "&" + n.param(e) : "string" == typeof e && (i += "&" + e)), 
        i;
    },
    json: function(t, e, o, i, a, r) {
        var u = getApp(), c = (u.getCache("userinfo"), u.requirejs("core"));
        i && c.loading();
        var s = {
            url: a ? this.getUrl(t) : this.getUrl(t, e),
            method: a ? "POST" : "GET",
            header: {
                "Content-type": a ? "application/x-www-form-urlencoded" : "application/json"
            }
        };
        a && (s.data = n.param(e)), o && (s.success = function(t) {
            if (i && c.hideLoading(), "request:ok" == t.errMsg) {
                if ("string" == typeof t.data && 0 <= t.data.indexOf("html") && 0 <= t.data.indexOf("head") && 0 <= t.data.indexOf("body")) return void c.error("服务器错误！");
                o(t.data);
            } else this.alert(t.errMsg);
        }), s.fail = function(t) {
            that.alert(t.errMsg);
        }, wx.request(s), console.log(s);
    },
    post: function(t, o, n, i) {
        var a = this, r = t.split("/");
        r = r[0] + "_" + r[1], i && a.loading(), getApp().util.request({
            url: "entry/wxapp/" + r,
            data: o,
            method: "POST",
            success: function(t) {
                if (i && a.hideLoading(), "request:ok" == t.errMsg) {
                    if ("string" == typeof t.data && 0 <= t.data.indexOf("html") && 0 <= t.data.indexOf("head") && 0 <= t.data.indexOf("body")) return void a.error("请求错误002");
                    if ("" == t.data) return void console.log("请求异常！");
                    var o = t.data;
                    "string" == typeof o && (console.log(void 0 === o ? "undefined" : e(o)), o = a.json_parse(o)), 
                    n(o);
                } else a.alert(t.errMsg);
            },
            fail: function(t) {
                a.alert(t.errMsg);
            }
        });
    },
    get: function(t, o, n, i) {
        var a = this, r = t.split("/");
        r = r[0] + "_" + r[1], i && a.loading(), getApp().util.request({
            url: "entry/wxapp/" + r,
            data: o,
            success: function(t) {
                if (i && a.hideLoading(), "request:ok" == t.errMsg) {
                    if ("string" == typeof t.data && 0 <= t.data.indexOf("html") && 0 <= t.data.indexOf("head") && 0 <= t.data.indexOf("body")) return void a.error("请求错误001");
                    if ("" == t.data) return void console.log("请求异常！");
                    var o = t.data;
                    "string" == typeof o && (console.log(void 0 === o ? "undefined" : e(o)), o = a.json_parse(o)), 
                    n(o);
                } else a.alert(t.errMsg);
            },
            fail: function(t) {
                i && a.hideLoading(), a.alert(t.errMsg);
            }
        });
    },
    alert: function(t, e) {
        "object" === (void 0 === t ? "undefined" : o(t)) && (t = JSON.stringify(t)), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1,
            success: function(t) {
                t.confirm && "function" == typeof e && e();
            }
        });
    },
    confirm: function(t, e, n) {
        "object" === (void 0 === t ? "undefined" : o(t)) && (t = JSON.stringify(t)), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !0,
            success: function(t) {
                t.confirm ? "function" == typeof e && e() : "function" == typeof n && n();
            }
        });
    },
    loading: function(t) {
        void 0 !== t && "" != t || (t = "加载中"), wx.showToast({
            title: t,
            icon: "loading",
            duration: 5e6
        });
    },
    hideLoading: function() {
        wx.hideToast();
    },
    toast: function(t, e) {
        e || (e = "loading"), wx.showToast({
            title: t,
            icon: e,
            duration: 1e3
        });
    },
    warning: function(t) {
        wx.showToast({
            title: t,
            image: "/yb_shop/static/images/icon-warning.png",
            duration: 2e3
        });
    },
    error: function(t) {
        wx.showToast({
            title: t,
            icon: "success",
            image: "/yb_shop/static/images/x.png",
            duration: 2e3
        });
    },
    success: function(t) {
        wx.showToast({
            title: t,
            icon: "success",
            duration: 1e3
        });
    },
    pdata: function(t) {
        return t.currentTarget.dataset;
    },
    data: function(t) {
        return t.target.dataset;
    },
    phone: function(t) {
        var e = this.pdata(t).phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    time_format: function(t) {
        var e = new Date(1e3 * t);
        return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
    },
    time_str: function(t) {
        return t = (t = t.substring(0, 19)).replace(/-/g, "/"), new Date(t).getTime() / 1e3;
    },
    Countdown: function(t, e) {
        var o = {}, n = t - Date.parse(new Date()) / 1e3;
        n <= 0 && (o.show_time = !1, e(o));
        var i = setInterval(function() {
            var t = n, a = Math.floor(t / 3600 / 24), r = a.toString();
            1 == r.length && (r = "0" + r);
            var u = Math.floor((t - 3600 * a * 24) / 3600), c = u.toString();
            1 == c.length && (c = "0" + c);
            var s = Math.floor((t - 3600 * a * 24 - 3600 * u) / 60), l = s.toString();
            1 == l.length && (l = "0" + l);
            var f = (t - 3600 * a * 24 - 3600 * u - 60 * s).toString();
            1 == f.length && (f = "0" + f), o.countDownDay = r, o.countDownHour = c, o.countDownMinute = l, 
            o.countDownSecond = f, "function" == typeof e && e(o), --n < 0 && (clearInterval(i), 
            wx.showToast({
                title: "活动已结束"
            }), o.countDownDay = "0", o.countDownHour = "0", o.countDownMinute = "0", o.countDownSecond = "0", 
            o.show_time = !1, "function" == typeof e && e(o));
        }.bind(this), 1e3);
    },
    json_parse: function(t) {
        var o = t;
        if ("object" != (void 0 === (o = o.replace(" ", "")) ? "undefined" : e(o))) return o = o.replace(/\ufeff/g, ""), 
        JSON.parse(o);
    },
    str: function(t) {
        return JSON.stringify(t);
    },
    tx_map: function(t, e, o) {
        t = parseFloat(t), e = parseFloat(e);
        var n = this;
        getApp().getCache("map") ? wx.openLocation({
            latitude: t,
            longitude: e,
            scale: 28,
            name: o
        }) : wx.getLocation({
            type: "wgs84",
            success: function(n) {
                console.log(n), getApp().setCache("map", n, 1200), n.latitude, n.longitude, wx.openLocation({
                    latitude: t,
                    longitude: e,
                    scale: 28,
                    name: o
                });
            },
            fail: function() {
                n.alert("未授权位置信息");
            }
        });
    },
    previewImage: function(t, e, o) {
        var n = [];
        (e = JSON.parse(e)).forEach(function(t, e) {
            n[e] = t[o];
        }), wx.previewImage({
            current: t,
            urls: n
        });
    },
    Clipboard: function(t) {
        wx.setClipboardData({
            data: t,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {}
                });
            }
        });
    },
    jump: function(t, e) {
        console.log(t), 1 == (e = e && "" != e ? e : 1) ? wx.navigateTo({
            url: t
        }) : 2 == e ? wx.redirectTo({
            url: t
        }) : 3 == e ? wx.reLaunch({
            url: t
        }) : 4 == e ? wx.switchTab({
            url: t
        }) : 5 == e && wx.navigateBack();
    },
    ReName: function(t) {
        wx.setNavigationBarTitle({
            title: t || ""
        });
    },
    removeByValue: function(t, e, o) {
        for (var n = -1, i = 0; i < t.length; i++) if (console.log(t[i]), t[i] == e) {
            n = i;
            break;
        }
        t.splice(n, 1), "function" == typeof o && o(t);
    },
    setting: function() {
        wx.setNavigationBarColor({
            frontColor: getApp().page.text_color,
            backgroundColor: getApp().page.nv_color,
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        }), getApp().check_is_tabbar();
    },
    menu_url: function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, o = this, n = o.pdata(t), i = (t = n.key, 
        n.url ? n.url : ""), a = n.appid ? n.appid : "", r = n.path ? n.path : "", u = n.title ? n.title : "", c = n.phone ? n.phone : "", s = n.lat ? n.lat : "", l = n.lng ? n.lng : "";
        if (console.log(n), 1 == t) i && 0 < i.length && o.jump(i, e); else if (2 == t) wx.navigateToMiniProgram({
            appId: a,
            path: r,
            extraData: {
                foo: "bar"
            },
            envVersion: "release",
            success: function(t) {
                console.log("打开成功");
            },
            fail: function(t) {
                o.alert("请绑定小程序");
            }
        }); else if (3 == t) o.jump(i, 1); else if (4 == t) c ? wx.makePhoneCall({
            phoneNumber: c
        }) : o.alert("电话不能为空"); else {
            if (5 != t) return;
            s && l ? o.tx_map(s, l, u) : o.alert("请完善位置信息");
        }
    }
};