var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../utils/mlodash")), i = (t(require("../../utils/logger")), 
require("../../services/jump")), o = require("../../store/index"), a = require("../../utils/common"), n = require("../../services/report.js");

Component({
    properties: {
        articleId: String,
        atype: Number,
        topicId: {
            type: String,
            observer: function(t) {
                t && (this.updateJoinCount(o.topic.joinCountMap[t]), o.topic.watch("joinCountMap.".concat(t), this.updateJoinCount));
            }
        },
        name: String,
        voteId: {
            type: String,
            observer: function(t) {
                if (t) {
                    var e = {};
                    try {
                        e = wx.getStorageSync("topicVote") || {};
                    } catch (t) {}
                    var i = e[t] || !1;
                    this.setData({
                        submited: i
                    });
                }
            }
        },
        weiboList: Array
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                submited: wx.getStorageSync("topicVote") || !1
            });
        }
    },
    data: {
        joinCountStr: "",
        submited: !1,
        activeWeiboIndex: 0
    },
    created: function() {
        this.updateJoinCount = this.updateJoinCount.bind(this);
    },
    attached: function() {},
    detached: function() {
        o.topic.unWatch("joinCountMap.".concat(this.data.topicId), this.updateJoinCount);
    },
    methods: {
        onSwiperChange: function(t) {
            this.setData({
                activeWeiboIndex: e.default.get(t, "detail.current")
            });
        },
        onTap: function() {
            wx.reportAnalytics("1021", {
                current_page: "index",
                id: this.data.topicId
            }), (0, n.report)({
                opType: n.OP_TYPE.topic_click,
                fromPage: n.FROM_PAGE.news_page,
                articleId: this.data.articleId,
                atype: this.data.atype,
                topicId: this.data.topicId,
                voteId: this.data.voteId
            }), (0, i.navigateTo)(i.PAGE_PATH.TOPIC, {
                tpid: this.data.topicId
            });
        },
        catchtouchmove: function() {
            return !1;
        },
        onSubmit: function() {
            this.setData({
                submited: !0
            });
        },
        updateJoinCount: function(t) {
            this.setData({
                joinCountStr: (0, a.formatCount)(t)
            });
        }
    }
});