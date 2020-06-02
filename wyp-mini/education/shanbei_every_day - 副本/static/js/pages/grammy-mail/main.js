global.webpackJsonp([ 13 ], {
    "1w9D": function(t, a) {},
    Wg7D: function(t, a, n) {
        "use strict";
        var s = n("Dd8w"), e = n.n(s), i = n("NYxO"), c = n("olkN"), o = n("CpCs");
        a.a = {
            store: c.a,
            components: {
                "nav-bar": o.a
            },
            data: function() {
                return {
                    paddingTop: 64
                };
            },
            methods: {
                back: function() {
                    wx.switchTab({
                        url: "/pages/trans-challenge/main"
                    });
                }
            },
            computed: e()({}, n.i(i.a)([ "userInfo", "sysInfo" ])),
            mounted: function() {
                this.paddingTop = this.sysInfo.statusBarHeight + 44;
            }
        };
    },
    YuLZ: function(t, a, n) {
        "use strict";
        var s = n("Wg7D"), e = n("pbWB");
        var i = function(t) {
            n("1w9D");
        }, c = n("ybqe")(s.a, e.a, i, "data-v-24b2e590", null);
        a.a = c.exports;
    },
    bH0m: function(t, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = n("5nAL"), e = n.n(s), i = n("YuLZ");
        new e.a(i.a).$mount(), a.default = {
            config: {
                disableScroll: !0
            }
        };
    },
    pbWB: function(t, a, n) {
        "use strict";
        var s = {
            render: function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "grammy-mail",
                    style: {
                        paddingTop: this.paddingTop + "px"
                    }
                }, [ a("nav-bar", {
                    attrs: {
                        icon: "/static/img/back.png",
                        title: "一封书信",
                        handleClick: this.back,
                        mpcomid: "0"
                    }
                }), this._v(" "), a("img", {
                    staticClass: "content",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/qwyuof/292d54ae5e459b962196759e9142579c.9c0de370e73828ab7e0f51f746808b0c.png"
                    }
                }), this._v(" "), a("div", {
                    staticClass: "tips"
                }, [ this._v("回复领取口令：奖品") ]), this._v(" "), a("button", {
                    staticClass: "btn",
                    attrs: {
                        "open-type": "contact"
                    }
                }, [ this._v("点击领取") ]) ], 1);
            },
            staticRenderFns: []
        };
        a.a = s;
    }
}, [ "bH0m" ]);