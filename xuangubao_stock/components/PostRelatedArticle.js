(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/PostRelatedArticle" ], {
    "35d8": function(t, e, n) {
        n.r(e);
        var o = n("9907"), a = n("d534");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("46d4");
        var c = n("2877"), u = Object(c.a)(a.default, o.a, o.b, !1, null, "b6a84340", null);
        e.default = u.exports;
    },
    "46d4": function(t, e, n) {
        var o = n("81bd");
        n.n(o).a;
    },
    "81bd": function(t, e, n) {},
    9907: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return a;
        });
    },
    d534: function(t, e, n) {
        n.r(e);
        var o = n("f190"), a = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = a.a;
    },
    f190: function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = o(n("2095")), r = o(n("642b")), c = {
            name: "PostRelatedArticle",
            props: {
                title: String,
                image: String,
                subjectTitle: String,
                time: Number
            },
            computed: {
                formatedTime: function() {
                    return (0, a.default)(this.time, "MM-DD");
                },
                cropedImage: function() {
                    var t = this.image.trim();
                    return t ? (0, r.default)(t, 100, 100) : "";
                }
            }
        };
        e.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/PostRelatedArticle-create-component", {
    "components/PostRelatedArticle-create-component": function(t, e, n) {
        n("543d").createComponent(n("35d8"));
    }
}, [ [ "components/PostRelatedArticle-create-component" ] ] ]);