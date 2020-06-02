var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, r) {
    "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : t["axios-miniprogram-adapter"] = r();
}(void 0, function() {
    function t(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    function r(e) {
        return "[object Array]" === a.call(e);
    }
    function n(t) {
        return null !== t && "object" == (void 0 === t ? "undefined" : e(t));
    }
    function o(e) {
        return "[object Function]" === a.call(e);
    }
    function i(t, n) {
        if (null != t) if ("object" != (void 0 === t ? "undefined" : e(t)) && (t = [ t ]), 
        r(t)) for (var o = 0, i = t.length; o < i; o++) n.call(null, t[o], o, t); else for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && n.call(null, t[u], u, t);
    }
    function u(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    var a = Object.prototype.toString, f = {
        isArray: r,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === a.call(e);
        },
        isBuffer: function(e) {
            return null != e && (t(e) || "function" == typeof (r = e).readFloatLE && "function" == typeof r.slice && t(r.slice(0, 0)) || !!e._isBuffer);
            var r;
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function(e) {
            return "string" == typeof e;
        },
        isNumber: function(e) {
            return "number" == typeof e;
        },
        isObject: n,
        isUndefined: function(e) {
            return void 0 === e;
        },
        isDate: function(e) {
            return "[object Date]" === a.call(e);
        },
        isFile: function(e) {
            return "[object File]" === a.call(e);
        },
        isBlob: function(e) {
            return "[object Blob]" === a.call(e);
        },
        isFunction: o,
        isStream: function(e) {
            return n(e) && o(e.pipe);
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
        },
        forEach: i,
        merge: function t() {
            for (var r = {}, n = 0, o = arguments.length; n < o; n++) i(arguments[n], function(n, o) {
                "object" == e(r[o]) && "object" == (void 0 === n ? "undefined" : e(n)) ? r[o] = t(r[o], n) : r[o] = n;
            });
            return r;
        },
        extend: function(e, t, r) {
            return i(t, function(t, n) {
                var o, i;
                e[n] = r && "function" == typeof t ? (o = t, i = r, function() {
                    for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                    return o.apply(i, e);
                }) : t;
            }), e;
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
    }, c = function(e, t, r, n, o) {
        var i, u, a, f, c;
        return u = t, a = r, f = n, c = o, (i = new Error(e)).config = u, a && (i.code = a), 
        i.request = f, i.response = c, i;
    }, s = "wechat", d = console.warn;
    return function(t) {
        var r = function() {
            switch (!0) {
              case "object" == ("undefined" == typeof wx ? "undefined" : e(wx)):
                return s = "wechat", wx.request.bind(wx);

              case "object" == ("undefined" == typeof swan ? "undefined" : e(swan)):
                return s = "baidu", swan.request.bind(swan);

              case "object" == ("undefined" == typeof my ? "undefined" : e(my)):
                return s = "alipay", (my.request || my.httpRequest).bind(my);

              default:
                return wx.request.bind(wx);
            }
        }();
        return new Promise(function(e, n) {
            var o, i = t.data, a = t.headers, l = {
                method: t.method && t.method.toUpperCase() || "GET",
                url: function(e, t, r) {
                    if (!t) return e;
                    var n;
                    if (r) n = r(t); else if (f.isURLSearchParams(t)) n = t.toString(); else {
                        var o = [];
                        f.forEach(t, function(e, t) {
                            null != e && (f.isArray(e) ? t += "[]" : e = [ e ], f.forEach(e, function(e) {
                                f.isDate(e) ? e = e.toISOString() : f.isObject(e) && (e = JSON.stringify(e)), o.push(u(t) + "=" + u(e));
                            }));
                        }), n = o.join("&");
                    }
                    return n && (e += (-1 === e.indexOf("?") ? "?" : "&") + n), e;
                }(t.url, t.params, t.paramsSerializer),
                success: function(r) {
                    var o, i, u, a, f, s, d, p, y, m, b = (i = t, u = l, a = (o = r).header || o.headers, 
                    f = o.statusCode || o.status, s = "", 200 === f ? s = "OK" : 400 === f && (s = "Bad Request"), 
                    {
                        data: o.data,
                        status: f,
                        statusText: s,
                        headers: a,
                        config: i,
                        request: u
                    });
                    d = e, p = n, m = (y = b).config.validateStatus, y.status && m && !m(y.status) ? p(c("Request failed with status code " + y.status, y.config, null, y.request, y)) : d(y);
                },
                fail: function(e) {
                    !function(e, t, r) {
                        switch (s) {
                          case "wechat":
                            t(-1 !== e.errMsg.indexOf("request:fail abort") ? c("Request aborted", r, "ECONNABORTED", "") : -1 !== e.errMsg.indexOf("timeout") ? c("timeout of " + r.timeout + "ms exceeded", r, "ECONNABORTED", "") : c("Network Error", r, null, ""));
                            break;

                          case "alipay":
                            t([ 14, 19 ].includes(e.error) ? c("Request aborted", r, "ECONNABORTED", "") : [ 13 ].includes(e.error) ? c("timeout of " + r.timeout + "ms exceeded", r, "ECONNABORTED", "") : c("Network Error", r, null, ""));
                            break;

                          case "baidu":
                            t(c("Network Error", r, null, ""));
                        }
                    }(e, n, t);
                },
                complete: function() {
                    o = void 0;
                }
            };
            if (t.auth) {
                var p = [ t.auth.username || "", t.auth.password || "" ], y = p[0], m = p[1];
                a.Authorization = "Basic " + function(e) {
                    for (var t, r, n = String(e), o = 0, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = ""; n.charAt(0 | o) || (i = "=", 
                    o % 1); u += i.charAt(63 & t >> 8 - o % 1 * 8)) {
                        if (255 < (r = n.charCodeAt(o += .75))) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        t = t << 8 | r;
                    }
                    return u;
                }(y + ":" + m);
            }
            0 !== t.timeout && d('The "timeout" option is not supported by miniprogram. For more information about usage see "https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#全局配置"'), 
            f.forEach(a, function(e, t) {
                var r = t.toLowerCase();
                (void 0 === i && "content-type" === r || "referer" === r) && delete a[t];
            }), l.header = a, t.responseType && (l.responseType = t.responseType), t.cancelToken && t.cancelToken.promise.then(function(e) {
                o && (o.abort(), n(e), o = void 0);
            }), function(e) {
                try {
                    return "string" == typeof e && e.length && (e = JSON.parse(e)) && "[object Object]" === Object.prototype.toString.call(e);
                } catch (e) {
                    return !1;
                }
            }(i) && (i = JSON.parse(i)), void 0 !== i && (l.data = i), o = r(l);
        });
    };
});