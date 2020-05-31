var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

!function(t) {
    function r(n, t) {
        var r = (65535 & n) + (65535 & t);
        return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
    }
    function o(n, t) {
        return n << t | n >>> 32 - t;
    }
    function e(n, t, e, u, f, c) {
        return r(o(r(r(t, n), r(u, c)), f), e);
    }
    function u(n, t, r, o, u, f, c) {
        return e(t & r | ~t & o, n, t, u, f, c);
    }
    function f(n, t, r, o, u, f, c) {
        return e(t & o | r & ~o, n, t, u, f, c);
    }
    function c(n, t, r, o, u, f, c) {
        return e(t ^ r ^ o, n, t, u, f, c);
    }
    function i(n, t, r, o, u, f, c) {
        return e(r ^ (t | ~o), n, t, u, f, c);
    }
    function d(n, t) {
        n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
        var o, e, d, l, a, m = 1732584193, y = -271733879, h = -1732584194, p = 271733878;
        for (o = 0; o < n.length; o += 16) e = m, d = y, l = h, a = p, y = i(y = i(y = i(y = i(y = c(y = c(y = c(y = c(y = f(y = f(y = f(y = f(y = u(y = u(y = u(y = u(y, h = u(h, p = u(p, m = u(m, y, h, p, n[o], 7, -680876936), y, h, n[o + 1], 12, -389564586), m, y, n[o + 2], 17, 606105819), p, m, n[o + 3], 22, -1044525330), h = u(h, p = u(p, m = u(m, y, h, p, n[o + 4], 7, -176418897), y, h, n[o + 5], 12, 1200080426), m, y, n[o + 6], 17, -1473231341), p, m, n[o + 7], 22, -45705983), h = u(h, p = u(p, m = u(m, y, h, p, n[o + 8], 7, 1770035416), y, h, n[o + 9], 12, -1958414417), m, y, n[o + 10], 17, -42063), p, m, n[o + 11], 22, -1990404162), h = u(h, p = u(p, m = u(m, y, h, p, n[o + 12], 7, 1804603682), y, h, n[o + 13], 12, -40341101), m, y, n[o + 14], 17, -1502002290), p, m, n[o + 15], 22, 1236535329), h = f(h, p = f(p, m = f(m, y, h, p, n[o + 1], 5, -165796510), y, h, n[o + 6], 9, -1069501632), m, y, n[o + 11], 14, 643717713), p, m, n[o], 20, -373897302), h = f(h, p = f(p, m = f(m, y, h, p, n[o + 5], 5, -701558691), y, h, n[o + 10], 9, 38016083), m, y, n[o + 15], 14, -660478335), p, m, n[o + 4], 20, -405537848), h = f(h, p = f(p, m = f(m, y, h, p, n[o + 9], 5, 568446438), y, h, n[o + 14], 9, -1019803690), m, y, n[o + 3], 14, -187363961), p, m, n[o + 8], 20, 1163531501), h = f(h, p = f(p, m = f(m, y, h, p, n[o + 13], 5, -1444681467), y, h, n[o + 2], 9, -51403784), m, y, n[o + 7], 14, 1735328473), p, m, n[o + 12], 20, -1926607734), h = c(h, p = c(p, m = c(m, y, h, p, n[o + 5], 4, -378558), y, h, n[o + 8], 11, -2022574463), m, y, n[o + 11], 16, 1839030562), p, m, n[o + 14], 23, -35309556), h = c(h, p = c(p, m = c(m, y, h, p, n[o + 1], 4, -1530992060), y, h, n[o + 4], 11, 1272893353), m, y, n[o + 7], 16, -155497632), p, m, n[o + 10], 23, -1094730640), h = c(h, p = c(p, m = c(m, y, h, p, n[o + 13], 4, 681279174), y, h, n[o], 11, -358537222), m, y, n[o + 3], 16, -722521979), p, m, n[o + 6], 23, 76029189), h = c(h, p = c(p, m = c(m, y, h, p, n[o + 9], 4, -640364487), y, h, n[o + 12], 11, -421815835), m, y, n[o + 15], 16, 530742520), p, m, n[o + 2], 23, -995338651), h = i(h, p = i(p, m = i(m, y, h, p, n[o], 6, -198630844), y, h, n[o + 7], 10, 1126891415), m, y, n[o + 14], 15, -1416354905), p, m, n[o + 5], 21, -57434055), h = i(h, p = i(p, m = i(m, y, h, p, n[o + 12], 6, 1700485571), y, h, n[o + 3], 10, -1894986606), m, y, n[o + 10], 15, -1051523), p, m, n[o + 1], 21, -2054922799), h = i(h, p = i(p, m = i(m, y, h, p, n[o + 8], 6, 1873313359), y, h, n[o + 15], 10, -30611744), m, y, n[o + 6], 15, -1560198380), p, m, n[o + 13], 21, 1309151649), h = i(h, p = i(p, m = i(m, y, h, p, n[o + 4], 6, -145523070), y, h, n[o + 11], 10, -1120210379), m, y, n[o + 2], 15, 718787259), p, m, n[o + 9], 21, -343485551), 
        m = r(m, e), y = r(y, d), h = r(h, l), p = r(p, a);
        return [ m, y, h, p ];
    }
    function l(n) {
        var t, r = "", o = 32 * n.length;
        for (t = 0; t < o; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r;
    }
    function a(n) {
        var t, r = [];
        for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
        var o = 8 * n.length;
        for (t = 0; t < o; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
        return r;
    }
    function m(n) {
        return l(d(a(n), 8 * n.length));
    }
    function y(n, t) {
        var r, o, e = a(n), u = [], f = [];
        for (u[15] = f[15] = void 0, e.length > 16 && (e = d(e, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ e[r], 
        f[r] = 1549556828 ^ e[r];
        return o = d(u.concat(a(t)), 512 + 8 * t.length), l(d(f.concat(o), 640));
    }
    function h(n) {
        var t, r, o = "";
        for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), o += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return o;
    }
    function p(n) {
        return unescape(encodeURIComponent(n));
    }
    function b(n) {
        return m(p(n));
    }
    function g(n) {
        return h(b(n));
    }
    function v(n, t) {
        return y(p(n), p(t));
    }
    function s(n, t) {
        return h(v(n, t));
    }
    function S(n, t, r) {
        return t ? r ? v(t, n) : s(t, n) : r ? b(n) : g(n);
    }
    "function" == typeof define && define.amd ? define("club/weiyun/js/wxweb/common/md5", [], function() {
        return S;
    }) : "object" === ("undefined" == typeof module ? "undefined" : n(module)) && module.exports ? module.exports = S : t.md5 = S;
}(void 0);