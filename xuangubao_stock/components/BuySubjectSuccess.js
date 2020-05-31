(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/BuySubjectSuccess" ], {
    "4b1e": function(e, t, n) {},
    "87eb": function(e, t, n) {
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
        n.d(t, "a", function() {
            return c;
        }), n.d(t, "b", function() {
            return u;
        });
    },
    "88f3": function(e, t, n) {
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = c(n("4360")), a = c(n("761b")), r = {
            components: {
                PriceText: function() {
                    return n.e("components/PriceText").then(n.bind(null, "6011"));
                },
                FullWidthButton: function() {
                    return n.e("components/FullWidthButton").then(n.bind(null, "5196"));
                },
                TitleBar: function() {
                    return n.e("components/TitleBar").then(n.bind(null, "1e1d"));
                }
            },
            computed: {
                message: function() {
                    return u.default.state.subscribe.message;
                },
                subject: function() {
                    return u.default.state.subscribe.subject;
                },
                activeSubjectSubItem: function() {
                    return u.default.state.subscribe.activeSubjectSubItem;
                },
                preferentialPrice: function() {
                    return +u.default.state.subscribe.preferentialPrice;
                }
            },
            methods: {
                clearOverlayStack: function() {
                    u.default.dispatch("overlay/clearOverlayStack");
                },
                refreshSubject: function() {
                    (0, a.default)("subscription_paid_click"), u.default.dispatch("entities/fetchSubject", {
                        id: this.subject.id
                    }), u.default.commit("subjectTimeline/CLEAR_TIMELINE"), u.default.dispatch("subjectTimeline/fetchTimeline"), 
                    this.clearOverlayStack();
                },
                backhandler: function() {
                    this.refreshSubject();
                },
                homehandler: function() {
                    this.clearOverlayStack(), wx.reLaunch({
                        url: "/pages/Home/main"
                    });
                }
            }
        };
        t.default = r;
    },
    9174: function(e, t, n) {
        n.r(t);
        var c = n("88f3"), u = n.n(c);
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        t.default = u.a;
    },
    "9ece": function(e, t, n) {
        n.r(t);
        var c = n("87eb"), u = n("9174");
        for (var a in u) "default" !== a && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(a);
        n("e791");
        var r = n("2877"), i = Object(r.a)(u.default, c.a, c.b, !1, null, "4281dcae", null);
        t.default = i.exports;
    },
    e791: function(e, t, n) {
        var c = n("4b1e");
        n.n(c).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/BuySubjectSuccess-create-component", {
    "components/BuySubjectSuccess-create-component": function(e, t, n) {
        n("543d").createComponent(n("9ece"));
    }
}, [ [ "components/BuySubjectSuccess-create-component" ] ] ]);