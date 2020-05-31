(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Topic/TopicTypeSelector" ], {
    54377: function(e, n, o) {
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        o.d(n, "a", function() {
            return t;
        }), o.d(n, "b", function() {
            return c;
        });
    },
    "7b7a": function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            props: {
                type: {
                    type: Number
                }
            },
            data: function() {
                return {
                    types: [ {
                        id: 0,
                        name: "全部"
                    }, {
                        id: 1,
                        name: "研报"
                    }, {
                        id: 2,
                        name: "利好"
                    } ]
                };
            }
        };
        n.default = t;
    },
    "80cd": function(e, n, o) {
        o.r(n);
        var t = o("54377"), c = o("c17f");
        for (var a in c) "default" !== a && function(e) {
            o.d(n, e, function() {
                return c[e];
            });
        }(a);
        o("a6f9");
        var r = o("2877"), p = Object(r.a)(c.default, t.a, t.b, !1, null, "c4f32826", null);
        n.default = p.exports;
    },
    "9e40": function(e, n, o) {},
    a6f9: function(e, n, o) {
        var t = o("9e40");
        o.n(t).a;
    },
    c17f: function(e, n, o) {
        o.r(n);
        var t = o("7b7a"), c = o.n(t);
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(a);
        n.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Topic/TopicTypeSelector-create-component", {
    "components/Topic/TopicTypeSelector-create-component": function(e, n, o) {
        o("543d").createComponent(o("80cd"));
    }
}, [ [ "components/Topic/TopicTypeSelector-create-component" ] ] ]);