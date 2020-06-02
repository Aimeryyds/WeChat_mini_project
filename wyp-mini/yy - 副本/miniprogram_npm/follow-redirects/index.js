var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var e = {}, r = function(t, r, o) {
        var s = {
            exports: {}
        };
        e[t] = {
            status: 0,
            func: r,
            req: o,
            m: s
        };
    }, o = function(r, o) {
        if (!e[r]) return require(o);
        if (!e[r].status) {
            var s = {
                exports: {}
            };
            e[r].status = 1, e[r].func(e[r].req, s, s.exports), "object" === t(s.exports) ? (e[r].m.exports.__proto__ = s.exports.__proto__, 
            Object.keys(s.exports).forEach(function(t) {
                e[r].m.exports[t] = s.exports[t];
                var o = Object.getOwnPropertyDescriptor(s.exports, t);
                o && o.configurable && Object.defineProperty(s.exports, t, {
                    set: function(o) {
                        e[r].m.exports[t] = o;
                    },
                    get: function() {
                        return e[r].m.exports[t];
                    }
                });
            }), s.exports.__esModule && Object.defineProperty(e[r].m.exports, "__esModule", {
                value: !0
            })) : e[r].m.exports = s.exports;
        }
        return e[r].m.exports;
    };
    return r(1583216923125, function(e, r, o) {
        function s(t, e) {
            a.call(this), t.headers = t.headers || {}, this._options = t, this._redirectCount = 0, 
            this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], 
            t.host && (t.hostname || (t.hostname = t.host), delete t.host), e && this.on("response", e);
            var r = this;
            if (this._onNativeResponse = function(t) {
                r._processResponse(t);
            }, !t.pathname && t.path) {
                var o = t.path.indexOf("?");
                o < 0 ? t.pathname = t.path : (t.pathname = t.path.substring(0, o), t.search = t.path.substring(o));
            }
            this._performRequest();
        }
        function n(t) {
            var e = {
                maxRedirects: 21,
                maxBodyLength: 10485760
            }, r = {};
            return Object.keys(t).forEach(function(o) {
                var n = o + ":", u = r[n] = t[o], c = e[o] = Object.create(u);
                c.request = function(t, o) {
                    return "string" == typeof t ? (t = i.parse(t)).maxRedirects = e.maxRedirects : t = Object.assign({
                        protocol: n,
                        maxRedirects: e.maxRedirects,
                        maxBodyLength: e.maxBodyLength
                    }, t), t.nativeProtocols = r, p.equal(t.protocol, n, "protocol mismatch"), h("options", t), 
                    new s(t, o);
                }, c.get = function(t, e) {
                    var r = c.request(t, e);
                    return r.end(), r;
                };
            }), e;
        }
        var i = e("url"), u = e("http"), c = e("https"), p = e("assert"), a = e("stream").Writable, h = e("debug")("follow-redirects"), f = {
            GET: !0,
            HEAD: !0,
            OPTIONS: !0,
            TRACE: !0
        }, d = Object.create(null);
        [ "abort", "aborted", "error", "socket", "timeout" ].forEach(function(t) {
            d[t] = function(e) {
                this._redirectable.emit(t, e);
            };
        }), s.prototype = Object.create(a.prototype), s.prototype.write = function(e, r, o) {
            if (!("string" == typeof e || "object" === (void 0 === e ? "undefined" : t(e)) && "length" in e)) throw new Error("data should be a string, Buffer or Uint8Array");
            "function" == typeof r && (o = r, r = null), 0 !== e.length ? this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, 
            this._requestBodyBuffers.push({
                data: e,
                encoding: r
            }), this._currentRequest.write(e, r, o)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), 
            this.abort()) : o && o();
        }, s.prototype.end = function(t, e, r) {
            "function" == typeof t ? (r = t, t = e = null) : "function" == typeof e && (r = e, 
            e = null);
            var o = this._currentRequest;
            this.write(t || "", e, function() {
                o.end(null, null, r);
            });
        }, s.prototype.setHeader = function(t, e) {
            this._options.headers[t] = e, this._currentRequest.setHeader(t, e);
        }, s.prototype.removeHeader = function(t) {
            delete this._options.headers[t], this._currentRequest.removeHeader(t);
        }, [ "abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout" ].forEach(function(t) {
            s.prototype[t] = function(e, r) {
                return this._currentRequest[t](e, r);
            };
        }), [ "aborted", "connection", "socket" ].forEach(function(t) {
            Object.defineProperty(s.prototype, t, {
                get: function() {
                    return this._currentRequest[t];
                }
            });
        }), s.prototype._performRequest = function() {
            var t = this._options.protocol, e = this._options.nativeProtocols[t];
            if (e) {
                if (this._options.agents) {
                    var r = t.substr(0, t.length - 1);
                    this._options.agent = this._options.agents[r];
                }
                var o = this._currentRequest = e.request(this._options, this._onNativeResponse);
                this._currentUrl = i.format(this._options), o._redirectable = this;
                for (var s in d) s && o.on(s, d[s]);
                if (this._isRedirect) {
                    var n = 0, u = this._requestBodyBuffers;
                    !function t() {
                        if (n < u.length) {
                            var e = u[n++];
                            o.write(e.data, e.encoding, t);
                        } else o.end();
                    }();
                }
            } else this.emit("error", new Error("Unsupported protocol " + t));
        }, s.prototype._processResponse = function(t) {
            this._options.trackRedirects && this._redirects.push({
                url: this._currentUrl,
                headers: t.headers,
                statusCode: t.statusCode
            });
            var e = t.headers.location;
            if (e && !1 !== this._options.followRedirects && t.statusCode >= 300 && t.statusCode < 400) {
                if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
                var r, o = this._options.headers;
                if (307 !== t.statusCode && !(this._options.method in f)) {
                    this._options.method = "GET", this._requestBodyBuffers = [];
                    for (r in o) /^content-/i.test(r) && delete o[r];
                }
                if (!this._isRedirect) for (r in o) /^host$/i.test(r) && delete o[r];
                var s = i.resolve(this._currentUrl, e);
                h("redirecting to", s), Object.assign(this._options, i.parse(s)), this._isRedirect = !0, 
                this._performRequest(), t.destroy();
            } else t.responseUrl = this._currentUrl, t.redirects = this._redirects, this.emit("response", t), 
            this._requestBodyBuffers = [];
        }, r.exports = n({
            http: u,
            https: c
        }), r.exports.wrap = n;
    }, function(t) {
        return o({
            http: 1583216923126,
            https: 1583216923127
        }[t], t);
    }), r(1583216923126, function(t, e, r) {
        e.exports = t("./").http;
    }, function(t) {
        return o({
            "./": 1583216923125
        }[t], t);
    }), r(1583216923127, function(t, e, r) {
        e.exports = t("./").https;
    }, function(t) {
        return o({
            "./": 1583216923125
        }[t], t);
    }), o(1583216923125);
}();