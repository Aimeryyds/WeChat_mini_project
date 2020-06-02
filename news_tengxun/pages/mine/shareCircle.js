var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = (t(require("../../utils/mlodash")), 
t(require("../../utils/logger"))), s = require("../../store/index"), i = require("../../services/report"), n = require("./service");

Page({
    data: {
        pageStatus: s.constant.pageStatus,
        status: s.constant.pageStatus.loading,
        pullUpStatus: s.constant.pageStatus.loading,
        fromPage: i.FROM_PAGE.shareCircleHistory,
        list: [],
        noData: !1,
        hasMore: !0
    },
    onLoad: function() {
        Object.assign(this, {
            reqTimestamp: "",
            dateList: {},
            offset: 0,
            $obQuery: null
        });
    },
    onReady: function() {
        var t = this;
        s.userInfo.initOver ? this.init() : (this.renderWhenInitOver = function() {
            s.userInfo.off(s.userInfo.event.initOver, t.renderWhenInitOver), t.init();
        }, s.userInfo.on(s.userInfo.event.initOver, this.renderWhenInitOver)), this.$obQuery = this.createIntersectionObserver({
            thresholds: [ .5 ]
        });
    },
    onUnload: function() {
        this.$obQuery && this.$obQuery.disconnect();
    },
    onScrollToLower: function() {
        var t = this;
        this.pullUpPending || !this.data.hasMore || this.data.noData || this.data.status !== s.constant.pageStatus.ready || (this.pullUpPending = !0, 
        (0, n.getSharingHistory)({
            reqTimestamp: this.reqTimestamp,
            offset: this.offset,
            dateList: this.dateList
        }).then(function(a) {
            var i = (0, e.default)({}, "list[".concat(t.data.list.length, "]"), {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: a.list
            });
            -1 === a.offset && (i.hasMore = !1), t.data.bottomLoadingStatus !== s.constant.pageStatus.loading && (i.bottomLoadingStatus = s.constant.pageStatus.loading), 
            t.setData(i), t.offset = a.offset, t.pullUpPending = !1;
        }).catch(function(e) {
            t.pullUpPending = !1, t.setData({
                bottomLoadingStatus: s.constant.pageStatus.error
            }), a.default.error("上拉获取分享区历史失败：", e);
        }));
    },
    init: function() {
        var t = this;
        this.reqTimestamp = Date.now(), (0, n.getSharingHistory)({
            reqTimestamp: this.reqTimestamp,
            offset: this.offset,
            dateList: this.dateList
        }).then(function(e) {
            var a = {
                status: s.constant.pageStatus.ready
            };
            e.list.length ? (a.list = [ {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: e.list
            } ], t.offset = e.offset, -1 === e.offset && (a.hasMore = !1), t.data.noData && (a.noData = !1)) : a.noData = !0, 
            t.setData(a, function() {
                setTimeout(function() {
                    t.$obQuery.relativeToViewport().observe(".bottom-loading-bar", function(e) {
                        e.intersectionRatio >= .5 && t.onScrollToLower();
                    });
                }, 1e3);
            });
        }).catch(function(e) {
            t.setData({
                status: s.constant.pageStatus.error
            }), a.default.error("获取分享圈历史失败：", e);
        });
    }
});