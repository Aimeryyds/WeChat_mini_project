require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 18 ], {
    "82k1": function(t, n, i) {
        "use strict";
        var s = {
            render: function() {
                var t = this, n = t.$createElement, i = t._self._c || n;
                return t.coverUrl ? i("div", {
                    staticClass: "bookplan-wrapper plan-reward",
                    style: {
                        backgroundImage: "url(" + t.coverUrl + ")"
                    }
                }, [ i("div", {
                    staticClass: "img-overlay"
                }), t._v(" "), i("div", {
                    staticClass: "logo"
                }), t._v(" "), i("div", {
                    staticClass: "bookplan-instruction"
                }, [ i("div", {
                    staticClass: "title"
                }, [ t._v("计划完成奖励") ]), t._v(" "), i("div", {
                    staticClass: "description"
                }, [ t._v("书籍进度100%+完成天数100%，即为完成计划") ]), t._v(" "), i("div", {
                    staticClass: "sub-title"
                }, [ t._v("奖励内容：") ]), t._v(" "), t._l(t.rewards, function(n, s) {
                    return i("div", {
                        key: n.id,
                        staticClass: "item"
                    }, [ i("div", {
                        staticClass: "item-number"
                    }, [ t._v(t._s(n.id) + ".") ]), t._v(" "), i("div", {
                        staticClass: "item-content"
                    }, [ t._v(t._s(n.content)) ]) ]);
                }), t._v(" "), i("div", {
                    staticClass: "sub-title"
                }, [ t._v("你需要做的：") ]), t._v(" "), t._l(t.todos, function(n, s) {
                    return i("div", {
                        key: n.id,
                        staticClass: "item"
                    }, [ i("div", {
                        staticClass: "item-number"
                    }, [ t._v(t._s(n.id) + ".") ]), t._v(" "), i("div", {
                        staticClass: "item-content"
                    }, [ t._v(t._s(n.content)) ]) ]);
                }) ], 2) ]) : t._e();
            },
            staticRenderFns: []
        };
        n.a = s;
    },
    "G3a+": function(t, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = i("5nAL"), a = i.n(s), e = i("mGPZ");
        new a.a(e.a).$mount();
    },
    Ggi9: function(t, n) {},
    mGPZ: function(t, n, i) {
        "use strict";
        var s = i("t9TF"), a = i("82k1");
        var e = function(t) {
            i("Ggi9");
        }, o = i("ybqe")(s.a, a.a, e, "data-v-67bc4ebc", null);
        n.a = o.exports;
    },
    t9TF: function(t, n, i) {
        "use strict";
        var s = i("Dd8w"), a = i.n(s), e = i("IcnI"), o = i("NYxO");
        n.a = {
            store: e.a,
            data: function() {
                return {
                    rewards: [ {
                        id: 1,
                        content: "1000贝壳奖励"
                    }, {
                        id: 2,
                        content: "读书计划专属徽章"
                    } ]
                };
            },
            computed: a()({}, Object(o.c)({
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                }
            }), {
                coverUrl: function() {
                    return this.bookplanInfo.cover_url;
                },
                todos: function() {
                    return [ {
                        id: 1,
                        content: "每天10分钟，轻松完成一章书籍阅读~"
                    }, {
                        id: 2,
                        content: "墙裂建议：阅读习惯在于每日的积累，我们按照每日1章的节奏给大家安排了阅读任务。如果一下子读完不利于习惯养成，也会导致学习天数达不到要求哦~"
                    } ];
                }
            })
        };
    }
}, [ "G3a+" ]);