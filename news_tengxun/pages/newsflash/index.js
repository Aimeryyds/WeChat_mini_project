var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../utils/mlodash")), e = t(require("../../utils/logger")), i = require("../../store/index"), n = require("../../services/report"), s = require("../../services/share"), o = require("../../utils/common"), r = require("./service");

Page({
    data: {
        fromPage: n.FROM_PAGE.speed_page,
        list: {},
        category: [],
        activeCateId: "",
        pageStatus: i.constant.pageStatus,
        status: i.constant.pageStatus.loading,
        bottomLoadingStatus: i.constant.pageStatus.loading,
        hasMore: !0,
        showGuideTop: !1
    },
    onLoad: function(t) {
        Object.assign(this, {
            pullUpPending: !1,
            pullDownPending: !1,
            idList: {},
            dateMap: {},
            dateIndexMap: {},
            scrollTopMap: {}
        });
    },
    onShow: function(t) {
        "home" === i.global.newsflashQuery.from && (wx.pageScrollTo({
            scrollTop: 0
        }), i.global.newsflashQuery = {}), i.global.pageStartFrom = "icon";
    },
    onReady: function() {
        this.render(), (0, o.versionGte)(i.systemInfo.version, "6.7.1") && this.setData({
            showTopGuide: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPageScroll: function(t) {
        this.scrollTopMap[this.data.activeCateId] = t.scrollTop;
    },
    onPullDownRefresh: function() {
        this.render(!0);
    },
    onReachBottom: function() {
        var t = this;
        if (!this.pullUpPending && this.data.hasMore && this.data.status === i.constant.pageStatus.ready) {
            this.pullUpPending = !0;
            var n = this.idList[this.data.activeCateId].splice(0, 20);
            (0, r.getNewsflash)(this.data.activeCateId, n, this.dateMap[this.data.activeCateId]).then(function(e) {
                var n = a.default.reduce(e.list, function(a, e, i) {
                    var n = t.dateIndexMap[t.data.activeCateId][i];
                    if (n + 1 === Object.keys(t.dateIndexMap[t.data.activeCateId]).length && 0 === t.idList[t.data.activeCateId].length && (e[e.length - 1].isLastOne = !0, 
                    a.hasMore = !1), t.data.list[t.data.activeCateId][n]) {
                        var s = t.data.list[t.data.activeCateId][n].list.length;
                        a["list.".concat(t.data.activeCateId, "[").concat(n, "].list[").concat(s, "]")] = {
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            list: e
                        };
                    } else a["list.".concat(t.data.activeCateId, "[").concat(n, "]")] = {
                        dateStr: i,
                        list: [ {
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            list: e
                        } ]
                    };
                    return a;
                }, {});
                t.data.bottomLoadingStatus !== i.constant.pageStatus.loading && (n.bottomLoadingStatus = i.constant.pageStatus.loading), 
                t.setData(n), t.pullUpPending = !1;
            }).catch(function(a) {
                t.pullUpPending = !1, t.setData({
                    bottomLoadingStatus: i.constant.pageStatus.error
                }), e.default.error("上拉刷新出现错误：", a);
            });
        }
    },
    onShareAppMessage: function(t) {
        t = t || {};
        var e = {
            fromPage: n.FROM_PAGE.speed_page
        };
        if ("menu" === t.from) return e.pageArea = n.PAGE_AREA.menu, (0, s.genArticleShareMsg)({
            useScreenShot: !0
        }, e, 14);
        if ("button" === t.from) {
            e.pageArea = n.PAGE_AREA.cell;
            var i = a.default.get(t, "target.dataset", {}), o = Number(i.articleType), r = {
                id: i.articleId,
                atype: o,
                title: i.title
            };
            return 114 === o && i.topicId ? (r.title = "大家正在讨论".concat(i.title), r.tpid = i.topicId, 
            (0, s.genArticleShareMsg)(r, e, 8)) : (0, s.genArticleShareMsg)(r, e);
        }
    },
    onTabItemTap: function(t) {
        (0, n.report)({
            opType: n.OP_TYPE.news_flash_tab_click,
            fromPage: n.FROM_PAGE.speed_page
        }), wx.setTabBarItem({
            index: 0,
            text: "首页"
        }), i.global.activeTab !== i.constant.tabItem.newsflash ? i.global.activeTab = i.constant.tabItem.newsflash : (wx.pageScrollTo({
            scrollTop: 0
        }), setTimeout(function() {
            wx.startPullDownRefresh();
        }, 300));
    },
    changeCategory: function(t) {
        var a = t.detail.cateId, e = {
            activeCateId: a
        };
        this.data.list[a] ? 0 === this.idList[a].length ? e.hasMore = !1 : e.hasMore = !0 : (this.data.activeCateId = a, 
        this.render()), this.setData(e), wx.pageScrollTo({
            scrollTop: this.scrollTopMap[a] || 0,
            duration: 0
        });
    },
    render: function() {
        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.pullDownPending || (this.pullDownPending = !0, n || this.setData({
            status: i.constant.pageStatus.loading
        }), (0, r.getNewsflash)(this.data.activeCateId).then(function(e) {
            n && t.showPulldownTips();
            var s = {
                status: i.constant.pageStatus.ready
            };
            e.category && JSON.stringify(e.category) !== JSON.stringify(t.data.category) && (s.category = e.category), 
            t.data.activeCateId || (s.activeCateId = e.category[0].id, t.data.activeCateId = e.category[0].id), 
            s["list.".concat(t.data.activeCateId)] = a.default.map(e.list, function(t, a) {
                return {
                    dateStr: a,
                    list: [ {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: t
                    } ]
                };
            }), t.idList[t.data.activeCateId] = e.idList, t.dateMap[t.data.activeCateId] = e.dateMap, 
            t.dateIndexMap[t.data.activeCateId] = e.dateIndexMap, 0 === t.idList[t.data.activeCateId].length ? s.hasMore = !1 : s.hasMore = !0, 
            t.setData(s), t.pullDownPending = !1;
        }).catch(function(a) {
            t.pullDownPending = !1, t.setData({
                status: i.constant.pageStatus.error
            }), e.default.error("获取快讯数据出现错误:", a);
        }));
    },
    showPulldownTips: function() {
        var t = this;
        wx.stopPullDownRefresh(), setTimeout(function() {
            var a = wx.createAnimation();
            a.height(35).step({
                duration: 0
            }), t.setData({
                animationData: a.export()
            }), setTimeout(function() {
                a.height(0).step({
                    duration: 500
                }), t.setData({
                    animationData: a.export()
                });
            }, 1500);
        }, 500);
    }
});