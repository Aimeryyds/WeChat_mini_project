function e(e) {
    return /^[0-9.]+$/.test(e += "") ? 1 * e.split(".").map(function(e) {
        var r = 4 - e.length;
        return Array(r).join("0") + "0" + e;
    }).join("") : 0;
}

exports = module.exports = {
    formatCount: function(e) {
        var r, t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((e = parseInt(e)) < 0 && (e = 0), 0 === e || isNaN(e)) r = ""; else if (e < 1e4) r = e + ""; else if (e < 1e6) {
            var n = "" + Math.round(e / 1e3);
            if ("1000" === n) r = "100万"; else {
                var i = n.slice(-1), o = n.slice(0, -1);
                r = ("0" === i ? o : o + "." + i) + "万";
            }
        } else if (e < 1e8) {
            var s = Math.floor(e / 1e4);
            r = 1e4 === s ? "1亿" : s + "万";
        } else {
            var u = "" + Math.round(e / 1e3 / 1e4), a = u.slice(-1), f = u.slice(0, -1);
            r = ("0" === a ? f : f + "." + a) + "亿";
        }
        return t && !r ? "0" : r;
    },
    formatString: function(e) {
        return e && (e = e.replace(/(^\s+)|(\s+$)/g, "")), e;
    },
    versionToNumber: e,
    versionGte: function(r, t) {
        return e(r) >= e(t);
    },
    versionGt: function(r, t) {
        return e(r) > e(t);
    },
    versionLt: function(r, t) {
        return e(r) < e(t);
    },
    versionLte: function(r, t) {
        return e(r) <= e(t);
    },
    toFixed3: function(e) {
        var r = (e = e.toFixed(3)).split(".");
        return r[1] && "000" !== r[1] || (r[1] = "001"), parseFloat(r[0] + "." + r[1]);
    }
};