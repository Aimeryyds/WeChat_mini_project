for (var E = {
    glog: function(r) {
        if (r < 1) throw new Error("glog(" + r + ")");
        return E.LOG_TABLE[r];
    },
    gexp: function(r) {
        for (;r < 0; ) r += 255;
        for (;r >= 256; ) r -= 255;
        return E.EXP_TABLE[r];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
}, r = 0; r < 8; r++) E.EXP_TABLE[r] = 1 << r;

for (r = 8; r < 256; r++) E.EXP_TABLE[r] = E.EXP_TABLE[r - 4] ^ E.EXP_TABLE[r - 5] ^ E.EXP_TABLE[r - 6] ^ E.EXP_TABLE[r - 8];

for (r = 0; r < 255; r++) E.LOG_TABLE[E.EXP_TABLE[r]] = r;

module.exports = E;