(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/MyConcern/main" ], {
    "1da3": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("d05f")).default);
        }).call(this, n("543d").createPage);
    },
    "7c64": function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) if (e % 2) {
                var n = null != arguments[e] ? arguments[e] : {}, o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), o.forEach(function(e) {
                    r(t, e, n[e]);
                });
            } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
            return t;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = o(n("4360")), u = n("ed08"), s = o(n("d05d")), a = n("f8c8"), f = {
            name: "MyConcern",
            components: {
                TitleBarCapsule: function() {
                    return n.e("components/TitleBarWithCapsule").then(n.bind(null, "3878"));
                },
                MyConcernItem: function() {
                    return n.e("pages/UserCenter/MyConcern/MyConcernItem").then(n.bind(null, "e086"));
                }
            },
            mixins: [ s.default ],
            data: function() {
                return {
                    itemListIds: [],
                    nextMark: "",
                    hasMore: !0,
                    loadingMore: !1
                };
            },
            computed: {
                subjectEntities: function() {
                    return c.default.getters["entities/subjectEntities"] || {};
                },
                concernItems: function() {
                    var t = this;
                    return this.itemListIds.length ? this.itemListIds.reduce(function(e, n) {
                        return t.subjectEntities[n].following && e.push(t.subjectEntities[n]), e;
                    }, []) : [];
                }
            },
            mounted: function() {
                this.getMyConcernList();
            },
            onUnload: function() {
                this.itemListIds = [], this.nextMark = "", this.hasMore = !0, this.loadingMore = !1;
            },
            onReachBottom: function() {
                this.getMyConcernList();
            },
            methods: {
                getMyConcernList: function() {
                    var t = this;
                    this.hasMore && !this.loadingMore && (this.loadingMore = !0, (0, a.getMyConcernList)(this.nextMark).then(function(e) {
                        var n = i({}, e), o = n.nextMark, r = n.subjects;
                        r && r.length ? (c.default.commit("entities/UPDATE_SUBJECT_ENTITY_MULTI", r), t.nextMark = o, 
                        t.itemListIds = t.itemListIds.concat(r.map(function(t) {
                            return t.id;
                        }))) : t.hasMore = !1, t.loadingMore = !1;
                    }).catch(function(e) {
                        console.error(e), t.loadingMore = !1;
                    }));
                },
                clickActionBtn: function(t) {
                    var e = this;
                    u.wxp.showActionSheet({
                        itemList: [ "取消关注" ],
                        itemColor: "#e62e4d"
                    }).then(function(n) {
                        void 0 !== n.tapIndex && (0, a.unFollowSubject)(t.id).then(function() {
                            c.default.commit("entities/UPDATE_SUBJECT_ENTITY", {
                                id: t.id,
                                entity: i({}, e.subjectEntities[t.id], {
                                    following: !1
                                })
                            }), wx.showToast({
                                title: "取消关注",
                                icon: "none"
                            });
                        }).catch(function(t) {
                            console.error(t);
                        });
                    }).catch(function(t) {
                        console.error(t), wx.showToast({
                            title: "取消操作",
                            icon: "none"
                        });
                    });
                }
            }
        };
        e.default = f;
    },
    "8fe8": function(t, e, n) {
        n.r(e);
        var o = n("7c64"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    c772: function(t, e, n) {
        var o = n("da54");
        n.n(o).a;
    },
    d05f: function(t, e, n) {
        n.r(e);
        var o = n("f701"), i = n("8fe8");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("c772");
        var c = n("2877"), u = Object(c.a)(i.default, o.a, o.b, !1, null, null, null);
        e.default = u.exports;
    },
    da54: function(t, e, n) {},
    f701: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return i;
        });
    }
}, [ [ "1da3", "common/runtime", "common/vendor" ] ] ]);