var crc32 = function crc32(id) {
    var T = function() {
        var c = 0, table = new Array(256);
        for (var n = 0; n !== 256; ++n) {
            c = n;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            table[n] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
    }();
    var crc32_str = function crc32_str(str) {
        var C = -1;
        for (var i = 0, L = str.length, c, d; i < L; ) {
            c = str.charCodeAt(i++);
            if (c < 128) {
                C = C >>> 8 ^ T[(C ^ c) & 255];
            } else if (c < 2048) {
                C = C >>> 8 ^ T[(C ^ (192 | c >> 6 & 31)) & 255];
                C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 255];
            } else if (c >= 55296 && c < 57344) {
                c = (c & 1023) + 64;
                d = str.charCodeAt(i++) & 1023;
                C = C >>> 8 ^ T[(C ^ (240 | c >> 8 & 7)) & 255];
                C = C >>> 8 ^ T[(C ^ (128 | c >> 2 & 63)) & 255];
                C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
                C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 255];
            } else {
                C = C >>> 8 ^ T[(C ^ (224 | c >> 12 & 15)) & 255];
                C = C >>> 8 ^ T[(C ^ (128 | c >> 6 & 63)) & 255];
                C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 255];
            }
        }
        return C ^ -1;
    };
    var r = "/video/urls/v/1/toutiao/mp4/" + id + "?r=" + Math.random().toString(10).substring(2);
    if (r[0] !== "/") {
        r = "/" + r;
    }
    var s = crc32_str(r) >>> 0;
    // console.log(r, s);
        return "https://i.snssdk.com" + r + "&s=" + s;
};

module.exports = crc32;