function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

function t(e, t, i) {
    var r = e[t];
    e[t] = function(e) {
        i && i.call(this, e, n({}, t, !0)), r && r.call(this, e);
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = e(require("A29700E4480303CFC4F168E31281F6C0.js")), r = e(require("0E446C24480303CF682204236A41F6C0.js")), u = [ "linked", "linkChanged", "unlinked" ], o = [ "observer" ], l = Behavior({
    lifetimes: {
        created: function() {
            this._debounce = null;
        }
    },
    definitionFilter: function(e) {
        var n = e.relations;
        if (!(0, i.default)(n)) {
            for (var l in n) !function(e) {
                var i = n[e];
                u.forEach(function(e) {
                    return t(i, e, i.observer);
                }), o.forEach(function(e) {
                    return delete i[e];
                });
            }(l);
        }
        Object.assign(e.methods = e.methods || {}, {
            getRelationsName: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : [ "parent", "child", "ancestor", "descendant" ];
                return Object.keys(n || {}).map(function(e) {
                    return n[e] && t.includes(n[e].type) ? e : null;
                }).filter(function(e) {
                    return !!e;
                });
            },
            debounce: function(e, n, t) {
                var i = 1 < arguments.length && void 0 !== n ? n : 0, u = 2 < arguments.length && void 0 !== t && t;
                return (this._debounce = this._debounce || (0, r.default)(e.bind(this), i, u)).call(this);
            }
        });
    }
});

exports.default = l;