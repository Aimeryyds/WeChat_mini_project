var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = t(require("../../utils/logger")), i = t(require("../../utils/mlodash")), n = require("../../services/report"), s = require("../../store/index"), o = require("./service");

Component({
    properties: {
        activeIndex: {
            type: Number,
            observer: function(t, e) {
                0 === t ? this.onPageShow() : 0 === e && this.onPageHide();
            }
        },
        pullDownRefreshCount: {
            type: Number,
            observer: function() {
                0 === this.data.activeIndex && this.tapRefresh();
            }
        }
    },
    data: {
        fixedTopList: [],
        pullDownList: [],
        pullUpList: [],
        scrollTop: 0,
        loadDataTips: "又发现了10条新内容",
        pageStatus: s.constant.pageStatus,
        status: s.constant.pageStatus.loading,
        hasMore: !0,
        pullUpStatus: s.constant.pageStatus.loading,
        pulldownPending: !1
    },
    created: function() {
        Object.assign(this, {
            hasRender: !1,
            requestCount: 1,
            fixedTopListCache: [],
            pullUpListCache: [],
            exclusiveListCache: [],
            pullUpPending: !1,
            onShowTime: Date.now()
        });
    },
    ready: function() {
        0 === this.data.activeIndex && this.onPageShow();
    },
    detached: function() {},
    methods: {
        onPageShow: function() {
            this.onShowTime = Date.now(), this.render(), this.triggerEvent("scroll", this.data.scrollTop), 
            (0, o.report)({
                fromPage: n.FROM_PAGE.news_page,
                opType: n.OP_TYPE.page_exposure,
                backFromShare: s.home.backFromShare
            });
        },
        onPageHide: function() {
            var t = Date.now(), e = t - this.onShowTime;
            (0, o.report)({
                opType: n.OP_TYPE.page_retention_time,
                startTime: this.onShowTime,
                endTime: t,
                duration: e,
                retentionType: n.RETENTION_TYPE.onHide,
                fromPage: n.FROM_PAGE.news_page
            });
        },
        onScroll: function(t) {
            this.data.scrollTop = i.default.get(t, "detail.scrollTop", 0), this.triggerEvent("scroll", this.data.scrollTop);
        },
        onReachBottom: function() {
            var t = this;
            this.pullUpPending || (this.pullUpPending = !0, 1 === this.data.pullUpList.length && 1 === this.requestCount && (0, 
            o.getRecommMedia)().then(function(e) {
                t.exclusiveListCache = e;
            }).catch(function(t) {
                a.default.error("获取独家媒体列表出错：", t);
            }), (0, o.getRecommendList)({
                forward: 1,
                cachedCount: this.requestCount
            }).then(function(a) {
                var i;
                a.list.length ? (2 === t.data.pullUpList.length && t.exclusiveListCache.length > 2 && a.list.length > 4 && a.list.splice(4, 0, {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    mediaList: t.exclusiveListCache,
                    isExclusiveMedia: !0
                }), t.setData((i = {}, (0, e.default)(i, "pullUpList[".concat(t.data.pullUpList.length, "]"), {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    list: a.list
                }), (0, e.default)(i, "pullUpStatus", s.constant.pageStatus.loading), (0, e.default)(i, "hasMore", !0), 
                i))) : (wx.showToast({
                    title: "看累了，休息下",
                    icon: "success",
                    duration: 2e3
                }), t.setData({
                    hasMore: !1
                }));
                t.requestCount += 1, t.pullUpPending = !1;
            }).catch(function(e) {
                t.pullUpPending = !1, t.setData({
                    pullUpStatus: s.constant.pageStatus.error
                }), a.default.error("上拉刷新出现错误：", e);
            }));
        },
        onPullDownRefresh: function() {
            var t = this;
            if (!this.data.pulldownPending) {
                var i = {
                    pulldownPending: !0
                };
                this.data.hasPullDown || (i.hasPullDown = !0), this.setData(i), (0, o.getRecommendList)({
                    forward: 0,
                    cachedCount: this.requestCount
                }).then(function(a) {
                    var i;
                    a.list.length ? t.setData((i = {}, (0, e.default)(i, "pullDownList[".concat(t.data.pullDownList.length, "]"), {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: a.list
                    }), (0, e.default)(i, "pulldownPending", !1), (0, e.default)(i, "loadDataTips", a.loadDataTips), 
                    i)) : (t.setData({
                        pulldownPending: !1,
                        loadDataTips: "没有更多了，稍后再试"
                    }), wx.showToast({
                        title: "看累了，休息下",
                        icon: "success",
                        duration: 2e3
                    }));
                    t.requestCount += 1;
                }).catch(function(e) {
                    t.setData({
                        pulldownPending: !1,
                        loadDataTips: "网络不给力，稍后再试"
                    }), a.default.error("下拉刷新出现错误：", e);
                });
            }
        },
        tapRefresh: function() {
            this.data.scrollTop > 0 && this.setData({
                scrollTop: 0
            }), this.onPullDownRefresh();
        },
        tapDisLike: function(t) {
            var e = i.default.get(t, "currentTarget.dataset", {}), a = e.source, n = e.page, s = e.index, o = i.default.get(this.data[a], "[".concat(n, "].list[").concat(s, "]"), {}), r = i.default.get(t, "detail", {});
            o._uid === r._uid && o.articleId === r.articleId && this.data[a][n].list.splice(s, 1);
        },
        render: function(t) {
            var e = this;
            this.hasRender || (this.hasRender = !0, s.home.off(s.home.event.renderRecommendPage), 
            (0, o.getRecommendList)({
                forward: 2
            }).then(function(t) {
                a.default.info("渲染首页推荐第一屏数据"), e.setData({
                    status: s.constant.pageStatus.ready,
                    fixedTopList: t.fixedTopList,
                    pullUpList: [ {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: t.list
                    } ]
                });
            }).catch(function(t) {
                a.default.error("首页推荐数据拉取失败：", t), e.hasRender = !1, e.setData({
                    status: s.constant.pageStatus.error
                });
            }).then(function() {
                setTimeout(function() {
                    s.home.emit(s.home.event.renderVideoPage);
                }, 5e3);
            }));
        }
    }
});