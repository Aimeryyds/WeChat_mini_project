require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 23 ], {
    "3TLU": function(t, a) {},
    C2Gs: function(t, a, s) {
        "use strict";
        var i = {
            render: function() {
                var t = this, a = t.$createElement, s = t._self._c || a;
                return s("div", {
                    staticClass: "plan-finish"
                }, [ t.bookplanInfo.cover_url ? s("div", {
                    staticClass: "bookplan-header",
                    style: {
                        backgroundImage: "url(" + t.bookplanInfo.cover_url + ")"
                    }
                }, [ t._m(0) ]) : t._e(), t._v(" "), s("div", {
                    staticClass: "card rule"
                }, [ s("div", {
                    staticClass: "highlight",
                    staticStyle: {
                        "margin-bottom": "8px"
                    }
                }, [ t._v("计划完成奖励") ]), t._v(" "), s("div", {
                    staticClass: "tip",
                    staticStyle: {
                        "margin-bottom": "24px"
                    }
                }, [ t._v("计划有效期内，读完全部书籍，即可获得计划完成奖励。") ]), t._v(" "), s("div", {
                    staticClass: "title"
                }, [ t._v("奖励内容是什么？") ]), t._v(" "), s("ul", [ s("li", {
                    staticClass: "tip"
                }, [ t._v("1.1000贝壳奖励；") ]), t._v(" "), s("li", {
                    staticClass: "tip"
                }, [ t._v("2.读书计划专属徽章。") ]) ], 1) ], 1), t._v(" "), t._m(1) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "meta"
                }, [ a("div", {
                    staticClass: "logo"
                }) ]);
            }, function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "card how-to"
                }, [ a("div", {
                    staticClass: "title"
                }, [ this._v("计划完成奖励如何领取？") ]), this._v(" "), a("div", {
                    staticClass: "tip"
                }, [ this._v("计划完成后，奖品会自动发放至对应扇贝账号，请在「扇贝阅读app」-「我的」-「消息」中查收。") ]) ]);
            } ]
        };
        a.a = i;
    },
    EMTJ: function(t, a, s) {
        "use strict";
        var i = s("MQS+"), e = s("C2Gs");
        var n = function(t) {
            s("3TLU");
        }, c = s("ybqe")(i.a, e.a, n, "data-v-7f49a906", null);
        a.a = c.exports;
    },
    JsmE: function(t, a, s) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = s("5nAL"), e = s.n(i), n = s("EMTJ");
        new e.a(n.a).$mount();
    },
    "MQS+": function(t, a, s) {
        "use strict";
        var i = s("Dd8w"), e = s.n(i), n = s("IcnI"), c = s("NYxO");
        a.a = {
            store: n.a,
            computed: e()({}, Object(c.c)({
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                }
            }))
        };
    }
}, [ "JsmE" ]);