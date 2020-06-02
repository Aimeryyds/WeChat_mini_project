var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = (t(require("../../utils/mlodash")), 
t(require("../../utils/logger"))), s = require("../../services/report"), n = require("../../services/share"), o = require("../../store/index"), r = require("./service");

Page({
    data: {
        updateTime: "",
        list: [],
        offset: 0,
        fromPage: s.FROM_PAGE.hot_detail_page,
        pageStatus: o.constant.pageStatus,
        status: o.constant.pageStatus.loading,
        pullUpStatus: o.constant.pageStatus.loading,
        hasMore: !0
    },
    onLoad: function(t) {
        Object.assign(this, {
            offset: 0,
            pullUpPending: !1,
            articleSet: new Set()
        });
    },
    onReady: function() {
        this.render();
    },
    onUnload: function() {},
    onShareAppMessage: function(t) {
        return (0, n.genShareMsg)({
            targetPage: 12
        }, {
            fromPage: s.FROM_PAGE.hot_detail_page,
            pageArea: s.PAGE_AREA.menu
        });
    },
    onReachBotto: function() {
        var t = this;
        this.pullUpPending || !this.data.hasMore || this.data.noData || this.data.status !== o.constant.pageStatus.ready || (this.pullUpPending = !0, 
        (0, r.getTwentyFourHourNews)(this.offset, this.articleSet).then(function(a) {
            var s, n = (s = {}, (0, e.default)(s, "list[".concat(t.data.list.length, "]"), {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: a.list
            }), (0, e.default)(s, "hasMore", a.hasMore), s);
            t.data.bottomLoadingStatus !== o.constant.pageStatus.loading && (n.bottomLoadingStatus = o.constant.pageStatus.loading), 
            t.setData(n), t.offset = a.offset, t.pullUpPending = !1;
        }).catch(function(e) {
            t.pullUpPending = !1, t.setData({
                bottomLoadingStatus: o.constant.pageStatus.error
            }), a.default.error("上拉刷新出现错误：", e);
        }));
    },
    render: function() {
        var t = this;
        (0, r.getTwentyFourHourNews)(this.offset, this.articleSet).then(function(e) {
            var a = {
                status: o.constant.pageStatus.ready,
                zwbData: e.zwbData,
                updateTime: e.updateTime
            };
            e.list.length ? (a.list = [ {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: e.list
            } ], t.data.noData && (a.noData = !1), t.offset = e.offset) : a.noData = !0, t.setData(a, function() {
                setTimeout(function() {
                    t.$obQuery = t.createIntersectionObserver({
                        thresholds: [ .5 ]
                    }), t.$obQuery.relativeToViewport().observe(".bottom-loading-bar", function(e) {
                        e.intersectionRatio >= .5 && t.onReachBotto();
                    });
                }, 1e3);
            });
        }).catch(function(e) {
            t.setData({
                status: o.constant.pageStatus.error
            }), a.default.error("拉取热点精选失败：", e);
        });
    }
});