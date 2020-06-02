var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (t(require("../../utils/mlodash")), 
t(require("../../utils/logger"))), a = require("../../store/index"), n = require("../../services/report"), i = require("../../module-local/js/store/newlocal.js");

Page({
    data: {
        pageStatus: a.constant.pageStatus,
        status: a.constant.pageStatus.loading,
        pullUpStatus: a.constant.pageStatus.loading,
        fromPage: n.FROM_PAGE.shareCircleHistory,
        list: [],
        noData: !1,
        hasMore: !0
    },
    onLoad: function() {
        Object.assign(this, {
            page: 0,
            $obQuery: null
        });
    },
    onReady: function() {
        var t = this;
        a.userInfo.initOver ? this.init() : (this.renderWhenInitOver = function() {
            a.userInfo.off(a.userInfo.event.initOver, t.renderWhenInitOver), t.init();
        }, a.userInfo.on(a.userInfo.event.initOver, this.renderWhenInitOver)), this.$obQuery = this.createIntersectionObserver({
            thresholds: [ .5 ]
        });
    },
    onUnload: function() {
        this.$obQuery && this.$obQuery.disconnect();
    },
    onScrollToLower: function() {
        var t = this;
        this.pullUpPending || !this.data.hasMore || this.data.noData || this.data.status !== a.constant.pageStatus.ready || (this.pullUpPending = !0, 
        this.getData(this.page).then(function(e) {
            var n = {};
            e.list.length && (n["list[".concat(t.data.list.length, "]")] = {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: e.list
            }), 0 !== e.next && 0 !== e.list.length || (n.hasMore = !1), t.data.bottomLoadingStatus !== a.constant.pageStatus.loading && (n.bottomLoadingStatus = a.constant.pageStatus.loading), 
            t.setData(n), t.page += 1, t.pullUpPending = !1;
        }).catch(function(n) {
            t.pullUpPending = !1, t.setData({
                bottomLoadingStatus: a.constant.pageStatus.error
            }), e.default.error("上拉获取我的活动失败：", n);
        }));
    },
    init: function() {
        var t = this;
        this.getData(this.page).then(function(e) {
            var n = {
                status: a.constant.pageStatus.ready
            };
            e.list.length ? (n.list = [ {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                list: e.list
            } ], t.data.noData && (n.noData = !1), 0 === e.next ? n.hasMore = !1 : t.page += 1) : n.noData = !0, 
            t.setData(n, function() {
                setTimeout(function() {
                    t.$obQuery.relativeToViewport().observe(".bottom-loading-bar", function(e) {
                        e.intersectionRatio >= .5 && t.onScrollToLower();
                    });
                }, 1e3);
            });
        }).catch(function(n) {
            t.setData({
                status: a.constant.pageStatus.error
            }), e.default.error("获取我的活动失败：", n);
        });
    },
    getData: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return (0, i.getMyActList)({
            page: t
        }, {}).then(function(t) {
            return !t || t.code ? Promise.reject() : {
                list: (t = t.data || {}).data || [],
                next: Number(t.page && t.page.next)
            };
        });
    }
});