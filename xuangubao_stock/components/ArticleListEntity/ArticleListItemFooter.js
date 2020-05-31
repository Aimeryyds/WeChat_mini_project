(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ArticleListEntity/ArticleListItemFooter" ], {
    "159f": function(t, e, n) {
        var o = n("bed5");
        n.n(o).a;
    },
    "1d69": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("b356"), r = n("340b"), i = {
            name: "ArticleListItemFooter",
            props: {
                likeCount: {
                    type: Number,
                    default: 0
                },
                author: {
                    type: String
                },
                time: {
                    type: Number
                },
                liked: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                displayTime: function() {
                    var t = this.time;
                    return (0, r.isToday)(t) ? (0, o.format)(t, "zh_CN") : (0, r.format)(t, "MM-DD");
                },
                displayAuthor: function() {
                    return this.author ? "来自 ".concat(this.author) : "";
                }
            }
        };
        e.default = i;
    },
    "943d": function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
    },
    b0ae: function(t, e, n) {
        n.r(e);
        var o = n("1d69"), r = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    bed5: function(t, e, n) {},
    c3ab: function(t, e, n) {
        n.r(e);
        var o = n("943d"), r = n("b0ae");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("159f");
        var a = n("2877"), c = Object(a.a)(r.default, o.a, o.b, !1, null, "16c9bfd4", null);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ArticleListEntity/ArticleListItemFooter-create-component", {
    "components/ArticleListEntity/ArticleListItemFooter-create-component": function(t, e, n) {
        n("543d").createComponent(n("c3ab"));
    }
}, [ [ "components/ArticleListEntity/ArticleListItemFooter-create-component" ] ] ]);