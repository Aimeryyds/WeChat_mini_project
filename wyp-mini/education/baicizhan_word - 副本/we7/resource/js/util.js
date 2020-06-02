var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _base = require("base64"), _md = require("md5"), _md2 = _interopRequireDefault(_md), _promise_factory = require("./promise_factory"), _promise_factory2 = _interopRequireDefault(_promise_factory);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

require("./polyfill");

var util = {};

function getQuery(e) {
    var t = [];
    if (-1 != e.indexOf("?")) for (var n = e.split("?")[1].split("&"), r = 0; r < n.length; r++) n[r].split("=")[0] && unescape(n[r].split("=")[1]) && (t[r] = {
        name: n[r].split("=")[0],
        value: unescape(n[r].split("=")[1])
    });
    return t;
}

function getUrlParam(e, t) {
    var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), r = e.split("?")[1].match(n);
    return null != r ? unescape(r[2]) : null;
}

function getSign(e, t, n) {
    var r = require("underscore.js"), a = require("md5.js"), o = "", i = getUrlParam(e, "sign");
    if (i || t && t.sign) return !1;
    if (e && (o = getQuery(e)), t) {
        var s = [];
        for (var u in t) u && t[u] && (s = s.concat({
            name: u,
            value: t[u]
        }));
        o = o.concat(s);
    }
    o = r.sortBy(o, "name"), o = r.uniq(o, !0, "name");
    for (var c = "", g = 0; g < o.length; g++) o[g] && o[g].name && o[g].value && (c += o[g].name + "=" + o[g].value, 
    g < o.length - 1 && (c += "&"));
    return i = a(c + (n = n || getApp().siteInfo.token));
}

