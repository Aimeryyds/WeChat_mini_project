function n(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
}

function t(n, t) {
    return n << t | n >>> 32 - t;
}

function r(r, e, u, o, c, f) {
    return n(t(n(n(e, r), n(o, f)), c), u);
}

function e(n, t, e, u, o, c, f) {
    return r(t & e | ~t & u, n, t, o, c, f);
}

function u(n, t, e, u, o, c, f) {
    return r(t & u | e & ~u, n, t, o, c, f);
}

function o(n, t, e, u, o, c, f) {
    return r(t ^ e ^ u, n, t, o, c, f);
}

function c(n, t, e, u, o, c, f) {
    return r(e ^ (t | ~u), n, t, o, c, f);
}

function f(t, r) {
    t[r >> 5] |= 128 << r % 32, t[14 + (r + 64 >>> 9 << 4)] = r;
    var f, i, a, h, l, d = 1732584193, g = -271733879, v = -1732584194, s = 271733878;
    for (f = 0; f < t.length; f += 16) i = d, a = g, h = v, l = s, g = c(g = c(g = c(g = c(g = o(g = o(g = o(g = o(g = u(g = u(g = u(g = u(g = e(g = e(g = e(g = e(g, v = e(v, s = e(s, d = e(d, g, v, s, t[f], 7, -680876936), g, v, t[f + 1], 12, -389564586), d, g, t[f + 2], 17, 606105819), s, d, t[f + 3], 22, -1044525330), v = e(v, s = e(s, d = e(d, g, v, s, t[f + 4], 7, -176418897), g, v, t[f + 5], 12, 1200080426), d, g, t[f + 6], 17, -1473231341), s, d, t[f + 7], 22, -45705983), v = e(v, s = e(s, d = e(d, g, v, s, t[f + 8], 7, 1770035416), g, v, t[f + 9], 12, -1958414417), d, g, t[f + 10], 17, -42063), s, d, t[f + 11], 22, -1990404162), v = e(v, s = e(s, d = e(d, g, v, s, t[f + 12], 7, 1804603682), g, v, t[f + 13], 12, -40341101), d, g, t[f + 14], 17, -1502002290), s, d, t[f + 15], 22, 1236535329), v = u(v, s = u(s, d = u(d, g, v, s, t[f + 1], 5, -165796510), g, v, t[f + 6], 9, -1069501632), d, g, t[f + 11], 14, 643717713), s, d, t[f], 20, -373897302), v = u(v, s = u(s, d = u(d, g, v, s, t[f + 5], 5, -701558691), g, v, t[f + 10], 9, 38016083), d, g, t[f + 15], 14, -660478335), s, d, t[f + 4], 20, -405537848), v = u(v, s = u(s, d = u(d, g, v, s, t[f + 9], 5, 568446438), g, v, t[f + 14], 9, -1019803690), d, g, t[f + 3], 14, -187363961), s, d, t[f + 8], 20, 1163531501), v = u(v, s = u(s, d = u(d, g, v, s, t[f + 13], 5, -1444681467), g, v, t[f + 2], 9, -51403784), d, g, t[f + 7], 14, 1735328473), s, d, t[f + 12], 20, -1926607734), v = o(v, s = o(s, d = o(d, g, v, s, t[f + 5], 4, -378558), g, v, t[f + 8], 11, -2022574463), d, g, t[f + 11], 16, 1839030562), s, d, t[f + 14], 23, -35309556), v = o(v, s = o(s, d = o(d, g, v, s, t[f + 1], 4, -1530992060), g, v, t[f + 4], 11, 1272893353), d, g, t[f + 7], 16, -155497632), s, d, t[f + 10], 23, -1094730640), v = o(v, s = o(s, d = o(d, g, v, s, t[f + 13], 4, 681279174), g, v, t[f], 11, -358537222), d, g, t[f + 3], 16, -722521979), s, d, t[f + 6], 23, 76029189), v = o(v, s = o(s, d = o(d, g, v, s, t[f + 9], 4, -640364487), g, v, t[f + 12], 11, -421815835), d, g, t[f + 15], 16, 530742520), s, d, t[f + 2], 23, -995338651), v = c(v, s = c(s, d = c(d, g, v, s, t[f], 6, -198630844), g, v, t[f + 7], 10, 1126891415), d, g, t[f + 14], 15, -1416354905), s, d, t[f + 5], 21, -57434055), v = c(v, s = c(s, d = c(d, g, v, s, t[f + 12], 6, 1700485571), g, v, t[f + 3], 10, -1894986606), d, g, t[f + 10], 15, -1051523), s, d, t[f + 1], 21, -2054922799), v = c(v, s = c(s, d = c(d, g, v, s, t[f + 8], 6, 1873313359), g, v, t[f + 15], 10, -30611744), d, g, t[f + 6], 15, -1560198380), s, d, t[f + 13], 21, 1309151649), v = c(v, s = c(s, d = c(d, g, v, s, t[f + 4], 6, -145523070), g, v, t[f + 11], 10, -1120210379), d, g, t[f + 2], 15, 718787259), s, d, t[f + 9], 21, -343485551), 
    d = n(d, i), g = n(g, a), v = n(v, h), s = n(s, l);
    return [ d, g, v, s ];
}

function i(n) {
    var t, r = "";
    for (t = 0; t < 32 * n.length; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return r;
}

function a(n) {
    var t, r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    for (t = 0; t < 8 * n.length; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r;
}

function h(n) {
    return i(f(a(n), 8 * n.length));
}

function l(n, t) {
    var r, e, u = a(n), o = [], c = [];
    for (o[15] = c[15] = void 0, u.length > 16 && (u = f(u, 8 * n.length)), r = 0; r < 16; r += 1) o[r] = 909522486 ^ u[r], 
    c[r] = 1549556828 ^ u[r];
    return e = f(o.concat(a(t)), 512 + 8 * t.length), i(f(c.concat(e), 640));
}

function d(n) {
    var t, r, e = "";
    for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
    return e;
}

function g(n) {
    return unescape(encodeURIComponent(n));
}

function v(n) {
    return h(g(n));
}

function s(n) {
    return d(v(n));
}

function p(n, t) {
    return l(g(n), g(t));
}

function C(n, t) {
    return d(p(n, t));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(n, t, r) {
    return t ? r ? p(t, n) : C(t, n) : r ? v(n) : s(n);
};