(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/searchResult/searchResult" ], {
    "./package.json": function(t) {
        t.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(t) {
        t.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/searchResult/index.js": function(t, e, a) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t) {
            if (Array.isArray(t)) {
                for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                return a;
            }
            return (0, p.default)(t);
        }
        function s(t, e, a) {
            return e in t ? (0, h.default)(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t;
        }
        function r(t, e) {
            var a = {};
            for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (a[n] = t[n]);
            return a;
        }
        var o = n(a("./node_modules/babel-runtime/core-js/object/keys.js")), c = n(a("./node_modules/babel-runtime/core-js/set.js")), u = n(a("./node_modules/babel-runtime/core-js/object/entries.js")), d = n(a("./node_modules/babel-runtime/core-js/promise.js")), l = n(a("./node_modules/babel-runtime/core-js/json/stringify.js")), h = n(a("./node_modules/babel-runtime/core-js/object/define-property.js")), p = n(a("./node_modules/babel-runtime/core-js/array/from.js")), f = n(a("./node_modules/babel-runtime/core-js/object/assign.js")), m = n(a("./node_modules/babel-runtime/core-js/is-iterable.js")), b = n(a("./node_modules/babel-runtime/core-js/get-iterator.js")), g = function() {
            function t(t, e) {
                var a = [], n = !0, i = !1, s = void 0;
                try {
                    for (var r, o = (0, b.default)(t); !(n = (r = o.next()).done) && (a.push(r.value), 
                    !e || a.length !== e); n = !0) ;
                } catch (t) {
                    i = !0, s = t;
                } finally {
                    try {
                        !n && o.return && o.return();
                    } finally {
                        if (i) throw s;
                    }
                }
                return a;
            }
            return function(e, a) {
                if (Array.isArray(e)) return e;
                if ((0, m.default)(Object(e))) return t(e, a);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), T = f.default || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
            }
            return t;
        };
        a("./src/pages/searchResult/index.scss");
        var v = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), w = a("./src/scripts/utils/index.js"), D = a("./src/scripts/constants/index.js"), y = a("./src/apis/index.js"), S = getApp().globalConf, k = function(t, e) {
            return 100008 == +e ? {
                fn: "genCBATeamRank",
                tmpl: "srCBATeamRank"
            } : 941 == +e ? {
                fn: "genSoccerCLTeamRank",
                tmpl: "srSoccerCLTeamRank"
            } : D.TEAM_RANK_MAP[t];
        };
        (0, v.TuaPage)({
            data: function() {
                return {
                    tabs: [],
                    title: "腾讯体育+",
                    curIdx: 0,
                    curTab: "",
                    curSubTab: "",
                    isVsSchedule: !1,
                    competitionId: "",
                    contentHeight: 1e3,
                    toView: "",
                    widgetToView: "",
                    schedule: {
                        dates: [],
                        matches: [],
                        apiMatches: {},
                        isFetched: !1,
                        isFetching: !1,
                        isPreNoMore: !1,
                        isPostNoMore: !1
                    },
                    isFetchTop: !1,
                    hasTouchMove: !1,
                    teamRank: {
                        isFetched: !1
                    },
                    isWestTop: !0,
                    teamRankTmpl: "srNBATeamRank",
                    vsSchedule: {
                        isFetched: !1
                    },
                    playerRank: {
                        goal: null,
                        point: null,
                        steal: null,
                        assist: null,
                        blocked: null,
                        rebound: null
                    },
                    widgetData: ""
                };
            },
            onShow: function() {
                var t = this;
                (0, w.getWindowHeight)().then(function(e) {
                    t.setData({
                        contentHeight: e
                    });
                });
            },
            onLoad: function(t) {
                var e = this, a = t.tab, n = void 0 === a ? "schedule" : a, i = t.subTab, s = void 0 === i ? "" : i, r = t.columnId, o = void 0 === r ? 1e5 : r, c = t.widgetData, u = t.serviceType;
                if (c) {
                    try {
                        c = JSON.parse((0, w.decodeUntilEqual)(c));
                    } catch (t) {}
                    console.log("columnId", o), console.log("widgetData", c), console.log("serviceType", u);
                    var d = c.data.jumpUrl, l = void 0 === d ? "" : d;
                    if ("81" == u) {
                        var h = (0, w.getUrlParams)(l), p = h.columnId, f = h.competitionId, m = void 0 === f ? p || o : f;
                        return void this.fetchColumnTabs(m).then(function(t) {
                            var a = t.tabs, i = t.title;
                            (0, w.tryCatch)(function() {
                                e.setLoadedData({
                                    tab: n,
                                    tabs: a,
                                    title: i,
                                    subTab: s,
                                    competitionId: m
                                });
                            });
                        });
                    }
                    (0, w.tryCatch)(function() {
                        e.loadWidgetData(c);
                    });
                } else this.fetchColumnTabs(o).then(function(t) {
                    var a = t.tabs, i = t.title;
                    (0, w.tryCatch)(function() {
                        e.setLoadedData({
                            tab: n,
                            tabs: a,
                            title: i,
                            subTab: s,
                            competitionId: o
                        });
                    });
                });
            },
            loadWidgetData: function(t) {
                var e = this;
                if (t) {
                    try {
                        t = JSON.parse((0, w.decodeUntilEqual)(t));
                    } catch (t) {}
                    console.log(t);
                    var a = t.data, n = a.jumpUrl, i = void 0 === n ? "" : n, s = a.matches, r = void 0 === s ? [] : s, o = a.subTitle, c = a.dataType, u = a.teamIdsParam, d = (0, 
                    w.getUrlParams)(i).columnId || (0, w.getUrlParams)(i).competitionId, h = D.WIDGET_DT_MAP[d][c], p = h.tab, f = h.subTab;
                    if (3 == +c || 2 == +c) return this.setData({
                        title: o,
                        vsSchedule: {},
                        widgetData: (0, l.default)(t),
                        isVsSchedule: !0,
                        widgetToView: "tua" + r[0].startTime.split(" ")[0]
                    }), this.fetchData({
                        curTab: p,
                        teamIdsParam: u,
                        jumpUrl: i
                    }), void wx.setNavigationBarTitle({
                        title: o
                    });
                    var m = (0, w.getUrlParams)(i).date, b = 1 == +c ? m || r[0].startTime.split(" ")[0] : null, g = "4_1_1" === String(c), T = 1 == +c ? m ? "tua" + m : "tua" + r[0].mid : "";
                    console.log("widgetToView: " + T), this.fetchColumnTabs(d).then(function(t) {
                        var a = t.tabs, n = t.title;
                        e.setLoadedData({
                            tab: p,
                            tabs: a,
                            date: b,
                            flag: 2,
                            title: n,
                            subTab: f,
                            isWestTop: g,
                            widgetToView: T,
                            competitionId: d
                        });
                    });
                }
            },
            setLoadedData: function(t) {
                var e = t.tab, a = t.tabs, n = t.date, i = t.flag, s = t.title, o = t.subTab, c = r(t, [ "tab", "tabs", "date", "flag", "title", "subTab" ]);
                this.setData({
                    tabs: a
                });
                var u = a.some(function(t) {
                    return t.path === e;
                }) ? e : "schedule", d = a.findIndex(function(t) {
                    return t.path === u;
                }), l = o || this.getCurSubTab(u);
                this.setData(T({
                    title: s,
                    curIdx: d,
                    curTab: u,
                    curSubTab: l
                }, c)), this.fetchData({
                    curTab: u,
                    curSubTab: l,
                    date: n,
                    flag: i
                }), wx.setNavigationBarTitle({
                    title: s
                });
            },
            handleScrollToLimit: function(t) {
                var e = t.detail.direction, a = this.data.schedule, n = a.isFetching, i = a.isPreNoMore, s = a.isPostNoMore;
                n || "top" === e && i || "bottom" === e && s || ("top" !== e ? this.fetchScrollData(e) : this.setData({
                    isFetchTop: !0
                }));
            },
            fetchScrollData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top";
                this.setData({
                    isFetchTop: !1,
                    "schedule.isFetching": !0
                });
                var e = this.data.schedule.dates, a = e.reduce(function(t, e) {
                    return t > e ? t : e;
                }), n = e.reduce(function(t, e) {
                    return t < e ? t : e;
                }), i = "top" === t ? n : a, s = "top" === t ? 1 : 0;
                this.fetchData({
                    curTab: "schedule",
                    date: i,
                    flag: s
                });
            },
            fetchData: function(t) {
                var e = t.date, a = t.flag, n = t.curTab, i = t.jumpUrl, s = t.isSwipe, o = t.curSubTab, c = t.teamIdsParam, u = r(t, [ "date", "flag", "curTab", "jumpUrl", "isSwipe", "curSubTab", "teamIdsParam" ]);
                switch (n) {
                  case "rank":
                    this.fetchTeamRank();
                    break;

                  case "player":
                    this.fetchPlayerRank(o);
                    break;

                  case "goal":
                  case "assist":
                    this.fetchPlayerRank(n);
                    break;

                  case "schedule":
                    this.fetchSchedule(T({
                        date: e,
                        flag: a,
                        isSwipe: s
                    }, u));
                    break;

                  case "versus":
                    this.fetchVsSchedule(c);
                    break;

                  case "teamSchedule":
                    this.fetchTeamSchedule(i);
                    break;

                  default:
                    console.error("unknow curTab: " + n);
                }
            },
            fetchVsSchedule: function(t) {
                var e = this;
                return S.storage.load({
                    key: y.matchApi.vslist.key,
                    syncParams: {
                        teamIdsParam: t
                    }
                }).then(function(t) {
                    console.log("fetchVsSchedule", t);
                    var a = t.code, n = t.data;
                    if (0 !== a || !n.dates || !n.matches) return d.default.reject({
                        code: a
                    });
                    e.setData({
                        vsSchedule: {
                            dates: n.dates,
                            dateDesc: n.dates.map(w.getTargetTimeStr),
                            isFetched: !0,
                            apiMatches: (0, u.default)(n.matches).map(function(t) {
                                var e = g(t, 2);
                                return s({}, e[0], e[1].list.map(w.genScheduleOneMatchData));
                            }).reduce(function(t, e) {
                                return T({}, t, e);
                            }, {})
                        }
                    });
                    var i = e.data.widgetToView;
                    setTimeout(function() {
                        return e.setData({
                            toView: i
                        });
                    }, 300);
                }).catch(function() {
                    e.setData({
                        vsSchedule: {
                            dates: [],
                            isFetched: !0
                        }
                    });
                });
            },
            fetchSchedule: function(t) {
                var e = this, a = t.date, n = void 0 === a ? "" : a, i = t.flag, s = void 0 === i ? 0 : i, o = r(t, [ "date", "flag" ]);
                return this.setData({
                    "schedule.isFetching": !0
                }), S.storage.load({
                    key: y.matchApi.list.key,
                    syncParams: {
                        date: n,
                        flag: s,
                        columnId: this.data.competitionId
                    }
                }).then(function(t) {
                    var a = t.code, i = t.data;
                    if (0 !== a) return d.default.reject({
                        code: a
                    });
                    e.genScheduleData(T({
                        data: i,
                        date: n,
                        flag: s,
                        isCacheData: !1
                    }, o));
                });
            },
            fetchTeamSchedule: function(t) {
                var e = this;
                return S.storage.load({
                    key: y.teamApi.matchList.key,
                    syncParams: (0, w.getUrlParams)(t)
                }).then(function(t) {
                    var a = t.code, n = t.data;
                    if (0 !== a) return d.default.reject({
                        code: a
                    });
                    for (var s = (0, u.default)(n).map(function(t) {
                        var e = g(t, 2);
                        e[0];
                        return e[1];
                    }).reduce(function(t, e) {
                        return [].concat(i(t), i(e));
                    }, []).map(function(t) {
                        return T({}, t, {
                            date: t.startTime.split(" ")[0],
                            matchInfo: t
                        });
                    }), r = (0, p.default)(new c.default(s.map(function(t) {
                        return t.date;
                    }))), o = [], l = {}, h = 0; h < s.length; h++) {
                        var f = s[h], m = f.date;
                        -1 !== o.indexOf(m) ? l[m] = l[m].concat((0, w.genScheduleOneMatchData)(f)) : l[m] = [ (0, 
                        w.genScheduleOneMatchData)(f) ], o = o.concat(m);
                    }
                    e.setData({
                        vsSchedule: {
                            dates: r,
                            dateDesc: r.map(w.getTargetTimeStr),
                            isFetched: !0,
                            apiMatches: l
                        }
                    });
                    var b = e.data.widgetToView;
                    setTimeout(function() {
                        return e.setData({
                            toView: b
                        });
                    }, 300);
                });
            },
            fetchColumnTabs: function(t, e) {
                return S.storage.load({
                    key: y.matchApi.columnTabs.key,
                    expires: 60,
                    syncParams: {
                        columnId: t
                    }
                }).then(function(t) {
                    var e = t.code, a = t.data, n = [ {
                        path: "schedule",
                        desc: "赛程"
                    } ];
                    if (0 !== e) return {
                        tabs: n,
                        title: "腾讯体育+"
                    };
                    var s = a.rankTabs, r = void 0 === s ? [] : s, o = a.columnName, c = void 0 === o ? "腾讯体育+" : o, u = a.needSchedule, d = r.map(function(t) {
                        return 1 == +t.isTeamRank ? T({}, t, {
                            path: "rank"
                        }) : T({}, t, D.RANK_TABS_TYPE_MAP[t.type]);
                    }).filter(function(t) {
                        return t.path;
                    });
                    return {
                        tabs: u ? [].concat(n, i(d)) : d,
                        title: c
                    };
                });
            },
            fetchTeamRank: function() {
                var t = this, e = this.data.competitionId;
                return S.storage.load({
                    key: y.teamApi.rank.key,
                    syncParams: {
                        competitionId: e
                    }
                }).then(function(a) {
                    var n = a.code, i = a.data;
                    if (0 !== n) return d.default.reject({
                        code: n
                    });
                    var s = k(i.type, e), r = s.fn, o = s.tmpl;
                    t.setData({
                        teamRankTmpl: o
                    }), t[r](i);
                });
            },
            fetchPlayerRank: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "point", a = this.data.competitionId;
                return S.storage.load({
                    key: y.playerApi.rank.key,
                    syncParams: {
                        selects: e,
                        competitionId: a
                    }
                }).then(function(a) {
                    var n = a.code, i = a.data;
                    if (0 != +n || "" === e || !i[e]) return d.default.reject({
                        code: n
                    });
                    t.setData(s({}, "playerRank." + e, {
                        list: i[e].map(function(t) {
                            return T({}, t, {
                                icon: t.icon || D.DEFAULT_AVATAR
                            });
                        }),
                        isFetched: !0,
                        competitionId: t.data.competitionId
                    }));
                }).catch(function() {
                    t.setData(s({}, "playerRank." + e, {
                        list: [],
                        isFetched: !0,
                        competitionId: t.data.competitionId
                    }));
                });
            },
            genScheduleData: function(t) {
                var e = this, a = t.data, n = t.date, r = t.flag, o = t.isSwipe, c = void 0 !== o && o, d = t.isCacheData, l = void 0 !== d && d, h = this.data.schedule, p = h.dates, f = void 0 === p ? [] : p, m = h.matches, b = void 0 === m ? {} : m, v = a.matches, D = a.dates.filter(function(t) {
                    return v[t];
                }), y = {
                    dates: [].concat(i(f), i(D.filter(function(t) {
                        return -1 === f.indexOf(t);
                    }))).sort(),
                    matches: T({}, b, v)
                };
                y.dateDesc = y.dates.map(w.getTargetTimeStr), y.apiMatches = (0, u.default)(y.matches).filter(function(t) {
                    var e = g(t, 1)[0];
                    return !/^__.*__$/.test(e);
                }).map(function(t) {
                    var e = g(t, 2), a = e[0], n = e[1].list;
                    return s({}, a, (void 0 === n ? [] : n).map(w.genScheduleOneMatchData));
                }).reduce(function(t, e) {
                    return T({}, t, e);
                }, {});
                var S = this.setToView({
                    date: n,
                    flag: r,
                    dates: D,
                    schedule: y,
                    isCacheData: l
                });
                this.setData({
                    schedule: T({}, this.data.schedule, y, {
                        isFetched: !0,
                        isFetching: !1
                    })
                }), this.data.hasTouchMove && 0 === Number(r) || c || setTimeout(function() {
                    return e.setData({
                        toView: S
                    });
                }, 300);
            },
            setToView: function(t) {
                var e = t.date, a = t.flag, n = t.dates, i = t.schedule, s = t.isCacheData, r = "tua" + (e || n[0]);
                if (0 === n.length && (0 == +a ? i.isPostNoMore = !0 : (i.isPreNoMore = !0, r = "preNoMore")), 
                this.data.hasTouchMove || (r = this.data.toView || r), !(this.data.hasTouchMove || s && this.data.schedule.isFetched)) {
                    var o = (0, u.default)(i.apiMatches).map(function(t) {
                        var e = g(t, 2);
                        e[0];
                        return e[1].find(function(t) {
                            return t.isInPlay;
                        });
                    }).filter(function(t) {
                        return t;
                    }).map(function(t) {
                        return t.mid;
                    }), c = g(o, 1)[0], d = (0, u.default)(i.apiMatches).map(function(t) {
                        var e = g(t, 2);
                        e[0];
                        return e[1].slice().reverse().find(function(t) {
                            return 2 == +t.livePeriod;
                        });
                    }).filter(function(t) {
                        return t;
                    }).map(function(t) {
                        return t.mid;
                    });
                    r = this.data.widgetToView || (c ? "tua" + c : d.length > 0 ? "tua" + d.pop() : r), 
                    this.data.toView = r;
                }
                return console.log("toView: " + r), r;
            },
            genSoccerTeamRank: function(t) {
                var e = t.list;
                this.setData({
                    teamRank: {
                        idxArr: e.map(function(t) {
                            return T({}, t, {
                                matchNum: Number(t.winMatchCount) + Number(t.planishMatchCount) + Number(t.lostMatchCount)
                            });
                        }),
                        isFetched: !0,
                        competitionId: this.data.competitionId
                    }
                });
            },
            genNFLTeamRank: function(t) {
                var e = t.NFC, a = t.AFC, n = function(t) {
                    return T({}, t, {
                        streakDesc: t.streak.replace("W", "胜").replace("L", "负")
                    });
                };
                this.setData({
                    teamRank: {
                        idxArr: [ {
                            cn: "国联",
                            en: "NFC"
                        }, {
                            cn: "美联",
                            en: "AFC"
                        } ],
                        trData: {
                            NFC: e.map(n),
                            AFC: a.map(n)
                        },
                        isFetched: !0,
                        competitionId: this.data.competitionId
                    }
                });
            },
            genSoccerCLTeamRank: function(t) {
                var e = t.groups, a = t.list;
                this.setData({
                    teamRank: {
                        idxArr: e || (0, o.default)(a),
                        trData: a,
                        isFetched: !0,
                        competitionId: this.data.competitionId
                    }
                });
            },
            genCBATeamRank: function(t) {
                var e = t.index, a = t.list;
                this.setData({
                    teamRank: {
                        idxArr: e.map(function(t) {
                            return t.toLowerCase();
                        }).map(function(t) {
                            return {
                                en: t,
                                cn: "球队"
                            };
                        }),
                        trData: {
                            list: a
                        },
                        isFetched: !0,
                        competitionId: this.data.competitionId
                    }
                });
            },
            genNBATeamRank: function(t) {
                var e = t.index, a = t.east, n = t.west;
                this.data.isWestTop ? e.sort().reverse() : e.sort();
                var i = {
                    idxArr: e.map(function(t) {
                        return t.toLowerCase();
                    }).map(function(t) {
                        return {
                            en: t,
                            cn: {
                                east: "东部联盟",
                                west: "西部联盟"
                            }[t]
                        };
                    }),
                    trData: {
                        east: a,
                        west: n
                    },
                    isFetched: !0,
                    competitionId: this.data.competitionId
                };
                this.setData({
                    teamRank: i
                });
            },
            changeCurTab: function(t) {
                var e = t.currentTarget.dataset.path, a = this.data.tabs.findIndex(function(t) {
                    return t.path === e;
                }), n = this.getCurSubTab(e);
                this.setData({
                    curIdx: a,
                    curTab: e,
                    curSubTab: n
                });
            },
            changeCurSubTab: function(t) {
                var e = t.currentTarget.dataset.path;
                this.setData({
                    curSubTab: e
                }), this.fetchData({
                    curTab: "player",
                    curSubTab: e
                });
            },
            getCurSubTab: function(t) {
                var e = this.data.tabs.find(function(e) {
                    return e.path === t;
                }).subTabs;
                return e && e.length ? e[0].path : "";
            },
            changeSwiper: function(t) {
                var e = t.detail.current, a = this.data.tabs[e].path, n = this.data.tabs.findIndex(function(t) {
                    return t.path === a;
                }), i = "player" !== a ? this.getCurSubTab(a) : this.data.curSubTab || this.getCurSubTab(a), s = "" !== this.data.toView;
                this.setData({
                    curIdx: n,
                    curTab: a,
                    curSubTab: i
                }), this.fetchData({
                    curTab: a,
                    curSubTab: i,
                    isSwipe: s
                });
            },
            handleTouchEnd: function() {
                this.data.isFetchTop && setTimeout(this.fetchScrollData.bind(this), 300);
            },
            handleTouchStart: function() {
                this.data.hasTouchMove || this.data.schedule.isFetched && this.setData({
                    hasTouchMove: !0
                });
            },
            onShareAppMessage: function() {
                var t = this.data, e = t.tabs, a = t.title, n = t.curTab, i = t.curSubTab, s = t.widgetData, r = t.competitionId, o = (0, 
                w.getObjWithoutUndefined)({
                    tab: n,
                    subTab: i,
                    columnId: r,
                    widgetData: (0, w.decodeUntilEqual)(s)
                }), c = e.length ? i ? e.find(function(t) {
                    return t.path === n;
                }).subTabs.find(function(t) {
                    return t.path === i;
                }).desc : e.find(function(t) {
                    return t.path === n;
                }).desc + "榜" : "", u = "schedule" === n ? a + "赛程" : a + c.replace("榜榜", "榜");
                return (0, w.getShareAppMessage)({
                    title: u,
                    options: o
                });
            },
            onTapTeam: function(t) {
                var e = (0, w.getValFromEvent)(t), a = e.teamId, n = e.teamName, i = this.data.competitionId;
                if (console.log("onTapTeam: " + i + " - " + a), 4 == i) {
                    var s = (0, w.getParamStrFromObj)({
                        teamId: a,
                        teamName: n,
                        competitionId: i
                    });
                    console.log(s), wx.navigateTo({
                        url: "/pages/team/team?" + s
                    });
                }
            },
            onTapPlayer: function(t) {
                var e = (0, w.getValFromEvent)(t), a = e.playerId, n = e.playerName, i = this.data.competitionId;
                if (console.log("onTapPlayer: " + i + " - " + a + " - " + n), 4 == i) {
                    var s = (0, w.getParamStrFromObj)({
                        playerId: a,
                        playerName: n,
                        competitionId: i
                    });
                    console.log(s), wx.navigateTo({
                        url: "/pages/player/player?" + s
                    });
                }
            },
            imageError: function(t) {
                var e = t.currentTarget.dataset, a = e.imgType, n = e.imgPath, i = "player" === a ? D.DEFAULT_AVATAR : D.DEFAULT_TEAM;
                this.setData((0, w.setObjByPath)(this.data, i, n));
            }
        });
    },
    "./src/pages/searchResult/index.scss": function(t, e, a) {},
    17: function(t, e, a) {
        t.exports = a("./src/pages/searchResult/index.js");
    }
}, [ [ 17, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);