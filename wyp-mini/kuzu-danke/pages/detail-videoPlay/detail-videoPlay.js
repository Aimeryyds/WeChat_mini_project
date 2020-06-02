(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail-videoPlay/detail-videoPlay" ], {
    2151: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            data: function() {
                return {
                    video_url: ""
                };
            },
            onLoad: function(n) {
                this.video_url = n.video_url;
            },
            methods: {
                error: function(n) {
                    console.error(n);
                },
                play: function() {},
                waiting: function() {}
            }
        };
        t.default = o;
    },
    "3df1": function(n, t, e) {
        e.r(t);
        var o = e("2151"), u = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = u.a;
    },
    4376: function(n, t, e) {
        e.r(t);
        var o = e("722a"), u = e("3df1");
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        e("a680");
        var r = e("f0c5"), c = Object(r.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "6c0a": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("e027"), t(e("66fd")), n(t(e("4376")).default);
        }).call(this, e("543d").createPage);
    },
    "722a": function(n, t, e) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {});
    },
    a680: function(n, t, e) {
        var o = e("db3c");
        e.n(o).a;
    },
    db3c: function(n, t, e) {}
}, [ [ "6c0a", "common/runtime", "common/vendor" ] ] ]);