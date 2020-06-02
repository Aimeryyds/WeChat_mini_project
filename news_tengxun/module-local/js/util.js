var e = require("../../@babel/runtime/helpers/interopRequireWildcard"), t = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.extend = f, exports.getRect = function(e, t, n) {
    var o = n ? n.createSelectorQuery : wx.createSelectorQuery;
    if (!o) return wx.showModal({
        title: "提示",
        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    }), {};
    o().select(e).boundingClientRect().exec(function(e) {
        "function" == typeof t && t(e[0]);
    });
}, exports.getViewportInfo = function(e, t) {
    var n = t ? t.createSelectorQuery : wx.createSelectorQuery;
    if (!n) return wx.showModal({
        title: "提示",
        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    }), {};
    n().selectViewport().scrollOffset(function(t) {
        "function" == typeof e && e(t);
    }).exec();
}, exports.getScrollOffset = function(e, t) {
    return new Promise(function(n) {
        e.selectComponent(t).getScrollOffset(function(e) {
            n(e);
        });
    });
}, exports.getOffsetTop = function(e, t) {
    var n = e ? e.createSelectorQuery : wx.createSelectorQuery;
    return new Promise(function(e) {
        n().selectAll(t).boundingClientRect(function(t) {
            e(t);
        }).exec();
    });
}, exports.fetch = function(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "POST";
    t && (t = /\?/.test(e) ? "&".concat(u(t)) : "?".concat(u(t)), e += t);
    var r = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    r.location = p(), r.openid = i.userInfo.openid, r.news_token = i.userInfo.news_token || "", 
    r.cmnid = i.userInfo.cmnid;
    var a = "POST" === o ? Object.assign({}, c.comPostInfo, n) : {};
    return new Promise(function(t, n) {
        wx.request({
            url: e,
            data: a,
            method: o,
            header: r,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                n(e);
            }
        });
    });
}, exports.postJson = function(e, t, n, o) {
    t && (t = /\?/.test(e) ? "&".concat(u(t)) : "?".concat(u(t)), e += t);
    var r = {
        "Content-Type": "application/json"
    };
    r.location = p(), r.openid = c.comPostInfo.openid, r.news_token = c.comPostInfo.news_token || "", 
    r.cmnid = c.comPostInfo.cmnid;
    var i = f(c.comPostInfo, n);
    return new Promise(function(t, n) {
        wx.request({
            url: e,
            data: i,
            method: "POST",
            header: r,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                n(e);
            }
        });
    });
}, exports.setStorage = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e && wx.setStorage({
        key: e,
        data: JSON.stringify(t)
    });
}, exports.setStorageSync = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e && wx.setStorageSync(e, JSON.stringify(t));
}, exports.getStorage = l, exports.transNum = d, exports.getArticleUrl = m, exports.formatFeedList = function(e) {
    var t = [];
    return e && e.forEach(function(e) {
        var n = g(e), o = [];
        e.newsList && (e.newsList.forEach(function(e) {
            var t = g(e);
            o.push(t);
        }), n.newsList = o), t.push(n);
    }), t;
}, exports.parseDate = function(e, t) {
    t || (t = "yyyy-MM-dd hh:mm:ss");
    t = t.split(/\W/), e = e.split(/\D/);
    for (var n = 2e3, o = 0, r = 1, i = 0, a = 0, s = 0, c = 0; c < t.length; c++) {
        var u = t[c];
        "" == e[c] || isNaN(e[c]) || (u.hasString("y") && (n = Number(e[c])), u.hasString("M") && (o = Number(e[c]) - 1), 
        u.hasString("d") && (r = Number(e[c])), u.hasString("h") && (i = Number(e[c])), 
        u.hasString("m") && (a = Number(e[c])), u.hasString("s") && (s = Number(e[c])), 
        u.hasString("w") && (s = Number(e[c])));
    }
    return new Date(n, o, r, i, a, s);
}, exports.formatTimeExt = h, exports.formatDiffTime = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    if (!e) return "";
    var n = parseInt(new Date().getTime() / 1e3) - e, o = "";
    o = n < 60 ? "刚刚" : n / 60 < 60 ? parseInt(n / 60) + "分钟前" : n / 3600 < 24 ? parseInt(n / 3600) + "小时前" : 1 === t || 2 === t ? parseInt(n / 86400) + "天前" : h(1e3 * e, "yyyy-MM-dd");
    return o;
}, exports.formatTimeText5 = function(e) {
    if (!e) return "";
    var t = parseInt(new Date().getTime() / 1e3) - e, n = "";
    switch (!0) {
      case t < 60:
        n = "刚刚";
        break;

      case t / 60 < 60:
        n = parseInt(t / 60) + "分钟前";
        break;

      case t / 3600 < 7:
        n = parseInt(t / 3600) + "小时前";
    }
    return n;
}, exports.getQueryIndex = function(e, t, n) {
    var o, r = e.length;
    for (;r--; ) {
        var i = e[r];
        if (i[t] === n) {
            o = r;
            break;
        }
    }
    return o;
}, exports.INT = function(e) {
    return Match.round(e);
}, exports.fetchImageUrl = function(e, t) {
    var n = "";
    e && (n = "https://wxapp.inews.qq.com/generateImage?from=wxapp&type=".concat(t, "&id=").concat(e));
    return n;
}, exports.formatPhone = function(e) {
    return e.substr(0, 3) + "****" + e.substr(e.length - 4);
}, exports.getIdByScene = function(e) {
    var t = decodeURIComponent(e), n = "";
    if (t) {
        var o = t.split(",");
        o.length > 0 && (n = o[0]);
    }
    return n;
}, exports.shouldShowTip = function() {
    for (var e = [ "pages/jump/jump", "pages/newsflash/index", "pages/mine/index" ], t = getCurrentPages(), n = !1, o = 0; o < t.length; ++o) {
        var r = t[o];
        if (-1 != e.indexOf(r.route)) {
            n = !0;
            break;
        }
    }
    return 0 == n;
}, exports.login = v, exports.rep = function(e) {
    var t = this;
    (0, s.report)(e);
    var n = function() {
        "pv" == e.opType && (e.opType = "");
        var n = Object.assign({}, e);
        delete n.opType, c.comPostInfo.chlid ? (n.chlid = c.comPostInfo.chlid, n.chlname = c.comPostInfo.chlname, 
        c.rudata.cstat(e.opType, n)) : t.loc().then(function(t) {
            n.chlid = c.comPostInfo.chlid, n.chlname = c.comPostInfo.chlname, c.rudata.cstat(e.opType, n);
        });
    };
    c.rudata.option.ruid ? n() : v().then(function() {
        n();
    });
}, exports.reportPageLeave = function(e, t) {
    var n = this;
    !function(e, t) {
        if (t = t || {}, e && t) {
            var n = {
                beginTime: t.beginTime || 0,
                endTime: parseInt(new Date().getTime() / 1e3),
                fromPage: e,
                duration: 0
            };
            n.beginTime && n.endTime > n.beginTime && (n.duration = n.endTime - n.beginTime);
            var o = (wx.getSystemInfoSync() || {}).platform;
            "ios" == o ? n.opType = "page_leave_ios" : "android" == o ? n.opType = "page_leave_android" : "devtools" == o && (n.opType = "page_leave_devtools"), 
            (0, s.report)(n);
        }
    }(e, t);
    var o = function() {
        var o = JSON.parse(n.getStorage("_rudata_page_vv") || "{}"), r = +new Date();
        (!o[e] || r - o[e] > 18e5) && (c.rudata.cstat("page_vv", {
            fromPage: e,
            beginTime: t.data.start,
            chlid: c.comPostInfo.chlid,
            chlname: c.comPostInfo.chlname
        }), o[e] = r, n.setStorage("_rudata_page_vv", JSON.stringify(o))), c.rudata.cstat("page_leave", {
            fromPage: e,
            beginTime: t.data.start,
            useTime: parseInt(r / 1e3 - t.data.start),
            chlid: c.comPostInfo.chlid,
            chlname: c.comPostInfo.chlname
        });
    };
    c.rudata.option.ruid ? o() : v().then(function() {
        o();
    });
}, exports.vercompare = function(e, t) {
    for (var n = e.split("."), o = t.split("."), r = Math.min(n.length, o.length), i = 0; i < r; i++) {
        if (n[i] > o[i]) return 1;
        if (n[i] < o[i]) return -1;
    }
    return 0;
}, exports.loc = function() {
    var e = this.getStorage(o.STORAGE_LC_SELECTED_CITYINFO), t = function(e) {
        e.chlid || (e.chlname = o.defaultCityInfo.chlname, e.chlid = o.defaultCityInfo.chlid), 
        c.comPostInfo.chlid = e.chlid, c.comPostInfo.chlname = e.chlname;
    };
    return new Promise(function(n, o) {
        e ? (t(e), n(e)) : (0, r.locationAuth)(function(e) {
            t(e), n(e);
        });
    });
}, exports.getDataListDiff = function(e, t) {
    var n = e.map(function(e) {
        return e.id;
    });
    return t.filter(function(e) {
        return -1 === n.indexOf(e.id);
    });
}, exports.deepClone = function(e) {
    var t;
    try {
        t = JSON.stringify(e);
    } catch (e) {
        throw e;
    }
    try {
        t = JSON.parse(t);
    } catch (e) {
        throw e;
    }
    return t;
};

