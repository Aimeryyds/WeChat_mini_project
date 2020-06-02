var t = [ 0, 4489, 8978, 12955, 17956, 22445, 25910, 29887, 35912, 40385, 44890, 48851, 51820, 56293, 59774, 63735, 4225, 264, 13203, 8730, 22181, 18220, 30135, 25662, 40137, 36160, 49115, 44626, 56045, 52068, 63999, 59510, 8450, 12427, 528, 5017, 26406, 30383, 17460, 21949, 44362, 48323, 36440, 40913, 60270, 64231, 51324, 55797, 12675, 8202, 4753, 792, 30631, 26158, 21685, 17724, 48587, 44098, 40665, 36688, 64495, 60006, 55549, 51572, 16900, 21389, 24854, 28831, 1056, 5545, 10034, 14011, 52812, 57285, 60766, 64727, 34920, 39393, 43898, 47859, 21125, 17164, 29079, 24606, 5281, 1320, 14259, 9786, 57037, 53060, 64991, 60502, 39145, 35168, 48123, 43634, 25350, 29327, 16404, 20893, 9506, 13483, 1584, 6073, 61262, 65223, 52316, 56789, 43370, 47331, 35448, 39921, 29575, 25102, 20629, 16668, 13731, 9258, 5809, 1848, 65487, 60998, 56541, 52564, 47595, 43106, 39673, 35696, 33800, 38273, 42778, 46739, 49708, 54181, 57662, 61623, 2112, 6601, 11090, 15067, 20068, 24557, 28022, 31999, 38025, 34048, 47003, 42514, 53933, 49956, 61887, 57398, 6337, 2376, 15315, 10842, 24293, 20332, 32247, 27774, 42250, 46211, 34328, 38801, 58158, 62119, 49212, 53685, 10562, 14539, 2640, 7129, 28518, 32495, 19572, 24061, 46475, 41986, 38553, 34576, 62383, 57894, 53437, 49460, 14787, 10314, 6865, 2904, 32743, 28270, 23797, 19836, 50700, 55173, 58654, 62615, 32808, 37281, 41786, 45747, 19012, 23501, 26966, 30943, 3168, 7657, 12146, 16123, 54925, 50948, 62879, 58390, 37033, 33056, 46011, 41522, 23237, 19276, 31191, 26718, 7393, 3432, 16371, 11898, 59150, 63111, 50204, 54677, 41258, 45219, 33336, 37809, 27462, 31439, 18516, 23005, 11618, 15595, 3696, 8185, 63375, 58886, 54429, 50452, 45483, 40994, 37561, 33584, 31687, 27214, 22741, 18780, 15843, 11370, 7921, 3960 ], r = [ 53, 65, 50, 66, 51, 67, 54, 68, 57, 69, 56, 70, 55, 52, 49, 48 ];

module.exports = {
    header: function(t, r, n, e) {
        var a = this.getPayLoadLength(t.toString().replace(/\s+/g, "")), o = Array.prototype.map.call(t.split(" "), function(t) {
            return "0x" + t;
        });
        return "aa" + r + "2" + n + e + a + this.getCRC16(o).toLowerCase();
    },
    content: function(t, r) {
        return 0 == t.length ? r : "" + t + r;
    },
    getCRC16: function(r) {
        var n = 65535;
        r.forEach(function(r, e, a) {
            n = n >>> 8 ^ t[255 & (n ^ r)];
        });
        var e = (65535 & ~n).toString(16), a = "0000" + e;
        return a.substr(e.length, a.length);
    },
    getSequenceId: function(t) {
        t > 255 && (t = 0);
        var r = t.toString(16), n = "00" + r;
        return n.substr(r.length, n.length);
    },
    getSecretKeyLength: function(t) {
        var r = (t.length / 2).toString(16), n = "00" + r;
        return n.substr(r.length, n.length);
    },
    getPayLoadLength: function(t) {
        var r = (t.length / 2).toString(16), n = "0000" + r;
        return n.substr(r.length, n.length);
    },
    encrypt: function(t) {
        var n = "";
        if (t = t.toUpperCase()) {
            var e = t.length;
            if (!(e > 16)) {
                for (var a = 0; a < e; a++) for (var o = 0; o < 16; o++) t.charAt(a).charCodeAt() == r[o] && (n += String.fromCharCode(42 + o));
                return n;
            }
        }
    },
    ab2hex: function(t) {
        return Array.prototype.map.call(new Uint8Array(t), function(t) {
            return ("00" + t.toString(16)).slice(-2);
        }).join("");
    },
    strAverage2Arr: function(t, r) {
        for (var n = [], e = 0; e < t.length; e += r) n.push(t.slice(e, e + 2));
        return n;
    },
    addFlagBeforeArr: function(t) {
        return Array.prototype.map.call(t, function(t) {
            return "0x" + t;
        });
    },
    hexStringToArrayBuffer: function(t) {
        return new Uint8Array(t.match(/[\da-f]{2}/gi).map(function(t) {
            return parseInt(t, 16);
        })).buffer;
    }
};