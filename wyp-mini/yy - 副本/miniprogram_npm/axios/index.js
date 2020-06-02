var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, r = function(e, r, n) {
        var o = {
            exports: {}
        };
        t[e] = {
            status: 0,
            func: r,
            req: n,
            m: o
        };
    }, n = function(r, n) {
        if (!t[r]) return require(n);
        if (!t[r].status) {
            var o = {
                exports: {}
            };
            t[r].status = 1, t[r].func(t[r].req, o, o.exports), "object" === e(o.exports) ? (t[r].m.exports.__proto__ = o.exports.__proto__, 
            Object.keys(o.exports).forEach(function(e) {
                t[r].m.exports[e] = o.exports[e];
                var n = Object.getOwnPropertyDescriptor(o.exports, e);
                n && n.configurable && Object.defineProperty(o.exports, e, {
                    set: function(n) {
                        t[r].m.exports[e] = n;
                    },
                    get: function() {
                        return t[r].m.exports[e];
                    }
                });
            }), o.exports.__esModule && Object.defineProperty(t[r].m.exports, "__esModule", {
                value: !0
            })) : t[r].m.exports = o.exports;
        }
        return t[r].m.exports;
    };
    return r(1583216923093, function(e, t, r) {
        t.exports = e("./lib/axios");
    }, function(e) {
        return n({
            "./lib/axios": 1583216923094
        }[e], e);
    }), r(1583216923094, function(e, t, r) {
        function n(e) {
            var t = new a(e), r = s(a.prototype.request, t);
            return o.extend(r, a.prototype, t), o.extend(r, t), r;
        }
        var o = e("./utils"), s = e("./helpers/bind"), a = e("./core/Axios"), i = e("./core/mergeConfig"), u = n(e("./defaults"));
        u.Axios = a, u.create = function(e) {
            return n(i(u.defaults, e));
        }, u.Cancel = e("./cancel/Cancel"), u.CancelToken = e("./cancel/CancelToken"), u.isCancel = e("./cancel/isCancel"), 
        u.all = function(e) {
            return Promise.all(e);
        }, u.spread = e("./helpers/spread"), t.exports = u, t.exports.default = u;
    }, function(e) {
        return n({
            "./utils": 1583216923095,
            "./helpers/bind": 1583216923096,
            "./core/Axios": 1583216923097,
            "./core/mergeConfig": 1583216923117,
            "./defaults": 1583216923103,
            "./cancel/Cancel": 1583216923118,
            "./cancel/CancelToken": 1583216923119,
            "./cancel/isCancel": 1583216923102,
            "./helpers/spread": 1583216923120
        }[e], e);
    }), r(1583216923095, function(t, r, n) {
        function o(e) {
            return "[object Array]" === l.call(e);
        }
        function s(e) {
            return void 0 === e;
        }
        function a(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : e(t));
        }
        function i(e) {
            return "[object Function]" === l.call(e);
        }
        function u(t, r) {
            if (null !== t && void 0 !== t) if ("object" !== (void 0 === t ? "undefined" : e(t)) && (t = [ t ]), 
            o(t)) for (var n = 0, s = t.length; n < s; n++) r.call(null, t[n], n, t); else for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && r.call(null, t[a], a, t);
        }
        function c() {
            for (var t = {}, r = 0, n = arguments.length; r < n; r++) u(arguments[r], function(r, n) {
                "object" === e(t[n]) && "object" === (void 0 === r ? "undefined" : e(r)) ? t[n] = c(t[n], r) : t[n] = r;
            });
            return t;
        }
        function f() {
            for (var t = {}, r = 0, n = arguments.length; r < n; r++) u(arguments[r], function(r, n) {
                "object" === e(t[n]) && "object" === (void 0 === r ? "undefined" : e(r)) ? t[n] = f(t[n], r) : "object" === (void 0 === r ? "undefined" : e(r)) ? t[n] = f({}, r) : t[n] = r;
            });
            return t;
        }
        var p = t("./helpers/bind"), l = Object.prototype.toString;
        r.exports = {
            isArray: o,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === l.call(e);
            },
            isBuffer: function(e) {
                return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
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
            isObject: a,
            isUndefined: s,
            isDate: function(e) {
                return "[object Date]" === l.call(e);
            },
            isFile: function(e) {
                return "[object File]" === l.call(e);
            },
            isBlob: function(e) {
                return "[object Blob]" === l.call(e);
            },
            isFunction: i,
            isStream: function(e) {
                return a(e) && i(e.pipe);
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: u,
            merge: c,
            deepMerge: f,
            extend: function(e, t, r) {
                return u(t, function(t, n) {
                    e[n] = r && "function" == typeof t ? p(t, r) : t;
                }), e;
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            }
        };
    }, function(e) {
        return n({
            "./helpers/bind": 1583216923096
        }[e], e);
    }), r(1583216923096, function(e, t, r) {
        t.exports = function(e, t) {
            return function() {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                return e.apply(t, r);
            };
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923097, function(e, t, r) {
        function n(e) {
            this.defaults = e, this.interceptors = {
                request: new a(),
                response: new a()
            };
        }
        var o = e("./../utils"), s = e("../helpers/buildURL"), a = e("./InterceptorManager"), i = e("./dispatchRequest"), u = e("./mergeConfig");
        n.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, 
            (e = u(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [ i, void 0 ], r = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected);
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected);
            }); t.length; ) r = r.then(t.shift(), t.shift());
            return r;
        }, n.prototype.getUri = function(e) {
            return e = u(this.defaults, e), s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
        }, o.forEach([ "delete", "get", "head", "options" ], function(e) {
            n.prototype[e] = function(t, r) {
                return this.request(o.merge(r || {}, {
                    method: e,
                    url: t
                }));
            };
        }), o.forEach([ "post", "put", "patch" ], function(e) {
            n.prototype[e] = function(t, r, n) {
                return this.request(o.merge(n || {}, {
                    method: e,
                    url: t,
                    data: r
                }));
            };
        }), t.exports = n;
    }, function(e) {
        return n({
            "./../utils": 1583216923095,
            "../helpers/buildURL": 1583216923098,
            "./InterceptorManager": 1583216923099,
            "./dispatchRequest": 1583216923100,
            "./mergeConfig": 1583216923117
        }[e], e);
    }), r(1583216923098, function(e, t, r) {
        function n(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        var o = e("./../utils");
        t.exports = function(e, t, r) {
            if (!t) return e;
            var s;
            if (r) s = r(t); else if (o.isURLSearchParams(t)) s = t.toString(); else {
                var a = [];
                o.forEach(t, function(e, t) {
                    null !== e && void 0 !== e && (o.isArray(e) ? t += "[]" : e = [ e ], o.forEach(e, function(e) {
                        o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), a.push(n(t) + "=" + n(e));
                    }));
                }), s = a.join("&");
            }
            if (s) {
                var i = e.indexOf("#");
                -1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + s;
            }
            return e;
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095
        }[e], e);
    }), r(1583216923099, function(e, t, r) {
        function n() {
            this.handlers = [];
        }
        var o = e("./../utils");
        n.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1;
        }, n.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }, n.prototype.forEach = function(e) {
            o.forEach(this.handlers, function(t) {
                null !== t && e(t);
            });
        }, t.exports = n;
    }, function(e) {
        return n({
            "./../utils": 1583216923095
        }[e], e);
    }), r(1583216923100, function(e, t, r) {
        function n(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        var o = e("./../utils"), s = e("./transformData"), a = e("../cancel/isCancel"), i = e("../defaults");
        t.exports = function(e) {
            return n(e), e.headers = e.headers || {}, e.data = s(e.data, e.headers, e.transformRequest), 
            e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), 
            o.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
                delete e.headers[t];
            }), (e.adapter || i.adapter)(e).then(function(t) {
                return n(e), t.data = s(t.data, t.headers, e.transformResponse), t;
            }, function(t) {
                return a(t) || (n(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), 
                Promise.reject(t);
            });
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095,
            "./transformData": 1583216923101,
            "../cancel/isCancel": 1583216923102,
            "../defaults": 1583216923103
        }[e], e);
    }), r(1583216923101, function(e, t, r) {
        var n = e("./../utils");
        t.exports = function(e, t, r) {
            return n.forEach(r, function(r) {
                e = r(e, t);
            }), e;
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095
        }[e], e);
    }), r(1583216923102, function(e, t, r) {
        t.exports = function(e) {
            return !(!e || !e.__CANCEL__);
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923103, function(e, t, r) {
        function n(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }
        var o = e("./utils"), s = e("./helpers/normalizeHeaderName"), a = {
            "Content-Type": "application/x-www-form-urlencoded"
        }, i = {
            adapter: function() {
                var t;
                return "undefined" != typeof XMLHttpRequest ? t = e("./adapters/xhr") : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (t = e("./adapters/http")), 
                t;
            }(),
            transformRequest: [ function(e, t) {
                return s(t, "Accept"), s(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (n(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                e.toString()) : o.isObject(e) ? (n(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
            } ],
            transformResponse: [ function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e);
                } catch (e) {}
                return e;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300;
            }
        };
        i.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, o.forEach([ "delete", "get", "head" ], function(e) {
            i.headers[e] = {};
        }), o.forEach([ "post", "put", "patch" ], function(e) {
            i.headers[e] = o.merge(a);
        }), t.exports = i;
    }, function(e) {
        return n({
            "./utils": 1583216923095,
            "./helpers/normalizeHeaderName": 1583216923104,
            "./adapters/xhr": 1583216923105,
            "./adapters/http": 1583216923115
        }[e], e);
    }), r(1583216923104, function(e, t, r) {
        var n = e("../utils");
        t.exports = function(e, t) {
            n.forEach(e, function(r, n) {
                n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
            });
        };
    }, function(e) {
        return n({
            "../utils": 1583216923095
        }[e], e);
    }), r(1583216923105, function(e, t, r) {
        var n = e("./../utils"), o = e("./../core/settle"), s = e("./../helpers/buildURL"), a = e("../core/buildFullPath"), i = e("./../helpers/parseHeaders"), u = e("./../helpers/isURLSameOrigin"), c = e("../core/createError");
        t.exports = function(t) {
            return new Promise(function(r, f) {
                var p = t.data, l = t.headers;
                n.isFormData(p) && delete l["Content-Type"];
                var d = new XMLHttpRequest();
                if (t.auth) {
                    var h = t.auth.username || "", m = t.auth.password || "";
                    l.Authorization = "Basic " + btoa(h + ":" + m);
                }
                var g = a(t.baseURL, t.url);
                if (d.open(t.method.toUpperCase(), s(g, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, 
                d.onreadystatechange = function() {
                    if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                        var e = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null, n = {
                            data: t.responseType && "text" !== t.responseType ? d.response : d.responseText,
                            status: d.status,
                            statusText: d.statusText,
                            headers: e,
                            config: t,
                            request: d
                        };
                        o(r, f, n), d = null;
                    }
                }, d.onabort = function() {
                    d && (f(c("Request aborted", t, "ECONNABORTED", d)), d = null);
                }, d.onerror = function() {
                    f(c("Network Error", t, null, d)), d = null;
                }, d.ontimeout = function() {
                    var e = "timeout of " + t.timeout + "ms exceeded";
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage), f(c(e, t, "ECONNABORTED", d)), 
                    d = null;
                }, n.isStandardBrowserEnv()) {
                    var x = e("./../helpers/cookies"), v = (t.withCredentials || u(g)) && t.xsrfCookieName ? x.read(t.xsrfCookieName) : void 0;
                    v && (l[t.xsrfHeaderName] = v);
                }
                if ("setRequestHeader" in d && n.forEach(l, function(e, t) {
                    void 0 === p && "content-type" === t.toLowerCase() ? delete l[t] : d.setRequestHeader(t, e);
                }), n.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), 
                t.responseType) try {
                    d.responseType = t.responseType;
                } catch (e) {
                    if ("json" !== t.responseType) throw e;
                }
                "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), 
                "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), 
                t.cancelToken && t.cancelToken.promise.then(function(e) {
                    d && (d.abort(), f(e), d = null);
                }), void 0 === p && (p = null), d.send(p);
            });
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095,
            "./../core/settle": 1583216923106,
            "./../helpers/buildURL": 1583216923098,
            "../core/buildFullPath": 1583216923109,
            "./../helpers/parseHeaders": 1583216923112,
            "./../helpers/isURLSameOrigin": 1583216923113,
            "../core/createError": 1583216923107,
            "./../helpers/cookies": 1583216923114
        }[e], e);
    }), r(1583216923106, function(e, t, r) {
        var n = e("./createError");
        t.exports = function(e, t, r) {
            var o = r.config.validateStatus;
            !o || o(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
        };
    }, function(e) {
        return n({
            "./createError": 1583216923107
        }[e], e);
    }), r(1583216923107, function(e, t, r) {
        var n = e("./enhanceError");
        t.exports = function(e, t, r, o, s) {
            var a = new Error(e);
            return n(a, t, r, o, s);
        };
    }, function(e) {
        return n({
            "./enhanceError": 1583216923108
        }[e], e);
    }), r(1583216923108, function(e, t, r) {
        t.exports = function(e, t, r, n, o) {
            return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, 
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                };
            }, e;
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923109, function(e, t, r) {
        var n = e("../helpers/isAbsoluteURL"), o = e("../helpers/combineURLs");
        t.exports = function(e, t) {
            return e && !n(t) ? o(e, t) : t;
        };
    }, function(e) {
        return n({
            "../helpers/isAbsoluteURL": 1583216923110,
            "../helpers/combineURLs": 1583216923111
        }[e], e);
    }), r(1583216923110, function(e, t, r) {
        t.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923111, function(e, t, r) {
        t.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923112, function(e, t, r) {
        var n = e("./../utils"), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
        t.exports = function(e) {
            var t, r, s, a = {};
            return e ? (n.forEach(e.split("\n"), function(e) {
                if (s = e.indexOf(":"), t = n.trim(e.substr(0, s)).toLowerCase(), r = n.trim(e.substr(s + 1)), 
                t) {
                    if (a[t] && o.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([ r ]) : a[t] ? a[t] + ", " + r : r;
                }
            }), a) : a;
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095
        }[e], e);
    }), r(1583216923113, function(e, t, r) {
        var n = e("./../utils");
        t.exports = n.isStandardBrowserEnv() ? function() {
            function e(e) {
                var t = e;
                return r && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), 
                {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                };
            }
            var t, r = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
            return t = e(window.location.href), function(r) {
                var o = n.isString(r) ? e(r) : r;
                return o.protocol === t.protocol && o.host === t.host;
            };
        }() : function() {
            return !0;
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095
        }[e], e);
    }), r(1583216923114, function(e, t, r) {
        var n = e("./../utils");
        t.exports = n.isStandardBrowserEnv() ? {
            write: function(e, t, r, o, s, a) {
                var i = [];
                i.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), 
                n.isString(o) && i.push("path=" + o), n.isString(s) && i.push("domain=" + s), !0 === a && i.push("secure"), 
                document.cookie = i.join("; ");
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5);
            }
        } : {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {}
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095
        }[e], e);
    }), r(1583216923115, function(e, t, r) {
        var n = e("./../utils"), o = e("./../core/settle"), s = e("../core/buildFullPath"), a = e("./../helpers/buildURL"), i = e("http"), u = e("https"), c = e("follow-redirects").http, f = e("follow-redirects").https, p = e("url"), l = e("zlib"), d = e("./../../package.json"), h = e("../core/createError"), m = e("../core/enhanceError"), g = /https:?/;
        t.exports = function(e) {
            return new Promise(function(t, r) {
                var x = function(e) {
                    t(e);
                }, v = function(e) {
                    r(e);
                }, b = e.data, y = e.headers;
                if (y["User-Agent"] || y["user-agent"] || (y["User-Agent"] = "axios/" + d.version), 
                b && !n.isStream(b)) {
                    if (Buffer.isBuffer(b)) ; else if (n.isArrayBuffer(b)) b = Buffer.from(new Uint8Array(b)); else {
                        if (!n.isString(b)) return v(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                        b = Buffer.from(b, "utf-8");
                    }
                    y["Content-Length"] = b.length;
                }
                var w = void 0;
                e.auth && (w = (e.auth.username || "") + ":" + (e.auth.password || ""));
                var C = s(e.baseURL, e.url), j = p.parse(C), E = j.protocol || "http:";
                if (!w && j.auth) {
                    var R = j.auth.split(":");
                    w = (R[0] || "") + ":" + (R[1] || "");
                }
                w && delete y.Authorization;
                var k = g.test(E), S = k ? e.httpsAgent : e.httpAgent, A = {
                    path: a(j.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                    method: e.method.toUpperCase(),
                    headers: y,
                    agent: S,
                    agents: {
                        http: e.httpAgent,
                        https: e.httpsAgent
                    },
                    auth: w
                };
                e.socketPath ? A.socketPath = e.socketPath : (A.hostname = j.hostname, A.port = j.port);
                var L = e.proxy;
                if (!L && !1 !== L) {
                    var U = E.slice(0, -1) + "_proxy", N = process.env[U] || process.env[U.toUpperCase()];
                    if (N) {
                        var B = p.parse(N), O = process.env.no_proxy || process.env.NO_PROXY, T = !0;
                        if (O && (T = !O.split(",").map(function(e) {
                            return e.trim();
                        }).some(function(e) {
                            return !!e && ("*" === e || ("." === e[0] && j.hostname.substr(j.hostname.length - e.length) === e || j.hostname === e));
                        })), T && (L = {
                            host: B.hostname,
                            port: B.port
                        }, B.auth)) {
                            var _ = B.auth.split(":");
                            L.auth = {
                                username: _[0],
                                password: _[1]
                            };
                        }
                    }
                }
                if (L && (A.hostname = L.host, A.host = L.host, A.headers.host = j.hostname + (j.port ? ":" + j.port : ""), 
                A.port = L.port, A.path = E + "//" + j.hostname + (j.port ? ":" + j.port : "") + A.path, 
                L.auth)) {
                    var P = Buffer.from(L.auth.username + ":" + L.auth.password, "utf8").toString("base64");
                    A.headers["Proxy-Authorization"] = "Basic " + P;
                }
                var q, D = k && (!L || g.test(L.protocol));
                e.transport ? q = e.transport : 0 === e.maxRedirects ? q = D ? u : i : (e.maxRedirects && (A.maxRedirects = e.maxRedirects), 
                q = D ? f : c), e.maxContentLength && e.maxContentLength > -1 && (A.maxBodyLength = e.maxContentLength);
                var z = q.request(A, function(t) {
                    if (!z.aborted) {
                        var r = t;
                        switch (t.headers["content-encoding"]) {
                          case "gzip":
                          case "compress":
                          case "deflate":
                            r = 204 === t.statusCode ? r : r.pipe(l.createUnzip()), delete t.headers["content-encoding"];
                        }
                        var n = t.req || z, s = {
                            status: t.statusCode,
                            statusText: t.statusMessage,
                            headers: t.headers,
                            config: e,
                            request: n
                        };
                        if ("stream" === e.responseType) s.data = r, o(x, v, s); else {
                            var a = [];
                            r.on("data", function(t) {
                                a.push(t), e.maxContentLength > -1 && Buffer.concat(a).length > e.maxContentLength && (r.destroy(), 
                                v(h("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, n)));
                            }), r.on("error", function(t) {
                                z.aborted || v(m(t, e, null, n));
                            }), r.on("end", function() {
                                var t = Buffer.concat(a);
                                "arraybuffer" !== e.responseType && (t = t.toString(e.responseEncoding)), s.data = t, 
                                o(x, v, s);
                            });
                        }
                    }
                });
                z.on("error", function(t) {
                    z.aborted || v(m(t, e, null, z));
                }), e.timeout && z.setTimeout(e.timeout, function() {
                    z.abort(), v(h("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", z));
                }), e.cancelToken && e.cancelToken.promise.then(function(e) {
                    z.aborted || (z.abort(), v(e));
                }), n.isStream(b) ? b.on("error", function(t) {
                    v(m(t, e, null, z));
                }).pipe(z) : z.end(b);
            });
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923095,
            "./../core/settle": 1583216923106,
            "../core/buildFullPath": 1583216923109,
            "./../helpers/buildURL": 1583216923098,
            http: 1583216923115,
            "./../../package.json": 1583216923116,
            "../core/createError": 1583216923107,
            "../core/enhanceError": 1583216923108
        }[e], e);
    }), r(1583216923116, function(e, t, r) {
        t.exports = {
            _from: "axios",
            _id: "axios@0.19.2",
            _inBundle: !1,
            _integrity: "sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==",
            _location: "/axios",
            _phantomChildren: {},
            _requested: {
                type: "tag",
                registry: !0,
                raw: "axios",
                name: "axios",
                escapedName: "axios",
                rawSpec: "",
                saveSpec: null,
                fetchSpec: "latest"
            },
            _requiredBy: [ "#USER", "/" ],
            _resolved: "https://registry.npmjs.org/axios/-/axios-0.19.2.tgz",
            _shasum: "3ea36c5d8818d0d5f8a8a97a6d36b86cdc00cb27",
            _spec: "axios",
            _where: "D:\\project\\git.yy.com\\nearLive",
            author: {
                name: "Matt Zabriskie"
            },
            browser: {
                "./lib/adapters/http.js": "./lib/adapters/xhr.js"
            },
            bugs: {
                url: "https://github.com/axios/axios/issues"
            },
            bundleDependencies: !1,
            bundlesize: [ {
                path: "./dist/axios.min.js",
                threshold: "5kB"
            } ],
            dependencies: {
                "follow-redirects": "1.5.10"
            },
            deprecated: !1,
            description: "Promise based HTTP client for the browser and node.js",
            devDependencies: {
                bundlesize: "^0.17.0",
                coveralls: "^3.0.0",
                "es6-promise": "^4.2.4",
                grunt: "^1.0.2",
                "grunt-banner": "^0.6.0",
                "grunt-cli": "^1.2.0",
                "grunt-contrib-clean": "^1.1.0",
                "grunt-contrib-watch": "^1.0.0",
                "grunt-eslint": "^20.1.0",
                "grunt-karma": "^2.0.0",
                "grunt-mocha-test": "^0.13.3",
                "grunt-ts": "^6.0.0-beta.19",
                "grunt-webpack": "^1.0.18",
                "istanbul-instrumenter-loader": "^1.0.0",
                "jasmine-core": "^2.4.1",
                karma: "^1.3.0",
                "karma-chrome-launcher": "^2.2.0",
                "karma-coverage": "^1.1.1",
                "karma-firefox-launcher": "^1.1.0",
                "karma-jasmine": "^1.1.1",
                "karma-jasmine-ajax": "^0.1.13",
                "karma-opera-launcher": "^1.0.0",
                "karma-safari-launcher": "^1.0.0",
                "karma-sauce-launcher": "^1.2.0",
                "karma-sinon": "^1.0.5",
                "karma-sourcemap-loader": "^0.3.7",
                "karma-webpack": "^1.7.0",
                "load-grunt-tasks": "^3.5.2",
                minimist: "^1.2.0",
                mocha: "^5.2.0",
                sinon: "^4.5.0",
                typescript: "^2.8.1",
                "url-search-params": "^0.10.0",
                webpack: "^1.13.1",
                "webpack-dev-server": "^1.14.1"
            },
            homepage: "https://github.com/axios/axios",
            keywords: [ "xhr", "http", "ajax", "promise", "node" ],
            license: "MIT",
            main: "index.js",
            name: "axios",
            repository: {
                type: "git",
                url: "git+https://github.com/axios/axios.git"
            },
            scripts: {
                build: "NODE_ENV=production grunt build",
                coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
                examples: "node ./examples/server.js",
                fix: "eslint --fix lib/**/*.js",
                postversion: "git push && git push --tags",
                preversion: "npm test",
                start: "node ./sandbox/server.js",
                test: "grunt test && bundlesize",
                version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
            },
            typings: "./index.d.ts",
            version: "0.19.2"
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923117, function(e, t, r) {
        var n = e("../utils");
        t.exports = function(e, t) {
            t = t || {};
            var r = {}, o = [ "url", "method", "params", "data" ], s = [ "headers", "auth", "proxy" ], a = [ "baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath" ];
            n.forEach(o, function(e) {
                void 0 !== t[e] && (r[e] = t[e]);
            }), n.forEach(s, function(o) {
                n.isObject(t[o]) ? r[o] = n.deepMerge(e[o], t[o]) : void 0 !== t[o] ? r[o] = t[o] : n.isObject(e[o]) ? r[o] = n.deepMerge(e[o]) : void 0 !== e[o] && (r[o] = e[o]);
            }), n.forEach(a, function(n) {
                void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n]);
            });
            var i = o.concat(s).concat(a), u = Object.keys(t).filter(function(e) {
                return -1 === i.indexOf(e);
            });
            return n.forEach(u, function(n) {
                void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n]);
            }), r;
        };
    }, function(e) {
        return n({
            "../utils": 1583216923095
        }[e], e);
    }), r(1583216923118, function(e, t, r) {
        function n(e) {
            this.message = e;
        }
        n.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }, n.prototype.__CANCEL__ = !0, t.exports = n;
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923119, function(e, t, r) {
        function n(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e;
            });
            var r = this;
            e(function(e) {
                r.reason || (r.reason = new o(e), t(r.reason));
            });
        }
        var o = e("./Cancel");
        n.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason;
        }, n.source = function() {
            var e;
            return {
                token: new n(function(t) {
                    e = t;
                }),
                cancel: e
            };
        }, t.exports = n;
    }, function(e) {
        return n({
            "./Cancel": 1583216923118
        }[e], e);
    }), r(1583216923120, function(e, t, r) {
        t.exports = function(e) {
            return function(t) {
                return e.apply(null, t);
            };
        };
    }, function(e) {
        return n({}[e], e);
    }), n(1583216923093);
}();