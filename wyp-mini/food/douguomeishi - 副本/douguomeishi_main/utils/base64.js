var r = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(t) {
        var e, o, h, a, n, d, C, i = "", c = 0;
        for (t = r._utf8_encode(t); c < t.length; ) a = (e = t.charCodeAt(c++)) >> 2, n = (3 & e) << 4 | (o = t.charCodeAt(c++)) >> 4, 
        d = (15 & o) << 2 | (h = t.charCodeAt(c++)) >> 6, C = 63 & h, isNaN(o) ? d = C = 64 : isNaN(h) && (C = 64), 
        i = i + this._keyStr.charAt(a) + this._keyStr.charAt(n) + this._keyStr.charAt(d) + this._keyStr.charAt(C);
        return i;
    },
    decode: function(t) {
        var e, o, h, a, n, d, C = "", i = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < t.length; ) e = this._keyStr.indexOf(t.charAt(i++)) << 2 | (a = this._keyStr.indexOf(t.charAt(i++))) >> 4, 
        o = (15 & a) << 4 | (n = this._keyStr.indexOf(t.charAt(i++))) >> 2, h = (3 & n) << 6 | (d = this._keyStr.indexOf(t.charAt(i++))), 
        C += String.fromCharCode(e), 64 != n && (C += String.fromCharCode(o)), 64 != d && (C += String.fromCharCode(h));
        return C = r._utf8_decode(C);
    },
    _utf8_encode: function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var t = "", e = 0; e < r.length; e++) {
            var o = r.charCodeAt(e);
            o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
            t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
            t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
        }
        return t;
    },
    _utf8_decode: function(r) {
        for (var t = "", e = 0, o = 0, h = 0, a = 0; e < r.length; ) (o = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(o), 
        e++) : o > 191 && o < 224 ? (h = r.charCodeAt(e + 1), t += String.fromCharCode((31 & o) << 6 | 63 & h), 
        e += 2) : (h = r.charCodeAt(e + 1), a = r.charCodeAt(e + 2), t += String.fromCharCode((15 & o) << 12 | (63 & h) << 6 | 63 & a), 
        e += 3);
        return t;
    }
};

module.exports = r;