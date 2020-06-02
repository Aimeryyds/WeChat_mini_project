function core_md5(d, r) {
    d[r >> 5] |= 128 << r % 32, d[14 + (r + 64 >>> 9 << 4)] = r;
    for (var _ = 1732584193, m = -271733879, n = -1732584194, h = 271733878, t = 0; t < d.length; t += 16) {
        var i = _, f = m, c = n, e = h;
        _ = md5_ff(_, m, n, h, d[t + 0], 7, -680876936), h = md5_ff(h, _, m, n, d[t + 1], 12, -389564586), 
        n = md5_ff(n, h, _, m, d[t + 2], 17, 606105819), m = md5_ff(m, n, h, _, d[t + 3], 22, -1044525330), 
        _ = md5_ff(_, m, n, h, d[t + 4], 7, -176418897), h = md5_ff(h, _, m, n, d[t + 5], 12, 1200080426), 
        n = md5_ff(n, h, _, m, d[t + 6], 17, -1473231341), m = md5_ff(m, n, h, _, d[t + 7], 22, -45705983), 
        _ = md5_ff(_, m, n, h, d[t + 8], 7, 1770035416), h = md5_ff(h, _, m, n, d[t + 9], 12, -1958414417), 
        n = md5_ff(n, h, _, m, d[t + 10], 17, -42063), m = md5_ff(m, n, h, _, d[t + 11], 22, -1990404162), 
        _ = md5_ff(_, m, n, h, d[t + 12], 7, 1804603682), h = md5_ff(h, _, m, n, d[t + 13], 12, -40341101), 
        n = md5_ff(n, h, _, m, d[t + 14], 17, -1502002290), m = md5_ff(m, n, h, _, d[t + 15], 22, 1236535329), 
        _ = md5_gg(_, m, n, h, d[t + 1], 5, -165796510), h = md5_gg(h, _, m, n, d[t + 6], 9, -1069501632), 
        n = md5_gg(n, h, _, m, d[t + 11], 14, 643717713), m = md5_gg(m, n, h, _, d[t + 0], 20, -373897302), 
        _ = md5_gg(_, m, n, h, d[t + 5], 5, -701558691), h = md5_gg(h, _, m, n, d[t + 10], 9, 38016083), 
        n = md5_gg(n, h, _, m, d[t + 15], 14, -660478335), m = md5_gg(m, n, h, _, d[t + 4], 20, -405537848), 
        _ = md5_gg(_, m, n, h, d[t + 9], 5, 568446438), h = md5_gg(h, _, m, n, d[t + 14], 9, -1019803690), 
        n = md5_gg(n, h, _, m, d[t + 3], 14, -187363961), m = md5_gg(m, n, h, _, d[t + 8], 20, 1163531501), 
        _ = md5_gg(_, m, n, h, d[t + 13], 5, -1444681467), h = md5_gg(h, _, m, n, d[t + 2], 9, -51403784), 
        n = md5_gg(n, h, _, m, d[t + 7], 14, 1735328473), m = md5_gg(m, n, h, _, d[t + 12], 20, -1926607734), 
        _ = md5_hh(_, m, n, h, d[t + 5], 4, -378558), h = md5_hh(h, _, m, n, d[t + 8], 11, -2022574463), 
        n = md5_hh(n, h, _, m, d[t + 11], 16, 1839030562), m = md5_hh(m, n, h, _, d[t + 14], 23, -35309556), 
        _ = md5_hh(_, m, n, h, d[t + 1], 4, -1530992060), h = md5_hh(h, _, m, n, d[t + 4], 11, 1272893353), 
        n = md5_hh(n, h, _, m, d[t + 7], 16, -155497632), m = md5_hh(m, n, h, _, d[t + 10], 23, -1094730640), 
        _ = md5_hh(_, m, n, h, d[t + 13], 4, 681279174), h = md5_hh(h, _, m, n, d[t + 0], 11, -358537222), 
        n = md5_hh(n, h, _, m, d[t + 3], 16, -722521979), m = md5_hh(m, n, h, _, d[t + 6], 23, 76029189), 
        _ = md5_hh(_, m, n, h, d[t + 9], 4, -640364487), h = md5_hh(h, _, m, n, d[t + 12], 11, -421815835), 
        n = md5_hh(n, h, _, m, d[t + 15], 16, 530742520), m = md5_hh(m, n, h, _, d[t + 2], 23, -995338651), 
        _ = md5_ii(_, m, n, h, d[t + 0], 6, -198630844), h = md5_ii(h, _, m, n, d[t + 7], 10, 1126891415), 
        n = md5_ii(n, h, _, m, d[t + 14], 15, -1416354905), m = md5_ii(m, n, h, _, d[t + 5], 21, -57434055), 
        _ = md5_ii(_, m, n, h, d[t + 12], 6, 1700485571), h = md5_ii(h, _, m, n, d[t + 3], 10, -1894986606), 
        n = md5_ii(n, h, _, m, d[t + 10], 15, -1051523), m = md5_ii(m, n, h, _, d[t + 1], 21, -2054922799), 
        _ = md5_ii(_, m, n, h, d[t + 8], 6, 1873313359), h = md5_ii(h, _, m, n, d[t + 15], 10, -30611744), 
        n = md5_ii(n, h, _, m, d[t + 6], 15, -1560198380), m = md5_ii(m, n, h, _, d[t + 13], 21, 1309151649), 
        _ = md5_ii(_, m, n, h, d[t + 4], 6, -145523070), h = md5_ii(h, _, m, n, d[t + 11], 10, -1120210379), 
        n = md5_ii(n, h, _, m, d[t + 2], 15, 718787259), m = md5_ii(m, n, h, _, d[t + 9], 21, -343485551), 
        _ = safe_add(_, i), m = safe_add(m, f), n = safe_add(n, c), h = safe_add(h, e);
    }
    return Array(_, m, n, h);
}

