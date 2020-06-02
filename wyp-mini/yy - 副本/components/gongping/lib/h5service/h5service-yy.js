function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        var n = [], i = !0, r = !1, s = void 0;
        try {
            for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), 
            !e || n.length !== e); i = !0) ;
        } catch (t) {
            r = !0, s = t;
        } finally {
            try {
                !i && a.return && a.return();
            } finally {
                if (r) throw s;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), n = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : i(exports)) && "object" === ("undefined" == typeof module ? "undefined" : i(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" === ("undefined" == typeof exports ? "undefined" : i(exports)) ? exports.H5Service = e() : t.H5Service = e();
}(window, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: i
            });
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" === (void 0 === t ? "undefined" : i(t)) && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var s in t) e.d(r, s, function(e) {
                return t[e];
            }.bind(null, s));
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
        }, e.p = "", e(e.s = "./src/index.ts");
    }({
        "./node_modules/base64-js/index.js": function(t, e, n) {
            function i(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e), [ n, n === e ? 0 : 4 - n % 4 ];
            }
            function r(t, e, n) {
                return 3 * (e + n) / 4 - n;
            }
            function s(t) {
                return a[t >> 18 & 63] + a[t >> 12 & 63] + a[t >> 6 & 63] + a[63 & t];
            }
            function o(t, e, n) {
                for (var i, r = [], o = e; o < n; o += 3) i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), 
                r.push(s(i));
                return r.join("");
            }
            e.byteLength = function(t) {
                var e = i(t), n = e[0], r = e[1];
                return 3 * (n + r) / 4 - r;
            }, e.toByteArray = function(t) {
                for (var e, n = i(t), s = n[0], o = n[1], a = new l(r(t, s, o)), h = 0, p = o > 0 ? s - 4 : s, f = 0; f < p; f += 4) e = u[t.charCodeAt(f)] << 18 | u[t.charCodeAt(f + 1)] << 12 | u[t.charCodeAt(f + 2)] << 6 | u[t.charCodeAt(f + 3)], 
                a[h++] = e >> 16 & 255, a[h++] = e >> 8 & 255, a[h++] = 255 & e;
                return 2 === o && (e = u[t.charCodeAt(f)] << 2 | u[t.charCodeAt(f + 1)] >> 4, a[h++] = 255 & e), 
                1 === o && (e = u[t.charCodeAt(f)] << 10 | u[t.charCodeAt(f + 1)] << 4 | u[t.charCodeAt(f + 2)] >> 2, 
                a[h++] = e >> 8 & 255, a[h++] = 255 & e), a;
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, r = [], s = 0, u = n - i; s < u; s += 16383) r.push(o(t, s, s + 16383 > u ? u : s + 16383));
                return 1 === i ? (e = t[n - 1], r.push(a[e >> 2] + a[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], 
                r.push(a[e >> 10] + a[e >> 4 & 63] + a[e << 2 & 63] + "=")), r.join("");
            };
            for (var a = [], u = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, f = h.length; p < f; ++p) a[p] = h[p], 
            u[h.charCodeAt(p)] = p;
            u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63;
        },
        "./node_modules/buffer/index.js": function(t, e, n) {
            (function(t) {
                function i() {
                    return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function r(t, e) {
                    if (i() < e) throw new RangeError("Invalid typed array length");
                    return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = s.prototype : (null === t && (t = new s(e)), 
                    t.length = e), t;
                }
                function s(t, e, n) {
                    if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, e, n);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return l(this, t);
                    }
                    return o(this, t, e, n);
                }
                function o(t, e, n, i) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, i) : "string" == typeof e ? h(t, e, n) : d(t, e);
                }
                function a(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative');
                }
                function u(t, e, n, i) {
                    return a(e), e <= 0 ? r(t, e) : void 0 !== n ? "string" == typeof i ? r(t, e).fill(n, i) : r(t, e).fill(n) : r(t, e);
                }
                function l(t, e) {
                    if (a(e), t = r(t, e < 0 ? 0 : 0 | c(e)), !s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                    return t;
                }
                function h(t, e, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | g(e, n), o = (t = r(t, i)).write(e, n);
                    return o !== i && (t = t.slice(0, o)), t;
                }
                function p(t, e) {
                    var n = e.length < 0 ? 0 : 0 | c(e.length);
                    t = r(t, n);
                    for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
                    return t;
                }
                function f(t, e, n, i) {
                    if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                    return e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, n) : new Uint8Array(e, n, i), 
                    s.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = s.prototype : t = p(t, e), t;
                }
                function d(t, e) {
                    if (s.isBuffer(e)) {
                        var n = 0 | c(e.length);
                        return 0 === (t = r(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || z(e.length) ? r(t, 0) : p(t, e);
                        if ("Buffer" === e.type && Q(e.data)) return p(t, e.data);
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                }
                function c(t) {
                    if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | t;
                }
                function g(t, e) {
                    if (s.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n) return 0;
                    for (var i = !1; ;) switch (e) {
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return n;

                      case "utf8":
                      case "utf-8":
                      case void 0:
                        return G(t).length;

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return 2 * n;

                      case "hex":
                        return n >>> 1;

                      case "base64":
                        return Y(t).length;

                      default:
                        if (i) return G(t).length;
                        e = ("" + e).toLowerCase(), i = !0;
                    }
                }
                function v(t, e, n) {
                    var i = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if (n >>>= 0, e >>>= 0, n <= e) return "";
                    for (t || (t = "utf8"); ;) switch (t) {
                      case "hex":
                        return x(this, e, n);

                      case "utf8":
                      case "utf-8":
                        return P(this, e, n);

                      case "ascii":
                        return R(this, e, n);

                      case "latin1":
                      case "binary":
                        return M(this, e, n);

                      case "base64":
                        return _(this, e, n);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return L(this, e, n);

                      default:
                        if (i) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), i = !0;
                    }
                }
                function y(t, e, n) {
                    var i = t[e];
                    t[e] = t[n], t[n] = i;
                }
                function b(t, e, n, i, r) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
                    n = +n, isNaN(n) && (n = r ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (r) return -1;
                        n = t.length - 1;
                    } else if (n < 0) {
                        if (!r) return -1;
                        n = 0;
                    }
                    if ("string" == typeof e && (e = s.from(e, i)), s.isBuffer(e)) return 0 === e.length ? -1 : U(t, e, n, i, r);
                    if ("number" == typeof e) return e &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : U(t, [ e ], n, i, r);
                    throw new TypeError("val must be string, number or Buffer");
                }
                function U(t, e, n, i, r) {
                    function s(t, e) {
                        return 1 === o ? t[e] : t.readUInt16BE(e * o);
                    }
                    var o = 1, a = t.length, u = e.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        o = 2, a /= 2, u /= 2, n /= 2;
                    }
                    var l;
                    if (r) {
                        var h = -1;
                        for (l = n; l < a; l++) if (s(t, l) === s(e, -1 === h ? 0 : l - h)) {
                            if (-1 === h && (h = l), l - h + 1 === u) return h * o;
                        } else -1 !== h && (l -= l - h), h = -1;
                    } else for (n + u > a && (n = a - u), l = n; l >= 0; l--) {
                        for (var p = !0, f = 0; f < u; f++) if (s(t, l + f) !== s(e, f)) {
                            p = !1;
                            break;
                        }
                        if (p) return l;
                    }
                    return -1;
                }
                function m(t, e, n, i) {
                    n = Number(n) || 0;
                    var r = t.length - n;
                    i ? (i = Number(i)) > r && (i = r) : i = r;
                    var s = e.length;
                    if (s % 2 != 0) throw new TypeError("Invalid hex string");
                    i > s / 2 && (i = s / 2);
                    for (var o = 0; o < i; ++o) {
                        var a = parseInt(e.substr(2 * o, 2), 16);
                        if (isNaN(a)) return o;
                        t[n + o] = a;
                    }
                    return o;
                }
                function I(t, e, n, i) {
                    return W(G(e, t.length - n), t, n, i);
                }
                function w(t, e, n, i) {
                    return W(V(e), t, n, i);
                }
                function S(t, e, n, i) {
                    return w(t, e, n, i);
                }
                function C(t, e, n, i) {
                    return W(Y(e), t, n, i);
                }
                function k(t, e, n, i) {
                    return W(F(e, t.length - n), t, n, i);
                }
                function _(t, e, n) {
                    return 0 === e && n === t.length ? K.fromByteArray(t) : K.fromByteArray(t.slice(e, n));
                }
                function P(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var i = [], r = e; r < n; ) {
                        var s = t[r], o = null, a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                        if (r + a <= n) {
                            var u, l, h, p;
                            switch (a) {
                              case 1:
                                s < 128 && (o = s);
                                break;

                              case 2:
                                128 == (192 & (u = t[r + 1])) && (p = (31 & s) << 6 | 63 & u) > 127 && (o = p);
                                break;

                              case 3:
                                u = t[r + 1], l = t[r + 2], 128 == (192 & u) && 128 == (192 & l) && (p = (15 & s) << 12 | (63 & u) << 6 | 63 & l) > 2047 && (p < 55296 || p > 57343) && (o = p);
                                break;

                              case 4:
                                u = t[r + 1], l = t[r + 2], h = t[r + 3], 128 == (192 & u) && 128 == (192 & l) && 128 == (192 & h) && (p = (15 & s) << 18 | (63 & u) << 12 | (63 & l) << 6 | 63 & h) > 65535 && p < 1114112 && (o = p);
                            }
                        }
                        null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), 
                        o = 56320 | 1023 & o), i.push(o), r += a;
                    }
                    return A(i);
                }
                function A(t) {
                    var e = t.length;
                    if (e <= X) return String.fromCharCode.apply(String, t);
                    for (var n = "", i = 0; i < e; ) n += String.fromCharCode.apply(String, t.slice(i, i += X));
                    return n;
                }
                function R(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; r < n; ++r) i += String.fromCharCode(127 & t[r]);
                    return i;
                }
                function M(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; r < n; ++r) i += String.fromCharCode(t[r]);
                    return i;
                }
                function x(t, e, n) {
                    var i = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
                    for (var r = "", s = e; s < n; ++s) r += J(t[s]);
                    return r;
                }
                function L(t, e, n) {
                    for (var i = t.slice(e, n), r = "", s = 0; s < i.length; s += 2) r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                    return r;
                }
                function H(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
                }
                function T(t, e, n, i, r, o) {
                    if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > r || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > t.length) throw new RangeError("Index out of range");
                }
                function O(t, e, n, i) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var r = 0, s = Math.min(t.length - n, 2); r < s; ++r) t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r);
                }
                function E(t, e, n, i) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var r = 0, s = Math.min(t.length - n, 4); r < s; ++r) t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255;
                }
                function B(t, e, n, i, r, s) {
                    if (n + i > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range");
                }
                function D(t, e, n, i, r) {
                    return r || B(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(t, e, n, i, 23, 4), 
                    n + 4;
                }
                function j(t, e, n, i, r) {
                    return r || B(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(t, e, n, i, 52, 8), 
                    n + 8;
                }
                function N(t) {
                    if ((t = q(t).replace($, "")).length < 2) return "";
                    for (;t.length % 4 != 0; ) t += "=";
                    return t;
                }
                function q(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                }
                function J(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16);
                }
                function G(t, e) {
                    e = e || 1 / 0;
                    for (var n, i = t.length, r = null, s = [], o = 0; o < i; ++o) {
                        if ((n = t.charCodeAt(o)) > 55295 && n < 57344) {
                            if (!r) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue;
                                }
                                if (o + 1 === i) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue;
                                }
                                r = n;
                                continue;
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && s.push(239, 191, 189), r = n;
                                continue;
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320);
                        } else r && (e -= 3) > -1 && s.push(239, 191, 189);
                        if (r = null, n < 128) {
                            if ((e -= 1) < 0) break;
                            s.push(n);
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            s.push(n >> 6 | 192, 63 & n | 128);
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                        }
                    }
                    return s;
                }
                function V(t) {
                    for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                    return e;
                }
                function F(t, e) {
                    for (var n, i, r, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) i = (n = t.charCodeAt(o)) >> 8, 
                    r = n % 256, s.push(r), s.push(i);
                    return s;
                }
                function Y(t) {
                    return K.toByteArray(N(t));
                }
                function W(t, e, n, i) {
                    for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r) e[r + n] = t[r];
                    return r;
                }
                function z(t) {
                    return t !== t;
                }
                var K = n("./node_modules/base64-js/index.js"), Z = n("./node_modules/ieee754/index.js"), Q = n("./node_modules/isarray/index.js");
                e.Buffer = s, e.SlowBuffer = function(t) {
                    return +t != t && (t = 0), s.alloc(+t);
                }, e.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42;
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
                    } catch (t) {
                        return !1;
                    }
                }(), e.kMaxLength = i(), s.poolSize = 8192, s._augment = function(t) {
                    return t.__proto__ = s.prototype, t;
                }, s.from = function(t, e, n) {
                    return o(null, t, e, n);
                }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, 
                "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                    value: null,
                    configurable: !0
                })), s.alloc = function(t, e, n) {
                    return u(null, t, e, n);
                }, s.allocUnsafe = function(t) {
                    return l(null, t);
                }, s.allocUnsafeSlow = function(t) {
                    return l(null, t);
                }, s.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer);
                }, s.compare = function(t, e) {
                    if (!s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var n = t.length, i = e.length, r = 0, o = Math.min(n, i); r < o; ++r) if (t[r] !== e[r]) {
                        n = t[r], i = e[r];
                        break;
                    }
                    return n < i ? -1 : i < n ? 1 : 0;
                }, s.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                      case "hex":
                      case "utf8":
                      case "utf-8":
                      case "ascii":
                      case "latin1":
                      case "binary":
                      case "base64":
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return !0;

                      default:
                        return !1;
                    }
                }, s.concat = function(t, e) {
                    if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return s.alloc(0);
                    var n;
                    if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                    var i = s.allocUnsafe(e), r = 0;
                    for (n = 0; n < t.length; ++n) {
                        var o = t[n];
                        if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(i, r), r += o.length;
                    }
                    return i;
                }, s.byteLength = g, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                    return this;
                }, s.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                    return this;
                }, s.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), 
                    y(this, e + 3, e + 4);
                    return this;
                }, s.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : v.apply(this, arguments);
                }, s.prototype.equals = function(t) {
                    if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === s.compare(this, t);
                }, s.prototype.inspect = function() {
                    var t = "", n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), 
                    this.length > n && (t += " ... ")), "<Buffer " + t + ">";
                }, s.prototype.compare = function(t, e, n, i, r) {
                    if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), 
                    void 0 === r && (r = this.length), e < 0 || n > t.length || i < 0 || r > this.length) throw new RangeError("out of range index");
                    if (i >= r && e >= n) return 0;
                    if (i >= r) return -1;
                    if (e >= n) return 1;
                    if (e >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === t) return 0;
                    for (var o = r - i, a = n - e, u = Math.min(o, a), l = this.slice(i, r), h = t.slice(e, n), p = 0; p < u; ++p) if (l[p] !== h[p]) {
                        o = l[p], a = h[p];
                        break;
                    }
                    return o < a ? -1 : a < o ? 1 : 0;
                }, s.prototype.includes = function(t, e, n) {
                    return -1 !== this.indexOf(t, e, n);
                }, s.prototype.indexOf = function(t, e, n) {
                    return b(this, t, e, n, !0);
                }, s.prototype.lastIndexOf = function(t, e, n) {
                    return b(this, t, e, n, !1);
                }, s.prototype.write = function(t, e, n, i) {
                    if (void 0 === e) i = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) i = e, 
                    n = this.length, e = 0; else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
                    }
                    var r = this.length - e;
                    if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var s = !1; ;) switch (i) {
                      case "hex":
                        return m(this, t, e, n);

                      case "utf8":
                      case "utf-8":
                        return I(this, t, e, n);

                      case "ascii":
                        return w(this, t, e, n);

                      case "latin1":
                      case "binary":
                        return S(this, t, e, n);

                      case "base64":
                        return C(this, t, e, n);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return k(this, t, e, n);

                      default:
                        if (s) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), s = !0;
                    }
                }, s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    };
                };
                var X = 4096;
                s.prototype.slice = function(t, e) {
                    var n = this.length;
                    t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), 
                    e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
                    var i;
                    if (s.TYPED_ARRAY_SUPPORT) (i = this.subarray(t, e)).__proto__ = s.prototype; else {
                        var r = e - t;
                        i = new s(r, void 0);
                        for (var o = 0; o < r; ++o) i[o] = this[o + t];
                    }
                    return i;
                }, s.prototype.readUIntLE = function(t, e, n) {
                    t |= 0, e |= 0, n || H(t, e, this.length);
                    for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256); ) i += this[t + s] * r;
                    return i;
                }, s.prototype.readUIntBE = function(t, e, n) {
                    t |= 0, e |= 0, n || H(t, e, this.length);
                    for (var i = this[t + --e], r = 1; e > 0 && (r *= 256); ) i += this[t + --e] * r;
                    return i;
                }, s.prototype.readUInt8 = function(t, e) {
                    return e || H(t, 1, this.length), this[t];
                }, s.prototype.readUInt16LE = function(t, e) {
                    return e || H(t, 2, this.length), this[t] | this[t + 1] << 8;
                }, s.prototype.readUInt16BE = function(t, e) {
                    return e || H(t, 2, this.length), this[t] << 8 | this[t + 1];
                }, s.prototype.readUInt32LE = function(t, e) {
                    return e || H(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
                }, s.prototype.readUInt32BE = function(t, e) {
                    return e || H(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
                }, s.prototype.readIntLE = function(t, e, n) {
                    t |= 0, e |= 0, n || H(t, e, this.length);
                    for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256); ) i += this[t + s] * r;
                    return r *= 128, i >= r && (i -= Math.pow(2, 8 * e)), i;
                }, s.prototype.readIntBE = function(t, e, n) {
                    t |= 0, e |= 0, n || H(t, e, this.length);
                    for (var i = e, r = 1, s = this[t + --i]; i > 0 && (r *= 256); ) s += this[t + --i] * r;
                    return r *= 128, s >= r && (s -= Math.pow(2, 8 * e)), s;
                }, s.prototype.readInt8 = function(t, e) {
                    return e || H(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                }, s.prototype.readInt16LE = function(t, e) {
                    e || H(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n;
                }, s.prototype.readInt16BE = function(t, e) {
                    e || H(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n;
                }, s.prototype.readInt32LE = function(t, e) {
                    return e || H(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
                }, s.prototype.readInt32BE = function(t, e) {
                    return e || H(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
                }, s.prototype.readFloatLE = function(t, e) {
                    return e || H(t, 4, this.length), Z.read(this, t, !0, 23, 4);
                }, s.prototype.readFloatBE = function(t, e) {
                    return e || H(t, 4, this.length), Z.read(this, t, !1, 23, 4);
                }, s.prototype.readDoubleLE = function(t, e) {
                    return e || H(t, 8, this.length), Z.read(this, t, !0, 52, 8);
                }, s.prototype.readDoubleBE = function(t, e) {
                    return e || H(t, 8, this.length), Z.read(this, t, !1, 52, 8);
                }, s.prototype.writeUIntLE = function(t, e, n, i) {
                    t = +t, e |= 0, n |= 0, i || T(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = 1, s = 0;
                    for (this[e] = 255 & t; ++s < n && (r *= 256); ) this[e + s] = t / r & 255;
                    return e + n;
                }, s.prototype.writeUIntBE = function(t, e, n, i) {
                    t = +t, e |= 0, n |= 0, i || T(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = n - 1, s = 1;
                    for (this[e + r] = 255 & t; --r >= 0 && (s *= 256); ) this[e + r] = t / s & 255;
                    return e + n;
                }, s.prototype.writeUInt8 = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                    this[e] = 255 & t, e + 1;
                }, s.prototype.writeUInt16LE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                    this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2;
                }, s.prototype.writeUInt16BE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                    this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2;
                }, s.prototype.writeUInt32LE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
                    this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : E(this, t, e, !0), 
                    e + 4;
                }, s.prototype.writeUInt32BE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
                    this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : E(this, t, e, !1), 
                    e + 4;
                }, s.prototype.writeIntLE = function(t, e, n, i) {
                    if (t = +t, e |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        T(this, t, e, n, r - 1, -r);
                    }
                    var s = 0, o = 1, a = 0;
                    for (this[e] = 255 & t; ++s < n && (o *= 256); ) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), 
                    this[e + s] = (t / o >> 0) - a & 255;
                    return e + n;
                }, s.prototype.writeIntBE = function(t, e, n, i) {
                    if (t = +t, e |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        T(this, t, e, n, r - 1, -r);
                    }
                    var s = n - 1, o = 1, a = 0;
                    for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); ) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), 
                    this[e + s] = (t / o >> 0) - a & 255;
                    return e + n;
                }, s.prototype.writeInt8 = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                    t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
                }, s.prototype.writeInt16LE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                    this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2;
                }, s.prototype.writeInt16BE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                    this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2;
                }, s.prototype.writeInt32LE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                    this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : E(this, t, e, !0), 
                    e + 4;
                }, s.prototype.writeInt32BE = function(t, e, n) {
                    return t = +t, e |= 0, n || T(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                    s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
                    this[e + 3] = 255 & t) : E(this, t, e, !1), e + 4;
                }, s.prototype.writeFloatLE = function(t, e, n) {
                    return D(this, t, e, !0, n);
                }, s.prototype.writeFloatBE = function(t, e, n) {
                    return D(this, t, e, !1, n);
                }, s.prototype.writeDoubleLE = function(t, e, n) {
                    return j(this, t, e, !0, n);
                }, s.prototype.writeDoubleBE = function(t, e, n) {
                    return j(this, t, e, !1, n);
                }, s.prototype.copy = function(t, e, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), 
                    e || (e = 0), i > 0 && i < n && (i = n), i === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
                    var r, o = i - n;
                    if (this === t && n < e && e < i) for (r = o - 1; r >= 0; --r) t[r + e] = this[r + n]; else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT) for (r = 0; r < o; ++r) t[r + e] = this[r + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                    return o;
                }, s.prototype.fill = function(t, e, n, i) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (i = e, e = 0, n = this.length) : "string" == typeof n && (i = n, 
                        n = this.length), 1 === t.length) {
                            var r = t.charCodeAt(0);
                            r < 256 && (t = r);
                        }
                        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !s.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
                    var o;
                    if ("number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
                        var a = s.isBuffer(t) ? t : G(new s(t, i).toString()), u = a.length;
                        for (o = 0; o < n - e; ++o) this[o + e] = a[o % u];
                    }
                    return this;
                };
                var $ = /[^+\/0-9A-Za-z-_]/g;
            }).call(this, n("./node_modules/webpack/buildin/global.js"));
        },
        "./node_modules/ieee754/index.js": function(t, e) {
            e.read = function(t, e, n, i, r) {
                var s, o, a = 8 * r - i - 1, u = (1 << a) - 1, l = u >> 1, h = -7, p = n ? r - 1 : 0, f = n ? -1 : 1, d = t[e + p];
                for (p += f, s = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; s = 256 * s + t[e + p], 
                p += f, h -= 8) ;
                for (o = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; o = 256 * o + t[e + p], p += f, 
                h -= 8) ;
                if (0 === s) s = 1 - l; else {
                    if (s === u) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                    o += Math.pow(2, i), s -= l;
                }
                return (d ? -1 : 1) * o * Math.pow(2, s - i);
            }, e.write = function(t, e, n, i, r, s) {
                var o, a, u, l = 8 * s - r - 1, h = (1 << l) - 1, p = h >> 1, f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : s - 1, c = i ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = h) : (o = Math.floor(Math.log(e) / Math.LN2), 
                e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (e += o + p >= 1 ? f / u : f * Math.pow(2, 1 - p)) * u >= 2 && (o++, 
                u /= 2), o + p >= h ? (a = 0, o = h) : o + p >= 1 ? (a = (e * u - 1) * Math.pow(2, r), 
                o += p) : (a = e * Math.pow(2, p - 1) * Math.pow(2, r), o = 0)); r >= 8; t[n + d] = 255 & a, 
                d += c, a /= 256, r -= 8) ;
                for (o = o << r | a, l += r; l > 0; t[n + d] = 255 & o, d += c, o /= 256, l -= 8) ;
                t[n + d - c] |= 128 * g;
            };
        },
        "./node_modules/isarray/index.js": function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t);
            };
        },
        "./node_modules/long/src/long.js": function(t, e) {
            function n(t, e, n) {
                this.low = 0 | t, this.high = 0 | e, this.unsigned = !!n;
            }
            function i(t) {
                return !0 === (t && t.__isLong__);
            }
            function r(t, e) {
                var n, i, r;
                return e ? (t >>>= 0, (r = 0 <= t && t < 256) && (i = p[t]) ? i : (n = o(t, (0 | t) < 0 ? -1 : 0, !0), 
                r && (p[t] = n), n)) : (t |= 0, (r = -128 <= t && t < 128) && (i = h[t]) ? i : (n = o(t, t < 0 ? -1 : 0, !1), 
                r && (h[t] = n), n));
            }
            function s(t, e) {
                if (isNaN(t)) return e ? b : y;
                if (e) {
                    if (t < 0) return b;
                    if (t >= c) return S;
                } else {
                    if (t <= -g) return C;
                    if (t + 1 >= g) return w;
                }
                return t < 0 ? s(-t, e).neg() : o(t % d | 0, t / d | 0, e);
            }
            function o(t, e, i) {
                return new n(t, e, i);
            }
            function a(t, e, n) {
                if (0 === t.length) throw Error("empty string");
                if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return y;
                if ("number" == typeof e ? (n = e, e = !1) : e = !!e, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
                var i;
                if ((i = t.indexOf("-")) > 0) throw Error("interior hyphen");
                if (0 === i) return a(t.substring(1), e, n).neg();
                for (var r = s(f(n, 8)), o = y, u = 0; u < t.length; u += 8) {
                    var l = Math.min(8, t.length - u), h = parseInt(t.substring(u, u + l), n);
                    if (l < 8) {
                        var p = s(f(n, l));
                        o = o.mul(p).add(s(h));
                    } else o = (o = o.mul(r)).add(s(h));
                }
                return o.unsigned = e, o;
            }
            function u(t, e) {
                return "number" == typeof t ? s(t, e) : "string" == typeof t ? a(t, e) : o(t.low, t.high, "boolean" == typeof e ? e : t.unsigned);
            }
            t.exports = n;
            var l = null;
            try {
                l = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11 ])), {}).exports;
            } catch (t) {}
            n.prototype.__isLong__, Object.defineProperty(n.prototype, "__isLong__", {
                value: !0
            }), n.isLong = i;
            var h = {}, p = {};
            n.fromInt = r, n.fromNumber = s, n.fromBits = o;
            var f = Math.pow;
            n.fromString = a, n.fromValue = u;
            var d = 4294967296, c = d * d, g = c / 2, v = r(1 << 24), y = r(0);
            n.ZERO = y;
            var b = r(0, !0);
            n.UZERO = b;
            var U = r(1);
            n.ONE = U;
            var m = r(1, !0);
            n.UONE = m;
            var I = r(-1);
            n.NEG_ONE = I;
            var w = o(-1, 2147483647, !1);
            n.MAX_VALUE = w;
            var S = o(-1, -1, !0);
            n.MAX_UNSIGNED_VALUE = S;
            var C = o(0, -2147483648, !1);
            n.MIN_VALUE = C;
            var k = n.prototype;
            k.toInt = function() {
                return this.unsigned ? this.low >>> 0 : this.low;
            }, k.toNumber = function() {
                return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0);
            }, k.toString = function(t) {
                if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                    if (this.eq(C)) {
                        var e = s(t), n = this.div(e), i = n.mul(e).sub(this);
                        return n.toString(t) + i.toInt().toString(t);
                    }
                    return "-" + this.neg().toString(t);
                }
                for (var r = s(f(t, 6), this.unsigned), o = this, a = ""; ;) {
                    var u = o.div(r), l = (o.sub(u.mul(r)).toInt() >>> 0).toString(t);
                    if ((o = u).isZero()) return l + a;
                    for (;l.length < 6; ) l = "0" + l;
                    a = "" + l + a;
                }
            }, k.getHighBits = function() {
                return this.high;
            }, k.getHighBitsUnsigned = function() {
                return this.high >>> 0;
            }, k.getLowBits = function() {
                return this.low;
            }, k.getLowBitsUnsigned = function() {
                return this.low >>> 0;
            }, k.getNumBitsAbs = function() {
                if (this.isNegative()) return this.eq(C) ? 64 : this.neg().getNumBitsAbs();
                for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--) ;
                return 0 != this.high ? e + 33 : e + 1;
            }, k.isZero = function() {
                return 0 === this.high && 0 === this.low;
            }, k.eqz = k.isZero, k.isNegative = function() {
                return !this.unsigned && this.high < 0;
            }, k.isPositive = function() {
                return this.unsigned || this.high >= 0;
            }, k.isOdd = function() {
                return 1 == (1 & this.low);
            }, k.isEven = function() {
                return 0 == (1 & this.low);
            }, k.equals = function(t) {
                return i(t) || (t = u(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && (this.high === t.high && this.low === t.low);
            }, k.eq = k.equals, k.notEquals = function(t) {
                return !this.eq(t);
            }, k.neq = k.notEquals, k.ne = k.notEquals, k.lessThan = function(t) {
                return this.comp(t) < 0;
            }, k.lt = k.lessThan, k.lessThanOrEqual = function(t) {
                return this.comp(t) <= 0;
            }, k.lte = k.lessThanOrEqual, k.le = k.lessThanOrEqual, k.greaterThan = function(t) {
                return this.comp(t) > 0;
            }, k.gt = k.greaterThan, k.greaterThanOrEqual = function(t) {
                return this.comp(t) >= 0;
            }, k.gte = k.greaterThanOrEqual, k.ge = k.greaterThanOrEqual, k.compare = function(t) {
                if (i(t) || (t = u(t)), this.eq(t)) return 0;
                var e = this.isNegative(), n = t.isNegative();
                return e && !n ? -1 : !e && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1;
            }, k.comp = k.compare, k.negate = function() {
                return !this.unsigned && this.eq(C) ? C : this.not().add(U);
            }, k.neg = k.negate, k.add = function(t) {
                i(t) || (t = u(t));
                var e = this.high >>> 16, n = 65535 & this.high, r = this.low >>> 16, s = 65535 & this.low, a = t.high >>> 16, l = 65535 & t.high, h = t.low >>> 16, p = 0, f = 0, d = 0, c = 0;
                return c += s + (65535 & t.low), d += c >>> 16, c &= 65535, d += r + h, f += d >>> 16, 
                d &= 65535, f += n + l, p += f >>> 16, f &= 65535, p += e + a, p &= 65535, o(d << 16 | c, p << 16 | f, this.unsigned);
            }, k.subtract = function(t) {
                return i(t) || (t = u(t)), this.add(t.neg());
            }, k.sub = k.subtract, k.multiply = function(t) {
                if (this.isZero()) return y;
                if (i(t) || (t = u(t)), l) return o(l.mul(this.low, this.high, t.low, t.high), l.get_high(), this.unsigned);
                if (t.isZero()) return y;
                if (this.eq(C)) return t.isOdd() ? C : y;
                if (t.eq(C)) return this.isOdd() ? C : y;
                if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
                if (t.isNegative()) return this.mul(t.neg()).neg();
                if (this.lt(v) && t.lt(v)) return s(this.toNumber() * t.toNumber(), this.unsigned);
                var e = this.high >>> 16, n = 65535 & this.high, r = this.low >>> 16, a = 65535 & this.low, h = t.high >>> 16, p = 65535 & t.high, f = t.low >>> 16, d = 65535 & t.low, c = 0, g = 0, b = 0, U = 0;
                return U += a * d, b += U >>> 16, U &= 65535, b += r * d, g += b >>> 16, b &= 65535, 
                b += a * f, g += b >>> 16, b &= 65535, g += n * d, c += g >>> 16, g &= 65535, g += r * f, 
                c += g >>> 16, g &= 65535, g += a * p, c += g >>> 16, g &= 65535, c += e * d + n * f + r * p + a * h, 
                c &= 65535, o(b << 16 | U, c << 16 | g, this.unsigned);
            }, k.mul = k.multiply, k.divide = function(t) {
                if (i(t) || (t = u(t)), t.isZero()) throw Error("division by zero");
                if (l) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? o((this.unsigned ? l.div_u : l.div_s)(this.low, this.high, t.low, t.high), l.get_high(), this.unsigned) : this;
                if (this.isZero()) return this.unsigned ? b : y;
                var e, n, r;
                if (this.unsigned) {
                    if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return b;
                    if (t.gt(this.shru(1))) return m;
                    r = b;
                } else {
                    if (this.eq(C)) return t.eq(U) || t.eq(I) ? C : t.eq(C) ? U : (e = this.shr(1).div(t).shl(1)).eq(y) ? t.isNegative() ? U : I : (n = this.sub(t.mul(e)), 
                    r = e.add(n.div(t)));
                    if (t.eq(C)) return this.unsigned ? b : y;
                    if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                    if (t.isNegative()) return this.div(t.neg()).neg();
                    r = y;
                }
                for (n = this; n.gte(t); ) {
                    e = Math.max(1, Math.floor(n.toNumber() / t.toNumber()));
                    for (var a = Math.ceil(Math.log(e) / Math.LN2), h = a <= 48 ? 1 : f(2, a - 48), p = s(e), d = p.mul(t); d.isNegative() || d.gt(n); ) d = (p = s(e -= h, this.unsigned)).mul(t);
                    p.isZero() && (p = U), r = r.add(p), n = n.sub(d);
                }
                return r;
            }, k.div = k.divide, k.modulo = function(t) {
                return i(t) || (t = u(t)), l ? o((this.unsigned ? l.rem_u : l.rem_s)(this.low, this.high, t.low, t.high), l.get_high(), this.unsigned) : this.sub(this.div(t).mul(t));
            }, k.mod = k.modulo, k.rem = k.modulo, k.not = function() {
                return o(~this.low, ~this.high, this.unsigned);
            }, k.and = function(t) {
                return i(t) || (t = u(t)), o(this.low & t.low, this.high & t.high, this.unsigned);
            }, k.or = function(t) {
                return i(t) || (t = u(t)), o(this.low | t.low, this.high | t.high, this.unsigned);
            }, k.xor = function(t) {
                return i(t) || (t = u(t)), o(this.low ^ t.low, this.high ^ t.high, this.unsigned);
            }, k.shiftLeft = function(t) {
                return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? o(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : o(0, this.low << t - 32, this.unsigned);
            }, k.shl = k.shiftLeft, k.shiftRight = function(t) {
                return i(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? o(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : o(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned);
            }, k.shr = k.shiftRight, k.shiftRightUnsigned = function(t) {
                if (i(t) && (t = t.toInt()), 0 === (t &= 63)) return this;
                var e = this.high;
                return t < 32 ? o(this.low >>> t | e << 32 - t, e >>> t, this.unsigned) : 32 === t ? o(e, 0, this.unsigned) : o(e >>> t - 32, 0, this.unsigned);
            }, k.shru = k.shiftRightUnsigned, k.shr_u = k.shiftRightUnsigned, k.toSigned = function() {
                return this.unsigned ? o(this.low, this.high, !1) : this;
            }, k.toUnsigned = function() {
                return this.unsigned ? this : o(this.low, this.high, !0);
            }, k.toBytes = function(t) {
                return t ? this.toBytesLE() : this.toBytesBE();
            }, k.toBytesLE = function() {
                var t = this.high, e = this.low;
                return [ 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 ];
            }, k.toBytesBE = function() {
                var t = this.high, e = this.low;
                return [ t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e ];
            }, n.fromBytes = function(t, e, i) {
                return i ? n.fromBytesLE(t, e) : n.fromBytesBE(t, e);
            }, n.fromBytesLE = function(t, e) {
                return new n(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e);
            }, n.fromBytesBE = function(t, e) {
                return new n(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e);
            };
        },
        "./node_modules/process/browser.js": function(t, e) {
            function n() {
                throw new Error("setTimeout has not been defined");
            }
            function i() {
                throw new Error("clearTimeout has not been defined");
            }
            function r(t) {
                if (h === setTimeout) return setTimeout(t, 0);
                if ((h === n || !h) && setTimeout) return h = setTimeout, setTimeout(t, 0);
                try {
                    return h(t, 0);
                } catch (e) {
                    try {
                        return h.call(null, t, 0);
                    } catch (e) {
                        return h.call(this, t, 0);
                    }
                }
            }
            function s(t) {
                if (p === clearTimeout) return clearTimeout(t);
                if ((p === i || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
                try {
                    return p(t);
                } catch (e) {
                    try {
                        return p.call(null, t);
                    } catch (e) {
                        return p.call(this, t);
                    }
                }
            }
            function o() {
                g && d && (g = !1, d.length ? c = d.concat(c) : v = -1, c.length && a());
            }
            function a() {
                if (!g) {
                    var t = r(o);
                    g = !0;
                    for (var e = c.length; e; ) {
                        for (d = c, c = []; ++v < e; ) d && d[v].run();
                        v = -1, e = c.length;
                    }
                    d = null, g = !1, s(t);
                }
            }
            function u(t, e) {
                this.fun = t, this.array = e;
            }
            function l() {}
            var h, p, f = t.exports = {};
            !function() {
                try {
                    h = "function" == typeof setTimeout ? setTimeout : n;
                } catch (t) {
                    h = n;
                }
                try {
                    p = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (t) {
                    p = i;
                }
            }();
            var d, c = [], g = !1, v = -1;
            f.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                c.push(new u(t, e)), 1 !== c.length || g || r(a);
            }, u.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", 
            f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, 
            f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, 
            f.listeners = function(t) {
                return [];
            }, f.binding = function(t) {
                throw new Error("process.binding is not supported");
            }, f.cwd = function() {
                return "/";
            }, f.chdir = function(t) {
                throw new Error("process.chdir is not supported");
            }, f.umask = function() {
                return 0;
            };
        },
        "./node_modules/webpack/buildin/global.js": function(t, e) {
            var n;
            n = function() {
                return this;
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (t) {
                "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window);
            }
            t.exports = n;
        },
        "./src/ap/aph5.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/utils/logger.ts"), a = s("./src/utils/ProtoLink.ts"), u = s("./src/ap/linkstate.ts"), l = s("./src/utils/timeUtil.ts"), h = s("./src/protobase/ProtoMarshall.ts"), p = s("./src/protobase/uri.ts"), f = s("./src/protobase/ProtoUnmarshall.ts"), d = s("./src/protocol/route/PAPRouter.ts"), c = s("./src/protocol/ap/PLoginAp.ts"), g = s("./src/protocol/ap/PLoginApRes.ts"), v = s("./src/protocol/ap/PApPing.ts"), y = s("./src/utils/utils.ts"), b = s("./src/protocol/ap/PApPong.ts"), U = function() {
                function i(e, n, r) {
                    t(this, i), this.newH5 = e, this.mod = n, this.appid2Stat = new Map(), this.appid2Stat.set(259, {
                        logined: !1,
                        last_login_ts: 0,
                        pingCnt: 0
                    }), this.appid2Stat.set(260, {
                        logined: !1,
                        last_login_ts: 0,
                        pingCnt: 0
                    });
                    var s = e.h5_g_globals;
                    s.isMiniProgram ? this.wsAddr = "wss://h5gw.yy.com/websocket?appid=" + s.udbAppId + "&wxappid=" + s.miniAppId + "&version=" + e.sdkVersion + "&brand=" + encodeURIComponent(s.sysInfo.brand) + "&model=" + encodeURIComponent(s.sysInfo.model) + "&wxVersion=" + encodeURIComponent(s.sysInfo.version) + "&wxSdkVersion=" + encodeURIComponent(s.sysInfo.SDKVersion) + "&system=" + encodeURIComponent(s.sysInfo.system) : this.wsAddr = 259 == r ? "wss://h5chl.yy.com/websocket?appid=" + s.udbAppId + "&version=" + e.version + "&uuid=" + s.uuid : "wss://h5svc.yy.com/websocket?appid=" + s.udbAppId + "&version=" + e.version + "&uuid=" + s.uuid, 
                    o.default.log("new ApH5 wsAddr=" + this.wsAddr), this.wsState = u.default.INIT, 
                    this.lastTimerCheck = l.default.now(), this.lastRecvPong = {}, this.latenceStat = {
                        min: 0,
                        max: 0,
                        avg: 0,
                        count: 0,
                        sum: 0,
                        timeout: 0
                    }, this.cachedBufMap = new Map(), this.currentAppid = r, this.loginUdbRetryCnt = 0, 
                    this.connectTimeStamp = 0;
                }
                return n(i, [ {
                    key: "onCheckTimer",
                    value: function(t, n) {
                        if (this.wsState == u.default.CLOSED && this.link) o.default.log("ApH5.onCheckTimer check ap not ready. re-connect. wsState=" + this.wsState), 
                        this.connect(); else if (this.wsState == u.default.CONNECTED) {
                            if (t - this.lastTimerCheck >= 5e3) if (this.lastTimerCheck = t, this.newH5.h5_g_globals.loginedUDB) if (this.newH5.h5_g_globals.isMiniProgram) {
                                var i = !0, r = !1, s = void 0;
                                try {
                                    for (var a, l = this.appid2Stat[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                                        var h = e(a.value, 2), p = h[0], f = h[1];
                                        this.check(p, f);
                                    }
                                } catch (t) {
                                    r = !0, s = t;
                                } finally {
                                    try {
                                        !i && l.return && l.return();
                                    } finally {
                                        if (r) throw s;
                                    }
                                }
                            } else {
                                var d = this.appid2Stat.get(this.currentAppid);
                                this.check(this.currentAppid, d);
                            } else this.loginUdbRetryCnt < 3 ? this.mod.loginUDB && (this.mod.loginUDB(), this.loginUdbRetryCnt += 1) : this.mod.onLoginUDB && this.mod.onLoginUDB(100, !1);
                        } else this.wsState == u.default.CONNECTING && t - this.connectTimeStamp >= 3e3 && (o.default.warn("ApH5.onCheckTimer connecting ap timeout!!! retry asap"), 
                        this.close(), this.connect());
                    }
                }, {
                    key: "check",
                    value: function(t, e) {
                        if (e.pingCnt >= 3) return o.default.warn("ApH5.check ping time out. appid=" + t + ", pingCnt=" + e.pingCnt), 
                        void this.onclose();
                        e.pingCnt += 1, this.pingAp(t), e.logined || this.loginAp(t);
                    }
                }, {
                    key: "clearCachedBufMap",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = !0, i = !1, r = void 0;
                        try {
                            for (var s, a = this.cachedBufMap[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                                var u = e(s.value, 2), l = u[0], h = u[1];
                                t && h.length > 0 ? (o.default.warn("ApH5.clearCachedBufMap appid=" + l + " size=" + h.length), 
                                h = []) : h.length > 500 && (h = []);
                            }
                        } catch (t) {
                            i = !0, r = t;
                        } finally {
                            try {
                                !n && a.return && a.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                    }
                }, {
                    key: "appidReady",
                    value: function(t) {
                        var e = this.appid2Stat.get(t);
                        return !!e && (this.link && this.wsState == u.default.CONNECTED && e.logined);
                    }
                }, {
                    key: "resetWsState",
                    value: function() {
                        o.default.log("ApH5.resetWsState appid=" + this.currentAppid), this.wsState = u.default.CLOSED, 
                        this.link && this.link.reset(), this.resetLoginedFlag(), this.clearCachedBufMap();
                    }
                }, {
                    key: "resetLoginedFlag",
                    value: function() {
                        if (this.newH5.h5_g_globals.isMiniProgram) {
                            var t = !0, n = !1, i = void 0;
                            try {
                                for (var r, s = this.appid2Stat[Symbol.iterator](); !(t = (r = s.next()).done); t = !0) {
                                    var o = e(r.value, 2), a = (o[0], o[1]);
                                    a.logined = !1, a.pingCnt = 0;
                                }
                            } catch (t) {
                                n = !0, i = t;
                            } finally {
                                try {
                                    !t && s.return && s.return();
                                } finally {
                                    if (n) throw i;
                                }
                            }
                        } else {
                            var u = this.appid2Stat.get(this.currentAppid);
                            u.logined = !1, u.pingCnt = 0;
                        }
                        this.lastTimerCheck = l.default.now();
                    }
                }, {
                    key: "onopen",
                    value: function() {
                        if (o.default.log("ApH5.onopen"), this.wsState = u.default.CONNECTED, this.mod.onApOpen(), 
                        this.newH5.h5_g_globals.loginedUDB) if (this.newH5.h5_g_globals.isMiniProgram) {
                            var t = !0, e = !1, n = void 0;
                            try {
                                for (var i, r = this.appid2Stat.keys()[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                                    var s = i.value;
                                    this.loginAp(s);
                                }
                            } catch (t) {
                                e = !0, n = t;
                            } finally {
                                try {
                                    !t && r.return && r.return();
                                } finally {
                                    if (e) throw n;
                                }
                            }
                        } else this.loginAp(this.currentAppid);
                    }
                }, {
                    key: "onclose",
                    value: function() {
                        o.default.log("ApH5.onclose appid=" + this.currentAppid), this.mod.onApClose(), 
                        this.resetWsState();
                    }
                }, {
                    key: "onerror",
                    value: function(t) {
                        o.default.log("ApH5.onerror err=" + JSON.stringify(t)), this.resetWsState();
                    }
                }, {
                    key: "send",
                    value: function(t, e) {
                        if (this.link && this.wsState == u.default.CONNECTED) if (this.newH5.h5_g_globals.isMiniProgram) {
                            var n = new h.default(!1);
                            n.pushUInt32(t), n.pushString(""), n.pushUint8ArrayWithoutLen(e), this.link.send(n.marshall());
                        } else this.link.send(e); else o.default.warn("ApH5.send failed appid=" + t + " wsState=" + this.wsState);
                    }
                }, {
                    key: "bufSend",
                    value: function(t, e) {
                        this.link && this.wsState == u.default.CONNECTED && this.appid2Stat.get(t).logined ? this.send(t, e) : (o.default.log("ApH5.bufSend ap not ready, cache it. appid=" + t + " wsState=" + this.wsState), 
                        this.cachedBufMap.get(t) ? this.cachedBufMap.get(t).push(e) : this.cachedBufMap.set(t, [ e ]));
                    }
                }, {
                    key: "sendApRouter",
                    value: function(t, e, n, i, r) {
                        var s = new d.default();
                        s.headers.appid = t, s.headers.uid = this.newH5.h5_g_globals.uid, s.headers.realUri = n, 
                        s.headers.srvName = e, s.ruri = n, r && (s.headers.extentProps = r), s.payload = i.marshall();
                        var o = s.marshall();
                        this.bufSend(t, o);
                    }
                }, {
                    key: "connect",
                    value: function() {
                        this.link && this.link.reset(), this.wsState != u.default.CONNECTING ? (this.link = new a.default(this, this.newH5.h5_g_globals.isMiniProgram), 
                        this.wsState = u.default.CONNECTING, this.connectTimeStamp = l.default.now(), this.link.connect(this.wsAddr)) : o.default.log("ApH5.connect websocket is connecting...");
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.wsState != u.default.CLOSING ? (o.default.warn("ApH5.close appid=" + this.currentAppid), 
                        this.wsState = u.default.CLOSING, this.link && this.link.reset(), this.resetLoginedFlag(), 
                        this.connectTimeStamp = 0, this.loginUdbRetryCnt = 0) : o.default.log("ApH5.connect websocket is closing...");
                    }
                }, {
                    key: "onData",
                    value: function(t, e) {
                        var n = new f.default(e);
                        n.uri == p.default.LoginAPResURI ? this.onPLoginApRes(n) : n.uri == p.default.APPongURI ? this.onPApPong(n) : this.mod.onProto(t, n);
                    }
                }, {
                    key: "pingAp",
                    value: function(t) {
                        var e = new v.default();
                        this.bufSend(t, e.marshall());
                    }
                }, {
                    key: "loginAp",
                    value: function(t) {
                        if (this.appid2Stat.get(t) || this.appid2Stat.set(t, {
                            logined: !1,
                            last_login_ts: 0
                        }), 1 != this.appid2Stat.get(t).logined) {
                            var e = l.default.now(), n = this.appid2Stat.get(t).last_login_ts;
                            if (0 !== n && e - n < 1e3) o.default.log("ApH5.loginAp ignore frequently login request. appid=" + t + " now=" + e + " lastLoginTs=" + n); else {
                                this.loginUdbRetryCnt = 0, this.appid2Stat.get(t).last_login_ts = e;
                                var i = new c.default(), r = this.newH5.h5_g_globals;
                                i.appid = t, i.uid = r.uid, i.cookie = r.cookie, r.linkticket && (i.ticket = r.linkticket), 
                                i.loginAuthInfo.account = r.username, i.loginAuthInfo.password = r.password, i.loginAuthInfo.from = "yytianlaitv", 
                                i.loginAuthInfo.cliInfo = "B8-97-5A-17-AD-4D", i.loginAuthInfo.instance = r.uuid, 
                                i.loginAuthInfo.fromWeb = !!r.userType, i.context = t.toString() + ":" + r.userType.toString(), 
                                o.default.log("ApH5.loginAp appid=" + i.appid + " uid=" + i.uid + " userType=" + r.userType);
                                var s = i.marshall();
                                this.send(t, s);
                            }
                        } else o.default.log("ApH5.loginAp already logined. appid=" + t);
                    }
                }, {
                    key: "parseLoginApContext",
                    value: function(t) {
                        var e = t.split(":");
                        return 2 == e.length ? {
                            appid: parseInt(e[0]),
                            userType: parseInt(e[1])
                        } : {};
                    }
                }, {
                    key: "onPLoginApRes",
                    value: function(t) {
                        var e = new g.default();
                        e.unmarshall(t), o.default.warn("ApH5.onLoginApRes code=" + e.resCode + " appid=" + e.context + " clientIp=" + y.default.inet_ntoa(e.clientIp) + " clientPort=" + e.clientPort + " userType=" + this.newH5.h5_g_globals.userType);
                        var n = this.parseLoginApContext(e.context);
                        if (n.hasOwnProperty("appid") && n.hasOwnProperty("userType")) {
                            var i = n.appid, r = n.userType;
                            if (this.appidReady(i)) o.default.log("ApH5.onLoginApRes appid=" + i + " is ready, ignore login resp. resCode=" + e.resCode + " wsState=" + this.wsState + " appid2State=" + JSON.stringify(this.appid2Stat)); else {
                                var s = e.resCode;
                                if (200 != s && this.mod.onCheckStatus(i, s, r), 200 == s) {
                                    o.default.log("ApH5.onLoginApRes success. appid=" + i), this.appid2Stat.get(i).logined = !0;
                                    var a = this.cachedBufMap.get(i);
                                    if (a) {
                                        var u = a.length;
                                        o.default.log("ApH5.onLoginApRes sending appid=" + i + " cached buffer size=" + u);
                                        for (var l = 0; l < u; ++l) this.send(i, a[l]);
                                        this.cachedBufMap.set(i, []);
                                    }
                                    this.mod.onLoginAp(i, r);
                                } else 409 == s ? (o.default.log("ApH5.onLoginApRes resource conflict. change route. appid=" + i + " resCode=" + e.resCode), 
                                this.start()) : 401 == s ? (o.default.log("ApH5.onLoginApRes validation failed. maybe ticket expires. re-login udb. appid=" + i + " resCode=" + e.resCode), 
                                this.mod.restart()) : o.default.log("ApH5.onLoginApRes failed. appid=" + i + " resCode=" + e.resCode);
                            }
                        } else o.default.error("ApH5.onLoginApRes context(appid:userType) parse error");
                    }
                }, {
                    key: "onPApPong",
                    value: function(t) {
                        var n = new b.default();
                        n.unmarshall(t);
                        var i = !0, r = !1, s = void 0;
                        try {
                            for (var o, a = this.appid2Stat[Symbol.iterator](); !(i = (o = a.next()).done); i = !0) {
                                var u = e(o.value, 2), h = u[0], p = u[1];
                                -1 != n.setAvailAppids.indexOf(h) && (p.pingCnt = 0);
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && a.return && a.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        this.lastRecvPong = l.default.now();
                    }
                }, {
                    key: "start",
                    value: function() {
                        o.default.log("ApH5.start"), this.connect();
                    }
                } ]), i;
            }();
            r.default = U;
        },
        "./src/ap/linkstate.ts": function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                INIT: "init",
                CONNECTING: "connecting",
                CONNECTED: "connected",
                CLOSING: "closing",
                CLOSED: "closed"
            };
        },
        "./src/channelh5.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/ap/aph5.ts"), a = s("./src/protobase/ProtoUnmarshall.ts"), u = s("./src/utils/logger.ts"), l = s("./src/protocol/CliAPLoginAuthReq.ts"), h = s("./src/protocol/CliAPLoginAuthReq2.ts"), p = s("./src/protocol/AnonymousLogin.ts"), f = s("./src/protocol/AnonymousLoginRes.ts"), d = s("./src/protocol/login_udb_v2/YYLoginReq.ts"), c = s("./src/protobase/uri.ts"), g = s("./src/protocol/JoinChannelReq.ts"), v = s("./src/protocol/ChangeFolder.ts"), y = s("./src/protocol/UserGroupReq.ts"), b = s("./src/protocol/LeaveChannelReq.ts"), U = s("./src/protocol/ChannelUserCountReq.ts"), m = s("./src/protocol/GetMaixuListReq.ts"), I = s("./src/protocol/PullOnlineUserReq.ts"), w = s("./src/utils/utils.ts"), S = s("./src/protocol/route/PAPRouter.ts"), C = s("./src/protocol/JoinChannelRes.ts"), k = s("./src/protocol/PReqChannelInfo.ts"), _ = s("./src/protocol/GetChatCtrlReq.ts"), P = s("./src/protocol/ChangeFolderRes.ts"), A = s("./src/protocol/CliAPLoginAuthRes.ts"), R = s("./src/protocol/CliAPLoginAuthRes2.ts"), M = s("./src/protocol/login_udb_v2/YYLoginRes.ts"), x = s("./src/protocol/APForceOut.ts"), L = s("./src/protocol/NormalLoginRes.ts"), H = s("./src/protocol/LeaveChannelRes.ts"), T = s("./src/protocol/ChannelUserCountRes.ts"), O = s("./src/protocol/GetMaixuListRes.ts"), E = s("./src/protocol/DlUsrGroupMsg.ts"), B = s("./src/protocol/PReqChannelInfoRes.ts"), D = s("./src/protocol/PQueryUserInfoRes.ts"), j = s("./src/protocol/PushChannelUserCount.ts"), N = s("./src/protocol/MaixuSerialPack.ts"), q = s("./src/protocol/ChannelKickOff.ts"), J = s("./src/protocol/PChannelInfoUpdateURI.ts"), G = s("./src/protocol/PSubChannelAddInfo.ts"), V = s("./src/protocol/PSubChannelRmInfo.ts"), F = s("./src/protocol/POnMemberUpdated.ts"), Y = s("./src/protocol/DisableVoice.ts"), W = s("./src/protocol/SetChannelText.ts"), z = s("./src/utils/ZlibUtil.ts"), K = s("./src/protocol/GetChatCtrlRes.ts"), Z = s("./src/protocol/PushChannelAdminZip.ts"), Q = s("./src/protocol/PushChannelUser.ts"), X = s("./src/protocol/PullOnlineUserRes.ts"), $ = s("./src/protocol/POnUniCast.ts"), tt = s("./src/protocol/PMultiJoinKick.ts"), et = s("./src/protocol/POnTuoRen.ts"), nt = s("./src/protocol/PJoinQueueRes.ts"), it = s("./src/protocol/LeaveMaixu.ts"), rt = s("./src/protocol/KickOffMaixu.ts"), st = s("./src/protocol/DoubleTimeMaixu.ts"), ot = s("./src/protocol/MuteMaixu.ts"), at = s("./src/protocol/MoveMaixu.ts"), ut = s("./src/protocol/TurnMaixu.ts"), lt = s("./src/protocol/TimeoutMaixu.ts"), ht = s("./src/protocol/DisableMaixu.ts"), pt = s("./src/protocol/TuoRenMaixu.ts"), ft = s("./src/protocol/KickAllMaixu.ts"), dt = s("./src/protocol/TopMaixu.ts"), ct = s("./src/protocol/AddChorus.ts"), gt = s("./src/protocol/InviteChorusRes.ts"), vt = s("./src/protocol/RemoveChorus.ts"), yt = s("./src/protobase/ProtoMarshall.ts"), bt = s("./src/protocol/PExUinfoModifyReq.ts"), Ut = function() {
                function i(e, n) {
                    t(this, i), this.newH5 = e, this.ap = new o.default(this.newH5, this, 259), this.svcH5 = n, 
                    this.linkEventCbs = [], this.h5EventCbs = [], this.h5ChannelEventCbs = [], this.h5MaixuCbs = [], 
                    this.handleDic = new Map(), this.bWaitingForAnonyousLoginUDBRes = !1, this.bWaitingForNormalLoginUDBRes = !1, 
                    this.addHandle(c.default.PAPRouterURI, this.onPApRouter.bind(this)), this.addHandle(c.default.CliAPLoginAuthResURI, this.onCliApLoginAuthRes.bind(this)), 
                    this.addHandle(c.default.CliAPLoginAuthRes2URI, this.onCliApLoginAuthRes2.bind(this)), 
                    this.addHandle(c.default.APForceOutURI, this.onApForceOut.bind(this));
                }
                return n(i, [ {
                    key: "onCheckTimer",
                    value: function(t, e) {
                        this.ap && this.ap.onCheckTimer(t, e);
                    }
                }, {
                    key: "setLinkEventCb",
                    value: function(t, e) {
                        if (e) return this.linkEventCbs = [], void this.linkEventCbs.push(t);
                        for (var n = 0; n < this.linkEventCbs.length; ++n) if (this.linkEventCbs[n] == t) return;
                        this.linkEventCbs.push(t);
                    }
                }, {
                    key: "setH5EventCb",
                    value: function(t, e) {
                        if (e) return this.h5EventCbs = [], void this.h5EventCbs.push(t);
                        for (var n = 0; n < this.h5EventCbs.length; ++n) if (this.h5EventCbs[n] == t) return;
                        this.h5EventCbs.push(t);
                    }
                }, {
                    key: "setChannelEventCb",
                    value: function(t, e) {
                        if (e) return this.h5ChannelEventCbs = [], void this.h5ChannelEventCbs.push(t);
                        for (var n = 0; n < this.h5ChannelEventCbs.length; ++n) if (this.h5ChannelEventCbs[n] == t) return;
                        this.h5ChannelEventCbs.push(t);
                    }
                }, {
                    key: "setH5MaixuCb",
                    value: function(t, e) {
                        if (e) return this.h5MaixuCbs = [], void this.h5MaixuCbs.push(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) if (this.h5MaixuCbs[n] == t) return;
                        this.h5MaixuCbs.push(t);
                    }
                }, {
                    key: "enableChanUserPush",
                    value: function() {
                        this.newH5.h5_g_globals.bNeedOnlineChanUser = !0;
                    }
                }, {
                    key: "addHandle",
                    value: function(t, e) {
                        this.handleDic.set(t, e);
                    }
                }, {
                    key: "onProto",
                    value: function(t, e) {
                        var n = this.handleDic.get(t);
                        null !== n && void 0 !== n ? (u.default.debug("ChannelH5.onProto uri=" + (t >> 8 & w.default.getUintMax()) + "/" + (255 & t)), 
                        n(e)) : this.newH5.h5_g_globals.isMiniProgram && (u.default.debug("ChannelH5.onProto UNKNOWN uri=" + (t >> 8 & w.default.getUintMax()) + "/" + (255 & t)), 
                        this.svcH5.onProto(t, e));
                    }
                }, {
                    key: "onPApRouter",
                    value: function(t) {
                        var e = new S.default();
                        e.unmarshall(t), u.default.debug("ChannelH5.onPApRouter res.ruri=" + (e.ruri >> 8 & w.default.getUintMax()) + "/" + (255 & e.ruri) + " payload.length=" + e.payload.byteLength + " from=" + e.from);
                        var n = w.default.payload2DataView(e.payload);
                        e.payload = null;
                        var i = new a.default(n, !1);
                        switch (e.ruri) {
                          case c.default.JoinChannelResURI:
                            this.onPJoinChannelRes(i);
                            break;

                          case c.default.ChangeFolderResURI:
                            this.onPChangeFolderRes(i);
                            break;

                          case c.default.LeaveChannelResURI:
                            this.onPLeaveChannelRes(i);
                            break;

                          case c.default.ChannelUserCountResURI:
                            this.onPChannelUserCountRes(i);
                            break;

                          case c.default.GetMaixuListResURI:
                            this.onPGetMaixuListRes(i);
                            break;

                          case c.default.DlUsrGroupMsgURI:
                            this.onPDlUserGroupMsg(i);
                            break;

                          case c.default.PReqChannelInfoResURI:
                            this.onPReqChannInfoRes(i);
                            break;

                          case c.default.PQueryUserInfoResURI:
                            this.onPQueryUserInfoRes(i);
                            break;

                          case c.default.PullOnlineUserResURI:
                            this.onPullOnlineUserRes(i);
                            break;

                          case c.default.POnUniCastURI:
                            this.onPOnUnicast(i);
                            break;

                          case c.default.APOnlineAckNotifyURI:
                            break;

                          case c.default.GetChatCtrlResZipURI:
                            this.onGetChatCtrlResZip(i);
                            break;

                          case c.default.DlSvcMsgByUidURI:
                            this.newH5.h5_g_globals.isMiniProgram && this.svcH5.onProto(c.default.DlSvcMsgByUidURI, i);
                            break;

                          default:
                            u.default.warn("ChannelH5.onPApRouter unexpected res.ruri=" + (e.ruri >> 8 & w.default.getUintMax()) + "/" + (255 & e.ruri));
                        }
                    }
                }, {
                    key: "start",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        t.credit || t.username && t.password ? t.userType = 1 : t.userType = 0, u.default.log("ChannelH5.start userType=" + this.newH5.h5_g_globals.userType + " uid=" + t.uid + " credit=" + t.credit + " username=" + t.username + " udb_l=" + t.password), 
                        this.ap || (this.ap = new o.default(this.newH5, this, 259)), this.ap.start();
                    }
                }, {
                    key: "restart",
                    value: function() {
                        u.default.log("ChannelH5.restart"), this.newH5.h5_g_globals.loginedUDB = !1, this.ap && (this.ap.close(), 
                        this.ap = null), this.svcH5.ap && (this.svcH5.ap.close(), this.svcH5.ap = null), 
                        this.start();
                    }
                }, {
                    key: "login",
                    value: function() {
                        var t = this.newH5.h5_g_globals, e = t.topSid, n = t.subSid;
                        this.logout(!1);
                        var i = parseInt(w.default.getCookie("yyuid", t.isMiniProgram)), r = w.default.getCookie("udb_c", t.isMiniProgram), s = w.default.getCookie("username", t.isMiniProgram), o = w.default.getCookie("udb_l", t.isMiniProgram);
                        i && r || s && o ? t.userType = 1 : (i = 0, t.userType = 0), t.uid = i, t.credit = r, 
                        t.username = s, t.password = o, u.default.log("ChannelH5.login userType=" + t.userType + " preTopSid=" + e + " uid=" + t.uid + " credit=" + t.credit + " username=" + t.username + " password=" + t.password), 
                        this.loginUDB(), e && n && (u.default.log("ChannelH5.login re-join channel by login preTodSid=" + e + " preSubSid=" + n), 
                        this.joinChannel(e, n, null, null, t.exclusiveJoin, null, !1));
                    }
                }, {
                    key: "logout",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.newH5.h5_g_globals;
                        u.default.log("ChannelH5.logout uid=" + e.uid + " bRestartSocket=" + t), this.leaveChannel(), 
                        this.logoutAp(), t && (e.logout(), this.restart());
                    }
                }, {
                    key: "logoutAp",
                    value: function() {
                        u.default.log("ChannelH5.logoutAp"), this.ap && this.ap.resetLoginedFlag(), this.svcH5.ap && this.svcH5.ap.resetLoginedFlag();
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        u.default.log("ChannelH5.stop uid:" + t + " reason:" + e), this.newH5.h5_g_globals.logout(), 
                        this.ap && this.ap.close(), this.svcH5.ap && this.svcH5.ap.close();
                    }
                }, {
                    key: "onCheckStatus",
                    value: function(t, e, n) {
                        260 == t && this.svcH5.onCheckStatus(t, e, n);
                        for (var i = 0; i < this.linkEventCbs.length; ++i) this.linkEventCbs[i]({
                            type: 2,
                            code: e,
                            appid: t,
                            userType: n
                        });
                    }
                }, {
                    key: "onLoginUDB",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        0 == t && (this.newH5.h5_g_globals.loginedUDB = !0, this.ap.loginAp(259), this.svcH5.login());
                        for (var r = 0; r < this.h5EventCbs.length; ++r) this.h5EventCbs[r]({
                            type: 0,
                            code: t,
                            isAnonymous: e,
                            baseInfo: n,
                            errMsg: i
                        });
                    }
                }, {
                    key: "anonyousLoginUDB",
                    value: function() {
                        var t = new l.default();
                        t.ruri = c.default.AnonymousLoginURI;
                        var e = new p.default();
                        e.cliExtension = this.newH5.h5_g_globals.udbAppId, e.pcInfo = "B8-97-5A-17-AD-4D", 
                        e.macAddr = "B8-97-5A-17-AD-4D", t.payload = e.marshall(), this.ap.send(259, t.marshall()), 
                        this.bWaitingForAnonyousLoginUDBRes = !0, u.default.log("ChannelH5.anonyousLoginUDB:" + JSON.stringify(e));
                    }
                }, {
                    key: "normalLoginUDB",
                    value: function() {
                        var t = this.newH5.h5_g_globals, e = new h.default();
                        e.ruri = c.default.YYLoginReqURI;
                        var n = new d.default();
                        n.protoVersion = 0, n.protoHeader.appid = t.udbAppId, n.protoHeader.sign = t.udbAppkey, 
                        n.protoToken.tokenType = 1, n.protoToken.protoCredit.uid = t.uid, t.credit ? (n.protoToken.tokenType = 1, 
                        n.protoToken.protoCredit.credit = t.credit, u.default.log("ChannelH5.normalLoginUDB using credit:" + JSON.stringify(n))) : (n.protoToken.tokenType = 4, 
                        n.protoToken.protoAcctInfo.user = t.username, n.protoToken.protoAcctInfo.acctInfo = t.password, 
                        u.default.log("ChannelH5.normalLoginUDB using acctInfo:" + JSON.stringify(n))), 
                        e.payload = w.default.insertTwoBytesHeader(n.marshall()), this.ap.send(259, e.marshall()), 
                        this.bWaitingForNormalLoginUDBRes = !0;
                    }
                }, {
                    key: "joinChannel",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                        if (!t || !e) return u.default.log("ChannelH5.joinChannel ignore invalid topSid or subSid. uid=" + this.newH5.h5_g_globals.uid + " arguments=" + JSON.stringify(arguments)), 
                        !1;
                        var a = this.newH5.h5_g_globals;
                        if (!o && a.topSid == t && a.subSid == e) return u.default.log("ChannelH5.joinChannel ignore duplicate join channel request. uid=" + a.uid + " arguments=" + JSON.stringify(arguments)), 
                        !0;
                        var l = Date.now();
                        if (!o && l - a.lastSentJoinChl < 2e3) return u.default.log("ChannelH5.joinChannel ignore too often join channel request. uid=" + a.uid + " arguments=" + JSON.stringify(arguments)), 
                        !1;
                        if (!o && t == a.topSid) return this.jumpSubChannel(e, s);
                        a.channelJoined && (u.default.log("ChannelH5.joinChannel firstly leave channel topSid=" + a.topSid + " subSid=" + a.subSid), 
                        this.leaveChannel()), a.tryTopSid = t, a.trySubSid = e, a.everJoinChannel = !0, 
                        a.lastSentJoinChl = l;
                        var h = new g.default();
                        h.uid = a.uid, h.topSid = t, h.subSid = e, n && h.joinProps.set(5, n), i && h.joinProps.set(6, new Uint8Array(i)), 
                        r && (h.joinProps.set(2, "0"), h.joinProps.set(3, "1")), null != s && void 0 !== s && 0 != s.length && h.joinProps.set(1, s), 
                        u.default.log("ChannelH5.joinChannel start to join channel. req=" + JSON.stringify(h) + " joinProps=" + w.default.stringifyMap(h.joinProps)), 
                        this.sendApRouter(259, "channelAuther", c.default.JoinChannelReqURI, h, w.default.getExtProps(t));
                    }
                }, {
                    key: "onCliApLoginAuthRes",
                    value: function(t) {
                        if (u.default.log("ChannelH5.onCliApLoginAuthRes bWaitingForAnonyousLoginUDBRes=" + this.bWaitingForAnonyousLoginUDBRes + " bWaitingForNormalLoginUDBRes=" + this.bWaitingForNormalLoginUDBRes), 
                        this.bWaitingForAnonyousLoginUDBRes && !this.bWaitingForNormalLoginUDBRes) {
                            this.bWaitingForAnonyousLoginUDBRes = !1;
                            var e = new A.default();
                            e.unmarshall(t);
                            var n = w.default.payload2DataView(e.payload);
                            e.payload = null;
                            var i = new a.default(n, !1), r = this.newH5.h5_g_globals;
                            if (e.ruri == c.default.AnonymousLoginResURI) {
                                var s = new f.default();
                                s.unmarshall(i), 0 != s.resCode && 200 != s.resCode ? (u.default.log("ChannelH5.onCliApLoginAuthRes anonymous login UDB failed. res=" + JSON.stringify(s)), 
                                this.onLoginUDB(e.resCode, !0)) : (u.default.log("ChannelH5.onCliApLoginAuthRes anonymous login UDB success. res=" + JSON.stringify(s)), 
                                r.uid = s.uid, r.ticket = s.ticket, r.cookie = s.cookie, r.username = s.passport, 
                                r.password = s.password, r.yyid = s.yyid, r.userType = 0, this.onLoginUDB(s.resCode, !0, {
                                    uid: s.uid,
                                    yyid: s.yyid
                                }));
                            } else if (e.ruri == c.default.NormalLoginResURI || e.ruri == c.default.UDBLogin3rdResURI) {
                                var o = new L.default();
                                if (o.unmarshall(i), 0 != o.resCode && 200 != o.resCode) return u.default.log("ChannelH5.onCliApLoginAuthRes normal login UDB failed. res=" + JSON.stringify(e)), 
                                void this.onLoginUDB(e.resCode, !1);
                                u.default.log("ChannelH5.onCliApLoginAuthRes normal login UDB success. res=" + JSON.stringify(e)), 
                                r.uid = o.uid, r.yyid = o.yyid, r.ticket = o.ticket, r.cookie = o.cookie, r.username = o.passport.toString(), 
                                r.userType = 1, this.onLoginUDB(e.resCode, !1, {
                                    uid: o.uid,
                                    yyid: o.yyid
                                });
                            } else u.default.log("ChannelH5.onCliApLoginAuthRes unhandle ruri " + e.ruri / 256 + " | " + e.ruri % 256);
                        }
                    }
                }, {
                    key: "onCliApLoginAuthRes2",
                    value: function(t) {
                        if (u.default.log("ChannelH5.onCliApLoginAuthRes2 bWaitingForAnonyousLoginUDBRes=" + this.bWaitingForAnonyousLoginUDBRes + " bWaitingForNormalLoginUDBRes=" + this.bWaitingForNormalLoginUDBRes), 
                        this.bWaitingForNormalLoginUDBRes) {
                            this.bWaitingForAnonyousLoginUDBRes && (this.bWaitingForAnonyousLoginUDBRes = !1), 
                            this.bWaitingForNormalLoginUDBRes = !1;
                            var e = new R.default();
                            if (e.unmarshall(t), e.ruri == c.default.YYLoginResURI) {
                                var n = this.newH5.h5_g_globals, i = w.default.payload2DataView(e.payload);
                                e.payload = null;
                                var r = new a.default(i, !1), s = new M.default();
                                if (s.unmarshall(r), 0 != s.errCode) return u.default.log("ChannelH5.onCliApLoginAuthRes2 YYLoginRes login UDB failed. res=" + JSON.stringify(s)), 
                                this.onLoginUDB(s.errCode, !1, {}, s.errMsg), void (n.miniAppId && n.thirdUdbAppId && this.newH5.wxReLogin());
                                if (n.uid = s.loginData.uid, n.yyid = s.loginData.yyid, n.ticket = s.ticket, n.linkticket = s.linkTicket, 
                                n.cookie = s.cookie, n.username = s.loginData.passport, n.credit = s.loginData.credit, 
                                n.password = s.loginData.credit, u.default.log("ChannelH5.onCliApLoginAuthRes2 YYLoginRes login UDB success. uid=" + n.uid + " yyid=" + n.yyid + " username=" + n.username + " credit=" + n.credit), 
                                n.userType = 1, n.isMiniProgram) w.default.setMiniProgramCookie("yyuid", n.uid), 
                                w.default.setMiniProgramCookie("udb_c", n.credit), w.default.setMiniProgramCookie("cookieDate", Date.now()); else {
                                    var o = "https:" == document.location.protocol;
                                    w.default.setCookie("udb_c", n.credit, 168, "/", "yy.com", o), w.default.setCookie("cookieDate", Date.now(), 168, "/", "", o);
                                }
                                this.onLoginUDB(s.errCode, !1, {
                                    uid: n.uid,
                                    yyid: n.yyid
                                });
                            } else u.default.log("ChannelH5.onCliApLoginAuthRes2 unhandle ruri " + e.ruri / 256 + " | " + e.ruri % 256);
                        } else u.default.warn("ChannelH5.onCliApLoginAuthRes2 why still waiting?!!!");
                    }
                }, {
                    key: "onApForceOut",
                    value: function(t) {
                        var e = new x.default();
                        e.unmarshall(t), u.default.warn("ChannelH5.onApForceOut " + JSON.stringify(e)), 
                        this.stop(e.uid, e.reason);
                        for (var n = 0; n < this.h5EventCbs.length; ++n) this.h5EventCbs[n]({
                            type: 3,
                            code: e.code,
                            reason: e.reason
                        });
                    }
                }, {
                    key: "onPJoinChannelRes",
                    value: function(t) {
                        var e = new C.default();
                        e.unmarshall(t);
                        var n = this.newH5.h5_g_globals;
                        if (4 == e.loginStatus) {
                            n.channelJoined = !0, n.topSid = e.topSid, n.subSid = e.subSid, n.asid = e.asid, 
                            u.default.log("ChannelH5.onPJoinChannelRes success. res=" + JSON.stringify(e) + " joinProps=" + w.default.stringifyMap(e.joinProps)), 
                            this.joinChannelBc(), this.svcH5.joinServiceBc();
                            var i = w.default.getExtProps(e.topSid), r = new k.default();
                            r.topSid = n.topSid, this.sendApRouter(259, "channelInfo", c.default.PReqChannelInfoURI, r, i);
                            var s = new _.default();
                            if (s.topSid = n.topSid, this.sendApRouter(259, "chatCtrl", c.default.GetChatCtrlReqURI, s, i), 
                            this.svcH5.getHistoryChat(), this.svcH5.getUserRoleInfo([ n.uid ]), !n.isMiniProgram) {
                                var o = new bt.default();
                                o.uid = n.uid, o.topSid = n.topSid;
                                var a = new yt.default(!1);
                                a.pushUInt32(1), a.pushUInt16(2), a.pushString("4100"), o.type2Val.set(1, a.marshall()), 
                                console.log("ChannelH5.onPJoinChannelRes setting webyy logo"), this.svcH5.sendAppData(22, o.marshall());
                            }
                        } else u.default.warn("ChannelH5.onPJoinChannelRes failed." + JSON.stringify(e));
                        for (var l = 0; l < this.h5ChannelEventCbs.length; ++l) this.h5ChannelEventCbs[l]({
                            type: 0,
                            code: e.loginStatus,
                            uid: e.uid,
                            top_sid: e.topSid,
                            sub_sid: e.subSid,
                            msg: e.errInfo
                        });
                    }
                }, {
                    key: "onPChangeFolderRes",
                    value: function(t) {
                        var e = new P.default();
                        e.unmarshall(t);
                        var n = this.newH5.h5_g_globals;
                        200 == e.resCode ? (this.leaveChannelBc(), this.svcH5.leaveServiceBc(), n.micList = {}, 
                        n.subSid = e.toSid, this.joinChannelBc(), this.svcH5.joinServiceBc(), u.default.log("ChannelH5.onPChangeFolderRes jump subChannel success. res=" + JSON.stringify(e)), 
                        e.resCode = 4, this.getMaixuList()) : u.default.log("ChannelH5.onPChangeFolderRes jump subChannel failed. res=" + JSON.stringify(e));
                        for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                            type: 0,
                            code: e.resCode,
                            uid: e.uid,
                            top_sid: n.topSid,
                            sub_sid: e.toSid
                        });
                    }
                }, {
                    key: "onPLeaveChannelRes",
                    value: function(t) {
                        var e = new H.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onPLeaveChannelRes res=" + JSON.stringify(e));
                        var n = this.newH5.h5_g_globals;
                        n.topSid == e.topSid && (n.channelJoined = !1, n.topSid = 0, n.subSid = 0, n.asid = 0, 
                        n.everJoinChannel = !1);
                        for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                            type: 4,
                            top_sid: e.topSid
                        });
                    }
                }, {
                    key: "onPChannelUserCountRes",
                    value: function(t) {
                        var e = new T.default();
                        e.unmarshall(t), u.default.debug("ChannelH5.onPChannelUserCountRes " + JSON.stringify(e)), 
                        this.newH5.h5_g_globals.channelUserCount.totalUserCount = e.totalCount;
                        var n = w.default.map2Object(e.sid2Count);
                        this.newH5.h5_g_globals.channelUserCount.sid2count = n;
                        for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                            type: 1,
                            total: e.totalCount,
                            sid2count: n
                        });
                    }
                }, {
                    key: "onPGetMaixuListRes",
                    value: function(t) {
                        var e = new O.default();
                        e.unmarshall(t);
                        var n = this.newH5.h5_g_globals.micList;
                        n.micList = e.userlist, n.linkedMicList = e.choruslist, 0 != e.choruslist.length && n.linkedMicList.unshift(e.userlist[0]), 
                        u.default.log("ChannelH5.onPGetMaixuListRes global micList:" + JSON.stringify(n.micList) + " linkedMicList=" + JSON.stringify(n.linkedMicList));
                        for (var i = 0; i < this.h5MaixuCbs.length; ++i) this.h5MaixuCbs[i]({
                            type: 0,
                            microphones: e.userlist,
                            chorus: e.choruslist
                        });
                    }
                }, {
                    key: "onPDlUserGroupMsg",
                    value: function(t) {
                        var e = new E.default();
                        e.unmarshall(t), this.newH5.h5_g_globals.isMiniProgram ? this.svcH5.procUserGroupMsg(e) : this.procUserGroupMsg(e);
                    }
                }, {
                    key: "procUserGroupMsg",
                    value: function(t) {
                        var e = t.appid, n = w.default.payload2DataView(t.msg);
                        t.msg = null;
                        var i = new a.default(n), r = i.uri;
                        switch (u.default.debug("ChannelH5.procUserGroupMsg appid=" + e + " len=" + i.len + " uri>>8=" + (r >> 8) + " code=" + i.resCode), 
                        r) {
                          case c.default.MaixuSerialPackURI:
                            this.procMaixuSerialPack(i);
                            break;

                          case c.default.PushChannelUserCountURI:
                            this.onPushChannelUserCount(i);
                            break;

                          case c.default.ChannelKickOffURI:
                            this.onChannelKickOff(i);
                            break;

                          case c.default.POnChanelInfoUpdatedInfoURI:
                          case c.default.PChannelInfoUpdateURI:
                            this.onChannelInfoUpdate(i);
                            break;

                          case c.default.PSubChannelAddInfoURI:
                            this.onSubChannelAddInfo(i);
                            break;

                          case c.default.PSubChannelRmInfoURI:
                            this.onSubChannelRmInfo(i);
                            break;

                          case c.default.PushChannelAdminZipURI:
                            this.onPushChannelAdminZip(i);
                            break;

                          case c.default.POnMemberUpdatedURI:
                            this.onMemberUpdated(i);
                            break;

                          case c.default.PushChannelUserZipURI:
                            this.onPushChannelUserZip(i);
                            break;

                          case c.default.DisableVoiceURI:
                            this.onDisableVoice(i);
                            break;

                          case c.default.DisableTextURI:
                            this.onDisableText(i);
                            break;

                          case c.default.SetChannelTextURI:
                            this.onSetChannelText(i);
                        }
                    }
                }, {
                    key: "procMaixuSerialPack",
                    value: function(t) {
                        var e = new N.default();
                        e.unmarshall(t);
                        var n = w.default.payload2DataView(e.cmd);
                        e.cmd = null;
                        var i = new a.default(n), r = i.uri;
                        switch (u.default.debug("ChannelH5.procMaixuSerialPack  uri>>8=" + (r >> 8)), r) {
                          case c.default.PJoinQueueResURI:
                            this.onPJoinQueueRes(i);
                            break;

                          case c.default.LeaveMaixuURI:
                            this.onLeaveMaixu(i);
                            break;

                          case c.default.KickOffMaixuURI:
                            this.onKickOffMaixu(i);
                            break;

                          case c.default.DoubleTimeMaixuURI:
                            this.onDoubleTimeMaixu(i);
                            break;

                          case c.default.MuteMaixuURI:
                            this.onMuteMaixu(i);
                            break;

                          case c.default.MoveMaixuURI:
                            this.onMoveMaixu(i);
                            break;

                          case c.default.TurnMaixuURI:
                            this.onTurnMaixu(i);
                            break;

                          case c.default.TimeoutMaixuURI:
                            this.onTimeoutMaixn(i);
                            break;

                          case c.default.DisableMaixuURI:
                            this.onDisableMaixu(i);
                            break;

                          case c.default.TuoRenMaixuURI:
                            this.onTuoRenMaixu(i);
                            break;

                          case c.default.KickAllMaixuURI:
                            this.onKickAllMaixu(i);
                            break;

                          case c.default.TopMaixuURI:
                            this.onTopMaixu(i);
                            break;

                          case c.default.AddChorusURI:
                            this.onAddChorus(i);
                            break;

                          case c.default.InviteChorusResURI:
                            this.onInviteChorusRes(i);
                            break;

                          case c.default.RemoveChorusURI:
                            this.onRemoveChours(i);
                        }
                    }
                }, {
                    key: "onPJoinQueueRes",
                    value: function(t) {
                        var e = new nt.default();
                        e.unmarshall(t);
                        for (var n = e.uids.length, i = 0; i < n; ++i) this.addMicList(e.uids[i]);
                        for (var r = 0; r < this.h5MaixuCbs.length; ++r) this.h5MaixuCbs[r]({
                            type: 1,
                            microphones: e.uids
                        });
                    }
                }, {
                    key: "onLeaveMaixu",
                    value: function(t) {
                        var e = new it.default();
                        e.unmarshall(t), this.removeMicList(e.uid);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 2,
                            uid: e.uid
                        });
                    }
                }, {
                    key: "onKickOffMaixu",
                    value: function(t) {
                        var e = new rt.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 5,
                            uid: e.uid,
                            admin: e.admin
                        });
                    }
                }, {
                    key: "onDoubleTimeMaixu",
                    value: function(t) {
                        var e = new st.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 6,
                            uid: e.uid,
                            admin: e.admin,
                            time: e.time
                        });
                    }
                }, {
                    key: "onMuteMaixu",
                    value: function(t) {
                        var e = new ot.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 7,
                            uid: e.uid,
                            time: e.time
                        });
                    }
                }, {
                    key: "onMoveMaixu",
                    value: function(t) {
                        var e = new at.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 8,
                            uid: e.uid,
                            down: e.down
                        });
                    }
                }, {
                    key: "onTurnMaixu",
                    value: function(t) {
                        var e = new ut.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 9,
                            uid: e.uid,
                            time: e.time
                        });
                    }
                }, {
                    key: "onTimeoutMaixn",
                    value: function(t) {
                        var e = new lt.default();
                        e.unmarshall(t), this.removeMicList(e.uid);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 10,
                            uid: e.uid
                        });
                    }
                }, {
                    key: "onDisableMaixu",
                    value: function(t) {
                        var e = new ht.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 11,
                            uid: e.uid,
                            disable: e.disable
                        });
                    }
                }, {
                    key: "onTuoRenMaixu",
                    value: function(t) {
                        var e = new pt.default();
                        e.unmarshall(t), this.addMicList(e.uid);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 12,
                            uid: e.uid,
                            admin: e.admin
                        });
                    }
                }, {
                    key: "onKickAllMaixu",
                    value: function(t) {
                        var e = new ft.default();
                        e.unmarshall(t);
                        for (var n = this.newH5.h5_g_globals.micList.micList.slice(), i = n.length, r = 0; r < i; ++r) this.removeMicList(n[r]);
                        for (var s = 0; s < this.h5MaixuCbs.length; ++s) this.h5MaixuCbs[s]({
                            type: 13,
                            admin: e.admin
                        });
                    }
                }, {
                    key: "onTopMaixu",
                    value: function(t) {
                        var e = new dt.default();
                        e.unmarshall(t);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 14,
                            uid: e.uid
                        });
                    }
                }, {
                    key: "onAddChorus",
                    value: function(t) {
                        var e = new ct.default();
                        e.unmarshall(t), this.addChorusList(e.invitee);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 15,
                            uid: e.invitee,
                            admin: e.admin,
                            mic_first: e.micFirst
                        });
                    }
                }, {
                    key: "onInviteChorusRes",
                    value: function(t) {
                        var e = new gt.default();
                        e.unmarshall(t), this.addChorusList(e.invitee);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 16,
                            uid: e.invitee,
                            mic_first: e.micFirst
                        });
                    }
                }, {
                    key: "onRemoveChours",
                    value: function(t) {
                        var e = new vt.default();
                        e.unmarshall(t), this.removeChorusList(e.invitee);
                        for (var n = 0; n < this.h5MaixuCbs.length; ++n) this.h5MaixuCbs[n]({
                            type: 17,
                            uid: e.invitee,
                            operator: e.oper,
                            mic_first: e.micFirst
                        });
                    }
                }, {
                    key: "onPushChannelUserCount",
                    value: function(t) {
                        var e = new j.default();
                        e.unmarshall(t), this.newH5.h5_g_globals.channelUserCount.totalUserCount = e.totalCount;
                        var n = w.default.map2Object(e.subCount);
                        this.newH5.h5_g_globals.channelUserCount.sid2count = n;
                        for (var i = this.h5ChannelEventCbs.length, r = 0; r < i; r++) this.h5ChannelEventCbs[r]({
                            type: 1,
                            total: e.totalCount,
                            sid2count: n
                        });
                    }
                }, {
                    key: "onChannelInfoUpdate",
                    value: function(t) {
                        var n = new J.default();
                        n.unmarshall(t), u.default.log("ChannelH5.onChannelInfoUpdate update=" + JSON.stringify(n));
                        var i = !0, r = !1, s = void 0;
                        try {
                            for (var o, a = n.infos[Symbol.iterator](); !(i = (o = a.next()).done); i = !0) {
                                var l = e(o.value, 2), h = l[0], p = l[1];
                                this.newH5.h5_g_globals.channelInfo.baseInfo[h.toString()] = p;
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && a.return && a.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        for (var f = 0; f < this.h5ChannelEventCbs.length; ++f) this.h5ChannelEventCbs[f]({
                            type: 5,
                            sub_sid: n.sid,
                            updator: n.updator,
                            infos: w.default.map2Object(n.infos)
                        });
                    }
                }, {
                    key: "onSubChannelAddInfo",
                    value: function(t) {
                        var e = new G.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onSubChannelAddInfo add=" + JSON.stringify(e)), 
                        this.newH5.h5_g_globals.channelInfo.baseInfo[e.subSid.toString()] = w.default.map2Object(e.props), 
                        this.newH5.h5_g_globals.channelInfo.subs.push(e.subSid);
                        for (var n = 0; n < this.h5ChannelEventCbs.length; ++n) this.h5ChannelEventCbs[n]({
                            type: 6,
                            code: 0,
                            add: e
                        });
                    }
                }, {
                    key: "onSubChannelRmInfo",
                    value: function(t) {
                        var e = new V.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onSubChannelRmInfo rm=" + JSON.stringify(e));
                        var n = this.newH5.h5_g_globals;
                        delete n.channelInfo.baseInfo[e.subSid.toString()];
                        for (var i = n.channelInfo.subs.length, r = 0; r < i; r++) if (n.channelInfo.subs[r] == e.subSid) {
                            n.channelInfo.subs.splice(r, 1);
                            break;
                        }
                        for (var s = 0; s < this.h5ChannelEventCbs.length; ++s) this.h5ChannelEventCbs[s]({
                            type: 6,
                            code: 1,
                            remove: e
                        });
                    }
                }, {
                    key: "onPushChannelAdminZip",
                    value: function(t) {
                        var e = w.default.copyCompressedData(t), n = z.default.decompress(e);
                        e = null;
                        var i = new DataView(n.buffer), r = new a.default(i, !1), s = new Z.default();
                        s.unmarshall(r), u.default.log("ChannelH5.onPushChannelAdminZip res=" + JSON.stringify(s));
                        var o = {}, l = this.newH5.h5_g_globals, h = !0, p = !1, f = void 0;
                        try {
                            for (var d, c = s.admins.keys()[Symbol.iterator](); !(h = (d = c.next()).done); h = !0) {
                                var g = d.value;
                                l.userInfos[g] || (l.userInfos[g] = {}), l.userInfos[g].chl = !0, o[g] = {
                                    uid: g,
                                    role: this.getCurSubSidRole(l.topSid, l.subSid, s.admins.get(g).get("role"), l.userInfos[g].roler)
                                };
                            }
                        } catch (t) {
                            p = !0, f = t;
                        } finally {
                            try {
                                !h && c.return && c.return();
                            } finally {
                                if (p) throw f;
                            }
                        }
                        this.svcH5.dataRecvCbs(6, o);
                    }
                }, {
                    key: "onMemberUpdated",
                    value: function(t) {
                        var e = new F.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onMemberUpdated update=" + JSON.stringify(e));
                        var n = e.uid.toString(), i = this.newH5.h5_g_globals;
                        void 0 === i.userInfos[n] && (i.userInfos[n] = {}), i.userInfos[n].roler = e.roler, 
                        e.roler < 150 && delete i.userInfos[n].role, i.userInfos[n].chl = !0;
                        var r = {};
                        r[n] = {
                            admin: e.admin,
                            role: this.getCurSubSidRole(i.topSid, i.subSid, i.userInfos[n].role, e.roler),
                            uid: e.uid,
                            op: e.op
                        }, this.svcH5.dataRecvCbs(6, r);
                    }
                }, {
                    key: "onPushChannelUserZip",
                    value: function(t) {
                        var e = w.default.copyCompressedData(t), n = z.default.decompress(e);
                        e = null;
                        var i = new DataView(n.buffer), r = new a.default(i, !1), s = new Q.default();
                        s.unmarshall(r);
                        var o = w.default.map2Object(s.updates);
                        u.default.debug("ChannelH5.onPushChannelUserZip topSid=" + s.topSid + " updates=" + JSON.stringify(o) + " removes=" + s.removes);
                        for (var l = 0; l < this.h5ChannelEventCbs.length; ++l) this.h5ChannelEventCbs[l]({
                            type: 8,
                            updates: o,
                            removes: s.removes
                        });
                    }
                }, {
                    key: "onDisableVoice",
                    value: function(t) {
                        var e = new Y.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onDisableVoice disb=" + JSON.stringify(e));
                        var n = this.newH5.h5_g_globals;
                        if (!n.userInfos[e.uid]) {
                            n.userInfos[e.uid] = new Object(), n.userInfos[e.uid].disableVoice = 1;
                            for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                                type: 10,
                                code: 0,
                                uid: e.uid,
                                admin: e.admin,
                                disable: e.disable,
                                subSid: e.subSid
                            });
                        }
                    }
                }, {
                    key: "onDisableText",
                    value: function(t) {
                        var e = new Y.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onDisableText disb=" + JSON.stringify(e));
                        var n = this.newH5.h5_g_globals;
                        if (!n.userInfos[e.uid]) {
                            n.userInfos[e.uid] = new Object(), n.userInfos[e.uid].disableText = 1;
                            for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                                type: 10,
                                code: 1,
                                uid: e.uid,
                                admin: e.admin,
                                disable: e.disable,
                                subSid: e.subSid
                            });
                        }
                    }
                }, {
                    key: "onSetChannelText",
                    value: function(t) {
                        var e = new W.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onSetChannelText set=" + JSON.stringify(e)), 
                        this.updateSubChanInfo(e.subSid, "disableText", e.status);
                        for (var n = 0; n < this.h5ChannelEventCbs.length; ++n) this.h5ChannelEventCbs[n]({
                            type: 11,
                            status: e.status,
                            admin: e.admin,
                            subSid: e.subSid
                        });
                    }
                }, {
                    key: "onPReqChannInfoRes",
                    value: function(t) {
                        var e = new B.default();
                        e.unmarshall(t), u.default.debug("ChannelH5.onPReqChannInfoRes topSid=" + e.topSid + " receptionSid=" + e.receptionSid + " baseInfo=" + JSON.stringify(e.baseInfo)), 
                        this.getChannelUserCount(), this.getMaixuList(), this.newH5.h5_g_globals.channelInfo = e;
                    }
                }, {
                    key: "onPQueryUserInfoRes",
                    value: function(t) {
                        var e = new D.default();
                        e.unmarshall(t);
                        var n = e.users.keys(), i = this.newH5.h5_g_globals, r = !0, s = !1, o = void 0;
                        try {
                            for (var a, l = n[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                                var h = a.value;
                                void 0 === i.userInfos[h] && (i.userInfos[h] = {}), Object.assign(i.userInfos[h], w.default.map2Object(e.users.get(h)));
                            }
                        } catch (t) {
                            s = !0, o = t;
                        } finally {
                            try {
                                !r && l.return && l.return();
                            } finally {
                                if (s) throw o;
                            }
                        }
                        if (0 != e.users.size) {
                            var p = new Map(), f = e.users.keys(), d = !0, c = !1, g = void 0;
                            try {
                                for (var v, y = f[Symbol.iterator](); !(d = (v = y.next()).done); d = !0) {
                                    var b = v.value, U = new Map(), m = e.users.get(b), I = m.keys(), S = !0, C = !1, k = void 0;
                                    try {
                                        for (var _, P = I[Symbol.iterator](); !(S = (_ = P.next()).done); S = !0) {
                                            var A = _.value;
                                            "role" != A && "roler" != A && U.set(A, m.get(A));
                                        }
                                    } catch (t) {
                                        C = !0, k = t;
                                    } finally {
                                        try {
                                            !S && P.return && P.return();
                                        } finally {
                                            if (C) throw k;
                                        }
                                    }
                                    var R = m.get("role"), M = this.getCurSubSidRole(i.topSid, i.subSid, R, 25);
                                    U.set("role", M), p.set(b, U);
                                }
                            } catch (t) {
                                c = !0, g = t;
                            } finally {
                                try {
                                    !d && y.return && y.return();
                                } finally {
                                    if (c) throw g;
                                }
                            }
                            var x = w.default.map2Object(p);
                            u.default.debug("ChannelH5.onPQueryUserInfoRes tempObj=" + JSON.stringify(x)), this.svcH5.dataRecvCbs(6, x);
                        }
                    }
                }, {
                    key: "onPullOnlineUserRes",
                    value: function(t) {
                        var e = new X.default();
                        e.unmarshall(t);
                        var n = [], i = this.newH5.h5_g_globals, r = !0, s = !1, o = void 0;
                        try {
                            for (var a, u = e.users.keys()[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                                var l = a.value;
                                void 0 === i.userInfos[l] && (i.userInfos[l] = {}), Object.assign(i.userInfos[l], w.default.map2Object(e.users.get(l)));
                            }
                        } catch (t) {
                            s = !0, o = t;
                        } finally {
                            try {
                                !r && u.return && u.return();
                            } finally {
                                if (s) throw o;
                            }
                        }
                        for (var h = 0; h < this.h5ChannelEventCbs.length; ++h) this.h5ChannelEventCbs[h]({
                            type: 2,
                            uids: n,
                            topSid: e.topSid,
                            subSid: e.subSid
                        });
                    }
                }, {
                    key: "onPOnUnicast",
                    value: function(t) {
                        var e = new $.default();
                        e.unmarshall(t);
                        var n = w.default.payload2DataView(e.msg);
                        e.msg = null;
                        var i = new a.default(n), r = i.uri;
                        r == c.default.PMultiJoinKickURI ? this.onPMultiJoinKick(i) : r == c.default.ChannelKickOffURI ? this.onChannelKickOff(i) : r == c.default.POnTuoRenURI ? this.onPOnTuoRen(i) : u.default.warn("ChannelH5.onPOnUnicast unknown ruri:" + r / 256 + " | " + r % 256);
                    }
                }, {
                    key: "onPMultiJoinKick",
                    value: function(t) {
                        var e = new tt.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onPMultiJoinKick kick=" + JSON.stringify(e)), 
                        this.leaveChannel();
                        for (var n = 0; n < this.h5ChannelEventCbs.length; ++n) this.h5ChannelEventCbs[n]({
                            type: 3,
                            uid: e.uid,
                            from: e.from,
                            reason: e.reason
                        });
                    }
                }, {
                    key: "onChannelKickOff",
                    value: function(t) {
                        var e = new q.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onChannelKickOff res=" + JSON.stringify(e));
                        var n = this.newH5.h5_g_globals;
                        n.uid == e.uid && (0 == e.toChannel ? this.leaveChannel() : (this.leaveChannelBc(), 
                        this.svcH5.leaveServiceBc(), n.micList = {}, n.subSid = e.toChannel, this.joinChannelBc(), 
                        this.svcH5.joinServiceBc(), u.default.warn("ChannelH5.onChannelKickOff be kicked to subchannel=" + e.toChannel), 
                        this.getMaixuList()));
                        for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                            type: 7,
                            reason: e.reason,
                            seconds: e.seconds,
                            uid: e.uid,
                            admin: e.admin,
                            oldSid: e.sid,
                            newSid: e.toChannel,
                            kickType: e.kickType
                        });
                    }
                }, {
                    key: "onPOnTuoRen",
                    value: function(t) {
                        var e = new et.default();
                        e.unmarshall(t), u.default.log("ChannelH5.onPOnTuoRen tuo=" + JSON.stringify(e));
                        var n = this.newH5.h5_g_globals;
                        e.uid == n.uid && (this.leaveChannelBc(), this.svcH5.leaveServiceBc(), n.micList = {}, 
                        n.subSid = e.toSid, this.joinChannelBc(), this.svcH5.joinServiceBc(), this.getMaixuList());
                        for (var i = 0; i < this.h5ChannelEventCbs.length; ++i) this.h5ChannelEventCbs[i]({
                            type: 12,
                            admin: e.admin,
                            uid: e.uid,
                            fromSid: e.fromSid,
                            toSid: e.toSid,
                            uinfos: e.uinfos,
                            mode: e.mode
                        });
                    }
                }, {
                    key: "onGetChatCtrlResZip",
                    value: function(t) {
                        var e = w.default.copyCompressedData(t), n = z.default.decompress(e);
                        e = null;
                        var i = new DataView(n.buffer), r = new a.default(i, !1), s = new K.default();
                        s.unmarshall(r);
                        for (var o = 0; o < this.h5ChannelEventCbs.length; ++o) this.h5ChannelEventCbs[o]({
                            type: 9,
                            topSid: s.topSid,
                            disableVoice: s.disableVoice,
                            disableText: s.disableText,
                            speakableList: s.speakableList,
                            chTextDisabled: s.chTextDisabled,
                            disableVisitorTextChs: s.disableVisitorTextChs
                        });
                    }
                }, {
                    key: "jumpSubChannel",
                    value: function(t, e) {
                        var n = this.newH5.h5_g_globals;
                        n.trySubSid = t, n.everJoinChannel = !0;
                        var i = Date.now();
                        n.lastSentJoinChl = i;
                        var r = new v.default();
                        r.fromSid = n.subSid, r.toSid = t, e && (r.password = e), u.default.log("ChannelH5.jumpSubChannel start to change subSid from " + n.subSid + " to " + t + " change=" + JSON.stringify(r)), 
                        this.ap.sendApRouter(259, "channelAuther", c.default.ChangeFolderURI, r, w.default.getExtProps(n.topSid));
                    }
                }, {
                    key: "changeChannelBc",
                    value: function(t, e, n, i) {
                        var r = this.getGroupByTypeAndId(1, 0, e, 0), s = this.getGroupByTypeAndId(2, 0, n, 0), o = this.getGroupByTypeAndId(1024, 259, n, e), a = this.getGroupByTypeAndId(768, 259, 0, e), u = this.getGroupByTypeAndId(256, 259, 0, e), l = this.newH5.h5_g_globals, h = new y.default();
                        if (h.uri = t, h.uid = l.uid, h.ugIdTypeSet.push(r), h.ugIdTypeSet.push(s), h.ugIdTypeSet.push(o), 
                        h.ugIdTypeSet.push(a), h.ugIdTypeSet.push(u), l.bNeedOnlineChanUser) {
                            var p = this.getGroupByTypeAndId(769, 259, 0, l.topSid);
                            h.ugIdTypeSet.push(p);
                        }
                        this.ap.send(259, h.marshall());
                    }
                }, {
                    key: "getGroupByTypeAndId",
                    value: function(t, e, n, i) {
                        var r = new Map();
                        return r.set("grpTypeLow", t), r.set("grpTypeHigh", e), r.set("grpIdLow", n), r.set("grpIdHigh", i), 
                        r;
                    }
                }, {
                    key: "joinChannelBc",
                    value: function() {
                        u.default.log("ChannelH5.joinChannelBc start to join channel broadcast group.");
                        var t = this.newH5.h5_g_globals;
                        this.changeChannelBc(c.default.JoinUserGroupURI, t.topSid, t.subSid, t.bNeedOnlineChanUser);
                    }
                }, {
                    key: "leaveChannel",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        if (this.ap.clearCachedBufMap(!0), 0 != t.topSid && 0 != t.subSid) {
                            var e = new b.default();
                            e.uid = t.uid, e.topSid = t.topSid, u.default.log("ChannelH5.leaveChannel topSid:" + t.topSid + " subSid:" + t.subSid), 
                            this.ap.sendApRouter(259, "channelAuther", c.default.LeaveChannelReqURI, e, w.default.getExtProps(t.topSid)), 
                            this.leaveChannelBc(), this.svcH5.leaveServiceBc(), t.topSid = 0, t.subSid = 0, 
                            t.tryTopSid = 0, t.trySubSid = 0, t.asid = 0, t.channelJoined = !1, t.lastSentJoinChl = 0, 
                            t.channelInfo = null, t.channelUserCount = {}, t.userInfos = {}, t.initMicList();
                        } else u.default.log("ChannelH5.leaveChannel sid zero. no action.");
                    }
                }, {
                    key: "leaveChannelBc",
                    value: function() {
                        u.default.log("ChannelH5.leaveChannelBc start to leave channel broadcast group.");
                        var t = this.newH5.h5_g_globals;
                        this.changeChannelBc(c.default.LeaveUserGroupURI, t.topSid, t.subSid, t.bNeedOnlineChanUser);
                    }
                }, {
                    key: "getUDBCredit",
                    value: function() {
                        return this.newH5.h5_g_globals.credit;
                    }
                }, {
                    key: "getChannelUserCount",
                    value: function() {
                        var t = this.newH5.h5_g_globals, e = new U.default();
                        e.topSid = t.topSid, u.default.log("ChannelH5.getChannelUserCount req=" + JSON.stringify(e)), 
                        this.sendApRouter(259, "channelUserInfo", c.default.ChannelUserCountReqURI, e, w.default.getExtProps(t.topSid));
                    }
                }, {
                    key: "getMaixuList",
                    value: function() {
                        var t = this.newH5.h5_g_globals, e = new m.default();
                        e.uid = t.uid, e.topSid = t.topSid, e.subSid = t.subSid, u.default.log("ChannelH5.getMaixuList req=" + JSON.stringify(e)), 
                        this.sendApRouter(259, "channelMaixu", c.default.GetMaixuListReqURI, e, w.default.getExtProps(t.topSid));
                    }
                }, {
                    key: "getCurSubSidRole",
                    value: function(t, e, n, i) {
                        var r = 25, s = !1;
                        if (n) {
                            for (var o = 0, a = 0; a < n.length; ++a) if (parseInt(t) == parseInt(n[a].subSid) && (o = n[a].role, 
                            s = !0), parseInt(e) == parseInt(n[a].subSid)) {
                                r = n[a].role, s = !0;
                                break;
                            }
                            25 == r && o && (r = o);
                        }
                        return !s && i && (r = i), r;
                    }
                }, {
                    key: "addMicList",
                    value: function(t) {
                        var e = this.newH5.h5_g_globals;
                        e.micList.micList || e.initMicList(), e.micList.micList.push(t), u.default.log("ChannelH5.addMicList uid=" + t + " micList=" + JSON.stringify(e.micList));
                    }
                }, {
                    key: "removeMicList",
                    value: function(t) {
                        for (var e = !1, n = this.newH5.h5_g_globals.micList, i = n.micList.length, r = 0; r < i; ++r) if (n.micList[r] == t) {
                            n.micList.splice(r, 1), e = !0;
                            break;
                        }
                        if (e) {
                            i = n.linkedMicList.length;
                            for (var s = 0; s < i; ++s) if (n.linkedMicList[s] == t) {
                                n.linkedMicList.splice(s, 1), 1 == n.linkedMicList.length && n.linkedMicList[0] == n.micList[0] && n.linkedMicList.splice(0, 1);
                                break;
                            }
                        }
                        u.default.log("ChannelH5.removeMicList uid=" + t + " micList=" + JSON.stringify(n));
                    }
                }, {
                    key: "addChorusList",
                    value: function(t) {
                        var e = this.newH5.h5_g_globals.micList;
                        0 == e.linkedMicList.length && e.linkedMicList.push(e.micList[0]), e.linkedMicList.push(t), 
                        u.default.log("ChannelH5.addChorusList uid=" + t + " chorusList=" + e);
                    }
                }, {
                    key: "removeChorusList",
                    value: function(t) {
                        for (var e = this.newH5.h5_g_globals.micList, n = e.linkedMicList.length, i = 0; i < n; ++i) if (e.linkedMicList[i] == t) {
                            e.linkedMicList.splice(i, 1), !0;
                            break;
                        }
                        1 == e.linkedMicList.length && e.linkedMicList[0] == e.micList[0] && e.linkedMicList.splice(0, 1), 
                        u.default.log("ChannelH5.removeChorusList uid=" + t + " chorusList=" + e);
                    }
                }, {
                    key: "loginUDB",
                    value: function() {
                        0 == this.newH5.h5_g_globals.userType ? this.anonyousLoginUDB() : this.normalLoginUDB();
                    }
                }, {
                    key: "onApOpen",
                    value: function() {
                        this.newH5.h5_g_globals.loginedUDB || this.loginUDB();
                    }
                }, {
                    key: "onApClose",
                    value: function() {
                        if (this.newH5.h5_g_globals.isMiniProgram) {
                            this.newH5.h5_g_svcH5.onApClose();
                            for (var t = 0; t < this.linkEventCbs.length; ++t) this.linkEventCbs[t]({
                                type: 1,
                                code: 0,
                                errMsg: "connection lost"
                            });
                        }
                    }
                }, {
                    key: "onLoginAp",
                    value: function(t, e) {
                        if (260 == t) this.svcH5.onLoginAp(t, e); else {
                            var n = this.newH5.h5_g_globals;
                            n.everJoinChannel && n.channelJoined && (u.default.warn("ChannelH5.onLoginAp start to rejoin channel"), 
                            this.joinChannel(n.topSid, n.subSid, null, null, null, null, !0));
                            for (var i = 0; i < this.h5EventCbs.length; ++i) this.h5EventCbs[i]({
                                type: 1,
                                code: 0,
                                userType: e
                            });
                        }
                    }
                }, {
                    key: "sendApRouter",
                    value: function(t, e, n, i) {
                        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                        this.ap && this.ap.sendApRouter(t, e, n, i, r);
                    }
                }, {
                    key: "myInfo",
                    value: function() {
                        var t = this.newH5.h5_g_globals, e = {
                            uid: t.uid,
                            yyid: t.yyid,
                            top_sid: t.topSid,
                            sub_sid: t.subSid,
                            nick: ""
                        };
                        return 0 != t.nick.length && (e.nick = t.nick), e;
                    }
                }, {
                    key: "getChannelInfo",
                    value: function(t) {
                        var e = this.newH5.h5_g_globals;
                        if (null == e.channelInfo || void 0 === e.channelInfo) return u.default.warn("ChannelH5.getChannelInfo channel info not ready"), 
                        {};
                        var n = e.channelInfo.baseInfo;
                        if (null == n || void 0 === n) return {};
                        var i = {}, r = n[t];
                        null == r || void 0 === r ? i.name = "" : (i.name = r[256], i.textLimitTime = r[289], 
                        i.micListMode = r[275], i.pid = r[262], i.guestWaitTime = r[294], i.guestTextMaxLen = r[295], 
                        i.sendUrlText = r[308], i.memberSendUrlText = r[318], i.sendTextBindMobile = r[323], 
                        i.templateId = r[8196], i.disableText = r.disableText, i.disalbeVoice = r.disableVoice);
                        var s = null;
                        e.channelUserCount.sid2count && (s = e.channelUserCount.sid2count[t]);
                        var o = e.channelUserCount.totalUserCount;
                        return i.userCount = s, i.totalUserCount = o, u.default.log("ChannelH5.getChannelInfo ret=" + JSON.stringify(i)), 
                        i;
                    }
                }, {
                    key: "getCurrentChannelInfo",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        if (null == t.channelInfo || void 0 === t.channelInfo) return u.default.warn("ChannelH5.getCurrentChannelInfo channel info not ready"), 
                        {};
                        var e = t.channelInfo.baseInfo;
                        if (null == e || void 0 === e) return {};
                        var n = {}, i = e[t.topSid];
                        null == i || void 0 === i ? n.name = "" : (n.name = i[256], n.textLimitTime = i[289], 
                        n.channelType = i[278], n.channelTypeStr = i[279], n.micListMode = i[275], n.jifen = i[280], 
                        n.guestWaitTime = i[294], n.guestTextMaxLen = i[295], n.sendUrlText = i[308], n.memberSendUrlText = i[318], 
                        n.sendTextBindMobile = i[323], n.templateId = i[8196], n.disableText = i.disableText, 
                        n.disalbeVoice = i.disableVoice, n.owner = i[263]);
                        var r = t.channelUserCount.totalUserCount;
                        return n.totalUserCount = r, n.asid = t.asid, u.default.log("ChannelH5.getCurrentChannelInfo ret=" + JSON.stringify(n)), 
                        n;
                    }
                }, {
                    key: "getChannelTreeInfo",
                    value: function() {
                        return this.newH5.h5_g_globals.channelInfo;
                    }
                }, {
                    key: "updateSubChanInfo",
                    value: function(t, e, n) {
                        this.newH5.h5_g_globals.channelInfo.baseInfo[t][e] = n;
                    }
                }, {
                    key: "getUserList",
                    value: function(t, e, n) {
                        var i = this.newH5.h5_g_globals, r = new I.default();
                        r.topSid = i.topSid, r.subSid = null != n && void 0 !== n && 0 != n ? n : i.subSid, 
                        r.num = e, r.pos = t, u.default.log("ChannelH5.getUserList num=" + r.num + " pos" + r.pos + " subSid=" + r.subSid), 
                        this.ap.sendApRouter(259, "channelUserInfo", c.default.PullOnlineUserReqURI, r, w.default.getExtProps(i.topSid));
                    }
                }, {
                    key: "getMicListMode",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        if (null == t.channelInfo || void 0 === t.channelInfo) return u.default.log(" [svc_sdk] channel info not ready"), 
                        null;
                        var e = t.channelInfo.baseInfo;
                        if (null == e || void 0 === e) return null;
                        var n = e[t.subSid];
                        return null == n || void 0 === n ? null : n[275];
                    }
                }, {
                    key: "getLinkedMicList",
                    value: function() {
                        return this.newH5.h5_g_globals.micList.linkedMicList;
                    }
                }, {
                    key: "getMicList",
                    value: function() {
                        return this.newH5.h5_g_globals.micList.micList;
                    }
                }, {
                    key: "isGuestLogin",
                    value: function() {
                        return 0 == this.newH5.h5_g_globals.userType;
                    }
                }, {
                    key: "isInChannel",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        return 0 != t.topSid && 0 != t.subSid ? {
                            code: 1,
                            topSid: t.topSid,
                            subSid: t.subSid
                        } : {
                            code: 0
                        };
                    }
                } ]), i;
            }();
            r.default = Ut;
        },
        "./src/index.ts": function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n("./src/newH5.ts"), r = n("./src/punmarshall.ts"), s = n("./src/pmarshall.ts");
            e.default = function() {
                return {
                    NewH5: i.default,
                    Buffer: r.default,
                    PMarshall: s.default,
                    PUnmarshall: r.default
                };
            };
        },
        "./src/newH5.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/globalvars.ts"), o = r("./src/serviceh5.ts"), a = r("./src/channelh5.ts"), u = r("./src/utils/udb.ts"), l = r("./src/utils/logger.ts"), h = r("./src/utils/miniProgramAPI.ts"), p = r("./src/utils/utils.ts"), f = r("./src/utils/timeUtil.ts"), d = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    t(this, e), this.version = 1567647197, this.svn = 2411347, this.h5_g_globals = new s.default();
                    var u = this.h5_g_globals, f = !1;
                    if ("undefined" == typeof window) {
                        if (!n || !i) return void l.default.error('new NewH5 parameters error! "thirdUdbAppId" and "miniAppId" are all required!' + JSON.stringify(arguments));
                        u.thirdUdbAppId = n, u.miniAppId = i, u.isMiniProgram = f = !0, u.sysInfo = h.default.getSystemInfoSync();
                    } else u.isMiniProgram = f = !1;
                    var d = void 0;
                    (!f || f && !r) && (u.uid = p.default.getCookie("yyuid", f), u.credit = p.default.getCookie("udb_c", f), 
                    u.username = p.default.getCookie("username", f), u.password = p.default.getCookie("udb_l", f), 
                    d = p.default.getCookie("cookieDate", f)), (!d || d && Date.now() - d < 864e5) && (u.uid && u.credit || u.username && u.password) ? u.userType = 1 : (u.userType = 0, 
                    u.uid = 0, u.credit = "", u.username = "", u.password = ""), l.default.warn("new NewH5 version=" + this.version + " svn=" + this.svn + " isMiniProgram=" + f + " userType=" + u.userType + " arguments=" + JSON.stringify(arguments)), 
                    this.h5_g_svcH5 || (this.h5_g_svcH5 = new o.default(this)), this.h5_g_chlH5 || (this.h5_g_chlH5 = new a.default(this, this.h5_g_svcH5), 
                    this.h5_g_svcH5.setChlH5(this.h5_g_chlH5), this.start(), f && 0 == u.userType && this.wxReLogin(r)), 
                    this.checkTimes = 0, this.checkTimer = setInterval(this.onCheckTimer.bind(this), 1e3);
                }
                return n(e, [ {
                    key: "onCheckTimer",
                    value: function() {
                        var t = f.default.now();
                        this.checkTimes++, this.h5_g_globals.isMiniProgram || this.h5_g_svcH5 && this.h5_g_svcH5.onCheckTimer(t, this.checkTimes), 
                        this.h5_g_chlH5 && this.h5_g_chlH5.onCheckTimer(t, this.checkTimes);
                    }
                }, {
                    key: "setLinkEventCb",
                    value: function(t, e) {
                        l.default.log("NewH5.setLinkEventCb"), this.h5_g_chlH5.setLinkEventCb(t, e), this.h5_g_svcH5.setLinkEventCb(t, e);
                    }
                }, {
                    key: "setH5EventCb",
                    value: function(t, e) {
                        this.h5_g_svcH5.setH5EventCb(t, e), this.h5_g_chlH5.setH5EventCb(t, e);
                    }
                }, {
                    key: "setChannelEventCb",
                    value: function(t, e) {
                        this.h5_g_chlH5.setChannelEventCb(t, e);
                    }
                }, {
                    key: "setH5MaixuCb",
                    value: function(t, e) {
                        this.h5_g_chlH5.setH5MaixuCb(t, e);
                    }
                }, {
                    key: "setH5DataRecvCb",
                    value: function(t, e) {
                        this.h5_g_svcH5.setH5DataRecvCb(t, e);
                    }
                }, {
                    key: "setH5ChatRecvCb",
                    value: function(t, e) {
                        this.h5_g_svcH5.setH5ChatRecvCb(t, e);
                    }
                }, {
                    key: "enableChanUserPush",
                    value: function() {
                        this.h5_g_chlH5.enableChanUserPush();
                    }
                }, {
                    key: "sendAppData",
                    value: function(t, e) {
                        this.h5_g_svcH5.sendAppData(t, e);
                    }
                }, {
                    key: "sendAppSender",
                    value: function(t, e, n) {
                        this.h5_g_svcH5.sendAppSender(t, e, n);
                    }
                }, {
                    key: "joinChannel",
                    value: function(t, e, n, i, r, s) {
                        this.h5_g_chlH5.joinChannel(t, e, n, i, r, s);
                    }
                }, {
                    key: "leaveChannel",
                    value: function() {
                        this.h5_g_chlH5.leaveChannel();
                    }
                }, {
                    key: "sendChatMsg",
                    value: function(t, e) {
                        this.h5_g_svcH5.sendChatMsg(t, e);
                    }
                }, {
                    key: "subsAppids",
                    value: function(t) {
                        this.h5_g_svcH5.subsAppids(t);
                    }
                }, {
                    key: "unsubsAppids",
                    value: function(t) {
                        this.h5_g_svcH5.unsubsAppids(t);
                    }
                }, {
                    key: "joinSvcUserGroup",
                    value: function(t, e) {
                        this.h5_g_svcH5.joinSvcUserGroup(t, e);
                    }
                }, {
                    key: "leaveSvcUserGroup",
                    value: function(t, e) {
                        this.h5_g_svcH5.leaveSvcUserGroup(t, e);
                    }
                }, {
                    key: "preBindWxPhoneNum",
                    value: function(t) {
                        u.default.preBind(t);
                    }
                }, {
                    key: "bindWxPhoneNum",
                    value: function(t, e) {
                        u.default.bindWxPhoneNum(this.h5_g_globals.thirdUdbAppId, this.h5_g_globals.miniAppId, t, e);
                    }
                }, {
                    key: "getUDBCredit",
                    value: function() {
                        return this.h5_g_chlH5.getUDBCredit();
                    }
                }, {
                    key: "getUserInfo",
                    value: function(t) {
                        this.h5_g_svcH5.getUserInfo(t);
                    }
                }, {
                    key: "getUserList",
                    value: function(t, e, n) {
                        this.h5_g_chlH5.getUserList(t, e, n);
                    }
                }, {
                    key: "myInfo",
                    value: function() {
                        return this.h5_g_chlH5.myInfo();
                    }
                }, {
                    key: "getChannelInfo",
                    value: function(t) {
                        return this.h5_g_chlH5.getChannelInfo(t);
                    }
                }, {
                    key: "getCurrentChannelInfo",
                    value: function() {
                        return this.h5_g_chlH5.getCurrentChannelInfo();
                    }
                }, {
                    key: "getChannelTreeInfo",
                    value: function() {
                        return this.h5_g_chlH5.getChannelTreeInfo();
                    }
                }, {
                    key: "getMicListMode",
                    value: function() {
                        return this.h5_g_chlH5.getMicListMode();
                    }
                }, {
                    key: "getLinkedMicList",
                    value: function() {
                        return this.h5_g_chlH5.getLinkedMicList();
                    }
                }, {
                    key: "getMicList",
                    value: function() {
                        return this.h5_g_chlH5.getMicList();
                    }
                }, {
                    key: "isGuestLogin",
                    value: function() {
                        return this.h5_g_chlH5.isGuestLogin();
                    }
                }, {
                    key: "isInChannel",
                    value: function() {
                        return this.h5_g_chlH5.isInChannel();
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.h5_g_chlH5.start();
                    }
                }, {
                    key: "stop",
                    value: function() {
                        clearInterval(this.checkTimer), this.checkTimes = 0, this.h5_g_chlH5.stop(), this.h5_g_globals.isMiniProgram || this.h5_g_svcH5.stop();
                    }
                }, {
                    key: "login",
                    value: function() {
                        return this.h5_g_chlH5.login();
                    }
                }, {
                    key: "logout",
                    value: function() {
                        return this.h5_g_chlH5.logout();
                    }
                }, {
                    key: "wxReLogin",
                    value: function() {
                        var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = this.h5_g_globals, i = f.default.now();
                        l.default.log("NewH5.wxReLogin thirdUdbAppId=" + n.thirdUdbAppId + " miniAppId=" + n.miniAppId), 
                        u.default.udbLogin(n.thirdUdbAppId, n.miniAppId, e).then(function(e) {
                            l.default.log("NewH5.wxReLogin success. spent time=" + (f.default.now() - i) + "ms"), 
                            n.userType = 1, n.uid = e.yyuid, n.credit = e.udb_c, n.username = e.username, n.password = e.udb_l, 
                            t.login();
                        }).catch(function(t) {
                            l.default.error("NewH5.wxReLogin err=" + JSON.stringify(t)), n.userType = 0;
                        });
                    }
                }, {
                    key: "miniProgramReLogin",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.wxReLogin(t);
                    }
                }, {
                    key: "isServiceChannelReady",
                    value: function() {
                        return !!this.h5_g_svcH5 && this.h5_g_svcH5.isServiceChannelReady();
                    }
                }, {
                    key: "setLogLevel",
                    value: function(t) {
                        l.default.setLevel(t);
                    }
                }, {
                    key: "getLog",
                    value: function() {
                        return l.default.getLog();
                    }
                }, {
                    key: "sdkVersion",
                    get: function() {
                        return this.svn;
                    }
                } ]), e;
            }();
            i.default = d;
        },
        "./src/pmarshall.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = s("./src/utils/utils.ts"), u = s("./src/utils/logger.ts"), l = function() {
                function i() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    t(this, i), this.msh = new o.default(e);
                }
                return n(i, [ {
                    key: "setBool",
                    value: function(t) {
                        a.default.isNumber(t) ? this.msh.pushBool(t) : u.default.error("PMarshall.setBool invalid type!!!");
                    }
                }, {
                    key: "setUI8",
                    value: function(t) {
                        a.default.isNumber(t) ? this.msh.pushUInt8(t) : u.default.error("PMarshall.setUI8 invalid type!!!");
                    }
                }, {
                    key: "setUI16",
                    value: function(t) {
                        a.default.isNumber(t) ? this.msh.pushUInt16(t) : u.default.error("PMarshall.setUI16 invalid type!!!");
                    }
                }, {
                    key: "setUI32",
                    value: function(t) {
                        a.default.isNumber(t) ? this.msh.pushUInt32(t) : u.default.error("PMarshall.setUI32 invalid type!!!");
                    }
                }, {
                    key: "setUI64",
                    value: function(t) {
                        a.default.isNumber(t) && this.msh.pushUInt64(t);
                    }
                }, {
                    key: "setString",
                    value: function(t) {
                        a.default.isString(t) ? this.msh.pushString(t) : u.default.error("PMarshall.setString invalid type!!!");
                    }
                }, {
                    key: "setString32",
                    value: function(t) {
                        a.default.isString(t) ? this.msh.pushString32(t) : u.default.error("PMarshall.setString32 invalid type!!!");
                    }
                }, {
                    key: "setUtf8String",
                    value: function(t) {
                        a.default.isString(t) ? this.msh.pushUtf8String(t) : u.default.error("PMarshall.setUtf8String invalid type!!!");
                    }
                }, {
                    key: "setUtf8String32",
                    value: function(t) {
                        a.default.isString(t) ? this.msh.pushUtf8String32(t) : u.default.error("PMarshall.setUtf8String32 invalid type!!!");
                    }
                }, {
                    key: "setBytes",
                    value: function(t) {
                        a.default.isUint8Array(t) ? this.msh.pushUint8Array(t) : u.default.error("PMarshall.setBytes invalid type!!!");
                    }
                }, {
                    key: "setBytesWithoutLen",
                    value: function(t) {
                        a.default.isUint8Array(t) ? this.msh.pushUint8ArrayWithoutLen(t) : u.default.error("PMarshall.setBytesWithoutLen invalid type!!!");
                    }
                }, {
                    key: "setStringAndStringMap",
                    value: function(t) {
                        if (a.default.isMap(t)) {
                            this.msh.pushUInt32(t.size);
                            var n = !0, i = !1, r = void 0;
                            try {
                                for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                                    var u = e(s.value, 2), l = u[0], h = u[1];
                                    this.msh.pushString(l), this.msh.pushString(h);
                                }
                            } catch (t) {
                                i = !0, r = t;
                            } finally {
                                try {
                                    !n && o.return && o.return();
                                } finally {
                                    if (i) throw r;
                                }
                            }
                        }
                    }
                }, {
                    key: "marshall",
                    value: function() {
                        return this.msh.marshall();
                    }
                } ]), i;
            }();
            r.default = l;
        },
        "./src/protobase/ProtoMarshall.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/UtfUtil.ts"), o = function() {
                function e() {
                    var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    t(this, e), this.hasHeader = n, this.segments = [], this.data = null, this.totalLen = 0, 
                    this.uri = 0, this.hasHeader && (this.pushUInt32(10), this.pushUInt32(this.uri), 
                    this.pushUInt16(200));
                }
                return n(e, [ {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "marshall",
                    value: function() {
                        if (0 === this.segments.length) return null;
                        this.data = new Uint8Array(this.totalLen);
                        for (var t = 0, e = 0; e < this.segments.length; ++e) {
                            var n = this.segments[e];
                            this.data.set(n, t), t += n.length;
                        }
                        return this.hasHeader && (this.replaceUInt32(0, this.totalLen), this.replaceUInt32(4, this.uri)), 
                        this.data;
                    }
                }, {
                    key: "setUri",
                    value: function(t) {
                        this.uri = t;
                    }
                }, {
                    key: "replaceUInt32",
                    value: function(t, e) {
                        new DataView(this.data.buffer).setUint32(t, e, !0);
                    }
                }, {
                    key: "pushUInt8",
                    value: function(t) {
                        var e = new Uint8Array(1);
                        new DataView(e.buffer).setUint8(0, t), this.segments.push(e), this.totalLen++;
                    }
                }, {
                    key: "pushBool",
                    value: function(t) {
                        this.pushUInt8(t ? 1 : 0);
                    }
                }, {
                    key: "pushUInt16",
                    value: function(t) {
                        var e = new Uint8Array(2);
                        new DataView(e.buffer).setUint16(0, t, !0), this.segments.push(e), this.totalLen += 2;
                    }
                }, {
                    key: "pushUInt32",
                    value: function(t) {
                        var e = new Uint8Array(4);
                        new DataView(e.buffer).setUint32(0, t, !0), this.segments.push(e), this.totalLen += 4;
                    }
                }, {
                    key: "pushUInt64",
                    value: function(t) {
                        var e = new Uint8Array(8), n = new DataView(e.buffer);
                        n.setUint32(0, t.low, !0), n.setUint32(4, t.high, !0), this.segments.push(e), this.totalLen += 8;
                    }
                }, {
                    key: "pushUGID",
                    value: function(t) {
                        this.pushUInt16(12), this.pushUInt32(t.sid), this.pushUInt32(t.appId), this.pushUInt32(t.channelId);
                    }
                }, {
                    key: "pushUint8Array",
                    value: function(t) {
                        this.pushUInt16(t.length), this.segments.push(t), this.totalLen += t.length;
                    }
                }, {
                    key: "pushUint8ArrayWithoutLen",
                    value: function(t) {
                        this.segments.push(t), this.totalLen += t.length;
                    }
                }, {
                    key: "pushUint8Array32",
                    value: function(t) {
                        this.pushUInt32(t.length), this.segments.push(t), this.totalLen += t.length;
                    }
                }, {
                    key: "pushUIntArray",
                    value: function(t) {
                        this.pushUInt32(t.length);
                        for (var e = 0; e < t.length; e++) this.pushUInt32(t[e]);
                    }
                }, {
                    key: "pushString",
                    value: function(t) {
                        this.pushUInt16(t.length);
                        for (var e = new Uint8Array(t.length), n = new DataView(e.buffer), i = 0; i < t.length; ++i) n.setUint8(i, t.charCodeAt(i));
                        this.segments.push(e), this.totalLen += t.length;
                    }
                }, {
                    key: "pushString32",
                    value: function(t) {
                        this.pushUInt32(t.length);
                        for (var e = new Uint8Array(t.length), n = new DataView(e.buffer), i = 0; i < t.length; ++i) n.setUint8(i, t.charCodeAt(i));
                        this.segments.push(e), this.totalLen += t.length;
                    }
                }, {
                    key: "pushUInt32AndUInt32Map",
                    value: function(t) {
                        this.pushUInt32(t.size);
                        var e = !0, n = !1, i = void 0;
                        try {
                            for (var r, s = t[Symbol.iterator](); !(e = (r = s.next()).done); e = !0) {
                                var o = r.value;
                                this.pushUInt32(o[0]), this.pushUInt32(o[1]);
                            }
                        } catch (t) {
                            n = !0, i = t;
                        } finally {
                            try {
                                !e && s.return && s.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                    }
                }, {
                    key: "pushUtf8String",
                    value: function(t) {
                        var e = s.default.encodeUtf8(t);
                        this.pushUint8Array(e);
                    }
                }, {
                    key: "pushUtf8String32",
                    value: function(t) {
                        var e = s.default.encodeUtf8(t);
                        this.pushUint8Array32(e);
                    }
                }, {
                    key: "pushUCS2String",
                    value: function(t) {
                        var e = s.default.encodeUCS2(t);
                        this.pushUint8Array(e);
                    }
                }, {
                    key: "pushUCS2String32",
                    value: function(t) {
                        var e = s.default.encodeUCS2(t);
                        this.pushUint8Array32(e);
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protobase/ProtoUGID.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    t(this, e), this.sid = n, this.appId = i, this.channelId = r;
                }
                return n(e, [ {
                    key: "fromString",
                    value: function(t) {
                        if (this.sid = 0, this.appId = 0, this.channelId = 0, -1 !== t.toString().indexOf("-")) {
                            var e = t.split("-");
                            return this.sid = parseInt(e[0]) || 0, this.appId = parseInt(e[1]) || 0, this.channelId = parseInt(e[2]) || 0, 
                            !0;
                        }
                        return !1;
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.sid + "-" + this.appId + "-" + this.channelId;
                    }
                }, {
                    key: "equal",
                    value: function(t) {
                        return this.toString() === t.toString();
                    }
                }, {
                    key: "toBigint",
                    value: function() {
                        return 4294967296 * this.sid + this.appId;
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protobase/ProtoUInt64.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    t(this, e), this.high = n, this.low = i;
                }
                return n(e, [ {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "equal",
                    value: function(t) {
                        return null !== t && (this.low === t.low && this.high === t.high);
                    }
                }, {
                    key: "toString64",
                    value: function() {
                        var t = Number(this.high).toString(16), e = Number(this.low).toString(16);
                        if (e.length < 8) for (var n = 8 - e.length; n; ) e = "0" + e, n--;
                        return t + e;
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protobase/ProtoUnmarshall.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoUInt64.ts"), o = r("./src/protobase/ProtoUGID.ts"), a = r("./src/utils/UtfUtil.ts"), u = r("./src/utils/logger.ts"), l = function() {
                function e(n) {
                    var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    t(this, e), this.view = n, this.pos = 0, this.len = 0, this.uri = 0, this.resCode = 0, 
                    !0 === i && (this.len = this.popUInt32(), this.uri = this.popUInt32(), this.resCode = this.popUInt16());
                }
                return n(e, [ {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "bytesAvailable",
                    value: function() {
                        return this.view.byteLength - this.pos;
                    }
                }, {
                    key: "popBool",
                    value: function() {
                        if (this.pos + 1 > this.view.byteLength) return !1;
                        var t = this.view.getUint8(this.pos);
                        return this.pos++, "1" === t.toString();
                    }
                }, {
                    key: "popUInt8",
                    value: function() {
                        if (this.pos + 1 > this.view.byteLength) return 0;
                        var t = this.view.getUint8(this.pos);
                        return this.pos++, t;
                    }
                }, {
                    key: "popUInt16",
                    value: function() {
                        if (this.pos + 2 > this.view.byteLength) return 0;
                        var t = this.view.getUint16(this.pos, !0);
                        return this.pos += 2, t;
                    }
                }, {
                    key: "popUInt32",
                    value: function() {
                        if (this.pos + 4 > this.view.byteLength) return 0;
                        var t = this.view.getUint32(this.pos, !0);
                        return this.pos += 4, t;
                    }
                }, {
                    key: "popUInt64",
                    value: function() {
                        if (this.pos + 8 > this.view.byteLength) return new s.default();
                        var t = this.view.getUint32(this.pos, !0);
                        this.pos += 4;
                        var e = this.view.getUint32(this.pos, !0);
                        return this.pos += 4, new s.default(e, t);
                    }
                }, {
                    key: "popUGID",
                    value: function() {
                        this.popUInt16();
                        var t = this.popUInt32(), e = this.popUInt32(), n = this.popUInt32();
                        return new o.default(t, e, n);
                    }
                }, {
                    key: "popUint8Array",
                    value: function() {
                        var t = this.popUInt16();
                        if (this.pos + t > this.view.byteLength) return null;
                        var e = new Uint8Array(this.view.buffer, this.pos, t);
                        return this.pos += t, e;
                    }
                }, {
                    key: "popUint8Array32",
                    value: function() {
                        var t = this.popUInt32();
                        if (this.pos + t > this.view.byteLength) return null;
                        var e = new Uint8Array(this.view.buffer, this.pos, t);
                        return this.pos += t, e;
                    }
                }, {
                    key: "popUInt32Vector",
                    value: function() {
                        var t = this.popUInt32();
                        if (this.pos + 4 * t > this.view.byteLength) return null;
                        for (var e = [], n = 0; n < t; n++) e.push(this.popUInt32());
                        return e;
                    }
                }, {
                    key: "popUInt16Vector",
                    value: function() {
                        var t = this.popUInt32();
                        if (this.pos + 2 * t > this.view.byteLength) return null;
                        for (var e = [], n = 0; n < t; n++) e.push(this.popUInt16());
                        return e;
                    }
                }, {
                    key: "popString",
                    value: function() {
                        var t = this.popUInt16();
                        if (this.pos + t > this.view.byteLength) return null;
                        for (var e = "", n = 0; n < t; ++n) e += String.fromCharCode(this.popUInt8());
                        return e;
                    }
                }, {
                    key: "popString32",
                    value: function() {
                        var t = this.popUInt32();
                        if (this.pos + t > this.view.byteLength) return null;
                        for (var e = "", n = 0; n < t; ++n) e += String.fromCharCode(this.popUInt8());
                        return e;
                    }
                }, {
                    key: "popUtf8String",
                    value: function() {
                        var t = this.popUint8Array();
                        return null != t ? a.default.decodeUtf8(t) : (u.default.warn("ProtoUnmarshall.popUtf8String maybe invalid data"), 
                        "");
                    }
                }, {
                    key: "popUtf8String32",
                    value: function() {
                        var t = this.popUint8Array32();
                        return null != t ? a.default.decodeUtf8(t) : (u.default.warn("ProtoUnmarshall.popUtf8String32 maybe invalid data"), 
                        "");
                    }
                }, {
                    key: "popUCS2String",
                    value: function() {
                        var t = this.popUint8Array();
                        return a.default.decodeUCS2(t);
                    }
                }, {
                    key: "popUCS2String32",
                    value: function() {
                        var t = this.popUint8Array32();
                        return a.default.decodeUCS2(t);
                    }
                } ]), e;
            }();
            i.default = l;
        },
        "./src/protobase/uri.ts": function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                DlUsrGroupMsgURI: 533080,
                JoinUserGroupURI: 642648,
                LeaveUserGroupURI: 642904,
                PSubServiceTypesURI: 643160,
                PUnsubServiceTypesURI: 643416,
                PBroadcastProbeCtrlURI: 643928,
                TextChatMsgReqURI: 3104344,
                TextChatMsgResURI: 3104600,
                TextChatExceptionURI: 3115608,
                PHistoryChatReqURI: 3117144,
                PHistoryChatResURI: 3117400,
                DlSvcMsgBySidURI: 28760,
                UlSvcMsgByUidURI: 79960,
                DlSvcMsgByUidURI: 80216,
                PUinfoServiceReqURI: 282968,
                PUinfoServiceResURI: 283480,
                PExUinfoModifyReqURI: 386136,
                PSubChannelRmInfoURI: 8706,
                POnTuoRenURI: 11266,
                DisableVoiceURI: 12290,
                DisableTextURI: 12546,
                LeaveMaixuURI: 13058,
                KickOffMaixuURI: 13314,
                DoubleTimeMaixuURI: 13570,
                MuteMaixuURI: 13826,
                MoveMaixuURI: 14082,
                TurnMaixuURI: 14338,
                TimeoutMaixuURI: 14594,
                DisableMaixuURI: 14850,
                TuoRenMaixuURI: 15362,
                KickAllMaixuURI: 17922,
                TopMaixuURI: 18178,
                PJoinQueueResURI: 20482,
                ChangeFolderURI: 25090,
                SetChannelTextURI: 43010,
                ChannelKickOffURI: 79106,
                JoinChannelReqURI: 2048258,
                JoinChannelResURI: 2048514,
                LeaveChannelReqURI: 2049794,
                LeaveChannelResURI: 2050050,
                PMultiJoinKickURI: 2051330,
                ChangeFolderResURI: 2439426,
                PSubChannelAddInfoURI: 2440450,
                POnChanelInfoUpdatedInfoURI: 2440706,
                PChannelInfoUpdateURI: 16647,
                PReqChannelInfoURI: 3096834,
                MaixuSerialPackURI: 3100418,
                PReqChannelInfoResURI: 3123714,
                ChannelUserCountReqURI: 3125250,
                ChannelUserCountResURI: 3125506,
                PQueryUserInfoReqURI: 3125762,
                PQueryUserInfoResURI: 3126018,
                PullOnlineUserReqURI: 3126274,
                PullOnlineUserResURI: 3126530,
                PushChannelUserZipURI: 3137794,
                PushChannelUserCountURI: 3139586,
                PushChannelAdminZipURI: 3140610,
                GetChatCtrlReqURI: 3143682,
                GetChatCtrlResZipURI: 3144194,
                POnUniCastURI: 3148802,
                AddChorusURI: 3379202,
                InviteChorusResURI: 3379714,
                RemoveChorusURI: 3379970,
                GetMaixuListReqURI: 3854338,
                GetMaixuListResURI: 3854594,
                POnMemberUpdatedURI: 16903,
                PAPRouterURI: 512011,
                LoginAPURI: 775684,
                LoginAPResURI: 775940,
                PingAPURI: 794116,
                CliAPLoginAuthReqURI: 778244,
                CliAPLoginAuthResURI: 778500,
                CliAPLoginAuthReq2URI: 779268,
                CliAPLoginAuthRes2URI: 779524,
                APPongURI: 794372,
                APForceOutURI: 795140,
                APOnlineAckNotifyURI: 836612,
                YYLoginReqURI: 335570153,
                YYLoginResURI: 352347369,
                NormalLoginResURI: 19054,
                UDBLogin3rdResURI: 19566,
                AnonymousLoginURI: 19822,
                AnonymousLoginResURI: 20078
            };
        },
        "./src/protocol/APForceOut.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.appid = 0, this.reason = "", this.code = 0, this.routeNum = 0, 
                    this.appkey = 0, this.uid = 0, this.uid2 = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.appid = t.popUInt32(), this.reason = t.popString(), this.code = t.popUInt32(), 
                        this.routeNum = t.popUInt32(), this.appkey = t.popUInt32(), this.uid = t.popUInt32(), 
                        this.uid2 = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/AddChorus.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.admin = 0, this.micFirst = 0, 
                    this.invitee = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.subSid = t.popUInt32(), this.admin = t.popUInt32(), 
                        this.micFirst = t.popUInt32(), this.invitee = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/AnonymousLogin.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.context = "", this.version = 0, this.pcInfo = "", this.macAddr = "", 
                    this.cliFrom = 0, this.cliExtension = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushString(this.context), t.pushUInt32(this.version), t.pushString(this.pcInfo), 
                        t.pushString(this.macAddr), t.pushUInt32(this.cliFrom), t.pushString(this.cliExtension), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/AnonymousLoginRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.context = "", this.resCode = 0, this.uid = 0, this.yyid = 0, this.passport = null, 
                    this.password = null, this.cookie = null, this.ticket = null;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.context = t.popString(), this.resCode = t.popUInt32(), this.uid = t.popUInt32(), 
                        this.yyid = t.popUInt32(), this.passport = t.popString(), this.password = t.popString(), 
                        this.cookie = t.popUint8Array(), this.ticket = t.popUint8Array();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/ChangeFolder.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.fromSid = 0, this.toSid = 0, this.password = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.fromSid), t.pushUInt32(this.toSid), t.pushString(this.password), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/ChangeFolderRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.fromSid = 0, this.toSid = 0, this.uid = 0, this.resCode = 0, this.rank = 0, 
                    this.sid2Change = [], this.seq = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.fromSid = t.popUInt32(), this.toSid = t.popUInt32(), this.uid = t.popUInt32(), 
                        this.resCode = t.popUInt32(), this.rank = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popUInt32(), r = t.popUInt32();
                            this.sid2Change.push({
                                first: i,
                                second: r
                            });
                        }
                        this.seq = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/ChannelKickOff.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.sid = 0, this.reason = "", this.seconds = 0, this.admin = 0, 
                    this.toChannel = 0, this.kickType = 0, this.mode = 0, this.uinfos = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.sid = t.popUInt32(), this.reason = t.popUtf8String(), 
                        this.seconds = t.popUInt32(), this.admin = t.popUInt32(), this.toChannel = t.popUInt32(), 
                        this.kickType = t.popUInt32(), this.mode = t.popUInt8();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = {};
                            i.uid = t.popUInt32(), i.nick = t.popString(), i.sign = t.popString(), i.pid = t.popUInt32(), 
                            i.jifen = t.popUInt32(), i.sjifen = t.popUInt32(), i.gender = t.popUInt8(), i.rolers = new Array();
                            for (var r = t.popUInt32(), s = 0; s < r; s++) {
                                var o = {};
                                o.cid = t.popUInt32(), o.roler = t.popUInt16(), i.rolers.push(o);
                            }
                            i.ip = t.popUInt32(), i.pcInfo = t.popString(), i.extInfo = new Object();
                            for (var a = t.popUInt32(), u = 0; u < a; ++u) {
                                var l = t.popUInt8(), h = t.popString();
                                i.extInfo[l.toString()] = h;
                            }
                            this.uinfos.push(i);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/ChannelUserCountReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.sidlist = new Array();
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        t.pushUInt32(this.topSid);
                        var e = this.sidlist.length;
                        t.pushUInt32(e);
                        for (var n = 0; n < e; ++n) t.pushUInt32(this.sidlist[n]);
                        return t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/ChannelUserCountRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.totalCount = 0, this.sid2Count = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.totalCount = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popUInt32(), r = t.popUInt32();
                            this.sid2Count.set(i, r);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/ChannelUserMap.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.us = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        for (var e = t.popUInt32(), n = 0; n < e; n++) for (var i = t.popUInt32(), r = 0; r < i; r++) {
                            var s = t.popUInt32(), o = t.popUInt32();
                            void 0 === this.us.get(s) && this.us.set(s, []), this.us.get(s).push(o);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/CliAPLoginAuthReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protobase/uri.ts"), a = function() {
                function e() {
                    t(this, e), this.context = "", this.ruri = 0, this.payload = null;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        return t.setUri(o.default.CliAPLoginAuthReqURI), t.pushString(this.context), t.pushUInt32(this.ruri), 
                        t.pushUint8Array32(this.payload), t.marshall();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/CliAPLoginAuthReq2.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protobase/uri.ts"), a = function() {
                function e() {
                    t(this, e), this.context = "", this.ruri = 0, this.payload = null;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        return t.setUri(o.default.CliAPLoginAuthReq2URI), t.pushString(this.context), t.pushUInt32(this.ruri), 
                        t.pushUint8Array32(this.payload), t.marshall();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/CliAPLoginAuthRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.context = "", this.resCode = 0, this.ruri = 0, this.payload = null;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.context = t.popString(), this.resCode = t.popUInt32(), this.ruri = t.popUInt32(), 
                        this.payload = t.popUint8Array32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/CliAPLoginAuthRes2.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.context = "", this.resCode = 0, this.ruri = 0, this.payload = null;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.context = t.popString(), this.resCode = t.popUInt32(), this.ruri = t.popUInt32(), 
                        this.payload = t.popUint8Array32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/DisableMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.disable = !0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.disable = t.popBool();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/DisableVoice.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.disable = !1, this.subSid = 0, this.admin = 0, this.mode = 0, 
                    this.uinfos = new Array(), this.reason = "";
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.disable = t.popBool(), this.subSid = t.popUInt32(), 
                        this.admin = t.popUInt32(), this.mode = t.popUInt8();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/DlSvcMsgBySid.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.appid = 0, this.topSid = 0, this.msg = null;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.appid = t.popUInt16(), this.topSid = t.popUInt32(), this.msg = t.popUint8Array();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/DlSvcMsgByUid.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.appid = 0, this.uid = 0, this.msg = null, this.suid = 0, this.seqId = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.appid = t.popUInt16(), this.uid = t.popUInt32(), this.msg = t.popUint8Array32(), 
                        this.suid = t.popUInt32(), t.popUInt32(), this.seqId = t.popUInt32(), t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/DlUsrGroupMsg.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.grpType = null, this.grpId = null, this.appid = 0, this.msg = null, 
                    this.seqNum = null, this.srvId = null, this.ruri = 0, this.subSvcName = "";
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.grpType = t.popUInt64(), this.grpId = t.popUInt64(), this.appid = t.popUInt32(), 
                        this.msg = t.popUint8Array32(), this.seqNum = t.popUInt64(), this.srvId = t.popUInt64(), 
                        this.ruri = t.popUInt32(), this.subSvcName = t.popString();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/DoubleTimeMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.admin = 0, this.time = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.admin = t.popUInt32(), this.time = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/GetChatCtrlReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.topSid), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/GetChatCtrlRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/ChannelUserMap.ts"), o = r("./src/utils/utils.ts"), a = r("./src/utils/logger.ts"), u = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.disableVoice = null, this.disableText = null, 
                    this.speakableList = null, this.chTextDisabled = [], this.disableVisitorTextChs = [];
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32();
                        var e = new s.default();
                        e.unmarshall(t), this.disableVoice = e.us, (e = new s.default()).unmarshall(t), 
                        this.disableText = e.us, (e = new s.default()).unmarshall(t), this.speakableList = e.us;
                        for (var n = t.popUInt32(), i = 0; i < n; i++) this.chTextDisabled.push(t.popUInt32());
                        n = t.popUInt32();
                        for (var r = 0; r < n; r++) this.disableVisitorTextChs.push(t.popUInt32());
                        a.default.debug("GetChatCtrlRes disableVoice=" + o.default.stringifyMap(this.disableVoice)), 
                        a.default.debug("GetChatCtrlRes disableText=" + o.default.stringifyMap(this.disableText)), 
                        a.default.debug("GetChatCtrlRes speakableList=" + o.default.stringifyMap(this.speakableList));
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/protocol/GetMaixuListReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.uid = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.topSid), t.pushUInt32(this.subSid), t.pushUInt32(this.uid), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/GetMaixuListRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/logger.ts"), o = function() {
                function e() {
                    t(this, e), this.mute = !1, this.disable = !1, this.ring = 0, this.count = 0, this.validring = 0, 
                    this.userlist = new Array(), this.topSid = 0, this.subSid = 0, this.choruslist = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.mute = t.popBool(), this.disable = t.popBool(), this.ring = t.popUInt32(), 
                        this.count = t.popUInt32(), this.validring = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) this.userlist.push(t.popUInt32());
                        s.default.debug("GetMaixuListRes.unmarshall userlist=" + this.userlist), this.topSid = t.popUInt32(), 
                        this.subSid = t.popUInt32(), e = t.popUInt32();
                        for (var i = 0; i < e; ++i) this.choruslist.push(t.popUInt32());
                        s.default.debug("GetMaixuListRes.unmarshall choruslist=" + this.choruslist);
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/InviteChorusRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.res = 0, this.micFirst = 0, this.invitee = 0, 
                    this.mode = 0, this.uinfos = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.subSid = t.popUInt32(), this.res = t.popUInt32(), 
                        this.micFirst = t.popUInt32(), this.invitee = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/JoinChannelReq.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = function() {
                function i() {
                    t(this, i), this.uid = 0, this.topSid = 0, this.subSid = 0, this.joinProps = new Map();
                }
                return n(i, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default(!1);
                        t.pushUInt32(this.uid), t.pushUInt32(this.topSid), t.pushUInt32(this.subSid);
                        var n = this.joinProps.size;
                        t.pushUInt32(n);
                        var i = !0, r = !1, s = void 0;
                        try {
                            for (var a, u = this.joinProps[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                                var l = e(a.value, 2), h = l[0], p = l[1];
                                t.pushUInt32(h), 6 == h ? t.pushUint8Array(p) : t.pushString(p);
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && u.return && u.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        return t.marshall();
                    }
                } ]), i;
            }();
            r.default = a;
        },
        "./src/protocol/JoinChannelRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/logger.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.uid = 0, this.subSid = 0, this.asid = 0, this.loginTs = 0, 
                    this.loginStatus = 0, this.errInfo = "", this.expiredTs = 0, this.joinProps = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.uid = t.popUInt32(), this.subSid = t.popUInt32(), 
                        this.asid = t.popUInt32(), this.loginTs = t.popUInt32(), this.loginStatus = t.popUInt8(), 
                        this.errInfo = t.popUtf8String(), this.expiredTs = t.popUInt32();
                        var e = t.popUInt32();
                        s.default.debug("JoinChannelRes mapSize=" + e);
                        for (var n = 0; n < e; n++) {
                            var i = t.popUInt32(), r = t.popUtf8String();
                            s.default.debug("JoinChannelRes key=" + i + " value=" + r), r && this.joinProps.set(i, r);
                        }
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/KickAllMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.admin = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.admin = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/KickOffMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.admin = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.admin = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/LeaveChannelReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.uid = 0, this.topSid = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.uid), t.pushUInt32(this.topSid), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/LeaveChannelRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.topSid = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.topSid = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/LeaveMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/MaixuSerialPack.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.serialL32 = 0, this.serialH32 = 0, this.cmd = null;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.serialL32 = t.popUInt32(), this.serialH32 = t.popUInt32(), this.cmd = t.popUint8Array32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/MoveMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.down = !1;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.down = t.popBool();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/MuteMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.time = 0, this.mute = !0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.time = t.popUInt32(), this.mute = t.popBool();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/NormalLoginRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.context = "", this.resCode = 0, this.uid = 0, this.yyid = 0, this.passport = null, 
                    this.email = "", this.cookie = null, this.ticket = null, this.errCode = 0, this.errMsg = "";
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.context = t.popString(), this.resCode = t.popUInt32(), this.uid = t.popUInt32(), 
                        this.yyid = t.popUInt32(), this.passport = t.popUint8Array(), this.email = t.popString(), 
                        this.cookie = t.popUint8Array(), this.ticket = t.popUint8Array(), this.errCode = t.popUInt32(), 
                        this.errMsg = t.popString();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/PChannelInfoUpdateURI.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.sid = 0, this.updator = 0, this.infos = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.sid = t.popUInt32(), this.updator = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUInt16(), r = t.popString();
                            this.infos.set(i, r);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/PExUinfoModifyReq.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = s("./src/protobase/uri.ts"), u = function() {
                function i() {
                    t(this, i), this.uid = 0, this.topSid = 0, this.reserved = "", this.type2Val = new Map();
                }
                return n(i, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default();
                        t.setUri(a.default.PExUinfoModifyReqURI), t.pushUInt32(this.uid), t.pushUInt32(this.topSid), 
                        t.pushString(this.reserved);
                        var n = this.type2Val.size;
                        t.pushUInt32(n);
                        var i = !0, r = !1, s = void 0;
                        try {
                            for (var u, l = this.type2Val[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                                var h = e(u.value, 2), p = h[0], f = h[1];
                                t.pushUInt16(p), t.pushUint8Array(f);
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && l.return && l.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        return t.marshall();
                    }
                } ]), i;
            }();
            r.default = u;
        },
        "./src/protocol/PHistoryChatReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protobase/uri.ts"), a = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.uid = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        return t.setUri(o.default.PHistoryChatReqURI), t.pushUInt32(this.topSid), t.pushUInt32(this.subSid), 
                        t.pushUInt32(this.uid), t.marshall();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/PHistoryChatRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoUnmarshall.ts"), o = r("./src/protocol/TextChatMsg.ts"), a = r("./src/utils/utils.ts"), u = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.uid = 0, this.historyMsg = [];
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.subSid = t.popUInt32(), this.uid = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUint8Array(), r = a.default.payload2DataView(i);
                            i = null;
                            var u = new s.default(r), l = new o.default();
                            l.unmarshall(u), this.historyMsg.push(l);
                        }
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/protocol/PJoinQueueRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uids = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) this.uids.push(t.popUInt32());
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/PMultiJoinKick.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.from = 0, this.uid = 0, this.reason = "";
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.from = t.popUInt32(), this.uid = t.popUInt32(), this.reason = t.popUtf8String();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/POnMemberUpdated.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.uid = 0, this.admin = 0, this.roler = 0, this.op = 0, 
                    this.nick = "", this.gender = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.uid = t.popUInt32(), this.admin = t.popUInt32(), 
                        this.roler = t.popUInt16(), this.op = t.popUInt16(), this.nick = t.popUtf8String(), 
                        this.gender = t.popUInt16();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/POnTuoRen.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.fromSid = 0, this.toSid = 0, this.admin = 0, this.mode = 0, 
                    this.uinfos = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.fromSid = t.popUInt32(), this.toSid = t.popUInt32(), 
                        this.admin = t.popUInt32(), this.mode = t.popUInt8();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = {};
                            i.uid = t.popUInt32(), i.nick = t.popString(), i.sign = t.popString(), i.pid = t.popUInt32(), 
                            i.jifen = t.popUInt32(), i.sjifen = t.popUInt32(), i.gender = t.popUInt8(), i.rolers = new Array();
                            for (var r = t.popUInt32(), s = 0; s < r; s++) {
                                var o = {};
                                o.cid = t.popUInt32(), o.roler = t.popUInt16(), i.rolers.push(o);
                            }
                            i.ip = t.popUInt32(), i.pcInfo = t.popString(), i.extInfo = new Object();
                            for (var a = t.popUInt32(), u = 0; u < a; ++u) {
                                var l = t.popUInt8(), h = t.popString();
                                i.extInfo[l.toString()] = h;
                            }
                            this.uinfos.push(i);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/POnUniCast.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.type = 0, this.topSid = 0, this.msg = null, this.serverId = 0, 
                    this.seqId = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.type = t.popUInt32(), this.topSid = t.popUInt32(), this.msg = t.popUint8Array32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/POnlineUser.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoUnmarshall.ts"), o = r("./src/utils/UtfUtil.ts"), a = r("./src/utils/logger.ts"), u = r("./src/utils/utils.ts"), l = function() {
                function e() {
                    t(this, e), this.props = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUInt8(), r = t.popUInt32();
                            5 == i ? this.props.set("contribution", r) : 3 == i && this.props.set("subSid", r);
                        }
                        e = t.popUInt32();
                        for (var l = 0; l < e; l++) {
                            var h = t.popUInt8(), p = t.popUint8Array();
                            if (17 == h) {
                                this.props.set("role", []);
                                var f = u.default.payload2DataView(p);
                                p = null;
                                for (var d = new s.default(f, !1), c = d.popUInt32(), g = 0; g < c; g++) {
                                    var v = d.popUInt32(), y = d.popUInt16();
                                    this.props.get("role").push({
                                        subSid: v,
                                        role: y
                                    }), a.default.debug("POnlineUser.unmarshall key=" + h + " push subSid=" + v + " role=" + y);
                                }
                            } else 18 == h && (this.props.set("nick", o.default.decodeUtf8(p)), a.default.debug("POnlineUser.unmarshall key=" + h + " set nick=" + this.props.get("nick")));
                        }
                    }
                } ]), e;
            }();
            i.default = l;
        },
        "./src/protocol/PQueryUserInfoReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.uids = new Array(), this.type = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        t.pushUInt32(this.topSid);
                        var e = this.uids.length;
                        t.pushUInt32(e);
                        for (var n = 0; n < e; n++) t.pushUInt32(this.uids[n]);
                        return t.pushUInt32(this.type), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PQueryUserInfoRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/POnlineUser.ts"), o = r("./src/utils/utils.ts"), a = r("./src/utils/logger.ts"), u = function() {
                function e() {
                    t(this, e), this.users = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        var e = t.popUInt32(), n = t.popUInt32();
                        a.default.debug("PQueryUserInfoRes topSid=" + e + " size=" + n);
                        for (var i = 0; i < n; i++) {
                            var r = t.popUInt32(), u = new s.default();
                            u.unmarshall(t), u.props.set("uid", r), u.props.set("chl", !0), this.users.set(r, u.props);
                        }
                        a.default.debug("PQueryUserInfoRes users=" + o.default.stringifyMap(this.users));
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/protocol/PReqChannelInfo.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.chnlInfoMode = 0, this.md5 = "", this.topSid = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt8(this.chnlInfoMode), t.pushString(this.md5), t.pushUInt32(this.topSid), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PReqChannelInfoRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.receptionSid = 0, this.baseInfo = {}, this.subs = [], 
                    this.authes = [], this.resCode = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.receptionSid = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popUInt32().toString();
                            this.baseInfo[i] = {};
                            for (var r = t.popUInt32(), s = 0; s < r; ++s) {
                                var o = t.popUInt16();
                                this.baseInfo[i][o] = t.popString();
                            }
                        }
                        e = t.popUInt32();
                        for (var a = 0; a < e; ++a) this.subs.push(t.popUInt32());
                        e = t.popUInt32();
                        for (var u = 0; u < e; ++u) {
                            var l = {};
                            l.sess_from_role = t.popUInt32(), l.sess_to_role = t.popUInt32(), l.auth_code = t.popUInt32(), 
                            this.authes.push(l);
                        }
                        this.resCode = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/PSubChannelAddInfo.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.subSid = 0, this.props = new Map(), this.creator = 0, this.mode = 0, 
                    this.infos = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.subSid = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUInt16(), r = t.popString();
                            this.props.set(i, r);
                        }
                        this.creator = t.popUInt32(), this.mode = t.popUInt8(), e = t.popUInt32();
                        for (var s = 0; s < e; s++) {
                            var o = new Object();
                            o.uid = t.popUInt32(), o.nick = t.popString(), o.sign = t.popString(), o.pid = t.popUInt32(), 
                            o.jifen = t.popUInt32(), o.sjifen = t.popUInt32(), o.gender = t.popUInt8(), o.rolers = new Array();
                            for (var a = t.popUInt32(), u = 0; u < a; u++) {
                                var l = new Object();
                                l.cid = t.popUInt32(), l.roler = t.popUInt16(), o.rolers.push(l);
                            }
                            o.ip = t.popUInt32(), o.pcInfo = t.popString(), o.extInfo = new Object();
                            for (var h = t.popUInt32(), p = 0; p < h; ++p) {
                                var f = t.popUInt8(), d = t.popString();
                                o.extInfo[f.toString()] = d;
                            }
                            this.infos.push(o);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/PSubChannelRmInfo.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.subSid = 0, this.pid = 0, this.uid = 0, this.mode = 0, this.infos = new Array(), 
                    this.opMode = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.subSid = t.popUInt32(), this.pid = t.popUInt32(), this.uid = t.popUInt32(), 
                        this.mode = t.popUInt8();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = new Object();
                            i.uid = t.popUInt32(), i.nick = t.popString(), i.sign = t.popString(), i.pid = t.popUInt32(), 
                            i.jifen = t.popUInt32(), i.sjifen = t.popUInt32(), i.gender = t.popUInt8(), i.rolers = new Array();
                            for (var r = t.popUInt32(), s = 0; s < r; s++) {
                                var o = new Object();
                                o.cid = t.popUInt32(), o.roler = t.popUInt16(), i.rolers.push(o);
                            }
                            i.ip = t.popUInt32(), i.pcInfo = t.popString(), i.extInfo = new Object();
                            for (var a = t.popUInt32(), u = 0; u < a; ++u) {
                                var l = t.popUInt8(), h = t.popString();
                                i.extInfo[l.toString()] = h;
                            }
                            this.infos.push(i);
                        }
                        this.opMode = t.popUInt8();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/PSubServiceTypes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.uid = 0, this.appids = new Array();
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        t.setUri(this.uri), t.pushUInt32(this.uid), t.pushUInt32(0);
                        var e = this.appids.length;
                        t.pushUInt32(e);
                        for (var n = 0; n < e; n++) t.pushUInt32(this.appids[n]);
                        return t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PUinfoServiceReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protobase/uri.ts"), a = function() {
                function e() {
                    t(this, e), this.uid = 0, this.topSid = 0, this.uids = new Array(), this.connType = 1;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        t.setUri(o.default.PUinfoServiceReqURI), t.pushUInt32(this.uid), t.pushUInt32(this.topSid);
                        var e = this.uids.length;
                        t.pushUInt32(e);
                        for (var n = 0; n < e; n++) t.pushUInt32(this.uids[n]);
                        return t.pushUInt8(this.connType), t.marshall();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/PUinfoServiceRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/UserInfo.ts"), o = function() {
                function e() {
                    t(this, e), this.users = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = new s.default();
                            i.unmarshall(t), i.svc = !0, this.users.set(i.uid, i);
                        }
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PullOnlineUserReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.num = 0, this.pos = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.topSid), t.pushUInt32(this.subSid), t.pushUInt32(this.num), 
                        t.pushUInt32(this.pos), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PullOnlineUserRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/POnlineUser.ts"), o = r("./src/utils/logger.ts"), a = r("./src/utils/utils.ts"), u = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.pos = 0, this.users = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.subSid = t.popUInt32(), this.pos = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popUInt32(), r = new s.default();
                            r.unmarshall(t), r.props.set("uid", i), r.props.set("chl", !0), this.users.set("uid", r.props);
                        }
                        o.default.debug("PullOnlineUserRes.unmarshall users=" + a.default.stringifyMap(this.users));
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/protocol/PushChannelAdminZip.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/POnlineUser.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.admins = new Map(), this.removes = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUInt32(), r = new s.default();
                            r.unmarshall(t), this.admins.set(i, r.props);
                        }
                        e = t.popUInt32();
                        for (var o = 0; o < e; o++) this.removes.push(t.popUInt32());
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PushChannelUser.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/POnlineUser.ts"), o = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.version = 0, this.updates = new Map(), this.removes = new Array();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.version = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popUInt32();
                            t.popUInt32();
                            var r = new s.default();
                            r.unmarshall(t), this.updates.set(i, r);
                        }
                        e = t.popUInt32();
                        for (var o = 0; o < e; ++o) this.removes.push(t.popUInt32()), t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/PushChannelUserCount.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.totalCount = 0, this.subCount = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.totalCount = t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUInt32(), r = t.popUInt32();
                            this.subCount.set(i, r);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/RemoveChorus.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.subSid = 0, this.oper = 0, this.micFirst = 0, 
                    this.invitee = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.subSid = t.popUInt32(), this.oper = t.popUInt32(), 
                        this.micFirst = t.popUInt32(), this.invitee = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/SetChannelText.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.subSid = 0, this.admin = 0, this.status = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.subSid = t.popUInt32(), this.admin = t.popUInt32(), this.status = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/TextChatException.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.topSid = 0, this.uid = 0, this.subSid = 0, this.reason = 0, this.props = new Map(), 
                    this.props2 = new Map();
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.topSid = t.popUInt32(), this.uid = t.popUInt32(), this.subSid = t.popUInt32(), 
                        this.reason = t.popUInt8();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) {
                            var i = t.popUInt32(), r = t.popString();
                            this.props.set(i, r);
                        }
                        e = t.popUInt32();
                        for (var s = 0; s < e; s++) {
                            var o = t.popUInt32(), a = t.popString();
                            this.props2.set(o, a);
                        }
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/TextChatFormat.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.fontEffects = 0, this.fontName = "", this.color = 0, this.height = 16, 
                    this.msg = "", this.sd = 0;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.fontEffects), t.pushUtf8String32(this.fontName), t.pushUInt32(this.color), 
                        t.pushUInt32(this.height), t.pushUCS2String32(this.msg), t.pushUInt32(this.sd), 
                        t.marshall();
                    }
                }, {
                    key: "unmarshall",
                    value: function(t) {
                        this.fontEffects = t.popUInt32(), this.fontName = t.popUtf8String32(), this.color = t.popUInt32(), 
                        this.height = t.popUInt32(), this.msg = t.popUCS2String32(), this.sd = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/TextChatMsg.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = s("./src/protobase/uri.ts"), u = s("./src/protocol/TextChatFormat.ts"), l = function() {
                function i() {
                    t(this, i), this.from = 0, this.topSid = 0, this.subSid = 0, this.chat = null, this.reserve1 = "", 
                    this.reserve2 = "", this.nick = "", this.yyid = 0, this.extra = new Map();
                }
                return n(i, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default();
                        t.setUri(a.default.TextChatMsgReqURI), t.pushUInt32(this.from), t.pushUInt32(this.topSid), 
                        t.pushUInt32(this.subSid), t.pushUint8Array(this.chat.marshall()), t.pushString(this.reserve1), 
                        t.pushString(this.reserve2), t.pushUtf8String(this.nick), t.pushUInt32(this.extra.size);
                        var n = !0, i = !1, r = void 0;
                        try {
                            for (var s, u = this.extra[Symbol.iterator](); !(n = (s = u.next()).done); n = !0) {
                                var l = e(s.value, 2), h = l[0], p = l[1];
                                t.pushUInt16(h), t.pushString(p.toString());
                            }
                        } catch (t) {
                            i = !0, r = t;
                        } finally {
                            try {
                                !n && u.return && u.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        return t.marshall();
                    }
                }, {
                    key: "unmarshall",
                    value: function(t) {
                        this.from = t.popUInt32(), this.topSid = t.popUInt32(), this.subSid = t.popUInt32(), 
                        t.popUInt16(), this.chat = new u.default(), this.chat.unmarshall(t), this.reserve1 = t.popString(), 
                        this.reserve2 = t.popString(), this.nick = t.popUtf8String();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popUInt16(), r = t.popString();
                            this.extra.set(i, r);
                        }
                        this.yyid = parseInt(this.extra.get(4));
                    }
                } ]), i;
            }();
            r.default = l;
        },
        "./src/protocol/TimeoutMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/TopMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/TuoRenMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.admin = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.admin = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/TurnMaixu.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.time = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.time = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/UlSvcMsgByUid.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = function() {
                function i() {
                    t(this, i), this.appid = 0, this.topSid = 0, this.uid = 0, this.payload = null, 
                    this.clientIp = 0, this.termType = 0, this.statType = 0, this.subSid = 0, this.suid = 0, 
                    this.ext = new Map();
                }
                return n(i, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default(!1);
                        t.pushUInt16(this.appid), t.pushUInt32(this.topSid), t.pushUInt32(this.uid), t.pushUint8Array32(this.payload), 
                        t.pushUInt32(this.clientIp), t.pushUInt8(this.termType), t.pushUInt8(this.statType), 
                        t.pushUInt32(this.subSid), t.pushUInt32(0), t.pushUInt32(0), t.pushUInt32(this.ext.size);
                        var n = !0, i = !1, r = void 0;
                        try {
                            for (var s, a = this.ext[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                                var u = e(s.value, 2), l = u[0], h = u[1];
                                t.pushUInt32(l), t.pushString(h.toString());
                            }
                        } catch (t) {
                            i = !0, r = t;
                        } finally {
                            try {
                                !n && a.return && a.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        return t.marshall();
                    }
                } ]), i;
            }();
            r.default = a;
        },
        "./src/protocol/UserGroupReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.uri = 0, this.uid = 0, this.ugIdTypeSet = new Array(), this.extraInfo = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        t.setUri(this.uri), t.pushUInt32(this.uid), t.pushUInt32(0);
                        var e = this.ugIdTypeSet.length;
                        t.pushUInt32(e);
                        for (var n = 0; n < e; ++n) t.pushUInt32(this.ugIdTypeSet[n].get("grpTypeLow")), 
                        t.pushUInt32(this.ugIdTypeSet[n].get("grpTypeHigh")), t.pushUInt32(this.ugIdTypeSet[n].get("grpIdLow")), 
                        t.pushUInt32(this.ugIdTypeSet[n].get("grpIdHigh"));
                        return t.pushString(this.extraInfo), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/UserInfo.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.nick = "", this.sign = "", this.gender = 1, this.yyid = 0, 
                    this.sname = "", this.svc = !1;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), this.nick = t.popUtf8String(), this.sign = t.popString(), 
                        this.yyid = t.popUInt32(), this.sname = t.popUtf8String(), this.gender = t.popUInt8();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/ap/LoginAuthInfo.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.fromWeb = !1, this.account = null, this.password = null, this.cliType = 0, 
                    this.cliVer = 0, this.cliLcid = 0, this.from = "", this.cliInfo = "", this.cliVerStr = "", 
                    this.instance = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return "string" == typeof this.account ? t.pushString(this.account) : t.pushUint8Array(this.account), 
                        this.fromWeb ? this.password ? t.pushString(this.password) : t.pushString("") : "string" == typeof this.password ? t.pushString(this.password) : t.pushUint8Array(this.password), 
                        t.pushUInt32(this.cliType), t.pushUInt32(this.cliVer), t.pushUInt32(this.cliLcid), 
                        t.pushString(this.from), t.pushString(this.cliInfo), t.pushString(this.cliVerStr), 
                        t.pushUInt32(0), t.pushUInt32(0), t.pushUInt32(0), t.pushUInt32(0), t.pushString(this.instance), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/ap/PApPing.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protobase/uri.ts"), a = function() {
                function e() {
                    t(this, e), this.context = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        t.setUri(o.default.PingAPURI);
                        return t.pushUInt32(0), t.marshall();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/ap/PApPong.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.setAvailAppids = new Array(), this.serverTs = 0, this.context = "";
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        t.popUInt32();
                        for (var e = t.popUInt32(), n = 0; n < e; n++) this.setAvailAppids.push(t.popUInt32());
                        this.serverTs = t.popUInt32(), this.context = t.popString();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/ap/PLoginAp.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protobase/uri.ts"), a = r("./src/protocol/ap/LoginAuthInfo.ts"), u = function() {
                function e() {
                    t(this, e), this.loginAuthInfo = new a.default(), this.appid = 0, this.uid = 0, 
                    this.bRelogin = !1, this.ticket = new Uint8Array(0), this.cookie = new Uint8Array(0), 
                    this.context = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default();
                        return t.setUri(o.default.LoginAPURI), t.pushUint8Array32(this.loginAuthInfo.marshall()), 
                        t.pushUInt32(this.appid), t.pushUInt32(this.uid), t.pushUInt32(0), t.pushBool(this.bRelogin), 
                        t.pushUint8Array(this.ticket), t.pushUint8Array(this.cookie), t.pushString(this.context), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/protocol/ap/PLoginApRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.resCode = 0, this.context = "";
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        t.popUInt32(), this.resCode = t.popUInt32(), this.context = t.popString(), this.clientIp = t.popUInt32(), 
                        this.clientPort = t.popUInt16(), this.appKey = t.popUInt32(), this.uid = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/login_udb_v2/YYLoginReq.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = r("./src/protocol/login_udb_v2/proto_header.ts"), a = r("./src/protocol/login_udb_v2/proto_anti_code.ts"), u = r("./src/protocol/login_udb_v2/proto_token.ts"), l = function() {
                function e() {
                    t(this, e), this.protoVersion = 0, this.context = "", this.protoHeader = new o.default(), 
                    this.protoToken = new u.default(), this.sessionData = "", this.protoAntiCode = new a.default();
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.protoVersion), t.pushString(this.context), t.pushUint8Array(this.protoHeader.marshall()), 
                        t.pushUint8Array(this.protoToken.marshall()), t.pushString(this.sessionData), t.pushUint8Array(this.protoAntiCode.marshall()), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = l;
        },
        "./src/protocol/login_udb_v2/YYLoginRes.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/login_udb_v2/proto_strategy_detail.ts"), o = r("./src/protocol/login_udb_v2/proto_login_data.ts"), a = function() {
                function e() {
                    t(this, e), this.protoVersion = 0, this.context = "", this.errCode = 0, this.errMsg = "", 
                    this.description = "", this.strategy = 0, this.loginData = new o.default(), this.sessionData = "", 
                    this.protoStrategyDetail = new Array(), this.url = "", this.ticket = null, this.cookie = null, 
                    this.linkTicket = null;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        t.popUInt16(), this.protoVersion = t.popUInt32(), this.context = t.popString(), 
                        this.errCode = t.popUInt32(), this.errMsg = t.popUtf8String(), this.description = t.popString(), 
                        this.strategy = t.popUInt32(), t.popUInt16(), this.loginData.unmarshall(t), this.sessionData = t.popString();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            t.popUInt16();
                            var i = new s.default();
                            i.unmarshall(t), this.protoStrategyDetail.push(i);
                        }
                        this.url = t.popString(), this.ticket = t.popUint8Array(), this.cookie = t.popUint8Array(), 
                        this.linkTicket = t.popUint8Array();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/login_udb_v2/device_info.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.deviceName = "iPhone X", this.deviceId = "xx-xx-xx-xx", this.imei = "xx-xx-xx-xx", 
                    this.mac = "xx-xx-xx-xx", this.terminalType = 0, this.sysInfo = "iOS", this.deviceInfo = "11", 
                    this.lcid = "", this.widthPixels = "", this.heightPixels = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushString(this.deviceName), t.pushString(this.deviceId), t.pushString(this.imei), 
                        t.pushString(this.mac), t.pushUInt32(0), t.pushUInt32(0), t.pushString(this.sysInfo), 
                        t.pushString(this.deviceInfo), t.pushString(this.lcid), t.pushString(this.widthPixels), 
                        t.pushString(this.heightPixels), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/login_udb_v2/proto_acctinfo_login.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.user = "", this.acctInfo = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushString(this.user), t.pushString(this.acctInfo), t.pushString(""), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/login_udb_v2/proto_anti_code.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.bizName = "", this.antiCode = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushString(this.bizName), t.pushString(this.antiCode), t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/login_udb_v2/proto_credit_login.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.uid = 0, this.credit = "", this.source = 1;
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.uid), t.pushUInt32(0), t.pushString(this.credit), t.pushUInt32(this.source), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/login_udb_v2/proto_header.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/login_udb_v2/device_info.ts"), o = r("./src/protobase/ProtoMarshall.ts"), a = function() {
                function e() {
                    t(this, e), this.appType = 6, this.appid = "", this.sign = "", this.appVer = "1.0.0", 
                    this.sdkVer = "", this.clientIp = "", this.clientPort = 0, this.deviceInfo = new s.default(), 
                    this.channel = "", this.reserve = "", this.appidlist = [];
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default(!1);
                        t.pushUInt16(this.appType), t.pushString(this.appid), t.pushString(this.sign), t.pushString(this.appVer), 
                        t.pushString(this.sdkVer), t.pushString(this.clientIp), t.pushUInt32(this.clientPort), 
                        t.pushUint8Array(this.deviceInfo.marshall()), t.pushString(this.channel), t.pushString(this.reserve);
                        var e = this.appidlist.length;
                        t.pushUInt32(e);
                        for (var n = 0; n < e; n++) t.pushString(this.appidlist[n]);
                        return t.marshall();
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/protocol/login_udb_v2/proto_login_data.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.uid = 0, this.yyid = 0, this.passport = null, this.credit = null, 
                    this.loginParams = new Map(), this.mobileMask = "", this.emailMask = "", this.serverTime = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.uid = t.popUInt32(), t.popUInt32(), this.yyid = t.popUInt32(), t.popUInt32(), 
                        this.passport = t.popString(), this.credit = t.popString();
                        for (var e = t.popUInt32(), n = 0; n < e; ++n) {
                            var i = t.popString(), r = t.popString();
                            this.loginParams.set(i, r);
                        }
                        this.mobileMask = t.popString(), this.emailMask = t.popString(), this.serverTime = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/login_udb_v2/proto_password_login.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.user = "", this.encType = 0, this.password = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushString(this.user), t.pushUInt32(this.encType), t.pushString(this.password), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/login_udb_v2/proto_strategy_detail.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e), this.strategy = 0, this.selectTitle = "", this.promptTitle = "", this.promptContent = "", 
                    this.dataType = 0, this.data = "", this.promptBoxHigh = 0, this.promptBoxLength = 0;
                }
                return n(e, [ {
                    key: "unmarshall",
                    value: function(t) {
                        this.strategy = t.popUInt32(), this.selectTitle = t.popString(), this.promptTitle = t.popString(), 
                        this.promptContent = t.popString(), this.dataType = t.popUInt32(), this.data = t.popString(), 
                        this.promptBoxHigh = t.popUInt32(), this.promptBoxLength = t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/protocol/login_udb_v2/proto_thirdtoken_login.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = function() {
                function i() {
                    t(this, i), this.req_params = new Map();
                }
                return n(i, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default(!1);
                        t.pushUInt32(this.req_params.size);
                        var n = !0, i = !1, r = void 0;
                        try {
                            for (var s, a = this.req_params[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                                var u = e(s.value, 2), l = u[0], h = u[1];
                                t.pushString(l), t.pushString(h);
                            }
                        } catch (t) {
                            i = !0, r = t;
                        } finally {
                            try {
                                !n && a.return && a.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        return t.marshall();
                    }
                } ]), i;
            }();
            r.default = a;
        },
        "./src/protocol/login_udb_v2/proto_ticket_login.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoMarshall.ts"), o = function() {
                function e() {
                    t(this, e), this.uid = 0, this.ticket = "", this.appid = "0";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new s.default(!1);
                        return t.pushUInt32(this.uid), t.pushString(this.ticket), t.pushString(this.appid), 
                        t.marshall();
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/protocol/login_udb_v2/proto_token.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/login_udb_v2/proto_password_login.ts"), o = r("./src/protocol/login_udb_v2/proto_credit_login.ts"), a = r("./src/protocol/login_udb_v2/proto_ticket_login.ts"), u = r("./src/protocol/login_udb_v2/proto_acctinfo_login.ts"), l = r("./src/protocol/login_udb_v2/proto_thirdtoken_login.ts"), h = r("./src/protobase/ProtoMarshall.ts"), p = function() {
                function e() {
                    t(this, e), this.tokenType = 1, this.protoCredit = new o.default(), this.protoPasswd = new s.default(), 
                    this.protoTicket = new a.default(), this.protoAcctInfo = new u.default(), this.thirdToken = new l.default(), 
                    this.strategy = 0, this.straToken = "";
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new h.default(!1);
                        return t.pushUInt32(this.tokenType), 1 == this.tokenType ? t.pushUint8Array(this.protoCredit.marshall()) : 2 == this.tokenType ? t.pushUint8Array(this.protoPasswd.marshall()) : 3 == this.tokenType ? t.pushUint8Array(this.protoTicket.marshall()) : 4 == this.tokenType ? t.pushUint8Array(this.protoAcctInfo.marshall()) : 5 == this.tokenType && t.pushUint8Array(this.thirdToken.marshall()), 
                        t.pushUInt32(this.strategy), t.pushString(this.straToken), t.marshall();
                    }
                } ]), e;
            }();
            i.default = p;
        },
        "./src/protocol/route/PAPRouter.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/uri.ts"), o = r("./src/protobase/ProtoMarshall.ts"), a = r("./src/protocol/route/PAPRouterHeaders.ts"), u = function() {
                function e() {
                    t(this, e), this.from = "", this.ruri = 0, this.res_code = 0, this.payload = null, 
                    this.headers = new a.default();
                }
                return n(e, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default();
                        return t.setUri(s.default.PAPRouterURI), t.pushString(this.from), t.pushUInt32(this.ruri), 
                        t.pushUInt16(this.res_code), t.pushUint8Array32(this.payload), t.pushUint8Array32(this.headers.marshall()), 
                        t.marshall();
                    }
                }, {
                    key: "unmarshall",
                    value: function(t) {
                        this.from = t.popString(), this.ruri = t.popUInt32(), this.res_code = t.popUInt16(), 
                        this.payload = t.popUint8Array32(), t.popUInt32();
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/protocol/route/PAPRouterHeaders.ts": function(i, r, s) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = s("./src/protobase/ProtoMarshall.ts"), a = s("./src/utils/UtfUtil.ts"), u = s("./src/utils/logger.ts"), l = function() {
                function i() {
                    t(this, i), this.realUri = 0, this.appid = 0, this.uid = 0, this.vecProxyId = [], 
                    this.vecS2SId = [], this.codec = 0, this.clientIp = 0, this.clientPort = 0, this.routeNum = 0, 
                    this.srvName = "", this.clientFromType = 0, this.clientFromExt = "", this.extentProps = new Map(), 
                    this.clientCtx = "";
                }
                return n(i, [ {
                    key: "marshall",
                    value: function() {
                        var t = new o.default(!1);
                        t.pushUInt32(1 << 24 | 8), t.pushUInt32(this.realUri), t.pushUInt32(33554448), t.pushUInt32(this.appid), 
                        t.pushUInt32(this.uid), t.pushUInt32(0);
                        var n = 8 + 8 * this.vecProxyId.length + 4 + 8 * this.vecS2SId.length;
                        t.pushUInt32(4 << 24 | 16777215 & n), n = this.vecProxyId.length, t.pushUInt32(n);
                        for (var i = 0; i < n; i++) ;
                        n = this.vecS2SId.length, t.pushUInt32(n);
                        for (var r = 0; r < n; r++) ;
                        t.pushUInt32(5 << 24 | 8), t.pushUInt32(this.codec), n = 16 + a.default.sizeof(this.srvName) + 4 + 2 + a.default.sizeof(this.clientFromExt), 
                        t.pushUInt32(6 << 24 | 16777215 & n), t.pushUInt32(this.clientIp), t.pushUInt16(this.clientPort), 
                        t.pushUInt32(this.routeNum), t.pushString(this.srvName), t.pushUInt32(this.clientFromType), 
                        t.pushString(this.clientFromExt), n = 8;
                        var s = !0, u = !1, l = void 0;
                        try {
                            for (var h, p = this.extentProps[Symbol.iterator](); !(s = (h = p.next()).done); s = !0) {
                                var f = e(h.value, 2), d = f[0];
                                n += 4, n += 2 + (m = f[1]).byteLength;
                            }
                        } catch (t) {
                            u = !0, l = t;
                        } finally {
                            try {
                                !s && p.return && p.return();
                            } finally {
                                if (u) throw l;
                            }
                        }
                        t.pushUInt32(7 << 24 | 16777215 & n), n = this.extentProps.size, t.pushUInt32(n);
                        var c = !0, g = !1, v = void 0;
                        try {
                            for (var y, b = this.extentProps[Symbol.iterator](); !(c = (y = b.next()).done); c = !0) {
                                var U = e(y.value, 2), d = U[0], m = U[1];
                                t.pushUInt32(d), t.pushUint8Array(m);
                            }
                        } catch (t) {
                            g = !0, v = t;
                        } finally {
                            try {
                                !c && b.return && b.return();
                            } finally {
                                if (g) throw v;
                            }
                        }
                        return n = 6 + a.default.sizeof(this.clientCtx), t.pushUInt32(8 << 24 | 16777215 & n), 
                        t.pushString(this.clientCtx), t.pushUInt32(4286085240), t.marshall();
                    }
                }, {
                    key: "unmarshall",
                    value: function(t) {
                        for (var e = t.popUInt32(), n = e >> 24 & 255, i = 0; 255 != n && i <= 5; ) {
                            switch (n) {
                              case 1:
                                this.realUri = t.popUInt32();
                                break;

                              case 2:
                                this.appid = t.popUInt32(), this.uid = t.popUInt32(), t.popUInt32();
                                break;

                              case 4:
                                for (var r = t.popUInt32(), s = 0; s < r; ++s) {
                                    var o = t.popUInt32();
                                    t.popUInt32();
                                    this.vecProxyId.push(o);
                                }
                                r = t.popUInt32();
                                for (var a = 0; a < r; ++a) {
                                    var l = t.popUInt32();
                                    t.popUInt32();
                                    this.vecS2SId.push(l);
                                }
                                break;

                              case 5:
                                this.codec = t.popUInt32();
                                break;

                              case 6:
                                this.clientIp = t.popUInt32(), this.clientPort = t.popUInt16(), this.routeNum = t.popUInt32(), 
                                this.srvName = t.popString(), this.clientFromType = t.popUInt32(), this.clientFromExt = t.popString();
                                break;

                              case 7:
                                for (var h = t.popUInt32(), p = 0; p < h; ++p) {
                                    var f = t.popUInt32(), d = t.popUint8Array();
                                    this.extentProps.set(f, d);
                                }
                                break;

                              case 8:
                                this.clientCtx = t.popString();
                                break;

                              default:
                                (i += 1) > 5 && u.default.warn("PAPRouterHeaders.unmarshall probably erroneous data, jumping out of the loop to avoid endless loop!!!");
                            }
                            n = (e = t.popUInt32()) >> 24 & 255;
                        }
                    }
                } ]), i;
            }();
            r.default = l;
        },
        "./src/punmarshall.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protobase/ProtoUnmarshall.ts"), o = r("./src/utils/utils.ts"), a = r("./src/utils/ZlibUtil.ts"), u = function() {
                function e(n) {
                    t(this, e);
                    var i = o.default.payload2DataView(n);
                    n = null, this.ush = new s.default(i, !1);
                }
                return n(e, [ {
                    key: "getBool",
                    value: function() {
                        return this.ush.popBool();
                    }
                }, {
                    key: "getUI16",
                    value: function() {
                        return this.ush.popUInt16();
                    }
                }, {
                    key: "getUI32",
                    value: function() {
                        return this.ush.popUInt32();
                    }
                }, {
                    key: "getUI64",
                    value: function() {
                        return this.ush.popUInt64();
                    }
                }, {
                    key: "decompress",
                    value: function() {
                        var t = o.default.copyCompressedData(this.ush), e = a.default.decompress(t);
                        return t = null, e;
                    }
                }, {
                    key: "getBytes",
                    value: function() {
                        return this.ush.popUint8Array();
                    }
                }, {
                    key: "getBytes32",
                    value: function() {
                        return this.ush.popUint8Array32();
                    }
                }, {
                    key: "getString",
                    value: function() {
                        return this.ush.popString();
                    }
                }, {
                    key: "getString32",
                    value: function() {
                        return this.ush.popString32();
                    }
                }, {
                    key: "getUTF8String",
                    value: function() {
                        return this.ush.popUtf8String();
                    }
                }, {
                    key: "getUTF8String32",
                    value: function() {
                        return this.ush.popUtf8String32();
                    }
                }, {
                    key: "getUCS2String",
                    value: function() {
                        return this.ush.popUCS2String();
                    }
                }, {
                    key: "getUCS2String32",
                    value: function() {
                        return this.ush.popUCS2String32();
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/serviceh5.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/protocol/UserGroupReq.ts"), o = r("./src/utils/utils.ts"), a = r("./src/protobase/uri.ts"), u = r("./src/protocol/TextChatMsg.ts"), l = r("./src/protocol/TextChatFormat.ts"), h = r("./src/protocol/UlSvcMsgByUid.ts"), p = r("./src/protocol/PUinfoServiceReq.ts"), f = r("./src/protocol/PQueryUserInfoReq.ts"), d = r("./src/protocol/PSubServiceTypes.ts"), c = r("./src/utils/logger.ts"), g = r("./src/protobase/ProtoUnmarshall.ts"), v = r("./src/protocol/DlSvcMsgByUid.ts"), y = r("./src/protocol/PUinfoServiceRes.ts"), b = r("./src/protocol/DlUsrGroupMsg.ts"), U = r("./src/protocol/TextChatException.ts"), m = r("./src/protocol/DlSvcMsgBySid.ts"), I = r("./src/protocol/PHistoryChatReq.ts"), w = r("./src/protocol/PHistoryChatRes.ts"), S = r("./src/ap/aph5.ts"), C = r("./src/protocol/route/PAPRouter.ts"), k = function() {
                function e(n) {
                    t(this, e), this.newH5 = n, this.channelH5 = null, this.linkEventCbs = [], this.h5EventCbs = [], 
                    this.h5DataRecvCbs = [], this.h5ChatRecvCbs = [], this.handleDic = new Map(), this.bServiceChannelReady = !1, 
                    n.h5_g_globals.isMiniProgram || this.addHandle(a.default.PAPRouterURI, this.onPApRouter.bind(this)), 
                    this.addHandle(a.default.DlUsrGroupMsgURI, this.onPDlUserGroupMsg.bind(this)), this.addHandle(a.default.DlSvcMsgBySidURI, this.procDlBySid.bind(this)), 
                    this.addHandle(a.default.DlSvcMsgByUidURI, this.procDlByUid.bind(this)), this.addHandle(a.default.PBroadcastProbeCtrlURI, this.onPBroadcastProbeCtrl.bind(this));
                }
                return n(e, [ {
                    key: "onCheckTimer",
                    value: function(t, e) {
                        this.ap && this.ap.onCheckTimer(t, e);
                    }
                }, {
                    key: "setChlH5",
                    value: function(t) {
                        this.channelH5 = t;
                    }
                }, {
                    key: "setLinkEventCb",
                    value: function(t, e) {
                        if (e) return this.linkEventCbs = [], void this.linkEventCbs.push(t);
                        for (var n = 0; n < this.linkEventCbs.length; ++n) if (this.linkEventCbs[n] == t) return;
                        this.linkEventCbs.push(t);
                    }
                }, {
                    key: "setH5EventCb",
                    value: function(t, e) {
                        if (e) return this.h5EventCbs = [], void this.h5EventCbs.push(t);
                        for (var n = 0; n < this.h5EventCbs.length; ++n) if (this.h5EventCbs[n] == t) return;
                        this.h5EventCbs.push(t);
                    }
                }, {
                    key: "setH5DataRecvCb",
                    value: function(t, e) {
                        if (e) return this.h5DataRecvCbs = [], void this.h5DataRecvCbs.push(t);
                        for (var n = 0; n < this.h5DataRecvCbs.length; ++n) if (this.h5DataRecvCbs[n] == t) return;
                        this.h5DataRecvCbs.push(t);
                    }
                }, {
                    key: "setH5ChatRecvCb",
                    value: function(t, e) {
                        if (e) return this.h5ChatRecvCbs = [], void this.h5ChatRecvCbs.push(t);
                        for (var n = 0; n < this.h5ChatRecvCbs.length; ++n) if (this.h5ChatRecvCbs[n] == t) return;
                        this.h5ChatRecvCbs.push(t);
                    }
                }, {
                    key: "dataRecvCbs",
                    value: function(t, e) {
                        for (var n = 0; n < this.h5DataRecvCbs.length; ++n) this.h5DataRecvCbs[n](t, e);
                    }
                }, {
                    key: "stop",
                    value: function() {
                        c.default.log("ServiceH5.stop"), this.ap && this.ap.close(), this.bServiceChannelReady = !1;
                    }
                }, {
                    key: "addHandle",
                    value: function(t, e) {
                        this.handleDic.set(t, e);
                    }
                }, {
                    key: "onProto",
                    value: function(t, e) {
                        var n = this.handleDic.get(t);
                        null !== n && void 0 !== n ? (c.default.debug("ServiceH5.onProto uri=" + (t >> 8 & o.default.getUintMax()) + "/" + (255 & t)), 
                        n(e)) : c.default.warn("ServiceH5.onProto UNKNOWN uri=" + (t >> 8 & o.default.getUintMax()) + "/" + (255 & t));
                    }
                }, {
                    key: "onPApRouter",
                    value: function(t) {
                        var e = new C.default();
                        e.unmarshall(t);
                        var n = e.ruri;
                        c.default.debug("ServiceH5.onPApRouter res.ruri=" + (e.ruri >> 8 & o.default.getUintMax()) + "/" + (255 & e.ruri) + " payload.length=" + e.payload.byteLength + " from=" + e.from);
                        var i = o.default.payload2DataView(e.payload);
                        e.payload = null;
                        var r = new g.default(i, !1);
                        switch (n) {
                          case a.default.DlUsrGroupMsgURI:
                            var s = new b.default();
                            if (s.unmarshall(r), s.ruri == a.default.DlSvcMsgByUidURI) {
                                var u = o.default.payload2DataView(s.msg);
                                s.msg = null;
                                var l = new g.default(u, !1);
                                this.procDlByUid(l);
                            }
                            break;

                          case a.default.DlSvcMsgByUidURI:
                            this.procDlByUid(r);
                            break;

                          case a.default.APOnlineAckNotifyURI:
                        }
                    }
                }, {
                    key: "onPDlUserGroupMsg",
                    value: function(t) {
                        var e = new b.default();
                        e.unmarshall(t), this.dataRecvCbs(e.appid, e.msg);
                    }
                }, {
                    key: "procDlBySid",
                    value: function(t) {
                        var e = new m.default();
                        if (e.unmarshall(t), 31 == e.appid) {
                            var n = o.default.payload2DataView(e.msg);
                            e.msg = null;
                            var i = new g.default(n);
                            if (i.uri == a.default.TextChatMsgResURI) {
                                var r = new u.default();
                                r.unmarshall(i);
                                for (var s = 0; s < this.h5ChatRecvCbs.length; ++s) {
                                    var l = {
                                        code: 0,
                                        historical: !1,
                                        yyid: r.yyid,
                                        from_uid: r.from,
                                        nick: r.nick,
                                        msg: r.chat.msg,
                                        top_sid: r.topSid,
                                        sub_sid: r.subSid,
                                        props: o.default.map2Object(r.extra)
                                    };
                                    this.h5ChatRecvCbs[s](l), c.default.log("ServiceH5.procDlBySid ret=" + JSON.stringify(l));
                                }
                            } else c.default.warn("ServiceH5.procDlBySid unknown chat service uri:" + (i.uri >> 8 & o.default.getUintMax()) + "/" + (255 & i.uri));
                        } else this.dataRecvCbs(e.appid, e.msg);
                    }
                }, {
                    key: "procDlByUid",
                    value: function(t) {
                        var e = new v.default();
                        e.unmarshall(t);
                        var n = o.default.payload2DataView(e.msg), i = new g.default(n), r = i.uri;
                        c.default.log("ServiceH5.procDlByUid appid=" + e.appid + " ush2.uri=" + (r >> 8 & o.default.getUintMax()) + "/" + (255 & r)), 
                        31 == e.appid ? (e.msg = null, r == a.default.PHistoryChatResURI ? this.onPHistoryChat(i) : r == a.default.TextChatExceptionURI ? this.onTextChatException(i) : c.default.warn("ServiceH5.procDlByUid unkonwn chat service uri:" + (r >> 8 & o.default.getUintMax()) + "/" + (255 & r))) : 6 == e.appid ? (e.msg = null, 
                        r == a.default.PUinfoServiceResURI ? this.onPUinfoServiceRes(i) : c.default.warn("ServiceH5.procDlByUid unkonwn uinfo service uri:" + (r >> 8 & o.default.getUintMax()) + "/" + (255 & r))) : this.dataRecvCbs(e.appid, e.msg);
                    }
                }, {
                    key: "onPBroadcastProbeCtrl",
                    value: function(t) {}
                }, {
                    key: "onPHistoryChat",
                    value: function(t) {
                        var e = new w.default();
                        e.unmarshall(t);
                        for (var n = e.historyMsg.length, i = 0; i < n; i++) for (var r = e.historyMsg[i], s = 0; s < this.h5ChatRecvCbs.length; ++s) {
                            var a = {
                                code: 0,
                                historical: !0,
                                yyid: r.yyid,
                                from_uid: r.from,
                                nick: r.nick,
                                msg: r.chat.msg,
                                top_sid: r.topSid,
                                sub_sid: r.subSid,
                                props: o.default.map2Object(r.extra)
                            };
                            c.default.debug("ServiceH5.onPHistoryChat nick=" + a.nick + " msg=" + a.msg), this.h5ChatRecvCbs[s](a);
                        }
                    }
                }, {
                    key: "onTextChatException",
                    value: function(t) {
                        var e = new U.default();
                        e.unmarshall(t), c.default.warn("ServiceH5.onTextChatException except=" + JSON.stringify(e));
                        for (var n = 0; n < this.h5ChatRecvCbs.length; ++n) this.h5ChatRecvCbs[n]({
                            code: e.reason,
                            props: e.props2
                        });
                    }
                }, {
                    key: "onPUinfoServiceRes",
                    value: function(t) {
                        var e = new y.default();
                        e.unmarshall(t);
                        var n = this.newH5.h5_g_globals, i = !0, r = !1, s = void 0;
                        try {
                            for (var a, u = e.users.keys()[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                                var l = a.value;
                                void 0 === n.userInfos[l] && (n.userInfos[l] = {}), Object.assign(n.userInfos[l], e.users.get(l));
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && u.return && u.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        c.default.log("ServiceH5.onPUinfoServiceRes userInfos=" + JSON.stringify(n.userInfos));
                        var h = e.users.get(n.uid);
                        h && (n.nick = h.nick, this.dataRecvCbs(6, o.default.map2Object(e.users)));
                    }
                }, {
                    key: "procUserGroupMsg",
                    value: function(t) {
                        if (t.ruri == a.default.DlSvcMsgByUidURI) {
                            c.default.debug("ServiceH5.procUserGroupMsg handled in service");
                            var e = o.default.payload2DataView(t.msg);
                            t.msg = null;
                            var n = new g.default(e, !1);
                            this.procDlByUid(n);
                        } else c.default.debug("ServiceH5.procUserGroupMsg handled in channel"), this.channelH5.procUserGroupMsg(t);
                    }
                }, {
                    key: "restart",
                    value: function() {
                        c.default.log("ServiceH5.restart");
                    }
                }, {
                    key: "login",
                    value: function() {
                        this.newH5.h5_g_globals.isMiniProgram ? this.channelH5.ap.loginAp(260) : (this.ap || (this.ap = new S.default(this.newH5, this, 260)), 
                        this.ap.start());
                    }
                }, {
                    key: "changeServiceBc",
                    value: function(t, e, n) {
                        var i = new Map();
                        i.set("grpTypeLow", 1), i.set("grpTypeHigh", 0), i.set("grpIdLow", e), i.set("grpIdHigh", 0);
                        var r = new Map();
                        r.set("grpTypeLow", 2), r.set("grpTypeHigh", 0), r.set("grpIdLow", n), r.set("grpIdHigh", 0);
                        var o = new s.default();
                        o.uri = t, o.uid = this.newH5.h5_g_globals.uid, o.ugIdTypeSet.push(i), o.ugIdTypeSet.push(r), 
                        this.send(o.marshall());
                    }
                }, {
                    key: "joinServiceBc",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        this.changeServiceBc(a.default.JoinUserGroupURI, t.topSid, t.subSid), c.default.log("ServiceH5.joinServiceBc topSid=" + t.topSid + " subSid=" + t.subSid);
                    }
                }, {
                    key: "joinSvcUserGroup",
                    value: function(t, e) {
                        var n = new Map();
                        n.set("grpTypeLow", t), n.set("grpTypeHigh", 0), n.set("grpIdLow", e), n.set("grpIdHigh", 0);
                        var i = new s.default();
                        i.uri = a.default.JoinUserGroupURI, i.uid = this.newH5.h5_g_globals.uid, i.ugIdTypeSet.push(n), 
                        this.send(i.marshall());
                    }
                }, {
                    key: "leaveServiceBc",
                    value: function() {
                        var t = this.newH5.h5_g_globals;
                        this.changeServiceBc(a.default.LeaveUserGroupURI, t.topSid, t.subSid), c.default.log("ServiceH5.leaveServiceBc topSid=" + t.topSid + " subSid=" + t.subSid);
                    }
                }, {
                    key: "leaveSvcUserGroup",
                    value: function(t, e) {
                        var n = new Map();
                        n.set("grpTypeLow", t), n.set("grpTypeHigh", 0), n.set("grpIdLow", e), n.set("grpIdHigh", 0);
                        var i = new s.default();
                        i.uri = a.default.LeaveUserGroupURI, i.uid = this.newH5.h5_g_globals.uid, i.ugIdTypeSet.push(n), 
                        this.send(i.marshall());
                    }
                }, {
                    key: "onApOpen",
                    value: function(t) {
                        var e = this.newH5.h5_g_globals;
                        e.isMiniProgram || e.loginedUDB && (c.default.log("ServiceH5.onApOpen loginap"), 
                        this.ap.loginAp(260));
                    }
                }, {
                    key: "onApClose",
                    value: function() {
                        this.bServiceChannelReady = !1;
                    }
                }, {
                    key: "onCheckStatus",
                    value: function(t, e, n) {
                        for (var i = 0; i < this.linkEventCbs.length; ++i) this.linkEventCbs[i]({
                            type: 2,
                            code: e,
                            appid: t,
                            userType: n
                        });
                    }
                }, {
                    key: "onLoginAp",
                    value: function(t, e) {
                        c.default.log("ServiceH5.onLoginAp success. start to join user group etc.");
                        var n = this.newH5.h5_g_globals;
                        n.isMiniProgram || (n.appidSubs && this.subsAppids(n.appidSubs), n.appidUnsubs && this.unsubsAppids(n.appidUnsubs));
                        for (var i = 0; i < this.h5EventCbs.length; ++i) this.h5EventCbs[i]({
                            type: 2,
                            code: 0,
                            userType: e
                        }), this.getSvcUserInfo([ this.newH5.h5_g_globals.uid ]), this.bServiceChannelReady = !0;
                    }
                }, {
                    key: "sendChatMsg",
                    value: function(t, e) {
                        var n = this.newH5.h5_g_globals, i = new u.default();
                        i.from = n.uid, i.topSid = n.topSid, i.subSid = n.subSid;
                        var r = new l.default();
                        r.msg = e, i.chat = r, t && 0 != t.length ? (i.nick = t, i.extra.set(8, t)) : t = "", 
                        i.extra.set(2, "25"), i.extra.set(3, "1"), i.extra.set(4, n.yyid.toString()), i.extra.set(4, "0"), 
                        i.extra.set(6, "0"), i.extra.set(7, "0"), c.default.log("ServiceH5.sendChatMsg nick=" + t + " msg=" + e);
                        var s = new Map();
                        s.set(7, n.thirdUdbAppId), this.sendAppData(31, i.marshall(), s);
                    }
                }, {
                    key: "sendAppData",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = this.newH5.h5_g_globals, r = new h.default();
                        r.appid = t, r.topSid = i.topSid || i.tryTopSid, r.subSid = i.subSid || i.trySubSid, 
                        r.uid = i.uid, r.payload = e, r.statType = t, n && (r.ext = n), c.default.debug("ServiceH5.sendAppData uid=" + r.uid + " appid=" + r.appid + " topSid=" + r.topSid + " subSid=" + r.subSid + " msg.length=" + r.payload.byteLength + " isMiniProgram=" + this.newH5.h5_g_globals.isMiniProgram), 
                        this.newH5.h5_g_globals.isMiniProgram ? this.channelH5.sendApRouter(260, "", a.default.UlSvcMsgByUidURI, r, null) : this.ap && this.ap.sendApRouter(260, "", a.default.UlSvcMsgByUidURI, r, null);
                    }
                }, {
                    key: "sendAppSender",
                    value: function(t, e, n) {
                        arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    }
                }, {
                    key: "getSvcUserInfo",
                    value: function(t) {
                        if (0 != t.length) {
                            var e = this.newH5.h5_g_globals, n = new p.default();
                            n.uid = e.uid, n.topSid = e.topSid, n.uids = t, c.default.log("ServiceH5.getSvcUserInfo req=" + JSON.stringify(n)), 
                            this.sendAppData(6, n.marshall());
                        }
                    }
                }, {
                    key: "getHistoryChat",
                    value: function() {
                        var t = this.newH5.h5_g_globals, e = new I.default();
                        e.topSid = t.topSid, e.subSid = t.subSid, e.uid = t.uid;
                        var n = new Map();
                        n.set(7, t.thirdUdbAppId), this.sendAppData(31, e.marshall(), n);
                    }
                }, {
                    key: "getUserRoleInfo",
                    value: function(t) {
                        if (0 != t.length) {
                            var e = this.newH5.h5_g_globals, n = new f.default();
                            n.topSid = e.topSid, n.uids = t, c.default.log("ServiceH5.getUserRoleInfo req=" + JSON.stringify(n)), 
                            this.channelH5.sendApRouter(259, "channelUserInfo", a.default.PQueryUserInfoReqURI, n, o.default.getExtProps(e.topSid));
                        }
                    }
                }, {
                    key: "getUserInfo",
                    value: function(t) {
                        if (0 != t.length) {
                            for (var e = this.newH5.h5_g_globals, n = [], i = [], r = {}, s = t.length, o = 0; o < s; ++o) {
                                var a = t[o].toString(), u = e.userInfos[a];
                                void 0 !== u && null != u ? (void 0 === u.svc ? n.push(a) : r[a] = u, void 0 === u.chl ? i.push(a) : r[a] = u) : (n.push(a), 
                                i.push(a));
                            }
                            if (0 != Object.keys(r).length && 0 != this.h5DataRecvCbs.length) {
                                for (var l = new Object(), h = Object.keys(r), p = 0; p < h.length; ++p) {
                                    for (var f = new Object(), d = r[h[p]], c = Object.keys(d), g = 0; g < c.length; ++g) "role" != c[g] && "roler" != c[g] && (f[c[g]] = d[c[g]]);
                                    f.role = this.channelH5.getCurSubSidRole(e.topSid, e.subSid, d.role, d.roler), l[h[p]] = f;
                                }
                                this.dataRecvCbs(6, l);
                            }
                            this.getSvcUserInfo(n), this.getUserRoleInfo(i);
                        }
                    }
                }, {
                    key: "subsAppids",
                    value: function(t) {
                        if (0 != t.length) {
                            if (!this.newH5.h5_g_globals.isMiniProgram && this.ap && !this.ap.appidReady(260)) for (var e = t.length, n = 0; n < e; n++) this.newH5.h5_g_globals.appidSubs.push(t[n]);
                            c.default.log("ServiceH5.subsAppids appids=" + t);
                            var i = this.newH5.h5_g_globals, r = new d.default();
                            r.uri = a.default.PSubServiceTypesURI, r.uid = i.uid, r.appids = t, this.send(r.marshall());
                        }
                    }
                }, {
                    key: "unsubsAppids",
                    value: function(t) {
                        if (0 != t.length) {
                            if (!this.newH5.h5_g_globals.isMiniProgram && this.ap && !this.ap.appidReady(260)) for (var e = t.length, n = 0; n < e; n++) this.newH5.h5_g_globals.appidUnsubs.push(t[n]);
                            c.default.log("ServiceH5.unsubsAppids appids=" + t);
                            var i = this.newH5.h5_g_globals, r = new d.default();
                            r.uri = a.default.PUnsubServiceTypesURI, r.uid = i.uid, r.appids = t, this.send(r.marshall());
                        }
                    }
                }, {
                    key: "send",
                    value: function(t) {
                        this.newH5.h5_g_globals.isMiniProgram ? this.channelH5.ap.bufSend(260, t) : this.ap && this.ap.bufSend(260, t);
                    }
                }, {
                    key: "isServiceChannelReady",
                    value: function() {
                        return this.bServiceChannelReady;
                    }
                } ]), e;
            }();
            i.default = k;
        },
        "./src/utils/ProtoLink.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/logger.ts"), o = r("./src/utils/miniProgramAPI.ts"), a = function() {
                function e(n) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t(this, e), this.linkHandler = n, this.ws = null, this.connected = !1, this.bIsMiniProgram = i;
                }
                return n(e, [ {
                    key: "destroy",
                    value: function() {
                        this.linkHandler = null, this.reset();
                    }
                }, {
                    key: "connect",
                    value: function(t) {
                        var e = this;
                        if (s.default.log("ProtoLink.connect addr=" + t), this.reset(), this.bIsMiniProgram) {
                            var n = o.default.getAPI();
                            this.ws = n.connectSocket({
                                url: t
                            }), n.onSocketOpen(function(t) {
                                s.default.log("ProtoLink.onopen"), e.connected = !0, e.linkHandler && e.linkHandler.onopen();
                            }), n.onSocketClose(function(t) {
                                e.connected = !1, e.ws = null, e.linkHandler && (e.linkHandler.onclose(), e.linkHandler = null), 
                                s.default.log("ProtoLink.onclose");
                            }), n.onSocketError(function(t) {
                                s.default.log("ProtoLink.onerror event=" + JSON.stringify(t)), e.connected = !1, 
                                e.ws = null, e.linkHandler && (e.linkHandler.onerror(t), e.linkHandler = null);
                            }), n.onSocketMessage(function(t) {
                                t.data instanceof ArrayBuffer ? e.processArrayBuffer(t.data) : e.processText(t.data);
                            });
                        } else this.ws = new WebSocket(t), this.ws.binaryType = "arraybuffer", this.ws.onopen = this.onopen.bind(this), 
                        this.ws.onerror = this.onerror.bind(this), this.ws.onclose = this.onclose.bind(this), 
                        this.ws.onmessage = this.onmessage.bind(this);
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.ws && (this.connected = !1, this.bIsMiniProgram ? o.default.getAPI().closeSocket() : (this.ws.onopen = null, 
                        this.ws.onerror = null, this.ws.onclose = null, this.ws.onmessage = null, this.ws.close()), 
                        this.ws = null);
                    }
                }, {
                    key: "send",
                    value: function(t) {
                        this.ws && this.connected && (this.bIsMiniProgram ? o.default.getAPI().sendSocketMessage({
                            data: t.buffer,
                            success: function() {},
                            fail: function(t) {
                                s.default.error("ProtoLink.send sendSocketMessage err=" + JSON.stringify(t)), null != this && void 0 !== this && (this.connected = !1, 
                                this.ws = null, this.linkHandler && (this.linkHandler.onerror(t), this.linkHandler = null));
                            }
                        }) : this.ws.send(t));
                    }
                }, {
                    key: "onopen",
                    value: function() {
                        this.connected = !0, this.linkHandler && this.linkHandler.onopen();
                    }
                }, {
                    key: "onerror",
                    value: function(t) {
                        this.connected = !1, this.ws = null, this.linkHandler && (this.linkHandler.onerror(t), 
                        this.linkHandler = null);
                    }
                }, {
                    key: "onclose",
                    value: function() {
                        this.connected = !1, this.ws = null, this.linkHandler && (this.linkHandler.onclose(), 
                        this.linkHandler = null);
                    }
                }, {
                    key: "onmessage",
                    value: function(t) {
                        t.data instanceof ArrayBuffer ? this.processArrayBuffer(t.data) : this.processText(t.data);
                    }
                }, {
                    key: "processText",
                    value: function(t) {
                        s.default.log("ProtoLink.processText data=" + t);
                    }
                }, {
                    key: "processArrayBuffer",
                    value: function(t) {
                        for (var e = new DataView(t), n = 0, i = 0, r = 0; n + 10 < t.byteLength; ) {
                            if (i = e.getUint32(n, !0), n + i > t.byteLength || i < 10) return void s.default.error("ProtoLink.processArrayBuffer length error pktLen=" + i + " bufferLen=" + t.byteLength);
                            r = e.getUint32(n + 4, !0);
                            var o = new DataView(t, n, i);
                            this.linkHandler && this.linkHandler.onData(r, o), n += i;
                        }
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/utils/UtfUtil.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/utils.ts"), o = r("./src/utils/logger.ts"), a = function() {
                function e() {
                    t(this, e);
                }
                return n(e, null, [ {
                    key: "encodeUCS2",
                    value: function(t) {
                        for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t.charCodeAt(i));
                        var r = Uint16Array.from(e);
                        return new Uint8Array(r.buffer);
                    }
                }, {
                    key: "decodeUCS2",
                    value: function(t) {
                        var e = s.default.payload2DataView(t);
                        t = null;
                        for (var n = 0, i = []; n + 2 <= e.byteLength; ) i.push(e.getUint16(n, !0)), n += 2;
                        for (var r = i.length, o = "", a = 0; a < r; a++) o += String.fromCharCode(i[a]);
                        return o;
                    }
                }, {
                    key: "encodeUtf8",
                    value: function(t) {
                        for (var e = [], n = t.length, i = 0; i < n; i++) {
                            var r = t.charCodeAt(i);
                            0 <= r && r <= 127 ? (1, e.push(r)) : 128 <= r && r <= 2047 ? (2, e.push(192 | 31 & r >> 6), 
                            e.push(128 | 63 & r)) : 2048 <= r && r <= 65535 ? (3, e.push(224 | 15 & r >> 12), 
                            e.push(128 | 63 & r >> 6), e.push(128 | 63 & r)) : 65536 <= r && r <= 2097151 ? (4, 
                            e.push(240 | 7 & r >> 18), e.push(128 | 63 & r >> 12), e.push(128 | 63 & r >> 6), 
                            e.push(128 | 63 & r)) : 2097152 <= r && r <= 67108863 ? (5, e.push(248 | 3 & r >> 24), 
                            e.push(128 | 63 & r >> 18), e.push(128 | 63 & r >> 12), e.push(128 | 63 & r >> 6), 
                            e.push(128 | 63 & r)) : 67108864 <= r && r <= 2147483647 && (6, e.push(252 | 1 & r >> 30), 
                            e.push(128 | 63 & r >> 24), e.push(128 | 63 & r >> 18), e.push(128 | 63 & r >> 12), 
                            e.push(128 | 63 & r >> 6), e.push(128 | 63 & r));
                        }
                        for (var s = e.length, o = 0; o < s; o++) e[o] &= 255;
                        return Uint8Array.from(e);
                    }
                }, {
                    key: "decodeUtf8",
                    value: function(t) {
                        var e = "", n = t.byteLength;
                        try {
                            for (var i = 0; i < n; i++) {
                                var r = t[i].toString(2), s = r.match(/^1+?(?=0)/);
                                if (s && 8 == r.length) {
                                    for (var a = s[0].length, u = t[i].toString(2).slice(a + 1), l = 1; l < a; l++) u += t[l + i].toString(2).slice(2);
                                    e += String.fromCodePoint(parseInt(u, 2)), i += a - 1;
                                } else e += String.fromCharCode(t[i]);
                            }
                        } catch (t) {
                            o.default.warn("UtfUtil.decodeUtf8 err=" + JSON.stringify(t)), e = "";
                        }
                        return e;
                    }
                }, {
                    key: "sizeof",
                    value: function(t) {
                        for (var e = 0, n = 0; n < t.length; ++n) {
                            var i = t.charCodeAt(n);
                            if (i >= 55296 && i <= 56319 && n + 1 < t.length) {
                                var r = t.charCodeAt(n + 1);
                                if (r >= 56320 && r <= 57343) {
                                    ++n, e += 4;
                                    continue;
                                }
                            }
                            e += i <= 127 ? 1 : i <= 2047 ? 2 : 3;
                        }
                        return e;
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/utils/ZlibUtil.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/node-zlib.js"), o = r("./src/utils/utils.ts"), a = function() {
                function e() {
                    t(this, e);
                }
                return n(e, null, [ {
                    key: "decompress",
                    value: function(t) {
                        var e = s.inflateSync(t);
                        return o.default.isUint8Array(e) ? e : new Uint8Array(e);
                    }
                } ]), e;
            }();
            i.default = a;
        },
        "./src/utils/extend.ts": function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = Object.prototype.hasOwnProperty, s = Object.prototype.toString, o = function(t) {
                return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === s.call(t);
            }, a = function(t) {
                if (!t || "[object Object]" !== s.call(t)) return !1;
                var e = r.call(t, "constructor"), n = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
                if (t.constructor && !e && !n) return !1;
                var i = void 0;
                for (i in t) ;
                return void 0 === i || r.call(t, i);
            };
            e.default = function t() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                var s = void 0, u = void 0, l = void 0, h = void 0, p = void 0, f = void 0, d = arguments[0], c = 1, g = arguments.length, v = !1;
                for ("boolean" == typeof d && (v = d, d = arguments[1] || {}, c = 2), (null == d || "object" !== (void 0 === d ? "undefined" : i(d)) && "function" != typeof d) && (d = {}); c < g; ++c) if (null != (s = arguments[c])) for (u in s) l = d[u], 
                d !== (h = s[u]) && (v && h && (a(h) || (p = o(h))) ? (p ? (p = !1, f = l && o(l) ? l : []) : f = l && a(l) ? l : {}, 
                d[u] = t(v, f, h)) : void 0 !== h && (d[u] = h));
                return d;
            };
        },
        "./src/utils/globalvars.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/utils.ts"), o = function() {
                function e() {
                    t(this, e), this.isMiniProgram = !0, this.udbAppId = "yymwebh5", this.udbAppkey = "a8d7eef2", 
                    this.ticket = null, this.linkticket = null, this.cookie = null, this.uid = 0, this.yyid = 0, 
                    this.username = "", this.password = "", this.credit = "", this.topSid = 0, this.subSid = 0, 
                    this.tryTopSid = 0, this.trySubSid = 0, this.asid = 0, this.from = "", this.loginedUDB = !1, 
                    this.channelJoined = !1, this.lastSentJoinChl = 0, this.userType = 0, this.nick = "", 
                    this.channelInfo = null, this.channelUserCount = {}, this.initMicList(), this.userInfos = {}, 
                    this.bNeedOnlineChanUser = !1, this.thirdUdbAppId = "", this.miniAppId = "", this.uuid = s.default.getUUID("yy.com"), 
                    this.sysInfo = {}, this.everJoinChannel = !1, this.exclusiveJoin = !1, this.seqId = 0, 
                    this.seqContext = {}, this.appidSubs = [], this.appidUnsubs = [];
                }
                return n(e, [ {
                    key: "getSeqId",
                    value: function() {
                        return this.seqId += 1, this.seqId;
                    }
                }, {
                    key: "logout",
                    value: function() {
                        this.ticket = null, this.linkticket = null, this.cookie = null, this.uid = 0, this.yyid = 0, 
                        this.username = null, this.password = null, this.credit = null, this.topSid = 0, 
                        this.subSid = 0, this.tryTopSid = 0, this.trySubSid = 0, this.asid = 0, this.from = "", 
                        this.loginedUDB = !1, this.channelJoined = !1, this.lastSentJoinChl = 0, this.userType = 0, 
                        this.nick = "", this.channelInfo = null, this.channelUserCount = {}, this.initMicList(), 
                        this.userInfos = {}, this.appidSubs = [], this.appidUnsubs = [];
                    }
                }, {
                    key: "initMicList",
                    value: function() {
                        this.micList = {
                            micList: [],
                            linkedMicList: []
                        };
                    }
                } ]), e;
            }();
            i.default = o;
        },
        "./src/utils/logger.ts": function(t, e, n) {
            function i(t) {
                var e = void 0;
                switch (t.toString().length) {
                  case 1:
                    e = "00" + t;
                    break;

                  case 2:
                    e = "0" + t;
                    break;

                  default:
                    e = t;
                }
                return e;
            }
            function r() {
                var t = new Date();
                return "h5svc-yy " + t.toLocaleTimeString("en-US", {
                    hour12: !1
                }) + "." + i(t.getMilliseconds()) + ":";
            }
            function s(t, e) {
                t = t.split("."), e = e.split(".");
                for (var n = Math.max(t.length, e.length); t.length < n; ) t.push("0");
                for (;e.length < n; ) e.push("0");
                for (var i = 0; i < n; i++) {
                    var r = parseInt(t[i]), s = parseInt(e[i]);
                    if (r > s) return 1;
                    if (r < s) return -1;
                }
                return 0;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = 0, a = function() {
                if ("undefined" == typeof window && wx) {
                    var t = wx.getSystemInfoSync().SDKVersion;
                    if (s(t, "2.1.0") >= 0) return wx.getLogManager().log("I can use wx log. SDKVersion=" + t), 
                    !0;
                }
                return !1;
            }(), u = {
                _data: [],
                _length: 0,
                _visible: !1,
                debug: function(t) {
                    o <= -1 && (t = r() + t, u.record(t, "debug"), console.debug(t), a && wx.getLogManager().debug(t));
                },
                log: function(t) {
                    o <= 0 && (t = r() + t, u.record(t, "log"), console.log(t), a && wx.getLogManager().log(t));
                },
                info: function(t) {
                    o <= 1 && (t = r() + t, u.record(t, "info"), console.info(t), a && wx.getLogManager().info(t));
                },
                warn: function(t) {
                    o <= 2 && (t = r() + t, u.record(t, "warn"), console.warn(t), a && wx.getLogManager().warn(t));
                },
                error: function(t) {
                    o <= 3 && (t = r() + t, u.record(t, "error"), console.error(t), a && wx.getLogManager().warn(t));
                },
                setLevel: function(t) {
                    console.log(r() + "set level from " + o + " to " + t), o = t;
                },
                record: function(t, e) {
                    if (!a && (1100 === u._length && (u._data.splice(0, 100), u._length = 1e3), u._length++, 
                    u._data.push(t + " [" + e + "]"), u._visible)) {
                        var n = document.getElementById("__h5playerLogWin");
                        n.value += t + "\r\n", n.scrollTop = 1e4;
                    }
                },
                getLog: function() {
                    return u._data;
                },
                setLogVisible: function(t) {
                    u._visible = t;
                    var e = document.getElementById("__h5playerLogWin");
                    if (t) {
                        e || ((e = document.createElement("textarea")).id = "__h5playerLogWin", e.style.display = "block", 
                        e.style.position = "absolute", e.style.top = "0", e.style.width = "500px", e.style.height = "300px", 
                        document.body.appendChild(e));
                        for (var n = "", i = 0; i < u._length; i++) n += u._data[i] + "\r\n";
                        e.value = n, e.scrollTop = 1e4;
                    } else e && (e.style.display = "none");
                }
            };
            e.default = u;
        },
        "./src/utils/miniProgramAPI.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {
                    t(this, e);
                }
                return n(e, null, [ {
                    key: "getAPI",
                    value: function() {
                        return "undefined" != typeof wx ? wx : "undefined" != typeof swan ? swan : void 0;
                    }
                }, {
                    key: "getStorageSync",
                    value: function(t) {
                        return e.getAPI().getStorageSync(t);
                    }
                }, {
                    key: "getSystemInfoSync",
                    value: function() {
                        return e.getAPI().getSystemInfoSync();
                    }
                }, {
                    key: "setStorageSync",
                    value: function(t, n) {
                        e.getAPI().setStorageSync(t, n);
                    }
                } ]), e;
            }();
            i.default = s;
        },
        "./src/utils/node-zlib.js": function(t, e, n) {
            (function(t, n) {
                (function() {
                    function i(t) {
                        throw t;
                    }
                    function r(t, e) {
                        this.index = "number" == typeof e ? e : 0, this.m = 0, this.buffer = t instanceof (x ? Uint8Array : Array) ? t : new (x ? Uint8Array : Array)(32768), 
                        2 * this.buffer.length <= this.index && i(Error("invalid index")), this.buffer.length <= this.index && this.f();
                    }
                    function s(t, e, n) {
                        var i, r = "number" == typeof e ? e : e = 0, s = "number" == typeof n ? n : t.length;
                        for (i = -1, r = 7 & s; r--; ++e) i = i >>> 8 ^ j[255 & (i ^ t[e])];
                        for (r = s >> 3; r--; e += 8) i = (i = (i = (i = (i = (i = (i = (i = i >>> 8 ^ j[255 & (i ^ t[e])]) >>> 8 ^ j[255 & (i ^ t[e + 1])]) >>> 8 ^ j[255 & (i ^ t[e + 2])]) >>> 8 ^ j[255 & (i ^ t[e + 3])]) >>> 8 ^ j[255 & (i ^ t[e + 4])]) >>> 8 ^ j[255 & (i ^ t[e + 5])]) >>> 8 ^ j[255 & (i ^ t[e + 6])]) >>> 8 ^ j[255 & (i ^ t[e + 7])];
                        return (4294967295 ^ i) >>> 0;
                    }
                    function o() {}
                    function a(t) {
                        this.buffer = new (x ? Uint16Array : Array)(2 * t), this.length = 0;
                    }
                    function u(t) {
                        var e, n, i, r, s, o, a, u, l, h, p = t.length, f = 0, d = Number.POSITIVE_INFINITY;
                        for (u = 0; u < p; ++u) t[u] > f && (f = t[u]), t[u] < d && (d = t[u]);
                        for (e = 1 << f, n = new (x ? Uint32Array : Array)(e), i = 1, r = 0, s = 2; i <= f; ) {
                            for (u = 0; u < p; ++u) if (t[u] === i) {
                                for (o = 0, a = r, l = 0; l < i; ++l) o = o << 1 | 1 & a, a >>= 1;
                                for (h = i << 16 | u, l = o; l < e; l += s) n[l] = h;
                                ++r;
                            }
                            ++i, r <<= 1, s <<= 1;
                        }
                        return [ n, f, d ];
                    }
                    function l(t, e) {
                        this.k = q, this.F = 0, this.input = x && t instanceof Array ? new Uint8Array(t) : t, 
                        this.b = 0, e && (e.lazy && (this.F = e.lazy), "number" == typeof e.compressionType && (this.k = e.compressionType), 
                        e.outputBuffer && (this.a = x && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), 
                        "number" == typeof e.outputIndex && (this.b = e.outputIndex)), this.a || (this.a = new (x ? Uint8Array : Array)(32768));
                    }
                    function h(t, e) {
                        this.length = t, this.N = e;
                    }
                    function p(t, e) {
                        function n(t, e) {
                            var n, r = t.N, s = [], o = 0;
                            n = F[t.length], s[o++] = 65535 & n, s[o++] = n >> 16 & 255, s[o++] = n >> 24;
                            var a;
                            switch (M) {
                              case 1 === r:
                                a = [ 0, r - 1, 0 ];
                                break;

                              case 2 === r:
                                a = [ 1, r - 2, 0 ];
                                break;

                              case 3 === r:
                                a = [ 2, r - 3, 0 ];
                                break;

                              case 4 === r:
                                a = [ 3, r - 4, 0 ];
                                break;

                              case 6 >= r:
                                a = [ 4, r - 5, 1 ];
                                break;

                              case 8 >= r:
                                a = [ 5, r - 7, 1 ];
                                break;

                              case 12 >= r:
                                a = [ 6, r - 9, 2 ];
                                break;

                              case 16 >= r:
                                a = [ 7, r - 13, 2 ];
                                break;

                              case 24 >= r:
                                a = [ 8, r - 17, 3 ];
                                break;

                              case 32 >= r:
                                a = [ 9, r - 25, 3 ];
                                break;

                              case 48 >= r:
                                a = [ 10, r - 33, 4 ];
                                break;

                              case 64 >= r:
                                a = [ 11, r - 49, 4 ];
                                break;

                              case 96 >= r:
                                a = [ 12, r - 65, 5 ];
                                break;

                              case 128 >= r:
                                a = [ 13, r - 97, 5 ];
                                break;

                              case 192 >= r:
                                a = [ 14, r - 129, 6 ];
                                break;

                              case 256 >= r:
                                a = [ 15, r - 193, 6 ];
                                break;

                              case 384 >= r:
                                a = [ 16, r - 257, 7 ];
                                break;

                              case 512 >= r:
                                a = [ 17, r - 385, 7 ];
                                break;

                              case 768 >= r:
                                a = [ 18, r - 513, 8 ];
                                break;

                              case 1024 >= r:
                                a = [ 19, r - 769, 8 ];
                                break;

                              case 1536 >= r:
                                a = [ 20, r - 1025, 9 ];
                                break;

                              case 2048 >= r:
                                a = [ 21, r - 1537, 9 ];
                                break;

                              case 3072 >= r:
                                a = [ 22, r - 2049, 10 ];
                                break;

                              case 4096 >= r:
                                a = [ 23, r - 3073, 10 ];
                                break;

                              case 6144 >= r:
                                a = [ 24, r - 4097, 11 ];
                                break;

                              case 8192 >= r:
                                a = [ 25, r - 6145, 11 ];
                                break;

                              case 12288 >= r:
                                a = [ 26, r - 8193, 12 ];
                                break;

                              case 16384 >= r:
                                a = [ 27, r - 12289, 12 ];
                                break;

                              case 24576 >= r:
                                a = [ 28, r - 16385, 13 ];
                                break;

                              case 32768 >= r:
                                a = [ 29, r - 24577, 13 ];
                                break;

                              default:
                                i("invalid distance");
                            }
                            n = a, s[o++] = n[0], s[o++] = n[1], s[o++] = n[2];
                            var u, l;
                            for (u = 0, l = s.length; u < l; ++u) g[v++] = s[u];
                            b[s[0]]++, U[s[3]]++, y = t.length + e - 1, p = null;
                        }
                        var r, s, o, a, u, l, h, p, d, c = {}, g = x ? new Uint16Array(2 * e.length) : [], v = 0, y = 0, b = new (x ? Uint32Array : Array)(286), U = new (x ? Uint32Array : Array)(30), m = t.F;
                        if (!x) {
                            for (o = 0; 285 >= o; ) b[o++] = 0;
                            for (o = 0; 29 >= o; ) U[o++] = 0;
                        }
                        for (b[256] = 1, r = 0, s = e.length; r < s; ++r) {
                            for (o = u = 0, a = 3; o < a && r + o !== s; ++o) u = u << 8 | e[r + o];
                            if (c[u] === R && (c[u] = []), l = c[u], !(0 < y--)) {
                                for (;0 < l.length && 32768 < r - l[0]; ) l.shift();
                                if (r + 3 >= s) {
                                    for (p && n(p, -1), o = 0, a = s - r; o < a; ++o) d = e[r + o], g[v++] = d, ++b[d];
                                    break;
                                }
                                0 < l.length ? (h = f(e, r, l), p ? p.length < h.length ? (d = e[r - 1], g[v++] = d, 
                                ++b[d], n(h, 0)) : n(p, -1) : h.length < m ? p = h : n(h, 0)) : p ? n(p, -1) : (d = e[r], 
                                g[v++] = d, ++b[d]);
                            }
                            l.push(r);
                        }
                        return g[v++] = 256, b[256]++, t.U = b, t.T = U, x ? g.subarray(0, v) : g;
                    }
                    function f(t, e, n) {
                        var i, r, s, o, a, u, l = 0, p = t.length;
                        o = 0, u = n.length;
                        t: for (;o < u; o++) {
                            if (i = n[u - o - 1], s = 3, 3 < l) {
                                for (a = l; 3 < a; a--) if (t[i + a - 1] !== t[e + a - 1]) continue t;
                                s = l;
                            }
                            for (;258 > s && e + s < p && t[i + s] === t[e + s]; ) ++s;
                            if (s > l && (r = i, l = s), 258 === s) break;
                        }
                        return new h(l, e - r);
                    }
                    function d(t, e) {
                        var n, i, r, s, o, u = t.length, l = new a(572), h = new (x ? Uint8Array : Array)(u);
                        if (!x) for (s = 0; s < u; s++) h[s] = 0;
                        for (s = 0; s < u; ++s) 0 < t[s] && l.push(s, t[s]);
                        if (n = Array(l.length / 2), i = new (x ? Uint32Array : Array)(l.length / 2), 1 === n.length) return h[l.pop().index] = 1, 
                        h;
                        for (s = 0, o = l.length / 2; s < o; ++s) n[s] = l.pop(), i[s] = n[s].value;
                        for (r = c(i, i.length, e), s = 0, o = n.length; s < o; ++s) h[n[s].index] = r[s];
                        return h;
                    }
                    function c(t, e, n) {
                        function i(t) {
                            var n = d[t][c[t]];
                            n === e ? (i(t + 1), i(t + 1)) : --p[n], ++c[t];
                        }
                        var r, s, o, a, u, l = new (x ? Uint16Array : Array)(n), h = new (x ? Uint8Array : Array)(n), p = new (x ? Uint8Array : Array)(e), f = Array(n), d = Array(n), c = Array(n), g = (1 << n) - e, v = 1 << n - 1;
                        for (l[n - 1] = e, s = 0; s < n; ++s) g < v ? h[s] = 0 : (h[s] = 1, g -= v), g <<= 1, 
                        l[n - 2 - s] = (l[n - 1 - s] / 2 | 0) + e;
                        for (l[0] = h[0], f[0] = Array(l[0]), d[0] = Array(l[0]), s = 1; s < n; ++s) l[s] > 2 * l[s - 1] + h[s] && (l[s] = 2 * l[s - 1] + h[s]), 
                        f[s] = Array(l[s]), d[s] = Array(l[s]);
                        for (r = 0; r < e; ++r) p[r] = n;
                        for (o = 0; o < l[n - 1]; ++o) f[n - 1][o] = t[o], d[n - 1][o] = o;
                        for (r = 0; r < n; ++r) c[r] = 0;
                        for (1 === h[n - 1] && (--p[0], ++c[n - 1]), s = n - 2; 0 <= s; --s) {
                            for (a = r = 0, u = c[s + 1], o = 0; o < l[s]; o++) (a = f[s + 1][u] + f[s + 1][u + 1]) > t[r] ? (f[s][o] = a, 
                            d[s][o] = e, u += 2) : (f[s][o] = t[r], d[s][o] = r, ++r);
                            c[s] = 0, 1 === h[s] && i(s);
                        }
                        return p;
                    }
                    function g(t) {
                        var e, n, i, r, s = new (x ? Uint16Array : Array)(t.length), o = [], a = [], u = 0;
                        for (e = 0, n = t.length; e < n; e++) o[t[e]] = 1 + (0 | o[t[e]]);
                        for (e = 1, n = 16; e <= n; e++) a[e] = u, u += 0 | o[e], u <<= 1;
                        for (e = 0, n = t.length; e < n; e++) for (u = a[t[e]], a[t[e]] += 1, i = s[e] = 0, 
                        r = t[e]; i < r; i++) s[e] = s[e] << 1 | 1 & u, u >>>= 1;
                        return s;
                    }
                    function v(t, e) {
                        this.input = t, this.b = this.c = 0, this.g = {}, e && (e.flags && (this.g = e.flags), 
                        "string" == typeof e.filename && (this.filename = e.filename), "string" == typeof e.comment && (this.w = e.comment), 
                        e.deflateOptions && (this.l = e.deflateOptions)), this.l || (this.l = {});
                    }
                    function y(t, e) {
                        switch (this.o = [], this.p = 32768, this.e = this.j = this.c = this.s = 0, this.input = x ? new Uint8Array(t) : t, 
                        this.u = !1, this.q = Q, this.K = !1, !e && (e = {}) || (e.index && (this.c = e.index), 
                        e.bufferSize && (this.p = e.bufferSize), e.bufferType && (this.q = e.bufferType), 
                        e.resize && (this.K = e.resize)), this.q) {
                          case Z:
                            this.b = 32768, this.a = new (x ? Uint8Array : Array)(32768 + this.p + 258);
                            break;

                          case Q:
                            this.b = 0, this.a = new (x ? Uint8Array : Array)(this.p), this.f = this.S, this.z = this.O, 
                            this.r = this.Q;
                            break;

                          default:
                            i(Error("invalid inflate mode"));
                        }
                    }
                    function b(t, e) {
                        for (var n, r = t.j, s = t.e, o = t.input, a = t.c, u = o.length; s < e; ) a >= u && i(Error("input buffer is broken")), 
                        r |= o[a++] << s, s += 8;
                        return n = r & (1 << e) - 1, t.j = r >>> e, t.e = s - e, t.c = a, n;
                    }
                    function U(t, e) {
                        for (var n, r, s = t.j, o = t.e, a = t.input, u = t.c, l = a.length, h = e[0], p = e[1]; o < p && !(u >= l); ) s |= a[u++] << o, 
                        o += 8;
                        return n = h[s & (1 << p) - 1], (r = n >>> 16) > o && i(Error("invalid code length: " + r)), 
                        t.j = s >> r, t.e = o - r, t.c = u, 65535 & n;
                    }
                    function m(t) {
                        this.input = t, this.c = 0, this.G = [], this.R = !1;
                    }
                    function I(t) {
                        if ("string" == typeof t) {
                            var e, n, i = t.split("");
                            for (e = 0, n = i.length; e < n; e++) i[e] = (255 & i[e].charCodeAt(0)) >>> 0;
                            t = i;
                        }
                        for (var r, s = 1, o = 0, a = t.length, u = 0; 0 < a; ) {
                            a -= r = 1024 < a ? 1024 : a;
                            do {
                                o += s += t[u++];
                            } while (--r);
                            s %= 65521, o %= 65521;
                        }
                        return (o << 16 | s) >>> 0;
                    }
                    function w(t, e) {
                        var n, r;
                        switch (this.input = t, this.c = 0, !e && (e = {}) || (e.index && (this.c = e.index), 
                        e.verify && (this.V = e.verify)), n = t[this.c++], r = t[this.c++], 15 & n) {
                          case vt:
                            this.method = vt;
                            break;

                          default:
                            i(Error("unsupported compression method"));
                        }
                        0 != ((n << 8) + r) % 31 && i(Error("invalid fcheck flag:" + ((n << 8) + r) % 31)), 
                        32 & r && i(Error("fdict flag is not supported")), this.J = new y(t, {
                            index: this.c,
                            bufferSize: e.bufferSize,
                            bufferType: e.bufferType,
                            resize: e.resize
                        });
                    }
                    function S(t, e) {
                        this.input = t, this.a = new (x ? Uint8Array : Array)(32768), this.k = yt.t;
                        var n, i = {};
                        !e && (e = {}) || "number" != typeof e.compressionType || (this.k = e.compressionType);
                        for (n in e) i[n] = e[n];
                        i.outputBuffer = this.a, this.I = new l(this.input, i);
                    }
                    function C(t, e) {
                        var n;
                        return n = new S(t).h(), e || (e = {}), e.H ? n : A(n);
                    }
                    function k(t, e) {
                        var n;
                        return t.subarray = t.slice, n = new w(t).i(), e || (e = {}), e.noBuffer ? n : A(n);
                    }
                    function _(t, e) {
                        var n;
                        return t.subarray = t.slice, n = new v(t).h(), e || (e = {}), e.H ? n : A(n);
                    }
                    function P(t, e) {
                        var n;
                        return t.subarray = t.slice, n = new m(t).i(), e || (e = {}), e.H ? n : A(n);
                    }
                    function A(t) {
                        var e, i, r = new n(t.length);
                        for (e = 0, i = t.length; e < i; ++e) r[e] = t[e];
                        return r;
                    }
                    var R = void 0, M = !0, x = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
                    r.prototype.f = function() {
                        var t, e = this.buffer, n = e.length, i = new (x ? Uint8Array : Array)(n << 1);
                        if (x) i.set(e); else for (t = 0; t < n; ++t) i[t] = e[t];
                        return this.buffer = i;
                    }, r.prototype.d = function(t, e, n) {
                        var i, r = this.buffer, s = this.index, o = this.m, a = r[s];
                        if (n && 1 < e && (t = 8 < e ? (B[255 & t] << 24 | B[t >>> 8 & 255] << 16 | B[t >>> 16 & 255] << 8 | B[t >>> 24 & 255]) >> 32 - e : B[t] >> 8 - e), 
                        8 > e + o) a = a << e | t, o += e; else for (i = 0; i < e; ++i) a = a << 1 | t >> e - i - 1 & 1, 
                        8 == ++o && (o = 0, r[s++] = B[a], a = 0, s === r.length && (r = this.f()));
                        r[s] = a, this.buffer = r, this.m = o, this.index = s;
                    }, r.prototype.finish = function() {
                        var t, e = this.buffer, n = this.index;
                        return 0 < this.m && (e[n] <<= 8 - this.m, e[n] = B[e[n]], n++), x ? t = e.subarray(0, n) : (e.length = n, 
                        t = e), t;
                    };
                    var L, H = new (x ? Uint8Array : Array)(256);
                    for (L = 0; 256 > L; ++L) {
                        for (var T = E = L, O = 7, E = E >>> 1; E; E >>>= 1) T <<= 1, T |= 1 & E, --O;
                        H[L] = (T << O & 255) >>> 0;
                    }
                    var B = H, D = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ], j = x ? new Uint32Array(D) : D;
                    a.prototype.getParent = function(t) {
                        return 2 * ((t - 2) / 4 | 0);
                    }, a.prototype.push = function(t, e) {
                        var n, i, r, s = this.buffer;
                        for (n = this.length, s[this.length++] = e, s[this.length++] = t; 0 < n && (i = this.getParent(n), 
                        s[n] > s[i]); ) r = s[n], s[n] = s[i], s[i] = r, r = s[n + 1], s[n + 1] = s[i + 1], 
                        s[i + 1] = r, n = i;
                        return this.length;
                    }, a.prototype.pop = function() {
                        var t, e, n, i, r, s = this.buffer;
                        for (e = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], 
                        r = 0; !((i = 2 * r + 2) >= this.length) && (i + 2 < this.length && s[i + 2] > s[i] && (i += 2), 
                        s[i] > s[r]); ) n = s[r], s[r] = s[i], s[i] = n, n = s[r + 1], s[r + 1] = s[i + 1], 
                        s[i + 1] = n, r = i;
                        return {
                            index: t,
                            value: e,
                            length: this.length
                        };
                    };
                    var N, q = 2, J = {
                        NONE: 0,
                        L: 1,
                        t: q,
                        X: 3
                    }, G = [];
                    for (N = 0; 288 > N; N++) switch (M) {
                      case 143 >= N:
                        G.push([ N + 48, 8 ]);
                        break;

                      case 255 >= N:
                        G.push([ N - 144 + 400, 9 ]);
                        break;

                      case 279 >= N:
                        G.push([ N - 256 + 0, 7 ]);
                        break;

                      case 287 >= N:
                        G.push([ N - 280 + 192, 8 ]);
                        break;

                      default:
                        i("invalid literal: " + N);
                    }
                    l.prototype.h = function() {
                        var t, e, n, s, o = this.input;
                        switch (this.k) {
                          case 0:
                            for (n = 0, s = o.length; n < s; ) {
                                var a = e = x ? o.subarray(n, n + 65535) : o.slice(n, n + 65535), u = (n += e.length) === s, l = R, h = R, f = R, c = R, v = R, y = this.a, b = this.b;
                                if (x) {
                                    for (y = new Uint8Array(this.a.buffer); y.length <= b + a.length + 5; ) y = new Uint8Array(y.length << 1);
                                    y.set(this.a);
                                }
                                if (l = u ? 1 : 0, y[b++] = 0 | l, h = a.length, f = 65536 + ~h & 65535, y[b++] = 255 & h, 
                                y[b++] = h >>> 8 & 255, y[b++] = 255 & f, y[b++] = f >>> 8 & 255, x) y.set(a, b), 
                                b += a.length, y = y.subarray(0, b); else {
                                    for (c = 0, v = a.length; c < v; ++c) y[b++] = a[c];
                                    y.length = b;
                                }
                                this.b = b, this.a = y;
                            }
                            break;

                          case 1:
                            var U = new r(x ? new Uint8Array(this.a.buffer) : this.a, this.b);
                            U.d(1, 1, M), U.d(1, 2, M);
                            var m, I, w, S = p(this, o);
                            for (m = 0, I = S.length; m < I; m++) if (w = S[m], r.prototype.d.apply(U, G[w]), 
                            256 < w) U.d(S[++m], S[++m], M), U.d(S[++m], 5), U.d(S[++m], S[++m], M); else if (256 === w) break;
                            this.a = U.finish(), this.b = this.a.length;
                            break;

                          case q:
                            var C, k, _, P, A, L, H, T, O, E, B, D, j, N, J, V = new r(x ? new Uint8Array(this.a.buffer) : this.a, this.b), F = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], Y = Array(19);
                            for (C = q, V.d(1, 1, M), V.d(C, 2, M), k = p(this, o), H = g(L = d(this.U, 15)), 
                            O = g(T = d(this.T, 7)), _ = 286; 257 < _ && 0 === L[_ - 1]; _--) ;
                            for (P = 30; 1 < P && 0 === T[P - 1]; P--) ;
                            var W, z, K, Z, Q, X, $ = _, tt = P, et = new (x ? Uint32Array : Array)($ + tt), nt = new (x ? Uint32Array : Array)(316), it = new (x ? Uint8Array : Array)(19);
                            for (W = z = 0; W < $; W++) et[z++] = L[W];
                            for (W = 0; W < tt; W++) et[z++] = T[W];
                            if (!x) for (W = 0, Z = it.length; W < Z; ++W) it[W] = 0;
                            for (W = Q = 0, Z = et.length; W < Z; W += z) {
                                for (z = 1; W + z < Z && et[W + z] === et[W]; ++z) ;
                                if (K = z, 0 === et[W]) if (3 > K) for (;0 < K--; ) nt[Q++] = 0, it[0]++; else for (;0 < K; ) (X = 138 > K ? K : 138) > K - 3 && X < K && (X = K - 3), 
                                10 >= X ? (nt[Q++] = 17, nt[Q++] = X - 3, it[17]++) : (nt[Q++] = 18, nt[Q++] = X - 11, 
                                it[18]++), K -= X; else if (nt[Q++] = et[W], it[et[W]]++, 3 > --K) for (;0 < K--; ) nt[Q++] = et[W], 
                                it[et[W]]++; else for (;0 < K; ) (X = 6 > K ? K : 6) > K - 3 && X < K && (X = K - 3), 
                                nt[Q++] = 16, nt[Q++] = X - 3, it[16]++, K -= X;
                            }
                            for (t = x ? nt.subarray(0, Q) : nt.slice(0, Q), E = d(it, 7), N = 0; 19 > N; N++) Y[N] = E[F[N]];
                            for (A = 19; 4 < A && 0 === Y[A - 1]; A--) ;
                            for (B = g(E), V.d(_ - 257, 5, M), V.d(P - 1, 5, M), V.d(A - 4, 4, M), N = 0; N < A; N++) V.d(Y[N], 3, M);
                            for (N = 0, J = t.length; N < J; N++) if (D = t[N], V.d(B[D], E[D], M), 16 <= D) {
                                switch (N++, D) {
                                  case 16:
                                    j = 2;
                                    break;

                                  case 17:
                                    j = 3;
                                    break;

                                  case 18:
                                    j = 7;
                                    break;

                                  default:
                                    i("invalid code: " + D);
                                }
                                V.d(t[N], j, M);
                            }
                            var rt, st, ot, at, ut, lt, ht, pt, ft = [ H, L ], dt = [ O, T ];
                            for (ut = ft[0], lt = ft[1], ht = dt[0], pt = dt[1], rt = 0, st = k.length; rt < st; ++rt) if (ot = k[rt], 
                            V.d(ut[ot], lt[ot], M), 256 < ot) V.d(k[++rt], k[++rt], M), at = k[++rt], V.d(ht[at], pt[at], M), 
                            V.d(k[++rt], k[++rt], M); else if (256 === ot) break;
                            this.a = V.finish(), this.b = this.a.length;
                            break;

                          default:
                            i("invalid compression type");
                        }
                        return this.a;
                    };
                    var V = function() {
                        var t, e, n = [];
                        for (t = 3; 258 >= t; t++) e = function(t) {
                            switch (M) {
                              case 3 === t:
                                return [ 257, t - 3, 0 ];

                              case 4 === t:
                                return [ 258, t - 4, 0 ];

                              case 5 === t:
                                return [ 259, t - 5, 0 ];

                              case 6 === t:
                                return [ 260, t - 6, 0 ];

                              case 7 === t:
                                return [ 261, t - 7, 0 ];

                              case 8 === t:
                                return [ 262, t - 8, 0 ];

                              case 9 === t:
                                return [ 263, t - 9, 0 ];

                              case 10 === t:
                                return [ 264, t - 10, 0 ];

                              case 12 >= t:
                                return [ 265, t - 11, 1 ];

                              case 14 >= t:
                                return [ 266, t - 13, 1 ];

                              case 16 >= t:
                                return [ 267, t - 15, 1 ];

                              case 18 >= t:
                                return [ 268, t - 17, 1 ];

                              case 22 >= t:
                                return [ 269, t - 19, 2 ];

                              case 26 >= t:
                                return [ 270, t - 23, 2 ];

                              case 30 >= t:
                                return [ 271, t - 27, 2 ];

                              case 34 >= t:
                                return [ 272, t - 31, 2 ];

                              case 42 >= t:
                                return [ 273, t - 35, 3 ];

                              case 50 >= t:
                                return [ 274, t - 43, 3 ];

                              case 58 >= t:
                                return [ 275, t - 51, 3 ];

                              case 66 >= t:
                                return [ 276, t - 59, 3 ];

                              case 82 >= t:
                                return [ 277, t - 67, 4 ];

                              case 98 >= t:
                                return [ 278, t - 83, 4 ];

                              case 114 >= t:
                                return [ 279, t - 99, 4 ];

                              case 130 >= t:
                                return [ 280, t - 115, 4 ];

                              case 162 >= t:
                                return [ 281, t - 131, 5 ];

                              case 194 >= t:
                                return [ 282, t - 163, 5 ];

                              case 226 >= t:
                                return [ 283, t - 195, 5 ];

                              case 257 >= t:
                                return [ 284, t - 227, 5 ];

                              case 258 === t:
                                return [ 285, t - 258, 0 ];

                              default:
                                i("invalid length: " + t);
                            }
                        }(t), n[t] = e[2] << 24 | e[1] << 16 | e[0];
                        return n;
                    }(), F = x ? new Uint32Array(V) : V;
                    v.prototype.h = function() {
                        var t, e, n, i, r, o, a, u, h = new (x ? Uint8Array : Array)(32768), p = 0, f = this.input, d = this.c, c = this.filename, g = this.w;
                        if (h[p++] = 31, h[p++] = 139, h[p++] = 8, t = 0, this.g.fname && (t |= z), this.g.fcomment && (t |= K), 
                        this.g.fhcrc && (t |= W), h[p++] = t, e = (Date.now ? Date.now() : +new Date()) / 1e3 | 0, 
                        h[p++] = 255 & e, h[p++] = e >>> 8 & 255, h[p++] = e >>> 16 & 255, h[p++] = e >>> 24 & 255, 
                        h[p++] = 0, h[p++] = Y, this.g.fname !== R) {
                            for (a = 0, u = c.length; a < u; ++a) 255 < (o = c.charCodeAt(a)) && (h[p++] = o >>> 8 & 255), 
                            h[p++] = 255 & o;
                            h[p++] = 0;
                        }
                        if (this.g.comment) {
                            for (a = 0, u = g.length; a < u; ++a) 255 < (o = g.charCodeAt(a)) && (h[p++] = o >>> 8 & 255), 
                            h[p++] = 255 & o;
                            h[p++] = 0;
                        }
                        return this.g.fhcrc && (n = 65535 & s(h, 0, p), h[p++] = 255 & n, h[p++] = n >>> 8 & 255), 
                        this.l.outputBuffer = h, this.l.outputIndex = p, r = new l(f, this.l), h = r.h(), 
                        p = r.b, x && (p + 8 > h.buffer.byteLength ? (this.a = new Uint8Array(p + 8), this.a.set(new Uint8Array(h.buffer)), 
                        h = this.a) : h = new Uint8Array(h.buffer)), i = s(f, R, R), h[p++] = 255 & i, h[p++] = i >>> 8 & 255, 
                        h[p++] = i >>> 16 & 255, h[p++] = i >>> 24 & 255, u = f.length, h[p++] = 255 & u, 
                        h[p++] = u >>> 8 & 255, h[p++] = u >>> 16 & 255, h[p++] = u >>> 24 & 255, this.c = d, 
                        x && p < h.length && (this.a = h = h.subarray(0, p)), h;
                    };
                    var Y = 255, W = 2, z = 8, K = 16, Z = 0, Q = 1;
                    y.prototype.i = function() {
                        for (;!this.u; ) {
                            var t = b(this, 3);
                            switch (1 & t && (this.u = M), t >>>= 1) {
                              case 0:
                                var e = this.input, n = this.c, r = this.a, s = this.b, o = e.length, a = R, l = R, h = r.length, p = R;
                                switch (this.e = this.j = 0, n + 1 >= o && i(Error("invalid uncompressed block header: LEN")), 
                                a = e[n++] | e[n++] << 8, n + 1 >= o && i(Error("invalid uncompressed block header: NLEN")), 
                                l = e[n++] | e[n++] << 8, a === ~l && i(Error("invalid uncompressed block header: length verify")), 
                                n + a > e.length && i(Error("input buffer is broken")), this.q) {
                                  case Z:
                                    for (;s + a > r.length; ) {
                                        if (p = h - s, a -= p, x) r.set(e.subarray(n, n + p), s), s += p, n += p; else for (;p--; ) r[s++] = e[n++];
                                        this.b = s, r = this.f(), s = this.b;
                                    }
                                    break;

                                  case Q:
                                    for (;s + a > r.length; ) r = this.f({
                                        B: 2
                                    });
                                    break;

                                  default:
                                    i(Error("invalid inflate mode"));
                                }
                                if (x) r.set(e.subarray(n, n + a), s), s += a, n += a; else for (;a--; ) r[s++] = e[n++];
                                this.c = n, this.b = s, this.a = r;
                                break;

                              case 1:
                                this.r(dt, gt);
                                break;

                              case 2:
                                for (var f = b(this, 5) + 257, d = b(this, 5) + 1, c = b(this, 4) + 4, g = new (x ? Uint8Array : Array)(et.length), v = R, y = R, m = R, I = R, w = R, S = R, C = R, k = R, _ = R, k = 0; k < c; ++k) g[et[k]] = b(this, 3);
                                if (!x) for (k = c, c = g.length; k < c; ++k) g[et[k]] = 0;
                                for (v = u(g), I = new (x ? Uint8Array : Array)(f + d), k = 0, _ = f + d; k < _; ) switch (w = U(this, v)) {
                                  case 16:
                                    for (C = 3 + b(this, 2); C--; ) I[k++] = S;
                                    break;

                                  case 17:
                                    for (C = 3 + b(this, 3); C--; ) I[k++] = 0;
                                    S = 0;
                                    break;

                                  case 18:
                                    for (C = 11 + b(this, 7); C--; ) I[k++] = 0;
                                    S = 0;
                                    break;

                                  default:
                                    S = I[k++] = w;
                                }
                                y = u(x ? I.subarray(0, f) : I.slice(0, f)), m = u(x ? I.subarray(f) : I.slice(f)), 
                                this.r(y, m);
                                break;

                              default:
                                i(Error("unknown BTYPE: " + t));
                            }
                        }
                        return this.z();
                    };
                    var X, $, tt = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], et = x ? new Uint16Array(tt) : tt, nt = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258 ], it = x ? new Uint16Array(nt) : nt, rt = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0 ], st = x ? new Uint8Array(rt) : rt, ot = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ], at = x ? new Uint16Array(ot) : ot, ut = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], lt = x ? new Uint8Array(ut) : ut, ht = new (x ? Uint8Array : Array)(288);
                    for (X = 0, $ = ht.length; X < $; ++X) ht[X] = 143 >= X ? 8 : 255 >= X ? 9 : 279 >= X ? 7 : 8;
                    var pt, ft, dt = u(ht), ct = new (x ? Uint8Array : Array)(30);
                    for (pt = 0, ft = ct.length; pt < ft; ++pt) ct[pt] = 5;
                    var gt = u(ct);
                    y.prototype.r = function(t, e) {
                        var n = this.a, i = this.b;
                        this.A = t;
                        for (var r, s, o, a, u = n.length - 258; 256 !== (r = U(this, t)); ) if (256 > r) i >= u && (this.b = i, 
                        n = this.f(), i = this.b), n[i++] = r; else for (a = it[s = r - 257], 0 < st[s] && (a += b(this, st[s])), 
                        r = U(this, e), o = at[r], 0 < lt[r] && (o += b(this, lt[r])), i >= u && (this.b = i, 
                        n = this.f(), i = this.b); a--; ) n[i] = n[i++ - o];
                        for (;8 <= this.e; ) this.e -= 8, this.c--;
                        this.b = i;
                    }, y.prototype.Q = function(t, e) {
                        var n = this.a, i = this.b;
                        this.A = t;
                        for (var r, s, o, a, u = n.length; 256 !== (r = U(this, t)); ) if (256 > r) i >= u && (n = this.f(), 
                        u = n.length), n[i++] = r; else for (a = it[s = r - 257], 0 < st[s] && (a += b(this, st[s])), 
                        r = U(this, e), o = at[r], 0 < lt[r] && (o += b(this, lt[r])), i + a > u && (n = this.f(), 
                        u = n.length); a--; ) n[i] = n[i++ - o];
                        for (;8 <= this.e; ) this.e -= 8, this.c--;
                        this.b = i;
                    }, y.prototype.f = function() {
                        var t, e, n = new (x ? Uint8Array : Array)(this.b - 32768), i = this.b - 32768, r = this.a;
                        if (x) n.set(r.subarray(32768, n.length)); else for (t = 0, e = n.length; t < e; ++t) n[t] = r[t + 32768];
                        if (this.o.push(n), this.s += n.length, x) r.set(r.subarray(i, i + 32768)); else for (t = 0; 32768 > t; ++t) r[t] = r[i + t];
                        return this.b = 32768, r;
                    }, y.prototype.S = function(t) {
                        var e, n, i, r, s = this.input.length / this.c + 1 | 0, o = this.input, a = this.a;
                        return t && ("number" == typeof t.B && (s = t.B), "number" == typeof t.M && (s += t.M)), 
                        2 > s ? (n = (o.length - this.c) / this.A[2], r = n / 2 * 258 | 0, i = r < a.length ? a.length + r : a.length << 1) : i = a.length * s, 
                        x ? (e = new Uint8Array(i)).set(a) : e = a, this.a = e;
                    }, y.prototype.z = function() {
                        var t, e, n, i, r, s = 0, o = this.a, a = this.o, u = new (x ? Uint8Array : Array)(this.s + (this.b - 32768));
                        if (0 === a.length) return x ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
                        for (e = 0, n = a.length; e < n; ++e) for (i = 0, r = (t = a[e]).length; i < r; ++i) u[s++] = t[i];
                        for (e = 32768, n = this.b; e < n; ++e) u[s++] = o[e];
                        return this.o = [], this.buffer = u;
                    }, y.prototype.O = function() {
                        var t, e = this.b;
                        return x ? this.K ? (t = new Uint8Array(e)).set(this.a.subarray(0, e)) : t = this.a.subarray(0, e) : (this.a.length > e && (this.a.length = e), 
                        t = this.a), this.buffer = t;
                    }, m.prototype.i = function() {
                        for (var t = this.input.length; this.c < t; ) {
                            var e = new o(), n = R, r = R, a = R, u = R, l = R, h = R, p = R, f = R, d = R, c = this.input, g = this.c;
                            switch (e.C = c[g++], e.D = c[g++], (31 !== e.C || 139 !== e.D) && i(Error("invalid file signature:" + e.C + "," + e.D)), 
                            e.v = c[g++], e.v) {
                              case 8:
                                break;

                              default:
                                i(Error("unknown compression method: " + e.v));
                            }
                            if (e.n = c[g++], f = c[g++] | c[g++] << 8 | c[g++] << 16 | c[g++] << 24, e.$ = new Date(1e3 * f), 
                            e.ba = c[g++], e.aa = c[g++], 0 < (4 & e.n) && (e.W = c[g++] | c[g++] << 8, g += e.W), 
                            0 < (e.n & z)) {
                                for (p = [], h = 0; 0 < (l = c[g++]); ) p[h++] = String.fromCharCode(l);
                                e.name = p.join("");
                            }
                            if (0 < (e.n & K)) {
                                for (p = [], h = 0; 0 < (l = c[g++]); ) p[h++] = String.fromCharCode(l);
                                e.w = p.join("");
                            }
                            0 < (e.n & W) && (e.P = 65535 & s(c, 0, g), e.P !== (c[g++] | c[g++] << 8) && i(Error("invalid header crc16"))), 
                            n = c[c.length - 4] | c[c.length - 3] << 8 | c[c.length - 2] << 16 | c[c.length - 1] << 24, 
                            c.length - g - 4 - 4 < 512 * n && (u = n), r = new y(c, {
                                index: g,
                                bufferSize: u
                            }), e.data = a = r.i(), g = r.c, e.Y = d = (c[g++] | c[g++] << 8 | c[g++] << 16 | c[g++] << 24) >>> 0, 
                            s(a, R, R) !== d && i(Error("invalid CRC-32 checksum: 0x" + s(a, R, R).toString(16) + " / 0x" + d.toString(16))), 
                            e.Z = n = (c[g++] | c[g++] << 8 | c[g++] << 16 | c[g++] << 24) >>> 0, (4294967295 & a.length) !== n && i(Error("invalid input size: " + (4294967295 & a.length) + " / " + n)), 
                            this.G.push(e), this.c = g;
                        }
                        this.R = M;
                        var v, b, U, m = this.G, I = 0, w = 0;
                        for (v = 0, b = m.length; v < b; ++v) w += m[v].data.length;
                        if (x) for (U = new Uint8Array(w), v = 0; v < b; ++v) U.set(m[v].data, I), I += m[v].data.length; else {
                            for (U = [], v = 0; v < b; ++v) U[v] = m[v].data;
                            U = Array.prototype.concat.apply([], U);
                        }
                        return U;
                    }, w.prototype.i = function() {
                        var t, e = this.input;
                        return t = this.J.i(), this.c = this.J.c, this.V && (e[this.c++] << 24 | e[this.c++] << 16 | e[this.c++] << 8 | e[this.c++]) >>> 0 !== I(t) && i(Error("invalid adler-32 checksum")), 
                        t;
                    };
                    var vt = 8, yt = J;
                    S.prototype.h = function() {
                        var t, e, n, r, s, o, a, u = 0;
                        switch (a = this.a, t = vt) {
                          case vt:
                            e = Math.LOG2E * Math.log(32768) - 8;
                            break;

                          default:
                            i(Error("invalid compression method"));
                        }
                        switch (n = e << 4 | t, a[u++] = n, t) {
                          case vt:
                            switch (this.k) {
                              case yt.NONE:
                                s = 0;
                                break;

                              case yt.L:
                                s = 1;
                                break;

                              case yt.t:
                                s = 2;
                                break;

                              default:
                                i(Error("unsupported compression type"));
                            }
                            break;

                          default:
                            i(Error("invalid compression method"));
                        }
                        return r = s << 6 | 0, a[u++] = r | 31 - (256 * n + r) % 31, o = I(this.input), 
                        this.I.b = u, a = this.I.h(), u = a.length, x && ((a = new Uint8Array(a.buffer)).length <= u + 4 && (this.a = new Uint8Array(a.length + 4), 
                        this.a.set(a), a = this.a), a = a.subarray(0, u + 4)), a[u++] = o >> 24 & 255, a[u++] = o >> 16 & 255, 
                        a[u++] = o >> 8 & 255, a[u++] = 255 & o, a;
                    }, e.deflate = function(e, n, i) {
                        t.nextTick(function() {
                            var t, r;
                            try {
                                r = C(e, i);
                            } catch (e) {
                                t = e;
                            }
                            n(t, r);
                        });
                    }, e.deflateSync = C, e.inflate = function(e, n, i) {
                        t.nextTick(function() {
                            var t, r;
                            try {
                                r = k(e, i);
                            } catch (e) {
                                t = e;
                            }
                            n(t, r);
                        });
                    }, e.inflateSync = k, e.gzip = function(e, n, i) {
                        t.nextTick(function() {
                            var t, r;
                            try {
                                r = _(e, i);
                            } catch (e) {
                                t = e;
                            }
                            n(t, r);
                        });
                    }, e.gzipSync = _, e.gunzip = function(e, n, i) {
                        t.nextTick(function() {
                            var t, r;
                            try {
                                r = P(e, i);
                            } catch (e) {
                                t = e;
                            }
                            n(t, r);
                        });
                    }, e.gunzipSync = P;
                }).call(this);
            }).call(this, n("./node_modules/process/browser.js"), n("./node_modules/buffer/index.js").Buffer);
        },
        "./src/utils/timeUtil.ts": function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = 0, r = {
                now: function() {
                    0 === i && (i = Date.now() - 1);
                    var t = Date.now() - i;
                    return t > 4294967295 ? (i += 4294967295, Date.now() - i) : t;
                },
                utc: function() {
                    return Math.round(Date.now() / 1e3);
                }
            };
            e.default = r;
        },
        "./src/utils/udb.ts": function(e, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = r("./src/utils/utils.ts"), o = r("./src/utils/logger.ts"), a = r("./src/utils/miniProgramAPI.ts"), u = function() {
                function e() {
                    t(this, e);
                }
                return n(e, null, [ {
                    key: "preBind",
                    value: function(t) {}
                }, {
                    key: "bindWxPhoneNum",
                    value: function(t, e, n, i) {
                        var r = n.detail.encryptedData, a = n.detail.iv;
                        if (!r || !a) return o.default.error("Udb.bindWxPhoneNum wx.getPhoneNumber error:" + n.detail.errMsg), 
                        void (i && i({
                            code: 9,
                            msg: n.detail.errMsg
                        }));
                        var u = void 0, l = void 0, h = void 0;
                        s.default.miniProgramPromise("getSetting", {}).then(function(n) {
                            if (n.authSetting["scope.userInfo"]) {
                                var p = s.default.miniProgramPromise("login", {}), f = s.default.miniProgramPromise("getUserInfo", {
                                    withCredentials: !0
                                });
                                return Promise.all([ p, f ]).then(function(n) {
                                    var p = !0, f = !1, d = void 0;
                                    try {
                                        for (var c, g = n[Symbol.iterator](); !(p = (c = g.next()).done); p = !0) {
                                            var v = c.value;
                                            v.code && (u = v.code), (v.encryptedData || v.data) && (l = v.encryptedData || v.data), 
                                            v.iv && (h = v.iv);
                                        }
                                    } catch (t) {
                                        f = !0, d = t;
                                    } finally {
                                        try {
                                            !p && g.return && g.return();
                                        } finally {
                                            if (f) throw d;
                                        }
                                    }
                                    var y = {
                                        reqid: Math.floor(1e8 * Math.random()).toString(),
                                        lgnappid: "yymwebh5",
                                        appid: t,
                                        wxappid: e,
                                        jscode: u,
                                        jsdata: l,
                                        jsiv: h,
                                        mbdata: r,
                                        mbiv: a
                                    };
                                    o.default.log("Udb.bindWxPhoneNum data=" + JSON.stringify(y)), s.default.yFetch({
                                        url: "https://thirdlogin.yy.com/open/wx/mobile.do",
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        data: y
                                    }).then(function(t) {
                                        var e = t.data;
                                        !e || 0 != e.code && 1 != e.code ? (o.default.error("Udb.bindWxPhoneNum udb bind phone number error:" + JSON.stringify(t)), 
                                        i && i({
                                            code: e.code,
                                            msg: t.errMsg
                                        })) : (o.default.log("Udb.bindWxPhoneNum udb bind phone number success:" + JSON.stringify(t)), 
                                        i && i({
                                            code: 0,
                                            msg: t.errMsg
                                        }));
                                    });
                                });
                            }
                            var d = "wx.getUserInfo not allowed!!!";
                            o.default.error("Udb.bindWxPhoneNum error:" + d), i && i({
                                code: 9,
                                msg: d
                            });
                        }).catch(function(t) {
                            var e = JSON.stringify(t);
                            o.default.error("Udb.bindWxPhoneNum error:" + e), i && i({
                                code: 9,
                                msg: e
                            });
                        });
                    }
                }, {
                    key: "udbLogin",
                    value: function(t, e, n) {
                        var i = void 0, r = void 0, u = void 0;
                        return n || (i = a.default.getStorageSync("yyuid"), r = a.default.getStorageSync("udb_c"), 
                        u = a.default.getStorageSync("cookieDate"), o.default.log("Udb.udbLogin getStorageSync uid=" + i + " udb_c=" + r + " cookieDate=" + u)), 
                        getApp ? !r || !u || r && Date.now() - u > 864e5 ? s.default.miniProgramPromise("getSetting", {}).then(function(n) {
                            if (n.authSetting["scope.userInfo"]) {
                                var i = s.default.miniProgramPromise("login", {}), r = s.default.miniProgramPromise("getUserInfo", {
                                    withCredentials: !0
                                });
                                return Promise.all([ i, r ]).then(function(n) {
                                    var i = void 0, r = void 0, a = void 0, u = !0, l = !1, h = void 0;
                                    try {
                                        for (var p, f = n[Symbol.iterator](); !(u = (p = f.next()).done); u = !0) {
                                            var d = p.value;
                                            d.code && (i = d.code), (d.encryptedData || d.data) && (r = d.encryptedData || d.data), 
                                            d.iv && (a = d.iv);
                                        }
                                    } catch (t) {
                                        l = !0, h = t;
                                    } finally {
                                        try {
                                            !u && f.return && f.return();
                                        } finally {
                                            if (l) throw h;
                                        }
                                    }
                                    var c = Math.floor(1e8 * Math.random()).toString();
                                    return o.default.log("Udb.udbLogin code=" + i + " reqid=" + c), s.default.miniProgramPromise("request", {
                                        url: "https://thirdlogin.yy.com/open/wx/mplogin.do",
                                        data: {
                                            reqid: c,
                                            lgnappid: "yymwebh5",
                                            appid: t,
                                            wxappid: e,
                                            jscode: i,
                                            jsdata: r,
                                            jsiv: a
                                        }
                                    }).then(function(t) {
                                        o.default.log("Udb.udbLogin res=" + JSON.stringify(t));
                                        var e = t.data;
                                        return e && (e.udb_c && e.yyuid || e.udb_l && e.username) ? (s.default.setMiniProgramCookie("udbInfo", e), 
                                        !!e.yyuid && s.default.setMiniProgramCookie("yyuid", e.yyuid), !!e.udb_c && s.default.setMiniProgramCookie("udb_c", e.udb_c), 
                                        !!e.username && s.default.setMiniProgramCookie("username", e.username), !!e.udb_l && s.default.setMiniProgramCookie("udb_l", e.udb_l), 
                                        s.default.setMiniProgramCookie("cookieDate", Date.now()), Promise.resolve(e)) : (o.default.error("Udb.loginUdb thirdparty loginudb failed:" + JSON.stringify(t)), 
                                        Promise.reject(t));
                                    });
                                });
                            }
                            return Promise.reject("wx.getUserInfo not allowed!!!");
                        }).catch(function(t) {
                            return Promise.reject(t);
                        }) : r ? (o.default.log("Udb.udbLogin using last login status. uid=" + i + " credit=" + r), 
                        Promise.resolve({})) : void 0 : (o.default.error("禁止在 app.js onLaunch 中调用 ，请在 pages 调用 udbLogin"), 
                        Promise.reject("禁止在 app.js onLaunch 中调用 ，请在 pages 调用 udbLogin"));
                    }
                } ]), e;
            }();
            i.default = u;
        },
        "./src/utils/utils.ts": function(r, s, o) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            });
            var a = o("./node_modules/long/src/long.js"), u = o("./src/protobase/ProtoUInt64.ts"), l = o("./src/utils/extend.ts"), h = o("./src/utils/logger.ts"), p = o("./src/protobase/ProtoMarshall.ts"), f = o("./src/utils/miniProgramAPI.ts"), d = function() {
                function r() {
                    t(this, r);
                }
                return n(r, null, [ {
                    key: "inet_ntoa",
                    value: function(t) {
                        var e = void 0, n = void 0, i = void 0, r = void 0, s = new Uint8Array(4), o = new DataView(s.buffer);
                        return o.setUint32(0, t), e = o.getUint8(0), n = o.getUint8(1), i = o.getUint8(2), 
                        r = o.getUint8(3), r + "." + i + "." + n + "." + e;
                    }
                }, {
                    key: "isBiggerUint",
                    value: function(t, e) {
                        return t !== e && (t > e ? t - e < 2147483647 : !(e - t < 2147483647));
                    }
                }, {
                    key: "isEqualOrBiggerUint",
                    value: function(t, e) {
                        return t === e || (t > e ? t - e < 2147483647 : !(e - t < 2147483647));
                    }
                }, {
                    key: "isBiggerUint8",
                    value: function(t, e) {
                        return t !== e && (t > e ? t - e < 127 : !(e - t < 127));
                    }
                }, {
                    key: "getUintMax",
                    value: function() {
                        return 4294967295;
                    }
                }, {
                    key: "isUintMax",
                    value: function(t) {
                        return 4294967295 === t;
                    }
                }, {
                    key: "getIntMax",
                    value: function() {
                        return 2147483647;
                    }
                }, {
                    key: "getIntMin",
                    value: function() {
                        return -1 * this.getIntMax();
                    }
                }, {
                    key: "isUint64Max",
                    value: function(t) {
                        return 4294967295 === t.high && 4294967295 === t.low;
                    }
                }, {
                    key: "uint2ip",
                    value: function(t) {
                        var e = void 0, n = void 0, i = void 0, r = void 0;
                        return e = 255 & t, n = t >> 8 & 255, i = t >> 16 & 255, r = t >> 24 & 255, e + "." + n + "." + i + "." + r;
                    }
                }, {
                    key: "ip2uint",
                    value: function(t) {
                        var e = t.split(".");
                        return (parseInt(e[3]) << 24) + (parseInt(e[2]) << 16) + (parseInt(e[1]) << 8) + parseInt(e[0]) >>> 0;
                    }
                }, {
                    key: "isNumber",
                    value: function(t) {
                        return null !== t && ("number" == typeof t && !isNaN(t - 0) || "object" === (void 0 === t ? "undefined" : i(t)) && t.constructor === Number);
                    }
                }, {
                    key: "isString",
                    value: function(t) {
                        return "string" == typeof t;
                    }
                }, {
                    key: "isUint8Array",
                    value: function(t) {
                        return "[object Uint8Array]" === Object.prototype.toString.call(t);
                    }
                }, {
                    key: "isMap",
                    value: function(t) {
                        return "map" == Object.prototype.toString.call(t).match(/^\[object (.*)\]$/)[1].toLowerCase();
                    }
                }, {
                    key: "bin2hex",
                    value: function(t) {
                        var e, n, i, r = "";
                        for (e = 0, n = (t += "").length; e < n; e++) r += (i = t.charCodeAt(e).toString(16)).length < 2 ? "0" + i : i;
                        return r;
                    }
                }, {
                    key: "getUUID",
                    value: function(t) {
                        var e = "";
                        try {
                            var n = document.createElement("canvas"), i = n.getContext("2d"), s = t;
                            i.fillStyle = "#f60", i.fillRect(0, 0, 8, 10), i.fillStyle = "#FF0000", i.fillText(s, 4, 17);
                            var o = n.toDataURL().replace("data:image/png;base64,", ""), a = atob(o);
                            e = r.bin2hex(a.slice(-16, -12));
                        } catch (t) {
                            for (var u = [], l = 0; l < 8; l++) u[l] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                            e = u.join("");
                        }
                        for (var h = [], p = 0; p < 28; p++) h[p] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                        return h[6] = "4", h[11] = "0123456789abcdef".substr(3 & h[19] | 8, 1), h[0] = h[5] = h[10] = h[15] = "-", 
                        e + h.join("");
                    }
                }, {
                    key: "setCookie",
                    value: function(t, e, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        n || (n = 24);
                        var o = new Date();
                        o.setTime(o.getTime() + 60 * n * 60 * 1e3), document.cookie = t + "=" + window.encodeURIComponent(e) + ";expires=" + o.toUTCString() + (r ? ";domain=" + r : "") + (i ? ";path=" + i : "") + (!0 === s ? ";secure" : "");
                    }
                }, {
                    key: "setMiniProgramCookie",
                    value: function(t, e) {
                        f.default.setStorageSync(t, e);
                    }
                }, {
                    key: "getUidInCertainInterval",
                    value: function() {
                        return parseInt("" + (1125e4 * Math.random() + 4283717296), 10);
                    }
                }, {
                    key: "DelayPromise",
                    value: function(t) {
                        return new Promise(function(e) {
                            setTimeout(e, t);
                        });
                    }
                }, {
                    key: "number2ProtoUInt64",
                    value: function(t) {
                        if (t <= r.getUintMax()) return new u.default(0, t);
                        var e = a.fromString(t.toString());
                        return new u.default(e.high, e.low);
                    }
                }, {
                    key: "payload2DataView",
                    value: function(t) {
                        var e = new Uint8Array(t.byteLength);
                        return e.set(t, 0), t = null, new DataView(e.buffer);
                    }
                }, {
                    key: "copyCompressedData",
                    value: function(t) {
                        t.popUInt32(), t.popUInt32();
                        for (var e = t.bytesAvailable(), n = new Uint8Array(e), i = [], r = 0; r < e; r++) i.push(t.popUInt8());
                        return n.set(i), i.length = 0, n;
                    }
                }, {
                    key: "miniProgramPromise",
                    value: function(t, e) {
                        return new Promise(function(n, i) {
                            var r = Object.assign({}, e, {
                                success: function(t) {
                                    n(t), e && e.success && e.success(t);
                                },
                                fail: function(n) {
                                    h.default.error(t + " " + JSON.stringify(n)), i(n), e && e.fail && e.fail(n);
                                }
                            });
                            f.default.getAPI()[t](r);
                        });
                    }
                }, {
                    key: "yFetch",
                    value: function(t) {
                        var e = l.default(!0, {}, {
                            method: "GET"
                        }, t);
                        return r.miniProgramPromise("request", e);
                    }
                }, {
                    key: "yFetchLogin",
                    value: function(t) {}
                }, {
                    key: "downloadFile",
                    value: function(t) {
                        return r.miniProgramPromise("downloadFile", {
                            url: t
                        }).then(function(t) {
                            t.tempFilePath ? Promise.resolve(t.tempFilePath) : Promise.reject("不存在路径");
                        });
                    }
                }, {
                    key: "stringifyMap",
                    value: function(t) {
                        var e = r.map2Object(t);
                        return JSON.stringify(e);
                    }
                }, {
                    key: "insertTwoBytesHeader",
                    value: function(t) {
                        var e = new p.default(!1);
                        return e.pushUint8Array(t), e.marshall();
                    }
                }, {
                    key: "getExtProps",
                    value: function(t) {
                        var e = new p.default(!1);
                        e.pushUInt32(t);
                        var n = new Map();
                        return n.set(1, e.marshall()), n;
                    }
                }, {
                    key: "map2Object",
                    value: function(t) {
                        var n = {}, i = !0, s = !1, o = void 0;
                        try {
                            for (var a, u = t[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                                var l = e(a.value, 2), h = l[0], p = l[1];
                                if (r.isMap(p)) n[h] = r.map2Object(p); else if (n[h] = p, 1 == t.size) break;
                            }
                        } catch (t) {
                            s = !0, o = t;
                        } finally {
                            try {
                                !i && u.return && u.return();
                            } finally {
                                if (s) throw o;
                            }
                        }
                        return n;
                    }
                }, {
                    key: "uint8Array2String",
                    value: function(t) {
                        for (var e = t.byteLength, n = "", i = 0; i < e; ++i) n += String.fromCharCode(t[i]);
                        return n;
                    }
                }, {
                    key: "getCookie",
                    value: function(t) {
                        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return f.default.getStorageSync(t.toString());
                        if (document.cookie.length > 0) {
                            var e = document.cookie.indexOf(t + "=");
                            if (-1 != e) {
                                e = e + t.length + 1;
                                var n = document.cookie.indexOf(";", e);
                                return -1 == n && (n = document.cookie.length), decodeURIComponent(document.cookie.substring(e, n));
                            }
                        }
                        return "";
                    }
                } ]), r;
            }();
            s.default = d;
        }
    }).default;
});