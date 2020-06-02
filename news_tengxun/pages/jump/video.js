var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/slicedToArray")), a = t(require("../../@babel/runtime/helpers/defineProperty")), n = t(require("../../utils/logger")), o = t(require("../../utils/mlodash")), i = require("../../store/index"), r = require("../../services/report"), s = require("./service");

Component({
    properties: {
        activeIndex: {
            type: Number,
            observer: function(t, e) {
                1 === t ? this.onPageShow() : 1 === e && this.onPageHide();
            }
        },
        pullDownRefreshCount: {
            type: Number,
            observer: function() {
                1 === this.data.activeIndex && this.tapRefresh();
            }
        }
    },
    data: {
        pullDownList: [],
        pullUpList: [],
        scrollTop: 0,
        tipAnimationData: [],
        loadDataTips: "又发现了10条新内容",
        pageStatus: i.constant.pageStatus,
        status: i.constant.pageStatus.loading,
        hasMore: !0,
        pullUpStatus: i.constant.pageStatus.loading,
        pulldownPending: !1
    },
    created: function() {
        var t = this;
        Object.assign(this, {
            hasRender: !1,
            requestCount: 1,
            pullUpListCache: [],
            tipAnimation: wx.createAnimation(),
            pullUpPending: !1,
            rects: [],
            onShowTime: Date.now()
        }), i.home.on(i.home.event.renderVideoPage, function() {
            t.render();
        });
    },
    detached: function() {},
    ready: function() {
        1 === this.data.activeIndex && this.onPageShow();
    },
    methods: {
        onPageShow: function() {
            this.onShowTime = Date.now(), this.render(), this.triggerEvent("scroll", this.data.scrollTop), 
            (0, r.report)({
                fromPage: r.FROM_PAGE.video_page,
                opType: r.OP_TYPE.page_exposure
            });
        },
        onPageHide: function() {
            var t = Date.now(), e = t - this.onShowTime;
            (0, r.report)({
                opType: r.OP_TYPE.page_retention_time,
                startTime: this.onShowTime,
                endTime: t,
                duration: e,
                retentionType: r.RETENTION_TYPE.onHide,
                fromPage: r.FROM_PAGE.video_page
            });
        },
        onScroll: function(t) {
            this.data.scrollTop = o.default.get(t, "detail.scrollTop", 0), this.triggerEvent("scroll", this.data.scrollTop);
        },
        onReachBottom: function() {
            var t = this;
            this.pullUpPending || (this.pullUpPending = !0, (0, s.getVideoList)({
                forward: 1,
                cachedCount: this.requestCount
            }).then(function(n) {
                var o;
                n.list.length ? t.setData((o = {}, (0, a.default)(o, "pullUpList[".concat(t.data.pullUpList.length, "]"), {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    list: n.list
                }), (0, a.default)(o, "pullUpStatus", i.constant.pageStatus.loading), (0, a.default)(o, "hasMore", !0), 
                o), function() {
                    t.$domQuery.exec(function(a) {
                        var n = (0, e.default)(a, 2), o = n[0], i = n[1];
                        t.formatItemRect(o, i);
                    });
                }) : (wx.showToast({
                    title: "看累了，休息下",
                    icon: "success",
                    duration: 2e3
                }), t.setData({
                    hasMore: !1
                }));
                t.requestCount += 1, t.pullUpPending = !1;
            }).catch(function(e) {
                t.pullUpPending = !1, t.setData({
                    pullUpStatus: i.constant.pageStatus.error
                }), n.default.error("上拉刷新出现错误：", e);
            }));
        },
        onPullDownRefresh: function() {
            var t = this;
            if (!this.data.pulldownPending) {
                var o = {
                    pulldownPending: !0
                };
                this.data.hasPullDown || (o.hasPullDown = !0), this.setData(o), (0, s.getVideoList)({
                    forward: 0,
                    cachedCount: this.requestCount
                }).then(function(n) {
                    var o;
                    n.list.length ? t.setData((o = {}, (0, a.default)(o, "pullDownList[".concat(t.data.pullDownList.length, "]"), {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: n.list
                    }), (0, a.default)(o, "pulldownPending", !1), (0, a.default)(o, "loadDataTips", n.loadDataTips), 
                    o), function() {
                        t.$domQuery.exec(function(a) {
                            var n = (0, e.default)(a, 2), o = n[0], i = n[1];
                            t.formatItemRect(o, i);
                        });
                    }) : (t.setData({
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
                    }), n.default.error("下拉刷新出现错误：", e);
                });
            }
        },
        tapRefresh: function() {
            this.data.scrollTop > 0 && this.setData({
                scrollTop: 0
            }), this.onPullDownRefresh();
        },
        onVideoEnded: function(t) {
            var e = o.default.get(t, "currentTarget.dataset._uid"), a = o.default.findIndex(this.rects, function(t) {
                return t._uid === e;
            }), s = this.rects[a + 1];
            a > -1 && a < this.rects.length && s && (n.default.info("自动播放下一条：", s.vid, s.title), 
            i.video.play(s._uid), this.setData({
                scrollTop: s.scrollTop
            }), (0, r.report)({
                opType: r.OP_TYPE.play_next,
                fromPage: r.FROM_PAGE.video_page,
                articleId: s.articleId,
                articleType: s.atype,
                vid: s.vid
            })), a + 4 === this.rects.length && this.onReachBottom();
        },
        formatItemRect: function(t, e) {
            var a = o.default.get(t, "[0].top", 0);
            this.rects = o.default.map(t, function(t) {
                var n = t.dataset || {};
                return {
                    _uid: n._uid,
                    vid: n.vid,
                    title: n.title,
                    scrollTop: t.top + e.scrollTop - a
                };
            });
        },
        render: function(t) {
            var a = this;
            this.hasRender || (this.hasRender = !0, i.home.off(i.home.event.renderVideoPage), 
            (0, s.getVideoList)({
                forward: 2
            }).then(function(t) {
                n.default.info("渲染首页视频第一屏数据"), a.setData({
                    status: i.constant.pageStatus.ready,
                    pullUpList: [ {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        list: t.list
                    } ]
                }, function() {
                    a.$domQuery = a.createSelectorQuery().selectAll(".item-wrapper").boundingClientRect().selectViewport().fields({
                        scrollOffset: !0,
                        size: !0
                    }), a.$domQuery.exec(function(t) {
                        var n = (0, e.default)(t, 2), o = n[0], i = n[1];
                        a.formatItemRect(o, i);
                    });
                });
            }).catch(function(t) {
                n.default.error("首页视频数据拉取失败：", t), a.hasRender = !1, a.setData({
                    status: i.constant.pageStatus.error
                });
            }));
        }
    }
});