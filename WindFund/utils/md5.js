function n(n, r) {
    var t = (65535 & n) + (65535 & r);
    return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
}

function r(n, r) {
    return n << r | n >>> 32 - r;
}

function t(t, e, u, o, c, f) {
    return n(r(n(n(e, t), n(o, f)), c), u);
}

function e(n, r, e, u, o, c, f) {
    return t(r & e | ~r & u, n, r, o, c, f);
}

function u(n, r, e, u, o, c, f) {
    return t(r & u | e & ~u, n, r, o, c, f);
}

function o(n, r, e, u, o, c, f) {
    return t(r ^ e ^ u, n, r, o, c, f);
}

function c(n, r, e, u, o, c, f) {
    return t(e ^ (r | ~u), n, r, o, c, f);
}

function f(r, t) {
    r[t >> 5] |= 128 << t % 32, r[14 + (t + 64 >>> 9 << 4)] = t;
    var f, i, a, h, d, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878;
    for (f = 0; f < r.length; f += 16) i = l, a = g, h = v, d = m, g = c(g = c(g = c(g = c(g = o(g = o(g = o(g = o(g = u(g = u(g = u(g = u(g = e(g = e(g = e(g = e(g, v = e(v, m = e(m, l = e(l, g, v, m, r[f], 7, -680876936), g, v, r[f + 1], 12, -389564586), l, g, r[f + 2], 17, 606105819), m, l, r[f + 3], 22, -1044525330), v = e(v, m = e(m, l = e(l, g, v, m, r[f + 4], 7, -176418897), g, v, r[f + 5], 12, 1200080426), l, g, r[f + 6], 17, -1473231341), m, l, r[f + 7], 22, -45705983), v = e(v, m = e(m, l = e(l, g, v, m, r[f + 8], 7, 1770035416), g, v, r[f + 9], 12, -1958414417), l, g, r[f + 10], 17, -42063), m, l, r[f + 11], 22, -1990404162), v = e(v, m = e(m, l = e(l, g, v, m, r[f + 12], 7, 1804603682), g, v, r[f + 13], 12, -40341101), l, g, r[f + 14], 17, -1502002290), m, l, r[f + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, r[f + 1], 5, -165796510), g, v, r[f + 6], 9, -1069501632), l, g, r[f + 11], 14, 643717713), m, l, r[f], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, r[f + 5], 5, -701558691), g, v, r[f + 10], 9, 38016083), l, g, r[f + 15], 14, -660478335), m, l, r[f + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, r[f + 9], 5, 568446438), g, v, r[f + 14], 9, -1019803690), l, g, r[f + 3], 14, -187363961), m, l, r[f + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, r[f + 13], 5, -1444681467), g, v, r[f + 2], 9, -51403784), l, g, r[f + 7], 14, 1735328473), m, l, r[f + 12], 20, -1926607734), v = o(v, m = o(m, l = o(l, g, v, m, r[f + 5], 4, -378558), g, v, r[f + 8], 11, -2022574463), l, g, r[f + 11], 16, 1839030562), m, l, r[f + 14], 23, -35309556), v = o(v, m = o(m, l = o(l, g, v, m, r[f + 1], 4, -1530992060), g, v, r[f + 4], 11, 1272893353), l, g, r[f + 7], 16, -155497632), m, l, r[f + 10], 23, -1094730640), v = o(v, m = o(m, l = o(l, g, v, m, r[f + 13], 4, 681279174), g, v, r[f], 11, -358537222), l, g, r[f + 3], 16, -722521979), m, l, r[f + 6], 23, 76029189), v = o(v, m = o(m, l = o(l, g, v, m, r[f + 9], 4, -640364487), g, v, r[f + 12], 11, -421815835), l, g, r[f + 15], 16, 530742520), m, l, r[f + 2], 23, -995338651), v = c(v, m = c(m, l = c(l, g, v, m, r[f], 6, -198630844), g, v, r[f + 7], 10, 1126891415), l, g, r[f + 14], 15, -1416354905), m, l, r[f + 5], 21, -57434055), v = c(v, m = c(m, l = c(l, g, v, m, r[f + 12], 6, 1700485571), g, v, r[f + 3], 10, -1894986606), l, g, r[f + 10], 15, -1051523), m, l, r[f + 1], 21, -2054922799), v = c(v, m = c(m, l = c(l, g, v, m, r[f + 8], 6, 1873313359), g, v, r[f + 15], 10, -30611744), l, g, r[f + 6], 15, -1560198380), m, l, r[f + 13], 21, 1309151649), v = c(v, m = c(m, l = c(l, g, v, m, r[f + 4], 6, -145523070), g, v, r[f + 11], 10, -1120210379), l, g, r[f + 2], 15, 718787259), m, l, r[f + 9], 21, -343485551), 
    l = n(l, i), g = n(g, a), v = n(v, h), m = n(m, d);
    return [ l, g, v, m ];
}

function i(n) {
    var r, t = "";
    for (r = 0; r < 32 * n.length; r += 8) t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
    return t;
}

function a(n) {
    var r, t = [];
    for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
    for (r = 0; r < 8 * n.length; r += 8) t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
    return t;
}

function h(n) {
    return i(f(a(n), 8 * n.length));
}

function d(n) {
    var r, t, e = "";
    for (t = 0; t < n.length; t += 1) r = n.charCodeAt(t), e += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r);
    return e;
}

function l(n) {
    return unescape(encodeURIComponent(n));
}

function g(n) {
    return h(l(n));
}

function v(n) {
    return d(g(n));
}

module.exports = {
    md5convert: v,
    md5convert16: function(n) {
        return v(n).slice(8, 24);
    }
};