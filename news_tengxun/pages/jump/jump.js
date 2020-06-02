var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("../../@babel/runtime/helpers/objectWithoutProperties")), i = e(require("../../utils/logger")), o = e(require("../../utils/mlodash")), r = require("../../network/index"), n = require("../../store/index"), s = require("../../services/report"), l = require("../../services/jump"), h = require("../search/service"), u = require("../../services/userOption.js"), c = require("../../services/share"), p = require("../../utils/common");

function d(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, i);
    }
    return a;
}

function f(e) {
    for (var a = 1; a < arguments.length; a++) {
        var i = null != arguments[a] ? arguments[a] : {};
        a % 2 ? d(Object(i), !0).forEach(function(a) {
            (0, t.default)(e, a, i[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
    }
    return e;
}

var m = [ {
    name: "推荐",
    fromPage: s.FROM_PAGE.news_page,
    opType: s.OP_TYPE.index_channel_click
}, {
    name: "视频",
    fromPage: s.FROM_PAGE.video_page,
    opType: s.OP_TYPE.video_channel_click
}, {
    name: "本地",
    fromPage: s.FROM_PAGE.local_page,
    opType: s.OP_TYPE.local_channel_click
} ];

Page({
    data: {
        show: !1,
        activeIndex: 0,
        pullDownRefreshCount: 0,
        tabNames: o.default.map(m, function(e) {
            return e.name;
        }),
        showBottomGuide: !1,
        showTopGuide: !1,
        dev: n.global.dev,
        showTestUrl: n.global.dev,
        testUrl: [ {
            url: "/pages/jump/jump?id=20190311A1709000&atype=0",
            text: "图文APP分享",
            scene: 1036
        } ],
        fromPage: s.FROM_PAGE.news_page,
        posterPreviewConfig: {
            wrapWidth: "606rpx",
            wrapHeight: "670rpx"
        },
        barHeight: 0,
        swiperHeight: 0,
        alternate: []
    },
    onLoad: function(e) {
        var t = this;
        Object.assign(this, {
            navigateToOther: !1,
            lock: !1,
            scrollTop: 0,
            showCount: 0,
            hasInit: !1,
            onLoadTime: Date.now(),
            onShowTime: Date.now(),
            notProxyRetentionReport: !0,
            notProxyExposureReport: !0
        }), n.home.on(n.home.event.renderRecommendPage, function() {
            n.home.off(n.home.event.renderRecommendPage), t.data.show || t.setData({
                show: !0
            });
        }), n.global.activeTab = n.constant.tabItem.home, this.analyseQuery(e);
        try {
            var a = n.systemInfo.menuButtonRect, o = {};
            ("devtools" === n.systemInfo.platform || (0, p.versionGte)(n.systemInfo.version, "7.0.0")) && (o.barHeight = a.bottom + a.height / 4, 
            o.swiperHeight = n.systemInfo.windowHeight - o.barHeight, this.setData(o));
        } catch (e) {
            i.default.error("读取systemInfo.menuButtonRect失败", e, n.systemInfo.menuButtonRect);
        }
    },
    onShow: function() {
        this.showCount += 1, 1 !== this.showCount && (this.init(), (0, s.flushReportQueue)("home"), 
        wx.removeStorageSync("MOR_NIGHT_CURRENT"));
    },
    onReady: function() {
        var e = this;
        if (this.isGettingAtype) this.isGettingAtype.then(function() {
            e.navigateToOther ? e.navigateToOther = !1 : e.init();
        }); else {
            if (this.navigateToOther) return void (this.navigateToOther = !1);
            this.init();
        }
    },
    onHide: function() {
        if (this.hasInit) {
            var e = Date.now(), t = e - this.onShowTime;
            (0, s.report)({
                opType: s.OP_TYPE.page_retention_time,
                startTime: this.onShowTime,
                endTime: e,
                duration: t,
                retentionType: s.RETENTION_TYPE.onHide,
                fromPage: this.data.fromPage
            });
        }
    },
    onUnload: function() {
        if (this.hasInit) {
            var e = Date.now(), t = e - this.onLoadTime;
            (0, s.report)({
                opType: s.OP_TYPE.page_retention_time,
                startTime: this.onLoadTime,
                endTime: e,
                duration: t,
                retentionType: s.RETENTION_TYPE.onUnload,
                articleId: this.query.id,
                fromPage: this.data.fromPage
            });
        }
        n.home.recommendSet.clear(), n.home.videoSet.clear();
    },
    onTabItemTap: function(e) {
        n.global.activeTab !== n.constant.tabItem.home ? (n.global.activeTab = n.constant.tabItem.home, 
        this.updateTabBarItem()) : this.scrollTop >= 597 && this.setData({
            pullDownRefreshCount: this.data.pullDownRefreshCount + 1
        }), (0, s.report)({
            fromPage: this.data.fromPage,
            opType: s.OP_TYPE.index_tab_click
        });
    },
    onShareAppMessage: function(e) {
        if (2 === this.data.activeIndex) {
            var t = this.selectComponent("#local") || {};
            if (o.default.isFunction(t.getShareConfig)) {
                var a = t.getShareConfig(e);
                if (a) return a;
            }
        }
        if ("menu" === e.from) return (0, s.report)({
            fromPage: this.data.fromPage,
            opType: s.OP_TYPE.shareWeixinClick,
            pageArea: s.PAGE_AREA.menu
        }), {
            title: "腾讯新闻",
            path: (0, l.toJumpUrl)(this.data.activeIndex + 2)
        };
        if ("button" === e.from) {
            var i = o.default.get(e, "target.dataset", {}), r = {
                title: i.title,
                atype: i.atype,
                id: i.articleId
            }, n = {
                fromPage: i.fromPage,
                pageArea: s.PAGE_AREA.cell
            };
            return (0, c.genArticleShareMsg)(r, n);
        }
    },
    analyseQuery: function(e) {
        var t = this;
        if (i.default.info("加载页面pages/jump, query=", e), i.default.info("global scene:", n.global.scene), 
        o.default.has(e, "scene") || o.default.has(e, "targetPage") || o.default.has(e, "id")) {
            n.home.recommendSet.clear(), n.home.videoSet.clear();
            var r = e.id, h = e.atype, u = e.targetPage, c = e.type, p = e.day, d = e.uid, m = e.source, g = (0, 
            a.default)(e, [ "id", "atype", "targetPage", "type", "day", "uid", "source" ]);
            r = r || "", h = h || void 0, u = (u || "0") + "", n.shareInfo.uid = d, g.openGId && (m = "wxapp"), 
            n.shareInfo.source = m || "app";
            var T = s.OP_TYPE.jump_open_path;
            if (o.default.has(e, "scene")) {
                var v = decodeURIComponent(e.scene).split(",");
                if (i.default.info("小程序码参数解析结果：", v), r = (v[0] || "").trim(), u = v[1], n.global.mpQRFrom = v[2], 
                h = v[3] || void 0, T = s.OP_TYPE.jump_open_qrcode, "13" === u) {
                    var P = r.split("_");
                    p = P[0], c = P[1];
                }
                wx.reportAnalytics("1018", {
                    opentypefrom: v[2],
                    jumpfinalpage: u,
                    articleid: r
                });
            }
            (0, s.report)({
                opType: T,
                jumpFinalPage: u,
                articleId: r
            }), n.global.fromJump = 1, i.default.info("targetPage=".concat(u, ", id=").concat(r, ", atype=").concat(h));
            var y = (0, l.typeToUrl)(u);
            if ("2" !== u) if ("3" === u) this.switchHomeTab(1); else if ("4" === u) this.switchHomeTab(2); else if ("5" === u) this.switchTab(y, "notice"); else if ("6" === u) this.switchTab(y, "comment"); else if ("7" === u) y = (0, 
            l.typeToUrl)(u, f({
                id: r
            }, g)), this.navigateTo(y); else if ("8" === u) {
                var b = e.tpid || r;
                y = (0, l.typeToUrl)(u, {
                    tpid: b,
                    id: r
                }), this.navigateTo(y);
            } else if ("9" === u) y = (0, l.typeToUrl)(u, f({
                id: r
            }, g)), this.navigateTo(y); else if ("10" === u) y = (0, l.typeToUrl)(u, {
                coral_uid: e.coral_uid,
                uin: e.uin
            }), this.navigateTo(y); else if ("11" === u) y = (0, l.typeToUrl)(u, {
                mediaId: e.mediaId || e.chlid
            }), this.navigateTo(y); else if ("12" === u) this.navigateTo(y); else if ("13" === u) y = (0, 
            l.typeToUrl)(u, {
                day: p,
                type: c
            }), this.navigateTo(y); else if ("14" === u) this.switchTab(y); else if ("15" === u) this.switchTab(y, "share"); else if (r) {
                var w;
                w = (0, l.isSupportAtype)(h) ? Promise.resolve(h) : this.getAtype(r).then(function(e) {
                    return (0, l.isSupportAtype)(e) ? e : Promise.reject("不能支持的atype=", e);
                }), this.isGettingAtype = w.then(function(a) {
                    g.id = r, g.fromJump = "1", n.scene.IS_FROM_APP && (g.fromApp = "1", n.global.pageStartFrom = "app", 
                    n.global.pageStart = (0, l.parseToFromPage)(u, a, c)), n.scene.IS_FROM_MP_QR && (g.fromPlugin = "1", 
                    n.global.pageStartFrom = "plugin"), (y = "1" === u ? (0, l.atypeToCommentUrl)(a, g) : (0, 
                    l.atypeToUrl)(a, g)) ? t.navigateTo(y) : i.default.error("jump参数不能被解析，回到首页", e);
                }).catch(function(e) {
                    i.default.error(e);
                });
            } else i.default.error("jump参数不能被解析，回到首页", e);
        }
    },
    getAtype: function(e) {
        return r.request.post(r.URL.getNewsAtype, {
            id: e
        }).then(function(e) {
            var t = o.default.get(e, "info[0]");
            return e && 0 === e.ret && o.default.isObject(t) ? Number(t.atype) : Promise.reject(e);
        });
    },
    switchTab: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        n.global.jumpTabQuery = t, n.global.jumpTargetPagePath = e.split("?")[0], this.navigateToOther = !0, 
        wx.switchTab({
            url: e
        }), i.default.info("jump 跳转：", e, t);
    },
    navigateTo: function(e) {
        n.global.jumpTabQuery = -1, n.global.jumpTargetPagePath = e.split("?")[0], this.navigateToOther = !0, 
        wx.navigateTo({
            url: e
        });
    },
    switchHomeTab: function(e) {
        1 !== e && 2 !== e || (n.global.jumpTabQuery = -1, this.setData({
            activeIndex: e,
            fromPage: m[e]
        }));
    },
    tapTab: function(e) {
        if (this.hasInit) {
            var t = o.default.get(e, "currentTarget.dataset.index", 0);
            t !== this.data.activeIndex && (this.changeActiveIndex(t), (0, s.report)({
                fromPage: this.data.fromPage,
                opType: m[t].opType
            }));
        }
    },
    onChange: function(e) {
        if (this.hasInit) {
            var t = o.default.get(e, "detail.current", 0);
            t !== this.data.activeIndex && this.changeActiveIndex(t);
        }
    },
    onScroll: function(e) {
        this.scrollTop = o.default.get(e, "detail", 0), this.updateTabBarItem();
    },
    tapTestUrlBtn: function(e) {
        var t = o.default.get(e, "currentTarget.dataset.index"), a = this.data.testUrl[t];
        a.scene && (n.global.scene = a.scene, wx.reLaunch({
            url: a.url
        })), (0, l.navigateTo)(a.url);
    },
    tapSwitchAPI: function() {
        this.setData({
            dev: !this.data.dev
        }), r.URL.formatUrl(this.data.dev), wx.showModal({
            showCancel: !1,
            title: this.data.dev ? "已恢复测试环境API" : "已切换到线上API"
        });
    },
    updateTabBarItem: function() {
        this.scrollTop >= 597 ? wx.setTabBarItem({
            index: 0,
            text: "刷新",
            selectedIconPath: "/images/homerefresh.png"
        }) : wx.setTabBarItem({
            index: 0,
            text: "首页",
            selectedIconPath: "/images/homeselection.png"
        });
    },
    init: function() {
        var e = this;
        if (!this.hasInit) {
            n.home.off(n.home.event.renderRecommendPage), this.hasInit = !0, this.data.show || this.setData({
                show: !0
            }), this.changeActiveIndex = o.default.debounce(function(t) {
                e.onShowTime = Date.now(), e.setData({
                    activeIndex: t,
                    fromPage: m[t].fromPage
                });
            }, 200, {
                leading: !0
            }), wx.removeStorageSync("MOR_NIGHT_CURRENT"), n.global.pageStartFrom = "icon", 
            (0, h.getHotWords)().then(function(t) {
                e.setData({
                    alternate: t.alternate
                });
            }).catch(function(e) {
                i.default.error("热点词加载错误：", e);
            }), (0, u.getUserOption)().then(function(t) {
                "1" === String(t.flashGuide) && (e.setData({
                    showBottomGuide: !0
                }), (0, u.setUserOption)({
                    type: "flashGuide",
                    value: 0
                }));
            });
            var t = (0, p.versionGte)(n.systemInfo.version, "6.7.1"), a = -1 !== [ 1005, 1006, 1027, 1042, 1053 ].indexOf(1 * n.global.scene);
            t && a && this.setData({
                showTopGuide: !0
            });
        }
    }
});