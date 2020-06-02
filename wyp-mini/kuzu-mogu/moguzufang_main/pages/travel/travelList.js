(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/travel/travelList" ], {
    "1f25": function(t, e, a) {
        "use strict";
        a("6cdc");
        var i = s(a("9f5e")), n = s(a("515b"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, i.default)(n.default));
    },
    2016: function(t, e, a) {
        "use strict";
        var i = a("2760"), n = a.n(i);
        n.a;
    },
    2760: function(t, e, a) {},
    "515b": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("a6bf"), n = a("ca78");
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        a("2016");
        var o = a("17cc"), r = Object(o["a"])(n["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    6675: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("8815"), n = a("718a");
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        a("d846");
        var o = a("17cc"), r = Object(o["a"])(n["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    "718a": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("87cd"), n = a.n(i);
        for (var s in i) "default" !== s && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(s);
        e["default"] = n.a;
    },
    "87cd": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s(a("c3c5")), n = s(a("eb72"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var o = {
                name: "travel.vue",
                components: {
                    mgImage: i.default
                },
                props: {
                    list: {
                        type: Array,
                        default: []
                    }
                },
                data: function() {
                    return {
                        type: 0,
                        location: {}
                    };
                },
                onLoad: function() {
                    this.getLocal();
                },
                methods: {
                    gotoDetail: function(t, e) {
                        this.$mgRouter.navigateTo("/pages/room/detail", {
                            roomId: t,
                            sourceType: e
                        });
                    },
                    callFor: function(e) {
                        t.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    navigated: function(t, e) {
                        var a = n.default.bdToGaoDe(e, t), i = this.location;
                        1 == this.type ? this.$mgRouter.navigateTo("/pages/viewPage/index", {
                            url: "https://h5.mgzf.com/www/searchTrafficMap?startLat=" + i.lat + "&startLng=" + i.lng + "&endLat=" + a[1] + "&endLng=" + a[0] + "&commutingMode=4"
                        }) : this.getLocal(!0);
                    },
                    getLocal: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.$store.dispatch("getLocationCity", {
                            enforce: e
                        }).then(function(e) {
                            e ? (t.type = 1, Object.assign(t.location, e)) : t.type = 2;
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, a("39c3")["default"]);
    },
    8815: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", t._l(t.list, function(e, i) {
                return a("view", {
                    key: i,
                    staticClass: "roomCard-container"
                }, [ a("view", {
                    staticClass: "time-box"
                }, [ a("img", {
                    staticClass: "time-icon",
                    attrs: {
                        src: "https://assets.mgzf.com/h5-static/images/travel/time.png",
                        alt: ""
                    }
                }), a("text", {
                    staticClass: "date"
                }, [ t._v(t._s(e.weekText)) ]), a("text", {
                    staticClass: "time"
                }, [ t._v(t._s(e.timeText)) ]) ]), a("view", {
                    attrs: {
                        eventid: "8fecc90e-0-" + i
                    },
                    on: {
                        click: function(a) {
                            t.gotoDetail(e.roomId, e.sourceType);
                        }
                    }
                }, [ a("view", {
                    staticClass: "map-box"
                }, [ a("image", {
                    staticClass: "map-image",
                    attrs: {
                        src: "http://api.map.baidu.com/staticimage/v2?ak=n5MVVYYkXAD90EC9mMALA1hU&copyright=1&center=" + e.lng + "," + e.lat + "&width=345&height=160&zoom=16&markers=" + e.lng + "," + e.lat + "&markerStyles=-1,http://image.mgzf.com/common/vic/renter/h5/vic_h5_mapicon.png"
                    }
                }), a("view", {
                    staticClass: "locationTips"
                }, [ t._v(t._s(e.location)) ]) ]), a("view", {
                    staticClass: "title-box"
                }, [ a("text", {
                    staticClass: "price"
                }, [ t._v(t._s(e.showPrice) + "元/月") ]), a("text", [ t._v(t._s(e.title)) ]), a("text", {
                    staticClass: "mgic-angle-r"
                }) ]), a("view", {
                    staticClass: "title-box"
                }, [ t._v(t._s(e.subTitle)) ]) ]), a("view", {
                    staticClass: "btn-box"
                }, [ a("view", {
                    staticClass: "btn btnLeft",
                    attrs: {
                        eventid: "8fecc90e-1-" + i
                    },
                    on: {
                        click: function(a) {
                            t.callFor(e.mobile);
                        }
                    }
                }, [ t._v("电话咨询") ]), a("view", {
                    staticClass: "btn btnRight",
                    attrs: {
                        eventid: "8fecc90e-2-" + i
                    },
                    on: {
                        click: function(a) {
                            t.navigated(e.lat, e.lng);
                        }
                    }
                }, [ t._v("导航一下") ]) ]) ]);
            }));
        }, n = [];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return n;
        });
    },
    "9e1c": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = r(a("30a4")), n = a("f2de"), s = r(a("6675")), o = r(a("7990"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t) {
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
            var l = {
                components: {
                    roomCard: s.default,
                    mgMoreLoading: o.default
                },
                data: function() {
                    return {
                        webviewStyles: {
                            progress: {
                                color: "#f65000"
                            }
                        },
                        queryList: [],
                        page: {
                            data: null,
                            isEnd: 1,
                            nextPage: 1,
                            pageNum: 1,
                            pageSize: 10,
                            pid: null,
                            total: 2,
                            totalPage: 1
                        },
                        isLoading: !1,
                        isEmpty: !1,
                        hasMore: !0
                    };
                },
                computed: c({}, (0, n.mapState)({
                    userInfo: function(t) {
                        return t.user.userInfo;
                    }
                }), {
                    isLogin: function() {
                        return !(!this.userInfo || !this.userInfo.renterId);
                    }
                }),
                onLoad: function() {},
                onShow: function() {
                    this.hasMore = !0, this.page.nextPage = 1, this.queryList = [], this.isLogin && this.querySchedules();
                },
                onReachBottom: function() {
                    this.page.isEnd ? (this.isLoading = !1, this.hasMore = !1, console.log("---没有更多---")) : (this.isLoading = !0, 
                    this.hasMore = !0, this.querySchedules());
                },
                methods: {
                    gotoRoomList: function() {
                        this.$mgRouter.navigateTo("/pages/room/list");
                    },
                    goHistory: function() {
                        this.$mgRouter.navigateTo("/pages/travel/history");
                    },
                    querySchedules: function() {
                        var e = this;
                        t.showLoading(), i.default.fetch("renterOperation.querySchedules", {
                            queryType: 0,
                            pageSize: 20,
                            pageNum: this.page.nextPage
                        }).then(function(a) {
                            t.hideLoading(), e.isLoading = !1;
                            var i = a.content, n = i.rooms, s = i.page;
                            e.queryList = e.queryList.concat(n), Object.assign(e.page, s);
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, a("39c3")["default"]);
    },
    a6bf: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "travel-body"
            }, [ a("view", {
                staticClass: "travel-box"
            }, [ a("text", {
                staticClass: "travel-title"
            }, [ t._v("看房行程") ]), t.isLogin ? a("text", {
                staticClass: "travel-subTitle",
                attrs: {
                    eventid: "b26896ee-0"
                },
                on: {
                    click: t.goHistory
                }
            }, [ t._v("看房历史") ]) : t._e() ]), t.isLogin ? a("view", [ t.queryList.length < 1 ? a("view", {
                staticClass: "loginTravel"
            }, [ a("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/681685d035749bdfdd0413c9ad052120.png"
                }
            }), a("view", [ t._v("暂无看房行程") ]), a("view", {
                staticClass: "btn-jump",
                attrs: {
                    eventid: "b26896ee-2"
                },
                on: {
                    click: t.gotoRoomList
                }
            }, [ t._v("立即寻找你心仪的房子") ]) ]) : t._e(), t.queryList && t.queryList.length > 0 ? a("roomCard", {
                attrs: {
                    list: t.queryList,
                    mpcomid: "b26896ee-0"
                }
            }) : t._e(), a("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.isLoading && !t.isEmpty,
                    expression: "isLoading && !isEmpty"
                } ]
            }, [ a("mg-more-loading", {
                staticClass: "more-line",
                attrs: {
                    mpcomid: "b26896ee-1"
                }
            }) ], 1), a("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: !t.hasMore && !t.isEmpty,
                    expression: "!hasMore && !isEmpty"
                } ],
                staticClass: "noMore"
            }, [ t._v("--- 没有更多数据 ---") ]) ], 1) : a("view", {
                staticClass: "loginTravel"
            }, [ a("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/681685d035749bdfdd0413c9ad052120.png"
                }
            }), a("view", [ t._v("预约心仪房源") ]), a("view", [ t._v("您的看房之旅将从这里开始") ]), a("view", {
                staticClass: "btn-jump",
                attrs: {
                    eventid: "b26896ee-1"
                },
                on: {
                    click: t.gotoRoomList
                }
            }, [ t._v("立即寻找你心仪的房子") ]) ]) ]);
        }, n = [];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return n;
        });
    },
    ca78: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("9e1c"), n = a.n(i);
        for (var s in i) "default" !== s && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(s);
        e["default"] = n.a;
    },
    ca9d: function(t, e, a) {},
    d846: function(t, e, a) {
        "use strict";
        var i = a("ca9d"), n = a.n(i);
        n.a;
    },
    eb72: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            gaoDeToBaidu: function(t, e) {
                var a = [], i = 52.35987755982988, n = t, s = e, o = Math.sqrt(n * n + s * s) + 2e-5 * Math.sin(s * i), r = Math.atan2(s, n) + 3e-6 * Math.cos(n * i);
                return a[0] = o * Math.cos(r) + .0065, a[1] = o * Math.sin(r) + .006, a;
            },
            bdToGaoDe: function(t, e) {
                var a = [], i = 52.35987755982988, n = t - .0065, s = e - .006, o = Math.sqrt(n * n + s * s) - 2e-5 * Math.sin(s * i), r = Math.atan2(s, n) - 3e-6 * Math.cos(n * i);
                return a[0] = o * Math.cos(r), a[1] = o * Math.sin(r), a;
            }
        }, n = i;
        e.default = n;
    }
}, [ [ "1f25", "common/runtime", "common/vendor" ] ] ]);