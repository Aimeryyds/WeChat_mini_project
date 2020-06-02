var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../@babel/runtime/helpers/defineProperty")), e = t(require("../../utils/logger")), s = (t(require("../../utils/mlodash")), 
require("../../store/index")), n = require("./service");

Component({
    properties: {
        withTopTips: Boolean,
        type: {
            type: String,
            observer: function(t) {
                "like" === t ? this.reqFn = n.getUpUserList : "messageFans" === t ? this.reqFn = n.UserFansMsgList : "fans" === t ? this.reqFn = n.getUserFansList : "followPeople" === t ? this.reqFn = n.getUserSubList : "followTopic" === t && (this.reqFn = n.getUserSubTopicList);
            }
        },
        ready: {
            type: Boolean,
            observer: function(t) {
                t && (this.data.ready = !1, this.render());
            }
        },
        replyId: String,
        commentId: String,
        uin: String,
        coral_uid: String,
        mediaId: String,
        noDataTips: Array
    },
    data: {
        list: [],
        scrollTop: 0,
        pageStatus: s.constant.pageStatus,
        status: s.constant.pageStatus.loading,
        hasMore: !0,
        pullUpStatus: s.constant.pageStatus.loading,
        pulldownPending: !1,
        bottomLoadingNoMoreText: "已显示全部内容",
        noData: !1
    },
    created: function() {
        Object.assign(this, {
            page: 1,
            last: null,
            pullUpPending: !1,
            reqFn: function() {
                return Promise.reject();
            }
        });
    },
    attached: function() {},
    ready: function() {},
    methods: {
        onReachBottom: function() {
            var t = this;
            !this.pullUpPending && this.data.hasMore && (this.pullUpPending = !0, this.reqFn({
                page: this.page,
                last: this.last,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                uin: this.data.uin,
                coral_uid: this.data.coral_uid,
                mediaId: this.data.mediaId
            }).then(function(e) {
                var n = (0, a.default)({}, "list[".concat(t.data.list.length, "]"), {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    list: e.list
                });
                0 === e.bnext && (n.hasMore = !1), t.data.pullUpStatus !== s.constant.pageStatus.loading && (n.pullUpStatus = s.constant.pageStatus.loading), 
                t.setData(n), t.page += 1, t.last = e.last, t.pullUpPending = !1;
            }).catch(function(a) {
                t.pullUpPending = !1, t.setData({
                    pullUpStatus: s.constant.pageStatus.error
                }), e.default.error("上拉刷新出现错误：", a);
            }));
        },
        render: function() {
            var t = this;
            this.reqFn({
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                uin: this.data.uin,
                coral_uid: this.data.coral_uid,
                mediaId: this.data.mediaId
            }).then(function(a) {
                if (a.list.length) {
                    var e = {
                        list: [ {
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            list: a.list
                        } ],
                        status: s.constant.pageStatus.ready
                    };
                    0 === a.bnext && (e.hasMore = !1), t.data.noData && (e.noData = !1), t.setData(e), 
                    t.page += 1, t.last = a.last;
                } else t.setData({
                    status: s.constant.pageStatus.ready,
                    noData: !0
                });
            }).catch(function(a) {
                t.setData({
                    status: s.constant.pageStatus.error
                }), e.default.error("拉取粉丝列表出现错误：", a);
            });
        }
    }
});