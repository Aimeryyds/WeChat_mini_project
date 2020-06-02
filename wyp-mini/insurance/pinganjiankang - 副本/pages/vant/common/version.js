Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.canIUseModel = function() {
    return function(e, r) {
        e = e.split("."), r = r.split(".");
        var t = Math.max(e.length, r.length);
        for (;e.length < t; ) e.push("0");
        for (;r.length < t; ) r.push("0");
        for (var n = 0; n < t; n++) {
            var s = parseInt(e[n], 10), u = parseInt(r[n], 10);
            if (s > u) return 1;
            if (s < u) return -1;
        }
        return 0;
    }((0, e.getSystemInfoSync)().SDKVersion, "2.9.3") >= 0;
};

var e = require("./utils");