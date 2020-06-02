require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../store/index"), t = require("../../services/article"), i = require("../../services/report"), a = require("../../services/jump"), r = require("./service");

Component({
    properties: {
        showType: Number,
        hasRead: Boolean,
        isExclusive: Boolean,
        isFixedTop: Boolean,
        isVideo: Boolean,
        articleId: String,
        atype: Number,
        title: String,
        intro: String,
        chlicon: String,
        chlname: String,
        chlid: String,
        publishTime: String,
        imgBig: String,
        imgSmall: String,
        imgThree: Array,
        imgCount: Number,
        posterShareImage: String,
        playCount: Number,
        durationStr: String,
        vid: String,
        _uid: String,
        hotComment: Object,
        commentCount: Number,
        articleList: Array,
        zwbHasExposured: Boolean,
        zwbFolded: Boolean,
        topicId: String,
        topicName: String,
        voteId: String,
        weiboList: Array,
        joinCount: Number,
        isExclusiveMedia: Boolean,
        mediaList: Array,
        reasonFlag: String,
        hideSplitLine: Boolean
    },
    data: {
        show: !0,
        fromPage: i.FROM_PAGE.news_page,
        smallScreen: e.systemInfo.screenWidth <= 320
    },
    created: function() {
        Object.assign(this, {
            reportExtension: ""
        });
    },
    attached: function() {},
    ready: function() {
        var e = this;
        this.observer = this.createIntersectionObserver(), this.observer.relativeToViewport().observe(".recommend-item-wrapper", function(t) {
            e.getExtension();
            var a = {
                fromPage: i.FROM_PAGE.news_page,
                articleId: e.data.articleId,
                aticleType: e.data.atype,
                extension: e.reportExtension
            };
            e.data.isExclusiveMedia ? a.opType = i.OP_TYPE.dujia_exposure : 12 === e.data.showType ? a.opType = i.OP_TYPE.speed_news_exposure : 8 === e.data.showType ? a.opType = i.OP_TYPE.morning_evening_exposure : (a.opType = i.OP_TYPE.cell_exposure, 
            a.reasonFlag = e.data.reasonFlag), (0, r.report)(a), e.observer.disconnect();
        });
    },
    methods: {
        tapArticle: function() {
            this.data.hasRead || (this.setData({
                hasRead: !0
            }), (0, t.setHasReadArticle)(this.data.articleId)), (0, a.navigateTo)((0, a.atypeToUrl)(this.data.atype, {
                id: this.data.articleId,
                vid: this.data.vid
            })), this.getExtension(), (0, r.report)({
                fromPage: i.FROM_PAGE.news_page,
                opType: i.OP_TYPE.cell_click,
                articleId: this.data.articleId,
                aticleType: this.data.atype,
                extension: this.reportExtension,
                reasonFlag: this.data.reasonFlag
            });
        },
        tapHotComment: function() {
            this.data.hasRead || (this.setData({
                hasRead: !0
            }), (0, t.setHasReadArticle)(this.data.articleId));
        },
        tapVideo: function() {
            this.data.hasRead || (this.setData({
                hasRead: !0
            }), (0, t.setHasReadArticle)(this.data.articleId));
        },
        tapDisLike: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("tapDislike", {
                articleId: this.data.articleId,
                _uid: this.data._uid
            }), wx.showToast({
                title: "减少类似内容"
            }), (0, t.setDislikeArticle)(this.data.articleId), (0, r.report)({
                fromPage: i.FROM_PAGE.news_page,
                opType: i.OP_TYPE.index_cell_dislike,
                articleId: this.data.articleId,
                articleType: this.data.articleType
            });
        },
        getExtension: function(e) {
            if (!this.reportExtension) {
                var t = this.data.showType, i = 1 === t || 2 === t || 3 === t || 9 === t || 10 === t, a = 1 === t || 2 === t || 3 === t || 9 === t || 10 === t;
                this.reportExtension = JSON.stringify({
                    tab: "news",
                    articleType: this.data.atype,
                    picShowType: this.data.showType,
                    cell_summary: this.data.intro ? 1 : 0,
                    cell_pic: i ? 1 : 0,
                    cell_hot_comment: this.data.hotcomment ? 1 : 0,
                    cell_video: this.data.isVideo ? 1 : 0,
                    cell_title: this.data.title ? 1 : 0,
                    cell_om_image: this.data.chlicon ? 1 : 0,
                    cell_dislike: a ? 1 : 0
                });
            }
        }
    }
});