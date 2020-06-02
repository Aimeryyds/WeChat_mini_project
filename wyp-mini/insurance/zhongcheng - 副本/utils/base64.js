function r(r) {
    return e.encode(r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = new function() {
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(t) {
        var o, n, c, a, d, h, i, C = "", f = 0;
        for (t = e(t); f < t.length; ) a = (o = t.charCodeAt(f++)) >> 2, d = (3 & o) << 4 | (n = t.charCodeAt(f++)) >> 4, 
        h = (15 & n) << 2 | (c = t.charCodeAt(f++)) >> 6, i = 63 & c, isNaN(n) ? h = i = 64 : isNaN(c) && (i = 64), 
        C = C + r.charAt(a) + r.charAt(d) + r.charAt(h) + r.charAt(i);
        return C;
    }, this.decode = function(e) {
        var o, n, c, a, d, h, i = "", C = 0;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); C < e.length; ) o = r.indexOf(e.charAt(C++)) << 2 | (a = r.indexOf(e.charAt(C++))) >> 4, 
        n = (15 & a) << 4 | (d = r.indexOf(e.charAt(C++))) >> 2, c = (3 & d) << 6 | (h = r.indexOf(e.charAt(C++))), 
        i += String.fromCharCode(o), 64 != d && (i += String.fromCharCode(n)), 64 != h && (i += String.fromCharCode(c));
        return i = t(i);
    };
    var e = function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var e = "", t = 0; t < r.length; t++) {
            var o = r.charCodeAt(t);
            o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192), 
            e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224), 
            e += String.fromCharCode(o >> 6 & 63 | 128), e += String.fromCharCode(63 & o | 128));
        }
        return e;
    }, t = function(r) {
        for (var e = "", t = 0, o = c1 = c2 = 0; t < r.length; ) (o = r.charCodeAt(t)) < 128 ? (e += String.fromCharCode(o), 
        t++) : o > 191 && o < 224 ? (c2 = r.charCodeAt(t + 1), e += String.fromCharCode((31 & o) << 6 | 63 & c2), 
        t += 2) : (c2 = r.charCodeAt(t + 1), c3 = r.charCodeAt(t + 2), e += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), 
        t += 3);
        return e;
    };
}();

exports.encode = r, exports.decode = function(r) {
    return e.decode(r);
}, exports.safeEncode = function(e) {
    return r(e).replace(/[\+=\/]/g, function(r) {
        switch (r) {
          case "+":
            return ".";

          case "=":
            return "-";

          case "/":
            return "_";
        }
    });
};