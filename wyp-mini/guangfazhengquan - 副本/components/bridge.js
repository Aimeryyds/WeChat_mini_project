function e(e) {
    return wx.navigateTo(e);
}

function t(e) {
    for (var t = getCurrentPages(), n = 0, r = t.length; n < r; n++) if (t[n].__route__ == e) return n;
    return -1;
}

function n(e) {
    return wx.navigateBack(e);
}

function r() {
    var e = new o.default();
    return wx.login({
        success: function(t) {
            e.resolve(t);
        },
        fail: function() {
            e.reject();
        }
    }), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSystemInfo = function() {
    var e = new o.default();
    return wx.getSystemInfo({
        success: function(t) {
            e.resolve(t);
        },
        fail: function() {
            e.reject();
        }
    }), e;
}, exports.request = function(e, t) {
    var n = new o.default(), r = wx.request((0, u.assign)({}, e, {
        success: function(e) {
            e.statusCode >= 200 && e.statusCode < 300 || 304 == e.statusCode ? n.resolve.apply(n, arguments) : n.reject.apply(n, arguments);
        },
        fail: function(e) {
            n.reject.apply(n, arguments);
        }
    }));
    return t && (t.requestTask = r), setTimeout(function() {
        if ("pending" == n.state) {
            n.reject("timeout");
            try {
                r && r.abort();
            } catch (e) {}
        }
    }, e.timeout - (+new Date() - e.timestamp)), n;
}, exports.navigateTo = e, exports.redirectTo = function(e) {
    return wx.redirectTo(e);
}, exports.getPageIndex = t, exports.getCurrentPage = function() {
    var e = getCurrentPages();
    return e[e.length - 1];
}, exports.isLatestPage = function(e) {
    var t = getCurrentPages();
    return 0 == t[t.length - 1].__route__.indexOf(e);
}, exports.navigateBack = n, exports.navigateBackTo = function(r) {
    var o = t(r.url);
    -1 != o ? n({
        delta: getCurrentPages().length - o
    }) : e(r);
}, exports.createAnimation = function(e) {
    return wx.createAnimation(e);
}, exports.setNavigationBarTitle = function(e) {
    return wx.setNavigationBarTitle(e);
}, exports.getStorage = function(e) {
    var t = new o.default();
    return wx.getStorage((0, u.assign)({
        success: function(e) {
            t.resolve(e);
        },
        fail: function() {
            t.reject();
        }
    }, e)), t;
}, exports.getStorageSync = function(e) {
    return wx.getStorageSync(e);
}, exports.setStorage = function(e) {
    var t = new o.default();
    return wx.setStorage((0, u.assign)({
        success: function() {
            t.resolve();
        },
        fail: function() {
            t.reject();
        }
    }, e)), t;
}, exports.setStorageSync = function(e, t) {
    return wx.setStorageSync(e, t);
}, exports.removeStorage = function(e) {
    var t = new o.default();
    return wx.removeStorage((0, u.assign)({
        success: function() {
            t.resolve();
        },
        fail: function() {
            t.reject();
        }
    }, e)), t;
}, exports.removeStorageSync = function(e) {
    return wx.removeStorageSync(e);
}, exports.createCanvasContext = function(e) {
    return wx.createCanvasContext(e);
}, exports.login = r, exports.getUserInfo = function() {
    var e = new o.default();
    return r().done(function() {
        wx.getUserInfo({
            success: function(t) {
                e.resolve(t);
            },
            fail: function() {
                e.reject();
            }
        });
    }).fail(function() {
        e.reject();
    }), e;
}, exports.setTopBarText = function(e) {
    try {
        wx.setTopBarText && wx.setTopBarText(e);
    } catch (e) {}
}, exports.reLaunch = function(e) {
    return wx.reLaunch(e);
}, exports.getNetworkType = function() {
    var e = new o.default();
    return wx.getNetworkType({
        success: function(t) {
            e.resolve(t);
        },
        fail: function(t) {
            e.reject();
        }
    }), e;
}, exports.onNetworkStatusChange = function(e) {
    return wx.onNetworkStatusChange(e);
};

var o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./deferred")), u = require("./utils");