!function(n) {
    function r(n, r) {
        var t = (65535 & n) + (65535 & r);
        return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    function t(n, t, e, o, u, c) {
        return r((f = r(r(t, n), r(o, c))) << (i = u) | f >>> 32 - i, e);
        var f, i;
    }
    function e(n, r, e, o, u, c, f) {
        return t(r & e | ~r & o, n, r, u, c, f);
    }
    function o(n, r, e, o, u, c, f) {
        return t(r & o | e & ~o, n, r, u, c, f);
    }
    function u(n, r, e, o, u, c, f) {
        return t(r ^ e ^ o, n, r, u, c, f);
    }
    function c(n, r, e, o, u, c, f) {
        return t(e ^ (r | ~o), n, r, u, c, f);
    }
    function f(n, t) {
        var f, i, a, h, v;
        n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
        var g = 1732584193, l = -271733879, d = -1732584194, C = 271733878;
        for (f = 0; f < n.length; f += 16) l = c(l = c(l = c(l = c(l = u(l = u(l = u(l = u(l = o(l = o(l = o(l = o(l = e(l = e(l = e(l = e(a = l, d = e(h = d, C = e(v = C, g = e(i = g, l, d, C, n[f], 7, -680876936), l, d, n[f + 1], 12, -389564586), g, l, n[f + 2], 17, 606105819), C, g, n[f + 3], 22, -1044525330), d = e(d, C = e(C, g = e(g, l, d, C, n[f + 4], 7, -176418897), l, d, n[f + 5], 12, 1200080426), g, l, n[f + 6], 17, -1473231341), C, g, n[f + 7], 22, -45705983), d = e(d, C = e(C, g = e(g, l, d, C, n[f + 8], 7, 1770035416), l, d, n[f + 9], 12, -1958414417), g, l, n[f + 10], 17, -42063), C, g, n[f + 11], 22, -1990404162), d = e(d, C = e(C, g = e(g, l, d, C, n[f + 12], 7, 1804603682), l, d, n[f + 13], 12, -40341101), g, l, n[f + 14], 17, -1502002290), C, g, n[f + 15], 22, 1236535329), d = o(d, C = o(C, g = o(g, l, d, C, n[f + 1], 5, -165796510), l, d, n[f + 6], 9, -1069501632), g, l, n[f + 11], 14, 643717713), C, g, n[f], 20, -373897302), d = o(d, C = o(C, g = o(g, l, d, C, n[f + 5], 5, -701558691), l, d, n[f + 10], 9, 38016083), g, l, n[f + 15], 14, -660478335), C, g, n[f + 4], 20, -405537848), d = o(d, C = o(C, g = o(g, l, d, C, n[f + 9], 5, 568446438), l, d, n[f + 14], 9, -1019803690), g, l, n[f + 3], 14, -187363961), C, g, n[f + 8], 20, 1163531501), d = o(d, C = o(C, g = o(g, l, d, C, n[f + 13], 5, -1444681467), l, d, n[f + 2], 9, -51403784), g, l, n[f + 7], 14, 1735328473), C, g, n[f + 12], 20, -1926607734), d = u(d, C = u(C, g = u(g, l, d, C, n[f + 5], 4, -378558), l, d, n[f + 8], 11, -2022574463), g, l, n[f + 11], 16, 1839030562), C, g, n[f + 14], 23, -35309556), d = u(d, C = u(C, g = u(g, l, d, C, n[f + 1], 4, -1530992060), l, d, n[f + 4], 11, 1272893353), g, l, n[f + 7], 16, -155497632), C, g, n[f + 10], 23, -1094730640), d = u(d, C = u(C, g = u(g, l, d, C, n[f + 13], 4, 681279174), l, d, n[f], 11, -358537222), g, l, n[f + 3], 16, -722521979), C, g, n[f + 6], 23, 76029189), d = u(d, C = u(C, g = u(g, l, d, C, n[f + 9], 4, -640364487), l, d, n[f + 12], 11, -421815835), g, l, n[f + 15], 16, 530742520), C, g, n[f + 2], 23, -995338651), d = c(d, C = c(C, g = c(g, l, d, C, n[f], 6, -198630844), l, d, n[f + 7], 10, 1126891415), g, l, n[f + 14], 15, -1416354905), C, g, n[f + 5], 21, -57434055), d = c(d, C = c(C, g = c(g, l, d, C, n[f + 12], 6, 1700485571), l, d, n[f + 3], 10, -1894986606), g, l, n[f + 10], 15, -1051523), C, g, n[f + 1], 21, -2054922799), d = c(d, C = c(C, g = c(g, l, d, C, n[f + 8], 6, 1873313359), l, d, n[f + 15], 10, -30611744), g, l, n[f + 6], 15, -1560198380), C, g, n[f + 13], 21, 1309151649), d = c(d, C = c(C, g = c(g, l, d, C, n[f + 4], 6, -145523070), l, d, n[f + 11], 10, -1120210379), g, l, n[f + 2], 15, 718787259), C, g, n[f + 9], 21, -343485551), 
        g = r(g, i), l = r(l, a), d = r(d, h), C = r(C, v);
        return [ g, l, d, C ];
    }
    function i(n) {
        var r, t = "", e = 32 * n.length;
        for (r = 0; r < e; r += 8) t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
        return t;
    }
    function a(n) {
        var r, t = [];
        for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
        var e = 8 * n.length;
        for (r = 0; r < e; r += 8) t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
        return t;
    }
    function h(n) {
        var r, t, e = "0123456789abcdef", o = "";
        for (t = 0; t < n.length; t += 1) r = n.charCodeAt(t), o += e.charAt(r >>> 4 & 15) + e.charAt(15 & r);
        return o;
    }
    function v(n) {
        return unescape(encodeURIComponent(n));
    }
    function g(n) {
        return i(f(a(r = v(n)), 8 * r.length));
        var r;
    }
    function l(n, r) {
        return function(n, r) {
            var t, e, o = a(n), u = [], c = [];
            for (u[15] = c[15] = void 0, 16 < o.length && (o = f(o, 8 * n.length)), t = 0; t < 16; t += 1) u[t] = 909522486 ^ o[t], 
            c[t] = 1549556828 ^ o[t];
            return e = f(u.concat(a(r)), 512 + 8 * r.length), i(f(c.concat(e), 640));
        }(v(n), v(r));
    }
    module.exports = function(n, r, t) {
        return r ? t ? l(r, n) : h(l(r, n)) : t ? g(n) : h(g(n));
    };
}();