var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/interopRequireWildcard"), i = e(require("../../js/util")), a = e(require("../../js/const")), n = require("../../js/lc-common"), s = e(require("../../js/store/newlocal")), o = t(require("../../js/lib/wx-cookie")), r = require("../../js/store/city"), h = require("../../../store/index"), c = require("../../../services/jump"), l = new getApp().global, u = require("../../js/authorize.js"), d = require("../../js/login_manager.js"), m = require("../../js/event"), p = require("../../js/netspeed");

require("../../js/promise-finally");

var f = new o.default(), g = [ {
    url: "http://p.qpic.cn/ruop/0/1535441380395687185/0"
} ];

Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        activeIndex: {
            type: Number,
            observer: function(t, e) {
                2 === t ? this.onPageShow() : 2 === e && this.onPageHide();
            }
        },
        pullDownRefreshCount: {
            type: Number,
            observer: function() {
                2 === this.data.activeIndex && this.onPullDownRefresh();
            }
        }
    },
    data: {
        g: l,
        c: a,
        start: 0,
        cityName: "",
        dataList: [],
        showType: "loading",
        fullvideo: !1,
        showControls: !1,
        showFullBtn: !1,
        weishi: {},
        traffic: "",
        weather: {},
        banners: [],
        listAnimData: {},
        showEmos: "none",
        emoAnimData: {},
        danmuAnimData: {},
        danmuHolderHeight: 0,
        showTabLoading: !1,
        isNewLocal: !0,
        isIOS: !1,
        tabIsFixed: !1,
        tabRect: {},
        curLocalFeed: a.localFeedArr.AROUND_THING.id,
        currentTab: a.localFeedArr.AROUND_THING.id,
        scrollLeft: 0,
        tabs: [ a.localFeedArr.AROUND_THING.id, a.localFeedArr.GOOD_ACT.id, a.localFeedArr.WORTH_GO.id, a.localFeedArr.WORTH_EAT.id, a.localFeedArr.GOOD_WELFARE.id ],
        tabObj: [],
        tabPanel: [],
        hiList: [],
        isFirst: !0,
        emoStore: [],
        emoLock: [ !0, !0, !0 ],
        emoAnimate: !0,
        emoShowAnimate: "",
        emoInfo: a.emoInfo,
        isIphoneX: !1,
        commentMaxLength: 34,
        urbanMsg: {},
        greetListCurPage: 0,
        greetListPageSize: 20,
        scrollTop: 0,
        isShowTopNum: !1,
        animationData: null,
        pullNewsInfo: "",
        dataCache: {},
        scrollTopCache: {},
        hasScrollAnimation: !0,
        pulldownPending: !1
    },
    lifetimes: {
        created: function() {},
        attached: function() {},
        ready: function() {},
        detached: function() {
            this.onUnload(), this.onHide();
        }
    },
    pageLifetimes: {
        show: function() {
            l.hasSwitchCity && (this.onShow(), this.onReady(), this.onLoad());
        },
        hide: function() {
            this.onHide(), this.onUnload();
        }
    },
    methods: {
        onLoad: function(t) {
            var e = this, i = this;
            return this.mutex = {}, this.choice = !1, this.hasInputComment = !1, this.sayhiListHeight = 0, 
            this.sayhiItemHeight = 0, this.sayhiFetchTime = 0, this.queryData = t, this.hiMem = {}, 
            this.beginTime = parseInt(new Date().getTime() / 1e3), this.setData({
                isIphoneX: l.isIphoneX
            }), new Promise(function(t, a) {
                wx.getSetting ? e.getDataList(!0).then(t, a) : (wx.showModal({
                    title: "提示",
                    content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
                    success: function(e) {
                        i.getDataList(!0).then(t, a);
                    }
                }), e.getDataList(!0).then(t, a)), e.setData({
                    curLocalFeed: e.data.tabs[0],
                    currentTab: e.data.tabs[0]
                }), l.mta.Page.init();
            });
        },
        onShow: function() {
            var t = this;
            this.video = wx.createVideoContext("video", this);
            var e = i.getStorage(a.STORAGE_LC_SELECTED_CITYINFO);
            l.hasSwitchCity && e && (l.hasSwitchCity = !1, this.setData({
                cityName: e.chlname,
                scrollLeft: 0
            }), l.comPostInfo.chlid = e.chlid, l.comPostInfo.chlname = e.chlname, this.getGreetList(), 
            this.getHeaderInfo(), this.parseTabs().then(function() {
                t.getDataList(!1, null, !0);
            })), this.setData({
                start: parseInt(new Date().getTime() / 1e3)
            }), l.localtab && this.data.tabObj.map(function(e) {
                e.id == a.localFeedArr[l.localtab].id && (t.switchTab({
                    target: {
                        dataset: {
                            idx: 1,
                            cur: e.id
                        }
                    }
                }, !0), l.localtab = "");
            }), this.playVideo(), this.startDanmu(), i.rep({
                opType: "pv",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        onHide: function() {
            this.stopDanmu();
        },
        onUnload: function() {
            this.isCurrentPageActive && i.reportPageLeave("local_page", this);
        },
        onReady: function() {
            this.listAnim = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            }), this.emoAnim = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            }), this.danmuAnim = wx.createAnimation({
                duration: 100,
                timingFunction: "ease"
            }), l.currentPage = "local_page", this.setData({
                isIOS: /iphone/.test(wx.getSystemInfoSync().model.toLowerCase())
            });
        },
        parseTabs: function(t) {
            var e = [], n = this, s = function(i) {
                i.map(function(t) {
                    var i = {
                        id: t
                    };
                    for (var n in a.localFeedArr) if (a.localFeedArr[n].id == t) {
                        i.name = a.localFeedArr[n].name;
                        break;
                    }
                    e.push(i);
                });
                var s = 0;
                t && e.map(function(t, e) {
                    t.id == n.data.curLocalFeed && (s = e);
                }), n.setData({
                    tabObj: e,
                    curLocalFeed: e[s].id,
                    currentTab: e[s].id
                });
            };
            return new Promise(function(t, e) {
                !function(t, e) {
                    var n = [];
                    i.fetch(a.api[a.localFeedArr.GOOD_ACT.id]).then(function(e) {
                        (e = e.data).code || (e.newslist.map(function(t) {
                            t.act_type = t.act_type.toString(), -1 != a.ALLOW_ACT_TYPE.indexOf(t.act_type) && n.push(t);
                        }), 0 == n.length ? s([ a.localFeedArr.AROUND_THING.id ]) : s([ a.localFeedArr.AROUND_THING.id, a.localFeedArr.GOOD_ACT.id ])), 
                        t();
                    }, function(e) {
                        s([ a.localFeedArr.AROUND_THING.id ]), t();
                    });
                }(t);
            });
        },
        onTabItemTap: function(t) {
            i.rep({
                opType: "bottom_bar_click",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        playVideo: function() {
            var t = this;
            wx.getNetworkType({
                success: function(e) {
                    "wifi" == e.networkType && t.video && setTimeout(function() {
                        t.video.play();
                    }, 300);
                }
            });
        },
        hasWeishi: function() {
            return !!this.data.weishi.url;
        },
        useWorker: function() {
            return "ios" == l.comPostInfo.platform;
        },
        ticker: function() {
            this.timer = setInterval(function() {
                Math.random() > .75 && m.emit("insertSayHi");
            }, 500);
        },
        startDanmu: function() {
            var t = this;
            this.useWorker() ? (this.worker && this.worker.terminate && this.worker.terminate(), 
            this.worker = wx.createWorker("workers/request/local.js"), this.worker && this.worker.onMessage(function(e) {
                t.data.showType && "loading" != t.data.showType && t.worker.terminate(), "insertSayHi" == e.msg && t.setEmoHi();
            })) : (this.ticker(), m.on("insertSayHi", this, function() {
                t.data.showType && "loading" != t.data.showType ? clearInterval(t.timer) : t.setEmoHi();
            }));
        },
        stopDanmu: function() {
            this.useWorker() ? this.worker && (this.worker.terminate(), this.worker = null) : (m.remove("insertSayHi", this), 
            clearInterval(this.timer));
        },
        getHeaderInfo: function() {
            var t = this;
            i.fetch(a.api.getHeaderInfo, {
                chlid: l.comPostInfo.chlid
            }, null, "GET").then(function(e) {
                (e = e.data).code || (e.data.weishi = e.data.weishi || {}, e.data.weishi.lock = !t.data.weishi.lock, 
                e.data.traffic = e.data.traffic || [], p.startNetwork().then(function(i) {
                    t.setData({
                        showType: "",
                        weishi: "android" == l.comPostInfo.platform || -1 != [ p.NET_SPEED.LOW.TYPE, p.NET_SPEED.MIDDLE.TYPE, p.NET_SPEED.NONE.TYPE, p.NET_SPEED.UNKNOWN.TYPE ].indexOf(i.networkType) || "wifi" != i.type ? {} : e.data.weishi,
                        traffic: e.data.traffic.join(","),
                        banners: e.data.imgs && e.data.imgs.url ? [ e.data.imgs ] : g
                    }), t.data.weishi.url && t.playVideo(), t.setData({
                        showEmos: t.data.weishi.url ? "none" : ""
                    });
                }));
            }, function(t) {}), i.fetch(a.api.getWeatherInfo, {
                chlid: l.comPostInfo.chlid
            }, null, "GET").then(function(e) {
                (e = e.data).ret ? t.setData({
                    weather: {}
                }) : t.setData({
                    weather: e.weatherInfo
                });
            }, function(t) {}), this.getUrbanMsg();
        },
        getGreetList: function(t) {
            t || (this.sayhiListHeight = 0, this.danmuAnim && (this.danmuAnim.translate(0, 0).step({
                duration: 0
            }), this.setData({
                danmuAnimData: this.danmuAnim.export()
            })), this.setData({
                greetListCurPage: 0,
                emoStore: [],
                emoLock: [],
                hiList: [],
                danmuHolderHeight: 0
            }));
            var e = {
                city_id: l.comPostInfo.chlid,
                last_id: this.data.greetListCurPage,
                page_size: this.data.greetListPageSize
            };
            e.city_id && s.getGreetList(this, e);
        },
        setEmoHi: function(t) {
            var e = this, a = this.data.hiList, n = t || this.data.emoStore.shift(), s = this.data.danmuHolderHeight;
            if (this.hiMem || (this.hiMem = {}), n) {
                if (n.id && this.hiMem[n.id]) return;
                a.push(n), a.length > 4 && (a.shift(), s += -1 * this.sayhiItemHeight);
                var o = [], r = a.length;
                a.map(function(t, i) {
                    return o[i] = !e.data.emoLock[i], 2 == r ? 0 == i && (t.opacity = o[i] ? "0.55" : "0.54") : 3 == r ? 0 == i ? t.opacity = o[i] ? "0.55" : "0.54" : 1 == i && (t.opacity = o[i] ? "0.9" : "0.91") : r > 3 && (0 == i || 1 == i ? t.opacity = o[i] ? "0.55" : "0.54" : 2 == i && (t.opacity = o[i] ? "0.9" : "0.91")), 
                    t;
                }), a.length > 3 ? this.sayhiListHeight ? (this.danmuAnim.translate(0, this.sayhiListHeight).step(), 
                this.setData({
                    emoLock: o,
                    hiList: a,
                    danmuHolderHeight: s,
                    danmuAnimData: this.danmuAnim.export()
                }), this.sayhiListHeight += this.sayhiItemHeight) : i.getRect(".lc-sayhi-item-wrap", function(t) {
                    t && (e.sayhiItemHeight = -1 * t.height, e.sayhiListHeight = -1 * t.height, e.danmuAnim.translate(0, e.sayhiListHeight).step(), 
                    e.setData({
                        emoLock: o,
                        hiList: a,
                        danmuHolderHeight: s,
                        danmuAnimData: e.danmuAnim.export()
                    }), e.sayhiListHeight += e.sayhiItemHeight);
                }, this) : this.setData({
                    emoLock: o,
                    hiList: a
                });
            } else this.sayhiFetchTime || (this.getGreetList(!0), this.sayhiFetchTime = +new Date()), 
            +new Date() - this.sayhiFetchTime > 5e3 && (this.sayhiFetchTime = 0);
        },
        getUrbanMsg: function() {
            var t = {
                city_id: l.comPostInfo.chlid,
                city_name: this.data.cityName
            };
            t.city_id && s.getUrbanMsg(this, t);
        },
        getDataList: function(t, e, n) {
            var o = this;
            return new Promise(function(r, h) {
                e || (e = {
                    forward: a.forward.first,
                    is_local: 1
                }), e.cur_local_feed = o.data.curLocalFeed, e.forward === a.forward.first && t ? i.loc().then(function(t) {
                    o.setData({
                        cityName: t.chlname
                    }), o.getGreetList(), o.getHeaderInfo(), o.parseTabs().then(function() {
                        e.cur_local_feed = o.data.tabObj[0].id, s.getDataList(o, e, function(t) {
                            t ? r() : h();
                        }, n);
                    });
                }) : s.getDataList(o, e, function(t) {
                    t ? r() : h();
                }, n);
            });
        },
        formSubmit: function(t) {},
        formReset: function() {},
        onReachBottom: function() {
            var t = {
                forward: a.forward.pullUp,
                is_local: 1,
                cachedCount: this.data.dataList.length
            };
            this.hasToasted || (this.hasToasted = {}), this.getDataList(!1, t), i.rep({
                opType: "updated_turn",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        onPullDownRefresh: function() {
            var t = this;
            if (!this.data.pulldownPending) {
                var e = {
                    pulldownPending: !0
                };
                this.data.scrollTop >= 0 && (e.scrollTop = 0), this.setData(e), p.usenet().then(function() {
                    i.loc().then(function(e) {
                        t.setData({
                            cityName: e.chlname
                        }), t.parseTabs(!0).then(function() {
                            var e = {
                                forward: a.forward.pullDown,
                                is_local: 1
                            };
                            t.getDataList(!1, e).then(function() {
                                return t.toggleUpdatedTips();
                            }), t.getHeaderInfo();
                        });
                    });
                }, function() {
                    wx.stopPullDownRefresh();
                }), i.rep({
                    opType: "updated_pull",
                    fromPage: "local_page",
                    beginTime: this.data.start
                });
            }
        },
        setTabRect: function() {
            var t = this;
            if (t.data.tabRect.top) return !1;
            i.getRect(".js-ag-tab", function(e) {
                t.setData({
                    tabRect: e
                });
            }, this);
        },
        noInterestTap: function(t) {
            wx.showToast({
                title: "减少类似内容"
            });
            var e = t.currentTarget.dataset.newsid, n = this.data.dataList, s = i.getQueryIndex(n, "id", e);
            "undefined" != s && (n.splice(s, 1), this.setData({
                dataList: n
            })), i.fetch(a.api.dislikeUrl, {
                id: e
            }, {}).then(function() {}, function() {});
        },
        sayHi: function() {
            this.data.emoAnimate ? (this.listAnim.translate("-60%", 0).opacity(1).step({
                duration: this.hasWeishi() ? 0 : 500
            }), this.emoAnim.rotate(360).step(), this.setData({
                emoAnimate: !1,
                listAnimData: this.listAnim.export(),
                emoAnimData: this.emoAnim.export()
            }), this.hasWeishi() && this.setData({
                showEmos: ""
            })) : (this.listAnim.translate(12, 0).opacity(0).step({
                duration: this.hasWeishi() ? 0 : 500
            }), this.emoAnim.rotate(-360).step(), this.setData({
                emoAnimate: !0,
                listAnimData: this.listAnim.export(),
                emoAnimData: this.emoAnim.export()
            }), this.hasWeishi() && this.setData({
                showEmos: "none"
            })), i.rep({
                opType: "clk_sayhi",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        emoSayHi: function(t) {
            var e = this, a = t.target.dataset.cur, n = t.target.dataset.mood;
            this.listAnim.translate(12, 0).opacity(0).step({
                duration: this.hasWeishi() ? 0 : 500
            }), this.setData({
                emoAnimate: !0,
                listAnimData: this.listAnim.export()
            }), this.hasWeishi() && this.setData({
                showEmos: "none"
            }), wx.getNetworkType({
                success: function(t) {
                    "none" == t.networkType ? wx.showToast({
                        icon: "none",
                        title: "网络不给力，稍后再试"
                    }) : d.checkLogin("", e, function() {
                        var t = {
                            mood: n,
                            emoicon: a,
                            nickname: h.userInfo.nickName
                        };
                        e.setEmoHi(t);
                        var i = t;
                        i.city_id = l.comPostInfo.chlid, i.mood = parseInt(n, 10), s.sendGreet(e, i).then(function(t) {
                            e.hiMem[t] = !0;
                        });
                    });
                }
            }), i.rep({
                opType: "clk_sayhi_" + a,
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        switchTab: function(t) {
            var e = this;
            if (!this.mutex.switchTab) {
                this.mutex.switchTab = !0;
                var a = t.target.dataset.cur, n = t.target.dataset.idx, s = 0;
                s = n < 3 ? 0 : 300, this.goToTab().catch(function() {
                    e.setData({
                        hasScrollAnimation: !1
                    }), setTimeout(function() {
                        e.data.scrollTopCache[a] ? e.setData({
                            scrollTop: e.data.scrollTopCache[a]
                        }) : i.getOffsetTop(e, ".lc-header, .lc-city-comment").then(function(t) {
                            var i = t[0].height + t[1].height + 81;
                            e.setData({
                                scrollTop: i
                            });
                        });
                    }, 100);
                }).finally(function() {
                    setTimeout(function() {
                        e.setData({
                            showTabLoading: !0,
                            currentTab: a,
                            scrollLeft: s,
                            curLocalFeed: a
                        }), e.getDataList(!1).then(function() {
                            e.mutex.switchTab = !1;
                        });
                    }, 100), setTimeout(function() {
                        e.setData({
                            hasScrollAnimation: !0
                        });
                    }, 1e3);
                }), i.rep({
                    opType: "clk_feedstab_" + a,
                    fromPage: "local_page",
                    beginTime: this.data.start
                }), this.repArticleOrTab("tab");
            }
        },
        goToTab: function() {
            var t = this;
            return new Promise(function(e, a) {
                i.getRect(".js-ag-tab-hook", function(n) {
                    n.top > 0 ? (t.setData({
                        localFeedLoadingStyle: ""
                    }), e()) : i.getScrollOffset(t, "#localContainer").then(function(e) {
                        t.data.scrollTopCache[t.data.curLocalFeed] = e.scrollTop, t.setData({
                            localFeedLoadingStyle: "position: fixed; top: 50%; left: 0; right: 0; width: 100%;"
                        }), a();
                    });
                }, t);
            });
        },
        onWeishiTap: function() {
            i.rep({
                opType: "clk_weishi_logo",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        onUrbanMsgTap: function() {
            i.rep({
                opType: "clk_urbanmsg",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        onUrbanMsgAuthorTap: function() {
            i.rep({
                opType: "clk_urbanmsg_author",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        onPlayError: function(t) {
            this.setData({
                weishi: {}
            });
        },
        onEnterFullScreen: function() {
            var t = this, e = +new Date() - this.tapstart;
            this.tapstart && e < 1e3 || (this.tapstart = +new Date(), this.changeFullScreen(), 
            this.data.emoAnimate || (this.listAnim.opacity(0).step({
                duration: 0
            }), this.setData({
                listAnimData: this.listAnim.export()
            }), this.hasWeishi() && this.setData({
                showEmos: "none"
            })), this.stopDanmu(), this.danmuAnim.opacity(0).step({
                duration: 0
            }), this.setData({
                danmuAnimData: this.danmuAnim.export()
            }), setTimeout(function() {
                t.video.requestFullScreen(), i.rep({
                    opType: "clk_weishi_fullscreen",
                    fromPage: "local_page",
                    beginTime: t.data.start
                });
            }, 200));
        },
        onExitFullScreen: function() {
            var t = this, e = +new Date() - this.tapstart;
            this.tapstart && e < 1e3 || (this.tapstart = +new Date(), this.changeFullScreen(), 
            this.data.emoAnimate || (this.listAnim.opacity(1).step({
                duration: 0
            }), this.setData({
                listAnimData: this.listAnim.export()
            }), this.hasWeishi() && this.setData({
                showEmos: ""
            })), this.startDanmu(), this.danmuAnim.opacity(1).step({
                duration: 0
            }), this.setData({
                danmuAnimData: this.danmuAnim.export()
            }), setTimeout(function() {
                t.video.exitFullScreen();
            }, 0));
        },
        onFullScreenChange: function(t) {
            "android" == l.comPostInfo.platform && (t.detail.fullScreen ? this.setData({
                fullvideo: !0,
                showFullBtn: !0,
                showControls: !0
            }) : (this.setData({
                fullvideo: !1,
                showFullBtn: !1,
                showControls: !1
            }), this.startDanmu())), i.vercompare(l.comPostInfo.version, "6.7.3") >= 0 && (t.detail.fullScreen ? this.setData({
                showFullBtn: !0,
                showControls: !0
            }) : (this.setData({
                showFullBtn: !1,
                showControls: !1
            }), this.onExitFullScreen()));
        },
        changeFullScreen: function() {
            this.setData({
                fullvideo: !this.data.fullvideo
            });
        },
        switchCity: function() {
            i.rep({
                opType: "clk_switchcity_btn",
                fromPage: "local_page",
                beginTime: this.data.start
            }), p.usenet().then(function() {
                wx.navigateTo({
                    url: "/module-local/pages/cityswitch/cityswitch"
                });
            });
        },
        handleWriteComment: function() {
            this.setData({
                hiList: []
            }), d.checkLogin("", this, function() {
                (0, n.showCommentDialog)(this, "写下你的城市寄语", "lc-page-sayhi");
            }.bind(this)), i.rep({
                opType: "clk_urbanmsg_btn",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        handleCommentInput: function(t) {
            this.hasInputComment || i.rep({
                opType: "input_urbanmsg",
                fromPage: "local_page",
                beginTime: this.data.start
            }), this.hasInputComment = !0;
        },
        handleCommentClose: function(t) {
            this.hasInputComment || i.rep({
                opType: "close_urbanmsg_no_input",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        handleCommentSubmit: function(t) {
            var e = this, a = {
                user_info: {}
            };
            a.user_info.nickname = h.userInfo.nickName, a.user_info.headimgurl = h.userInfo.avatarUrl, 
            a.create_at = "刚刚", a.message = t.detail.content, p.usenet().then(function() {
                var i = {
                    message: t.detail.content,
                    city_id: l.comPostInfo.chlid
                };
                s.sendUrbanMsg(e, i).then(function() {
                    e.setData({
                        urbanMsg: a
                    });
                });
            }), i.rep({
                opType: "clk_urbanmsg_send",
                fromPage: "local_page",
                beginTime: this.data.start
            });
        },
        handleNavigateTo: function(t) {
            var e = this, n = t.currentTarget.dataset;
            this.data.currentTab == a.localFeedArr.AROUND_THING.id && i.rep({
                opType: "pv",
                fromPage: "local_article_page",
                beginTime: this.data.start
            }), this.repArticleOrTab("article"), n.url && setTimeout(function() {
                wx.navigateTo({
                    url: n.url
                }), e.setClicked(n);
            }, 0);
        },
        setClicked: function(t) {
            var e = t.shownewsid || t.newsid, i = this.data.dataList.map(function(t) {
                return e === t.id && (t.isClicked = !0, t.needItem.isClicked = !0), t;
            });
            this.setData({
                dataList: i
            });
        },
        repArticleOrTab: function(t) {
            !this.choice && this.data.tabObj.length > 1 && (this.choice = !0, i.rep({
                opType: "choice_article_tab_" + t,
                fromPage: "local_page",
                beginTime: this.data.start
            }));
        },
        onAuthOkBtnTap: function(t) {
            u.onAuthOkBtnTap(this, t);
        },
        onAuthCancelBtnTap: function(t) {
            u.onAuthCancelBtnTap(this, t);
        },
        onAuthDialogOutTap: function(t) {
            u.onAuthDialogOutTap(this, t);
        },
        bindAuthGetUserInfo: function(t) {
            u.bindAuthGetUserInfo(this, t);
        },
        launchUserInfoAuthDialog: function(t, e) {
            u.launchUserInfoAuthDialog(this, t, e);
        },
        onScroll: function(t) {
            var e = t.detail.scrollTop;
            this.data.scrollTop = e, this.triggerEvent("scroll", this.data.scrollTop);
        },
        onPageHide: function() {
            this.onHide(), this.isCurrentPageActive = !1;
        },
        onPageShow: function() {
            var t = this;
            this.isCurrentPageActive = !0, this.triggerEvent("scroll", this.data.scrollTop), 
            wx.pageScrollTo({
                scrollTop: this.data.scrollTop,
                duration: 0
            }), this.data.initFinished ? this.startDanmu() : this.handleIfLocationChanged().then(function() {
                return t.onShow(), t.onReady(), t.onLoad();
            }).then(function() {
                return t.data.initFinished = !0;
            }).catch(function(e) {
                t.data.initFinished = !1;
            });
        },
        getShareConfig: function(t) {
            return i.rep({
                opType: "top_shareBtn_click",
                fromPage: "local_page"
            }), {
                title: "腾讯新闻",
                desc: "为您提供7×24小时、全方位、及时报道的新闻资讯",
                path: (0, c.toJumpUrl)(4),
                success: function(t) {
                    t.shareTickets && t.shareTickets[0] ? i.rep({
                        opType: "group_share_list",
                        fromPage: "local_page"
                    }) : i.rep({
                        opType: "msg_share_list",
                        fromPage: "local_page"
                    });
                },
                fail: function(t) {}
            };
        },
        toggleUpdatedTips: function() {
            var t = i.getDataListDiff(this.data.dataCache[this.data.curLocalFeed], this.data.dataList).length || this.data.dataList.length;
            t ? this.setData({
                pulldownPending: !1,
                pullNewsInfo: "又发现了".concat(t, "条新内容")
            }) : this.setData({
                pulldownPending: !1,
                pullNewsInfo: ""
            });
        },
        handleIfLocationChanged: function() {
            var t = f.get(a.LOCAL_LAST_LOCATE_INFO), e = f.getExpired(a.LOCAL_LAST_LOCATE_INFO);
            return new Promise(function(n, s) {
                if (t) return n();
                !t && e ? (0, r.locationAuth)(function(t) {
                    e.chlid !== t.chlid ? wx.showModal({
                        title: "位置更新提醒",
                        content: "当前定位城市为<".concat(t.chlname, ">，是否切换为当前城市"),
                        success: function(s) {
                            s.confirm ? (f.set(a.LOCAL_LAST_LOCATE_INFO, t), i.setStorage(a.STORAGE_LC_SELECTED_CITYINFO, t), 
                            n()) : (f.set(a.LOCAL_LAST_LOCATE_INFO, e), i.setStorage(a.STORAGE_LC_SELECTED_CITYINFO, e), 
                            n());
                        }
                    }) : n();
                }) : n();
            });
        },
        handleHeaderImgLoadErr: function(t) {
            var e = t.currentTarget.dataset.index, i = Object.assign([], this.data.banners);
            i[e] = g, this.setData({
                banners: i
            });
        }
    }
});