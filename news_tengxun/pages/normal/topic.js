var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), r = e(require("../../utils/logger")), i = require("../../services/report"), o = require("../../services/jump"), a = require("../../utils/common"), n = require("./service");

Component({
    properties: {
        tpid: String,
        fromPage: String
    },
    data: {
        title: "",
        img: "",
        desc: "",
        weibo: {},
        vote: {},
        readCountStr: "",
        joinCountStr: "",
        show: !1
    },
    attached: function() {},
    detached: function() {
        this.$obQuery && this.$obQuery.disconnect();
    },
    ready: function() {
        var e = this;
        this.render().then(function() {
            e.$obQuery = e.createIntersectionObserver(), e.$obQuery.relativeToViewport().observe(".topic-wrapper", function() {
                (0, i.report)({
                    opType: i.OP_TYPE.related_topic_exposure,
                    fromPage: e.data.fromPage,
                    topicId: e.data.tpid
                }), e.$obQuery.disconnect();
            });
        });
    },
    methods: {
        onTap: function() {
            (0, o.navigateTo)(o.PAGE_PATH.TOPIC, {
                tpid: this.data.tpid
            }), (0, i.report)({
                opType: i.OP_TYPE.related_topic_click,
                fromPage: this.data.fromPage,
                topicId: this.data.tpid
            });
        },
        render: function() {
            var e = this;
            return (0, n.getRelatedTopic)(this.data.tpid).then(function(r) {
                var i = r.wb_info || {}, o = t.default.get(r, "vote_info.option_titles", []), n = {
                    title: r.title || "",
                    readCountStr: (0, a.formatCount)(r.read_count) || "",
                    joinCountStr: (0, a.formatCount)(r.hot_value) || "",
                    img: r.cover_pic || "",
                    desc: r.desc || "",
                    weibo: {
                        mediaName: i.name || "",
                        content: i.desc || ""
                    },
                    vote: {
                        positive: o[0] || "",
                        negative: o[1] || ""
                    }
                };
                n.show = !!n.title, e.setData(n);
            }).catch(function(e) {
                r.default.error("获取相关话题出现错误：", e);
            });
        }
    }
});