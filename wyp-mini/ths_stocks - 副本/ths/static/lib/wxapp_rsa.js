function t(t) {
    var e, i, n = "";
    for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), 
    n += mt.charAt(i >> 6) + mt.charAt(63 & i);
    if (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), n += mt.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), 
    n += mt.charAt(i >> 2) + mt.charAt((3 & i) << 4)), At) for (;(3 & n.length) > 0; ) n += At;
    return n;
}

function e(t) {
    var e, i, n, s = "", a = 0;
    for (e = 0; e < t.length && t.charAt(e) != At; ++e) (n = mt.indexOf(t.charAt(e))) < 0 || (0 == a ? (s += r(n >> 2), 
    i = 3 & n, a = 1) : 1 == a ? (s += r(i << 2 | n >> 4), i = 15 & n, a = 2) : 2 == a ? (s += r(i), 
    s += r(n >> 2), i = 3 & n, a = 3) : (s += r(i << 2 | n >> 4), s += r(15 & n), a = 0));
    return 1 == a && (s += r(i << 2)), s;
}

function i(t, e, i) {
    null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
}

function n() {
    return new i(null);
}

function r(t) {
    return Ft.charAt(t);
}

function s(t, e) {
    var i = Et[t.charCodeAt(e)];
    return null == i ? -1 : i;
}

function a(t) {
    var e = n();
    return e.fromInt(t), e;
}

function o(t) {
    var e, i = 1;
    return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 
    0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, 
    i += 1), i;
}

function u(t) {
    this.m = t;
}

function c(t) {
    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
    this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
}

function l(t, e) {
    return t & e;
}

function f(t, e) {
    return t | e;
}

function d(t, e) {
    return t ^ e;
}

function g(t, e) {
    return t & ~e;
}

function p(t) {
    if (0 == t) return -1;
    var e = 0;
    return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 
    0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, 
    e;
}

function y(t) {
    for (var e = 0; 0 != t; ) t &= t - 1, ++e;
    return e;
}

function v() {}

function S(t) {
    return t;
}

function m(t) {
    this.r2 = n(), this.q3 = n(), i.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), 
    this.m = t;
}

function A() {
    this.i = 0, this.j = 0, this.S = new Array();
}

function x() {
    return new A();
}

function b(t) {
    Ct[Ot++] ^= 255 & t, Ct[Ot++] ^= t >> 8 & 255, Ct[Ot++] ^= t >> 16 & 255, Ct[Ot++] ^= t >> 24 & 255, 
    Ot >= Dt && (Ot -= Dt);
}

function F() {
    b(new Date().getTime());
}

function E() {
    if (null == Ht) {
        for (F(), (Ht = x()).init(Ct), Ot = 0; Ot < Ct.length; ++Ot) Ct[Ot] = 0;
        Ot = 0;
    }
    return Ht.next();
}

function w() {}

function P(t, e) {
    return new i(t, e);
}

function H(t, e) {
    if (e < t.length + 11) return console.log("Message too long for RSA"), null;
    for (var n = new Array(), r = t.length - 1; r >= 0 && e > 0; ) {
        var s = t.charCodeAt(r--);
        s < 128 ? n[--e] = s : s > 127 && s < 2048 ? (n[--e] = 63 & s | 128, n[--e] = s >> 6 | 192) : (n[--e] = 63 & s | 128, 
        n[--e] = s >> 6 & 63 | 128, n[--e] = s >> 12 | 224);
    }
    n[--e] = 0;
    for (var a = new w(), o = new Array(); e > 2; ) {
        for (o[0] = 0; 0 == o[0]; ) a.nextBytes(o);
        n[--e] = o[0];
    }
    return n[--e] = 2, n[--e] = 0, new i(n);
}

function C(t, e, i) {
    for (var n = "", r = 0; n.length < e; ) n += i(String.fromCharCode.apply(String, t.concat([ (4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r ]))), 
    r += 1;
    return n;
}

function O(t, e, n, r) {
    var s = pt.crypto.MessageDigest, a = pt.crypto.Util, o = null;
    if (n || (n = "sha1"), "string" == typeof n && (o = s.getCanonicalAlgName(n), r = s.getHashLength(o), 
    n = function(t) {
        return W(a.hashString(t, o));
    }), t.length + 2 * r + 2 > e) throw "Message too long for RSA";
    var h, u = "";
    for (h = 0; h < e - t.length - 2 * r - 2; h += 1) u += "\0";
    var c = n("") + u + "" + t, l = new Array(r);
    new w().nextBytes(l);
    var f = C(l, c.length, n), d = [];
    for (h = 0; h < c.length; h += 1) d[h] = c.charCodeAt(h) ^ f.charCodeAt(h);
    var g = C(d, l.length, n), p = [ 0 ];
    for (h = 0; h < l.length; h += 1) p[h + 1] = l[h] ^ g.charCodeAt(h);
    return new i(p.concat(d));
}

function D() {
    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
    this.dmq1 = null, this.coeff = null;
}

function T(t, e) {
    for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n]; ) ++n;
    if (i.length - n != e - 1 || 2 != i[n]) return null;
    for (++n; 0 != i[n]; ) if (++n >= i.length) return null;
    for (var r = ""; ++n < i.length; ) {
        var s = 255 & i[n];
        s < 128 ? r += String.fromCharCode(s) : s > 191 && s < 224 ? (r += String.fromCharCode((31 & s) << 6 | 63 & i[n + 1]), 
        ++n) : (r += String.fromCharCode((15 & s) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]), 
        n += 2);
    }
    return r;
}

function j(t, e, i) {
    for (var n = "", r = 0; n.length < e; ) n += i(t + String.fromCharCode.apply(String, [ (4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r ])), 
    r += 1;
    return n;
}

function I(t, e, i, n) {
    var r = pt.crypto.MessageDigest, s = pt.crypto.Util, a = null;
    i || (i = "sha1"), "string" == typeof i && (a = r.getCanonicalAlgName(i), n = r.getHashLength(a), 
    i = function(t) {
        return W(s.hashString(t, a));
    }), t = t.toByteArray();
    for (o = 0; o < t.length; o += 1) t[o] &= 255;
    for (;t.length < e; ) t.unshift(0);
    if ((t = String.fromCharCode.apply(String, t)).length < 2 * n + 2) throw "Cipher too short";
    var o, h = t.substr(1, n), u = t.substr(n + 1), c = j(u, n, i), l = [];
    for (o = 0; o < h.length; o += 1) l[o] = h.charCodeAt(o) ^ c.charCodeAt(o);
    var f = j(String.fromCharCode.apply(String, l), t.length - n, i), d = [];
    for (o = 0; o < u.length; o += 1) d[o] = u.charCodeAt(o) ^ f.charCodeAt(o);
    if ((d = String.fromCharCode.apply(String, d)).substr(0, n) !== i("")) throw "Hash mismatch";
    var g = (d = d.substr(n)).indexOf("");
    if ((-1 != g ? d.substr(0, g).lastIndexOf("\0") : -1) + 1 != g) throw "Malformed data";
    return d.substr(g + 1);
}

function R(t, e) {
    this.x = e, this.q = t;
}

function B(t, e, n, r) {
    this.curve = t, this.x = e, this.y = n, this.z = null == r ? i.ONE : r, this.zinv = null;
}

function N(t, e, i) {
    this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(i), this.infinity = new B(this, null, null);
}

function V(t) {
    for (var e = new Array(), i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
    return e;
}

function K(t) {
    for (var e = "", i = 0; i < t.length; i++) {
        var n = t[i].toString(16);
        1 == n.length && (n = "0" + n), e += n;
    }
    return e;
}

function _(t) {
    return K(V(t));
}

function L(t) {
    return t = t.replace(/\=/g, ""), t = t.replace(/\+/g, "-"), t = t.replace(/\//g, "_");
}

function k(t) {
    return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="), t = t.replace(/-/g, "+"), 
    t = t.replace(/_/g, "/");
}

function M(e) {
    return e.length % 2 == 1 && (e = "0" + e), L(t(e));
}

function q(t) {
    return e(k(t));
}

function U(t) {
    return X($(t));
}

function z(t) {
    return decodeURIComponent(Y(t));
}

function W(t) {
    for (var e = "", i = 0; i < t.length - 1; i += 2) e += String.fromCharCode(parseInt(t.substr(i, 2), 16));
    return e;
}

function J(t) {
    for (var e = "", i = 0; i < t.length; i++) e += ("0" + t.charCodeAt(i).toString(16)).slice(-2);
    return e;
}

function G(e) {
    return t(e);
}

function X(t) {
    return t.replace(/%/g, "");
}

function Y(t) {
    return t.replace(/(..)/g, "%$1");
}

function $(t) {
    for (var e = encodeURIComponent(t), i = "", n = 0; n < e.length; n++) "%" == e[n] ? (i += e.substr(n, 3), 
    n += 2) : i = i + "%" + _(e[n]);
    return i;
}

function Z(t, e) {
    for (var i = "", n = e / 4 - t.length, r = 0; r < n; r++) i += "0";
    return i + t;
}

function Q(t, e) {
    var i = function(t) {
        return pt.crypto.Util.hashString(t, e);
    }(t);
    return this.signWithMessageHash(i, e);
}

function tt(t) {
    return Q.call(this, t, "sha1");
}

function et(t) {
    return Q.call(this, t, "sha256");
}

function it(t, e, i) {
    for (var n = "", r = 0; n.length < e; ) n += W(i(J(t + String.fromCharCode.apply(String, [ (4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r ])))), 
    r += 1;
    return n;
}

function nt(t, e, i) {
    var n = function(t) {
        return pt.crypto.Util.hashHex(t, e);
    }(J(t));
    return void 0 === i && (i = -1), this.signWithMessageHashPSS(n, e, i);
}

function rt(t, e, i) {
    var n = new D();
    return n.setPublic(e, i), n.doPublic(t);
}

function st(t, e, i) {
    return rt(t, e, i).toString(16).replace(/^1f+00/, "");
}

function at(t) {
    for (var e in pt.crypto.Util.DIGESTINFOHEAD) {
        var i = pt.crypto.Util.DIGESTINFOHEAD[e], n = i.length;
        if (t.substring(0, n) == i) return [ e, t.substring(n) ];
    }
    return [];
}

function ot(t, e, i, n) {
    var r = at(st(e, i, n));
    if (0 == r.length) return !1;
    var s = r[0];
    return r[1] == function(t) {
        return pt.crypto.Util.hashString(t, s);
    }(t);
}

function ht(t, e) {
    return ot(e, P(t, 16), this.n.toString(16), this.e.toString(16));
}

function ut(t, e) {
    var i = P(e = (e = e.replace(Lt, "")).replace(/[ \n]+/g, ""), 16);
    if (i.bitLength() > this.n.bitLength()) return 0;
    var n = at(this.doPublic(i).toString(16).replace(/^1f+00/, ""));
    if (0 == n.length) return !1;
    var r = n[0];
    return n[1] == function(t) {
        return pt.crypto.Util.hashString(t, r);
    }(t);
}

function ct(t, e, i, n) {
    var r = function(t) {
        return pt.crypto.Util.hashHex(t, i);
    }(J(t));
    return void 0 === n && (n = -1), this.verifyWithMessageHashPSS(r, e, i, n);
}

function lt() {
    this.subjectPublicKeyRSA = null, this.subjectPublicKeyRSA_hN = null, this.subjectPublicKeyRSA_hE = null, 
    this.hex = null, this.getSerialNumberHex = function() {
        return Bt.getDecendantHexVByNthList(this.hex, 0, [ 0, 1 ]);
    }, this.getSignatureAlgorithmField = function() {
        var t = Bt.getDecendantHexVByNthList(this.hex, 0, [ 0, 2, 0 ]), e = pt.asn1.ASN1Util.oidHexToInt(t);
        return pt.asn1.x509.OID.oid2name(e);
    }, this.getIssuerHex = function() {
        return Bt.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 3 ]);
    }, this.getIssuerString = function() {
        return lt.hex2dn(Bt.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 3 ]));
    }, this.getSubjectHex = function() {
        return Bt.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 5 ]);
    }, this.getSubjectString = function() {
        return lt.hex2dn(Bt.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 5 ]));
    }, this.getNotBefore = function() {
        var t = Bt.getDecendantHexVByNthList(this.hex, 0, [ 0, 4, 0 ]);
        return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t);
    }, this.getNotAfter = function() {
        var t = Bt.getDecendantHexVByNthList(this.hex, 0, [ 0, 4, 1 ]);
        return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t);
    }, this.readCertPEM = function(t) {
        var e = Bt.pemToHex(t), i = lt.getPublicKeyHexArrayFromCertHex(e), n = new D();
        n.setPublic(i[0], i[1]), this.subjectPublicKeyRSA = n, this.subjectPublicKeyRSA_hN = i[0], 
        this.subjectPublicKeyRSA_hE = i[1], this.hex = e;
    }, this.readCertPEMWithoutRSAInit = function(t) {
        var e = Bt.pemToHex(t), i = lt.getPublicKeyHexArrayFromCertHex(e);
        "function" == typeof this.subjectPublicKeyRSA.setPublic && this.subjectPublicKeyRSA.setPublic(i[0], i[1]), 
        this.subjectPublicKeyRSA_hN = i[0], this.subjectPublicKeyRSA_hE = i[1], this.hex = e;
    }, this.getInfo = function() {
        var t = "Basic Fields\n";
        t += "  serial number: " + this.getSerialNumberHex() + "\n", t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", 
        t += "  issuer: " + this.getIssuerString() + "\n", t += "  notBefore: " + this.getNotBefore() + "\n", 
        t += "  notAfter: " + this.getNotAfter() + "\n", t += "  subject: " + this.getSubjectString() + "\n", 
        t += "  subject public key info: \n";
        var e = lt.getSubjectPublicKeyInfoPosFromCertHex(this.hex), i = Bt.getHexOfTLV_AtObj(this.hex, e), n = _t.getKey(i, null, "pkcs8pub");
        n instanceof D && (t += "    key algorithm: RSA\n", t += "    n=" + n.n.toString(16).substr(0, 16) + "...\n", 
        t += "    e=" + n.e.toString(16) + "\n"), t += "X509v3 Extensions:\n";
        for (var r = lt.getV3ExtInfoListOfCertHex(this.hex), s = 0; s < r.length; s++) {
            var a = r[s], o = pt.asn1.x509.OID.oid2name(a.oid);
            "" === o && (o = a.oid);
            var h = "";
            if (!0 === a.critical && (h = "CRITICAL"), t += "  " + o + " " + h + ":\n", "basicConstraints" === o) {
                var u = lt.getExtBasicConstraints(this.hex);
                void 0 === u.cA ? t += "    {}\n" : (t += "    cA=true", void 0 !== u.pathLen && (t += ", pathLen=" + u.pathLen), 
                t += "\n");
            } else if ("keyUsage" === o) t += "    " + lt.getExtKeyUsageString(this.hex) + "\n"; else if ("subjectKeyIdentifier" === o) t += "    " + lt.getExtSubjectKeyIdentifier(this.hex) + "\n"; else if ("authorityKeyIdentifier" === o) {
                var c = lt.getExtAuthorityKeyIdentifier(this.hex);
                void 0 !== c.kid && (t += "    kid=" + c.kid + "\n");
            } else if ("extKeyUsage" === o) t += "    " + lt.getExtExtKeyUsageName(this.hex).join(", ") + "\n"; else if ("subjectAltName" === o) t += "    " + lt.getExtSubjectAltName(this.hex).join(", ") + "\n"; else if ("cRLDistributionPoints" === o) t += "    " + lt.getExtCRLDistributionPointsURI(this.hex) + "\n"; else if ("authorityInfoAccess" === o) {
                var l = lt.getExtAIAInfo(this.hex);
                void 0 !== l.ocsp && (t += "    ocsp: " + l.ocsp.join(",") + "\n"), void 0 !== l.caissuer && (t += "    caissuer: " + l.caissuer.join(",") + "\n");
            }
        }
        return t += "signature algorithm: " + lt.getSignatureAlgorithmName(this.hex) + "\n", 
        t += "signature: " + lt.getSignatureValueHex(this.hex).substr(0, 16) + "...\n";
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, dt = {
    appName: "Netscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
}, gt = {
    ASN1: null,
    Base64: null,
    Hex: null,
    crypto: null,
    href: null
}, pt = null;

if (void 0 === yt || !yt) var yt = {};

yt.namespace = function() {
    var t, e, i, n = arguments, r = null;
    for (t = 0; t < n.length; t += 1) for (i = ("" + n[t]).split("."), r = yt, e = "YAHOO" == i[0] ? 1 : 0; e < i.length; e += 1) r[i[e]] = r[i[e]] || {}, 
    r = r[i[e]];
    return r;
}, yt.log = function(t, e, i) {
    var n = yt.widget.Logger;
    return !(!n || !n.log) && n.log(t, e, i);
}, yt.register = function(t, e, i) {
    var n, r, s, a, o, h = yt.env.modules;
    for (h[t] || (h[t] = {
        versions: [],
        builds: []
    }), n = h[t], r = i.version, s = i.build, a = yt.env.listeners, n.name = t, n.version = r, 
    n.build = s, n.versions.push(r), n.builds.push(s), n.mainClass = e, o = 0; o < a.length; o += 1) a[o](n);
    e ? (e.VERSION = r, e.BUILD = s) : yt.log("mainClass is undefined for module " + t, "warn");
}, yt.env = yt.env || {
    modules: [],
    listeners: []
}, yt.env.getVersion = function(t) {
    return yt.env.modules[t] || null;
}, yt.env.parseUA = function(t) {
    var e, i = function(t) {
        var e = 0;
        return parseFloat(t.replace(/\./g, function() {
            return 1 == e++ ? "" : ".";
        }));
    }, n = dt, r = {
        ie: 0,
        opera: 0,
        gecko: 0,
        webkit: 0,
        chrome: 0,
        mobile: null,
        air: 0,
        ipad: 0,
        iphone: 0,
        ipod: 0,
        ios: null,
        android: 0,
        webos: 0,
        caja: n && n.cajaVersion,
        secure: !1,
        os: null
    }, s = t || dt && dt.userAgent, a = gt && gt.location, o = a && a.href;
    return r.secure = o && 0 === o.toLowerCase().indexOf("https"), s && (/windows|win32/i.test(s) ? r.os = "windows" : /macintosh/i.test(s) ? r.os = "macintosh" : /rhino/i.test(s) && (r.os = "rhino"), 
    /KHTML/.test(s) && (r.webkit = 1), (e = s.match(/AppleWebKit\/([^\s]*)/)) && e[1] && (r.webkit = i(e[1]), 
    / Mobile\//.test(s) ? (r.mobile = "Apple", (e = s.match(/OS ([^\s]*)/)) && e[1] && (e = i(e[1].replace("_", "."))), 
    r.ios = e, r.ipad = r.ipod = r.iphone = 0, (e = s.match(/iPad|iPod|iPhone/)) && e[0] && (r[e[0].toLowerCase()] = r.ios)) : ((e = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (r.mobile = e[0]), 
    /webOS/.test(s) && (r.mobile = "WebOS", (e = s.match(/webOS\/([^\s]*);/)) && e[1] && (r.webos = i(e[1]))), 
    / Android/.test(s) && (r.mobile = "Android", (e = s.match(/Android ([^\s]*);/)) && e[1] && (r.android = i(e[1])))), 
    (e = s.match(/Chrome\/([^\s]*)/)) && e[1] ? r.chrome = i(e[1]) : (e = s.match(/AdobeAIR\/([^\s]*)/)) && (r.air = e[0])), 
    r.webkit || ((e = s.match(/Opera[\s\/]([^\s]*)/)) && e[1] ? (r.opera = i(e[1]), 
    (e = s.match(/Version\/([^\s]*)/)) && e[1] && (r.opera = i(e[1])), (e = s.match(/Opera Mini[^;]*/)) && (r.mobile = e[0])) : (e = s.match(/MSIE\s([^;]*)/)) && e[1] ? r.ie = i(e[1]) : (e = s.match(/Gecko\/([^\s]*)/)) && (r.gecko = 1, 
    (e = s.match(/rv:([^\s\)]*)/)) && e[1] && (r.gecko = i(e[1]))))), r;
}, yt.env.ua = yt.env.parseUA(), function() {
    if (yt.namespace("util", "widget", "example"), "undefined" != typeof YAHOO_config) {
        var t, e = YAHOO_config.listener, i = yt.env.listeners, n = !0;
        if (e) {
            for (t = 0; t < i.length; t++) if (i[t] == e) {
                n = !1;
                break;
            }
            n && i.push(e);
        }
    }
}(), yt.lang = yt.lang || {}, function() {
    var t = yt.lang, e = Object.prototype, i = [], n = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
        "`": "&#x60;"
    }, r = [ "toString", "valueOf" ], s = {
        isArray: function(t) {
            return "[object Array]" === e.toString.apply(t);
        },
        isBoolean: function(t) {
            return "boolean" == typeof t;
        },
        isFunction: function(t) {
            return "function" == typeof t || "[object Function]" === e.toString.apply(t);
        },
        isNull: function(t) {
            return null === t;
        },
        isNumber: function(t) {
            return "number" == typeof t && isFinite(t);
        },
        isObject: function(e) {
            return e && ("object" === (void 0 === e ? "undefined" : ft(e)) || t.isFunction(e)) || !1;
        },
        isString: function(t) {
            return "string" == typeof t;
        },
        isUndefined: function(t) {
            return void 0 === t;
        },
        _IEEnumFix: yt.env.ua.ie ? function(i, n) {
            var s, a, o;
            for (s = 0; s < r.length; s += 1) o = n[a = r[s]], t.isFunction(o) && o != e[a] && (i[a] = o);
        } : function() {},
        escapeHTML: function(t) {
            return t.replace(/[&<>"'\/`]/g, function(t) {
                return n[t];
            });
        },
        extend: function(i, n, r) {
            if (!n || !i) throw new Error("extend failed, please check that all dependencies are included.");
            var s, a = function() {};
            if (a.prototype = n.prototype, i.prototype = new a(), i.prototype.constructor = i, 
            i.superclass = n.prototype, n.prototype.constructor == e.constructor && (n.prototype.constructor = n), 
            r) {
                for (s in r) t.hasOwnProperty(r, s) && (i.prototype[s] = r[s]);
                t._IEEnumFix(i.prototype, r);
            }
        },
        augmentObject: function(e, i) {
            if (!i || !e) throw new Error("Absorb failed, verify dependencies.");
            var n, r, s = arguments, a = s[2];
            if (a && !0 !== a) for (n = 2; n < s.length; n += 1) e[s[n]] = i[s[n]]; else {
                for (r in i) !a && r in e || (e[r] = i[r]);
                t._IEEnumFix(e, i);
            }
            return e;
        },
        augmentProto: function(e, i) {
            if (!i || !e) throw new Error("Augment failed, verify dependencies.");
            var n, r = [ e.prototype, i.prototype ];
            for (n = 2; n < arguments.length; n += 1) r.push(arguments[n]);
            return t.augmentObject.apply(this, r), e;
        },
        dump: function(e, i) {
            var n, r, s = [], a = "{...}";
            if (!t.isObject(e)) return e + "";
            if (e instanceof Date || "nodeType" in e && "tagName" in e) return e;
            if (t.isFunction(e)) return "f(){...}";
            if (i = t.isNumber(i) ? i : 3, t.isArray(e)) {
                for (s.push("["), n = 0, r = e.length; n < r; n += 1) t.isObject(e[n]) ? s.push(i > 0 ? t.dump(e[n], i - 1) : a) : s.push(e[n]), 
                s.push(", ");
                s.length > 1 && s.pop(), s.push("]");
            } else {
                s.push("{");
                for (n in e) t.hasOwnProperty(e, n) && (s.push(n + " => "), t.isObject(e[n]) ? s.push(i > 0 ? t.dump(e[n], i - 1) : a) : s.push(e[n]), 
                s.push(", "));
                s.length > 1 && s.pop(), s.push("}");
            }
            return s.join("");
        },
        substitute: function(e, i, n, r) {
            for (var s, a, o, h, u, c, l, f, d, g = [], p = e.length; !((s = e.lastIndexOf("{", p)) < 0) && (a = e.indexOf("}", s), 
            !(s + 1 > a)); ) c = null, (o = (h = l = e.substring(s + 1, a)).indexOf(" ")) > -1 && (c = h.substring(o + 1), 
            h = h.substring(0, o)), u = i[h], n && (u = n(h, u, c)), t.isObject(u) ? t.isArray(u) ? u = t.dump(u, parseInt(c, 10)) : ((f = (c = c || "").indexOf("dump")) > -1 && (c = c.substring(4)), 
            u = "[object Object]" === (d = u.toString()) || f > -1 ? t.dump(u, parseInt(c, 10)) : d) : t.isString(u) || t.isNumber(u) || (u = "~-" + g.length + "-~", 
            g[g.length] = l), e = e.substring(0, s) + u + e.substring(a + 1), !1 === r && (p = s - 1);
            for (s = g.length - 1; s >= 0; s -= 1) e = e.replace(new RegExp("~-" + s + "-~"), "{" + g[s] + "}", "g");
            return e;
        },
        trim: function(t) {
            try {
                return t.replace(/^\s+|\s+$/g, "");
            } catch (e) {
                return t;
            }
        },
        merge: function() {
            var e, i = {}, n = arguments, r = n.length;
            for (e = 0; e < r; e += 1) t.augmentObject(i, n[e], !0);
            return i;
        },
        later: function(e, n, r, s, a) {
            e = e || 0, n = n || {};
            var o, h, u = r, c = s;
            if (t.isString(r) && (u = n[r]), !u) throw new TypeError("method undefined");
            return t.isUndefined(s) || t.isArray(c) || (c = [ s ]), o = function() {
                u.apply(n, c || i);
            }, h = a ? setInterval(o, e) : setTimeout(o, e), {
                interval: a,
                cancel: function() {
                    this.interval ? clearInterval(h) : clearTimeout(h);
                }
            };
        },
        isValue: function(e) {
            return t.isObject(e) || t.isString(e) || t.isNumber(e) || t.isBoolean(e);
        }
    };
    t.hasOwnProperty = e.hasOwnProperty ? function(t, e) {
        return t && t.hasOwnProperty && t.hasOwnProperty(e);
    } : function(e, i) {
        return !t.isUndefined(e[i]) && e.constructor.prototype[i] !== e[i];
    }, s.augmentObject(t, s, !0), yt.util.Lang = t, t.augment = t.augmentProto, yt.augment = t.augmentProto, 
    yt.extend = t.extend;
}(), yt.register("yahoo", yt, {
    version: "2.9.0",
    build: "2800"
});

var vt = vt || function(t, e) {
    var i = {}, n = i.lib = {}, r = n.Base = function() {
        function t() {}
        return {
            extend: function(e) {
                t.prototype = this;
                var i = new t();
                return e && i.mixIn(e), i.hasOwnProperty("init") || (i.init = function() {
                    i.$super.init.apply(this, arguments);
                }), i.init.prototype = i, i.$super = this, i;
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
        };
    }(), s = n.WordArray = r.extend({
        init: function(t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length;
        },
        toString: function(t) {
            return (t || o).stringify(this);
        },
        concat: function(t) {
            var e = this.words, i = t.words, n = this.sigBytes, r = t.sigBytes;
            if (this.clamp(), n % 4) for (a = 0; a < r; a++) {
                var s = i[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                e[n + a >>> 2] |= s << 24 - (n + a) % 4 * 8;
            } else for (var a = 0; a < r; a += 4) e[n + a >>> 2] = i[a >>> 2];
            return this.sigBytes += r, this;
        },
        clamp: function() {
            var e = this.words, i = this.sigBytes;
            e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, e.length = t.ceil(i / 4);
        },
        clone: function() {
            var t = r.clone.call(this);
            return t.words = this.words.slice(0), t;
        },
        random: function(e) {
            for (var i = [], n = 0; n < e; n += 4) i.push(4294967296 * t.random() | 0);
            return new s.init(i, e);
        }
    }), a = i.enc = {}, o = a.Hex = {
        stringify: function(t) {
            for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                n.push((s >>> 4).toString(16)), n.push((15 & s).toString(16));
            }
            return n.join("");
        },
        parse: function(t) {
            for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
            return new s.init(i, e / 2);
        }
    }, h = a.Latin1 = {
        stringify: function(t) {
            for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                n.push(String.fromCharCode(s));
            }
            return n.join("");
        },
        parse: function(t) {
            for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
            return new s.init(i, e);
        }
    }, u = a.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(h.stringify(t)));
            } catch (t) {
                throw new Error("Malformed UTF-8 data");
            }
        },
        parse: function(t) {
            return h.parse(unescape(encodeURIComponent(t)));
        }
    }, c = n.BufferedBlockAlgorithm = r.extend({
        reset: function() {
            this._data = new s.init(), this._nDataBytes = 0;
        },
        _append: function(t) {
            "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
        },
        _process: function(e) {
            var i = this._data, n = i.words, r = i.sigBytes, a = this.blockSize, o = r / (4 * a), h = (o = e ? t.ceil(o) : t.max((0 | o) - this._minBufferSize, 0)) * a, u = t.min(4 * h, r);
            if (h) {
                for (var c = 0; c < h; c += a) this._doProcessBlock(n, c);
                var l = n.splice(0, h);
                i.sigBytes -= u;
            }
            return new s.init(l, u);
        },
        clone: function() {
            var t = r.clone.call(this);
            return t._data = this._data.clone(), t;
        },
        _minBufferSize: 0
    }), l = (n.Hasher = c.extend({
        cfg: r.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t), this.reset();
        },
        reset: function() {
            c.reset.call(this), this._doReset();
        },
        update: function(t) {
            return this._append(t), this._process(), this;
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, i) {
                return new t.init(i).finalize(e);
            };
        },
        _createHmacHelper: function(t) {
            return function(e, i) {
                return new l.HMAC.init(t, i).finalize(e);
            };
        }
    }), i.algo = {});
    return i;
}(Math);

!function(t) {
    var e = vt, i = e.lib, n = i.Base, r = i.WordArray;
    (e = e.x64 = {}).Word = n.extend({
        init: function(t, e) {
            this.high = t, this.low = e;
        }
    }), e.WordArray = n.extend({
        init: function(t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 8 * t.length;
        },
        toX32: function() {
            for (var t = this.words, e = t.length, i = [], n = 0; n < e; n++) {
                var s = t[n];
                i.push(s.high), i.push(s.low);
            }
            return r.create(i, this.sigBytes);
        },
        clone: function() {
            for (var t = n.clone.call(this), e = t.words = this.words.slice(0), i = e.length, r = 0; r < i; r++) e[r] = e[r].clone();
            return t;
        }
    });
}(), vt.lib.Cipher || function(t) {
    var e = (d = vt).lib, i = e.Base, n = e.WordArray, r = e.BufferedBlockAlgorithm, s = d.enc.Base64, a = d.algo.EvpKDF, o = e.Cipher = r.extend({
        cfg: i.extend(),
        createEncryptor: function(t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e);
        },
        createDecryptor: function(t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e);
        },
        init: function(t, e, i) {
            this.cfg = this.cfg.extend(i), this._xformMode = t, this._key = e, this.reset();
        },
        reset: function() {
            r.reset.call(this), this._doReset();
        },
        process: function(t) {
            return this._append(t), this._process();
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(t) {
            return {
                encrypt: function(e, i, n) {
                    return ("string" == typeof i ? g : f).encrypt(t, e, i, n);
                },
                decrypt: function(e, i, n) {
                    return ("string" == typeof i ? g : f).decrypt(t, e, i, n);
                }
            };
        }
    });
    e.StreamCipher = o.extend({
        _doFinalize: function() {
            return this._process(!0);
        },
        blockSize: 1
    });
    var h = d.mode = {}, u = function(t, e, i) {
        var n = this._iv;
        n ? this._iv = void 0 : n = this._prevBlock;
        for (var r = 0; r < i; r++) t[e + r] ^= n[r];
    }, c = (e.BlockCipherMode = i.extend({
        createEncryptor: function(t, e) {
            return this.Encryptor.create(t, e);
        },
        createDecryptor: function(t, e) {
            return this.Decryptor.create(t, e);
        },
        init: function(t, e) {
            this._cipher = t, this._iv = e;
        }
    })).extend();
    c.Encryptor = c.extend({
        processBlock: function(t, e) {
            var i = this._cipher, n = i.blockSize;
            u.call(this, t, e, n), i.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n);
        }
    }), c.Decryptor = c.extend({
        processBlock: function(t, e) {
            var i = this._cipher, n = i.blockSize, r = t.slice(e, e + n);
            i.decryptBlock(t, e), u.call(this, t, e, n), this._prevBlock = r;
        }
    }), h = h.CBC = c, c = (d.pad = {}).Pkcs7 = {
        pad: function(t, e) {
            for (var i = 4 * e, r = (i = i - t.sigBytes % i) << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4) s.push(r);
            i = n.create(s, i), t.concat(i);
        },
        unpad: function(t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2];
        }
    }, e.BlockCipher = o.extend({
        cfg: o.cfg.extend({
            mode: h,
            padding: c
        }),
        reset: function() {
            o.reset.call(this);
            var t = (e = this.cfg).iv, e = e.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor; else i = e.createDecryptor, 
            this._minBufferSize = 1;
            this._mode = i.call(e, this, t && t.words);
        },
        _doProcessBlock: function(t, e) {
            this._mode.processBlock(t, e);
        },
        _doFinalize: function() {
            var t = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                t.pad(this._data, this.blockSize);
                var e = this._process(!0);
            } else e = this._process(!0), t.unpad(e);
            return e;
        },
        blockSize: 4
    });
    var l = e.CipherParams = i.extend({
        init: function(t) {
            this.mixIn(t);
        },
        toString: function(t) {
            return (t || this.formatter).stringify(this);
        }
    }), h = (d.format = {}).OpenSSL = {
        stringify: function(t) {
            var e = t.ciphertext;
            return ((t = t.salt) ? n.create([ 1398893684, 1701076831 ]).concat(t).concat(e) : e).toString(s);
        },
        parse: function(t) {
            var e = (t = s.parse(t)).words;
            if (1398893684 == e[0] && 1701076831 == e[1]) {
                var i = n.create(e.slice(2, 4));
                e.splice(0, 4), t.sigBytes -= 16;
            }
            return l.create({
                ciphertext: t,
                salt: i
            });
        }
    }, f = e.SerializableCipher = i.extend({
        cfg: i.extend({
            format: h
        }),
        encrypt: function(t, e, i, n) {
            n = this.cfg.extend(n);
            var r = t.createEncryptor(i, n);
            return e = r.finalize(e), r = r.cfg, l.create({
                ciphertext: e,
                key: i,
                iv: r.iv,
                algorithm: t,
                mode: r.mode,
                padding: r.padding,
                blockSize: t.blockSize,
                formatter: n.format
            });
        },
        decrypt: function(t, e, i, n) {
            return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(i, n).finalize(e.ciphertext);
        },
        _parse: function(t, e) {
            return "string" == typeof t ? e.parse(t, this) : t;
        }
    }), d = (d.kdf = {}).OpenSSL = {
        execute: function(t, e, i, r) {
            return r || (r = n.random(8)), t = a.create({
                keySize: e + i
            }).compute(t, r), i = n.create(t.words.slice(e), 4 * i), t.sigBytes = 4 * e, l.create({
                key: t,
                iv: i,
                salt: r
            });
        }
    }, g = e.PasswordBasedCipher = f.extend({
        cfg: f.cfg.extend({
            kdf: d
        }),
        encrypt: function(t, e, i, n) {
            return n = this.cfg.extend(n), i = n.kdf.execute(i, t.keySize, t.ivSize), n.iv = i.iv, 
            (t = f.encrypt.call(this, t, e, i.key, n)).mixIn(i), t;
        },
        decrypt: function(t, e, i, n) {
            return n = this.cfg.extend(n), e = this._parse(e, n.format), i = n.kdf.execute(i, t.keySize, t.ivSize, e.salt), 
            n.iv = i.iv, f.decrypt.call(this, t, e, i.key, n);
        }
    });
}(), function() {
    for (var t = vt, e = t.lib.BlockCipher, i = t.algo, n = [], r = [], s = [], a = [], o = [], h = [], u = [], c = [], l = [], f = [], d = [], g = 0; 256 > g; g++) d[g] = 128 > g ? g << 1 : g << 1 ^ 283;
    for (var p = 0, y = 0, g = 0; 256 > g; g++) {
        var v = (v = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4) >>> 8 ^ 255 & v ^ 99;
        n[p] = v, r[v] = p;
        var S = d[p], m = d[S], A = d[m], x = 257 * d[v] ^ 16843008 * v;
        s[p] = x << 24 | x >>> 8, a[p] = x << 16 | x >>> 16, o[p] = x << 8 | x >>> 24, h[p] = x, 
        x = 16843009 * A ^ 65537 * m ^ 257 * S ^ 16843008 * p, u[v] = x << 24 | x >>> 8, 
        c[v] = x << 16 | x >>> 16, l[v] = x << 8 | x >>> 24, f[v] = x, p ? (p = S ^ d[d[d[A ^ S]]], 
        y ^= d[d[y]]) : p = y = 1;
    }
    var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], i = i.AES = e.extend({
        _doReset: function() {
            for (var t = (i = this._key).words, e = i.sigBytes / 4, i = 4 * ((this._nRounds = e + 6) + 1), r = this._keySchedule = [], s = 0; s < i; s++) if (s < e) r[s] = t[s]; else {
                var a = r[s - 1];
                s % e ? 6 < e && 4 == s % e && (a = n[a >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a]) : (a = a << 8 | a >>> 24, 
                a = n[a >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a], 
                a ^= b[s / e | 0] << 24), r[s] = r[s - e] ^ a;
            }
            for (t = this._invKeySchedule = [], e = 0; e < i; e++) s = i - e, a = e % 4 ? r[s] : r[s - 4], 
            t[e] = 4 > e || 4 >= s ? a : u[n[a >>> 24]] ^ c[n[a >>> 16 & 255]] ^ l[n[a >>> 8 & 255]] ^ f[n[255 & a]];
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._keySchedule, s, a, o, h, n);
        },
        decryptBlock: function(t, e) {
            var i = t[e + 1];
            t[e + 1] = t[e + 3], t[e + 3] = i, this._doCryptBlock(t, e, this._invKeySchedule, u, c, l, f, r), 
            i = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = i;
        },
        _doCryptBlock: function(t, e, i, n, r, s, a, o) {
            for (var h = this._nRounds, u = t[e] ^ i[0], c = t[e + 1] ^ i[1], l = t[e + 2] ^ i[2], f = t[e + 3] ^ i[3], d = 4, g = 1; g < h; g++) var p = n[u >>> 24] ^ r[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ a[255 & f] ^ i[d++], y = n[c >>> 24] ^ r[l >>> 16 & 255] ^ s[f >>> 8 & 255] ^ a[255 & u] ^ i[d++], v = n[l >>> 24] ^ r[f >>> 16 & 255] ^ s[u >>> 8 & 255] ^ a[255 & c] ^ i[d++], f = n[f >>> 24] ^ r[u >>> 16 & 255] ^ s[c >>> 8 & 255] ^ a[255 & l] ^ i[d++], u = p, c = y, l = v;
            p = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & f]) ^ i[d++], 
            y = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & u]) ^ i[d++], 
            v = (o[l >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & c]) ^ i[d++], 
            f = (o[f >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & l]) ^ i[d++], 
            t[e] = p, t[e + 1] = y, t[e + 2] = v, t[e + 3] = f;
        },
        keySize: 8
    });
    t.AES = e._createHelper(i);
}(), function() {
    function t(t, e) {
        var i = (this._lBlock >>> t ^ this._rBlock) & e;
        this._rBlock ^= i, this._lBlock ^= i << t;
    }
    function e(t, e) {
        var i = (this._rBlock >>> t ^ this._lBlock) & e;
        this._lBlock ^= i, this._rBlock ^= i << t;
    }
    var i = vt, n = (r = i.lib).WordArray, r = r.BlockCipher, s = i.algo, a = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], o = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], h = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], u = [ {
        0: 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
    }, {
        0: 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
    }, {
        0: 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
    }, {
        0: 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
    }, {
        0: 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
    }, {
        0: 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
    }, {
        0: 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
    }, {
        0: 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
    } ], c = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], l = s.DES = r.extend({
        _doReset: function() {
            for (var t = this._key.words, e = [], i = 0; 56 > i; i++) {
                var n = a[i] - 1;
                e[i] = t[n >>> 5] >>> 31 - n % 32 & 1;
            }
            for (t = this._subKeys = [], n = 0; 16 > n; n++) {
                for (var r = t[n] = [], s = h[n], i = 0; 24 > i; i++) r[i / 6 | 0] |= e[(o[i] - 1 + s) % 28] << 31 - i % 6, 
                r[4 + (i / 6 | 0)] |= e[28 + (o[i + 24] - 1 + s) % 28] << 31 - i % 6;
                for (r[0] = r[0] << 1 | r[0] >>> 31, i = 1; 7 > i; i++) r[i] >>>= 4 * (i - 1) + 3;
                r[7] = r[7] << 5 | r[7] >>> 27;
            }
            for (e = this._invSubKeys = [], i = 0; 16 > i; i++) e[i] = t[15 - i];
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._subKeys);
        },
        decryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._invSubKeys);
        },
        _doCryptBlock: function(i, n, r) {
            this._lBlock = i[n], this._rBlock = i[n + 1], t.call(this, 4, 252645135), t.call(this, 16, 65535), 
            e.call(this, 2, 858993459), e.call(this, 8, 16711935), t.call(this, 1, 1431655765);
            for (var s = 0; 16 > s; s++) {
                for (var a = r[s], o = this._lBlock, h = this._rBlock, l = 0, f = 0; 8 > f; f++) l |= u[f][((h ^ a[f]) & c[f]) >>> 0];
                this._lBlock = h, this._rBlock = o ^ l;
            }
            r = this._lBlock, this._lBlock = this._rBlock, this._rBlock = r, t.call(this, 1, 1431655765), 
            e.call(this, 8, 16711935), e.call(this, 2, 858993459), t.call(this, 16, 65535), 
            t.call(this, 4, 252645135), i[n] = this._lBlock, i[n + 1] = this._rBlock;
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2
    });
    i.DES = r._createHelper(l), s = s.TripleDES = r.extend({
        _doReset: function() {
            var t = this._key.words;
            this._des1 = l.createEncryptor(n.create(t.slice(0, 2))), this._des2 = l.createEncryptor(n.create(t.slice(2, 4))), 
            this._des3 = l.createEncryptor(n.create(t.slice(4, 6)));
        },
        encryptBlock: function(t, e) {
            this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
        },
        decryptBlock: function(t, e) {
            this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
    }), i.TripleDES = r._createHelper(s);
}(), function() {
    var t = vt, e = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function(t) {
            var e = t.words, i = t.sigBytes, n = this._map;
            t.clamp(), t = [];
            for (var r = 0; r < i; r += 3) for (var s = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; 4 > a && r + .75 * a < i; a++) t.push(n.charAt(s >>> 6 * (3 - a) & 63));
            if (e = n.charAt(64)) for (;t.length % 4; ) t.push(e);
            return t.join("");
        },
        parse: function(t) {
            var i = t.length, n = this._map;
            (r = n.charAt(64)) && -1 != (r = t.indexOf(r)) && (i = r);
            for (var r = [], s = 0, a = 0; a < i; a++) if (a % 4) {
                var o = n.indexOf(t.charAt(a - 1)) << a % 4 * 2, h = n.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                r[s >>> 2] |= (o | h) << 24 - s % 4 * 8, s++;
            }
            return e.create(r, s);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
}(), function(t) {
    function e(t, e, i, n, r, s, a) {
        return ((t = t + (e & i | ~e & n) + r + a) << s | t >>> 32 - s) + e;
    }
    function i(t, e, i, n, r, s, a) {
        return ((t = t + (e & n | i & ~n) + r + a) << s | t >>> 32 - s) + e;
    }
    function n(t, e, i, n, r, s, a) {
        return ((t = t + (e ^ i ^ n) + r + a) << s | t >>> 32 - s) + e;
    }
    function r(t, e, i, n, r, s, a) {
        return ((t = t + (i ^ (e | ~n)) + r + a) << s | t >>> 32 - s) + e;
    }
    for (var s = vt, a = (h = s.lib).WordArray, o = h.Hasher, h = s.algo, u = [], c = 0; 64 > c; c++) u[c] = 4294967296 * t.abs(t.sin(c + 1)) | 0;
    h = h.MD5 = o.extend({
        _doReset: function() {
            this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(t, s) {
            for (a = 0; 16 > a; a++) {
                h = t[o = s + a];
                t[o] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
            }
            var a = this._hash.words, o = t[s + 0], h = t[s + 1], c = t[s + 2], l = t[s + 3], f = t[s + 4], d = t[s + 5], g = t[s + 6], p = t[s + 7], y = t[s + 8], v = t[s + 9], S = t[s + 10], m = t[s + 11], A = t[s + 12], x = t[s + 13], b = t[s + 14], F = t[s + 15], E = a[0], w = a[1], P = a[2], H = a[3], w = r(w = r(w = r(w = r(w = n(w = n(w = n(w = n(w = i(w = i(w = i(w = i(w = e(w = e(w = e(w = e(w, P = e(P, H = e(H, E = e(E, w, P, H, o, 7, u[0]), w, P, h, 12, u[1]), E, w, c, 17, u[2]), H, E, l, 22, u[3]), P = e(P, H = e(H, E = e(E, w, P, H, f, 7, u[4]), w, P, d, 12, u[5]), E, w, g, 17, u[6]), H, E, p, 22, u[7]), P = e(P, H = e(H, E = e(E, w, P, H, y, 7, u[8]), w, P, v, 12, u[9]), E, w, S, 17, u[10]), H, E, m, 22, u[11]), P = e(P, H = e(H, E = e(E, w, P, H, A, 7, u[12]), w, P, x, 12, u[13]), E, w, b, 17, u[14]), H, E, F, 22, u[15]), P = i(P, H = i(H, E = i(E, w, P, H, h, 5, u[16]), w, P, g, 9, u[17]), E, w, m, 14, u[18]), H, E, o, 20, u[19]), P = i(P, H = i(H, E = i(E, w, P, H, d, 5, u[20]), w, P, S, 9, u[21]), E, w, F, 14, u[22]), H, E, f, 20, u[23]), P = i(P, H = i(H, E = i(E, w, P, H, v, 5, u[24]), w, P, b, 9, u[25]), E, w, l, 14, u[26]), H, E, y, 20, u[27]), P = i(P, H = i(H, E = i(E, w, P, H, x, 5, u[28]), w, P, c, 9, u[29]), E, w, p, 14, u[30]), H, E, A, 20, u[31]), P = n(P, H = n(H, E = n(E, w, P, H, d, 4, u[32]), w, P, y, 11, u[33]), E, w, m, 16, u[34]), H, E, b, 23, u[35]), P = n(P, H = n(H, E = n(E, w, P, H, h, 4, u[36]), w, P, f, 11, u[37]), E, w, p, 16, u[38]), H, E, S, 23, u[39]), P = n(P, H = n(H, E = n(E, w, P, H, x, 4, u[40]), w, P, o, 11, u[41]), E, w, l, 16, u[42]), H, E, g, 23, u[43]), P = n(P, H = n(H, E = n(E, w, P, H, v, 4, u[44]), w, P, A, 11, u[45]), E, w, F, 16, u[46]), H, E, c, 23, u[47]), P = r(P, H = r(H, E = r(E, w, P, H, o, 6, u[48]), w, P, p, 10, u[49]), E, w, b, 15, u[50]), H, E, d, 21, u[51]), P = r(P, H = r(H, E = r(E, w, P, H, A, 6, u[52]), w, P, l, 10, u[53]), E, w, S, 15, u[54]), H, E, h, 21, u[55]), P = r(P, H = r(H, E = r(E, w, P, H, y, 6, u[56]), w, P, F, 10, u[57]), E, w, g, 15, u[58]), H, E, x, 21, u[59]), P = r(P, H = r(H, E = r(E, w, P, H, f, 6, u[60]), w, P, m, 10, u[61]), E, w, c, 15, u[62]), H, E, v, 21, u[63]);
            a[0] = a[0] + E | 0, a[1] = a[1] + w | 0, a[2] = a[2] + P | 0, a[3] = a[3] + H | 0;
        },
        _doFinalize: function() {
            var e = this._data, i = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
            i[r >>> 5] |= 128 << 24 - r % 32;
            var s = t.floor(n / 4294967296);
            for (i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
            i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
            e.sigBytes = 4 * (i.length + 1), this._process(), i = (e = this._hash).words, n = 0; 4 > n; n++) r = i[n], 
            i[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
            return e;
        },
        clone: function() {
            var t = o.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    }), s.MD5 = o._createHelper(h), s.HmacMD5 = o._createHmacHelper(h);
}(Math), function() {
    var t = vt, e = (r = t.lib).WordArray, i = r.Hasher, n = [], r = t.algo.SHA1 = i.extend({
        _doReset: function() {
            this._hash = new e.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(t, e) {
            for (var i = this._hash.words, r = i[0], s = i[1], a = i[2], o = i[3], h = i[4], u = 0; 80 > u; u++) {
                if (16 > u) n[u] = 0 | t[e + u]; else {
                    var c = n[u - 3] ^ n[u - 8] ^ n[u - 14] ^ n[u - 16];
                    n[u] = c << 1 | c >>> 31;
                }
                c = (r << 5 | r >>> 27) + h + n[u], c = 20 > u ? c + (1518500249 + (s & a | ~s & o)) : 40 > u ? c + (1859775393 + (s ^ a ^ o)) : 60 > u ? c + ((s & a | s & o | a & o) - 1894007588) : c + ((s ^ a ^ o) - 899497514), 
                h = o, o = a, a = s << 30 | s >>> 2, s = r, r = c;
            }
            i[0] = i[0] + r | 0, i[1] = i[1] + s | 0, i[2] = i[2] + a | 0, i[3] = i[3] + o | 0, 
            i[4] = i[4] + h | 0;
        },
        _doFinalize: function() {
            var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296), 
            e[15 + (n + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash;
        },
        clone: function() {
            var t = i.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    t.SHA1 = i._createHelper(r), t.HmacSHA1 = i._createHmacHelper(r);
}(), function(t) {
    for (var e = vt, i = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, s = [], a = [], o = function(t) {
        return 4294967296 * (t - (0 | t)) | 0;
    }, h = 2, u = 0; 64 > u; ) {
        var c;
        t: {
            c = h;
            for (var l = t.sqrt(c), f = 2; f <= l; f++) if (!(c % f)) {
                c = !1;
                break t;
            }
            c = !0;
        }
        c && (8 > u && (s[u] = o(t.pow(h, .5))), a[u] = o(t.pow(h, 1 / 3)), u++), h++;
    }
    var d = [], r = r.SHA256 = n.extend({
        _doReset: function() {
            this._hash = new i.init(s.slice(0));
        },
        _doProcessBlock: function(t, e) {
            for (var i = this._hash.words, n = i[0], r = i[1], s = i[2], o = i[3], h = i[4], u = i[5], c = i[6], l = i[7], f = 0; 64 > f; f++) {
                if (16 > f) d[f] = 0 | t[e + f]; else {
                    var g = d[f - 15], p = d[f - 2];
                    d[f] = ((g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3) + d[f - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + d[f - 16];
                }
                g = l + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & c) + a[f] + d[f], 
                p = ((n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)) + (n & r ^ n & s ^ r & s), 
                l = c, c = u, u = h, h = o + g | 0, o = s, s = r, r = n, n = g + p | 0;
            }
            i[0] = i[0] + n | 0, i[1] = i[1] + r | 0, i[2] = i[2] + s | 0, i[3] = i[3] + o | 0, 
            i[4] = i[4] + h | 0, i[5] = i[5] + u | 0, i[6] = i[6] + c | 0, i[7] = i[7] + l | 0;
        },
        _doFinalize: function() {
            var e = this._data, i = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
            return i[r >>> 5] |= 128 << 24 - r % 32, i[14 + (r + 64 >>> 9 << 4)] = t.floor(n / 4294967296), 
            i[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * i.length, this._process(), this._hash;
        },
        clone: function() {
            var t = n.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    e.SHA256 = n._createHelper(r), e.HmacSHA256 = n._createHmacHelper(r);
}(Math), function() {
    var t = vt, e = t.lib.WordArray, i = (n = t.algo).SHA256, n = n.SHA224 = i.extend({
        _doReset: function() {
            this._hash = new e.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
        },
        _doFinalize: function() {
            var t = i._doFinalize.call(this);
            return t.sigBytes -= 4, t;
        }
    });
    t.SHA224 = i._createHelper(n), t.HmacSHA224 = i._createHmacHelper(n);
}(), function() {
    function t() {
        return n.create.apply(n, arguments);
    }
    for (var e = vt, i = e.lib.Hasher, n = (s = e.x64).Word, r = s.WordArray, s = e.algo, a = [ t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591) ], o = [], h = 0; 80 > h; h++) o[h] = t();
    s = s.SHA512 = i.extend({
        _doReset: function() {
            this._hash = new r.init([ new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209) ]);
        },
        _doProcessBlock: function(t, e) {
            for (var i = (l = this._hash.words)[0], n = l[1], r = l[2], s = l[3], h = l[4], u = l[5], c = l[6], l = l[7], f = i.high, d = i.low, g = n.high, p = n.low, y = r.high, v = r.low, S = s.high, m = s.low, A = h.high, x = h.low, b = u.high, F = u.low, E = c.high, w = c.low, P = l.high, H = l.low, C = f, O = d, D = g, T = p, j = y, I = v, R = S, B = m, N = A, V = x, K = b, _ = F, L = E, k = w, M = P, q = H, U = 0; 80 > U; U++) {
                Q = o[U];
                if (16 > U) var z = Q.high = 0 | t[e + 2 * U], W = Q.low = 0 | t[e + 2 * U + 1]; else {
                    var z = ((W = (z = o[U - 15]).high) >>> 1 | (J = z.low) << 31) ^ (W >>> 8 | J << 24) ^ W >>> 7, J = (J >>> 1 | W << 31) ^ (J >>> 8 | W << 24) ^ (J >>> 7 | W << 25), G = ((W = (G = o[U - 2]).high) >>> 19 | (X = G.low) << 13) ^ (W << 3 | X >>> 29) ^ W >>> 6, X = (X >>> 19 | W << 13) ^ (X << 3 | W >>> 29) ^ (X >>> 6 | W << 26), Y = (W = o[U - 7]).high, $ = (Z = o[U - 16]).high, Z = Z.low, z = (z = (z = z + Y + ((W = J + W.low) >>> 0 < J >>> 0 ? 1 : 0)) + G + ((W = W + X) >>> 0 < X >>> 0 ? 1 : 0)) + $ + ((W = W + Z) >>> 0 < Z >>> 0 ? 1 : 0);
                    Q.high = z, Q.low = W;
                }
                var Y = N & K ^ ~N & L, Z = V & _ ^ ~V & k, Q = C & D ^ C & j ^ D & j, tt = O & T ^ O & I ^ T & I, J = (C >>> 28 | O << 4) ^ (C << 30 | O >>> 2) ^ (C << 25 | O >>> 7), G = (O >>> 28 | C << 4) ^ (O << 30 | C >>> 2) ^ (O << 25 | C >>> 7), et = (X = a[U]).high, it = X.low, $ = ($ = ($ = ($ = M + ((N >>> 14 | V << 18) ^ (N >>> 18 | V << 14) ^ (N << 23 | V >>> 9)) + ((X = q + ((V >>> 14 | N << 18) ^ (V >>> 18 | N << 14) ^ (V << 23 | N >>> 9))) >>> 0 < q >>> 0 ? 1 : 0)) + Y + ((X = X + Z) >>> 0 < Z >>> 0 ? 1 : 0)) + et + ((X = X + it) >>> 0 < it >>> 0 ? 1 : 0)) + z + ((X = X + W) >>> 0 < W >>> 0 ? 1 : 0), Q = J + Q + ((W = G + tt) >>> 0 < G >>> 0 ? 1 : 0), M = L, q = k, L = K, k = _, K = N, _ = V, N = R + $ + ((V = B + X | 0) >>> 0 < B >>> 0 ? 1 : 0) | 0, R = j, B = I, j = D, I = T, D = C, T = O, C = $ + Q + ((O = X + W | 0) >>> 0 < X >>> 0 ? 1 : 0) | 0;
            }
            d = i.low = d + O, i.high = f + C + (d >>> 0 < O >>> 0 ? 1 : 0), p = n.low = p + T, 
            n.high = g + D + (p >>> 0 < T >>> 0 ? 1 : 0), v = r.low = v + I, r.high = y + j + (v >>> 0 < I >>> 0 ? 1 : 0), 
            m = s.low = m + B, s.high = S + R + (m >>> 0 < B >>> 0 ? 1 : 0), x = h.low = x + V, 
            h.high = A + N + (x >>> 0 < V >>> 0 ? 1 : 0), F = u.low = F + _, u.high = b + K + (F >>> 0 < _ >>> 0 ? 1 : 0), 
            w = c.low = w + k, c.high = E + L + (w >>> 0 < k >>> 0 ? 1 : 0), H = l.low = H + q, 
            l.high = P + M + (H >>> 0 < q >>> 0 ? 1 : 0);
        },
        _doFinalize: function() {
            var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            return e[n >>> 5] |= 128 << 24 - n % 32, e[30 + (n + 128 >>> 10 << 5)] = Math.floor(i / 4294967296), 
            e[31 + (n + 128 >>> 10 << 5)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32();
        },
        clone: function() {
            var t = i.clone.call(this);
            return t._hash = this._hash.clone(), t;
        },
        blockSize: 32
    }), e.SHA512 = i._createHelper(s), e.HmacSHA512 = i._createHmacHelper(s);
}(), function() {
    var t = vt, e = (r = t.x64).Word, i = r.WordArray, n = (r = t.algo).SHA512, r = r.SHA384 = n.extend({
        _doReset: function() {
            this._hash = new i.init([ new e.init(3418070365, 3238371032), new e.init(1654270250, 914150663), new e.init(2438529370, 812702999), new e.init(355462360, 4144912697), new e.init(1731405415, 4290775857), new e.init(2394180231, 1750603025), new e.init(3675008525, 1694076839), new e.init(1203062813, 3204075428) ]);
        },
        _doFinalize: function() {
            var t = n._doFinalize.call(this);
            return t.sigBytes -= 16, t;
        }
    });
    t.SHA384 = n._createHelper(r), t.HmacSHA384 = n._createHmacHelper(r);
}(), function() {
    var t = vt, e = (n = t.lib).WordArray, i = n.Hasher, n = t.algo, r = e.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), s = e.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), a = e.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), o = e.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), h = e.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), u = e.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]), n = n.RIPEMD160 = i.extend({
        _doReset: function() {
            this._hash = e.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(t, e) {
            for (P = 0; 16 > P; P++) {
                m = t[S = e + P];
                t[S] = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8);
            }
            var i, n, c, l, f, d, g, p, y, v, S = this._hash.words, m = h.words, A = u.words, x = r.words, b = s.words, F = a.words, E = o.words;
            d = i = S[0], g = n = S[1], p = c = S[2], y = l = S[3], v = f = S[4];
            for (var w, P = 0; 80 > P; P += 1) w = i + t[e + x[P]] | 0, w = 16 > P ? w + ((n ^ c ^ l) + m[0]) : 32 > P ? w + ((n & c | ~n & l) + m[1]) : 48 > P ? w + (((n | ~c) ^ l) + m[2]) : 64 > P ? w + ((n & l | c & ~l) + m[3]) : w + ((n ^ (c | ~l)) + m[4]), 
            w = (w = (w |= 0) << F[P] | w >>> 32 - F[P]) + f | 0, i = f, f = l, l = c << 10 | c >>> 22, 
            c = n, n = w, w = d + t[e + b[P]] | 0, w = 16 > P ? w + ((g ^ (p | ~y)) + A[0]) : 32 > P ? w + ((g & y | p & ~y) + A[1]) : 48 > P ? w + (((g | ~p) ^ y) + A[2]) : 64 > P ? w + ((g & p | ~g & y) + A[3]) : w + ((g ^ p ^ y) + A[4]), 
            w = (w = (w |= 0) << E[P] | w >>> 32 - E[P]) + v | 0, d = v, v = y, y = p << 10 | p >>> 22, 
            p = g, g = w;
            w = S[1] + c + y | 0, S[1] = S[2] + l + v | 0, S[2] = S[3] + f + d | 0, S[3] = S[4] + i + g | 0, 
            S[4] = S[0] + n + p | 0, S[0] = w;
        },
        _doFinalize: function() {
            var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            for (e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
            t.sigBytes = 4 * (e.length + 1), this._process(), e = (t = this._hash).words, i = 0; 5 > i; i++) n = e[i], 
            e[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
            return t;
        },
        clone: function() {
            var t = i.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    t.RIPEMD160 = i._createHelper(n), t.HmacRIPEMD160 = i._createHmacHelper(n);
}(Math), function() {
    var t = vt, e = t.enc.Utf8;
    t.algo.HMAC = t.lib.Base.extend({
        init: function(t, i) {
            t = this._hasher = new t.init(), "string" == typeof i && (i = e.parse(i));
            var n = t.blockSize, r = 4 * n;
            i.sigBytes > r && (i = t.finalize(i)), i.clamp();
            for (var s = this._oKey = i.clone(), a = this._iKey = i.clone(), o = s.words, h = a.words, u = 0; u < n; u++) o[u] ^= 1549556828, 
            h[u] ^= 909522486;
            s.sigBytes = a.sigBytes = r, this.reset();
        },
        reset: function() {
            var t = this._hasher;
            t.reset(), t.update(this._iKey);
        },
        update: function(t) {
            return this._hasher.update(t), this;
        },
        finalize: function(t) {
            var e = this._hasher;
            return t = e.finalize(t), e.reset(), e.finalize(this._oKey.clone().concat(t));
        }
    });
}(), function() {
    var t = vt, e = t.lib, i = e.Base, n = e.WordArray, r = (e = t.algo).HMAC, s = e.PBKDF2 = i.extend({
        cfg: i.extend({
            keySize: 4,
            hasher: e.SHA1,
            iterations: 1
        }),
        init: function(t) {
            this.cfg = this.cfg.extend(t);
        },
        compute: function(t, e) {
            for (var i = this.cfg, s = r.create(i.hasher, t), a = n.create(), o = n.create([ 1 ]), h = a.words, u = o.words, c = i.keySize, i = i.iterations; h.length < c; ) {
                var l = s.update(e).finalize(o);
                s.reset();
                for (var f = l.words, d = f.length, g = l, p = 1; p < i; p++) {
                    g = s.finalize(g), s.reset();
                    for (var y = g.words, v = 0; v < d; v++) f[v] ^= y[v];
                }
                a.concat(l), u[0]++;
            }
            return a.sigBytes = 4 * c, a;
        }
    });
    t.PBKDF2 = function(t, e, i) {
        return s.create(i).compute(t, e);
    };
}();

var St, mt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", At = "=";

"Microsoft Internet Explorer" == dt.appName ? (i.prototype.am = function(t, e, i, n, r, s) {
    for (var a = 32767 & e, o = e >> 15; --s >= 0; ) {
        var h = 32767 & this[t], u = this[t++] >> 15, c = o * h + u * a;
        r = ((h = a * h + ((32767 & c) << 15) + i[n] + (1073741823 & r)) >>> 30) + (c >>> 15) + o * u + (r >>> 30), 
        i[n++] = 1073741823 & h;
    }
    return r;
}, St = 30) : "Netscape" != dt.appName ? (i.prototype.am = function(t, e, i, n, r, s) {
    for (;--s >= 0; ) {
        var a = e * this[t++] + i[n] + r;
        r = Math.floor(a / 67108864), i[n++] = 67108863 & a;
    }
    return r;
}, St = 26) : (i.prototype.am = function(t, e, i, n, r, s) {
    for (var a = 16383 & e, o = e >> 14; --s >= 0; ) {
        var h = 16383 & this[t], u = this[t++] >> 14, c = o * h + u * a;
        r = ((h = a * h + ((16383 & c) << 14) + i[n] + r) >> 28) + (c >> 14) + o * u, i[n++] = 268435455 & h;
    }
    return r;
}, St = 28), i.prototype.DB = St, i.prototype.DM = (1 << St) - 1, i.prototype.DV = 1 << St;

i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - St, i.prototype.F2 = 2 * St - 52;

var xt, bt, Ft = "0123456789abcdefghijklmnopqrstuvwxyz", Et = new Array();

for (xt = "0".charCodeAt(0), bt = 0; bt <= 9; ++bt) Et[xt++] = bt;

for (xt = "a".charCodeAt(0), bt = 10; bt < 36; ++bt) Et[xt++] = bt;

for (xt = "A".charCodeAt(0), bt = 10; bt < 36; ++bt) Et[xt++] = bt;

u.prototype.convert = function(t) {
    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
}, u.prototype.revert = function(t) {
    return t;
}, u.prototype.reduce = function(t) {
    t.divRemTo(this.m, null, t);
}, u.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
}, u.prototype.sqrTo = function(t, e) {
    t.squareTo(e), this.reduce(e);
}, c.prototype.convert = function(t) {
    var e = n();
    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e), 
    e;
}, c.prototype.revert = function(t) {
    var e = n();
    return t.copyTo(e), this.reduce(e), e;
}, c.prototype.reduce = function(t) {
    for (;t.t <= this.mt2; ) t[t.t++] = 0;
    for (var e = 0; e < this.m.t; ++e) {
        var i = 32767 & t[e], n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (t[i = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, 
        t[++i]++;
    }
    t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
}, c.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
}, c.prototype.sqrTo = function(t, e) {
    t.squareTo(e), this.reduce(e);
}, i.prototype.copyTo = function(t) {
    for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
    t.t = this.t, t.s = this.s;
}, i.prototype.fromInt = function(t) {
    this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
}, i.prototype.fromString = function(t, e) {
    var n;
    if (16 == e) n = 4; else if (8 == e) n = 3; else if (256 == e) n = 8; else if (2 == e) n = 1; else if (32 == e) n = 5; else {
        if (4 != e) return void this.fromRadix(t, e);
        n = 2;
    }
    this.t = 0, this.s = 0;
    for (var r = t.length, a = !1, o = 0; --r >= 0; ) {
        var h = 8 == n ? 255 & t[r] : s(t, r);
        h < 0 ? "-" == t.charAt(r) && (a = !0) : (a = !1, 0 == o ? this[this.t++] = h : o + n > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - o) - 1) << o, 
        this[this.t++] = h >> this.DB - o) : this[this.t - 1] |= h << o, (o += n) >= this.DB && (o -= this.DB));
    }
    8 == n && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), 
    this.clamp(), a && i.ZERO.subTo(this, this);
}, i.prototype.clamp = function() {
    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
}, i.prototype.dlShiftTo = function(t, e) {
    var i;
    for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
    for (i = t - 1; i >= 0; --i) e[i] = 0;
    e.t = this.t + t, e.s = this.s;
}, i.prototype.drShiftTo = function(t, e) {
    for (var i = t; i < this.t; ++i) e[i - t] = this[i];
    e.t = Math.max(this.t - t, 0), e.s = this.s;
}, i.prototype.lShiftTo = function(t, e) {
    var i, n = t % this.DB, r = this.DB - n, s = (1 << r) - 1, a = Math.floor(t / this.DB), o = this.s << n & this.DM;
    for (i = this.t - 1; i >= 0; --i) e[i + a + 1] = this[i] >> r | o, o = (this[i] & s) << n;
    for (i = a - 1; i >= 0; --i) e[i] = 0;
    e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp();
}, i.prototype.rShiftTo = function(t, e) {
    e.s = this.s;
    var i = Math.floor(t / this.DB);
    if (i >= this.t) e.t = 0; else {
        var n = t % this.DB, r = this.DB - n, s = (1 << n) - 1;
        e[0] = this[i] >> n;
        for (var a = i + 1; a < this.t; ++a) e[a - i - 1] |= (this[a] & s) << r, e[a - i] = this[a] >> n;
        n > 0 && (e[this.t - i - 1] |= (this.s & s) << r), e.t = this.t - i, e.clamp();
    }
}, i.prototype.subTo = function(t, e) {
    for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r; ) n += this[i] - t[i], 
    e[i++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
        for (n -= t.s; i < this.t; ) n += this[i], e[i++] = n & this.DM, n >>= this.DB;
        n += this.s;
    } else {
        for (n += this.s; i < t.t; ) n -= t[i], e[i++] = n & this.DM, n >>= this.DB;
        n -= t.s;
    }
    e.s = n < 0 ? -1 : 0, n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n), e.t = i, 
    e.clamp();
}, i.prototype.multiplyTo = function(t, e) {
    var n = this.abs(), r = t.abs(), s = n.t;
    for (e.t = s + r.t; --s >= 0; ) e[s] = 0;
    for (s = 0; s < r.t; ++s) e[s + n.t] = n.am(0, r[s], e, s, 0, n.t);
    e.s = 0, e.clamp(), this.s != t.s && i.ZERO.subTo(e, e);
}, i.prototype.squareTo = function(t) {
    for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; ) t[i] = 0;
    for (i = 0; i < e.t - 1; ++i) {
        var n = e.am(i, e[i], t, 2 * i, 0, 1);
        (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
        t[i + e.t + 1] = 1);
    }
    t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
}, i.prototype.divRemTo = function(t, e, r) {
    var s = t.abs();
    if (!(s.t <= 0)) {
        var a = this.abs();
        if (a.t < s.t) return null != e && e.fromInt(0), void (null != r && this.copyTo(r));
        null == r && (r = n());
        var h = n(), u = this.s, c = t.s, l = this.DB - o(s[s.t - 1]);
        l > 0 ? (s.lShiftTo(l, h), a.lShiftTo(l, r)) : (s.copyTo(h), a.copyTo(r));
        var f = h.t, d = h[f - 1];
        if (0 != d) {
            var g = d * (1 << this.F1) + (f > 1 ? h[f - 2] >> this.F2 : 0), p = this.FV / g, y = (1 << this.F1) / g, v = 1 << this.F2, S = r.t, m = S - f, A = null == e ? n() : e;
            for (h.dlShiftTo(m, A), r.compareTo(A) >= 0 && (r[r.t++] = 1, r.subTo(A, r)), i.ONE.dlShiftTo(f, A), 
            A.subTo(h, h); h.t < f; ) h[h.t++] = 0;
            for (;--m >= 0; ) {
                var x = r[--S] == d ? this.DM : Math.floor(r[S] * p + (r[S - 1] + v) * y);
                if ((r[S] += h.am(0, x, r, m, 0, f)) < x) for (h.dlShiftTo(m, A), r.subTo(A, r); r[S] < --x; ) r.subTo(A, r);
            }
            null != e && (r.drShiftTo(f, e), u != c && i.ZERO.subTo(e, e)), r.t = f, r.clamp(), 
            l > 0 && r.rShiftTo(l, r), u < 0 && i.ZERO.subTo(r, r);
        }
    }
}, i.prototype.invDigit = function() {
    if (this.t < 1) return 0;
    var t = this[0];
    if (0 == (1 & t)) return 0;
    var e = 3 & t;
    return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, 
    (e = e * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
}, i.prototype.isEven = function() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s);
}, i.prototype.exp = function(t, e) {
    if (t > 4294967295 || t < 1) return i.ONE;
    var r = n(), s = n(), a = e.convert(this), h = o(t) - 1;
    for (a.copyTo(r); --h >= 0; ) if (e.sqrTo(r, s), (t & 1 << h) > 0) e.mulTo(s, a, r); else {
        var u = r;
        r = s, s = u;
    }
    return e.revert(r);
}, i.prototype.toString = function(t) {
    if (this.s < 0) return "-" + this.negate().toString(t);
    var e;
    if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
        if (4 != t) return this.toRadix(t);
        e = 2;
    }
    var i, n = (1 << e) - 1, s = !1, a = "", o = this.t, h = this.DB - o * this.DB % e;
    if (o-- > 0) for (h < this.DB && (i = this[o] >> h) > 0 && (s = !0, a = r(i)); o >= 0; ) h < e ? (i = (this[o] & (1 << h) - 1) << e - h, 
    i |= this[--o] >> (h += this.DB - e)) : (i = this[o] >> (h -= e) & n, h <= 0 && (h += this.DB, 
    --o)), i > 0 && (s = !0), s && (a += r(i));
    return s ? a : "0";
}, i.prototype.negate = function() {
    var t = n();
    return i.ZERO.subTo(this, t), t;
}, i.prototype.abs = function() {
    return this.s < 0 ? this.negate() : this;
}, i.prototype.compareTo = function(t) {
    var e = this.s - t.s;
    if (0 != e) return e;
    var i = this.t;
    if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
    for (;--i >= 0; ) if (0 != (e = this[i] - t[i])) return e;
    return 0;
}, i.prototype.bitLength = function() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + o(this[this.t - 1] ^ this.s & this.DM);
}, i.prototype.mod = function(t) {
    var e = n();
    return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(i.ZERO) > 0 && t.subTo(e, e), 
    e;
}, i.prototype.modPowInt = function(t, e) {
    var i;
    return i = t < 256 || e.isEven() ? new u(e) : new c(e), this.exp(t, i);
}, i.ZERO = a(0), i.ONE = a(1), v.prototype.convert = S, v.prototype.revert = S, 
v.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i);
}, v.prototype.sqrTo = function(t, e) {
    t.squareTo(e);
}, m.prototype.convert = function(t) {
    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
    if (t.compareTo(this.m) < 0) return t;
    var e = n();
    return t.copyTo(e), this.reduce(e), e;
}, m.prototype.revert = function(t) {
    return t;
}, m.prototype.reduce = function(t) {
    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
    t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
}, m.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
}, m.prototype.sqrTo = function(t, e) {
    t.squareTo(e), this.reduce(e);
};

var wt = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], Pt = (1 << 26) / wt[wt.length - 1];

i.prototype.chunkSize = function(t) {
    return Math.floor(Math.LN2 * this.DB / Math.log(t));
}, i.prototype.toRadix = function(t) {
    if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
    var e = this.chunkSize(t), i = Math.pow(t, e), r = a(i), s = n(), o = n(), h = "";
    for (this.divRemTo(r, s, o); s.signum() > 0; ) h = (i + o.intValue()).toString(t).substr(1) + h, 
    s.divRemTo(r, s, o);
    return o.intValue().toString(t) + h;
}, i.prototype.fromRadix = function(t, e) {
    this.fromInt(0), null == e && (e = 10);
    for (var n = this.chunkSize(e), r = Math.pow(e, n), a = !1, o = 0, h = 0, u = 0; u < t.length; ++u) {
        var c = s(t, u);
        c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (a = !0) : (h = e * h + c, ++o >= n && (this.dMultiply(r), 
        this.dAddOffset(h, 0), o = 0, h = 0));
    }
    o > 0 && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(h, 0)), a && i.ZERO.subTo(this, this);
}, i.prototype.fromNumber = function(t, e, n) {
    if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, n), 
    this.testBit(t - 1) || this.bitwiseTo(i.ONE.shiftLeft(t - 1), f, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), 
    this.bitLength() > t && this.subTo(i.ONE.shiftLeft(t - 1), this); else {
        var r = new Array(), s = 7 & t;
        r.length = 1 + (t >> 3), e.nextBytes(r), s > 0 ? r[0] &= (1 << s) - 1 : r[0] = 0, 
        this.fromString(r, 256);
    }
}, i.prototype.bitwiseTo = function(t, e, i) {
    var n, r, s = Math.min(t.t, this.t);
    for (n = 0; n < s; ++n) i[n] = e(this[n], t[n]);
    if (t.t < this.t) {
        for (r = t.s & this.DM, n = s; n < this.t; ++n) i[n] = e(this[n], r);
        i.t = this.t;
    } else {
        for (r = this.s & this.DM, n = s; n < t.t; ++n) i[n] = e(r, t[n]);
        i.t = t.t;
    }
    i.s = e(this.s, t.s), i.clamp();
}, i.prototype.changeBit = function(t, e) {
    var n = i.ONE.shiftLeft(t);
    return this.bitwiseTo(n, e, n), n;
}, i.prototype.addTo = function(t, e) {
    for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r; ) n += this[i] + t[i], 
    e[i++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
        for (n += t.s; i < this.t; ) n += this[i], e[i++] = n & this.DM, n >>= this.DB;
        n += this.s;
    } else {
        for (n += this.s; i < t.t; ) n += t[i], e[i++] = n & this.DM, n >>= this.DB;
        n += t.s;
    }
    e.s = n < 0 ? -1 : 0, n > 0 ? e[i++] = n : n < -1 && (e[i++] = this.DV + n), e.t = i, 
    e.clamp();
}, i.prototype.dMultiply = function(t) {
    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
}, i.prototype.dAddOffset = function(t, e) {
    if (0 != t) {
        for (;this.t <= e; ) this[this.t++] = 0;
        for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
        ++this[e];
    }
}, i.prototype.multiplyLowerTo = function(t, e, i) {
    var n = Math.min(this.t + t.t, e);
    for (i.s = 0, i.t = n; n > 0; ) i[--n] = 0;
    var r;
    for (r = i.t - this.t; n < r; ++n) i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
    for (r = Math.min(t.t, e); n < r; ++n) this.am(0, t[n], i, n, 0, e - n);
    i.clamp();
}, i.prototype.multiplyUpperTo = function(t, e, i) {
    --e;
    var n = i.t = this.t + t.t - e;
    for (i.s = 0; --n >= 0; ) i[n] = 0;
    for (n = Math.max(e - this.t, 0); n < t.t; ++n) i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
    i.clamp(), i.drShiftTo(1, i);
}, i.prototype.modInt = function(t) {
    if (t <= 0) return 0;
    var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
    if (this.t > 0) if (0 == e) i = this[0] % t; else for (var n = this.t - 1; n >= 0; --n) i = (e * i + this[n]) % t;
    return i;
}, i.prototype.millerRabin = function(t) {
    var e = this.subtract(i.ONE), r = e.getLowestSetBit();
    if (r <= 0) return !1;
    var s = e.shiftRight(r);
    (t = t + 1 >> 1) > wt.length && (t = wt.length);
    for (var a = n(), o = 0; o < t; ++o) {
        a.fromInt(wt[Math.floor(Math.random() * wt.length)]);
        var h = a.modPow(s, this);
        if (0 != h.compareTo(i.ONE) && 0 != h.compareTo(e)) {
            for (var u = 1; u++ < r && 0 != h.compareTo(e); ) if (0 == (h = h.modPowInt(2, this)).compareTo(i.ONE)) return !1;
            if (0 != h.compareTo(e)) return !1;
        }
    }
    return !0;
}, i.prototype.clone = function() {
    var t = n();
    return this.copyTo(t), t;
}, i.prototype.intValue = function() {
    if (this.s < 0) {
        if (1 == this.t) return this[0] - this.DV;
        if (0 == this.t) return -1;
    } else {
        if (1 == this.t) return this[0];
        if (0 == this.t) return 0;
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}, i.prototype.byteValue = function() {
    return 0 == this.t ? this.s : this[0] << 24 >> 24;
}, i.prototype.shortValue = function() {
    return 0 == this.t ? this.s : this[0] << 16 >> 16;
}, i.prototype.signum = function() {
    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
}, i.prototype.toByteArray = function() {
    var t = this.t, e = new Array();
    e[0] = this.s;
    var i, n = this.DB - t * this.DB % 8, r = 0;
    if (t-- > 0) for (n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[r++] = i | this.s << this.DB - n); t >= 0; ) n < 8 ? (i = (this[t] & (1 << n) - 1) << 8 - n, 
    i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, 
    --t)), 0 != (128 & i) && (i |= -256), 0 == r && (128 & this.s) != (128 & i) && ++r, 
    (r > 0 || i != this.s) && (e[r++] = i);
    return e;
}, i.prototype.equals = function(t) {
    return 0 == this.compareTo(t);
}, i.prototype.min = function(t) {
    return this.compareTo(t) < 0 ? this : t;
}, i.prototype.max = function(t) {
    return this.compareTo(t) > 0 ? this : t;
}, i.prototype.and = function(t) {
    var e = n();
    return this.bitwiseTo(t, l, e), e;
}, i.prototype.or = function(t) {
    var e = n();
    return this.bitwiseTo(t, f, e), e;
}, i.prototype.xor = function(t) {
    var e = n();
    return this.bitwiseTo(t, d, e), e;
}, i.prototype.andNot = function(t) {
    var e = n();
    return this.bitwiseTo(t, g, e), e;
}, i.prototype.not = function() {
    for (var t = n(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
    return t.t = this.t, t.s = ~this.s, t;
}, i.prototype.shiftLeft = function(t) {
    var e = n();
    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
}, i.prototype.shiftRight = function(t) {
    var e = n();
    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
}, i.prototype.getLowestSetBit = function() {
    for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + p(this[t]);
    return this.s < 0 ? this.t * this.DB : -1;
}, i.prototype.bitCount = function() {
    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += y(this[i] ^ e);
    return t;
}, i.prototype.testBit = function(t) {
    var e = Math.floor(t / this.DB);
    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
}, i.prototype.setBit = function(t) {
    return this.changeBit(t, f);
}, i.prototype.clearBit = function(t) {
    return this.changeBit(t, g);
}, i.prototype.flipBit = function(t) {
    return this.changeBit(t, d);
}, i.prototype.add = function(t) {
    var e = n();
    return this.addTo(t, e), e;
}, i.prototype.subtract = function(t) {
    var e = n();
    return this.subTo(t, e), e;
}, i.prototype.multiply = function(t) {
    var e = n();
    return this.multiplyTo(t, e), e;
}, i.prototype.divide = function(t) {
    var e = n();
    return this.divRemTo(t, e, null), e;
}, i.prototype.remainder = function(t) {
    var e = n();
    return this.divRemTo(t, null, e), e;
}, i.prototype.divideAndRemainder = function(t) {
    var e = n(), i = n();
    return this.divRemTo(t, e, i), new Array(e, i);
}, i.prototype.modPow = function(t, e) {
    var i, r, s = t.bitLength(), h = a(1);
    if (s <= 0) return h;
    i = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6, r = s < 8 ? new u(e) : e.isEven() ? new m(e) : new c(e);
    var l = new Array(), f = 3, d = i - 1, g = (1 << i) - 1;
    if (l[1] = r.convert(this), i > 1) {
        var p = n();
        for (r.sqrTo(l[1], p); f <= g; ) l[f] = n(), r.mulTo(p, l[f - 2], l[f]), f += 2;
    }
    var y, v, S = t.t - 1, A = !0, x = n();
    for (s = o(t[S]) - 1; S >= 0; ) {
        for (s >= d ? y = t[S] >> s - d & g : (y = (t[S] & (1 << s + 1) - 1) << d - s, S > 0 && (y |= t[S - 1] >> this.DB + s - d)), 
        f = i; 0 == (1 & y); ) y >>= 1, --f;
        if ((s -= f) < 0 && (s += this.DB, --S), A) l[y].copyTo(h), A = !1; else {
            for (;f > 1; ) r.sqrTo(h, x), r.sqrTo(x, h), f -= 2;
            f > 0 ? r.sqrTo(h, x) : (v = h, h = x, x = v), r.mulTo(x, l[y], h);
        }
        for (;S >= 0 && 0 == (t[S] & 1 << s); ) r.sqrTo(h, x), v = h, h = x, x = v, --s < 0 && (s = this.DB - 1, 
        --S);
    }
    return r.revert(h);
}, i.prototype.modInverse = function(t) {
    var e = t.isEven();
    if (this.isEven() && e || 0 == t.signum()) return i.ZERO;
    for (var n = t.clone(), r = this.clone(), s = a(1), o = a(0), h = a(0), u = a(1); 0 != n.signum(); ) {
        for (;n.isEven(); ) n.rShiftTo(1, n), e ? (s.isEven() && o.isEven() || (s.addTo(this, s), 
        o.subTo(t, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
        for (;r.isEven(); ) r.rShiftTo(1, r), e ? (h.isEven() && u.isEven() || (h.addTo(this, h), 
        u.subTo(t, u)), h.rShiftTo(1, h)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
        n.compareTo(r) >= 0 ? (n.subTo(r, n), e && s.subTo(h, s), o.subTo(u, o)) : (r.subTo(n, r), 
        e && h.subTo(s, h), u.subTo(o, u));
    }
    return 0 != r.compareTo(i.ONE) ? i.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), 
    u.signum() < 0 ? u.add(t) : u) : u;
}, i.prototype.pow = function(t) {
    return this.exp(t, new v());
}, i.prototype.gcd = function(t) {
    var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
    if (e.compareTo(i) < 0) {
        var n = e;
        e = i, i = n;
    }
    var r = e.getLowestSetBit(), s = i.getLowestSetBit();
    if (s < 0) return e;
    for (r < s && (s = r), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i)); e.signum() > 0; ) (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e), 
    (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), 
    e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
    return s > 0 && i.lShiftTo(s, i), i;
}, i.prototype.isProbablePrime = function(t) {
    var e, i = this.abs();
    if (1 == i.t && i[0] <= wt[wt.length - 1]) {
        for (e = 0; e < wt.length; ++e) if (i[0] == wt[e]) return !0;
        return !1;
    }
    if (i.isEven()) return !1;
    for (e = 1; e < wt.length; ) {
        for (var n = wt[e], r = e + 1; r < wt.length && n < Pt; ) n *= wt[r++];
        for (n = i.modInt(n); e < r; ) if (n % wt[e++] == 0) return !1;
    }
    return i.millerRabin(t);
}, i.prototype.square = function() {
    var t = n();
    return this.squareTo(t), t;
}, A.prototype.init = function(t) {
    var e, i, n;
    for (e = 0; e < 256; ++e) this.S[e] = e;
    for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, n = this.S[e], 
    this.S[e] = this.S[i], this.S[i] = n;
    this.i = 0, this.j = 0;
}, A.prototype.next = function() {
    var t;
    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
    this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
};

var Ht, Ct, Ot, Dt = 256;

if (null == Ct) {
    Ct = new Array(), Ot = 0;
    var Tt;
    if (gt.crypto && gt.crypto.getRandomValues) {
        var jt = new Uint8Array(32);
        for (gt.crypto.getRandomValues(jt), Tt = 0; Tt < 32; ++Tt) Ct[Ot++] = jt[Tt];
    }
    if ("Netscape" == dt.appName && dt.appVersion < "5" && gt.crypto && gt.crypto.random) {
        var It = gt.crypto.random(32);
        for (Tt = 0; Tt < It.length; ++Tt) Ct[Ot++] = 255 & It.charCodeAt(Tt);
    }
    for (;Ot < Dt; ) Tt = Math.floor(65536 * Math.random()), Ct[Ot++] = Tt >>> 8, Ct[Ot++] = 255 & Tt;
    Ot = 0, F();
}

w.prototype.nextBytes = function(t) {
    var e;
    for (e = 0; e < t.length; ++e) t[e] = E();
}, D.prototype.doPublic = function(t) {
    return t.modPowInt(this.e, this.n);
}, D.prototype.setPublic = function(t, e) {
    if (this.isPublic = !0, this.isPrivate = !1, "string" != typeof t) this.n = t, this.e = e; else {
        if (!(null != t && null != e && t.length > 0 && e.length > 0)) throw "Invalid RSA public key";
        this.n = P(t, 16), this.e = parseInt(e, 16);
    }
}, D.prototype.encrypt = function(t) {
    var e = H(t, this.n.bitLength() + 7 >> 3);
    if (null == e) return null;
    var i = this.doPublic(e);
    if (null == i) return null;
    var n = i.toString(16);
    return 0 == (1 & n.length) ? n : "0" + n;
}, D.prototype.encryptOAEP = function(t, e, i) {
    var n = O(t, this.n.bitLength() + 7 >> 3, e, i);
    if (null == n) return null;
    var r = this.doPublic(n);
    if (null == r) return null;
    var s = r.toString(16);
    return 0 == (1 & s.length) ? s : "0" + s;
}, D.prototype.type = "RSA", D.prototype.doPrivate = function(t) {
    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
}, D.prototype.setPrivate = function(t, e, i) {
    this.isPrivate = !0, "string" != typeof t ? (this.n = t, this.e = e, this.d = i) : null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = P(t, 16), 
    this.e = parseInt(e, 16), this.d = P(i, 16)) : alert("Invalid RSA private key");
}, D.prototype.setPrivateEx = function(t, e, i, n, r, s, a, o) {
    if (this.isPrivate = !0, this.isPublic = !1, null == t) throw "RSASetPrivateEx N == null";
    if (null == e) throw "RSASetPrivateEx E == null";
    if (0 == t.length) throw "RSASetPrivateEx N.length == 0";
    if (0 == e.length) throw "RSASetPrivateEx E.length == 0";
    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = P(t, 16), this.e = parseInt(e, 16), 
    this.d = P(i, 16), this.p = P(n, 16), this.q = P(r, 16), this.dmp1 = P(s, 16), this.dmq1 = P(a, 16), 
    this.coeff = P(o, 16)) : alert("Invalid RSA private key in RSASetPrivateEx");
}, D.prototype.generate = function(t, e) {
    var n = new w(), r = t >> 1;
    this.e = parseInt(e, 16);
    for (var s = new i(e, 16); ;) {
        for (;this.p = new i(t - r, 1, n), 0 != this.p.subtract(i.ONE).gcd(s).compareTo(i.ONE) || !this.p.isProbablePrime(10); ) ;
        for (;this.q = new i(r, 1, n), 0 != this.q.subtract(i.ONE).gcd(s).compareTo(i.ONE) || !this.q.isProbablePrime(10); ) ;
        if (this.p.compareTo(this.q) <= 0) {
            var a = this.p;
            this.p = this.q, this.q = a;
        }
        var o = this.p.subtract(i.ONE), h = this.q.subtract(i.ONE), u = o.multiply(h);
        if (0 == u.gcd(s).compareTo(i.ONE)) {
            this.n = this.p.multiply(this.q), this.d = s.modInverse(u), this.dmp1 = this.d.mod(o), 
            this.dmq1 = this.d.mod(h), this.coeff = this.q.modInverse(this.p);
            break;
        }
    }
    this.isPrivate = !0;
}, D.prototype.decrypt = function(t) {
    var e = P(t, 16), i = this.doPrivate(e);
    return null == i ? null : T(i, this.n.bitLength() + 7 >> 3);
}, D.prototype.decryptOAEP = function(t, e, i) {
    var n = P(t, 16), r = this.doPrivate(n);
    return null == r ? null : I(r, this.n.bitLength() + 7 >> 3, e, i);
}, R.prototype.equals = function(t) {
    return t == this || this.q.equals(t.q) && this.x.equals(t.x);
}, R.prototype.toBigInteger = function() {
    return this.x;
}, R.prototype.negate = function() {
    return new R(this.q, this.x.negate().mod(this.q));
}, R.prototype.add = function(t) {
    return new R(this.q, this.x.add(t.toBigInteger()).mod(this.q));
}, R.prototype.subtract = function(t) {
    return new R(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
}, R.prototype.multiply = function(t) {
    return new R(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
}, R.prototype.square = function() {
    return new R(this.q, this.x.square().mod(this.q));
}, R.prototype.divide = function(t) {
    return new R(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q));
}, B.prototype.getX = function() {
    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}, B.prototype.getY = function() {
    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}, B.prototype.equals = function(t) {
    if (t == this) return !0;
    if (this.isInfinity()) return t.isInfinity();
    if (t.isInfinity()) return this.isInfinity();
    return !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(i.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(i.ZERO);
}, B.prototype.isInfinity = function() {
    return null == this.x && null == this.y || this.z.equals(i.ZERO) && !this.y.toBigInteger().equals(i.ZERO);
}, B.prototype.negate = function() {
    return new B(this.curve, this.x, this.y.negate(), this.z);
}, B.prototype.add = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q), n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
    if (i.ZERO.equals(n)) return i.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
    var r = new i("3"), s = this.x.toBigInteger(), a = this.y.toBigInteger(), o = (t.x.toBigInteger(), 
    t.y.toBigInteger(), n.square()), h = o.multiply(n), u = s.multiply(o), c = e.square().multiply(this.z), l = c.subtract(u.shiftLeft(1)).multiply(t.z).subtract(h).multiply(n).mod(this.curve.q), f = u.multiply(r).multiply(e).subtract(a.multiply(h)).subtract(c.multiply(e)).multiply(t.z).add(e.multiply(h)).mod(this.curve.q), d = h.multiply(this.z).multiply(t.z).mod(this.curve.q);
    return new B(this.curve, this.curve.fromBigInteger(l), this.curve.fromBigInteger(f), d);
}, B.prototype.twice = function() {
    if (this.isInfinity()) return this;
    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
    var t = new i("3"), e = this.x.toBigInteger(), n = this.y.toBigInteger(), r = n.multiply(this.z), s = r.multiply(n).mod(this.curve.q), a = this.curve.a.toBigInteger(), o = e.square().multiply(t);
    i.ZERO.equals(a) || (o = o.add(this.z.square().multiply(a)));
    var h = (o = o.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(s)).shiftLeft(1).multiply(r).mod(this.curve.q), u = o.multiply(t).multiply(e).subtract(s.shiftLeft(1)).shiftLeft(2).multiply(s).subtract(o.square().multiply(o)).mod(this.curve.q), c = r.square().multiply(r).shiftLeft(3).mod(this.curve.q);
    return new B(this.curve, this.curve.fromBigInteger(h), this.curve.fromBigInteger(u), c);
}, B.prototype.multiply = function(t) {
    if (this.isInfinity()) return this;
    if (0 == t.signum()) return this.curve.getInfinity();
    var e, n = t, r = n.multiply(new i("3")), s = this.negate(), a = this;
    for (e = r.bitLength() - 2; e > 0; --e) {
        a = a.twice();
        var o = r.testBit(e);
        o != n.testBit(e) && (a = a.add(o ? this : s));
    }
    return a;
}, B.prototype.multiplyTwo = function(t, e, i) {
    var n;
    n = t.bitLength() > i.bitLength() ? t.bitLength() - 1 : i.bitLength() - 1;
    for (var r = this.curve.getInfinity(), s = this.add(e); n >= 0; ) r = r.twice(), 
    t.testBit(n) ? r = i.testBit(n) ? r.add(s) : r.add(this) : i.testBit(n) && (r = r.add(e)), 
    --n;
    return r;
}, N.prototype.getQ = function() {
    return this.q;
}, N.prototype.getA = function() {
    return this.a;
}, N.prototype.getB = function() {
    return this.b;
}, N.prototype.equals = function(t) {
    return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b);
}, N.prototype.getInfinity = function() {
    return this.infinity;
}, N.prototype.fromBigInteger = function(t) {
    return new R(this.q, t);
}, N.prototype.decodePointHex = function(t) {
    switch (parseInt(t.substr(0, 2), 16)) {
      case 0:
        return this.infinity;

      case 2:
      case 3:
        return null;

      case 4:
      case 6:
      case 7:
        var e = (t.length - 2) / 2, n = t.substr(2, e), r = t.substr(e + 2, e);
        return new B(this, this.fromBigInteger(new i(n, 16)), this.fromBigInteger(new i(r, 16)));

      default:
        return null;
    }
}, R.prototype.getByteLength = function() {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
}, B.prototype.getEncoded = function(t) {
    var e = function(t, e) {
        var i = t.toByteArrayUnsigned();
        if (e < i.length) i = i.slice(i.length - e); else for (;e > i.length; ) i.unshift(0);
        return i;
    }, i = this.getX().toBigInteger(), n = this.getY().toBigInteger(), r = e(i, 32);
    return t ? n.isEven() ? r.unshift(2) : r.unshift(3) : (r.unshift(4), r = r.concat(e(n, 32))), 
    r;
}, B.decodeFrom = function(t, e) {
    e[0];
    var n = e.length - 1, r = e.slice(1, 1 + n / 2), s = e.slice(1 + n / 2, 1 + n);
    r.unshift(0), s.unshift(0);
    var a = new i(r), o = new i(s);
    return new B(t, t.fromBigInteger(a), t.fromBigInteger(o));
}, B.decodeFromHex = function(t, e) {
    e.substr(0, 2);
    var n = e.length - 2, r = e.substr(2, n / 2), s = e.substr(2 + n / 2, n / 2), a = new i(r, 16), o = new i(s, 16);
    return new B(t, t.fromBigInteger(a), t.fromBigInteger(o));
}, B.prototype.add2D = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    if (this.x.equals(t.x)) return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
    var e = t.x.subtract(this.x), i = t.y.subtract(this.y).divide(e), n = i.square().subtract(this.x).subtract(t.x), r = i.multiply(this.x.subtract(n)).subtract(this.y);
    return new B(this.curve, n, r);
}, B.prototype.twice2D = function() {
    if (this.isInfinity()) return this;
    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
    var t = this.curve.fromBigInteger(i.valueOf(2)), e = this.curve.fromBigInteger(i.valueOf(3)), n = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)), r = n.square().subtract(this.x.multiply(t)), s = n.multiply(this.x.subtract(r)).subtract(this.y);
    return new B(this.curve, r, s);
}, B.prototype.multiply2D = function(t) {
    if (this.isInfinity()) return this;
    if (0 == t.signum()) return this.curve.getInfinity();
    var e, n = t, r = n.multiply(new i("3")), s = this.negate(), a = this;
    for (e = r.bitLength() - 2; e > 0; --e) {
        a = a.twice();
        var o = r.testBit(e);
        o != n.testBit(e) && (a = a.add2D(o ? this : s));
    }
    return a;
}, B.prototype.isOnCurve = function() {
    var t = this.getX().toBigInteger(), e = this.getY().toBigInteger(), i = this.curve.getA().toBigInteger(), n = this.curve.getB().toBigInteger(), r = this.curve.getQ(), s = e.multiply(e).mod(r), a = t.multiply(t).multiply(t).add(i.multiply(t)).add(n).mod(r);
    return s.equals(a);
}, B.prototype.toString = function() {
    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
}, B.prototype.validate = function() {
    var t = this.curve.getQ();
    if (this.isInfinity()) throw new Error("Point is at infinity.");
    var e = this.getX().toBigInteger(), n = this.getY().toBigInteger();
    if (e.compareTo(i.ONE) < 0 || e.compareTo(t.subtract(i.ONE)) > 0) throw new Error("x coordinate out of bounds");
    if (n.compareTo(i.ONE) < 0 || n.compareTo(t.subtract(i.ONE)) > 0) throw new Error("y coordinate out of bounds");
    if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
    if (this.multiply(t).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
    return !0;
};

var Rt = function() {
    function t(t, e, i) {
        return e ? n[e] : String.fromCharCode(parseInt(i, 16));
    }
    var e = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), i = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), n = {
        '"': '"',
        "/": "/",
        "\\": "\\",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
    }, r = new String(""), s = (Object, Array, Object.hasOwnProperty);
    return function(n, a) {
        var o, h = n.match(e), u = h[0], c = !1;
        "{" === u ? o = {} : "[" === u ? o = [] : (o = [], c = !0);
        for (var l, f = [ o ], d = 1 - c, g = h.length; d < g; ++d) {
            var p;
            switch ((u = h[d]).charCodeAt(0)) {
              default:
                (p = f[0])[l || p.length] = +u, l = void 0;
                break;

              case 34:
                if (-1 !== (u = u.substring(1, u.length - 1)).indexOf("\\") && (u = u.replace(i, t)), 
                p = f[0], !l) {
                    if (!(p instanceof Array)) {
                        l = u || r;
                        break;
                    }
                    l = p.length;
                }
                p[l] = u, l = void 0;
                break;

              case 91:
                p = f[0], f.unshift(p[l || p.length] = []), l = void 0;
                break;

              case 93:
                f.shift();
                break;

              case 102:
                (p = f[0])[l || p.length] = !1, l = void 0;
                break;

              case 110:
                (p = f[0])[l || p.length] = null, l = void 0;
                break;

              case 116:
                (p = f[0])[l || p.length] = !0, l = void 0;
                break;

              case 123:
                p = f[0], f.unshift(p[l || p.length] = {}), l = void 0;
                break;

              case 125:
                f.shift();
            }
        }
        if (c) {
            if (1 !== f.length) throw new Error();
            o = o[0];
        } else if (f.length) throw new Error();
        if (a) {
            o = function t(e, i) {
                var n = e[i];
                if (n && "object" === (void 0 === n ? "undefined" : ft(n))) {
                    var r = null;
                    for (var o in n) if (s.call(n, o) && n !== e) {
                        var h = t(n, o);
                        void 0 !== h ? n[o] = h : (r || (r = []), r.push(o));
                    }
                    if (r) for (var u = r.length; --u >= 0; ) delete n[r[u]];
                }
                return a.call(e, i, n);
            }({
                "": o
            }, "");
        }
        return o;
    };
}();

void 0 !== pt && pt || (pt = {}), void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), 
pt.asn1.ASN1Util = new function() {
    this.integerToByteHex = function(t) {
        var e = t.toString(16);
        return e.length % 2 == 1 && (e = "0" + e), e;
    }, this.bigIntToMinTwosComplementsHex = function(t) {
        var e = t.toString(16);
        if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
            var n = e.substr(1).length;
            n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
            for (var r = "", s = 0; s < n; s++) r += "f";
            e = new i(r, 16).xor(t).add(i.ONE).toString(16).replace(/^-/, "");
        }
        return e;
    }, this.getPEMStringFromHex = function(t, e) {
        var i = G(t).replace(/(.{64})/g, "$1\r\n");
        return i = i.replace(/\r\n$/, ""), "-----BEGIN " + e + "-----\r\n" + i + "\r\n-----END " + e + "-----\r\n";
    }, this.newObject = function(t) {
        var e = pt.asn1, i = Object.keys(t);
        if (1 != i.length) throw "key of param shall be only one.";
        var n = i[0];
        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + n + ":")) throw "undefined key: " + n;
        if ("bool" == n) return new e.DERBoolean(t[n]);
        if ("int" == n) return new e.DERInteger(t[n]);
        if ("bitstr" == n) return new e.DERBitString(t[n]);
        if ("octstr" == n) return new e.DEROctetString(t[n]);
        if ("null" == n) return new e.DERNull(t[n]);
        if ("oid" == n) return new e.DERObjectIdentifier(t[n]);
        if ("enum" == n) return new e.DEREnumerated(t[n]);
        if ("utf8str" == n) return new e.DERUTF8String(t[n]);
        if ("numstr" == n) return new e.DERNumericString(t[n]);
        if ("prnstr" == n) return new e.DERPrintableString(t[n]);
        if ("telstr" == n) return new e.DERTeletexString(t[n]);
        if ("ia5str" == n) return new e.DERIA5String(t[n]);
        if ("utctime" == n) return new e.DERUTCTime(t[n]);
        if ("gentime" == n) return new e.DERGeneralizedTime(t[n]);
        if ("seq" == n) {
            for (var r = t[n], s = [], a = 0; a < r.length; a++) {
                o = e.ASN1Util.newObject(r[a]);
                s.push(o);
            }
            return new e.DERSequence({
                array: s
            });
        }
        if ("set" == n) {
            for (var r = t[n], s = [], a = 0; a < r.length; a++) {
                var o = e.ASN1Util.newObject(r[a]);
                s.push(o);
            }
            return new e.DERSet({
                array: s
            });
        }
        if ("tag" == n) {
            var h = t[n];
            if ("[object Array]" === Object.prototype.toString.call(h) && 3 == h.length) {
                var u = e.ASN1Util.newObject(h[2]);
                return new e.DERTaggedObject({
                    tag: h[0],
                    explicit: h[1],
                    obj: u
                });
            }
            var c = {};
            if (void 0 !== h.explicit && (c.explicit = h.explicit), void 0 !== h.tag && (c.tag = h.tag), 
            void 0 === h.obj) throw "obj shall be specified for 'tag'.";
            return c.obj = e.ASN1Util.newObject(h.obj), new e.DERTaggedObject(c);
        }
    }, this.jsonToASN1HEX = function(t) {
        return this.newObject(t).getEncodedHex();
    };
}(), pt.asn1.ASN1Util.oidHexToInt = function(t) {
    for (var e = "", n = parseInt(t.substr(0, 2), 16), e = Math.floor(n / 40) + "." + n % 40, r = "", s = 2; s < t.length; s += 2) {
        var a = ("00000000" + parseInt(t.substr(s, 2), 16).toString(2)).slice(-8);
        r += a.substr(1, 7), "0" == a.substr(0, 1) && (e = e + "." + new i(r, 2).toString(10), 
        r = "");
    }
    return e;
}, pt.asn1.ASN1Util.oidIntToHex = function(t) {
    var e = function(t) {
        var e = t.toString(16);
        return 1 == e.length && (e = "0" + e), e;
    };
    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
    var n = "", r = t.split("."), s = 40 * parseInt(r[0]) + parseInt(r[1]);
    n += e(s), r.splice(0, 2);
    for (var a = 0; a < r.length; a++) n += function(t) {
        var n = "", r = new i(t, 10).toString(2), s = 7 - r.length % 7;
        7 == s && (s = 0);
        for (var a = "", o = 0; o < s; o++) a += "0";
        r = a + r;
        for (o = 0; o < r.length - 1; o += 7) {
            var h = r.substr(o, 7);
            o != r.length - 7 && (h = "1" + h), n += e(parseInt(h, 2));
        }
        return n;
    }(r[a]);
    return n;
}, pt.asn1.ASN1Object = function() {
    this.getLengthHexFromValue = function() {
        if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
        if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
        var t = this.hV.length / 2, e = t.toString(16);
        if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
        var i = e.length / 2;
        if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
        return (128 + i).toString(16) + e;
    }, this.getEncodedHex = function() {
        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
        this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
        this.isModified = !1), this.hTLV;
    }, this.getValueHex = function() {
        return this.getEncodedHex(), this.hV;
    }, this.getFreshValueHex = function() {
        return "";
    };
}, pt.asn1.DERAbstractString = function(t) {
    pt.asn1.DERAbstractString.superclass.constructor.call(this);
    this.getString = function() {
        return this.s;
    }, this.setString = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = t, this.hV = _(this.s);
    }, this.setStringHex = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
}, yt.lang.extend(pt.asn1.DERAbstractString, pt.asn1.ASN1Object), pt.asn1.DERAbstractTime = function(t) {
    pt.asn1.DERAbstractTime.superclass.constructor.call(this);
    this.localDateToUTC = function(t) {
        return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc);
    }, this.formatDate = function(t, e, i) {
        var n = this.zeroPadding, r = this.localDateToUTC(t), s = String(r.getFullYear());
        "utc" == e && (s = s.substr(2, 2));
        var a = s + n(String(r.getMonth() + 1), 2) + n(String(r.getDate()), 2) + n(String(r.getHours()), 2) + n(String(r.getMinutes()), 2) + n(String(r.getSeconds()), 2);
        if (!0 === i) {
            var o = r.getMilliseconds();
            if (0 != o) {
                var h = n(String(o), 3);
                a = a + "." + (h = h.replace(/[0]+$/, ""));
            }
        }
        return a + "Z";
    }, this.zeroPadding = function(t, e) {
        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
    }, this.getString = function() {
        return this.s;
    }, this.setString = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = t, this.hV = _(t);
    }, this.setByDateValue = function(t, e, i, n, r, s) {
        var a = new Date(Date.UTC(t, e - 1, i, n, r, s, 0));
        this.setByDate(a);
    }, this.getFreshValueHex = function() {
        return this.hV;
    };
}, yt.lang.extend(pt.asn1.DERAbstractTime, pt.asn1.ASN1Object), pt.asn1.DERAbstractStructured = function(t) {
    pt.asn1.DERAbstractString.superclass.constructor.call(this);
    this.setByASN1ObjectArray = function(t) {
        this.hTLV = null, this.isModified = !0, this.asn1Array = t;
    }, this.appendASN1Object = function(t) {
        this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
    }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
}, yt.lang.extend(pt.asn1.DERAbstractStructured, pt.asn1.ASN1Object), pt.asn1.DERBoolean = function() {
    pt.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
}, yt.lang.extend(pt.asn1.DERBoolean, pt.asn1.ASN1Object), pt.asn1.DERInteger = function(t) {
    pt.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
        this.hTLV = null, this.isModified = !0, this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
    }, this.setByInteger = function(t) {
        var e = new i(String(t), 10);
        this.setByBigInteger(e);
    }, this.setValueHex = function(t) {
        this.hV = t;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
}, yt.lang.extend(pt.asn1.DERInteger, pt.asn1.ASN1Object), pt.asn1.DERBitString = function(t) {
    if (void 0 !== t && void 0 !== t.obj) {
        var e = pt.asn1.ASN1Util.newObject(t.obj);
        t.hex = "00" + e.getEncodedHex();
    }
    pt.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
        this.hTLV = null, this.isModified = !0, this.hV = t;
    }, this.setUnusedBitsAndHexValue = function(t, e) {
        if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
        var i = "0" + t;
        this.hTLV = null, this.isModified = !0, this.hV = i + e;
    }, this.setByBinaryString = function(t) {
        var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
        8 == e && (e = 0);
        for (n = 0; n <= e; n++) t += "0";
        for (var i = "", n = 0; n < t.length - 1; n += 8) {
            var r = t.substr(n, 8), s = parseInt(r, 2).toString(16);
            1 == s.length && (s = "0" + s), i += s;
        }
        this.hTLV = null, this.isModified = !0, this.hV = "0" + e + i;
    }, this.setByBooleanArray = function(t) {
        for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
        this.setByBinaryString(e);
    }, this.newFalseArray = function(t) {
        for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
        return e;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
}, yt.lang.extend(pt.asn1.DERBitString, pt.asn1.ASN1Object), pt.asn1.DEROctetString = function(t) {
    if (void 0 !== t && void 0 !== t.obj) {
        var e = pt.asn1.ASN1Util.newObject(t.obj);
        t.hex = e.getEncodedHex();
    }
    pt.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
}, yt.lang.extend(pt.asn1.DEROctetString, pt.asn1.DERAbstractString), pt.asn1.DERNull = function() {
    pt.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
}, yt.lang.extend(pt.asn1.DERNull, pt.asn1.ASN1Object), pt.asn1.DERObjectIdentifier = function(t) {
    var e = function(t) {
        var e = t.toString(16);
        return 1 == e.length && (e = "0" + e), e;
    }, n = function(t) {
        var n = "", r = new i(t, 10).toString(2), s = 7 - r.length % 7;
        7 == s && (s = 0);
        for (var a = "", o = 0; o < s; o++) a += "0";
        r = a + r;
        for (o = 0; o < r.length - 1; o += 7) {
            var h = r.substr(o, 7);
            o != r.length - 7 && (h = "1" + h), n += e(parseInt(h, 2));
        }
        return n;
    };
    pt.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
    }, this.setValueOidString = function(t) {
        if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
        var i = "", r = t.split("."), s = 40 * parseInt(r[0]) + parseInt(r[1]);
        i += e(s), r.splice(0, 2);
        for (var a = 0; a < r.length; a++) i += n(r[a]);
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = i;
    }, this.setValueName = function(t) {
        var e = pt.asn1.x509.OID.name2oid(t);
        if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
        this.setValueOidString(e);
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
}, yt.lang.extend(pt.asn1.DERObjectIdentifier, pt.asn1.ASN1Object), pt.asn1.DEREnumerated = function(t) {
    pt.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
        this.hTLV = null, this.isModified = !0, this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
    }, this.setByInteger = function(t) {
        var e = new i(String(t), 10);
        this.setByBigInteger(e);
    }, this.setValueHex = function(t) {
        this.hV = t;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
}, yt.lang.extend(pt.asn1.DEREnumerated, pt.asn1.ASN1Object), pt.asn1.DERUTF8String = function(t) {
    pt.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
}, yt.lang.extend(pt.asn1.DERUTF8String, pt.asn1.DERAbstractString), pt.asn1.DERNumericString = function(t) {
    pt.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
}, yt.lang.extend(pt.asn1.DERNumericString, pt.asn1.DERAbstractString), pt.asn1.DERPrintableString = function(t) {
    pt.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
}, yt.lang.extend(pt.asn1.DERPrintableString, pt.asn1.DERAbstractString), pt.asn1.DERTeletexString = function(t) {
    pt.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
}, yt.lang.extend(pt.asn1.DERTeletexString, pt.asn1.DERAbstractString), pt.asn1.DERIA5String = function(t) {
    pt.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
}, yt.lang.extend(pt.asn1.DERIA5String, pt.asn1.DERAbstractString), pt.asn1.DERUTCTime = function(t) {
    pt.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
        this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), 
        this.hV = _(this.s);
    }, this.getFreshValueHex = function() {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
        this.hV = _(this.s)), this.hV;
    }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
}, yt.lang.extend(pt.asn1.DERUTCTime, pt.asn1.DERAbstractTime), pt.asn1.DERGeneralizedTime = function(t) {
    pt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
    this.withMillis = !1, this.setByDate = function(t) {
        this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), 
        this.hV = _(this.s);
    }, this.getFreshValueHex = function() {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
        this.hV = _(this.s)), this.hV;
    }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), 
    !0 === t.millis && (this.withMillis = !0));
}, yt.lang.extend(pt.asn1.DERGeneralizedTime, pt.asn1.DERAbstractTime), pt.asn1.DERSequence = function(t) {
    pt.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
        for (var t = "", e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
        return this.hV = t, this.hV;
    };
}, yt.lang.extend(pt.asn1.DERSequence, pt.asn1.DERAbstractStructured), pt.asn1.DERSet = function(t) {
    pt.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
    this.getFreshValueHex = function() {
        for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
            var i = this.asn1Array[e];
            t.push(i.getEncodedHex());
        }
        return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
    }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
}, yt.lang.extend(pt.asn1.DERSet, pt.asn1.DERAbstractStructured), pt.asn1.DERTaggedObject = function(t) {
    pt.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
    this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
        this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
        this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
        this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), 
    void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
}, yt.lang.extend(pt.asn1.DERTaggedObject, pt.asn1.ASN1Object);

var Bt = new function() {}();

Bt.getByteLengthOfL_AtObj = function(t, e) {
    if ("8" != t.substring(e + 2, e + 3)) return 1;
    var i = parseInt(t.substring(e + 3, e + 4));
    return 0 == i ? -1 : 0 < i && i < 10 ? i + 1 : -2;
}, Bt.getHexOfL_AtObj = function(t, e) {
    var i = Bt.getByteLengthOfL_AtObj(t, e);
    return i < 1 ? "" : t.substring(e + 2, e + 2 + 2 * i);
}, Bt.getIntOfL_AtObj = function(t, e) {
    var n = Bt.getHexOfL_AtObj(t, e);
    if ("" == n) return -1;
    return (parseInt(n.substring(0, 1)) < 8 ? new i(n, 16) : new i(n.substring(2), 16)).intValue();
}, Bt.getStartPosOfV_AtObj = function(t, e) {
    var i = Bt.getByteLengthOfL_AtObj(t, e);
    return i < 0 ? i : e + 2 * (i + 1);
}, Bt.getHexOfV_AtObj = function(t, e) {
    var i = Bt.getStartPosOfV_AtObj(t, e), n = Bt.getIntOfL_AtObj(t, e);
    return t.substring(i, i + 2 * n);
}, Bt.getHexOfTLV_AtObj = function(t, e) {
    return t.substr(e, 2) + Bt.getHexOfL_AtObj(t, e) + Bt.getHexOfV_AtObj(t, e);
}, Bt.getPosOfNextSibling_AtObj = function(t, e) {
    return Bt.getStartPosOfV_AtObj(t, e) + 2 * Bt.getIntOfL_AtObj(t, e);
}, Bt.getPosArrayOfChildren_AtObj = function(t, e) {
    var i = new Array(), n = Bt.getStartPosOfV_AtObj(t, e);
    "03" == t.substr(e, 2) ? i.push(n + 2) : i.push(n);
    for (var r = Bt.getIntOfL_AtObj(t, e), s = n, a = 0; ;) {
        var o = Bt.getPosOfNextSibling_AtObj(t, s);
        if (null == o || o - n >= 2 * r) break;
        if (a >= 200) break;
        i.push(o), s = o, a++;
    }
    return i;
}, Bt.getNthChildIndex_AtObj = function(t, e, i) {
    return Bt.getPosArrayOfChildren_AtObj(t, e)[i];
}, Bt.getDecendantIndexByNthList = function(t, e, i) {
    if (0 == i.length) return e;
    var n = i.shift(), r = Bt.getPosArrayOfChildren_AtObj(t, e);
    return Bt.getDecendantIndexByNthList(t, r[n], i);
}, Bt.getDecendantHexTLVByNthList = function(t, e, i) {
    var n = Bt.getDecendantIndexByNthList(t, e, i);
    return Bt.getHexOfTLV_AtObj(t, n);
}, Bt.getDecendantHexVByNthList = function(t, e, i) {
    var n = Bt.getDecendantIndexByNthList(t, e, i);
    return Bt.getHexOfV_AtObj(t, n);
}, Bt.getVbyList = function(t, e, i, n) {
    var r = Bt.getDecendantIndexByNthList(t, e, i);
    if (void 0 === r) throw "can't find nthList object";
    if (void 0 !== n && t.substr(r, 2) != n) throw "checking tag doesn't match: " + t.substr(r, 2) + "!=" + n;
    return Bt.getHexOfV_AtObj(t, r);
}, Bt.hextooidstr = function(t) {
    var e = function(t, e) {
        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
    }, i = [], n = t.substr(0, 2), r = parseInt(n, 16);
    i[0] = new String(Math.floor(r / 40)), i[1] = new String(r % 40);
    for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++) a.push(parseInt(s.substr(2 * o, 2), 16));
    for (var h = [], u = "", o = 0; o < a.length; o++) 128 & a[o] ? u += e((127 & a[o]).toString(2), 7) : (u += e((127 & a[o]).toString(2), 7), 
    h.push(new String(parseInt(u, 2))), u = "");
    var c = i.join(".");
    return h.length > 0 && (c = c + "." + h.join(".")), c;
}, Bt.dump = function(t, e, i, n) {
    var r = t;
    t instanceof pt.asn1.ASN1Object && (r = t.getEncodedHex());
    var s = function(t, e) {
        return t.length <= 2 * e ? t : t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e);
    };
    void 0 === e && (e = {
        ommit_long_octet: 32
    }), void 0 === i && (i = 0), void 0 === n && (n = "");
    var a = e.ommit_long_octet;
    if ("01" == r.substr(i, 2)) return "00" == (o = Bt.getHexOfV_AtObj(r, i)) ? n + "BOOLEAN FALSE\n" : n + "BOOLEAN TRUE\n";
    if ("02" == r.substr(i, 2)) return n + "INTEGER " + s(o = Bt.getHexOfV_AtObj(r, i), a) + "\n";
    if ("03" == r.substr(i, 2)) return n + "BITSTRING " + s(o = Bt.getHexOfV_AtObj(r, i), a) + "\n";
    if ("04" == r.substr(i, 2)) {
        var o = Bt.getHexOfV_AtObj(r, i);
        if (Bt.isASN1HEX(o)) {
            f = n + "OCTETSTRING, encapsulates\n";
            return f += Bt.dump(o, e, 0, n + "  ");
        }
        return n + "OCTETSTRING " + s(o, a) + "\n";
    }
    if ("05" == r.substr(i, 2)) return n + "NULL\n";
    if ("06" == r.substr(i, 2)) {
        var h = Bt.getHexOfV_AtObj(r, i), u = pt.asn1.ASN1Util.oidHexToInt(h), c = pt.asn1.x509.OID.oid2name(u), l = u.replace(/\./g, " ");
        return "" != c ? n + "ObjectIdentifier " + c + " (" + l + ")\n" : n + "ObjectIdentifier (" + l + ")\n";
    }
    if ("0c" == r.substr(i, 2)) return n + "UTF8String '" + z(Bt.getHexOfV_AtObj(r, i)) + "'\n";
    if ("13" == r.substr(i, 2)) return n + "PrintableString '" + z(Bt.getHexOfV_AtObj(r, i)) + "'\n";
    if ("14" == r.substr(i, 2)) return n + "TeletexString '" + z(Bt.getHexOfV_AtObj(r, i)) + "'\n";
    if ("16" == r.substr(i, 2)) return n + "IA5String '" + z(Bt.getHexOfV_AtObj(r, i)) + "'\n";
    if ("17" == r.substr(i, 2)) return n + "UTCTime " + z(Bt.getHexOfV_AtObj(r, i)) + "\n";
    if ("18" == r.substr(i, 2)) return n + "GeneralizedTime " + z(Bt.getHexOfV_AtObj(r, i)) + "\n";
    if ("30" == r.substr(i, 2)) {
        if ("3000" == r.substr(i, 4)) return n + "SEQUENCE {}\n";
        var f = n + "SEQUENCE\n", d = e;
        if ((2 == (y = Bt.getPosArrayOfChildren_AtObj(r, i)).length || 3 == y.length) && "06" == r.substr(y[0], 2) && "04" == r.substr(y[y.length - 1], 2)) {
            var g = Bt.getHexOfV_AtObj(r, y[0]), u = pt.asn1.ASN1Util.oidHexToInt(g), c = pt.asn1.x509.OID.oid2name(u), p = JSON.parse(JSON.stringify(e));
            p.x509ExtName = c, d = p;
        }
        for (v = 0; v < y.length; v++) f += Bt.dump(r, d, y[v], n + "  ");
        return f;
    }
    if ("31" == r.substr(i, 2)) {
        for (var f = n + "SET\n", y = Bt.getPosArrayOfChildren_AtObj(r, i), v = 0; v < y.length; v++) f += Bt.dump(r, e, y[v], n + "  ");
        return f;
    }
    var S = parseInt(r.substr(i, 2), 16);
    if (0 != (128 & S)) {
        var m = 31 & S;
        if (0 != (32 & S)) {
            for (var f = n + "[" + m + "]\n", y = Bt.getPosArrayOfChildren_AtObj(r, i), v = 0; v < y.length; v++) f += Bt.dump(r, e, y[v], n + "  ");
            return f;
        }
        return "68747470" == (o = Bt.getHexOfV_AtObj(r, i)).substr(0, 8) && (o = z(o)), 
        "subjectAltName" === e.x509ExtName && 2 == m && (o = z(o)), f = n + "[" + m + "] " + o + "\n";
    }
    return n + "UNKNOWN(" + r.substr(i, 2) + ") " + Bt.getHexOfV_AtObj(r, i) + "\n";
}, Bt.isASN1HEX = function(t) {
    if (t.length % 2 == 1) return !1;
    var e = Bt.getIntOfL_AtObj(t, 0), i = t.substr(0, 2), n = Bt.getHexOfL_AtObj(t, 0);
    return t.length - i.length - n.length == 2 * e;
}, Bt.pemToHex = function(t, i) {
    if (-1 == t.indexOf("-----BEGIN ")) throw "can't find PEM header: " + i;
    return e((t = void 0 !== i ? (t = t.replace("-----BEGIN " + i + "-----", "")).replace("-----END " + i + "-----", "") : (t = t.replace(/-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----/, "")).replace(/\s+/g, ""));
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), 
void 0 !== pt.asn1.x509 && pt.asn1.x509 || (pt.asn1.x509 = {}), pt.asn1.x509.Certificate = function(t) {
    pt.asn1.x509.Certificate.superclass.constructor.call(this);
    this.setRsaPrvKeyByPEMandPass = function(t, e) {
        var i = Kt.getDecryptedKeyHex(t, e), n = new D();
        n.readPrivateKeyFromASN1HexString(i), this.prvKey = n;
    }, this.sign = function() {
        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg;
        var t = new pt.crypto.Signature({
            alg: this.asn1SignatureAlg.nameAlg
        });
        t.init(this.prvKey), t.updateHex(this.asn1TBSCert.getEncodedHex()), this.hexSig = t.sign(), 
        this.asn1Sig = new pt.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var e = new pt.asn1.DERSequence({
            array: [ this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = e.getEncodedHex(), this.isModified = !1;
    }, this.setSignatureHex = function(t) {
        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg, this.hexSig = t, this.asn1Sig = new pt.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var e = new pt.asn1.DERSequence({
            array: [ this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = e.getEncodedHex(), this.isModified = !1;
    }, this.getEncodedHex = function() {
        if (0 == this.isModified && null != this.hTLV) return this.hTLV;
        throw "not signed yet";
    }, this.getPEMString = function() {
        var t = this.getEncodedHex(), e = vt.enc.Hex.parse(t);
        return "-----BEGIN CERTIFICATE-----\r\n" + vt.enc.Base64.stringify(e).replace(/(.{64})/g, "$1\r\n") + "\r\n-----END CERTIFICATE-----\r\n";
    }, void 0 !== t && (void 0 !== t.tbscertobj && (this.asn1TBSCert = t.tbscertobj), 
    void 0 !== t.prvkeyobj ? this.prvKey = t.prvkeyobj : void 0 !== t.rsaprvkey ? this.prvKey = t.rsaprvkey : void 0 !== t.rsaprvpem && void 0 !== t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas));
}, yt.lang.extend(pt.asn1.x509.Certificate, pt.asn1.ASN1Object), pt.asn1.x509.TBSCertificate = function(t) {
    pt.asn1.x509.TBSCertificate.superclass.constructor.call(this), this._initialize = function() {
        this.asn1Array = new Array(), this.asn1Version = new pt.asn1.DERTaggedObject({
            obj: new pt.asn1.DERInteger({
                int: 2
            })
        }), this.asn1SerialNumber = null, this.asn1SignatureAlg = null, this.asn1Issuer = null, 
        this.asn1NotBefore = null, this.asn1NotAfter = null, this.asn1Subject = null, this.asn1SubjPKey = null, 
        this.extensionsArray = new Array();
    }, this.setSerialNumberByParam = function(t) {
        this.asn1SerialNumber = new pt.asn1.DERInteger(t);
    }, this.setSignatureAlgByParam = function(t) {
        this.asn1SignatureAlg = new pt.asn1.x509.AlgorithmIdentifier(t);
    }, this.setIssuerByParam = function(t) {
        this.asn1Issuer = new pt.asn1.x509.X500Name(t);
    }, this.setNotBeforeByParam = function(t) {
        this.asn1NotBefore = new pt.asn1.x509.Time(t);
    }, this.setNotAfterByParam = function(t) {
        this.asn1NotAfter = new pt.asn1.x509.Time(t);
    }, this.setSubjectByParam = function(t) {
        this.asn1Subject = new pt.asn1.x509.X500Name(t);
    }, this.setSubjectPublicKeyByParam = function(t) {
        this.asn1SubjPKey = new pt.asn1.x509.SubjectPublicKeyInfo(t);
    }, this.setSubjectPublicKeyByGetKey = function(t) {
        var e = _t.getKey(t);
        this.asn1SubjPKey = new pt.asn1.x509.SubjectPublicKeyInfo(e);
    }, this.appendExtension = function(t) {
        this.extensionsArray.push(t);
    }, this.appendExtensionByName = function(t, e) {
        pt.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray);
    }, this.getEncodedHex = function() {
        if (null == this.asn1NotBefore || null == this.asn1NotAfter) throw "notBefore and/or notAfter not set";
        var t = new pt.asn1.DERSequence({
            array: [ this.asn1NotBefore, this.asn1NotAfter ]
        });
        if (this.asn1Array = new Array(), this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1SerialNumber), 
        this.asn1Array.push(this.asn1SignatureAlg), this.asn1Array.push(this.asn1Issuer), 
        this.asn1Array.push(t), this.asn1Array.push(this.asn1Subject), this.asn1Array.push(this.asn1SubjPKey), 
        this.extensionsArray.length > 0) {
            var e = new pt.asn1.DERSequence({
                array: this.extensionsArray
            }), i = new pt.asn1.DERTaggedObject({
                explicit: !0,
                tag: "a3",
                obj: e
            });
            this.asn1Array.push(i);
        }
        var n = new pt.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = n.getEncodedHex(), this.isModified = !1, this.hTLV;
    }, this._initialize();
}, yt.lang.extend(pt.asn1.x509.TBSCertificate, pt.asn1.ASN1Object), pt.asn1.x509.Extension = function(t) {
    pt.asn1.x509.Extension.superclass.constructor.call(this);
    this.getEncodedHex = function() {
        var t = new pt.asn1.DERObjectIdentifier({
            oid: this.oid
        }), e = new pt.asn1.DEROctetString({
            hex: this.getExtnValueHex()
        }), i = new Array();
        return i.push(t), this.critical && i.push(new pt.asn1.DERBoolean()), i.push(e), 
        new pt.asn1.DERSequence({
            array: i
        }).getEncodedHex();
    }, this.critical = !1, void 0 !== t && void 0 !== t.critical && (this.critical = t.critical);
}, yt.lang.extend(pt.asn1.x509.Extension, pt.asn1.ASN1Object), pt.asn1.x509.Extension.appendByNameToArray = function(t, e, i) {
    if ("basicconstraints" == t.toLowerCase()) {
        n = new pt.asn1.x509.BasicConstraints(e);
        i.push(n);
    } else if ("keyusage" == t.toLowerCase()) {
        n = new pt.asn1.x509.KeyUsage(e);
        i.push(n);
    } else if ("crldistributionpoints" == t.toLowerCase()) {
        n = new pt.asn1.x509.CRLDistributionPoints(e);
        i.push(n);
    } else if ("extkeyusage" == t.toLowerCase()) {
        n = new pt.asn1.x509.ExtKeyUsage(e);
        i.push(n);
    } else if ("authoritykeyidentifier" == t.toLowerCase()) {
        n = new pt.asn1.x509.AuthorityKeyIdentifier(e);
        i.push(n);
    } else if ("authorityinfoaccess" == t.toLowerCase()) {
        n = new pt.asn1.x509.AuthorityInfoAccess(e);
        i.push(n);
    } else if ("subjectaltname" == t.toLowerCase()) {
        n = new pt.asn1.x509.SubjectAltName(e);
        i.push(n);
    } else {
        if ("issueraltname" != t.toLowerCase()) throw "unsupported extension name: " + t;
        var n = new pt.asn1.x509.IssuerAltName(e);
        i.push(n);
    }
}, pt.asn1.x509.KeyUsage = function(t) {
    pt.asn1.x509.KeyUsage.superclass.constructor.call(this, t), this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.15", void 0 !== t && void 0 !== t.bin && (this.asn1ExtnValue = new pt.asn1.DERBitString(t));
}, yt.lang.extend(pt.asn1.x509.KeyUsage, pt.asn1.x509.Extension), pt.asn1.x509.BasicConstraints = function(t) {
    pt.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
    this.getExtnValueHex = function() {
        var t = new Array();
        this.cA && t.push(new pt.asn1.DERBoolean()), this.pathLen > -1 && t.push(new pt.asn1.DERInteger({
            int: this.pathLen
        }));
        var e = new pt.asn1.DERSequence({
            array: t
        });
        return this.asn1ExtnValue = e, this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.19", this.cA = !1, this.pathLen = -1, void 0 !== t && (void 0 !== t.cA && (this.cA = t.cA), 
    void 0 !== t.pathLen && (this.pathLen = t.pathLen));
}, yt.lang.extend(pt.asn1.x509.BasicConstraints, pt.asn1.x509.Extension), pt.asn1.x509.CRLDistributionPoints = function(t) {
    pt.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t), this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.setByDPArray = function(t) {
        this.asn1ExtnValue = new pt.asn1.DERSequence({
            array: t
        });
    }, this.setByOneURI = function(t) {
        var e = new pt.asn1.x509.GeneralNames([ {
            uri: t
        } ]), i = new pt.asn1.x509.DistributionPointName(e), n = new pt.asn1.x509.DistributionPoint({
            dpobj: i
        });
        this.setByDPArray([ n ]);
    }, this.oid = "2.5.29.31", void 0 !== t && (void 0 !== t.array ? this.setByDPArray(t.array) : void 0 !== t.uri && this.setByOneURI(t.uri));
}, yt.lang.extend(pt.asn1.x509.CRLDistributionPoints, pt.asn1.x509.Extension), pt.asn1.x509.ExtKeyUsage = function(t) {
    pt.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t), this.setPurposeArray = function(t) {
        this.asn1ExtnValue = new pt.asn1.DERSequence();
        for (var e = 0; e < t.length; e++) {
            var i = new pt.asn1.DERObjectIdentifier(t[e]);
            this.asn1ExtnValue.appendASN1Object(i);
        }
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.37", void 0 !== t && void 0 !== t.array && this.setPurposeArray(t.array);
}, yt.lang.extend(pt.asn1.x509.ExtKeyUsage, pt.asn1.x509.Extension), pt.asn1.x509.AuthorityKeyIdentifier = function(t) {
    pt.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t), this.asn1KID = null, 
    this.asn1CertIssuer = null, this.asn1CertSN = null, this.getExtnValueHex = function() {
        var t = new Array();
        this.asn1KID && t.push(new pt.asn1.DERTaggedObject({
            explicit: !1,
            tag: "80",
            obj: this.asn1KID
        })), this.asn1CertIssuer && t.push(new pt.asn1.DERTaggedObject({
            explicit: !1,
            tag: "a1",
            obj: this.asn1CertIssuer
        })), this.asn1CertSN && t.push(new pt.asn1.DERTaggedObject({
            explicit: !1,
            tag: "82",
            obj: this.asn1CertSN
        }));
        var e = new pt.asn1.DERSequence({
            array: t
        });
        return this.asn1ExtnValue = e, this.asn1ExtnValue.getEncodedHex();
    }, this.setKIDByParam = function(t) {
        this.asn1KID = new pt.asn1.DEROctetString(t);
    }, this.setCertIssuerByParam = function(t) {
        this.asn1CertIssuer = new pt.asn1.x509.X500Name(t);
    }, this.setCertSNByParam = function(t) {
        this.asn1CertSN = new pt.asn1.DERInteger(t);
    }, this.oid = "2.5.29.35", void 0 !== t && (void 0 !== t.kid && this.setKIDByParam(t.kid), 
    void 0 !== t.issuer && this.setCertIssuerByParam(t.issuer), void 0 !== t.sn && this.setCertSNByParam(t.sn));
}, yt.lang.extend(pt.asn1.x509.AuthorityKeyIdentifier, pt.asn1.x509.Extension), 
pt.asn1.x509.AuthorityInfoAccess = function(t) {
    pt.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t), this.setAccessDescriptionArray = function(t) {
        for (var e = new Array(), i = 0; i < t.length; i++) {
            var n = new pt.asn1.DERObjectIdentifier(t[i].accessMethod), r = new pt.asn1.x509.GeneralName(t[i].accessLocation), s = new pt.asn1.DERSequence({
                array: [ n, r ]
            });
            e.push(s);
        }
        this.asn1ExtnValue = new pt.asn1.DERSequence({
            array: e
        });
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "1.3.6.1.5.5.7.1.1", void 0 !== t && void 0 !== t.array && this.setAccessDescriptionArray(t.array);
}, yt.lang.extend(pt.asn1.x509.AuthorityInfoAccess, pt.asn1.x509.Extension), pt.asn1.x509.SubjectAltName = function(t) {
    pt.asn1.x509.SubjectAltName.superclass.constructor.call(this, t), this.setNameArray = function(t) {
        this.asn1ExtnValue = new pt.asn1.x509.GeneralNames(t);
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.17", void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
}, yt.lang.extend(pt.asn1.x509.SubjectAltName, pt.asn1.x509.Extension), pt.asn1.x509.IssuerAltName = function(t) {
    pt.asn1.x509.IssuerAltName.superclass.constructor.call(this, t), this.setNameArray = function(t) {
        this.asn1ExtnValue = new pt.asn1.x509.GeneralNames(t);
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.18", void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
}, yt.lang.extend(pt.asn1.x509.IssuerAltName, pt.asn1.x509.Extension), pt.asn1.x509.CRL = function(t) {
    pt.asn1.x509.CRL.superclass.constructor.call(this);
    this.setRsaPrvKeyByPEMandPass = function(t, e) {
        var i = Kt.getDecryptedKeyHex(t, e), n = new D();
        n.readPrivateKeyFromASN1HexString(i), this.rsaPrvKey = n;
    }, this.sign = function() {
        this.asn1SignatureAlg = this.asn1TBSCertList.asn1SignatureAlg, sig = new pt.crypto.Signature({
            alg: "SHA1withRSA",
            prov: "cryptojs/jsrsa"
        }), sig.initSign(this.rsaPrvKey), sig.updateHex(this.asn1TBSCertList.getEncodedHex()), 
        this.hexSig = sig.sign(), this.asn1Sig = new pt.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var t = new pt.asn1.DERSequence({
            array: [ this.asn1TBSCertList, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = t.getEncodedHex(), this.isModified = !1;
    }, this.getEncodedHex = function() {
        if (0 == this.isModified && null != this.hTLV) return this.hTLV;
        throw "not signed yet";
    }, this.getPEMString = function() {
        var t = this.getEncodedHex(), e = vt.enc.Hex.parse(t);
        return "-----BEGIN X509 CRL-----\r\n" + vt.enc.Base64.stringify(e).replace(/(.{64})/g, "$1\r\n") + "\r\n-----END X509 CRL-----\r\n";
    }, void 0 !== t && (void 0 !== t.tbsobj && (this.asn1TBSCertList = t.tbsobj), void 0 !== t.rsaprvkey && (this.rsaPrvKey = t.rsaprvkey), 
    void 0 !== t.rsaprvpem && void 0 !== t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas));
}, yt.lang.extend(pt.asn1.x509.CRL, pt.asn1.ASN1Object), pt.asn1.x509.TBSCertList = function(t) {
    pt.asn1.x509.TBSCertList.superclass.constructor.call(this);
    this.setSignatureAlgByParam = function(t) {
        this.asn1SignatureAlg = new pt.asn1.x509.AlgorithmIdentifier(t);
    }, this.setIssuerByParam = function(t) {
        this.asn1Issuer = new pt.asn1.x509.X500Name(t);
    }, this.setThisUpdateByParam = function(t) {
        this.asn1ThisUpdate = new pt.asn1.x509.Time(t);
    }, this.setNextUpdateByParam = function(t) {
        this.asn1NextUpdate = new pt.asn1.x509.Time(t);
    }, this.addRevokedCert = function(t, e) {
        var i = {};
        void 0 != t && null != t && (i.sn = t), void 0 != e && null != e && (i.time = e);
        var n = new pt.asn1.x509.CRLEntry(i);
        this.aRevokedCert.push(n);
    }, this.getEncodedHex = function() {
        if (this.asn1Array = new Array(), null != this.asn1Version && this.asn1Array.push(this.asn1Version), 
        this.asn1Array.push(this.asn1SignatureAlg), this.asn1Array.push(this.asn1Issuer), 
        this.asn1Array.push(this.asn1ThisUpdate), null != this.asn1NextUpdate && this.asn1Array.push(this.asn1NextUpdate), 
        this.aRevokedCert.length > 0) {
            var t = new pt.asn1.DERSequence({
                array: this.aRevokedCert
            });
            this.asn1Array.push(t);
        }
        var e = new pt.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = e.getEncodedHex(), this.isModified = !1, this.hTLV;
    }, this._initialize = function() {
        this.asn1Version = null, this.asn1SignatureAlg = null, this.asn1Issuer = null, this.asn1ThisUpdate = null, 
        this.asn1NextUpdate = null, this.aRevokedCert = new Array();
    }, this._initialize();
}, yt.lang.extend(pt.asn1.x509.TBSCertList, pt.asn1.ASN1Object), pt.asn1.x509.CRLEntry = function(t) {
    pt.asn1.x509.CRLEntry.superclass.constructor.call(this);
    this.setCertSerial = function(t) {
        this.sn = new pt.asn1.DERInteger(t);
    }, this.setRevocationDate = function(t) {
        this.time = new pt.asn1.x509.Time(t);
    }, this.getEncodedHex = function() {
        var t = new pt.asn1.DERSequence({
            array: [ this.sn, this.time ]
        });
        return this.TLV = t.getEncodedHex(), this.TLV;
    }, void 0 !== t && (void 0 !== t.time && this.setRevocationDate(t.time), void 0 !== t.sn && this.setCertSerial(t.sn));
}, yt.lang.extend(pt.asn1.x509.CRLEntry, pt.asn1.ASN1Object), pt.asn1.x509.X500Name = function(t) {
    if (pt.asn1.x509.X500Name.superclass.constructor.call(this), this.asn1Array = new Array(), 
    this.setByString = function(t) {
        var e = t.split("/");
        e.shift();
        for (var i = 0; i < e.length; i++) this.asn1Array.push(new pt.asn1.x509.RDN({
            str: e[i]
        }));
    }, this.setByLdapString = function(t) {
        var e = pt.asn1.x509.X500Name.ldapToOneline(t);
        this.setByString(e);
    }, this.setByObject = function(t) {
        for (var e in t) if (t.hasOwnProperty(e)) {
            var i = new pt.asn1.x509.RDN({
                str: e + "=" + t[e]
            });
            this.asn1Array ? this.asn1Array.push(i) : this.asn1Array = [ i ];
        }
    }, this.getEncodedHex = function() {
        if ("string" == typeof this.hTLV) return this.hTLV;
        var t = new pt.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && (void 0 !== t.str ? this.setByString(t.str) : void 0 !== t.ldapstr ? this.setByLdapString(t.ldapstr) : "object" === (void 0 === t ? "undefined" : ft(t)) && this.setByObject(t), 
    void 0 !== t.certissuer && ((e = new lt()).hex = Bt.pemToHex(t.certissuer), this.hTLV = e.getIssuerHex()), 
    void 0 !== t.certsubject)) {
        var e = new lt();
        e.hex = Bt.pemToHex(t.certsubject), this.hTLV = e.getSubjectHex();
    }
}, yt.lang.extend(pt.asn1.x509.X500Name, pt.asn1.ASN1Object), pt.asn1.x509.X500Name.onelineToLDAP = function(t) {
    if ("/" !== t.substr(0, 1)) throw "malformed input";
    var e = (t = t.substr(1)).split("/");
    return e.reverse(), (e = e.map(function(t) {
        return t.replace(/,/, "\\,");
    })).join(",");
}, pt.asn1.x509.X500Name.ldapToOneline = function(t) {
    for (var e = t.split(","), i = !1, n = [], r = 0; e.length > 0; r++) {
        var s = e.shift();
        if (!0 === i) {
            var a = (n.pop() + "," + s).replace(/\\,/g, ",");
            n.push(a), i = !1;
        } else n.push(s);
        "\\" === s.substr(-1, 1) && (i = !0);
    }
    return (n = n.map(function(t) {
        return t.replace("/", "\\/");
    })).reverse(), "/" + n.join("/");
}, pt.asn1.x509.RDN = function(t) {
    pt.asn1.x509.RDN.superclass.constructor.call(this), this.asn1Array = new Array(), 
    this.addByString = function(t) {
        this.asn1Array.push(new pt.asn1.x509.AttributeTypeAndValue({
            str: t
        }));
    }, this.addByMultiValuedString = function(t) {
        for (var e = pt.asn1.x509.RDN.parseString(t), i = 0; i < e.length; i++) this.addByString(e[i]);
    }, this.getEncodedHex = function() {
        var t = new pt.asn1.DERSet({
            array: this.asn1Array
        });
        return this.TLV = t.getEncodedHex(), this.TLV;
    }, void 0 !== t && void 0 !== t.str && this.addByMultiValuedString(t.str);
}, yt.lang.extend(pt.asn1.x509.RDN, pt.asn1.ASN1Object), pt.asn1.x509.RDN.parseString = function(t) {
    for (var e = t.split(/\+/), i = !1, n = [], r = 0; e.length > 0; r++) {
        o = e.shift();
        if (!0 === i) {
            u = (n.pop() + "+" + o).replace(/\\\+/g, "+");
            n.push(u), i = !1;
        } else n.push(o);
        "\\" === o.substr(-1, 1) && (i = !0);
    }
    for (var s = !1, a = [], r = 0; n.length > 0; r++) {
        var o = n.shift();
        if (!0 === s) {
            var h = a.pop();
            if (o.match(/"$/)) {
                var u = (h + "+" + o).replace(/^([^=]+)="(.*)"$/, "$1=$2");
                a.push(u), s = !1;
            } else a.push(h + "+" + o);
        } else a.push(o);
        o.match(/^[^=]+="/) && (s = !0);
    }
    return a;
}, pt.asn1.x509.AttributeTypeAndValue = function(t) {
    pt.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
    this.setByString = function(t) {
        var e = t.match(/^([^=]+)=(.+)$/);
        if (!e) throw "malformed attrTypeAndValueStr: " + t;
        this.setByAttrTypeAndValueStr(e[1], e[2]);
    }, this.setByAttrTypeAndValueStr = function(t, e) {
        this.typeObj = pt.asn1.x509.OID.atype2obj(t);
        var i = "utf8";
        "C" == t && (i = "prn"), this.valueObj = this.getValueObj(i, e);
    }, this.getValueObj = function(t, e) {
        if ("utf8" == t) return new pt.asn1.DERUTF8String({
            str: e
        });
        if ("prn" == t) return new pt.asn1.DERPrintableString({
            str: e
        });
        if ("tel" == t) return new pt.asn1.DERTeletexString({
            str: e
        });
        if ("ia5" == t) return new pt.asn1.DERIA5String({
            str: e
        });
        throw "unsupported directory string type: type=" + t + " value=" + e;
    }, this.getEncodedHex = function() {
        var t = new pt.asn1.DERSequence({
            array: [ this.typeObj, this.valueObj ]
        });
        return this.TLV = t.getEncodedHex(), this.TLV;
    }, void 0 !== t && void 0 !== t.str && this.setByString(t.str);
}, yt.lang.extend(pt.asn1.x509.AttributeTypeAndValue, pt.asn1.ASN1Object), pt.asn1.x509.SubjectPublicKeyInfo = function(t) {
    pt.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
    this.setRSAKey = function(t) {
        if (!D.prototype.isPrototypeOf(t)) throw "argument is not RSAKey instance";
        this.rsaKey = t;
        var e = new pt.asn1.DERInteger({
            bigint: t.n
        }), i = new pt.asn1.DERInteger({
            int: t.e
        }), n = new pt.asn1.DERSequence({
            array: [ e, i ]
        }).getEncodedHex();
        this.asn1AlgId = new pt.asn1.x509.AlgorithmIdentifier({
            name: "rsaEncryption"
        }), this.asn1SubjPKey = new pt.asn1.DERBitString({
            hex: "00" + n
        });
    }, this.setRSAPEM = function(t) {
        if (!t.match(/-----BEGIN PUBLIC KEY-----/)) throw "key not supported";
        var e = t, i = (e = (e = e.replace(/^-----[^-]+-----/, "")).replace(/-----[^-]+-----\s*$/, "")).replace(/\s+/g, ""), n = vt.enc.Base64.parse(i), r = vt.enc.Hex.stringify(n), s = D.getHexValueArrayOfChildrenFromHex(r)[1].substr(2), a = D.getHexValueArrayOfChildrenFromHex(s), o = new D();
        o.setPublic(a[0], a[1]), this.setRSAKey(o);
    }, this.getASN1Object = function() {
        if (null == this.asn1AlgId || null == this.asn1SubjPKey) throw "algId and/or subjPubKey not set";
        return new pt.asn1.DERSequence({
            array: [ this.asn1AlgId, this.asn1SubjPKey ]
        });
    }, this.getEncodedHex = function() {
        var t = this.getASN1Object();
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, this._setRSAKey = function(t) {
        var e = pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: {
                    bigint: t.n
                }
            }, {
                int: {
                    int: t.e
                }
            } ]
        }).getEncodedHex();
        this.asn1AlgId = new pt.asn1.x509.AlgorithmIdentifier({
            name: "rsaEncryption"
        }), this.asn1SubjPKey = new pt.asn1.DERBitString({
            hex: "00" + e
        });
    }, this._setEC = function(t) {
        var e = new pt.asn1.DERObjectIdentifier({
            name: t.curveName
        });
        this.asn1AlgId = new pt.asn1.x509.AlgorithmIdentifier({
            name: "ecPublicKey",
            asn1params: e
        }), this.asn1SubjPKey = new pt.asn1.DERBitString({
            hex: "00" + t.pubKeyHex
        });
    }, this._setDSA = function(t) {
        var e = new pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: {
                    bigint: t.p
                }
            }, {
                int: {
                    bigint: t.q
                }
            }, {
                int: {
                    bigint: t.g
                }
            } ]
        });
        this.asn1AlgId = new pt.asn1.x509.AlgorithmIdentifier({
            name: "dsa",
            asn1params: e
        });
        var i = new pt.asn1.DERInteger({
            bigint: t.y
        });
        this.asn1SubjPKey = new pt.asn1.DERBitString({
            hex: "00" + i.getEncodedHex()
        });
    }, void 0 !== t && (void 0 !== D && t instanceof D ? this._setRSAKey(t) : void 0 !== pt.crypto.ECDSA && t instanceof pt.crypto.ECDSA ? this._setEC(t) : void 0 !== pt.crypto.DSA && t instanceof pt.crypto.DSA ? this._setDSA(t) : void 0 !== t.rsakey ? this.setRSAKey(t.rsakey) : void 0 !== t.rsapem && this.setRSAPEM(t.rsapem));
}, yt.lang.extend(pt.asn1.x509.SubjectPublicKeyInfo, pt.asn1.ASN1Object), pt.asn1.x509.Time = function(t) {
    pt.asn1.x509.Time.superclass.constructor.call(this);
    this.setTimeParams = function(t) {
        this.timeParams = t;
    }, this.getEncodedHex = function() {
        var t = null;
        return t = null != this.timeParams ? "utc" == this.type ? new pt.asn1.DERUTCTime(this.timeParams) : new pt.asn1.DERGeneralizedTime(this.timeParams) : "utc" == this.type ? new pt.asn1.DERUTCTime() : new pt.asn1.DERGeneralizedTime(), 
        this.TLV = t.getEncodedHex(), this.TLV;
    }, this.type = "utc", void 0 !== t && (void 0 !== t.type ? this.type = t.type : void 0 !== t.str && (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"), 
    t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")), this.timeParams = t);
}, yt.lang.extend(pt.asn1.x509.Time, pt.asn1.ASN1Object), pt.asn1.x509.AlgorithmIdentifier = function(t) {
    if (pt.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this), this.nameAlg = null, 
    this.asn1Alg = null, this.asn1Params = null, this.paramEmpty = !1, this.getEncodedHex = function() {
        if (null === this.nameAlg && null === this.asn1Alg) throw "algorithm not specified";
        null !== this.nameAlg && null === this.asn1Alg && (this.asn1Alg = pt.asn1.x509.OID.name2obj(this.nameAlg));
        var t = [ this.asn1Alg ];
        null !== this.asn1Params && t.push(this.asn1Params);
        var e = new pt.asn1.DERSequence({
            array: t
        });
        return this.hTLV = e.getEncodedHex(), this.hTLV;
    }, void 0 !== t && (void 0 !== t.name && (this.nameAlg = t.name), void 0 !== t.asn1params && (this.asn1Params = t.asn1params), 
    void 0 !== t.paramempty && (this.paramEmpty = t.paramempty)), null === this.asn1Params && !1 === this.paramEmpty && null !== this.nameAlg) {
        var e = this.nameAlg.toLowerCase();
        "withdsa" !== e.substr(-7, 7) && "withecdsa" !== e.substr(-9, 9) && (this.asn1Params = new pt.asn1.DERNull());
    }
}, yt.lang.extend(pt.asn1.x509.AlgorithmIdentifier, pt.asn1.ASN1Object), pt.asn1.x509.GeneralName = function(t) {
    pt.asn1.x509.GeneralName.superclass.constructor.call(this);
    var e = {
        rfc822: "81",
        dns: "82",
        dn: "a4",
        uri: "86"
    };
    this.explicit = !1, this.setByParam = function(t) {
        var i = null;
        if (void 0 !== t) {
            if (void 0 !== t.rfc822 && (this.type = "rfc822", i = new pt.asn1.DERIA5String({
                str: t[this.type]
            })), void 0 !== t.dns && (this.type = "dns", i = new pt.asn1.DERIA5String({
                str: t[this.type]
            })), void 0 !== t.uri && (this.type = "uri", i = new pt.asn1.DERIA5String({
                str: t[this.type]
            })), void 0 !== t.dn && (this.type = "dn", i = new pt.asn1.x509.X500Name({
                str: t.dn
            })), void 0 !== t.ldapdn && (this.type = "dn", i = new pt.asn1.x509.X500Name({
                ldapstr: t.ldapdn
            })), void 0 !== t.certissuer) {
                this.type = "dn", this.explicit = !0;
                r = null;
                if ((n = t.certissuer).match(/^[0-9A-Fa-f]+$/), -1 != n.indexOf("-----BEGIN ") && (r = Bt.pemToHex(n)), 
                null == r) throw "certissuer param not cert";
                (s = new lt()).hex = r;
                a = s.getIssuerHex();
                (i = new pt.asn1.ASN1Object()).hTLV = a;
            }
            if (void 0 !== t.certsubj) {
                this.type = "dn", this.explicit = !0;
                var n = t.certsubj, r = null;
                if (n.match(/^[0-9A-Fa-f]+$/), -1 != n.indexOf("-----BEGIN ") && (r = Bt.pemToHex(n)), 
                null == r) throw "certsubj param not cert";
                var s = new lt();
                s.hex = r;
                var a = s.getSubjectHex();
                (i = new pt.asn1.ASN1Object()).hTLV = a;
            }
            if (null == this.type) throw "unsupported type in params=" + t;
            this.asn1Obj = new pt.asn1.DERTaggedObject({
                explicit: this.explicit,
                tag: e[this.type],
                obj: i
            });
        }
    }, this.getEncodedHex = function() {
        return this.asn1Obj.getEncodedHex();
    }, void 0 !== t && this.setByParam(t);
}, yt.lang.extend(pt.asn1.x509.GeneralName, pt.asn1.ASN1Object), pt.asn1.x509.GeneralNames = function(t) {
    pt.asn1.x509.GeneralNames.superclass.constructor.call(this);
    this.setByParamArray = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = new pt.asn1.x509.GeneralName(t[e]);
            this.asn1Array.push(i);
        }
    }, this.getEncodedHex = function() {
        return new pt.asn1.DERSequence({
            array: this.asn1Array
        }).getEncodedHex();
    }, this.asn1Array = new Array(), void 0 !== t && this.setByParamArray(t);
}, yt.lang.extend(pt.asn1.x509.GeneralNames, pt.asn1.ASN1Object), pt.asn1.x509.DistributionPointName = function(t) {
    pt.asn1.x509.DistributionPointName.superclass.constructor.call(this);
    if (this.getEncodedHex = function() {
        if ("full" != this.type) throw "currently type shall be 'full': " + this.type;
        return this.asn1Obj = new pt.asn1.DERTaggedObject({
            explicit: !1,
            tag: this.tag,
            obj: this.asn1V
        }), this.hTLV = this.asn1Obj.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        if (!pt.asn1.x509.GeneralNames.prototype.isPrototypeOf(t)) throw "This class supports GeneralNames only as argument";
        this.type = "full", this.tag = "a0", this.asn1V = t;
    }
}, yt.lang.extend(pt.asn1.x509.DistributionPointName, pt.asn1.ASN1Object), pt.asn1.x509.DistributionPoint = function(t) {
    pt.asn1.x509.DistributionPoint.superclass.constructor.call(this);
    this.getEncodedHex = function() {
        var t = new pt.asn1.DERSequence();
        if (null != this.asn1DP) {
            var e = new pt.asn1.DERTaggedObject({
                explicit: !0,
                tag: "a0",
                obj: this.asn1DP
            });
            t.appendASN1Object(e);
        }
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.dpobj && (this.asn1DP = t.dpobj);
}, yt.lang.extend(pt.asn1.x509.DistributionPoint, pt.asn1.ASN1Object), pt.asn1.x509.OID = new function(t) {
    this.atype2oidList = {
        CN: "2.5.4.3",
        L: "2.5.4.7",
        ST: "2.5.4.8",
        O: "2.5.4.10",
        OU: "2.5.4.11",
        C: "2.5.4.6",
        STREET: "2.5.4.9",
        DC: "0.9.2342.19200300.100.1.25",
        UID: "0.9.2342.19200300.100.1.1",
        SN: "2.5.4.4",
        DN: "2.5.4.49",
        E: "1.2.840.113549.1.9.1",
        businessCategory: "2.5.4.15",
        postalCode: "2.5.4.17",
        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3"
    }, this.name2oidList = {
        sha1: "1.3.14.3.2.26",
        sha256: "2.16.840.1.101.3.4.2.1",
        sha384: "2.16.840.1.101.3.4.2.2",
        sha512: "2.16.840.1.101.3.4.2.3",
        sha224: "2.16.840.1.101.3.4.2.4",
        md5: "1.2.840.113549.2.5",
        md2: "1.3.14.7.2.2.1",
        ripemd160: "1.3.36.3.2.1",
        MD2withRSA: "1.2.840.113549.1.1.2",
        MD4withRSA: "1.2.840.113549.1.1.3",
        MD5withRSA: "1.2.840.113549.1.1.4",
        SHA1withRSA: "1.2.840.113549.1.1.5",
        SHA224withRSA: "1.2.840.113549.1.1.14",
        SHA256withRSA: "1.2.840.113549.1.1.11",
        SHA384withRSA: "1.2.840.113549.1.1.12",
        SHA512withRSA: "1.2.840.113549.1.1.13",
        SHA1withECDSA: "1.2.840.10045.4.1",
        SHA224withECDSA: "1.2.840.10045.4.3.1",
        SHA256withECDSA: "1.2.840.10045.4.3.2",
        SHA384withECDSA: "1.2.840.10045.4.3.3",
        SHA512withECDSA: "1.2.840.10045.4.3.4",
        dsa: "1.2.840.10040.4.1",
        SHA1withDSA: "1.2.840.10040.4.3",
        SHA224withDSA: "2.16.840.1.101.3.4.3.1",
        SHA256withDSA: "2.16.840.1.101.3.4.3.2",
        rsaEncryption: "1.2.840.113549.1.1.1",
        commonName: "2.5.4.3",
        localityName: "2.5.4.7",
        stateOrProvinceName: "2.5.4.8",
        organizationName: "2.5.4.10",
        organizationalUnitName: "2.5.4.11",
        countryName: "2.5.4.6",
        streetAddress: "2.5.4.9",
        domainComponent: "0.9.2342.19200300.100.1.25",
        userId: "0.9.2342.19200300.100.1.1",
        surname: "2.5.4.4",
        distinguishedName: "2.5.4.49",
        emailAddress: "1.2.840.113549.1.9.1",
        businessCategory: "2.5.4.15",
        postalCode: "2.5.4.17",
        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
        subjectKeyIdentifier: "2.5.29.14",
        keyUsage: "2.5.29.15",
        subjectAltName: "2.5.29.17",
        issuerAltName: "2.5.29.18",
        basicConstraints: "2.5.29.19",
        nameConstraints: "2.5.29.30",
        cRLDistributionPoints: "2.5.29.31",
        certificatePolicies: "2.5.29.32",
        authorityKeyIdentifier: "2.5.29.35",
        policyConstraints: "2.5.29.36",
        extKeyUsage: "2.5.29.37",
        authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
        ocsp: "1.3.6.1.5.5.7.48.1",
        caIssuers: "1.3.6.1.5.5.7.48.2",
        anyExtendedKeyUsage: "2.5.29.37.0",
        serverAuth: "1.3.6.1.5.5.7.3.1",
        clientAuth: "1.3.6.1.5.5.7.3.2",
        codeSigning: "1.3.6.1.5.5.7.3.3",
        emailProtection: "1.3.6.1.5.5.7.3.4",
        timeStamping: "1.3.6.1.5.5.7.3.8",
        ocspSigning: "1.3.6.1.5.5.7.3.9",
        ecPublicKey: "1.2.840.10045.2.1",
        secp256r1: "1.2.840.10045.3.1.7",
        secp256k1: "1.3.132.0.10",
        secp384r1: "1.3.132.0.34",
        pkcs5PBES2: "1.2.840.113549.1.5.13",
        pkcs5PBKDF2: "1.2.840.113549.1.5.12",
        "des-EDE3-CBC": "1.2.840.113549.3.7",
        data: "1.2.840.113549.1.7.1",
        "signed-data": "1.2.840.113549.1.7.2",
        "enveloped-data": "1.2.840.113549.1.7.3",
        "digested-data": "1.2.840.113549.1.7.5",
        "encrypted-data": "1.2.840.113549.1.7.6",
        "authenticated-data": "1.2.840.113549.1.9.16.1.2",
        tstinfo: "1.2.840.113549.1.9.16.1.4",
        extensionRequest: "1.2.840.113549.1.9.14"
    }, this.objCache = {}, this.name2obj = function(t) {
        if (void 0 !== this.objCache[t]) return this.objCache[t];
        if (void 0 === this.name2oidList[t]) throw "Name of ObjectIdentifier not defined: " + t;
        var e = this.name2oidList[t], i = new pt.asn1.DERObjectIdentifier({
            oid: e
        });
        return this.objCache[t] = i, i;
    }, this.atype2obj = function(t) {
        if (void 0 !== this.objCache[t]) return this.objCache[t];
        if (void 0 === this.atype2oidList[t]) throw "AttributeType name undefined: " + t;
        var e = this.atype2oidList[t], i = new pt.asn1.DERObjectIdentifier({
            oid: e
        });
        return this.objCache[t] = i, i;
    };
}(), pt.asn1.x509.OID.oid2name = function(t) {
    var e = pt.asn1.x509.OID.name2oidList;
    for (var i in e) if (e[i] == t) return i;
    return "";
}, pt.asn1.x509.OID.oid2atype = function(t) {
    var e = pt.asn1.x509.OID.atype2oidList;
    for (var i in e) if (e[i] == t) return i;
    return t;
}, pt.asn1.x509.OID.name2oid = function(t) {
    var e = pt.asn1.x509.OID.name2oidList;
    return void 0 === e[t] ? "" : e[t];
}, pt.asn1.x509.X509Util = new function() {
    this.getPKCS8PubKeyPEMfromRSAKey = function(t) {
        var e = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t.n), i = pt.asn1.ASN1Util.integerToByteHex(t.e), n = new pt.asn1.DERInteger({
            hex: e
        }), r = new pt.asn1.DERInteger({
            hex: i
        }), s = new pt.asn1.DERSequence({
            array: [ n, r ]
        }).getEncodedHex(), a = new pt.asn1.x509.AlgorithmIdentifier({
            name: "rsaEncryption"
        }), o = new pt.asn1.DERBitString({
            hex: "00" + s
        }), h = new pt.asn1.DERSequence({
            array: [ a, o ]
        }).getEncodedHex();
        return pt.asn1.ASN1Util.getPEMStringFromHex(h, "PUBLIC KEY");
    };
}(), pt.asn1.x509.X509Util.newCertPEM = function(t) {
    var e = pt.asn1.x509, i = new e.TBSCertificate();
    if (void 0 === t.serial) throw "serial number undefined.";
    if (i.setSerialNumberByParam(t.serial), "string" != typeof t.sigalg.name) throw "unproper signature algorithm name";
    if (i.setSignatureAlgByParam(t.sigalg), void 0 === t.issuer) throw "issuer name undefined.";
    if (i.setIssuerByParam(t.issuer), void 0 === t.notbefore) throw "notbefore undefined.";
    if (i.setNotBeforeByParam(t.notbefore), void 0 === t.notafter) throw "notafter undefined.";
    if (i.setNotAfterByParam(t.notafter), void 0 === t.subject) throw "subject name undefined.";
    if (i.setSubjectByParam(t.subject), void 0 === t.sbjpubkey) throw "subject public key undefined.";
    if (i.setSubjectPublicKeyByGetKey(t.sbjpubkey), void 0 !== t.ext && void 0 !== t.ext.length) for (var n = 0; n < t.ext.length; n++) for (key in t.ext[n]) i.appendExtensionByName(key, t.ext[n][key]);
    if (void 0 === t.cakey && void 0 === t.sighex) throw "param cakey and sighex undefined.";
    var r = null, s = null;
    return t.cakey && (r = !0 === t.cakey.isPrivate ? t.cakey : _t.getKey.apply(null, t.cakey), 
    (s = new e.Certificate({
        tbscertobj: i,
        prvkeyobj: r
    })).sign()), t.sighex && (s = new e.Certificate({
        tbscertobj: i
    })).setSignatureHex(t.sighex), s.getPEMString();
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), 
void 0 !== pt.asn1.cms && pt.asn1.cms || (pt.asn1.cms = {}), pt.asn1.cms.Attribute = function(t) {
    pt.asn1.cms.Attribute.superclass.constructor.call(this);
    this.getEncodedHex = function() {
        var t, e, i;
        t = new pt.asn1.DERObjectIdentifier({
            oid: this.attrTypeOid
        }), e = new pt.asn1.DERSet({
            array: this.valueList
        });
        try {
            e.getEncodedHex();
        } catch (t) {
            throw "fail valueSet.getEncodedHex in Attribute(1)/" + t;
        }
        i = new pt.asn1.DERSequence({
            array: [ t, e ]
        });
        try {
            this.hTLV = i.getEncodedHex();
        } catch (t) {
            throw "failed seq.getEncodedHex in Attribute(2)/" + t;
        }
        return this.hTLV;
    };
}, yt.lang.extend(pt.asn1.cms.Attribute, pt.asn1.ASN1Object), pt.asn1.cms.ContentType = function(t) {
    pt.asn1.cms.ContentType.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.3";
    e = null;
    if (void 0 !== t) {
        var e = new pt.asn1.DERObjectIdentifier(t);
        this.valueList = [ e ];
    }
}, yt.lang.extend(pt.asn1.cms.ContentType, pt.asn1.cms.Attribute), pt.asn1.cms.MessageDigest = function(t) {
    if (pt.asn1.cms.MessageDigest.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.4", 
    void 0 !== t) if (t.eciObj instanceof pt.asn1.cms.EncapsulatedContentInfo && "string" == typeof t.hashAlg) {
        var e = t.eciObj.eContentValueHex, i = t.hashAlg, n = pt.crypto.Util.hashHex(e, i);
        (r = new pt.asn1.DEROctetString({
            hex: n
        })).getEncodedHex(), this.valueList = [ r ];
    } else {
        var r = new pt.asn1.DEROctetString(t);
        r.getEncodedHex(), this.valueList = [ r ];
    }
}, yt.lang.extend(pt.asn1.cms.MessageDigest, pt.asn1.cms.Attribute), pt.asn1.cms.SigningTime = function(t) {
    if (pt.asn1.cms.SigningTime.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.5", 
    void 0 !== t) {
        var e = new pt.asn1.x509.Time(t);
        try {
            e.getEncodedHex();
        } catch (t) {
            throw "SigningTime.getEncodedHex() failed/" + t;
        }
        this.valueList = [ e ];
    }
}, yt.lang.extend(pt.asn1.cms.SigningTime, pt.asn1.cms.Attribute), pt.asn1.cms.SigningCertificate = function(t) {
    pt.asn1.cms.SigningCertificate.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.12";
    var e = pt.asn1, i = pt.asn1.cms, n = pt.crypto;
    this.setCerts = function(t) {
        for (var r = [], s = 0; s < t.length; s++) {
            var a = Bt.pemToHex(t[s]), o = n.Util.hashHex(a, "sha1"), h = new e.DEROctetString({
                hex: o
            });
            h.getEncodedHex();
            var u = new i.IssuerAndSerialNumber({
                cert: t[s]
            });
            u.getEncodedHex();
            var c = new e.DERSequence({
                array: [ h, u ]
            });
            c.getEncodedHex(), r.push(c);
        }
        var l = new e.DERSequence({
            array: r
        });
        l.getEncodedHex(), this.valueList = [ l ];
    }, void 0 !== t && "object" == ft(t.array) && this.setCerts(t.array);
}, yt.lang.extend(pt.asn1.cms.SigningCertificate, pt.asn1.cms.Attribute), pt.asn1.cms.SigningCertificateV2 = function(t) {
    pt.asn1.cms.SigningCertificateV2.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.47";
    var e = pt.asn1, i = pt.asn1.x509, n = pt.asn1.cms, r = pt.crypto;
    if (this.setCerts = function(t, s) {
        for (var a = [], o = 0; o < t.length; o++) {
            var h = Bt.pemToHex(t[o]), u = [];
            "sha256" != s && u.push(new i.AlgorithmIdentifier({
                name: s
            }));
            var c = r.Util.hashHex(h, s), l = new e.DEROctetString({
                hex: c
            });
            l.getEncodedHex(), u.push(l);
            var f = new n.IssuerAndSerialNumber({
                cert: t[o]
            });
            f.getEncodedHex(), u.push(f);
            var d = new e.DERSequence({
                array: u
            });
            d.getEncodedHex(), a.push(d);
        }
        var g = new e.DERSequence({
            array: a
        });
        g.getEncodedHex(), this.valueList = [ g ];
    }, void 0 !== t && "object" == ft(t.array)) {
        var s = "sha256";
        "string" == typeof t.hashAlg && (s = t.hashAlg), this.setCerts(t.array, s);
    }
}, yt.lang.extend(pt.asn1.cms.SigningCertificateV2, pt.asn1.cms.Attribute), pt.asn1.cms.IssuerAndSerialNumber = function(t) {
    pt.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);
    var e = pt.asn1, i = e.x509;
    this.setByCertPEM = function(t) {
        var n = Bt.pemToHex(t), r = new lt();
        r.hex = n;
        var s = r.getIssuerHex();
        this.dIssuer = new i.X500Name(), this.dIssuer.hTLV = s;
        var a = r.getSerialNumberHex();
        this.dSerial = new e.DERInteger({
            hex: a
        });
    }, this.getEncodedHex = function() {
        var t = new pt.asn1.DERSequence({
            array: [ this.dIssuer, this.dSerial ]
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t), 
    t.issuer && t.serial && (t.issuer instanceof pt.asn1.x509.X500Name ? this.dIssuer = t.issuer : this.dIssuer = new pt.asn1.x509.X500Name(t.issuer), 
    t.serial instanceof pt.asn1.DERInteger ? this.dSerial = t.serial : this.dSerial = new pt.asn1.DERInteger(t.serial)), 
    "string" == typeof t.cert && this.setByCertPEM(t.cert));
}, yt.lang.extend(pt.asn1.cms.IssuerAndSerialNumber, pt.asn1.ASN1Object), pt.asn1.cms.AttributeList = function(t) {
    pt.asn1.cms.AttributeList.superclass.constructor.call(this), this.list = new Array(), 
    this.sortFlag = !0, this.add = function(t) {
        t instanceof pt.asn1.cms.Attribute && this.list.push(t);
    }, this.length = function() {
        return this.list.length;
    }, this.clear = function() {
        this.list = new Array(), this.hTLV = null, this.hV = null;
    }, this.getEncodedHex = function() {
        if ("string" == typeof this.hTLV) return this.hTLV;
        var t = new pt.asn1.DERSet({
            array: this.list,
            sortflag: this.sortFlag
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
}, yt.lang.extend(pt.asn1.cms.AttributeList, pt.asn1.ASN1Object), pt.asn1.cms.SignerInfo = function(t) {
    pt.asn1.cms.SignerInfo.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.cms, n = pt.asn1.x509;
    this.dCMSVersion = new e.DERInteger({
        int: 1
    }), this.dSignerIdentifier = null, this.dDigestAlgorithm = null, this.dSignedAttrs = new i.AttributeList(), 
    this.dSigAlg = null, this.dSig = null, this.dUnsignedAttrs = new i.AttributeList(), 
    this.setSignerIdentifier = function(t) {
        if ("string" == typeof t && -1 != t.indexOf("CERTIFICATE") && -1 != t.indexOf("BEGIN") && -1 != t.indexOf("END")) {
            this.dSignerIdentifier = new i.IssuerAndSerialNumber({
                cert: t
            });
        }
    }, this.setForContentAndHash = function(t) {
        void 0 !== t && (t.eciObj instanceof pt.asn1.cms.EncapsulatedContentInfo && (this.dSignedAttrs.add(new i.ContentType({
            oid: "1.2.840.113549.1.7.1"
        })), this.dSignedAttrs.add(new i.MessageDigest({
            eciObj: t.eciObj,
            hashAlg: t.hashAlg
        }))), void 0 !== t.sdObj && t.sdObj instanceof pt.asn1.cms.SignedData && -1 == t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg) && t.sdObj.digestAlgNameList.push(t.hashAlg), 
        "string" == typeof t.hashAlg && (this.dDigestAlgorithm = new n.AlgorithmIdentifier({
            name: t.hashAlg
        })));
    }, this.sign = function(t, i) {
        this.dSigAlg = new n.AlgorithmIdentifier({
            name: i
        });
        var r = this.dSignedAttrs.getEncodedHex(), s = _t.getKey(t), a = new pt.crypto.Signature({
            alg: i
        });
        a.init(s), a.updateHex(r);
        var o = a.sign();
        this.dSig = new e.DEROctetString({
            hex: o
        });
    }, this.addUnsigned = function(t) {
        this.hTLV = null, this.dUnsignedAttrs.hTLV = null, this.dUnsignedAttrs.add(t);
    }, this.getEncodedHex = function() {
        if (this.dSignedAttrs instanceof pt.asn1.cms.AttributeList && 0 == this.dSignedAttrs.length()) throw "SignedAttrs length = 0 (empty)";
        var t = new e.DERTaggedObject({
            obj: this.dSignedAttrs,
            tag: "a0",
            explicit: !1
        }), i = null;
        this.dUnsignedAttrs.length() > 0 && (i = new e.DERTaggedObject({
            obj: this.dUnsignedAttrs,
            tag: "a1",
            explicit: !1
        }));
        var n = [ this.dCMSVersion, this.dSignerIdentifier, this.dDigestAlgorithm, t, this.dSigAlg, this.dSig ];
        null != i && n.push(i);
        var r = new e.DERSequence({
            array: n
        });
        return this.hTLV = r.getEncodedHex(), this.hTLV;
    };
}, yt.lang.extend(pt.asn1.cms.SignerInfo, pt.asn1.ASN1Object), pt.asn1.cms.EncapsulatedContentInfo = function(t) {
    pt.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);
    var e = pt.asn1;
    pt.asn1.cms, pt.asn1.x509;
    this.dEContentType = new e.DERObjectIdentifier({
        name: "data"
    }), this.dEContent = null, this.isDetached = !1, this.eContentValueHex = null, this.setContentType = function(t) {
        t.match(/^[0-2][.][0-9.]+$/) ? this.dEContentType = new e.DERObjectIdentifier({
            oid: t
        }) : this.dEContentType = new e.DERObjectIdentifier({
            name: t
        });
    }, this.setContentValue = function(t) {
        void 0 !== t && ("string" == typeof t.hex ? this.eContentValueHex = t.hex : "string" == typeof t.str && (this.eContentValueHex = U(t.str)));
    }, this.setContentValueHex = function(t) {
        this.eContentValueHex = t;
    }, this.setContentValueStr = function(t) {
        this.eContentValueHex = U(t);
    }, this.getEncodedHex = function() {
        if ("string" != typeof this.eContentValueHex) throw "eContentValue not yet set";
        var t = new e.DEROctetString({
            hex: this.eContentValueHex
        });
        this.dEContent = new e.DERTaggedObject({
            obj: t,
            tag: "a0",
            explicit: !0
        });
        var i = [ this.dEContentType ];
        this.isDetached || i.push(this.dEContent);
        var n = new e.DERSequence({
            array: i
        });
        return this.hTLV = n.getEncodedHex(), this.hTLV;
    };
}, yt.lang.extend(pt.asn1.cms.EncapsulatedContentInfo, pt.asn1.ASN1Object), pt.asn1.cms.ContentInfo = function(t) {
    pt.asn1.cms.ContentInfo.superclass.constructor.call(this);
    var e = pt.asn1, i = (pt.asn1.cms, pt.asn1.x509);
    this.dContentType = null, this.dContent = null, this.setContentType = function(t) {
        "string" == typeof t && (this.dContentType = i.OID.name2obj(t));
    }, this.getEncodedHex = function() {
        var t = new e.DERTaggedObject({
            obj: this.dContent,
            tag: "a0",
            explicit: !0
        }), i = new e.DERSequence({
            array: [ this.dContentType, t ]
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && (t.type && this.setContentType(t.type), t.obj && t.obj instanceof e.ASN1Object && (this.dContent = t.obj));
}, yt.lang.extend(pt.asn1.cms.ContentInfo, pt.asn1.ASN1Object), pt.asn1.cms.SignedData = function(t) {
    pt.asn1.cms.SignedData.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.cms, n = pt.asn1.x509;
    this.dCMSVersion = new e.DERInteger({
        int: 1
    }), this.dDigestAlgs = null, this.digestAlgNameList = [], this.dEncapContentInfo = new i.EncapsulatedContentInfo(), 
    this.dCerts = null, this.certificateList = [], this.crlList = [], this.signerInfoList = [ new i.SignerInfo() ], 
    this.addCertificatesByPEM = function(t) {
        var i = Bt.pemToHex(t), n = new e.ASN1Object();
        n.hTLV = i, this.certificateList.push(n);
    }, this.getEncodedHex = function() {
        if ("string" == typeof this.hTLV) return this.hTLV;
        if (null == this.dDigestAlgs) {
            for (var t = [], i = 0; i < this.digestAlgNameList.length; i++) {
                var r = this.digestAlgNameList[i], s = new n.AlgorithmIdentifier({
                    name: r
                });
                t.push(s);
            }
            this.dDigestAlgs = new e.DERSet({
                array: t
            });
        }
        var a = [ this.dCMSVersion, this.dDigestAlgs, this.dEncapContentInfo ];
        if (null == this.dCerts && this.certificateList.length > 0) {
            var o = new e.DERSet({
                array: this.certificateList
            });
            this.dCerts = new e.DERTaggedObject({
                obj: o,
                tag: "a0",
                explicit: !1
            });
        }
        null != this.dCerts && a.push(this.dCerts);
        var h = new e.DERSet({
            array: this.signerInfoList
        });
        a.push(h);
        var u = new e.DERSequence({
            array: a
        });
        return this.hTLV = u.getEncodedHex(), this.hTLV;
    }, this.getContentInfo = function() {
        return this.getEncodedHex(), new i.ContentInfo({
            type: "signed-data",
            obj: this
        });
    }, this.getContentInfoEncodedHex = function() {
        return this.getContentInfo().getEncodedHex();
    }, this.getPEM = function() {
        var t = this.getContentInfoEncodedHex();
        return e.ASN1Util.getPEMStringFromHex(t, "CMS");
    };
}, yt.lang.extend(pt.asn1.cms.SignedData, pt.asn1.ASN1Object), pt.asn1.cms.CMSUtil = new function() {}(), 
pt.asn1.cms.CMSUtil.newSignedData = function(t) {
    var e = pt.asn1.cms, i = pt.asn1.cades, n = new e.SignedData();
    if (n.dEncapContentInfo.setContentValue(t.content), "object" == ft(t.certs)) for (r = 0; r < t.certs.length; r++) n.addCertificatesByPEM(t.certs[r]);
    n.signerInfoList = [];
    for (var r = 0; r < t.signerInfos.length; r++) {
        var s = t.signerInfos[r], a = new e.SignerInfo();
        a.setSignerIdentifier(s.signerCert), a.setForContentAndHash({
            sdObj: n,
            eciObj: n.dEncapContentInfo,
            hashAlg: s.hashAlg
        });
        for (attrName in s.sAttr) {
            var o = s.sAttr[attrName];
            if ("SigningTime" == attrName) {
                h = new e.SigningTime(o);
                a.dSignedAttrs.add(h);
            }
            if ("SigningCertificate" == attrName) {
                h = new e.SigningCertificate(o);
                a.dSignedAttrs.add(h);
            }
            if ("SigningCertificateV2" == attrName) {
                h = new e.SigningCertificateV2(o);
                a.dSignedAttrs.add(h);
            }
            if ("SignaturePolicyIdentifier" == attrName) {
                var h = new i.SignaturePolicyIdentifier(o);
                a.dSignedAttrs.add(h);
            }
        }
        a.sign(s.signerPrvKey, s.sigAlg), n.signerInfoList.push(a);
    }
    return n;
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), 
void 0 !== pt.asn1.tsp && pt.asn1.tsp || (pt.asn1.tsp = {}), pt.asn1.tsp.Accuracy = function(t) {
    pt.asn1.tsp.Accuracy.superclass.constructor.call(this);
    var e = pt.asn1;
    this.seconds = null, this.millis = null, this.micros = null, this.getEncodedHex = function() {
        var t = null, i = null, n = null, r = [];
        if (null != this.seconds && (t = new e.DERInteger({
            int: this.seconds
        }), r.push(t)), null != this.millis) {
            var s = new e.DERInteger({
                int: this.millis
            });
            i = new e.DERTaggedObject({
                obj: s,
                tag: "80",
                explicit: !1
            }), r.push(i);
        }
        if (null != this.micros) {
            var a = new e.DERInteger({
                int: this.micros
            });
            n = new e.DERTaggedObject({
                obj: a,
                tag: "81",
                explicit: !1
            }), r.push(n);
        }
        var o = new e.DERSequence({
            array: r
        });
        return this.hTLV = o.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("number" == typeof t.seconds && (this.seconds = t.seconds), 
    "number" == typeof t.millis && (this.millis = t.millis), "number" == typeof t.micros && (this.micros = t.micros));
}, yt.lang.extend(pt.asn1.tsp.Accuracy, pt.asn1.ASN1Object), pt.asn1.tsp.MessageImprint = function(t) {
    pt.asn1.tsp.MessageImprint.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.x509;
    this.dHashAlg = null, this.dHashValue = null, this.getEncodedHex = function() {
        return "string" == typeof this.hTLV ? this.hTLV : new e.DERSequence({
            array: [ this.dHashAlg, this.dHashValue ]
        }).getEncodedHex();
    }, void 0 !== t && ("string" == typeof t.hashAlg && (this.dHashAlg = new i.AlgorithmIdentifier({
        name: t.hashAlg
    })), "string" == typeof t.hashValue && (this.dHashValue = new e.DEROctetString({
        hex: t.hashValue
    })));
}, yt.lang.extend(pt.asn1.tsp.MessageImprint, pt.asn1.ASN1Object), pt.asn1.tsp.TimeStampReq = function(t) {
    pt.asn1.tsp.TimeStampReq.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.tsp;
    this.dVersion = new e.DERInteger({
        int: 1
    }), this.dMessageImprint = null, this.dPolicy = null, this.dNonce = null, this.certReq = !0, 
    this.setMessageImprint = function(t) {
        t instanceof pt.asn1.tsp.MessageImprint ? this.dMessageImprint = t : "object" == (void 0 === t ? "undefined" : ft(t)) && (this.dMessageImprint = new i.MessageImprint(t));
    }, this.getEncodedHex = function() {
        if (null == this.dMessageImprint) throw "messageImprint shall be specified";
        var t = [ this.dVersion, this.dMessageImprint ];
        null != this.dPolicy && t.push(this.dPolicy), null != this.dNonce && t.push(this.dNonce), 
        this.certReq && t.push(new e.DERBoolean());
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("object" == ft(t.mi) && this.setMessageImprint(t.mi), "object" == ft(t.policy) && (this.dPolicy = new e.DERObjectIdentifier(t.policy)), 
    "object" == ft(t.nonce) && (this.dNonce = new e.DERInteger(t.nonce)), "boolean" == typeof t.certreq && (this.certReq = t.certreq));
}, yt.lang.extend(pt.asn1.tsp.TimeStampReq, pt.asn1.ASN1Object), pt.asn1.tsp.TSTInfo = function(t) {
    pt.asn1.tsp.TSTInfo.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.x509, n = pt.asn1.tsp;
    if (this.dVersion = new e.DERInteger({
        int: 1
    }), this.dPolicy = null, this.dMessageImprint = null, this.dSerialNumber = null, 
    this.dGenTime = null, this.dAccuracy = null, this.dOrdering = null, this.dNonce = null, 
    this.dTsa = null, this.getEncodedHex = function() {
        var t = [ this.dVersion ];
        if (null == this.dPolicy) throw "policy shall be specified.";
        if (t.push(this.dPolicy), null == this.dMessageImprint) throw "messageImprint shall be specified.";
        if (t.push(this.dMessageImprint), null == this.dSerialNumber) throw "serialNumber shall be specified.";
        if (t.push(this.dSerialNumber), null == this.dGenTime) throw "genTime shall be specified.";
        t.push(this.dGenTime), null != this.dAccuracy && t.push(this.dAccuracy), null != this.dOrdering && t.push(this.dOrdering), 
        null != this.dNonce && t.push(this.dNonce), null != this.dTsa && t.push(this.dTsa);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        if ("string" == typeof t.policy) {
            if (!t.policy.match(/^[0-9.]+$/)) throw "policy shall be oid like 0.1.4.134";
            this.dPolicy = new e.DERObjectIdentifier({
                oid: t.policy
            });
        }
        void 0 !== t.messageImprint && (this.dMessageImprint = new n.MessageImprint(t.messageImprint)), 
        void 0 !== t.serialNumber && (this.dSerialNumber = new e.DERInteger(t.serialNumber)), 
        void 0 !== t.genTime && (this.dGenTime = new e.DERGeneralizedTime(t.genTime)), "undefind" != typeof t.accuracy && (this.dAccuracy = new n.Accuracy(t.accuracy)), 
        void 0 !== t.ordering && 1 == t.ordering && (this.dOrdering = new e.DERBoolean()), 
        void 0 !== t.nonce && (this.dNonce = new e.DERInteger(t.nonce)), void 0 !== t.tsa && (this.dTsa = new i.X500Name(t.tsa));
    }
}, yt.lang.extend(pt.asn1.tsp.TSTInfo, pt.asn1.ASN1Object), pt.asn1.tsp.TimeStampResp = function(t) {
    pt.asn1.tsp.TimeStampResp.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.tsp;
    this.dStatus = null, this.dTST = null, this.getEncodedHex = function() {
        if (null == this.dStatus) throw "status shall be specified";
        var t = [ this.dStatus ];
        null != this.dTST && t.push(this.dTST);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("object" == ft(t.status) && (this.dStatus = new i.PKIStatusInfo(t.status)), 
    void 0 !== t.tst && t.tst instanceof pt.asn1.ASN1Object && (this.dTST = t.tst.getContentInfo()));
}, yt.lang.extend(pt.asn1.tsp.TimeStampResp, pt.asn1.ASN1Object), pt.asn1.tsp.PKIStatusInfo = function(t) {
    pt.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.tsp;
    this.dStatus = null, this.dStatusString = null, this.dFailureInfo = null, this.getEncodedHex = function() {
        if (null == this.dStatus) throw "status shall be specified";
        var t = [ this.dStatus ];
        null != this.dStatusString && t.push(this.dStatusString), null != this.dFailureInfo && t.push(this.dFailureInfo);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("object" == ft(t.status) && (this.dStatus = new i.PKIStatus(t.status)), 
    "object" == ft(t.statstr) && (this.dStatusString = new i.PKIFreeText({
        array: t.statstr
    })), "object" == ft(t.failinfo) && (this.dFailureInfo = new i.PKIFailureInfo(t.failinfo)));
}, yt.lang.extend(pt.asn1.tsp.PKIStatusInfo, pt.asn1.ASN1Object), pt.asn1.tsp.PKIStatus = function(t) {
    pt.asn1.tsp.PKIStatus.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.tsp;
    if (this.getEncodedHex = function() {
        return this.hTLV = this.dStatus.getEncodedHex(), this.hTLV;
    }, void 0 !== t) if (void 0 !== t.name) {
        var n = i.PKIStatus.valueList;
        if (void 0 === n[t.name]) throw "name undefined: " + t.name;
        this.dStatus = new e.DERInteger({
            int: n[t.name]
        });
    } else this.dStatus = new e.DERInteger(t);
}, yt.lang.extend(pt.asn1.tsp.PKIStatus, pt.asn1.ASN1Object), pt.asn1.tsp.PKIStatus.valueList = {
    granted: 0,
    grantedWithMods: 1,
    rejection: 2,
    waiting: 3,
    revocationWarning: 4,
    revocationNotification: 5
}, pt.asn1.tsp.PKIFreeText = function(t) {
    pt.asn1.tsp.PKIFreeText.superclass.constructor.call(this);
    var e = pt.asn1;
    this.textList = [], this.getEncodedHex = function() {
        for (var t = [], i = 0; i < this.textList.length; i++) t.push(new e.DERUTF8String({
            str: this.textList[i]
        }));
        var n = new e.DERSequence({
            array: t
        });
        return this.hTLV = n.getEncodedHex(), this.hTLV;
    }, void 0 !== t && "object" == ft(t.array) && (this.textList = t.array);
}, yt.lang.extend(pt.asn1.tsp.PKIFreeText, pt.asn1.ASN1Object), pt.asn1.tsp.PKIFailureInfo = function(t) {
    pt.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.tsp;
    if (this.value = null, this.getEncodedHex = function() {
        if (null == this.value) throw "value shall be specified";
        var t = new Number(this.value).toString(2), i = new e.DERBitString();
        return i.setByBinaryString(t), this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t) if ("string" == typeof t.name) {
        var n = i.PKIFailureInfo.valueList;
        if (void 0 === n[t.name]) throw "name undefined: " + t.name;
        this.value = n[t.name];
    } else "number" == typeof t.int && (this.value = t.int);
}, yt.lang.extend(pt.asn1.tsp.PKIFailureInfo, pt.asn1.ASN1Object), pt.asn1.tsp.PKIFailureInfo.valueList = {
    badAlg: 0,
    badRequest: 2,
    badDataFormat: 5,
    timeNotAvailable: 14,
    unacceptedPolicy: 15,
    unacceptedExtension: 16,
    addInfoNotAvailable: 17,
    systemFailure: 25
}, pt.asn1.tsp.AbstractTSAAdapter = function(t) {
    this.getTSTHex = function(t, e) {
        throw "not implemented yet";
    };
}, pt.asn1.tsp.SimpleTSAAdapter = function(t) {
    pt.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this), this.params = null, 
    this.serial = 0, this.getTSTHex = function(t, e) {
        var i = pt.crypto.Util.hashHex(t, e);
        this.params.tstInfo.messageImprint = {
            hashAlg: e,
            hashValue: i
        }, this.params.tstInfo.serialNumber = {
            int: this.serial++
        };
        var n = Math.floor(1e9 * Math.random());
        return this.params.tstInfo.nonce = {
            int: n
        }, pt.asn1.tsp.TSPUtil.newTimeStampToken(this.params).getContentInfoEncodedHex();
    }, void 0 !== t && (this.params = t);
}, yt.lang.extend(pt.asn1.tsp.SimpleTSAAdapter, pt.asn1.tsp.AbstractTSAAdapter), 
pt.asn1.tsp.FixedTSAAdapter = function(t) {
    pt.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this), this.params = null, 
    this.getTSTHex = function(t, e) {
        var i = pt.crypto.Util.hashHex(t, e);
        return this.params.tstInfo.messageImprint = {
            hashAlg: e,
            hashValue: i
        }, pt.asn1.tsp.TSPUtil.newTimeStampToken(this.params).getContentInfoEncodedHex();
    }, void 0 !== t && (this.params = t);
}, yt.lang.extend(pt.asn1.tsp.FixedTSAAdapter, pt.asn1.tsp.AbstractTSAAdapter), 
pt.asn1.tsp.TSPUtil = new function() {}(), pt.asn1.tsp.TSPUtil.newTimeStampToken = function(t) {
    var e = pt.asn1.cms, i = pt.asn1.tsp, n = new e.SignedData(), r = new i.TSTInfo(t.tstInfo).getEncodedHex();
    if (n.dEncapContentInfo.setContentValue({
        hex: r
    }), n.dEncapContentInfo.setContentType("tstinfo"), "object" == ft(t.certs)) for (var s = 0; s < t.certs.length; s++) n.addCertificatesByPEM(t.certs[s]);
    var a = n.signerInfoList[0];
    a.setSignerIdentifier(t.signerCert), a.setForContentAndHash({
        sdObj: n,
        eciObj: n.dEncapContentInfo,
        hashAlg: t.hashAlg
    });
    var o = new e.SigningCertificate({
        array: [ t.signerCert ]
    });
    return a.dSignedAttrs.add(o), a.sign(t.signerPrvKey, t.sigAlg), n;
}, pt.asn1.tsp.TSPUtil.parseTimeStampReq = function(t) {
    var e = {};
    e.certreq = !1;
    var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
    if (i.length < 2) throw "TimeStampReq must have at least 2 items";
    var n = Bt.getHexOfTLV_AtObj(t, i[1]);
    e.mi = pt.asn1.tsp.TSPUtil.parseMessageImprint(n);
    for (var r = 2; r < i.length; r++) {
        var s = i[r], a = t.substr(s, 2);
        if ("06" == a) {
            var o = Bt.getHexOfV_AtObj(t, s);
            e.policy = Bt.hextooidstr(o);
        }
        "02" == a && (e.nonce = Bt.getHexOfV_AtObj(t, s)), "01" == a && (e.certreq = !0);
    }
    return e;
}, pt.asn1.tsp.TSPUtil.parseMessageImprint = function(t) {
    var e = {};
    if ("30" != t.substr(0, 2)) throw "head of messageImprint hex shall be '30'";
    Bt.getPosArrayOfChildren_AtObj(t, 0);
    var i = Bt.getDecendantIndexByNthList(t, 0, [ 0, 0 ]), n = Bt.getHexOfV_AtObj(t, i), r = Bt.hextooidstr(n), s = pt.asn1.x509.OID.oid2name(r);
    if ("" == s) throw "hashAlg name undefined: " + r;
    var a = s, o = Bt.getDecendantIndexByNthList(t, 0, [ 1 ]);
    return e.hashAlg = a, e.hashValue = Bt.getHexOfV_AtObj(t, o), e;
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), 
void 0 !== pt.asn1.cades && pt.asn1.cades || (pt.asn1.cades = {}), pt.asn1.cades.SignaturePolicyIdentifier = function(t) {
    pt.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.15";
    var e = pt.asn1, i = pt.asn1.cades;
    if (void 0 !== t && "string" == typeof t.oid && "object" == ft(t.hash)) {
        var n = new e.DERObjectIdentifier({
            oid: t.oid
        }), r = new i.OtherHashAlgAndValue(t.hash), s = new e.DERSequence({
            array: [ n, r ]
        });
        this.valueList = [ s ];
    }
}, yt.lang.extend(pt.asn1.cades.SignaturePolicyIdentifier, pt.asn1.cms.Attribute), 
pt.asn1.cades.OtherHashAlgAndValue = function(t) {
    pt.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.x509;
    this.dAlg = null, this.dHash = null, this.getEncodedHex = function() {
        var t = new e.DERSequence({
            array: [ this.dAlg, this.dHash ]
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && "string" == typeof t.alg && "string" == typeof t.hash && (this.dAlg = new i.AlgorithmIdentifier({
        name: t.alg
    }), this.dHash = new e.DEROctetString({
        hex: t.hash
    }));
}, yt.lang.extend(pt.asn1.cades.OtherHashAlgAndValue, pt.asn1.ASN1Object), pt.asn1.cades.SignatureTimeStamp = function(t) {
    pt.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.14", 
    this.tstHex = null;
    var e = pt.asn1;
    if (void 0 !== t) {
        if (void 0 !== t.res) if ("string" == typeof t.res && t.res.match(/^[0-9A-Fa-f]+$/)) ; else if (!(t.res instanceof pt.asn1.ASN1Object)) throw "res param shall be ASN1Object or hex string";
        if (void 0 !== t.tst) if ("string" == typeof t.tst && t.tst.match(/^[0-9A-Fa-f]+$/)) {
            var i = new e.ASN1Object();
            this.tstHex = t.tst, i.hTLV = this.tstHex, i.getEncodedHex(), this.valueList = [ i ];
        } else if (!(t.tst instanceof pt.asn1.ASN1Object)) throw "tst param shall be ASN1Object or hex string";
    }
}, yt.lang.extend(pt.asn1.cades.SignatureTimeStamp, pt.asn1.cms.Attribute), pt.asn1.cades.CompleteCertificateRefs = function(t) {
    pt.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.21";
    pt.asn1;
    var e = pt.asn1.cades;
    this.setByArray = function(t) {
        this.valueList = [];
        for (var i = 0; i < t.length; i++) {
            var n = new e.OtherCertID(t[i]);
            this.valueList.push(n);
        }
    }, void 0 !== t && "object" == (void 0 === t ? "undefined" : ft(t)) && "number" == typeof t.length && this.setByArray(t);
}, yt.lang.extend(pt.asn1.cades.CompleteCertificateRefs, pt.asn1.cms.Attribute), 
pt.asn1.cades.OtherCertID = function(t) {
    pt.asn1.cades.OtherCertID.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.cms, n = pt.asn1.cades;
    this.hasIssuerSerial = !0, this.dOtherCertHash = null, this.dIssuerSerial = null, 
    this.setByCertPEM = function(t) {
        this.dOtherCertHash = new n.OtherHash(t), this.hasIssuerSerial && (this.dIssuerSerial = new i.IssuerAndSerialNumber(t));
    }, this.getEncodedHex = function() {
        if (null != this.hTLV) return this.hTLV;
        if (null == this.dOtherCertHash) throw "otherCertHash not set";
        var t = [ this.dOtherCertHash ];
        null != this.dIssuerSerial && t.push(this.dIssuerSerial);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t), 
    "object" == (void 0 === t ? "undefined" : ft(t)) && (!1 === t.hasis && (this.hasIssuerSerial = !1), 
    "string" == typeof t.cert && this.setByCertPEM(t.cert)));
}, yt.lang.extend(pt.asn1.cades.OtherCertID, pt.asn1.ASN1Object), pt.asn1.cades.OtherHash = function(t) {
    pt.asn1.cades.OtherHash.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.cades;
    if (this.alg = "sha256", this.dOtherHash = null, this.setByCertPEM = function(t) {
        if (-1 == t.indexOf("-----BEGIN ")) throw "certPEM not to seem PEM format";
        var e = Bt.pemToHex(t), n = pt.crypto.Util.hashHex(e, this.alg);
        this.dOtherHash = new i.OtherHashAlgAndValue({
            alg: this.alg,
            hash: n
        });
    }, this.getEncodedHex = function() {
        if (null == this.dOtherHash) throw "OtherHash not set";
        return this.dOtherHash.getEncodedHex();
    }, void 0 !== t) if ("string" == typeof t) if (-1 != t.indexOf("-----BEGIN ")) this.setByCertPEM(t); else {
        if (!t.match(/^[0-9A-Fa-f]+$/)) throw "unsupported string value for params";
        this.dOtherHash = new e.DEROctetString({
            hex: t
        });
    } else "object" == (void 0 === t ? "undefined" : ft(t)) && ("string" == typeof t.cert ? ("string" == typeof t.alg && (this.alg = t.alg), 
    this.setByCertPEM(t.cert)) : this.dOtherHash = new i.OtherHashAlgAndValue(t));
}, yt.lang.extend(pt.asn1.cades.OtherHash, pt.asn1.ASN1Object), pt.asn1.cades.CAdESUtil = new function() {}(), 
pt.asn1.cades.CAdESUtil.addSigTS = function(t, e, i) {}, pt.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(t) {
    var e = pt.asn1, i = pt.asn1.cms, n = pt.asn1.cades.CAdESUtil, r = {};
    if ("06092a864886f70d010702" != Bt.getDecendantHexTLVByNthList(t, 0, [ 0 ])) throw "hex is not CMS SignedData";
    var s = Bt.getDecendantIndexByNthList(t, 0, [ 1, 0 ]), a = Bt.getPosArrayOfChildren_AtObj(t, s);
    if (a.length < 4) throw "num of SignedData elem shall be 4 at least";
    var o = a.shift();
    r.version = Bt.getHexOfTLV_AtObj(t, o);
    var h = a.shift();
    r.algs = Bt.getHexOfTLV_AtObj(t, h);
    var u = a.shift();
    r.encapcontent = Bt.getHexOfTLV_AtObj(t, u), r.certs = null, r.revs = null, r.si = [];
    var c = a.shift();
    "a0" == t.substr(c, 2) && (r.certs = Bt.getHexOfTLV_AtObj(t, c), c = a.shift()), 
    "a1" == t.substr(c, 2) && (r.revs = Bt.getHexOfTLV_AtObj(t, c), c = a.shift());
    var l = c;
    if ("31" != t.substr(l, 2)) throw "Can't find signerInfos";
    for (var f = Bt.getPosArrayOfChildren_AtObj(t, l), d = 0; d < f.length; d++) {
        var g = f[d], p = n.parseSignerInfoForAddingUnsigned(t, g, d);
        r.si[d] = p;
    }
    var y = null;
    r.obj = new i.SignedData(), (y = new e.ASN1Object()).hTLV = r.version, r.obj.dCMSVersion = y, 
    (y = new e.ASN1Object()).hTLV = r.algs, r.obj.dDigestAlgs = y, (y = new e.ASN1Object()).hTLV = r.encapcontent, 
    r.obj.dEncapContentInfo = y, (y = new e.ASN1Object()).hTLV = r.certs, r.obj.dCerts = y, 
    r.obj.signerInfoList = [];
    for (d = 0; d < r.si.length; d++) r.obj.signerInfoList.push(r.si[d].obj);
    return r;
}, pt.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(t, e, i) {
    var n = pt.asn1, r = pt.asn1.cms, s = {}, a = Bt.getPosArrayOfChildren_AtObj(t, e);
    if (6 != a.length) throw "not supported items for SignerInfo (!=6)";
    var o = a.shift();
    s.version = Bt.getHexOfTLV_AtObj(t, o);
    var h = a.shift();
    s.si = Bt.getHexOfTLV_AtObj(t, h);
    var u = a.shift();
    s.digalg = Bt.getHexOfTLV_AtObj(t, u);
    var c = a.shift();
    s.sattrs = Bt.getHexOfTLV_AtObj(t, c);
    var l = a.shift();
    s.sigalg = Bt.getHexOfTLV_AtObj(t, l);
    var f = a.shift();
    s.sig = Bt.getHexOfTLV_AtObj(t, f), s.sigval = Bt.getHexOfV_AtObj(t, f);
    var d = null;
    return s.obj = new r.SignerInfo(), d = new n.ASN1Object(), d.hTLV = s.version, s.obj.dCMSVersion = d, 
    d = new n.ASN1Object(), d.hTLV = s.si, s.obj.dSignerIdentifier = d, d = new n.ASN1Object(), 
    d.hTLV = s.digalg, s.obj.dDigestAlgorithm = d, d = new n.ASN1Object(), d.hTLV = s.sattrs, 
    s.obj.dSignedAttrs = d, d = new n.ASN1Object(), d.hTLV = s.sigalg, s.obj.dSigAlg = d, 
    d = new n.ASN1Object(), d.hTLV = s.sig, s.obj.dSig = d, s.obj.dUnsignedAttrs = new r.AttributeList(), 
    s;
}, void 0 !== pt.asn1.csr && pt.asn1.csr || (pt.asn1.csr = {}), pt.asn1.csr.CertificationRequest = function(t) {
    pt.asn1.csr.CertificationRequest.superclass.constructor.call(this);
    this.sign = function(t, e) {
        null == this.prvKey && (this.prvKey = e), this.asn1SignatureAlg = new pt.asn1.x509.AlgorithmIdentifier({
            name: t
        }), sig = new pt.crypto.Signature({
            alg: t
        }), sig.initSign(this.prvKey), sig.updateHex(this.asn1CSRInfo.getEncodedHex()), 
        this.hexSig = sig.sign(), this.asn1Sig = new pt.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var i = new pt.asn1.DERSequence({
            array: [ this.asn1CSRInfo, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = i.getEncodedHex(), this.isModified = !1;
    }, this.getPEMString = function() {
        return pt.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(), "CERTIFICATE REQUEST");
    }, this.getEncodedHex = function() {
        if (0 == this.isModified && null != this.hTLV) return this.hTLV;
        throw "not signed yet";
    }, void 0 !== t && void 0 !== t.csrinfo && (this.asn1CSRInfo = t.csrinfo);
}, yt.lang.extend(pt.asn1.csr.CertificationRequest, pt.asn1.ASN1Object), pt.asn1.csr.CertificationRequestInfo = function(t) {
    pt.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this), this._initialize = function() {
        this.asn1Array = new Array(), this.asn1Version = new pt.asn1.DERInteger({
            int: 0
        }), this.asn1Subject = null, this.asn1SubjPKey = null, this.extensionsArray = new Array();
    }, this.setSubjectByParam = function(t) {
        this.asn1Subject = new pt.asn1.x509.X500Name(t);
    }, this.setSubjectPublicKeyByGetKey = function(t) {
        var e = _t.getKey(t);
        this.asn1SubjPKey = new pt.asn1.x509.SubjectPublicKeyInfo(e);
    }, this.appendExtensionByName = function(t, e) {
        pt.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray);
    }, this.getEncodedHex = function() {
        if (this.asn1Array = new Array(), this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1Subject), 
        this.asn1Array.push(this.asn1SubjPKey), this.extensionsArray.length > 0) {
            var t = new pt.asn1.DERSequence({
                array: this.extensionsArray
            }), e = new pt.asn1.DERSet({
                array: [ t ]
            }), i = new pt.asn1.DERSequence({
                array: [ new pt.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.9.14"
                }), e ]
            }), n = new pt.asn1.DERTaggedObject({
                explicit: !0,
                tag: "a0",
                obj: i
            });
            this.asn1Array.push(n);
        } else {
            n = new pt.asn1.DERTaggedObject({
                explicit: !1,
                tag: "a0",
                obj: new pt.asn1.DERNull()
            });
            this.asn1Array.push(n);
        }
        var r = new pt.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = r.getEncodedHex(), this.isModified = !1, this.hTLV;
    }, this._initialize();
}, yt.lang.extend(pt.asn1.csr.CertificationRequestInfo, pt.asn1.ASN1Object), pt.asn1.csr.CSRUtil = new function() {}(), 
pt.asn1.csr.CSRUtil.newCSRPEM = function(t) {
    var e = pt.asn1.csr;
    if (void 0 === t.subject) throw "parameter subject undefined";
    if (void 0 === t.sbjpubkey) throw "parameter sbjpubkey undefined";
    if (void 0 === t.sigalg) throw "parameter sigalg undefined";
    if (void 0 === t.sbjprvkey) throw "parameter sbjpubkey undefined";
    var i = new e.CertificationRequestInfo();
    if (i.setSubjectByParam(t.subject), i.setSubjectPublicKeyByGetKey(t.sbjpubkey), 
    void 0 !== t.ext && void 0 !== t.ext.length) for (var n = 0; n < t.ext.length; n++) for (key in t.ext[n]) i.appendExtensionByName(key, t.ext[n][key]);
    var r = new e.CertificationRequest({
        csrinfo: i
    }), s = _t.getKey(t.sbjprvkey);
    return r.sign(t.sigalg, s), r.getPEMString();
}, pt.asn1.csr.CSRUtil.getInfo = function(t) {
    var e = {};
    if (e.subject = {}, e.pubkey = {}, -1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST")) throw "argument is not PEM file";
    var i = Bt.pemToHex(t, "CERTIFICATE REQUEST");
    return e.subject.hex = Bt.getDecendantHexTLVByNthList(i, 0, [ 0, 1 ]), e.subject.name = lt.hex2dn(e.subject.hex), 
    e.pubkey.hex = Bt.getDecendantHexTLVByNthList(i, 0, [ 0, 2 ]), e.pubkey.obj = _t.getKey(e.pubkey.hex, null, "pkcs8pub"), 
    e;
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), 
void 0 !== pt.asn1.ocsp && pt.asn1.ocsp || (pt.asn1.ocsp = {}), pt.asn1.ocsp.DEFAULT_HASH = "sha1", 
pt.asn1.ocsp.CertID = function(t) {
    pt.asn1.ocsp.CertID.superclass.constructor.call(this);
    var e = pt.asn1, i = pt.asn1.x509;
    if (this.dHashAlg = null, this.dIssuerNameHash = null, this.dIssuerKeyHash = null, 
    this.dSerialNumber = null, this.setByValue = function(t, n, r, s) {
        void 0 === s && (s = pt.asn1.ocsp.DEFAULT_HASH), this.dHashAlg = new i.AlgorithmIdentifier({
            name: s
        }), this.dIssuerNameHash = new e.DEROctetString({
            hex: t
        }), this.dIssuerKeyHash = new e.DEROctetString({
            hex: n
        }), this.dSerialNumber = new e.DERInteger({
            hex: r
        });
    }, this.setByCert = function(t, e, i) {
        void 0 === i && (i = pt.asn1.ocsp.DEFAULT_HASH);
        var n = new lt();
        n.readCertPEM(e);
        var r = new lt();
        r.readCertPEM(t);
        var s = lt.getPublicKeyInfoPropOfCertPEM(t).keyhex, a = n.getSerialNumberHex(), o = pt.crypto.Util.hashHex(r.getSubjectHex(), i), h = pt.crypto.Util.hashHex(s, i);
        this.setByValue(o, h, a, i), this.hoge = n.getSerialNumberHex();
    }, this.getEncodedHex = function() {
        if (null === this.dHashAlg && null === this.dIssuerNameHash && null === this.dIssuerKeyHash && null === this.dSerialNumber) throw "not yet set values";
        var t = [ this.dHashAlg, this.dIssuerNameHash, this.dIssuerKeyHash, this.dSerialNumber ], i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        var n = t;
        if (void 0 !== n.issuerCert && void 0 !== n.subjectCert) {
            r = pt.asn1.ocsp.DEFAULT_HASH;
            void 0 === n.alg && (r = void 0), this.setByCert(n.issuerCert, n.subjectCert, r);
        } else {
            if (void 0 === n.namehash || void 0 === n.keyhash || void 0 === n.serial) throw "invalid constructor arguments";
            var r = pt.asn1.ocsp.DEFAULT_HASH;
            void 0 === n.alg && (r = void 0), this.setByValue(n.namehash, n.keyhash, n.serial, r);
        }
    }
}, yt.lang.extend(pt.asn1.ocsp.CertID, pt.asn1.ASN1Object), pt.asn1.ocsp.Request = function(t) {
    if (pt.asn1.ocsp.Request.superclass.constructor.call(this), this.dReqCert = null, 
    this.dExt = null, this.getEncodedHex = function() {
        var t = [];
        if (null === this.dReqCert) throw "reqCert not set";
        t.push(this.dReqCert);
        var e = new pt.asn1.DERSequence({
            array: t
        });
        return this.hTLV = e.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        var e = new pt.asn1.ocsp.CertID(t);
        this.dReqCert = e;
    }
}, yt.lang.extend(pt.asn1.ocsp.Request, pt.asn1.ASN1Object), pt.asn1.ocsp.TBSRequest = function(t) {
    pt.asn1.ocsp.TBSRequest.superclass.constructor.call(this), this.version = 0, this.dRequestorName = null, 
    this.dRequestList = [], this.dRequestExt = null, this.setRequestListByParam = function(t) {
        for (var e = [], i = 0; i < t.length; i++) {
            var n = new pt.asn1.ocsp.Request(t[0]);
            e.push(n);
        }
        this.dRequestList = e;
    }, this.getEncodedHex = function() {
        var t = [];
        if (0 !== this.version) throw "not supported version: " + this.version;
        if (null !== this.dRequestorName) throw "requestorName not supported";
        var e = new pt.asn1.DERSequence({
            array: this.dRequestList
        });
        if (t.push(e), null !== this.dRequestExt) throw "requestExtensions not supported";
        var i = new pt.asn1.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.reqList && this.setRequestListByParam(t.reqList);
}, yt.lang.extend(pt.asn1.ocsp.TBSRequest, pt.asn1.ASN1Object), pt.asn1.ocsp.OCSPRequest = function(t) {
    if (pt.asn1.ocsp.OCSPRequest.superclass.constructor.call(this), this.dTbsRequest = null, 
    this.dOptionalSignature = null, this.getEncodedHex = function() {
        var t = [];
        if (null === this.dTbsRequest) throw "tbsRequest not set";
        if (t.push(this.dTbsRequest), null !== this.dOptionalSignature) throw "optionalSignature not supported";
        var e = new pt.asn1.DERSequence({
            array: t
        });
        return this.hTLV = e.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.reqList) {
        var e = new pt.asn1.ocsp.TBSRequest(t);
        this.dTbsRequest = e;
    }
}, yt.lang.extend(pt.asn1.ocsp.OCSPRequest, pt.asn1.ASN1Object), pt.asn1.ocsp.OCSPUtil = {}, 
pt.asn1.ocsp.OCSPUtil.getRequestHex = function(t, e, i) {
    void 0 === i && (i = pt.asn1.ocsp.DEFAULT_HASH);
    var n = {
        alg: i,
        issuerCert: t,
        subjectCert: e
    };
    return new pt.asn1.ocsp.OCSPRequest({
        reqList: [ n ]
    }).getEncodedHex();
}, pt.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(t) {
    var e = {};
    try {
        var i = Bt.getVbyList(t, 0, [ 0 ], "0a");
        e.responseStatus = parseInt(i, 16);
    } catch (t) {}
    if (0 !== e.responseStatus) return e;
    try {
        var n = Bt.getDecendantIndexByNthList(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 1 ]);
        "80" === t.substr(n, 2) ? e.certStatus = "good" : "a1" === t.substr(n, 2) ? (e.certStatus = "revoked", 
        e.revocationTime = z(Bt.getDecendantHexVByNthList(t, n, [ 0 ]))) : "82" === t.substr(n, 2) && (e.certStatus = "unknown");
    } catch (t) {}
    try {
        var r = Bt.getDecendantIndexByNthList(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 2 ]);
        e.thisUpdate = z(Bt.getHexOfV_AtObj(t, r));
    } catch (t) {}
    try {
        var s = Bt.getDecendantIndexByNthList(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 3 ]);
        "a0" === t.substr(s, 2) && (e.nextUpdate = z(Bt.getDecendantHexVByNthList(t, s, [ 0 ])));
    } catch (t) {}
    return e;
};

void 0 !== pt && pt || (pt = {}), void 0 !== pt.lang && pt.lang || (pt.lang = {}), 
pt.lang.String = function() {};

var Nt, Vt;

"function" == typeof Buffer ? (Nt = function(t) {
    return L(new Buffer(t, "utf8").toString("base64"));
}, Vt = function(t) {
    return new Buffer(k(t), "base64").toString("utf8");
}) : (Nt = function(t) {
    return M(X($(t)));
}, Vt = function(t) {
    return decodeURIComponent(Y(q(t)));
}), pt.lang.String.isInteger = function(t) {
    return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
}, pt.lang.String.isHex = function(t) {
    return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/));
}, pt.lang.String.isBase64 = function(t) {
    return !(!(t = t.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0);
}, pt.lang.String.isBase64URL = function(t) {
    return !t.match(/[+/ = ] /) && (t = k(t), pt.lang.String.isBase64(t));
}, pt.lang.String.isIntegerArray = function(t) {
    return !!(t = t.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/);
};

void 0 !== pt && pt || (pt = {}), void 0 !== pt.crypto && pt.crypto || (pt.crypto = {}), 
pt.crypto.Util = new function() {
    this.DIGESTINFOHEAD = {
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        ripemd160: "3021300906052b2403020105000414"
    }, this.DEFAULTPROVIDER = {
        md5: "cryptojs",
        sha1: "cryptojs",
        sha224: "cryptojs",
        sha256: "cryptojs",
        sha384: "cryptojs",
        sha512: "cryptojs",
        ripemd160: "cryptojs",
        hmacmd5: "cryptojs",
        hmacsha1: "cryptojs",
        hmacsha224: "cryptojs",
        hmacsha256: "cryptojs",
        hmacsha384: "cryptojs",
        hmacsha512: "cryptojs",
        hmacripemd160: "cryptojs",
        MD5withRSA: "cryptojs/jsrsa",
        SHA1withRSA: "cryptojs/jsrsa",
        SHA224withRSA: "cryptojs/jsrsa",
        SHA256withRSA: "cryptojs/jsrsa",
        SHA384withRSA: "cryptojs/jsrsa",
        SHA512withRSA: "cryptojs/jsrsa",
        RIPEMD160withRSA: "cryptojs/jsrsa",
        MD5withECDSA: "cryptojs/jsrsa",
        SHA1withECDSA: "cryptojs/jsrsa",
        SHA224withECDSA: "cryptojs/jsrsa",
        SHA256withECDSA: "cryptojs/jsrsa",
        SHA384withECDSA: "cryptojs/jsrsa",
        SHA512withECDSA: "cryptojs/jsrsa",
        RIPEMD160withECDSA: "cryptojs/jsrsa",
        SHA1withDSA: "cryptojs/jsrsa",
        SHA224withDSA: "cryptojs/jsrsa",
        SHA256withDSA: "cryptojs/jsrsa",
        MD5withRSAandMGF1: "cryptojs/jsrsa",
        SHA1withRSAandMGF1: "cryptojs/jsrsa",
        SHA224withRSAandMGF1: "cryptojs/jsrsa",
        SHA256withRSAandMGF1: "cryptojs/jsrsa",
        SHA384withRSAandMGF1: "cryptojs/jsrsa",
        SHA512withRSAandMGF1: "cryptojs/jsrsa",
        RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
    }, this.CRYPTOJSMESSAGEDIGESTNAME = {
        md5: vt.algo.MD5,
        sha1: vt.algo.SHA1,
        sha224: vt.algo.SHA224,
        sha256: vt.algo.SHA256,
        sha384: vt.algo.SHA384,
        sha512: vt.algo.SHA512,
        ripemd160: vt.algo.RIPEMD160
    }, this.getDigestInfoHex = function(t, e) {
        if (void 0 === this.DIGESTINFOHEAD[e]) throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
        return this.DIGESTINFOHEAD[e] + t;
    }, this.getPaddedDigestInfoHex = function(t, e, i) {
        var n = this.getDigestInfoHex(t, e), r = i / 4;
        if (n.length + 22 > r) throw "key is too short for SigAlg: keylen=" + i + "," + e;
        for (var s = "0001", a = "00" + n, o = "", h = r - s.length - a.length, u = 0; u < h; u += 2) o += "ff";
        return s + o + a;
    }, this.hashString = function(t, e) {
        return new pt.crypto.MessageDigest({
            alg: e
        }).digestString(t);
    }, this.hashHex = function(t, e) {
        return new pt.crypto.MessageDigest({
            alg: e
        }).digestHex(t);
    }, this.sha1 = function(t) {
        return new pt.crypto.MessageDigest({
            alg: "sha1",
            prov: "cryptojs"
        }).digestString(t);
    }, this.sha256 = function(t) {
        return new pt.crypto.MessageDigest({
            alg: "sha256",
            prov: "cryptojs"
        }).digestString(t);
    }, this.sha256Hex = function(t) {
        return new pt.crypto.MessageDigest({
            alg: "sha256",
            prov: "cryptojs"
        }).digestHex(t);
    }, this.sha512 = function(t) {
        return new pt.crypto.MessageDigest({
            alg: "sha512",
            prov: "cryptojs"
        }).digestString(t);
    }, this.sha512Hex = function(t) {
        return new pt.crypto.MessageDigest({
            alg: "sha512",
            prov: "cryptojs"
        }).digestHex(t);
    };
}(), pt.crypto.Util.md5 = function(t) {
    return new pt.crypto.MessageDigest({
        alg: "md5",
        prov: "cryptojs"
    }).digestString(t);
}, pt.crypto.Util.ripemd160 = function(t) {
    return new pt.crypto.MessageDigest({
        alg: "ripemd160",
        prov: "cryptojs"
    }).digestString(t);
}, pt.crypto.Util.SECURERANDOMGEN = new w(), pt.crypto.Util.getRandomHexOfNbytes = function(t) {
    var e = new Array(t);
    return pt.crypto.Util.SECURERANDOMGEN.nextBytes(e), K(e);
}, pt.crypto.Util.getRandomBigIntegerOfNbytes = function(t) {
    return new i(pt.crypto.Util.getRandomHexOfNbytes(t), 16);
}, pt.crypto.Util.getRandomHexOfNbits = function(t) {
    var e = t % 8, i = (t - e) / 8, n = new Array(i + 1);
    return pt.crypto.Util.SECURERANDOMGEN.nextBytes(n), n[0] = (255 << e & 255 ^ 255) & n[0], 
    K(n);
}, pt.crypto.Util.getRandomBigIntegerOfNbits = function(t) {
    return new i(pt.crypto.Util.getRandomHexOfNbits(t), 16);
}, pt.crypto.Util.getRandomBigIntegerZeroToMax = function(t) {
    for (var e = t.bitLength(); ;) {
        var i = pt.crypto.Util.getRandomBigIntegerOfNbits(e);
        if (-1 != t.compareTo(i)) return i;
    }
}, pt.crypto.Util.getRandomBigIntegerMinToMax = function(t, e) {
    var i = t.compareTo(e);
    if (1 == i) throw "biMin is greater than biMax";
    if (0 == i) return t;
    var n = e.subtract(t);
    return pt.crypto.Util.getRandomBigIntegerZeroToMax(n).add(t);
}, pt.crypto.MessageDigest = function(t) {
    this.setAlgAndProvider = function(t, e) {
        if (null !== (t = pt.crypto.MessageDigest.getCanonicalAlgName(t)) && void 0 === e && (e = pt.crypto.Util.DEFAULTPROVIDER[t]), 
        -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) && "cryptojs" == e) {
            try {
                this.md = pt.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
            } catch (e) {
                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
            }
            this.updateString = function(t) {
                this.md.update(t);
            }, this.updateHex = function(t) {
                var e = vt.enc.Hex.parse(t);
                this.md.update(e);
            }, this.digest = function() {
                return this.md.finalize().toString(vt.enc.Hex);
            }, this.digestString = function(t) {
                return this.updateString(t), this.digest();
            }, this.digestHex = function(t) {
                return this.updateHex(t), this.digest();
            };
        }
        if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
            try {
                this.md = new sjcl.hash.sha256();
            } catch (e) {
                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
            }
            this.updateString = function(t) {
                this.md.update(t);
            }, this.updateHex = function(t) {
                var e = sjcl.codec.hex.toBits(t);
                this.md.update(e);
            }, this.digest = function() {
                var t = this.md.finalize();
                return sjcl.codec.hex.fromBits(t);
            }, this.digestString = function(t) {
                return this.updateString(t), this.digest();
            }, this.digestHex = function(t) {
                return this.updateHex(t), this.digest();
            };
        }
    }, this.updateString = function(t) {
        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.updateHex = function(t) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.digest = function() {
        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.digestString = function(t) {
        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.digestHex = function(t) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, void 0 !== t && void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = pt.crypto.Util.DEFAULTPROVIDER[this.algName]), 
    this.setAlgAndProvider(this.algName, this.provName));
}, pt.crypto.MessageDigest.getCanonicalAlgName = function(t) {
    return "string" == typeof t && (t = (t = t.toLowerCase()).replace(/-/, "")), t;
}, pt.crypto.MessageDigest.getHashLength = function(t) {
    var e = pt.crypto.MessageDigest, i = e.getCanonicalAlgName(t);
    if (void 0 === e.HASHLENGTH[i]) throw "not supported algorithm: " + t;
    return e.HASHLENGTH[i];
}, pt.crypto.MessageDigest.HASHLENGTH = {
    md5: 16,
    sha1: 20,
    sha224: 28,
    sha256: 32,
    sha384: 48,
    sha512: 64,
    ripemd160: 20
}, pt.crypto.Mac = function(t) {
    this.setAlgAndProvider = function(t, e) {
        if (null == (t = t.toLowerCase()) && (t = "hmacsha1"), "hmac" != (t = t.toLowerCase()).substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + t;
        void 0 === e && (e = pt.crypto.Util.DEFAULTPROVIDER[t]), this.algProv = t + "/" + e;
        var i = t.substr(4);
        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(i) && "cryptojs" == e) {
            try {
                var n = pt.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[i];
                this.mac = vt.algo.HMAC.create(n, this.pass);
            } catch (t) {
                throw "setAlgAndProvider hash alg set fail hashAlg=" + i + "/" + t;
            }
            this.updateString = function(t) {
                this.mac.update(t);
            }, this.updateHex = function(t) {
                var e = vt.enc.Hex.parse(t);
                this.mac.update(e);
            }, this.doFinal = function() {
                return this.mac.finalize().toString(vt.enc.Hex);
            }, this.doFinalString = function(t) {
                return this.updateString(t), this.doFinal();
            }, this.doFinalHex = function(t) {
                return this.updateHex(t), this.doFinal();
            };
        }
    }, this.updateString = function(t) {
        throw "updateString(str) not supported for this alg/prov: " + this.algProv;
    }, this.updateHex = function(t) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
    }, this.doFinal = function() {
        throw "digest() not supported for this alg/prov: " + this.algProv;
    }, this.doFinalString = function(t) {
        throw "digestString(str) not supported for this alg/prov: " + this.algProv;
    }, this.doFinalHex = function(t) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
    }, this.setPassword = function(t) {
        if ("string" == typeof t) {
            i = t;
            return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (i = J(t)), void (this.pass = vt.enc.Hex.parse(i));
        }
        if ("object" != (void 0 === t ? "undefined" : ft(t))) throw "KJUR.crypto.Mac unsupported password type: " + t;
        var i = null;
        if (void 0 !== t.hex) {
            if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + t.hex;
            i = t.hex;
        }
        if (void 0 !== t.utf8 && (i = U(t.utf8)), void 0 !== t.rstr && (i = J(t.rstr)), 
        void 0 !== t.b64 && (i = e(t.b64)), void 0 !== t.b64u && (i = q(t.b64u)), null == i) throw "KJUR.crypto.Mac unsupported password type: " + t;
        this.pass = vt.enc.Hex.parse(i);
    }, void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass), void 0 !== t.alg && (this.algName = t.alg, 
    void 0 === t.prov && (this.provName = pt.crypto.Util.DEFAULTPROVIDER[this.algName]), 
    this.setAlgAndProvider(this.algName, this.provName)));
}, pt.crypto.Signature = function(t) {
    var e = null;
    if (this._setAlgNames = function() {
        var t = this.algName.match(/^(.+)with(.+)$/);
        t && (this.mdAlgName = t[1].toLowerCase(), this.pubkeyAlgName = t[2].toLowerCase());
    }, this._zeroPaddingOfSignature = function(t, e) {
        for (var i = "", n = e / 4 - t.length, r = 0; r < n; r++) i += "0";
        return i + t;
    }, this.setAlgAndProvider = function(t, e) {
        if (this._setAlgNames(), "cryptojs/jsrsa" != e) throw "provider not supported: " + e;
        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
            try {
                this.md = new pt.crypto.MessageDigest({
                    alg: this.mdAlgName
                });
            } catch (t) {
                throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t;
            }
            this.init = function(t, e) {
                var i = null;
                try {
                    i = void 0 === e ? _t.getKey(t) : _t.getKey(t, e);
                } catch (t) {
                    throw "init failed:" + t;
                }
                if (!0 === i.isPrivate) this.prvKey = i, this.state = "SIGN"; else {
                    if (!0 !== i.isPublic) throw "init failed.:" + i;
                    this.pubKey = i, this.state = "VERIFY";
                }
            }, this.initSign = function(t) {
                "string" == typeof t.ecprvhex && "string" == typeof t.eccurvename ? (this.ecprvhex = t.ecprvhex, 
                this.eccurvename = t.eccurvename) : this.prvKey = t, this.state = "SIGN";
            }, this.initVerifyByPublicKey = function(t) {
                "string" == typeof t.ecpubhex && "string" == typeof t.eccurvename ? (this.ecpubhex = t.ecpubhex, 
                this.eccurvename = t.eccurvename) : t instanceof pt.crypto.ECDSA ? this.pubKey = t : t instanceof D && (this.pubKey = t), 
                this.state = "VERIFY";
            }, this.initVerifyByCertificatePEM = function(t) {
                var e = new lt();
                e.readCertPEM(t), this.pubKey = e.subjectPublicKeyRSA, this.state = "VERIFY";
            }, this.updateString = function(t) {
                this.md.updateString(t);
            }, this.updateHex = function(t) {
                this.md.updateHex(t);
            }, this.sign = function() {
                if (this.sHashHex = this.md.digest(), void 0 !== this.ecprvhex && void 0 !== this.eccurvename) {
                    var t = new pt.crypto.ECDSA({
                        curve: this.eccurvename
                    });
                    this.hSign = t.signHex(this.sHashHex, this.ecprvhex);
                } else if (this.prvKey instanceof D && "rsaandmgf1" == this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen); else if (this.prvKey instanceof D && "rsa" == this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName); else if (this.prvKey instanceof pt.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex); else {
                    if (!(this.prvKey instanceof pt.crypto.DSA)) throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                }
                return this.hSign;
            }, this.signString = function(t) {
                return this.updateString(t), this.sign();
            }, this.signHex = function(t) {
                return this.updateHex(t), this.sign();
            }, this.verify = function(t) {
                if (this.sHashHex = this.md.digest(), void 0 !== this.ecpubhex && void 0 !== this.eccurvename) return new pt.crypto.ECDSA({
                    curve: this.eccurvename
                }).verifyHex(this.sHashHex, t, this.ecpubhex);
                if (this.pubKey instanceof D && "rsaandmgf1" == this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
                if (this.pubKey instanceof D && "rsa" == this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                if (this.pubKey instanceof pt.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                if (this.pubKey instanceof pt.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
            };
        }
    }, this.init = function(t, e) {
        throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
    }, this.initVerifyByPublicKey = function(t) {
        throw "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" + this.algProvName;
    }, this.initVerifyByCertificatePEM = function(t) {
        throw "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" + this.algProvName;
    }, this.initSign = function(t) {
        throw "initSign(prvKey) not supported for this alg:prov=" + this.algProvName;
    }, this.updateString = function(t) {
        throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
    }, this.updateHex = function(t) {
        throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
    }, this.sign = function() {
        throw "sign() not supported for this alg:prov=" + this.algProvName;
    }, this.signString = function(t) {
        throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
    }, this.signHex = function(t) {
        throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
    }, this.verify = function(t) {
        throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
    }, this.initParams = t, void 0 !== t && (void 0 !== t.alg && (this.algName = t.alg, 
    void 0 === t.prov ? this.provName = pt.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov, 
    this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), 
    this._setAlgNames()), void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen), 
    void 0 !== t.prvkeypem)) {
        if (void 0 !== t.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
        try {
            (e = new D()).readPrivateKeyFromPEMString(t.prvkeypem), this.initSign(e);
        } catch (t) {
            throw "fatal error to load pem private key: " + t;
        }
    }
}, pt.crypto.Cipher = function(t) {}, pt.crypto.Cipher.encrypt = function(t, e, i) {
    if (e instanceof D && e.isPublic) {
        var n = pt.crypto.Cipher.getAlgByKeyAndName(e, i);
        if ("RSA" === n) return e.encrypt(t);
        if ("RSAOAEP" === n) return e.encryptOAEP(t, "sha1");
        var r = n.match(/^RSAOAEP(\d+)$/);
        if (null !== r) return e.encryptOAEP(t, "sha" + r[1]);
        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + i;
    }
    throw "Cipher.encrypt: unsupported key or algorithm";
}, pt.crypto.Cipher.decrypt = function(t, e, i) {
    if (e instanceof D && e.isPrivate) {
        var n = pt.crypto.Cipher.getAlgByKeyAndName(e, i);
        if ("RSA" === n) return e.decrypt(t);
        if ("RSAOAEP" === n) return e.decryptOAEP(t, "sha1");
        var r = n.match(/^RSAOAEP(\d+)$/);
        if (null !== r) return e.decryptOAEP(t, "sha" + r[1]);
        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + i;
    }
    throw "Cipher.decrypt: unsupported key or algorithm";
}, pt.crypto.Cipher.getAlgByKeyAndName = function(t, e) {
    if (t instanceof D) {
        if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e)) return e;
        if (null === e || void 0 === e) return "RSA";
        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e;
    }
    throw "getAlgByKeyAndName: not supported algorithm name: " + e;
}, pt.crypto.OID = new function() {
    this.oidhex2name = {
        "2a864886f70d010101": "rsaEncryption",
        "2a8648ce3d0201": "ecPublicKey",
        "2a8648ce380401": "dsa",
        "2a8648ce3d030107": "secp256r1",
        "2b8104001f": "secp192k1",
        "2b81040021": "secp224r1",
        "2b8104000a": "secp256k1",
        "2b81040023": "secp521r1",
        "2b81040022": "secp384r1",
        "2a8648ce380403": "SHA1withDSA",
        "608648016503040301": "SHA224withDSA",
        "608648016503040302": "SHA256withDSA"
    };
}(), void 0 !== pt && pt || (pt = {}), void 0 !== pt.crypto && pt.crypto || (pt.crypto = {}), 
pt.crypto.ECDSA = function(t) {
    var e = new w();
    this.type = "EC", this.isPrivate = !1, this.isPublic = !1, this.getBigRandom = function(t) {
        return new i(t.bitLength(), e).mod(t.subtract(i.ONE)).add(i.ONE);
    }, this.setNamedCurve = function(t) {
        this.ecparams = pt.crypto.ECParameterDB.getByName(t), this.prvKeyHex = null, this.pubKeyHex = null, 
        this.curveName = t;
    }, this.setPrivateKeyHex = function(t) {
        this.isPrivate = !0, this.prvKeyHex = t;
    }, this.setPublicKeyHex = function(t) {
        this.isPublic = !0, this.pubKeyHex = t;
    }, this.getPublicKeyXYHex = function() {
        var t = this.pubKeyHex;
        if ("04" !== t.substr(0, 2)) throw "this method supports uncompressed format(04) only";
        var e = this.ecparams.keylen / 4;
        if (t.length !== 2 + 2 * e) throw "malformed public key hex length";
        var i = {};
        return i.x = t.substr(2, e), i.y = t.substr(2 + e), i;
    }, this.getShortNISTPCurveName = function() {
        var t = this.curveName;
        return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : null;
    }, this.generateKeyPairHex = function() {
        var t = this.ecparams.n, e = this.getBigRandom(t), i = this.ecparams.G.multiply(e), n = i.getX().toBigInteger(), r = i.getY().toBigInteger(), s = this.ecparams.keylen / 4, a = ("0000000000" + e.toString(16)).slice(-s), o = "04" + ("0000000000" + n.toString(16)).slice(-s) + ("0000000000" + r.toString(16)).slice(-s);
        return this.setPrivateKeyHex(a), this.setPublicKeyHex(o), {
            ecprvhex: a,
            ecpubhex: o
        };
    }, this.signWithMessageHash = function(t) {
        return this.signHex(t, this.prvKeyHex);
    }, this.signHex = function(t, e) {
        var n = new i(e, 16), r = this.ecparams.n, s = new i(t, 16);
        do {
            var a = this.getBigRandom(r), o = this.ecparams.G.multiply(a).getX().toBigInteger().mod(r);
        } while (o.compareTo(i.ZERO) <= 0);
        var h = a.modInverse(r).multiply(s.add(n.multiply(o))).mod(r);
        return pt.crypto.ECDSA.biRSSigToASN1Sig(o, h);
    }, this.sign = function(t, e) {
        var n = e, r = this.ecparams.n, s = i.fromByteArrayUnsigned(t);
        do {
            var a = this.getBigRandom(r), o = this.ecparams.G.multiply(a).getX().toBigInteger().mod(r);
        } while (o.compareTo(i.ZERO) <= 0);
        var h = a.modInverse(r).multiply(s.add(n.multiply(o))).mod(r);
        return this.serializeSig(o, h);
    }, this.verifyWithMessageHash = function(t, e) {
        return this.verifyHex(t, e, this.pubKeyHex);
    }, this.verifyHex = function(t, e, n) {
        var r, s, a = pt.crypto.ECDSA.parseSigHex(e);
        r = a.r, s = a.s;
        var o;
        o = B.decodeFromHex(this.ecparams.curve, n);
        var h = new i(t, 16);
        return this.verifyRaw(h, r, s, o);
    }, this.verify = function(t, e, n) {
        var r, s;
        if (Bitcoin.Util.isArray(e)) {
            var a = this.parseSig(e);
            r = a.r, s = a.s;
        } else {
            if ("object" !== (void 0 === e ? "undefined" : ft(e)) || !e.r || !e.s) throw "Invalid value for signature";
            r = e.r, s = e.s;
        }
        var o;
        if (n instanceof B) o = n; else {
            if (!Bitcoin.Util.isArray(n)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
            o = B.decodeFrom(this.ecparams.curve, n);
        }
        var h = i.fromByteArrayUnsigned(t);
        return this.verifyRaw(h, r, s, o);
    }, this.verifyRaw = function(t, e, n, r) {
        var s = this.ecparams.n, a = this.ecparams.G;
        if (e.compareTo(i.ONE) < 0 || e.compareTo(s) >= 0) return !1;
        if (n.compareTo(i.ONE) < 0 || n.compareTo(s) >= 0) return !1;
        var o = n.modInverse(s), h = t.multiply(o).mod(s), u = e.multiply(o).mod(s);
        return a.multiply(h).add(r.multiply(u)).getX().toBigInteger().mod(s).equals(e);
    }, this.serializeSig = function(t, e) {
        var i = t.toByteArraySigned(), n = e.toByteArraySigned(), r = [];
        return r.push(2), r.push(i.length), (r = r.concat(i)).push(2), r.push(n.length), 
        (r = r.concat(n)).unshift(r.length), r.unshift(48), r;
    }, this.parseSig = function(t) {
        var e;
        if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
        if (e = 2, 2 != t[e]) throw new Error("First element in signature must be a DERInteger");
        var n = t.slice(e + 2, e + 2 + t[e + 1]);
        if (e += 2 + t[e + 1], 2 != t[e]) throw new Error("Second element in signature must be a DERInteger");
        var r = t.slice(e + 2, e + 2 + t[e + 1]);
        return e += 2 + t[e + 1], {
            r: i.fromByteArrayUnsigned(n),
            s: i.fromByteArrayUnsigned(r)
        };
    }, this.parseSigCompact = function(t) {
        if (65 !== t.length) throw "Signature has the wrong length";
        var e = t[0] - 27;
        if (e < 0 || e > 7) throw "Invalid signature type";
        var n = this.ecparams.n;
        return {
            r: i.fromByteArrayUnsigned(t.slice(1, 33)).mod(n),
            s: i.fromByteArrayUnsigned(t.slice(33, 65)).mod(n),
            i: e
        };
    }, this.readPKCS5PrvKeyHex = function(t) {
        var e = Bt, i = pt.crypto.ECDSA.getName, n = e.getVbyList;
        if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
        var r, s, a;
        try {
            r = n(t, 0, [ 2, 0 ], "06"), s = n(t, 0, [ 1 ], "04");
            try {
                a = n(t, 0, [ 3, 0 ], "03").substr(2);
            } catch (t) {}
        } catch (t) {
            throw "malformed PKCS#1/5 plain ECC private key";
        }
        if (this.curveName = i(r), void 0 === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(a), this.setPrivateKeyHex(s), 
        this.isPublic = !1;
    }, this.readPKCS8PrvKeyHex = function(t) {
        var e = Bt, i = pt.crypto.ECDSA.getName, n = e.getVbyList;
        if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
        var r, s, a;
        try {
            n(t, 0, [ 1, 0 ], "06"), r = n(t, 0, [ 1, 1 ], "06"), s = n(t, 0, [ 2, 0, 1 ], "04");
            try {
                a = n(t, 0, [ 2, 0, 2, 0 ], "03").substr(2);
            } catch (t) {}
        } catch (t) {
            throw "malformed PKCS#8 plain ECC private key";
        }
        if (this.curveName = i(r), void 0 === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(a), this.setPrivateKeyHex(s), 
        this.isPublic = !1;
    }, this.readPKCS8PubKeyHex = function(t) {
        var e = Bt, i = pt.crypto.ECDSA.getName, n = e.getVbyList;
        if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
        var r, s;
        try {
            n(t, 0, [ 0, 0 ], "06"), r = n(t, 0, [ 0, 1 ], "06"), s = n(t, 0, [ 1 ], "03").substr(2);
        } catch (t) {
            throw "malformed PKCS#8 ECC public key";
        }
        if (this.curveName = i(r), null === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(s);
    }, this.readCertPubKeyHex = function(t, e) {
        5 !== e && (e = 6);
        var i = Bt, n = pt.crypto.ECDSA.getName, r = i.getVbyList;
        if (!1 === i.isASN1HEX(t)) throw "not ASN.1 hex string";
        var s, a;
        try {
            s = r(t, 0, [ 0, e, 0, 1 ], "06"), a = r(t, 0, [ 0, e, 1 ], "03").substr(2);
        } catch (t) {
            throw "malformed X.509 certificate ECC public key";
        }
        if (this.curveName = n(s), null === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(a);
    }, void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), 
    this.setNamedCurve(this.curveName), void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv), 
    void 0 !== t.pub && this.setPublicKeyHex(t.pub));
}, pt.crypto.ECDSA.parseSigHex = function(t) {
    var e = pt.crypto.ECDSA.parseSigHexInHexRS(t);
    return {
        r: new i(e.r, 16),
        s: new i(e.s, 16)
    };
}, pt.crypto.ECDSA.parseSigHexInHexRS = function(t) {
    if ("30" != t.substr(0, 2)) throw "signature is not a ASN.1 sequence";
    var e = Bt.getPosArrayOfChildren_AtObj(t, 0);
    if (2 != e.length) throw "number of signature ASN.1 sequence elements seem wrong";
    var i = e[0], n = e[1];
    if ("02" != t.substr(i, 2)) throw "1st item of sequene of signature is not ASN.1 integer";
    if ("02" != t.substr(n, 2)) throw "2nd item of sequene of signature is not ASN.1 integer";
    return {
        r: Bt.getHexOfV_AtObj(t, i),
        s: Bt.getHexOfV_AtObj(t, n)
    };
}, pt.crypto.ECDSA.asn1SigToConcatSig = function(t) {
    var e = pt.crypto.ECDSA.parseSigHexInHexRS(t), i = e.r, n = e.s;
    if ("00" == i.substr(0, 2) && i.length / 2 * 8 % 128 == 8 && (i = i.substr(2)), 
    "00" == n.substr(0, 2) && n.length / 2 * 8 % 128 == 8 && (n = n.substr(2)), i.length / 2 * 8 % 128 != 0) throw "unknown ECDSA sig r length error";
    if (n.length / 2 * 8 % 128 != 0) throw "unknown ECDSA sig s length error";
    return i + n;
}, pt.crypto.ECDSA.concatSigToASN1Sig = function(t) {
    if (t.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
    var e = t.substr(0, t.length / 2), i = t.substr(t.length / 2);
    return pt.crypto.ECDSA.hexRSSigToASN1Sig(e, i);
}, pt.crypto.ECDSA.hexRSSigToASN1Sig = function(t, e) {
    var n = new i(t, 16), r = new i(e, 16);
    return pt.crypto.ECDSA.biRSSigToASN1Sig(n, r);
}, pt.crypto.ECDSA.biRSSigToASN1Sig = function(t, e) {
    var i = new pt.asn1.DERInteger({
        bigint: t
    }), n = new pt.asn1.DERInteger({
        bigint: e
    });
    return new pt.asn1.DERSequence({
        array: [ i, n ]
    }).getEncodedHex();
}, pt.crypto.ECDSA.getName = function(t) {
    return "2a8648ce3d030107" === t ? "secp256r1" : "2b8104000a" === t ? "secp256k1" : "2b81040022" === t ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t) ? "secp256k1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t) ? "secp384r1" : null;
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.crypto && pt.crypto || (pt.crypto = {}), 
pt.crypto.ECParameterDB = new function() {
    function t(t) {
        return new i(t, 16);
    }
    var e = {}, n = {};
    this.getByName = function(t) {
        var i = t;
        if (void 0 !== n[i] && (i = n[t]), void 0 !== e[i]) return e[i];
        throw "unregistered EC curve name: " + i;
    }, this.regist = function(i, r, s, a, o, h, u, c, l, f, d, g) {
        e[i] = {};
        var p = t(s), y = t(a), v = t(o), S = t(h), m = t(u), A = new N(p, y, v), x = A.decodePointHex("04" + c + l);
        e[i].name = i, e[i].keylen = r, e[i].curve = A, e[i].G = x, e[i].n = S, e[i].h = m, 
        e[i].oid = d, e[i].info = g;
        for (var b = 0; b < f.length; b++) n[f[b]] = i;
    };
}(), pt.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), 
pt.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), 
pt.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), 
pt.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), 
pt.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), 
pt.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), 
pt.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), 
pt.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", [ "NIST P-256", "P-256", "prime256v1" ]), 
pt.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", [ "NIST P-384", "P-384" ]), 
pt.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", [ "NIST P-521", "P-521" ]), 
void 0 !== pt && pt || (pt = {}), void 0 !== pt.crypto && pt.crypto || (pt.crypto = {}), 
pt.crypto.DSA = function() {
    this.p = null, this.q = null, this.g = null, this.y = null, this.x = null, this.type = "DSA", 
    this.isPrivate = !1, this.isPublic = !1, this.setPrivate = function(t, e, i, n, r) {
        this.isPrivate = !0, this.p = t, this.q = e, this.g = i, this.y = n, this.x = r;
    }, this.setPrivateHex = function(t, e, n, r, s) {
        var a, o, h, u, c;
        a = new i(t, 16), o = new i(e, 16), h = new i(n, 16), u = "string" == typeof r && r.length > 1 ? new i(r, 16) : null, 
        c = new i(s, 16), this.setPrivate(a, o, h, u, c);
    }, this.setPublic = function(t, e, i, n) {
        this.isPublic = !0, this.p = t, this.q = e, this.g = i, this.y = n, this.x = null;
    }, this.setPublicHex = function(t, e, n, r) {
        var s, a, o, h;
        s = new i(t, 16), a = new i(e, 16), o = new i(n, 16), h = new i(r, 16), this.setPublic(s, a, o, h);
    }, this.signWithMessageHash = function(t) {
        var e = this.p, n = this.q, r = this.g, s = (this.y, this.x), a = pt.crypto.Util.getRandomBigIntegerMinToMax(i.ONE.add(i.ONE), n.subtract(i.ONE)), o = new i(t.substr(0, n.bitLength() / 4), 16), h = r.modPow(a, e).mod(n), u = a.modInverse(n).multiply(o.add(s.multiply(h))).mod(n);
        return pt.asn1.ASN1Util.jsonToASN1HEX({
            seq: [ {
                int: {
                    bigint: h
                }
            }, {
                int: {
                    bigint: u
                }
            } ]
        });
    }, this.verifyWithMessageHash = function(t, e) {
        var n = this.p, r = this.q, s = this.g, a = this.y, o = this.parseASN1Signature(e), h = o[0], u = o[1], c = new i(t.substr(0, r.bitLength() / 4), 16);
        if (i.ZERO.compareTo(h) > 0 || h.compareTo(r) > 0) throw "invalid DSA signature";
        if (i.ZERO.compareTo(u) > 0 || u.compareTo(r) > 0) throw "invalid DSA signature";
        var l = u.modInverse(r), f = c.multiply(l).mod(r), d = h.multiply(l).mod(r);
        return 0 == s.modPow(f, n).multiply(a.modPow(d, n)).mod(n).mod(r).compareTo(h);
    }, this.parseASN1Signature = function(t) {
        try {
            return [ new i(Bt.getVbyList(t, 0, [ 0 ], "02"), 16), new i(Bt.getVbyList(t, 0, [ 1 ], "02"), 16) ];
        } catch (t) {
            throw "malformed ASN.1 DSA signature";
        }
    }, this.readPKCS5PrvKeyHex = function(t) {
        var e, i, n, r, s, a = Bt, o = a.getVbyList;
        if (!1 === a.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            e = o(t, 0, [ 1 ], "02"), i = o(t, 0, [ 2 ], "02"), n = o(t, 0, [ 3 ], "02"), r = o(t, 0, [ 4 ], "02"), 
            s = o(t, 0, [ 5 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed PKCS#1/5 plain DSA private key";
        }
        this.setPrivateHex(e, i, n, r, s);
    }, this.readPKCS8PrvKeyHex = function(t) {
        var e, i, n, r, s = Bt, a = s.getVbyList;
        if (!1 === s.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            e = a(t, 0, [ 1, 1, 0 ], "02"), i = a(t, 0, [ 1, 1, 1 ], "02"), n = a(t, 0, [ 1, 1, 2 ], "02"), 
            r = a(t, 0, [ 2, 0 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed PKCS#8 plain DSA private key";
        }
        this.setPrivateHex(e, i, n, null, r);
    }, this.readPKCS8PubKeyHex = function(t) {
        var e, i, n, r, s = Bt, a = s.getVbyList;
        if (!1 === s.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            e = a(t, 0, [ 0, 1, 0 ], "02"), i = a(t, 0, [ 0, 1, 1 ], "02"), n = a(t, 0, [ 0, 1, 2 ], "02"), 
            r = a(t, 0, [ 1, 0 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed PKCS#8 DSA public key";
        }
        this.setPublicHex(e, i, n, r);
    }, this.readCertPubKeyHex = function(t, e) {
        5 !== e && (e = 6);
        var i, n, r, s, a = Bt, o = a.getVbyList;
        if (!1 === a.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            i = o(t, 0, [ 0, e, 0, 1, 0 ], "02"), n = o(t, 0, [ 0, e, 0, 1, 1 ], "02"), r = o(t, 0, [ 0, e, 0, 1, 2 ], "02"), 
            s = o(t, 0, [ 0, e, 1, 0 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed X.509 certificate DSA public key";
        }
        this.setPublicHex(i, n, r, s);
    };
};

var Kt = function() {
    var t = function(t, i, n) {
        return e(vt.AES, t, i, n);
    }, e = function(t, e, i, n) {
        var r = vt.enc.Hex.parse(e), s = vt.enc.Hex.parse(i), a = vt.enc.Hex.parse(n), o = {};
        o.key = s, o.iv = a, o.ciphertext = r;
        var h = t.decrypt(o, s, {
            iv: a
        });
        return vt.enc.Hex.stringify(h);
    }, i = function(t, e, i) {
        return n(vt.AES, t, e, i);
    }, n = function(t, e, i, n) {
        var r = vt.enc.Hex.parse(e), s = vt.enc.Hex.parse(i), a = vt.enc.Hex.parse(n), o = t.encrypt(r, s, {
            iv: a
        }), h = vt.enc.Hex.parse(o.toString());
        return vt.enc.Base64.stringify(h);
    }, r = {
        "AES-256-CBC": {
            proc: t,
            eproc: i,
            keylen: 32,
            ivlen: 16
        },
        "AES-192-CBC": {
            proc: t,
            eproc: i,
            keylen: 24,
            ivlen: 16
        },
        "AES-128-CBC": {
            proc: t,
            eproc: i,
            keylen: 16,
            ivlen: 16
        },
        "DES-EDE3-CBC": {
            proc: function(t, i, n) {
                return e(vt.TripleDES, t, i, n);
            },
            eproc: function(t, e, i) {
                return n(vt.TripleDES, t, e, i);
            },
            keylen: 24,
            ivlen: 8
        }
    }, s = function(t) {
        return r[t].proc;
    }, a = function(t) {
        var e = vt.lib.WordArray.random(t);
        return vt.enc.Hex.stringify(e);
    }, o = function(t) {
        var e = {}, i = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
        i && (e.cipher = i[1], e.ivsalt = i[2]);
        var n = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
        n && (e.type = n[1]);
        var r = -1, s = 0;
        -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"), s = 2), -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"), 
        s = 1);
        var a = t.indexOf("-----END");
        if (-1 != r && -1 != a) {
            var o = t.substring(r + 2 * s, a - s);
            o = o.replace(/\s+/g, ""), e.data = o;
        }
        return e;
    }, u = function(t, e, i) {
        for (var n = i.substring(0, 16), s = vt.enc.Hex.parse(n), a = vt.enc.Utf8.parse(e), o = r[t].keylen + r[t].ivlen, h = "", u = null; ;) {
            var c = vt.algo.MD5.create();
            if (null != u && c.update(u), c.update(a), c.update(s), u = c.finalize(), (h += vt.enc.Hex.stringify(u)).length >= 2 * o) break;
        }
        var l = {};
        return l.keyhex = h.substr(0, 2 * r[t].keylen), l.ivhex = h.substr(2 * r[t].keylen, 2 * r[t].ivlen), 
        l;
    }, c = function(t, e, i, n) {
        var s = vt.enc.Base64.parse(t), a = vt.enc.Hex.stringify(s);
        return (0, r[e].proc)(a, i, n);
    }, l = function(t, e, i, n) {
        return (0, r[e].eproc)(t, i, n);
    };
    return {
        version: "1.0.5",
        getHexFromPEM: function(t, e) {
            return Bt.pemToHex(t, e);
        },
        getDecryptedKeyHexByKeyIV: function(t, e, i, n) {
            return s(e)(t, i, n);
        },
        parsePKCS5PEM: function(t) {
            return o(t);
        },
        getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, i) {
            return u(t, e, i);
        },
        decryptKeyB64: function(t, e, i, n) {
            return c(t, e, i, n);
        },
        getDecryptedKeyHex: function(t, e) {
            var i = o(t), n = (i.type, i.cipher), r = i.ivsalt, s = i.data, a = u(n, e, r).keyhex;
            return c(s, n, a, r);
        },
        getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
            var i = this.getDecryptedKeyHex(t, e), n = new D();
            return n.readPrivateKeyFromASN1HexString(i), n;
        },
        getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, i, n) {
            if (void 0 !== i && null != i || (i = "AES-256-CBC"), void 0 === r[i]) throw "PKCS5PKEY unsupported algorithm: " + i;
            if (void 0 === n || null == n) {
                var s = r[i].ivlen;
                n = a(s).toUpperCase();
            }
            var o = u(i, e, n).keyhex, h = "-----BEGIN RSA PRIVATE KEY-----\r\n";
            return h += "Proc-Type: 4,ENCRYPTED\r\n", h += "DEK-Info: " + i + "," + n + "\r\n", 
            h += "\r\n", h += l(t, i, o, n).replace(/(.{64})/g, "$1\r\n"), h += "\r\n-----END RSA PRIVATE KEY-----\r\n";
        },
        getEncryptedPKCS5PEMFromRSAKey: function(t, e, i, n) {
            var r = new pt.asn1.DERInteger({
                int: 0
            }), s = new pt.asn1.DERInteger({
                bigint: t.n
            }), a = new pt.asn1.DERInteger({
                int: t.e
            }), o = new pt.asn1.DERInteger({
                bigint: t.d
            }), h = new pt.asn1.DERInteger({
                bigint: t.p
            }), u = new pt.asn1.DERInteger({
                bigint: t.q
            }), c = new pt.asn1.DERInteger({
                bigint: t.dmp1
            }), l = new pt.asn1.DERInteger({
                bigint: t.dmq1
            }), f = new pt.asn1.DERInteger({
                bigint: t.coeff
            }), d = new pt.asn1.DERSequence({
                array: [ r, s, a, o, h, u, c, l, f ]
            }).getEncodedHex();
            return this.getEncryptedPKCS5PEMFromPrvKeyHex(d, e, i, n);
        },
        newEncryptedPKCS5PEM: function(t, e, i, n) {
            void 0 !== e && null != e || (e = 1024), void 0 !== i && null != i || (i = "10001"), 
            new D().generate(e, i);
            return void 0 === n || null == n ? this.getEncryptedPKCS5PEMFromRSAKey(pkey, t) : this.getEncryptedPKCS5PEMFromRSAKey(pkey, t, n);
        },
        getRSAKeyFromPlainPKCS8PEM: function(t) {
            if (t.match(/ENCRYPTED/)) throw "pem shall be not ENCRYPTED";
            var e = Bt.pemToHex(t, "PRIVATE KEY");
            return this.getRSAKeyFromPlainPKCS8Hex(e);
        },
        getRSAKeyFromPlainPKCS8Hex: function(t) {
            var e = new D();
            return e.readPKCS8PrvKeyHex(t), e;
        },
        parseHexOfEncryptedPKCS8: function(t) {
            var e = {}, i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed format: SEQUENCE(0).items != 2: " + i.length;
            e.ciphertext = Bt.getHexOfV_AtObj(t, i[1]);
            var n = Bt.getPosArrayOfChildren_AtObj(t, i[0]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + n.length;
            if ("2a864886f70d01050d" != Bt.getHexOfV_AtObj(t, n[0])) throw "this only supports pkcs5PBES2";
            var r = Bt.getPosArrayOfChildren_AtObj(t, n[1]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + r.length;
            var s = Bt.getPosArrayOfChildren_AtObj(t, r[1]);
            if (2 != s.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
            if ("2a864886f70d0307" != Bt.getHexOfV_AtObj(t, s[0])) throw "this only supports TripleDES";
            e.encryptionSchemeAlg = "TripleDES", e.encryptionSchemeIV = Bt.getHexOfV_AtObj(t, s[1]);
            var a = Bt.getPosArrayOfChildren_AtObj(t, r[0]);
            if (2 != a.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + a.length;
            if ("2a864886f70d01050c" != Bt.getHexOfV_AtObj(t, a[0])) throw "this only supports pkcs5PBKDF2";
            var o = Bt.getPosArrayOfChildren_AtObj(t, a[1]);
            if (o.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + o.length;
            e.pbkdf2Salt = Bt.getHexOfV_AtObj(t, o[0]);
            var h = Bt.getHexOfV_AtObj(t, o[1]);
            try {
                e.pbkdf2Iter = parseInt(h, 16);
            } catch (t) {
                throw "malformed format pbkdf2Iter: " + h;
            }
            return e;
        },
        getPBKDF2KeyHexFromParam: function(t, e) {
            var i = vt.enc.Hex.parse(t.pbkdf2Salt), n = t.pbkdf2Iter, r = vt.PBKDF2(e, i, {
                keySize: 6,
                iterations: n
            });
            return vt.enc.Hex.stringify(r);
        },
        getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
            var i = Bt.pemToHex(t, "ENCRYPTED PRIVATE KEY"), n = this.parseHexOfEncryptedPKCS8(i), r = Kt.getPBKDF2KeyHexFromParam(n, e), s = {};
            s.ciphertext = vt.enc.Hex.parse(n.ciphertext);
            var a = vt.enc.Hex.parse(r), o = vt.enc.Hex.parse(n.encryptionSchemeIV), h = vt.TripleDES.decrypt(s, a, {
                iv: o
            });
            return vt.enc.Hex.stringify(h);
        },
        getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getRSAKeyFromPlainPKCS8Hex(i);
        },
        getKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getKeyFromPlainPrivatePKCS8Hex(i);
        },
        parsePlainPrivatePKCS8Hex: function(t) {
            var e = {};
            if (e.algparam = null, "30" != t.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
            var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (3 != i.length) throw "malformed plain PKCS8 private key(code:002)";
            if ("30" != t.substr(i[1], 2)) throw "malformed PKCS8 private key(code:003)";
            var n = Bt.getPosArrayOfChildren_AtObj(t, i[1]);
            if (2 != n.length) throw "malformed PKCS8 private key(code:004)";
            if ("06" != t.substr(n[0], 2)) throw "malformed PKCS8 private key(code:005)";
            if (e.algoid = Bt.getHexOfV_AtObj(t, n[0]), "06" == t.substr(n[1], 2) && (e.algparam = Bt.getHexOfV_AtObj(t, n[1])), 
            "04" != t.substr(i[2], 2)) throw "malformed PKCS8 private key(code:006)";
            return e.keyidx = Bt.getStartPosOfV_AtObj(t, i[2]), e;
        },
        getKeyFromPlainPrivatePKCS8PEM: function(t) {
            var e = Bt.pemToHex(t, "PRIVATE KEY");
            return this.getKeyFromPlainPrivatePKCS8Hex(e);
        },
        getKeyFromPlainPrivatePKCS8Hex: function(t) {
            var e, i = this.parsePlainPrivatePKCS8Hex(t);
            if ("2a864886f70d010101" == i.algoid) e = new D(); else if ("2a8648ce380401" == i.algoid) e = new pt.crypto.DSA(); else {
                if ("2a8648ce3d0201" != i.algoid) throw "unsupported private key algorithm";
                e = new pt.crypto.ECDSA();
            }
            return e.readPKCS8PrvKeyHex(t), e;
        },
        getRSAKeyFromPublicPKCS8PEM: function(t) {
            var e = Bt.pemToHex(t, "PUBLIC KEY");
            return this.getRSAKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8PEM: function(t) {
            var e = Bt.pemToHex(t, "PUBLIC KEY");
            return this.getKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8Hex: function(t) {
            var e, i = Bt.getVbyList(h, 0, [ 0, 0 ], "06");
            if ("2a864886f70d010101" === i) e = new D(); else if ("2a8648ce380401" === i) e = new pt.crypto.DSA(); else {
                if ("2a8648ce3d0201" !== i) throw "unsupported PKCS#8 public key hex";
                e = new pt.crypto.ECDSA();
            }
            return e.readPKCS8PubKeyHex(h), e;
        },
        parsePublicRawRSAKeyHex: function(t) {
            var e = {};
            if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
            var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed RSA key(code:002)";
            if ("02" != t.substr(i[0], 2)) throw "malformed RSA key(code:003)";
            if (e.n = Bt.getHexOfV_AtObj(t, i[0]), "02" != t.substr(i[1], 2)) throw "malformed RSA key(code:004)";
            return e.e = Bt.getHexOfV_AtObj(t, i[1]), e;
        },
        parsePrivateRawRSAKeyHexAtObj: function(t, e) {
            var i = e.keyidx;
            if ("30" != t.substr(i, 2)) throw "malformed RSA private key(code:001)";
            var n = Bt.getPosArrayOfChildren_AtObj(t, i);
            if (9 != n.length) throw "malformed RSA private key(code:002)";
            e.key = {}, e.key.n = Bt.getHexOfV_AtObj(t, n[1]), e.key.e = Bt.getHexOfV_AtObj(t, n[2]), 
            e.key.d = Bt.getHexOfV_AtObj(t, n[3]), e.key.p = Bt.getHexOfV_AtObj(t, n[4]), e.key.q = Bt.getHexOfV_AtObj(t, n[5]), 
            e.key.dp = Bt.getHexOfV_AtObj(t, n[6]), e.key.dq = Bt.getHexOfV_AtObj(t, n[7]), 
            e.key.co = Bt.getHexOfV_AtObj(t, n[8]);
        },
        parsePrivateRawECKeyHexAtObj: function(t, e) {
            var i = e.keyidx;
            if ("30" != t.substr(i, 2)) throw "malformed ECC private key(code:001)";
            var n = Bt.getPosArrayOfChildren_AtObj(t, i);
            if (3 != n.length) throw "malformed ECC private key(code:002)";
            if ("04" != t.substr(n[1], 2)) throw "malformed ECC private key(code:003)";
            e.key = Bt.getHexOfV_AtObj(t, n[1]);
        },
        parsePublicPKCS8Hex: function(t) {
            var e = {};
            e.algparam = null;
            var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "outer DERSequence shall have 2 elements: " + i.length;
            var n = i[0];
            if ("30" != t.substr(n, 2)) throw "malformed PKCS8 public key(code:001)";
            var r = Bt.getPosArrayOfChildren_AtObj(t, n);
            if (2 != r.length) throw "malformed PKCS8 public key(code:002)";
            if ("06" != t.substr(r[0], 2)) throw "malformed PKCS8 public key(code:003)";
            if (e.algoid = Bt.getHexOfV_AtObj(t, r[0]), "06" == t.substr(r[1], 2) && (e.algparam = Bt.getHexOfV_AtObj(t, r[1])), 
            "03" != t.substr(i[1], 2)) throw "malformed PKCS8 public key(code:004)";
            return e.key = Bt.getHexOfV_AtObj(t, i[1]).substr(2), e;
        },
        getRSAKeyFromPublicPKCS8Hex: function(t) {
            var e = new D();
            return e.readPKCS8PubKeyHex(t), e;
        }
    };
}(), _t = function() {
    var t = function(t, i, n) {
        return e(vt.AES, t, i, n);
    }, e = function(t, e, i, n) {
        var r = vt.enc.Hex.parse(e), s = vt.enc.Hex.parse(i), a = vt.enc.Hex.parse(n), o = {};
        o.key = s, o.iv = a, o.ciphertext = r;
        var h = t.decrypt(o, s, {
            iv: a
        });
        return vt.enc.Hex.stringify(h);
    }, i = function(t, e, i) {
        return n(vt.AES, t, e, i);
    }, n = function(t, e, i, n) {
        var r = vt.enc.Hex.parse(e), s = vt.enc.Hex.parse(i), a = vt.enc.Hex.parse(n), o = t.encrypt(r, s, {
            iv: a
        }), h = vt.enc.Hex.parse(o.toString());
        return vt.enc.Base64.stringify(h);
    }, r = {
        "AES-256-CBC": {
            proc: t,
            eproc: i,
            keylen: 32,
            ivlen: 16
        },
        "AES-192-CBC": {
            proc: t,
            eproc: i,
            keylen: 24,
            ivlen: 16
        },
        "AES-128-CBC": {
            proc: t,
            eproc: i,
            keylen: 16,
            ivlen: 16
        },
        "DES-EDE3-CBC": {
            proc: function(t, i, n) {
                return e(vt.TripleDES, t, i, n);
            },
            eproc: function(t, e, i) {
                return n(vt.TripleDES, t, e, i);
            },
            keylen: 24,
            ivlen: 8
        },
        "DES-CBC": {
            proc: function(t, i, n) {
                return e(vt.DES, t, i, n);
            },
            eproc: function(t, e, i) {
                return n(vt.DES, t, e, i);
            },
            keylen: 8,
            ivlen: 8
        }
    }, s = function(t) {
        return r[t].proc;
    }, a = function(t) {
        var e = vt.lib.WordArray.random(t);
        return vt.enc.Hex.stringify(e);
    }, o = function(t) {
        var e = {}, i = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
        i && (e.cipher = i[1], e.ivsalt = i[2]);
        var n = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
        n && (e.type = n[1]);
        var r = -1, s = 0;
        -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"), s = 2), -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"), 
        s = 1);
        var a = t.indexOf("-----END");
        if (-1 != r && -1 != a) {
            var o = t.substring(r + 2 * s, a - s);
            o = o.replace(/\s+/g, ""), e.data = o;
        }
        return e;
    }, h = function(t, e, i) {
        for (var n = i.substring(0, 16), s = vt.enc.Hex.parse(n), a = vt.enc.Utf8.parse(e), o = r[t].keylen + r[t].ivlen, h = "", u = null; ;) {
            var c = vt.algo.MD5.create();
            if (null != u && c.update(u), c.update(a), c.update(s), u = c.finalize(), (h += vt.enc.Hex.stringify(u)).length >= 2 * o) break;
        }
        var l = {};
        return l.keyhex = h.substr(0, 2 * r[t].keylen), l.ivhex = h.substr(2 * r[t].keylen, 2 * r[t].ivlen), 
        l;
    }, u = function(t, e, i, n) {
        var s = vt.enc.Base64.parse(t), a = vt.enc.Hex.stringify(s);
        return (0, r[e].proc)(a, i, n);
    }, c = function(t, e, i, n) {
        return (0, r[e].eproc)(t, i, n);
    };
    return {
        version: "1.0.0",
        getHexFromPEM: function(t, e) {
            return Bt.pemToHex(t, e);
        },
        getDecryptedKeyHexByKeyIV: function(t, e, i, n) {
            return s(e)(t, i, n);
        },
        parsePKCS5PEM: function(t) {
            return o(t);
        },
        getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, i) {
            return h(t, e, i);
        },
        decryptKeyB64: function(t, e, i, n) {
            return u(t, e, i, n);
        },
        getDecryptedKeyHex: function(t, e) {
            var i = o(t), n = (i.type, i.cipher), r = i.ivsalt, s = i.data, a = h(n, e, r).keyhex;
            return u(s, n, a, r);
        },
        getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
            var i = this.getDecryptedKeyHex(t, e), n = new D();
            return n.readPrivateKeyFromASN1HexString(i), n;
        },
        getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, i, n, s) {
            l = "";
            if (void 0 !== n && null != n || (n = "AES-256-CBC"), void 0 === r[n]) throw "KEYUTIL unsupported algorithm: " + n;
            if (void 0 === s || null == s) {
                var o = r[n].ivlen;
                s = a(o).toUpperCase();
            }
            var u = h(n, i, s).keyhex, l = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
            return l += "Proc-Type: 4,ENCRYPTED\r\n", l += "DEK-Info: " + n + "," + s + "\r\n", 
            l += "\r\n", l += c(e, n, u, s).replace(/(.{64})/g, "$1\r\n"), l += "\r\n-----END " + t + " PRIVATE KEY-----\r\n";
        },
        getEncryptedPKCS5PEMFromRSAKey: function(t, e, i, n) {
            var r = new pt.asn1.DERInteger({
                int: 0
            }), s = new pt.asn1.DERInteger({
                bigint: t.n
            }), a = new pt.asn1.DERInteger({
                int: t.e
            }), o = new pt.asn1.DERInteger({
                bigint: t.d
            }), h = new pt.asn1.DERInteger({
                bigint: t.p
            }), u = new pt.asn1.DERInteger({
                bigint: t.q
            }), c = new pt.asn1.DERInteger({
                bigint: t.dmp1
            }), l = new pt.asn1.DERInteger({
                bigint: t.dmq1
            }), f = new pt.asn1.DERInteger({
                bigint: t.coeff
            }), d = new pt.asn1.DERSequence({
                array: [ r, s, a, o, h, u, c, l, f ]
            }).getEncodedHex();
            return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", d, e, i, n);
        },
        newEncryptedPKCS5PEM: function(t, e, i, n) {
            void 0 !== e && null != e || (e = 1024), void 0 !== i && null != i || (i = "10001");
            var r = new D();
            r.generate(e, i);
            return void 0 === n || null == n ? this.getEncryptedPKCS5PEMFromRSAKey(r, t) : this.getEncryptedPKCS5PEMFromRSAKey(r, t, n);
        },
        getRSAKeyFromPlainPKCS8PEM: function(t) {
            if (t.match(/ENCRYPTED/)) throw "pem shall be not ENCRYPTED";
            var e = Bt.pemToHex(t, "PRIVATE KEY");
            return this.getRSAKeyFromPlainPKCS8Hex(e);
        },
        getRSAKeyFromPlainPKCS8Hex: function(t) {
            var e = new D();
            return e.readPKCS8PrvKeyHex(t), e;
        },
        parseHexOfEncryptedPKCS8: function(t) {
            var e = {}, i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed format: SEQUENCE(0).items != 2: " + i.length;
            e.ciphertext = Bt.getHexOfV_AtObj(t, i[1]);
            var n = Bt.getPosArrayOfChildren_AtObj(t, i[0]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + n.length;
            if ("2a864886f70d01050d" != Bt.getHexOfV_AtObj(t, n[0])) throw "this only supports pkcs5PBES2";
            var r = Bt.getPosArrayOfChildren_AtObj(t, n[1]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + r.length;
            var s = Bt.getPosArrayOfChildren_AtObj(t, r[1]);
            if (2 != s.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
            if ("2a864886f70d0307" != Bt.getHexOfV_AtObj(t, s[0])) throw "this only supports TripleDES";
            e.encryptionSchemeAlg = "TripleDES", e.encryptionSchemeIV = Bt.getHexOfV_AtObj(t, s[1]);
            var a = Bt.getPosArrayOfChildren_AtObj(t, r[0]);
            if (2 != a.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + a.length;
            if ("2a864886f70d01050c" != Bt.getHexOfV_AtObj(t, a[0])) throw "this only supports pkcs5PBKDF2";
            var o = Bt.getPosArrayOfChildren_AtObj(t, a[1]);
            if (o.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + o.length;
            e.pbkdf2Salt = Bt.getHexOfV_AtObj(t, o[0]);
            var h = Bt.getHexOfV_AtObj(t, o[1]);
            try {
                e.pbkdf2Iter = parseInt(h, 16);
            } catch (t) {
                throw "malformed format pbkdf2Iter: " + h;
            }
            return e;
        },
        getPBKDF2KeyHexFromParam: function(t, e) {
            var i = vt.enc.Hex.parse(t.pbkdf2Salt), n = t.pbkdf2Iter, r = vt.PBKDF2(e, i, {
                keySize: 6,
                iterations: n
            });
            return vt.enc.Hex.stringify(r);
        },
        getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
            var i = Bt.pemToHex(t, "ENCRYPTED PRIVATE KEY"), n = this.parseHexOfEncryptedPKCS8(i), r = _t.getPBKDF2KeyHexFromParam(n, e), s = {};
            s.ciphertext = vt.enc.Hex.parse(n.ciphertext);
            var a = vt.enc.Hex.parse(r), o = vt.enc.Hex.parse(n.encryptionSchemeIV), h = vt.TripleDES.decrypt(s, a, {
                iv: o
            });
            return vt.enc.Hex.stringify(h);
        },
        getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getRSAKeyFromPlainPKCS8Hex(i);
        },
        getKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getKeyFromPlainPrivatePKCS8Hex(i);
        },
        parsePlainPrivatePKCS8Hex: function(t) {
            var e = {};
            if (e.algparam = null, "30" != t.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
            var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (3 != i.length) throw "malformed plain PKCS8 private key(code:002)";
            if ("30" != t.substr(i[1], 2)) throw "malformed PKCS8 private key(code:003)";
            var n = Bt.getPosArrayOfChildren_AtObj(t, i[1]);
            if (2 != n.length) throw "malformed PKCS8 private key(code:004)";
            if ("06" != t.substr(n[0], 2)) throw "malformed PKCS8 private key(code:005)";
            if (e.algoid = Bt.getHexOfV_AtObj(t, n[0]), "06" == t.substr(n[1], 2) && (e.algparam = Bt.getHexOfV_AtObj(t, n[1])), 
            "04" != t.substr(i[2], 2)) throw "malformed PKCS8 private key(code:006)";
            return e.keyidx = Bt.getStartPosOfV_AtObj(t, i[2]), e;
        },
        getKeyFromPlainPrivatePKCS8PEM: function(t) {
            var e = Bt.pemToHex(t, "PRIVATE KEY");
            return this.getKeyFromPlainPrivatePKCS8Hex(e);
        },
        getKeyFromPlainPrivatePKCS8Hex: function(t) {
            var e, i = this.parsePlainPrivatePKCS8Hex(t);
            if ("2a864886f70d010101" == i.algoid) e = new D(); else if ("2a8648ce380401" == i.algoid) e = new pt.crypto.DSA(); else {
                if ("2a8648ce3d0201" != i.algoid) throw "unsupported private key algorithm";
                e = new pt.crypto.ECDSA();
            }
            return e.readPKCS8PrvKeyHex(t), e;
        },
        getRSAKeyFromPublicPKCS8PEM: function(t) {
            var e = Bt.pemToHex(t, "PUBLIC KEY");
            return this.getRSAKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8PEM: function(t) {
            var e = Bt.pemToHex(t, "PUBLIC KEY");
            return this.getKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8Hex: function(t) {
            var e, i = Bt.getVbyList(t, 0, [ 0, 0 ], "06");
            if ("2a864886f70d010101" === i) e = new D(); else if ("2a8648ce380401" === i) e = new pt.crypto.DSA(); else {
                if ("2a8648ce3d0201" !== i) throw "unsupported PKCS#8 public key hex";
                e = new pt.crypto.ECDSA();
            }
            return e.readPKCS8PubKeyHex(t), e;
        },
        parsePublicRawRSAKeyHex: function(t) {
            var e = {};
            if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
            var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed RSA key(code:002)";
            if ("02" != t.substr(i[0], 2)) throw "malformed RSA key(code:003)";
            if (e.n = Bt.getHexOfV_AtObj(t, i[0]), "02" != t.substr(i[1], 2)) throw "malformed RSA key(code:004)";
            return e.e = Bt.getHexOfV_AtObj(t, i[1]), e;
        },
        parsePrivateRawRSAKeyHexAtObj: function(t, e) {
            var i = Bt, n = i.getHexOfV_AtObj, r = i.getDecendantIndexByNthList(t, 0, [ 2, 0 ]), s = i.getPosArrayOfChildren_AtObj(t, r);
            if (9 !== s.length) throw "malformed PKCS#8 plain RSA private key";
            e.key = {}, e.key.n = n(t, s[1]), e.key.e = n(t, s[2]), e.key.d = n(t, s[3]), e.key.p = n(t, s[4]), 
            e.key.q = n(t, s[5]), e.key.dp = n(t, s[6]), e.key.dq = n(t, s[7]), e.key.co = n(t, s[8]);
        },
        parsePrivateRawECKeyHexAtObj: function(t, e) {
            e.keyidx;
            var i = new pt.crypto.ECDSA();
            i.readPKCS8PrvKeyHex(t), e.key = i.prvKeyHex, e.pubkey = i.pubKeyHex;
        },
        parsePublicPKCS8Hex: function(t) {
            var e = {};
            e.algparam = null;
            var i = Bt.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "outer DERSequence shall have 2 elements: " + i.length;
            var n = i[0];
            if ("30" != t.substr(n, 2)) throw "malformed PKCS8 public key(code:001)";
            var r = Bt.getPosArrayOfChildren_AtObj(t, n);
            if (2 != r.length) throw "malformed PKCS8 public key(code:002)";
            if ("06" != t.substr(r[0], 2)) throw "malformed PKCS8 public key(code:003)";
            if (e.algoid = Bt.getHexOfV_AtObj(t, r[0]), "06" == t.substr(r[1], 2) ? e.algparam = Bt.getHexOfV_AtObj(t, r[1]) : "30" == t.substr(r[1], 2) && (e.algparam = {}, 
            e.algparam.p = Bt.getVbyList(t, r[1], [ 0 ], "02"), e.algparam.q = Bt.getVbyList(t, r[1], [ 1 ], "02"), 
            e.algparam.g = Bt.getVbyList(t, r[1], [ 2 ], "02")), "03" != t.substr(i[1], 2)) throw "malformed PKCS8 public key(code:004)";
            return e.key = Bt.getHexOfV_AtObj(t, i[1]).substr(2), e;
        },
        getRSAKeyFromPublicPKCS8Hex: function(t) {
            var e = new D();
            return e.readPKCS8PubKeyHex(t), e;
        }
    };
}();

_t.getKey = function(t, e, n) {
    if (void 0 !== D && t instanceof D) return t;
    if (void 0 !== pt.crypto.ECDSA && t instanceof pt.crypto.ECDSA) return t;
    if (void 0 !== pt.crypto.DSA && t instanceof pt.crypto.DSA) return t;
    if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d) return new pt.crypto.ECDSA({
        pub: t.xy,
        curve: t.curve
    });
    if (void 0 !== t.curve && void 0 !== t.d) return new pt.crypto.ECDSA({
        prv: t.d,
        curve: t.curve
    });
    if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) return (S = new D()).setPublic(t.n, t.e), 
    S;
    if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi) return (S = new D()).setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co), 
    S;
    if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p) return (S = new D()).setPrivate(t.n, t.e, t.d), 
    S;
    if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x) return (S = new pt.crypto.DSA()).setPublic(t.p, t.q, t.g, t.y), 
    S;
    if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x) return (S = new pt.crypto.DSA()).setPrivate(t.p, t.q, t.g, t.y, t.x), 
    S;
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) return (S = new D()).setPublic(q(t.n), q(t.e)), 
    S;
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi) return (S = new D()).setPrivateEx(q(t.n), q(t.e), q(t.d), q(t.p), q(t.q), q(t.dp), q(t.dq), q(t.qi)), 
    S;
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) return (S = new D()).setPrivate(q(t.n), q(t.e), q(t.d)), 
    S;
    if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
        var r = (b = new pt.crypto.ECDSA({
            curve: t.crv
        })).ecparams.keylen / 4, s = "04" + (a = ("0000000000" + q(t.x)).slice(-r)) + (o = ("0000000000" + q(t.y)).slice(-r));
        return b.setPublicKeyHex(s), b;
    }
    if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
        var r = (b = new pt.crypto.ECDSA({
            curve: t.crv
        })).ecparams.keylen / 4, a = ("0000000000" + q(t.x)).slice(-r), o = ("0000000000" + q(t.y)).slice(-r), s = "04" + a + o, h = ("0000000000" + q(t.d)).slice(-r);
        return b.setPublicKeyHex(s), b.setPrivateKeyHex(h), b;
    }
    if ("pkcs5prv" === n) {
        var u, c = t;
        if (9 === (u = Bt.getPosArrayOfChildren_AtObj(c, 0)).length) (S = new D()).readPrivateKeyFromASN1HexString(t); else if (6 === u.length) (S = new pt.crypto.DSA()).readPKCS5PrvKeyHex(c); else {
            if (!(u.length > 2 && "04" === c.substr(u[1], 2))) throw "unsupported PKCS#1/5 hexadecimal key";
            (S = new pt.crypto.ECDSA()).readPKCS5PrvKeyHex(c);
        }
        return S;
    }
    if ("pkcs8prv" === n) return S = _t.getKeyFromPlainPrivatePKCS8Hex(t);
    if ("pkcs8pub" === n) return _t.getKeyFromPublicPKCS8Hex(t);
    if ("x509pub" === n) return lt.getPublicKeyFromCertHex(t);
    if (-1 != t.indexOf("-END CERTIFICATE-", 0) || -1 != t.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0)) return lt.getPublicKeyFromCertPEM(t);
    if (-1 != t.indexOf("-END PUBLIC KEY-")) return _t.getKeyFromPublicPKCS8PEM(t);
    if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
        var l = Bt.pemToHex(t, "RSA PRIVATE KEY");
        return _t.getKey(l, null, "pkcs5prv");
    }
    if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
        var f = Bt.pemToHex(t, "DSA PRIVATE KEY"), d = Bt.getVbyList(f, 0, [ 1 ], "02"), g = Bt.getVbyList(f, 0, [ 2 ], "02"), p = Bt.getVbyList(f, 0, [ 3 ], "02"), y = Bt.getVbyList(f, 0, [ 4 ], "02"), v = Bt.getVbyList(f, 0, [ 5 ], "02");
        return (S = new pt.crypto.DSA()).setPrivate(new i(d, 16), new i(g, 16), new i(p, 16), new i(y, 16), new i(v, 16)), 
        S;
    }
    if (-1 != t.indexOf("-END PRIVATE KEY-")) return _t.getKeyFromPlainPrivatePKCS8PEM(t);
    if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) return _t.getRSAKeyFromEncryptedPKCS5PEM(t, e);
    if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var f = _t.getDecryptedKeyHex(t, e), S = Bt.getVbyList(f, 0, [ 1 ], "04"), m = Bt.getVbyList(f, 0, [ 2, 0 ], "06"), A = Bt.getVbyList(f, 0, [ 3, 0 ], "03").substr(2), x = "";
        if (void 0 === pt.crypto.OID.oidhex2name[m]) throw "undefined OID(hex) in KJUR.crypto.OID: " + m;
        x = pt.crypto.OID.oidhex2name[m];
        var b = new pt.crypto.ECDSA({
            curve: x
        });
        return b.setPublicKeyHex(A), b.setPrivateKeyHex(S), b.isPublic = !1, b;
    }
    if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var f = _t.getDecryptedKeyHex(t, e), d = Bt.getVbyList(f, 0, [ 1 ], "02"), g = Bt.getVbyList(f, 0, [ 2 ], "02"), p = Bt.getVbyList(f, 0, [ 3 ], "02"), y = Bt.getVbyList(f, 0, [ 4 ], "02"), v = Bt.getVbyList(f, 0, [ 5 ], "02");
        return (S = new pt.crypto.DSA()).setPrivate(new i(d, 16), new i(g, 16), new i(p, 16), new i(y, 16), new i(v, 16)), 
        S;
    }
    if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-")) return _t.getKeyFromEncryptedPKCS8PEM(t, e);
    throw "not supported argument";
}, _t.generateKeypair = function(t, e) {
    if ("RSA" == t) {
        var i = e;
        (h = new D()).generate(i, "10001"), h.isPrivate = !0, h.isPublic = !0;
        var n = new D(), r = h.n.toString(16), s = h.e.toString(16);
        return n.setPublic(r, s), n.isPrivate = !1, n.isPublic = !0, (u = {}).prvKeyObj = h, 
        u.pubKeyObj = n, u;
    }
    if ("EC" == t) {
        var a = e, o = new pt.crypto.ECDSA({
            curve: a
        }).generateKeyPairHex(), h = new pt.crypto.ECDSA({
            curve: a
        });
        h.setPublicKeyHex(o.ecpubhex), h.setPrivateKeyHex(o.ecprvhex), h.isPrivate = !0, 
        h.isPublic = !1, (n = new pt.crypto.ECDSA({
            curve: a
        })).setPublicKeyHex(o.ecpubhex), n.isPrivate = !1, n.isPublic = !0;
        var u = {};
        return u.prvKeyObj = h, u.pubKeyObj = n, u;
    }
    throw "unknown algorithm: " + t;
}, _t.getPEM = function(t, e, i, n, r) {
    function s(t) {
        return pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                int: {
                    bigint: t.n
                }
            }, {
                int: t.e
            }, {
                int: {
                    bigint: t.d
                }
            }, {
                int: {
                    bigint: t.p
                }
            }, {
                int: {
                    bigint: t.q
                }
            }, {
                int: {
                    bigint: t.dmp1
                }
            }, {
                int: {
                    bigint: t.dmq1
                }
            }, {
                int: {
                    bigint: t.coeff
                }
            } ]
        });
    }
    function a(t) {
        return pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 1
            }, {
                octstr: {
                    hex: t.prvKeyHex
                }
            }, {
                tag: [ "a0", !0, {
                    oid: {
                        name: t.curveName
                    }
                } ]
            }, {
                tag: [ "a1", !0, {
                    bitstr: {
                        hex: "00" + t.pubKeyHex
                    }
                } ]
            } ]
        });
    }
    function o(t) {
        return pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                int: {
                    bigint: t.p
                }
            }, {
                int: {
                    bigint: t.q
                }
            }, {
                int: {
                    bigint: t.g
                }
            }, {
                int: {
                    bigint: t.y
                }
            }, {
                int: {
                    bigint: t.x
                }
            } ]
        });
    }
    var h = pt.asn1, u = pt.crypto;
    if ((void 0 !== D && t instanceof D || void 0 !== u.DSA && t instanceof u.DSA || void 0 !== u.ECDSA && t instanceof u.ECDSA) && 1 == t.isPublic && (void 0 === e || "PKCS8PUB" == e)) {
        y = (S = new pt.asn1.x509.SubjectPublicKeyInfo(t)).getEncodedHex();
        return h.ASN1Util.getPEMStringFromHex(y, "PUBLIC KEY");
    }
    if ("PKCS1PRV" == e && void 0 !== D && t instanceof D && (void 0 === i || null == i) && 1 == t.isPrivate) {
        y = (S = s(t)).getEncodedHex();
        return h.ASN1Util.getPEMStringFromHex(y, "RSA PRIVATE KEY");
    }
    if ("PKCS1PRV" == e && void 0 !== D && t instanceof pt.crypto.ECDSA && (void 0 === i || null == i) && 1 == t.isPrivate) {
        var c = new pt.asn1.DERObjectIdentifier({
            name: t.curveName
        }).getEncodedHex(), l = a(t).getEncodedHex(), f = "";
        return f += h.ASN1Util.getPEMStringFromHex(c, "EC PARAMETERS"), f += h.ASN1Util.getPEMStringFromHex(l, "EC PRIVATE KEY");
    }
    if ("PKCS1PRV" == e && void 0 !== pt.crypto.DSA && t instanceof pt.crypto.DSA && (void 0 === i || null == i) && 1 == t.isPrivate) {
        y = (S = o(t)).getEncodedHex();
        return h.ASN1Util.getPEMStringFromHex(y, "DSA PRIVATE KEY");
    }
    if ("PKCS5PRV" == e && void 0 !== D && t instanceof D && void 0 !== i && null != i && 1 == t.isPrivate) {
        y = (S = s(t)).getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", y, i, n);
    }
    if ("PKCS5PRV" == e && void 0 !== pt.crypto.ECDSA && t instanceof pt.crypto.ECDSA && void 0 !== i && null != i && 1 == t.isPrivate) {
        y = (S = a(t)).getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", y, i, n);
    }
    if ("PKCS5PRV" == e && void 0 !== pt.crypto.DSA && t instanceof pt.crypto.DSA && void 0 !== i && null != i && 1 == t.isPrivate) {
        y = (S = o(t)).getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", y, i, n);
    }
    var d = function(t, e) {
        var i = g(t, e);
        return new pt.asn1.ASN1Util.newObject({
            seq: [ {
                seq: [ {
                    oid: {
                        name: "pkcs5PBES2"
                    }
                }, {
                    seq: [ {
                        seq: [ {
                            oid: {
                                name: "pkcs5PBKDF2"
                            }
                        }, {
                            seq: [ {
                                octstr: {
                                    hex: i.pbkdf2Salt
                                }
                            }, {
                                int: i.pbkdf2Iter
                            } ]
                        } ]
                    }, {
                        seq: [ {
                            oid: {
                                name: "des-EDE3-CBC"
                            }
                        }, {
                            octstr: {
                                hex: i.encryptionSchemeIV
                            }
                        } ]
                    } ]
                } ]
            }, {
                octstr: {
                    hex: i.ciphertext
                }
            } ]
        }).getEncodedHex();
    }, g = function(t, e) {
        var i = vt.lib.WordArray.random(8), n = vt.lib.WordArray.random(8), r = vt.PBKDF2(e, i, {
            keySize: 6,
            iterations: 100
        }), s = vt.enc.Hex.parse(t), a = vt.TripleDES.encrypt(s, r, {
            iv: n
        }) + "", o = {};
        return o.ciphertext = a, o.pbkdf2Salt = vt.enc.Hex.stringify(i), o.pbkdf2Iter = 100, 
        o.encryptionSchemeAlg = "DES-EDE3-CBC", o.encryptionSchemeIV = vt.enc.Hex.stringify(n), 
        o;
    };
    if ("PKCS8PRV" == e && void 0 !== D && t instanceof D && 1 == t.isPrivate) {
        var p = (v = s(t)).getEncodedHex(), y = (S = pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                seq: [ {
                    oid: {
                        name: "rsaEncryption"
                    }
                }, {
                    null: !0
                } ]
            }, {
                octstr: {
                    hex: p
                }
            } ]
        })).getEncodedHex();
        if (void 0 === i || null == i) return h.ASN1Util.getPEMStringFromHex(y, "PRIVATE KEY");
        l = d(y, i);
        return h.ASN1Util.getPEMStringFromHex(l, "ENCRYPTED PRIVATE KEY");
    }
    if ("PKCS8PRV" == e && void 0 !== pt.crypto.ECDSA && t instanceof pt.crypto.ECDSA && 1 == t.isPrivate) {
        var p = (v = new pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 1
            }, {
                octstr: {
                    hex: t.prvKeyHex
                }
            }, {
                tag: [ "a1", !0, {
                    bitstr: {
                        hex: "00" + t.pubKeyHex
                    }
                } ]
            } ]
        })).getEncodedHex(), y = (S = pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                seq: [ {
                    oid: {
                        name: "ecPublicKey"
                    }
                }, {
                    oid: {
                        name: t.curveName
                    }
                } ]
            }, {
                octstr: {
                    hex: p
                }
            } ]
        })).getEncodedHex();
        if (void 0 === i || null == i) return h.ASN1Util.getPEMStringFromHex(y, "PRIVATE KEY");
        l = d(y, i);
        return h.ASN1Util.getPEMStringFromHex(l, "ENCRYPTED PRIVATE KEY");
    }
    if ("PKCS8PRV" == e && void 0 !== pt.crypto.DSA && t instanceof pt.crypto.DSA && 1 == t.isPrivate) {
        var v = new pt.asn1.DERInteger({
            bigint: t.x
        }), p = v.getEncodedHex(), S = pt.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                seq: [ {
                    oid: {
                        name: "dsa"
                    }
                }, {
                    seq: [ {
                        int: {
                            bigint: t.p
                        }
                    }, {
                        int: {
                            bigint: t.q
                        }
                    }, {
                        int: {
                            bigint: t.g
                        }
                    } ]
                } ]
            }, {
                octstr: {
                    hex: p
                }
            } ]
        }), y = S.getEncodedHex();
        if (void 0 === i || null == i) return h.ASN1Util.getPEMStringFromHex(y, "PRIVATE KEY");
        l = d(y, i);
        return h.ASN1Util.getPEMStringFromHex(l, "ENCRYPTED PRIVATE KEY");
    }
    throw "unsupported object nor format";
}, _t.getKeyFromCSRPEM = function(t) {
    var e = Bt.pemToHex(t, "CERTIFICATE REQUEST");
    return _t.getKeyFromCSRHex(e);
}, _t.getKeyFromCSRHex = function(t) {
    var e = _t.parseCSRHex(t);
    return _t.getKey(e.p8pubkeyhex, null, "pkcs8pub");
}, _t.parseCSRHex = function(t) {
    var e = {}, i = t;
    if ("30" != i.substr(0, 2)) throw "malformed CSR(code:001)";
    var n = Bt.getPosArrayOfChildren_AtObj(i, 0);
    if (n.length < 1) throw "malformed CSR(code:002)";
    if ("30" != i.substr(n[0], 2)) throw "malformed CSR(code:003)";
    var r = Bt.getPosArrayOfChildren_AtObj(i, n[0]);
    if (r.length < 3) throw "malformed CSR(code:004)";
    return e.p8pubkeyhex = Bt.getHexOfTLV_AtObj(i, r[2]), e;
}, _t.getJWKFromKey = function(t) {
    var e = {};
    if (t instanceof D && t.isPrivate) return e.kty = "RSA", e.n = M(t.n.toString(16)), 
    e.e = M(t.e.toString(16)), e.d = M(t.d.toString(16)), e.p = M(t.p.toString(16)), 
    e.q = M(t.q.toString(16)), e.dp = M(t.dmp1.toString(16)), e.dq = M(t.dmq1.toString(16)), 
    e.qi = M(t.coeff.toString(16)), e;
    if (t instanceof D && t.isPublic) return e.kty = "RSA", e.n = M(t.n.toString(16)), 
    e.e = M(t.e.toString(16)), e;
    if (t instanceof pt.crypto.ECDSA && t.isPrivate) {
        if ("P-256" !== (i = t.getShortNISTPCurveName()) && "P-384" !== i) throw "unsupported curve name for JWT: " + i;
        n = t.getPublicKeyXYHex();
        return e.kty = "EC", e.crv = i, e.x = M(n.x), e.y = M(n.y), e.d = M(t.prvKeyHex), 
        e;
    }
    if (t instanceof pt.crypto.ECDSA && t.isPublic) {
        var i = t.getShortNISTPCurveName();
        if ("P-256" !== i && "P-384" !== i) throw "unsupported curve name for JWT: " + i;
        var n = t.getPublicKeyXYHex();
        return e.kty = "EC", e.crv = i, e.x = M(n.x), e.y = M(n.y), e;
    }
    throw "not supported key object";
}, D.pemToBase64 = function(t) {
    var e = t;
    return e = e.replace("-----BEGIN RSA PRIVATE KEY-----", ""), e = e.replace("-----END RSA PRIVATE KEY-----", ""), 
    e = e.replace(/[ \n]+/g, "");
}, D.getPosArrayOfChildrenFromHex = function(t) {
    var e = new Array(), i = Bt.getStartPosOfV_AtObj(t, 0), n = Bt.getPosOfNextSibling_AtObj(t, i), r = Bt.getPosOfNextSibling_AtObj(t, n), s = Bt.getPosOfNextSibling_AtObj(t, r), a = Bt.getPosOfNextSibling_AtObj(t, s), o = Bt.getPosOfNextSibling_AtObj(t, a), h = Bt.getPosOfNextSibling_AtObj(t, o), u = Bt.getPosOfNextSibling_AtObj(t, h), c = Bt.getPosOfNextSibling_AtObj(t, u);
    return e.push(i, n, r, s, a, o, h, u, c), e;
}, D.getHexValueArrayOfChildrenFromHex = function(t) {
    var e = D.getPosArrayOfChildrenFromHex(t), i = Bt.getHexOfV_AtObj(t, e[0]), n = Bt.getHexOfV_AtObj(t, e[1]), r = Bt.getHexOfV_AtObj(t, e[2]), s = Bt.getHexOfV_AtObj(t, e[3]), a = Bt.getHexOfV_AtObj(t, e[4]), o = Bt.getHexOfV_AtObj(t, e[5]), h = Bt.getHexOfV_AtObj(t, e[6]), u = Bt.getHexOfV_AtObj(t, e[7]), c = Bt.getHexOfV_AtObj(t, e[8]), l = new Array();
    return l.push(i, n, r, s, a, o, h, u, c), l;
}, D.prototype.readPrivateKeyFromPEMString = function(t) {
    var i = e(D.pemToBase64(t)), n = D.getHexValueArrayOfChildrenFromHex(i);
    this.setPrivateEx(n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8]);
}, D.prototype.readPrivateKeyFromASN1HexString = function(t) {
    this.readPKCS5PrvKeyHex(t);
}, D.prototype.readPKCS5PrvKeyHex = function(t) {
    var e = D.getHexValueArrayOfChildrenFromHex(t);
    this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
}, D.prototype.readPKCS8PrvKeyHex = function(t) {
    var e, i, n, r, s, a, o, h, u = Bt, c = u.getVbyList;
    if (!1 === u.isASN1HEX(t)) throw "not ASN.1 hex string";
    try {
        e = c(t, 0, [ 2, 0, 1 ], "02"), i = c(t, 0, [ 2, 0, 2 ], "02"), n = c(t, 0, [ 2, 0, 3 ], "02"), 
        r = c(t, 0, [ 2, 0, 4 ], "02"), s = c(t, 0, [ 2, 0, 5 ], "02"), a = c(t, 0, [ 2, 0, 6 ], "02"), 
        o = c(t, 0, [ 2, 0, 7 ], "02"), h = c(t, 0, [ 2, 0, 8 ], "02");
    } catch (t) {
        throw "malformed PKCS#8 plain RSA private key";
    }
    this.setPrivateEx(e, i, n, r, s, a, o, h);
}, D.prototype.readPKCS5PubKeyHex = function(t) {
    if (!1 === Bt.isASN1HEX(t)) throw "keyHex is not ASN.1 hex string";
    var e = Bt.getPosArrayOfChildren_AtObj(t, 0);
    if (2 !== e.length || "02" !== t.substr(e[0], 2) || "02" !== t.substr(e[1], 2)) throw "wrong hex for PKCS#5 public key";
    var i = Bt.getHexOfV_AtObj(t, e[0]), n = Bt.getHexOfV_AtObj(t, e[1]);
    this.setPublic(i, n);
}, D.prototype.readPKCS8PubKeyHex = function(t) {
    if (!1 === Bt.isASN1HEX(t)) throw "not ASN.1 hex string";
    if ("06092a864886f70d010101" !== Bt.getDecendantHexTLVByNthList(t, 0, [ 0, 0 ])) throw "not PKCS8 RSA public key";
    var e = Bt.getDecendantHexTLVByNthList(t, 0, [ 1, 0 ]);
    this.readPKCS5PubKeyHex(e);
}, D.prototype.readCertPubKeyHex = function(t, e) {
    if (5 !== e && (e = 6), !1 === Bt.isASN1HEX(t)) throw "not ASN.1 hex string";
    var i = Bt.getDecendantHexTLVByNthList(t, 0, [ 0, e ]);
    this.readPKCS8PubKeyHex(i);
};

var Lt = new RegExp("");

Lt.compile("[^0-9a-f]", "gi"), D.prototype.signWithMessageHash = function(t, e) {
    var i = P(pt.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), 16);
    return Z(this.doPrivate(i).toString(16), this.n.bitLength());
}, D.prototype.signString = Q, D.prototype.signStringWithSHA1 = tt, D.prototype.signStringWithSHA256 = et, 
D.prototype.sign = Q, D.prototype.signWithSHA1 = tt, D.prototype.signWithSHA256 = et, 
D.prototype.signWithMessageHashPSS = function(t, e, n) {
    var r, s = W(t), a = s.length, o = this.n.bitLength() - 1, h = Math.ceil(o / 8), u = function(t) {
        return pt.crypto.Util.hashHex(t, e);
    };
    if (-1 === n || void 0 === n) n = a; else if (-2 === n) n = h - a - 2; else if (n < -2) throw "invalid salt length";
    if (h < a + n + 2) throw "data too long";
    var c = "";
    n > 0 && (c = new Array(n), new w().nextBytes(c), c = String.fromCharCode.apply(String, c));
    var l = W(u(J("\0\0\0\0\0\0\0\0" + s + c))), f = [];
    for (r = 0; r < h - n - a - 2; r += 1) f[r] = 0;
    var d = String.fromCharCode.apply(String, f) + "" + c, g = it(l, d.length, u), p = [];
    for (r = 0; r < d.length; r += 1) p[r] = d.charCodeAt(r) ^ g.charCodeAt(r);
    var y = 65280 >> 8 * h - o & 255;
    for (p[0] &= ~y, r = 0; r < a; r++) p.push(l.charCodeAt(r));
    return p.push(188), Z(this.doPrivate(new i(p)).toString(16), this.n.bitLength());
}, D.prototype.signStringPSS = nt, D.prototype.signPSS = nt, D.SALT_LEN_HLEN = -1, 
D.SALT_LEN_MAX = -2, D.prototype.verifyWithMessageHash = function(t, e) {
    var i = P(e = (e = e.replace(Lt, "")).replace(/[ \n]+/g, ""), 16);
    if (i.bitLength() > this.n.bitLength()) return 0;
    var n = at(this.doPublic(i).toString(16).replace(/^1f+00/, ""));
    if (0 == n.length) return !1;
    n[0];
    return n[1] == t;
}, D.prototype.verifyString = ut, D.prototype.verifyHexSignatureForMessage = ht, 
D.prototype.verify = ut, D.prototype.verifyHexSignatureForByteArrayMessage = ht, 
D.prototype.verifyWithMessageHashPSS = function(t, e, n, r) {
    var s = new i(e, 16);
    if (s.bitLength() > this.n.bitLength()) return !1;
    var a, o = function(t) {
        return pt.crypto.Util.hashHex(t, n);
    }, h = W(t), u = h.length, c = this.n.bitLength() - 1, l = Math.ceil(c / 8);
    if (-1 === r || void 0 === r) r = u; else if (-2 === r) r = l - u - 2; else if (r < -2) throw "invalid salt length";
    if (l < u + r + 2) throw "data too long";
    var f = this.doPublic(s).toByteArray();
    for (a = 0; a < f.length; a += 1) f[a] &= 255;
    for (;f.length < l; ) f.unshift(0);
    if (188 !== f[l - 1]) throw "encoded message does not end in 0xbc";
    var d = (f = String.fromCharCode.apply(String, f)).substr(0, l - u - 1), g = f.substr(d.length, u), p = 65280 >> 8 * l - c & 255;
    if (0 != (d.charCodeAt(0) & p)) throw "bits beyond keysize not zero";
    var y = it(g, d.length, o), v = [];
    for (a = 0; a < d.length; a += 1) v[a] = d.charCodeAt(a) ^ y.charCodeAt(a);
    v[0] &= ~p;
    var S = l - u - r - 2;
    for (a = 0; a < S; a += 1) if (0 !== v[a]) throw "leftmost octets not zero";
    if (1 !== v[S]) throw "0x01 marker not found";
    return g === W(o(J("\0\0\0\0\0\0\0\0" + h + String.fromCharCode.apply(String, v.slice(-r)))));
}, D.prototype.verifyStringPSS = ct, D.prototype.verifyPSS = ct, D.SALT_LEN_RECOVER = -2, 
lt.pemToBase64 = function(t) {
    var e = t;
    return e = e.replace("-----BEGIN CERTIFICATE-----", ""), e = e.replace("-----END CERTIFICATE-----", ""), 
    e = e.replace(/[ \n]+/g, "");
}, lt.pemToHex = function(t) {
    return Bt.pemToHex(t);
}, lt.getSubjectPublicKeyPosFromCertHex = function(t) {
    var e = lt.getSubjectPublicKeyInfoPosFromCertHex(t);
    if (-1 == e) return -1;
    var i = Bt.getPosArrayOfChildren_AtObj(t, e);
    if (2 != i.length) return -1;
    var n = i[1];
    if ("03" != t.substring(n, n + 2)) return -1;
    var r = Bt.getStartPosOfV_AtObj(t, n);
    return "00" != t.substring(r, r + 2) ? -1 : r + 2;
}, lt.getSubjectPublicKeyInfoPosFromCertHex = function(t) {
    var e = Bt.getStartPosOfV_AtObj(t, 0), i = Bt.getPosArrayOfChildren_AtObj(t, e);
    return i.length < 1 ? -1 : "a003020102" == t.substring(i[0], i[0] + 10) ? i.length < 6 ? -1 : i[6] : i.length < 5 ? -1 : i[5];
}, lt.getPublicKeyHexArrayFromCertHex = function(t) {
    var e = lt.getSubjectPublicKeyPosFromCertHex(t), i = Bt.getPosArrayOfChildren_AtObj(t, e);
    if (2 != i.length) return [];
    var n = Bt.getHexOfV_AtObj(t, i[0]), r = Bt.getHexOfV_AtObj(t, i[1]);
    return null != n && null != r ? [ n, r ] : [];
}, lt.getHexTbsCertificateFromCert = function(t) {
    return Bt.getStartPosOfV_AtObj(t, 0);
}, lt.getPublicKeyHexArrayFromCertPEM = function(t) {
    var e = Bt.pemToHex(t);
    return lt.getPublicKeyHexArrayFromCertHex(e);
}, lt.hex2dn = function(t, e) {
    if (void 0 === e && (e = 0), "30" !== t.substr(e, 2)) throw "malformed DN";
    for (var i = new Array(), n = Bt.getPosArrayOfChildren_AtObj(t, e), r = 0; r < n.length; r++) i.push(lt.hex2rdn(t, n[r]));
    return "/" + (i = i.map(function(t) {
        return t.replace("/", "\\/");
    })).join("/");
}, lt.hex2rdn = function(t, e) {
    if (void 0 === e && (e = 0), "31" !== t.substr(e, 2)) throw "malformed RDN";
    for (var i = new Array(), n = Bt.getPosArrayOfChildren_AtObj(t, e), r = 0; r < n.length; r++) i.push(lt.hex2attrTypeValue(t, n[r]));
    return (i = i.map(function(t) {
        return t.replace("+", "\\+");
    })).join("+");
}, lt.hex2attrTypeValue = function(t, e) {
    if (void 0 === e && (e = 0), "30" !== t.substr(e, 2)) throw "malformed attribute type and value";
    var i = Bt.getPosArrayOfChildren_AtObj(t, e);
    2 !== i.length || t.substr(i[0], 2);
    var n = Bt.getHexOfV_AtObj(t, i[0]), r = pt.asn1.ASN1Util.oidHexToInt(n);
    return pt.asn1.x509.OID.oid2atype(r) + "=" + W(Bt.getHexOfV_AtObj(t, i[1]));
}, lt.getPublicKeyFromCertHex = function(t) {
    var e, i, n = 6, r = Bt, s = r.getVbyList;
    if ("a003020102" !== r.getDecendantHexTLVByNthList(t, 0, [ 0, 0 ]) && (n = 5), "2a864886f70d010101" === (i = s(t, 0, [ 0, n, 0, 0 ], "06"))) e = new D(); else if ("2a8648ce380401" === i) e = new pt.crypto.DSA(); else {
        if ("2a8648ce3d0201" !== i) throw "unsupported public key in X.509 cert";
        e = new pt.crypto.ECDSA();
    }
    return e.readCertPubKeyHex(t, n), e;
}, lt.getPublicKeyFromCertPEM = function(t) {
    var e = Bt.pemToHex(t);
    return lt.getPublicKeyFromCertHex(e);
}, lt.getPublicKeyInfoPropOfCertPEM = function(t) {
    var e = {};
    e.algparam = null;
    var i = Bt.pemToHex(t), n = Bt.getPosArrayOfChildren_AtObj(i, 0);
    if (3 != n.length) throw "malformed X.509 certificate PEM (code:001)";
    if ("30" != i.substr(n[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
    var r = Bt.getPosArrayOfChildren_AtObj(i, n[0]), s = 6;
    if ("a0" !== i.substr(r[0], 2) && (s = 5), r.length < s + 1) throw "malformed X.509 certificate PEM (code:003)";
    var a = Bt.getPosArrayOfChildren_AtObj(i, r[s]);
    if (2 != a.length) throw "malformed X.509 certificate PEM (code:004)";
    var o = Bt.getPosArrayOfChildren_AtObj(i, a[0]);
    if (2 != o.length) throw "malformed X.509 certificate PEM (code:005)";
    if (e.algoid = Bt.getHexOfV_AtObj(i, o[0]), "06" == i.substr(o[1], 2) ? e.algparam = Bt.getHexOfV_AtObj(i, o[1]) : "30" == i.substr(o[1], 2) && (e.algparam = Bt.getHexOfTLV_AtObj(i, o[1])), 
    "03" != i.substr(a[1], 2)) throw "malformed X.509 certificate PEM (code:006)";
    var h = Bt.getHexOfV_AtObj(i, a[1]);
    return e.keyhex = h.substr(2), e;
}, lt.getPublicKeyInfoPosOfCertHEX = function(t) {
    var e = Bt.getPosArrayOfChildren_AtObj(t, 0);
    if (3 != e.length) throw "malformed X.509 certificate PEM (code:001)";
    if ("30" != t.substr(e[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
    var i = Bt.getPosArrayOfChildren_AtObj(t, e[0]);
    if (i.length < 7) throw "malformed X.509 certificate PEM (code:003)";
    return i[6];
}, lt.getV3ExtInfoListOfCertHex = function(t) {
    var e = Bt.getPosArrayOfChildren_AtObj(t, 0);
    if (3 != e.length) throw "malformed X.509 certificate PEM (code:001)";
    if ("30" != t.substr(e[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
    var i = Bt.getPosArrayOfChildren_AtObj(t, e[0]);
    if (i.length < 8) throw "malformed X.509 certificate PEM (code:003)";
    if ("a3" != t.substr(i[7], 2)) throw "malformed X.509 certificate PEM (code:004)";
    var n = Bt.getPosArrayOfChildren_AtObj(t, i[7]);
    if (1 != n.length) throw "malformed X.509 certificate PEM (code:005)";
    if ("30" != t.substr(n[0], 2)) throw "malformed X.509 certificate PEM (code:006)";
    for (var r = Bt.getPosArrayOfChildren_AtObj(t, n[0]), s = r.length, a = new Array(s), o = 0; o < s; o++) a[o] = lt.getV3ExtItemInfo_AtObj(t, r[o]);
    return a;
}, lt.getV3ExtItemInfo_AtObj = function(t, e) {
    var i = {};
    i.posTLV = e;
    var n = Bt.getPosArrayOfChildren_AtObj(t, e);
    if (2 != n.length && 3 != n.length) throw "malformed X.509v3 Ext (code:001)";
    if ("06" != t.substr(n[0], 2)) throw "malformed X.509v3 Ext (code:002)";
    var r = Bt.getHexOfV_AtObj(t, n[0]);
    i.oid = Bt.hextooidstr(r), i.critical = !1, 3 == n.length && (i.critical = !0);
    var s = n[n.length - 1];
    if ("04" != t.substr(s, 2)) throw "malformed X.509v3 Ext (code:003)";
    return i.posV = Bt.getStartPosOfV_AtObj(t, s), i;
}, lt.getHexOfTLV_V3ExtValue = function(t, e) {
    var i = lt.getPosOfTLV_V3ExtValue(t, e);
    return -1 == i ? null : Bt.getHexOfTLV_AtObj(t, i);
}, lt.getHexOfV_V3ExtValue = function(t, e) {
    var i = lt.getPosOfTLV_V3ExtValue(t, e);
    return -1 == i ? null : Bt.getHexOfV_AtObj(t, i);
}, lt.getPosOfTLV_V3ExtValue = function(t, e) {
    var i = e;
    if (e.match(/^[0-9.]+$/) || (i = pt.asn1.x509.OID.name2oid(e)), "" == i) return -1;
    for (var n = lt.getV3ExtInfoListOfCertHex(t), r = 0; r < n.length; r++) {
        var s = n[r];
        if (s.oid == i) return s.posV;
    }
    return -1;
}, lt.getExtBasicConstraints = function(t) {
    var e = lt.getHexOfV_V3ExtValue(t, "basicConstraints");
    if (null === e) return null;
    if ("" === e) return {};
    if ("0101ff" === e) return {
        cA: !0
    };
    if ("0101ff02" === e.substr(0, 8)) {
        var i = Bt.getHexOfV_AtObj(e, 6);
        return {
            cA: !0,
            pathLen: parseInt(i, 16)
        };
    }
    throw "unknown error";
}, lt.KEYUSAGE_NAME = [ "digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly" ], 
lt.getExtKeyUsageBin = function(t) {
    var e = lt.getHexOfV_V3ExtValue(t, "keyUsage");
    if ("" == e) return "";
    if (e.length % 2 != 0 || e.length <= 2) throw "malformed key usage value";
    var i = parseInt(e.substr(0, 2)), n = parseInt(e.substr(2), 16).toString(2);
    return n.substr(0, n.length - i);
}, lt.getExtKeyUsageString = function(t) {
    for (var e = lt.getExtKeyUsageBin(t), i = new Array(), n = 0; n < e.length; n++) "1" == e.substr(n, 1) && i.push(lt.KEYUSAGE_NAME[n]);
    return i.join(",");
}, lt.getExtSubjectKeyIdentifier = function(t) {
    return lt.getHexOfV_V3ExtValue(t, "subjectKeyIdentifier");
}, lt.getExtAuthorityKeyIdentifier = function(t) {
    var e = {}, i = lt.getHexOfTLV_V3ExtValue(t, "authorityKeyIdentifier");
    if (null === i) return null;
    for (var n = Bt.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) "80" === i.substr(n[r], 2) && (e.kid = Bt.getHexOfV_AtObj(i, n[r]));
    return e;
}, lt.getExtExtKeyUsageName = function(t) {
    var e = new Array(), i = lt.getHexOfTLV_V3ExtValue(t, "extKeyUsage");
    if (null === i) return null;
    for (var n = Bt.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) {
        var s = Bt.getHexOfV_AtObj(i, n[r]), a = pt.asn1.ASN1Util.oidHexToInt(s), o = pt.asn1.x509.OID.oid2name(a);
        e.push(o);
    }
    return e;
}, lt.getExtSubjectAltName = function(t) {
    for (var e = new Array(), i = lt.getHexOfTLV_V3ExtValue(t, "subjectAltName"), n = Bt.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) if ("82" === i.substr(n[r], 2)) {
        var s = z(Bt.getHexOfV_AtObj(i, n[r]));
        e.push(s);
    }
    return e;
}, lt.getExtCRLDistributionPointsURI = function(t) {
    for (var e = new Array(), i = lt.getHexOfTLV_V3ExtValue(t, "cRLDistributionPoints"), n = Bt.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) for (var s = Bt.getHexOfTLV_AtObj(i, n[r]), a = Bt.getPosArrayOfChildren_AtObj(s, 0), o = 0; o < a.length; o++) if ("a0" === s.substr(a[o], 2)) {
        var h = Bt.getHexOfV_AtObj(s, a[o]);
        if ("a0" === h.substr(0, 2)) {
            var u = Bt.getHexOfV_AtObj(h, 0);
            if ("86" === u.substr(0, 2)) {
                var c = z(Bt.getHexOfV_AtObj(u, 0));
                e.push(c);
            }
        }
    }
    return e;
}, lt.getExtAIAInfo = function(t) {
    var e = {};
    e.ocsp = [], e.caissuer = [];
    var i = lt.getPosOfTLV_V3ExtValue(t, "authorityInfoAccess");
    if (-1 == i) return null;
    if ("30" != t.substr(i, 2)) throw "malformed AIA Extn Value";
    for (var n = Bt.getPosArrayOfChildren_AtObj(t, i), r = 0; r < n.length; r++) {
        var s = n[r], a = Bt.getPosArrayOfChildren_AtObj(t, s);
        if (2 != a.length) throw "malformed AccessDescription of AIA Extn";
        var o = a[0], h = a[1];
        "2b06010505073001" == Bt.getHexOfV_AtObj(t, o) && "86" == t.substr(h, 2) && e.ocsp.push(z(Bt.getHexOfV_AtObj(t, h))), 
        "2b06010505073002" == Bt.getHexOfV_AtObj(t, o) && "86" == t.substr(h, 2) && e.caissuer.push(z(Bt.getHexOfV_AtObj(t, h)));
    }
    return e;
}, lt.getSignatureAlgorithmName = function(t) {
    var e = Bt.getDecendantHexVByNthList(t, 0, [ 1, 0 ]), i = pt.asn1.ASN1Util.oidHexToInt(e);
    return pt.asn1.x509.OID.oid2name(i);
}, lt.getSignatureValueHex = function(t) {
    var e = Bt.getDecendantHexVByNthList(t, 0, [ 2 ]);
    if ("00" !== e.substr(0, 2)) throw "can't get signature value";
    return e.substr(2);
}, lt.getSerialNumberHex = function(t) {
    return Bt.getDecendantHexVByNthList(t, 0, [ 0, 1 ]);
}, lt.verifySignature = function(t, e) {
    var i = lt.getSignatureAlgorithmName(t), n = lt.getSignatureValueHex(t), r = Bt.getDecendantHexTLVByNthList(t, 0, [ 0 ]), s = new pt.crypto.Signature({
        alg: i
    });
    return s.init(e), s.updateHex(r), s.verify(n);
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.jws && pt.jws || (pt.jws = {}), 
pt.jws.JWS = function() {
    var t = pt.jws.JWS;
    this.parseJWS = function(e, i) {
        if (void 0 === this.parsedJWS || !i && void 0 === this.parsedJWS.sigvalH) {
            var n = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
            if (null == n) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
            var r = n[1], s = n[2], a = n[3], o = r + "." + s;
            if (this.parsedJWS = {}, this.parsedJWS.headB64U = r, this.parsedJWS.payloadB64U = s, 
            this.parsedJWS.sigvalB64U = a, this.parsedJWS.si = o, !i) {
                var h = q(a), u = P(h, 16);
                this.parsedJWS.sigvalH = h, this.parsedJWS.sigvalBI = u;
            }
            var c = Vt(r), l = Vt(s);
            if (this.parsedJWS.headS = c, this.parsedJWS.payloadS = l, !t.isSafeJSONString(c, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + c;
        }
    };
}, pt.jws.JWS.sign = function(t, e, i, n, r) {
    var s, a, o, h = pt.jws.JWS;
    if ("string" != typeof e && "object" != (void 0 === e ? "undefined" : ft(e))) throw "spHeader must be JSON string or object: " + e;
    if ("object" == (void 0 === e ? "undefined" : ft(e)) && (a = e, s = JSON.stringify(a)), 
    "string" == typeof e) {
        if (s = e, !h.isSafeJSONString(s)) throw "JWS Head is not safe JSON string: " + s;
        a = h.readSafeJSONString(s);
    }
    if (o = i, "object" == (void 0 === i ? "undefined" : ft(i)) && (o = JSON.stringify(i)), 
    "" != t && null != t || void 0 === a.alg || (t = a.alg), "" != t && null != t && void 0 === a.alg && (a.alg = t, 
    s = JSON.stringify(a)), t !== a.alg) throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
    var u = null;
    if (void 0 === h.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
    u = h.jwsalg2sigalg[t];
    var c = Nt(s) + "." + Nt(o), l = "";
    if ("Hmac" == u.substr(0, 4)) {
        if (void 0 === n) throw "mac key shall be specified for HS* alg";
        var f = new pt.crypto.Mac({
            alg: u,
            prov: "cryptojs",
            pass: n
        });
        f.updateString(c), l = f.doFinal();
    } else if (-1 != u.indexOf("withECDSA")) (d = new pt.crypto.Signature({
        alg: u
    })).init(n, r), d.updateString(c), hASN1Sig = d.sign(), l = pt.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig); else if ("none" != u) {
        var d = new pt.crypto.Signature({
            alg: u
        });
        d.init(n, r), d.updateString(c), l = d.sign();
    }
    return c + "." + M(l);
}, pt.jws.JWS.verify = function(t, e, i) {
    var n = pt.jws.JWS, r = t.split("."), s = r[0] + "." + r[1], a = q(r[2]), o = n.readSafeJSONString(Vt(r[0])), h = null, u = null;
    if (void 0 === o.alg) throw "algorithm not specified in header";
    if (u = (h = o.alg).substr(0, 2), null != i && "[object Array]" === Object.prototype.toString.call(i) && i.length > 0 && -1 == (":" + i.join(":") + ":").indexOf(":" + h + ":")) throw "algorithm '" + h + "' not accepted in the list";
    if ("none" != h && null === e) throw "key shall be specified to verify.";
    if ("string" == typeof e && -1 != e.indexOf("-----BEGIN ") && (e = _t.getKey(e)), 
    !("RS" != u && "PS" != u || e instanceof D)) throw "key shall be a RSAKey obj for RS* and PS* algs";
    if ("ES" == u && !(e instanceof pt.crypto.ECDSA)) throw "key shall be a ECDSA obj for ES* algs";
    var c = null;
    if (void 0 === n.jwsalg2sigalg[o.alg]) throw "unsupported alg name: " + h;
    if ("none" == (c = n.jwsalg2sigalg[h])) throw "not supported";
    if ("Hmac" == c.substr(0, 4)) {
        var l = null;
        if (void 0 === e) throw "hexadecimal key shall be specified for HMAC";
        var f = new pt.crypto.Mac({
            alg: c,
            pass: e
        });
        return f.updateString(s), l = f.doFinal(), a == l;
    }
    if (-1 != c.indexOf("withECDSA")) {
        var d = null;
        try {
            d = pt.crypto.ECDSA.concatSigToASN1Sig(a);
        } catch (t) {
            return !1;
        }
        return (g = new pt.crypto.Signature({
            alg: c
        })).init(e), g.updateString(s), g.verify(d);
    }
    var g = new pt.crypto.Signature({
        alg: c
    });
    return g.init(e), g.updateString(s), g.verify(a);
}, pt.jws.JWS.parse = function(t) {
    var e, i, n, r = t.split("."), s = {};
    if (2 != r.length && 3 != r.length) throw "malformed sJWS: wrong number of '.' splitted elements";
    return e = r[0], i = r[1], 3 == r.length && (n = r[2]), s.headerObj = pt.jws.JWS.readSafeJSONString(Vt(e)), 
    s.payloadObj = pt.jws.JWS.readSafeJSONString(Vt(i)), s.headerPP = JSON.stringify(s.headerObj, null, "  "), 
    null == s.payloadObj ? s.payloadPP = Vt(i) : s.payloadPP = JSON.stringify(s.payloadObj, null, "  "), 
    void 0 !== n && (s.sigHex = q(n)), s;
}, pt.jws.JWS.verifyJWT = function(t, e, i) {
    var n = pt.jws.JWS, r = t.split("."), s = r[0], a = r[1], o = (q(r[2]), n.readSafeJSONString(Vt(s))), h = n.readSafeJSONString(Vt(a));
    if (void 0 === o.alg) return !1;
    if (void 0 === i.alg) throw "acceptField.alg shall be specified";
    if (!n.inArray(o.alg, i.alg)) return !1;
    if (void 0 !== h.iss && "object" === ft(i.iss) && !n.inArray(h.iss, i.iss)) return !1;
    if (void 0 !== h.sub && "object" === ft(i.sub) && !n.inArray(h.sub, i.sub)) return !1;
    if (void 0 !== h.aud && "object" === ft(i.aud)) if ("string" == typeof h.aud) {
        if (!n.inArray(h.aud, i.aud)) return !1;
    } else if ("object" == ft(h.aud) && !n.includedArray(h.aud, i.aud)) return !1;
    var u = pt.jws.IntDate.getNow();
    return void 0 !== i.verifyAt && "number" == typeof i.verifyAt && (u = i.verifyAt), 
    void 0 !== i.gracePeriod && "number" == typeof i.gracePeriod || (i.gracePeriod = 0), 
    !(void 0 !== h.exp && "number" == typeof h.exp && h.exp + i.gracePeriod < u) && (!(void 0 !== h.nbf && "number" == typeof h.nbf && u < h.nbf - i.gracePeriod) && (!(void 0 !== h.iat && "number" == typeof h.iat && u < h.iat - i.gracePeriod) && ((void 0 === h.jti || void 0 === i.jti || h.jti === i.jti) && !!pt.jws.JWS.verify(t, e, i.alg))));
}, pt.jws.JWS.includedArray = function(t, e) {
    var i = pt.jws.JWS.inArray;
    if (null === t) return !1;
    if ("object" !== (void 0 === t ? "undefined" : ft(t))) return !1;
    if ("number" != typeof t.length) return !1;
    for (var n = 0; n < t.length; n++) if (!i(t[n], e)) return !1;
    return !0;
}, pt.jws.JWS.inArray = function(t, e) {
    if (null === e) return !1;
    if ("object" !== (void 0 === e ? "undefined" : ft(e))) return !1;
    if ("number" != typeof e.length) return !1;
    for (var i = 0; i < e.length; i++) if (e[i] == t) return !0;
    return !1;
}, pt.jws.JWS.jwsalg2sigalg = {
    HS256: "HmacSHA256",
    HS384: "HmacSHA384",
    HS512: "HmacSHA512",
    RS256: "SHA256withRSA",
    RS384: "SHA384withRSA",
    RS512: "SHA512withRSA",
    ES256: "SHA256withECDSA",
    ES384: "SHA384withECDSA",
    PS256: "SHA256withRSAandMGF1",
    PS384: "SHA384withRSAandMGF1",
    PS512: "SHA512withRSAandMGF1",
    none: "none"
}, pt.jws.JWS.isSafeJSONString = function(t, e, i) {
    var n = null;
    try {
        return "object" != (void 0 === (n = Rt(t)) ? "undefined" : ft(n)) ? 0 : n.constructor === Array ? 0 : (e && (e[i] = n), 
        1);
    } catch (t) {
        return 0;
    }
}, pt.jws.JWS.readSafeJSONString = function(t) {
    var e = null;
    try {
        return "object" != (void 0 === (e = Rt(t)) ? "undefined" : ft(e)) ? null : e.constructor === Array ? null : e;
    } catch (t) {
        return null;
    }
}, pt.jws.JWS.getEncodedSignatureValueFromJWS = function(t) {
    var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
    if (null == e) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
    return e[1];
}, pt.jws.JWS.getJWKthumbprint = function(t) {
    if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty) throw "unsupported algorithm for JWK Thumprint";
    var e = "{";
    if ("RSA" === t.kty) {
        if ("string" != typeof t.n || "string" != typeof t.e) throw "wrong n and e value for RSA key";
        e += '"e":"' + t.e + '",', e += '"kty":"' + t.kty + '",', e += '"n":"' + t.n + '"}';
    } else if ("EC" === t.kty) {
        if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y) throw "wrong crv, x and y value for EC key";
        e += '"crv":"' + t.crv + '",', e += '"kty":"' + t.kty + '",', e += '"x":"' + t.x + '",', 
        e += '"y":"' + t.y + '"}';
    } else if ("oct" === t.kty) {
        if ("string" != typeof t.k) throw "wrong k value for oct(symmetric) key";
        e += '"kty":"' + t.kty + '",', e += '"k":"' + t.k + '"}';
    }
    var i = J(e);
    return M(pt.crypto.Util.hashHex(i, "sha256"));
}, pt.jws.IntDate = {}, pt.jws.IntDate.get = function(t) {
    if ("now" == t) return pt.jws.IntDate.getNow();
    if ("now + 1hour" == t) return pt.jws.IntDate.getNow() + 3600;
    if ("now + 1day" == t) return pt.jws.IntDate.getNow() + 86400;
    if ("now + 1month" == t) return pt.jws.IntDate.getNow() + 2592e3;
    if ("now + 1year" == t) return pt.jws.IntDate.getNow() + 31536e3;
    if (t.match(/Z$/)) return pt.jws.IntDate.getZulu(t);
    if (t.match(/^[0-9]+$/)) return parseInt(t);
    throw "unsupported format: " + t;
}, pt.jws.IntDate.getZulu = function(t) {
    var e = t.match(/(\d+)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/);
    if (e) {
        var i = e[1], n = parseInt(i);
        if (4 == i.length) ; else {
            if (2 != i.length) throw "malformed year string";
            if (50 <= n && n < 100) n = 1900 + n; else {
                if (!(0 <= n && n < 50)) throw "malformed year string for UTCTime";
                n = 2e3 + n;
            }
        }
        var r = parseInt(e[2]) - 1, s = parseInt(e[3]), a = parseInt(e[4]), o = parseInt(e[5]), h = parseInt(e[6]);
        return ~~(new Date(Date.UTC(n, r, s, a, o, h)) / 1e3);
    }
    throw "unsupported format: " + t;
}, pt.jws.IntDate.getNow = function() {
    return ~~(new Date() / 1e3);
}, pt.jws.IntDate.intDate2UTCString = function(t) {
    return new Date(1e3 * t).toUTCString();
}, pt.jws.IntDate.intDate2Zulu = function(t) {
    var e = new Date(1e3 * t);
    return ("0000" + e.getUTCFullYear()).slice(-4) + ("00" + (e.getUTCMonth() + 1)).slice(-2) + ("00" + e.getUTCDate()).slice(-2) + ("00" + e.getUTCHours()).slice(-2) + ("00" + e.getUTCMinutes()).slice(-2) + ("00" + e.getUTCSeconds()).slice(-2) + "Z";
}, void 0 !== pt && pt || (pt = {}), void 0 !== pt.jws && pt.jws || (pt.jws = {}), 
pt.jws.JWSJS = function() {
    var t = pt.jws.JWS, e = pt.jws.JWS;
    this.aHeader = [], this.sPayload = "", this.aSignature = [], this.init = function() {
        this.aHeader = [], this.sPayload = void 0, this.aSignature = [];
    }, this.initWithJWS = function(t) {
        this.init();
        var e = t.split(".");
        if (3 != e.length) throw "malformed input JWS";
        this.aHeader.push(e[0]), this.sPayload = e[1], this.aSignature.push(e[2]);
    }, this.addSignature = function(t, e, i, n) {
        if (void 0 === this.sPayload || null === this.sPayload) throw "there's no JSON-JS signature to add.";
        var r = this.aHeader.length;
        if (this.aHeader.length != this.aSignature.length) throw "aHeader.length != aSignature.length";
        try {
            var s = pt.jws.JWS.sign(t, e, this.sPayload, i, n).split(".");
            s[0], s[2];
            this.aHeader.push(s[0]), this.aSignature.push(s[2]);
        } catch (t) {
            throw this.aHeader.length > r && this.aHeader.pop(), this.aSignature.length > r && this.aSignature.pop(), 
            "addSignature failed: " + t;
        }
    }, this.addSignatureByHeaderKey = function(t, e) {
        var i = Vt(this.sPayload), n = new pt.jws.JWS();
        n.generateJWSByP1PrvKey(t, i, e);
        this.aHeader.push(n.parsedJWS.headB64U), this.aSignature.push(n.parsedJWS.sigvalB64U);
    }, this.addSignatureByHeaderPayloadKey = function(t, e, i) {
        var n = new pt.jws.JWS();
        n.generateJWSByP1PrvKey(t, e, i);
        this.aHeader.push(n.parsedJWS.headB64U), this.sPayload = n.parsedJWS.payloadB64U, 
        this.aSignature.push(n.parsedJWS.sigvalB64U);
    }, this.verifyAll = function(t) {
        if (this.aHeader.length !== t.length || this.aSignature.length !== t.length) return !1;
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (2 !== i.length) return !1;
            if (!1 === this.verifyNth(e, i[0], i[1])) return !1;
        }
        return !0;
    }, this.verifyNth = function(t, i, n) {
        if (this.aHeader.length <= t || this.aSignature.length <= t) return !1;
        var r = this.aHeader[t], s = this.aSignature[t], a = r + "." + this.sPayload + "." + s, o = !1;
        try {
            o = e.verify(a, i, n);
        } catch (t) {
            return !1;
        }
        return o;
    }, this.verifyWithCerts = function(t) {
        if (this.aHeader.length != t.length) throw "num headers does not match with num certs";
        if (this.aSignature.length != t.length) throw "num signatures does not match with num certs";
        for (var e = this.sPayload, i = "", n = 0; n < t.length; n++) {
            var r = t[n], s = this.aHeader[n] + "." + e + "." + this.aSignature[n], a = new pt.jws.JWS();
            try {
                1 != a.verifyJWSByPemX509Cert(s, r) && (i += n + 1 + "th signature unmatch. ");
            } catch (t) {
                i += n + 1 + "th signature fail(" + t + "). ";
            }
        }
        if ("" == i) return 1;
        throw i;
    }, this.readJWSJS = function(e) {
        if ("string" == typeof e) {
            var i = t.readSafeJSONString(e);
            if (null == i) throw "argument is not safe JSON object string";
            this.aHeader = i.headers, this.sPayload = i.payload, this.aSignature = i.signatures;
        } else try {
            if (!(e.headers.length > 0)) throw "malformed header";
            if (this.aHeader = e.headers, "string" != typeof e.payload) throw "malformed signatures";
            if (this.sPayload = e.payload, !(e.signatures.length > 0)) throw "malformed signatures";
            this.signatures = e.signatures;
        } catch (t) {
            throw "malformed JWS-JS JSON object: " + t;
        }
    }, this.getJSON = function() {
        return {
            headers: this.aHeader,
            payload: this.sPayload,
            signatures: this.aSignature
        };
    }, this.isEmpty = function() {
        return 0 == this.aHeader.length ? 1 : 0;
    };
}, exports.default = {
    RSAKey: D,
    KEYUTIL: _t,
    hex2b64: t,
    b64tohex: e
};