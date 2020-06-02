require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 13 ], {
    "4wQk": function(t, e) {},
    "Cd/W": function(t, e, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "avenger-list"
                }, t._l(t.avengerList, function(e, n) {
                    return a("navigator", {
                        key: e.id,
                        staticClass: "avenger",
                        attrs: {
                            target: "miniProgram",
                            "open-type": "navigate",
                            "app-id": e.item.miniprogram_id,
                            path: e.path,
                            "extra-data": e.query_string,
                            version: "release"
                        }
                    }, [ a("img", {
                        staticClass: "app-icon",
                        attrs: {
                            src: e.item.image_urls[0]
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "meta"
                    }, [ a("div", {
                        staticClass: "title"
                    }, [ t._v(t._s(e.item.title)) ]), t._v(" "), a("div", {
                        staticClass: "description"
                    }, [ t._v(t._s(e.item.description)) ]) ]) ]);
                }));
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    L2Ru: function(t, e, a) {
        "use strict";
        var n = a("QFLg"), i = a("Cd/W");
        var r = function(t) {
            a("4wQk");
        }, s = a("ybqe")(n.a, i.a, r, "data-v-26aad2b2", null);
        e.a = s.exports;
    },
    QFLg: function(t, e, a) {
        "use strict";
        var n = a("Xxa5"), i = a.n(n), r = a("exGp"), s = a.n(r), c = a("hlW5");
        e.a = {
            data: function() {
                return {
                    avengerList: []
                };
            },
            mounted: function() {
                var t = this;
                return s()(i.a.mark(function e() {
                    var a, n;
                    return i.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, c.a.listAvengers();

                          case 2:
                            a = e.sent, n = a.objects, t.avengerList = n;

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            }
        };
    },
    VfP4: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), i = a.n(n), r = a("L2Ru");
        new i.a(r.a).$mount();
    },
    hlW5: function(t, e, a) {
        "use strict";
        var n = a("/WWA"), i = a("Vo7i"), r = {
            listAvengers: function() {
                return Object(i.a)(n.c + "/avengers/apps/reading/items", {
                    data: {
                        page: 1,
                        ipp: 10
                    }
                });
            }
        };
        e.a = r;
    }
}, [ "VfP4" ]);