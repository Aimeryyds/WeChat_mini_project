(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/game/game" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/game/Game.vue?vue&type=script&lang=js&": function(e, t, a) {
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t, a) {
            return t in e ? (0, n.default)(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e;
        }
        var o = s(a("./node_modules/babel-runtime/core-js/promise.js")), n = s(a("./node_modules/babel-runtime/core-js/object/define-property.js")), r = s(a("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d, l = r.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
            }
            return e;
        };
        a("./src/pages/game/index.scss"), a("./src/pages/game/tab.scss");
        var c = s(a("./src/pages/game/tabs.js")), u = s(a("./src/dsm.js")), p = s(a("./src/scripts/WechatAppPlayer/index.js")), h = a("./src/apis/index.js"), m = a("./src/scripts/utils/index.js"), f = a("./src/scripts/constants/index.js"), g = a("./src/pages/game/newsList.js"), v = a("./src/pages/game/highlights.js"), b = a("./src/pages/game/renderStat.js"), y = a("./src/pages/game/video.js"), P = "", w = getApp(), x = {}, T = "", I = 6e4, _ = 0, S = getApp().globalConf, D = function(e) {}, j = function(e, t) {
            var a = w.dataCache.matchDetail;
            a ? t && t(a) : u.default.req("https://matchweb.sports.qq.com/kbs/matchDetail?mid=" + e, function(e) {
                e.data && (a = e.data, t && t(a));
            });
        };
        wx.getStorage({
            key: "newsReadedList",
            fail: function(e) {
                wx.setStorage({
                    key: "newsReadedList",
                    data: []
                });
            }
        }), t.default = (d = {
            data: function() {
                return l({}, c.default.data, {
                    showMax: !1,
                    showNoData: !1,
                    showDetail: !1,
                    showTeamStat: !1,
                    showPlayerStat: !1,
                    showVideo: null,
                    videoList: {},
                    videoOnPlayIdx: {
                        idx: 0,
                        tab: 0
                    },
                    videoHeight: "225px",
                    scrollContentHeight: "340px",
                    isPayVideo: !1,
                    autoplay: !1,
                    tvpUrl: "",
                    tvpVideoError: "",
                    tvpState: "",
                    tvpIsAd: "",
                    videoListWidth: "width: 100%",
                    videoListContainerWidth: "100%",
                    videoTabClass: [ "tab1 on", "tab2" ],
                    scrollTop: 0,
                    updateFrequency: 6e4,
                    matchInfo: null,
                    mid: "",
                    competitionId: "",
                    curVid: "",
                    isLogin: !1,
                    isAttended: !1,
                    attendFormId: "",
                    gotoParamStr: "",
                    items: [],
                    noNews: !1,
                    noHighlights: !1,
                    showTeamSquard: !1,
                    showTeamEvents: !1,
                    scoreDetail: [],
                    scoreFirstCol: [],
                    highlightItems: [],
                    teamInfo: [],
                    teamStats: [],
                    teamSquard: [],
                    teamEvents: [],
                    matchListHeight: 1e3,
                    maxPlayers: [],
                    leftPlayerStats: [],
                    leftPlayerHasUrl: [],
                    leftPlayerStatsId: [],
                    leftPlayerStats1Col: [],
                    rightPlayerStats: [],
                    rightPlayerHasUrl: [],
                    rightPlayerStatsId: [],
                    rightPlayerStats1Col: [],
                    scopeDataList: []
                });
            },
            onLoad: function(e) {
                var t = this, a = e.mid, s = e.vid, i = void 0 === s ? "" : s;
                a = (0, m.decodeUntilEqual)(a), P = a;
                var o = (0, m.decodeUntilEqual)(i);
                this.setData({
                    mid: a,
                    curVid: o,
                    competitionId: a.split(":")[0]
                }), (0, m.getUserInfo)({
                    isAutoAuth: !1
                }).then(function() {
                    return t.setData({
                        isLogin: !0
                    }), t.syncAttendStatus(a);
                }).catch(function(e) {
                    f.WX_PROMISE_ERROR !== e.message && t.setData({
                        isLogin: !1
                    });
                }), S.storage.load({
                    key: h.kbsApi.matchDetail.key,
                    syncParams: {
                        mid: a
                    }
                }).then(this.renderPage.bind(this)).catch(function(e) {
                    if (f.WX_PROMISE_ERROR !== e.message) throw e;
                });
            },
            onShow: function() {
                this.setIsAutoPlay();
            },
            onUnload: function() {
                this.video && this.video.stop(), c.default.reset();
            },
            onGotUserInfo: function(e) {
                var t = e.detail;
                console.log("detail", t), "getUserInfo:ok" === t.errMsg && (this.isLogin = !0);
            },
            onTapTeam: function(e) {
                var t = (0, m.getValFromEvent)(e).teamId, a = this.data.matchInfo.competitionId;
                if (4 == a) {
                    var s = (0, m.getParamStrFromObj)({
                        teamId: t,
                        competitionId: a
                    });
                    wx.navigateTo({
                        url: "/pages/team/team?" + s
                    });
                }
            },
            onTapPlayer: function(e) {
                var t = (0, m.getValFromEvent)(e), a = t.playerId, s = t.playerName, i = this.data.matchInfo.competitionId;
                if (4 == i) {
                    var o = (0, m.getParamStrFromObj)({
                        playerId: a,
                        playerName: s,
                        competitionId: i
                    });
                    wx.navigateTo({
                        url: "/pages/player/player?" + o
                    });
                }
            },
            handleAttend: function(e) {
                var t = this, a = e.detail.formId, s = this.data, i = s.mid, n = s.isAttended, r = s.attendFormId;
                (0, m.getUserInfo)({
                    isAutoAuth: !0
                }).then(function() {
                    return o.default.reject(!0);
                }).catch(function(e) {
                    return t.setData({
                        isLogin: e
                    }), e ? o.default.resolve() : o.default.reject();
                }).then(function() {
                    return h.kbsApi.attend({
                        mid: i,
                        type: n ? "cancel" : "attend",
                        formid: n ? r : a
                    });
                }).then(function(e) {
                    var s = e.code, i = e.msg;
                    if (0 !== s) return o.default.reject({
                        code: s,
                        msg: i
                    });
                    t.setData({
                        isAttended: !n,
                        attendFormId: n ? r : a
                    }), n ? wx.showToast({
                        title: "取消成功"
                    }) : S.storage.load({
                        fullKey: "onlyShowAttendModalOnce"
                    }).then(function() {
                        wx.showToast({
                            title: "预约成功"
                        });
                    }).catch(function(e) {
                        "qq" !== S.currentMainLoginType && (wx.showModal({
                            title: "预约成功",
                            content: "当比赛直播开始时，您将会收到微信【服务通知】推送的赛事直播提醒。",
                            showCancel: !1,
                            confirmText: "知道了"
                        }), S.storage.save({
                            fullKey: "onlyShowAttendModalOnce",
                            data: "true",
                            expires: null
                        }));
                    });
                }).catch(function() {
                    wx.showToast({
                        icon: "loading",
                        title: t.data.isLogin ? n ? "取消预约失败" : "预约失败" : "请先登录"
                    });
                });
            },
            syncAttendStatus: function(e) {
                var t = this;
                return S.storage.load({
                    key: h.kbsApi.attendMids.key,
                    expires: 1
                }).then(function(a) {
                    var s = a.data, i = void 0 === s ? [] : s;
                    t.setData({
                        isAttended: -1 !== i.indexOf(e)
                    });
                });
            },
            renderPage: function(e) {
                var t = this, a = e.code, s = e.data;
                if (D(0), 0 === a && s) {
                    var i = s.matchInfo || {};
                    i.startTimeStamp = i.startTime.replace(/:\d\d$/, "").replace(/^\d{4}-/, "").replace("-", "月").replace(" ", "日 "), 
                    T = i.livePeriod, I = 1e3 * parseInt(s.updateFrequency), i.matchState = f.period[i.matchPeriod], 
                    i.livePeriod == f.livePeriod.IN ? i.matchState = s.quarterDesc : i.livePeriod == f.livePeriod.PRE && (i.liveTypeText = f.liveTypeText[i.liveType]), 
                    i.matchStatus = f.state[i.matchPeriod], i.competitionId = s.competitionId;
                    var o = f.COLUMN_ID_TO_SERVICE_TYPE_MAP[s.competitionId];
                    4 == i.matchType ? (o && (this.scopeDataList = [ {
                        service_type: o,
                        team: s.matchInfo.title
                    } ]), wx.getSystemInfo({
                        success: function(e) {
                            var a = e.windowHeight;
                            (0, m.tryCatch)(function() {
                                t.setData({
                                    matchListHeight: a + "px"
                                });
                            });
                        }
                    })) : (o && (this.scopeDataList = [ {
                        service_type: o,
                        team: s.matchInfo.leftName
                    }, {
                        service_type: o,
                        team: s.matchInfo.rightName
                    } ]), i.livePeriod !== f.livePeriod.IN && (i.startTimeStamp = i.startTime.replace(/:\d\d$/, "").replace(/^\d{4}-/, "").replace("-", "月").replace(" ", "日 ")));
                    var n = 4 == i.competitionId, r = 1 == i.livePeriod;
                    if (n && r) {
                        var d = i.mid, l = {
                            key: h.cntvApi.getChannelIdByMid.key,
                            syncParams: {
                                mid: d
                            }
                        };
                        (0, m.fetchDataByStorage)(l).then(function(e) {
                            var a = e.channelId;
                            if (a) {
                                var s = (0, m.getParamStrFromObj)({
                                    mid: d,
                                    channelId: a
                                });
                                t.setData({
                                    gotoParamStr: s
                                });
                            }
                        }).catch(function(e) {
                            if (f.WX_PROMISE_ERROR !== e.message) throw e;
                        });
                    } else this.setData({
                        gotoParamStr: ""
                    });
                    this.setData({
                        matchInfo: i
                    });
                    var u = {};
                    i.livePeriod === f.livePeriod.END && (u.isPostGame = !0), s.liveIdPictureWord && i.livePeriod !== f.livePeriod.PRE || (u.hasTextLive = !1);
                    var w = c.default.reset(u);
                    this.setData({
                        gametab: w
                    }), i.livePeriod === f.livePeriod.IN && s.liveId && i.liveType === f.liveType.VIDEO ? (0, 
                    y.isVipVideo)(P, function(e) {
                        e ? t.setData({
                            isPayVideo: !0,
                            showVideo: !0
                        }) : (t.setData({
                            showVideo: !0,
                            isPayVideo: !1
                        }), t.video = (0, p.default)({
                            sid: s.liveId,
                            pid: s.programId
                        }, {
                            from: "v4160"
                        }), t.video.on("contentchange", function(e) {
                            e.currentContent && t.setData({
                                tvpUrl: e.currentContent.url
                            });
                        }), t.video.on("error", function(e) {
                            return console.log("直播错误", e);
                        }));
                    }, !0) : i.livePeriod !== f.livePeriod.IN && "1" === s.ifHasVideo ? (this.setData({
                        showVideo: !0
                    }), (0, y.fetchVideoList)(P, function(e) {
                        var a = t.data.curVid;
                        x = e;
                        var s = e.totalList, i = e.playbackList, o = !!s.length;
                        if (s.length || i.length) {
                            var n = o ? s[0].vid : i[0].vid, r = o ? "1" == s[0].isPay : "1" == i[0].isPay, d = !!o;
                            if (t.setData({
                                videoList: e,
                                isPayVideo: !1
                            }), a) {
                                var l = s.findIndex(function(e) {
                                    return e.vid === a;
                                }), c = i.findIndex(function(e) {
                                    return e.vid === a;
                                });
                                -1 !== l ? (n = s[l].vid, r = "1" == s[l].isPay, t.setData({
                                    isPayVideo: r,
                                    videoOnPlayIdx: {
                                        idx: l,
                                        tab: 0
                                    }
                                })) : -1 !== c && (d = !1, n = i[c].vid, r = "1" == i[c].isPay, t.setData({
                                    isPayVideo: r,
                                    videoOnPlayIdx: {
                                        idx: c,
                                        tab: 1
                                    },
                                    videoTabClass: [ "tab1", "tab2 on" ]
                                }));
                            } else o || t.setData({
                                videoOnPlayIdx: {
                                    idx: 0,
                                    tab: 1
                                },
                                videoTabClass: [ "tab1", "tab2 on" ]
                            });
                            t.setData({
                                videoListWidth: "width:" + 180 * (d ? s.length : i.length) + "px"
                            }), t.videoContext = wx.createVideoContext("tvp"), t.createVideo(n), t.setData({
                                curVid: a
                            });
                        } else t.setData({
                            showVideo: !1
                        });
                    })) : (this.setData({
                        showVideo: !1
                    }), wx.getSystemInfo({
                        success: function(e) {
                            var a = e.windowHeight;
                            t.setData({
                                scrollContentHeight: a - 56 - 128 + "px"
                            });
                        }
                    })), c.default.clear(this), (0, m.tryCatch)(function() {
                        (0, b.renderStat)(P, t), (0, g.renderNewsList)(P, t), (0, v.renderHighlightsList)(P, t);
                    }), this.fetchMatchInfo();
                }
            },
            setIsAutoPlay: function() {
                var e = this;
                wx.getNetworkType({
                    success: function(t) {
                        "wifi" === t.networkType && e.setData({
                            autoplay: !0
                        });
                    }
                });
            },
            upDatePage: function(e) {
                console.log("upDatePage");
                var t = this, a = e.matchInfo;
                a.startTimeStamp = a.startTime.replace(/:\d\d$/, "").replace(/^\d{4}-/, "").replace("-", "月").replace(" ", "日 "), 
                T = a.livePeriod, I = 1e3 * parseInt(e.updateFrequency), a.matchState = f.period[a.matchPeriod], 
                a.livePeriod == f.livePeriod.IN ? a.matchState = e.quarterDesc : a.livePeriod == f.livePeriod.PRE && (a.liveTypeText = f.liveTypeText[a.liveType]), 
                a.matchStatus = f.state[a.matchPeriod], a.competitionId = e.competitionId, 4 != a.matchType && a.livePeriod !== f.livePeriod.IN && (a.startTimeStamp = a.startTime.replace(/:\d\d$/, "").replace(/^\d{4}-/, "").replace("-", "月").replace(" ", "日 ")), 
                t.setData({
                    matchInfo: a
                }), (0, b.renderStat)(P, t), t.fetchMatchInfo();
            },
            fetchMatchInfo: function() {
                var e = this;
                clearTimeout(_), _ = setTimeout(function() {
                    (0, m.tryCatch)(function() {
                        j(P, function(t) {
                            switch (e.setData({
                                updateFrequency: 1e3 * parseInt(t.updateFrequency)
                            }), t.matchInfo.livePeriod) {
                              case f.livePeriod.PRE:
                                var a = new Date(t.matchInfo.startTime).getTime() - new Date().getTime();
                                I = a > 6e5 ? 6e5 : a > 6e4 ? 6e4 : 1e4;
                                break;

                              case f.livePeriod.IN:
                                I = 1e3 * parseInt(t.updateFrequency);
                                break;

                              case f.livePeriod.END:
                                I = 36e5;
                            }
                            T && T != t.matchInfo.livePeriod ? (D(0), e.renderPage({
                                code: 0,
                                data: t
                            })) : t.matchInfo.livePeriod == f.livePeriod.IN ? e.upDatePage(t) : e.fetchMatchInfo();
                        });
                    });
                }, I);
            },
            createVideo: function(e) {
                var t = this;
                this.video && this.video.stop();
                var a = this.video = (0, p.default)(e, {
                    from: "v4160",
                    getReportParam: function(e) {
                        e(null, {
                            hc_openid: "123",
                            rmd: "hehe"
                        });
                    }
                });
                a.on("error", function(e) {
                    e.message !== f.WX_PROMISE_ERROR && (console.error(e), t.setData({
                        tvpVideoError: e.message || "您当前的环境无法播放，请在腾讯体育客户端中观看"
                    }));
                }), a.on("contentchange", function(e) {
                    e.currentContent && (0, m.tryCatch)(function() {
                        t.setData({
                            tvpUrl: e.currentContent.url,
                            tvpIsAd: !!e.currentContent.isad
                        });
                    });
                });
            },
            onTvpFullScreen: function(e) {
                e.detail.fullScreen ? wx.hideShareMenu() : (I = 10, this.fetchMatchInfo(), wx.showShareMenu());
            },
            onReady: function() {
                var e = this;
                wx.getSystemInfo({
                    success: function(t) {
                        var a = t.windowWidth, s = t.windowHeight, i = s - 53 - .57 * a + "px";
                        !1 === e.data.showVideo && (i = s - 56 - 128 + "px"), e.setData({
                            videoHeight: .57 * a + "px",
                            videoListContainerWidth: a - 32 + "px",
                            scrollContentHeight: i
                        });
                    }
                });
            }
        }, i(d, "onUnload", function() {
            clearTimeout(_);
        }), i(d, "playNewVideo", function(e) {
            var t = (0, m.getValFromEvent)(e), a = t.vid, s = 0;
            this.setData({
                curVid: a
            }), "tab1 on" !== this.data.videoTabClass[0] && (s = 1), this.setData({
                videoOnPlayIdx: {
                    idx: t.idx,
                    tab: s
                }
            }), a && ("1" == (0, m.getValFromEvent)(e).ispay ? this.setData({
                isPayVideo: !0
            }) : (this.setData({
                isPayVideo: !1
            }), this.createVideo(a)));
        }), i(d, "changeVideoTab", function(e) {
            var t = (0, m.getValFromEvent)(e).index, a = x, s = a.totalList, i = a.playbackList;
            "0" === t ? (this.setData({
                videoTabClass: [ "tab1 on", "tab2" ]
            }), this.setData({
                videoListWidth: "width:" + 180 * s.length + "px"
            })) : (this.setData({
                videoTabClass: [ "tab1", "tab2 on" ]
            }), this.setData({
                videoListWidth: "width:" + 180 * i.length + "px"
            }));
        }), i(d, "scroll", function(e) {
            this.data.scrollTop = e.detail.scrollTop;
        }), i(d, "handleTabClick", function(e) {
            var t = e.currentTarget.dataset.index, a = e.currentTarget.dataset.tab;
            c.default.currentTabIndex !== t && (c.default.select({
                index: t,
                name: a,
                lastScrollTopPos: this.data.scrollTop,
                page: this
            }), this.setData({
                scrollTop: this.data.gametab.dict[a].scrollTopPos
            }));
        }), i(d, "readnews", function(e) {
            wx.getStorage({
                key: "newsReadedList",
                success: function(t) {
                    "" !== e.currentTarget.dataset.id && (t.data.push(e.currentTarget.dataset.id), wx.setStorage({
                        key: "newsReadedList",
                        data: t.data
                    }));
                }
            });
        }), i(d, "onShareAppMessage", function() {
            var e = this.data, t = e.mid, a = e.curVid, s = e.matchInfo, i = s.title, o = s.leftGoal, n = s.leftName, r = s.matchDesc, d = s.matchType, l = s.rightGoal, c = s.rightName, u = s.startTime, p = s.livePeriod, h = void 0;
            if (4 != d) {
                var f = r + " " + n + " VS " + c;
                h = 0 == p ? "【预告】" + f + " " + (0, m.formatDate)(u) : 1 == p ? "【直播中】" + f : "【战报】" + r + " " + n + " " + o + ":" + l + " " + c;
            } else h = "【" + (0 == p ? "预告" : 1 == p ? "直播中" : "战报") + "】" + i;
            return (0, m.getShareAppMessage)({
                title: h,
                options: {
                    mid: t,
                    vid: a
                }
            });
        }), i(d, "imageError", function(e) {
            var t = e.currentTarget.dataset.imgPath;
            this.setData((0, m.setObjByPath)(this.data, f.DEFAULT_TEAM, t));
        }), i(d, "__onTvpPlay", function() {
            this.video && this.video.onContentPlay();
        }), i(d, "__onTvpPause", function() {
            this.video && this.video.onContentPause();
        }), i(d, "__onTvpEnded", function() {
            this.video && this.video.onContentEnd();
            var e, t = this.data.videoOnPlayIdx.idx + 1;
            (e = "tab1 on" == this.data.videoTabClass[0] ? this.data.videoList.totalList[t] : this.data.videoList.playbackList[t]) && ("1" == e.isPay ? this.setData({
                isPayVideo: !0
            }) : (this.setData({
                isPayVideo: !1
            }), this.createVideo(e.vid)), this.setData({
                videoOnPlayIdx: {
                    idx: t,
                    tab: this.data.videoOnPlayIdx.tab
                }
            }));
        }), i(d, "__onTvpTimeupdate", function(e) {
            this.video && this.video.onContentTimeupdate(null, e);
        }), i(d, "__onTvpError", function(e) {
            -1 != +e.currentTarget.dataset.contentid && -1 == e.detail.errMsg.indexOf("updateVideoPlayer") && this.video && this.video.onContentError(null, e);
        }), d);
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/game/Game.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        e.exports = a.p + "pages/game/game.json";
    },
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/game/Game.vue?vue&type=template&id=65a52abb&lang=wxml&": function(e, t, a) {
        a.r(t), a.d(t, "render", function() {
            return s;
        }), a.d(t, "staticRenderFns", function() {
            return i;
        });
        var s = function() {}, i = [];
        s._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/dsm.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a("./src/scripts/constants/index.js"), i = function(e, t) {
            var a = s.STORAGE_KEY_PREFIX + e;
            console.log("url: " + e), wx.request({
                url: e,
                method: "POST",
                data: {},
                success: function(e) {
                    var s = e.data;
                    t(s, {
                        isCacheData: !1
                    }), wx.setStorage({
                        key: a,
                        data: {
                            reqData: s,
                            lastModified: Date.now()
                        }
                    });
                },
                fail: function() {
                    wx.showToast({
                        icon: "loading",
                        title: "网络异常"
                    });
                }
            });
        }, o = function() {};
        t.default = {
            req: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o, a = arguments[2], n = s.STORAGE_KEY_PREFIX + e;
                a ? i(e, t) : wx.getStorage({
                    key: n,
                    success: function(a) {
                        var s = a.data, o = s.reqData, n = s.lastModified;
                        t(o, {
                            isCacheData: !0
                        });
                        Date.now() - n >= 3e4 && i(e, t);
                    },
                    fail: function() {
                        i(e, t);
                    }
                });
            }
        };
    },
    "./src/pages/game/Game.vue": function(e, t, a) {
        a.r(t);
        var s = a("./src/pages/game/Game.vue?vue&type=template&id=65a52abb&lang=wxml&"), i = a("./src/pages/game/Game.vue?vue&type=script&lang=js&");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        var n = a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = a("./src/pages/game/Game.vue?vue&type=custom&index=0&blockType=config"), d = Object(n.default)(i.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/pages/game/Game.vue", t.default = d.exports;
    },
    "./src/pages/game/Game.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/game/Game.vue?vue&type=custom&index=0&blockType=config"), i = a.n(s);
        for (var o in s) "default" !== o && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(o);
        t.default = i.a;
    },
    "./src/pages/game/Game.vue?vue&type=script&lang=js&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/game/Game.vue?vue&type=script&lang=js&"), i = a.n(s);
        for (var o in s) "default" !== o && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(o);
        t.default = i.a;
    },
    "./src/pages/game/Game.vue?vue&type=template&id=65a52abb&lang=wxml&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/game/Game.vue?vue&type=template&id=65a52abb&lang=wxml&");
        a.d(t, "render", function() {
            return s.render;
        }), a.d(t, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/pages/game/detail.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.renderDetailInType2 = t.renderDetaildata = void 0;
        var s = a("./src/scripts/utils/index.js");
        t.renderDetaildata = function(e, t) {
            var a = [], i = e.teamInfo, o = [ "球队", e.teamInfo.leftBadge, e.teamInfo.rightBadge ];
            a = [ [], [], [] ];
            var n = e.periodGoals.rows && e.periodGoals.rows[0].slice(1) || [], r = e.periodGoals.rows && e.periodGoals.rows[1].slice(1) || [];
            n.forEach(function(t, s) {
                "-" !== t && (a[0].push(e.periodGoals.head[s]), a[1].push(n[s]), a[2].push(r[s]));
            }), 0 == a[1].length && (a[1].push("-"), a[2].push("-")), (0, s.tryCatch)(function() {
                t.setData({
                    showDetail: !0,
                    teamInfo: i,
                    scoreFirstCol: o,
                    scoreDetail: a
                });
            });
        }, t.renderDetailInType2 = function(e, t) {
            var a = [], s = [ "球队", e.teamInfo.leftBadge, e.teamInfo.rightBadge ], i = e.goals.map(function(e) {
                return e.quarter;
            });
            a.push(i), a.push([]), a.push([]), e.goals.forEach(function(e) {
                a[1].push(e.leftGoal), a[2].push(e.rightGoal);
            }), t.setData({
                showDetail: !0,
                scoreFirstCol: s,
                scoreDetail: a
            });
        };
    },
    "./src/pages/game/highlights.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.renderHighlightsList = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/dsm.js")), i = a("./src/scripts/utils/index.js");
        t.renderHighlightsList = function(e, t) {
            s.default.req("https://matchweb.sports.qq.com/gif/listByMid?mid=" + e, function(a) {
                var s = [];
                0 === a.data.length ? t.setData({
                    noHighlights: !0
                }) : wx.getStorage({
                    key: "newsReadedList",
                    success: function(o) {
                        s = s.concat(a.data).map(function(e) {
                            if (-1 === o.data.indexOf(e.newsId)) return e;
                            e.readed = "readed";
                        }), (0, i.tryCatch)(function() {
                            t.setData({
                                mid: e,
                                highlightItems: s,
                                noHighlights: !1
                            });
                        });
                    }
                });
            });
        };
    },
    "./src/pages/game/index.js": function(e, t, a) {
        var s = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/pages/game/Game.vue"));
        (0, s.TuaPage)(i.default);
    },
    "./src/pages/game/index.scss": function(e, t, a) {},
    "./src/pages/game/maxStat.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.renderMaxStat = function(e, t) {
            if (e.maxPlayers) {
                var a = [].concat(e.maxPlayers);
                t.setData({
                    showMax: !0,
                    maxPlayers: a
                });
            }
        };
    },
    "./src/pages/game/newsList.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.renderNewsList = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/dsm.js")), i = a("./src/scripts/utils/index.js"), o = a("./src/scripts/kDate.js");
        t.renderNewsList = function(e, t) {
            s.default.req("https://app.sports.qq.com/match/relatedNews?mid=" + e, function(e) {
                (0, i.tryCatch)(function() {
                    var a = [];
                    0 === e.data.length ? t.setData({
                        items: [],
                        noNews: !0
                    }) : wx.getStorage({
                        key: "newsReadedList",
                        success: function(s) {
                            e.data.items.forEach(function(e) {
                                e.ptime = (0, o.createKDateInstance)(e.pub_time).toString("M月d日"), [ "0", "1", "2" ].indexOf(e.atype) >= 0 && (-1 !== s.data.indexOf(e.newsId) && (e.readed = "readed"), 
                                a.push(e));
                            }), t.setData({
                                items: a,
                                noNews: 0 === a.length
                            });
                        }
                    });
                });
            });
        };
    },
    "./src/pages/game/playerStat.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.renderPlayerstat = function(e, t) {
            var a = [ "球员" ], s = [], i = [], o = [], n = [ "球员" ], r = [], d = [], l = [];
            e.playerStats.left.forEach(function(e, t) {
                0 === t ? (s.push(e.head.slice(1)), i.push("0")) : (a.push(e.row[1]), s.push(e.row.slice(2)), 
                i.push(e.ifHasUrl), o.push(e.playerId));
            }), t.setData({
                showPlayerStat: !0,
                leftPlayerStats1Col: a,
                leftPlayerStats: s,
                leftPlayerHasUrl: i,
                leftPlayerStatsId: o
            }), e.playerStats.right.forEach(function(e, t) {
                0 === t ? (r.push(e.head.slice(1)), d.push("0")) : (n.push(e.row[1]), r.push(e.row.slice(2)), 
                d.push(e.ifHasUrl), l.push(e.playerId));
            }), t.setData({
                showPlayerStat: !0,
                rightPlayerStats: r,
                rightPlayerStats1Col: n,
                rightPlayerHasUrl: d,
                rightPlayerStatsId: l
            });
        };
    },
    "./src/pages/game/renderStat.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.renderStat = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/dsm.js")), i = a("./src/pages/game/maxStat.js"), o = a("./src/pages/game/teamStat.js"), n = a("./src/pages/game/playerStat.js"), r = a("./src/pages/game/detail.js"), d = a("./src/scripts/utils/index.js");
        t.renderStat = function(e, t) {
            var a = !1;
            s.default.req("https://matchweb.sports.qq.com/kbs/matchStat?from=miniprogram&mid=" + e, function(e) {
                (0, d.tryCatch)(function() {
                    var s = !1;
                    if (e && e.data) if (4 == e.data.matchType) a = !0; else if (3 == e.data.matchType) void 0 === e.data.goals ? a = !0 : (0, 
                    r.renderDetailInType2)(e.data, t); else if (1 == e.data.matchType) {
                        if (t.setData({
                            teamInfo: e.data.teamInfo
                        }), void 0 !== e.data.teamStats && (s = !0, (0, o.renderTeamStat)(e.data, t)), e.data.squard && (s = !0, 
                        t.setData({
                            showTeamSquard: !0,
                            teamSquard: e.data.squard
                        })), e.data.footballEvents) {
                            s = !0;
                            for (var d = e.data.footballEvents, l = [], c = {}, u = 0; u < d.length; u++) "换下" == d[u].type ? (c = d[u]).class = "sub" : "换上" == d[u].type ? (c.playerName2 = d[u].playerName, 
                            l.push(c)) : ("黄牌" == d[u].type ? d[u].class = "yellowcard" : "进球" == d[u].type ? d[u].class = "goal" : "点球" == d[u].type ? d[u].class = "penalty" : "红牌" == d[u].type ? d[u].class = "redcard" : "乌龙" == d[u].type && (d[u].class = "owngoal"), 
                            l.push(d[u])), "FirstHalf" == d[u].eventPeriod && d[u + 1] && "SecondHalf" == d[u + 1].eventPeriod && l.push({
                                eventPeriod: "mid"
                            });
                            t.setData({
                                showTeamEvents: !0,
                                teamEvents: l
                            });
                        }
                        s || (a = !0);
                    } else void 0 === e.data.periodGoals ? a = !0 : ((0, r.renderDetaildata)(e.data, t), 
                    (0, i.renderMaxStat)(e.data, t), (0, o.renderTeamStat)(e.data, t), e.data.playerStats && (0, 
                    n.renderPlayerstat)(e.data, t));
                    t.setData({
                        showNoData: a
                    });
                });
            });
        };
    },
    "./src/pages/game/tab.scss": function(e, t, a) {},
    "./src/pages/game/tabs.js": function(e, t, a) {
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = s.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
            }
            return e;
        }, o = function(e) {}, n = 1, r = {
            data: {
                gametab: {
                    list: [ {
                        selected: !1,
                        tabname: "赛况",
                        name: "status"
                    }, {
                        selected: !0,
                        tabname: "数据",
                        name: "stats"
                    }, {
                        selected: !1,
                        tabname: "资讯",
                        name: "news"
                    } ],
                    dict: {
                        status: {
                            show: !1,
                            showTab: !0,
                            scrollTopPos: 0
                        },
                        stats: {
                            show: !0,
                            showTab: !0,
                            scrollTopPos: 0
                        },
                        news: {
                            show: !1,
                            showTab: !0,
                            scrollTopPos: 0
                        },
                        highlights: {
                            show: !1,
                            showTab: !1,
                            scrollTopPos: 0
                        }
                    }
                }
            },
            clear: function(e) {
                this.select({
                    page: e,
                    lastScrollTopPos: 0,
                    index: 1
                });
            },
            select: function(e) {
                var a = e.lastScrollTopPos, s = e.index, i = e.name, r = e.page;
                i || (i = this.data.gametab.list[s].name), o(0), this.data.gametab.list[n].selected = !1, 
                this.data.gametab.dict[this.data.gametab.list[n].name].show = !1, this.data.gametab.dict[this.data.gametab.list[n].name].scrollTopPos = a, 
                this.data.gametab.list[s].selected = !0, this.data.gametab.dict[i].show = !0, n = s, 
                t.default.currentTabIndex = s, r.setData(this.data);
            },
            reset: function(e) {
                var t = e.isPostGame, a = void 0 !== t && t, s = e.hasTextLive, i = void 0 === s || s;
                return o(0, this.data.gametab.list), a ? (this.data.gametab.list = [ {
                    selected: !1,
                    tabname: "赛况",
                    name: "status"
                }, {
                    selected: !0,
                    tabname: "回顾",
                    name: "news"
                }, {
                    selected: !1,
                    tabname: "数据",
                    name: "stats"
                } ], this.data.gametab.dict = {
                    status: {
                        show: !1,
                        showTab: !0,
                        scrollTopPos: 0
                    },
                    news: {
                        show: !0,
                        showTab: !0,
                        scrollTopPos: 0
                    },
                    stats: {
                        show: !1,
                        showTab: !0,
                        scrollTopPos: 0
                    },
                    highlights: {
                        show: !1,
                        showTab: !1,
                        scrollTopPos: 0
                    }
                }) : (this.data.gametab.list = [ {
                    selected: !1,
                    tabname: "赛况",
                    name: "status"
                }, {
                    selected: !0,
                    tabname: "数据",
                    name: "stats"
                }, {
                    selected: !1,
                    tabname: "资讯",
                    name: "news"
                } ], this.data.gametab.dict = {
                    status: {
                        show: !1,
                        showTab: !0,
                        scrollTopPos: 0
                    },
                    stats: {
                        show: !0,
                        showTab: !0,
                        scrollTopPos: 0
                    },
                    news: {
                        show: !1,
                        showTab: !0,
                        scrollTopPos: 0
                    },
                    highlights: {
                        show: !1,
                        showTab: !1,
                        scrollTopPos: 0
                    }
                }), this.data.gametab.dict.status.showTab = !!i, o(0, this.data.gametab.list), this.data.gametab;
            }
        };
        t.default = i({}, r, {
            currentTabIndex: n
        });
    },
    "./src/pages/game/teamStat.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.renderTeamStat = function(e, t) {
            var a = [];
            e.teamStats && (e.teamStats.forEach(function(e) {
                var t, s;
                parseInt(e.rightVal) + parseInt(e.leftVal) == 0 ? t = s = 0 : (t = parseInt(e.leftVal) / (parseInt(e.rightVal) + parseInt(e.leftVal)) * 100, 
                s = parseInt(e.rightVal) / (parseInt(e.rightVal) + parseInt(e.leftVal)) * 100);
                var i = "", o = "";
                t > s && (i = "blue-bar"), t < s && (o = "blue-bar"), t == s && (i = o = ""), a.push({
                    leftVal: e.leftVal,
                    rightVal: e.rightVal,
                    leftBlue: i,
                    rightBlue: o,
                    text: e.text,
                    leftBar: t,
                    rightBar: s
                });
            }), t.setData({
                showTeamStat: !0,
                teamStats: a
            }));
        };
    },
    "./src/pages/game/video.js": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isVipVideo = t.fetchVideoList = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/dsm.js")), i = a("./src/scripts/utils/index.js");
        t.fetchVideoList = function(e, t) {
            s.default.req("https://matchweb.sports.qq.com/kbs/matchVideoAll?mid=" + e, function(e) {
                (e.data.totalList && e.data.totalList.length > 0 || e.data.playbackList) && (0, 
                i.tryCatch)(function() {
                    t && t(e.data);
                });
            });
        }, t.isVipVideo = function(e, t) {
            s.default.req("https://matchweb.sports.qq.com/vip/webPlayer?mid=" + e, function(e) {
                var a = !1;
                e[1] && "1" === e[1].isPay && (a = !0), t && t(a);
            });
        };
    },
    12: function(e, t, a) {
        e.exports = a("./src/pages/game/index.js");
    }
}, [ [ 12, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);