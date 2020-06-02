Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
    ma: function(e) {
        var r = e.index, t = e.period, a = e.data, d = e.field;
        if (!(r + t > a.length)) {
            for (var i = 0, n = r; n < a.length && n < r + t; ) i += a[n++][d] - 0;
            var o = i / t;
            return o;
        }
    }
};

exports.default = e;