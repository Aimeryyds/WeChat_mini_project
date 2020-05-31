function t(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, 
    this.dataCache = null, this.dataList = [];
}

var e = require("./8BitByte"), o = require("./RSBlock"), r = require("./BitBuffer"), i = require("./util"), n = require("./Polynomial"), s = t.prototype;

s.addData = function(t) {
    var o = new e(t);
    this.dataList.push(o), this.dataCache = null;
}, s.isDark = function(t, e) {
    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
    return this.modules[t][e];
}, s.getModuleCount = function() {
    return this.moduleCount;
}, s.make = function() {
    if (this.typeNumber < 1) {
        var t = 1;
        for (t = 1; t < 40; t++) {
            for (var e = o.getRSBlocks(t, this.errorCorrectLevel), n = new r(), s = 0, u = 0; u < e.length; u++) s += e[u].dataCount;
            for (u = 0; u < this.dataList.length; u++) {
                var h = this.dataList[u];
                n.put(h.mode, 4), n.put(h.getLength(), i.getLengthInBits(h.mode, t)), h.write(n);
            }
            if (n.getLengthInBits() <= 8 * s) break;
        }
        this.typeNumber = t;
    }
    this.makeImpl(!1, this.getBestMaskPattern());
}, s.makeImpl = function(e, o) {
    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
    for (var r = 0; r < this.moduleCount; r++) {
        this.modules[r] = new Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) this.modules[r][i] = null;
    }
    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
    this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
    this.setupTimingPattern(), this.setupTypeInfo(e, o), this.typeNumber >= 7 && this.setupTypeNumber(e), 
    null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), 
    this.mapData(this.dataCache, o);
}, s.setupPositionProbePattern = function(t, e) {
    for (var o = -1; o <= 7; o++) if (!(t + o <= -1 || this.moduleCount <= t + o)) for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (this.modules[t + o][e + r] = 0 <= o && o <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == o || 6 == o) || 2 <= o && o <= 4 && 2 <= r && r <= 4);
}, s.getBestMaskPattern = function() {
    for (var t = 0, e = 0, o = 0; o < 8; o++) {
        this.makeImpl(!0, o);
        var r = i.getLostPoint(this);
        (0 == o || t > r) && (t = r, e = o);
    }
    return e;
}, s.createMovieClip = function(t, e, o) {
    var r = t.createEmptyMovieClip(e, o);
    this.make();
    for (var i = 0; i < this.modules.length; i++) for (var n = 1 * i, s = 0; s < this.modules[i].length; s++) {
        var u = 1 * s;
        this.modules[i][s] && (r.beginFill(0, 100), r.moveTo(u, n), r.lineTo(u + 1, n), 
        r.lineTo(u + 1, n + 1), r.lineTo(u, n + 1), r.endFill());
    }
    return r;
}, s.setupTimingPattern = function() {
    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
}, s.setupPositionAdjustPattern = function() {
    for (var t = i.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var o = 0; o < t.length; o++) {
        var r = t[e], n = t[o];
        if (null == this.modules[r][n]) for (var s = -2; s <= 2; s++) for (var u = -2; u <= 2; u++) this.modules[r + s][n + u] = -2 == s || 2 == s || -2 == u || 2 == u || 0 == s && 0 == u;
    }
}, s.setupTypeNumber = function(t) {
    for (var e = i.getBCHTypeNumber(this.typeNumber), o = 0; o < 18; o++) {
        r = !t && 1 == (e >> o & 1);
        this.modules[Math.floor(o / 3)][o % 3 + this.moduleCount - 8 - 3] = r;
    }
    for (o = 0; o < 18; o++) {
        var r = !t && 1 == (e >> o & 1);
        this.modules[o % 3 + this.moduleCount - 8 - 3][Math.floor(o / 3)] = r;
    }
}, s.setupTypeInfo = function(t, e) {
    for (var o = this.errorCorrectLevel << 3 | e, r = i.getBCHTypeInfo(o), n = 0; n < 15; n++) {
        s = !t && 1 == (r >> n & 1);
        n < 6 ? this.modules[n][8] = s : n < 8 ? this.modules[n + 1][8] = s : this.modules[this.moduleCount - 15 + n][8] = s;
    }
    for (n = 0; n < 15; n++) {
        var s = !t && 1 == (r >> n & 1);
        n < 8 ? this.modules[8][this.moduleCount - n - 1] = s : n < 9 ? this.modules[8][15 - n - 1 + 1] = s : this.modules[8][15 - n - 1] = s;
    }
    this.modules[this.moduleCount - 8][8] = !t;
}, s.mapData = function(t, e) {
    for (var o = -1, r = this.moduleCount - 1, n = 7, s = 0, u = this.moduleCount - 1; u > 0; u -= 2) for (6 == u && u--; ;) {
        for (var h = 0; h < 2; h++) if (null == this.modules[r][u - h]) {
            var a = !1;
            s < t.length && (a = 1 == (t[s] >>> n & 1)), i.getMask(e, r, u - h) && (a = !a), 
            this.modules[r][u - h] = a, -1 == --n && (s++, n = 7);
        }
        if ((r += o) < 0 || this.moduleCount <= r) {
            r -= o, o = -o;
            break;
        }
    }
}, t.PAD0 = 236, t.PAD1 = 17, t.createData = function(e, n, s) {
    for (var u = o.getRSBlocks(e, n), h = new r(), a = 0; a < s.length; a++) {
        var l = s[a];
        h.put(l.mode, 4), h.put(l.getLength(), i.getLengthInBits(l.mode, e)), l.write(h);
    }
    for (var m = 0, a = 0; a < u.length; a++) m += u[a].dataCount;
    if (h.getLengthInBits() > 8 * m) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * m + ")");
    for (h.getLengthInBits() + 4 <= 8 * m && h.put(0, 4); h.getLengthInBits() % 8 != 0; ) h.putBit(!1);
    for (;;) {
        if (h.getLengthInBits() >= 8 * m) break;
        if (h.put(t.PAD0, 8), h.getLengthInBits() >= 8 * m) break;
        h.put(t.PAD1, 8);
    }
    return t.createBytes(h, u);
}, t.createBytes = function(t, e) {
    for (var o = 0, r = 0, s = 0, u = new Array(e.length), h = new Array(e.length), a = 0; a < e.length; a++) {
        var l = e[a].dataCount, m = e[a].totalCount - l;
        r = Math.max(r, l), s = Math.max(s, m), u[a] = new Array(l);
        for (v = 0; v < u[a].length; v++) u[a][v] = 255 & t.buffer[v + o];
        o += l;
        var d = i.getErrorCorrectPolynomial(m), f = new n(u[a], d.getLength() - 1).mod(d);
        h[a] = new Array(d.getLength() - 1);
        for (v = 0; v < h[a].length; v++) {
            var g = v + f.getLength() - h[a].length;
            h[a][v] = g >= 0 ? f.get(g) : 0;
        }
    }
    for (var p = 0, v = 0; v < e.length; v++) p += e[v].totalCount;
    for (var C = new Array(p), c = 0, v = 0; v < r; v++) for (a = 0; a < e.length; a++) v < u[a].length && (C[c++] = u[a][v]);
    for (v = 0; v < s; v++) for (a = 0; a < e.length; a++) v < h[a].length && (C[c++] = h[a][v]);
    return C;
}, module.exports = t;