module.exports = {
    base64_encode: function(r) {
        for (var e, a, t, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, c = r.length, f = ""; h < c; ) {
            if (e = 255 & r.charCodeAt(h++), h == c) {
                f += o.charAt(e >> 2), f += o.charAt((3 & e) << 4), f += "==";
                break;
            }
            if (a = r.charCodeAt(h++), h == c) {
                f += o.charAt(e >> 2), f += o.charAt((3 & e) << 4 | (240 & a) >> 4), f += o.charAt((15 & a) << 2), 
                f += "=";
                break;
            }
            t = r.charCodeAt(h++), f += o.charAt(e >> 2), f += o.charAt((3 & e) << 4 | (240 & a) >> 4), 
            f += o.charAt((15 & a) << 2 | (192 & t) >> 6), f += o.charAt(63 & t);
        }
        return f;
    },
    base64_decode: function(r) {
        for (var e, a, t, o, h = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1), c = 0, f = r.length, A = ""; c < f; ) {
            for (;e = h[255 & r.charCodeAt(c++)], c < f && -1 == e; ) ;
            if (-1 == e) break;
            for (;a = h[255 & r.charCodeAt(c++)], c < f && -1 == a; ) ;
            if (-1 == a) break;
            A += String.fromCharCode(e << 2 | (48 & a) >> 4);
            do {
                if (61 == (t = 255 & r.charCodeAt(c++))) return A;
                t = h[t];
            } while (c < f && -1 == t);
            if (-1 == t) break;
            A += String.fromCharCode((15 & a) << 4 | (60 & t) >> 2);
            do {
                if (61 == (o = 255 & r.charCodeAt(c++))) return A;
                o = h[o];
            } while (c < f && -1 == o);
            if (-1 == o) break;
            A += String.fromCharCode((3 & t) << 6 | o);
        }
        return A;
    }
};