var n = t(require("../../@babel/runtime/helpers/typeof")), o = e(require("./const")), r = require("./store/city"), i = require("../../store/index"), a = require("../../services/jump"), s = require("../../services/report"), c = getApp().global;

function u(e) {
    var t = [];
    for (var n in e) e.hasOwnProperty(n) && t.push("".concat(n, "=").concat(encodeURIComponent(e[n])));
    return t.join("&");
}

function f(e) {
    for (var t = 0, n = arguments.length <= 1 ? 0 : arguments.length - 1; t < n; t++) {
        var o = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
        for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r]);
    }
    return e;
}

function p() {
    var e = l(o.STORAGE_LC_LOCATION_LAT_LNG), t = "";
    return e && e.longitude && (t = "".concat(e.longitude, ",").concat(e.latitude)), 
    t;
}

function l(e) {
    var t = wx.getStorageSync(e), n = "";
    return t && (n = JSON.parse(t)), n;
}

function d(e) {
    var t = 0;
    switch ((e = parseInt(e)) >= 0) {
      case 0 === parseInt(e):
        t = 0;
        break;

      case e < 1e4:
        t = e;
        break;

      case e < 1e8:
        t = e % 1e4 <= 999 ? parseInt(e / 1e4) + "万" : parseFloat(e / 1e4).toFixed(1) + "万";
        break;

      default:
        t = e % 1e8 <= 999999 ? parseInt(e / 1e8) + "亿" : parseFloat(e / 1e8).toFixed(1) + "亿";
    }
    return t;
}

