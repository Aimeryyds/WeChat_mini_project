function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), n = function() {
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e(this, n), Object.assign(this, {
            options: t
        }), this.__init();
    }
    return i(n, [ {
        key: "__init",
        value: function() {
            this.page = getCurrentPages()[getCurrentPages().length - 1];
            var t = this.page.setData.bind(this.page), e = function() {
                var t = !1;
                try {
                    var e = wx.getSystemInfoSync().SDKVersion.split(".");
                    t = Number(e[0]) > 1 || Number(e[1]) >= 5;
                } catch (t) {}
                return t;
            };
            this.setData = function() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                    return {};
                }, s = function() {
                    "function" == typeof n && n();
                };
                e() ? t(i, s) : (t(i), setTimeout(s, 0));
            }, this.__initState();
        }
    }, {
        key: "__initState",
        value: function() {
            this.options.data && this.__initData(), this.options.methods && this.__initMethods();
        }
    }, {
        key: "__initData",
        value: function() {
            var e = this.options.scope, i = this.options.data;
            if (this._data = {}, !this.isEmptyObject(i)) for (var n in i) i.hasOwnProperty(n) && ("function" == typeof i[n] ? i[n] = i[n].bind(this) : this._data[n] = i[n]);
            this.page.setData(t({}, "" + e, this._data));
        }
    }, {
        key: "__initMethods",
        value: function() {
            var e = this.options.scope, i = this.options.methods;
            if (!this.isEmptyObject(i)) for (var n in i) i.hasOwnProperty(n) && "function" == typeof i[n] && (this[n] = i[n] = i[n].bind(this), 
            this.page[e + "." + n] = i[n], this.setData(t({}, e + "." + n, e + "." + n)));
        }
    }, {
        key: "getComponentData",
        value: function() {
            var t = this.page.data;
            return (this.options.scope && this.options.scope.split(".")).forEach(function(e, i) {
                t = t[e];
            }), t;
        }
    }, {
        key: "isEmptyObject",
        value: function(t) {
            for (var e in t) return !1;
            return !0;
        }
    }, {
        key: "setVisible",
        value: function() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wux-animate--fade-in";
            this.setData((e = {}, t(e, this.options.scope + ".animateCss", i), t(e, this.options.scope + ".visible", !0), 
            e));
        }
    }, {
        key: "setHidden",
        value: function() {
            var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wux-animate--fade-out", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
            this.setData(t({}, this.options.scope + ".animateCss", i)), setTimeout(function() {
                e.setData(t({}, e.options.scope + ".visible", !1));
            }, n);
        }
    } ]), n;
}();

exports.default = n;