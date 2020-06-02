function hex2b64(t) {
    var e = void 0, i = void 0, n = "";
    for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), 
    n += b64map.charAt(i >> 6) + b64map.charAt(63 & i);
    if (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), n += b64map.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), 
    n += b64map.charAt(i >> 2) + b64map.charAt((3 & i) << 4)), b64pad) for (;(3 & n.length) > 0; ) n += b64pad;
    return n;
}

function b64tohex(t) {
    var e = "", i = void 0, n = 0, r = void 0, s = void 0;
    for (i = 0; i < t.length && t.charAt(i) != b64pad; ++i) (s = b64map.indexOf(t.charAt(i))) < 0 || (0 == n ? (e += int2char(s >> 2), 
    r = 3 & s, n = 1) : 1 == n ? (e += int2char(r << 2 | s >> 4), r = 15 & s, n = 2) : 2 == n ? (e += int2char(r), 
    e += int2char(s >> 2), r = 3 & s, n = 3) : (e += int2char(r << 2 | s >> 4), e += int2char(15 & s), 
    n = 0));
    return 1 == n && (e += int2char(r << 2)), e;
}

function b64toBA(t) {
    var e = b64tohex(t), i = void 0, n = new Array();
    for (i = 0; 2 * i < e.length; ++i) n[i] = parseInt(e.substring(2 * i, 2 * i + 2), 16);
    return n;
}

function BigInteger(t, e, i) {
    null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
}

function nbi() {
    return new BigInteger(null);
}

function am1(t, e, i, n, r, s) {
    for (;--s >= 0; ) {
        var a = e * this[t++] + i[n] + r;
        r = Math.floor(a / 67108864), i[n++] = 67108863 & a;
    }
    return r;
}

function am2(t, e, i, n, r, s) {
    for (var a = 32767 & e, o = e >> 15; --s >= 0; ) {
        var h = 32767 & this[t], u = this[t++] >> 15, c = o * h + u * a;
        h = a * h + ((32767 & c) << 15) + i[n] + (1073741823 & r), r = (h >>> 30) + (c >>> 15) + o * u + (r >>> 30), 
        i[n++] = 1073741823 & h;
    }
    return r;
}

function am3(t, e, i, n, r, s) {
    for (var a = 16383 & e, o = e >> 14; --s >= 0; ) {
        var h = 16383 & this[t], u = this[t++] >> 14, c = o * h + u * a;
        h = a * h + ((16383 & c) << 14) + i[n] + r, r = (h >> 28) + (c >> 14) + o * u, i[n++] = 268435455 & h;
    }
    return r;
}

function int2char(t) {
    return BI_RM.charAt(t);
}

function intAt(t, e) {
    var i = BI_RC[t.charCodeAt(e)];
    return null == i ? -1 : i;
}

function bnpCopyTo(t) {
    for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
    t.t = this.t, t.s = this.s;
}

function bnpFromInt(t) {
    this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
}

function nbv(t) {
    var e = nbi();
    return e.fromInt(t), e;
}

function bnpFromString(t, e) {
    var i = void 0;
    if (16 == e) i = 4; else if (8 == e) i = 3; else if (256 == e) i = 8; else if (2 == e) i = 1; else if (32 == e) i = 5; else {
        if (4 != e) return void this.fromRadix(t, e);
        i = 2;
    }
    this.t = 0, this.s = 0;
    for (var n = t.length, r = !1, s = 0; --n >= 0; ) {
        var a = 8 == i ? 255 & t[n] : intAt(t, n);
        a < 0 ? "-" == t.charAt(n) && (r = !0) : (r = !1, 0 == s ? this[this.t++] = a : s + i > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, 
        this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += i) >= this.DB && (s -= this.DB));
    }
    8 == i && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
    this.clamp(), r && BigInteger.ZERO.subTo(this, this);
}

function bnpClamp() {
    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
}

function bnToString(t) {
    if (this.s < 0) return "-" + this.negate().toString(t);
    var e = void 0;
    if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
        if (4 != t) return this.toRadix(t);
        e = 2;
    }
    var i = (1 << e) - 1, n = void 0, r = !1, s = "", a = this.t, o = this.DB - a * this.DB % e;
    if (a-- > 0) for (o < this.DB && (n = this[a] >> o) > 0 && (r = !0, s = int2char(n)); a >= 0; ) o < e ? (n = (this[a] & (1 << o) - 1) << e - o, 
    n |= this[--a] >> (o += this.DB - e)) : (n = this[a] >> (o -= e) & i, o <= 0 && (o += this.DB, 
    --a)), n > 0 && (r = !0), r && (s += int2char(n));
    return r ? s : "0";
}

function bnNegate() {
    var t = nbi();
    return BigInteger.ZERO.subTo(this, t), t;
}

function bnAbs() {
    return this.s < 0 ? this.negate() : this;
}

function bnCompareTo(t) {
    var e = this.s - t.s;
    if (0 != e) return e;
    var i = this.t;
    if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
    for (;--i >= 0; ) if (0 != (e = this[i] - t[i])) return e;
    return 0;
}

function nbits(t) {
    var e = 1, i = void 0;
    return 0 != (i = t >>> 16) && (t = i, e += 16), 0 != (i = t >> 8) && (t = i, e += 8), 
    0 != (i = t >> 4) && (t = i, e += 4), 0 != (i = t >> 2) && (t = i, e += 2), 0 != (i = t >> 1) && (t = i, 
    e += 1), e;
}

function bnBitLength() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}

function bnpDLShiftTo(t, e) {
    var i = void 0;
    for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
    for (i = t - 1; i >= 0; --i) e[i] = 0;
    e.t = this.t + t, e.s = this.s;
}

function bnpDRShiftTo(t, e) {
    for (var i = t; i < this.t; ++i) e[i - t] = this[i];
    e.t = Math.max(this.t - t, 0), e.s = this.s;
}

function bnpLShiftTo(t, e) {
    var i = t % this.DB, n = this.DB - i, r = (1 << n) - 1, s = Math.floor(t / this.DB), a = this.s << i & this.DM, o = void 0;
    for (o = this.t - 1; o >= 0; --o) e[o + s + 1] = this[o] >> n | a, a = (this[o] & r) << i;
    for (o = s - 1; o >= 0; --o) e[o] = 0;
    e[s] = a, e.t = this.t + s + 1, e.s = this.s, e.clamp();
}

function bnpRShiftTo(t, e) {
    e.s = this.s;
    var i = Math.floor(t / this.DB);
    if (i >= this.t) return void (e.t = 0);
    var n = t % this.DB, r = this.DB - n, s = (1 << n) - 1;
    e[0] = this[i] >> n;
    for (var a = i + 1; a < this.t; ++a) e[a - i - 1] |= (this[a] & s) << r, e[a - i] = this[a] >> n;
    n > 0 && (e[this.t - i - 1] |= (this.s & s) << r), e.t = this.t - i, e.clamp();
}

function bnpSubTo(t, e) {
    for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r; ) n += this[i] - t[i], 
    e[i++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
        for (n -= t.s; i < this.t; ) n += this[i], e[i++] = n & this.DM, n >>= this.DB;
        n += this.s;
    } else {
        for (n += this.s; i < t.t; ) n -= t[i], e[i++] = n & this.DM, n >>= this.DB;
        n -= t.s;
    }
    e.s = n < 0 ? -1 : 0, n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n), e.t = i, 
    e.clamp();
}

function bnpMultiplyTo(t, e) {
    var i = this.abs(), n = t.abs(), r = i.t;
    for (e.t = r + n.t; --r >= 0; ) e[r] = 0;
    for (r = 0; r < n.t; ++r) e[r + i.t] = i.am(0, n[r], e, r, 0, i.t);
    e.s = 0, e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e);
}

function bnpSquareTo(t) {
    for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; ) t[i] = 0;
    for (i = 0; i < e.t - 1; ++i) {
        var n = e.am(i, e[i], t, 2 * i, 0, 1);
        (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
        t[i + e.t + 1] = 1);
    }
    t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
}

function bnpDivRemTo(t, e, i) {
    var n = t.abs();
    if (!(n.t <= 0)) {
        var r = this.abs();
        if (r.t < n.t) return null != e && e.fromInt(0), void (null != i && this.copyTo(i));
        null == i && (i = nbi());
        var s = nbi(), a = this.s, o = t.s, h = this.DB - nbits(n[n.t - 1]);
        h > 0 ? (n.lShiftTo(h, s), r.lShiftTo(h, i)) : (n.copyTo(s), r.copyTo(i));
        var u = s.t, c = s[u - 1];
        if (0 != c) {
            var l = c * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0), g = this.FV / l, d = (1 << this.F1) / l, f = 1 << this.F2, p = i.t, y = p - u, S = null == e ? nbi() : e;
            for (s.dlShiftTo(y, S), i.compareTo(S) >= 0 && (i[i.t++] = 1, i.subTo(S, i)), BigInteger.ONE.dlShiftTo(u, S), 
            S.subTo(s, s); s.t < u; ) s[s.t++] = 0;
            for (;--y >= 0; ) {
                var v = i[--p] == c ? this.DM : Math.floor(i[p] * g + (i[p - 1] + f) * d);
                if ((i[p] += s.am(0, v, i, y, 0, u)) < v) for (s.dlShiftTo(y, S), i.subTo(S, i); i[p] < --v; ) i.subTo(S, i);
            }
            null != e && (i.drShiftTo(u, e), a != o && BigInteger.ZERO.subTo(e, e)), i.t = u, 
            i.clamp(), h > 0 && i.rShiftTo(h, i), a < 0 && BigInteger.ZERO.subTo(i, i);
        }
    }
}

function bnMod(t) {
    var e = nbi();
    return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e), 
    e;
}

function Classic(t) {
    this.m = t;
}

function cConvert(t) {
    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
}

function cRevert(t) {
    return t;
}

function cReduce(t) {
    t.divRemTo(this.m, null, t);
}

function cMulTo(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
}

function cSqrTo(t, e) {
    t.squareTo(e), this.reduce(e);
}

function bnpInvDigit() {
    if (this.t < 1) return 0;
    var t = this[0];
    if (0 == (1 & t)) return 0;
    var e = 3 & t;
    return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, 
    e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e;
}

function Montgomery(t) {
    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
    this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
}

function montConvert(t) {
    var e = nbi();
    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e), 
    e;
}

function montRevert(t) {
    var e = nbi();
    return t.copyTo(e), this.reduce(e), e;
}

function montReduce(t) {
    for (;t.t <= this.mt2; ) t[t.t++] = 0;
    for (var e = 0; e < this.m.t; ++e) {
        var i = 32767 & t[e], n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (i = e + this.m.t, t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, 
        t[++i]++;
    }
    t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
}

function montSqrTo(t, e) {
    t.squareTo(e), this.reduce(e);
}

function montMulTo(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
}

function bnpIsEven() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s);
}

function bnpExp(t, e) {
    if (t > 4294967295 || t < 1) return BigInteger.ONE;
    var i = nbi(), n = nbi(), r = e.convert(this), s = nbits(t) - 1;
    for (r.copyTo(i); --s >= 0; ) if (e.sqrTo(i, n), (t & 1 << s) > 0) e.mulTo(n, r, i); else {
        var a = i;
        i = n, n = a;
    }
    return e.revert(i);
}

function bnModPowInt(t, e) {
    var i = void 0;
    return i = t < 256 || e.isEven() ? new Classic(e) : new Montgomery(e), this.exp(t, i);
}

function bnClone() {
    var t = nbi();
    return this.copyTo(t), t;
}

function bnIntValue() {
    if (this.s < 0) {
        if (1 == this.t) return this[0] - this.DV;
        if (0 == this.t) return -1;
    } else {
        if (1 == this.t) return this[0];
        if (0 == this.t) return 0;
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}

function bnByteValue() {
    return 0 == this.t ? this.s : this[0] << 24 >> 24;
}

function bnShortValue() {
    return 0 == this.t ? this.s : this[0] << 16 >> 16;
}

function bnpChunkSize(t) {
    return Math.floor(Math.LN2 * this.DB / Math.log(t));
}

function bnSigNum() {
    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
}

function bnpToRadix(t) {
    if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
    var e = this.chunkSize(t), i = Math.pow(t, e), n = nbv(i), r = nbi(), s = nbi(), a = "";
    for (this.divRemTo(n, r, s); r.signum() > 0; ) a = (i + s.intValue()).toString(t).substr(1) + a, 
    r.divRemTo(n, r, s);
    return s.intValue().toString(t) + a;
}

function bnpFromRadix(t, e) {
    this.fromInt(0), null == e && (e = 10);
    for (var i = this.chunkSize(e), n = Math.pow(e, i), r = !1, s = 0, a = 0, o = 0; o < t.length; ++o) {
        var h = intAt(t, o);
        h < 0 ? "-" == t.charAt(o) && 0 == this.signum() && (r = !0) : (a = e * a + h, ++s >= i && (this.dMultiply(n), 
        this.dAddOffset(a, 0), s = 0, a = 0));
    }
    s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), r && BigInteger.ZERO.subTo(this, this);
}

function bnpFromNumber(t, e, i) {
    if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, i), 
    this.testBit(t - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), op_or, this), 
    this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), 
    this.bitLength() > t && this.subTo(BigInteger.ONE.shiftLeft(t - 1), this); else {
        var n = new Array(), r = 7 & t;
        n.length = 1 + (t >> 3), e.nextBytes(n), r > 0 ? n[0] &= (1 << r) - 1 : n[0] = 0, 
        this.fromString(n, 256);
    }
}

function bnToByteArray() {
    var t = this.t, e = new Array();
    e[0] = this.s;
    var i = this.DB - t * this.DB % 8, n = void 0, r = 0;
    if (t-- > 0) for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[r++] = n | this.s << this.DB - i); t >= 0; ) i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i, 
    n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255, i <= 0 && (i += this.DB, 
    --t)), 0 != (128 & n) && (n |= -256), 0 == r && (128 & this.s) != (128 & n) && ++r, 
    (r > 0 || n != this.s) && (e[r++] = n);
    return e;
}

function bnEquals(t) {
    return 0 == this.compareTo(t);
}

function bnMin(t) {
    return this.compareTo(t) < 0 ? this : t;
}

function bnMax(t) {
    return this.compareTo(t) > 0 ? this : t;
}

function bnpBitwiseTo(t, e, i) {
    var n = void 0, r = void 0, s = Math.min(t.t, this.t);
    for (n = 0; n < s; ++n) i[n] = e(this[n], t[n]);
    if (t.t < this.t) {
        for (r = t.s & this.DM, n = s; n < this.t; ++n) i[n] = e(this[n], r);
        i.t = this.t;
    } else {
        for (r = this.s & this.DM, n = s; n < t.t; ++n) i[n] = e(r, t[n]);
        i.t = t.t;
    }
    i.s = e(this.s, t.s), i.clamp();
}

function op_and(t, e) {
    return t & e;
}

function bnAnd(t) {
    var e = nbi();
    return this.bitwiseTo(t, op_and, e), e;
}

function op_or(t, e) {
    return t | e;
}

function bnOr(t) {
    var e = nbi();
    return this.bitwiseTo(t, op_or, e), e;
}

function op_xor(t, e) {
    return t ^ e;
}

function bnXor(t) {
    var e = nbi();
    return this.bitwiseTo(t, op_xor, e), e;
}

function op_andnot(t, e) {
    return t & ~e;
}

function bnAndNot(t) {
    var e = nbi();
    return this.bitwiseTo(t, op_andnot, e), e;
}

function bnNot() {
    for (var t = nbi(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
    return t.t = this.t, t.s = ~this.s, t;
}

function bnShiftLeft(t) {
    var e = nbi();
    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
}

function bnShiftRight(t) {
    var e = nbi();
    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
}

function lbit(t) {
    if (0 == t) return -1;
    var e = 0;
    return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 
    0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, 
    e;
}

function bnGetLowestSetBit() {
    for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + lbit(this[t]);
    return this.s < 0 ? this.t * this.DB : -1;
}

function cbit(t) {
    for (var e = 0; 0 != t; ) t &= t - 1, ++e;
    return e;
}

function bnBitCount() {
    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += cbit(this[i] ^ e);
    return t;
}

function bnTestBit(t) {
    var e = Math.floor(t / this.DB);
    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
}

function bnpChangeBit(t, e) {
    var i = BigInteger.ONE.shiftLeft(t);
    return this.bitwiseTo(i, e, i), i;
}

function bnSetBit(t) {
    return this.changeBit(t, op_or);
}

function bnClearBit(t) {
    return this.changeBit(t, op_andnot);
}

function bnFlipBit(t) {
    return this.changeBit(t, op_xor);
}

function bnpAddTo(t, e) {
    for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r; ) n += this[i] + t[i], 
    e[i++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
        for (n += t.s; i < this.t; ) n += this[i], e[i++] = n & this.DM, n >>= this.DB;
        n += this.s;
    } else {
        for (n += this.s; i < t.t; ) n += t[i], e[i++] = n & this.DM, n >>= this.DB;
        n += t.s;
    }
    e.s = n < 0 ? -1 : 0, n > 0 ? e[i++] = n : n < -1 && (e[i++] = this.DV + n), e.t = i, 
    e.clamp();
}

function bnAdd(t) {
    var e = nbi();
    return this.addTo(t, e), e;
}

function bnSubtract(t) {
    var e = nbi();
    return this.subTo(t, e), e;
}

function bnMultiply(t) {
    var e = nbi();
    return this.multiplyTo(t, e), e;
}

function bnSquare() {
    var t = nbi();
    return this.squareTo(t), t;
}

function bnDivide(t) {
    var e = nbi();
    return this.divRemTo(t, e, null), e;
}

function bnRemainder(t) {
    var e = nbi();
    return this.divRemTo(t, null, e), e;
}

function bnDivideAndRemainder(t) {
    var e = nbi(), i = nbi();
    return this.divRemTo(t, e, i), new Array(e, i);
}

function bnpDMultiply(t) {
    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
}

function bnpDAddOffset(t, e) {
    if (0 != t) {
        for (;this.t <= e; ) this[this.t++] = 0;
        for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
        ++this[e];
    }
}

function NullExp() {}

function nNop(t) {
    return t;
}

function nMulTo(t, e, i) {
    t.multiplyTo(e, i);
}

function nSqrTo(t, e) {
    t.squareTo(e);
}

function bnPow(t) {
    return this.exp(t, new NullExp());
}

function bnpMultiplyLowerTo(t, e, i) {
    var n = Math.min(this.t + t.t, e);
    for (i.s = 0, i.t = n; n > 0; ) i[--n] = 0;
    var r = void 0;
    for (r = i.t - this.t; n < r; ++n) i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
    for (r = Math.min(t.t, e); n < r; ++n) this.am(0, t[n], i, n, 0, e - n);
    i.clamp();
}

function bnpMultiplyUpperTo(t, e, i) {
    --e;
    var n = i.t = this.t + t.t - e;
    for (i.s = 0; --n >= 0; ) i[n] = 0;
    for (n = Math.max(e - this.t, 0); n < t.t; ++n) i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
    i.clamp(), i.drShiftTo(1, i);
}

function Barrett(t) {
    this.r2 = nbi(), this.q3 = nbi(), BigInteger.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), 
    this.m = t;
}

function barrettConvert(t) {
    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
    if (t.compareTo(this.m) < 0) return t;
    var e = nbi();
    return t.copyTo(e), this.reduce(e), e;
}

function barrettRevert(t) {
    return t;
}

function barrettReduce(t) {
    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
    t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
}

function barrettSqrTo(t, e) {
    t.squareTo(e), this.reduce(e);
}

function barrettMulTo(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
}

function bnModPow(t, e) {
    var i = t.bitLength(), n = void 0, r = nbv(1), s = void 0;
    if (i <= 0) return r;
    n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, s = i < 8 ? new Classic(e) : e.isEven() ? new Barrett(e) : new Montgomery(e);
    var a = new Array(), o = 3, h = n - 1, u = (1 << n) - 1;
    if (a[1] = s.convert(this), n > 1) {
        var c = nbi();
        for (s.sqrTo(a[1], c); o <= u; ) a[o] = nbi(), s.mulTo(c, a[o - 2], a[o]), o += 2;
    }
    var l = t.t - 1, g = void 0, d = !0, f = nbi(), p = void 0;
    for (i = nbits(t[l]) - 1; l >= 0; ) {
        for (i >= h ? g = t[l] >> i - h & u : (g = (t[l] & (1 << i + 1) - 1) << h - i, l > 0 && (g |= t[l - 1] >> this.DB + i - h)), 
        o = n; 0 == (1 & g); ) g >>= 1, --o;
        if ((i -= o) < 0 && (i += this.DB, --l), d) a[g].copyTo(r), d = !1; else {
            for (;o > 1; ) s.sqrTo(r, f), s.sqrTo(f, r), o -= 2;
            o > 0 ? s.sqrTo(r, f) : (p = r, r = f, f = p), s.mulTo(f, a[g], r);
        }
        for (;l >= 0 && 0 == (t[l] & 1 << i); ) s.sqrTo(r, f), p = r, r = f, f = p, --i < 0 && (i = this.DB - 1, 
        --l);
    }
    return s.revert(r);
}

function bnGCD(t) {
    var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
    if (e.compareTo(i) < 0) {
        var n = e;
        e = i, i = n;
    }
    var r = e.getLowestSetBit(), s = i.getLowestSetBit();
    if (s < 0) return e;
    for (r < s && (s = r), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i)); e.signum() > 0; ) (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e), 
    (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), 
    e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
    return s > 0 && i.lShiftTo(s, i), i;
}

function bnpModInt(t) {
    if (t <= 0) return 0;
    var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
    if (this.t > 0) if (0 == e) i = this[0] % t; else for (var n = this.t - 1; n >= 0; --n) i = (e * i + this[n]) % t;
    return i;
}

function bnModInverse(t) {
    var e = t.isEven();
    if (this.isEven() && e || 0 == t.signum()) return BigInteger.ZERO;
    for (var i = t.clone(), n = this.clone(), r = nbv(1), s = nbv(0), a = nbv(0), o = nbv(1); 0 != i.signum(); ) {
        for (;i.isEven(); ) i.rShiftTo(1, i), e ? (r.isEven() && s.isEven() || (r.addTo(this, r), 
        s.subTo(t, s)), r.rShiftTo(1, r)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
        for (;n.isEven(); ) n.rShiftTo(1, n), e ? (a.isEven() && o.isEven() || (a.addTo(this, a), 
        o.subTo(t, o)), a.rShiftTo(1, a)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
        i.compareTo(n) >= 0 ? (i.subTo(n, i), e && r.subTo(a, r), s.subTo(o, s)) : (n.subTo(i, n), 
        e && a.subTo(r, a), o.subTo(s, o));
    }
    return 0 != n.compareTo(BigInteger.ONE) ? BigInteger.ZERO : o.compareTo(t) >= 0 ? o.subtract(t) : o.signum() < 0 ? (o.addTo(t, o), 
    o.signum() < 0 ? o.add(t) : o) : o;
}

function bnIsProbablePrime(t) {
    var e = void 0, i = this.abs();
    if (1 == i.t && i[0] <= lowprimes[lowprimes.length - 1]) {
        for (e = 0; e < lowprimes.length; ++e) if (i[0] == lowprimes[e]) return !0;
        return !1;
    }
    if (i.isEven()) return !1;
    for (e = 1; e < lowprimes.length; ) {
        for (var n = lowprimes[e], r = e + 1; r < lowprimes.length && n < lplim; ) n *= lowprimes[r++];
        for (n = i.modInt(n); e < r; ) if (n % lowprimes[e++] == 0) return !1;
    }
    return i.millerRabin(t);
}

function bnpMillerRabin(t) {
    var e = this.subtract(BigInteger.ONE), i = e.getLowestSetBit();
    if (i <= 0) return !1;
    var n = e.shiftRight(i);
    (t = t + 1 >> 1) > lowprimes.length && (t = lowprimes.length);
    for (var r = nbi(), s = 0; s < t; ++s) {
        r.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var a = r.modPow(n, this);
        if (0 != a.compareTo(BigInteger.ONE) && 0 != a.compareTo(e)) {
            for (var o = 1; o++ < i && 0 != a.compareTo(e); ) if (a = a.modPowInt(2, this), 
            0 == a.compareTo(BigInteger.ONE)) return !1;
            if (0 != a.compareTo(e)) return !1;
        }
    }
    return !0;
}

function Arcfour() {
    this.i = 0, this.j = 0, this.S = new Array();
}

function ARC4init(t) {
    var e = void 0, i = void 0, n = void 0;
    for (e = 0; e < 256; ++e) this.S[e] = e;
    for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, n = this.S[e], 
    this.S[e] = this.S[i], this.S[i] = n;
    this.i = 0, this.j = 0;
}

function ARC4next() {
    var t = void 0;
    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
    this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
}

function prng_newstate() {
    return new Arcfour();
}

function rng_seed_int(t) {
    rng_pool[rng_pptr++] ^= 255 & t, rng_pool[rng_pptr++] ^= t >> 8 & 255, rng_pool[rng_pptr++] ^= t >> 16 & 255, 
    rng_pool[rng_pptr++] ^= t >> 24 & 255, rng_pptr >= rng_psize && (rng_pptr -= rng_psize);
}

function rng_seed_time() {
    rng_seed_int(new Date().getTime());
}

function rng_get_byte() {
    if (null == rng_state) {
        for (rng_seed_time(), rng_state = prng_newstate(), rng_state.init(rng_pool), rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
    }
    return rng_state.next();
}

function rng_get_bytes(t) {
    var e = void 0;
    for (e = 0; e < t.length; ++e) t[e] = rng_get_byte();
}

function SecureRandom() {}

function parseBigInt(t, e) {
    return new BigInteger(t, e);
}

function linebrk(t, e) {
    for (var i = "", n = 0; n + e < t.length; ) i += t.substring(n, n + e) + "\n", n += e;
    return i + t.substring(n, t.length);
}

function byte2Hex(t) {
    return t < 16 ? "0" + t.toString(16) : t.toString(16);
}

function pkcs1pad2(t, e) {
    if (e < t.length + 11) return alert("Message too long for RSA"), null;
    for (var i = new Array(), n = t.length - 1; n >= 0 && e > 0; ) {
        var r = t.charCodeAt(n--);
        r < 128 ? i[--e] = r : r > 127 && r < 2048 ? (i[--e] = 63 & r | 128, i[--e] = r >> 6 | 192) : (i[--e] = 63 & r | 128, 
        i[--e] = r >> 6 & 63 | 128, i[--e] = r >> 12 | 224);
    }
    i[--e] = 0;
    for (var s = new SecureRandom(), a = new Array(); e > 2; ) {
        for (a[0] = 0; 0 == a[0]; ) s.nextBytes(a);
        i[--e] = a[0];
    }
    return i[--e] = 2, i[--e] = 0, new BigInteger(i);
}

function oaep_mgf1_arr(t, e, i) {
    for (var n = "", r = 0; n.length < e; ) n += i(String.fromCharCode.apply(String, t.concat([ (4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r ]))), 
    r += 1;
    return n;
}

function oaep_pad(t, e, i, n) {
    var r = KJUR.crypto.MessageDigest, s = KJUR.crypto.Util, a = null;
    if (i || (i = "sha1"), "string" == typeof i && (a = r.getCanonicalAlgName(i), n = r.getHashLength(a), 
    i = function(t) {
        return hextorstr(s.hashString(t, a));
    }), t.length + 2 * n + 2 > e) throw "Message too long for RSA";
    var o = "", h = void 0;
    for (h = 0; h < e - t.length - 2 * n - 2; h += 1) o += "\0";
    var u = i("") + o + "" + t, c = new Array(n);
    new SecureRandom().nextBytes(c);
    var l = oaep_mgf1_arr(c, u.length, i), g = [];
    for (h = 0; h < u.length; h += 1) g[h] = u.charCodeAt(h) ^ l.charCodeAt(h);
    var d = oaep_mgf1_arr(g, c.length, i), f = [ 0 ];
    for (h = 0; h < c.length; h += 1) f[h + 1] = c[h] ^ d.charCodeAt(h);
    return new BigInteger(f.concat(g));
}

function RSAKey() {
    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
    this.dmq1 = null, this.coeff = null;
}

function RSASetPublic(t, e) {
    if (this.isPublic = !0, this.isPrivate = !1, "string" != typeof t) this.n = t, this.e = e; else {
        if (!(null != t && null != e && t.length > 0 && e.length > 0)) throw "Invalid RSA public key";
        this.n = parseBigInt(t, 16), this.e = parseInt(e, 16);
    }
}

function RSADoPublic(t) {
    return t.modPowInt(this.e, this.n);
}

function RSAEncrypt(t) {
    var e = pkcs1pad2(t, this.n.bitLength() + 7 >> 3);
    if (null == e) return null;
    var i = this.doPublic(e);
    if (null == i) return null;
    var n = i.toString(16);
    return 0 == (1 & n.length) ? n : "0" + n;
}

function RSAEncryptOAEP(t, e, i) {
    var n = oaep_pad(t, this.n.bitLength() + 7 >> 3, e, i);
    if (null == n) return null;
    var r = this.doPublic(n);
    if (null == r) return null;
    var s = r.toString(16);
    return 0 == (1 & s.length) ? s : "0" + s;
}

function pkcs1unpad2(t, e) {
    for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n]; ) ++n;
    if (i.length - n != e - 1 || 2 != i[n]) return null;
    for (++n; 0 != i[n]; ) if (++n >= i.length) return null;
    for (var r = ""; ++n < i.length; ) {
        var s = 255 & i[n];
        s < 128 ? r += String.fromCharCode(s) : s > 191 && s < 224 ? (r += String.fromCharCode((31 & s) << 6 | 63 & i[n + 1]), 
        ++n) : (r += String.fromCharCode((15 & s) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]), 
        n += 2);
    }
    return r;
}

function oaep_mgf1_str(t, e, i) {
    for (var n = "", r = 0; n.length < e; ) n += i(t + String.fromCharCode.apply(String, [ (4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r ])), 
    r += 1;
    return n;
}

function oaep_unpad(t, e, i, n) {
    var r = KJUR.crypto.MessageDigest, s = KJUR.crypto.Util, a = null;
    i || (i = "sha1"), "string" == typeof i && (a = r.getCanonicalAlgName(i), n = r.getHashLength(a), 
    i = function(t) {
        return hextorstr(s.hashString(t, a));
    }), t = t.toByteArray();
    var o;
    for (o = 0; o < t.length; o += 1) t[o] &= 255;
    for (;t.length < e; ) t.unshift(0);
    if (t = String.fromCharCode.apply(String, t), t.length < 2 * n + 2) throw "Cipher too short";
    var o, h = t.substr(1, n), u = t.substr(n + 1), c = oaep_mgf1_str(u, n, i), l = [];
    for (o = 0; o < h.length; o += 1) l[o] = h.charCodeAt(o) ^ c.charCodeAt(o);
    var g = oaep_mgf1_str(String.fromCharCode.apply(String, l), t.length - n, i), d = [];
    for (o = 0; o < u.length; o += 1) d[o] = u.charCodeAt(o) ^ g.charCodeAt(o);
    if (d = String.fromCharCode.apply(String, d), d.substr(0, n) !== i("")) throw "Hash mismatch";
    d = d.substr(n);
    var f = d.indexOf("");
    if ((-1 != f ? d.substr(0, f).lastIndexOf("\0") : -1) + 1 != f) throw "Malformed data";
    return d.substr(f + 1);
}

function RSASetPrivate(t, e, i) {
    this.isPrivate = !0, "string" != typeof t ? (this.n = t, this.e = e, this.d = i) : null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = parseBigInt(t, 16), 
    this.e = parseInt(e, 16), this.d = parseBigInt(i, 16)) : alert("Invalid RSA private key");
}

function RSASetPrivateEx(t, e, i, n, r, s, a, o) {
    if (this.isPrivate = !0, this.isPublic = !1, null == t) throw "RSASetPrivateEx N == null";
    if (null == e) throw "RSASetPrivateEx E == null";
    if (0 == t.length) throw "RSASetPrivateEx N.length == 0";
    if (0 == e.length) throw "RSASetPrivateEx E.length == 0";
    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = parseBigInt(t, 16), 
    this.e = parseInt(e, 16), this.d = parseBigInt(i, 16), this.p = parseBigInt(n, 16), 
    this.q = parseBigInt(r, 16), this.dmp1 = parseBigInt(s, 16), this.dmq1 = parseBigInt(a, 16), 
    this.coeff = parseBigInt(o, 16)) : alert("Invalid RSA private key in RSASetPrivateEx");
}

function RSAGenerate(t, e) {
    var i = new SecureRandom(), n = t >> 1;
    this.e = parseInt(e, 16);
    for (var r = new BigInteger(e, 16); ;) {
        for (;this.p = new BigInteger(t - n, 1, i), 0 != this.p.subtract(BigInteger.ONE).gcd(r).compareTo(BigInteger.ONE) || !this.p.isProbablePrime(10); ) ;
        for (;this.q = new BigInteger(n, 1, i), 0 != this.q.subtract(BigInteger.ONE).gcd(r).compareTo(BigInteger.ONE) || !this.q.isProbablePrime(10); ) ;
        if (this.p.compareTo(this.q) <= 0) {
            var s = this.p;
            this.p = this.q, this.q = s;
        }
        var a = this.p.subtract(BigInteger.ONE), o = this.q.subtract(BigInteger.ONE), h = a.multiply(o);
        if (0 == h.gcd(r).compareTo(BigInteger.ONE)) {
            this.n = this.p.multiply(this.q), this.d = r.modInverse(h), this.dmp1 = this.d.mod(a), 
            this.dmq1 = this.d.mod(o), this.coeff = this.q.modInverse(this.p);
            break;
        }
    }
    this.isPrivate = !0;
}

function RSADoPrivate(t) {
    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
}

function RSADecrypt(t) {
    var e = parseBigInt(t, 16), i = this.doPrivate(e);
    return null == i ? null : pkcs1unpad2(i, this.n.bitLength() + 7 >> 3);
}

function RSADecryptOAEP(t, e, i) {
    var n = parseBigInt(t, 16), r = this.doPrivate(n);
    return null == r ? null : oaep_unpad(r, this.n.bitLength() + 7 >> 3, e, i);
}

function ECFieldElementFp(t, e) {
    this.x = e, this.q = t;
}

function feFpEquals(t) {
    return t == this || this.q.equals(t.q) && this.x.equals(t.x);
}

function feFpToBigInteger() {
    return this.x;
}

function feFpNegate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
}

function feFpAdd(t) {
    return new ECFieldElementFp(this.q, this.x.add(t.toBigInteger()).mod(this.q));
}

function feFpSubtract(t) {
    return new ECFieldElementFp(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
}

function feFpMultiply(t) {
    return new ECFieldElementFp(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
}

function feFpSquare() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
}

function feFpDivide(t) {
    return new ECFieldElementFp(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q));
}

function ECPointFp(t, e, i, n) {
    this.curve = t, this.x = e, this.y = i, this.z = null == n ? BigInteger.ONE : n, 
    this.zinv = null;
}

function pointFpGetX() {
    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}

function pointFpGetY() {
    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}

function pointFpEquals(t) {
    if (t == this) return !0;
    if (this.isInfinity()) return t.isInfinity();
    if (t.isInfinity()) return this.isInfinity();
    var e = void 0, i = void 0;
    return e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q), 
    !!e.equals(BigInteger.ZERO) && (i = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q), 
    i.equals(BigInteger.ZERO));
}

function pointFpIsInfinity() {
    return null == this.x && null == this.y || this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
}

function pointFpNegate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
}

function pointFpAdd(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q), i = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
    if (BigInteger.ZERO.equals(i)) return BigInteger.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
    var n = new BigInteger("3"), r = this.x.toBigInteger(), s = this.y.toBigInteger(), a = (t.x.toBigInteger(), 
    t.y.toBigInteger(), i.square()), o = a.multiply(i), h = r.multiply(a), u = e.square().multiply(this.z), c = u.subtract(h.shiftLeft(1)).multiply(t.z).subtract(o).multiply(i).mod(this.curve.q), l = h.multiply(n).multiply(e).subtract(s.multiply(o)).subtract(u.multiply(e)).multiply(t.z).add(e.multiply(o)).mod(this.curve.q), g = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(l), g);
}

function pointFpTwice() {
    if (this.isInfinity()) return this;
    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
    var t = new BigInteger("3"), e = this.x.toBigInteger(), i = this.y.toBigInteger(), n = i.multiply(this.z), r = n.multiply(i).mod(this.curve.q), s = this.curve.a.toBigInteger(), a = e.square().multiply(t);
    BigInteger.ZERO.equals(s) || (a = a.add(this.z.square().multiply(s))), a = a.mod(this.curve.q);
    var o = a.square().subtract(e.shiftLeft(3).multiply(r)).shiftLeft(1).multiply(n).mod(this.curve.q), h = a.multiply(t).multiply(e).subtract(r.shiftLeft(1)).shiftLeft(2).multiply(r).subtract(a.square().multiply(a)).mod(this.curve.q), u = n.square().multiply(n).shiftLeft(3).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(o), this.curve.fromBigInteger(h), u);
}

function pointFpMultiply(t) {
    if (this.isInfinity()) return this;
    if (0 == t.signum()) return this.curve.getInfinity();
    var e = t, i = e.multiply(new BigInteger("3")), n = this.negate(), r = this, s = void 0;
    for (s = i.bitLength() - 2; s > 0; --s) {
        r = r.twice();
        var a = i.testBit(s);
        a != e.testBit(s) && (r = r.add(a ? this : n));
    }
    return r;
}

function pointFpMultiplyTwo(t, e, i) {
    var n = void 0;
    n = t.bitLength() > i.bitLength() ? t.bitLength() - 1 : i.bitLength() - 1;
    for (var r = this.curve.getInfinity(), s = this.add(e); n >= 0; ) r = r.twice(), 
    t.testBit(n) ? r = i.testBit(n) ? r.add(s) : r.add(this) : i.testBit(n) && (r = r.add(e)), 
    --n;
    return r;
}

function ECCurveFp(t, e, i) {
    this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(i), this.infinity = new ECPointFp(this, null, null);
}

function curveFpGetQ() {
    return this.q;
}

function curveFpGetA() {
    return this.a;
}

function curveFpGetB() {
    return this.b;
}

function curveFpEquals(t) {
    return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b);
}

function curveFpGetInfinity() {
    return this.infinity;
}

function curveFpFromBigInteger(t) {
    return new ECFieldElementFp(this.q, t);
}

function curveFpDecodePointHex(t) {
    switch (parseInt(t.substr(0, 2), 16)) {
      case 0:
        return this.infinity;

      case 2:
      case 3:
        return null;

      case 4:
      case 6:
      case 7:
        var e = (t.length - 2) / 2, i = t.substr(2, e), n = t.substr(e + 2, e);
        return new ECPointFp(this, this.fromBigInteger(new BigInteger(i, 16)), this.fromBigInteger(new BigInteger(n, 16)));

      default:
        return null;
    }
}

function Base64x() {}

function stoBA(t) {
    for (var e = new Array(), i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
    return e;
}

function BAtos(t) {
    for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
    return e;
}

function BAtohex(t) {
    for (var e = "", i = 0; i < t.length; i++) {
        var n = t[i].toString(16);
        1 == n.length && (n = "0" + n), e += n;
    }
    return e;
}

function stohex(t) {
    return BAtohex(stoBA(t));
}

function stob64(t) {
    return hex2b64(stohex(t));
}

function stob64u(t) {
    return b64tob64u(hex2b64(stohex(t)));
}

function b64utos(t) {
    return BAtos(b64toBA(b64utob64(t)));
}

function b64tob64u(t) {
    return t = t.replace(/\=/g, ""), t = t.replace(/\+/g, "-"), t = t.replace(/\//g, "_");
}

function b64utob64(t) {
    return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="), t = t.replace(/-/g, "+"), 
    t = t.replace(/_/g, "/");
}

function hextob64u(t) {
    return t.length % 2 == 1 && (t = "0" + t), b64tob64u(hex2b64(t));
}

function b64utohex(t) {
    return b64tohex(b64utob64(t));
}

function utf8tob64(t) {
    return hex2b64(uricmptohex(encodeURIComponentAll(t)));
}

function b64toutf8(t) {
    return decodeURIComponent(hextouricmp(b64tohex(t)));
}

function utf8tohex(t) {
    return uricmptohex(encodeURIComponentAll(t));
}

function hextoutf8(t) {
    return decodeURIComponent(hextouricmp(t));
}

function hextorstr(t) {
    for (var e = "", i = 0; i < t.length - 1; i += 2) e += String.fromCharCode(parseInt(t.substr(i, 2), 16));
    return e;
}

function rstrtohex(t) {
    for (var e = "", i = 0; i < t.length; i++) e += ("0" + t.charCodeAt(i).toString(16)).slice(-2);
    return e;
}

function hextob64(t) {
    return hex2b64(t);
}

function hextob64nl(t) {
    var e = hextob64(t), i = e.replace(/(.{64})/g, "$1\r\n");
    return i = i.replace(/\r\n$/, "");
}

function b64nltohex(t) {
    return b64tohex(t.replace(/[^0-9A-Za-z\/+=]*/g, ""));
}

function hextoArrayBuffer(t) {
    if (t.length % 2 != 0) throw "input is not even length";
    if (null == t.match(/^[0-9A-Fa-f]+$/)) throw "input is not hexadecimal";
    for (var e = new ArrayBuffer(t.length / 2), i = new DataView(e), n = 0; n < t.length / 2; n++) i.setUint8(n, parseInt(t.substr(2 * n, 2), 16));
    return e;
}

function ArrayBuffertohex(t) {
    for (var e = "", i = new DataView(t), n = 0; n < t.byteLength; n++) e += ("00" + i.getUint8(n).toString(16)).slice(-2);
    return e;
}

function uricmptohex(t) {
    return t.replace(/%/g, "");
}

function hextouricmp(t) {
    return t.replace(/(..)/g, "%$1");
}

function encodeURIComponentAll(t) {
    for (var e = encodeURIComponent(t), i = "", n = 0; n < e.length; n++) "%" == e[n] ? (i += e.substr(n, 3), 
    n += 2) : i = i + "%" + stohex(e[n]);
    return i;
}

function newline_toUnix(t) {
    return t = t.replace(/\r\n/gm, "\n");
}

function newline_toDos(t) {
    return t = t.replace(/\r\n/gm, "\n"), t = t.replace(/\n/gm, "\r\n");
}

function intarystrtohex(t) {
    t = t.replace(/^\s*\[\s*/, ""), t = t.replace(/\s*\]\s*$/, ""), t = t.replace(/\s*/g, "");
    try {
        return t.split(/,/).map(function(t, e, i) {
            var n = parseInt(t);
            if (n < 0 || n > 255) throw "integer not in range 0-255";
            return ("00" + n.toString(16)).slice(-2);
        }).join("");
    } catch (t) {
        throw "malformed integer array string: " + t;
    }
}

function _rsasign_getHexPaddedDigestInfoForString(t, e, i) {
    var n = function(t) {
        return KJUR.crypto.Util.hashString(t, i);
    }(t);
    return KJUR.crypto.Util.getPaddedDigestInfoHex(n, i, e);
}

function _zeroPaddingOfSignature(t, e) {
    for (var i = "", n = e / 4 - t.length, r = 0; r < n; r++) i += "0";
    return i + t;
}

function _rsasign_signString(t, e) {
    var i = function(t) {
        return KJUR.crypto.Util.hashString(t, e);
    }(t);
    return this.signWithMessageHash(i, e);
}

function _rsasign_signWithMessageHash(t, e) {
    var i = KJUR.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), n = parseBigInt(i, 16);
    return _zeroPaddingOfSignature(this.doPrivate(n).toString(16), this.n.bitLength());
}

function _rsasign_signStringWithSHA1(t) {
    return _rsasign_signString.call(this, t, "sha1");
}

function _rsasign_signStringWithSHA256(t) {
    return _rsasign_signString.call(this, t, "sha256");
}

function pss_mgf1_str(t, e, i) {
    for (var n = "", r = 0; n.length < e; ) n += hextorstr(i(rstrtohex(t + String.fromCharCode.apply(String, [ (4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r ])))), 
    r += 1;
    return n;
}

function _rsasign_signStringPSS(t, e, i) {
    var n = function(t) {
        return KJUR.crypto.Util.hashHex(t, e);
    }(rstrtohex(t));
    return void 0 === i && (i = -1), this.signWithMessageHashPSS(n, e, i);
}

function _rsasign_signWithMessageHashPSS(t, e, i) {
    var n = hextorstr(t), r = n.length, s = this.n.bitLength() - 1, a = Math.ceil(s / 8), o = void 0, h = function(t) {
        return KJUR.crypto.Util.hashHex(t, e);
    };
    if (-1 === i || void 0 === i) i = r; else if (-2 === i) i = a - r - 2; else if (i < -2) throw "invalid salt length";
    if (a < r + i + 2) throw "data too long";
    var u = "";
    i > 0 && (u = new Array(i), new SecureRandom().nextBytes(u), u = String.fromCharCode.apply(String, u));
    var c = hextorstr(h(rstrtohex("\0\0\0\0\0\0\0\0" + n + u))), l = [];
    for (o = 0; o < a - i - r - 2; o += 1) l[o] = 0;
    var g = String.fromCharCode.apply(String, l) + "" + u, d = pss_mgf1_str(c, g.length, h), f = [];
    for (o = 0; o < g.length; o += 1) f[o] = g.charCodeAt(o) ^ d.charCodeAt(o);
    var p = 65280 >> 8 * a - s & 255;
    for (f[0] &= ~p, o = 0; o < r; o++) f.push(c.charCodeAt(o));
    return f.push(188), _zeroPaddingOfSignature(this.doPrivate(new BigInteger(f)).toString(16), this.n.bitLength());
}

function _rsasign_getDecryptSignatureBI(t, e, i) {
    var n = new RSAKey();
    return n.setPublic(e, i), n.doPublic(t);
}

function _rsasign_getHexDigestInfoFromSig(t, e, i) {
    return _rsasign_getDecryptSignatureBI(t, e, i).toString(16).replace(/^1f+00/, "");
}

function _rsasign_getAlgNameAndHashFromHexDisgestInfo(t) {
    for (var e in KJUR.crypto.Util.DIGESTINFOHEAD) {
        var i = KJUR.crypto.Util.DIGESTINFOHEAD[e], n = i.length;
        if (t.substring(0, n) == i) {
            return [ e, t.substring(n) ];
        }
    }
    return [];
}

function _rsasign_verifySignatureWithArgs(t, e, i, n) {
    var r = _rsasign_getHexDigestInfoFromSig(e, i, n), s = _rsasign_getAlgNameAndHashFromHexDisgestInfo(r);
    if (0 == s.length) return !1;
    var a = s[0], o = s[1];
    return o == function(t) {
        return KJUR.crypto.Util.hashString(t, a);
    }(t);
}

function _rsasign_verifyHexSignatureForMessage(t, e) {
    return _rsasign_verifySignatureWithArgs(e, parseBigInt(t, 16), this.n.toString(16), this.e.toString(16));
}

function _rsasign_verifyString(t, e) {
    e = e.replace(_RE_HEXDECONLY, ""), e = e.replace(/[ \n]+/g, "");
    var i = parseBigInt(e, 16);
    if (i.bitLength() > this.n.bitLength()) return 0;
    var n = this.doPublic(i), r = n.toString(16).replace(/^1f+00/, ""), s = _rsasign_getAlgNameAndHashFromHexDisgestInfo(r);
    if (0 == s.length) return !1;
    var a = s[0], o = s[1];
    return o == function(t) {
        return KJUR.crypto.Util.hashString(t, a);
    }(t);
}

function _rsasign_verifyWithMessageHash(t, e) {
    e = e.replace(_RE_HEXDECONLY, ""), e = e.replace(/[ \n]+/g, "");
    var i = parseBigInt(e, 16);
    if (i.bitLength() > this.n.bitLength()) return 0;
    var n = this.doPublic(i), r = n.toString(16).replace(/^1f+00/, ""), s = _rsasign_getAlgNameAndHashFromHexDisgestInfo(r);
    if (0 == s.length) return !1;
    s[0];
    return s[1] == t;
}

function _rsasign_verifyStringPSS(t, e, i, n) {
    var r = function(t) {
        return KJUR.crypto.Util.hashHex(t, i);
    }(rstrtohex(t));
    return void 0 === n && (n = -1), this.verifyWithMessageHashPSS(r, e, i, n);
}

function _rsasign_verifyWithMessageHashPSS(t, e, i, n) {
    var r = new BigInteger(e, 16);
    if (r.bitLength() > this.n.bitLength()) return !1;
    var s = function(t) {
        return KJUR.crypto.Util.hashHex(t, i);
    }, a = hextorstr(t), o = a.length, h = this.n.bitLength() - 1, u = Math.ceil(h / 8), c = void 0;
    if (-1 === n || void 0 === n) n = o; else if (-2 === n) n = u - o - 2; else if (n < -2) throw "invalid salt length";
    if (u < o + n + 2) throw "data too long";
    var l = this.doPublic(r).toByteArray();
    for (c = 0; c < l.length; c += 1) l[c] &= 255;
    for (;l.length < u; ) l.unshift(0);
    if (188 !== l[u - 1]) throw "encoded message does not end in 0xbc";
    l = String.fromCharCode.apply(String, l);
    var g = l.substr(0, u - o - 1), d = l.substr(g.length, o), f = 65280 >> 8 * u - h & 255;
    if (0 != (g.charCodeAt(0) & f)) throw "bits beyond keysize not zero";
    var p = pss_mgf1_str(d, g.length, s), y = [];
    for (c = 0; c < g.length; c += 1) y[c] = g.charCodeAt(c) ^ p.charCodeAt(c);
    y[0] &= ~f;
    var S = u - o - n - 2;
    for (c = 0; c < S; c += 1) if (0 !== y[c]) throw "leftmost octets not zero";
    if (1 !== y[S]) throw "0x01 marker not found";
    return d === hextorstr(s(rstrtohex("\0\0\0\0\0\0\0\0" + a + String.fromCharCode.apply(String, y.slice(-n)))));
}

function X509() {
    this.subjectPublicKeyRSA = null, this.subjectPublicKeyRSA_hN = null, this.subjectPublicKeyRSA_hE = null, 
    this.hex = null, this.getSerialNumberHex = function() {
        return ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [ 0, 1 ]);
    }, this.getSignatureAlgorithmField = function() {
        var t = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [ 0, 2, 0 ]), e = KJUR.asn1.ASN1Util.oidHexToInt(t);
        return KJUR.asn1.x509.OID.oid2name(e);
    }, this.getIssuerHex = function() {
        return ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 3 ]);
    }, this.getIssuerString = function() {
        return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 3 ]));
    }, this.getSubjectHex = function() {
        return ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 5 ]);
    }, this.getSubjectString = function() {
        return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [ 0, 5 ]));
    }, this.getNotBefore = function() {
        var t = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [ 0, 4, 0 ]);
        return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t);
    }, this.getNotAfter = function() {
        var t = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [ 0, 4, 1 ]);
        return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t);
    }, this.readCertPEM = function(t) {
        var e = ASN1HEX.pemToHex(t), i = X509.getPublicKeyHexArrayFromCertHex(e), n = new RSAKey();
        n.setPublic(i[0], i[1]), this.subjectPublicKeyRSA = n, this.subjectPublicKeyRSA_hN = i[0], 
        this.subjectPublicKeyRSA_hE = i[1], this.hex = e;
    }, this.readCertPEMWithoutRSAInit = function(t) {
        var e = ASN1HEX.pemToHex(t), i = X509.getPublicKeyHexArrayFromCertHex(e);
        "function" == typeof this.subjectPublicKeyRSA.setPublic && this.subjectPublicKeyRSA.setPublic(i[0], i[1]), 
        this.subjectPublicKeyRSA_hN = i[0], this.subjectPublicKeyRSA_hE = i[1], this.hex = e;
    }, this.getInfo = function() {
        var t = "Basic Fields\n";
        t += "  serial number: " + this.getSerialNumberHex() + "\n", t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", 
        t += "  issuer: " + this.getIssuerString() + "\n", t += "  notBefore: " + this.getNotBefore() + "\n", 
        t += "  notAfter: " + this.getNotAfter() + "\n", t += "  subject: " + this.getSubjectString() + "\n", 
        t += "  subject public key info: \n";
        var e = X509.getSubjectPublicKeyInfoPosFromCertHex(this.hex), i = ASN1HEX.getHexOfTLV_AtObj(this.hex, e), n = KEYUTIL.getKey(i, null, "pkcs8pub");
        n instanceof RSAKey && (t += "    key algorithm: RSA\n", t += "    n=" + n.n.toString(16).substr(0, 16) + "...\n", 
        t += "    e=" + n.e.toString(16) + "\n"), t += "X509v3 Extensions:\n";
        for (var r = X509.getV3ExtInfoListOfCertHex(this.hex), s = 0; s < r.length; s++) {
            var a = r[s], o = KJUR.asn1.x509.OID.oid2name(a.oid);
            "" === o && (o = a.oid);
            var h = "";
            if (!0 === a.critical && (h = "CRITICAL"), t += "  " + o + " " + h + ":\n", "basicConstraints" === o) {
                var u = X509.getExtBasicConstraints(this.hex);
                void 0 === u.cA ? t += "    {}\n" : (t += "    cA=true", void 0 !== u.pathLen && (t += ", pathLen=" + u.pathLen), 
                t += "\n");
            } else if ("keyUsage" === o) t += "    " + X509.getExtKeyUsageString(this.hex) + "\n"; else if ("subjectKeyIdentifier" === o) t += "    " + X509.getExtSubjectKeyIdentifier(this.hex) + "\n"; else if ("authorityKeyIdentifier" === o) {
                var c = X509.getExtAuthorityKeyIdentifier(this.hex);
                void 0 !== c.kid && (t += "    kid=" + c.kid + "\n");
            } else if ("extKeyUsage" === o) {
                var l = X509.getExtExtKeyUsageName(this.hex);
                t += "    " + l.join(", ") + "\n";
            } else if ("subjectAltName" === o) {
                var g = X509.getExtSubjectAltName(this.hex);
                t += "    " + g.join(", ") + "\n";
            } else if ("cRLDistributionPoints" === o) {
                var d = X509.getExtCRLDistributionPointsURI(this.hex);
                t += "    " + d + "\n";
            } else if ("authorityInfoAccess" === o) {
                var f = X509.getExtAIAInfo(this.hex);
                void 0 !== f.ocsp && (t += "    ocsp: " + f.ocsp.join(",") + "\n"), void 0 !== f.caissuer && (t += "    caissuer: " + f.caissuer.join(",") + "\n");
            }
        }
        return t += "signature algorithm: " + X509.getSignatureAlgorithmName(this.hex) + "\n", 
        t += "signature: " + X509.getSignatureValueHex(this.hex).substr(0, 16) + "...\n";
    };
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, navigator2 = {
    appName: "Netscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
}, window2 = {
    ASN1: null,
    Base64: null,
    Hex: null,
    crypto: null,
    href: null
}, KJUR = null;

if (void 0 === YAHOO || !YAHOO) var YAHOO = {};

YAHOO.namespace = function() {
    var t = arguments, e = null, i = void 0, n = void 0, r = void 0;
    for (i = 0; i < t.length; i += 1) for (r = ("" + t[i]).split("."), e = YAHOO, n = "YAHOO" == r[0] ? 1 : 0; n < r.length; n += 1) e[r[n]] = e[r[n]] || {}, 
    e = e[r[n]];
    return e;
}, YAHOO.log = function(t, e, i) {
    var n = YAHOO.widget.Logger;
    return !(!n || !n.log) && n.log(t, e, i);
}, YAHOO.register = function(t, e, i) {
    var n = YAHOO.env.modules, r = void 0, s = void 0, a = void 0, o = void 0, h = void 0;
    for (n[t] || (n[t] = {
        versions: [],
        builds: []
    }), r = n[t], s = i.version, a = i.build, o = YAHOO.env.listeners, r.name = t, r.version = s, 
    r.build = a, r.versions.push(s), r.builds.push(a), r.mainClass = e, h = 0; h < o.length; h += 1) o[h](r);
    e ? (e.VERSION = s, e.BUILD = a) : YAHOO.log("mainClass is undefined for module " + t, "warn");
}, YAHOO.env = YAHOO.env || {
    modules: [],
    listeners: []
}, YAHOO.env.getVersion = function(t) {
    return YAHOO.env.modules[t] || null;
}, YAHOO.env.parseUA = function(t) {
    var e = function(t) {
        var e = 0;
        return parseFloat(t.replace(/\./g, function() {
            return 1 == e++ ? "" : ".";
        }));
    }, i = navigator2, n = {
        ie: 0,
        opera: 0,
        gecko: 0,
        webkit: 0,
        chrome: 0,
        mobile: null,
        air: 0,
        ipad: 0,
        iphone: 0,
        ipod: 0,
        ios: null,
        android: 0,
        webos: 0,
        caja: i && i.cajaVersion,
        secure: !1,
        os: null
    }, r = t || navigator2 && navigator2.userAgent, s = window2 && window2.location, a = s && s.href, o = void 0;
    return n.secure = a && 0 === a.toLowerCase().indexOf("https"), r && (/windows|win32/i.test(r) ? n.os = "windows" : /macintosh/i.test(r) ? n.os = "macintosh" : /rhino/i.test(r) && (n.os = "rhino"), 
    /KHTML/.test(r) && (n.webkit = 1), o = r.match(/AppleWebKit\/([^\s]*)/), o && o[1] && (n.webkit = e(o[1]), 
    / Mobile\//.test(r) ? (n.mobile = "Apple", o = r.match(/OS ([^\s]*)/), o && o[1] && (o = e(o[1].replace("_", "."))), 
    n.ios = o, n.ipad = n.ipod = n.iphone = 0, (o = r.match(/iPad|iPod|iPhone/)) && o[0] && (n[o[0].toLowerCase()] = n.ios)) : (o = r.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), 
    o && (n.mobile = o[0]), /webOS/.test(r) && (n.mobile = "WebOS", (o = r.match(/webOS\/([^\s]*);/)) && o[1] && (n.webos = e(o[1]))), 
    / Android/.test(r) && (n.mobile = "Android", (o = r.match(/Android ([^\s]*);/)) && o[1] && (n.android = e(o[1])))), 
    o = r.match(/Chrome\/([^\s]*)/), o && o[1] ? n.chrome = e(o[1]) : (o = r.match(/AdobeAIR\/([^\s]*)/)) && (n.air = o[0])), 
    n.webkit || (o = r.match(/Opera[\s\/]([^\s]*)/), o && o[1] ? (n.opera = e(o[1]), 
    o = r.match(/Version\/([^\s]*)/), o && o[1] && (n.opera = e(o[1])), (o = r.match(/Opera Mini[^;]*/)) && (n.mobile = o[0])) : (o = r.match(/MSIE\s([^;]*)/), 
    o && o[1] ? n.ie = e(o[1]) : (o = r.match(/Gecko\/([^\s]*)/)) && (n.gecko = 1, (o = r.match(/rv:([^\s\)]*)/)) && o[1] && (n.gecko = e(o[1])))))), 
    n;
}, YAHOO.env.ua = YAHOO.env.parseUA(), function() {
    if (YAHOO.namespace("util", "widget", "example"), "undefined" != typeof YAHOO_config) {
        var t = YAHOO_config.listener, e = YAHOO.env.listeners, i = !0, n = void 0;
        if (t) {
            for (n = 0; n < e.length; n++) if (e[n] == t) {
                i = !1;
                break;
            }
            i && e.push(t);
        }
    }
}(), YAHOO.lang = YAHOO.lang || {}, function() {
    var t = YAHOO.lang, e = Object.prototype, i = [], n = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
        "`": "&#x60;"
    }, r = [ "toString", "valueOf" ], s = {
        isArray: function(t) {
            return "[object Array]" === e.toString.apply(t);
        },
        isBoolean: function(t) {
            return "boolean" == typeof t;
        },
        isFunction: function(t) {
            return "function" == typeof t || "[object Function]" === e.toString.apply(t);
        },
        isNull: function(t) {
            return null === t;
        },
        isNumber: function(t) {
            return "number" == typeof t && isFinite(t);
        },
        isObject: function(e) {
            return e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || t.isFunction(e)) || !1;
        },
        isString: function(t) {
            return "string" == typeof t;
        },
        isUndefined: function(t) {
            return void 0 === t;
        },
        _IEEnumFix: YAHOO.env.ua.ie ? function(i, n) {
            var s = void 0, a = void 0, o = void 0;
            for (s = 0; s < r.length; s += 1) a = r[s], o = n[a], t.isFunction(o) && o != e[a] && (i[a] = o);
        } : function() {},
        escapeHTML: function(t) {
            return t.replace(/[&<>"'\/`]/g, function(t) {
                return n[t];
            });
        },
        extend: function(i, n, r) {
            if (!n || !i) throw new Error("extend failed, please check that all dependencies are included.");
            var s = function() {}, a = void 0;
            if (s.prototype = n.prototype, i.prototype = new s(), i.prototype.constructor = i, 
            i.superclass = n.prototype, n.prototype.constructor == e.constructor && (n.prototype.constructor = n), 
            r) {
                for (a in r) t.hasOwnProperty(r, a) && (i.prototype[a] = r[a]);
                t._IEEnumFix(i.prototype, r);
            }
        },
        augmentObject: function(e, i) {
            if (!i || !e) throw new Error("Absorb failed, verify dependencies.");
            var n = arguments, r = void 0, s = void 0, a = n[2];
            if (a && !0 !== a) for (r = 2; r < n.length; r += 1) e[n[r]] = i[n[r]]; else {
                for (s in i) !a && s in e || (e[s] = i[s]);
                t._IEEnumFix(e, i);
            }
            return e;
        },
        augmentProto: function(e, i) {
            if (!i || !e) throw new Error("Augment failed, verify dependencies.");
            var n = [ e.prototype, i.prototype ], r = void 0;
            for (r = 2; r < arguments.length; r += 1) n.push(arguments[r]);
            return t.augmentObject.apply(this, n), e;
        },
        dump: function(e, i) {
            var n = void 0, r = void 0, s = [], a = "{...}";
            if (!t.isObject(e)) return e + "";
            if (e instanceof Date || "nodeType" in e && "tagName" in e) return e;
            if (t.isFunction(e)) return "f(){...}";
            if (i = t.isNumber(i) ? i : 3, t.isArray(e)) {
                for (s.push("["), n = 0, r = e.length; n < r; n += 1) t.isObject(e[n]) ? s.push(i > 0 ? t.dump(e[n], i - 1) : a) : s.push(e[n]), 
                s.push(", ");
                s.length > 1 && s.pop(), s.push("]");
            } else {
                s.push("{");
                for (n in e) t.hasOwnProperty(e, n) && (s.push(n + " => "), t.isObject(e[n]) ? s.push(i > 0 ? t.dump(e[n], i - 1) : a) : s.push(e[n]), 
                s.push(", "));
                s.length > 1 && s.pop(), s.push("}");
            }
            return s.join("");
        },
        substitute: function(e, i, n, r) {
            for (var s = void 0, a = void 0, o = void 0, h = void 0, u = void 0, c = void 0, l = [], g = void 0, d = e.length, f = void 0, p = void 0; !((s = e.lastIndexOf("{", d)) < 0) && (a = e.indexOf("}", s), 
            !(s + 1 > a)); ) g = e.substring(s + 1, a), h = g, c = null, o = h.indexOf(" "), 
            o > -1 && (c = h.substring(o + 1), h = h.substring(0, o)), u = i[h], n && (u = n(h, u, c)), 
            t.isObject(u) ? t.isArray(u) ? u = t.dump(u, parseInt(c, 10)) : (c = c || "", f = c.indexOf("dump"), 
            f > -1 && (c = c.substring(4)), p = u.toString(), u = "[object Object]" === p || f > -1 ? t.dump(u, parseInt(c, 10)) : p) : t.isString(u) || t.isNumber(u) || (u = "~-" + l.length + "-~", 
            l[l.length] = g), e = e.substring(0, s) + u + e.substring(a + 1), !1 === r && (d = s - 1);
            for (s = l.length - 1; s >= 0; s -= 1) e = e.replace(new RegExp("~-" + s + "-~"), "{" + l[s] + "}", "g");
            return e;
        },
        trim: function(t) {
            try {
                return t.replace(/^\s+|\s+$/g, "");
            } catch (e) {
                return t;
            }
        },
        merge: function() {
            var e = {}, i = arguments, n = i.length, r = void 0;
            for (r = 0; r < n; r += 1) t.augmentObject(e, i[r], !0);
            return e;
        },
        later: function(e, n, r, s, a) {
            e = e || 0, n = n || {};
            var o = r, h = s, u = void 0, c = void 0;
            if (t.isString(r) && (o = n[r]), !o) throw new TypeError("method undefined");
            return t.isUndefined(s) || t.isArray(h) || (h = [ s ]), u = function() {
                o.apply(n, h || i);
            }, c = a ? setInterval(u, e) : setTimeout(u, e), {
                interval: a,
                cancel: function() {
                    this.interval ? clearInterval(c) : clearTimeout(c);
                }
            };
        },
        isValue: function(e) {
            return t.isObject(e) || t.isString(e) || t.isNumber(e) || t.isBoolean(e);
        }
    };
    t.hasOwnProperty = e.hasOwnProperty ? function(t, e) {
        return t && t.hasOwnProperty && t.hasOwnProperty(e);
    } : function(e, i) {
        return !t.isUndefined(e[i]) && e.constructor.prototype[i] !== e[i];
    }, s.augmentObject(t, s, !0), YAHOO.util.Lang = t, t.augment = t.augmentProto, YAHOO.augment = t.augmentProto, 
    YAHOO.extend = t.extend;
}(), YAHOO.register("yahoo", YAHOO, {
    version: "2.9.0",
    build: "2800"
});

var CryptoJS = CryptoJS || function(t, e) {
    var i = {}, n = i.lib = {}, r = n.Base = function() {
        function t() {}
        return {
            extend: function(e) {
                t.prototype = this;
                var i = new t();
                return e && i.mixIn(e), i.hasOwnProperty("init") || (i.init = function() {
                    i.$super.init.apply(this, arguments);
                }), i.init.prototype = i, i.$super = this, i;
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments), t;
            },
            init: function() {},
            mixIn: function(t) {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString);
            },
            clone: function() {
                return this.init.prototype.extend(this);
            }
        };
    }(), s = n.WordArray = r.extend({
        init: function(t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length;
        },
        toString: function(t) {
            return (t || o).stringify(this);
        },
        concat: function(t) {
            var e = this.words, i = t.words, n = this.sigBytes, r = t.sigBytes;
            if (this.clamp(), n % 4) for (var s = 0; s < r; s++) {
                var a = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                e[n + s >>> 2] |= a << 24 - (n + s) % 4 * 8;
            } else for (var s = 0; s < r; s += 4) e[n + s >>> 2] = i[s >>> 2];
            return this.sigBytes += r, this;
        },
        clamp: function() {
            var e = this.words, i = this.sigBytes;
            e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, e.length = t.ceil(i / 4);
        },
        clone: function() {
            var t = r.clone.call(this);
            return t.words = this.words.slice(0), t;
        },
        random: function(e) {
            for (var i = [], n = 0; n < e; n += 4) i.push(4294967296 * t.random() | 0);
            return new s.init(i, e);
        }
    }), a = i.enc = {}, o = a.Hex = {
        stringify: function(t) {
            for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                n.push((s >>> 4).toString(16)), n.push((15 & s).toString(16));
            }
            return n.join("");
        },
        parse: function(t) {
            for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
            return new s.init(i, e / 2);
        }
    }, h = a.Latin1 = {
        stringify: function(t) {
            for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                n.push(String.fromCharCode(s));
            }
            return n.join("");
        },
        parse: function(t) {
            for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
            return new s.init(i, e);
        }
    }, u = a.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(h.stringify(t)));
            } catch (t) {
                throw new Error("Malformed UTF-8 data");
            }
        },
        parse: function(t) {
            return h.parse(unescape(encodeURIComponent(t)));
        }
    }, c = n.BufferedBlockAlgorithm = r.extend({
        reset: function() {
            this._data = new s.init(), this._nDataBytes = 0;
        },
        _append: function(t) {
            "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
        },
        _process: function(e) {
            var i = this._data, n = i.words, r = i.sigBytes, a = this.blockSize, o = 4 * a, h = r / o;
            h = e ? t.ceil(h) : t.max((0 | h) - this._minBufferSize, 0);
            var u = h * a, c = t.min(4 * u, r);
            if (u) {
                for (var l = 0; l < u; l += a) this._doProcessBlock(n, l);
                var g = n.splice(0, u);
                i.sigBytes -= c;
            }
            return new s.init(g, c);
        },
        clone: function() {
            var t = r.clone.call(this);
            return t._data = this._data.clone(), t;
        },
        _minBufferSize: 0
    }), l = (n.Hasher = c.extend({
        cfg: r.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t), this.reset();
        },
        reset: function() {
            c.reset.call(this), this._doReset();
        },
        update: function(t) {
            return this._append(t), this._process(), this;
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, i) {
                return new t.init(i).finalize(e);
            };
        },
        _createHmacHelper: function(t) {
            return function(e, i) {
                return new l.HMAC.init(t, i).finalize(e);
            };
        }
    }), i.algo = {});
    return i;
}(Math);

!function(t) {
    var e = CryptoJS, i = e.lib, n = i.Base, r = i.WordArray, e = e.x64 = {};
    e.Word = n.extend({
        init: function(t, e) {
            this.high = t, this.low = e;
        }
    }), e.WordArray = n.extend({
        init: function(t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 8 * t.length;
        },
        toX32: function() {
            for (var t = this.words, e = t.length, i = [], n = 0; n < e; n++) {
                var s = t[n];
                i.push(s.high), i.push(s.low);
            }
            return r.create(i, this.sigBytes);
        },
        clone: function() {
            for (var t = n.clone.call(this), e = t.words = this.words.slice(0), i = e.length, r = 0; r < i; r++) e[r] = e[r].clone();
            return t;
        }
    });
}(), CryptoJS.lib.Cipher || function(t) {
    var e = CryptoJS, i = e.lib, n = i.Base, r = i.WordArray, s = i.BufferedBlockAlgorithm, a = e.enc.Base64, o = e.algo.EvpKDF, h = i.Cipher = s.extend({
        cfg: n.extend(),
        createEncryptor: function(t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e);
        },
        createDecryptor: function(t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e);
        },
        init: function(t, e, i) {
            this.cfg = this.cfg.extend(i), this._xformMode = t, this._key = e, this.reset();
        },
        reset: function() {
            s.reset.call(this), this._doReset();
        },
        process: function(t) {
            return this._append(t), this._process();
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(t) {
            return {
                encrypt: function(e, i, n) {
                    return ("string" == typeof i ? f : d).encrypt(t, e, i, n);
                },
                decrypt: function(e, i, n) {
                    return ("string" == typeof i ? f : d).decrypt(t, e, i, n);
                }
            };
        }
    });
    i.StreamCipher = h.extend({
        _doFinalize: function() {
            return this._process(!0);
        },
        blockSize: 1
    });
    var u = e.mode = {}, c = function(t, e, i) {
        var n = this._iv;
        n ? this._iv = void 0 : n = this._prevBlock;
        for (var r = 0; r < i; r++) t[e + r] ^= n[r];
    }, l = (i.BlockCipherMode = n.extend({
        createEncryptor: function(t, e) {
            return this.Encryptor.create(t, e);
        },
        createDecryptor: function(t, e) {
            return this.Decryptor.create(t, e);
        },
        init: function(t, e) {
            this._cipher = t, this._iv = e;
        }
    })).extend();
    l.Encryptor = l.extend({
        processBlock: function(t, e) {
            var i = this._cipher, n = i.blockSize;
            c.call(this, t, e, n), i.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n);
        }
    }), l.Decryptor = l.extend({
        processBlock: function(t, e) {
            var i = this._cipher, n = i.blockSize, r = t.slice(e, e + n);
            i.decryptBlock(t, e), c.call(this, t, e, n), this._prevBlock = r;
        }
    }), u = u.CBC = l, l = (e.pad = {}).Pkcs7 = {
        pad: function(t, e) {
            for (var i = 4 * e, i = i - t.sigBytes % i, n = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4) s.push(n);
            i = r.create(s, i), t.concat(i);
        },
        unpad: function(t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2];
        }
    }, i.BlockCipher = h.extend({
        cfg: h.cfg.extend({
            mode: u,
            padding: l
        }),
        reset: function() {
            h.reset.call(this);
            var t = this.cfg, e = t.iv, t = t.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor; else i = t.createDecryptor, 
            this._minBufferSize = 1;
            this._mode = i.call(t, this, e && e.words);
        },
        _doProcessBlock: function(t, e) {
            this._mode.processBlock(t, e);
        },
        _doFinalize: function() {
            var t = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                t.pad(this._data, this.blockSize);
                var e = this._process(!0);
            } else e = this._process(!0), t.unpad(e);
            return e;
        },
        blockSize: 4
    });
    var g = i.CipherParams = n.extend({
        init: function(t) {
            this.mixIn(t);
        },
        toString: function(t) {
            return (t || this.formatter).stringify(this);
        }
    }), u = (e.format = {}).OpenSSL = {
        stringify: function(t) {
            var e = t.ciphertext;
            return t = t.salt, (t ? r.create([ 1398893684, 1701076831 ]).concat(t).concat(e) : e).toString(a);
        },
        parse: function(t) {
            t = a.parse(t);
            var e = t.words;
            if (1398893684 == e[0] && 1701076831 == e[1]) {
                var i = r.create(e.slice(2, 4));
                e.splice(0, 4), t.sigBytes -= 16;
            }
            return g.create({
                ciphertext: t,
                salt: i
            });
        }
    }, d = i.SerializableCipher = n.extend({
        cfg: n.extend({
            format: u
        }),
        encrypt: function(t, e, i, n) {
            n = this.cfg.extend(n);
            var r = t.createEncryptor(i, n);
            return e = r.finalize(e), r = r.cfg, g.create({
                ciphertext: e,
                key: i,
                iv: r.iv,
                algorithm: t,
                mode: r.mode,
                padding: r.padding,
                blockSize: t.blockSize,
                formatter: n.format
            });
        },
        decrypt: function(t, e, i, n) {
            return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(i, n).finalize(e.ciphertext);
        },
        _parse: function(t, e) {
            return "string" == typeof t ? e.parse(t, this) : t;
        }
    }), e = (e.kdf = {}).OpenSSL = {
        execute: function(t, e, i, n) {
            return n || (n = r.random(8)), t = o.create({
                keySize: e + i
            }).compute(t, n), i = r.create(t.words.slice(e), 4 * i), t.sigBytes = 4 * e, g.create({
                key: t,
                iv: i,
                salt: n
            });
        }
    }, f = i.PasswordBasedCipher = d.extend({
        cfg: d.cfg.extend({
            kdf: e
        }),
        encrypt: function(t, e, i, n) {
            return n = this.cfg.extend(n), i = n.kdf.execute(i, t.keySize, t.ivSize), n.iv = i.iv, 
            t = d.encrypt.call(this, t, e, i.key, n), t.mixIn(i), t;
        },
        decrypt: function(t, e, i, n) {
            return n = this.cfg.extend(n), e = this._parse(e, n.format), i = n.kdf.execute(i, t.keySize, t.ivSize, e.salt), 
            n.iv = i.iv, d.decrypt.call(this, t, e, i.key, n);
        }
    });
}(), function() {
    for (var t = CryptoJS, e = t.lib.BlockCipher, i = t.algo, n = [], r = [], s = [], a = [], o = [], h = [], u = [], c = [], l = [], g = [], d = [], f = 0; f < 256; f++) d[f] = f < 128 ? f << 1 : f << 1 ^ 283;
    for (var p = 0, y = 0, f = 0; f < 256; f++) {
        var S = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4, S = S >>> 8 ^ 255 & S ^ 99;
        n[p] = S, r[S] = p;
        var v = d[p], A = d[v], m = d[A], E = 257 * d[S] ^ 16843008 * S;
        s[p] = E << 24 | E >>> 8, a[p] = E << 16 | E >>> 16, o[p] = E << 8 | E >>> 24, h[p] = E, 
        E = 16843009 * m ^ 65537 * A ^ 257 * v ^ 16843008 * p, u[S] = E << 24 | E >>> 8, 
        c[S] = E << 16 | E >>> 16, l[S] = E << 8 | E >>> 24, g[S] = E, p ? (p = v ^ d[d[d[m ^ v]]], 
        y ^= d[d[y]]) : p = y = 1;
    }
    var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], i = i.AES = e.extend({
        _doReset: function() {
            for (var t = this._key, e = t.words, i = t.sigBytes / 4, t = 4 * ((this._nRounds = i + 6) + 1), r = this._keySchedule = [], s = 0; s < t; s++) if (s < i) r[s] = e[s]; else {
                var a = r[s - 1];
                s % i ? i > 6 && s % i == 4 && (a = n[a >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a]) : (a = a << 8 | a >>> 24, 
                a = n[a >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a], 
                a ^= b[s / i | 0] << 24), r[s] = r[s - i] ^ a;
            }
            for (e = this._invKeySchedule = [], i = 0; i < t; i++) s = t - i, a = i % 4 ? r[s] : r[s - 4], 
            e[i] = i < 4 || s <= 4 ? a : u[n[a >>> 24]] ^ c[n[a >>> 16 & 255]] ^ l[n[a >>> 8 & 255]] ^ g[n[255 & a]];
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._keySchedule, s, a, o, h, n);
        },
        decryptBlock: function(t, e) {
            var i = t[e + 1];
            t[e + 1] = t[e + 3], t[e + 3] = i, this._doCryptBlock(t, e, this._invKeySchedule, u, c, l, g, r), 
            i = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = i;
        },
        _doCryptBlock: function(t, e, i, n, r, s, a, o) {
            for (var h = this._nRounds, u = t[e] ^ i[0], c = t[e + 1] ^ i[1], l = t[e + 2] ^ i[2], g = t[e + 3] ^ i[3], d = 4, f = 1; f < h; f++) var p = n[u >>> 24] ^ r[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ a[255 & g] ^ i[d++], y = n[c >>> 24] ^ r[l >>> 16 & 255] ^ s[g >>> 8 & 255] ^ a[255 & u] ^ i[d++], S = n[l >>> 24] ^ r[g >>> 16 & 255] ^ s[u >>> 8 & 255] ^ a[255 & c] ^ i[d++], g = n[g >>> 24] ^ r[u >>> 16 & 255] ^ s[c >>> 8 & 255] ^ a[255 & l] ^ i[d++], u = p, c = y, l = S;
            p = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & g]) ^ i[d++], 
            y = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[g >>> 8 & 255] << 8 | o[255 & u]) ^ i[d++], 
            S = (o[l >>> 24] << 24 | o[g >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & c]) ^ i[d++], 
            g = (o[g >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & l]) ^ i[d++], 
            t[e] = p, t[e + 1] = y, t[e + 2] = S, t[e + 3] = g;
        },
        keySize: 8
    });
    t.AES = e._createHelper(i);
}(), function() {
    function t(t, e) {
        var i = (this._lBlock >>> t ^ this._rBlock) & e;
        this._rBlock ^= i, this._lBlock ^= i << t;
    }
    function e(t, e) {
        var i = (this._rBlock >>> t ^ this._lBlock) & e;
        this._lBlock ^= i, this._rBlock ^= i << t;
    }
    var i = CryptoJS, n = i.lib, r = n.WordArray, n = n.BlockCipher, s = i.algo, a = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], o = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], h = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], u = [ {
        0: 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
    }, {
        0: 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
    }, {
        0: 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
    }, {
        0: 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
    }, {
        0: 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
    }, {
        0: 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
    }, {
        0: 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
    }, {
        0: 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
    } ], c = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], l = s.DES = n.extend({
        _doReset: function() {
            for (var t = this._key.words, e = [], i = 0; i < 56; i++) {
                var n = a[i] - 1;
                e[i] = t[n >>> 5] >>> 31 - n % 32 & 1;
            }
            for (t = this._subKeys = [], n = 0; n < 16; n++) {
                for (var r = t[n] = [], s = h[n], i = 0; i < 24; i++) r[i / 6 | 0] |= e[(o[i] - 1 + s) % 28] << 31 - i % 6, 
                r[4 + (i / 6 | 0)] |= e[28 + (o[i + 24] - 1 + s) % 28] << 31 - i % 6;
                for (r[0] = r[0] << 1 | r[0] >>> 31, i = 1; i < 7; i++) r[i] >>>= 4 * (i - 1) + 3;
                r[7] = r[7] << 5 | r[7] >>> 27;
            }
            for (e = this._invSubKeys = [], i = 0; i < 16; i++) e[i] = t[15 - i];
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._subKeys);
        },
        decryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._invSubKeys);
        },
        _doCryptBlock: function(i, n, r) {
            this._lBlock = i[n], this._rBlock = i[n + 1], t.call(this, 4, 252645135), t.call(this, 16, 65535), 
            e.call(this, 2, 858993459), e.call(this, 8, 16711935), t.call(this, 1, 1431655765);
            for (var s = 0; s < 16; s++) {
                for (var a = r[s], o = this._lBlock, h = this._rBlock, l = 0, g = 0; g < 8; g++) l |= u[g][((h ^ a[g]) & c[g]) >>> 0];
                this._lBlock = h, this._rBlock = o ^ l;
            }
            r = this._lBlock, this._lBlock = this._rBlock, this._rBlock = r, t.call(this, 1, 1431655765), 
            e.call(this, 8, 16711935), e.call(this, 2, 858993459), t.call(this, 16, 65535), 
            t.call(this, 4, 252645135), i[n] = this._lBlock, i[n + 1] = this._rBlock;
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2
    });
    i.DES = n._createHelper(l), s = s.TripleDES = n.extend({
        _doReset: function() {
            var t = this._key.words;
            this._des1 = l.createEncryptor(r.create(t.slice(0, 2))), this._des2 = l.createEncryptor(r.create(t.slice(2, 4))), 
            this._des3 = l.createEncryptor(r.create(t.slice(4, 6)));
        },
        encryptBlock: function(t, e) {
            this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
        },
        decryptBlock: function(t, e) {
            this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
    }), i.TripleDES = n._createHelper(s);
}(), function() {
    var t = CryptoJS, e = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function(t) {
            var e = t.words, i = t.sigBytes, n = this._map;
            t.clamp(), t = [];
            for (var r = 0; r < i; r += 3) for (var s = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; a < 4 && r + .75 * a < i; a++) t.push(n.charAt(s >>> 6 * (3 - a) & 63));
            if (e = n.charAt(64)) for (;t.length % 4; ) t.push(e);
            return t.join("");
        },
        parse: function(t) {
            var i = t.length, n = this._map, r = n.charAt(64);
            r && -1 != (r = t.indexOf(r)) && (i = r);
            for (var r = [], s = 0, a = 0; a < i; a++) if (a % 4) {
                var o = n.indexOf(t.charAt(a - 1)) << a % 4 * 2, h = n.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                r[s >>> 2] |= (o | h) << 24 - s % 4 * 8, s++;
            }
            return e.create(r, s);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
}(), function(t) {
    function e(t, e, i, n, r, s, a) {
        return ((t = t + (e & i | ~e & n) + r + a) << s | t >>> 32 - s) + e;
    }
    function i(t, e, i, n, r, s, a) {
        return ((t = t + (e & n | i & ~n) + r + a) << s | t >>> 32 - s) + e;
    }
    function n(t, e, i, n, r, s, a) {
        return ((t = t + (e ^ i ^ n) + r + a) << s | t >>> 32 - s) + e;
    }
    function r(t, e, i, n, r, s, a) {
        return ((t = t + (i ^ (e | ~n)) + r + a) << s | t >>> 32 - s) + e;
    }
    for (var s = CryptoJS, a = s.lib, o = a.WordArray, h = a.Hasher, a = s.algo, u = [], c = 0; c < 64; c++) u[c] = 4294967296 * t.abs(t.sin(c + 1)) | 0;
    a = a.MD5 = h.extend({
        _doReset: function() {
            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(t, s) {
            for (var a = 0; a < 16; a++) {
                var o = s + a, h = t[o];
                t[o] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
            }
            var a = this._hash.words, o = t[s + 0], h = t[s + 1], c = t[s + 2], l = t[s + 3], g = t[s + 4], d = t[s + 5], f = t[s + 6], p = t[s + 7], y = t[s + 8], S = t[s + 9], v = t[s + 10], A = t[s + 11], m = t[s + 12], E = t[s + 13], b = t[s + 14], R = t[s + 15], x = a[0], F = a[1], K = a[2], H = a[3], x = e(x, F, K, H, o, 7, u[0]), H = e(H, x, F, K, h, 12, u[1]), K = e(K, H, x, F, c, 17, u[2]), F = e(F, K, H, x, l, 22, u[3]), x = e(x, F, K, H, g, 7, u[4]), H = e(H, x, F, K, d, 12, u[5]), K = e(K, H, x, F, f, 17, u[6]), F = e(F, K, H, x, p, 22, u[7]), x = e(x, F, K, H, y, 7, u[8]), H = e(H, x, F, K, S, 12, u[9]), K = e(K, H, x, F, v, 17, u[10]), F = e(F, K, H, x, A, 22, u[11]), x = e(x, F, K, H, m, 7, u[12]), H = e(H, x, F, K, E, 12, u[13]), K = e(K, H, x, F, b, 17, u[14]), F = e(F, K, H, x, R, 22, u[15]), x = i(x, F, K, H, h, 5, u[16]), H = i(H, x, F, K, f, 9, u[17]), K = i(K, H, x, F, A, 14, u[18]), F = i(F, K, H, x, o, 20, u[19]), x = i(x, F, K, H, d, 5, u[20]), H = i(H, x, F, K, v, 9, u[21]), K = i(K, H, x, F, R, 14, u[22]), F = i(F, K, H, x, g, 20, u[23]), x = i(x, F, K, H, S, 5, u[24]), H = i(H, x, F, K, b, 9, u[25]), K = i(K, H, x, F, l, 14, u[26]), F = i(F, K, H, x, y, 20, u[27]), x = i(x, F, K, H, E, 5, u[28]), H = i(H, x, F, K, c, 9, u[29]), K = i(K, H, x, F, p, 14, u[30]), F = i(F, K, H, x, m, 20, u[31]), x = n(x, F, K, H, d, 4, u[32]), H = n(H, x, F, K, y, 11, u[33]), K = n(K, H, x, F, A, 16, u[34]), F = n(F, K, H, x, b, 23, u[35]), x = n(x, F, K, H, h, 4, u[36]), H = n(H, x, F, K, g, 11, u[37]), K = n(K, H, x, F, p, 16, u[38]), F = n(F, K, H, x, v, 23, u[39]), x = n(x, F, K, H, E, 4, u[40]), H = n(H, x, F, K, o, 11, u[41]), K = n(K, H, x, F, l, 16, u[42]), F = n(F, K, H, x, f, 23, u[43]), x = n(x, F, K, H, S, 4, u[44]), H = n(H, x, F, K, m, 11, u[45]), K = n(K, H, x, F, R, 16, u[46]), F = n(F, K, H, x, c, 23, u[47]), x = r(x, F, K, H, o, 6, u[48]), H = r(H, x, F, K, p, 10, u[49]), K = r(K, H, x, F, b, 15, u[50]), F = r(F, K, H, x, d, 21, u[51]), x = r(x, F, K, H, m, 6, u[52]), H = r(H, x, F, K, l, 10, u[53]), K = r(K, H, x, F, v, 15, u[54]), F = r(F, K, H, x, h, 21, u[55]), x = r(x, F, K, H, y, 6, u[56]), H = r(H, x, F, K, R, 10, u[57]), K = r(K, H, x, F, f, 15, u[58]), F = r(F, K, H, x, E, 21, u[59]), x = r(x, F, K, H, g, 6, u[60]), H = r(H, x, F, K, A, 10, u[61]), K = r(K, H, x, F, c, 15, u[62]), F = r(F, K, H, x, S, 21, u[63]);
            a[0] = a[0] + x | 0, a[1] = a[1] + F | 0, a[2] = a[2] + K | 0, a[3] = a[3] + H | 0;
        },
        _doFinalize: function() {
            var e = this._data, i = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
            i[r >>> 5] |= 128 << 24 - r % 32;
            var s = t.floor(n / 4294967296);
            for (i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
            i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
            e.sigBytes = 4 * (i.length + 1), this._process(), e = this._hash, i = e.words, n = 0; n < 4; n++) r = i[n], 
            i[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
            return e;
        },
        clone: function() {
            var t = h.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    }), s.MD5 = h._createHelper(a), s.HmacMD5 = h._createHmacHelper(a);
}(Math), function() {
    var t = CryptoJS, e = t.lib, i = e.WordArray, n = e.Hasher, r = [], e = t.algo.SHA1 = n.extend({
        _doReset: function() {
            this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(t, e) {
            for (var i = this._hash.words, n = i[0], s = i[1], a = i[2], o = i[3], h = i[4], u = 0; u < 80; u++) {
                if (u < 16) r[u] = 0 | t[e + u]; else {
                    var c = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
                    r[u] = c << 1 | c >>> 31;
                }
                c = (n << 5 | n >>> 27) + h + r[u], c = u < 20 ? c + (1518500249 + (s & a | ~s & o)) : u < 40 ? c + (1859775393 + (s ^ a ^ o)) : u < 60 ? c + ((s & a | s & o | a & o) - 1894007588) : c + ((s ^ a ^ o) - 899497514), 
                h = o, o = a, a = s << 30 | s >>> 2, s = n, n = c;
            }
            i[0] = i[0] + n | 0, i[1] = i[1] + s | 0, i[2] = i[2] + a | 0, i[3] = i[3] + o | 0, 
            i[4] = i[4] + h | 0;
        },
        _doFinalize: function() {
            var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296), 
            e[15 + (n + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash;
        },
        clone: function() {
            var t = n.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    t.SHA1 = n._createHelper(e), t.HmacSHA1 = n._createHmacHelper(e);
}(), function(t) {
    for (var e = CryptoJS, i = e.lib, n = i.WordArray, r = i.Hasher, i = e.algo, s = [], a = [], o = function(t) {
        return 4294967296 * (t - (0 | t)) | 0;
    }, h = 2, u = 0; u < 64; ) {
        var c;
        t: {
            c = h;
            for (var l = t.sqrt(c), g = 2; g <= l; g++) if (!(c % g)) {
                c = !1;
                break t;
            }
            c = !0;
        }
        c && (u < 8 && (s[u] = o(t.pow(h, .5))), a[u] = o(t.pow(h, 1 / 3)), u++), h++;
    }
    var d = [], i = i.SHA256 = r.extend({
        _doReset: function() {
            this._hash = new n.init(s.slice(0));
        },
        _doProcessBlock: function(t, e) {
            for (var i = this._hash.words, n = i[0], r = i[1], s = i[2], o = i[3], h = i[4], u = i[5], c = i[6], l = i[7], g = 0; g < 64; g++) {
                if (g < 16) d[g] = 0 | t[e + g]; else {
                    var f = d[g - 15], p = d[g - 2];
                    d[g] = ((f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3) + d[g - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + d[g - 16];
                }
                f = l + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & c) + a[g] + d[g], 
                p = ((n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)) + (n & r ^ n & s ^ r & s), 
                l = c, c = u, u = h, h = o + f | 0, o = s, s = r, r = n, n = f + p | 0;
            }
            i[0] = i[0] + n | 0, i[1] = i[1] + r | 0, i[2] = i[2] + s | 0, i[3] = i[3] + o | 0, 
            i[4] = i[4] + h | 0, i[5] = i[5] + u | 0, i[6] = i[6] + c | 0, i[7] = i[7] + l | 0;
        },
        _doFinalize: function() {
            var e = this._data, i = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
            return i[r >>> 5] |= 128 << 24 - r % 32, i[14 + (r + 64 >>> 9 << 4)] = t.floor(n / 4294967296), 
            i[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * i.length, this._process(), this._hash;
        },
        clone: function() {
            var t = r.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    e.SHA256 = r._createHelper(i), e.HmacSHA256 = r._createHmacHelper(i);
}(Math), function() {
    var t = CryptoJS, e = t.lib.WordArray, i = t.algo, n = i.SHA256, i = i.SHA224 = n.extend({
        _doReset: function() {
            this._hash = new e.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
        },
        _doFinalize: function() {
            var t = n._doFinalize.call(this);
            return t.sigBytes -= 4, t;
        }
    });
    t.SHA224 = n._createHelper(i), t.HmacSHA224 = n._createHmacHelper(i);
}(), function() {
    function t() {
        return r.create.apply(r, arguments);
    }
    for (var e = CryptoJS, i = e.lib.Hasher, n = e.x64, r = n.Word, s = n.WordArray, n = e.algo, a = [ t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591) ], o = [], h = 0; h < 80; h++) o[h] = t();
    n = n.SHA512 = i.extend({
        _doReset: function() {
            this._hash = new s.init([ new r.init(1779033703, 4089235720), new r.init(3144134277, 2227873595), new r.init(1013904242, 4271175723), new r.init(2773480762, 1595750129), new r.init(1359893119, 2917565137), new r.init(2600822924, 725511199), new r.init(528734635, 4215389547), new r.init(1541459225, 327033209) ]);
        },
        _doProcessBlock: function(t, e) {
            for (var i = this._hash.words, n = i[0], r = i[1], s = i[2], h = i[3], u = i[4], c = i[5], l = i[6], i = i[7], g = n.high, d = n.low, f = r.high, p = r.low, y = s.high, S = s.low, v = h.high, A = h.low, m = u.high, E = u.low, b = c.high, R = c.low, x = l.high, F = l.low, K = i.high, H = i.low, w = g, U = d, C = f, O = p, P = y, J = S, I = v, N = A, B = m, D = E, T = b, j = R, _ = x, V = F, L = K, X = H, M = 0; M < 80; M++) {
                var k = o[M];
                if (M < 16) var q = k.high = 0 | t[e + 2 * M], Y = k.low = 0 | t[e + 2 * M + 1]; else {
                    var q = o[M - 15], Y = q.high, z = q.low, q = (Y >>> 1 | z << 31) ^ (Y >>> 8 | z << 24) ^ Y >>> 7, z = (z >>> 1 | Y << 31) ^ (z >>> 8 | Y << 24) ^ (z >>> 7 | Y << 25), W = o[M - 2], Y = W.high, G = W.low, W = (Y >>> 19 | G << 13) ^ (Y << 3 | G >>> 29) ^ Y >>> 6, G = (G >>> 19 | Y << 13) ^ (G << 3 | Y >>> 29) ^ (G >>> 6 | Y << 26), Y = o[M - 7], $ = Y.high, Z = o[M - 16], Q = Z.high, Z = Z.low, Y = z + Y.low, q = q + $ + (Y >>> 0 < z >>> 0 ? 1 : 0), Y = Y + G, q = q + W + (Y >>> 0 < G >>> 0 ? 1 : 0), Y = Y + Z, q = q + Q + (Y >>> 0 < Z >>> 0 ? 1 : 0);
                    k.high = q, k.low = Y;
                }
                var $ = B & T ^ ~B & _, Z = D & j ^ ~D & V, k = w & C ^ w & P ^ C & P, tt = U & O ^ U & J ^ O & J, z = (w >>> 28 | U << 4) ^ (w << 30 | U >>> 2) ^ (w << 25 | U >>> 7), W = (U >>> 28 | w << 4) ^ (U << 30 | w >>> 2) ^ (U << 25 | w >>> 7), G = a[M], et = G.high, it = G.low, G = X + ((D >>> 14 | B << 18) ^ (D >>> 18 | B << 14) ^ (D << 23 | B >>> 9)), Q = L + ((B >>> 14 | D << 18) ^ (B >>> 18 | D << 14) ^ (B << 23 | D >>> 9)) + (G >>> 0 < X >>> 0 ? 1 : 0), G = G + Z, Q = Q + $ + (G >>> 0 < Z >>> 0 ? 1 : 0), G = G + it, Q = Q + et + (G >>> 0 < it >>> 0 ? 1 : 0), G = G + Y, Q = Q + q + (G >>> 0 < Y >>> 0 ? 1 : 0), Y = W + tt, k = z + k + (Y >>> 0 < W >>> 0 ? 1 : 0), L = _, X = V, _ = T, V = j, T = B, j = D, D = N + G | 0, B = I + Q + (D >>> 0 < N >>> 0 ? 1 : 0) | 0, I = P, N = J, P = C, J = O, C = w, O = U, U = G + Y | 0, w = Q + k + (U >>> 0 < G >>> 0 ? 1 : 0) | 0;
            }
            d = n.low = d + U, n.high = g + w + (d >>> 0 < U >>> 0 ? 1 : 0), p = r.low = p + O, 
            r.high = f + C + (p >>> 0 < O >>> 0 ? 1 : 0), S = s.low = S + J, s.high = y + P + (S >>> 0 < J >>> 0 ? 1 : 0), 
            A = h.low = A + N, h.high = v + I + (A >>> 0 < N >>> 0 ? 1 : 0), E = u.low = E + D, 
            u.high = m + B + (E >>> 0 < D >>> 0 ? 1 : 0), R = c.low = R + j, c.high = b + T + (R >>> 0 < j >>> 0 ? 1 : 0), 
            F = l.low = F + V, l.high = x + _ + (F >>> 0 < V >>> 0 ? 1 : 0), H = i.low = H + X, 
            i.high = K + L + (H >>> 0 < X >>> 0 ? 1 : 0);
        },
        _doFinalize: function() {
            var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            return e[n >>> 5] |= 128 << 24 - n % 32, e[30 + (n + 128 >>> 10 << 5)] = Math.floor(i / 4294967296), 
            e[31 + (n + 128 >>> 10 << 5)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32();
        },
        clone: function() {
            var t = i.clone.call(this);
            return t._hash = this._hash.clone(), t;
        },
        blockSize: 32
    }), e.SHA512 = i._createHelper(n), e.HmacSHA512 = i._createHmacHelper(n);
}(), function() {
    var t = CryptoJS, e = t.x64, i = e.Word, n = e.WordArray, e = t.algo, r = e.SHA512, e = e.SHA384 = r.extend({
        _doReset: function() {
            this._hash = new n.init([ new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428) ]);
        },
        _doFinalize: function() {
            var t = r._doFinalize.call(this);
            return t.sigBytes -= 16, t;
        }
    });
    t.SHA384 = r._createHelper(e), t.HmacSHA384 = r._createHmacHelper(e);
}(), function() {
    var t = CryptoJS, e = t.lib, i = e.WordArray, n = e.Hasher, e = t.algo, r = i.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), s = i.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), a = i.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), o = i.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), h = i.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), u = i.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]), e = e.RIPEMD160 = n.extend({
        _doReset: function() {
            this._hash = i.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(t, e) {
            for (var i = 0; i < 16; i++) {
                var n = e + i, c = t[n];
                t[n] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
            }
            var l, g, d, f, p, y, S, v, A, m, n = this._hash.words, c = h.words, E = u.words, b = r.words, R = s.words, x = a.words, F = o.words;
            y = l = n[0], S = g = n[1], v = d = n[2], A = f = n[3], m = p = n[4];
            for (var K, i = 0; i < 80; i += 1) K = l + t[e + b[i]] | 0, K = i < 16 ? K + ((g ^ d ^ f) + c[0]) : i < 32 ? K + ((g & d | ~g & f) + c[1]) : i < 48 ? K + (((g | ~d) ^ f) + c[2]) : i < 64 ? K + ((g & f | d & ~f) + c[3]) : K + ((g ^ (d | ~f)) + c[4]), 
            K |= 0, K = K << x[i] | K >>> 32 - x[i], K = K + p | 0, l = p, p = f, f = d << 10 | d >>> 22, 
            d = g, g = K, K = y + t[e + R[i]] | 0, K = i < 16 ? K + ((S ^ (v | ~A)) + E[0]) : i < 32 ? K + ((S & A | v & ~A) + E[1]) : i < 48 ? K + (((S | ~v) ^ A) + E[2]) : i < 64 ? K + ((S & v | ~S & A) + E[3]) : K + ((S ^ v ^ A) + E[4]), 
            K |= 0, K = K << F[i] | K >>> 32 - F[i], K = K + m | 0, y = m, m = A, A = v << 10 | v >>> 22, 
            v = S, S = K;
            K = n[1] + d + A | 0, n[1] = n[2] + f + m | 0, n[2] = n[3] + p + y | 0, n[3] = n[4] + l + S | 0, 
            n[4] = n[0] + g + v | 0, n[0] = K;
        },
        _doFinalize: function() {
            var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            for (e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
            t.sigBytes = 4 * (e.length + 1), this._process(), t = this._hash, e = t.words, i = 0; i < 5; i++) n = e[i], 
            e[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
            return t;
        },
        clone: function() {
            var t = n.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    });
    t.RIPEMD160 = n._createHelper(e), t.HmacRIPEMD160 = n._createHmacHelper(e);
}(Math), function() {
    var t = CryptoJS, e = t.enc.Utf8;
    t.algo.HMAC = t.lib.Base.extend({
        init: function(t, i) {
            t = this._hasher = new t.init(), "string" == typeof i && (i = e.parse(i));
            var n = t.blockSize, r = 4 * n;
            i.sigBytes > r && (i = t.finalize(i)), i.clamp();
            for (var s = this._oKey = i.clone(), a = this._iKey = i.clone(), o = s.words, h = a.words, u = 0; u < n; u++) o[u] ^= 1549556828, 
            h[u] ^= 909522486;
            s.sigBytes = a.sigBytes = r, this.reset();
        },
        reset: function() {
            var t = this._hasher;
            t.reset(), t.update(this._iKey);
        },
        update: function(t) {
            return this._hasher.update(t), this;
        },
        finalize: function(t) {
            var e = this._hasher;
            return t = e.finalize(t), e.reset(), e.finalize(this._oKey.clone().concat(t));
        }
    });
}(), function() {
    var t = CryptoJS, e = t.lib, i = e.Base, n = e.WordArray, e = t.algo, r = e.HMAC, s = e.PBKDF2 = i.extend({
        cfg: i.extend({
            keySize: 4,
            hasher: e.SHA1,
            iterations: 1
        }),
        init: function(t) {
            this.cfg = this.cfg.extend(t);
        },
        compute: function(t, e) {
            for (var i = this.cfg, s = r.create(i.hasher, t), a = n.create(), o = n.create([ 1 ]), h = a.words, u = o.words, c = i.keySize, i = i.iterations; h.length < c; ) {
                var l = s.update(e).finalize(o);
                s.reset();
                for (var g = l.words, d = g.length, f = l, p = 1; p < i; p++) {
                    f = s.finalize(f), s.reset();
                    for (var y = f.words, S = 0; S < d; S++) g[S] ^= y[S];
                }
                a.concat(l), u[0]++;
            }
            return a.sigBytes = 4 * c, a;
        }
    });
    t.PBKDF2 = function(t, e, i) {
        return s.create(i).compute(t, e);
    };
}();

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64pad = "=", dbits = void 0, canary = 0xdeadbeefcafe, j_lm = 15715070 == (16777215 & canary);

j_lm && "Microsoft Internet Explorer" == navigator2.appName ? (BigInteger.prototype.am = am2, 
dbits = 30) : j_lm && "Netscape" != navigator2.appName ? (BigInteger.prototype.am = am1, 
dbits = 26) : (BigInteger.prototype.am = am3, dbits = 28), BigInteger.prototype.DB = dbits, 
BigInteger.prototype.DM = (1 << dbits) - 1, BigInteger.prototype.DV = 1 << dbits;

var BI_FP = 52;

BigInteger.prototype.FV = Math.pow(2, BI_FP), BigInteger.prototype.F1 = BI_FP - dbits, 
BigInteger.prototype.F2 = 2 * dbits - BI_FP;

var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz", BI_RC = new Array(), rr = void 0, vv = void 0;

for (rr = "0".charCodeAt(0), vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;

for (rr = "a".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

for (rr = "A".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

Classic.prototype.convert = cConvert, Classic.prototype.revert = cRevert, Classic.prototype.reduce = cReduce, 
Classic.prototype.mulTo = cMulTo, Classic.prototype.sqrTo = cSqrTo, Montgomery.prototype.convert = montConvert, 
Montgomery.prototype.revert = montRevert, Montgomery.prototype.reduce = montReduce, 
Montgomery.prototype.mulTo = montMulTo, Montgomery.prototype.sqrTo = montSqrTo, 
BigInteger.prototype.copyTo = bnpCopyTo, BigInteger.prototype.fromInt = bnpFromInt, 
BigInteger.prototype.fromString = bnpFromString, BigInteger.prototype.clamp = bnpClamp, 
BigInteger.prototype.dlShiftTo = bnpDLShiftTo, BigInteger.prototype.drShiftTo = bnpDRShiftTo, 
BigInteger.prototype.lShiftTo = bnpLShiftTo, BigInteger.prototype.rShiftTo = bnpRShiftTo, 
BigInteger.prototype.subTo = bnpSubTo, BigInteger.prototype.multiplyTo = bnpMultiplyTo, 
BigInteger.prototype.squareTo = bnpSquareTo, BigInteger.prototype.divRemTo = bnpDivRemTo, 
BigInteger.prototype.invDigit = bnpInvDigit, BigInteger.prototype.isEven = bnpIsEven, 
BigInteger.prototype.exp = bnpExp, BigInteger.prototype.toString = bnToString, BigInteger.prototype.negate = bnNegate, 
BigInteger.prototype.abs = bnAbs, BigInteger.prototype.compareTo = bnCompareTo, 
BigInteger.prototype.bitLength = bnBitLength, BigInteger.prototype.mod = bnMod, 
BigInteger.prototype.modPowInt = bnModPowInt, BigInteger.ZERO = nbv(0), BigInteger.ONE = nbv(1), 
NullExp.prototype.convert = nNop, NullExp.prototype.revert = nNop, NullExp.prototype.mulTo = nMulTo, 
NullExp.prototype.sqrTo = nSqrTo, Barrett.prototype.convert = barrettConvert, Barrett.prototype.revert = barrettRevert, 
Barrett.prototype.reduce = barrettReduce, Barrett.prototype.mulTo = barrettMulTo, 
Barrett.prototype.sqrTo = barrettSqrTo;

var lowprimes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

BigInteger.prototype.chunkSize = bnpChunkSize, BigInteger.prototype.toRadix = bnpToRadix, 
BigInteger.prototype.fromRadix = bnpFromRadix, BigInteger.prototype.fromNumber = bnpFromNumber, 
BigInteger.prototype.bitwiseTo = bnpBitwiseTo, BigInteger.prototype.changeBit = bnpChangeBit, 
BigInteger.prototype.addTo = bnpAddTo, BigInteger.prototype.dMultiply = bnpDMultiply, 
BigInteger.prototype.dAddOffset = bnpDAddOffset, BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo, 
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo, BigInteger.prototype.modInt = bnpModInt, 
BigInteger.prototype.millerRabin = bnpMillerRabin, BigInteger.prototype.clone = bnClone, 
BigInteger.prototype.intValue = bnIntValue, BigInteger.prototype.byteValue = bnByteValue, 
BigInteger.prototype.shortValue = bnShortValue, BigInteger.prototype.signum = bnSigNum, 
BigInteger.prototype.toByteArray = bnToByteArray, BigInteger.prototype.equals = bnEquals, 
BigInteger.prototype.min = bnMin, BigInteger.prototype.max = bnMax, BigInteger.prototype.and = bnAnd, 
BigInteger.prototype.or = bnOr, BigInteger.prototype.xor = bnXor, BigInteger.prototype.andNot = bnAndNot, 
BigInteger.prototype.not = bnNot, BigInteger.prototype.shiftLeft = bnShiftLeft, 
BigInteger.prototype.shiftRight = bnShiftRight, BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit, 
BigInteger.prototype.bitCount = bnBitCount, BigInteger.prototype.testBit = bnTestBit, 
BigInteger.prototype.setBit = bnSetBit, BigInteger.prototype.clearBit = bnClearBit, 
BigInteger.prototype.flipBit = bnFlipBit, BigInteger.prototype.add = bnAdd, BigInteger.prototype.subtract = bnSubtract, 
BigInteger.prototype.multiply = bnMultiply, BigInteger.prototype.divide = bnDivide, 
BigInteger.prototype.remainder = bnRemainder, BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder, 
BigInteger.prototype.modPow = bnModPow, BigInteger.prototype.modInverse = bnModInverse, 
BigInteger.prototype.pow = bnPow, BigInteger.prototype.gcd = bnGCD, BigInteger.prototype.isProbablePrime = bnIsProbablePrime, 
BigInteger.prototype.square = bnSquare, Arcfour.prototype.init = ARC4init, Arcfour.prototype.next = ARC4next;

var rng_psize = 256, rng_state = void 0, rng_pool = void 0, rng_pptr = void 0;

if (null == rng_pool) {
    rng_pool = new Array(), rng_pptr = 0;
    var t = void 0;
    if (window2.crypto && window2.crypto.getRandomValues) {
        var ua = new Uint8Array(32);
        for (window2.crypto.getRandomValues(ua), t = 0; t < 32; ++t) rng_pool[rng_pptr++] = ua[t];
    }
    if ("Netscape" == navigator2.appName && navigator2.appVersion < "5" && window2.crypto && window2.crypto.random) {
        var z = window2.crypto.random(32);
        for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = 255 & z.charCodeAt(t);
    }
    for (;rng_pptr < rng_psize; ) t = Math.floor(65536 * Math.random()), rng_pool[rng_pptr++] = t >>> 8, 
    rng_pool[rng_pptr++] = 255 & t;
    rng_pptr = 0, rng_seed_time();
}

SecureRandom.prototype.nextBytes = rng_get_bytes, RSAKey.prototype.doPublic = RSADoPublic, 
RSAKey.prototype.setPublic = RSASetPublic, RSAKey.prototype.encrypt = RSAEncrypt, 
RSAKey.prototype.encryptOAEP = RSAEncryptOAEP, RSAKey.prototype.type = "RSA", RSAKey.prototype.doPrivate = RSADoPrivate, 
RSAKey.prototype.setPrivate = RSASetPrivate, RSAKey.prototype.setPrivateEx = RSASetPrivateEx, 
RSAKey.prototype.generate = RSAGenerate, RSAKey.prototype.decrypt = RSADecrypt, 
RSAKey.prototype.decryptOAEP = RSADecryptOAEP, ECFieldElementFp.prototype.equals = feFpEquals, 
ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger, ECFieldElementFp.prototype.negate = feFpNegate, 
ECFieldElementFp.prototype.add = feFpAdd, ECFieldElementFp.prototype.subtract = feFpSubtract, 
ECFieldElementFp.prototype.multiply = feFpMultiply, ECFieldElementFp.prototype.square = feFpSquare, 
ECFieldElementFp.prototype.divide = feFpDivide, ECPointFp.prototype.getX = pointFpGetX, 
ECPointFp.prototype.getY = pointFpGetY, ECPointFp.prototype.equals = pointFpEquals, 
ECPointFp.prototype.isInfinity = pointFpIsInfinity, ECPointFp.prototype.negate = pointFpNegate, 
ECPointFp.prototype.add = pointFpAdd, ECPointFp.prototype.twice = pointFpTwice, 
ECPointFp.prototype.multiply = pointFpMultiply, ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo, 
ECCurveFp.prototype.getQ = curveFpGetQ, ECCurveFp.prototype.getA = curveFpGetA, 
ECCurveFp.prototype.getB = curveFpGetB, ECCurveFp.prototype.equals = curveFpEquals, 
ECCurveFp.prototype.getInfinity = curveFpGetInfinity, ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger, 
ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex, ECFieldElementFp.prototype.getByteLength = function() {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
}, ECPointFp.prototype.getEncoded = function(t) {
    var e = function(t, e) {
        var i = t.toByteArrayUnsigned();
        if (e < i.length) i = i.slice(i.length - e); else for (;e > i.length; ) i.unshift(0);
        return i;
    }, i = this.getX().toBigInteger(), n = this.getY().toBigInteger(), r = e(i, 32);
    return t ? n.isEven() ? r.unshift(2) : r.unshift(3) : (r.unshift(4), r = r.concat(e(n, 32))), 
    r;
}, ECPointFp.decodeFrom = function(t, e) {
    var i = (e[0], e.length - 1), n = e.slice(1, 1 + i / 2), r = e.slice(1 + i / 2, 1 + i);
    n.unshift(0), r.unshift(0);
    var s = new BigInteger(n), a = new BigInteger(r);
    return new ECPointFp(t, t.fromBigInteger(s), t.fromBigInteger(a));
}, ECPointFp.decodeFromHex = function(t, e) {
    var i = (e.substr(0, 2), e.length - 2), n = e.substr(2, i / 2), r = e.substr(2 + i / 2, i / 2), s = new BigInteger(n, 16), a = new BigInteger(r, 16);
    return new ECPointFp(t, t.fromBigInteger(s), t.fromBigInteger(a));
}, ECPointFp.prototype.add2D = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    if (this.x.equals(t.x)) return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
    var e = t.x.subtract(this.x), i = t.y.subtract(this.y), n = i.divide(e), r = n.square().subtract(this.x).subtract(t.x), s = n.multiply(this.x.subtract(r)).subtract(this.y);
    return new ECPointFp(this.curve, r, s);
}, ECPointFp.prototype.twice2D = function() {
    if (this.isInfinity()) return this;
    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
    var t = this.curve.fromBigInteger(BigInteger.valueOf(2)), e = this.curve.fromBigInteger(BigInteger.valueOf(3)), i = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)), n = i.square().subtract(this.x.multiply(t)), r = i.multiply(this.x.subtract(n)).subtract(this.y);
    return new ECPointFp(this.curve, n, r);
}, ECPointFp.prototype.multiply2D = function(t) {
    if (this.isInfinity()) return this;
    if (0 == t.signum()) return this.curve.getInfinity();
    var e = t, i = e.multiply(new BigInteger("3")), n = this.negate(), r = this, s = void 0;
    for (s = i.bitLength() - 2; s > 0; --s) {
        r = r.twice();
        var a = i.testBit(s);
        a != e.testBit(s) && (r = r.add2D(a ? this : n));
    }
    return r;
}, ECPointFp.prototype.isOnCurve = function() {
    var t = this.getX().toBigInteger(), e = this.getY().toBigInteger(), i = this.curve.getA().toBigInteger(), n = this.curve.getB().toBigInteger(), r = this.curve.getQ(), s = e.multiply(e).mod(r), a = t.multiply(t).multiply(t).add(i.multiply(t)).add(n).mod(r);
    return s.equals(a);
}, ECPointFp.prototype.toString = function() {
    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
}, ECPointFp.prototype.validate = function() {
    var t = this.curve.getQ();
    if (this.isInfinity()) throw new Error("Point is at infinity.");
    var e = this.getX().toBigInteger(), i = this.getY().toBigInteger();
    if (e.compareTo(BigInteger.ONE) < 0 || e.compareTo(t.subtract(BigInteger.ONE)) > 0) throw new Error("x coordinate out of bounds");
    if (i.compareTo(BigInteger.ONE) < 0 || i.compareTo(t.subtract(BigInteger.ONE)) > 0) throw new Error("y coordinate out of bounds");
    if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
    if (this.multiply(t).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
    return !0;
};

var jsonParse = function() {
    function t(t, e, i) {
        return e ? n[e] : String.fromCharCode(parseInt(i, 16));
    }
    var e = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), i = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), n = {
        '"': '"',
        "/": "/",
        "\\": "\\",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
    }, r = new String(""), s = (Object, Array, Object.hasOwnProperty);
    return function(n, a) {
        var o = n.match(e), h = void 0, u = o[0], c = !1;
        "{" === u ? h = {} : "[" === u ? h = [] : (h = [], c = !0);
        for (var l = void 0, g = [ h ], d = 1 - c, f = o.length; d < f; ++d) {
            u = o[d];
            var p;
            switch (u.charCodeAt(0)) {
              default:
                p = g[0], p[l || p.length] = +u, l = void 0;
                break;

              case 34:
                if (u = u.substring(1, u.length - 1), -1 !== u.indexOf("\\") && (u = u.replace(i, t)), 
                p = g[0], !l) {
                    if (!(p instanceof Array)) {
                        l = u || r;
                        break;
                    }
                    l = p.length;
                }
                p[l] = u, l = void 0;
                break;

              case 91:
                p = g[0], g.unshift(p[l || p.length] = []), l = void 0;
                break;

              case 93:
                g.shift();
                break;

              case 102:
                p = g[0], p[l || p.length] = !1, l = void 0;
                break;

              case 110:
                p = g[0], p[l || p.length] = null, l = void 0;
                break;

              case 116:
                p = g[0], p[l || p.length] = !0, l = void 0;
                break;

              case 123:
                p = g[0], g.unshift(p[l || p.length] = {}), l = void 0;
                break;

              case 125:
                g.shift();
            }
        }
        if (c) {
            if (1 !== g.length) throw new Error();
            h = h[0];
        } else if (g.length) throw new Error();
        if (a) {
            h = function t(e, i) {
                var n = e[i];
                if (n && "object" === (void 0 === n ? "undefined" : _typeof(n))) {
                    var r = null;
                    for (var o in n) if (s.call(n, o) && n !== e) {
                        var h = t(n, o);
                        void 0 !== h ? n[o] = h : (r || (r = []), r.push(o));
                    }
                    if (r) for (var u = r.length; --u >= 0; ) delete n[r[u]];
                }
                return a.call(e, i, n);
            }({
                "": h
            }, "");
        }
        return h;
    };
}();

void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), 
KJUR.asn1.ASN1Util = new function() {
    this.integerToByteHex = function(t) {
        var e = t.toString(16);
        return e.length % 2 == 1 && (e = "0" + e), e;
    }, this.bigIntToMinTwosComplementsHex = function(t) {
        var e = t.toString(16);
        if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
            var i = e.substr(1), n = i.length;
            n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
            for (var r = "", s = 0; s < n; s++) r += "f";
            e = new BigInteger(r, 16).xor(t).add(BigInteger.ONE).toString(16).replace(/^-/, "");
        }
        return e;
    }, this.getPEMStringFromHex = function(t, e) {
        var i = hextob64(t), n = i.replace(/(.{64})/g, "$1\r\n");
        return n = n.replace(/\r\n$/, ""), "-----BEGIN " + e + "-----\r\n" + n + "\r\n-----END " + e + "-----\r\n";
    }, this.newObject = function(t) {
        var e = KJUR.asn1, i = Object.keys(t);
        if (1 != i.length) throw "key of param shall be only one.";
        var n = i[0];
        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + n + ":")) throw "undefined key: " + n;
        if ("bool" == n) return new e.DERBoolean(t[n]);
        if ("int" == n) return new e.DERInteger(t[n]);
        if ("bitstr" == n) return new e.DERBitString(t[n]);
        if ("octstr" == n) return new e.DEROctetString(t[n]);
        if ("null" == n) return new e.DERNull(t[n]);
        if ("oid" == n) return new e.DERObjectIdentifier(t[n]);
        if ("enum" == n) return new e.DEREnumerated(t[n]);
        if ("utf8str" == n) return new e.DERUTF8String(t[n]);
        if ("numstr" == n) return new e.DERNumericString(t[n]);
        if ("prnstr" == n) return new e.DERPrintableString(t[n]);
        if ("telstr" == n) return new e.DERTeletexString(t[n]);
        if ("ia5str" == n) return new e.DERIA5String(t[n]);
        if ("utctime" == n) return new e.DERUTCTime(t[n]);
        if ("gentime" == n) return new e.DERGeneralizedTime(t[n]);
        if ("seq" == n) {
            for (var r = t[n], s = [], a = 0; a < r.length; a++) {
                var o = e.ASN1Util.newObject(r[a]);
                s.push(o);
            }
            return new e.DERSequence({
                array: s
            });
        }
        if ("set" == n) {
            for (var r = t[n], s = [], a = 0; a < r.length; a++) {
                var o = e.ASN1Util.newObject(r[a]);
                s.push(o);
            }
            return new e.DERSet({
                array: s
            });
        }
        if ("tag" == n) {
            var h = t[n];
            if ("[object Array]" === Object.prototype.toString.call(h) && 3 == h.length) {
                var u = e.ASN1Util.newObject(h[2]);
                return new e.DERTaggedObject({
                    tag: h[0],
                    explicit: h[1],
                    obj: u
                });
            }
            var c = {};
            if (void 0 !== h.explicit && (c.explicit = h.explicit), void 0 !== h.tag && (c.tag = h.tag), 
            void 0 === h.obj) throw "obj shall be specified for 'tag'.";
            return c.obj = e.ASN1Util.newObject(h.obj), new e.DERTaggedObject(c);
        }
    }, this.jsonToASN1HEX = function(t) {
        return this.newObject(t).getEncodedHex();
    };
}(), KJUR.asn1.ASN1Util.oidHexToInt = function(t) {
    for (var e = "", i = parseInt(t.substr(0, 2), 16), n = Math.floor(i / 40), r = i % 40, e = n + "." + r, s = "", a = 2; a < t.length; a += 2) {
        var o = parseInt(t.substr(a, 2), 16), h = ("00000000" + o.toString(2)).slice(-8);
        if (s += h.substr(1, 7), "0" == h.substr(0, 1)) {
            e = e + "." + new BigInteger(s, 2).toString(10), s = "";
        }
    }
    return e;
}, KJUR.asn1.ASN1Util.oidIntToHex = function(t) {
    var e = function(t) {
        var e = t.toString(16);
        return 1 == e.length && (e = "0" + e), e;
    };
    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
    var i = "", n = t.split("."), r = 40 * parseInt(n[0]) + parseInt(n[1]);
    i += e(r), n.splice(0, 2);
    for (var s = 0; s < n.length; s++) i += function(t) {
        var i = "", n = new BigInteger(t, 10), r = n.toString(2), s = 7 - r.length % 7;
        7 == s && (s = 0);
        for (var a = "", o = 0; o < s; o++) a += "0";
        r = a + r;
        for (var o = 0; o < r.length - 1; o += 7) {
            var h = r.substr(o, 7);
            o != r.length - 7 && (h = "1" + h), i += e(parseInt(h, 2));
        }
        return i;
    }(n[s]);
    return i;
}, KJUR.asn1.ASN1Object = function() {
    this.getLengthHexFromValue = function() {
        if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
        if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
        var t = this.hV.length / 2, e = t.toString(16);
        if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
        var i = e.length / 2;
        if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
        return (128 + i).toString(16) + e;
    }, this.getEncodedHex = function() {
        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
        this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
        this.isModified = !1), this.hTLV;
    }, this.getValueHex = function() {
        return this.getEncodedHex(), this.hV;
    }, this.getFreshValueHex = function() {
        return "";
    };
}, KJUR.asn1.DERAbstractString = function(t) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    this.getString = function() {
        return this.s;
    }, this.setString = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
    }, this.setStringHex = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
}, YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractTime = function(t) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
    this.localDateToUTC = function(t) {
        return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc);
    }, this.formatDate = function(t, e, i) {
        var n = this.zeroPadding, r = this.localDateToUTC(t), s = String(r.getFullYear());
        "utc" == e && (s = s.substr(2, 2));
        var a = n(String(r.getMonth() + 1), 2), o = n(String(r.getDate()), 2), h = n(String(r.getHours()), 2), u = n(String(r.getMinutes()), 2), c = n(String(r.getSeconds()), 2), l = s + a + o + h + u + c;
        if (!0 === i) {
            var g = r.getMilliseconds();
            if (0 != g) {
                var d = n(String(g), 3);
                d = d.replace(/[0]+$/, ""), l = l + "." + d;
            }
        }
        return l + "Z";
    }, this.zeroPadding = function(t, e) {
        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
    }, this.getString = function() {
        return this.s;
    }, this.setString = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t);
    }, this.setByDateValue = function(t, e, i, n, r, s) {
        var a = new Date(Date.UTC(t, e - 1, i, n, r, s, 0));
        this.setByDate(a);
    }, this.getFreshValueHex = function() {
        return this.hV;
    };
}, YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractStructured = function(t) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    this.setByASN1ObjectArray = function(t) {
        this.hTLV = null, this.isModified = !0, this.asn1Array = t;
    }, this.appendASN1Object = function(t) {
        this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
    }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
}, YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object), KJUR.asn1.DERBoolean = function() {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
}, YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object), KJUR.asn1.DERInteger = function(t) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
        this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
    }, this.setByInteger = function(t) {
        var e = new BigInteger(String(t), 10);
        this.setByBigInteger(e);
    }, this.setValueHex = function(t) {
        this.hV = t;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
}, YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object), KJUR.asn1.DERBitString = function(t) {
    if (void 0 !== t && void 0 !== t.obj) {
        var e = KJUR.asn1.ASN1Util.newObject(t.obj);
        t.hex = "00" + e.getEncodedHex();
    }
    KJUR.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
        this.hTLV = null, this.isModified = !0, this.hV = t;
    }, this.setUnusedBitsAndHexValue = function(t, e) {
        if (t < 0 || t > 7) throw "unused bits shall be from 0 to 7: u = " + t;
        var i = "0" + t;
        this.hTLV = null, this.isModified = !0, this.hV = i + e;
    }, this.setByBinaryString = function(t) {
        t = t.replace(/0+$/, "");
        var e = 8 - t.length % 8;
        8 == e && (e = 0);
        for (var i = 0; i <= e; i++) t += "0";
        for (var n = "", i = 0; i < t.length - 1; i += 8) {
            var r = t.substr(i, 8), s = parseInt(r, 2).toString(16);
            1 == s.length && (s = "0" + s), n += s;
        }
        this.hTLV = null, this.isModified = !0, this.hV = "0" + e + n;
    }, this.setByBooleanArray = function(t) {
        for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
        this.setByBinaryString(e);
    }, this.newFalseArray = function(t) {
        for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
        return e;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
}, YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object), KJUR.asn1.DEROctetString = function(t) {
    if (void 0 !== t && void 0 !== t.obj) {
        var e = KJUR.asn1.ASN1Util.newObject(t.obj);
        t.hex = e.getEncodedHex();
    }
    KJUR.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
}, YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNull = function() {
    KJUR.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
}, YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object), KJUR.asn1.DERObjectIdentifier = function(t) {
    var e = function(t) {
        var e = t.toString(16);
        return 1 == e.length && (e = "0" + e), e;
    }, i = function(t) {
        var i = "", n = new BigInteger(t, 10), r = n.toString(2), s = 7 - r.length % 7;
        7 == s && (s = 0);
        for (var a = "", o = 0; o < s; o++) a += "0";
        r = a + r;
        for (var o = 0; o < r.length - 1; o += 7) {
            var h = r.substr(o, 7);
            o != r.length - 7 && (h = "1" + h), i += e(parseInt(h, 2));
        }
        return i;
    };
    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", 
    this.setValueHex = function(t) {
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
    }, this.setValueOidString = function(t) {
        if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
        var n = "", r = t.split("."), s = 40 * parseInt(r[0]) + parseInt(r[1]);
        n += e(s), r.splice(0, 2);
        for (var a = 0; a < r.length; a++) n += i(r[a]);
        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = n;
    }, this.setValueName = function(t) {
        var e = KJUR.asn1.x509.OID.name2oid(t);
        if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
        this.setValueOidString(e);
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
}, YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object), KJUR.asn1.DEREnumerated = function(t) {
    KJUR.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
        this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
    }, this.setByInteger = function(t) {
        var e = new BigInteger(String(t), 10);
        this.setByBigInteger(e);
    }, this.setValueHex = function(t) {
        this.hV = t;
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
}, YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object), KJUR.asn1.DERUTF8String = function(t) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
}, YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNumericString = function(t) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
}, YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERPrintableString = function(t) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
}, YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString), 
KJUR.asn1.DERTeletexString = function(t) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
}, YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERIA5String = function(t) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
}, YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERUTCTime = function(t) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
        this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), 
        this.hV = stohex(this.s);
    }, this.getFreshValueHex = function() {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
        this.hV = stohex(this.s)), this.hV;
    }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
}, YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERGeneralizedTime = function(t) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
    this.withMillis = !1, this.setByDate = function(t) {
        this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), 
        this.hV = stohex(this.s);
    }, this.getFreshValueHex = function() {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
        this.hV = stohex(this.s)), this.hV;
    }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), 
    !0 === t.millis && (this.withMillis = !0));
}, YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERSequence = function(t) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
        for (var t = "", e = 0; e < this.asn1Array.length; e++) {
            t += this.asn1Array[e].getEncodedHex();
        }
        return this.hV = t, this.hV;
    };
}, YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERSet = function(t) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
    this.getFreshValueHex = function() {
        for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
            var i = this.asn1Array[e];
            t.push(i.getEncodedHex());
        }
        return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
    }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
}, YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERTaggedObject = function(t) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
    this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
        this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
        this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
        this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
    }, this.getFreshValueHex = function() {
        return this.hV;
    }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), 
    void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
}, YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);

var ASN1HEX = new function() {}();

ASN1HEX.getByteLengthOfL_AtObj = function(t, e) {
    if ("8" != t.substring(e + 2, e + 3)) return 1;
    var i = parseInt(t.substring(e + 3, e + 4));
    return 0 == i ? -1 : i > 0 && i < 10 ? i + 1 : -2;
}, ASN1HEX.getHexOfL_AtObj = function(t, e) {
    var i = ASN1HEX.getByteLengthOfL_AtObj(t, e);
    return i < 1 ? "" : t.substring(e + 2, e + 2 + 2 * i);
}, ASN1HEX.getIntOfL_AtObj = function(t, e) {
    var i = ASN1HEX.getHexOfL_AtObj(t, e);
    if ("" == i) return -1;
    var n = void 0;
    return n = parseInt(i.substring(0, 1)) < 8 ? new BigInteger(i, 16) : new BigInteger(i.substring(2), 16), 
    n.intValue();
}, ASN1HEX.getStartPosOfV_AtObj = function(t, e) {
    var i = ASN1HEX.getByteLengthOfL_AtObj(t, e);
    return i < 0 ? i : e + 2 * (i + 1);
}, ASN1HEX.getHexOfV_AtObj = function(t, e) {
    var i = ASN1HEX.getStartPosOfV_AtObj(t, e), n = ASN1HEX.getIntOfL_AtObj(t, e);
    return t.substring(i, i + 2 * n);
}, ASN1HEX.getHexOfTLV_AtObj = function(t, e) {
    return t.substr(e, 2) + ASN1HEX.getHexOfL_AtObj(t, e) + ASN1HEX.getHexOfV_AtObj(t, e);
}, ASN1HEX.getPosOfNextSibling_AtObj = function(t, e) {
    return ASN1HEX.getStartPosOfV_AtObj(t, e) + 2 * ASN1HEX.getIntOfL_AtObj(t, e);
}, ASN1HEX.getPosArrayOfChildren_AtObj = function(t, e) {
    var i = new Array(), n = ASN1HEX.getStartPosOfV_AtObj(t, e);
    "03" == t.substr(e, 2) ? i.push(n + 2) : i.push(n);
    for (var r = ASN1HEX.getIntOfL_AtObj(t, e), s = n, a = 0; ;) {
        var o = ASN1HEX.getPosOfNextSibling_AtObj(t, s);
        if (null == o || o - n >= 2 * r) break;
        if (a >= 200) break;
        i.push(o), s = o, a++;
    }
    return i;
}, ASN1HEX.getNthChildIndex_AtObj = function(t, e, i) {
    return ASN1HEX.getPosArrayOfChildren_AtObj(t, e)[i];
}, ASN1HEX.getDecendantIndexByNthList = function(t, e, i) {
    if (0 == i.length) return e;
    var n = i.shift(), r = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    return ASN1HEX.getDecendantIndexByNthList(t, r[n], i);
}, ASN1HEX.getDecendantHexTLVByNthList = function(t, e, i) {
    var n = ASN1HEX.getDecendantIndexByNthList(t, e, i);
    return ASN1HEX.getHexOfTLV_AtObj(t, n);
}, ASN1HEX.getDecendantHexVByNthList = function(t, e, i) {
    var n = ASN1HEX.getDecendantIndexByNthList(t, e, i);
    return ASN1HEX.getHexOfV_AtObj(t, n);
}, ASN1HEX.getVbyList = function(t, e, i, n) {
    var r = ASN1HEX.getDecendantIndexByNthList(t, e, i);
    if (void 0 === r) throw "can't find nthList object";
    if (void 0 !== n && t.substr(r, 2) != n) throw "checking tag doesn't match: " + t.substr(r, 2) + "!=" + n;
    return ASN1HEX.getHexOfV_AtObj(t, r);
}, ASN1HEX.hextooidstr = function(t) {
    var e = function(t, e) {
        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
    }, i = [], n = t.substr(0, 2), r = parseInt(n, 16);
    i[0] = new String(Math.floor(r / 40)), i[1] = new String(r % 40);
    for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++) a.push(parseInt(s.substr(2 * o, 2), 16));
    for (var h = [], u = "", o = 0; o < a.length; o++) 128 & a[o] ? u += e((127 & a[o]).toString(2), 7) : (u += e((127 & a[o]).toString(2), 7), 
    h.push(new String(parseInt(u, 2))), u = "");
    var c = i.join(".");
    return h.length > 0 && (c = c + "." + h.join(".")), c;
}, ASN1HEX.dump = function(t, e, i, n) {
    var r = t;
    t instanceof KJUR.asn1.ASN1Object && (r = t.getEncodedHex());
    var s = function(t, e) {
        return t.length <= 2 * e ? t : t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e);
    };
    void 0 === e && (e = {
        ommit_long_octet: 32
    }), void 0 === i && (i = 0), void 0 === n && (n = "");
    var a = e.ommit_long_octet;
    if ("01" == r.substr(i, 2)) {
        var o = ASN1HEX.getHexOfV_AtObj(r, i);
        return "00" == o ? n + "BOOLEAN FALSE\n" : n + "BOOLEAN TRUE\n";
    }
    if ("02" == r.substr(i, 2)) {
        var o = ASN1HEX.getHexOfV_AtObj(r, i);
        return n + "INTEGER " + s(o, a) + "\n";
    }
    if ("03" == r.substr(i, 2)) {
        var o = ASN1HEX.getHexOfV_AtObj(r, i);
        return n + "BITSTRING " + s(o, a) + "\n";
    }
    if ("04" == r.substr(i, 2)) {
        var o = ASN1HEX.getHexOfV_AtObj(r, i);
        if (ASN1HEX.isASN1HEX(o)) {
            var h = n + "OCTETSTRING, encapsulates\n";
            return h += ASN1HEX.dump(o, e, 0, n + "  ");
        }
        return n + "OCTETSTRING " + s(o, a) + "\n";
    }
    if ("05" == r.substr(i, 2)) return n + "NULL\n";
    if ("06" == r.substr(i, 2)) {
        var u = ASN1HEX.getHexOfV_AtObj(r, i), c = KJUR.asn1.ASN1Util.oidHexToInt(u), l = KJUR.asn1.x509.OID.oid2name(c), g = c.replace(/\./g, " ");
        return "" != l ? n + "ObjectIdentifier " + l + " (" + g + ")\n" : n + "ObjectIdentifier (" + g + ")\n";
    }
    if ("0c" == r.substr(i, 2)) return n + "UTF8String '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(r, i)) + "'\n";
    if ("13" == r.substr(i, 2)) return n + "PrintableString '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(r, i)) + "'\n";
    if ("14" == r.substr(i, 2)) return n + "TeletexString '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(r, i)) + "'\n";
    if ("16" == r.substr(i, 2)) return n + "IA5String '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(r, i)) + "'\n";
    if ("17" == r.substr(i, 2)) return n + "UTCTime " + hextoutf8(ASN1HEX.getHexOfV_AtObj(r, i)) + "\n";
    if ("18" == r.substr(i, 2)) return n + "GeneralizedTime " + hextoutf8(ASN1HEX.getHexOfV_AtObj(r, i)) + "\n";
    if ("30" == r.substr(i, 2)) {
        if ("3000" == r.substr(i, 4)) return n + "SEQUENCE {}\n";
        var h = n + "SEQUENCE\n", d = ASN1HEX.getPosArrayOfChildren_AtObj(r, i), f = e;
        if ((2 == d.length || 3 == d.length) && "06" == r.substr(d[0], 2) && "04" == r.substr(d[d.length - 1], 2)) {
            var p = ASN1HEX.getHexOfV_AtObj(r, d[0]), c = KJUR.asn1.ASN1Util.oidHexToInt(p), l = KJUR.asn1.x509.OID.oid2name(c), y = JSON.parse(JSON.stringify(e));
            y.x509ExtName = l, f = y;
        }
        for (var S = 0; S < d.length; S++) h += ASN1HEX.dump(r, f, d[S], n + "  ");
        return h;
    }
    if ("31" == r.substr(i, 2)) {
        for (var h = n + "SET\n", d = ASN1HEX.getPosArrayOfChildren_AtObj(r, i), S = 0; S < d.length; S++) h += ASN1HEX.dump(r, e, d[S], n + "  ");
        return h;
    }
    var v = parseInt(r.substr(i, 2), 16);
    if (0 != (128 & v)) {
        var A = 31 & v;
        if (0 != (32 & v)) {
            for (var h = n + "[" + A + "]\n", d = ASN1HEX.getPosArrayOfChildren_AtObj(r, i), S = 0; S < d.length; S++) h += ASN1HEX.dump(r, e, d[S], n + "  ");
            return h;
        }
        var o = ASN1HEX.getHexOfV_AtObj(r, i);
        "68747470" == o.substr(0, 8) && (o = hextoutf8(o)), "subjectAltName" === e.x509ExtName && 2 == A && (o = hextoutf8(o));
        var h = n + "[" + A + "] " + o + "\n";
        return h;
    }
    return n + "UNKNOWN(" + r.substr(i, 2) + ") " + ASN1HEX.getHexOfV_AtObj(r, i) + "\n";
}, ASN1HEX.isASN1HEX = function(t) {
    if (t.length % 2 == 1) return !1;
    var e = ASN1HEX.getIntOfL_AtObj(t, 0), i = t.substr(0, 2), n = ASN1HEX.getHexOfL_AtObj(t, 0);
    return t.length - i.length - n.length == 2 * e;
}, ASN1HEX.pemToHex = function(t, e) {
    if (-1 == t.indexOf("-----BEGIN ")) throw "can't find PEM header: " + e;
    return void 0 !== e ? (t = t.replace("-----BEGIN " + e + "-----", ""), t = t.replace("-----END " + e + "-----", "")) : (t = t.replace(/-----BEGIN [^-]+-----/, ""), 
    t = t.replace(/-----END [^-]+-----/, "")), b64tohex(t.replace(/\s+/g, ""));
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), 
void 0 !== KJUR.asn1.x509 && KJUR.asn1.x509 || (KJUR.asn1.x509 = {}), KJUR.asn1.x509.Certificate = function(t) {
    KJUR.asn1.x509.Certificate.superclass.constructor.call(this);
    this.setRsaPrvKeyByPEMandPass = function(t, e) {
        var i = PKCS5PKEY.getDecryptedKeyHex(t, e), n = new RSAKey();
        n.readPrivateKeyFromASN1HexString(i), this.prvKey = n;
    }, this.sign = function() {
        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg;
        var t = new KJUR.crypto.Signature({
            alg: this.asn1SignatureAlg.nameAlg
        });
        t.init(this.prvKey), t.updateHex(this.asn1TBSCert.getEncodedHex()), this.hexSig = t.sign(), 
        this.asn1Sig = new KJUR.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var e = new KJUR.asn1.DERSequence({
            array: [ this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = e.getEncodedHex(), this.isModified = !1;
    }, this.setSignatureHex = function(t) {
        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg, this.hexSig = t, this.asn1Sig = new KJUR.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var e = new KJUR.asn1.DERSequence({
            array: [ this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = e.getEncodedHex(), this.isModified = !1;
    }, this.getEncodedHex = function() {
        if (0 == this.isModified && null != this.hTLV) return this.hTLV;
        throw "not signed yet";
    }, this.getPEMString = function() {
        var t = this.getEncodedHex(), e = CryptoJS.enc.Hex.parse(t);
        return "-----BEGIN CERTIFICATE-----\r\n" + CryptoJS.enc.Base64.stringify(e).replace(/(.{64})/g, "$1\r\n") + "\r\n-----END CERTIFICATE-----\r\n";
    }, void 0 !== t && (void 0 !== t.tbscertobj && (this.asn1TBSCert = t.tbscertobj), 
    void 0 !== t.prvkeyobj ? this.prvKey = t.prvkeyobj : void 0 !== t.rsaprvkey ? this.prvKey = t.rsaprvkey : void 0 !== t.rsaprvpem && void 0 !== t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas));
}, YAHOO.lang.extend(KJUR.asn1.x509.Certificate, KJUR.asn1.ASN1Object), KJUR.asn1.x509.TBSCertificate = function(t) {
    KJUR.asn1.x509.TBSCertificate.superclass.constructor.call(this), this._initialize = function() {
        this.asn1Array = new Array(), this.asn1Version = new KJUR.asn1.DERTaggedObject({
            obj: new KJUR.asn1.DERInteger({
                int: 2
            })
        }), this.asn1SerialNumber = null, this.asn1SignatureAlg = null, this.asn1Issuer = null, 
        this.asn1NotBefore = null, this.asn1NotAfter = null, this.asn1Subject = null, this.asn1SubjPKey = null, 
        this.extensionsArray = new Array();
    }, this.setSerialNumberByParam = function(t) {
        this.asn1SerialNumber = new KJUR.asn1.DERInteger(t);
    }, this.setSignatureAlgByParam = function(t) {
        this.asn1SignatureAlg = new KJUR.asn1.x509.AlgorithmIdentifier(t);
    }, this.setIssuerByParam = function(t) {
        this.asn1Issuer = new KJUR.asn1.x509.X500Name(t);
    }, this.setNotBeforeByParam = function(t) {
        this.asn1NotBefore = new KJUR.asn1.x509.Time(t);
    }, this.setNotAfterByParam = function(t) {
        this.asn1NotAfter = new KJUR.asn1.x509.Time(t);
    }, this.setSubjectByParam = function(t) {
        this.asn1Subject = new KJUR.asn1.x509.X500Name(t);
    }, this.setSubjectPublicKeyByParam = function(t) {
        this.asn1SubjPKey = new KJUR.asn1.x509.SubjectPublicKeyInfo(t);
    }, this.setSubjectPublicKeyByGetKey = function(t) {
        var e = KEYUTIL.getKey(t);
        this.asn1SubjPKey = new KJUR.asn1.x509.SubjectPublicKeyInfo(e);
    }, this.appendExtension = function(t) {
        this.extensionsArray.push(t);
    }, this.appendExtensionByName = function(t, e) {
        KJUR.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray);
    }, this.getEncodedHex = function() {
        if (null == this.asn1NotBefore || null == this.asn1NotAfter) throw "notBefore and/or notAfter not set";
        var t = new KJUR.asn1.DERSequence({
            array: [ this.asn1NotBefore, this.asn1NotAfter ]
        });
        if (this.asn1Array = new Array(), this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1SerialNumber), 
        this.asn1Array.push(this.asn1SignatureAlg), this.asn1Array.push(this.asn1Issuer), 
        this.asn1Array.push(t), this.asn1Array.push(this.asn1Subject), this.asn1Array.push(this.asn1SubjPKey), 
        this.extensionsArray.length > 0) {
            var e = new KJUR.asn1.DERSequence({
                array: this.extensionsArray
            }), i = new KJUR.asn1.DERTaggedObject({
                explicit: !0,
                tag: "a3",
                obj: e
            });
            this.asn1Array.push(i);
        }
        var n = new KJUR.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = n.getEncodedHex(), this.isModified = !1, this.hTLV;
    }, this._initialize();
}, YAHOO.lang.extend(KJUR.asn1.x509.TBSCertificate, KJUR.asn1.ASN1Object), KJUR.asn1.x509.Extension = function(t) {
    KJUR.asn1.x509.Extension.superclass.constructor.call(this);
    this.getEncodedHex = function() {
        var t = new KJUR.asn1.DERObjectIdentifier({
            oid: this.oid
        }), e = new KJUR.asn1.DEROctetString({
            hex: this.getExtnValueHex()
        }), i = new Array();
        return i.push(t), this.critical && i.push(new KJUR.asn1.DERBoolean()), i.push(e), 
        new KJUR.asn1.DERSequence({
            array: i
        }).getEncodedHex();
    }, this.critical = !1, void 0 !== t && void 0 !== t.critical && (this.critical = t.critical);
}, YAHOO.lang.extend(KJUR.asn1.x509.Extension, KJUR.asn1.ASN1Object), KJUR.asn1.x509.Extension.appendByNameToArray = function(t, e, i) {
    if ("basicconstraints" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.BasicConstraints(e);
        i.push(n);
    } else if ("keyusage" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.KeyUsage(e);
        i.push(n);
    } else if ("crldistributionpoints" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.CRLDistributionPoints(e);
        i.push(n);
    } else if ("extkeyusage" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.ExtKeyUsage(e);
        i.push(n);
    } else if ("authoritykeyidentifier" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.AuthorityKeyIdentifier(e);
        i.push(n);
    } else if ("authorityinfoaccess" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.AuthorityInfoAccess(e);
        i.push(n);
    } else if ("subjectaltname" == t.toLowerCase()) {
        var n = new KJUR.asn1.x509.SubjectAltName(e);
        i.push(n);
    } else {
        if ("issueraltname" != t.toLowerCase()) throw "unsupported extension name: " + t;
        var n = new KJUR.asn1.x509.IssuerAltName(e);
        i.push(n);
    }
}, KJUR.asn1.x509.KeyUsage = function(t) {
    KJUR.asn1.x509.KeyUsage.superclass.constructor.call(this, t), this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.15", void 0 !== t && void 0 !== t.bin && (this.asn1ExtnValue = new KJUR.asn1.DERBitString(t));
}, YAHOO.lang.extend(KJUR.asn1.x509.KeyUsage, KJUR.asn1.x509.Extension), KJUR.asn1.x509.BasicConstraints = function(t) {
    KJUR.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
    this.getExtnValueHex = function() {
        var t = new Array();
        this.cA && t.push(new KJUR.asn1.DERBoolean()), this.pathLen > -1 && t.push(new KJUR.asn1.DERInteger({
            int: this.pathLen
        }));
        var e = new KJUR.asn1.DERSequence({
            array: t
        });
        return this.asn1ExtnValue = e, this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.19", this.cA = !1, this.pathLen = -1, void 0 !== t && (void 0 !== t.cA && (this.cA = t.cA), 
    void 0 !== t.pathLen && (this.pathLen = t.pathLen));
}, YAHOO.lang.extend(KJUR.asn1.x509.BasicConstraints, KJUR.asn1.x509.Extension), 
KJUR.asn1.x509.CRLDistributionPoints = function(t) {
    KJUR.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t), this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.setByDPArray = function(t) {
        this.asn1ExtnValue = new KJUR.asn1.DERSequence({
            array: t
        });
    }, this.setByOneURI = function(t) {
        var e = new KJUR.asn1.x509.GeneralNames([ {
            uri: t
        } ]), i = new KJUR.asn1.x509.DistributionPointName(e), n = new KJUR.asn1.x509.DistributionPoint({
            dpobj: i
        });
        this.setByDPArray([ n ]);
    }, this.oid = "2.5.29.31", void 0 !== t && (void 0 !== t.array ? this.setByDPArray(t.array) : void 0 !== t.uri && this.setByOneURI(t.uri));
}, YAHOO.lang.extend(KJUR.asn1.x509.CRLDistributionPoints, KJUR.asn1.x509.Extension), 
KJUR.asn1.x509.ExtKeyUsage = function(t) {
    KJUR.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t), this.setPurposeArray = function(t) {
        this.asn1ExtnValue = new KJUR.asn1.DERSequence();
        for (var e = 0; e < t.length; e++) {
            var i = new KJUR.asn1.DERObjectIdentifier(t[e]);
            this.asn1ExtnValue.appendASN1Object(i);
        }
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.37", void 0 !== t && void 0 !== t.array && this.setPurposeArray(t.array);
}, YAHOO.lang.extend(KJUR.asn1.x509.ExtKeyUsage, KJUR.asn1.x509.Extension), KJUR.asn1.x509.AuthorityKeyIdentifier = function(t) {
    KJUR.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t), this.asn1KID = null, 
    this.asn1CertIssuer = null, this.asn1CertSN = null, this.getExtnValueHex = function() {
        var t = new Array();
        this.asn1KID && t.push(new KJUR.asn1.DERTaggedObject({
            explicit: !1,
            tag: "80",
            obj: this.asn1KID
        })), this.asn1CertIssuer && t.push(new KJUR.asn1.DERTaggedObject({
            explicit: !1,
            tag: "a1",
            obj: this.asn1CertIssuer
        })), this.asn1CertSN && t.push(new KJUR.asn1.DERTaggedObject({
            explicit: !1,
            tag: "82",
            obj: this.asn1CertSN
        }));
        var e = new KJUR.asn1.DERSequence({
            array: t
        });
        return this.asn1ExtnValue = e, this.asn1ExtnValue.getEncodedHex();
    }, this.setKIDByParam = function(t) {
        this.asn1KID = new KJUR.asn1.DEROctetString(t);
    }, this.setCertIssuerByParam = function(t) {
        this.asn1CertIssuer = new KJUR.asn1.x509.X500Name(t);
    }, this.setCertSNByParam = function(t) {
        this.asn1CertSN = new KJUR.asn1.DERInteger(t);
    }, this.oid = "2.5.29.35", void 0 !== t && (void 0 !== t.kid && this.setKIDByParam(t.kid), 
    void 0 !== t.issuer && this.setCertIssuerByParam(t.issuer), void 0 !== t.sn && this.setCertSNByParam(t.sn));
}, YAHOO.lang.extend(KJUR.asn1.x509.AuthorityKeyIdentifier, KJUR.asn1.x509.Extension), 
KJUR.asn1.x509.AuthorityInfoAccess = function(t) {
    KJUR.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t), this.setAccessDescriptionArray = function(t) {
        for (var e = new Array(), i = 0; i < t.length; i++) {
            var n = new KJUR.asn1.DERObjectIdentifier(t[i].accessMethod), r = new KJUR.asn1.x509.GeneralName(t[i].accessLocation), s = new KJUR.asn1.DERSequence({
                array: [ n, r ]
            });
            e.push(s);
        }
        this.asn1ExtnValue = new KJUR.asn1.DERSequence({
            array: e
        });
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "1.3.6.1.5.5.7.1.1", void 0 !== t && void 0 !== t.array && this.setAccessDescriptionArray(t.array);
}, YAHOO.lang.extend(KJUR.asn1.x509.AuthorityInfoAccess, KJUR.asn1.x509.Extension), 
KJUR.asn1.x509.SubjectAltName = function(t) {
    KJUR.asn1.x509.SubjectAltName.superclass.constructor.call(this, t), this.setNameArray = function(t) {
        this.asn1ExtnValue = new KJUR.asn1.x509.GeneralNames(t);
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.17", void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
}, YAHOO.lang.extend(KJUR.asn1.x509.SubjectAltName, KJUR.asn1.x509.Extension), KJUR.asn1.x509.IssuerAltName = function(t) {
    KJUR.asn1.x509.IssuerAltName.superclass.constructor.call(this, t), this.setNameArray = function(t) {
        this.asn1ExtnValue = new KJUR.asn1.x509.GeneralNames(t);
    }, this.getExtnValueHex = function() {
        return this.asn1ExtnValue.getEncodedHex();
    }, this.oid = "2.5.29.18", void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
}, YAHOO.lang.extend(KJUR.asn1.x509.IssuerAltName, KJUR.asn1.x509.Extension), KJUR.asn1.x509.CRL = function(t) {
    KJUR.asn1.x509.CRL.superclass.constructor.call(this);
    this.setRsaPrvKeyByPEMandPass = function(t, e) {
        var i = PKCS5PKEY.getDecryptedKeyHex(t, e), n = new RSAKey();
        n.readPrivateKeyFromASN1HexString(i), this.rsaPrvKey = n;
    }, this.sign = function() {
        this.asn1SignatureAlg = this.asn1TBSCertList.asn1SignatureAlg, sig = new KJUR.crypto.Signature({
            alg: "SHA1withRSA",
            prov: "cryptojs/jsrsa"
        }), sig.initSign(this.rsaPrvKey), sig.updateHex(this.asn1TBSCertList.getEncodedHex()), 
        this.hexSig = sig.sign(), this.asn1Sig = new KJUR.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var t = new KJUR.asn1.DERSequence({
            array: [ this.asn1TBSCertList, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = t.getEncodedHex(), this.isModified = !1;
    }, this.getEncodedHex = function() {
        if (0 == this.isModified && null != this.hTLV) return this.hTLV;
        throw "not signed yet";
    }, this.getPEMString = function() {
        var t = this.getEncodedHex(), e = CryptoJS.enc.Hex.parse(t);
        return "-----BEGIN X509 CRL-----\r\n" + CryptoJS.enc.Base64.stringify(e).replace(/(.{64})/g, "$1\r\n") + "\r\n-----END X509 CRL-----\r\n";
    }, void 0 !== t && (void 0 !== t.tbsobj && (this.asn1TBSCertList = t.tbsobj), void 0 !== t.rsaprvkey && (this.rsaPrvKey = t.rsaprvkey), 
    void 0 !== t.rsaprvpem && void 0 !== t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas));
}, YAHOO.lang.extend(KJUR.asn1.x509.CRL, KJUR.asn1.ASN1Object), KJUR.asn1.x509.TBSCertList = function(t) {
    KJUR.asn1.x509.TBSCertList.superclass.constructor.call(this);
    this.setSignatureAlgByParam = function(t) {
        this.asn1SignatureAlg = new KJUR.asn1.x509.AlgorithmIdentifier(t);
    }, this.setIssuerByParam = function(t) {
        this.asn1Issuer = new KJUR.asn1.x509.X500Name(t);
    }, this.setThisUpdateByParam = function(t) {
        this.asn1ThisUpdate = new KJUR.asn1.x509.Time(t);
    }, this.setNextUpdateByParam = function(t) {
        this.asn1NextUpdate = new KJUR.asn1.x509.Time(t);
    }, this.addRevokedCert = function(t, e) {
        var i = {};
        void 0 != t && null != t && (i.sn = t), void 0 != e && null != e && (i.time = e);
        var n = new KJUR.asn1.x509.CRLEntry(i);
        this.aRevokedCert.push(n);
    }, this.getEncodedHex = function() {
        if (this.asn1Array = new Array(), null != this.asn1Version && this.asn1Array.push(this.asn1Version), 
        this.asn1Array.push(this.asn1SignatureAlg), this.asn1Array.push(this.asn1Issuer), 
        this.asn1Array.push(this.asn1ThisUpdate), null != this.asn1NextUpdate && this.asn1Array.push(this.asn1NextUpdate), 
        this.aRevokedCert.length > 0) {
            var t = new KJUR.asn1.DERSequence({
                array: this.aRevokedCert
            });
            this.asn1Array.push(t);
        }
        var e = new KJUR.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = e.getEncodedHex(), this.isModified = !1, this.hTLV;
    }, this._initialize = function() {
        this.asn1Version = null, this.asn1SignatureAlg = null, this.asn1Issuer = null, this.asn1ThisUpdate = null, 
        this.asn1NextUpdate = null, this.aRevokedCert = new Array();
    }, this._initialize();
}, YAHOO.lang.extend(KJUR.asn1.x509.TBSCertList, KJUR.asn1.ASN1Object), KJUR.asn1.x509.CRLEntry = function(t) {
    KJUR.asn1.x509.CRLEntry.superclass.constructor.call(this);
    this.setCertSerial = function(t) {
        this.sn = new KJUR.asn1.DERInteger(t);
    }, this.setRevocationDate = function(t) {
        this.time = new KJUR.asn1.x509.Time(t);
    }, this.getEncodedHex = function() {
        var t = new KJUR.asn1.DERSequence({
            array: [ this.sn, this.time ]
        });
        return this.TLV = t.getEncodedHex(), this.TLV;
    }, void 0 !== t && (void 0 !== t.time && this.setRevocationDate(t.time), void 0 !== t.sn && this.setCertSerial(t.sn));
}, YAHOO.lang.extend(KJUR.asn1.x509.CRLEntry, KJUR.asn1.ASN1Object), KJUR.asn1.x509.X500Name = function(t) {
    if (KJUR.asn1.x509.X500Name.superclass.constructor.call(this), this.asn1Array = new Array(), 
    this.setByString = function(t) {
        var e = t.split("/");
        e.shift();
        for (var i = 0; i < e.length; i++) this.asn1Array.push(new KJUR.asn1.x509.RDN({
            str: e[i]
        }));
    }, this.setByLdapString = function(t) {
        var e = KJUR.asn1.x509.X500Name.ldapToOneline(t);
        this.setByString(e);
    }, this.setByObject = function(t) {
        for (var e in t) if (t.hasOwnProperty(e)) {
            var i = new KJUR.asn1.x509.RDN({
                str: e + "=" + t[e]
            });
            this.asn1Array ? this.asn1Array.push(i) : this.asn1Array = [ i ];
        }
    }, this.getEncodedHex = function() {
        if ("string" == typeof this.hTLV) return this.hTLV;
        var t = new KJUR.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        if (void 0 !== t.str ? this.setByString(t.str) : void 0 !== t.ldapstr ? this.setByLdapString(t.ldapstr) : "object" === (void 0 === t ? "undefined" : _typeof(t)) && this.setByObject(t), 
        void 0 !== t.certissuer) {
            var e = new X509();
            e.hex = ASN1HEX.pemToHex(t.certissuer), this.hTLV = e.getIssuerHex();
        }
        if (void 0 !== t.certsubject) {
            var e = new X509();
            e.hex = ASN1HEX.pemToHex(t.certsubject), this.hTLV = e.getSubjectHex();
        }
    }
}, YAHOO.lang.extend(KJUR.asn1.x509.X500Name, KJUR.asn1.ASN1Object), KJUR.asn1.x509.X500Name.onelineToLDAP = function(t) {
    if ("/" !== t.substr(0, 1)) throw "malformed input";
    t = t.substr(1);
    var e = t.split("/");
    return e.reverse(), e = e.map(function(t) {
        return t.replace(/,/, "\\,");
    }), e.join(",");
}, KJUR.asn1.x509.X500Name.ldapToOneline = function(t) {
    for (var e = t.split(","), i = !1, n = [], r = 0; e.length > 0; r++) {
        var s = e.shift();
        if (!0 === i) {
            var a = n.pop(), o = (a + "," + s).replace(/\\,/g, ",");
            n.push(o), i = !1;
        } else n.push(s);
        "\\" === s.substr(-1, 1) && (i = !0);
    }
    return n = n.map(function(t) {
        return t.replace("/", "\\/");
    }), n.reverse(), "/" + n.join("/");
}, KJUR.asn1.x509.RDN = function(t) {
    KJUR.asn1.x509.RDN.superclass.constructor.call(this), this.asn1Array = new Array(), 
    this.addByString = function(t) {
        this.asn1Array.push(new KJUR.asn1.x509.AttributeTypeAndValue({
            str: t
        }));
    }, this.addByMultiValuedString = function(t) {
        for (var e = KJUR.asn1.x509.RDN.parseString(t), i = 0; i < e.length; i++) this.addByString(e[i]);
    }, this.getEncodedHex = function() {
        var t = new KJUR.asn1.DERSet({
            array: this.asn1Array
        });
        return this.TLV = t.getEncodedHex(), this.TLV;
    }, void 0 !== t && void 0 !== t.str && this.addByMultiValuedString(t.str);
}, YAHOO.lang.extend(KJUR.asn1.x509.RDN, KJUR.asn1.ASN1Object), KJUR.asn1.x509.RDN.parseString = function(t) {
    for (var e = t.split(/\+/), i = !1, n = [], r = 0; e.length > 0; r++) {
        var s = e.shift();
        if (!0 === i) {
            var a = n.pop(), o = (a + "+" + s).replace(/\\\+/g, "+");
            n.push(o), i = !1;
        } else n.push(s);
        "\\" === s.substr(-1, 1) && (i = !0);
    }
    for (var h = !1, u = [], r = 0; n.length > 0; r++) {
        var s = n.shift();
        if (!0 === h) {
            var c = u.pop();
            if (s.match(/"$/)) {
                var o = (c + "+" + s).replace(/^([^=]+)="(.*)"$/, "$1=$2");
                u.push(o), h = !1;
            } else u.push(c + "+" + s);
        } else u.push(s);
        s.match(/^[^=]+="/) && (h = !0);
    }
    return u;
}, KJUR.asn1.x509.AttributeTypeAndValue = function(t) {
    KJUR.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
    this.setByString = function(t) {
        var e = t.match(/^([^=]+)=(.+)$/);
        if (!e) throw "malformed attrTypeAndValueStr: " + t;
        this.setByAttrTypeAndValueStr(e[1], e[2]);
    }, this.setByAttrTypeAndValueStr = function(t, e) {
        this.typeObj = KJUR.asn1.x509.OID.atype2obj(t);
        var i = "utf8";
        "C" == t && (i = "prn"), this.valueObj = this.getValueObj(i, e);
    }, this.getValueObj = function(t, e) {
        if ("utf8" == t) return new KJUR.asn1.DERUTF8String({
            str: e
        });
        if ("prn" == t) return new KJUR.asn1.DERPrintableString({
            str: e
        });
        if ("tel" == t) return new KJUR.asn1.DERTeletexString({
            str: e
        });
        if ("ia5" == t) return new KJUR.asn1.DERIA5String({
            str: e
        });
        throw "unsupported directory string type: type=" + t + " value=" + e;
    }, this.getEncodedHex = function() {
        var t = new KJUR.asn1.DERSequence({
            array: [ this.typeObj, this.valueObj ]
        });
        return this.TLV = t.getEncodedHex(), this.TLV;
    }, void 0 !== t && void 0 !== t.str && this.setByString(t.str);
}, YAHOO.lang.extend(KJUR.asn1.x509.AttributeTypeAndValue, KJUR.asn1.ASN1Object), 
KJUR.asn1.x509.SubjectPublicKeyInfo = function(t) {
    KJUR.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
    this.setRSAKey = function(t) {
        if (!RSAKey.prototype.isPrototypeOf(t)) throw "argument is not RSAKey instance";
        this.rsaKey = t;
        var e = new KJUR.asn1.DERInteger({
            bigint: t.n
        }), i = new KJUR.asn1.DERInteger({
            int: t.e
        }), n = new KJUR.asn1.DERSequence({
            array: [ e, i ]
        }), r = n.getEncodedHex();
        this.asn1AlgId = new KJUR.asn1.x509.AlgorithmIdentifier({
            name: "rsaEncryption"
        }), this.asn1SubjPKey = new KJUR.asn1.DERBitString({
            hex: "00" + r
        });
    }, this.setRSAPEM = function(t) {
        if (!t.match(/-----BEGIN PUBLIC KEY-----/)) throw "key not supported";
        var e = t;
        e = e.replace(/^-----[^-]+-----/, ""), e = e.replace(/-----[^-]+-----\s*$/, "");
        var i = e.replace(/\s+/g, ""), n = CryptoJS.enc.Base64.parse(i), r = CryptoJS.enc.Hex.stringify(n), s = RSAKey.getHexValueArrayOfChildrenFromHex(r), a = s[1], o = a.substr(2), h = RSAKey.getHexValueArrayOfChildrenFromHex(o), u = new RSAKey();
        u.setPublic(h[0], h[1]), this.setRSAKey(u);
    }, this.getASN1Object = function() {
        if (null == this.asn1AlgId || null == this.asn1SubjPKey) throw "algId and/or subjPubKey not set";
        return new KJUR.asn1.DERSequence({
            array: [ this.asn1AlgId, this.asn1SubjPKey ]
        });
    }, this.getEncodedHex = function() {
        var t = this.getASN1Object();
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, this._setRSAKey = function(t) {
        var e = KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: {
                    bigint: t.n
                }
            }, {
                int: {
                    int: t.e
                }
            } ]
        }), i = e.getEncodedHex();
        this.asn1AlgId = new KJUR.asn1.x509.AlgorithmIdentifier({
            name: "rsaEncryption"
        }), this.asn1SubjPKey = new KJUR.asn1.DERBitString({
            hex: "00" + i
        });
    }, this._setEC = function(t) {
        var e = new KJUR.asn1.DERObjectIdentifier({
            name: t.curveName
        });
        this.asn1AlgId = new KJUR.asn1.x509.AlgorithmIdentifier({
            name: "ecPublicKey",
            asn1params: e
        }), this.asn1SubjPKey = new KJUR.asn1.DERBitString({
            hex: "00" + t.pubKeyHex
        });
    }, this._setDSA = function(t) {
        var e = new KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: {
                    bigint: t.p
                }
            }, {
                int: {
                    bigint: t.q
                }
            }, {
                int: {
                    bigint: t.g
                }
            } ]
        });
        this.asn1AlgId = new KJUR.asn1.x509.AlgorithmIdentifier({
            name: "dsa",
            asn1params: e
        });
        var i = new KJUR.asn1.DERInteger({
            bigint: t.y
        });
        this.asn1SubjPKey = new KJUR.asn1.DERBitString({
            hex: "00" + i.getEncodedHex()
        });
    }, void 0 !== t && (void 0 !== RSAKey && t instanceof RSAKey ? this._setRSAKey(t) : void 0 !== KJUR.crypto.ECDSA && t instanceof KJUR.crypto.ECDSA ? this._setEC(t) : void 0 !== KJUR.crypto.DSA && t instanceof KJUR.crypto.DSA ? this._setDSA(t) : void 0 !== t.rsakey ? this.setRSAKey(t.rsakey) : void 0 !== t.rsapem && this.setRSAPEM(t.rsapem));
}, YAHOO.lang.extend(KJUR.asn1.x509.SubjectPublicKeyInfo, KJUR.asn1.ASN1Object), 
KJUR.asn1.x509.Time = function(t) {
    KJUR.asn1.x509.Time.superclass.constructor.call(this);
    this.setTimeParams = function(t) {
        this.timeParams = t;
    }, this.getEncodedHex = function() {
        var t = null;
        return t = null != this.timeParams ? "utc" == this.type ? new KJUR.asn1.DERUTCTime(this.timeParams) : new KJUR.asn1.DERGeneralizedTime(this.timeParams) : "utc" == this.type ? new KJUR.asn1.DERUTCTime() : new KJUR.asn1.DERGeneralizedTime(), 
        this.TLV = t.getEncodedHex(), this.TLV;
    }, this.type = "utc", void 0 !== t && (void 0 !== t.type ? this.type = t.type : void 0 !== t.str && (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"), 
    t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")), this.timeParams = t);
}, YAHOO.lang.extend(KJUR.asn1.x509.Time, KJUR.asn1.ASN1Object), KJUR.asn1.x509.AlgorithmIdentifier = function(t) {
    if (KJUR.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this), this.nameAlg = null, 
    this.asn1Alg = null, this.asn1Params = null, this.paramEmpty = !1, this.getEncodedHex = function() {
        if (null === this.nameAlg && null === this.asn1Alg) throw "algorithm not specified";
        null !== this.nameAlg && null === this.asn1Alg && (this.asn1Alg = KJUR.asn1.x509.OID.name2obj(this.nameAlg));
        var t = [ this.asn1Alg ];
        null !== this.asn1Params && t.push(this.asn1Params);
        var e = new KJUR.asn1.DERSequence({
            array: t
        });
        return this.hTLV = e.getEncodedHex(), this.hTLV;
    }, void 0 !== t && (void 0 !== t.name && (this.nameAlg = t.name), void 0 !== t.asn1params && (this.asn1Params = t.asn1params), 
    void 0 !== t.paramempty && (this.paramEmpty = t.paramempty)), null === this.asn1Params && !1 === this.paramEmpty && null !== this.nameAlg) {
        var e = this.nameAlg.toLowerCase();
        "withdsa" !== e.substr(-7, 7) && "withecdsa" !== e.substr(-9, 9) && (this.asn1Params = new KJUR.asn1.DERNull());
    }
}, YAHOO.lang.extend(KJUR.asn1.x509.AlgorithmIdentifier, KJUR.asn1.ASN1Object), 
KJUR.asn1.x509.GeneralName = function(t) {
    KJUR.asn1.x509.GeneralName.superclass.constructor.call(this);
    var e = {
        rfc822: "81",
        dns: "82",
        dn: "a4",
        uri: "86"
    };
    this.explicit = !1, this.setByParam = function(t) {
        var i = null;
        if (void 0 !== t) {
            if (void 0 !== t.rfc822 && (this.type = "rfc822", i = new KJUR.asn1.DERIA5String({
                str: t[this.type]
            })), void 0 !== t.dns && (this.type = "dns", i = new KJUR.asn1.DERIA5String({
                str: t[this.type]
            })), void 0 !== t.uri && (this.type = "uri", i = new KJUR.asn1.DERIA5String({
                str: t[this.type]
            })), void 0 !== t.dn && (this.type = "dn", i = new KJUR.asn1.x509.X500Name({
                str: t.dn
            })), void 0 !== t.ldapdn && (this.type = "dn", i = new KJUR.asn1.x509.X500Name({
                ldapstr: t.ldapdn
            })), void 0 !== t.certissuer) {
                this.type = "dn", this.explicit = !0;
                var n = t.certissuer, r = null;
                if (n.match(/^[0-9A-Fa-f]+$/), -1 != n.indexOf("-----BEGIN ") && (r = ASN1HEX.pemToHex(n)), 
                null == r) throw "certissuer param not cert";
                var s = new X509();
                s.hex = r;
                var a = s.getIssuerHex();
                i = new KJUR.asn1.ASN1Object(), i.hTLV = a;
            }
            if (void 0 !== t.certsubj) {
                this.type = "dn", this.explicit = !0;
                var n = t.certsubj, r = null;
                if (n.match(/^[0-9A-Fa-f]+$/), -1 != n.indexOf("-----BEGIN ") && (r = ASN1HEX.pemToHex(n)), 
                null == r) throw "certsubj param not cert";
                var s = new X509();
                s.hex = r;
                var a = s.getSubjectHex();
                i = new KJUR.asn1.ASN1Object(), i.hTLV = a;
            }
            if (null == this.type) throw "unsupported type in params=" + t;
            this.asn1Obj = new KJUR.asn1.DERTaggedObject({
                explicit: this.explicit,
                tag: e[this.type],
                obj: i
            });
        }
    }, this.getEncodedHex = function() {
        return this.asn1Obj.getEncodedHex();
    }, void 0 !== t && this.setByParam(t);
}, YAHOO.lang.extend(KJUR.asn1.x509.GeneralName, KJUR.asn1.ASN1Object), KJUR.asn1.x509.GeneralNames = function(t) {
    KJUR.asn1.x509.GeneralNames.superclass.constructor.call(this);
    this.setByParamArray = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = new KJUR.asn1.x509.GeneralName(t[e]);
            this.asn1Array.push(i);
        }
    }, this.getEncodedHex = function() {
        return new KJUR.asn1.DERSequence({
            array: this.asn1Array
        }).getEncodedHex();
    }, this.asn1Array = new Array(), void 0 !== t && this.setByParamArray(t);
}, YAHOO.lang.extend(KJUR.asn1.x509.GeneralNames, KJUR.asn1.ASN1Object), KJUR.asn1.x509.DistributionPointName = function(t) {
    KJUR.asn1.x509.DistributionPointName.superclass.constructor.call(this);
    if (this.getEncodedHex = function() {
        if ("full" != this.type) throw "currently type shall be 'full': " + this.type;
        return this.asn1Obj = new KJUR.asn1.DERTaggedObject({
            explicit: !1,
            tag: this.tag,
            obj: this.asn1V
        }), this.hTLV = this.asn1Obj.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        if (!KJUR.asn1.x509.GeneralNames.prototype.isPrototypeOf(t)) throw "This class supports GeneralNames only as argument";
        this.type = "full", this.tag = "a0", this.asn1V = t;
    }
}, YAHOO.lang.extend(KJUR.asn1.x509.DistributionPointName, KJUR.asn1.ASN1Object), 
KJUR.asn1.x509.DistributionPoint = function(t) {
    KJUR.asn1.x509.DistributionPoint.superclass.constructor.call(this);
    this.getEncodedHex = function() {
        var t = new KJUR.asn1.DERSequence();
        if (null != this.asn1DP) {
            var e = new KJUR.asn1.DERTaggedObject({
                explicit: !0,
                tag: "a0",
                obj: this.asn1DP
            });
            t.appendASN1Object(e);
        }
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.dpobj && (this.asn1DP = t.dpobj);
}, YAHOO.lang.extend(KJUR.asn1.x509.DistributionPoint, KJUR.asn1.ASN1Object), KJUR.asn1.x509.OID = new function(t) {
    this.atype2oidList = {
        CN: "2.5.4.3",
        L: "2.5.4.7",
        ST: "2.5.4.8",
        O: "2.5.4.10",
        OU: "2.5.4.11",
        C: "2.5.4.6",
        STREET: "2.5.4.9",
        DC: "0.9.2342.19200300.100.1.25",
        UID: "0.9.2342.19200300.100.1.1",
        SN: "2.5.4.4",
        DN: "2.5.4.49",
        E: "1.2.840.113549.1.9.1",
        businessCategory: "2.5.4.15",
        postalCode: "2.5.4.17",
        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3"
    }, this.name2oidList = {
        sha1: "1.3.14.3.2.26",
        sha256: "2.16.840.1.101.3.4.2.1",
        sha384: "2.16.840.1.101.3.4.2.2",
        sha512: "2.16.840.1.101.3.4.2.3",
        sha224: "2.16.840.1.101.3.4.2.4",
        md5: "1.2.840.113549.2.5",
        md2: "1.3.14.7.2.2.1",
        ripemd160: "1.3.36.3.2.1",
        MD2withRSA: "1.2.840.113549.1.1.2",
        MD4withRSA: "1.2.840.113549.1.1.3",
        MD5withRSA: "1.2.840.113549.1.1.4",
        SHA1withRSA: "1.2.840.113549.1.1.5",
        SHA224withRSA: "1.2.840.113549.1.1.14",
        SHA256withRSA: "1.2.840.113549.1.1.11",
        SHA384withRSA: "1.2.840.113549.1.1.12",
        SHA512withRSA: "1.2.840.113549.1.1.13",
        SHA1withECDSA: "1.2.840.10045.4.1",
        SHA224withECDSA: "1.2.840.10045.4.3.1",
        SHA256withECDSA: "1.2.840.10045.4.3.2",
        SHA384withECDSA: "1.2.840.10045.4.3.3",
        SHA512withECDSA: "1.2.840.10045.4.3.4",
        dsa: "1.2.840.10040.4.1",
        SHA1withDSA: "1.2.840.10040.4.3",
        SHA224withDSA: "2.16.840.1.101.3.4.3.1",
        SHA256withDSA: "2.16.840.1.101.3.4.3.2",
        rsaEncryption: "1.2.840.113549.1.1.1",
        commonName: "2.5.4.3",
        localityName: "2.5.4.7",
        stateOrProvinceName: "2.5.4.8",
        organizationName: "2.5.4.10",
        organizationalUnitName: "2.5.4.11",
        countryName: "2.5.4.6",
        streetAddress: "2.5.4.9",
        domainComponent: "0.9.2342.19200300.100.1.25",
        userId: "0.9.2342.19200300.100.1.1",
        surname: "2.5.4.4",
        distinguishedName: "2.5.4.49",
        emailAddress: "1.2.840.113549.1.9.1",
        businessCategory: "2.5.4.15",
        postalCode: "2.5.4.17",
        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
        subjectKeyIdentifier: "2.5.29.14",
        keyUsage: "2.5.29.15",
        subjectAltName: "2.5.29.17",
        issuerAltName: "2.5.29.18",
        basicConstraints: "2.5.29.19",
        nameConstraints: "2.5.29.30",
        cRLDistributionPoints: "2.5.29.31",
        certificatePolicies: "2.5.29.32",
        authorityKeyIdentifier: "2.5.29.35",
        policyConstraints: "2.5.29.36",
        extKeyUsage: "2.5.29.37",
        authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
        ocsp: "1.3.6.1.5.5.7.48.1",
        caIssuers: "1.3.6.1.5.5.7.48.2",
        anyExtendedKeyUsage: "2.5.29.37.0",
        serverAuth: "1.3.6.1.5.5.7.3.1",
        clientAuth: "1.3.6.1.5.5.7.3.2",
        codeSigning: "1.3.6.1.5.5.7.3.3",
        emailProtection: "1.3.6.1.5.5.7.3.4",
        timeStamping: "1.3.6.1.5.5.7.3.8",
        ocspSigning: "1.3.6.1.5.5.7.3.9",
        ecPublicKey: "1.2.840.10045.2.1",
        secp256r1: "1.2.840.10045.3.1.7",
        secp256k1: "1.3.132.0.10",
        secp384r1: "1.3.132.0.34",
        pkcs5PBES2: "1.2.840.113549.1.5.13",
        pkcs5PBKDF2: "1.2.840.113549.1.5.12",
        "des-EDE3-CBC": "1.2.840.113549.3.7",
        data: "1.2.840.113549.1.7.1",
        "signed-data": "1.2.840.113549.1.7.2",
        "enveloped-data": "1.2.840.113549.1.7.3",
        "digested-data": "1.2.840.113549.1.7.5",
        "encrypted-data": "1.2.840.113549.1.7.6",
        "authenticated-data": "1.2.840.113549.1.9.16.1.2",
        tstinfo: "1.2.840.113549.1.9.16.1.4",
        extensionRequest: "1.2.840.113549.1.9.14"
    }, this.objCache = {}, this.name2obj = function(t) {
        if (void 0 !== this.objCache[t]) return this.objCache[t];
        if (void 0 === this.name2oidList[t]) throw "Name of ObjectIdentifier not defined: " + t;
        var e = this.name2oidList[t], i = new KJUR.asn1.DERObjectIdentifier({
            oid: e
        });
        return this.objCache[t] = i, i;
    }, this.atype2obj = function(t) {
        if (void 0 !== this.objCache[t]) return this.objCache[t];
        if (void 0 === this.atype2oidList[t]) throw "AttributeType name undefined: " + t;
        var e = this.atype2oidList[t], i = new KJUR.asn1.DERObjectIdentifier({
            oid: e
        });
        return this.objCache[t] = i, i;
    };
}(), KJUR.asn1.x509.OID.oid2name = function(t) {
    var e = KJUR.asn1.x509.OID.name2oidList;
    for (var i in e) if (e[i] == t) return i;
    return "";
}, KJUR.asn1.x509.OID.oid2atype = function(t) {
    var e = KJUR.asn1.x509.OID.atype2oidList;
    for (var i in e) if (e[i] == t) return i;
    return t;
}, KJUR.asn1.x509.OID.name2oid = function(t) {
    var e = KJUR.asn1.x509.OID.name2oidList;
    return void 0 === e[t] ? "" : e[t];
}, KJUR.asn1.x509.X509Util = new function() {
    this.getPKCS8PubKeyPEMfromRSAKey = function(t) {
        var e = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t.n), i = KJUR.asn1.ASN1Util.integerToByteHex(t.e), n = new KJUR.asn1.DERInteger({
            hex: e
        }), r = new KJUR.asn1.DERInteger({
            hex: i
        }), s = new KJUR.asn1.DERSequence({
            array: [ n, r ]
        }), a = s.getEncodedHex(), o = new KJUR.asn1.x509.AlgorithmIdentifier({
            name: "rsaEncryption"
        }), h = new KJUR.asn1.DERBitString({
            hex: "00" + a
        }), u = new KJUR.asn1.DERSequence({
            array: [ o, h ]
        }), c = u.getEncodedHex();
        return KJUR.asn1.ASN1Util.getPEMStringFromHex(c, "PUBLIC KEY");
    };
}(), KJUR.asn1.x509.X509Util.newCertPEM = function(t) {
    var e = KJUR.asn1.x509, i = new e.TBSCertificate();
    if (void 0 === t.serial) throw "serial number undefined.";
    if (i.setSerialNumberByParam(t.serial), "string" != typeof t.sigalg.name) throw "unproper signature algorithm name";
    if (i.setSignatureAlgByParam(t.sigalg), void 0 === t.issuer) throw "issuer name undefined.";
    if (i.setIssuerByParam(t.issuer), void 0 === t.notbefore) throw "notbefore undefined.";
    if (i.setNotBeforeByParam(t.notbefore), void 0 === t.notafter) throw "notafter undefined.";
    if (i.setNotAfterByParam(t.notafter), void 0 === t.subject) throw "subject name undefined.";
    if (i.setSubjectByParam(t.subject), void 0 === t.sbjpubkey) throw "subject public key undefined.";
    if (i.setSubjectPublicKeyByGetKey(t.sbjpubkey), void 0 !== t.ext && void 0 !== t.ext.length) for (var n = 0; n < t.ext.length; n++) for (key in t.ext[n]) i.appendExtensionByName(key, t.ext[n][key]);
    if (void 0 === t.cakey && void 0 === t.sighex) throw "param cakey and sighex undefined.";
    var r = null, s = null;
    return t.cakey && (r = !0 === t.cakey.isPrivate ? t.cakey : KEYUTIL.getKey.apply(null, t.cakey), 
    s = new e.Certificate({
        tbscertobj: i,
        prvkeyobj: r
    }), s.sign()), t.sighex && (s = new e.Certificate({
        tbscertobj: i
    }), s.setSignatureHex(t.sighex)), s.getPEMString();
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), 
void 0 !== KJUR.asn1.cms && KJUR.asn1.cms || (KJUR.asn1.cms = {}), KJUR.asn1.cms.Attribute = function(t) {
    KJUR.asn1.cms.Attribute.superclass.constructor.call(this);
    this.getEncodedHex = function() {
        var t = void 0, e = void 0, i = void 0;
        t = new KJUR.asn1.DERObjectIdentifier({
            oid: this.attrTypeOid
        }), e = new KJUR.asn1.DERSet({
            array: this.valueList
        });
        try {
            e.getEncodedHex();
        } catch (t) {
            throw "fail valueSet.getEncodedHex in Attribute(1)/" + t;
        }
        i = new KJUR.asn1.DERSequence({
            array: [ t, e ]
        });
        try {
            this.hTLV = i.getEncodedHex();
        } catch (t) {
            throw "failed seq.getEncodedHex in Attribute(2)/" + t;
        }
        return this.hTLV;
    };
}, YAHOO.lang.extend(KJUR.asn1.cms.Attribute, KJUR.asn1.ASN1Object), KJUR.asn1.cms.ContentType = function(t) {
    (KJUR.asn1.cms.ContentType.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.3", 
    void 0 !== t) && (new KJUR.asn1.DERObjectIdentifier(t), this.valueList = [ null ]);
}, YAHOO.lang.extend(KJUR.asn1.cms.ContentType, KJUR.asn1.cms.Attribute), KJUR.asn1.cms.MessageDigest = function(t) {
    if (KJUR.asn1.cms.MessageDigest.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.4", 
    void 0 !== t) if (t.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo && "string" == typeof t.hashAlg) {
        var e = t.eciObj.eContentValueHex, i = t.hashAlg, n = KJUR.crypto.Util.hashHex(e, i), r = new KJUR.asn1.DEROctetString({
            hex: n
        });
        r.getEncodedHex(), this.valueList = [ r ];
    } else {
        var r = new KJUR.asn1.DEROctetString(t);
        r.getEncodedHex(), this.valueList = [ r ];
    }
}, YAHOO.lang.extend(KJUR.asn1.cms.MessageDigest, KJUR.asn1.cms.Attribute), KJUR.asn1.cms.SigningTime = function(t) {
    if (KJUR.asn1.cms.SigningTime.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.5", 
    void 0 !== t) {
        var e = new KJUR.asn1.x509.Time(t);
        try {
            e.getEncodedHex();
        } catch (t) {
            throw "SigningTime.getEncodedHex() failed/" + t;
        }
        this.valueList = [ e ];
    }
}, YAHOO.lang.extend(KJUR.asn1.cms.SigningTime, KJUR.asn1.cms.Attribute), KJUR.asn1.cms.SigningCertificate = function(t) {
    KJUR.asn1.cms.SigningCertificate.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.12";
    var e = KJUR.asn1, i = KJUR.asn1.cms, n = KJUR.crypto;
    this.setCerts = function(t) {
        for (var r = [], s = 0; s < t.length; s++) {
            var a = ASN1HEX.pemToHex(t[s]), o = n.Util.hashHex(a, "sha1"), h = new e.DEROctetString({
                hex: o
            });
            h.getEncodedHex();
            var u = new i.IssuerAndSerialNumber({
                cert: t[s]
            });
            u.getEncodedHex();
            var c = new e.DERSequence({
                array: [ h, u ]
            });
            c.getEncodedHex(), r.push(c);
        }
        var l = new e.DERSequence({
            array: r
        });
        l.getEncodedHex(), this.valueList = [ l ];
    }, void 0 !== t && "object" === _typeof(t.array) && this.setCerts(t.array);
}, YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificate, KJUR.asn1.cms.Attribute), 
KJUR.asn1.cms.SigningCertificateV2 = function(t) {
    KJUR.asn1.cms.SigningCertificateV2.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.47";
    var e = KJUR.asn1, i = KJUR.asn1.x509, n = KJUR.asn1.cms, r = KJUR.crypto;
    if (this.setCerts = function(t, s) {
        for (var a = [], o = 0; o < t.length; o++) {
            var h = ASN1HEX.pemToHex(t[o]), u = [];
            "sha256" != s && u.push(new i.AlgorithmIdentifier({
                name: s
            }));
            var c = r.Util.hashHex(h, s), l = new e.DEROctetString({
                hex: c
            });
            l.getEncodedHex(), u.push(l);
            var g = new n.IssuerAndSerialNumber({
                cert: t[o]
            });
            g.getEncodedHex(), u.push(g);
            var d = new e.DERSequence({
                array: u
            });
            d.getEncodedHex(), a.push(d);
        }
        var f = new e.DERSequence({
            array: a
        });
        f.getEncodedHex(), this.valueList = [ f ];
    }, void 0 !== t && "object" === _typeof(t.array)) {
        var s = "sha256";
        "string" == typeof t.hashAlg && (s = t.hashAlg), this.setCerts(t.array, s);
    }
}, YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificateV2, KJUR.asn1.cms.Attribute), 
KJUR.asn1.cms.IssuerAndSerialNumber = function(t) {
    KJUR.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);
    var e = KJUR.asn1, i = e.x509;
    this.setByCertPEM = function(t) {
        var n = ASN1HEX.pemToHex(t), r = new X509();
        r.hex = n;
        var s = r.getIssuerHex();
        this.dIssuer = new i.X500Name(), this.dIssuer.hTLV = s;
        var a = r.getSerialNumberHex();
        this.dSerial = new e.DERInteger({
            hex: a
        });
    }, this.getEncodedHex = function() {
        var t = new KJUR.asn1.DERSequence({
            array: [ this.dIssuer, this.dSerial ]
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t), 
    t.issuer && t.serial && (t.issuer instanceof KJUR.asn1.x509.X500Name ? this.dIssuer = t.issuer : this.dIssuer = new KJUR.asn1.x509.X500Name(t.issuer), 
    t.serial instanceof KJUR.asn1.DERInteger ? this.dSerial = t.serial : this.dSerial = new KJUR.asn1.DERInteger(t.serial)), 
    "string" == typeof t.cert && this.setByCertPEM(t.cert));
}, YAHOO.lang.extend(KJUR.asn1.cms.IssuerAndSerialNumber, KJUR.asn1.ASN1Object), 
KJUR.asn1.cms.AttributeList = function(t) {
    KJUR.asn1.cms.AttributeList.superclass.constructor.call(this), this.list = new Array(), 
    this.sortFlag = !0, this.add = function(t) {
        t instanceof KJUR.asn1.cms.Attribute && this.list.push(t);
    }, this.length = function() {
        return this.list.length;
    }, this.clear = function() {
        this.list = new Array(), this.hTLV = null, this.hV = null;
    }, this.getEncodedHex = function() {
        if ("string" == typeof this.hTLV) return this.hTLV;
        var t = new KJUR.asn1.DERSet({
            array: this.list,
            sortflag: this.sortFlag
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
}, YAHOO.lang.extend(KJUR.asn1.cms.AttributeList, KJUR.asn1.ASN1Object), KJUR.asn1.cms.SignerInfo = function(t) {
    KJUR.asn1.cms.SignerInfo.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.cms, n = KJUR.asn1.x509;
    this.dCMSVersion = new e.DERInteger({
        int: 1
    }), this.dSignerIdentifier = null, this.dDigestAlgorithm = null, this.dSignedAttrs = new i.AttributeList(), 
    this.dSigAlg = null, this.dSig = null, this.dUnsignedAttrs = new i.AttributeList(), 
    this.setSignerIdentifier = function(t) {
        if ("string" == typeof t && -1 != t.indexOf("CERTIFICATE") && -1 != t.indexOf("BEGIN") && -1 != t.indexOf("END")) {
            this.dSignerIdentifier = new i.IssuerAndSerialNumber({
                cert: t
            });
        }
    }, this.setForContentAndHash = function(t) {
        void 0 !== t && (t.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo && (this.dSignedAttrs.add(new i.ContentType({
            oid: "1.2.840.113549.1.7.1"
        })), this.dSignedAttrs.add(new i.MessageDigest({
            eciObj: t.eciObj,
            hashAlg: t.hashAlg
        }))), void 0 !== t.sdObj && t.sdObj instanceof KJUR.asn1.cms.SignedData && -1 == t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg) && t.sdObj.digestAlgNameList.push(t.hashAlg), 
        "string" == typeof t.hashAlg && (this.dDigestAlgorithm = new n.AlgorithmIdentifier({
            name: t.hashAlg
        })));
    }, this.sign = function(t, i) {
        this.dSigAlg = new n.AlgorithmIdentifier({
            name: i
        });
        var r = this.dSignedAttrs.getEncodedHex(), s = KEYUTIL.getKey(t), a = new KJUR.crypto.Signature({
            alg: i
        });
        a.init(s), a.updateHex(r);
        var o = a.sign();
        this.dSig = new e.DEROctetString({
            hex: o
        });
    }, this.addUnsigned = function(t) {
        this.hTLV = null, this.dUnsignedAttrs.hTLV = null, this.dUnsignedAttrs.add(t);
    }, this.getEncodedHex = function() {
        if (this.dSignedAttrs instanceof KJUR.asn1.cms.AttributeList && 0 == this.dSignedAttrs.length()) throw "SignedAttrs length = 0 (empty)";
        var t = new e.DERTaggedObject({
            obj: this.dSignedAttrs,
            tag: "a0",
            explicit: !1
        }), i = null;
        this.dUnsignedAttrs.length() > 0 && (i = new e.DERTaggedObject({
            obj: this.dUnsignedAttrs,
            tag: "a1",
            explicit: !1
        }));
        var n = [ this.dCMSVersion, this.dSignerIdentifier, this.dDigestAlgorithm, t, this.dSigAlg, this.dSig ];
        null != i && n.push(i);
        var r = new e.DERSequence({
            array: n
        });
        return this.hTLV = r.getEncodedHex(), this.hTLV;
    };
}, YAHOO.lang.extend(KJUR.asn1.cms.SignerInfo, KJUR.asn1.ASN1Object), KJUR.asn1.cms.EncapsulatedContentInfo = function(t) {
    KJUR.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);
    var e = KJUR.asn1;
    KJUR.asn1.cms, KJUR.asn1.x509;
    this.dEContentType = new e.DERObjectIdentifier({
        name: "data"
    }), this.dEContent = null, this.isDetached = !1, this.eContentValueHex = null, this.setContentType = function(t) {
        t.match(/^[0-2][.][0-9.]+$/) ? this.dEContentType = new e.DERObjectIdentifier({
            oid: t
        }) : this.dEContentType = new e.DERObjectIdentifier({
            name: t
        });
    }, this.setContentValue = function(t) {
        void 0 !== t && ("string" == typeof t.hex ? this.eContentValueHex = t.hex : "string" == typeof t.str && (this.eContentValueHex = utf8tohex(t.str)));
    }, this.setContentValueHex = function(t) {
        this.eContentValueHex = t;
    }, this.setContentValueStr = function(t) {
        this.eContentValueHex = utf8tohex(t);
    }, this.getEncodedHex = function() {
        if ("string" != typeof this.eContentValueHex) throw "eContentValue not yet set";
        var t = new e.DEROctetString({
            hex: this.eContentValueHex
        });
        this.dEContent = new e.DERTaggedObject({
            obj: t,
            tag: "a0",
            explicit: !0
        });
        var i = [ this.dEContentType ];
        this.isDetached || i.push(this.dEContent);
        var n = new e.DERSequence({
            array: i
        });
        return this.hTLV = n.getEncodedHex(), this.hTLV;
    };
}, YAHOO.lang.extend(KJUR.asn1.cms.EncapsulatedContentInfo, KJUR.asn1.ASN1Object), 
KJUR.asn1.cms.ContentInfo = function(t) {
    KJUR.asn1.cms.ContentInfo.superclass.constructor.call(this);
    var e = KJUR.asn1, i = (KJUR.asn1.cms, KJUR.asn1.x509);
    this.dContentType = null, this.dContent = null, this.setContentType = function(t) {
        "string" == typeof t && (this.dContentType = i.OID.name2obj(t));
    }, this.getEncodedHex = function() {
        var t = new e.DERTaggedObject({
            obj: this.dContent,
            tag: "a0",
            explicit: !0
        }), i = new e.DERSequence({
            array: [ this.dContentType, t ]
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && (t.type && this.setContentType(t.type), t.obj && t.obj instanceof e.ASN1Object && (this.dContent = t.obj));
}, YAHOO.lang.extend(KJUR.asn1.cms.ContentInfo, KJUR.asn1.ASN1Object), KJUR.asn1.cms.SignedData = function(t) {
    KJUR.asn1.cms.SignedData.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.cms, n = KJUR.asn1.x509;
    this.dCMSVersion = new e.DERInteger({
        int: 1
    }), this.dDigestAlgs = null, this.digestAlgNameList = [], this.dEncapContentInfo = new i.EncapsulatedContentInfo(), 
    this.dCerts = null, this.certificateList = [], this.crlList = [], this.signerInfoList = [ new i.SignerInfo() ], 
    this.addCertificatesByPEM = function(t) {
        var i = ASN1HEX.pemToHex(t), n = new e.ASN1Object();
        n.hTLV = i, this.certificateList.push(n);
    }, this.getEncodedHex = function() {
        if ("string" == typeof this.hTLV) return this.hTLV;
        if (null == this.dDigestAlgs) {
            for (var t = [], i = 0; i < this.digestAlgNameList.length; i++) {
                var r = this.digestAlgNameList[i], s = new n.AlgorithmIdentifier({
                    name: r
                });
                t.push(s);
            }
            this.dDigestAlgs = new e.DERSet({
                array: t
            });
        }
        var a = [ this.dCMSVersion, this.dDigestAlgs, this.dEncapContentInfo ];
        if (null == this.dCerts && this.certificateList.length > 0) {
            var o = new e.DERSet({
                array: this.certificateList
            });
            this.dCerts = new e.DERTaggedObject({
                obj: o,
                tag: "a0",
                explicit: !1
            });
        }
        null != this.dCerts && a.push(this.dCerts);
        var h = new e.DERSet({
            array: this.signerInfoList
        });
        a.push(h);
        var u = new e.DERSequence({
            array: a
        });
        return this.hTLV = u.getEncodedHex(), this.hTLV;
    }, this.getContentInfo = function() {
        return this.getEncodedHex(), new i.ContentInfo({
            type: "signed-data",
            obj: this
        });
    }, this.getContentInfoEncodedHex = function() {
        return this.getContentInfo().getEncodedHex();
    }, this.getPEM = function() {
        var t = this.getContentInfoEncodedHex();
        return e.ASN1Util.getPEMStringFromHex(t, "CMS");
    };
}, YAHOO.lang.extend(KJUR.asn1.cms.SignedData, KJUR.asn1.ASN1Object), KJUR.asn1.cms.CMSUtil = new function() {}(), 
KJUR.asn1.cms.CMSUtil.newSignedData = function(t) {
    var e = KJUR.asn1.cms, i = KJUR.asn1.cades, n = new e.SignedData();
    if (n.dEncapContentInfo.setContentValue(t.content), "object" === _typeof(t.certs)) for (var r = 0; r < t.certs.length; r++) n.addCertificatesByPEM(t.certs[r]);
    n.signerInfoList = [];
    for (var r = 0; r < t.signerInfos.length; r++) {
        var s = t.signerInfos[r], a = new e.SignerInfo();
        a.setSignerIdentifier(s.signerCert), a.setForContentAndHash({
            sdObj: n,
            eciObj: n.dEncapContentInfo,
            hashAlg: s.hashAlg
        });
        for (attrName in s.sAttr) {
            var o = s.sAttr[attrName];
            if ("SigningTime" == attrName) {
                var h = new e.SigningTime(o);
                a.dSignedAttrs.add(h);
            }
            if ("SigningCertificate" == attrName) {
                var h = new e.SigningCertificate(o);
                a.dSignedAttrs.add(h);
            }
            if ("SigningCertificateV2" == attrName) {
                var h = new e.SigningCertificateV2(o);
                a.dSignedAttrs.add(h);
            }
            if ("SignaturePolicyIdentifier" == attrName) {
                var h = new i.SignaturePolicyIdentifier(o);
                a.dSignedAttrs.add(h);
            }
        }
        a.sign(s.signerPrvKey, s.sigAlg), n.signerInfoList.push(a);
    }
    return n;
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), 
void 0 !== KJUR.asn1.tsp && KJUR.asn1.tsp || (KJUR.asn1.tsp = {}), KJUR.asn1.tsp.Accuracy = function(t) {
    KJUR.asn1.tsp.Accuracy.superclass.constructor.call(this);
    var e = KJUR.asn1;
    this.seconds = null, this.millis = null, this.micros = null, this.getEncodedHex = function() {
        var t = null, i = null, n = null, r = [];
        if (null != this.seconds && (t = new e.DERInteger({
            int: this.seconds
        }), r.push(t)), null != this.millis) {
            var s = new e.DERInteger({
                int: this.millis
            });
            i = new e.DERTaggedObject({
                obj: s,
                tag: "80",
                explicit: !1
            }), r.push(i);
        }
        if (null != this.micros) {
            var a = new e.DERInteger({
                int: this.micros
            });
            n = new e.DERTaggedObject({
                obj: a,
                tag: "81",
                explicit: !1
            }), r.push(n);
        }
        var o = new e.DERSequence({
            array: r
        });
        return this.hTLV = o.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("number" == typeof t.seconds && (this.seconds = t.seconds), 
    "number" == typeof t.millis && (this.millis = t.millis), "number" == typeof t.micros && (this.micros = t.micros));
}, YAHOO.lang.extend(KJUR.asn1.tsp.Accuracy, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.MessageImprint = function(t) {
    KJUR.asn1.tsp.MessageImprint.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.x509;
    this.dHashAlg = null, this.dHashValue = null, this.getEncodedHex = function() {
        return "string" == typeof this.hTLV ? this.hTLV : new e.DERSequence({
            array: [ this.dHashAlg, this.dHashValue ]
        }).getEncodedHex();
    }, void 0 !== t && ("string" == typeof t.hashAlg && (this.dHashAlg = new i.AlgorithmIdentifier({
        name: t.hashAlg
    })), "string" == typeof t.hashValue && (this.dHashValue = new e.DEROctetString({
        hex: t.hashValue
    })));
}, YAHOO.lang.extend(KJUR.asn1.tsp.MessageImprint, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.TimeStampReq = function(t) {
    KJUR.asn1.tsp.TimeStampReq.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.tsp;
    this.dVersion = new e.DERInteger({
        int: 1
    }), this.dMessageImprint = null, this.dPolicy = null, this.dNonce = null, this.certReq = !0, 
    this.setMessageImprint = function(t) {
        if (t instanceof KJUR.asn1.tsp.MessageImprint) return void (this.dMessageImprint = t);
        "object" === (void 0 === t ? "undefined" : _typeof(t)) && (this.dMessageImprint = new i.MessageImprint(t));
    }, this.getEncodedHex = function() {
        if (null == this.dMessageImprint) throw "messageImprint shall be specified";
        var t = [ this.dVersion, this.dMessageImprint ];
        null != this.dPolicy && t.push(this.dPolicy), null != this.dNonce && t.push(this.dNonce), 
        this.certReq && t.push(new e.DERBoolean());
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("object" === _typeof(t.mi) && this.setMessageImprint(t.mi), 
    "object" === _typeof(t.policy) && (this.dPolicy = new e.DERObjectIdentifier(t.policy)), 
    "object" === _typeof(t.nonce) && (this.dNonce = new e.DERInteger(t.nonce)), "boolean" == typeof t.certreq && (this.certReq = t.certreq));
}, YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampReq, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.TSTInfo = function(t) {
    KJUR.asn1.tsp.TSTInfo.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.x509, n = KJUR.asn1.tsp;
    if (this.dVersion = new e.DERInteger({
        int: 1
    }), this.dPolicy = null, this.dMessageImprint = null, this.dSerialNumber = null, 
    this.dGenTime = null, this.dAccuracy = null, this.dOrdering = null, this.dNonce = null, 
    this.dTsa = null, this.getEncodedHex = function() {
        var t = [ this.dVersion ];
        if (null == this.dPolicy) throw "policy shall be specified.";
        if (t.push(this.dPolicy), null == this.dMessageImprint) throw "messageImprint shall be specified.";
        if (t.push(this.dMessageImprint), null == this.dSerialNumber) throw "serialNumber shall be specified.";
        if (t.push(this.dSerialNumber), null == this.dGenTime) throw "genTime shall be specified.";
        t.push(this.dGenTime), null != this.dAccuracy && t.push(this.dAccuracy), null != this.dOrdering && t.push(this.dOrdering), 
        null != this.dNonce && t.push(this.dNonce), null != this.dTsa && t.push(this.dTsa);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        if ("string" == typeof t.policy) {
            if (!t.policy.match(/^[0-9.]+$/)) throw "policy shall be oid like 0.1.4.134";
            this.dPolicy = new e.DERObjectIdentifier({
                oid: t.policy
            });
        }
        void 0 !== t.messageImprint && (this.dMessageImprint = new n.MessageImprint(t.messageImprint)), 
        void 0 !== t.serialNumber && (this.dSerialNumber = new e.DERInteger(t.serialNumber)), 
        void 0 !== t.genTime && (this.dGenTime = new e.DERGeneralizedTime(t.genTime)), "undefind" != typeof t.accuracy && (this.dAccuracy = new n.Accuracy(t.accuracy)), 
        void 0 !== t.ordering && 1 == t.ordering && (this.dOrdering = new e.DERBoolean()), 
        void 0 !== t.nonce && (this.dNonce = new e.DERInteger(t.nonce)), void 0 !== t.tsa && (this.dTsa = new i.X500Name(t.tsa));
    }
}, YAHOO.lang.extend(KJUR.asn1.tsp.TSTInfo, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.TimeStampResp = function(t) {
    KJUR.asn1.tsp.TimeStampResp.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.tsp;
    this.dStatus = null, this.dTST = null, this.getEncodedHex = function() {
        if (null == this.dStatus) throw "status shall be specified";
        var t = [ this.dStatus ];
        null != this.dTST && t.push(this.dTST);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("object" === _typeof(t.status) && (this.dStatus = new i.PKIStatusInfo(t.status)), 
    void 0 !== t.tst && t.tst instanceof KJUR.asn1.ASN1Object && (this.dTST = t.tst.getContentInfo()));
}, YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampResp, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.PKIStatusInfo = function(t) {
    KJUR.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.tsp;
    this.dStatus = null, this.dStatusString = null, this.dFailureInfo = null, this.getEncodedHex = function() {
        if (null == this.dStatus) throw "status shall be specified";
        var t = [ this.dStatus ];
        null != this.dStatusString && t.push(this.dStatusString), null != this.dFailureInfo && t.push(this.dFailureInfo);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("object" === _typeof(t.status) && (this.dStatus = new i.PKIStatus(t.status)), 
    "object" === _typeof(t.statstr) && (this.dStatusString = new i.PKIFreeText({
        array: t.statstr
    })), "object" === _typeof(t.failinfo) && (this.dFailureInfo = new i.PKIFailureInfo(t.failinfo)));
}, YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatusInfo, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.PKIStatus = function(t) {
    KJUR.asn1.tsp.PKIStatus.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.tsp;
    if (this.getEncodedHex = function() {
        return this.hTLV = this.dStatus.getEncodedHex(), this.hTLV;
    }, void 0 !== t) if (void 0 !== t.name) {
        var n = i.PKIStatus.valueList;
        if (void 0 === n[t.name]) throw "name undefined: " + t.name;
        this.dStatus = new e.DERInteger({
            int: n[t.name]
        });
    } else this.dStatus = new e.DERInteger(t);
}, YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatus, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.PKIStatus.valueList = {
    granted: 0,
    grantedWithMods: 1,
    rejection: 2,
    waiting: 3,
    revocationWarning: 4,
    revocationNotification: 5
}, KJUR.asn1.tsp.PKIFreeText = function(t) {
    KJUR.asn1.tsp.PKIFreeText.superclass.constructor.call(this);
    var e = KJUR.asn1;
    this.textList = [], this.getEncodedHex = function() {
        for (var t = [], i = 0; i < this.textList.length; i++) t.push(new e.DERUTF8String({
            str: this.textList[i]
        }));
        var n = new e.DERSequence({
            array: t
        });
        return this.hTLV = n.getEncodedHex(), this.hTLV;
    }, void 0 !== t && "object" === _typeof(t.array) && (this.textList = t.array);
}, YAHOO.lang.extend(KJUR.asn1.tsp.PKIFreeText, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.PKIFailureInfo = function(t) {
    KJUR.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.tsp;
    if (this.value = null, this.getEncodedHex = function() {
        if (null == this.value) throw "value shall be specified";
        var t = new Number(this.value).toString(2), i = new e.DERBitString();
        return i.setByBinaryString(t), this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t) if ("string" == typeof t.name) {
        var n = i.PKIFailureInfo.valueList;
        if (void 0 === n[t.name]) throw "name undefined: " + t.name;
        this.value = n[t.name];
    } else "number" == typeof t.int && (this.value = t.int);
}, YAHOO.lang.extend(KJUR.asn1.tsp.PKIFailureInfo, KJUR.asn1.ASN1Object), KJUR.asn1.tsp.PKIFailureInfo.valueList = {
    badAlg: 0,
    badRequest: 2,
    badDataFormat: 5,
    timeNotAvailable: 14,
    unacceptedPolicy: 15,
    unacceptedExtension: 16,
    addInfoNotAvailable: 17,
    systemFailure: 25
}, KJUR.asn1.tsp.AbstractTSAAdapter = function(t) {
    this.getTSTHex = function(t, e) {
        throw "not implemented yet";
    };
}, KJUR.asn1.tsp.SimpleTSAAdapter = function(t) {
    KJUR.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this), this.params = null, 
    this.serial = 0, this.getTSTHex = function(t, e) {
        var i = KJUR.crypto.Util.hashHex(t, e);
        this.params.tstInfo.messageImprint = {
            hashAlg: e,
            hashValue: i
        }, this.params.tstInfo.serialNumber = {
            int: this.serial++
        };
        var n = Math.floor(1e9 * Math.random());
        return this.params.tstInfo.nonce = {
            int: n
        }, KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params).getContentInfoEncodedHex();
    }, void 0 !== t && (this.params = t);
}, YAHOO.lang.extend(KJUR.asn1.tsp.SimpleTSAAdapter, KJUR.asn1.tsp.AbstractTSAAdapter), 
KJUR.asn1.tsp.FixedTSAAdapter = function(t) {
    KJUR.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this), this.params = null, 
    this.getTSTHex = function(t, e) {
        var i = KJUR.crypto.Util.hashHex(t, e);
        return this.params.tstInfo.messageImprint = {
            hashAlg: e,
            hashValue: i
        }, KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params).getContentInfoEncodedHex();
    }, void 0 !== t && (this.params = t);
}, YAHOO.lang.extend(KJUR.asn1.tsp.FixedTSAAdapter, KJUR.asn1.tsp.AbstractTSAAdapter), 
KJUR.asn1.tsp.TSPUtil = new function() {}(), KJUR.asn1.tsp.TSPUtil.newTimeStampToken = function(t) {
    var e = KJUR.asn1.cms, i = KJUR.asn1.tsp, n = new e.SignedData(), r = new i.TSTInfo(t.tstInfo), s = r.getEncodedHex();
    if (n.dEncapContentInfo.setContentValue({
        hex: s
    }), n.dEncapContentInfo.setContentType("tstinfo"), "object" === _typeof(t.certs)) for (var a = 0; a < t.certs.length; a++) n.addCertificatesByPEM(t.certs[a]);
    var o = n.signerInfoList[0];
    o.setSignerIdentifier(t.signerCert), o.setForContentAndHash({
        sdObj: n,
        eciObj: n.dEncapContentInfo,
        hashAlg: t.hashAlg
    });
    var h = new e.SigningCertificate({
        array: [ t.signerCert ]
    });
    return o.dSignedAttrs.add(h), o.sign(t.signerPrvKey, t.sigAlg), n;
}, KJUR.asn1.tsp.TSPUtil.parseTimeStampReq = function(t) {
    var e = {};
    e.certreq = !1;
    var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
    if (i.length < 2) throw "TimeStampReq must have at least 2 items";
    var n = ASN1HEX.getHexOfTLV_AtObj(t, i[1]);
    e.mi = KJUR.asn1.tsp.TSPUtil.parseMessageImprint(n);
    for (var r = 2; r < i.length; r++) {
        var s = i[r], a = t.substr(s, 2);
        if ("06" == a) {
            var o = ASN1HEX.getHexOfV_AtObj(t, s);
            e.policy = ASN1HEX.hextooidstr(o);
        }
        "02" == a && (e.nonce = ASN1HEX.getHexOfV_AtObj(t, s)), "01" == a && (e.certreq = !0);
    }
    return e;
}, KJUR.asn1.tsp.TSPUtil.parseMessageImprint = function(t) {
    var e = {};
    if ("30" != t.substr(0, 2)) throw "head of messageImprint hex shall be '30'";
    var i = (ASN1HEX.getPosArrayOfChildren_AtObj(t, 0), ASN1HEX.getDecendantIndexByNthList(t, 0, [ 0, 0 ])), n = ASN1HEX.getHexOfV_AtObj(t, i), r = ASN1HEX.hextooidstr(n), s = KJUR.asn1.x509.OID.oid2name(r);
    if ("" == s) throw "hashAlg name undefined: " + r;
    var a = s, o = ASN1HEX.getDecendantIndexByNthList(t, 0, [ 1 ]);
    return e.hashAlg = a, e.hashValue = ASN1HEX.getHexOfV_AtObj(t, o), e;
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), 
void 0 !== KJUR.asn1.cades && KJUR.asn1.cades || (KJUR.asn1.cades = {}), KJUR.asn1.cades.SignaturePolicyIdentifier = function(t) {
    KJUR.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.15";
    var e = KJUR.asn1, i = KJUR.asn1.cades;
    if (void 0 !== t && "string" == typeof t.oid && "object" === _typeof(t.hash)) {
        var n = new e.DERObjectIdentifier({
            oid: t.oid
        }), r = new i.OtherHashAlgAndValue(t.hash), s = new e.DERSequence({
            array: [ n, r ]
        });
        this.valueList = [ s ];
    }
}, YAHOO.lang.extend(KJUR.asn1.cades.SignaturePolicyIdentifier, KJUR.asn1.cms.Attribute), 
KJUR.asn1.cades.OtherHashAlgAndValue = function(t) {
    KJUR.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.x509;
    this.dAlg = null, this.dHash = null, this.getEncodedHex = function() {
        var t = new e.DERSequence({
            array: [ this.dAlg, this.dHash ]
        });
        return this.hTLV = t.getEncodedHex(), this.hTLV;
    }, void 0 !== t && "string" == typeof t.alg && "string" == typeof t.hash && (this.dAlg = new i.AlgorithmIdentifier({
        name: t.alg
    }), this.dHash = new e.DEROctetString({
        hex: t.hash
    }));
}, YAHOO.lang.extend(KJUR.asn1.cades.OtherHashAlgAndValue, KJUR.asn1.ASN1Object), 
KJUR.asn1.cades.SignatureTimeStamp = function(t) {
    KJUR.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.14", 
    this.tstHex = null;
    var e = KJUR.asn1;
    if (void 0 !== t) {
        if (void 0 !== t.res) if ("string" == typeof t.res && t.res.match(/^[0-9A-Fa-f]+$/)) ; else if (!(t.res instanceof KJUR.asn1.ASN1Object)) throw "res param shall be ASN1Object or hex string";
        if (void 0 !== t.tst) if ("string" == typeof t.tst && t.tst.match(/^[0-9A-Fa-f]+$/)) {
            var i = new e.ASN1Object();
            this.tstHex = t.tst, i.hTLV = this.tstHex, i.getEncodedHex(), this.valueList = [ i ];
        } else if (!(t.tst instanceof KJUR.asn1.ASN1Object)) throw "tst param shall be ASN1Object or hex string";
    }
}, YAHOO.lang.extend(KJUR.asn1.cades.SignatureTimeStamp, KJUR.asn1.cms.Attribute), 
KJUR.asn1.cades.CompleteCertificateRefs = function(t) {
    KJUR.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.21";
    var e = (KJUR.asn1, KJUR.asn1.cades);
    this.setByArray = function(t) {
        this.valueList = [];
        for (var i = 0; i < t.length; i++) {
            var n = new e.OtherCertID(t[i]);
            this.valueList.push(n);
        }
    }, void 0 !== t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && "number" == typeof t.length && this.setByArray(t);
}, YAHOO.lang.extend(KJUR.asn1.cades.CompleteCertificateRefs, KJUR.asn1.cms.Attribute), 
KJUR.asn1.cades.OtherCertID = function(t) {
    KJUR.asn1.cades.OtherCertID.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.cms, n = KJUR.asn1.cades;
    this.hasIssuerSerial = !0, this.dOtherCertHash = null, this.dIssuerSerial = null, 
    this.setByCertPEM = function(t) {
        this.dOtherCertHash = new n.OtherHash(t), this.hasIssuerSerial && (this.dIssuerSerial = new i.IssuerAndSerialNumber(t));
    }, this.getEncodedHex = function() {
        if (null != this.hTLV) return this.hTLV;
        if (null == this.dOtherCertHash) throw "otherCertHash not set";
        var t = [ this.dOtherCertHash ];
        null != this.dIssuerSerial && t.push(this.dIssuerSerial);
        var i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t), 
    "object" === (void 0 === t ? "undefined" : _typeof(t)) && (!1 === t.hasis && (this.hasIssuerSerial = !1), 
    "string" == typeof t.cert && this.setByCertPEM(t.cert)));
}, YAHOO.lang.extend(KJUR.asn1.cades.OtherCertID, KJUR.asn1.ASN1Object), KJUR.asn1.cades.OtherHash = function(t) {
    KJUR.asn1.cades.OtherHash.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.cades;
    if (this.alg = "sha256", this.dOtherHash = null, this.setByCertPEM = function(t) {
        if (-1 == t.indexOf("-----BEGIN ")) throw "certPEM not to seem PEM format";
        var e = ASN1HEX.pemToHex(t), n = KJUR.crypto.Util.hashHex(e, this.alg);
        this.dOtherHash = new i.OtherHashAlgAndValue({
            alg: this.alg,
            hash: n
        });
    }, this.getEncodedHex = function() {
        if (null == this.dOtherHash) throw "OtherHash not set";
        return this.dOtherHash.getEncodedHex();
    }, void 0 !== t) if ("string" == typeof t) if (-1 != t.indexOf("-----BEGIN ")) this.setByCertPEM(t); else {
        if (!t.match(/^[0-9A-Fa-f]+$/)) throw "unsupported string value for params";
        this.dOtherHash = new e.DEROctetString({
            hex: t
        });
    } else "object" === (void 0 === t ? "undefined" : _typeof(t)) && ("string" == typeof t.cert ? ("string" == typeof t.alg && (this.alg = t.alg), 
    this.setByCertPEM(t.cert)) : this.dOtherHash = new i.OtherHashAlgAndValue(t));
}, YAHOO.lang.extend(KJUR.asn1.cades.OtherHash, KJUR.asn1.ASN1Object), KJUR.asn1.cades.CAdESUtil = new function() {}(), 
KJUR.asn1.cades.CAdESUtil.addSigTS = function(t, e, i) {}, KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(t) {
    var e = KJUR.asn1, i = KJUR.asn1.cms, n = KJUR.asn1.cades.CAdESUtil, r = {};
    if ("06092a864886f70d010702" != ASN1HEX.getDecendantHexTLVByNthList(t, 0, [ 0 ])) throw "hex is not CMS SignedData";
    var s = ASN1HEX.getDecendantIndexByNthList(t, 0, [ 1, 0 ]), a = ASN1HEX.getPosArrayOfChildren_AtObj(t, s);
    if (a.length < 4) throw "num of SignedData elem shall be 4 at least";
    var o = a.shift();
    r.version = ASN1HEX.getHexOfTLV_AtObj(t, o);
    var h = a.shift();
    r.algs = ASN1HEX.getHexOfTLV_AtObj(t, h);
    var u = a.shift();
    r.encapcontent = ASN1HEX.getHexOfTLV_AtObj(t, u), r.certs = null, r.revs = null, 
    r.si = [];
    var c = a.shift();
    "a0" == t.substr(c, 2) && (r.certs = ASN1HEX.getHexOfTLV_AtObj(t, c), c = a.shift()), 
    "a1" == t.substr(c, 2) && (r.revs = ASN1HEX.getHexOfTLV_AtObj(t, c), c = a.shift());
    var l = c;
    if ("31" != t.substr(l, 2)) throw "Can't find signerInfos";
    for (var g = ASN1HEX.getPosArrayOfChildren_AtObj(t, l), d = 0; d < g.length; d++) {
        var f = g[d], p = n.parseSignerInfoForAddingUnsigned(t, f, d);
        r.si[d] = p;
    }
    var y = null;
    r.obj = new i.SignedData(), y = new e.ASN1Object(), y.hTLV = r.version, r.obj.dCMSVersion = y, 
    y = new e.ASN1Object(), y.hTLV = r.algs, r.obj.dDigestAlgs = y, y = new e.ASN1Object(), 
    y.hTLV = r.encapcontent, r.obj.dEncapContentInfo = y, y = new e.ASN1Object(), y.hTLV = r.certs, 
    r.obj.dCerts = y, r.obj.signerInfoList = [];
    for (var d = 0; d < r.si.length; d++) r.obj.signerInfoList.push(r.si[d].obj);
    return r;
}, KJUR.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(t, e, i) {
    var n = KJUR.asn1, r = KJUR.asn1.cms, s = {}, a = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    if (6 != a.length) throw "not supported items for SignerInfo (!=6)";
    var o = a.shift();
    s.version = ASN1HEX.getHexOfTLV_AtObj(t, o);
    var h = a.shift();
    s.si = ASN1HEX.getHexOfTLV_AtObj(t, h);
    var u = a.shift();
    s.digalg = ASN1HEX.getHexOfTLV_AtObj(t, u);
    var c = a.shift();
    s.sattrs = ASN1HEX.getHexOfTLV_AtObj(t, c);
    var l = a.shift();
    s.sigalg = ASN1HEX.getHexOfTLV_AtObj(t, l);
    var g = a.shift();
    s.sig = ASN1HEX.getHexOfTLV_AtObj(t, g), s.sigval = ASN1HEX.getHexOfV_AtObj(t, g);
    var d = null;
    return s.obj = new r.SignerInfo(), d = new n.ASN1Object(), d.hTLV = s.version, s.obj.dCMSVersion = d, 
    d = new n.ASN1Object(), d.hTLV = s.si, s.obj.dSignerIdentifier = d, d = new n.ASN1Object(), 
    d.hTLV = s.digalg, s.obj.dDigestAlgorithm = d, d = new n.ASN1Object(), d.hTLV = s.sattrs, 
    s.obj.dSignedAttrs = d, d = new n.ASN1Object(), d.hTLV = s.sigalg, s.obj.dSigAlg = d, 
    d = new n.ASN1Object(), d.hTLV = s.sig, s.obj.dSig = d, s.obj.dUnsignedAttrs = new r.AttributeList(), 
    s;
}, void 0 !== KJUR.asn1.csr && KJUR.asn1.csr || (KJUR.asn1.csr = {}), KJUR.asn1.csr.CertificationRequest = function(t) {
    KJUR.asn1.csr.CertificationRequest.superclass.constructor.call(this);
    this.sign = function(t, e) {
        null == this.prvKey && (this.prvKey = e), this.asn1SignatureAlg = new KJUR.asn1.x509.AlgorithmIdentifier({
            name: t
        }), sig = new KJUR.crypto.Signature({
            alg: t
        }), sig.initSign(this.prvKey), sig.updateHex(this.asn1CSRInfo.getEncodedHex()), 
        this.hexSig = sig.sign(), this.asn1Sig = new KJUR.asn1.DERBitString({
            hex: "00" + this.hexSig
        });
        var i = new KJUR.asn1.DERSequence({
            array: [ this.asn1CSRInfo, this.asn1SignatureAlg, this.asn1Sig ]
        });
        this.hTLV = i.getEncodedHex(), this.isModified = !1;
    }, this.getPEMString = function() {
        return KJUR.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(), "CERTIFICATE REQUEST");
    }, this.getEncodedHex = function() {
        if (0 == this.isModified && null != this.hTLV) return this.hTLV;
        throw "not signed yet";
    }, void 0 !== t && void 0 !== t.csrinfo && (this.asn1CSRInfo = t.csrinfo);
}, YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequest, KJUR.asn1.ASN1Object), 
KJUR.asn1.csr.CertificationRequestInfo = function(t) {
    KJUR.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this), this._initialize = function() {
        this.asn1Array = new Array(), this.asn1Version = new KJUR.asn1.DERInteger({
            int: 0
        }), this.asn1Subject = null, this.asn1SubjPKey = null, this.extensionsArray = new Array();
    }, this.setSubjectByParam = function(t) {
        this.asn1Subject = new KJUR.asn1.x509.X500Name(t);
    }, this.setSubjectPublicKeyByGetKey = function(t) {
        var e = KEYUTIL.getKey(t);
        this.asn1SubjPKey = new KJUR.asn1.x509.SubjectPublicKeyInfo(e);
    }, this.appendExtensionByName = function(t, e) {
        KJUR.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray);
    }, this.getEncodedHex = function() {
        if (this.asn1Array = new Array(), this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1Subject), 
        this.asn1Array.push(this.asn1SubjPKey), this.extensionsArray.length > 0) {
            var t = new KJUR.asn1.DERSequence({
                array: this.extensionsArray
            }), e = new KJUR.asn1.DERSet({
                array: [ t ]
            }), i = new KJUR.asn1.DERSequence({
                array: [ new KJUR.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.9.14"
                }), e ]
            }), n = new KJUR.asn1.DERTaggedObject({
                explicit: !0,
                tag: "a0",
                obj: i
            });
            this.asn1Array.push(n);
        } else {
            var n = new KJUR.asn1.DERTaggedObject({
                explicit: !1,
                tag: "a0",
                obj: new KJUR.asn1.DERNull()
            });
            this.asn1Array.push(n);
        }
        var r = new KJUR.asn1.DERSequence({
            array: this.asn1Array
        });
        return this.hTLV = r.getEncodedHex(), this.isModified = !1, this.hTLV;
    }, this._initialize();
}, YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequestInfo, KJUR.asn1.ASN1Object), 
KJUR.asn1.csr.CSRUtil = new function() {}(), KJUR.asn1.csr.CSRUtil.newCSRPEM = function(t) {
    var e = KJUR.asn1.csr;
    if (void 0 === t.subject) throw "parameter subject undefined";
    if (void 0 === t.sbjpubkey) throw "parameter sbjpubkey undefined";
    if (void 0 === t.sigalg) throw "parameter sigalg undefined";
    if (void 0 === t.sbjprvkey) throw "parameter sbjpubkey undefined";
    var i = new e.CertificationRequestInfo();
    if (i.setSubjectByParam(t.subject), i.setSubjectPublicKeyByGetKey(t.sbjpubkey), 
    void 0 !== t.ext && void 0 !== t.ext.length) for (var n = 0; n < t.ext.length; n++) for (key in t.ext[n]) i.appendExtensionByName(key, t.ext[n][key]);
    var r = new e.CertificationRequest({
        csrinfo: i
    }), s = KEYUTIL.getKey(t.sbjprvkey);
    return r.sign(t.sigalg, s), r.getPEMString();
}, KJUR.asn1.csr.CSRUtil.getInfo = function(t) {
    var e = {};
    if (e.subject = {}, e.pubkey = {}, -1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST")) throw "argument is not PEM file";
    var i = ASN1HEX.pemToHex(t, "CERTIFICATE REQUEST");
    return e.subject.hex = ASN1HEX.getDecendantHexTLVByNthList(i, 0, [ 0, 1 ]), e.subject.name = X509.hex2dn(e.subject.hex), 
    e.pubkey.hex = ASN1HEX.getDecendantHexTLVByNthList(i, 0, [ 0, 2 ]), e.pubkey.obj = KEYUTIL.getKey(e.pubkey.hex, null, "pkcs8pub"), 
    e;
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), 
void 0 !== KJUR.asn1.ocsp && KJUR.asn1.ocsp || (KJUR.asn1.ocsp = {}), KJUR.asn1.ocsp.DEFAULT_HASH = "sha1", 
KJUR.asn1.ocsp.CertID = function(t) {
    KJUR.asn1.ocsp.CertID.superclass.constructor.call(this);
    var e = KJUR.asn1, i = KJUR.asn1.x509;
    if (this.dHashAlg = null, this.dIssuerNameHash = null, this.dIssuerKeyHash = null, 
    this.dSerialNumber = null, this.setByValue = function(t, n, r, s) {
        void 0 === s && (s = KJUR.asn1.ocsp.DEFAULT_HASH), this.dHashAlg = new i.AlgorithmIdentifier({
            name: s
        }), this.dIssuerNameHash = new e.DEROctetString({
            hex: t
        }), this.dIssuerKeyHash = new e.DEROctetString({
            hex: n
        }), this.dSerialNumber = new e.DERInteger({
            hex: r
        });
    }, this.setByCert = function(t, e, i) {
        void 0 === i && (i = KJUR.asn1.ocsp.DEFAULT_HASH);
        var n = new X509();
        n.readCertPEM(e);
        var r = new X509();
        r.readCertPEM(t);
        var s = X509.getPublicKeyInfoPropOfCertPEM(t), a = s.keyhex, o = n.getSerialNumberHex(), h = KJUR.crypto.Util.hashHex(r.getSubjectHex(), i), u = KJUR.crypto.Util.hashHex(a, i);
        this.setByValue(h, u, o, i), this.hoge = n.getSerialNumberHex();
    }, this.getEncodedHex = function() {
        if (null === this.dHashAlg && null === this.dIssuerNameHash && null === this.dIssuerKeyHash && null === this.dSerialNumber) throw "not yet set values";
        var t = [ this.dHashAlg, this.dIssuerNameHash, this.dIssuerKeyHash, this.dSerialNumber ], i = new e.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        var n = t;
        if (void 0 !== n.issuerCert && void 0 !== n.subjectCert) {
            var r = KJUR.asn1.ocsp.DEFAULT_HASH;
            void 0 === n.alg && (r = void 0), this.setByCert(n.issuerCert, n.subjectCert, r);
        } else {
            if (void 0 === n.namehash || void 0 === n.keyhash || void 0 === n.serial) throw "invalid constructor arguments";
            var r = KJUR.asn1.ocsp.DEFAULT_HASH;
            void 0 === n.alg && (r = void 0), this.setByValue(n.namehash, n.keyhash, n.serial, r);
        }
    }
}, YAHOO.lang.extend(KJUR.asn1.ocsp.CertID, KJUR.asn1.ASN1Object), KJUR.asn1.ocsp.Request = function(t) {
    if (KJUR.asn1.ocsp.Request.superclass.constructor.call(this), this.dReqCert = null, 
    this.dExt = null, this.getEncodedHex = function() {
        var t = [];
        if (null === this.dReqCert) throw "reqCert not set";
        t.push(this.dReqCert);
        var e = new KJUR.asn1.DERSequence({
            array: t
        });
        return this.hTLV = e.getEncodedHex(), this.hTLV;
    }, void 0 !== t) {
        var e = new KJUR.asn1.ocsp.CertID(t);
        this.dReqCert = e;
    }
}, YAHOO.lang.extend(KJUR.asn1.ocsp.Request, KJUR.asn1.ASN1Object), KJUR.asn1.ocsp.TBSRequest = function(t) {
    KJUR.asn1.ocsp.TBSRequest.superclass.constructor.call(this), this.version = 0, this.dRequestorName = null, 
    this.dRequestList = [], this.dRequestExt = null, this.setRequestListByParam = function(t) {
        for (var e = [], i = 0; i < t.length; i++) {
            var n = new KJUR.asn1.ocsp.Request(t[0]);
            e.push(n);
        }
        this.dRequestList = e;
    }, this.getEncodedHex = function() {
        var t = [];
        if (0 !== this.version) throw "not supported version: " + this.version;
        if (null !== this.dRequestorName) throw "requestorName not supported";
        var e = new KJUR.asn1.DERSequence({
            array: this.dRequestList
        });
        if (t.push(e), null !== this.dRequestExt) throw "requestExtensions not supported";
        var i = new KJUR.asn1.DERSequence({
            array: t
        });
        return this.hTLV = i.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.reqList && this.setRequestListByParam(t.reqList);
}, YAHOO.lang.extend(KJUR.asn1.ocsp.TBSRequest, KJUR.asn1.ASN1Object), KJUR.asn1.ocsp.OCSPRequest = function(t) {
    if (KJUR.asn1.ocsp.OCSPRequest.superclass.constructor.call(this), this.dTbsRequest = null, 
    this.dOptionalSignature = null, this.getEncodedHex = function() {
        var t = [];
        if (null === this.dTbsRequest) throw "tbsRequest not set";
        if (t.push(this.dTbsRequest), null !== this.dOptionalSignature) throw "optionalSignature not supported";
        var e = new KJUR.asn1.DERSequence({
            array: t
        });
        return this.hTLV = e.getEncodedHex(), this.hTLV;
    }, void 0 !== t && void 0 !== t.reqList) {
        var e = new KJUR.asn1.ocsp.TBSRequest(t);
        this.dTbsRequest = e;
    }
}, YAHOO.lang.extend(KJUR.asn1.ocsp.OCSPRequest, KJUR.asn1.ASN1Object), KJUR.asn1.ocsp.OCSPUtil = {}, 
KJUR.asn1.ocsp.OCSPUtil.getRequestHex = function(t, e, i) {
    void 0 === i && (i = KJUR.asn1.ocsp.DEFAULT_HASH);
    var n = {
        alg: i,
        issuerCert: t,
        subjectCert: e
    };
    return new KJUR.asn1.ocsp.OCSPRequest({
        reqList: [ n ]
    }).getEncodedHex();
}, KJUR.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(t) {
    var e = {};
    try {
        var i = ASN1HEX.getVbyList(t, 0, [ 0 ], "0a");
        e.responseStatus = parseInt(i, 16);
    } catch (t) {}
    if (0 !== e.responseStatus) return e;
    try {
        var n = ASN1HEX.getDecendantIndexByNthList(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 1 ]);
        "80" === t.substr(n, 2) ? e.certStatus = "good" : "a1" === t.substr(n, 2) ? (e.certStatus = "revoked", 
        e.revocationTime = hextoutf8(ASN1HEX.getDecendantHexVByNthList(t, n, [ 0 ]))) : "82" === t.substr(n, 2) && (e.certStatus = "unknown");
    } catch (t) {}
    try {
        var r = ASN1HEX.getDecendantIndexByNthList(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 2 ]);
        e.thisUpdate = hextoutf8(ASN1HEX.getHexOfV_AtObj(t, r));
    } catch (t) {}
    try {
        var s = ASN1HEX.getDecendantIndexByNthList(t, 0, [ 1, 0, 1, 0, 0, 2, 0, 3 ]);
        "a0" === t.substr(s, 2) && (e.nextUpdate = hextoutf8(ASN1HEX.getDecendantHexVByNthList(t, s, [ 0 ])));
    } catch (t) {}
    return e;
};

var KJUR;

void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.lang && KJUR.lang || (KJUR.lang = {}), 
KJUR.lang.String = function() {};

var utf8tob64u = void 0, b64utoutf8 = void 0;

"function" == typeof Buffer ? (utf8tob64u = function(t) {
    return b64tob64u(new Buffer(t, "utf8").toString("base64"));
}, b64utoutf8 = function(t) {
    return new Buffer(b64utob64(t), "base64").toString("utf8");
}) : (utf8tob64u = function(t) {
    return hextob64u(uricmptohex(encodeURIComponentAll(t)));
}, b64utoutf8 = function(t) {
    return decodeURIComponent(hextouricmp(b64utohex(t)));
}), KJUR.lang.String.isInteger = function(t) {
    return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
}, KJUR.lang.String.isHex = function(t) {
    return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/));
}, KJUR.lang.String.isBase64 = function(t) {
    return t = t.replace(/\s+/g, ""), !(!t.match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0);
}, KJUR.lang.String.isBase64URL = function(t) {
    return !t.match(/[+\/ = ] /) && (t = b64utob64(t), KJUR.lang.String.isBase64(t));
}, KJUR.lang.String.isIntegerArray = function(t) {
    return t = t.replace(/\s+/g, ""), !!t.match(/^\[[0-9,]+\]$/);
};

var strdiffidx = function(t, e) {
    var i = t.length;
    t.length > e.length && (i = e.length);
    for (var n = 0; n < i; n++) if (t.charCodeAt(n) != e.charCodeAt(n)) return n;
    return t.length != e.length ? i : -1;
};

void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 
KJUR.crypto.Util = new function() {
    this.DIGESTINFOHEAD = {
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        ripemd160: "3021300906052b2403020105000414"
    }, this.DEFAULTPROVIDER = {
        md5: "cryptojs",
        sha1: "cryptojs",
        sha224: "cryptojs",
        sha256: "cryptojs",
        sha384: "cryptojs",
        sha512: "cryptojs",
        ripemd160: "cryptojs",
        hmacmd5: "cryptojs",
        hmacsha1: "cryptojs",
        hmacsha224: "cryptojs",
        hmacsha256: "cryptojs",
        hmacsha384: "cryptojs",
        hmacsha512: "cryptojs",
        hmacripemd160: "cryptojs",
        MD5withRSA: "cryptojs/jsrsa",
        SHA1withRSA: "cryptojs/jsrsa",
        SHA224withRSA: "cryptojs/jsrsa",
        SHA256withRSA: "cryptojs/jsrsa",
        SHA384withRSA: "cryptojs/jsrsa",
        SHA512withRSA: "cryptojs/jsrsa",
        RIPEMD160withRSA: "cryptojs/jsrsa",
        MD5withECDSA: "cryptojs/jsrsa",
        SHA1withECDSA: "cryptojs/jsrsa",
        SHA224withECDSA: "cryptojs/jsrsa",
        SHA256withECDSA: "cryptojs/jsrsa",
        SHA384withECDSA: "cryptojs/jsrsa",
        SHA512withECDSA: "cryptojs/jsrsa",
        RIPEMD160withECDSA: "cryptojs/jsrsa",
        SHA1withDSA: "cryptojs/jsrsa",
        SHA224withDSA: "cryptojs/jsrsa",
        SHA256withDSA: "cryptojs/jsrsa",
        MD5withRSAandMGF1: "cryptojs/jsrsa",
        SHA1withRSAandMGF1: "cryptojs/jsrsa",
        SHA224withRSAandMGF1: "cryptojs/jsrsa",
        SHA256withRSAandMGF1: "cryptojs/jsrsa",
        SHA384withRSAandMGF1: "cryptojs/jsrsa",
        SHA512withRSAandMGF1: "cryptojs/jsrsa",
        RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
    }, this.CRYPTOJSMESSAGEDIGESTNAME = {
        md5: CryptoJS.algo.MD5,
        sha1: CryptoJS.algo.SHA1,
        sha224: CryptoJS.algo.SHA224,
        sha256: CryptoJS.algo.SHA256,
        sha384: CryptoJS.algo.SHA384,
        sha512: CryptoJS.algo.SHA512,
        ripemd160: CryptoJS.algo.RIPEMD160
    }, this.getDigestInfoHex = function(t, e) {
        if (void 0 === this.DIGESTINFOHEAD[e]) throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
        return this.DIGESTINFOHEAD[e] + t;
    }, this.getPaddedDigestInfoHex = function(t, e, i) {
        var n = this.getDigestInfoHex(t, e), r = i / 4;
        if (n.length + 22 > r) throw "key is too short for SigAlg: keylen=" + i + "," + e;
        for (var s = "0001", a = "00" + n, o = "", h = r - s.length - a.length, u = 0; u < h; u += 2) o += "ff";
        return s + o + a;
    }, this.hashString = function(t, e) {
        return new KJUR.crypto.MessageDigest({
            alg: e
        }).digestString(t);
    }, this.hashHex = function(t, e) {
        return new KJUR.crypto.MessageDigest({
            alg: e
        }).digestHex(t);
    }, this.sha1 = function(t) {
        return new KJUR.crypto.MessageDigest({
            alg: "sha1",
            prov: "cryptojs"
        }).digestString(t);
    }, this.sha256 = function(t) {
        return new KJUR.crypto.MessageDigest({
            alg: "sha256",
            prov: "cryptojs"
        }).digestString(t);
    }, this.sha256Hex = function(t) {
        return new KJUR.crypto.MessageDigest({
            alg: "sha256",
            prov: "cryptojs"
        }).digestHex(t);
    }, this.sha512 = function(t) {
        return new KJUR.crypto.MessageDigest({
            alg: "sha512",
            prov: "cryptojs"
        }).digestString(t);
    }, this.sha512Hex = function(t) {
        return new KJUR.crypto.MessageDigest({
            alg: "sha512",
            prov: "cryptojs"
        }).digestHex(t);
    };
}(), KJUR.crypto.Util.md5 = function(t) {
    return new KJUR.crypto.MessageDigest({
        alg: "md5",
        prov: "cryptojs"
    }).digestString(t);
}, KJUR.crypto.Util.ripemd160 = function(t) {
    return new KJUR.crypto.MessageDigest({
        alg: "ripemd160",
        prov: "cryptojs"
    }).digestString(t);
}, KJUR.crypto.Util.SECURERANDOMGEN = new SecureRandom(), KJUR.crypto.Util.getRandomHexOfNbytes = function(t) {
    var e = new Array(t);
    return KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(e), BAtohex(e);
}, KJUR.crypto.Util.getRandomBigIntegerOfNbytes = function(t) {
    return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbytes(t), 16);
}, KJUR.crypto.Util.getRandomHexOfNbits = function(t) {
    var e = t % 8, i = (t - e) / 8, n = new Array(i + 1);
    return KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(n), n[0] = (255 << e & 255 ^ 255) & n[0], 
    BAtohex(n);
}, KJUR.crypto.Util.getRandomBigIntegerOfNbits = function(t) {
    return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbits(t), 16);
}, KJUR.crypto.Util.getRandomBigIntegerZeroToMax = function(t) {
    for (var e = t.bitLength(); ;) {
        var i = KJUR.crypto.Util.getRandomBigIntegerOfNbits(e);
        if (-1 != t.compareTo(i)) return i;
    }
}, KJUR.crypto.Util.getRandomBigIntegerMinToMax = function(t, e) {
    var i = t.compareTo(e);
    if (1 == i) throw "biMin is greater than biMax";
    if (0 == i) return t;
    var n = e.subtract(t);
    return KJUR.crypto.Util.getRandomBigIntegerZeroToMax(n).add(t);
}, KJUR.crypto.MessageDigest = function(t) {
    this.setAlgAndProvider = function(t, e) {
        if (t = KJUR.crypto.MessageDigest.getCanonicalAlgName(t), null !== t && void 0 === e && (e = KJUR.crypto.Util.DEFAULTPROVIDER[t]), 
        -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) && "cryptojs" == e) {
            try {
                this.md = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
            } catch (e) {
                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
            }
            this.updateString = function(t) {
                this.md.update(t);
            }, this.updateHex = function(t) {
                var e = CryptoJS.enc.Hex.parse(t);
                this.md.update(e);
            }, this.digest = function() {
                return this.md.finalize().toString(CryptoJS.enc.Hex);
            }, this.digestString = function(t) {
                return this.updateString(t), this.digest();
            }, this.digestHex = function(t) {
                return this.updateHex(t), this.digest();
            };
        }
        if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
            try {
                this.md = new sjcl.hash.sha256();
            } catch (e) {
                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
            }
            this.updateString = function(t) {
                this.md.update(t);
            }, this.updateHex = function(t) {
                var e = sjcl.codec.hex.toBits(t);
                this.md.update(e);
            }, this.digest = function() {
                var t = this.md.finalize();
                return sjcl.codec.hex.fromBits(t);
            }, this.digestString = function(t) {
                return this.updateString(t), this.digest();
            }, this.digestHex = function(t) {
                return this.updateHex(t), this.digest();
            };
        }
    }, this.updateString = function(t) {
        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.updateHex = function(t) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.digest = function() {
        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.digestString = function(t) {
        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, this.digestHex = function(t) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    }, void 0 !== t && void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]), 
    this.setAlgAndProvider(this.algName, this.provName));
}, KJUR.crypto.MessageDigest.getCanonicalAlgName = function(t) {
    return "string" == typeof t && (t = t.toLowerCase(), t = t.replace(/-/, "")), t;
}, KJUR.crypto.MessageDigest.getHashLength = function(t) {
    var e = KJUR.crypto.MessageDigest, i = e.getCanonicalAlgName(t);
    if (void 0 === e.HASHLENGTH[i]) throw "not supported algorithm: " + t;
    return e.HASHLENGTH[i];
}, KJUR.crypto.MessageDigest.HASHLENGTH = {
    md5: 16,
    sha1: 20,
    sha224: 28,
    sha256: 32,
    sha384: 48,
    sha512: 64,
    ripemd160: 20
}, KJUR.crypto.Mac = function(t) {
    this.setAlgAndProvider = function(t, e) {
        if (t = t.toLowerCase(), null == t && (t = "hmacsha1"), t = t.toLowerCase(), "hmac" != t.substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + t;
        void 0 === e && (e = KJUR.crypto.Util.DEFAULTPROVIDER[t]), this.algProv = t + "/" + e;
        var i = t.substr(4);
        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(i) && "cryptojs" == e) {
            try {
                var n = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[i];
                this.mac = CryptoJS.algo.HMAC.create(n, this.pass);
            } catch (t) {
                throw "setAlgAndProvider hash alg set fail hashAlg=" + i + "/" + t;
            }
            this.updateString = function(t) {
                this.mac.update(t);
            }, this.updateHex = function(t) {
                var e = CryptoJS.enc.Hex.parse(t);
                this.mac.update(e);
            }, this.doFinal = function() {
                return this.mac.finalize().toString(CryptoJS.enc.Hex);
            }, this.doFinalString = function(t) {
                return this.updateString(t), this.doFinal();
            }, this.doFinalHex = function(t) {
                return this.updateHex(t), this.doFinal();
            };
        }
    }, this.updateString = function(t) {
        throw "updateString(str) not supported for this alg/prov: " + this.algProv;
    }, this.updateHex = function(t) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
    }, this.doFinal = function() {
        throw "digest() not supported for this alg/prov: " + this.algProv;
    }, this.doFinalString = function(t) {
        throw "digestString(str) not supported for this alg/prov: " + this.algProv;
    }, this.doFinalHex = function(t) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
    }, this.setPassword = function(t) {
        if ("string" == typeof t) {
            var e = t;
            return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (e = rstrtohex(t)), void (this.pass = CryptoJS.enc.Hex.parse(e));
        }
        if ("object" !== (void 0 === t ? "undefined" : _typeof(t))) throw "KJUR.crypto.Mac unsupported password type: " + t;
        var e = null;
        if (void 0 !== t.hex) {
            if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + t.hex;
            e = t.hex;
        }
        if (void 0 !== t.utf8 && (e = utf8tohex(t.utf8)), void 0 !== t.rstr && (e = rstrtohex(t.rstr)), 
        void 0 !== t.b64 && (e = b64tohex(t.b64)), void 0 !== t.b64u && (e = b64utohex(t.b64u)), 
        null == e) throw "KJUR.crypto.Mac unsupported password type: " + t;
        this.pass = CryptoJS.enc.Hex.parse(e);
    }, void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass), void 0 !== t.alg && (this.algName = t.alg, 
    void 0 === t.prov && (this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]), 
    this.setAlgAndProvider(this.algName, this.provName)));
}, KJUR.crypto.Signature = function(t) {
    var e = null;
    if (this._setAlgNames = function() {
        var t = this.algName.match(/^(.+)with(.+)$/);
        t && (this.mdAlgName = t[1].toLowerCase(), this.pubkeyAlgName = t[2].toLowerCase());
    }, this._zeroPaddingOfSignature = function(t, e) {
        for (var i = "", n = e / 4 - t.length, r = 0; r < n; r++) i += "0";
        return i + t;
    }, this.setAlgAndProvider = function(t, e) {
        if (this._setAlgNames(), "cryptojs/jsrsa" != e) throw "provider not supported: " + e;
        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
            try {
                this.md = new KJUR.crypto.MessageDigest({
                    alg: this.mdAlgName
                });
            } catch (t) {
                throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t;
            }
            this.init = function(t, e) {
                var i = null;
                try {
                    i = void 0 === e ? KEYUTIL.getKey(t) : KEYUTIL.getKey(t, e);
                } catch (t) {
                    throw "init failed:" + t;
                }
                if (!0 === i.isPrivate) this.prvKey = i, this.state = "SIGN"; else {
                    if (!0 !== i.isPublic) throw "init failed.:" + i;
                    this.pubKey = i, this.state = "VERIFY";
                }
            }, this.initSign = function(t) {
                "string" == typeof t.ecprvhex && "string" == typeof t.eccurvename ? (this.ecprvhex = t.ecprvhex, 
                this.eccurvename = t.eccurvename) : this.prvKey = t, this.state = "SIGN";
            }, this.initVerifyByPublicKey = function(t) {
                "string" == typeof t.ecpubhex && "string" == typeof t.eccurvename ? (this.ecpubhex = t.ecpubhex, 
                this.eccurvename = t.eccurvename) : t instanceof KJUR.crypto.ECDSA ? this.pubKey = t : t instanceof RSAKey && (this.pubKey = t), 
                this.state = "VERIFY";
            }, this.initVerifyByCertificatePEM = function(t) {
                var e = new X509();
                e.readCertPEM(t), this.pubKey = e.subjectPublicKeyRSA, this.state = "VERIFY";
            }, this.updateString = function(t) {
                this.md.updateString(t);
            }, this.updateHex = function(t) {
                this.md.updateHex(t);
            }, this.sign = function() {
                if (this.sHashHex = this.md.digest(), void 0 !== this.ecprvhex && void 0 !== this.eccurvename) {
                    var t = new KJUR.crypto.ECDSA({
                        curve: this.eccurvename
                    });
                    this.hSign = t.signHex(this.sHashHex, this.ecprvhex);
                } else if (this.prvKey instanceof RSAKey && "rsaandmgf1" == this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen); else if (this.prvKey instanceof RSAKey && "rsa" == this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName); else if (this.prvKey instanceof KJUR.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex); else {
                    if (!(this.prvKey instanceof KJUR.crypto.DSA)) throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                }
                return this.hSign;
            }, this.signString = function(t) {
                return this.updateString(t), this.sign();
            }, this.signHex = function(t) {
                return this.updateHex(t), this.sign();
            }, this.verify = function(t) {
                if (this.sHashHex = this.md.digest(), void 0 !== this.ecpubhex && void 0 !== this.eccurvename) {
                    return new KJUR.crypto.ECDSA({
                        curve: this.eccurvename
                    }).verifyHex(this.sHashHex, t, this.ecpubhex);
                }
                if (this.pubKey instanceof RSAKey && "rsaandmgf1" == this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
                if (this.pubKey instanceof RSAKey && "rsa" == this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                if (this.pubKey instanceof KJUR.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                if (this.pubKey instanceof KJUR.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
            };
        }
    }, this.init = function(t, e) {
        throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
    }, this.initVerifyByPublicKey = function(t) {
        throw "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" + this.algProvName;
    }, this.initVerifyByCertificatePEM = function(t) {
        throw "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" + this.algProvName;
    }, this.initSign = function(t) {
        throw "initSign(prvKey) not supported for this alg:prov=" + this.algProvName;
    }, this.updateString = function(t) {
        throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
    }, this.updateHex = function(t) {
        throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
    }, this.sign = function() {
        throw "sign() not supported for this alg:prov=" + this.algProvName;
    }, this.signString = function(t) {
        throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
    }, this.signHex = function(t) {
        throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
    }, this.verify = function(t) {
        throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
    }, this.initParams = t, void 0 !== t && (void 0 !== t.alg && (this.algName = t.alg, 
    void 0 === t.prov ? this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov, 
    this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), 
    this._setAlgNames()), void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen), 
    void 0 !== t.prvkeypem)) {
        if (void 0 !== t.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
        try {
            var e = new RSAKey();
            e.readPrivateKeyFromPEMString(t.prvkeypem), this.initSign(e);
        } catch (t) {
            throw "fatal error to load pem private key: " + t;
        }
    }
}, KJUR.crypto.Cipher = function(t) {}, KJUR.crypto.Cipher.encrypt = function(t, e, i) {
    if (e instanceof RSAKey && e.isPublic) {
        var n = KJUR.crypto.Cipher.getAlgByKeyAndName(e, i);
        if ("RSA" === n) return e.encrypt(t);
        if ("RSAOAEP" === n) return e.encryptOAEP(t, "sha1");
        var r = n.match(/^RSAOAEP(\d+)$/);
        if (null !== r) return e.encryptOAEP(t, "sha" + r[1]);
        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + i;
    }
    throw "Cipher.encrypt: unsupported key or algorithm";
}, KJUR.crypto.Cipher.decrypt = function(t, e, i) {
    if (e instanceof RSAKey && e.isPrivate) {
        var n = KJUR.crypto.Cipher.getAlgByKeyAndName(e, i);
        if ("RSA" === n) return e.decrypt(t);
        if ("RSAOAEP" === n) return e.decryptOAEP(t, "sha1");
        var r = n.match(/^RSAOAEP(\d+)$/);
        if (null !== r) return e.decryptOAEP(t, "sha" + r[1]);
        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + i;
    }
    throw "Cipher.decrypt: unsupported key or algorithm";
}, KJUR.crypto.Cipher.getAlgByKeyAndName = function(t, e) {
    if (t instanceof RSAKey) {
        if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e)) return e;
        if (null === e || void 0 === e) return "RSA";
        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e;
    }
    throw "getAlgByKeyAndName: not supported algorithm name: " + e;
}, KJUR.crypto.OID = new function() {
    this.oidhex2name = {
        "2a864886f70d010101": "rsaEncryption",
        "2a8648ce3d0201": "ecPublicKey",
        "2a8648ce380401": "dsa",
        "2a8648ce3d030107": "secp256r1",
        "2b8104001f": "secp192k1",
        "2b81040021": "secp224r1",
        "2b8104000a": "secp256k1",
        "2b81040023": "secp521r1",
        "2b81040022": "secp384r1",
        "2a8648ce380403": "SHA1withDSA",
        "608648016503040301": "SHA224withDSA",
        "608648016503040302": "SHA256withDSA"
    };
}(), void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 
KJUR.crypto.ECDSA = function(t) {
    var e = new SecureRandom();
    this.type = "EC", this.isPrivate = !1, this.isPublic = !1, this.getBigRandom = function(t) {
        return new BigInteger(t.bitLength(), e).mod(t.subtract(BigInteger.ONE)).add(BigInteger.ONE);
    }, this.setNamedCurve = function(t) {
        this.ecparams = KJUR.crypto.ECParameterDB.getByName(t), this.prvKeyHex = null, this.pubKeyHex = null, 
        this.curveName = t;
    }, this.setPrivateKeyHex = function(t) {
        this.isPrivate = !0, this.prvKeyHex = t;
    }, this.setPublicKeyHex = function(t) {
        this.isPublic = !0, this.pubKeyHex = t;
    }, this.getPublicKeyXYHex = function() {
        var t = this.pubKeyHex;
        if ("04" !== t.substr(0, 2)) throw "this method supports uncompressed format(04) only";
        var e = this.ecparams.keylen / 4;
        if (t.length !== 2 + 2 * e) throw "malformed public key hex length";
        var i = {};
        return i.x = t.substr(2, e), i.y = t.substr(2 + e), i;
    }, this.getShortNISTPCurveName = function() {
        var t = this.curveName;
        return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : null;
    }, this.generateKeyPairHex = function() {
        var t = this.ecparams.n, e = this.getBigRandom(t), i = this.ecparams.G.multiply(e), n = i.getX().toBigInteger(), r = i.getY().toBigInteger(), s = this.ecparams.keylen / 4, a = ("0000000000" + e.toString(16)).slice(-s), o = ("0000000000" + n.toString(16)).slice(-s), h = ("0000000000" + r.toString(16)).slice(-s), u = "04" + o + h;
        return this.setPrivateKeyHex(a), this.setPublicKeyHex(u), {
            ecprvhex: a,
            ecpubhex: u
        };
    }, this.signWithMessageHash = function(t) {
        return this.signHex(t, this.prvKeyHex);
    }, this.signHex = function(t, e) {
        var i = new BigInteger(e, 16), n = this.ecparams.n, r = new BigInteger(t, 16);
        do {
            var s = this.getBigRandom(n), a = this.ecparams.G, o = a.multiply(s), h = o.getX().toBigInteger().mod(n);
        } while (h.compareTo(BigInteger.ZERO) <= 0);
        var u = s.modInverse(n).multiply(r.add(i.multiply(h))).mod(n);
        return KJUR.crypto.ECDSA.biRSSigToASN1Sig(h, u);
    }, this.sign = function(t, e) {
        var i = e, n = this.ecparams.n, r = BigInteger.fromByteArrayUnsigned(t);
        do {
            var s = this.getBigRandom(n), a = this.ecparams.G, o = a.multiply(s), h = o.getX().toBigInteger().mod(n);
        } while (h.compareTo(BigInteger.ZERO) <= 0);
        var u = s.modInverse(n).multiply(r.add(i.multiply(h))).mod(n);
        return this.serializeSig(h, u);
    }, this.verifyWithMessageHash = function(t, e) {
        return this.verifyHex(t, e, this.pubKeyHex);
    }, this.verifyHex = function(t, e, i) {
        var n = void 0, r = void 0, s = KJUR.crypto.ECDSA.parseSigHex(e);
        n = s.r, r = s.s;
        var a = void 0;
        a = ECPointFp.decodeFromHex(this.ecparams.curve, i);
        var o = new BigInteger(t, 16);
        return this.verifyRaw(o, n, r, a);
    }, this.verify = function(t, e, i) {
        var n = void 0, r = void 0;
        if (Bitcoin.Util.isArray(e)) {
            var s = this.parseSig(e);
            n = s.r, r = s.s;
        } else {
            if ("object" !== (void 0 === e ? "undefined" : _typeof(e)) || !e.r || !e.s) throw "Invalid value for signature";
            n = e.r, r = e.s;
        }
        var a = void 0;
        if (i instanceof ECPointFp) a = i; else {
            if (!Bitcoin.Util.isArray(i)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
            a = ECPointFp.decodeFrom(this.ecparams.curve, i);
        }
        var o = BigInteger.fromByteArrayUnsigned(t);
        return this.verifyRaw(o, n, r, a);
    }, this.verifyRaw = function(t, e, i, n) {
        var r = this.ecparams.n, s = this.ecparams.G;
        if (e.compareTo(BigInteger.ONE) < 0 || e.compareTo(r) >= 0) return !1;
        if (i.compareTo(BigInteger.ONE) < 0 || i.compareTo(r) >= 0) return !1;
        var a = i.modInverse(r), o = t.multiply(a).mod(r), h = e.multiply(a).mod(r);
        return s.multiply(o).add(n.multiply(h)).getX().toBigInteger().mod(r).equals(e);
    }, this.serializeSig = function(t, e) {
        var i = t.toByteArraySigned(), n = e.toByteArraySigned(), r = [];
        return r.push(2), r.push(i.length), r = r.concat(i), r.push(2), r.push(n.length), 
        r = r.concat(n), r.unshift(r.length), r.unshift(48), r;
    }, this.parseSig = function(t) {
        var e = void 0;
        if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
        if (e = 2, 2 != t[e]) throw new Error("First element in signature must be a DERInteger");
        var i = t.slice(e + 2, e + 2 + t[e + 1]);
        if (e += 2 + t[e + 1], 2 != t[e]) throw new Error("Second element in signature must be a DERInteger");
        var n = t.slice(e + 2, e + 2 + t[e + 1]);
        return e += 2 + t[e + 1], {
            r: BigInteger.fromByteArrayUnsigned(i),
            s: BigInteger.fromByteArrayUnsigned(n)
        };
    }, this.parseSigCompact = function(t) {
        if (65 !== t.length) throw "Signature has the wrong length";
        var e = t[0] - 27;
        if (e < 0 || e > 7) throw "Invalid signature type";
        var i = this.ecparams.n;
        return {
            r: BigInteger.fromByteArrayUnsigned(t.slice(1, 33)).mod(i),
            s: BigInteger.fromByteArrayUnsigned(t.slice(33, 65)).mod(i),
            i: e
        };
    }, this.readPKCS5PrvKeyHex = function(t) {
        var e = ASN1HEX, i = KJUR.crypto.ECDSA.getName, n = e.getVbyList;
        if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
        var r = void 0, s = void 0, a = void 0;
        try {
            r = n(t, 0, [ 2, 0 ], "06"), s = n(t, 0, [ 1 ], "04");
            try {
                a = n(t, 0, [ 3, 0 ], "03").substr(2);
            } catch (t) {}
        } catch (t) {
            throw "malformed PKCS#1/5 plain ECC private key";
        }
        if (this.curveName = i(r), void 0 === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(a), this.setPrivateKeyHex(s), 
        this.isPublic = !1;
    }, this.readPKCS8PrvKeyHex = function(t) {
        var e = ASN1HEX, i = KJUR.crypto.ECDSA.getName, n = e.getVbyList;
        if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
        var r = void 0, s = void 0, a = void 0;
        try {
            n(t, 0, [ 1, 0 ], "06"), r = n(t, 0, [ 1, 1 ], "06"), s = n(t, 0, [ 2, 0, 1 ], "04");
            try {
                a = n(t, 0, [ 2, 0, 2, 0 ], "03").substr(2);
            } catch (t) {}
        } catch (t) {
            throw "malformed PKCS#8 plain ECC private key";
        }
        if (this.curveName = i(r), void 0 === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(a), this.setPrivateKeyHex(s), 
        this.isPublic = !1;
    }, this.readPKCS8PubKeyHex = function(t) {
        var e = ASN1HEX, i = KJUR.crypto.ECDSA.getName, n = e.getVbyList;
        if (!1 === e.isASN1HEX(t)) throw "not ASN.1 hex string";
        var r = void 0, s = void 0;
        try {
            n(t, 0, [ 0, 0 ], "06"), r = n(t, 0, [ 0, 1 ], "06"), s = n(t, 0, [ 1 ], "03").substr(2);
        } catch (t) {
            throw "malformed PKCS#8 ECC public key";
        }
        if (this.curveName = i(r), null === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(s);
    }, this.readCertPubKeyHex = function(t, e) {
        5 !== e && (e = 6);
        var i = ASN1HEX, n = KJUR.crypto.ECDSA.getName, r = i.getVbyList;
        if (!1 === i.isASN1HEX(t)) throw "not ASN.1 hex string";
        var s = void 0, a = void 0;
        try {
            s = r(t, 0, [ 0, e, 0, 1 ], "06"), a = r(t, 0, [ 0, e, 1 ], "03").substr(2);
        } catch (t) {
            throw "malformed X.509 certificate ECC public key";
        }
        if (this.curveName = n(s), null === this.curveName) throw "unsupported curve name";
        this.setNamedCurve(this.curveName), this.setPublicKeyHex(a);
    }, void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), 
    this.setNamedCurve(this.curveName), void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv), 
    void 0 !== t.pub && this.setPublicKeyHex(t.pub));
}, KJUR.crypto.ECDSA.parseSigHex = function(t) {
    var e = KJUR.crypto.ECDSA.parseSigHexInHexRS(t);
    return {
        r: new BigInteger(e.r, 16),
        s: new BigInteger(e.s, 16)
    };
}, KJUR.crypto.ECDSA.parseSigHexInHexRS = function(t) {
    if ("30" != t.substr(0, 2)) throw "signature is not a ASN.1 sequence";
    var e = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
    if (2 != e.length) throw "number of signature ASN.1 sequence elements seem wrong";
    var i = e[0], n = e[1];
    if ("02" != t.substr(i, 2)) throw "1st item of sequene of signature is not ASN.1 integer";
    if ("02" != t.substr(n, 2)) throw "2nd item of sequene of signature is not ASN.1 integer";
    return {
        r: ASN1HEX.getHexOfV_AtObj(t, i),
        s: ASN1HEX.getHexOfV_AtObj(t, n)
    };
}, KJUR.crypto.ECDSA.asn1SigToConcatSig = function(t) {
    var e = KJUR.crypto.ECDSA.parseSigHexInHexRS(t), i = e.r, n = e.s;
    if ("00" == i.substr(0, 2) && i.length / 2 * 8 % 128 == 8 && (i = i.substr(2)), 
    "00" == n.substr(0, 2) && n.length / 2 * 8 % 128 == 8 && (n = n.substr(2)), i.length / 2 * 8 % 128 != 0) throw "unknown ECDSA sig r length error";
    if (n.length / 2 * 8 % 128 != 0) throw "unknown ECDSA sig s length error";
    return i + n;
}, KJUR.crypto.ECDSA.concatSigToASN1Sig = function(t) {
    if (t.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
    var e = t.substr(0, t.length / 2), i = t.substr(t.length / 2);
    return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(e, i);
}, KJUR.crypto.ECDSA.hexRSSigToASN1Sig = function(t, e) {
    var i = new BigInteger(t, 16), n = new BigInteger(e, 16);
    return KJUR.crypto.ECDSA.biRSSigToASN1Sig(i, n);
}, KJUR.crypto.ECDSA.biRSSigToASN1Sig = function(t, e) {
    var i = new KJUR.asn1.DERInteger({
        bigint: t
    }), n = new KJUR.asn1.DERInteger({
        bigint: e
    });
    return new KJUR.asn1.DERSequence({
        array: [ i, n ]
    }).getEncodedHex();
}, KJUR.crypto.ECDSA.getName = function(t) {
    return "2a8648ce3d030107" === t ? "secp256r1" : "2b8104000a" === t ? "secp256k1" : "2b81040022" === t ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t) ? "secp256k1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t) ? "secp384r1" : null;
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 
KJUR.crypto.ECParameterDB = new function() {
    function t(t) {
        return new BigInteger(t, 16);
    }
    var e = {}, i = {};
    this.getByName = function(t) {
        var n = t;
        if (void 0 !== i[n] && (n = i[t]), void 0 !== e[n]) return e[n];
        throw "unregistered EC curve name: " + n;
    }, this.regist = function(n, r, s, a, o, h, u, c, l, g, d, f) {
        e[n] = {};
        var p = t(s), y = t(a), S = t(o), v = t(h), A = t(u), m = new ECCurveFp(p, y, S), E = m.decodePointHex("04" + c + l);
        e[n].name = n, e[n].keylen = r, e[n].curve = m, e[n].G = E, e[n].n = v, e[n].h = A, 
        e[n].oid = d, e[n].info = f;
        for (var b = 0; b < g.length; b++) i[g[b]] = n;
    };
}(), KJUR.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), 
KJUR.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), 
KJUR.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), 
KJUR.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), 
KJUR.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), 
KJUR.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), 
KJUR.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), 
KJUR.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", [ "NIST P-256", "P-256", "prime256v1" ]), 
KJUR.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", [ "NIST P-384", "P-384" ]), 
KJUR.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", [ "NIST P-521", "P-521" ]), 
void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 
KJUR.crypto.DSA = function() {
    this.p = null, this.q = null, this.g = null, this.y = null, this.x = null, this.type = "DSA", 
    this.isPrivate = !1, this.isPublic = !1, this.setPrivate = function(t, e, i, n, r) {
        this.isPrivate = !0, this.p = t, this.q = e, this.g = i, this.y = n, this.x = r;
    }, this.setPrivateHex = function(t, e, i, n, r) {
        var s = void 0, a = void 0, o = void 0, h = void 0, u = void 0;
        s = new BigInteger(t, 16), a = new BigInteger(e, 16), o = new BigInteger(i, 16), 
        h = "string" == typeof n && n.length > 1 ? new BigInteger(n, 16) : null, u = new BigInteger(r, 16), 
        this.setPrivate(s, a, o, h, u);
    }, this.setPublic = function(t, e, i, n) {
        this.isPublic = !0, this.p = t, this.q = e, this.g = i, this.y = n, this.x = null;
    }, this.setPublicHex = function(t, e, i, n) {
        var r = void 0, s = void 0, a = void 0, o = void 0;
        r = new BigInteger(t, 16), s = new BigInteger(e, 16), a = new BigInteger(i, 16), 
        o = new BigInteger(n, 16), this.setPublic(r, s, a, o);
    }, this.signWithMessageHash = function(t) {
        var e = this.p, i = this.q, n = this.g, r = (this.y, this.x), s = KJUR.crypto.Util.getRandomBigIntegerMinToMax(BigInteger.ONE.add(BigInteger.ONE), i.subtract(BigInteger.ONE)), a = t.substr(0, i.bitLength() / 4), o = new BigInteger(a, 16), h = n.modPow(s, e).mod(i), u = s.modInverse(i).multiply(o.add(r.multiply(h))).mod(i);
        return KJUR.asn1.ASN1Util.jsonToASN1HEX({
            seq: [ {
                int: {
                    bigint: h
                }
            }, {
                int: {
                    bigint: u
                }
            } ]
        });
    }, this.verifyWithMessageHash = function(t, e) {
        var i = this.p, n = this.q, r = this.g, s = this.y, a = this.parseASN1Signature(e), o = a[0], h = a[1], u = t.substr(0, n.bitLength() / 4), c = new BigInteger(u, 16);
        if (BigInteger.ZERO.compareTo(o) > 0 || o.compareTo(n) > 0) throw "invalid DSA signature";
        if (BigInteger.ZERO.compareTo(h) > 0 || h.compareTo(n) > 0) throw "invalid DSA signature";
        var l = h.modInverse(n), g = c.multiply(l).mod(n), d = o.multiply(l).mod(n);
        return 0 == r.modPow(g, i).multiply(s.modPow(d, i)).mod(i).mod(n).compareTo(o);
    }, this.parseASN1Signature = function(t) {
        try {
            return [ new BigInteger(ASN1HEX.getVbyList(t, 0, [ 0 ], "02"), 16), new BigInteger(ASN1HEX.getVbyList(t, 0, [ 1 ], "02"), 16) ];
        } catch (t) {
            throw "malformed ASN.1 DSA signature";
        }
    }, this.readPKCS5PrvKeyHex = function(t) {
        var e = void 0, i = void 0, n = void 0, r = void 0, s = void 0, a = ASN1HEX, o = a.getVbyList;
        if (!1 === a.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            e = o(t, 0, [ 1 ], "02"), i = o(t, 0, [ 2 ], "02"), n = o(t, 0, [ 3 ], "02"), r = o(t, 0, [ 4 ], "02"), 
            s = o(t, 0, [ 5 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed PKCS#1/5 plain DSA private key";
        }
        this.setPrivateHex(e, i, n, r, s);
    }, this.readPKCS8PrvKeyHex = function(t) {
        var e = void 0, i = void 0, n = void 0, r = void 0, s = ASN1HEX, a = s.getVbyList;
        if (!1 === s.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            e = a(t, 0, [ 1, 1, 0 ], "02"), i = a(t, 0, [ 1, 1, 1 ], "02"), n = a(t, 0, [ 1, 1, 2 ], "02"), 
            r = a(t, 0, [ 2, 0 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed PKCS#8 plain DSA private key";
        }
        this.setPrivateHex(e, i, n, null, r);
    }, this.readPKCS8PubKeyHex = function(t) {
        var e = void 0, i = void 0, n = void 0, r = void 0, s = ASN1HEX, a = s.getVbyList;
        if (!1 === s.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            e = a(t, 0, [ 0, 1, 0 ], "02"), i = a(t, 0, [ 0, 1, 1 ], "02"), n = a(t, 0, [ 0, 1, 2 ], "02"), 
            r = a(t, 0, [ 1, 0 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed PKCS#8 DSA public key";
        }
        this.setPublicHex(e, i, n, r);
    }, this.readCertPubKeyHex = function(t, e) {
        5 !== e && (e = 6);
        var i = void 0, n = void 0, r = void 0, s = void 0, a = ASN1HEX, o = a.getVbyList;
        if (!1 === a.isASN1HEX(t)) throw "not ASN.1 hex string";
        try {
            i = o(t, 0, [ 0, e, 0, 1, 0 ], "02"), n = o(t, 0, [ 0, e, 0, 1, 1 ], "02"), r = o(t, 0, [ 0, e, 0, 1, 2 ], "02"), 
            s = o(t, 0, [ 0, e, 1, 0 ], "02");
        } catch (t) {
            throw console.log("EXCEPTION:" + t), "malformed X.509 certificate DSA public key";
        }
        this.setPublicHex(i, n, r, s);
    };
};

var PKCS5PKEY = function() {
    var t = function(t, e, n) {
        return i(CryptoJS.AES, t, e, n);
    }, e = function(t, e, n) {
        return i(CryptoJS.TripleDES, t, e, n);
    }, i = function(t, e, i, n) {
        var r = CryptoJS.enc.Hex.parse(e), s = CryptoJS.enc.Hex.parse(i), a = CryptoJS.enc.Hex.parse(n), o = {};
        o.key = s, o.iv = a, o.ciphertext = r;
        var h = t.decrypt(o, s, {
            iv: a
        });
        return CryptoJS.enc.Hex.stringify(h);
    }, n = function(t, e, i) {
        return s(CryptoJS.AES, t, e, i);
    }, r = function(t, e, i) {
        return s(CryptoJS.TripleDES, t, e, i);
    }, s = function(t, e, i, n) {
        var r = CryptoJS.enc.Hex.parse(e), s = CryptoJS.enc.Hex.parse(i), a = CryptoJS.enc.Hex.parse(n), o = t.encrypt(r, s, {
            iv: a
        }), h = CryptoJS.enc.Hex.parse(o.toString());
        return CryptoJS.enc.Base64.stringify(h);
    }, a = {
        "AES-256-CBC": {
            proc: t,
            eproc: n,
            keylen: 32,
            ivlen: 16
        },
        "AES-192-CBC": {
            proc: t,
            eproc: n,
            keylen: 24,
            ivlen: 16
        },
        "AES-128-CBC": {
            proc: t,
            eproc: n,
            keylen: 16,
            ivlen: 16
        },
        "DES-EDE3-CBC": {
            proc: e,
            eproc: r,
            keylen: 24,
            ivlen: 8
        }
    }, o = function(t) {
        return a[t].proc;
    }, u = function(t) {
        var e = CryptoJS.lib.WordArray.random(t);
        return CryptoJS.enc.Hex.stringify(e);
    }, c = function(t) {
        var e = {}, i = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
        i && (e.cipher = i[1], e.ivsalt = i[2]);
        var n = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
        n && (e.type = n[1]);
        var r = -1, s = 0;
        -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"), s = 2), -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"), 
        s = 1);
        var a = t.indexOf("-----END");
        if (-1 != r && -1 != a) {
            var o = t.substring(r + 2 * s, a - s);
            o = o.replace(/\s+/g, ""), e.data = o;
        }
        return e;
    }, l = function(t, e, i) {
        for (var n = i.substring(0, 16), r = CryptoJS.enc.Hex.parse(n), s = CryptoJS.enc.Utf8.parse(e), o = a[t].keylen + a[t].ivlen, h = "", u = null; ;) {
            var c = CryptoJS.algo.MD5.create();
            if (null != u && c.update(u), c.update(s), c.update(r), u = c.finalize(), h += CryptoJS.enc.Hex.stringify(u), 
            h.length >= 2 * o) break;
        }
        var l = {};
        return l.keyhex = h.substr(0, 2 * a[t].keylen), l.ivhex = h.substr(2 * a[t].keylen, 2 * a[t].ivlen), 
        l;
    }, g = function(t, e, i, n) {
        var r = CryptoJS.enc.Base64.parse(t), s = CryptoJS.enc.Hex.stringify(r);
        return (0, a[e].proc)(s, i, n);
    }, d = function(t, e, i, n) {
        return (0, a[e].eproc)(t, i, n);
    };
    return {
        version: "1.0.5",
        getHexFromPEM: function(t, e) {
            return ASN1HEX.pemToHex(t, e);
        },
        getDecryptedKeyHexByKeyIV: function(t, e, i, n) {
            return o(e)(t, i, n);
        },
        parsePKCS5PEM: function(t) {
            return c(t);
        },
        getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, i) {
            return l(t, e, i);
        },
        decryptKeyB64: function(t, e, i, n) {
            return g(t, e, i, n);
        },
        getDecryptedKeyHex: function(t, e) {
            var i = c(t), n = (i.type, i.cipher), r = i.ivsalt, s = i.data, a = l(n, e, r), o = a.keyhex;
            return g(s, n, o, r);
        },
        getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
            var i = this.getDecryptedKeyHex(t, e), n = new RSAKey();
            return n.readPrivateKeyFromASN1HexString(i), n;
        },
        getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, i, n) {
            if (void 0 !== i && null != i || (i = "AES-256-CBC"), void 0 === a[i]) throw "PKCS5PKEY unsupported algorithm: " + i;
            if (void 0 === n || null == n) {
                var r = a[i].ivlen;
                n = u(r).toUpperCase();
            }
            var s = l(i, e, n), o = s.keyhex, h = d(t, i, o, n), c = h.replace(/(.{64})/g, "$1\r\n"), g = "-----BEGIN RSA PRIVATE KEY-----\r\n";
            return g += "Proc-Type: 4,ENCRYPTED\r\n", g += "DEK-Info: " + i + "," + n + "\r\n", 
            g += "\r\n", g += c, g += "\r\n-----END RSA PRIVATE KEY-----\r\n";
        },
        getEncryptedPKCS5PEMFromRSAKey: function(t, e, i, n) {
            var r = new KJUR.asn1.DERInteger({
                int: 0
            }), s = new KJUR.asn1.DERInteger({
                bigint: t.n
            }), a = new KJUR.asn1.DERInteger({
                int: t.e
            }), o = new KJUR.asn1.DERInteger({
                bigint: t.d
            }), h = new KJUR.asn1.DERInteger({
                bigint: t.p
            }), u = new KJUR.asn1.DERInteger({
                bigint: t.q
            }), c = new KJUR.asn1.DERInteger({
                bigint: t.dmp1
            }), l = new KJUR.asn1.DERInteger({
                bigint: t.dmq1
            }), g = new KJUR.asn1.DERInteger({
                bigint: t.coeff
            }), d = new KJUR.asn1.DERSequence({
                array: [ r, s, a, o, h, u, c, l, g ]
            }), f = d.getEncodedHex();
            return this.getEncryptedPKCS5PEMFromPrvKeyHex(f, e, i, n);
        },
        newEncryptedPKCS5PEM: function(t, e, i, n) {
            void 0 !== e && null != e || (e = 1024), void 0 !== i && null != i || (i = "10001"), 
            new RSAKey().generate(e, i);
            return void 0 === n || null == n ? this.getEncryptedPKCS5PEMFromRSAKey(pkey, t) : this.getEncryptedPKCS5PEMFromRSAKey(pkey, t, n);
        },
        getRSAKeyFromPlainPKCS8PEM: function(t) {
            if (t.match(/ENCRYPTED/)) throw "pem shall be not ENCRYPTED";
            var e = ASN1HEX.pemToHex(t, "PRIVATE KEY");
            return this.getRSAKeyFromPlainPKCS8Hex(e);
        },
        getRSAKeyFromPlainPKCS8Hex: function(t) {
            var e = new RSAKey();
            return e.readPKCS8PrvKeyHex(t), e;
        },
        parseHexOfEncryptedPKCS8: function(t) {
            var e = {}, i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed format: SEQUENCE(0).items != 2: " + i.length;
            e.ciphertext = ASN1HEX.getHexOfV_AtObj(t, i[1]);
            var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i[0]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + n.length;
            if ("2a864886f70d01050d" != ASN1HEX.getHexOfV_AtObj(t, n[0])) throw "this only supports pkcs5PBES2";
            var r = ASN1HEX.getPosArrayOfChildren_AtObj(t, n[1]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + r.length;
            var s = ASN1HEX.getPosArrayOfChildren_AtObj(t, r[1]);
            if (2 != s.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
            if ("2a864886f70d0307" != ASN1HEX.getHexOfV_AtObj(t, s[0])) throw "this only supports TripleDES";
            e.encryptionSchemeAlg = "TripleDES", e.encryptionSchemeIV = ASN1HEX.getHexOfV_AtObj(t, s[1]);
            var a = ASN1HEX.getPosArrayOfChildren_AtObj(t, r[0]);
            if (2 != a.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + a.length;
            if ("2a864886f70d01050c" != ASN1HEX.getHexOfV_AtObj(t, a[0])) throw "this only supports pkcs5PBKDF2";
            var o = ASN1HEX.getPosArrayOfChildren_AtObj(t, a[1]);
            if (o.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + o.length;
            e.pbkdf2Salt = ASN1HEX.getHexOfV_AtObj(t, o[0]);
            var h = ASN1HEX.getHexOfV_AtObj(t, o[1]);
            try {
                e.pbkdf2Iter = parseInt(h, 16);
            } catch (t) {
                throw "malformed format pbkdf2Iter: " + h;
            }
            return e;
        },
        getPBKDF2KeyHexFromParam: function(t, e) {
            var i = CryptoJS.enc.Hex.parse(t.pbkdf2Salt), n = t.pbkdf2Iter, r = CryptoJS.PBKDF2(e, i, {
                keySize: 6,
                iterations: n
            });
            return CryptoJS.enc.Hex.stringify(r);
        },
        getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
            var i = ASN1HEX.pemToHex(t, "ENCRYPTED PRIVATE KEY"), n = this.parseHexOfEncryptedPKCS8(i), r = PKCS5PKEY.getPBKDF2KeyHexFromParam(n, e), s = {};
            s.ciphertext = CryptoJS.enc.Hex.parse(n.ciphertext);
            var a = CryptoJS.enc.Hex.parse(r), o = CryptoJS.enc.Hex.parse(n.encryptionSchemeIV), h = CryptoJS.TripleDES.decrypt(s, a, {
                iv: o
            });
            return CryptoJS.enc.Hex.stringify(h);
        },
        getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getRSAKeyFromPlainPKCS8Hex(i);
        },
        getKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getKeyFromPlainPrivatePKCS8Hex(i);
        },
        parsePlainPrivatePKCS8Hex: function(t) {
            var e = {};
            if (e.algparam = null, "30" != t.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
            var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (3 != i.length) throw "malformed plain PKCS8 private key(code:002)";
            if ("30" != t.substr(i[1], 2)) throw "malformed PKCS8 private key(code:003)";
            var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i[1]);
            if (2 != n.length) throw "malformed PKCS8 private key(code:004)";
            if ("06" != t.substr(n[0], 2)) throw "malformed PKCS8 private key(code:005)";
            if (e.algoid = ASN1HEX.getHexOfV_AtObj(t, n[0]), "06" == t.substr(n[1], 2) && (e.algparam = ASN1HEX.getHexOfV_AtObj(t, n[1])), 
            "04" != t.substr(i[2], 2)) throw "malformed PKCS8 private key(code:006)";
            return e.keyidx = ASN1HEX.getStartPosOfV_AtObj(t, i[2]), e;
        },
        getKeyFromPlainPrivatePKCS8PEM: function(t) {
            var e = ASN1HEX.pemToHex(t, "PRIVATE KEY");
            return this.getKeyFromPlainPrivatePKCS8Hex(e);
        },
        getKeyFromPlainPrivatePKCS8Hex: function(t) {
            var e = this.parsePlainPrivatePKCS8Hex(t), i = void 0;
            if ("2a864886f70d010101" == e.algoid) i = new RSAKey(); else if ("2a8648ce380401" == e.algoid) i = new KJUR.crypto.DSA(); else {
                if ("2a8648ce3d0201" != e.algoid) throw "unsupported private key algorithm";
                i = new KJUR.crypto.ECDSA();
            }
            return i.readPKCS8PrvKeyHex(t), i;
        },
        getRSAKeyFromPublicPKCS8PEM: function(t) {
            var e = ASN1HEX.pemToHex(t, "PUBLIC KEY");
            return this.getRSAKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8PEM: function(t) {
            var e = ASN1HEX.pemToHex(t, "PUBLIC KEY");
            return this.getKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8Hex: function(t) {
            var e = void 0, i = ASN1HEX.getVbyList(h, 0, [ 0, 0 ], "06");
            if ("2a864886f70d010101" === i) e = new RSAKey(); else if ("2a8648ce380401" === i) e = new KJUR.crypto.DSA(); else {
                if ("2a8648ce3d0201" !== i) throw "unsupported PKCS#8 public key hex";
                e = new KJUR.crypto.ECDSA();
            }
            return e.readPKCS8PubKeyHex(h), e;
        },
        parsePublicRawRSAKeyHex: function(t) {
            var e = {};
            if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
            var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed RSA key(code:002)";
            if ("02" != t.substr(i[0], 2)) throw "malformed RSA key(code:003)";
            if (e.n = ASN1HEX.getHexOfV_AtObj(t, i[0]), "02" != t.substr(i[1], 2)) throw "malformed RSA key(code:004)";
            return e.e = ASN1HEX.getHexOfV_AtObj(t, i[1]), e;
        },
        parsePrivateRawRSAKeyHexAtObj: function(t, e) {
            var i = e.keyidx;
            if ("30" != t.substr(i, 2)) throw "malformed RSA private key(code:001)";
            var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i);
            if (9 != n.length) throw "malformed RSA private key(code:002)";
            e.key = {}, e.key.n = ASN1HEX.getHexOfV_AtObj(t, n[1]), e.key.e = ASN1HEX.getHexOfV_AtObj(t, n[2]), 
            e.key.d = ASN1HEX.getHexOfV_AtObj(t, n[3]), e.key.p = ASN1HEX.getHexOfV_AtObj(t, n[4]), 
            e.key.q = ASN1HEX.getHexOfV_AtObj(t, n[5]), e.key.dp = ASN1HEX.getHexOfV_AtObj(t, n[6]), 
            e.key.dq = ASN1HEX.getHexOfV_AtObj(t, n[7]), e.key.co = ASN1HEX.getHexOfV_AtObj(t, n[8]);
        },
        parsePrivateRawECKeyHexAtObj: function(t, e) {
            var i = e.keyidx;
            if ("30" != t.substr(i, 2)) throw "malformed ECC private key(code:001)";
            var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i);
            if (3 != n.length) throw "malformed ECC private key(code:002)";
            if ("04" != t.substr(n[1], 2)) throw "malformed ECC private key(code:003)";
            e.key = ASN1HEX.getHexOfV_AtObj(t, n[1]);
        },
        parsePublicPKCS8Hex: function(t) {
            var e = {};
            e.algparam = null;
            var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "outer DERSequence shall have 2 elements: " + i.length;
            var n = i[0];
            if ("30" != t.substr(n, 2)) throw "malformed PKCS8 public key(code:001)";
            var r = ASN1HEX.getPosArrayOfChildren_AtObj(t, n);
            if (2 != r.length) throw "malformed PKCS8 public key(code:002)";
            if ("06" != t.substr(r[0], 2)) throw "malformed PKCS8 public key(code:003)";
            if (e.algoid = ASN1HEX.getHexOfV_AtObj(t, r[0]), "06" == t.substr(r[1], 2) && (e.algparam = ASN1HEX.getHexOfV_AtObj(t, r[1])), 
            "03" != t.substr(i[1], 2)) throw "malformed PKCS8 public key(code:004)";
            return e.key = ASN1HEX.getHexOfV_AtObj(t, i[1]).substr(2), e;
        },
        getRSAKeyFromPublicPKCS8Hex: function(t) {
            var e = new RSAKey();
            return e.readPKCS8PubKeyHex(t), e;
        }
    };
}(), KEYUTIL = function() {
    var t = function(t, e, i) {
        return n(CryptoJS.AES, t, e, i);
    }, e = function(t, e, i) {
        return n(CryptoJS.TripleDES, t, e, i);
    }, i = function(t, e, i) {
        return n(CryptoJS.DES, t, e, i);
    }, n = function(t, e, i, n) {
        var r = CryptoJS.enc.Hex.parse(e), s = CryptoJS.enc.Hex.parse(i), a = CryptoJS.enc.Hex.parse(n), o = {};
        o.key = s, o.iv = a, o.ciphertext = r;
        var h = t.decrypt(o, s, {
            iv: a
        });
        return CryptoJS.enc.Hex.stringify(h);
    }, r = function(t, e, i) {
        return o(CryptoJS.AES, t, e, i);
    }, s = function(t, e, i) {
        return o(CryptoJS.TripleDES, t, e, i);
    }, a = function(t, e, i) {
        return o(CryptoJS.DES, t, e, i);
    }, o = function(t, e, i, n) {
        var r = CryptoJS.enc.Hex.parse(e), s = CryptoJS.enc.Hex.parse(i), a = CryptoJS.enc.Hex.parse(n), o = t.encrypt(r, s, {
            iv: a
        }), h = CryptoJS.enc.Hex.parse(o.toString());
        return CryptoJS.enc.Base64.stringify(h);
    }, h = {
        "AES-256-CBC": {
            proc: t,
            eproc: r,
            keylen: 32,
            ivlen: 16
        },
        "AES-192-CBC": {
            proc: t,
            eproc: r,
            keylen: 24,
            ivlen: 16
        },
        "AES-128-CBC": {
            proc: t,
            eproc: r,
            keylen: 16,
            ivlen: 16
        },
        "DES-EDE3-CBC": {
            proc: e,
            eproc: s,
            keylen: 24,
            ivlen: 8
        },
        "DES-CBC": {
            proc: i,
            eproc: a,
            keylen: 8,
            ivlen: 8
        }
    }, u = function(t) {
        return h[t].proc;
    }, c = function(t) {
        var e = CryptoJS.lib.WordArray.random(t);
        return CryptoJS.enc.Hex.stringify(e);
    }, l = function(t) {
        var e = {}, i = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
        i && (e.cipher = i[1], e.ivsalt = i[2]);
        var n = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
        n && (e.type = n[1]);
        var r = -1, s = 0;
        -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"), s = 2), -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"), 
        s = 1);
        var a = t.indexOf("-----END");
        if (-1 != r && -1 != a) {
            var o = t.substring(r + 2 * s, a - s);
            o = o.replace(/\s+/g, ""), e.data = o;
        }
        return e;
    }, g = function(t, e, i) {
        for (var n = i.substring(0, 16), r = CryptoJS.enc.Hex.parse(n), s = CryptoJS.enc.Utf8.parse(e), a = h[t].keylen + h[t].ivlen, o = "", u = null; ;) {
            var c = CryptoJS.algo.MD5.create();
            if (null != u && c.update(u), c.update(s), c.update(r), u = c.finalize(), o += CryptoJS.enc.Hex.stringify(u), 
            o.length >= 2 * a) break;
        }
        var l = {};
        return l.keyhex = o.substr(0, 2 * h[t].keylen), l.ivhex = o.substr(2 * h[t].keylen, 2 * h[t].ivlen), 
        l;
    }, d = function(t, e, i, n) {
        var r = CryptoJS.enc.Base64.parse(t), s = CryptoJS.enc.Hex.stringify(r);
        return (0, h[e].proc)(s, i, n);
    }, f = function(t, e, i, n) {
        return (0, h[e].eproc)(t, i, n);
    };
    return {
        version: "1.0.0",
        getHexFromPEM: function(t, e) {
            return ASN1HEX.pemToHex(t, e);
        },
        getDecryptedKeyHexByKeyIV: function(t, e, i, n) {
            return u(e)(t, i, n);
        },
        parsePKCS5PEM: function(t) {
            return l(t);
        },
        getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, i) {
            return g(t, e, i);
        },
        decryptKeyB64: function(t, e, i, n) {
            return d(t, e, i, n);
        },
        getDecryptedKeyHex: function(t, e) {
            var i = l(t), n = (i.type, i.cipher), r = i.ivsalt, s = i.data, a = g(n, e, r), o = a.keyhex;
            return d(s, n, o, r);
        },
        getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
            var i = this.getDecryptedKeyHex(t, e), n = new RSAKey();
            return n.readPrivateKeyFromASN1HexString(i), n;
        },
        getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, i, n, r) {
            var s = "";
            if (void 0 !== n && null != n || (n = "AES-256-CBC"), void 0 === h[n]) throw "KEYUTIL unsupported algorithm: " + n;
            if (void 0 === r || null == r) {
                var a = h[n].ivlen;
                r = c(a).toUpperCase();
            }
            var o = g(n, i, r), u = o.keyhex, l = f(e, n, u, r), d = l.replace(/(.{64})/g, "$1\r\n"), s = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
            return s += "Proc-Type: 4,ENCRYPTED\r\n", s += "DEK-Info: " + n + "," + r + "\r\n", 
            s += "\r\n", s += d, s += "\r\n-----END " + t + " PRIVATE KEY-----\r\n";
        },
        getEncryptedPKCS5PEMFromRSAKey: function(t, e, i, n) {
            var r = new KJUR.asn1.DERInteger({
                int: 0
            }), s = new KJUR.asn1.DERInteger({
                bigint: t.n
            }), a = new KJUR.asn1.DERInteger({
                int: t.e
            }), o = new KJUR.asn1.DERInteger({
                bigint: t.d
            }), h = new KJUR.asn1.DERInteger({
                bigint: t.p
            }), u = new KJUR.asn1.DERInteger({
                bigint: t.q
            }), c = new KJUR.asn1.DERInteger({
                bigint: t.dmp1
            }), l = new KJUR.asn1.DERInteger({
                bigint: t.dmq1
            }), g = new KJUR.asn1.DERInteger({
                bigint: t.coeff
            }), d = new KJUR.asn1.DERSequence({
                array: [ r, s, a, o, h, u, c, l, g ]
            }), f = d.getEncodedHex();
            return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", f, e, i, n);
        },
        newEncryptedPKCS5PEM: function(t, e, i, n) {
            void 0 !== e && null != e || (e = 1024), void 0 !== i && null != i || (i = "10001");
            var r = new RSAKey();
            r.generate(e, i);
            return void 0 === n || null == n ? this.getEncryptedPKCS5PEMFromRSAKey(r, t) : this.getEncryptedPKCS5PEMFromRSAKey(r, t, n);
        },
        getRSAKeyFromPlainPKCS8PEM: function(t) {
            if (t.match(/ENCRYPTED/)) throw "pem shall be not ENCRYPTED";
            var e = ASN1HEX.pemToHex(t, "PRIVATE KEY");
            return this.getRSAKeyFromPlainPKCS8Hex(e);
        },
        getRSAKeyFromPlainPKCS8Hex: function(t) {
            var e = new RSAKey();
            return e.readPKCS8PrvKeyHex(t), e;
        },
        parseHexOfEncryptedPKCS8: function(t) {
            var e = {}, i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed format: SEQUENCE(0).items != 2: " + i.length;
            e.ciphertext = ASN1HEX.getHexOfV_AtObj(t, i[1]);
            var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i[0]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + n.length;
            if ("2a864886f70d01050d" != ASN1HEX.getHexOfV_AtObj(t, n[0])) throw "this only supports pkcs5PBES2";
            var r = ASN1HEX.getPosArrayOfChildren_AtObj(t, n[1]);
            if (2 != n.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + r.length;
            var s = ASN1HEX.getPosArrayOfChildren_AtObj(t, r[1]);
            if (2 != s.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
            if ("2a864886f70d0307" != ASN1HEX.getHexOfV_AtObj(t, s[0])) throw "this only supports TripleDES";
            e.encryptionSchemeAlg = "TripleDES", e.encryptionSchemeIV = ASN1HEX.getHexOfV_AtObj(t, s[1]);
            var a = ASN1HEX.getPosArrayOfChildren_AtObj(t, r[0]);
            if (2 != a.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + a.length;
            if ("2a864886f70d01050c" != ASN1HEX.getHexOfV_AtObj(t, a[0])) throw "this only supports pkcs5PBKDF2";
            var o = ASN1HEX.getPosArrayOfChildren_AtObj(t, a[1]);
            if (o.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + o.length;
            e.pbkdf2Salt = ASN1HEX.getHexOfV_AtObj(t, o[0]);
            var h = ASN1HEX.getHexOfV_AtObj(t, o[1]);
            try {
                e.pbkdf2Iter = parseInt(h, 16);
            } catch (t) {
                throw "malformed format pbkdf2Iter: " + h;
            }
            return e;
        },
        getPBKDF2KeyHexFromParam: function(t, e) {
            var i = CryptoJS.enc.Hex.parse(t.pbkdf2Salt), n = t.pbkdf2Iter, r = CryptoJS.PBKDF2(e, i, {
                keySize: 6,
                iterations: n
            });
            return CryptoJS.enc.Hex.stringify(r);
        },
        getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
            var i = ASN1HEX.pemToHex(t, "ENCRYPTED PRIVATE KEY"), n = this.parseHexOfEncryptedPKCS8(i), r = KEYUTIL.getPBKDF2KeyHexFromParam(n, e), s = {};
            s.ciphertext = CryptoJS.enc.Hex.parse(n.ciphertext);
            var a = CryptoJS.enc.Hex.parse(r), o = CryptoJS.enc.Hex.parse(n.encryptionSchemeIV), h = CryptoJS.TripleDES.decrypt(s, a, {
                iv: o
            });
            return CryptoJS.enc.Hex.stringify(h);
        },
        getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getRSAKeyFromPlainPKCS8Hex(i);
        },
        getKeyFromEncryptedPKCS8PEM: function(t, e) {
            var i = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getKeyFromPlainPrivatePKCS8Hex(i);
        },
        parsePlainPrivatePKCS8Hex: function(t) {
            var e = {};
            if (e.algparam = null, "30" != t.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
            var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (3 != i.length) throw "malformed plain PKCS8 private key(code:002)";
            if ("30" != t.substr(i[1], 2)) throw "malformed PKCS8 private key(code:003)";
            var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i[1]);
            if (2 != n.length) throw "malformed PKCS8 private key(code:004)";
            if ("06" != t.substr(n[0], 2)) throw "malformed PKCS8 private key(code:005)";
            if (e.algoid = ASN1HEX.getHexOfV_AtObj(t, n[0]), "06" == t.substr(n[1], 2) && (e.algparam = ASN1HEX.getHexOfV_AtObj(t, n[1])), 
            "04" != t.substr(i[2], 2)) throw "malformed PKCS8 private key(code:006)";
            return e.keyidx = ASN1HEX.getStartPosOfV_AtObj(t, i[2]), e;
        },
        getKeyFromPlainPrivatePKCS8PEM: function(t) {
            var e = ASN1HEX.pemToHex(t, "PRIVATE KEY");
            return this.getKeyFromPlainPrivatePKCS8Hex(e);
        },
        getKeyFromPlainPrivatePKCS8Hex: function(t) {
            var e = this.parsePlainPrivatePKCS8Hex(t), i = void 0;
            if ("2a864886f70d010101" == e.algoid) i = new RSAKey(); else if ("2a8648ce380401" == e.algoid) i = new KJUR.crypto.DSA(); else {
                if ("2a8648ce3d0201" != e.algoid) throw "unsupported private key algorithm";
                i = new KJUR.crypto.ECDSA();
            }
            return i.readPKCS8PrvKeyHex(t), i;
        },
        getRSAKeyFromPublicPKCS8PEM: function(t) {
            var e = ASN1HEX.pemToHex(t, "PUBLIC KEY");
            return this.getRSAKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8PEM: function(t) {
            var e = ASN1HEX.pemToHex(t, "PUBLIC KEY");
            return this.getKeyFromPublicPKCS8Hex(e);
        },
        getKeyFromPublicPKCS8Hex: function(t) {
            var e = void 0, i = ASN1HEX.getVbyList(t, 0, [ 0, 0 ], "06");
            if ("2a864886f70d010101" === i) e = new RSAKey(); else if ("2a8648ce380401" === i) e = new KJUR.crypto.DSA(); else {
                if ("2a8648ce3d0201" !== i) throw "unsupported PKCS#8 public key hex";
                e = new KJUR.crypto.ECDSA();
            }
            return e.readPKCS8PubKeyHex(t), e;
        },
        parsePublicRawRSAKeyHex: function(t) {
            var e = {};
            if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
            var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "malformed RSA key(code:002)";
            if ("02" != t.substr(i[0], 2)) throw "malformed RSA key(code:003)";
            if (e.n = ASN1HEX.getHexOfV_AtObj(t, i[0]), "02" != t.substr(i[1], 2)) throw "malformed RSA key(code:004)";
            return e.e = ASN1HEX.getHexOfV_AtObj(t, i[1]), e;
        },
        parsePrivateRawRSAKeyHexAtObj: function(t, e) {
            var i = ASN1HEX, n = i.getHexOfV_AtObj, r = i.getDecendantIndexByNthList(t, 0, [ 2, 0 ]), s = i.getPosArrayOfChildren_AtObj(t, r);
            if (9 !== s.length) throw "malformed PKCS#8 plain RSA private key";
            e.key = {}, e.key.n = n(t, s[1]), e.key.e = n(t, s[2]), e.key.d = n(t, s[3]), e.key.p = n(t, s[4]), 
            e.key.q = n(t, s[5]), e.key.dp = n(t, s[6]), e.key.dq = n(t, s[7]), e.key.co = n(t, s[8]);
        },
        parsePrivateRawECKeyHexAtObj: function(t, e) {
            var i = (e.keyidx, new KJUR.crypto.ECDSA());
            i.readPKCS8PrvKeyHex(t), e.key = i.prvKeyHex, e.pubkey = i.pubKeyHex;
        },
        parsePublicPKCS8Hex: function(t) {
            var e = {};
            e.algparam = null;
            var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
            if (2 != i.length) throw "outer DERSequence shall have 2 elements: " + i.length;
            var n = i[0];
            if ("30" != t.substr(n, 2)) throw "malformed PKCS8 public key(code:001)";
            var r = ASN1HEX.getPosArrayOfChildren_AtObj(t, n);
            if (2 != r.length) throw "malformed PKCS8 public key(code:002)";
            if ("06" != t.substr(r[0], 2)) throw "malformed PKCS8 public key(code:003)";
            if (e.algoid = ASN1HEX.getHexOfV_AtObj(t, r[0]), "06" == t.substr(r[1], 2) ? e.algparam = ASN1HEX.getHexOfV_AtObj(t, r[1]) : "30" == t.substr(r[1], 2) && (e.algparam = {}, 
            e.algparam.p = ASN1HEX.getVbyList(t, r[1], [ 0 ], "02"), e.algparam.q = ASN1HEX.getVbyList(t, r[1], [ 1 ], "02"), 
            e.algparam.g = ASN1HEX.getVbyList(t, r[1], [ 2 ], "02")), "03" != t.substr(i[1], 2)) throw "malformed PKCS8 public key(code:004)";
            return e.key = ASN1HEX.getHexOfV_AtObj(t, i[1]).substr(2), e;
        },
        getRSAKeyFromPublicPKCS8Hex: function(t) {
            var e = new RSAKey();
            return e.readPKCS8PubKeyHex(t), e;
        }
    };
}();

KEYUTIL.getKey = function(t, e, i) {
    if (void 0 !== RSAKey && t instanceof RSAKey) return t;
    if (void 0 !== KJUR.crypto.ECDSA && t instanceof KJUR.crypto.ECDSA) return t;
    if (void 0 !== KJUR.crypto.DSA && t instanceof KJUR.crypto.DSA) return t;
    if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d) return new KJUR.crypto.ECDSA({
        pub: t.xy,
        curve: t.curve
    });
    if (void 0 !== t.curve && void 0 !== t.d) return new KJUR.crypto.ECDSA({
        prv: t.d,
        curve: t.curve
    });
    if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
        var n = new RSAKey();
        return n.setPublic(t.n, t.e), n;
    }
    if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi) {
        var n = new RSAKey();
        return n.setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co), n;
    }
    if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p) {
        var n = new RSAKey();
        return n.setPrivate(t.n, t.e, t.d), n;
    }
    if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x) {
        var n = new KJUR.crypto.DSA();
        return n.setPublic(t.p, t.q, t.g, t.y), n;
    }
    if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x) {
        var n = new KJUR.crypto.DSA();
        return n.setPrivate(t.p, t.q, t.g, t.y, t.x), n;
    }
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
        var n = new RSAKey();
        return n.setPublic(b64utohex(t.n), b64utohex(t.e)), n;
    }
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi) {
        var n = new RSAKey();
        return n.setPrivateEx(b64utohex(t.n), b64utohex(t.e), b64utohex(t.d), b64utohex(t.p), b64utohex(t.q), b64utohex(t.dp), b64utohex(t.dq), b64utohex(t.qi)), 
        n;
    }
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) {
        var n = new RSAKey();
        return n.setPrivate(b64utohex(t.n), b64utohex(t.e), b64utohex(t.d)), n;
    }
    if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
        var r = new KJUR.crypto.ECDSA({
            curve: t.crv
        }), s = r.ecparams.keylen / 4, a = ("0000000000" + b64utohex(t.x)).slice(-s), o = ("0000000000" + b64utohex(t.y)).slice(-s), h = "04" + a + o;
        return r.setPublicKeyHex(h), r;
    }
    if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
        var r = new KJUR.crypto.ECDSA({
            curve: t.crv
        }), s = r.ecparams.keylen / 4, a = ("0000000000" + b64utohex(t.x)).slice(-s), o = ("0000000000" + b64utohex(t.y)).slice(-s), h = "04" + a + o, u = ("0000000000" + b64utohex(t.d)).slice(-s);
        return r.setPublicKeyHex(h), r.setPrivateKeyHex(u), r;
    }
    if ("pkcs5prv" === i) {
        var c, n, l = t, g = ASN1HEX;
        if (c = g.getPosArrayOfChildren_AtObj(l, 0), 9 === c.length) n = new RSAKey(), n.readPrivateKeyFromASN1HexString(t); else if (6 === c.length) n = new KJUR.crypto.DSA(), 
        n.readPKCS5PrvKeyHex(l); else {
            if (!(c.length > 2 && "04" === l.substr(c[1], 2))) throw "unsupported PKCS#1/5 hexadecimal key";
            n = new KJUR.crypto.ECDSA(), n.readPKCS5PrvKeyHex(l);
        }
        return n;
    }
    if ("pkcs8prv" === i) {
        var n = KEYUTIL.getKeyFromPlainPrivatePKCS8Hex(t);
        return n;
    }
    if ("pkcs8pub" === i) return KEYUTIL.getKeyFromPublicPKCS8Hex(t);
    if ("x509pub" === i) return X509.getPublicKeyFromCertHex(t);
    if (-1 != t.indexOf("-END CERTIFICATE-", 0) || -1 != t.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0)) return X509.getPublicKeyFromCertPEM(t);
    if (-1 != t.indexOf("-END PUBLIC KEY-")) return KEYUTIL.getKeyFromPublicPKCS8PEM(t);
    if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
        var d = ASN1HEX.pemToHex(t, "RSA PRIVATE KEY");
        return KEYUTIL.getKey(d, null, "pkcs5prv");
    }
    if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
        var f = ASN1HEX.pemToHex(t, "DSA PRIVATE KEY"), p = ASN1HEX.getVbyList(f, 0, [ 1 ], "02"), y = ASN1HEX.getVbyList(f, 0, [ 2 ], "02"), S = ASN1HEX.getVbyList(f, 0, [ 3 ], "02"), v = ASN1HEX.getVbyList(f, 0, [ 4 ], "02"), A = ASN1HEX.getVbyList(f, 0, [ 5 ], "02"), n = new KJUR.crypto.DSA();
        return n.setPrivate(new BigInteger(p, 16), new BigInteger(y, 16), new BigInteger(S, 16), new BigInteger(v, 16), new BigInteger(A, 16)), 
        n;
    }
    if (-1 != t.indexOf("-END PRIVATE KEY-")) return KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(t);
    if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) return KEYUTIL.getRSAKeyFromEncryptedPKCS5PEM(t, e);
    if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var f = KEYUTIL.getDecryptedKeyHex(t, e), n = ASN1HEX.getVbyList(f, 0, [ 1 ], "04"), m = ASN1HEX.getVbyList(f, 0, [ 2, 0 ], "06"), E = ASN1HEX.getVbyList(f, 0, [ 3, 0 ], "03").substr(2), b = "";
        if (void 0 === KJUR.crypto.OID.oidhex2name[m]) throw "undefined OID(hex) in KJUR.crypto.OID: " + m;
        b = KJUR.crypto.OID.oidhex2name[m];
        var r = new KJUR.crypto.ECDSA({
            curve: b
        });
        return r.setPublicKeyHex(E), r.setPrivateKeyHex(n), r.isPublic = !1, r;
    }
    if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
        var f = KEYUTIL.getDecryptedKeyHex(t, e), p = ASN1HEX.getVbyList(f, 0, [ 1 ], "02"), y = ASN1HEX.getVbyList(f, 0, [ 2 ], "02"), S = ASN1HEX.getVbyList(f, 0, [ 3 ], "02"), v = ASN1HEX.getVbyList(f, 0, [ 4 ], "02"), A = ASN1HEX.getVbyList(f, 0, [ 5 ], "02"), n = new KJUR.crypto.DSA();
        return n.setPrivate(new BigInteger(p, 16), new BigInteger(y, 16), new BigInteger(S, 16), new BigInteger(v, 16), new BigInteger(A, 16)), 
        n;
    }
    if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-")) return KEYUTIL.getKeyFromEncryptedPKCS8PEM(t, e);
    throw "not supported argument";
}, KEYUTIL.generateKeypair = function(t, e) {
    if ("RSA" == t) {
        var i = e, n = new RSAKey();
        n.generate(i, "10001"), n.isPrivate = !0, n.isPublic = !0;
        var r = new RSAKey(), s = n.n.toString(16), a = n.e.toString(16);
        r.setPublic(s, a), r.isPrivate = !1, r.isPublic = !0;
        var o = {};
        return o.prvKeyObj = n, o.pubKeyObj = r, o;
    }
    if ("EC" == t) {
        var h = e, u = new KJUR.crypto.ECDSA({
            curve: h
        }), c = u.generateKeyPairHex(), n = new KJUR.crypto.ECDSA({
            curve: h
        });
        n.setPublicKeyHex(c.ecpubhex), n.setPrivateKeyHex(c.ecprvhex), n.isPrivate = !0, 
        n.isPublic = !1;
        var r = new KJUR.crypto.ECDSA({
            curve: h
        });
        r.setPublicKeyHex(c.ecpubhex), r.isPrivate = !1, r.isPublic = !0;
        var o = {};
        return o.prvKeyObj = n, o.pubKeyObj = r, o;
    }
    throw "unknown algorithm: " + t;
}, KEYUTIL.getPEM = function(t, e, i, n, r) {
    function s(t) {
        return KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                int: {
                    bigint: t.n
                }
            }, {
                int: t.e
            }, {
                int: {
                    bigint: t.d
                }
            }, {
                int: {
                    bigint: t.p
                }
            }, {
                int: {
                    bigint: t.q
                }
            }, {
                int: {
                    bigint: t.dmp1
                }
            }, {
                int: {
                    bigint: t.dmq1
                }
            }, {
                int: {
                    bigint: t.coeff
                }
            } ]
        });
    }
    function a(t) {
        return KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 1
            }, {
                octstr: {
                    hex: t.prvKeyHex
                }
            }, {
                tag: [ "a0", !0, {
                    oid: {
                        name: t.curveName
                    }
                } ]
            }, {
                tag: [ "a1", !0, {
                    bitstr: {
                        hex: "00" + t.pubKeyHex
                    }
                } ]
            } ]
        });
    }
    function o(t) {
        return KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                int: {
                    bigint: t.p
                }
            }, {
                int: {
                    bigint: t.q
                }
            }, {
                int: {
                    bigint: t.g
                }
            }, {
                int: {
                    bigint: t.y
                }
            }, {
                int: {
                    bigint: t.x
                }
            } ]
        });
    }
    var h = KJUR.asn1, u = KJUR.crypto;
    if ((void 0 !== RSAKey && t instanceof RSAKey || void 0 !== u.DSA && t instanceof u.DSA || void 0 !== u.ECDSA && t instanceof u.ECDSA) && 1 == t.isPublic && (void 0 === e || "PKCS8PUB" == e)) {
        var c = new KJUR.asn1.x509.SubjectPublicKeyInfo(t), l = c.getEncodedHex();
        return h.ASN1Util.getPEMStringFromHex(l, "PUBLIC KEY");
    }
    if ("PKCS1PRV" == e && void 0 !== RSAKey && t instanceof RSAKey && (void 0 === i || null == i) && 1 == t.isPrivate) {
        var c = s(t), l = c.getEncodedHex();
        return h.ASN1Util.getPEMStringFromHex(l, "RSA PRIVATE KEY");
    }
    if ("PKCS1PRV" == e && void 0 !== RSAKey && t instanceof KJUR.crypto.ECDSA && (void 0 === i || null == i) && 1 == t.isPrivate) {
        var g = new KJUR.asn1.DERObjectIdentifier({
            name: t.curveName
        }), d = g.getEncodedHex(), f = a(t), p = f.getEncodedHex(), y = "";
        return y += h.ASN1Util.getPEMStringFromHex(d, "EC PARAMETERS"), y += h.ASN1Util.getPEMStringFromHex(p, "EC PRIVATE KEY");
    }
    if ("PKCS1PRV" == e && void 0 !== KJUR.crypto.DSA && t instanceof KJUR.crypto.DSA && (void 0 === i || null == i) && 1 == t.isPrivate) {
        var c = o(t), l = c.getEncodedHex();
        return h.ASN1Util.getPEMStringFromHex(l, "DSA PRIVATE KEY");
    }
    if ("PKCS5PRV" == e && void 0 !== RSAKey && t instanceof RSAKey && void 0 !== i && null != i && 1 == t.isPrivate) {
        var c = s(t), l = c.getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", l, i, n);
    }
    if ("PKCS5PRV" == e && void 0 !== KJUR.crypto.ECDSA && t instanceof KJUR.crypto.ECDSA && void 0 !== i && null != i && 1 == t.isPrivate) {
        var c = a(t), l = c.getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", l, i, n);
    }
    if ("PKCS5PRV" == e && void 0 !== KJUR.crypto.DSA && t instanceof KJUR.crypto.DSA && void 0 !== i && null != i && 1 == t.isPrivate) {
        var c = o(t), l = c.getEncodedHex();
        return void 0 === n && (n = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", l, i, n);
    }
    var S = function(t, e) {
        var i = v(t, e);
        return new KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                seq: [ {
                    oid: {
                        name: "pkcs5PBES2"
                    }
                }, {
                    seq: [ {
                        seq: [ {
                            oid: {
                                name: "pkcs5PBKDF2"
                            }
                        }, {
                            seq: [ {
                                octstr: {
                                    hex: i.pbkdf2Salt
                                }
                            }, {
                                int: i.pbkdf2Iter
                            } ]
                        } ]
                    }, {
                        seq: [ {
                            oid: {
                                name: "des-EDE3-CBC"
                            }
                        }, {
                            octstr: {
                                hex: i.encryptionSchemeIV
                            }
                        } ]
                    } ]
                } ]
            }, {
                octstr: {
                    hex: i.ciphertext
                }
            } ]
        }).getEncodedHex();
    }, v = function(t, e) {
        var i = CryptoJS.lib.WordArray.random(8), n = CryptoJS.lib.WordArray.random(8), r = CryptoJS.PBKDF2(e, i, {
            keySize: 6,
            iterations: 100
        }), s = CryptoJS.enc.Hex.parse(t), a = CryptoJS.TripleDES.encrypt(s, r, {
            iv: n
        }) + "", o = {};
        return o.ciphertext = a, o.pbkdf2Salt = CryptoJS.enc.Hex.stringify(i), o.pbkdf2Iter = 100, 
        o.encryptionSchemeAlg = "DES-EDE3-CBC", o.encryptionSchemeIV = CryptoJS.enc.Hex.stringify(n), 
        o;
    };
    if ("PKCS8PRV" == e && void 0 !== RSAKey && t instanceof RSAKey && 1 == t.isPrivate) {
        var A = s(t), m = A.getEncodedHex(), c = KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                seq: [ {
                    oid: {
                        name: "rsaEncryption"
                    }
                }, {
                    null: !0
                } ]
            }, {
                octstr: {
                    hex: m
                }
            } ]
        }), l = c.getEncodedHex();
        if (void 0 === i || null == i) return h.ASN1Util.getPEMStringFromHex(l, "PRIVATE KEY");
        var p = S(l, i);
        return h.ASN1Util.getPEMStringFromHex(p, "ENCRYPTED PRIVATE KEY");
    }
    if ("PKCS8PRV" == e && void 0 !== KJUR.crypto.ECDSA && t instanceof KJUR.crypto.ECDSA && 1 == t.isPrivate) {
        var A = new KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 1
            }, {
                octstr: {
                    hex: t.prvKeyHex
                }
            }, {
                tag: [ "a1", !0, {
                    bitstr: {
                        hex: "00" + t.pubKeyHex
                    }
                } ]
            } ]
        }), m = A.getEncodedHex(), c = KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                seq: [ {
                    oid: {
                        name: "ecPublicKey"
                    }
                }, {
                    oid: {
                        name: t.curveName
                    }
                } ]
            }, {
                octstr: {
                    hex: m
                }
            } ]
        }), l = c.getEncodedHex();
        if (void 0 === i || null == i) return h.ASN1Util.getPEMStringFromHex(l, "PRIVATE KEY");
        var p = S(l, i);
        return h.ASN1Util.getPEMStringFromHex(p, "ENCRYPTED PRIVATE KEY");
    }
    if ("PKCS8PRV" == e && void 0 !== KJUR.crypto.DSA && t instanceof KJUR.crypto.DSA && 1 == t.isPrivate) {
        var A = new KJUR.asn1.DERInteger({
            bigint: t.x
        }), m = A.getEncodedHex(), c = KJUR.asn1.ASN1Util.newObject({
            seq: [ {
                int: 0
            }, {
                seq: [ {
                    oid: {
                        name: "dsa"
                    }
                }, {
                    seq: [ {
                        int: {
                            bigint: t.p
                        }
                    }, {
                        int: {
                            bigint: t.q
                        }
                    }, {
                        int: {
                            bigint: t.g
                        }
                    } ]
                } ]
            }, {
                octstr: {
                    hex: m
                }
            } ]
        }), l = c.getEncodedHex();
        if (void 0 === i || null == i) return h.ASN1Util.getPEMStringFromHex(l, "PRIVATE KEY");
        var p = S(l, i);
        return h.ASN1Util.getPEMStringFromHex(p, "ENCRYPTED PRIVATE KEY");
    }
    throw "unsupported object nor format";
}, KEYUTIL.getKeyFromCSRPEM = function(t) {
    var e = ASN1HEX.pemToHex(t, "CERTIFICATE REQUEST");
    return KEYUTIL.getKeyFromCSRHex(e);
}, KEYUTIL.getKeyFromCSRHex = function(t) {
    var e = KEYUTIL.parseCSRHex(t);
    return KEYUTIL.getKey(e.p8pubkeyhex, null, "pkcs8pub");
}, KEYUTIL.parseCSRHex = function(t) {
    var e = {}, i = t;
    if ("30" != i.substr(0, 2)) throw "malformed CSR(code:001)";
    var n = ASN1HEX.getPosArrayOfChildren_AtObj(i, 0);
    if (n.length < 1) throw "malformed CSR(code:002)";
    if ("30" != i.substr(n[0], 2)) throw "malformed CSR(code:003)";
    var r = ASN1HEX.getPosArrayOfChildren_AtObj(i, n[0]);
    if (r.length < 3) throw "malformed CSR(code:004)";
    return e.p8pubkeyhex = ASN1HEX.getHexOfTLV_AtObj(i, r[2]), e;
}, KEYUTIL.getJWKFromKey = function(t) {
    var e = {};
    if (t instanceof RSAKey && t.isPrivate) return e.kty = "RSA", e.n = hextob64u(t.n.toString(16)), 
    e.e = hextob64u(t.e.toString(16)), e.d = hextob64u(t.d.toString(16)), e.p = hextob64u(t.p.toString(16)), 
    e.q = hextob64u(t.q.toString(16)), e.dp = hextob64u(t.dmp1.toString(16)), e.dq = hextob64u(t.dmq1.toString(16)), 
    e.qi = hextob64u(t.coeff.toString(16)), e;
    if (t instanceof RSAKey && t.isPublic) return e.kty = "RSA", e.n = hextob64u(t.n.toString(16)), 
    e.e = hextob64u(t.e.toString(16)), e;
    if (t instanceof KJUR.crypto.ECDSA && t.isPrivate) {
        var i = t.getShortNISTPCurveName();
        if ("P-256" !== i && "P-384" !== i) throw "unsupported curve name for JWT: " + i;
        var n = t.getPublicKeyXYHex();
        return e.kty = "EC", e.crv = i, e.x = hextob64u(n.x), e.y = hextob64u(n.y), e.d = hextob64u(t.prvKeyHex), 
        e;
    }
    if (t instanceof KJUR.crypto.ECDSA && t.isPublic) {
        var i = t.getShortNISTPCurveName();
        if ("P-256" !== i && "P-384" !== i) throw "unsupported curve name for JWT: " + i;
        var n = t.getPublicKeyXYHex();
        return e.kty = "EC", e.crv = i, e.x = hextob64u(n.x), e.y = hextob64u(n.y), e;
    }
    throw "not supported key object";
}, RSAKey.pemToBase64 = function(t) {
    var e = t;
    return e = e.replace("-----BEGIN RSA PRIVATE KEY-----", ""), e = e.replace("-----END RSA PRIVATE KEY-----", ""), 
    e = e.replace(/[ \n]+/g, "");
}, RSAKey.getPosArrayOfChildrenFromHex = function(t) {
    var e = new Array(), i = ASN1HEX.getStartPosOfV_AtObj(t, 0), n = ASN1HEX.getPosOfNextSibling_AtObj(t, i), r = ASN1HEX.getPosOfNextSibling_AtObj(t, n), s = ASN1HEX.getPosOfNextSibling_AtObj(t, r), a = ASN1HEX.getPosOfNextSibling_AtObj(t, s), o = ASN1HEX.getPosOfNextSibling_AtObj(t, a), h = ASN1HEX.getPosOfNextSibling_AtObj(t, o), u = ASN1HEX.getPosOfNextSibling_AtObj(t, h), c = ASN1HEX.getPosOfNextSibling_AtObj(t, u);
    return e.push(i, n, r, s, a, o, h, u, c), e;
}, RSAKey.getHexValueArrayOfChildrenFromHex = function(t) {
    var e = RSAKey.getPosArrayOfChildrenFromHex(t), i = ASN1HEX.getHexOfV_AtObj(t, e[0]), n = ASN1HEX.getHexOfV_AtObj(t, e[1]), r = ASN1HEX.getHexOfV_AtObj(t, e[2]), s = ASN1HEX.getHexOfV_AtObj(t, e[3]), a = ASN1HEX.getHexOfV_AtObj(t, e[4]), o = ASN1HEX.getHexOfV_AtObj(t, e[5]), h = ASN1HEX.getHexOfV_AtObj(t, e[6]), u = ASN1HEX.getHexOfV_AtObj(t, e[7]), c = ASN1HEX.getHexOfV_AtObj(t, e[8]), l = new Array();
    return l.push(i, n, r, s, a, o, h, u, c), l;
}, RSAKey.prototype.readPrivateKeyFromPEMString = function(t) {
    var e = RSAKey.pemToBase64(t), i = b64tohex(e), n = RSAKey.getHexValueArrayOfChildrenFromHex(i);
    this.setPrivateEx(n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8]);
}, RSAKey.prototype.readPrivateKeyFromASN1HexString = function(t) {
    this.readPKCS5PrvKeyHex(t);
}, RSAKey.prototype.readPKCS5PrvKeyHex = function(t) {
    var e = RSAKey.getHexValueArrayOfChildrenFromHex(t);
    this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
}, RSAKey.prototype.readPKCS8PrvKeyHex = function(t) {
    var e = void 0, i = void 0, n = void 0, r = void 0, s = void 0, a = void 0, o = void 0, h = void 0, u = ASN1HEX, c = u.getVbyList;
    if (!1 === u.isASN1HEX(t)) throw "not ASN.1 hex string";
    try {
        e = c(t, 0, [ 2, 0, 1 ], "02"), i = c(t, 0, [ 2, 0, 2 ], "02"), n = c(t, 0, [ 2, 0, 3 ], "02"), 
        r = c(t, 0, [ 2, 0, 4 ], "02"), s = c(t, 0, [ 2, 0, 5 ], "02"), a = c(t, 0, [ 2, 0, 6 ], "02"), 
        o = c(t, 0, [ 2, 0, 7 ], "02"), h = c(t, 0, [ 2, 0, 8 ], "02");
    } catch (t) {
        throw "malformed PKCS#8 plain RSA private key";
    }
    this.setPrivateEx(e, i, n, r, s, a, o, h);
}, RSAKey.prototype.readPKCS5PubKeyHex = function(t) {
    if (!1 === ASN1HEX.isASN1HEX(t)) throw "keyHex is not ASN.1 hex string";
    var e = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
    if (2 !== e.length || "02" !== t.substr(e[0], 2) || "02" !== t.substr(e[1], 2)) throw "wrong hex for PKCS#5 public key";
    var i = ASN1HEX.getHexOfV_AtObj(t, e[0]), n = ASN1HEX.getHexOfV_AtObj(t, e[1]);
    this.setPublic(i, n);
}, RSAKey.prototype.readPKCS8PubKeyHex = function(t) {
    if (!1 === ASN1HEX.isASN1HEX(t)) throw "not ASN.1 hex string";
    if ("06092a864886f70d010101" !== ASN1HEX.getDecendantHexTLVByNthList(t, 0, [ 0, 0 ])) throw "not PKCS8 RSA public key";
    var e = ASN1HEX.getDecendantHexTLVByNthList(t, 0, [ 1, 0 ]);
    this.readPKCS5PubKeyHex(e);
}, RSAKey.prototype.readCertPubKeyHex = function(t, e) {
    if (5 !== e && (e = 6), !1 === ASN1HEX.isASN1HEX(t)) throw "not ASN.1 hex string";
    var i = ASN1HEX.getDecendantHexTLVByNthList(t, 0, [ 0, e ]);
    this.readPKCS8PubKeyHex(i);
};

var _RE_HEXDECONLY = new RegExp("");

_RE_HEXDECONLY.compile("[^0-9a-f]", "gi"), RSAKey.prototype.signWithMessageHash = _rsasign_signWithMessageHash, 
RSAKey.prototype.signString = _rsasign_signString, RSAKey.prototype.signStringWithSHA1 = _rsasign_signStringWithSHA1, 
RSAKey.prototype.signStringWithSHA256 = _rsasign_signStringWithSHA256, RSAKey.prototype.sign = _rsasign_signString, 
RSAKey.prototype.signWithSHA1 = _rsasign_signStringWithSHA1, RSAKey.prototype.signWithSHA256 = _rsasign_signStringWithSHA256, 
RSAKey.prototype.signWithMessageHashPSS = _rsasign_signWithMessageHashPSS, RSAKey.prototype.signStringPSS = _rsasign_signStringPSS, 
RSAKey.prototype.signPSS = _rsasign_signStringPSS, RSAKey.SALT_LEN_HLEN = -1, RSAKey.SALT_LEN_MAX = -2, 
RSAKey.prototype.verifyWithMessageHash = _rsasign_verifyWithMessageHash, RSAKey.prototype.verifyString = _rsasign_verifyString, 
RSAKey.prototype.verifyHexSignatureForMessage = _rsasign_verifyHexSignatureForMessage, 
RSAKey.prototype.verify = _rsasign_verifyString, RSAKey.prototype.verifyHexSignatureForByteArrayMessage = _rsasign_verifyHexSignatureForMessage, 
RSAKey.prototype.verifyWithMessageHashPSS = _rsasign_verifyWithMessageHashPSS, RSAKey.prototype.verifyStringPSS = _rsasign_verifyStringPSS, 
RSAKey.prototype.verifyPSS = _rsasign_verifyStringPSS, RSAKey.SALT_LEN_RECOVER = -2, 
X509.pemToBase64 = function(t) {
    var e = t;
    return e = e.replace("-----BEGIN CERTIFICATE-----", ""), e = e.replace("-----END CERTIFICATE-----", ""), 
    e = e.replace(/[ \n]+/g, "");
}, X509.pemToHex = function(t) {
    return ASN1HEX.pemToHex(t);
}, X509.getSubjectPublicKeyPosFromCertHex = function(t) {
    var e = X509.getSubjectPublicKeyInfoPosFromCertHex(t);
    if (-1 == e) return -1;
    var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    if (2 != i.length) return -1;
    var n = i[1];
    if ("03" != t.substring(n, n + 2)) return -1;
    var r = ASN1HEX.getStartPosOfV_AtObj(t, n);
    return "00" != t.substring(r, r + 2) ? -1 : r + 2;
}, X509.getSubjectPublicKeyInfoPosFromCertHex = function(t) {
    var e = ASN1HEX.getStartPosOfV_AtObj(t, 0), i = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    return i.length < 1 ? -1 : "a003020102" == t.substring(i[0], i[0] + 10) ? i.length < 6 ? -1 : i[6] : i.length < 5 ? -1 : i[5];
}, X509.getPublicKeyHexArrayFromCertHex = function(t) {
    var e = X509.getSubjectPublicKeyPosFromCertHex(t), i = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    if (2 != i.length) return [];
    var n = ASN1HEX.getHexOfV_AtObj(t, i[0]), r = ASN1HEX.getHexOfV_AtObj(t, i[1]);
    return null != n && null != r ? [ n, r ] : [];
}, X509.getHexTbsCertificateFromCert = function(t) {
    return ASN1HEX.getStartPosOfV_AtObj(t, 0);
}, X509.getPublicKeyHexArrayFromCertPEM = function(t) {
    var e = ASN1HEX.pemToHex(t);
    return X509.getPublicKeyHexArrayFromCertHex(e);
}, X509.hex2dn = function(t, e) {
    if (void 0 === e && (e = 0), "30" !== t.substr(e, 2)) throw "malformed DN";
    for (var i = new Array(), n = ASN1HEX.getPosArrayOfChildren_AtObj(t, e), r = 0; r < n.length; r++) i.push(X509.hex2rdn(t, n[r]));
    return i = i.map(function(t) {
        return t.replace("/", "\\/");
    }), "/" + i.join("/");
}, X509.hex2rdn = function(t, e) {
    if (void 0 === e && (e = 0), "31" !== t.substr(e, 2)) throw "malformed RDN";
    for (var i = new Array(), n = ASN1HEX.getPosArrayOfChildren_AtObj(t, e), r = 0; r < n.length; r++) i.push(X509.hex2attrTypeValue(t, n[r]));
    return i = i.map(function(t) {
        return t.replace("+", "\\+");
    }), i.join("+");
}, X509.hex2attrTypeValue = function(t, e) {
    if (void 0 === e && (e = 0), "30" !== t.substr(e, 2)) throw "malformed attribute type and value";
    var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    2 !== i.length || t.substr(i[0], 2);
    var n = ASN1HEX.getHexOfV_AtObj(t, i[0]), r = KJUR.asn1.ASN1Util.oidHexToInt(n);
    return KJUR.asn1.x509.OID.oid2atype(r) + "=" + hextorstr(ASN1HEX.getHexOfV_AtObj(t, i[1]));
}, X509.getPublicKeyFromCertHex = function(t) {
    var e = void 0, i = void 0, n = void 0, r = 6, s = ASN1HEX, a = s.getVbyList;
    if (n = s.getDecendantHexTLVByNthList(t, 0, [ 0, 0 ]), "a003020102" !== n && (r = 5), 
    "2a864886f70d010101" === (i = a(t, 0, [ 0, r, 0, 0 ], "06"))) e = new RSAKey(); else if ("2a8648ce380401" === i) e = new KJUR.crypto.DSA(); else {
        if ("2a8648ce3d0201" !== i) throw "unsupported public key in X.509 cert";
        e = new KJUR.crypto.ECDSA();
    }
    return e.readCertPubKeyHex(t, r), e;
}, X509.getPublicKeyFromCertPEM = function(t) {
    var e = ASN1HEX, i = e.pemToHex(t);
    return X509.getPublicKeyFromCertHex(i);
}, X509.getPublicKeyInfoPropOfCertPEM = function(t) {
    var e = {};
    e.algparam = null;
    var i = ASN1HEX.pemToHex(t), n = ASN1HEX.getPosArrayOfChildren_AtObj(i, 0);
    if (3 != n.length) throw "malformed X.509 certificate PEM (code:001)";
    if ("30" != i.substr(n[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
    var r = ASN1HEX.getPosArrayOfChildren_AtObj(i, n[0]), s = 6;
    if ("a0" !== i.substr(r[0], 2) && (s = 5), r.length < s + 1) throw "malformed X.509 certificate PEM (code:003)";
    var a = ASN1HEX.getPosArrayOfChildren_AtObj(i, r[s]);
    if (2 != a.length) throw "malformed X.509 certificate PEM (code:004)";
    var o = ASN1HEX.getPosArrayOfChildren_AtObj(i, a[0]);
    if (2 != o.length) throw "malformed X.509 certificate PEM (code:005)";
    if (e.algoid = ASN1HEX.getHexOfV_AtObj(i, o[0]), "06" == i.substr(o[1], 2) ? e.algparam = ASN1HEX.getHexOfV_AtObj(i, o[1]) : "30" == i.substr(o[1], 2) && (e.algparam = ASN1HEX.getHexOfTLV_AtObj(i, o[1])), 
    "03" != i.substr(a[1], 2)) throw "malformed X.509 certificate PEM (code:006)";
    var h = ASN1HEX.getHexOfV_AtObj(i, a[1]);
    return e.keyhex = h.substr(2), e;
}, X509.getPublicKeyInfoPosOfCertHEX = function(t) {
    var e = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
    if (3 != e.length) throw "malformed X.509 certificate PEM (code:001)";
    if ("30" != t.substr(e[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
    var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, e[0]);
    if (i.length < 7) throw "malformed X.509 certificate PEM (code:003)";
    return i[6];
}, X509.getV3ExtInfoListOfCertHex = function(t) {
    var e = ASN1HEX.getPosArrayOfChildren_AtObj(t, 0);
    if (3 != e.length) throw "malformed X.509 certificate PEM (code:001)";
    if ("30" != t.substr(e[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
    var i = ASN1HEX.getPosArrayOfChildren_AtObj(t, e[0]);
    if (i.length < 8) throw "malformed X.509 certificate PEM (code:003)";
    if ("a3" != t.substr(i[7], 2)) throw "malformed X.509 certificate PEM (code:004)";
    var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i[7]);
    if (1 != n.length) throw "malformed X.509 certificate PEM (code:005)";
    if ("30" != t.substr(n[0], 2)) throw "malformed X.509 certificate PEM (code:006)";
    for (var r = ASN1HEX.getPosArrayOfChildren_AtObj(t, n[0]), s = r.length, a = new Array(s), o = 0; o < s; o++) a[o] = X509.getV3ExtItemInfo_AtObj(t, r[o]);
    return a;
}, X509.getV3ExtItemInfo_AtObj = function(t, e) {
    var i = {};
    i.posTLV = e;
    var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, e);
    if (2 != n.length && 3 != n.length) throw "malformed X.509v3 Ext (code:001)";
    if ("06" != t.substr(n[0], 2)) throw "malformed X.509v3 Ext (code:002)";
    var r = ASN1HEX.getHexOfV_AtObj(t, n[0]);
    i.oid = ASN1HEX.hextooidstr(r), i.critical = !1, 3 == n.length && (i.critical = !0);
    var s = n[n.length - 1];
    if ("04" != t.substr(s, 2)) throw "malformed X.509v3 Ext (code:003)";
    return i.posV = ASN1HEX.getStartPosOfV_AtObj(t, s), i;
}, X509.getHexOfTLV_V3ExtValue = function(t, e) {
    var i = X509.getPosOfTLV_V3ExtValue(t, e);
    return -1 == i ? null : ASN1HEX.getHexOfTLV_AtObj(t, i);
}, X509.getHexOfV_V3ExtValue = function(t, e) {
    var i = X509.getPosOfTLV_V3ExtValue(t, e);
    return -1 == i ? null : ASN1HEX.getHexOfV_AtObj(t, i);
}, X509.getPosOfTLV_V3ExtValue = function(t, e) {
    var i = e;
    if (e.match(/^[0-9.]+$/) || (i = KJUR.asn1.x509.OID.name2oid(e)), "" == i) return -1;
    for (var n = X509.getV3ExtInfoListOfCertHex(t), r = 0; r < n.length; r++) {
        var s = n[r];
        if (s.oid == i) return s.posV;
    }
    return -1;
}, X509.getExtBasicConstraints = function(t) {
    var e = X509.getHexOfV_V3ExtValue(t, "basicConstraints");
    if (null === e) return null;
    if ("" === e) return {};
    if ("0101ff" === e) return {
        cA: !0
    };
    if ("0101ff02" === e.substr(0, 8)) {
        var i = ASN1HEX.getHexOfV_AtObj(e, 6);
        return {
            cA: !0,
            pathLen: parseInt(i, 16)
        };
    }
    throw "unknown error";
}, X509.KEYUSAGE_NAME = [ "digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly" ], 
X509.getExtKeyUsageBin = function(t) {
    var e = X509.getHexOfV_V3ExtValue(t, "keyUsage");
    if ("" == e) return "";
    if (e.length % 2 != 0 || e.length <= 2) throw "malformed key usage value";
    var i = parseInt(e.substr(0, 2)), n = parseInt(e.substr(2), 16).toString(2);
    return n.substr(0, n.length - i);
}, X509.getExtKeyUsageString = function(t) {
    for (var e = X509.getExtKeyUsageBin(t), i = new Array(), n = 0; n < e.length; n++) "1" == e.substr(n, 1) && i.push(X509.KEYUSAGE_NAME[n]);
    return i.join(",");
}, X509.getExtSubjectKeyIdentifier = function(t) {
    return X509.getHexOfV_V3ExtValue(t, "subjectKeyIdentifier");
}, X509.getExtAuthorityKeyIdentifier = function(t) {
    var e = {}, i = X509.getHexOfTLV_V3ExtValue(t, "authorityKeyIdentifier");
    if (null === i) return null;
    for (var n = ASN1HEX.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) "80" === i.substr(n[r], 2) && (e.kid = ASN1HEX.getHexOfV_AtObj(i, n[r]));
    return e;
}, X509.getExtExtKeyUsageName = function(t) {
    var e = new Array(), i = X509.getHexOfTLV_V3ExtValue(t, "extKeyUsage");
    if (null === i) return null;
    for (var n = ASN1HEX.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) {
        var s = ASN1HEX.getHexOfV_AtObj(i, n[r]), a = KJUR.asn1.ASN1Util.oidHexToInt(s), o = KJUR.asn1.x509.OID.oid2name(a);
        e.push(o);
    }
    return e;
}, X509.getExtSubjectAltName = function(t) {
    for (var e = new Array(), i = X509.getHexOfTLV_V3ExtValue(t, "subjectAltName"), n = ASN1HEX.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) if ("82" === i.substr(n[r], 2)) {
        var s = hextoutf8(ASN1HEX.getHexOfV_AtObj(i, n[r]));
        e.push(s);
    }
    return e;
}, X509.getExtCRLDistributionPointsURI = function(t) {
    for (var e = new Array(), i = X509.getHexOfTLV_V3ExtValue(t, "cRLDistributionPoints"), n = ASN1HEX.getPosArrayOfChildren_AtObj(i, 0), r = 0; r < n.length; r++) for (var s = ASN1HEX.getHexOfTLV_AtObj(i, n[r]), a = ASN1HEX.getPosArrayOfChildren_AtObj(s, 0), o = 0; o < a.length; o++) if ("a0" === s.substr(a[o], 2)) {
        var h = ASN1HEX.getHexOfV_AtObj(s, a[o]);
        if ("a0" === h.substr(0, 2)) {
            var u = ASN1HEX.getHexOfV_AtObj(h, 0);
            if ("86" === u.substr(0, 2)) {
                var c = ASN1HEX.getHexOfV_AtObj(u, 0), l = hextoutf8(c);
                e.push(l);
            }
        }
    }
    return e;
}, X509.getExtAIAInfo = function(t) {
    var e = {};
    e.ocsp = [], e.caissuer = [];
    var i = X509.getPosOfTLV_V3ExtValue(t, "authorityInfoAccess");
    if (-1 == i) return null;
    if ("30" != t.substr(i, 2)) throw "malformed AIA Extn Value";
    for (var n = ASN1HEX.getPosArrayOfChildren_AtObj(t, i), r = 0; r < n.length; r++) {
        var s = n[r], a = ASN1HEX.getPosArrayOfChildren_AtObj(t, s);
        if (2 != a.length) throw "malformed AccessDescription of AIA Extn";
        var o = a[0], h = a[1];
        "2b06010505073001" == ASN1HEX.getHexOfV_AtObj(t, o) && "86" == t.substr(h, 2) && e.ocsp.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(t, h))), 
        "2b06010505073002" == ASN1HEX.getHexOfV_AtObj(t, o) && "86" == t.substr(h, 2) && e.caissuer.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(t, h)));
    }
    return e;
}, X509.getSignatureAlgorithmName = function(t) {
    var e = ASN1HEX.getDecendantHexVByNthList(t, 0, [ 1, 0 ]), i = KJUR.asn1.ASN1Util.oidHexToInt(e);
    return KJUR.asn1.x509.OID.oid2name(i);
}, X509.getSignatureValueHex = function(t) {
    var e = ASN1HEX.getDecendantHexVByNthList(t, 0, [ 2 ]);
    if ("00" !== e.substr(0, 2)) throw "can't get signature value";
    return e.substr(2);
}, X509.getSerialNumberHex = function(t) {
    return ASN1HEX.getDecendantHexVByNthList(t, 0, [ 0, 1 ]);
}, X509.verifySignature = function(t, e) {
    var i = X509.getSignatureAlgorithmName(t), n = X509.getSignatureValueHex(t), r = ASN1HEX.getDecendantHexTLVByNthList(t, 0, [ 0 ]), s = new KJUR.crypto.Signature({
        alg: i
    });
    return s.init(e), s.updateHex(r), s.verify(n);
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.jws && KJUR.jws || (KJUR.jws = {}), 
KJUR.jws.JWS = function() {
    var t = KJUR.jws.JWS;
    this.parseJWS = function(e, i) {
        if (void 0 === this.parsedJWS || !i && void 0 === this.parsedJWS.sigvalH) {
            var n = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
            if (null == n) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
            var r = n[1], s = n[2], a = n[3], o = r + "." + s;
            if (this.parsedJWS = {}, this.parsedJWS.headB64U = r, this.parsedJWS.payloadB64U = s, 
            this.parsedJWS.sigvalB64U = a, this.parsedJWS.si = o, !i) {
                var h = b64utohex(a), u = parseBigInt(h, 16);
                this.parsedJWS.sigvalH = h, this.parsedJWS.sigvalBI = u;
            }
            var c = b64utoutf8(r), l = b64utoutf8(s);
            if (this.parsedJWS.headS = c, this.parsedJWS.payloadS = l, !t.isSafeJSONString(c, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + c;
        }
    };
}, KJUR.jws.JWS.sign = function(t, e, i, n, r) {
    var s = KJUR.jws.JWS, a = void 0, o = void 0, h = void 0;
    if ("string" != typeof e && "object" !== (void 0 === e ? "undefined" : _typeof(e))) throw "spHeader must be JSON string or object: " + e;
    if ("object" === (void 0 === e ? "undefined" : _typeof(e)) && (o = e, a = JSON.stringify(o)), 
    "string" == typeof e) {
        if (a = e, !s.isSafeJSONString(a)) throw "JWS Head is not safe JSON string: " + a;
        o = s.readSafeJSONString(a);
    }
    if (h = i, "object" === (void 0 === i ? "undefined" : _typeof(i)) && (h = JSON.stringify(i)), 
    "" != t && null != t || void 0 === o.alg || (t = o.alg), "" != t && null != t && void 0 === o.alg && (o.alg = t, 
    a = JSON.stringify(o)), t !== o.alg) throw "alg and sHeader.alg doesn't match: " + t + "!=" + o.alg;
    var u = null;
    if (void 0 === s.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
    u = s.jwsalg2sigalg[t];
    var c = utf8tob64u(a), l = utf8tob64u(h), g = c + "." + l, d = "";
    if ("Hmac" == u.substr(0, 4)) {
        if (void 0 === n) throw "mac key shall be specified for HS* alg";
        var f = new KJUR.crypto.Mac({
            alg: u,
            prov: "cryptojs",
            pass: n
        });
        f.updateString(g), d = f.doFinal();
    } else if (-1 != u.indexOf("withECDSA")) {
        var p = new KJUR.crypto.Signature({
            alg: u
        });
        p.init(n, r), p.updateString(g), hASN1Sig = p.sign(), d = KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig);
    } else if ("none" != u) {
        var p = new KJUR.crypto.Signature({
            alg: u
        });
        p.init(n, r), p.updateString(g), d = p.sign();
    }
    return g + "." + hextob64u(d);
}, KJUR.jws.JWS.verify = function(t, e, i) {
    var n = KJUR.jws.JWS, r = t.split("."), s = r[0], a = r[1], o = s + "." + a, h = b64utohex(r[2]), u = n.readSafeJSONString(b64utoutf8(r[0])), c = null, l = null;
    if (void 0 === u.alg) throw "algorithm not specified in header";
    if (c = u.alg, l = c.substr(0, 2), null != i && "[object Array]" === Object.prototype.toString.call(i) && i.length > 0) {
        if (-1 == (":" + i.join(":") + ":").indexOf(":" + c + ":")) throw "algorithm '" + c + "' not accepted in the list";
    }
    if ("none" != c && null === e) throw "key shall be specified to verify.";
    if ("string" == typeof e && -1 != e.indexOf("-----BEGIN ") && (e = KEYUTIL.getKey(e)), 
    !("RS" != l && "PS" != l || e instanceof RSAKey)) throw "key shall be a RSAKey obj for RS* and PS* algs";
    if ("ES" == l && !(e instanceof KJUR.crypto.ECDSA)) throw "key shall be a ECDSA obj for ES* algs";
    var g = null;
    if (void 0 === n.jwsalg2sigalg[u.alg]) throw "unsupported alg name: " + c;
    if ("none" == (g = n.jwsalg2sigalg[c])) throw "not supported";
    if ("Hmac" == g.substr(0, 4)) {
        var d = null;
        if (void 0 === e) throw "hexadecimal key shall be specified for HMAC";
        var f = new KJUR.crypto.Mac({
            alg: g,
            pass: e
        });
        return f.updateString(o), d = f.doFinal(), h == d;
    }
    if (-1 != g.indexOf("withECDSA")) {
        var p = null;
        try {
            p = KJUR.crypto.ECDSA.concatSigToASN1Sig(h);
        } catch (t) {
            return !1;
        }
        var y = new KJUR.crypto.Signature({
            alg: g
        });
        return y.init(e), y.updateString(o), y.verify(p);
    }
    var y = new KJUR.crypto.Signature({
        alg: g
    });
    return y.init(e), y.updateString(o), y.verify(h);
}, KJUR.jws.JWS.parse = function(t) {
    var e = t.split("."), i = {}, n = void 0, r = void 0, s = void 0;
    if (2 != e.length && 3 != e.length) throw "malformed sJWS: wrong number of '.' splitted elements";
    return n = e[0], r = e[1], 3 == e.length && (s = e[2]), i.headerObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(n)), 
    i.payloadObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(r)), i.headerPP = JSON.stringify(i.headerObj, null, "  "), 
    null == i.payloadObj ? i.payloadPP = b64utoutf8(r) : i.payloadPP = JSON.stringify(i.payloadObj, null, "  "), 
    void 0 !== s && (i.sigHex = b64utohex(s)), i;
}, KJUR.jws.JWS.verifyJWT = function(t, e, i) {
    var n = KJUR.jws.JWS, r = t.split("."), s = r[0], a = r[1], o = (b64utohex(r[2]), 
    n.readSafeJSONString(b64utoutf8(s))), h = n.readSafeJSONString(b64utoutf8(a));
    if (void 0 === o.alg) return !1;
    if (void 0 === i.alg) throw "acceptField.alg shall be specified";
    if (!n.inArray(o.alg, i.alg)) return !1;
    if (void 0 !== h.iss && "object" === _typeof(i.iss) && !n.inArray(h.iss, i.iss)) return !1;
    if (void 0 !== h.sub && "object" === _typeof(i.sub) && !n.inArray(h.sub, i.sub)) return !1;
    if (void 0 !== h.aud && "object" === _typeof(i.aud)) if ("string" == typeof h.aud) {
        if (!n.inArray(h.aud, i.aud)) return !1;
    } else if ("object" === _typeof(h.aud) && !n.includedArray(h.aud, i.aud)) return !1;
    var u = KJUR.jws.IntDate.getNow();
    return void 0 !== i.verifyAt && "number" == typeof i.verifyAt && (u = i.verifyAt), 
    void 0 !== i.gracePeriod && "number" == typeof i.gracePeriod || (i.gracePeriod = 0), 
    !(void 0 !== h.exp && "number" == typeof h.exp && h.exp + i.gracePeriod < u) && (!(void 0 !== h.nbf && "number" == typeof h.nbf && u < h.nbf - i.gracePeriod) && (!(void 0 !== h.iat && "number" == typeof h.iat && u < h.iat - i.gracePeriod) && ((void 0 === h.jti || void 0 === i.jti || h.jti === i.jti) && !!KJUR.jws.JWS.verify(t, e, i.alg))));
}, KJUR.jws.JWS.includedArray = function(t, e) {
    var i = KJUR.jws.JWS.inArray;
    if (null === t) return !1;
    if ("object" !== (void 0 === t ? "undefined" : _typeof(t))) return !1;
    if ("number" != typeof t.length) return !1;
    for (var n = 0; n < t.length; n++) if (!i(t[n], e)) return !1;
    return !0;
}, KJUR.jws.JWS.inArray = function(t, e) {
    if (null === e) return !1;
    if ("object" !== (void 0 === e ? "undefined" : _typeof(e))) return !1;
    if ("number" != typeof e.length) return !1;
    for (var i = 0; i < e.length; i++) if (e[i] == t) return !0;
    return !1;
}, KJUR.jws.JWS.jwsalg2sigalg = {
    HS256: "HmacSHA256",
    HS384: "HmacSHA384",
    HS512: "HmacSHA512",
    RS256: "SHA256withRSA",
    RS384: "SHA384withRSA",
    RS512: "SHA512withRSA",
    ES256: "SHA256withECDSA",
    ES384: "SHA384withECDSA",
    PS256: "SHA256withRSAandMGF1",
    PS384: "SHA384withRSAandMGF1",
    PS512: "SHA512withRSAandMGF1",
    none: "none"
}, KJUR.jws.JWS.isSafeJSONString = function(t, e, i) {
    var n = null;
    try {
        return n = jsonParse(t), "object" !== (void 0 === n ? "undefined" : _typeof(n)) ? 0 : n.constructor === Array ? 0 : (e && (e[i] = n), 
        1);
    } catch (t) {
        return 0;
    }
}, KJUR.jws.JWS.readSafeJSONString = function(t) {
    var e = null;
    try {
        return e = jsonParse(t), "object" !== (void 0 === e ? "undefined" : _typeof(e)) ? null : e.constructor === Array ? null : e;
    } catch (t) {
        return null;
    }
}, KJUR.jws.JWS.getEncodedSignatureValueFromJWS = function(t) {
    var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
    if (null == e) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
    return e[1];
}, KJUR.jws.JWS.getJWKthumbprint = function(t) {
    if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty) throw "unsupported algorithm for JWK Thumprint";
    var e = "{";
    if ("RSA" === t.kty) {
        if ("string" != typeof t.n || "string" != typeof t.e) throw "wrong n and e value for RSA key";
        e += '"e":"' + t.e + '",', e += '"kty":"' + t.kty + '",', e += '"n":"' + t.n + '"}';
    } else if ("EC" === t.kty) {
        if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y) throw "wrong crv, x and y value for EC key";
        e += '"crv":"' + t.crv + '",', e += '"kty":"' + t.kty + '",', e += '"x":"' + t.x + '",', 
        e += '"y":"' + t.y + '"}';
    } else if ("oct" === t.kty) {
        if ("string" != typeof t.k) throw "wrong k value for oct(symmetric) key";
        e += '"kty":"' + t.kty + '",', e += '"k":"' + t.k + '"}';
    }
    var i = rstrtohex(e);
    return hextob64u(KJUR.crypto.Util.hashHex(i, "sha256"));
}, KJUR.jws.IntDate = {}, KJUR.jws.IntDate.get = function(t) {
    if ("now" == t) return KJUR.jws.IntDate.getNow();
    if ("now + 1hour" == t) return KJUR.jws.IntDate.getNow() + 3600;
    if ("now + 1day" == t) return KJUR.jws.IntDate.getNow() + 86400;
    if ("now + 1month" == t) return KJUR.jws.IntDate.getNow() + 2592e3;
    if ("now + 1year" == t) return KJUR.jws.IntDate.getNow() + 31536e3;
    if (t.match(/Z$/)) return KJUR.jws.IntDate.getZulu(t);
    if (t.match(/^[0-9]+$/)) return parseInt(t);
    throw "unsupported format: " + t;
}, KJUR.jws.IntDate.getZulu = function(t) {
    var e = t.match(/(\d+)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/);
    if (e) {
        var i = e[1], n = parseInt(i);
        if (4 == i.length) ; else {
            if (2 != i.length) throw "malformed year string";
            if (n >= 50 && n < 100) n = 1900 + n; else {
                if (!(n >= 0 && n < 50)) throw "malformed year string for UTCTime";
                n = 2e3 + n;
            }
        }
        var r = parseInt(e[2]) - 1, s = parseInt(e[3]), a = parseInt(e[4]), o = parseInt(e[5]), h = parseInt(e[6]);
        return ~~(new Date(Date.UTC(n, r, s, a, o, h)) / 1e3);
    }
    throw "unsupported format: " + t;
}, KJUR.jws.IntDate.getNow = function() {
    return ~~(new Date() / 1e3);
}, KJUR.jws.IntDate.intDate2UTCString = function(t) {
    return new Date(1e3 * t).toUTCString();
}, KJUR.jws.IntDate.intDate2Zulu = function(t) {
    var e = new Date(1e3 * t);
    return ("0000" + e.getUTCFullYear()).slice(-4) + ("00" + (e.getUTCMonth() + 1)).slice(-2) + ("00" + e.getUTCDate()).slice(-2) + ("00" + e.getUTCHours()).slice(-2) + ("00" + e.getUTCMinutes()).slice(-2) + ("00" + e.getUTCSeconds()).slice(-2) + "Z";
}, void 0 !== KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.jws && KJUR.jws || (KJUR.jws = {}), 
KJUR.jws.JWSJS = function() {
    var t = KJUR.jws.JWS, e = KJUR.jws.JWS;
    this.aHeader = [], this.sPayload = "", this.aSignature = [], this.init = function() {
        this.aHeader = [], this.sPayload = void 0, this.aSignature = [];
    }, this.initWithJWS = function(t) {
        this.init();
        var e = t.split(".");
        if (3 != e.length) throw "malformed input JWS";
        this.aHeader.push(e[0]), this.sPayload = e[1], this.aSignature.push(e[2]);
    }, this.addSignature = function(t, e, i, n) {
        if (void 0 === this.sPayload || null === this.sPayload) throw "there's no JSON-JS signature to add.";
        var r = this.aHeader.length;
        if (this.aHeader.length != this.aSignature.length) throw "aHeader.length != aSignature.length";
        try {
            var s = KJUR.jws.JWS.sign(t, e, this.sPayload, i, n), a = s.split(".");
            a[0], a[2];
            this.aHeader.push(a[0]), this.aSignature.push(a[2]);
        } catch (t) {
            throw this.aHeader.length > r && this.aHeader.pop(), this.aSignature.length > r && this.aSignature.pop(), 
            "addSignature failed: " + t;
        }
    }, this.addSignatureByHeaderKey = function(t, e) {
        var i = b64utoutf8(this.sPayload), n = new KJUR.jws.JWS();
        n.generateJWSByP1PrvKey(t, i, e);
        this.aHeader.push(n.parsedJWS.headB64U), this.aSignature.push(n.parsedJWS.sigvalB64U);
    }, this.addSignatureByHeaderPayloadKey = function(t, e, i) {
        var n = new KJUR.jws.JWS();
        n.generateJWSByP1PrvKey(t, e, i);
        this.aHeader.push(n.parsedJWS.headB64U), this.sPayload = n.parsedJWS.payloadB64U, 
        this.aSignature.push(n.parsedJWS.sigvalB64U);
    }, this.verifyAll = function(t) {
        if (this.aHeader.length !== t.length || this.aSignature.length !== t.length) return !1;
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (2 !== i.length) return !1;
            if (!1 === this.verifyNth(e, i[0], i[1])) return !1;
        }
        return !0;
    }, this.verifyNth = function(t, i, n) {
        if (this.aHeader.length <= t || this.aSignature.length <= t) return !1;
        var r = this.aHeader[t], s = this.aSignature[t], a = r + "." + this.sPayload + "." + s, o = !1;
        try {
            o = e.verify(a, i, n);
        } catch (t) {
            return !1;
        }
        return o;
    }, this.verifyWithCerts = function(t) {
        if (this.aHeader.length != t.length) throw "num headers does not match with num certs";
        if (this.aSignature.length != t.length) throw "num signatures does not match with num certs";
        for (var e = this.sPayload, i = "", n = 0; n < t.length; n++) {
            var r = t[n], s = this.aHeader[n], a = this.aSignature[n], o = s + "." + e + "." + a, h = new KJUR.jws.JWS();
            try {
                1 != h.verifyJWSByPemX509Cert(o, r) && (i += n + 1 + "th signature unmatch. ");
            } catch (t) {
                i += n + 1 + "th signature fail(" + t + "). ";
            }
        }
        if ("" == i) return 1;
        throw i;
    }, this.readJWSJS = function(e) {
        if ("string" == typeof e) {
            var i = t.readSafeJSONString(e);
            if (null == i) throw "argument is not safe JSON object string";
            this.aHeader = i.headers, this.sPayload = i.payload, this.aSignature = i.signatures;
        } else try {
            if (!(e.headers.length > 0)) throw "malformed header";
            if (this.aHeader = e.headers, "string" != typeof e.payload) throw "malformed signatures";
            if (this.sPayload = e.payload, !(e.signatures.length > 0)) throw "malformed signatures";
            this.signatures = e.signatures;
        } catch (t) {
            throw "malformed JWS-JS JSON object: " + t;
        }
    }, this.getJSON = function() {
        return {
            headers: this.aHeader,
            payload: this.sPayload,
            signatures: this.aSignature
        };
    }, this.isEmpty = function() {
        return 0 == this.aHeader.length ? 1 : 0;
    };
}, module.exports = {
    RSAKey: RSAKey,
    KEYUTIL: KEYUTIL,
    hex2b64: hex2b64,
    b64tohex: b64tohex
};