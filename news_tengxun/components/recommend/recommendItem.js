require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../services/jump"), t = require("../../utils/common"), i = require("../../services/report"), r = require("../../services/article");

Component({
    properties: {
        title: String,
        chlname: String,
        comments: {
            type: Number,
            value: 0,
            observer: function(e) {
                this.setData({
                    commentsStr: (0, t.formatCount)(e)
                });
            }
        },
        publishTime: String,
        img: String,
        picShowType: {
            type: Number,
            value: 0
        },
        showName: Boolean,
        showTime: Boolean,
        noBorder: Boolean,
        articleId: String,
        atype: Number,
        topicId: String,
        fromPage: String,
        index: Number,
        isNewsflash: Boolean,
        time: String,
        hasRead: Boolean
    },
    data: {},
    ready: function() {
        var e = this, t = this.data, r = t.fromPage, o = t.articleId, a = t.atype, s = t.index, n = t.picShowType, c = t.title;
        this.extension = {
            aticleType: a,
            position: s,
            cell_pic: 1 == n ? 0 : 1,
            cell_title: c ? 1 : 0
        }, this.observer = this.createIntersectionObserver(), this.observer.relativeToViewport().observe(".recommend-item-wrapper", function() {
            (0, i.report)({
                fromPage: r,
                articleId: o,
                opType: e.data.isNewsflash ? i.OP_TYPE.speed_news_exposure : i.OP_TYPE.cell_exposure,
                extension: JSON.stringify(e.extension)
            }), e.observer.disconnect();
        });
    },
    created: function() {},
    attached: function() {},
    methods: {
        recommendTap: function(t) {
            var o = this.data, a = o.fromPage, s = o.articleId, n = o.atype, c = o.topicId;
            this.data.hasRead || ((0, r.setHasReadArticle)(s), this.setData({
                hasRead: !0
            })), 114 === n && c ? (0, e.navigateTo)(PAGE_PATH.TOPIC, {
                tpid: c
            }) : (0, e.navigateTo)((0, e.atypeToUrl)(n, {
                id: s
            })), (0, i.report)({
                fromPage: a,
                articleId: s,
                opType: i.OP_TYPE.cell_click,
                extension: JSON.stringify(this.extension)
            });
        }
    }
});