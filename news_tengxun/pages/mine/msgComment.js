var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../@babel/runtime/helpers/defineProperty")), e = t(require("../../utils/logger")), n = (t(require("../../utils/mlodash")), 
require("../../store/index")), s = require("../../services/comment");

Component({
    properties: {},
    data: {
        list: [],
        scrollTop: 0,
        pageStatus: n.constant.pageStatus,
        status: n.constant.pageStatus.loading,
        hasMore: !0,
        pullUpStatus: n.constant.pageStatus.loading,
        pulldownPending: !1,
        bottomLoadingNoMoreText: "已显示全部内容",
        noData: !1
    },
    created: function() {
        Object.assign(this, {
            lastPubTime: "",
            pullUpPending: !1
        });
    },
    attached: function() {},
    ready: function() {
        this.render();
    },
    methods: {
        onReachBottom: function() {
            var t = this;
            !this.pullUpPending && this.data.hasMore && (this.pullUpPending = !0, (0, s.getMyReply)(this.lastPubTime).then(function(e) {
                var s = (0, a.default)({}, "list[".concat(t.data.list.length, "]"), {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    list: e.list
                });
                0 === e.bnext && (s.hasMore = !1), t.data.pullUpStatus !== n.constant.pageStatus.loading && (s.pullUpStatus = n.constant.pageStatus.loading), 
                t.setData(s), t.lastPubTime = e.pubTime, t.pullUpPending = !1;
            }).catch(function(a) {
                t.pullUpPending = !1, t.setData({
                    pullUpStatus: n.constant.pageStatus.error
                }), e.default.error("上拉刷新出现错误：", a);
            }));
        },
        render: function() {
            var t = this;
            (0, s.getMyReply)().then(function(a) {
                if (a.list.length) {
                    var e = {
                        list: [ {
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            list: a.list
                        } ],
                        status: n.constant.pageStatus.ready
                    };
                    0 === a.bnext && (e.hasMore = !1), t.data.noData && (e.noData = !1), t.setData(e), 
                    t.lastPubTime = a.pubTime;
                } else t.setData({
                    status: n.constant.pageStatus.ready,
                    noData: !0
                });
            }).catch(function(a) {
                t.setData({
                    status: n.constant.pageStatus.error
                }), e.default.error("拉取评论列表出现错误：", a);
            });
        }
    }
});