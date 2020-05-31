(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Home/components/TodayArticle/TodayArticleItem" ], {
    "49ab": function(e, t, n) {
        n.r(t);
        var o = n("90a3"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    },
    "7f29": function(e, t, n) {
        var o = n("80b2");
        n.n(o).a;
    },
    "80b2": function(e, t, n) {},
    "90a3": function(e, t, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = o(n("4360")), a = o(n("65b7")), i = n("ed08"), u = {
            name: "TodayArticleItem",
            props: {
                info: Object,
                index: Number
            },
            computed: {
                subject: function() {
                    return c.default.getters["entities/subjectEntitiesById"](this.info.fromSubjectId) || {};
                },
                isTopic: function() {
                    return this.info && 1 === this.subject.type;
                },
                imgSrc: function() {
                    return this.subject ? (0, a.default)(this.subject.image, 180, 180) : "";
                }
            },
            methods: {
                jumpToArticle: function() {
                    (0, i.dataAnalytic)("main_hotarticle_click"), wx.navigateTo({
                        url: "/pages/Article/main?articleId=".concat(this.info.id, "&subjectId=").concat(this.subject.id)
                    });
                }
            }
        };
        t.default = u;
    },
    e956: function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return c;
        });
    },
    f97e: function(e, t, n) {
        n.r(t);
        var o = n("e956"), c = n("49ab");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("7f29");
        var i = n("2877"), u = Object(i.a)(c.default, o.a, o.b, !1, null, null, null);
        t.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Home/components/TodayArticle/TodayArticleItem-create-component", {
    "pages/Home/components/TodayArticle/TodayArticleItem-create-component": function(e, t, n) {
        n("543d").createComponent(n("f97e"));
    }
}, [ [ "pages/Home/components/TodayArticle/TodayArticleItem-create-component" ] ] ]);