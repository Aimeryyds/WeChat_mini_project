(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/home" ], {
    "01ac": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("b92b"), s = a.n(i);
        for (var c in i) "default" !== c && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(c);
        e["default"] = s.a;
    },
    "279b": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("4726"), s = a("cf54");
        for (var c in s) "default" !== c && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(c);
        a("f288");
        var n = a("17cc"), o = Object(n["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = o.exports;
    },
    "3d8a": function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "mg-block",
            props: {
                hasClick: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: ""
                },
                params: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            methods: {
                doClick: function(t) {
                    this.$emit("doClick", t, this.title, this.params);
                }
            }
        };
        e.default = i;
    },
    4726: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "mg-block"
            }, [ a("view", {
                staticClass: "mg-flex mg-block-header"
            }, [ a("view", {
                staticClass: "mg-flex-col mg-ellipsis mg-block-title"
            }, [ t._v(t._s(t.title)) ]), t.hasClick ? a("view", {
                staticClass: "mgic-angle-r",
                attrs: {
                    eventid: "0dc1bf93-0"
                },
                on: {
                    click: t.doClick
                }
            }) : t._e() ]), t._t("default", null, {
                mpcomid: "0dc1bf93-0"
            }) ], 2);
        }, s = [];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return s;
        });
    },
    "5d87": function(t, e, a) {
        "use strict";
        a("6cdc");
        var i = c(a("9f5e")), s = c(a("eea6"));
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, i.default)(s.default));
    },
    "74bc": function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", [ a("view", {
                staticClass: "content home"
            }, [ a("view", {
                staticClass: "mg-flex home-header mg-flex_sa_center"
            }, [ a("view", {
                staticClass: "search-label",
                attrs: {
                    eventid: "6ca957c3-0"
                },
                on: {
                    click: function(e) {
                        t.chooseCity();
                    }
                }
            }, [ a("text", {
                staticClass: "mg-txt-middle"
            }, [ t._v(t._s(t.currentCity.cityName)) ]), a("text", {
                staticClass: "mg-txt-middle mgic-angle-b"
            }) ]), a("view", {
                staticClass: "mg-flex-col search-input",
                attrs: {
                    eventid: "6ca957c3-1"
                },
                on: {
                    click: t.doClick
                }
            }, [ a("text", {
                staticClass: "mg-txt-top mgic-search"
            }), a("text", {
                staticClass: "mg-txt-top"
            }, [ t._v("小区、商圈、地铁站") ]) ]), a("image", {
                staticStyle: {
                    width: "46rpx",
                    height: "42rpx",
                    "margin-left": "34rpx"
                },
                attrs: {
                    src: "https://assets.mgzf.com/appimg/db4ac5c943a0889caa7b65732d749b3d.png",
                    eventid: "6ca957c3-2"
                },
                on: {
                    click: t.redirectKeLai
                }
            }) ]), a("view", {
                staticClass: "mg-flex mg-flex_avg home-entry"
            }, t._l(t.entrys, function(e, i) {
                return a("view", {
                    key: i,
                    staticClass: "mg-flex mg-flex-v entry-row",
                    attrs: {
                        eventid: "6ca957c3-3-" + i
                    },
                    on: {
                        click: function(a) {
                            t.entrysClick(e);
                        }
                    }
                }, [ a("image", {
                    staticClass: "entry-img",
                    attrs: {
                        size: "mini",
                        "lazy-load": !0,
                        src: e.icon
                    }
                }), a("view", {
                    staticClass: "mg-txt_h5"
                }, [ t._v(t._s(e.title)) ]) ]);
            })), a("view", {
                staticClass: "flex-tab-box"
            }, t._l(t.primarys, function(e, i) {
                return a("view", {
                    key: i,
                    staticClass: "flex-tab",
                    attrs: {
                        eventid: "6ca957c3-4-" + i
                    },
                    on: {
                        click: function(a) {
                            t.primarysClick(e);
                        }
                    }
                }, [ a("view", {
                    staticClass: "title"
                }, [ t._v(t._s(e.title)) ]), a("view", {
                    staticClass: "sub-title"
                }, [ t._v(t._s(e.desc)) ]), a("image", {
                    staticClass: "flex-tab-image",
                    attrs: {
                        src: e.icon
                    }
                }) ]);
            })), a("swiper-promote", {
                attrs: {
                    location: "shouye",
                    height: 95,
                    mpcomid: "6ca957c3-0"
                }
            }), t.homeSubjects && t.homeSubjects.length ? a("mg-block", {
                attrs: {
                    title: "推荐专题",
                    mpcomid: "6ca957c3-2"
                }
            }, [ a("view", {
                staticClass: "mg-flex mg-flex-wrap mg-flex_avg"
            }, t._l(t.homeSubjects, function(e, i) {
                return a("view", {
                    key: i,
                    staticClass: "recommend-block mg-radius",
                    attrs: {
                        eventid: "6ca957c3-5-" + i
                    },
                    on: {
                        click: function(a) {
                            t.subjectsClick(e);
                        }
                    }
                }, [ a("mg-image", {
                    staticClass: "recommend-img",
                    attrs: {
                        "lazy-load": "true",
                        src: e.coverImage,
                        mpcomid: "6ca957c3-1-" + i
                    }
                }), a("view", {
                    staticClass: "recommend-info"
                }, [ a("view", {
                    staticClass: "mg-ellipsis mg-txt_h2 mg-txt_bold"
                }, [ t._v(t._s(e.title)) ]), a("view", {
                    staticClass: "mg-ellipsis mg-txt_h6"
                }, [ t._v(t._s(e.subTitle)) ]) ]) ], 1);
            })) ]) : t._e(), t.homeBrands && t.homeBrands.length ? a("mg-block", {
                attrs: {
                    title: "品牌公寓",
                    hasClick: !0,
                    eventid: "6ca957c3-7",
                    mpcomid: "6ca957c3-5"
                },
                on: {
                    doClick: t.jumpShopMore
                }
            }, [ a("scroll-view", {
                staticClass: "recommend-shop-scroll",
                attrs: {
                    "scroll-x": "true"
                }
            }, t._l(t.homeBrands, function(e, i) {
                return a("view", {
                    key: i,
                    staticClass: "recommend-shop",
                    attrs: {
                        eventid: "6ca957c3-6-" + i
                    },
                    on: {
                        click: function(a) {
                            t.gotoRoomDetail(e);
                        }
                    }
                }, [ a("mg-image", {
                    staticClass: "mg-radius shop-img",
                    attrs: {
                        src: e.bgImage,
                        mpcomid: "6ca957c3-3-" + i
                    }
                }), a("view", {
                    staticClass: "shop-num"
                }, [ a("text", {
                    staticClass: "shop-cnt"
                }, [ t._v(t._s(e.roomCount)) ]), a("text", {
                    staticClass: "mg-ellipsis shop-un"
                }, [ t._v("套房源") ]) ]), a("view", {
                    staticClass: "mg-flex mg-flex_sa_center shop-info"
                }, [ a("mg-image", {
                    staticClass: "shop-logo",
                    attrs: {
                        realBackground: "#efefef",
                        type: "mini",
                        src: e.brandLogo,
                        mpcomid: "6ca957c3-4-" + i
                    }
                }), a("text", {
                    staticClass: "mg-flex-col mg-ellipsis shop-name"
                }, [ t._v(t._s(e.name)) ]) ], 1) ], 1);
            })) ], 1) : t._e(), a("mg-block", {
                attrs: {
                    title: "推荐好房",
                    mpcomid: "6ca957c3-6"
                }
            }) ], 1), a("listCollection", {
                attrs: {
                    top: "80",
                    mpcomid: "6ca957c3-7"
                }
            }) ], 1);
        }, s = [];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return s;
        });
    },
    b92b: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = r(a("6b7d")), s = r(a("279b")), c = r(a("1f2b")), n = r(a("c3c5")), o = a("f2de");
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {}, i = Object.keys(a);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(a, t).enumerable;
                }))), i.forEach(function(e) {
                    u(t, e, a[e]);
                });
            }
            return t;
        }
        function u(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t;
        }
        var g = {
            components: {
                mgBlock: s.default,
                swiperPromote: i.default,
                mgImage: n.default,
                listCollection: c.default
            },
            computed: l({}, (0, o.mapGetters)([ "cityId" ]), (0, o.mapState)([ "homeBanners", "homeBrands", "homeSubjects", "currentCity" ])),
            data: function() {
                return {
                    entrys: [ {
                        icon: "/static/images/icons/07e6d0bc1a7e93edd28c2ee229b9e22f.png",
                        title: "找整租",
                        event: "gotoPage",
                        url: "/pages/room/list?rentTypes=3",
                        flag: "shouye_zhengzu"
                    }, {
                        icon: "/static/images/icons/61787c082e4fb72a763606eae85d5452.png",
                        title: "找合租",
                        event: "gotoPage",
                        url: "/pages/room/list?rentTypes=2",
                        flag: "shouye_hezu"
                    }, {
                        icon: "/static/images/icons/3800517865d73c41d4c77a8efb64db2e.png",
                        title: "找公寓",
                        event: "gotoPage",
                        url: "/pages/room/list?flatsTags=2",
                        flag: "shouye_gongyu"
                    }, {
                        icon: "/static/images/icons/shouye_zhongjiefangyuan.png",
                        title: "中介房源",
                        event: "gotoPage",
                        url: "/pages/room/list?sourceType=5",
                        flag: "shouye_zhongjiefangyuan"
                    }, {
                        icon: "/static/images/icons/shouye_lianxiwomen.png",
                        title: "联系我们",
                        event: "gotoPage",
                        url: "/pages/contactUs",
                        flag: "shouye_lianxiwomen"
                    } ],
                    primarys: [ {
                        icon: "/static/images/icons/shouye_jiaotongzhaofang.png",
                        title: "交通找房",
                        desc: "按路程找房",
                        flag: "jiaotongzhaofang"
                    }, {
                        icon: "/static/images/icons/shouye_dituzhaofang.png",
                        title: "地图找房",
                        desc: "查看周边房",
                        flag: "dituzhaofang"
                    }, {
                        icon: "/static/images/icons/shouye_sirendingzhi.png",
                        title: "私人定制",
                        desc: "房东服务你",
                        flag: "sirendingzhi"
                    } ]
                };
            },
            onLoad: function() {
                this._initData(), this.getLocationCity({
                    enforce: !0
                });
            },
            onShareAppMessage: function(t) {
                return {
                    title: "蘑菇租房"
                };
            },
            methods: l({}, (0, o.mapActions)([ "getLocationCity" ]), {
                doClick: function(t) {
                    this.$mgRouter.navigateTo("/pages/search/index");
                },
                jumpShopMore: function(t, e, a) {
                    this.$mgRouter.navigateTo("/pages/room/list", {
                        sourceType: 6
                    });
                },
                _initData: function() {
                    this.$store.dispatch("getHomeInitData");
                },
                chooseCity: function() {
                    this.$mgRouter.navigateTo("/pages/cities", {});
                },
                entrysClick: function(t) {
                    var e = t.event, a = t.url, i = t.flag;
                    "gotoPage" == e ? this.$mgRouter.navigateTo(a, {}) : "jumpViewPage" == e && ("shouye_dituzhaofang" == i && this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: "https://h5.mgzf.com/".concat(this.currentCity.domain, "/searchMap")
                    }), "shouye_lianxiwomen" == i && this.$mgRouter.navigateTo("/pages/contactUs", {}));
                },
                jumpCschat: function() {
                    this.$mgRouter.navigateTo("/pages/contactUs", {});
                },
                primarysClick: function(t) {
                    "jiaotongzhaofang" == t.flag ? this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: "https://h5.mgzf.com/".concat(this.currentCity.domain, "/searchTraffic")
                    }) : "sirendingzhi" == t.flag ? this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: "https://h5.mgzf.com/event/instantFindRoomSearch?cityId=".concat(this.currentCity.cityId)
                    }) : "dituzhaofang" == t.flag && this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: "https://h5.mgzf.com/".concat(this.currentCity.domain, "/searchMap")
                    });
                },
                gotoRoomDetail: function(t) {
                    this.$mgRouter.navigateTo("/pages/shop/brand", {
                        brandId: t.id
                    });
                },
                subjectsClick: function(t) {
                    this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: t.jumpUrl
                    });
                },
                redirectKeLai: function() {
                    var t = this;
                    wx.scanCode({
                        scanType: [ "qrCode" ],
                        success: function(e) {
                            var a = /(\/app\/dl\/)|(h5\.mgzf\.com\/lock\?id)/;
                            if (a.test(e.result)) {
                                var i = new RegExp(/app\/dl\/(\S*)/), s = new RegExp(/\?id=(\S*)/), c = "";
                                i.test(e.result) && (c = e.result.match(i)[1]), s.test(e.result) && (c = e.result.match(s)[1]), 
                                t.$mgRouter.navigateTo("/pages/kelaiDoorLock/index", {
                                    code: c
                                });
                            } else wx.showToast({
                                icon: "none",
                                title: "扫一扫仅用于客来门锁开锁功能"
                            });
                        }
                    });
                }
            })
        };
        e.default = g;
    },
    c16e: function(t, e, a) {},
    c9be: function(t, e, a) {},
    cf54: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("3d8a"), s = a.n(i);
        for (var c in i) "default" !== c && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(c);
        e["default"] = s.a;
    },
    e79e: function(t, e, a) {
        "use strict";
        var i = a("c9be"), s = a.n(i);
        s.a;
    },
    eea6: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("74bc"), s = a("01ac");
        for (var c in s) "default" !== c && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(c);
        a("e79e");
        var n = a("17cc"), o = Object(n["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = o.exports;
    },
    f288: function(t, e, a) {
        "use strict";
        var i = a("c16e"), s = a.n(i);
        s.a;
    }
}, [ [ "5d87", "common/runtime", "common/vendor" ] ] ]);