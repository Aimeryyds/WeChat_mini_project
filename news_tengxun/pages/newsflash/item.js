var t = require("../../services/report.js"), e = require("../../services/jump"), a = require("../../services/article"), i = require("../../store/index");

Component({
    properties: {
        articleId: String,
        atype: Number,
        title: String,
        intro: String,
        topicId: String,
        vid: String,
        posterShareImage: String,
        pubTimeStr: String,
        commentCount: Number,
        hasRead: Boolean,
        showTimeLine: Boolean,
        isLast: Boolean
    },
    data: {
        fromPage: t.FROM_PAGE.speed_page,
        smallScreen: i.systemInfo.screenWidth <= 320
    },
    ready: function() {},
    created: function() {},
    attached: function() {},
    methods: {
        handleSubmit: function(t) {
            this.data.hasRead || (this.setData({
                hasRead: !0
            }), (0, a.setHasReadArticle)(this.data.articleId));
        },
        tapArticle: function() {
            if (114 === this.data.atype && this.data.topicId) (0, e.navigateTo)(e.PAGE_PATH.TOPIC, {
                tpid: this.data.topicId
            }); else {
                var t = {
                    id: this.data.articleId
                };
                this.data.vid && (t.vid = this.data.vid), (0, e.navigateTo)((0, e.atypeToUrl)(this.data.atype, t));
            }
        }
    }
});