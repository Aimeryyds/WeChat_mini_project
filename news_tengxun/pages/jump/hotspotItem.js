require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../store/index"), e = require("../../services/report"), a = require("../../utils/common"), i = require("../../services/jump.js");

Component({
    properties: {
        showType: Number,
        articleId: {
            type: String,
            observer: function(e) {
                e && (this.updateCommentCount(t.comment.commentCountMap[e]), t.comment.watch("commentCountMap.".concat(e), this.updateCommentCount));
            }
        },
        chlname: String,
        title: String,
        atype: {
            type: Number,
            observer: function(t) {
                this.setData({
                    isVideo: 101 == t || 4 == t || 56 == t
                });
            }
        },
        imageSrc: String,
        publishTime: String,
        zwbType: Number,
        zwbDay: String,
        zwbDate: String,
        zwbWeekday: String,
        tpid: String
    },
    data: {
        isVideo: !1,
        commentCountStr: "",
        morSrc: "http://mat1.gtimg.com/www/images/news_minipro/zwb_mor_small_white_tl.png",
        eveSrc: "http://mat1.gtimg.com/www/images/news_minipro/zwb_eve_small_white_tl.png"
    },
    created: function() {
        this.updateCommentCount = this.updateCommentCount.bind(this);
    },
    attached: function() {
        this.data.zwbDay && wx.setStorageSync("TL_ZWB_EXPO", this.data.zwbDay + this.data.zwbType);
    },
    detached: function() {
        t.comment.unWatch("commentCountMap.".concat(this.data.articleId), this.updateCommentCount);
    },
    methods: {
        handleTap: function(a) {
            var n = e.OP_TYPE.hot_news_click;
            114 === this.data.atype && 11 === this.data.showType && this.data.tpid ? (0, i.navigateTo)(i.PAGE_PATH.TOPIC, {
                tpid: this.data.tpid
            }) : this.data.zwbType ? (n = e.OP_TYPE.morning_evening_click, (0, i.navigateTo)(i.PAGE_PATH.DAILY, {
                type: this.data.zwbType,
                day: this.data.zwbDay
            })) : (0, i.navigateTo)((0, i.atypeToUrl)(this.data.atype, {
                id: this.data.articleId
            })), (0, e.report)({
                opType: n,
                fromPage: e.FROM_PAGE.news_page,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                showType: this.data.showType
            }), wx.reportAnalytics("1024", {
                articleId: this.data.articleId,
                openid: t.userInfo.openid,
                opentype: t.global.scene
            });
        },
        updateCommentCount: function(t) {
            var e = (0, a.formatCount)(t);
            this.setData({
                commentCountStr: e
            });
        }
    }
});