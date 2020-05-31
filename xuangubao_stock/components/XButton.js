(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/XButton" ], {
    "61d5": function(n, t, e) {
        var o = e("ca4b");
        e.n(o).a;
    },
    "8b671": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "XButton",
            props: {
                size: {
                    type: String,
                    default: "large"
                },
                type: {
                    type: String,
                    default: "primary"
                },
                href: {
                    type: String
                },
                plain: {
                    type: Boolean,
                    default: !1
                },
                full: Boolean,
                color: String
            },
            methods: {
                onClick: function() {
                    this.href || this.$emit("click");
                }
            }
        };
        t.default = o;
    },
    a50e3: function(n, t, e) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        e.d(t, "a", function() {
            return o;
        }), e.d(t, "b", function() {
            return a;
        });
    },
    ca4b: function(n, t, e) {},
    cef1: function(n, t, e) {
        e.r(t);
        var o = e("a50e3"), a = e("e302");
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        e("61d5");
        var u = e("2877"), r = Object(u.a)(a.default, o.a, o.b, !1, null, "49020ed8", null);
        t.default = r.exports;
    },
    e302: function(n, t, e) {
        e.r(t);
        var o = e("8b671"), a = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/XButton-create-component", {
    "components/XButton-create-component": function(n, t, e) {
        e("543d").createComponent(e("cef1"));
    }
}, [ [ "components/XButton-create-component" ] ] ]);