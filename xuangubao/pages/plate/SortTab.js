(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/SortTab" ], {
    "736b": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                label: {
                    type: String
                },
                sortRule: {
                    type: Object
                },
                targetProp: {
                    type: String
                },
                hideSort: {
                    type: Boolean,
                    default: !1
                },
                customStyle: String
            },
            computed: {
                isSorting: function() {
                    return "default" !== this.sortRule.mode && this.sortRule.targetProp === this.targetProp;
                }
            },
            methods: {
                startSort: function() {
                    this.$emit("sort", this.targetProp);
                }
            }
        };
        e.default = o;
    },
    a031: function(t, e, n) {
        n.r(e);
        var o = n("736b"), a = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = a.a;
    },
    ab46: function(t, e, n) {
        n.r(e);
        var o = n("b579"), a = n("a031");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("c5c5");
        var u = n("2877"), c = Object(u.a)(a.default, o.a, o.b, !1, null, "5c358b28", null);
        e.default = c.exports;
    },
    b579: function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return a;
        });
    },
    c5c5: function(t, e, n) {
        var o = n("e574");
        n.n(o).a;
    },
    e574: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/plate/SortTab-create-component", {
    "pages/plate/SortTab-create-component": function(t, e, n) {
        n("543d").createComponent(n("ab46"));
    }
}, [ [ "pages/plate/SortTab-create-component" ] ] ]);