function m(e) {
    return 11 === e.showType ? (7, (0, a.toUrl)(a.PAGE_PATH.LOCAL_ACTIVE, {
        id: e.id,
        link: e.link
    })) : 12 === e.showType ? (9, (0, a.toUrl)(a.PAGE_PATH.LOCAL_ARTICLE, {
        id: e.id,
        link: e.link
    })) : (0, a.atypeToUrl)(e.atype, {
        id: e.id,
        link: e.link
    });
}

function g(e) {
    var t = e;
    return t.pathUrl = m(e), e.comments && (t.comments = d(e.comments)), e.video_info && e.video_info.playcount && (e.playcountstr = d(e.video_info.playcount)), 
    t;
}

function h(e, t) {
    var n = e ? new Date(e) : new Date(), o = {
        "M+": n.getMonth() + 1,
        "d+": n.getDate(),
        "h+": n.getHours(),
        "m+": n.getMinutes(),
        "s+": n.getSeconds(),
        "q+": Math.floor((n.getMonth() + 3) / 3),
        S: n.getMilliseconds()
    };
    for (var r in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), 
    o) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[r] : ("00" + o[r]).substr(("" + o[r]).length)));
    return 1901 == n.getFullYear() ? "" : t;
}

function v() {
    return new Promise(function(e, t) {
        wx.login({
            success: function(n) {
                wx.request({
                    url: o.api.login,
                    data: {
                        code: n.code
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(n) {
                        0 == (n = n.data).ret ? (c.comPostInfo.cmnid = n.userInfo.cmnid, c.comPostInfo.news_token = n.userInfo.news_token, 
                        c.comPostInfo.openid = n.userInfo.openid, c.comPostInfo.unionid = n.userInfo.unionid, 
                        c.rudata.option.ruid = n.userInfo.openid, e(n.userInfo)) : (t(n), wx.showToast({
                            title: "信息获取失败",
                            duration: 2e3
                        }));
                    },
                    fail: function(e) {
                        t(e), wx.showToast({
                            title: "网络错误",
                            duration: 2e3
                        });
                    }
                });
            },
            fail: function(e) {
                t(e), wx.showToast({
                    title: "code获取失败",
                    duration: 2e3
                });
            },
            complete: function(e) {}
        });
    });
}

String.prototype.hasString = function(e) {
    if ("object" == (0, n.default)(e)) {
        for (var t = 0, o = e.length; t < o; t++) if (!this.hasString(e[t])) return !1;
        return !0;
    }
    if (-1 != this.indexOf(e)) return !0;
};