util.base64Encode = function(e) {
    return (0, _base.base64_encode)(e);
}, util.base64Decode = function(e) {
    return (0, _base.base64_decode)(e);
}, util.md5 = function(e) {
    return (0, _md2.default)(e);
}, util.url = function(e, t) {
    var n = getApp(), r = n.siteInfo.siteroot + "?i=" + n.siteInfo.uniacid + "&t=" + n.siteInfo.multiid + "&v=" + n.siteInfo.version + "&from=wxapp&";
    if (console.log(r), e && ((e = e.split("/"))[0] && (r += "c=" + e[0] + "&"), e[1] && (r += "a=" + e[1] + "&"), 
    e[2] && (r += "do=" + e[2] + "&")), t && "object" === (void 0 === t ? "undefined" : _typeof(t))) for (var a in console.log(param), 
    t) a && t.hasOwnProperty(a) && t[a] && (r += a + "=" + t[a] + "&");
    return r;
}, util.getSign = function(e, t, n) {
    return getSign(e, t, n);
}, util.request = function(r) {
    require("underscore.js");
    var e, t = require("md5.js"), a = getApp();
    (r = r || {}).cachetime = r.cachetime ? r.cachetime : 0, r.showLoading = void 0 === r.showLoading || r.showLoading;
    var n = wx.getStorageSync("userInfo").sessionid, o = r.url;
    if (-1 == o.indexOf("http://") && -1 == o.indexOf("https://") && (o = util.url(o)), 
    getUrlParam(o, "state") || r.data && r.data.state || !n || (o = o + "&state=we7sid-" + n), 
    !r.data || !r.data.m) {
        var i = getCurrentPages();
        console.log(i), i.length && (i = i[getCurrentPages().length - 1]) && i.__route__ && (o = o + "&m=" + i.__route__.split("/")[0]);
    }
    var s = getSign(o, r.data);
    if (s && (o = o + "&sign=" + s), !o) return !1;
    if (wx.showNavigationBarLoading(), r.showLoading && util.showLoading(), r.cachetime) {
        var u = t(o), c = wx.getStorageSync(u), g = Date.parse(new Date());
        if (c && c.data) {
            if (c.expire > g) return r.complete && "function" == typeof r.complete && r.complete(c), 
            r.success && "function" == typeof r.success && r.success(c), console.log("cache:" + o), 
            wx.hideLoading(), wx.hideNavigationBarLoading(), !0;
            wx.removeStorageSync(u);
        }
    }
    wx.request((_defineProperty(e = {
        url: o,
        data: r.data ? r.data : {},
        header: r.header ? r.header : {},
        method: r.method ? r.method : "GET"
    }, "header", {
        "content-type": "application/x-www-form-urlencoded"
    }), _defineProperty(e, "success", function(e) {
        if (wx.hideNavigationBarLoading(), wx.hideLoading(), e.data.errno) {
            if ("41009" == e.data.errno) return wx.setStorageSync("userInfo", ""), void util.getUserInfo(function() {
                util.request(r);
            });
            if (r.fail && "function" == typeof r.fail) r.fail(e); else if (e.data.message) {
                if (null != e.data.data && e.data.data.redirect) var t = e.data.data.redirect; else t = "";
                a.util.message(e.data.message, t, "error");
            }
        } else if (r.success && "function" == typeof r.success && r.success(e), r.cachetime) {
            var n = {
                data: e.data,
                expire: g + 1e3 * r.cachetime
            };
            wx.setStorageSync(u, n);
        }
    }), _defineProperty(e, "fail", function(e) {
        wx.hideNavigationBarLoading(), wx.hideLoading();
        var t = require("md5.js")(o), n = wx.getStorageSync(t);
        if (n && n.data) return r.success && "function" == typeof r.success && r.success(n), 
        console.log("failreadcache:" + o), !0;
        r.fail && "function" == typeof r.fail && r.fail(e);
    }), _defineProperty(e, "complete", function(e) {
        r.complete && "function" == typeof r.complete && r.complete(e);
    }), e));
}, util.getUserInfo = function(n) {
    var e = function() {
        console.log("start login");
        var t = {
            sessionid: "",
            wxInfo: "",
            memberInfo: ""
        };
        wx.login({
            success: function(e) {
                util.request({
                    url: "auth/session/openid",
                    data: {
                        code: e.code
                    },
                    cachetime: 0,
                    success: function(e) {
                        e.data.errno || (t.sessionid = e.data.data.sessionid, wx.setStorageSync("userInfo", t), 
                        wx.getUserInfo({
                            success: function(e) {
                                t.wxInfo = e.userInfo, wx.setStorageSync("userInfo", t), util.request({
                                    url: "auth/session/userinfo",
                                    data: {
                                        signature: e.signature,
                                        rawData: e.rawData,
                                        iv: e.iv,
                                        encryptedData: e.encryptedData
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    cachetime: 0,
                                    success: function(e) {
                                        e.data.errno || (t.memberInfo = e.data.data, wx.setStorageSync("userInfo", t)), 
                                        "function" == typeof n && n(t);
                                    }
                                });
                            },
                            fail: function() {
                                "function" == typeof n && n(t);
                            },
                            complete: function() {}
                        }));
                    },
                    fail: function(e) {
                        console.log(e, "err session");
                    }
                });
            },
            fail: function() {
                wx.showModal({
                    title: "获取信息失败",
                    content: "请允许授权以便为您提供给服务",
                    success: function(e) {
                        e.confirm && util.getUserInfo();
                    }
                });
            }
        });
    }, t = wx.getStorageSync("userInfo");
    t.sessionid ? wx.checkSession({
        success: function() {
            "function" == typeof n && n(t);
        },
        fail: function() {
            t.sessionid = "", console.log("relogin"), wx.removeStorageSync("userInfo"), e();
        }
    }) : e();
}, util.navigateBack = function(t) {
    var e = t.delta ? t.delta : 1;
    if (t.data) {
        var n = getCurrentPages(), r = n[n.length - (e + 1)];
        r.pageForResult ? r.pageForResult(t.data) : r.setData(t.data);
    }
    wx.navigateBack({
        delta: e,
        success: function(e) {
            "function" == typeof t.success && t.success(e);
        },
        fail: function(e) {
            "function" == typeof t.fail && t.fail(e);
        },
        complete: function() {
            "function" == typeof t.complete && t.complete();
        }
    });
}, util.message = function(e, t, n) {
    if (!e) return !0;
    if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && (t = e.redirect, n = e.type, 
    e = e.title), t) {
        var r = t.substring(0, 9), a = "", o = "";
        "navigate:" == r ? (o = "navigateTo", a = t.substring(9)) : "redirect:" == r ? (o = "redirectTo", 
        a = t.substring(9)) : (a = t, o = "redirectTo");
    }
    n || (n = "success"), "success" == n ? wx.showToast({
        title: e,
        icon: "success",
        duration: 2e3,
        mask: !!a,
        complete: function() {
            a && setTimeout(function() {
                wx[o]({
                    url: a
                });
            }, 1800);
        }
    }) : "error" == n && wx.showModal({
        title: "系统信息",
        content: e,
        showCancel: !1,
        complete: function() {
            a && wx[o]({
                url: a
            });
        }
    });
}, util.user = util.getUserInfo, util.showLoading = function() {
    wx.getStorageSync("isShowLoading") && (wx.hideLoading(), wx.setStorageSync("isShowLoading", !1)), 
    wx.showLoading({
        title: "加载中",
        mask: !0,
        complete: function() {
            wx.setStorageSync("isShowLoading", !0);
        },
        fail: function() {
            wx.setStorageSync("isShowLoading", !1);
        }
    });
}, util.showImage = function(e) {
    var t = e ? e.currentTarget.dataset.preview : "";
    if (!t) return !1;
    wx.previewImage({
        urls: [ t ]
    });
}, util.parseContent = function(e) {
    if (!e) return e;
    var t = e.match(new RegExp([ "\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]" ].join("|"), "g"));
    if (t) for (var n in t) e = e.replace(t[n], "[U+" + t[n].codePointAt(0).toString(16).toUpperCase() + "]");
    return e;
}, util.date = function() {
    this.isLeapYear = function(e) {
        return 0 == e.getYear() % 4 && (e.getYear() % 100 != 0 || e.getYear() % 400 == 0);
    }, this.dateToStr = function(e, t) {
        e = e || "yyyy-MM-dd HH:mm:ss", t = t || new Date();
        var n = e;
        return n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(/yyyy|YYYY/, t.getFullYear())).replace(/yy|YY/, 9 < t.getYear() % 100 ? (t.getYear() % 100).toString() : "0" + t.getYear() % 100)).replace(/MM/, 9 < t.getMonth() ? t.getMonth() + 1 : "0" + (t.getMonth() + 1))).replace(/M/g, t.getMonth())).replace(/w|W/g, [ "日", "一", "二", "三", "四", "五", "六" ][t.getDay()])).replace(/dd|DD/, 9 < t.getDate() ? t.getDate().toString() : "0" + t.getDate())).replace(/d|D/g, t.getDate())).replace(/hh|HH/, 9 < t.getHours() ? t.getHours().toString() : "0" + t.getHours())).replace(/h|H/g, t.getHours())).replace(/mm/, 9 < t.getMinutes() ? t.getMinutes().toString() : "0" + t.getMinutes())).replace(/m/g, t.getMinutes())).replace(/ss|SS/, 9 < t.getSeconds() ? t.getSeconds().toString() : "0" + t.getSeconds())).replace(/s|S/g, t.getSeconds());
    }, this.dateAdd = function(e, t, n) {
        switch (n = n || new Date(), e) {
          case "s":
            return new Date(n.getTime() + 1e3 * t);

          case "n":
            return new Date(n.getTime() + 6e4 * t);

          case "h":
            return new Date(n.getTime() + 36e5 * t);

          case "d":
            return new Date(n.getTime() + 864e5 * t);

          case "w":
            return new Date(n.getTime() + 6048e5 * t);

          case "m":
            return new Date(n.getFullYear(), n.getMonth() + t, n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());

          case "y":
            return new Date(n.getFullYear() + t, n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());
        }
    }, this.dateDiff = function(e, t, n) {
        switch (e) {
          case "s":
            return parseInt((n - t) / 1e3);

          case "n":
            return parseInt((n - t) / 6e4);

          case "h":
            return parseInt((n - t) / 36e5);

          case "d":
            return parseInt((n - t) / 864e5);

          case "w":
            return parseInt((n - t) / 6048e5);

          case "m":
            return n.getMonth() + 1 + 12 * (n.getFullYear() - t.getFullYear()) - (t.getMonth() + 1);

          case "y":
            return n.getFullYear() - t.getFullYear();
        }
    }, this.strToDate = function(dateStr) {
        var data = dateStr, reCat = /(\d{1,4})/gm, t = data.match(reCat);
        return t[1] = t[1] - 1, eval("var d = new Date(" + t.join(",") + ");"), d;
    }, this.strFormatToDate = function(e, t) {
        var n = 0, r = -1, a = t.length;
        -1 < (r = e.indexOf("yyyy")) && r < a && (n = t.substr(r, 4));
        var o = 0;
        -1 < (r = e.indexOf("MM")) && r < a && (o = parseInt(t.substr(r, 2)) - 1);
        var i = 0;
        -1 < (r = e.indexOf("dd")) && r < a && (i = parseInt(t.substr(r, 2)));
        var s = 0;
        (-1 < (r = e.indexOf("HH")) || 1 < (r = e.indexOf("hh"))) && r < a && (s = parseInt(t.substr(r, 2)));
        var u = 0;
        -1 < (r = e.indexOf("mm")) && r < a && (u = t.substr(r, 2));
        var c = 0;
        return -1 < (r = e.indexOf("ss")) && r < a && (c = t.substr(r, 2)), new Date(n, o, i, s, u, c);
    }, this.dateToLong = function(e) {
        return e.getTime();
    }, this.longToDate = function(e) {
        return new Date(e);
    }, this.isDate = function(e, t) {
        null == t && (t = "yyyyMMdd");
        var n = t.indexOf("yyyy");
        if (-1 == n) return !1;
        var r = e.substring(n, n + 4), a = t.indexOf("MM");
        if (-1 == a) return !1;
        var o = e.substring(a, a + 2), i = t.indexOf("dd");
        if (-1 == i) return !1;
        var s = e.substring(i, i + 2);
        return !(!isNumber(r) || "2100" < r || r < "1900") && (!(!isNumber(o) || "12" < o || o < "01") && !(s > getMaxDay(r, o) || s < "01"));
    }, this.getMaxDay = function(e, t) {
        return 4 == t || 6 == t || 9 == t || 11 == t ? "30" : 2 == t ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? "29" : "28" : "31";
    }, this.isNumber = function(e) {
        return /^\d+$/g.test(e);
    }, this.toArray = function(e) {
        e = e || new Date();
        var t = Array();
        return t[0] = e.getFullYear(), t[1] = e.getMonth(), t[2] = e.getDate(), t[3] = e.getHours(), 
        t[4] = e.getMinutes(), t[5] = e.getSeconds(), t;
    }, this.datePart = function(e, t) {
        t = t || new Date();
        var n = "";
        switch (e) {
          case "y":
            n = t.getFullYear();
            break;

          case "M":
            n = t.getMonth() + 1;
            break;

          case "d":
            n = t.getDate();
            break;

          case "w":
            n = [ "日", "一", "二", "三", "四", "五", "六" ][t.getDay()];
            break;

          case "ww":
            n = t.WeekNumOfYear();
            break;

          case "h":
            n = t.getHours();
            break;

          case "m":
            n = t.getMinutes();
            break;

          case "s":
            n = t.getSeconds();
        }
        return n;
    }, this.maxDayOfDate = function(e) {
        (e = e || new Date()).setDate(1), e.setMonth(e.getMonth() + 1);
        var t = e.getTime() - 864e5;
        return new Date(t).getDate();
    };
}, util.getStorage = function(n) {
    return new Promise(function(t, e) {
        wx.getStorage({
            key: n,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                t(!1);
            }
        });
    });
}, util.redirectTo = function(e, t) {
    wx.redirectTo({
        url: t ? "../" + e + "/" + e + "?" + t : "../" + e + "/" + e,
        fail: function(e) {
            var t = e.errMsg;
            console.log(t, "err redirectTo");
        }
    });
}, util.navigateTo = function(e, t) {
    wx.navigateTo({
        url: t ? "../" + e + "/" + e + "?" + t : "../" + e + "/" + e,
        fail: function(e) {
            var t = e.errMsg;
            console.log(t, "err navigateTo");
        }
    });
}, util.reLaunch = function(e, t) {
    wx.reLaunch({
        url: t ? "../" + e + "/" + e + "?" + t : "../" + e + "/" + e,
        fail: function(e) {
            var t = e.errMsg;
            console.log(t, "err reLaunch");
        }
    });
}, util.dataset = function(e) {
    return e.currentTarget.dataset;
}, util.setNavigationBarTitle = function(e) {
    wx.setNavigationBarTitle({
        title: e
    });
}, util.showModal = function(e, t, n, r) {
    wx.showModal({
        title: "提示",
        content: e,
        success: function(e) {
            e.confirm ? (console.log("用户点击确定"), t && t()) : e.cancel && (console.log("用户点击取消"), 
            n && n());
        },
        confirmText: r || "确定"
    });
}, util.upLoadUrl = function(e) {
    require("underscore.js"), require("md5.js"), getApp();
    (e = e || {}).cachetime = e.cachetime ? e.cachetime : 0, e.showLoading = void 0 === e.showLoading || e.showLoading;
    var t = wx.getStorageSync("userInfo").sessionid, n = e.url;
    if (-1 == n.indexOf("http://") && -1 == n.indexOf("https://") && (n = util.url(n)), 
    getUrlParam(n, "state") || e.data && e.data.state || !t || (n = n + "&state=we7sid-" + t), 
    !e.data || !e.data.m) {
        var r = getCurrentPages();
        console.log(r), r.length && (r = r[getCurrentPages().length - 1]) && r.__route__ && (n = n + "&m=" + r.__route__.split("/")[0]);
    }
    var a = getSign(n, e.data);
    return a && (n = n + "&sign=" + a), n || !1;
}, module.exports = util;