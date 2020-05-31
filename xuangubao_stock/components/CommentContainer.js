(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/CommentContainer" ], {
    9773: function(e, t, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), o.forEach(function(t) {
                    c(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("f8c8"), a = o(n("4360")), m = n("ed08"), u = o(n("642b")), l = {
            name: "CommentContainer",
            components: {
                Comment: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/Comment") ]).then(n.bind(null, "4ea3"));
                }
            },
            props: {
                comment: Object,
                avatar: String,
                name: String,
                isAuthor: Boolean,
                time: Number,
                likeCount: Number,
                content: String,
                repliedBy: Array,
                liked: Boolean
            },
            data: function() {
                return {};
            },
            computed: {
                cropAvatar: function() {
                    if (this.avatar) return (0, u.default)(this.avatar, 40, 40);
                }
            },
            methods: {
                toggleStar: function() {
                    if ((0, m.ifLogin)()) {
                        if (this.comment) {
                            var e = this.likeCount;
                            this.liked ? (e--, (0, i.unStarComment)(this.comment.id, this.comment.commentType).catch(function() {})) : (e++, 
                            (0, i.starComment)(this.comment.id, this.comment.commentType).catch(function() {})), 
                            a.default.commit("comments/UPDATE_COMMENTS", {
                                articleId: this.comment.messageId,
                                comments: [ r({}, this.comment, {
                                    liked: !this.liked,
                                    likeCount: e
                                }) ]
                            });
                        }
                    } else (0, m.goToLogin)();
                }
            }
        };
        t.default = l;
    },
    "9b9b": function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                return e.$emit("clickReply", t);
            });
        }, r = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return r;
        });
    },
    b625: function(e, t, n) {
        n.r(t);
        var o = n("9773"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    cbaa: function(e, t, n) {
        n.r(t);
        var o = n("9b9b"), r = n("b625");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        var i = n("2877"), a = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        t.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/CommentContainer-create-component", {
    "components/CommentContainer-create-component": function(e, t, n) {
        n("543d").createComponent(n("cbaa"));
    }
}, [ [ "components/CommentContainer-create-component" ] ] ]);