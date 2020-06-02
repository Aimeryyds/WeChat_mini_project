function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(n, t, i) {
        return t && e(n.prototype, t), i && e(n, i), n;
    };
}(), t = require("../../utils/util"), i = (getApp(), Page), a = [ "onLoad", "onUnload" ], o = [ "name", "data", "props", "onLoad", "onUnload", "methods" ], s = function() {
    function o(n) {
        e(this, o), this.origin = n, this.config = {
            data: {}
        }, this.childrens = {}, this.childrensEvents = {};
        var t = this.needs = n.components;
        if (!t) return i(n);
        for (var a in t) {
            var s = t[a] || {}, h = new r(require("../components/" + a + "/index"));
            h.name || h.setName(a), this.setChildProps(h, s), this.pushChild(a, h), this.mergeData(a, h), 
            this.mergeMethods(a, h), this.mergeChildEvents(a, h);
        }
        return this.setChildrens(), this.mergePageEvent(), i(this.config);
    }
    return n(o, [ {
        key: "pushChild",
        value: function(e, n) {
            this.childrens[e] = n;
        }
    }, {
        key: "setChildProps",
        value: function(e, n) {
            for (var i in n) {
                var a = n[i];
                t.isFun(a) && (n[i] = a.bind(e));
            }
            e.setProps(n);
        }
    }, {
        key: "mergeMethods",
        value: function(e, n) {
            for (var t in n.methods) this.config[t] = n.methods[t].bind(n);
        }
    }, {
        key: "mergeData",
        value: function(e, n) {
            var i = this.config, a = this.origin;
            if (t.extend(!0, i, a, n.config), t.extend(n.data, n.props), e in i.data || e in a.data) throw Error('You need rename "' + e + '" in data, because it is the name of Component');
            t.extend(!0, i.data, a.data), i.data[e] = {}, t.extend(!0, i.data[e], n.data);
        }
    }, {
        key: "mergeChildEvents",
        value: function(e, n) {
            var t = this.childrensEvents;
            t[e] = {}, a.forEach(function(i) {
                t[e][i] = n.config[i];
            });
        }
    }, {
        key: "mergePageEvent",
        value: function() {
            var e = this;
            a.forEach(function(n) {
                e.config[n] = function() {
                    for (var t in e.needs) {
                        var i = e.childrens[t];
                        "onLoad" == n && i.setParent(this), e.childrensEvents[t][n].apply(i, arguments);
                    }
                    e.origin[n] && e.origin[n].apply(this, arguments);
                };
            });
        }
    }, {
        key: "setChildrens",
        value: function() {
            this.config.childrens = this.childrens;
        }
    } ]), o;
}(), r = function() {
    function i(n) {
        e(this, i);
        for (var t in n) ~o.join("|").indexOf(t) || (this[t] = n[t]);
        n.onLoad = n.onLoad || noop, n.onUnload = n.onUnload || noop, this.data = n.data || {}, 
        this.config = n, this.methods = n.methods || {}, this.setMethods(n.methods);
    }
    return n(i, [ {
        key: "setData",
        value: function(e) {
            var n = this.name, i = this.parent, a = i.data[n], o = t.extend(!0, a, e), s = {};
            s[n] = o, this.data = o, i.setData(s);
        }
    }, {
        key: "setProps",
        value: function(e) {
            this.props = t.extend(this.props, e);
        }
    }, {
        key: "setName",
        value: function(e) {
            this.name = e;
        }
    }, {
        key: "setParent",
        value: function(e) {
            this.parent = e;
        }
    }, {
        key: "setMethods",
        value: function(e) {
            for (var n in e) this[n] = e[n];
        }
    } ]), i;
}();

Page = function(e) {
    return new s(e);
}, module.exports = {
    originalPage: i,
    Page: Page,
    Component: r
};