require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 35 ], {
    "8NAA": function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("5nAL"), n = t.n(r), o = t("HxYh");
        new n.a(o.a).$mount();
    },
    "8t+r": function(e, a) {},
    HxYh: function(e, a, t) {
        "use strict";
        var r = t("bbxm"), n = t("eeRE");
        var o = function(e) {
            t("8t+r");
        }, s = t("ybqe")(r.a, n.a, o, null, null);
        a.a = s.exports;
    },
    bbxm: function(e, a, t) {
        "use strict";
        var r = t("Xxa5"), n = t.n(r), o = t("//Fk"), s = t.n(o), i = t("d7EF"), u = t.n(i), c = t("exGp"), d = t.n(c), l = t("/WWA"), p = t("EwJx"), h = t.n(p), v = t("7YgM");
        t.n(v);
        a.a = {
            data: function() {
                return {
                    src: ""
                };
            },
            mounted: function() {
                var e = this;
                return d()(n.a.mark(function a() {
                    var t, r, o, i, c, d, p, f, m, g, k, w, x, b, I, S;
                    return n.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return a.prev = 0, a.next = 3, s.a.all([ h.a.getStorage({
                                key: "mpVersion"
                            }), h.a.login() ]);

                          case 3:
                            t = a.sent, r = u()(t, 2), o = r[0].data, i = r[1].code, c = o === v.version ? 0 : 1, 
                            d = e.$route.query, p = d.articleId, f = d.paraId, m = d.bookId, g = d.userBookPlanId, 
                            k = d.planStatus, w = d.isShowLecture, x = void 0 === w ? 0 : w, b = d.isFromBookplan, 
                            I = void 0 === b ? 0 : b, e.src = p && !m ? g ? l.f + "/reading/m-reading/article?id=" + p + "&paraId=" + f + "&userBookPlanId=" + g + "&planStatus=" + k + "&isShowGuide=" + c + "&authCode=" + i + "&isShowLecture=" + x + "&isFromBookplan=" + I : l.f + "/reading/m-reading/article?id=" + p + "&paraId=" + f + "&isShowGuide=" + c + "&authCode=" + i + "&isFromBookplan=" + I : l.f + "/reading/m-reading/catalogs?id=" + p + "&bookId=" + m + "&userBookPlanId=" + g + "&planStatus=" + k + "&hasPurchased=true&authCode=" + i, 
                            wx.setStorage({
                                key: "mpVersion",
                                data: v.version
                            }), a.next = 17;
                            break;

                          case 13:
                            a.prev = 13, a.t0 = a.catch(0), S = a.t0.message, wx.toast({
                                title: S,
                                icon: "none"
                            });

                          case 17:
                          case "end":
                            return a.stop();
                        }
                    }, a, e, [ [ 0, 13 ] ]);
                }))();
            }
        };
    },
    eeRE: function(e, a, t) {
        "use strict";
        var r = {
            render: function() {
                var e = this.$createElement, a = this._self._c || e;
                return a("div", [ this.src ? a("web-view", {
                    attrs: {
                        src: this.src,
                        mpcomid: "0"
                    }
                }) : this._e() ], 1);
            },
            staticRenderFns: []
        };
        a.a = r;
    }
}, [ "8NAA" ]);