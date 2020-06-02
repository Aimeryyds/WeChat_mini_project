var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger")), e = require("../../network/index"), i = require("../../services/report.js");

Component({
    properties: {
        voteid: {
            type: String,
            value: ""
        },
        id: {
            type: String,
            value: ""
        },
        isTimeline: {
            type: Boolean,
            value: !0
        }
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                topicVoteList: wx.getStorageSync("topicVote") || {}
            });
        }
    },
    created: function() {},
    attached: function() {
        var t = this.data.voteid;
        this.setData({
            submited: wx.getStorageSync("topicVote")[t] || !1
        }), this._loadData();
    },
    data: {
        countTotalMax1: 1,
        submited: !1,
        ready: !1
    },
    methods: {
        _loadData: function() {
            var i = this, a = i.data.voteid;
            a && a.length > 0 && e.request.get(e.URL.vote, {
                voteId: a,
                source: 1
            }).then(function(t) {
                if (t && t.data) {
                    var e = t.data.subject[0], a = e.title, o = e.option, r = e.votedtotal, s = e.subjectid, n = Math.max(1, r), d = o.slice(0, 2);
                    d[0].votePercent = Math.round(o[0].selected / n * 100), d[1].votePercent = 100 - d[0].votePercent, 
                    i.setData({
                        title: a,
                        options: d,
                        countTotalMax1: n,
                        subjectid: s,
                        ready: !0
                    });
                }
            }, function(e) {
                t.default.error("加载投票信息出错：", e);
            });
        },
        onClickOption: function(t) {
            if (!this.data.submited) {
                var e = this.data.voteid, a = this.data.subjectid, o = t.currentTarget.dataset, r = o ? o.optionid : "", s = wx.getStorageSync("topicVote") || {};
                s[e] = r, wx.setStorage({
                    key: "topicVote",
                    data: s
                }), this.setData({
                    submited: !0
                }), this.onSubmit(e, a, r), (0, i.report)({
                    fromPage: this.data.isTimeline ? "news_page" : "weibo_list_page",
                    opType: "topic_vote_click",
                    articleId: this.data.id
                }), this.triggerEvent("onSubmit");
            }
        },
        onSubmit: function(t, i, a) {
            var o = {};
            o[i] = {
                selected: [ a ],
                others: {}
            };
            var r = {
                login: 0,
                answer: JSON.stringify(o),
                source: 1
            };
            e.request.post(e.URL.voteSubmit, r, {
                voteId: t
            });
        }
    }
});