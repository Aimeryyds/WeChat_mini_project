(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ChooseSubscription/ChooseSubscriptionHeader" ], {
    "19f8": function(e, n, o) {},
    3436: function(e, n, o) {
        o.r(n);
        var t = o("3f7b"), c = o("8f16");
        for (var u in c) "default" !== u && function(e) {
            o.d(n, e, function() {
                return c[e];
            });
        }(u);
        o("7e27");
        var r = o("2877"), i = Object(r.a)(c.default, t.a, t.b, !1, null, "ad23e7d8", null);
        n.default = i.exports;
    },
    "3f7b": function(e, n, o) {
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
    4876: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            components: {},
            props: {
                subject: {
                    type: Object
                }
            },
            computed: {
                renderSubjectType: function() {
                    return 1 === this.subject.type ? "话题" : 2 === this.subject.type ? "栏目" : this.subject.title;
                }
            }
        };
        n.default = t;
    },
    "7e27": function(e, n, o) {
        var t = o("19f8");
        o.n(t).a;
    },
    "8f16": function(e, n, o) {
        o.r(n);
        var t = o("4876"), c = o.n(t);
        for (var u in t) "default" !== u && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(u);
        n.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ChooseSubscription/ChooseSubscriptionHeader-create-component", {
    "components/ChooseSubscription/ChooseSubscriptionHeader-create-component": function(e, n, o) {
        o("543d").createComponent(o("3436"));
    }
}, [ [ "components/ChooseSubscription/ChooseSubscriptionHeader-create-component" ] ] ]);