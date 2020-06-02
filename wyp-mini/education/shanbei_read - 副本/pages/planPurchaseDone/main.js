require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 19 ], {
    "3raP": function(t, s) {},
    LAXX: function(t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = a("5nAL"), e = a.n(i), n = a("dr4Z");
        new e.a(n.a).$mount();
    },
    dr4Z: function(t, s, a) {
        "use strict";
        var i = a("vpCK"), e = a.n(i), n = a("nk2n");
        var c = function(t) {
            a("3raP");
        }, r = a("ybqe")(e.a, n.a, c, "data-v-5db1ea96", null);
        s.a = r.exports;
    },
    nk2n: function(t, s, a) {
        "use strict";
        var i = {
            render: function() {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {
                    staticClass: "wrapper"
                }, [ s("div", {
                    staticClass: "main"
                }, [ s("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/b25f542ca10f639f53606a530088984e.f03db4fad4dc3fe217c86563cde89f95.png",
                        alt: "check"
                    }
                }), this._v(" "), s("div", {
                    staticClass: "title"
                }, [ this._v("计划加入成功") ]), this._v(" "), s("navigator", {
                    staticClass: "nav",
                    attrs: {
                        url: "/pages/planList/main",
                        "open-type": "switchTab"
                    }
                }, [ this._v("查看我的计划") ]) ], 1), this._v(" "), this._m(0) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {
                    staticClass: "tips"
                }, [ s("div", {
                    staticClass: "title"
                }, [ this._v("温馨提示：") ]), this._v(" "), s("div", {
                    staticClass: "tip"
                }, [ this._v("1. 每天早上7点，微信提醒你参与计划") ]), this._v(" "), s("div", {
                    staticClass: "tip"
                }, [ this._v("2. 关注「扇贝阅读」公众号，了解更多学习内容～") ]) ]);
            } ]
        };
        s.a = i;
    },
    vpCK: function(t, s) {}
}, [ "LAXX" ]);