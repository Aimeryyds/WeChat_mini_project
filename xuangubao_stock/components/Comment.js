(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Comment" ], {
    "05b8": function(n, e, t) {
        t.r(e);
        var o = t("1742"), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    1742: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = t("b356"), a = t("340b"), r = {
            name: "Comment",
            components: {
                ReplyComments: function() {
                    return t.e("components/ReplyComments").then(t.bind(null, "9e69"));
                }
            },
            props: {
                avatar: String,
                name: String,
                isAuthor: Boolean,
                time: Number,
                likeCount: Number,
                content: String,
                repliedBy: Array,
                liked: Boolean
            },
            computed: {
                displayTime: function() {
                    var n = this.time;
                    return (0, a.isToday)(n) ? (0, o.format)(n, "zh_CN") : (0, a.format)(n, "MM-DD HH:mm");
                }
            }
        };
        e.default = r;
    },
    "4ea3": function(n, e, t) {
        t.r(e);
        var o = t("d1d6"), a = t("05b8");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("fc27");
        var c = t("2877"), u = Object(c.a)(a.default, o.a, o.b, !1, null, "03056e36", null);
        e.default = u.exports;
    },
    d1d6: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                return n.$emit("clickReply", e);
            });
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    e562: function(n, e, t) {},
    fc27: function(n, e, t) {
        var o = t("e562");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Comment-create-component", {
    "components/Comment-create-component": function(n, e, t) {
        t("543d").createComponent(t("4ea3"));
    }
}, [ [ "components/Comment-create-component" ] ] ]);