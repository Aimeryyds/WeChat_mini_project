!function(e, t) {
    "object" == typeof exports ? module.exports = exports = t(require("./core.js")) : "function" == typeof define && define.amd ? define([ "./core" ], t) : t(e.CryptoJS);
}(this, function(e) {
    !function() {
        var t = e, i = t.lib, n = i.Base, s = t.enc, o = s.Utf8, r = t.algo;
        r.HMAC = n.extend({
            init: function(e, t) {
                e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));
                var i = e.blockSize, n = 4 * i;
                t.sigBytes > n && (t = e.finalize(t)), t.clamp();
                for (var s = this._oKey = t.clone(), r = this._iKey = t.clone(), a = s.words, f = r.words, c = 0; c < i; c++) a[c] ^= 1549556828, 
                f[c] ^= 909522486;
                s.sigBytes = r.sigBytes = n, this.reset();
            },
            reset: function() {
                var e = this._hasher;
                e.reset(), e.update(this._iKey);
            },
            update: function(e) {
                return this._hasher.update(e), this;
            },
            finalize: function(e) {
                var t = this._hasher, i = t.finalize(e);
                return t.reset(), t.finalize(this._oKey.clone().concat(i));
            }
        });
    }();
});