function t(t) {
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(n, o) {
            e.success = function(t) {
                n(t);
            }, e.fail = function(t) {
                o(t);
            }, t(e);
        });
    };
}

module.exports = {
    getRequestP: function(e, n, o) {
        return t(wx.request)({
            url: e,
            method: "GET",
            data: o,
            header: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                cookie: n
            }
        });
    },
    postRequestP: function(e, n, o) {
        return t(wx.request)({
            url: e,
            method: "POST",
            data: o,
            header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                cookie: n
            }
        });
    },
    postRequestPText: function(e, n, o) {
        return t(wx.request)({
            url: e,
            method: "POST",
            data: o,
            dataType: "text",
            header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                cookie: n
            }
        });
    },
    getNetworkTypeP: function(e) {
        return t(wx.getNetworkType);
    },
    getRequest: function(t, e, n, o, c, u) {
        return wx.request({
            url: t,
            method: "GET",
            data: n,
            header: {
                "Content-Type": "application/json",
                cookie: e
            },
            success: function(t) {
                "function" == typeof o && o(t);
            },
            fail: function(t) {
                "function" == typeof c && c(t);
            },
            complete: function(t) {
                "function" == typeof u && u(t);
            }
        });
    },
    postRequest: function(t, e, n, o, c, u) {
        return wx.request({
            url: t,
            method: "POST",
            data: n,
            header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                cookie: e
            },
            success: function(t) {
                "function" == typeof o && o(t);
            },
            fail: function(t) {
                "function" == typeof c && c(t);
            },
            complete: function(t) {
                "function" == typeof u && u(t);
            }
        });
    },
    getNetworkType: function(t, e, n) {
        wx.getNetworkType({
            success: function(e) {
                "function" == typeof t && t(e);
            },
            fail: function(t) {
                "function" == typeof e && e(t);
            },
            complete: function(t) {
                "function" == typeof n && n(t);
            }
        });
    },
    postMessage: function(e, n, o) {
        return t(wx.request)({
            url: e,
            method: "POST",
            data: o,
            header: {
                "content-type": "application/json;charset=utf-8",
                "cache-control": "no-cache",
                cookie: n
            }
        });
    }
}, Promise.prototype.finally = function(t) {
    var e = this.constructor;
    return this.then(function(n) {
        return e.resolve(t()).then(function() {
            return n;
        });
    }, function(n) {
        return e.resolve(t()).then(function() {
            throw n;
        });
    });
};