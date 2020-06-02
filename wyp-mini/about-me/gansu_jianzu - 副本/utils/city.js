Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z" ];

exports.default = {
    searchLetter: t,
    cityList: function(e) {
        for (var r = [], i = 0; i < t.length; i++) {
            var a = t[i], n = [], s = {};
            s.initial = a;
            for (var o = 0; o < e.length; o++) a == e[o].initial && n.push(e[o]);
            s.cityInfo = n, r.push(s);
        }
        return r;
    }
};