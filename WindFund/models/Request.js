function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}();

module.exports = function() {
    function n(t) {
        e(this, n), this.app = getApp(), this.testUrl = "http://10.102.16.66:8083/jfire/client/clientRequest.do", 
        this.isTestModel = t;
    }
    return t(n, [ {
        key: "getData",
        value: function(e) {
            var t = e.cmdcode, n = e.params, r = e.success, i = e.error, o = e.loadtype, a = void 0 === o || o, s = e.loadmsg, c = void 0 === s ? "" : s, u = e.isrelogin, l = void 0 !== u && u;
            this.app.getData(t, n, r, i, a, c, l);
        }
    } ]), n;
}();