function e(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function t(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : o(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.badmp = t();
}(void 0, function() {
    var o = {
        serializeObj: function(e) {
            var t = "";
            return Object.keys(e).forEach(function(r) {
                o.isObj(e[r]) ? t += r + "=" + JSON.stringify(e[r]) : t += r + "=" + e[r] + "^";
            }), encodeURIComponent(t.substr(0, t.length - 1));
        },
        deepMerge: function(e, t) {
            for (var r in e) void 0 !== t[r] && (this.isObj(e[r]) ? this.deepMerge(e[r], t[r]) : e[r] = t[r]);
            return e;
        },
        typeDecide: function(e, t) {
            return Object.prototype.toString.call(e) === "[object " + t + "]";
        },
        isFunction: function(e) {
            return o.typeDecide(e, "Function");
        },
        isString: function(e) {
            return o.typeDecide(e, "String");
        },
        isArray: function(e) {
            return o.typeDecide(e, "Array");
        },
        isObj: function(e) {
            return o.typeDecide(e, "Object");
        },
        isReg: function(e) {
            return o.typeDecide(e, "RegExp");
        },
        now: function() {
            return new Date().getTime();
        },
        noop: function() {}
    }, i = new (function() {
        function e() {
            r(this, e), this.config = {
                env: "",
                namespace: "",
                productId: void 0,
                report: {
                    url: "https://pan.baidu.com/bpapi/analytics",
                    delay: 1e3,
                    merge: !1,
                    crumbLength: 5,
                    systemInfo: !1,
                    locationInfo: !1
                },
                http: {
                    slient: !1,
                    code: /^2/,
                    data: !1,
                    timeout: 5e3,
                    filter: []
                },
                other: {
                    random: 1,
                    repeat: 5,
                    except: []
                }
            };
        }
        return e;
    }())().config, u = function() {
        function e() {
            r(this, e), this.handlers = {};
        }
        return n(e, [ {
            key: "on",
            value: function(e, t) {
                return this.handlers[e] = this.handlers[e] || [], this.handlers[e].push(t), this.handlers[e];
            }
        }, {
            key: "off",
            value: function(e) {
                this.handlers[e] && delete this.handlers[e];
            }
        }, {
            key: "trigger",
            value: function(e, t) {
                var r = this, n = t || [], o = this.handlers[e];
                return !o || o.every(function(e) {
                    return !1 !== e.apply(r, n);
                });
            }
        } ]), e;
    }(), a = function(a) {
        function c() {
            var t;
            return r(this, c), t = e(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this)), 
            t.errorQueue = [], t.repeatList = {}, t.config = i, [ "log", "debug", "info", "warn", "error" ].forEach(function(e, r) {
                t[e] = function(n) {
                    return t.handleMsg(n, e, r);
                };
            }), t;
        }
        return t(c, u), n(c, [ {
            key: "repeat",
            value: function(e) {
                var t = e.rowNum || "", r = e.colNum || "", n = e.msg + t + r;
                return this.repeatList[n] = this.repeatList[n] ? this.repeatList[n] + 1 : 1, this.repeatList[n] > this.config.other.repeat;
            }
        }, {
            key: "except",
            value: function(e) {
                var t = this.config.other.except, r = !1, n = null;
                if (o.isArray(t)) for (var i = 0, u = t.length; i < u; i++) if (n = t[i], o.isReg(n) && n.test(e.msg)) {
                    r = !0;
                    break;
                }
                return r;
            }
        }, {
            key: "request",
            value: function(e, t, r) {
                var n = this.getActivePage(), o = n.route ? n.route.replace(/\//g, "-") : "INIT-PAGE";
                t.type = "mp-" + this.config.namespace + "-" + o, this.config.env.request({
                    url: e,
                    method: "GET",
                    data: t,
                    success: r
                });
            }
        }, {
            key: "getActivePage",
            value: function() {
                var e = getCurrentPages();
                return e.length ? e[e.length - 1] : {};
            }
        }, {
            key: "report",
            value: function(e) {
                var t = this, r = this.config.report.merge;
                if (0 === this.errorQueue.length) return this.config.report.url;
                var n = r ? this.errorQueue : this.errorQueue.shift();
                r && (this.errorQueue = []);
                var o = this.config.report.url, i = {
                    error: n,
                    systemInfo: this.systemInfo,
                    breadcrumbs: this.breadcrumbs,
                    locationInfo: this.locationInfo,
                    networkType: this.networkType,
                    title: n.msg,
                    productId: this.config.productId
                };
                return this.request(o, i, function() {
                    e && e.call(t), t.trigger("afterReport");
                }), o;
            }
        }, {
            key: "send",
            value: function(e) {
                var t = this;
                if (this.trigger("beforeReport")) {
                    var r = e || o.noop, n = this.config.report.merge ? this.config.report.delay : 0;
                    setTimeout(function() {
                        t.report(r);
                    }, n);
                }
            }
        }, {
            key: "catchError",
            value: function(e) {
                return !(Math.random() >= this.config.other.random) && !this.repeat(e) && !this.except(e) && (this.errorQueue.push(e), 
                this.errorQueue);
            }
        }, {
            key: "handleMsg",
            value: function(e, t, r) {
                if (!e) return !1;
                var n = o.isObj(e) ? e : {
                    msg: e
                };
                return n.msg = "[object Object]" === String(n.msg) ? JSON.stringify(n.msg) : String(n.msg), 
                n.level = r, n.type = t, n.time = Date.now(), this.catchError(n) && this.send(), 
                n;
            }
        } ]), c;
    }();
    return new (function(i) {
        function u() {
            var t;
            return r(this, u), t = e(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this)), 
            t.breadcrumbs = [], t.activePage = {}, t;
        }
        return t(u, a), n(u, [ {
            key: "init",
            value: function(e) {
                try {
                    if (!this.paramVerify(e)) return;
                    this.config = o.deepMerge(this.config, e), this.rewriteApp(), this.rewritePage(), 
                    this.config.http.slient || (this.rewriteRequest(), this.rewriteDownload());
                } catch (e) {}
            }
        }, {
            key: "paramVerify",
            value: function(e) {
                if (!e.env || !e.namespace || !e.env) throw new Error("Please set required key in badmp.init");
                return !0;
            }
        }, {
            key: "rewriteApp",
            value: function() {
                var e = App, t = this;
                App = function(r) {
                    try {
                        return [ "onLaunch", "onShow", "onHide", "onError" ].forEach(function(e) {
                            var n = r[e];
                            "onLaunch" === e && (t.getNetworkType(), t.config.report.locationInfo && t.getLocation(), 
                            t.config.report.systemInfo && t.getSystemInfo()), r[e] = function(r) {
                                var i = {
                                    type: "function",
                                    time: o.now(),
                                    belong: "App",
                                    method: e,
                                    path: r && r.path,
                                    query: r && r.query,
                                    scene: r && r.scene
                                };
                                return t.pushToBreadcrumb(i), "onError" === e && t.error({
                                    msg: r
                                }), n && n.call(this, r);
                            };
                        }), e(r);
                    } catch (n) {
                        return t.error({
                            msg: n
                        }), e(r);
                    }
                };
            }
        }, {
            key: "rewritePage",
            value: function() {
                var e = this, t = Page;
                Page = function(r) {
                    try {
                        return Object.keys(r).forEach(function(t) {
                            "function" == typeof r[t] && e.recordPageFn(r, t);
                        }), r.onReady || e.recordPageFn(r, "onReady"), r.onLoad || e.recordPageFn(r, "onLoad"), 
                        t(r);
                    } catch (n) {
                        return e.error({
                            msg: n
                        }), t(r);
                    }
                };
            }
        }, {
            key: "rewriteRequest",
            value: function() {
                var e = this, t = this.config.env, r = t.request;
                Object.defineProperty(t, "request", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        var t = arguments[0] || {};
                        try {
                            if (t.url.indexOf(e.config.report.url) > -1) return r.apply(this, arguments);
                            var n = e.config.http.filter;
                            if (o.isArray(n)) for (var i = 0, u = n.length; i < u; i++) {
                                var a = n[i], c = t.url.indexOf(a.url.toLowerCase()) > -1, s = t.method.indexOf(a.method.toUpperCase()) > -1;
                                if (c && s) return r.apply(this, arguments);
                            }
                            var f = setTimeout(function() {
                                var r = {
                                    url: t.url,
                                    info: "http_timeout"
                                };
                                e.error({
                                    msg: r
                                });
                            }, e.config.http.timeout), h = t.success, l = t.fail;
                            return t.success = function(r) {
                                h && h(r);
                                var n = +r.statusCode, i = e.config.http.code;
                                if (o.isReg(i) && !i.test(n)) {
                                    var u = {
                                        url: t.url,
                                        info: "http_codeError",
                                        statusCode: n,
                                        Yld: r.header.Yld || null,
                                        Logid: r.header.Logid || null,
                                        data: e.config.http.data ? r : void 0
                                    };
                                    e.error({
                                        msg: u
                                    });
                                }
                            }, t.fail = function(t) {
                                l && l(t), e.error({
                                    msg: t
                                });
                            }, t.complete = function() {
                                clearTimeout(f);
                            }, r.apply(this, arguments);
                        } catch (t) {
                            return e.error({
                                msg: t
                            }), r.apply(this, arguments);
                        }
                    }
                });
            }
        }, {
            key: "rewriteDownload",
            value: function() {
                var e = this, t = this.config.env, r = t.downloadFile;
                Object.defineProperty(t, "downloadFile", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        try {
                            var t = arguments[0] || {}, n = t.success, i = t.fail;
                            return t.success = function(r) {
                                n && n(r);
                                var i = +r.statusCode, u = e.config.http.code;
                                if (o.isReg(u) && !u.test(i)) {
                                    var a = {
                                        url: t.url,
                                        info: "http_codeError",
                                        statusCode: i
                                    };
                                    e.error({
                                        msg: a
                                    });
                                }
                            }, t.fail = function(t) {
                                i && i(t), e.error({
                                    msg: t
                                });
                            }, r.apply(this, arguments);
                        } catch (t) {
                            return e.error({
                                msg: t
                            }), r.apply(this, arguments);
                        }
                    }
                });
            }
        }, {
            key: "recordPageFn",
            value: function(e, t) {
                var r = this, n = e[t];
                e[t] = function() {
                    try {
                        "onLoad" !== t && "onShow" !== t || (r.activePage = r.getActivePage());
                        var e = {
                            type: "function",
                            time: o.now(),
                            belong: "Page",
                            method: t,
                            route: r.activePage && r.activePage.route,
                            options: r.activePage && r.activePage.options
                        };
                        return "onLoad" === t && (e.args = arguments), r.methodFilter(t) && r.pushToBreadcrumb(e), 
                        n && n.apply(this, arguments);
                    } catch (e) {
                        return n && n.apply(this, arguments);
                    }
                };
            }
        }, {
            key: "getActivePage",
            value: function() {
                var e = getCurrentPages();
                return e.length ? e[e.length - 1] : {};
            }
        }, {
            key: "pushToBreadcrumb",
            value: function(e) {
                var t = this.config.report.crumbLength;
                this.breadcrumbs.push(e), this.breadcrumbs.length > t && this.breadcrumbs.shift();
            }
        }, {
            key: "methodFilter",
            value: function(e) {
                return "onPageScroll" !== e;
            }
        }, {
            key: "getNetworkType",
            value: function() {
                var e = this;
                this.config.env.getNetworkType({
                    success: function(t) {
                        e.networkType = t.networkType;
                    }
                });
            }
        }, {
            key: "getSystemInfo",
            value: function() {
                var e = this;
                this.config.env.getSystemInfo({
                    success: function(t) {
                        e.systemInfo = t;
                    }
                });
            }
        }, {
            key: "getLocation",
            value: function() {
                var e = this;
                this.config.env.getLocation({
                    type: "wgs84",
                    success: function(t) {
                        e.locationInfo = t;
                    }
                });
            }
        } ]), u;
    }())();
});