(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=script&lang=js&": function(e, t, a) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
                return a;
            }
            return (0, u.default)(e);
        }
        function i(e, t, a) {
            return t in e ? (0, c.default)(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e;
        }
        function r(e, t) {
            var a = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
            return a;
        }
        var d = n(a("./node_modules/babel-runtime/core-js/object/entries.js")), o = n(a("./node_modules/babel-runtime/core-js/promise.js")), c = n(a("./node_modules/babel-runtime/core-js/object/define-property.js")), u = n(a("./node_modules/babel-runtime/core-js/array/from.js")), l = n(a("./node_modules/babel-runtime/core-js/is-iterable.js")), p = n(a("./node_modules/babel-runtime/core-js/get-iterator.js")), f = n(a("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = f.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
        }, g = function() {
            function e(e, t) {
                var a = [], n = !0, s = !1, i = void 0;
                try {
                    for (var r, d = (0, p.default)(e); !(n = (r = d.next()).done) && (a.push(r.value), 
                    !t || a.length !== t); n = !0) ;
                } catch (e) {
                    s = !0, i = e;
                } finally {
                    try {
                        !n && d.return && d.return();
                    } finally {
                        if (s) throw i;
                    }
                }
                return a;
            }
            return function(t, a) {
                if (Array.isArray(t)) return t;
                if ((0, l.default)(Object(t))) return e(t, a);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), m = a("./src/apis/index.js"), y = a("./src/scripts/constants/index.js"), b = a("./src/scripts/kDate.js"), v = a("./src/scripts/utils/index.js"), x = getApp().globalConf, j = function(e) {
            return (0, v.getMd)(e) + " " + (0, b.createKDateInstance)(e).format("w", "ch");
        };
        t.default = {
            data: function() {
                return {
                    today: (0, v.getYyyyMMdd)(new Date()),
                    curday: "",
                    toView: "",
                    current: 1,
                    dayDesc: "",
                    dayList: [],
                    toViewTimer: null,
                    enableToView: !0,
                    contentHeight: 1e3,
                    cachedMatchMap: null,
                    __current: 1
                };
            },
            onLoad: function(e) {
                var t = e.__realPath, a = r(e, [ "__realPath" ]);
                (0, v.navigateToRealPath)(t, a);
                var n = a.date, s = void 0 === n ? this.today : n;
                this.dayDesc = j(s), this.curday = s;
            },
            onShow: function() {
                var e = this;
                (0, v.getWindowHeight)().then(function(t) {
                    e.contentHeight = t;
                }), this.today = (0, v.getYyyyMMdd)(new Date()), this.cachedMatchMap ? this.fetchData(this.curday) : this.loadIndexMatchMap();
            },
            onShareAppMessage: function() {
                return (0, v.getShareAppMessage)({
                    title: "近期热门比赛",
                    options: {
                        date: this.curday
                    }
                });
            },
            methods: {
                loadIndexMatchMap: function() {
                    var e = this;
                    return x.storage.load({
                        key: "indexMatchMap",
                        syncFn: function() {
                            return o.default.resolve({});
                        },
                        expires: 60
                    }).then(function(t) {
                        var a = t.data;
                        e.cachedMatchMap = a;
                    }).then(function() {
                        return e.fetchData(e.curday, {
                            isInit: !0
                        });
                    }).then(function(t) {
                        e.dayList = t;
                    });
                },
                fetchData: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = t.isNext, n = void 0 === a || a, s = t.isInit, i = void 0 !== s && s, r = this.today, d = this.cachedMatchMap, c = (0, 
                    v.getYyyyMMdd)(e), u = r === c, l = d[c], p = [ (0, v.getYyyyMMdd)((0, b.createKDateInstance)(c).jumpTo(0, 0, -1)), c, (0, 
                    v.getYyyyMMdd)((0, b.createKDateInstance)(c).jumpTo(0, 0, 1)) ];
                    if (!u && l && l.fullList) return l.fullList.length && this.setToView(l.fullList.map(function(e) {
                        return l.matchMap[e];
                    })), o.default.resolve(i ? p : c);
                    var f = i ? (0, v.getYyyyMMdd)((0, b.createKDateInstance)(c).jumpTo(0, 0, -2)) : n ? (0, 
                    v.getYyyyMMdd)((0, b.createKDateInstance)(c).jumpTo(0, 0, -1)) : (0, v.getYyyyMMdd)((0, 
                    b.createKDateInstance)(c).jumpTo(0, 0, -3));
                    return this.fetchDataByStorage({
                        today: r,
                        curday: c,
                        targetDay: f
                    }).then(function(e) {
                        return i ? p : e;
                    });
                },
                fetchDataByStorage: function(e) {
                    var t = this, a = e.today, n = e.curday, s = e.targetDay;
                    return x.storage.load({
                        key: m.matchApi.hotMatchList.key,
                        syncParams: {
                            date: s
                        },
                        isAutoSave: a === n
                    }).then(function(e) {
                        var t = e.code, a = e.data, n = (a = void 0 === a ? {} : a).matches;
                        return 0 != t ? o.default.reject() : (0, d.default)(n).map(function(e) {
                            var t = g(e, 2);
                            return {
                                curday: t[0],
                                mdList: t[1].list.map(v.genScheduleOneMatchData)
                            };
                        });
                    }).then(function(e) {
                        return h({}, t.cachedMatchMap, e.map(function(e) {
                            var t = e.curday, n = e.mdList;
                            return {
                                list: n.map(function(e) {
                                    return e.mid;
                                }).slice(0, 9),
                                curday: t,
                                fullList: n.map(function(e) {
                                    return e.mid;
                                }),
                                isLoaded: t === a,
                                matchMap: n.reduce(function(e, t) {
                                    return h({}, e, i({}, t.mid, t));
                                }, {})
                            };
                        }).reduce(function(e, t) {
                            return h({}, e, i({}, t.curday, t));
                        }, {}));
                    }).then(function(e) {
                        if (!e[n]) return {
                            curday: n,
                            cachedMatchMap: e
                        };
                        var a = e[n], s = a.fullList, i = a.matchMap;
                        return t.setToView(s.map(function(e) {
                            return i[e];
                        })), {
                            curday: n,
                            cachedMatchMap: e
                        };
                    }).catch(function() {
                        return {
                            curday: n,
                            cachedMatchMap: h({}, t.cachedMatchMap, i({}, n, {
                                list: [],
                                fullList: [],
                                isLoaded: !0
                            }))
                        };
                    }).then(function(e) {
                        var a = e.curday, n = e.cachedMatchMap;
                        return t.cachedMatchMap = n, x.storage.save({
                            key: "indexMatchMap",
                            data: {
                                data: n
                            },
                            expires: 60
                        }).catch(console.warn), a;
                    });
                },
                handleChangeDay: function(e) {
                    var t = e.detail.current;
                    clearTimeout(this.toViewTimer);
                    var a = this.dayList[t], n = this.dayList.length - 1;
                    if (this.enableToView = !0, 0 === t) {
                        var i = (0, v.getYyyyMMdd)((0, b.createKDateInstance)(a).jumpTo(0, 0, -1));
                        this.dayDesc = j(a), this.curday = a, this.dayList = [ i ].concat(s(this.dayList)), 
                        this.current = 1, this.__current = 1, this.fetchData(i, {
                            isNext: !1
                        });
                    } else if (t === n) {
                        var r = (0, v.getYyyyMMdd)((0, b.createKDateInstance)(a).jumpTo(0, 0, 1));
                        this.dayDesc = j(a), this.curday = a, this.dayList = [].concat(s(this.dayList), [ r ]), 
                        this.current = this.dayList.length - 2, this.__current = this.dayList.length - 2, 
                        this.fetchData(r);
                    } else {
                        var d = this.dayList[t];
                        this.dayDesc = j(d), this.curday = d, this.__current = t, this.fetchData(d);
                    }
                },
                handleScrollToLower: function() {
                    var e = this.today, t = this.curday, a = this.cachedMatchMap[t], n = a.list, s = a.fullList;
                    a.isLoaded || e !== t && n.length !== s.length && (wx.showLoading({
                        title: "加载中"
                    }), this.cachedMatchMap[t].isLoaded = !0, setTimeout(wx.hideLoading, y.MIN_LOADING_TIME));
                },
                setToView: function(e) {
                    var t = this, a = this.curday, n = this.today, s = e.find(function(e) {
                        return e.isInPlay;
                    }), i = e.slice().reverse().find(function(e) {
                        return 2 == +e.livePeriod;
                    }), r = s ? s.mid : i ? i.mid : "";
                    if (a !== n && (r = e[0].mid), this.enableToView) {
                        var d = setTimeout(function() {
                            t.toView = "tua" + r, t.enableToView = !1;
                        }, 300);
                        this.toViewTimer = d;
                    }
                },
                preDay: function() {
                    this.current = this.__current - 1, this.enableToView = !0;
                },
                nextDay: function() {
                    this.current = this.__current + 1, this.enableToView = !0;
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        e.exports = a.p + "pages/index/index.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&lang=wxml&": function(e, t, a) {
        a.r(t), a.d(t, "render", function() {
            return n;
        }), a.d(t, "staticRenderFns", function() {
            return s;
        });
        var n = function() {}, s = [];
        n._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/index/Index.vue": function(e, t, a) {
        a.r(t);
        var n = a("./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&lang=wxml&"), s = a("./src/pages/index/Index.vue?vue&type=script&lang=js&");
        for (var i in s) "default" !== i && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(i);
        a("./src/pages/index/Index.vue?vue&type=style&index=0&lang=scss&");
        var r = a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), d = a("./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config"), o = Object(r.default)(s.default, n.render, n.staticRenderFns, !1, null, null, null);
        "function" == typeof d.default && Object(d.default)(o);
        o.options.__file = "src/pages/index/Index.vue", t.default = o.exports;
    },
    "./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        a.r(t);
        var n = a("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=custom&index=0&blockType=config"), s = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = s.a;
    },
    "./src/pages/index/Index.vue?vue&type=script&lang=js&": function(e, t, a) {
        a.r(t);
        var n = a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=script&lang=js&"), s = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = s.a;
    },
    "./src/pages/index/Index.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {
        a.r(t);
        var n = a("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=style&index=0&lang=scss&"), s = a.n(n);
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = s.a;
    },
    "./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&lang=wxml&": function(e, t, a) {
        a.r(t);
        var n = a("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&lang=wxml&");
        a.d(t, "render", function() {
            return n.render;
        }), a.d(t, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    },
    "./src/pages/index/index.js": function(e, t, a) {
        var n = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/pages/index/Index.vue"));
        (0, n.TuaPage)(s.default);
    },
    13: function(e, t, a) {
        e.exports = a("./src/pages/index/index.js");
    }
}, [ [ 13, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);