function md5_cmn(d, r, _, m, n, h) {
    return safe_add(bit_rol(safe_add(safe_add(r, d), safe_add(m, h)), n), _);
}

function md5_ff(d, r, _, m, n, h, t) {
    return md5_cmn(r & _ | ~r & m, d, r, n, h, t);
}

function md5_gg(d, r, _, m, n, h, t) {
    return md5_cmn(r & m | _ & ~m, d, r, n, h, t);
}

function md5_hh(d, r, _, m, n, h, t) {
    return md5_cmn(r ^ _ ^ m, d, r, n, h, t);
}

function md5_ii(d, r, _, m, n, h, t) {
    return md5_cmn(_ ^ (r | ~m), d, r, n, h, t);
}

function core_hmac_md5(d, r) {
    var _ = str2binl(d);
    _.length > 16 && (_ = core_md5(_, d.length * chrsz));
    for (var m = Array(16), n = Array(16), h = 0; h < 16; h++) m[h] = 909522486 ^ _[h], 
    n[h] = 1549556828 ^ _[h];
    var t = core_md5(m.concat(str2binl(r)), 512 + r.length * chrsz);
    return core_md5(n.concat(t), 640);
}

function safe_add(d, r) {
    var _ = (65535 & d) + (65535 & r);
    return (d >> 16) + (r >> 16) + (_ >> 16) << 16 | 65535 & _;
}

function bit_rol(d, r) {
    return d << r | d >>> 32 - r;
}

function str2binl(d) {
    for (var r = Array(), _ = (1 << chrsz) - 1, m = 0; m < d.length * chrsz; m += chrsz) r[m >> 5] |= (d.charCodeAt(m / chrsz) & _) << m % 32;
    return r;
}

function binl2str(d) {
    for (var r = "", _ = (1 << chrsz) - 1, m = 0; m < 32 * d.length; m += chrsz) r += String.fromCharCode(d[m >> 5] >>> m % 32 & _);
    return r;
}

function binl2hex(d) {
    for (var r = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", _ = "", m = 0; m < 4 * d.length; m++) _ += r.charAt(d[m >> 2] >> m % 4 * 8 + 4 & 15) + r.charAt(d[m >> 2] >> m % 4 * 8 & 15);
    return _;
}

function binl2b64(d) {
    for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _ = "", m = 0; m < 4 * d.length; m += 3) for (var n = (d[m >> 2] >> m % 4 * 8 & 255) << 16 | (d[m + 1 >> 2] >> (m + 1) % 4 * 8 & 255) << 8 | d[m + 2 >> 2] >> (m + 2) % 4 * 8 & 255, h = 0; h < 4; h++) 8 * m + 6 * h > 32 * d.length ? _ += b64pad : _ += r.charAt(n >> 6 * (3 - h) & 63);
    return _;
}

var chrsz = 8, hexcase = 0, b64pad = "";

module.exports = {
    hex_md5: function(d) {
        return binl2hex(core_md5(str2binl(d), d.length * chrsz));
    },
    b64_md5: function(d) {
        return binl2b64(core_md5(str2binl(d), d.length * chrsz));
    },
    str_md5: function(d) {
        return binl2str(core_md5(str2binl(d), d.length * chrsz));
    },
    hex_hmac_md5: function(d, r) {
        return binl2hex(core_hmac_md5(d, r));
    },
    b64_hmac_md5: function(d, r) {
        return binl2b64(core_hmac_md5(d, r));
    },
    str_hmac_md5: function(d, r) {
        return binl2str(core_hmac_md5(d, r));
    }
};