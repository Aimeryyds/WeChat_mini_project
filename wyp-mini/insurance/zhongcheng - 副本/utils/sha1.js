var t = t || function(t, n) {
    var i = {}, e = i.lib = {}, r = function() {}, s = e.Base = {
        extend: function(t) {
            r.prototype = this;
            var n = new r();
            return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                n.$super.init.apply(this, arguments);
            }), n.init.prototype = n, n.$super = this, n;
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments), t;
        },
        init: function() {},
        mixIn: function(t) {
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
            t.hasOwnProperty("toString") && (this.toString = t.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, o = e.WordArray = s.extend({
        init: function(t, n) {
            t = this.words = t || [], this.sigBytes = void 0 != n ? n : 4 * t.length;
        },
        toString: function(t) {
            return (t || c).stringify(this);
        },
        concat: function(t) {
            var n = this.words, i = t.words, e = this.sigBytes;
            if (t = t.sigBytes, this.clamp(), e % 4) for (var r = 0; r < t; r++) n[e + r >>> 2] |= (i[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (e + r) % 4 * 8; else if (65535 < i.length) for (r = 0; r < t; r += 4) n[e + r >>> 2] = i[r >>> 2]; else n.push.apply(n, i);
            return this.sigBytes += t, this;
        },
        clamp: function() {
            var n = this.words, i = this.sigBytes;
            n[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, n.length = t.ceil(i / 4);
        },
        clone: function() {
            var t = s.clone.call(this);
            return t.words = this.words.slice(0), t;
        },
        random: function(n) {
            for (var i = [], e = 0; e < n; e += 4) i.push(4294967296 * t.random() | 0);
            return new o.init(i, n);
        }
    }), a = i.enc = {}, c = a.Hex = {
        stringify: function(t) {
            var n = t.words;
            t = t.sigBytes;
            for (var i = [], e = 0; e < t; e++) {
                var r = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                i.push((r >>> 4).toString(16)), i.push((15 & r).toString(16));
            }
            return i.join("");
        },
        parse: function(t) {
            for (var n = t.length, i = [], e = 0; e < n; e += 2) i[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
            return new o.init(i, n / 2);
        }
    }, h = a.Latin1 = {
        stringify: function(t) {
            var n = t.words;
            t = t.sigBytes;
            for (var i = [], e = 0; e < t; e++) i.push(String.fromCharCode(n[e >>> 2] >>> 24 - e % 4 * 8 & 255));
            return i.join("");
        },
        parse: function(t) {
            for (var n = t.length, i = [], e = 0; e < n; e++) i[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
            return new o.init(i, n);
        }
    }, u = a.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(h.stringify(t)));
            } catch (t) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(t) {
            return h.parse(unescape(encodeURIComponent(t)));
        }
    }, f = e.BufferedBlockAlgorithm = s.extend({
        reset: function() {
            this._data = new o.init(), this._nDataBytes = 0;
        },
        _append: function(t) {
            "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
        },
        _process: function(n) {
            var i = this._data, e = i.words, r = i.sigBytes, s = this.blockSize, a = r / (4 * s);
            if (n = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s, r = t.min(4 * n, r), 
            n) {
                for (var c = 0; c < n; c += s) this._doProcessBlock(e, c);
                c = e.splice(0, n), i.sigBytes -= r;
            }
            return new o.init(c, r);
        },
        clone: function() {
            var t = s.clone.call(this);
            return t._data = this._data.clone(), t;
        },
        _minBufferSize: 0
    });
    e.Hasher = f.extend({
        cfg: s.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t), this.reset();
        },
        reset: function() {
            f.reset.call(this), this._doReset();
        },
        update: function(t) {
            return this._append(t), this._process(), this;
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(n, i) {
                return new t.init(i).finalize(n);
            };
        },
        _createHmacHelper: function(t) {
            return function(n, i) {
                return new l.HMAC.init(t, i).finalize(n);
            };
        }
    });
    var l = i.algo = {};
    return i;
}(Math);

!function() {
    var n = t, i = (s = n.lib).WordArray, e = s.Hasher, r = [], s = n.algo.SHA1 = e.extend({
        _doReset: function() {
            this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(t, n) {
            for (var i = this._hash.words, e = i[0], s = i[1], o = i[2], a = i[3], c = i[4], h = 0; 80 > h; h++) {
                if (16 > h) r[h] = 0 | t[n + h]; else {
                    var u = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
                    r[h] = u << 1 | u >>> 31;
                }
                u = (e << 5 | e >>> 27) + c + r[h], u = 20 > h ? u + (1518500249 + (s & o | ~s & a)) : 40 > h ? u + (1859775393 + (s ^ o ^ a)) : 60 > h ? u + ((s & o | s & a | o & a) - 1894007588) : u + ((s ^ o ^ a) - 899497514), 
                c = a, a = o, o = s << 30 | s >>> 2, s = e, e = u;
            }
            i[0] = i[0] + e | 0, i[1] = i[1] + s | 0, i[2] = i[2] + o | 0, i[3] = i[3] + a | 0, 
            i[4] = i[4] + c | 0;
        },
        _doFinalize: function() {
            var t = this._data, n = t.words, i = 8 * this._nDataBytes, e = 8 * t.sigBytes;
            return n[e >>> 5] |= 128 << 24 - e % 32, n[14 + (e + 64 >>> 9 << 4)] = Math.floor(i / 4294967296), 
            n[15 + (e + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * n.length, this._process(), this._hash;
        },
        clone: function() {
            var t = e.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    n.SHA1 = e._createHelper(s), n.HmacSHA1 = e._createHmacHelper(s);
}(), function() {
    var n = t, i = n.enc.Utf8;
    n.algo.HMAC = n.lib.Base.extend({
        init: function(t, n) {
            t = this._hasher = new t.init(), "string" == typeof n && (n = i.parse(n));
            var e = t.blockSize, r = 4 * e;
            n.sigBytes > r && (n = t.finalize(n)), n.clamp();
            for (var s = this._oKey = n.clone(), o = this._iKey = n.clone(), a = s.words, c = o.words, h = 0; h < e; h++) a[h] ^= 1549556828, 
            c[h] ^= 909522486;
            s.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function() {
            var t = this._hasher;
            t.reset(), t.update(this._iKey);
        },
        update: function(t) {
            return this._hasher.update(t), this;
        },
        finalize: function(t) {
            var n = this._hasher;
            return t = n.finalize(t), n.reset(), n.finalize(this._oKey.clone().concat(t));
        }
    });
}(), module.exports = t;