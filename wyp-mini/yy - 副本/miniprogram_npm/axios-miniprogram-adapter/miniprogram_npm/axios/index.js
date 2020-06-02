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
    return r(1583216923067, function(e, t, r) {
        t.exports = e("./lib/axios");
    }, function(e) {
        return n({
            "./lib/axios": 1583216923068
        }[e], e);
    }), r(1583216923068, function(e, t, r) {
        function n(e) {
            var t = new a(e), r = s(a.prototype.request, t);
            return o.extend(r, a.prototype, t), o.extend(r, t), r;
        }
        var o = e("./utils"), s = e("./helpers/bind"), a = e("./core/Axios"), i = e("./defaults"), u = n(i);
        u.Axios = a, u.create = function(e) {
            return n(o.merge(i, e));
        }, u.Cancel = e("./cancel/Cancel"), u.CancelToken = e("./cancel/CancelToken"), u.isCancel = e("./cancel/isCancel"), 
        u.all = function(e) {
            return Promise.all(e);
        }, u.spread = e("./helpers/spread"), t.exports = u, t.exports.default = u;
    }, function(e) {
        return n({
            "./utils": 1583216923069,
            "./helpers/bind": 1583216923070,
            "./core/Axios": 1583216923071,
            "./defaults": 1583216923072,
            "./cancel/Cancel": 1583216923090,
            "./cancel/CancelToken": 1583216923091,
            "./cancel/isCancel": 1583216923087,
            "./helpers/spread": 1583216923092
        }[e], e);
    }), r(1583216923069, function(t, r, n) {
        function o(e) {
            return "[object Array]" === p.call(e);
        }
        function s(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : e(t));
        }
        function a(e) {
            return "[object Function]" === p.call(e);
        }
        function i(t, r) {
            if (null !== t && void 0 !== t) if ("object" !== (void 0 === t ? "undefined" : e(t)) && (t = [ t ]), 
            o(t)) for (var n = 0, s = t.length; n < s; n++) r.call(null, t[n], n, t); else for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && r.call(null, t[a], a, t);
        }
        function u() {
            for (var t = {}, r = 0, n = arguments.length; r < n; r++) i(arguments[r], function(r, n) {
                "object" === e(t[n]) && "object" === (void 0 === r ? "undefined" : e(r)) ? t[n] = u(t[n], r) : t[n] = r;
            });
            return t;
        }
        var c = t("./helpers/bind"), f = t("is-buffer"), p = Object.prototype.toString;
        r.exports = {
            isArray: o,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === p.call(e);
            },
            isBuffer: f,
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
            isObject: s,
            isUndefined: function(e) {
                return void 0 === e;
            },
            isDate: function(e) {
                return "[object Date]" === p.call(e);
            },
            isFile: function(e) {
                return "[object File]" === p.call(e);
            },
            isBlob: function(e) {
                return "[object Blob]" === p.call(e);
            },
            isFunction: a,
            isStream: function(e) {
                return s(e) && a(e.pipe);
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: i,
            merge: u,
            extend: function(e, t, r) {
                return i(t, function(t, n) {
                    e[n] = r && "function" == typeof t ? c(t, r) : t;
                }), e;
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            }
        };
    }, function(e) {
        return n({
            "./helpers/bind": 1583216923070
        }[e], e);
    }), r(1583216923070, function(e, t, r) {
        t.exports = function(e, t) {
            return function() {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                return e.apply(t, r);
            };
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923071, function(e, t, r) {
        function n(e) {
            this.defaults = e, this.interceptors = {
                request: new a(),
                response: new a()
            };
        }
        var o = e("./../defaults"), s = e("./../utils"), a = e("./InterceptorManager"), i = e("./dispatchRequest");
        n.prototype.request = function(e) {
            "string" == typeof e && (e = s.merge({
                url: arguments[0]
            }, arguments[1])), (e = s.merge(o, {
                method: "get"
            }, this.defaults, e)).method = e.method.toLowerCase();
            var t = [ i, void 0 ], r = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected);
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected);
            }); t.length; ) r = r.then(t.shift(), t.shift());
            return r;
        }, s.forEach([ "delete", "get", "head", "options" ], function(e) {
            n.prototype[e] = function(t, r) {
                return this.request(s.merge(r || {}, {
                    method: e,
                    url: t
                }));
            };
        }), s.forEach([ "post", "put", "patch" ], function(e) {
            n.prototype[e] = function(t, r, n) {
                return this.request(s.merge(n || {}, {
                    method: e,
                    url: t,
                    data: r
                }));
            };
        }), t.exports = n;
    }, function(e) {
        return n({
            "./../defaults": 1583216923072,
            "./../utils": 1583216923069,
            "./InterceptorManager": 1583216923084,
            "./dispatchRequest": 1583216923085
        }[e], e);
    }), r(1583216923072, function(e, t, r) {
        function n(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }
        var o = e("./utils"), s = e("./helpers/normalizeHeaderName"), a = {
            "Content-Type": "application/x-www-form-urlencoded"
        }, i = {
            adapter: function() {
                var t;
                return "undefined" != typeof XMLHttpRequest ? t = e("./adapters/xhr") : "undefined" != typeof process && (t = e("./adapters/http")), 
                t;
            }(),
            transformRequest: [ function(e, t) {
                return s(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (n(t, "application/x-www-form-urlencoded;charset=utf-8"), 
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
            "./utils": 1583216923069,
            "./helpers/normalizeHeaderName": 1583216923073,
            "./adapters/xhr": 1583216923074,
            "./adapters/http": 1583216923082
        }[e], e);
    }), r(1583216923073, function(e, t, r) {
        var n = e("../utils");
        t.exports = function(e, t) {
            n.forEach(e, function(r, n) {
                n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
            });
        };
    }, function(e) {
        return n({
            "../utils": 1583216923069
        }[e], e);
    }), r(1583216923074, function(e, t, r) {
        var n = e("./../utils"), o = e("./../core/settle"), s = e("./../helpers/buildURL"), a = e("./../helpers/parseHeaders"), i = e("./../helpers/isURLSameOrigin"), u = e("../core/createError");
        t.exports = function(t) {
            return new Promise(function(r, c) {
                var f = t.data, p = t.headers;
                n.isFormData(f) && delete p["Content-Type"];
                var l = new XMLHttpRequest();
                if (t.auth) {
                    var d = t.auth.username || "", h = t.auth.password || "";
                    p.Authorization = "Basic " + btoa(d + ":" + h);
                }
                if (l.open(t.method.toUpperCase(), s(t.url, t.params, t.paramsSerializer), !0), 
                l.timeout = t.timeout, l.onreadystatechange = function() {
                    if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                        var e = "getAllResponseHeaders" in l ? a(l.getAllResponseHeaders()) : null, n = {
                            data: t.responseType && "text" !== t.responseType ? l.response : l.responseText,
                            status: l.status,
                            statusText: l.statusText,
                            headers: e,
                            config: t,
                            request: l
                        };
                        o(r, c, n), l = null;
                    }
                }, l.onerror = function() {
                    c(u("Network Error", t, null, l)), l = null;
                }, l.ontimeout = function() {
                    c(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", l)), l = null;
                }, n.isStandardBrowserEnv()) {
                    var m = e("./../helpers/cookies"), g = (t.withCredentials || i(t.url)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : void 0;
                    g && (p[t.xsrfHeaderName] = g);
                }
                if ("setRequestHeader" in l && n.forEach(p, function(e, t) {
                    void 0 === f && "content-type" === t.toLowerCase() ? delete p[t] : l.setRequestHeader(t, e);
                }), t.withCredentials && (l.withCredentials = !0), t.responseType) try {
                    l.responseType = t.responseType;
                } catch (e) {
                    if ("json" !== t.responseType) throw e;
                }
                "function" == typeof t.onDownloadProgress && l.addEventListener("progress", t.onDownloadProgress), 
                "function" == typeof t.onUploadProgress && l.upload && l.upload.addEventListener("progress", t.onUploadProgress), 
                t.cancelToken && t.cancelToken.promise.then(function(e) {
                    l && (l.abort(), c(e), l = null);
                }), void 0 === f && (f = null), l.send(f);
            });
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923069,
            "./../core/settle": 1583216923075,
            "./../helpers/buildURL": 1583216923078,
            "./../helpers/parseHeaders": 1583216923079,
            "./../helpers/isURLSameOrigin": 1583216923080,
            "../core/createError": 1583216923076,
            "./../helpers/cookies": 1583216923081
        }[e], e);
    }), r(1583216923075, function(e, t, r) {
        var n = e("./createError");
        t.exports = function(e, t, r) {
            var o = r.config.validateStatus;
            r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
        };
    }, function(e) {
        return n({
            "./createError": 1583216923076
        }[e], e);
    }), r(1583216923076, function(e, t, r) {
        var n = e("./enhanceError");
        t.exports = function(e, t, r, o, s) {
            var a = new Error(e);
            return n(a, t, r, o, s);
        };
    }, function(e) {
        return n({
            "./enhanceError": 1583216923077
        }[e], e);
    }), r(1583216923077, function(e, t, r) {
        t.exports = function(e, t, r, n, o) {
            return e.config = t, r && (e.code = r), e.request = n, e.response = o, e;
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923078, function(e, t, r) {
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
            return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e;
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923069
        }[e], e);
    }), r(1583216923079, function(e, t, r) {
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
            "./../utils": 1583216923069
        }[e], e);
    }), r(1583216923080, function(e, t, r) {
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
            "./../utils": 1583216923069
        }[e], e);
    }), r(1583216923081, function(e, t, r) {
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
            "./../utils": 1583216923069
        }[e], e);
    }), r(1583216923082, function(e, t, r) {
        var n = e("./../utils"), o = e("./../core/settle"), s = e("./../helpers/buildURL"), a = e("http"), i = e("https"), u = e("follow-redirects").http, c = e("follow-redirects").https, f = e("url"), p = e("zlib"), l = e("./../../package.json"), d = e("../core/createError"), h = e("../core/enhanceError");
        t.exports = function(e) {
            return new Promise(function(t, r) {
                var m, g = e.data, x = e.headers;
                if (x["User-Agent"] || x["user-agent"] || (x["User-Agent"] = "axios/" + l.version), 
                g && !n.isStream(g)) {
                    if (Buffer.isBuffer(g)) ; else if (n.isArrayBuffer(g)) g = new Buffer(new Uint8Array(g)); else {
                        if (!n.isString(g)) return r(d("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                        g = new Buffer(g, "utf-8");
                    }
                    x["Content-Length"] = g.length;
                }
                var v = void 0;
                e.auth && (v = (e.auth.username || "") + ":" + (e.auth.password || ""));
                var y = f.parse(e.url), b = y.protocol || "http:";
                if (!v && y.auth) {
                    var w = y.auth.split(":");
                    v = (w[0] || "") + ":" + (w[1] || "");
                }
                v && delete x.Authorization;
                var C = "https:" === b, S = C ? e.httpsAgent : e.httpAgent, R = {
                    path: s(y.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                    method: e.method,
                    headers: x,
                    agent: S,
                    auth: v
                };
                e.socketPath ? R.socketPath = e.socketPath : (R.hostname = y.hostname, R.port = y.port);
                var j = e.proxy;
                if (!j && !1 !== j) {
                    var E = b.slice(0, -1) + "_proxy", k = process.env[E] || process.env[E.toUpperCase()];
                    if (k) {
                        var A = f.parse(k);
                        if (j = {
                            host: A.hostname,
                            port: A.port
                        }, A.auth) {
                            var B = A.auth.split(":");
                            j.auth = {
                                username: B[0],
                                password: B[1]
                            };
                        }
                    }
                }
                if (j && (R.hostname = j.host, R.host = j.host, R.headers.host = y.hostname + (y.port ? ":" + y.port : ""), 
                R.port = j.port, R.path = b + "//" + y.hostname + (y.port ? ":" + y.port : "") + R.path, 
                j.auth)) {
                    var L = new Buffer(j.auth.username + ":" + j.auth.password, "utf8").toString("base64");
                    R.headers["Proxy-Authorization"] = "Basic " + L;
                }
                var T;
                e.transport ? T = e.transport : 0 === e.maxRedirects ? T = C ? i : a : (e.maxRedirects && (R.maxRedirects = e.maxRedirects), 
                T = C ? c : u), e.maxContentLength && e.maxContentLength > -1 && (R.maxBodyLength = e.maxContentLength);
                var _ = T.request(R, function(n) {
                    if (!_.aborted) {
                        clearTimeout(m), m = null;
                        var s = n;
                        switch (n.headers["content-encoding"]) {
                          case "gzip":
                          case "compress":
                          case "deflate":
                            s = s.pipe(p.createUnzip()), delete n.headers["content-encoding"];
                        }
                        var a = n.req || _, i = {
                            status: n.statusCode,
                            statusText: n.statusMessage,
                            headers: n.headers,
                            config: e,
                            request: a
                        };
                        if ("stream" === e.responseType) i.data = s, o(t, r, i); else {
                            var u = [];
                            s.on("data", function(t) {
                                u.push(t), e.maxContentLength > -1 && Buffer.concat(u).length > e.maxContentLength && (s.destroy(), 
                                r(d("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, a)));
                            }), s.on("error", function(t) {
                                _.aborted || r(h(t, e, null, a));
                            }), s.on("end", function() {
                                var n = Buffer.concat(u);
                                "arraybuffer" !== e.responseType && (n = n.toString("utf8")), i.data = n, o(t, r, i);
                            });
                        }
                    }
                });
                _.on("error", function(t) {
                    _.aborted || r(h(t, e, null, _));
                }), e.timeout && !m && (m = setTimeout(function() {
                    _.abort(), r(d("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", _));
                }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function(e) {
                    _.aborted || (_.abort(), r(e));
                }), n.isStream(g) ? g.pipe(_) : _.end(g);
            });
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923069,
            "./../core/settle": 1583216923075,
            "./../helpers/buildURL": 1583216923078,
            http: 1583216923082,
            "./../../package.json": 1583216923083,
            "../core/createError": 1583216923076,
            "../core/enhanceError": 1583216923077
        }[e], e);
    }), r(1583216923083, function(e, t, r) {
        t.exports = {
            _from: "axios@^0.18.0",
            _id: "axios@0.18.1",
            _inBundle: !1,
            _integrity: "sha512-0BfJq4NSfQXd+SkFdrvFbG7addhYSBA2mQwISr46pD6E5iqkWg02RAs8vyTT/j0RTnoYmeXauBuSv1qKwR179g==",
            _location: "/axios-miniprogram-adapter/axios",
            _phantomChildren: {},
            _requested: {
                type: "range",
                registry: !0,
                raw: "axios@^0.18.0",
                name: "axios",
                escapedName: "axios",
                rawSpec: "^0.18.0",
                saveSpec: null,
                fetchSpec: "^0.18.0"
            },
            _requiredBy: [ "/axios-miniprogram-adapter" ],
            _resolved: "https://registry.npmjs.org/axios/-/axios-0.18.1.tgz",
            _shasum: "ff3f0de2e7b5d180e757ad98000f1081b87bcea3",
            _spec: "axios@^0.18.0",
            _where: "D:\\project\\git.yy.com\\nearLive\\node_modules\\axios-miniprogram-adapter",
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
                "follow-redirects": "1.5.10",
                "is-buffer": "^2.0.2"
            },
            deprecated: !1,
            description: "Promise based HTTP client for the browser and node.js",
            devDependencies: {
                bundlesize: "^0.5.7",
                coveralls: "^2.11.9",
                "es6-promise": "^4.0.5",
                grunt: "^1.0.1",
                "grunt-banner": "^0.6.0",
                "grunt-cli": "^1.2.0",
                "grunt-contrib-clean": "^1.0.0",
                "grunt-contrib-nodeunit": "^1.0.0",
                "grunt-contrib-watch": "^1.0.0",
                "grunt-eslint": "^19.0.0",
                "grunt-karma": "^2.0.0",
                "grunt-ts": "^6.0.0-beta.3",
                "grunt-webpack": "^1.0.18",
                "istanbul-instrumenter-loader": "^1.0.0",
                "jasmine-core": "^2.4.1",
                karma: "^1.3.0",
                "karma-chrome-launcher": "^2.0.0",
                "karma-coverage": "^1.0.0",
                "karma-firefox-launcher": "^1.0.0",
                "karma-jasmine": "^1.0.2",
                "karma-jasmine-ajax": "^0.1.13",
                "karma-opera-launcher": "^1.0.0",
                "karma-safari-launcher": "^1.0.0",
                "karma-sauce-launcher": "^1.1.0",
                "karma-sinon": "^1.0.5",
                "karma-sourcemap-loader": "^0.3.7",
                "karma-webpack": "^1.7.0",
                "load-grunt-tasks": "^3.5.2",
                minimist: "^1.2.0",
                sinon: "^1.17.4",
                typescript: "^2.0.3",
                "url-search-params": "^0.6.1",
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
                postversion: "git push && git push --tags",
                preversion: "npm test",
                start: "node ./sandbox/server.js",
                test: "grunt test && bundlesize",
                version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
            },
            typings: "./index.d.ts",
            version: "0.18.1"
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923084, function(e, t, r) {
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
            "./../utils": 1583216923069
        }[e], e);
    }), r(1583216923085, function(e, t, r) {
        function n(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        var o = e("./../utils"), s = e("./transformData"), a = e("../cancel/isCancel"), i = e("../defaults"), u = e("./../helpers/isAbsoluteURL"), c = e("./../helpers/combineURLs");
        t.exports = function(e) {
            return n(e), e.baseURL && !u(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, 
            e.data = s(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), 
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
            "./../utils": 1583216923069,
            "./transformData": 1583216923086,
            "../cancel/isCancel": 1583216923087,
            "../defaults": 1583216923072,
            "./../helpers/isAbsoluteURL": 1583216923088,
            "./../helpers/combineURLs": 1583216923089
        }[e], e);
    }), r(1583216923086, function(e, t, r) {
        var n = e("./../utils");
        t.exports = function(e, t, r) {
            return n.forEach(r, function(r) {
                e = r(e, t);
            }), e;
        };
    }, function(e) {
        return n({
            "./../utils": 1583216923069
        }[e], e);
    }), r(1583216923087, function(e, t, r) {
        t.exports = function(e) {
            return !(!e || !e.__CANCEL__);
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923088, function(e, t, r) {
        t.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923089, function(e, t, r) {
        t.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923090, function(e, t, r) {
        function n(e) {
            this.message = e;
        }
        n.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }, n.prototype.__CANCEL__ = !0, t.exports = n;
    }, function(e) {
        return n({}[e], e);
    }), r(1583216923091, function(e, t, r) {
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
            "./Cancel": 1583216923090
        }[e], e);
    }), r(1583216923092, function(e, t, r) {
        t.exports = function(e) {
            return function(t) {
                return e.apply(null, t);
            };
        };
    }, function(e) {
        return n({}[e], e);
    }), n(1583216923067);
}();