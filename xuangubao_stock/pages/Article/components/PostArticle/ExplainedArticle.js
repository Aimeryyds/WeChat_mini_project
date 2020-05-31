(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ExplainedArticle" ], {
    "0672": function(e, t, n) {},
    1435: function(e, t, n) {
        n.r(t);
        var o = n("f7fa"), a = n("3974");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("1773");
        var r = n("2877"), i = Object(r.a)(a.default, o.a, o.b, !1, null, "08327a50", null);
        t.default = i.exports;
    },
    1773: function(e, t, n) {
        var o = n("0672");
        n.n(o).a;
    },
    3974: function(e, t, n) {
        n.r(t);
        var o = n("7d28"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    },
    "7d28": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("2095")), a = {
            props: {
                title: String,
                time: Number
            },
            computed: {
                displayTime: function() {
                    return (0, o.default)(this.time, "MM/DD HH:mm");
                }
            }
        };
        t.default = a;
    },
    f7fa: function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return a;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ExplainedArticle-create-component", {
    "pages/Article/components/PostArticle/ExplainedArticle-create-component": function(e, t, n) {
        n("543d").createComponent(n("1435"));
    }
}, [ [ "pages/Article/components/PostArticle/ExplainedArticle-create-component" ] ] ]);