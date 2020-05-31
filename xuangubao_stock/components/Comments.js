(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Comments" ], {
    "53a3": function(n, e, o) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                return n.$emit("clickReply", e, n.comment);
            });
        }, a = [];
        o.d(e, "a", function() {
            return t;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "5a0f": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            name: "Comments",
            components: {
                CommentContainer: function() {
                    return Promise.all([ o.e("common/vendor"), o.e("components/CommentContainer") ]).then(o.bind(null, "cbaa"));
                }
            },
            props: {
                comments: Array
            }
        };
        e.default = t;
    },
    "62a9": function(n, e, o) {
        o.r(e);
        var t = o("53a3"), a = o("e6ff");
        for (var c in a) "default" !== c && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(c);
        var r = o("2877"), u = Object(r.a)(a.default, t.a, t.b, !1, null, null, null);
        e.default = u.exports;
    },
    e6ff: function(n, e, o) {
        o.r(e);
        var t = o("5a0f"), a = o.n(t);
        for (var c in t) "default" !== c && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Comments-create-component", {
    "components/Comments-create-component": function(n, e, o) {
        o("543d").createComponent(o("62a9"));
    }
}, [ [ "components/Comments-create-component" ] ] ]);