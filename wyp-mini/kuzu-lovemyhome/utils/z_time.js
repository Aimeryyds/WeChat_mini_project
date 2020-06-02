function e(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

module.exports = {
    formatTime: function(t, u) {
        var r = [ "Y", "M", "D", "h", "m", "s" ], s = [], n = new Date(1e3 * t);
        s.push(n.getFullYear()), s.push(e(n.getMonth() + 1)), s.push(e(n.getDate())), s.push(e(n.getHours())), 
        s.push(e(n.getMinutes())), s.push(e(n.getSeconds()));
        for (var o in s) u = u.replace(r[o], s[o]);
        return u;
    }
};