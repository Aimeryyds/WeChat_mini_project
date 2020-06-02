(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/skeleton-index/skeleton-index" ], {
    1950: function(n, e, t) {
        var o = t("955d");
        t.n(o).a;
    },
    4317: function(n, e, t) {
        t.r(e);
        var o = t("d5dd"), d = t("de54");
        for (var c in d) "default" !== c && function(n) {
            t.d(e, n, function() {
                return d[n];
            });
        }(c);
        t("1950");
        var a = t("f0c5"), i = Object(a.a)(d.default, o.b, o.c, !1, null, "170715a6", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "955d": function(n, e, t) {},
    d5dd: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, d = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return d;
        }), t.d(e, "a", function() {});
    },
    d614: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                name: "skeletonIndex",
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
                        var e = n.getSystemInfoSync();
                        console.log(e), this.systemInfo = {
                            width: e.windowWidth,
                            height: e.windowHeight
                        };
                    }
                }
            };
            e.default = t;
        }).call(this, t("543d").default);
    },
    de54: function(n, e, t) {
        t.r(e);
        var o = t("d614"), d = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = d.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/skeleton-index/skeleton-index-create-component", {
    "components/skeleton-index/skeleton-index-create-component": function(n, e, t) {
        t("543d").createComponent(t("4317"));
    }
}, [ [ "components/skeleton-index/skeleton-index-create-component" ] ] ]);