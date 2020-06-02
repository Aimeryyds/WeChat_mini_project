function e(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var t = function() {
    function e(e, t) {
        var r = [], s = !0, i = !1, n = void 0;
        try {
            for (var a, c = e[Symbol.iterator](); !(s = (a = c.next()).done) && (r.push(a.value), 
            !t || r.length !== t); s = !0) ;
        } catch (e) {
            i = !0, n = e;
        } finally {
            try {
                !s && c.return && c.return();
            } finally {
                if (i) throw n;
            }
        }
        return r;
    }
    return function(t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        service: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        hideDialog: function() {
            this.triggerEvent("hidedialog", {
                service: this.data.service
            }, {});
        },
        handleSelectSpec: function(r) {
            var s, i = this, n = r.target.dataset, a = n.specindex, c = n.specvalueindex, u = this.data.service, l = u.specs[a], d = l.values[c];
            if (!d.disabled && !d.selected) {
                u.specs[a].values.forEach(function(t, r) {
                    i.setData(e({}, "service.specs[" + a + "].values[" + r + "].selected", !1));
                }), this.setData((s = {}, e(s, "service.selectedSpec[" + a + "]", l.itemId + ":" + d.itemValueId), 
                e(s, "service.specs[" + a + "].values[" + c + "].selected", !0), s));
                var o = "";
                u.selectedSpec.forEach(function(e) {
                    var r = e.split(":"), s = t(r, 2), i = s[0], n = s[1], a = u.specs.find(function(e) {
                        return e.itemId == i;
                    }).values.find(function(e) {
                        return e.itemValueId == n;
                    }).itemValue;
                    o += a + " ";
                }), this.setData({
                    "service.selectedSpecValue": o
                }), this.triggerEvent("updateSelectedSpecValue", {
                    selectedSpecValue: o
                }, {});
                var v = u.skus.findIndex(function(e) {
                    return i.trimEnd(e.properties, ";") == u.selectedSpec.join(";");
                });
                -1 != v && (u.skus.forEach(function(t, r) {
                    i.setData(e({}, "service.skus[" + r + "].selected", !1));
                }), this.setData({
                    "service.selectedSku": u.skus[v]
                }), this.triggerEvent("updateSelectedSku", {
                    selectedSku: u.skus[v]
                }, {})), u.specs.forEach(function(t, r) {
                    t.values.forEach(function(s, n) {
                        var a, c = Array.from(u.selectedSpec);
                        c.splice(r, 1, t.itemId + ":" + s.itemValueId);
                        var l = u.skus.find(function(e) {
                            return e.propertiesValue == c.join(";");
                        });
                        i.setData((a = {}, e(a, "service.specs[" + r + "].values[" + n + "].disabled", l && l.quantity <= 0 ? 1 : 0), 
                        e(a, "service.num", 1), a));
                    });
                });
            }
        },
        handleAddToCart: function(e) {
            this.triggerEvent("createorder", {
                service: this.data.service
            }, {});
        },
        trimEnd: function(e, t) {
            if (null == t || "" == t) {
                for (var r = /\/s/, s = e.length; r.test(e.charAt(--s)); ) ;
                return e.slice(0, s + 1);
            }
            for (var i = new RegExp(t), n = e.length; i.test(e.charAt(--n)); ) ;
            return e.slice(0, n + 1);
        }
    }
});