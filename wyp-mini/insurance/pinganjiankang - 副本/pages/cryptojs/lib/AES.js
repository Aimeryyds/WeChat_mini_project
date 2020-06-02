!function() {
    for (var r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, o = r.util, t = r.charenc.UTF8, f = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], s = [], i = 0; i < 256; i++) s[f[i]] = i;
    var n = [], e = [], c = [], p = [], u = [], h = [];
    function a(r, o) {
        for (var t = 0, f = 0; f < 8; f++) {
            1 & o && (t ^= r);
            var s = 128 & r;
            r = r << 1 & 255, s && (r ^= 27), o >>>= 1;
        }
        return t;
    }
    for (i = 0; i < 256; i++) n[i] = a(i, 2), e[i] = a(i, 3), c[i] = a(i, 9), p[i] = a(i, 11), 
    u[i] = a(i, 13), h[i] = a(i, 14);
    var v, y, _, b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], l = [ [], [], [], [] ], d = r.AES = {
        encrypt: function(f, s, i) {
            var n = (i = i || {}).mode || new r.mode.OFB();
            n.fixOptions && n.fixOptions(i);
            var e = f.constructor == String ? t.stringToBytes(f) : f, c = i.iv || o.randomBytes(4 * d._blocksize), p = s.constructor == String ? r.PBKDF2(s, c, 32, {
                asBytes: !0
            }) : s;
            return d._init(p), n.encrypt(d, e, c), e = i.iv ? e : c.concat(e), i && i.asBytes ? e : o.bytesToBase64(e);
        },
        decrypt: function(f, s, i) {
            var n = (i = i || {}).mode || new r.mode.OFB();
            n.fixOptions && n.fixOptions(i);
            var e = f.constructor == String ? o.base64ToBytes(f) : f, c = i.iv || e.splice(0, 4 * d._blocksize), p = s.constructor == String ? r.PBKDF2(s, c, 32, {
                asBytes: !0
            }) : s;
            return d._init(p), n.decrypt(d, e, c), i && i.asBytes ? e : t.bytesToString(e);
        },
        _blocksize: 4,
        _encryptblock: function(r, o) {
            for (var t = 0; t < d._blocksize; t++) for (var s = 0; s < 4; s++) l[t][s] = r[o + 4 * s + t];
            for (t = 0; t < 4; t++) for (s = 0; s < 4; s++) l[t][s] ^= _[s][t];
            for (var i = 1; i < y; i++) {
                for (t = 0; t < 4; t++) for (s = 0; s < 4; s++) l[t][s] = f[l[t][s]];
                l[1].push(l[1].shift()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].unshift(l[3].pop());
                for (s = 0; s < 4; s++) {
                    var c = l[0][s], p = l[1][s], u = l[2][s], h = l[3][s];
                    l[0][s] = n[c] ^ e[p] ^ u ^ h, l[1][s] = c ^ n[p] ^ e[u] ^ h, l[2][s] = c ^ p ^ n[u] ^ e[h], 
                    l[3][s] = e[c] ^ p ^ u ^ n[h];
                }
                for (t = 0; t < 4; t++) for (s = 0; s < 4; s++) l[t][s] ^= _[4 * i + s][t];
            }
            for (t = 0; t < 4; t++) for (s = 0; s < 4; s++) l[t][s] = f[l[t][s]];
            l[1].push(l[1].shift()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].unshift(l[3].pop());
            for (t = 0; t < 4; t++) for (s = 0; s < 4; s++) l[t][s] ^= _[4 * y + s][t];
            for (t = 0; t < d._blocksize; t++) for (s = 0; s < 4; s++) r[o + 4 * s + t] = l[t][s];
        },
        _decryptblock: function(r, o) {
            for (var t = 0; t < d._blocksize; t++) for (var f = 0; f < 4; f++) l[t][f] = r[o + 4 * f + t];
            for (t = 0; t < 4; t++) for (f = 0; f < 4; f++) l[t][f] ^= _[4 * y + f][t];
            for (var i = 1; i < y; i++) {
                l[1].unshift(l[1].pop()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].push(l[3].shift());
                for (t = 0; t < 4; t++) for (f = 0; f < 4; f++) l[t][f] = s[l[t][f]];
                for (t = 0; t < 4; t++) for (f = 0; f < 4; f++) l[t][f] ^= _[4 * (y - i) + f][t];
                for (f = 0; f < 4; f++) {
                    var n = l[0][f], e = l[1][f], a = l[2][f], v = l[3][f];
                    l[0][f] = h[n] ^ p[e] ^ u[a] ^ c[v], l[1][f] = c[n] ^ h[e] ^ p[a] ^ u[v], l[2][f] = u[n] ^ c[e] ^ h[a] ^ p[v], 
                    l[3][f] = p[n] ^ u[e] ^ c[a] ^ h[v];
                }
            }
            l[1].unshift(l[1].pop()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].push(l[3].shift());
            for (t = 0; t < 4; t++) for (f = 0; f < 4; f++) l[t][f] = s[l[t][f]];
            for (t = 0; t < 4; t++) for (f = 0; f < 4; f++) l[t][f] ^= _[f][t];
            for (t = 0; t < d._blocksize; t++) for (f = 0; f < 4; f++) r[o + 4 * f + t] = l[t][f];
        },
        _init: function(r) {
            v = r.length / 4, y = v + 6, d._keyexpansion(r);
        },
        _keyexpansion: function(r) {
            _ = [];
            for (var o = 0; o < v; o++) _[o] = [ r[4 * o], r[4 * o + 1], r[4 * o + 2], r[4 * o + 3] ];
            for (o = v; o < d._blocksize * (y + 1); o++) {
                var t = [ _[o - 1][0], _[o - 1][1], _[o - 1][2], _[o - 1][3] ];
                o % v == 0 ? (t.push(t.shift()), t[0] = f[t[0]], t[1] = f[t[1]], t[2] = f[t[2]], 
                t[3] = f[t[3]], t[0] ^= b[o / v]) : v > 6 && o % v == 4 && (t[0] = f[t[0]], t[1] = f[t[1]], 
                t[2] = f[t[2]], t[3] = f[t[3]]), _[o] = [ _[o - v][0] ^ t[0], _[o - v][1] ^ t[1], _[o - v][2] ^ t[2], _[o - v][3] ^ t[3] ];
            }
        }
    };
}();