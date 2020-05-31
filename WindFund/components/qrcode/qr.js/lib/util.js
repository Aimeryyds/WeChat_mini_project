var r = require("./mode"), e = require("./Polynomial"), t = require("./math"), a = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
}, i = {
    PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(r) {
        for (var e = r << 10; i.getBCHDigit(e) - i.getBCHDigit(i.G15) >= 0; ) e ^= i.G15 << i.getBCHDigit(e) - i.getBCHDigit(i.G15);
        return (r << 10 | e) ^ i.G15_MASK;
    },
    getBCHTypeNumber: function(r) {
        for (var e = r << 12; i.getBCHDigit(e) - i.getBCHDigit(i.G18) >= 0; ) e ^= i.G18 << i.getBCHDigit(e) - i.getBCHDigit(i.G18);
        return r << 12 | e;
    },
    getBCHDigit: function(r) {
        for (var e = 0; 0 != r; ) e++, r >>>= 1;
        return e;
    },
    getPatternPosition: function(r) {
        return i.PATTERN_POSITION_TABLE[r - 1];
    },
    getMask: function(r, e, t) {
        switch (r) {
          case a.PATTERN000:
            return (e + t) % 2 == 0;

          case a.PATTERN001:
            return e % 2 == 0;

          case a.PATTERN010:
            return t % 3 == 0;

          case a.PATTERN011:
            return (e + t) % 3 == 0;

          case a.PATTERN100:
            return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0;

          case a.PATTERN101:
            return e * t % 2 + e * t % 3 == 0;

          case a.PATTERN110:
            return (e * t % 2 + e * t % 3) % 2 == 0;

          case a.PATTERN111:
            return (e * t % 3 + (e + t) % 2) % 2 == 0;

          default:
            throw new Error("bad maskPattern:" + r);
        }
    },
    getErrorCorrectPolynomial: function(r) {
        for (var a = new e([ 1 ], 0), i = 0; i < r; i++) a = a.multiply(new e([ 1, t.gexp(i) ], 0));
        return a;
    },
    getLengthInBits: function(e, t) {
        if (1 <= t && t < 10) switch (e) {
          case r.MODE_NUMBER:
            return 10;

          case r.MODE_ALPHA_NUM:
            return 9;

          case r.MODE_8BIT_BYTE:
          case r.MODE_KANJI:
            return 8;

          default:
            throw new Error("mode:" + e);
        } else if (t < 27) switch (e) {
          case r.MODE_NUMBER:
            return 12;

          case r.MODE_ALPHA_NUM:
            return 11;

          case r.MODE_8BIT_BYTE:
            return 16;

          case r.MODE_KANJI:
            return 10;

          default:
            throw new Error("mode:" + e);
        } else {
            if (!(t < 41)) throw new Error("type:" + t);
            switch (e) {
              case r.MODE_NUMBER:
                return 14;

              case r.MODE_ALPHA_NUM:
                return 13;

              case r.MODE_8BIT_BYTE:
                return 16;

              case r.MODE_KANJI:
                return 12;

              default:
                throw new Error("mode:" + e);
            }
        }
    },
    getLostPoint: function(r) {
        for (var e = r.getModuleCount(), t = 0, a = 0; a < e; a++) for (E = 0; E < e; E++) {
            for (var i = 0, n = r.isDark(a, E), o = -1; o <= 1; o++) if (!(a + o < 0 || e <= a + o)) for (var s = -1; s <= 1; s++) E + s < 0 || e <= E + s || 0 == o && 0 == s || n == r.isDark(a + o, E + s) && i++;
            i > 5 && (t += 3 + i - 5);
        }
        for (a = 0; a < e - 1; a++) for (E = 0; E < e - 1; E++) {
            var T = 0;
            r.isDark(a, E) && T++, r.isDark(a + 1, E) && T++, r.isDark(a, E + 1) && T++, r.isDark(a + 1, E + 1) && T++, 
            0 != T && 4 != T || (t += 3);
        }
        for (a = 0; a < e; a++) for (E = 0; E < e - 6; E++) r.isDark(a, E) && !r.isDark(a, E + 1) && r.isDark(a, E + 2) && r.isDark(a, E + 3) && r.isDark(a, E + 4) && !r.isDark(a, E + 5) && r.isDark(a, E + 6) && (t += 40);
        for (E = 0; E < e; E++) for (a = 0; a < e - 6; a++) r.isDark(a, E) && !r.isDark(a + 1, E) && r.isDark(a + 2, E) && r.isDark(a + 3, E) && r.isDark(a + 4, E) && !r.isDark(a + 5, E) && r.isDark(a + 6, E) && (t += 40);
        for (var u = 0, E = 0; E < e; E++) for (a = 0; a < e; a++) r.isDark(a, E) && u++;
        return t += 10 * (Math.abs(100 * u / e / e - 50) / 5);
    }
};

module.exports = i;