(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/TextLive/TextLive" ], {
    "./package.json": function(t) {
        t.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(t) {
        t.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/comps/TextLive/index.js": function(t, e, a) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new r.default(function(t, a) {
                    function n(i, s) {
                        try {
                            var o = e[i](s), d = o.value;
                        } catch (t) {
                            return void a(t);
                        }
                        if (!o.done) return r.default.resolve(d).then(function(t) {
                            n("next", t);
                        }, function(t) {
                            n("throw", t);
                        });
                        t(d);
                    }
                    return n("next");
                });
            };
        }
        var s = n(a("./node_modules/babel-runtime/regenerator/index.js")), r = n(a("./node_modules/babel-runtime/core-js/promise.js")), o = n(a("./node_modules/babel-runtime/core-js/is-iterable.js")), d = n(a("./node_modules/babel-runtime/core-js/get-iterator.js")), c = function() {
            function t(t, e) {
                var a = [], n = !0, i = !1, s = void 0;
                try {
                    for (var r, o = (0, d.default)(t); !(n = (r = o.next()).done) && (a.push(r.value), 
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
                if ((0, o.default)(Object(e))) return t(e, a);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        a("./src/comps/TextLive/index.scss");
        var l = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), h = a("./src/apis/index.js"), p = a("./src/scripts/constants/index.js"), u = getApp().globalConf, m = function(t) {}, g = [ "", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/hongpai.png", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/huangpai.png", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/huanren.png", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/football.png", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/shoushang.png", "", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/dianqiu.png", "https://mat1.gtimg.com/sports/sportAppWeb/newdcimg/wulong.png" ], f = null;
        (0, l.TuaComp)({
            properties: {
                matchInfo: {
                    type: Object,
                    value: {}
                },
                gametab: {
                    type: Object,
                    value: {}
                },
                emptyStr: {
                    type: String,
                    value: "直播即将开始，敬请期待！"
                },
                mid: {
                    type: String,
                    value: ""
                },
                scrollHeight: {
                    type: String,
                    value: "1000px"
                },
                updateFrequency: {
                    type: Number,
                    value: 0
                }
            },
            data: {
                competitionId: "",
                matchId: "",
                textIndex: [],
                showedIndex: [],
                toLoadIndex: [],
                quarterList: [ [] ],
                pullDownLoad: !1,
                dataPending: !1,
                hasRendered: !1,
                isScrolling: !1,
                scrollTimer: null,
                showPlus: !1,
                autoLoadNewEventsTimer: null,
                isEnableMore: !1,
                isPostNoMore: !1,
                contentTop: 0
            },
            ready: function() {
                var t = this, e = t.data.mid.split(":"), a = c(e, 2), n = a[0], i = a[1];
                t.setData({
                    competitionId: n,
                    matchId: i
                }), m(0, t.data.gametab), t.fetchIndex(), f = setTimeout(function() {
                    t.startRefresh();
                }, 5e3);
            },
            detached: function() {
                this.stopRefresh(), clearTimeout(f);
            },
            methods: {
                handleTouchEnd: function() {},
                handleTouchStart: function() {},
                handleScroll: function(t) {
                    var e = this;
                    0 === t.detail.scrollTop ? (this.data.pullDownLoad = !1, this.startRefresh()) : e.stopRefresh();
                },
                handleScrollToLimit: function(t) {
                    var e = t.detail.direction;
                    if (m(0), "top" === e) this.data.pullDownLoad = !1, this.startRefresh(); else {
                        if (this.data.dataPending) return;
                        this.data.pullDownLoad = !0, this.fetchDetail({
                            matchId: this.data.matchId,
                            competitionId: this.data.competitionId
                        });
                    }
                },
                fetchIndex: function() {
                    var t = i(s.default.mark(function t() {
                        var e, a, n, i;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e = this.data, a = e.matchId, n = e.competitionId, m(), t.next = 4, u.storage.load({
                                    key: h.textLiveApi.index.key,
                                    expires: 0,
                                    syncParams: {
                                        competitionId: n,
                                        matchId: a
                                    }
                                });

                              case 4:
                                if (0 !== (i = t.sent).code || this.data.dataPending) {
                                    t.next = 10;
                                    break;
                                }
                                if (!(this.data.textIndex && this.data.textIndex.length >= i.data.length)) {
                                    t.next = 8;
                                    break;
                                }
                                return t.abrupt("return");

                              case 8:
                                this.setData({
                                    textIndex: i.data
                                }), this.fetchDetail({
                                    matchId: a,
                                    competitionId: n
                                });

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                detailIndexToLoad: function() {
                    if (this.data.pullDownLoad && this.data.showedIndex.length > 0) {
                        if (this.data.textIndex.length === this.data.showedIndex.length) return [];
                        for (var t = 0; t < this.data.textIndex.length; t++) if (this.data.showedIndex[t] !== this.data.textIndex[t]) {
                            var e = this.data.textIndex.length < t + 20 ? this.data.textIndex.length : t + 20;
                            return this.data.textIndex.slice(t, e);
                        }
                    }
                    this.data.textIndex.length > 20 && this.setData({
                        isEnableMore: !0
                    });
                    var a = this.data.textIndex.length < 20 ? this.data.textIndex.length : 20;
                    return this.data.textIndex.slice(0, a);
                },
                fetchDetail: function() {
                    var t = i(s.default.mark(function t(e) {
                        var a, n, i, r, o = e.matchId, d = e.competitionId;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!(this.data.textIndex.length > 0)) {
                                    t.next = 19;
                                    break;
                                }
                                if (a = this.detailIndexToLoad(), m(0), n = this.data.showedIndex, 0 !== a.length) {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return");

                              case 6:
                                return m(0, h.textLiveApi.detail.key, h.textLiveApi.index.key), t.next = 9, u.storage.load({
                                    key: h.textLiveApi.detail.key,
                                    syncParams: {
                                        competitionId: d,
                                        matchId: o,
                                        ids: a.toString()
                                    }
                                });

                              case 9:
                                i = t.sent, m(0), this.setData({
                                    dataPending: !1,
                                    toLoadIndex: a
                                }), i && 0 === i.code && (this.data.pullDownLoad ? (this.render({
                                    detailData: i.data
                                }), n = n.concat(a)) : (this.data.hasRendered ? this.scrollUpRender({
                                    detailData: i.data
                                }) : this.render({
                                    detailData: i.data
                                }), n = a)), r = !1, m(0, n.length), n.length >= this.data.textIndex.length && (r = !0), 
                                this.setData({
                                    showedIndex: n,
                                    isPostNoMore: r
                                }), t.next = 19;
                                break;

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                scrollUpRender: function(t) {
                    var e = t.detailData, a = this;
                    m();
                    var n = a.data.toLoadIndex.length, i = a.data.toLoadIndex.slice(-1)[0], s = a.data.showedIndex, r = a.data.quarterList.reduce(function(t, e) {
                        return t.concat(e);
                    });
                    m(0, r[0]), r[0] && "1" === r[0].topIndex && s.shift();
                    for (var o = 0; o < s.length; o++) if (s[o] === i) {
                        n = a.data.toLoadIndex.length - o;
                        break;
                    }
                    m(0);
                    var d = a.data.toLoadIndex.slice(0, n - 1);
                    m(0);
                    var c = [];
                    d.forEach(function(t) {
                        e[t] = a.eventPreprocess(e[t]), c.push(e[t]);
                    }), r[0] && "1" === r[0].topIndex && r.shift(), m(0), a.setData({
                        quarterList: a.concatEvents(c.concat(r.slice(0, 20 - d.length))),
                        showedIndex: s.slice(0, 20)
                    });
                },
                render: function(t) {
                    var e = t.detailData, a = this, n = this.data.quarterList.reduce(function(t, e) {
                        return t.concat(e);
                    }), i = [], s = [];
                    m(0, a.data.toLoadIndex), a.data.toLoadIndex.forEach(function(t) {
                        e[t] && (e[t] = a.eventPreprocess(e[t]), "1" === e[t].topIndex ? s.push(e[t]) : i.push(e[t]));
                    }), m(0), a.setData({
                        quarterList: a.concatEvents(s.concat(n.concat(i))),
                        hasRendered: !0,
                        pullDownLoad: !1
                    }), wx.hideLoading(), m(0, a.data.quarterList);
                },
                startRefresh: function() {
                    var t = this;
                    t.stopRefresh();
                    var e = p.livePeriod.IN === t.data.matchInfo.livePeriod ? 1e4 : 36e5, a = setInterval(function() {
                        t.data.gametab.dict && t.data.gametab.dict.status && !1 === t.data.gametab.dict.status.show || (m(t.data.isScrolling, t.data.dataPending), 
                        t.data.isScrolling || t.data.dataPending || t.fetchIndex());
                    }, e);
                    m(0), t.setData({
                        autoLoadNewEventsTimer: a
                    });
                },
                stopRefresh: function() {
                    m(), clearInterval(this.data.autoLoadNewEventsTimer);
                },
                eventPreprocess: function(t) {
                    if (t._processed) return t;
                    var e = /\[(.+?)(\s(.+?))*?\]/g;
                    if (t._processed = !0, this.data.matchInfo.matchType === p.gameType.BASKETBALL) {
                        if (t.teamId === this.data.matchInfo.leftId ? t._teamBadgeSrc = this.data.matchInfo.leftBadge : t.teamId === this.data.matchInfo.rightId && (t._teamBadgeSrc = this.data.matchInfo.rightBadge), 
                        "2" === t.ctype) {
                            var a = e.exec(t.content);
                            a ? t._teamName = a[1] : t.teamId === this.data.matchInfo.leftId ? t._teamName = this.data.matchInfo.leftName : t.teamId === this.data.matchInfo.rightId && (t._teamName = this.data.matchInfo.rightName), 
                            t._content = t.content.replace(e, "").trim();
                        }
                    } else t.event && t.event.length > 0 && (t._teamBadgeSrc = g[t.event[0]], m(0, t._teamBadgeSrc), 
                    "2" === t.ctype && (t.teamId === this.data.matchInfo.leftId ? t._teamName = this.data.matchInfo.leftName : t.teamId === this.data.matchInfo.rightId && (t._teamName = this.data.matchInfo.rightName)));
                    if (t.player && t.player.icon && t.player.icon.indexOf("http://") < 0 && (t.player._playerIcon = "//img1.gtimg.com" + t.player.icon), 
                    t.video && t.video.duration && (t.video._shortDuration = t.video.duration.slice(3)), 
                    t.page && t.page.url) {
                        m(t.page.url);
                        var n = t.page.url.replace(/^http:\/\//, "https://");
                        t._url = encodeURIComponent(n);
                    }
                    return m(), t;
                },
                concatEvents: function(t) {
                    if (!t || t.length < 2) return [ t ];
                    var e = this.data.matchInfo.mid.split(":")[0] === p.leagueType.nba, a = this.data.matchInfo.matchType === p.gameType.FOOTBALL;
                    if (!e && !a) return [ t ];
                    for (var n = [], i = t.length, s = t.length - 1; s > 0; s--) t[s].teamId && t[s - 1].teamId === t[s].teamId && e && (t[s]._hideTitle = !0, 
                    (t[s].plus || t[s]._showPlus) && (t[s - 1]._showPlus = !0)), t[s].quarter && t[s - 1].quarter !== t[s].quarter && "1" !== t[s - 1].topIndex && (t[s]._showQuarter = !0, 
                    t[s].leftGoal || t[s].awayGoal || (t = this.findScore({
                        events: t,
                        i: s
                    })), n.unshift(t.slice(s, i)), i = s);
                    return t[0]._showQuarter = !0, m(0, p.livePeriod.IN, this.data.matchInfo.livePeriod), 
                    p.livePeriod.IN === this.data.matchInfo.livePeriod && (t[0]._isCurrent = !0), t[0].leftGoal || t[0].awayGoal || (t = this.findScore({
                        events: t,
                        i: 0
                    })), m(0), n.unshift(t.slice(0, i)), m(0), n;
                },
                findScore: function(t) {
                    for (var e = t.events, a = t.i, n = a + 1; n < e.length; n++) if (m(0, e[n].awayGoal), 
                    e[n].leftGoal || e[n].awayGoal) return e[a].leftGoal = e[n].leftGoal, e[a].rightGoal = e[n].rightGoal, 
                    e[a].awayGoal = e[n].awayGoal, e[a].homeGoal = e[n].homeGoal, e[a].quarter = e[n].quarter, 
                    e;
                    return e[0]._showQuarter = !1, e;
                },
                previewImage: function(t) {
                    var e = t.target.dataset.src;
                    m(), wx.previewImage({
                        urls: [ e ]
                    });
                }
            }
        });
    },
    "./src/comps/TextLive/index.scss": function(t, e, a) {},
    44: function(t, e, a) {
        t.exports = a("./src/comps/TextLive/index.js");
    }
}, [ [ 44, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);