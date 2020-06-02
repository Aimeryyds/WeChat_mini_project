!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.xesEncrypt = e() : t.xesEncrypt = e();
}(window, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            });
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var i in t) e.d(r, i, function(e) {
                return t[e];
            }.bind(null, i));
            return r;
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 1);
    }([ function(t, e, n) {
        var r;
        t.exports = r = r || function(t, e) {
            var n = Object.create || function() {
                function t() {}
                return function(e) {
                    var n;
                    return t.prototype = e, n = new t(), t.prototype = null, n;
                };
            }(), r = {}, i = r.lib = {}, o = i.Base = {
                extend: function(t) {
                    var e = n(this);
                    return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments);
                    }), e.init.prototype = e, e.$super = this, e;
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t;
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            }, s = i.WordArray = o.extend({
                init: function(t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
                },
                toString: function(t) {
                    return (t || u).stringify(this);
                },
                concat: function(t) {
                    var e = this.words, n = t.words, r = this.sigBytes, i = t.sigBytes;
                    if (this.clamp(), r % 4) for (var o = 0; o < i; o++) {
                        var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        e[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
                    } else for (var o = 0; o < i; o += 4) e[r + o >>> 2] = n[o >>> 2];
                    return this.sigBytes += i, this;
                },
                clamp: function() {
                    var e = this.words, n = this.sigBytes;
                    e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4);
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0), t;
                },
                random: function(e) {
                    for (var n, r = [], i = 0; i < e; i += 4) {
                        var o = function(e) {
                            var e = e, n = 987654321, r = 4294967295;
                            return function() {
                                var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                                return i /= 4294967296, (i += .5) * (t.random() > .5 ? 1 : -1);
                            };
                        }(4294967296 * (n || t.random()));
                        n = 987654071 * o(), r.push(4294967296 * o() | 0);
                    }
                    return new s.init(r, e);
                }
            }), a = r.enc = {}, u = a.Hex = {
                stringify: function(t) {
                    for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
                    }
                    return r.join("");
                },
                parse: function(t) {
                    for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new s.init(n, e / 2);
                }
            }, f = a.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push(String.fromCharCode(o));
                    }
                    return r.join("");
                },
                parse: function(t) {
                    for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new s.init(n, e);
                }
            }, c = a.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(f.stringify(t)));
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data");
                    }
                },
                parse: function(t) {
                    return f.parse(unescape(encodeURIComponent(t)));
                }
            }, l = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new s.init(), this._nDataBytes = 0;
                },
                _append: function(t) {
                    "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
                },
                _process: function(e) {
                    var n = this._data, r = n.words, i = n.sigBytes, o = this.blockSize, a = 4 * o, u = i / a, f = (u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0)) * o, c = t.min(4 * f, i);
                    if (f) {
                        for (var l = 0; l < f; l += o) this._doProcessBlock(r, l);
                        var d = r.splice(0, f);
                        n.sigBytes -= c;
                    }
                    return new s.init(d, c);
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(), t;
                },
                _minBufferSize: 0
            }), d = (i.Hasher = l.extend({
                cfg: o.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset();
                },
                reset: function() {
                    l.reset.call(this), this._doReset();
                },
                update: function(t) {
                    return this._append(t), this._process(), this;
                },
                finalize: function(t) {
                    return t && this._append(t), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(t) {
                    return function(e, n) {
                        return new t.init(n).finalize(e);
                    };
                },
                _createHmacHelper: function(t) {
                    return function(e, n) {
                        return new d.HMAC.init(t, n).finalize(e);
                    };
                }
            }), r.algo = {});
            return r;
        }(Math);
    }, function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, o = r(n(0)), s = r(n(2)), a = {}, u = [ "area", "gradeId", "devid", "v", "stu_id", "client_type", "timestamp", "accessid", "nonce", "algorithm", "version", "authorization" ], f = [ "undefined", "object", "function" ], c = [ "", null, "undefined", void 0 ], l = function(t) {
            return -1 === c.indexOf(t);
        }, d = function(t) {
            return "string" == typeof t ? t.trim() : t;
        }, h = function(t) {
            var e = {}, n = null, r = 0, o = 0, s = 0;
            if (t.headers && "application/x-www-form-urlencoded" === t.headers["Content-Type"]) for (r = 0, 
            o = (n = t.data.split("&")).length; r < o; r++) s = n[r].indexOf("="), e[n[r].substring(0, s)] = n[r].substring(s + 1); else e = function(t) {
                if ("string" != typeof t) return t;
                if ("object" === (void 0 === t ? "undefined" : i(t))) return t;
                try {
                    var e = JSON.parse(t);
                    return e && "object" === (void 0 === e ? "undefined" : i(e)) ? e : {};
                } catch (t) {
                    return console.error("老铁，加密的错误信息： " + t), {};
                }
            }(t.data || t.formData);
            return e;
        }, p = function(t) {
            if ("object" !== (void 0 === t ? "undefined" : i(t))) return "";
            var e = h(t), n = function(t) {
                var e, n = {}, r = t.headers || t.header, i = Object.keys(r), o = 0;
                for (o = 0, e = i.length; o < e; o++) -1 !== u.indexOf(i[o]) && (n[i[o]] = r[i[o]]);
                return n;
            }(t), r = function(t) {
                if (!t.url) return {};
                var e = {}, n = t.url, r = 0, i = 0, o = null, s = null;
                if (l(n) && n.indexOf("?") > -1) for (r = 0, i = (o = n.substring(n.indexOf("?") + 1).split("&")).length; r < i; r++) s = o[r].indexOf("="), 
                e[o[r].substring(0, s)] = o[r].substring(s + 1);
                return e;
            }(t), o = t.params || {};
            return function(t) {
                for (var e, n = "", r = Object.keys(t).sort(), o = 0; o < r.length; o += 1) e = t[r[o]], 
                -1 === f.indexOf(void 0 === e ? "undefined" : i(e)) && l(t[r[o]]) && (n += r[o] + "=" + d(t[r[o]]) + "&");
                return n = n.replace(/(&$)/, "");
            }(Object.assign({}, e, o, r, n));
        };
        a.nonce = function() {
            return new Date().getTime() + function() {
                for (var t = [], e = 0; e < 36; e++) t[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                return t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "", 
                t.join("");
            }();
        }, a.sign = function(t, e) {
            var n = p(t);
            return (0, s.default)(n, e).toString(o.default.enc.Hex).toUpperCase();
        }, e.default = a;
    }, function(t, e, n) {
        var r;
        t.exports = (r = n(0), n(3), n(4), r.HmacSHA1);
    }, function(t, e, n) {
        var r, i, o, s, a, u, f, c;
        t.exports = (r = n(0), o = (i = r).lib, s = o.WordArray, a = o.Hasher, u = i.algo, 
        f = [], c = u.SHA1 = a.extend({
            _doReset: function() {
                this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
            },
            _doProcessBlock: function(t, e) {
                for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], u = 0; u < 80; u++) {
                    if (u < 16) f[u] = 0 | t[e + u]; else {
                        var c = f[u - 3] ^ f[u - 8] ^ f[u - 14] ^ f[u - 16];
                        f[u] = c << 1 | c >>> 31;
                    }
                    var l = (r << 5 | r >>> 27) + a + f[u];
                    l += u < 20 ? 1518500249 + (i & o | ~i & s) : u < 40 ? 1859775393 + (i ^ o ^ s) : u < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, 
                    a = s, s = o, o = i << 30 | i >>> 2, i = r, r = l;
                }
                n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, 
                n[4] = n[4] + a | 0;
            },
            _doFinalize: function() {
                var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                e[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash;
            },
            clone: function() {
                var t = a.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        }), i.SHA1 = a._createHelper(c), i.HmacSHA1 = a._createHmacHelper(c), r.SHA1);
    }, function(t, e, n) {
        var r, i, o, s, a, u, f;
        t.exports = (r = n(0), o = (i = r).lib, s = o.Base, a = i.enc, u = a.Utf8, f = i.algo, 
        void (f.HMAC = s.extend({
            init: function(t, e) {
                t = this._hasher = new t.init(), "string" == typeof e && (e = u.parse(e));
                var n = t.blockSize, r = 4 * n;
                e.sigBytes > r && (e = t.finalize(e)), e.clamp();
                for (var i = this._oKey = e.clone(), o = this._iKey = e.clone(), s = i.words, a = o.words, f = 0; f < n; f++) s[f] ^= 1549556828, 
                a[f] ^= 909522486;
                i.sigBytes = o.sigBytes = r, this.reset();
            },
            reset: function() {
                var t = this._hasher;
                t.reset(), t.update(this._iKey);
            },
            update: function(t) {
                return this._hasher.update(t), this;
            },
            finalize: function(t) {
                var e = this._hasher, n = e.finalize(t);
                return e.reset(), e.finalize(this._oKey.clone().concat(n));
            }
        })));
    } ]).default;
});