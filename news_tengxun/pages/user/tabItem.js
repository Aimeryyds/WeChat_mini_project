var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../@babel/runtime/helpers/defineProperty")), e = t(require("../../utils/logger")), i = (t(require("../../utils/mlodash")), 
require("../../store/index")), s = require("../../services/comment"), n = require("./service");

Component({
    properties: {
        fromPage: String,
        tabName: String,
        type: String,
        coral_uid: String,
        uin: String,
        mediaId: String,
        ready: {
            type: Boolean,
            observer: function(t) {
                t && (this.data.ready = !1, "评论" === this.data.tabName ? this.reqFn = s.getMyComments : "动态" === this.data.tabName ? this.reqFn = n.getUserWeiboList : "图文" === this.data.tabName ? this.reqFn = n.getSubNewsIndex : "视频" === this.data.tabName && (this.reqFn = n.getUserVideoList), 
                this.render());
            }
        }
    },
    data: {
        list: [],
        pageStatus: i.constant.pageStatus,
        status: i.constant.pageStatus.loading,
        bottomLoadingStatus: i.constant.pageStatus.loading,
        hasMore: !0,
        noData: !1
    },
    created: function() {
        Object.assign(this, {
            last: "",
            pullUpPending: !1,
            pages: [],
            reqFn: function() {
                return Promise.reject();
            }
        });
    },
    attached: function() {},
    ready: function() {
        this.$obQuery = this.createIntersectionObserver({
            thresholds: [ .5 ]
        });
    },
    detached: function() {
        this.$obQuery && this.$obQuery.disconnect();
    },
    methods: {
        onReachBottom: function() {
            var t = this;
            this.pullUpPending || !this.data.hasMore || this.data.noData || this.data.status !== i.constant.pageStatus.ready || (this.pullUpPending = !0, 
            this.reqFn({
                coral_uid: this.data.coral_uid,
                uin: this.data.uin,
                mediaId: this.data.mediaId,
                type: this.data.type,
                last: this.last,
                pages: this.pages
            }).then(function(e) {
                var s = (0, a.default)({}, "list[".concat(t.data.list.length, "]"), {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    list: e.list
                });
                0 === e.bnext && (s.hasMore = !1), t.data.bottomLoadingStatus !== i.constant.pageStatus.loading && (s.bottomLoadingStatus = i.constant.pageStatus.loading), 
                t.setData(s), t.last = e.last, t.pullUpPending = !1;
            }).catch(function(a) {
                t.pullUpPending = !1, t.setData({
                    bottomLoadingStatus: i.constant.pageStatus.error
                }), e.default.error("上拉刷新出现错误：", a);
            }));
        },
        render: function() {
            var t = this;
            this.reqFn({
                coral_uid: this.data.coral_uid,
                uin: this.data.uin,
                mediaId: this.data.mediaId,
                type: this.data.type
            }).then(function(a) {
                var e = {
                    status: i.constant.pageStatus.ready
                };
                a.list.length ? (e.list = [ {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    list: a.list
                } ], 0 === a.bnext && (e.hasMore = !1), t.data.noData && (e.noData = !1), "图文" === t.data.tabName && (t.pages = a.pages, 
                t.reqFn = n.getSubNewsListItems), t.last = a.last) : e.noData = !0, t.setData(e, function() {
                    setTimeout(function() {
                        t.$obQuery.relativeToViewport().observe(".bottom-loading-bar", function(a) {
                            a.intersectionRatio >= .5 && t.onReachBottom();
                        });
                    }, 1e3);
                });
            }).catch(function(a) {
                t.setData({
                    status: i.constant.pageStatus.error
                }), e.default.error("拉取".concat(t.data.tabName, "列表出现错误："), a);
            });
        }
    }
});