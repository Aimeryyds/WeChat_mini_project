(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/search/index" ], {
    "0829": function(t, e, a) {
        "use strict";
        a("6cdc");
        var r = s(a("9f5e")), n = s(a("efe3"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, r.default)(n.default));
    },
    "0ebd": function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", {
                staticClass: "dl"
            }, [ t._l(t.result, function(e, r) {
                return [ a("view", {
                    key: "dt" + r,
                    staticClass: "dt"
                }, [ t._v(t._s(e[0]["typeName"])) ]), t._l(e, function(e, n) {
                    return [ "preferredBrand" == e.type ? a("view", {
                        key: e.type + n,
                        staticClass: "dd brand"
                    }, [ a("view", {
                        staticClass: "a",
                        attrs: {
                            eventid: "5f906bd3-0-" + r + "-" + n
                        },
                        on: {
                            click: function(a) {
                                t.setHistory(e.name, e);
                            }
                        }
                    }, [ a("image", {
                        attrs: {
                            src: e.logoImage
                        }
                    }), a("view", {
                        staticClass: "p"
                    }, [ a("view", {
                        staticClass: "var"
                    }, [ t._v(t._s(e.roomCount) + "套") ]), a("view", {
                        staticClass: "span result-name"
                    }, [ t._v(t._s(e.name)) ]) ]) ]) ]) : a("view", {
                        key: e.type + n,
                        staticClass: "dd unbrand"
                    }, [ a("view", {
                        staticClass: "a",
                        attrs: {
                            eventid: "5f906bd3-1-" + r + "-" + n
                        },
                        on: {
                            click: function(a) {
                                t.setHistory(e.name, e);
                            }
                        }
                    }, [ a("view", {
                        staticClass: "var"
                    }, [ t._v(t._s(e.roomCount) + "套") ]), a("view", {
                        staticClass: "span result-name"
                    }, [ t._v(t._s(e.name)) ]) ]) ]) ];
                }) ];
            }) ], 2);
        }, n = [];
        a.d(e, "a", function() {
            return r;
        }), a.d(e, "b", function() {
            return n;
        });
    },
    1518: function(t, e, a) {
        "use strict";
        var r = a("aaab"), n = a.n(r);
        n.a;
    },
    "55a0": function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a("0ebd"), n = a("98eb");
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        a("6d33");
        var o = a("17cc"), i = Object(o["a"])(n["default"], r["a"], r["b"], !1, null, "24d891f5", null);
        e["default"] = i.exports;
    },
    "6d33": function(t, e, a) {
        "use strict";
        var r = a("9534"), n = a.n(r);
        n.a;
    },
    "700b": function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("view", [ a("view", {
                staticClass: "search-header"
            }, [ a("view", {
                staticClass: "search-box"
            }, [ a("text", {
                staticClass: "iconfont mgic-search"
            }), a("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.searchWord,
                    expression: "searchWord"
                } ],
                staticClass: "search-input",
                attrs: {
                    placeholder: "小区、商圈、地铁站",
                    "data-event": "sousuo_morensousuo",
                    focus: "true",
                    eventid: "7d09b48f-0"
                },
                domProps: {
                    value: t.searchWord
                },
                on: {
                    input: [ function(e) {
                        e.target.composing || (t.searchWord = e.target.value);
                    }, t.input ]
                }
            }) ]), a("text", {
                staticClass: "search-btn",
                attrs: {
                    eventid: "7d09b48f-1"
                },
                on: {
                    click: t.goToList
                }
            }, [ t._v("搜索") ]) ]), a("view", {
                staticClass: "hot-tag"
            }, [ t.tags.length > 0 ? a("view", {
                staticClass: "select-header"
            }, [ t._v("热门标签") ]) : t._e(), a("view", {
                staticClass: "tags"
            }, t._l(t.tags, function(e, r) {
                return a("view", {
                    key: e.id,
                    staticClass: "tag-btn",
                    attrs: {
                        eventid: "7d09b48f-2-" + r
                    },
                    on: {
                        click: function(a) {
                            t.link(e);
                        }
                    }
                }, [ t._v(t._s(e.paraName)) ]);
            })) ]), a("imagine", {
                attrs: {
                    result: t.keywords,
                    searchWord: t.searchWord,
                    mpcomid: "7d09b48f-0"
                }
            }) ], 1);
        }, n = [];
        a.d(e, "a", function() {
            return r;
        }), a.d(e, "b", function() {
            return n;
        });
    },
    9534: function(t, e, a) {},
    "98eb": function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a("e2b5"), n = a.n(r);
        for (var s in r) "default" !== s && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(s);
        e["default"] = n.a;
    },
    aaab: function(t, e, a) {},
    c603: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = a("f2de"), n = s(a("55a0"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {}, r = Object.keys(a);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(a, t).enumerable;
                }))), r.forEach(function(e) {
                    i(t, e, a[e]);
                });
            }
            return t;
        }
        function i(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t;
        }
        var c = {
            components: {
                imagine: n.default
            },
            data: function() {
                return {
                    searchWord: "",
                    searchStatus: "",
                    keywords: [],
                    tags: []
                };
            },
            computed: o({}, (0, r.mapGetters)([ "cityId" ])),
            onLoad: function() {
                var t = this;
                this.getHotBusinessArea({
                    cityId: this.cityId,
                    Channel: 9
                }).then(function(e) {
                    t.tags = e.content.list;
                });
            },
            methods: o({}, (0, r.mapActions)([ "fuzzy", "getHotBusinessArea" ]), {
                link: function(t) {
                    this.$mgRouter.redirectTo("/pages/room/list?".concat(t.paraType, "=") + t.paraValue + "&searchName=" + t.paraName);
                },
                input: function() {
                    var t = this;
                    this.searchStatus = "load", this.fuzzy({
                        sourcePage: 2,
                        serviceVersion: 110,
                        searchWord: this.searchWord
                    }).then(function(e) {
                        "10000" == e.code && (t.keywords = t.groupBy(e.content.keywords, "type"));
                    });
                },
                groupBy: function(t, e) {
                    return t.reduce(function(t, a) {
                        var r = a[e];
                        return t[r] = t[r] || [], t[r].push(a), t;
                    }, {});
                },
                goToList: function() {
                    this.$mgRouter.redirectTo("/pages/room/list", {
                        searchWord: this.searchWord
                    });
                }
            })
        };
        e.default = c;
    },
    da1a: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a("c603"), n = a.n(r);
        for (var s in r) "default" !== s && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(s);
        e["default"] = n.a;
    },
    e2b5: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            props: {
                result: Array,
                searchWord: String
            },
            methods: {
                setHistory: function(t, e) {
                    if ("preferredBrand" == e.type) this.$mgRouter.redirectTo("/pages/shop/brand", {
                        brandId: e.paraValue
                    }); else if ("commonBrand" == e.type) this.$mgRouter.redirectTo("/pages/shop/landlord", {
                        landlordId: e.paraValue
                    }); else {
                        var a = "searchWord=".concat(this.searchWord, "&searchName=").concat(t, "&").concat(e.paraName, "=").concat(e.paraValue);
                        this.$mgRouter.redirectTo("/pages/room/list?" + a);
                    }
                }
            }
        };
        e.default = r;
    },
    efe3: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a("700b"), n = a("da1a");
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        a("1518");
        var o = a("17cc"), i = Object(o["a"])(n["default"], r["a"], r["b"], !1, null, null, null);
        e["default"] = i.exports;
    }
}, [ [ "0829", "common/runtime", "common/vendor" ] ] ]);