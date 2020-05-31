function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), n = "http://10.102.16.66:8083/jfire/client/clientRequest.do";

module.exports = function() {
    function i() {
        t(this, i), this.data = {}, this.properties = {}, this.handlers = {}, this.testUrl = n;
    }
    return e(i, [ {
        key: "init",
        value: function(t) {
            if (t.methods) t.methods = Object.assign(t.methods, this.handlers); else for (var e in this.handlers) t[e] = this.handlers[e];
            t.setData && (this.setData = t.setData.bind(t), this.getData = function() {
                return t.data;
            });
        }
    } ]), i;
}();