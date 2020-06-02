(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/skeleton-detail/skeleton-detaile" ], {
    "0d0b": function(e, n, t) {
        t.r(n);
        var o = t("3628"), a = t("1595");
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        t("88fc");
        var l = t("f0c5"), i = Object(l.a)(a.default, o.b, o.c, !1, null, "4f6c93f8", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    1595: function(e, n, t) {
        t.r(n);
        var o = t("50be"), a = t.n(o);
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = a.a;
    },
    3628: function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    },
    "50be": function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                name: "skeletonDetail",
                data: function() {
                    return {
                        bgcolor: "#fff",
                        systemInfo: {},
                        lists: [ 1, 2, 3, 4, 5 ],
                        datas: [ 1, 2, 3 ]
                    };
                },
                methods: {
                    attachedAction: function() {
                        var n = e.getSystemInfoSync();
                        console.log(n), this.systemInfo = {
                            width: n.windowWidth,
                            height: n.windowHeight
                        };
                    }
                }
            };
            n.default = t;
        }).call(this, t("543d").default);
    },
    "88fc": function(e, n, t) {
        var o = t("d996");
        t.n(o).a;
    },
    d996: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/skeleton-detail/skeleton-detaile-create-component", {
    "components/skeleton-detail/skeleton-detaile-create-component": function(e, n, t) {
        t("543d").createComponent(t("0d0b"));
    }
}, [ [ "components/skeleton-detail/skeleton-detaile-create-component" ] ] ]);