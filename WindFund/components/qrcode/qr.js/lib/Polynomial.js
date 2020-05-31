function t(t, e) {
    if (void 0 == t.length) throw new Error(t.length + "/" + e);
    for (var g = 0; g < t.length && 0 == t[g]; ) g++;
    this.num = new Array(t.length - g + e);
    for (var n = 0; n < t.length - g; n++) this.num[n] = t[n + g];
}

var e = require("./math");

t.prototype = {
    get: function(t) {
        return this.num[t];
    },
    getLength: function() {
        return this.num.length;
    },
    multiply: function(g) {
        for (var n = new Array(this.getLength() + g.getLength() - 1), r = 0; r < this.getLength(); r++) for (var h = 0; h < g.getLength(); h++) n[r + h] ^= e.gexp(e.glog(this.get(r)) + e.glog(g.get(h)));
        return new t(n, 0);
    },
    mod: function(g) {
        if (this.getLength() - g.getLength() < 0) return this;
        for (var n = e.glog(this.get(0)) - e.glog(g.get(0)), r = new Array(this.getLength()), h = 0; h < this.getLength(); h++) r[h] = this.get(h);
        for (h = 0; h < g.getLength(); h++) r[h] ^= e.gexp(e.glog(g.get(h)) + n);
        return new t(r, 0).mod(g);
    }
}, module.exports = t;