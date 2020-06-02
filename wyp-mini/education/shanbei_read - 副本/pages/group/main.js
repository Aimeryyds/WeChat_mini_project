require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 29 ], {
    "+8rS": function(t, n, e) {
        "use strict";
        var o = e("Gu7T"), r = e.n(o), a = e("Xxa5"), s = e.n(a), u = e("exGp"), i = e.n(u), c = e("75Sk"), f = e("KntP");
        n.a = {
            components: {
                ComplexBook: f.a
            },
            mounted: function() {
                var t = this;
                return i()(s.a.mark(function n() {
                    var e, o, r;
                    return s.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return e = t.$route.query, o = e.id, r = e.title, t.id = o, wx.setNavigationBarTitle({
                                title: r
                            }), n.next = 5, t.fetchGroupInfos();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            data: function() {
                return {
                    id: "",
                    groupInfos: {
                        ipp: 10,
                        page: 1,
                        total: 0,
                        objects: []
                    }
                };
            },
            onReachBottom: function() {
                this.groupInfos.total !== this.groupInfos.objects.length && this.fetchGroupInfos(this.groupInfos.page + 1);
            },
            methods: {
                fetchGroupInfos: function() {
                    var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return i()(s.a.mark(function e() {
                        var o, a, u, i;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, c.a.get(t.id, {
                                    page: n,
                                    ipp: 10
                                });

                              case 2:
                                o = e.sent, a = o.objects, u = o.page, i = o.total, t.groupInfos.objects = [].concat(r()(t.groupInfos.objects), r()(a)), 
                                t.groupInfos.page = u, t.groupInfos.total = i;

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            }
        };
    },
    VMWU: function(t, n, e) {
        "use strict";
        var o = e("+8rS"), r = e("kSif");
        var a = function(t) {
            e("kiMd");
        }, s = e("ybqe")(o.a, r.a, a, null, null);
        n.a = s.exports;
    },
    kSif: function(t, n, e) {
        "use strict";
        var o = {
            render: function() {
                var t = this, n = t.$createElement, e = t._self._c || n;
                return t.groupInfos.total ? e("div", t._l(t.groupInfos.objects, function(n, o) {
                    return e("ComplexBook", t._b({
                        key: n.id,
                        attrs: {
                            mpcomid: "0-" + o
                        }
                    }, "ComplexBook", n, !1));
                })) : t._e();
            },
            staticRenderFns: []
        };
        n.a = o;
    },
    kZn1: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("5nAL"), r = e.n(o), a = e("VMWU");
        new r.a(a.a).$mount();
    },
    kiMd: function(t, n) {}
}, [ "kZn1" ]);