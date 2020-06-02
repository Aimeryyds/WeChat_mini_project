var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../utils/time"), i = require("../../services/jump"), a = (e(require("../../utils/mlodash")), 
require("../../services/article")), r = require("../../utils/common");

Component({
    properties: {
        showType: {
            type: Number,
            value: NaN,
            observer: function(e) {
                (11 === e || 114 === this.data.atype && "话题" === this.data.source) && this.setData({
                    isTopic: !0
                });
            }
        },
        picShowType: String,
        isOriginal: Boolean,
        hasRead: Boolean,
        title: String,
        source: String,
        time: {
            type: Number,
            observer: function(e) {
                new Date().getTime() / 1e3 - e < 21600 && this.setData({
                    pubTime: (0, t.distanceInWords)(e)
                });
            }
        },
        atype: {
            type: Number,
            value: NaN,
            observer: function(e) {
                this.setData({
                    isVideo: 56 === e || 101 === e || 4 === e || 118 === e || 303 === e,
                    isSpecial: 120 === e || 100 === e
                });
            }
        },
        articleId: String,
        imageBig: String,
        imageSmall: String,
        imageThree: Array,
        imgCount: Number,
        commentCount: {
            type: Number,
            observer: function(e) {
                e && this.setData({
                    formatCommentCount: (0, r.formatCount)(e)
                });
            }
        },
        vid: String,
        duration: String,
        playCount: {
            type: Number,
            observer: function(e) {
                this.setData({
                    playCountStr: (0, r.formatCount)(e)
                });
            }
        },
        readNum: {
            type: Number,
            observer: function(e) {
                e && this.setData({
                    formatReadNum: (0, r.formatCount)(e)
                });
            }
        },
        joinCount: {
            type: Number,
            observer: function(e) {
                e && this.setData({
                    formatJoinCount: (0, r.formatCount)(e)
                });
            }
        },
        topicId: String,
        isLastOne: Boolean
    },
    data: {
        isTopic: !1,
        isVideo: !1,
        isSpecial: !1
    },
    methods: {
        newsTap: function() {
            var e = this.data, t = e.isTopic, r = e.articleId, o = e.atype, s = e.topicId;
            this.data.hasRead || ((0, a.setHasReadArticle)(r), this.setData({
                hasRead: !0
            })), t ? (0, i.navigateTo)(i.PAGE_PATH.TOPIC, {
                tpid: s
            }) : (0, i.navigateTo)((0, i.atypeToUrl)(o, {
                id: r
            }));
        }
    }
});