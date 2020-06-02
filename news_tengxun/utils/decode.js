function r(r) {
    for (var t = "", e = 0, a = 0, o = 0, h = 0; e < r.length; ) (a = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(a), 
    e++) : a > 191 && a < 224 ? (o = r.charCodeAt(e + 1), t += String.fromCharCode((31 & a) << 6 | 63 & o), 
    e += 2) : (o = r.charCodeAt(e + 1), h = r.charCodeAt(e + 2), t += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & h), 
    e += 3);
    return t;
}

exports.base64_encode = function(r) {
    for (var t, e, a, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = 0, c = r.length, n = ""; h < c; ) {
        if (t = 255 & r.charCodeAt(h++), h == c) {
            n += o.charAt(t >> 2), n += o.charAt((3 & t) << 4), n += "==";
            break;
        }
        if (e = r.charCodeAt(h++), h == c) {
            n += o.charAt(t >> 2), n += o.charAt((3 & t) << 4 | (240 & e) >> 4), n += o.charAt((15 & e) << 2), 
            n += "=";
            break;
        }
        a = r.charCodeAt(h++), n += o.charAt(t >> 2), n += o.charAt((3 & t) << 4 | (240 & e) >> 4), 
        n += o.charAt((15 & e) << 2 | (192 & a) >> 6), n += o.charAt(63 & a);
    }
    return n;
}, exports.base64_decode = function(t) {
    var e, a, o, h, c, n, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", A = "", f = 0;
    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); f < t.length; ) e = d.indexOf(t.charAt(f++)) << 2 | (h = d.indexOf(t.charAt(f++))) >> 4, 
    a = (15 & h) << 4 | (c = d.indexOf(t.charAt(f++))) >> 2, o = (3 & c) << 6 | (n = d.indexOf(t.charAt(f++))), 
    A += String.fromCharCode(e), 64 != c && (A += String.fromCharCode(a)), 64 != n && (A += String.fromCharCode(o));
    return r(A);
}, exports.utf8_decode = r;