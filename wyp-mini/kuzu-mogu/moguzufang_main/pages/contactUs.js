(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/contactUs" ], {
    "0d58": function(t, e, a) {},
    "21a7": function(t, e, a) {
        "use strict";
        a("6cdc");
        var i = n(a("9f5e")), s = n(a("afe6"));
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, i.default)(s.default));
    },
    "2d02": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = {
                name: "index",
                methods: {
                    complaints: function() {
                        t.makePhoneCall({
                            phoneNumber: "400-880-5911"
                        });
                    },
                    landlordEntry: function() {
                        this.gotoViewPage("https://h5.mgzf.com/minisite/partnerRegister?channel=1&partnervip=capp");
                    },
                    brokerEntry: function() {
                        this.gotoViewPage("https://h5.mgzf.com/register?id=&inviteCode=P10031490&name=app");
                    },
                    gotoViewPage: function(t) {
                        this.$mgRouter.navigateTo("/pages/viewPage/index", {
                            url: t
                        });
                    },
                    houseHost: function() {
                        this.gotoViewPage("https://h5.mgzf.com/minisite/houseHost/?partnervip=wx_fwtg");
                    }
                }
            };
            e.default = a;
        }).call(this, a("39c3")["default"]);
    },
    "46f6": function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", [ a("view", {
                staticClass: "renter-part"
            }, [ a("view", {
                staticClass: "title"
            }, [ t._v("我是租客") ]), a("view", [ a("view", {
                staticClass: "contact-block",
                attrs: {
                    eventid: "4604727a-0"
                },
                on: {
                    click: t.complaints
                }
            }, [ t._m(0) ]) ]) ]), a("view", {
                staticClass: "merchant-part"
            }, [ a("view", {
                staticClass: "title"
            }, [ t._v("我是商家") ]), a("view", [ a("view", {
                staticClass: "contact-block",
                attrs: {
                    eventid: "4604727a-1"
                },
                on: {
                    click: t.landlordEntry
                }
            }, [ t._m(1) ]), a("view", {
                staticClass: "contact-block",
                attrs: {
                    eventid: "4604727a-2"
                },
                on: {
                    click: t.brokerEntry
                }
            }, [ t._m(2) ]) ]) ]), a("view", {
                staticClass: "merchant-part"
            }, [ a("view", {
                staticClass: "title"
            }, [ t._v("我是业主") ]), a("view", [ a("view", {
                staticClass: "contact-block",
                attrs: {
                    eventid: "4604727a-3"
                },
                on: {
                    click: t.houseHost
                }
            }, [ t._m(3) ]) ]) ]), t._m(4) ]);
        }, s = [ function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "align-middle"
            }, [ a("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/03a46d963706e695a254448515bda668.svg"
                }
            }), a("view", [ t._v("我要投诉") ]) ]);
        }, function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "align-middle"
            }, [ a("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/9de3b4ece7a86e8b679082484e80a5f0.svg"
                }
            }), a("view", [ t._v("房东入驻") ]) ]);
        }, function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "align-middle"
            }, [ a("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/25c6aa72cd6de009f5f88bd9783f4b37.svg"
                }
            }), a("view", [ t._v("经纪人入驻") ]) ]);
        }, function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "align-middle"
            }, [ a("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/060188630d3aad3d4310b4263975546b.svg"
                }
            }), a("view", [ t._v("房屋托管") ]) ]);
        }, function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "footer-part"
            }, [ a("text", {
                staticClass: "icon-chat"
            }), t._v("客服电话"), a("text", {
                staticClass: "red-text"
            }, [ t._v("400-880-5911") ]) ]);
        } ];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return s;
        });
    },
    6543: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("2d02"), s = a.n(i);
        for (var n in i) "default" !== n && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(n);
        e["default"] = s.a;
    },
    afe6: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("46f6"), s = a("6543");
        for (var n in s) "default" !== n && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(n);
        a("f01d");
        var c = a("17cc"), r = Object(c["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    f01d: function(t, e, a) {
        "use strict";
        var i = a("0d58"), s = a.n(i);
        s.a;
    }
}, [ [ "21a7", "common/runtime", "common/vendor" ] ] ]);