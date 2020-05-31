(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Topic/TopicHeader" ], {
    "98a4": function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = o("ed08"), t = o("fd0f"), a = {
            name: "TopicHeader",
            components: {
                TopicInfo: function() {
                    return Promise.all([ o.e("common/vendor"), o.e("components/Topic/TopicHeader/TopicInfo") ]).then(o.bind(null, "438b"));
                },
                TopicBkj: function() {
                    return o.e("components/Topic/TopicHeader/TopicBkj").then(o.bind(null, "7126"));
                }
            },
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(o("b216")).default ],
            props: {
                subject: {
                    type: Object
                }
            },
            methods: {
                clickPlate: function() {
                    (0, c.dataAnalytic)("subject_plate_click"), (0, t.goToPlatePage)(this.subject.bkjId);
                },
                clickStock: function(e) {
                    (0, t.goToStockPage)(e);
                }
            }
        };
        n.default = a;
    },
    a1fb: function(e, n, o) {
        o.r(n);
        var c = o("98a4"), t = o.n(c);
        for (var a in c) "default" !== a && function(e) {
            o.d(n, e, function() {
                return c[e];
            });
        }(a);
        n.default = t.a;
    },
    aedf: function(e, n, o) {
        o.r(n);
        var c = o("dc89"), t = o("a1fb");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(a);
        var i = o("2877"), u = Object(i.a)(t.default, c.a, c.b, !1, null, null, null);
        n.default = u.exports;
    },
    dc89: function(e, n, o) {
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, t = [];
        o.d(n, "a", function() {
            return c;
        }), o.d(n, "b", function() {
            return t;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Topic/TopicHeader-create-component", {
    "components/Topic/TopicHeader-create-component": function(e, n, o) {
        o("543d").createComponent(o("aedf"));
    }
}, [ [ "components/Topic/TopicHeader-create-component" ] ] ]);