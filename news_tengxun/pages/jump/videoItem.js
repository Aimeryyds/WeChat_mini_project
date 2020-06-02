require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger")), 
require("../../store/index"), require("../../services/article");

var e = require("../../services/report"), t = require("../../services/jump");

Component({
    properties: {
        articleId: String,
        atype: Number,
        title: String,
        chlicon: String,
        chlname: String,
        chlid: String,
        snapshot: String,
        posterShareImage: String,
        playCount: Number,
        durationStr: String,
        vid: String,
        _uid: String,
        commentCount: Number,
        reasonFlag: String
    },
    data: {
        fromPage: e.FROM_PAGE.video_page
    },
    created: function() {},
    attached: function() {},
    detached: function() {},
    methods: {
        onVideoEnded: function() {
            this.triggerEvent("videoEnded");
        },
        tapArticle: function() {
            (0, t.navigateTo)((0, t.atypeToUrl)(this.data.atype, {
                id: this.data.articleId,
                vid: this.data.vid
            }));
            var i = JSON.stringify({
                picShowType: this.data.showType,
                cell_video: 1,
                cell_title: 1,
                cell_om_image: this.data.chlicon ? 1 : 0
            });
            (0, e.report)({
                fromPage: e.FROM_PAGE.video_page,
                opType: e.OP_TYPE.cell_click,
                articleId: this.data.articleId,
                aticleType: this.data.atype,
                reasonFlag: this.data.reasonFlag,
                extension: i
            });
        },
        none: function() {}
    }
});