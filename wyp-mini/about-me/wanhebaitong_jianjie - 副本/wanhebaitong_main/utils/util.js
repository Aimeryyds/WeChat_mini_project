var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), a = e.getMonth() + 1, r = e.getDate(), o = e.getHours(), i = e.getMinutes(), u = e.getSeconds();
        return [ n, a, r ].map(t).join("/") + " " + [ o, i, u ].map(t).join(":");
    },
    DateDiff: function(t, e) {
        var n, a, r;
        return n = t.split("-"), a = new Date(n[1] + "-" + n[2] + "-" + n[0]), n = e.split("-"), 
        r = new Date(n[1] + "-" + n[2] + "-" + n[0]), parseInt(Math.abs(a - r) / 1e3 / 60 / 60 / 24);
    },
    getDistance: function(t, e, n, a) {
        e = e || 0, n = n || 0, a = a || 0;
        var r = (t = t || 0) * Math.PI / 180, o = n * Math.PI / 180, i = r - o, u = e * Math.PI / 180 - a * Math.PI / 180;
        return 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(i / 2), 2) + Math.cos(r) * Math.cos(o) * Math.pow(Math.sin(u / 2), 2)));
    },
    ormatDate: function(t) {
        function e(t, e) {
            for (var n = "" + t, a = n.length, r = "", o = e; o-- > a; ) r += "0";
            return r + n;
        }
        var n = new Date(1e3 * t);
        return n.getFullYear() + "-" + e(n.getMonth() + 1, 2) + "-" + e(n.getDate(), 2) + " " + e(n.getHours(), 2) + ":" + e(n.getMinutes(), 2) + ":" + e(n.getSeconds(), 2);
    },
    recordTime: function(e) {
        var n = e.getMonth() + 1, a = e.getDate(), r = e.getHours(), o = e.getMinutes();
        return [ n, a ].map(t).join("/") + " " + [ r, o ].map(t).join(":");
    }
};