function r(r) {
    return i(n(a(r), r.length * chrsz));
}

function n(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
    for (var t = 1732584193, h = -271733879, a = -1732584194, i = 271733878, s = 0; s < r.length; s += 16) {
        var A = t, l = h, v = a, z = i;
        h = o(h = o(h = o(h = o(h = c(h = c(h = c(h = c(h = e(h = e(h = e(h = e(h = u(h = u(h = u(h = u(h, a = u(a, i = u(i, t = u(t, h, a, i, r[s + 0], 7, -680876936), h, a, r[s + 1], 12, -389564586), t, h, r[s + 2], 17, 606105819), i, t, r[s + 3], 22, -1044525330), a = u(a, i = u(i, t = u(t, h, a, i, r[s + 4], 7, -176418897), h, a, r[s + 5], 12, 1200080426), t, h, r[s + 6], 17, -1473231341), i, t, r[s + 7], 22, -45705983), a = u(a, i = u(i, t = u(t, h, a, i, r[s + 8], 7, 1770035416), h, a, r[s + 9], 12, -1958414417), t, h, r[s + 10], 17, -42063), i, t, r[s + 11], 22, -1990404162), a = u(a, i = u(i, t = u(t, h, a, i, r[s + 12], 7, 1804603682), h, a, r[s + 13], 12, -40341101), t, h, r[s + 14], 17, -1502002290), i, t, r[s + 15], 22, 1236535329), a = e(a, i = e(i, t = e(t, h, a, i, r[s + 1], 5, -165796510), h, a, r[s + 6], 9, -1069501632), t, h, r[s + 11], 14, 643717713), i, t, r[s + 0], 20, -373897302), a = e(a, i = e(i, t = e(t, h, a, i, r[s + 5], 5, -701558691), h, a, r[s + 10], 9, 38016083), t, h, r[s + 15], 14, -660478335), i, t, r[s + 4], 20, -405537848), a = e(a, i = e(i, t = e(t, h, a, i, r[s + 9], 5, 568446438), h, a, r[s + 14], 9, -1019803690), t, h, r[s + 3], 14, -187363961), i, t, r[s + 8], 20, 1163531501), a = e(a, i = e(i, t = e(t, h, a, i, r[s + 13], 5, -1444681467), h, a, r[s + 2], 9, -51403784), t, h, r[s + 7], 14, 1735328473), i, t, r[s + 12], 20, -1926607734), a = c(a, i = c(i, t = c(t, h, a, i, r[s + 5], 4, -378558), h, a, r[s + 8], 11, -2022574463), t, h, r[s + 11], 16, 1839030562), i, t, r[s + 14], 23, -35309556), a = c(a, i = c(i, t = c(t, h, a, i, r[s + 1], 4, -1530992060), h, a, r[s + 4], 11, 1272893353), t, h, r[s + 7], 16, -155497632), i, t, r[s + 10], 23, -1094730640), a = c(a, i = c(i, t = c(t, h, a, i, r[s + 13], 4, 681279174), h, a, r[s + 0], 11, -358537222), t, h, r[s + 3], 16, -722521979), i, t, r[s + 6], 23, 76029189), a = c(a, i = c(i, t = c(t, h, a, i, r[s + 9], 4, -640364487), h, a, r[s + 12], 11, -421815835), t, h, r[s + 15], 16, 530742520), i, t, r[s + 2], 23, -995338651), a = o(a, i = o(i, t = o(t, h, a, i, r[s + 0], 6, -198630844), h, a, r[s + 7], 10, 1126891415), t, h, r[s + 14], 15, -1416354905), i, t, r[s + 5], 21, -57434055), a = o(a, i = o(i, t = o(t, h, a, i, r[s + 12], 6, 1700485571), h, a, r[s + 3], 10, -1894986606), t, h, r[s + 10], 15, -1051523), i, t, r[s + 1], 21, -2054922799), a = o(a, i = o(i, t = o(t, h, a, i, r[s + 8], 6, 1873313359), h, a, r[s + 15], 10, -30611744), t, h, r[s + 6], 15, -1560198380), i, t, r[s + 13], 21, 1309151649), a = o(a, i = o(i, t = o(t, h, a, i, r[s + 4], 6, -145523070), h, a, r[s + 11], 10, -1120210379), t, h, r[s + 2], 15, 718787259), i, t, r[s + 9], 21, -343485551), 
        t = f(t, A), h = f(h, l), a = f(a, v), i = f(i, z);
    }
    return Array(t, h, a, i);
}

function t(r, n, t, u, e, c) {
    return f(h(f(f(n, r), f(u, c)), e), t);
}

function u(r, n, u, e, c, o, f) {
    return t(n & u | ~n & e, r, n, c, o, f);
}

function e(r, n, u, e, c, o, f) {
    return t(n & e | u & ~e, r, n, c, o, f);
}

function c(r, n, u, e, c, o, f) {
    return t(n ^ u ^ e, r, n, c, o, f);
}

function o(r, n, u, e, c, o, f) {
    return t(u ^ (n | ~e), r, n, c, o, f);
}

function f(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function h(r, n) {
    return r << n | r >>> 32 - n;
}

function a(r) {
    for (var n = Array(), t = (1 << chrsz) - 1, u = 0; u < r.length * chrsz; u += chrsz) n[u >> 5] |= (r.charCodeAt(u / chrsz) & t) << u % 32;
    return n;
}

function i(r) {
    for (var n = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> u % 4 * 8 + 4 & 15) + n.charAt(r[u >> 2] >> u % 4 * 8 & 15);
    return t;
}

module.exports = {
    hex_md5: r
};