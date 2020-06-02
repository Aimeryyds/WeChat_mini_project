!function(e, t) {
    "object" == typeof exports ? module.exports = exports = t(require("./core.js")) : "function" == typeof define && define.amd ? define([ "./core" ], t) : t(e.CryptoJS);
}(this, function(e) {
    return function() {
        var t = e, o = t.lib, r = o.WordArray, s = o.Hasher, n = t.algo, i = [], a = n.SHA1 = s.extend({
            _doReset: function() {
                this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
            },
            _doProcessBlock: function(e, t) {
                for (var o = this._hash.words, r = o[0], s = o[1], n = o[2], a = o[3], c = o[4], h = 0; h < 80; h++) {
                    if (h < 16) i[h] = 0 | e[t + h]; else {
                        var f = i[h - 3] ^ i[h - 8] ^ i[h - 14] ^ i[h - 16];
                        i[h] = f << 1 | f >>> 31;
                    }
                    var l = (r << 5 | r >>> 27) + c + i[h];
                    l += h < 20 ? 1518500249 + (s & n | ~s & a) : h < 40 ? 1859775393 + (s ^ n ^ a) : h < 60 ? (s & n | s & a | n & a) - 1894007588 : (s ^ n ^ a) - 899497514, 
                    c = a, a = n, n = s << 30 | s >>> 2, s = r, r = l;
                }
                o[0] = o[0] + r | 0, o[1] = o[1] + s | 0, o[2] = o[2] + n | 0, o[3] = o[3] + a | 0, 
                o[4] = o[4] + c | 0;
            },
            _doFinalize: function() {
                var e = this._data, t = e.words, o = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(o / 4294967296), 
                t[15 + (r + 64 >>> 9 << 4)] = o, e.sigBytes = 4 * t.length, this._process(), this._hash;
            },
            clone: function() {
                var e = s.clone.call(this);
                return e._hash = this._hash.clone(), e;
            }
        });
        t.SHA1 = s._createHelper(a), t.HmacSHA1 = s._createHmacHelper(a);
    }(), e.SHA1;
});