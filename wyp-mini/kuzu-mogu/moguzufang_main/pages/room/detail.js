(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/room/detail" ], {
    "0286": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("7a39"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "042b": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2a2d"), a = o("74e6");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("4609");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "0599": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("dbbd"), a = o("5a53");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("480b");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "05f0": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("871c"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "0831": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("91a7"), a = o("138c");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("d313");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "0e1d": function(t, e, o) {},
    "0e43": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("30a4"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            props: {
                isAgent: {
                    type: Boolean,
                    default: !1
                },
                agent: {
                    type: Object,
                    default: {}
                },
                brand: {
                    type: Object,
                    default: {}
                },
                roomId: {
                    type: String,
                    default: ""
                },
                sourceType: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    evaluateScore: 0,
                    evaluateMessage: null
                };
            },
            methods: {
                onEvaluateScoreChange: function(t) {
                    this.evaluateScore = t + 1;
                },
                closeDialog: function() {
                    this.$emit("closeDialog", !1);
                },
                submit: function() {
                    var t = this;
                    if (this.evaluateScore > 0) {
                        var e = {
                            roomId: this.roomId,
                            sourceType: this.sourceType,
                            score: this.evaluateScore,
                            remark: this.evaluateMessage,
                            deviceId: this.$store.state.uuid || ""
                        };
                        n.default.fetch("renterOperation.addEvaluate", e).then(function(e) {
                            t.closeDialog(), t.$toast.show("评价成功", "success");
                        }).catch(function(e) {
                            t.$toast.show("评价失败，请稍后再试"), console.log("addEvaluateFail:", e);
                        });
                    }
                },
                moveHandle: function(t) {}
            }
        };
        e.default = i;
    },
    "0e84": function(t, e, o) {},
    "12cd": function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(o("cc8f")), a = r(o("c3c5")), i = r(o("d4cb")), s = r(o("8c9e"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var c = {
                components: {
                    mgButton: i.default,
                    mgImage: a.default,
                    mgAutoImage: s.default
                },
                mixins: [ n.default ],
                props: {
                    roomBrand: {
                        type: Object
                    },
                    phoneNum: {
                        type: String
                    }
                },
                mounted: function() {},
                methods: {
                    makePhoneCall: function() {
                        var e = this;
                        t.makePhoneCall({
                            phoneNumber: this.phoneNum,
                            complete: function() {
                                setTimeout(function() {
                                    e.$emit("madeCall");
                                }, 2e3);
                            }
                        });
                    },
                    toShop: function() {
                        this.roomBrand.brandId ? this.$mgRouter.navigateTo("/pages/shop/brand", {
                            brandId: this.roomBrand.brandId
                        }) : this.roomBrand.landlordId && this.$mgRouter.navigateTo("/pages/shop/landlord", {
                            landlordId: this.roomBrand.landlordId
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, o("39c3")["default"]);
    },
    "12ef": function(t, e, o) {},
    "130a": function(t, e, o) {},
    "138c": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("ff77"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "13a7": function(t, e, o) {},
    "175c": function(t, e, o) {},
    1782: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = r(o("cc8f")), a = r(o("c3c5")), i = r(o("2f4a")), s = r(o("ec45"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var c = {
            name: "room-activity",
            mixins: [ n.default ],
            props: {
                activity: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            components: {
                mgImage: a.default,
                noticeDetail: i.default,
                ticket: s.default
            },
            data: function() {
                return {
                    couponVisible: !1,
                    showNoticeDetail: !1,
                    content: ""
                };
            },
            mounted: function() {},
            methods: {
                promotionTagsClick: function(t) {
                    6 == t.promotionKey ? this.openNotice(t) : this.openUrl(t);
                },
                openUrl: function(t) {
                    var e = t.promotionKey, o = t.helpUrl || "";
                    3 === e && this.$platform.isWxMp ? o = "https://h5.mgzf.com/credit/creditOperateLanding?utm_source=mgzf&utm_medium=weixinservice&utm_content=roomdetaillink" : 3 === e && this.$platform.isApMp && (o = "https://h5.mgzf.com/credit/creditOperateLanding?xyz_source=mgzf&xyz_medium=alipayservice&xyz_content=roomdetaillink"), 
                    this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: o
                    });
                },
                openNotice: function(t) {
                    this.content = t.subTitle, this.showNoticeDetail = !0;
                },
                closeNotice: function() {
                    this.showNoticeDetail = !1;
                }
            }
        };
        e.default = c;
    },
    "1a37": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i(o("cc8f")), a = i(o("c3c5"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var s = {
            components: {
                mgImage: a.default
            },
            mixins: [ n.default ],
            props: {
                roomRecommend: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            mounted: function() {},
            methods: {
                toDetail: function(t) {
                    this.$mgRouter.navigateTo("/pages/room/detail", {
                        roomId: t.roomId,
                        sourceType: t.sourceType
                    });
                }
            }
        };
        e.default = s;
    },
    "1dbb": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                staticClass: "ticket"
            }, [ o("view", {
                staticClass: "price"
            }, [ o("view", {
                staticClass: "amount"
            }, [ 1 == t.ticketObj.couponInfo.amountType || 2 == t.ticketObj.couponInfo.amountType && t.ticketObj.couponInfo.amount > 1 ? o("text", [ o("text", {
                staticClass: "sub"
            }, [ t._v("￥") ]), t._v(t._s(t.ticketObj.couponInfo.amount)) ]) : o("text", [ t._v(t._s(10 * t.ticketObj.couponInfo.amount)), o("text", {
                staticClass: "sub"
            }, [ t._v("折") ]) ]) ]), o("view", {
                staticClass: "limit"
            }, [ t._v(t._s(t.ticketObj.couponInfo.useLimit)) ]) ]), o("view", {
                staticClass: "cont"
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.ticketObj.couponInfo.coupName)) ]), o("view", {
                staticClass: "h4"
            }, [ t._v(t._s(t.ticketObj.couponInfo.validDesc)) ]) ]), 1 == t.ticketObj.couponInfo.status ? o("view", {
                staticClass: "btn-got"
            }, [ t._v("已领取") ]) : o("view", {
                staticClass: "btn-get",
                attrs: {
                    eventid: "41a747a0-0"
                },
                on: {
                    click: function(e) {
                        t.getCoupon(t.ticketObj.couponInfo.couponType, t.ticketObj.couponInfo.actiId, t.ticketObj.couponInfo);
                    }
                }
            }, [ t._v("立即领取") ]) ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    2647: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i(o("cc8f")), a = i(o("c3c5"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var s = {
            mixins: [ n.default ],
            components: {
                mgImage: a.default
            },
            props: {
                roomConfig: {
                    type: Array
                }
            },
            data: function() {
                return {
                    more: !1
                };
            }
        };
        e.default = s;
    },
    2893: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("e3c3"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    2973: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                class: "roomAgent" + t.passClass
            }, [ o("view", {
                staticClass: "div"
            }, [ o("mg-image", {
                staticClass: "img",
                attrs: {
                    src: t.roomAgent.photoUrl,
                    mpcomid: "f5958b94-0"
                }
            }), o("view", {
                staticClass: "p"
            }, [ o("view", {
                staticClass: "span"
            }, [ t._v(t._s(t.roomAgent.name)) ]), t._l(t.brokerIcons, function(t, e) {
                return o("mgAutoImage", {
                    key: e,
                    staticClass: "img-sec",
                    attrs: {
                        height: "36",
                        src: t,
                        mpcomid: "f5958b94-1-" + e
                    }
                });
            }) ], 2), o("view", {
                staticClass: "phone-button"
            }, [ t.phoneNum ? o("mg-button", {
                staticClass: "mg-btn-plain",
                attrs: {
                    size: "mini",
                    eventid: "f5958b94-0",
                    mpcomid: "f5958b94-2"
                },
                on: {
                    click: t.makePhoneCall
                }
            }, [ o("text", {
                staticClass: "mgic-dianhua"
            }), o("text", {
                staticClass: "phone-button-txt"
            }, [ t._v("立即联系") ]) ]) : t._e() ], 1) ], 1), t.roomAgent.service && t.roomAgent.service.length > 0 ? o("view", {
                staticClass: "ul"
            }, t._l(t.roomAgent.service, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li"
                }, [ o("view", {
                    staticClass: "var"
                }, [ t._v(t._s(e.serviceScore) + "分") ]), o("view", {
                    staticClass: "span"
                }, [ t._v(t._s(e.serviceName)) ]), o("view", {
                    staticClass: "p"
                }) ]);
            })) : t._e() ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "2a2d": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomMates && t.roomMates.length > 0 ? o("view", {
                class: "roomMates" + t.passClass
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v("室友信息") ]), o("view", {
                staticClass: "table"
            }, t._l(t.roomMates, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "tr",
                    attrs: {
                        eventid: "f4485d82-0-" + n
                    },
                    on: {
                        click: function(o) {
                            t.toDetail(e.roomId);
                        }
                    }
                }, [ o("view", {
                    staticClass: "td"
                }, [ t._v(t._s(e.column1)) ]), o("view", {
                    staticClass: "td",
                    style: {
                        color: e.column2Color
                    }
                }, [ t._v(t._s(e.column2)) ]), o("view", {
                    staticClass: "td"
                }, [ t._v(t._s(e.column3)) ]), o("view", {
                    staticClass: "td"
                }, [ t._v(t._s(e.column4)) ]), o("view", {
                    staticClass: "td"
                }, [ e.roomId ? o("text", {
                    staticClass: "iconfont icon-right_arrow"
                }) : t._e() ]) ]);
            })) ]) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "2c87": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("cc8f"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            mixins: [ n.default ],
            props: {
                roomFeatures: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {
                    more: !1
                };
            }
        };
        e.default = i;
    },
    "2d69": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.activity.promotionTags && t.activity.promotionTags.length > 0 || t.activity.couponsSlice && t.activity.couponsSlice.length > 0 ? o("view", {
                class: "activity" + t.passClass
            }, [ o("view", {
                staticClass: "ul promotionTags"
            }, t._l(t.activity.promotionTags, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li",
                    attrs: {
                        eventid: "69e4c243-0-" + n
                    },
                    on: {
                        click: function(o) {
                            t.promotionTagsClick(e);
                        }
                    }
                }, [ e.img ? o("mgImage", {
                    staticClass: "img",
                    attrs: {
                        src: e.img,
                        mpcomid: "69e4c243-0-" + n
                    }
                }) : t._e(), o("text", {
                    staticClass: "span",
                    style: {
                        color: e.color
                    }
                }, [ t._v(t._s(e.label)) ]), o("text", {
                    staticClass: "mgic-angle-r"
                }) ], 1);
            })), t.showNoticeDetail ? o("noticeDetail", {
                attrs: {
                    content: t.content,
                    eventid: "69e4c243-1",
                    mpcomid: "69e4c243-1"
                },
                on: {
                    closeNotice: t.closeNotice
                }
            }) : t._e(), t.activity.couponsSlice && t.activity.couponsSlice.length > 0 ? o("view", {
                staticClass: "ul couponsSlice"
            }, [ o("view", {
                staticClass: "li",
                attrs: {
                    eventid: "69e4c243-2"
                },
                on: {
                    click: function(e) {
                        t.couponVisible = !0;
                    }
                }
            }, [ o("text", {
                staticClass: "span"
            }, [ t._v("优惠券") ]), o("view", {
                staticClass: "p"
            }, t._l(t.activity.couponsSlice, function(e, n) {
                return o("text", {
                    key: n,
                    staticClass: "var"
                }, [ t._v(t._s(e)) ]);
            })), o("text", {
                staticClass: "mgic-angle-r"
            }) ]) ]) : t._e(), o("transition", {
                attrs: {
                    name: "fade",
                    mpcomid: "69e4c243-4"
                }
            }, [ t.couponVisible ? o("view", {
                staticClass: "bg"
            }, [ o("view", {
                staticClass: "couponDialog"
            }, [ o("view", {
                staticClass: "i mgic-chahao",
                attrs: {
                    eventid: "69e4c243-3"
                },
                on: {
                    click: function(e) {
                        t.couponVisible = !1;
                    }
                }
            }), o("view", {
                staticClass: "h2"
            }, [ t._v("优惠券") ]), t.activity.platformCoupons && t.activity.platformCoupons.length > 0 ? o("view", {
                staticClass: "panel-title"
            }, [ t._v("-蘑菇优惠券-") ]) : t._e(), t._l(t.activity.platformCoupons, function(t, e) {
                return o("ticket", {
                    key: e,
                    attrs: {
                        ticketObj: {
                            couponInfo: t
                        },
                        mpcomid: "69e4c243-2-" + e
                    }
                });
            }), t.activity.landlordCoupons && t.activity.landlordCoupons.length > 0 ? o("view", {
                staticClass: "panel-title"
            }, [ t._v("-房东优惠券-") ]) : t._e(), t._l(t.activity.landlordCoupons, function(t, e) {
                return o("ticket", {
                    key: e,
                    attrs: {
                        ticketObj: {
                            couponInfo: t
                        },
                        mpcomid: "69e4c243-3-" + e
                    }
                });
            }) ], 2) ]) : t._e() ]) ], 1) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "2ea6": function(t, e, o) {
        "use strict";
        o("6cdc");
        var n = i(o("9f5e")), a = i(o("de54"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, n.default)(a.default));
    },
    "2f4a": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("5d83"), a = o("61f2");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("eb83");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    3060: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("1782"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "30e0": function(t, e, o) {
        "use strict";
        var n = o("c39f"), a = o.n(n);
        a.a;
    },
    "35ad": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("4817"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    3648: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = o("f2de");
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {}, n = Object.keys(o);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(o, t).enumerable;
                }))), n.forEach(function(e) {
                    i(t, e, o[e]);
                });
            }
            return t;
        }
        function i(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t;
        }
        var s = {
            props: {
                ticketObj: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            computed: a({}, (0, n.mapGetters)([ "isLogin", "cityId" ])),
            methods: {
                getCoupon: function(t, e, o) {
                    var n = this;
                    this.isLogin ? this.$api.fetch("mrktWeb.getRenterCouponV2", {
                        getCity: this.cityId,
                        actiType: t,
                        actiId: e
                    }).then(function(t) {
                        var e = t.content || {}, a = e.getResult, i = e.explain;
                        1 === parseInt(a, 10) && (o.status = 1), n.$toast.show(i || "", "success");
                    }).catch(function(t) {
                        n.$toast.show(t.errMessage || "系统异常");
                    }) : this.$mgRouter.navigateTo("/pages/login");
                }
            }
        };
        e.default = s;
    },
    "365e": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                staticClass: "evaluation-container"
            }, [ o("view", {
                staticClass: "full-mask",
                attrs: {
                    catchtouchmove: "false",
                    eventid: "3ccdd970-1"
                },
                on: {
                    click: t.closeDialog,
                    touchmove: function(e) {
                        e.stopPropagation(), e.preventDefault(), t.moveHandle(e);
                    }
                }
            }, [ o("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/b8182faa9768b9c2f4de3531b21bee68.png",
                    eventid: "3ccdd970-0"
                },
                on: {
                    click: t.closeDialog
                }
            }) ]), o("view", {
                staticClass: "evaluation-box",
                attrs: {
                    eventid: "3ccdd970-6"
                },
                on: {
                    touchmove: function(e) {
                        e.stopPropagation(), e.preventDefault(), t.moveHandle(e);
                    }
                }
            }, [ o("view", {
                staticClass: "title"
            }, [ t._v("电话服务评价") ]), t.isAgent ? o("view", [ o("image", {
                staticClass: "contact-logo",
                attrs: {
                    src: t.agent.photoUrl || ""
                }
            }), o("view", {
                staticClass: "contact-info"
            }, [ o("text", {
                staticClass: "contact-name"
            }, [ t._v(t._s(t.agent.name)) ]), o("text", {
                staticClass: "contact-type"
            }, [ t._v("经纪人") ]) ]) ]) : o("view", [ o("image", {
                staticClass: "contact-logo",
                attrs: {
                    src: t.brand.img || ""
                }
            }), o("view", {
                staticClass: "contact-info"
            }, [ o("text", {
                staticClass: "contact-name"
            }, [ t._v(t._s(t.brand.title)) ]) ]) ]), o("view", {
                staticClass: "evaluateScore-box"
            }, t._l([ 1, 2, 3, 4, 5 ], function(e, n) {
                return o("view", {
                    key: e,
                    staticClass: "evaluateScore-content"
                }, [ e < t.evaluateScore ? o("image", {
                    staticClass: "evaluation-icon",
                    attrs: {
                        src: "https://assets.mgzf.com/appimg/5607d99713259263e8e9b476d5ad6d03.png",
                        eventid: "3ccdd970-3-" + n
                    },
                    on: {
                        click: function(o) {
                            t.onEvaluateScoreChange(e);
                        }
                    }
                }) : o("image", {
                    staticClass: "evaluation-icon",
                    attrs: {
                        src: "https://assets.mgzf.com/appimg/7b17511f9255a331db7b52e649f7453c.png",
                        eventid: "3ccdd970-2-" + n
                    },
                    on: {
                        click: function(o) {
                            t.onEvaluateScoreChange(e);
                        }
                    }
                }) ]);
            })), o("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.evaluateMessage,
                    expression: "evaluateMessage"
                } ],
                staticClass: "textArea",
                attrs: {
                    maxlength: "50",
                    placeholder: "添加留言",
                    eventid: "3ccdd970-4"
                },
                domProps: {
                    value: t.evaluateMessage
                },
                on: {
                    touchmove: function(e) {
                        e.stopPropagation(), e.preventDefault(), t.moveHandle(e);
                    },
                    input: function(e) {
                        e.target.composing || (t.evaluateMessage = e.target.value);
                    }
                }
            }), o("view", {
                class: t.evaluateScore > 0 ? "btn submit-btn" : "btn submit-btn-disable",
                attrs: {
                    eventid: "3ccdd970-5"
                },
                on: {
                    click: t.submit
                }
            }, [ t._v("提交") ]) ]) ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "377f": function(t, e, o) {
        "use strict";
        var n = o("a0d5"), a = o.n(n);
        a.a;
    },
    "3a1d": function(t, e, o) {},
    "3fb7": function(t, e, o) {
        "use strict";
        var n = o("12ef"), a = o.n(n);
        a.a;
    },
    "405e": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("cfd4"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "40b5": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomSelect && t.roomSelect.roomNo && t.roomSelect.flatRooms && t.roomSelect.flatRooms.length > 0 ? o("view", {
                class: t.passClass + "roomSelect"
            }, [ o("view", {
                staticClass: "h1",
                attrs: {
                    eventid: "401023eb-0"
                },
                on: {
                    click: function(e) {
                        t.roomTypeVisible = !0;
                    }
                }
            }, [ o("text", {
                staticClass: "var-text"
            }, [ t._v("已选房源") ]), o("text", {
                staticClass: "var-text var"
            }, [ t._v(t._s(t.roomSelect.roomNo)) ]), o("text", {
                staticClass: "mgic-angle-r"
            }) ]), o("transition", {
                attrs: {
                    name: "fade",
                    mpcomid: "401023eb-2"
                }
            }, [ t.roomTypeVisible ? o("view", {
                staticClass: "bg",
                attrs: {
                    id: "bottom-mask",
                    eventid: "401023eb-5"
                },
                on: {
                    click: t.roomTypeclick
                }
            }, [ o("view", {
                staticClass: "roomSelectDialog"
            }, [ o("view", {
                staticClass: "mgic-chahao",
                attrs: {
                    id: "close-icon",
                    eventid: "401023eb-1"
                },
                on: {
                    click: t.roomTypeclick
                }
            }), o("view", {
                staticClass: "h3"
            }, [ o("mg-image", {
                staticClass: "select-img",
                attrs: {
                    showLoading: !0,
                    src: t.activeRoom && t.activeRoom.image,
                    mpcomid: "401023eb-0"
                }
            }), o("view", {
                staticClass: "p"
            }, [ t._v(t._s(t.mainTitle)), o("text", {
                staticClass: "var"
            }, [ t._v(t._s(t.activeRoom.payPrice)) ]) ]) ], 1), o("view", {
                staticClass: "h2"
            }, [ t._v("付款") ]), o("view", {
                staticClass: "payType"
            }, t._l(t.roomSelect.payTypes, function(e, n) {
                return o("text", {
                    key: n,
                    staticClass: "span",
                    class: {
                        active: e.value == (t.activeRoom && t.activeRoom.payType)
                    },
                    attrs: {
                        eventid: "401023eb-2-" + n
                    },
                    on: {
                        click: function(o) {
                            t.setAcitveType(e);
                        }
                    }
                }, [ t._v(t._s(e.value)) ]);
            })), o("view", {
                staticClass: "h2"
            }, [ t._v("可选户型") ]), o("scroll-view", {
                staticClass: "roomSelect-scroll",
                attrs: {
                    "scroll-y": "true"
                }
            }, [ o("view", {
                staticClass: "ul"
            }, t._l(t.roomSelect.flatRooms, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li",
                    class: {
                        active: t.activeRoom.roomId == e.roomId,
                        disabled: t.activeRoom && t.activeRoom.payType !== e.roomPayTypes[0].payType
                    },
                    attrs: {
                        eventid: "401023eb-3-" + n
                    },
                    on: {
                        click: function(o) {
                            t.setActiveRoom(e);
                        }
                    }
                }, [ t._v(t._s(e.roomName)) ]);
            })) ]), o("view", [ o("mg-button", {
                attrs: {
                    eventid: "401023eb-4",
                    mpcomid: "401023eb-1"
                },
                on: {
                    click: t.goDetail
                }
            }, [ t._v("确定") ]) ], 1) ], 1) ]) : t._e() ]) ], 1) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    4609: function(t, e, o) {
        "use strict";
        var n = o("5d1f"), a = o.n(n);
        a.a;
    },
    "467f": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("d97c"), a = o("d553");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("f8f5");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "480b": function(t, e, o) {
        "use strict";
        var n = o("957a"), a = o.n(n);
        a.a;
    },
    4817: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = s(o("b0d7")), a = s(o("c3c5")), i = s(o("cc8f"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = {
            mixins: [ i.default ],
            components: {
                mgImage: a.default
            },
            props: {
                location: {
                    type: Object
                }
            },
            computed: {
                key: function() {
                    return n.default.webServerKey;
                }
            },
            methods: {
                goToMap: function() {
                    var t = this.location || {}, e = t.lng, o = t.lat, n = this.$store.state.locationCity || {};
                    if (n.lat && n.lng && e && o) {
                        var a = this.$mgRouter.buildUrl("https://h5.mgzf.com/sh/searchTrafficMap", {
                            startLat: n.lat,
                            startLng: n.lng,
                            endLat: o,
                            endLng: e,
                            commutingMode: 1
                        });
                        this.$mgRouter.navigateTo("/pages/viewPage/index", {
                            url: a
                        });
                    }
                },
                gotoLocation: function() {
                    if (this.location.lat) {
                        var t = this.BdmapEncryptToMapabc(this.location.lat, this.location.lng);
                        wx.openLocation({
                            latitude: t.lat,
                            longitude: t.lng,
                            name: this.location.communityName || this.location.address,
                            scale: 17
                        });
                    }
                },
                BdmapEncryptToMapabc: function(t, e) {
                    var o = {}, n = 52.35987755982988, a = Number(e - .0065), i = Number(t - .006), s = Math.sqrt(a * a + i * i) - 2e-5 * Math.sin(i * n), r = Math.atan2(i, a) - 3e-6 * Math.cos(a * n), c = s * Math.cos(r), u = s * Math.sin(r);
                    return o.lng = c, o.lat = u, o;
                }
            }
        };
        e.default = r;
    },
    "4a79": function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(o("cc8f")), a = i(o("c3c5"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var s = {
                mixins: [ n.default ],
                components: {
                    mgImage: a.default
                },
                props: {
                    buildingImages: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                mounted: function() {},
                data: function() {
                    return {};
                },
                methods: {
                    toDetail: function(e) {
                        t.previewImage({
                            urls: this.buildingImages,
                            current: e,
                            loop: !0
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, o("39c3")["default"]);
    },
    "4ae8": function(t, e, o) {
        "use strict";
        var n = o("a32b"), a = o.n(n);
        a.a;
    },
    "4e83": function(t, e, o) {},
    "4f52": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomBrand ? o("view", {
                class: "roomBrand" + t.passClass
            }, [ o("view", {
                staticClass: "top"
            }, [ o("view", {
                staticClass: "top-x",
                attrs: {
                    eventid: "f56f7a90-0"
                },
                on: {
                    click: t.toShop
                }
            }, [ o("mg-image", {
                staticClass: "img-one",
                attrs: {
                    size: "mini",
                    src: t.roomBrand.img,
                    mpcomid: "f56f7a90-0"
                }
            }), o("view", {
                staticClass: "p"
            }, [ o("view", {
                staticClass: "span"
            }, [ t._v(t._s(t.roomBrand.title)) ]), t._l(t.roomBrand.landlordIcons, function(t, e) {
                return o("mgAutoImage", {
                    key: e,
                    staticClass: "img-sec",
                    attrs: {
                        height: "36",
                        src: t,
                        mpcomid: "f56f7a90-1-" + e
                    }
                });
            }) ], 2) ], 1), o("view", {
                staticClass: "phone-button"
            }, [ t.phoneNum ? o("mg-button", {
                staticClass: "mg-btn-plain",
                attrs: {
                    size: "mini",
                    eventid: "f56f7a90-1",
                    mpcomid: "f56f7a90-2"
                },
                on: {
                    click: t.makePhoneCall
                }
            }, [ o("text", {
                staticClass: "mgic-dianhua"
            }), o("text", {
                staticClass: "phone-button-txt"
            }, [ t._v("立即联系") ]) ]) : t._e() ], 1) ]), t.roomBrand.brandStars ? o("view", {
                staticClass: "middle"
            }, [ o("text", {
                staticClass: "span"
            }, [ t._v("品牌星级:") ]), t._l(t.roomBrand.brandStars, function(t, e) {
                return o("text", {
                    key: e,
                    staticClass: "i mgic-shiwujiao"
                });
            }), t._l(5 - t.roomBrand.brandStars, function(t, e) {
                return o("text", {
                    key: e,
                    staticClass: "i mgic-kongwujiao"
                });
            }) ], 2) : t._e(), t.roomBrand.brandLabelConfig && t.roomBrand.brandLabelConfig.length > 0 ? o("view", {
                staticClass: "ul bottom"
            }, t._l(t.roomBrand.brandLabelConfig, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li"
                }, [ o("text", {
                    staticClass: "mgic-success"
                }), t._v(t._s(e.value)) ]);
            })) : t._e() ]) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    5013: function(t, e, o) {
        "use strict";
        var n = o("13a7"), a = o.n(n);
        a.a;
    },
    "58a7": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("40b5"), a = o("9cd6");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("3fb7");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "59b0": function(t, e, o) {
        "use strict";
        var n = o("175c"), a = o.n(n);
        a.a;
    },
    "5a39": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                class: "roomTag" + t.passClass
            }, [ o("view", {
                staticClass: "ul"
            }, t._l(t.roomTag.roomLabels, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li"
                }, [ t._v(t._s(e)) ]);
            })), o("view", {
                staticClass: "ul"
            }, t._l(t.roomTag.roomDetailConfig, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li"
                }, [ t._v(t._s(e.key)), o("text", {
                    staticClass: "var"
                }, [ t._v(t._s(e.value)) ]) ]);
            })) ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "5a53": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("1a37"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "5a8b": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2973"), a = o("05f0");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("7251");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "5d1f": function(t, e, o) {},
    "5d83": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                attrs: {
                    id: "yyNotice-container"
                }
            }, [ o("view", {
                staticClass: "notice-container"
            }, [ o("text", {
                staticClass: "iconclose mgic-chahao",
                attrs: {
                    eventid: "66bb9f6d-0"
                },
                on: {
                    click: t.closeNotice
                }
            }), o("view", {
                staticClass: "notice-title"
            }, [ t._v("本店活动") ]), o("view", {
                staticClass: "flexbox flex-start"
            }, [ o("view", {
                staticClass: "notice-tag"
            }, [ t._v("本店活动") ]), o("scroll-view", {
                staticClass: "notic-scroll",
                attrs: {
                    "scroll-y": "true"
                }
            }, [ o("view", {
                staticClass: "flexbox-item content"
            }, [ t._v(t._s(t.content)) ]) ]) ], 1), o("view", {
                staticClass: "confirm-bottom"
            }, [ o("mgButton", {
                attrs: {
                    eventid: "66bb9f6d-1",
                    mpcomid: "66bb9f6d-0"
                },
                on: {
                    click: t.closeNotice
                }
            }, [ t._v("确定") ]) ], 1) ]), o("view", {
                staticClass: "mg-mask",
                attrs: {
                    eventid: "66bb9f6d-2"
                },
                on: {
                    click: t.closeNotice
                }
            }) ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "5f1e": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2d69"), a = o("3060");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("bd29");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    6102: function(t, e, o) {
        "use strict";
        var n = o("9afb"), a = o.n(n);
        a.a;
    },
    6163: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("b059"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "61db": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("cc8f"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            mixins: [ n.default ],
            props: {
                roomTag: {
                    type: Object
                }
            }
        };
        e.default = i;
    },
    "61f2": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("6521"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "628a": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("12cd"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    6521: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("d4cb"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            name: "noticeDetail",
            components: {
                mgButton: n.default
            },
            props: {
                content: ""
            },
            data: function() {
                return {};
            },
            methods: {
                closeNotice: function() {
                    this.$emit("closeNotice");
                }
            }
        };
        e.default = i;
    },
    "664b": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomTitle && (t.roomTitle.mainTitle || t.roomTitle.customTitle) ? o("view", {
                class: t.passClass
            }, [ o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.roomTitle.mainTitle,
                    expression: "roomTitle.mainTitle"
                } ],
                staticClass: "roomtitle-h1"
            }, [ t._v(t._s(t.roomTitle.mainTitle)) ]), o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.roomTitle.customTitle,
                    expression: "roomTitle.customTitle"
                } ],
                staticClass: "roomtitle-h2"
            }, [ t._v(t._s(t.roomTitle.customTitle)) ]) ]) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "6ab4": function(t, e, o) {},
    7251: function(t, e, o) {
        "use strict";
        var n = o("4e83"), a = o.n(n);
        a.a;
    },
    "72b0": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("95e8"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "74e6": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("a861"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "755f": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("4f52"), a = o("628a");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("add2");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    7874: function(t, e, o) {
        "use strict";
        var n = o("0e84"), a = o.n(n);
        a.a;
    },
    7952: function(t, e, o) {
        "use strict";
        var n = o("130a"), a = o.n(n);
        a.a;
    },
    "7a39": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = T(o("dad4")), a = T(o("d339")), i = T(o("fe9a")), s = T(o("58a7")), r = T(o("c896")), c = T(o("5f1e")), u = T(o("a81a")), l = T(o("ed5f")), f = T(o("f982")), d = T(o("467f")), m = T(o("9127")), v = T(o("042b")), p = T(o("0831")), h = T(o("5a8b")), b = T(o("755f")), g = T(o("0599")), _ = T(o("f37d")), C = T(o("7b1d")), y = o("f2de"), w = o("eaf8");
        function T(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function k(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {}, n = Object.keys(o);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(o, t).enumerable;
                }))), n.forEach(function(e) {
                    I(t, e, o[e]);
                });
            }
            return t;
        }
        function I(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t;
        }
        var x = {
            name: "room",
            components: {
                roomBanner: n.default,
                roomTitle: a.default,
                roomInfo: i.default,
                roomSelect: s.default,
                roomTag: r.default,
                activity: c.default,
                location: u.default,
                buildingImages: l.default,
                roomConfig: f.default,
                roomFeatures: d.default,
                roomDesc: m.default,
                roomMates: v.default,
                platformEnsure: p.default,
                roomAgent: h.default,
                roomBrand: b.default,
                roomRecommend: g.default,
                roomButton: _.default,
                evaluation: C.default
            },
            onLoad: function(t) {
                console.log("room-onload");
                var e = t.roomId, o = t.sourceType;
                this.roomId = e, this.sourceType = parseInt(o, 10) || 2, this._initProperty();
            },
            onShareAppMessage: function(t) {
                return {
                    title: this.roomTitle && this.roomTitle.mainTitle ? this.roomTitle.mainTitle : ""
                };
            },
            onShow: function() {
                this.roomHighs[this.roomKey] && this.assignDetailHigh(this.roomHighs[this.roomKey]), 
                this.roomLows[this.roomKey] && this.assignDetilLow(this.roomLows[this.roomKey]), 
                this.roomRenters[this.roomKey] && this.assignRenterData(this.roomRenters[this.roomKey]), 
                this.roomRecommends[this.roomKey] && this.assignRecommendRooms(this.roomRecommends[this.roomKey]);
            },
            data: function() {
                return {
                    roomId: 0,
                    sourceType: 0,
                    banners: null,
                    roomTitle: null,
                    info: null,
                    roomSelect: null,
                    roomTag: null,
                    activity: null,
                    location: null,
                    roomConfig: null,
                    roomFeatures: null,
                    roomDesc: null,
                    roomMates: null,
                    buildingImages: null,
                    platformEnsure: null,
                    roomAgent: null,
                    roomBrand: null,
                    brokerIcons: null,
                    sameCommunityRooms: null,
                    similarRooms: null,
                    shop: null,
                    alreadyRented: null,
                    roomLiked: null,
                    roomCanReserve: null,
                    roomCanReserveDone: !1,
                    phoneNum: null,
                    virtualNum: null,
                    showEvaluation: !1
                };
            },
            computed: k({}, (0, y.mapState)([ "fromShop" ]), (0, y.mapState)({
                roomHighs: function(t) {
                    return t.room.roomHighs;
                },
                roomLows: function(t) {
                    return t.room.roomLows;
                },
                roomRenters: function(t) {
                    return t.room.roomRenters;
                },
                roomRecommends: function(t) {
                    return t.room.roomRecommends;
                },
                userSourceTag: function(t) {
                    return t.userSourceTag;
                }
            }), {
                roomKey: function() {
                    return (0, w.createKey)(this.roomId, this.sourceType);
                }
            }),
            methods: k({}, (0, y.mapActions)([ "fetchRoomDetailHigh", "fetchRoomDetailLow", "fetchRoomRenterData", "fetchRoomRecommendRooms" ]), {
                _initProperty: function() {
                    var t = this, e = {
                        roomId: this.roomId,
                        sourceType: this.sourceType
                    };
                    this.fetchRoomDetailHigh(e).then(function(e) {
                        return t.assignDetailHigh(e);
                    }), this.fetchRoomDetailLow(e).then(function(e) {
                        return t.assignDetilLow(e);
                    }), this.fetchRoomRenterData(e).then(function(e) {
                        return t.assignRenterData(e);
                    }), this.fetchRoomRecommendRooms(e).then(function(e) {
                        return t.assignRecommendRooms(e);
                    });
                },
                assignDetailHigh: function(t) {
                    var e = t.banners, o = t.roomTitle, n = t.info, a = t.roomSelect, i = t.roomTag, s = t.roomDesc, r = t.buildingImages, c = t.brokerIcons, u = t.shop, l = t.alreadyRented, f = t.mainTitle, d = t.roomBrand, m = t.phoneNum, v = {};
                    2 === this.sourceType && (v.phoneNum = m), Object.assign(this, {
                        banners: e,
                        roomTitle: o,
                        info: n,
                        roomSelect: a,
                        roomTag: i,
                        roomDesc: s,
                        buildingImages: r,
                        brokerIcons: c,
                        shop: u,
                        alreadyRented: l,
                        mainTitle: f,
                        roomBrand: d
                    }, v);
                },
                assignDetilLow: function(t) {
                    var e = t.location, o = t.roomConfig, n = t.roomFeatures, a = t.roomMates, i = t.platformEnsure, s = t.roomAgent;
                    1 === this.sourceType && (this.phoneNum = s && s.virtualNum), Object.assign(this, {
                        location: e,
                        roomConfig: o,
                        roomFeatures: n,
                        roomMates: a,
                        platformEnsure: i,
                        roomAgent: s
                    });
                },
                assignRenterData: function(t) {
                    var e = t.promotionTags, o = t.couponsSlice, n = t.landlordCoupons, a = t.platformCoupons, i = t.roomCanReserve, s = t.roomLiked;
                    this.activity = {
                        promotionTags: e,
                        couponsSlice: o,
                        landlordCoupons: n,
                        platformCoupons: a
                    }, this.roomCanReserve = i, this.roomCanReserveDone = !0, this.roomLiked = s;
                },
                assignRecommendRooms: function(t) {
                    this.sameCommunityRooms = t.sameCommunityRooms, this.similarRooms = t.similarRooms;
                },
                closeDialog: function(t) {
                    this.showEvaluation = t;
                },
                madeCall: function() {
                    this.showEvaluation = !0;
                }
            }),
            onReady: function() {
                this.$gio("setPage", {
                    landlordId: this.fromShop.landlordId,
                    fromType: this.fromShop.fromType
                });
            }
        };
        e.default = x;
    },
    "7b1d": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("365e"), a = o("9f30");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("6102");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "7b87": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                staticClass: "apartment-banner"
            }, [ o("view", {
                staticClass: "mg-full"
            }, [ o("swiper", {
                staticClass: "mg-swiper apartment-swiper",
                attrs: {
                    current: t.bannerChangeIndex,
                    circular: !0,
                    eventid: "22d66e1b-1"
                },
                on: {
                    change: t.bannerChange
                }
            }, t._l(t.bannerImages, function(e, n) {
                return o("swiper-item", {
                    key: n,
                    staticClass: "swiperItem",
                    style: t.initStyle,
                    attrs: {
                        "data-item": e,
                        eventid: "22d66e1b-0-" + n,
                        mpcomid: "22d66e1b-1-" + n
                    },
                    on: {
                        click: function(o) {
                            t.click(e);
                        }
                    }
                }, [ o("mg-image", {
                    attrs: {
                        type: "big",
                        src: e.src,
                        mpcomid: "22d66e1b-0-" + n
                    }
                }) ], 1);
            })) ], 1), t.hideBannerDots ? t._e() : o("view", {
                staticClass: "mg-flex banner-tab"
            }, t._l(t.banners, function(e, n) {
                return e.groupName ? o("view", {
                    key: n,
                    class: "banner-item " + (t.tabIndex == n ? "tab-active" : ""),
                    attrs: {
                        eventid: "22d66e1b-2-" + n
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.tabChange(n);
                        }
                    }
                }, [ t._v(t._s(e.groupName)) ]) : t._e();
            })), t.hideBannerDots ? o("view", {
                staticClass: "room-detail-banner-indicator-dots"
            }, [ t._v(t._s(t.bannerCurrent + 1) + "/" + t._s(t.bannerImages.length)) ]) : t._e() ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "871c": function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(o("cc8f")), a = r(o("c3c5")), i = r(o("d4cb")), s = r(o("8c9e"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var c = {
                components: {
                    mgButton: i.default,
                    mgImage: a.default,
                    mgAutoImage: s.default
                },
                mixins: [ n.default ],
                props: {
                    roomAgent: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    brokerIcons: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    phoneNum: {
                        type: String,
                        default: ""
                    }
                },
                methods: {
                    makePhoneCall: function() {
                        var e = this;
                        t.makePhoneCall({
                            phoneNumber: this.phoneNum,
                            complete: function() {
                                setTimeout(function() {
                                    e.$emit("madeCall");
                                }, 2e3);
                            }
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, o("39c3")["default"]);
    },
    "88ea": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.buildingImages && t.buildingImages.length > 0 ? o("view", {
                class: "buildingImages " + (t.fixed ? "fixed" : "") + t.passClass
            }, [ t.fixed ? t._e() : o("view", {
                staticClass: "h1"
            }, [ t._v("大楼照片") ]), o("scroll-view", {
                staticClass: "buildingImages-scroll",
                attrs: {
                    "scroll-x": "true"
                }
            }, [ o("view", {
                staticClass: "ul"
            }, t._l(t.buildingImages, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li",
                    attrs: {
                        eventid: "01697b00-0-" + n
                    },
                    on: {
                        click: function(o) {
                            t.toDetail(e);
                        }
                    }
                }, [ o("mg-image", {
                    staticClass: "img",
                    attrs: {
                        width: "288",
                        src: e,
                        mpcomid: "01697b00-0-" + n
                    }
                }) ], 1);
            })) ]) ], 1) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    9127: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("af49"), a = o("6163");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("4ae8");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "914b": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.info && t.info.price ? o("view", {
                class: t.passClass + "apartment-info"
            }, [ o("view", {
                staticClass: "infoRoom"
            }, [ o("view", {
                attrs: {
                    eventid: "7b817946-0"
                },
                on: {
                    click: function(e) {
                        t.PriceDetailVisibled = !0;
                    }
                }
            }, [ o("view", {
                staticClass: "h1"
            }, [ o("text", {
                staticClass: "span"
            }, [ t._v(t._s(t.info.price)) ]), o("text", {
                staticClass: "span price"
            }, [ t._v("元/月" + t._s(t.info.maxShowPrice)) ]) ]), o("view", {
                staticClass: "h2"
            }, [ o("text", [ t._v(t._s(t.info.payDisplayValue)) ]), o("text", {
                staticClass: "span"
            }, [ t._v("明细") ]), o("text", {
                staticClass: "mgic-wenhao"
            }) ]) ]), o("view", {
                staticClass: "b"
            }), o("view", [ o("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.info.flatDesc)) ]), o("view", {
                staticClass: "h2"
            }, [ t._v("户型") ]) ]), o("view", {
                staticClass: "b"
            }), o("view", [ o("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.info.areaStr)) ]), o("view", {
                staticClass: "h2"
            }, [ t._v("面积") ]) ]) ]), o("transition", {
                attrs: {
                    name: "fade",
                    mpcomid: "7b817946-0"
                }
            }, [ t.PriceDetailVisibled ? o("view", {
                staticClass: "bg"
            }, [ o("view", {
                staticClass: "infoDetail"
            }, [ o("i", {
                staticClass: "mgic-chahao",
                attrs: {
                    eventid: "7b817946-1"
                },
                on: {
                    click: function(e) {
                        t.PriceDetailVisibled = !1;
                    }
                }
            }), o("view", {
                staticClass: "h3"
            }, [ t._v("明细") ]), o("view", {
                staticClass: "ul"
            }, [ o("view", {
                staticClass: "li"
            }, [ t._v(t._s(t.info.payDisplayValue) + ":"), o("text", [ t._v(t._s(t.info.price)) ]), t._v("元/月") ]), t.info.deposit ? o("view", {
                staticClass: "li"
            }, [ t._v(t._s(t.info.deposit)) ]) : t._e(), t.info.renterServiceChargeDetailStr ? o("view", {
                staticClass: "li"
            }, [ t._v(t._s(t.info.renterServiceChargeDetailStr)) ]) : t._e() ]), t.info.serviceFeeDesc ? o("view", {
                staticClass: "p"
            }, [ t._v(t._s(t.info.serviceFeeDesc)) ]) : t._e() ], 1) ]) : t._e() ]) ], 1) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "91a7": function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                class: "platformEnsure" + t.passClass
            }, [ t._m(0), o("view", {
                staticClass: "ul"
            }, [ t._l(t.platformEnsure, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li"
                }, [ o("mg-image", {
                    staticClass: "img",
                    attrs: {
                        type: "mini",
                        src: e.iconUrl,
                        mpcomid: "ce77b276-0-" + n
                    }
                }), t._v(t._s(e.summary)) ], 1);
            }), t._l((3 - t.platformEnsure.length % 3) % 3, function(e, n) {
                return o("view", {
                    key: t.platformEnsure.length + e,
                    staticClass: "li"
                });
            }) ], 2) ]);
        }, a = [ function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                staticClass: "h1"
            }, [ o("text", [ t._v("平台保障") ]) ]);
        } ];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "957a": function(t, e, o) {},
    "95e8": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("cc8f"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            mixins: [ n.default ],
            props: {
                roomTitle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            }
        };
        e.default = i;
    },
    "960b": function(t, e, o) {
        "use strict";
        var n = o("ad45"), a = o.n(n);
        a.a;
    },
    "966d": function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(o("0a39")), a = i(o("c3c5"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var s = {
                name: "room-banner",
                components: {
                    mgSwiper: n.default,
                    mgImage: a.default
                },
                props: {
                    banners: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                computed: {
                    bannerImages: function() {
                        var t = [];
                        if (this.banners && this.banners.length) {
                            var e = 0;
                            this.banners.forEach(function(o, n) {
                                (o.pictures || []).forEach(function(a, i) {
                                    t.push({
                                        groupName: o.groupName,
                                        groupType: o.groupType,
                                        src: a.path,
                                        index: i,
                                        tabIndex: n,
                                        gloablIndex: e++
                                    });
                                });
                            });
                        }
                        return t;
                    }
                },
                data: function() {
                    return {
                        hideBannerDots: !1,
                        tabIndex: 0,
                        images: [],
                        fixed: !1,
                        bannerChangeIndex: 0,
                        bannerCurrent: 0
                    };
                },
                mounted: function() {
                    this.hideBannerDots = this.banners && this.banners.length && "" == this.banners[0].groupName;
                },
                methods: {
                    bannerChange: function(t) {
                        var e = t.detail.current, o = this.bannerImages[e];
                        this.bannerCurrent = o.gloablIndex, this.tabIndex = o.tabIndex;
                    },
                    tabChange: function(t) {
                        var e = this;
                        this.bannerImages && this.bannerImages.length && (this.tabIndex = t, this.bannerImages.find(function(o) {
                            return o.tabIndex === t && ((e.bannerChangeIndex = o.gloablIndex) && !0);
                        }));
                    },
                    click: function(e, o) {
                        var n = this.bannerImages.map(function(t) {
                            return t.src;
                        });
                        t.previewImage({
                            urls: n,
                            current: e.src,
                            loop: !0
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, o("39c3")["default"]);
    },
    9830: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                class: "roomButton" + t.passClass
            }, [ "privateShops" != t.userSourceTag ? o("view", {
                staticClass: "button-shop",
                attrs: {
                    show: "haveBrand",
                    eventid: "23f31621-0"
                },
                on: {
                    click: t.toShop
                }
            }, [ o("view", {
                staticClass: "mgic-shop"
            }), o("view", [ t._v("店铺") ]) ]) : t._e(), o("view", {
                staticClass: "room-button order"
            }, [ o("mg-button", {
                attrs: {
                    size: "small",
                    disabled: !t.roomCanReserve || t.alreadyRented,
                    eventid: "23f31621-1",
                    mpcomid: "23f31621-0"
                },
                on: {
                    click: t.goOrder
                }
            }, [ t._v("预约看房") ]) ], 1), t.phoneNum ? o("view", {
                staticClass: "room-button tel"
            }, [ o("mg-button", {
                directives: [ {
                    name: "telBehavior",
                    rawName: "v-telBehavior",
                    value: t.telBehaviorData,
                    expression: "telBehaviorData"
                } ],
                attrs: {
                    size: "small",
                    eventid: "23f31621-2",
                    mpcomid: "23f31621-1"
                },
                on: {
                    click: t.makePhoneCall
                }
            }, [ t._v("立即联系") ]) ], 1) : t._e() ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    "9afb": function(t, e, o) {},
    "9cd6": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("d844"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "9f30": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("0e43"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    a0d5: function(t, e, o) {},
    a32b: function(t, e, o) {},
    a81a: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("ae36"), a = o("35ad");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("d2cd");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    a861: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("cc8f"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            mixins: [ n.default ],
            props: {
                roomMates: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {
                    more: !1
                };
            },
            methods: {
                toDetail: function(t) {
                    t && (window.location.href = "/detail/".concat(t, "/").concat(this.$route.params.sourceType));
                }
            }
        };
        e.default = i;
    },
    ad45: function(t, e, o) {},
    add2: function(t, e, o) {
        "use strict";
        var n = o("6ab4"), a = o.n(n);
        a.a;
    },
    adf8: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomConfig.length > 0 ? o("view", {
                class: "roomConfig" + t.passClass
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v("房源配置") ]), o("view", {
                class: "ul " + (t.more ? "more" : "")
            }, t._l(t.roomConfig, function(e, n) {
                return o("view", {
                    key: n,
                    class: "li " + (e.highlight ? "highligt" : "")
                }, [ o("mg-image", {
                    staticClass: "img",
                    attrs: {
                        "real-background": "#fff",
                        size: "mini",
                        src: e.keyLogo,
                        mpcomid: "25507231-0-" + n
                    }
                }), t._v(t._s(e.value)) ], 1);
            })), t.roomConfig.length > 10 ? o("view", {
                staticClass: "p"
            }, [ o("text", {
                staticClass: "span",
                attrs: {
                    eventid: "25507231-0"
                },
                on: {
                    click: function(e) {
                        t.more = !t.more;
                    }
                }
            }, [ t._v(t._s(t.more ? "收起" : "更多")) ]) ]) : t._e() ]) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    ae36: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                class: "location" + t.passClass
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v("地理位置") ]), o("view", {
                staticClass: "img",
                attrs: {
                    eventid: "3de86ee9-0"
                },
                on: {
                    click: t.gotoLocation
                }
            }, [ o("mg-image", {
                attrs: {
                    type: "banner",
                    src: "https://api.map.baidu.com/staticimage/v2?ak=1OU4rKcKSrXqqPa3iTBxlUBvkClAr4ps&center=" + t.location.lng + "," + t.location.lat + "&width=670&height=200&zoom=18&markers=" + t.location.lng + "," + t.location.lat + "&dpiType=ph",
                    mpcomid: "3de86ee9-0"
                }
            }) ], 1), t.location.address ? o("view", {
                staticClass: "p"
            }, [ o("i", {
                staticClass: "iconfont icon-location"
            }), t._v(t._s(t.location.address)) ], 1) : t._e(), t.location.nearestSubway ? o("view", {
                staticClass: "p"
            }, [ o("i", {
                staticClass: "iconfont icon-roomDetailMetro"
            }), t._v(t._s(t.location.nearestSubway)) ], 1) : t._e() ]);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    aeb0: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("966d"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    af49: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomDesc ? o("view", {
                class: "roomDesc" + t.passClass
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v("房源描述") ]), o("view", {
                class: "div " + (t.more || t.roomDesc.length <= 80 ? "more" : "")
            }, [ t._v(t._s(t.roomDesc)) ]), t.roomDesc.length > 80 ? o("view", {
                staticClass: "p"
            }, [ o("text", {
                staticClass: "span",
                attrs: {
                    eventid: "7b864580-0"
                },
                on: {
                    click: function(e) {
                        t.more = !t.more;
                    }
                }
            }, [ t._v(t._s(t.more ? "收起" : "更多")) ]) ]) : t._e() ]) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    b059: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("cc8f"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            mixins: [ n.default ],
            props: {
                roomDesc: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    more: !1
                };
            }
        };
        e.default = i;
    },
    b097: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2647"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    b3e9: function(t, e, o) {
        "use strict";
        var n = o("e7c1"), a = o.n(n);
        a.a;
    },
    b54e: function(t, e, o) {
        "use strict";
        var n = o("b57e"), a = o.n(n);
        a.a;
    },
    b57e: function(t, e, o) {},
    bae2: function(t, e, o) {},
    bd29: function(t, e, o) {
        "use strict";
        var n = o("c2bd"), a = o.n(n);
        a.a;
    },
    c2bd: function(t, e, o) {},
    c39f: function(t, e, o) {},
    c896: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("5a39"), a = o("d9ce");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("960b");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    cfd4: function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("f2de"), a = s(o("cc8f")), i = s(o("d4cb"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {}, n = Object.keys(o);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable;
                    }))), n.forEach(function(e) {
                        c(t, e, o[e]);
                    });
                }
                return t;
            }
            function c(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            var u = {
                mixins: [ a.default ],
                components: {
                    mgButton: i.default
                },
                props: {
                    roomId: {
                        type: Number,
                        default: 0
                    },
                    sourceType: {
                        type: Number,
                        default: 0
                    },
                    shop: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    alreadyRented: {
                        type: Boolean,
                        default: !1
                    },
                    roomLiked: {
                        type: Boolean,
                        default: !1
                    },
                    roomCanReserve: {
                        type: Boolean,
                        default: !1
                    },
                    phoneNum: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        showPrize: !1,
                        telBehavior: {}
                    };
                },
                methods: {
                    closeDialog: function() {
                        this.showLoginDialog = !1;
                    },
                    toShop: function() {
                        1 == this.shop.sourceType && this.shop.brokerId ? this.$mgRouter.navigateTo("/pages/shop/broker", {
                            brokerId: this.shop.brokerId
                        }) : 2 == this.shop.sourceType && this.shop.brandId ? this.$mgRouter.navigateTo("/pages/shop/brand", {
                            brandId: this.shop.brandId
                        }) : 2 == this.shop.sourceType && this.shop.landlordId ? this.$mgRouter.navigateTo("/pages/shop/landlord", {
                            landlordId: this.shop.landlordId
                        }) : this.$toast.show("跳转失败，请稍后再试");
                    },
                    makePhoneCall: function() {
                        this.$gio("track", "roomDetail_call", {
                            landlordId: this.fromShop.landlordId,
                            fromType: this.fromShop.fromType
                        });
                        var e = this;
                        t.makePhoneCall({
                            phoneNumber: this.phoneNum,
                            complete: function() {
                                setTimeout(function() {
                                    e.$emit("madeCall");
                                }, 2e3);
                            }
                        });
                    },
                    goOrder: function() {
                        this.$gio("track", "roomDetail_order", {
                            landlordId: this.fromShop.landlordId,
                            fromType: this.fromShop.fromType
                        }), this.$mgRouter.navigateTo("/pages/room/order", {
                            roomId: this.roomId,
                            sourceType: this.sourceType
                        });
                    },
                    initPrize: function() {}
                },
                computed: r({
                    haveBrand: function() {
                        return 1 == this.shop.sourceType ? this.shop.brokerId : this.shop.brandId || this.shop.landlordId;
                    },
                    telBehaviorData: function() {
                        return 1 == this.sourceType ? {
                            goodsId: this.roomId,
                            goodsIdType: 5,
                            sourceType: this.sourceType,
                            functionId: 8
                        } : {
                            goodsId: this.roomId,
                            goodsIdType: 1,
                            sourceType: this.sourceType,
                            functionId: 2
                        };
                    }
                }, (0, n.mapState)([ "fromShop" ]), (0, n.mapState)({
                    userInfo: function(t) {
                        return t.user.userInfo;
                    },
                    userSourceTag: function(t) {
                        return t.userSourceTag;
                    }
                }), {
                    isLogin: function() {
                        return !(!this.userInfo || !this.userInfo.renterId);
                    }
                }),
                mounted: function() {
                    this.initPrize();
                }
            };
            e.default = u;
        }).call(this, o("39c3")["default"]);
    },
    d2cd: function(t, e, o) {
        "use strict";
        var n = o("bae2"), a = o.n(n);
        a.a;
    },
    d2d2: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("4a79"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    d313: function(t, e, o) {
        "use strict";
        var n = o("e086"), a = o.n(n);
        a.a;
    },
    d339: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("664b"), a = o("72b0");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("30e0");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    d553: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2c87"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    d844: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = s(o("cc8f")), a = s(o("d4cb")), i = s(o("c3c5"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e) {
            return l(t) || u(t, e) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function u(t, e) {
            var o = [], n = !0, a = !1, i = void 0;
            try {
                for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) if (o.push(s.value), 
                e && o.length === e) break;
            } catch (c) {
                a = !0, i = c;
            } finally {
                try {
                    n || null == r["return"] || r["return"]();
                } finally {
                    if (a) throw i;
                }
            }
            return o;
        }
        function l(t) {
            if (Array.isArray(t)) return t;
        }
        var f = {
            mixins: [ n.default ],
            components: {
                mgButton: a.default,
                mgImage: i.default
            },
            props: {
                roomSelect: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                mainTitle: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    roomTypeVisible: !1,
                    activeRoom: {}
                };
            },
            methods: {
                roomTypeclick: function(t) {
                    ("bottom-mask" === t.target.id || "close-icon" === t.target.id) && (this.roomTypeVisible = !1);
                },
                setActiveRoom: function(t) {
                    var e = t.roomPayTypes;
                    e = void 0 === e ? [] : e;
                    var o = r(e, 1), n = o[0];
                    n = void 0 === n ? {} : n;
                    var a = n.payType, i = n.payPrice, s = t.roomId, c = t.image;
                    this.activeRoom = {
                        roomId: s,
                        image: c,
                        payType: a,
                        payPrice: i
                    };
                },
                setAcitveType: function(t) {
                    for (var e = 0; e < this.roomSelect.flatRooms.length; ++e) if (this.roomSelect.flatRooms[e].roomPayTypes[0].payType == t.value) return void this.setActiveRoom(this.roomSelect.flatRooms[e]);
                },
                goDetail: function() {
                    this.activeRoom.roomId ? this.$mgRouter.navigateTo("/pages/room/detail", {
                        roomId: this.activeRoom.roomId,
                        sourceType: 2
                    }) : this.$toast.show("跳转失败，请稍后再试");
                }
            },
            mounted: function() {
                this.activeRoom = this.roomSelect.activeRoom;
            }
        };
        e.default = f;
    },
    d97c: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomFeatures.length > 0 ? o("view", {
                class: "roomFeatures" + t.passClass
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v("房源特色") ]), o("view", {
                class: "ul " + (t.more ? "more" : "")
            }, t._l(t.roomFeatures, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li"
                }, [ t._v(t._s(e)) ]);
            })), t.roomFeatures.length > 5 ? o("view", {
                staticClass: "p"
            }, [ o("text", {
                staticClass: "span",
                attrs: {
                    eventid: "243dd36c-0"
                },
                on: {
                    click: function(e) {
                        t.more = !t.more;
                    }
                }
            }, [ t._v(t._s(t.more ? "收起" : "更多")) ]) ]) : t._e() ]) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    d9ce: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("61db"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    dad4: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("7b87"), a = o("aeb0");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("7952");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    dbbd: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.roomRecommend.list && t.roomRecommend.list.length > 0 ? o("view", {
                class: "roomRecommend" + t.passClass
            }, [ o("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.roomRecommend.name)), t.roomRecommend.pictureUrl ? o("mg-image", {
                staticClass: "room-agent-icon",
                attrs: {
                    src: t.roomRecommend.pictureUrl,
                    mpcomid: "90f9f126-0"
                }
            }) : t._e() ], 1), o("scroll-view", {
                staticClass: "roomRecommend-scroll",
                attrs: {
                    "scroll-x": "true"
                }
            }, [ o("view", {
                staticClass: "ul"
            }, t._l(t.roomRecommend.list, function(e, n) {
                return o("view", {
                    key: n,
                    staticClass: "li",
                    attrs: {
                        eventid: "90f9f126-0-" + n
                    },
                    on: {
                        click: function(o) {
                            t.toDetail(e);
                        }
                    }
                }, [ o("mg-image", {
                    staticClass: "img",
                    attrs: {
                        showLoading: !0,
                        src: e.pictureUrl,
                        mpcomid: "90f9f126-1-" + n
                    }
                }), o("view", {
                    staticClass: "h2 mg-ellipsis"
                }, [ t._v(t._s(e.title)) ]), o("view", {
                    staticClass: "h3 mg-ellipsis"
                }, [ t._v(t._s(e.subTitle)) ]), o("view", {
                    staticClass: "h4 mg-ellipsis"
                }, [ o("text", {
                    staticClass: "var"
                }, [ t._v(t._s(e.showPrice)) ]), t._v("元/月") ]) ], 1);
            })) ]) ], 1) : t._e();
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    de54: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("feab"), a = o("0286");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("b54e");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    e086: function(t, e, o) {},
    e20c: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("3648"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e["default"] = a.a;
    },
    e3c3: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("cc8f"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = {
            mixins: [ n.default ],
            props: {
                info: {
                    type: Object
                }
            },
            data: function() {
                return {
                    PriceDetailVisibled: !1
                };
            }
        };
        e.default = i;
    },
    e7c1: function(t, e, o) {},
    eb83: function(t, e, o) {
        "use strict";
        var n = o("0e1d"), a = o.n(n);
        a.a;
    },
    ec45: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("1dbb"), a = o("e20c");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("59b0");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    ed5f: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("88ea"), a = o("d2d2");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("5013");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    f37d: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("9830"), a = o("405e");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("7874");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, "365dc918", null);
        e["default"] = r.exports;
    },
    f8f5: function(t, e, o) {
        "use strict";
        var n = o("3a1d"), a = o.n(n);
        a.a;
    },
    f982: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("adf8"), a = o("b097");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("377f");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    fe9a: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("914b"), a = o("2893");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("b3e9");
        var s = o("17cc"), r = Object(s["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    feab: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("view", {
                staticClass: "room-detail"
            }, [ t.banners && t.banners.length ? o("room-banner", {
                attrs: {
                    banners: t.banners,
                    mpcomid: "0da79ebe-0"
                }
            }) : t._e(), t.roomTitle ? o("room-title", {
                staticClass: "detail-block",
                attrs: {
                    roomTitle: t.roomTitle || {},
                    mpcomid: "0da79ebe-1"
                }
            }) : t._e(), t.info ? o("room-info", {
                staticClass: "detail-block",
                attrs: {
                    info: t.info || {},
                    mpcomid: "0da79ebe-2"
                }
            }) : t._e(), t.roomSelect ? o("room-select", {
                staticClass: "detail-block",
                attrs: {
                    roomSelect: t.roomSelect || {},
                    mainTitle: t.mainTitle,
                    eventid: "0da79ebe-0",
                    mpcomid: "0da79ebe-3"
                },
                on: {
                    toggleScroll: t.toggleScroll
                }
            }) : t._e(), t.roomTag ? o("room-tag", {
                staticClass: "detail-block",
                attrs: {
                    roomTag: t.roomTag || {},
                    mpcomid: "0da79ebe-4"
                }
            }) : t._e(), t.activity ? o("activity", {
                staticClass: "detail-block",
                attrs: {
                    activity: t.activity || {},
                    mpcomid: "0da79ebe-5"
                }
            }) : t._e(), t.location ? o("location", {
                staticClass: "detail-block",
                attrs: {
                    location: t.location || {},
                    mpcomid: "0da79ebe-6"
                }
            }) : t._e(), t.buildingImages ? o("building-images", {
                staticClass: "detail-block",
                attrs: {
                    buildingImages: t.buildingImages || {},
                    mpcomid: "0da79ebe-7"
                }
            }) : t._e(), t.roomConfig ? o("room-config", {
                staticClass: "detail-block",
                attrs: {
                    roomConfig: t.roomConfig || {},
                    mpcomid: "0da79ebe-8"
                }
            }) : t._e(), t.roomFeatures ? o("room-features", {
                staticClass: "detail-block",
                attrs: {
                    roomFeatures: t.roomFeatures || {},
                    mpcomid: "0da79ebe-9"
                }
            }) : t._e(), t.roomDesc ? o("room-desc", {
                staticClass: "detail-block",
                attrs: {
                    roomDesc: t.roomDesc || "",
                    mpcomid: "0da79ebe-10"
                }
            }) : t._e(), t.roomMates ? o("room-mates", {
                staticClass: "detail-block",
                attrs: {
                    roomMates: t.roomMates || [],
                    mpcomid: "0da79ebe-11"
                }
            }) : t._e(), t.platformEnsure ? o("platform-ensure", {
                staticClass: "detail-block",
                attrs: {
                    platformEnsure: t.platformEnsure || [],
                    mpcomid: "0da79ebe-12"
                }
            }) : t._e(), t.roomAgent && t.brokerIcons && 1 == t.sourceType ? o("room-agent", {
                staticClass: "detail-block",
                attrs: {
                    roomAgent: t.roomAgent || {},
                    brokerIcons: t.brokerIcons || [],
                    phoneNum: t.phoneNum || "",
                    eventid: "0da79ebe-1",
                    mpcomid: "0da79ebe-13"
                },
                on: {
                    madeCall: t.madeCall
                }
            }) : t._e(), t.roomBrand && 2 == t.sourceType && "privateShops" != t.userSourceTag ? o("room-brand", {
                staticClass: "detail-block",
                attrs: {
                    roomBrand: t.roomBrand,
                    phoneNum: t.phoneNum,
                    eventid: "0da79ebe-2",
                    mpcomid: "0da79ebe-14"
                },
                on: {
                    madeCall: t.madeCall
                }
            }) : t._e(), t.sameCommunityRooms && "privateShops" != t.userSourceTag ? o("room-recommend", {
                staticClass: "detail-block",
                attrs: {
                    roomRecommend: t.sameCommunityRooms || {},
                    mpcomid: "0da79ebe-15"
                }
            }) : t._e(), t.similarRooms && "privateShops" != t.userSourceTag ? o("room-recommend", {
                staticClass: "detail-block",
                attrs: {
                    roomRecommend: t.similarRooms || {},
                    mpcomid: "0da79ebe-16"
                }
            }) : t._e(), t.shop && t.roomCanReserveDone ? o("room-button", {
                attrs: {
                    shop: t.shop || {},
                    alreadyRented: t.alreadyRented,
                    roomLiked: t.roomLiked,
                    roomCanReserve: t.roomCanReserve,
                    phoneNum: t.phoneNum,
                    roomId: t.roomId,
                    sourceType: t.sourceType,
                    eventid: "0da79ebe-3",
                    mpcomid: "0da79ebe-17"
                },
                on: {
                    madeCall: t.madeCall
                }
            }) : t._e(), t.showEvaluation && (t.roomBrand || t.roomAgent) ? o("evaluation", {
                attrs: {
                    agent: t.roomAgent,
                    brand: t.roomBrand,
                    roomId: t.roomId,
                    sourceType: t.sourceType,
                    isAgent: 1 == t.sourceType,
                    eventid: "0da79ebe-4",
                    mpcomid: "0da79ebe-18"
                },
                on: {
                    closeDialog: t.closeDialog
                }
            }) : t._e() ], 1);
        }, a = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return a;
        });
    },
    ff77: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i(o("c3c5")), a = i(o("cc8f"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var s = {
            mixins: [ a.default ],
            components: {
                mgImage: n.default
            },
            props: {
                platformEnsure: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            methods: {
                redirectURL: function() {}
            }
        };
        e.default = s;
    }
}, [ [ "2ea6", "common/runtime", "common/vendor" ] ] ]);