var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = (e(require("../../utils/logger")), 
require("../../services/report")), r = e(require("../../utils/mlodash")), a = require("../../store/index");

Component({
    properties: {
        articleId: String,
        title: String,
        posterShareImg: String,
        fromPage: String,
        isVideo: Boolean,
        themeWhite: Boolean,
        isDaily: Boolean
    },
    data: {
        pageArea: t.PAGE_AREA.content
    },
    created: function() {},
    attached: function() {
        var e = r.default.get(a.userData, "appConf.share_text", "海报");
        this.setData({
            shareText: e
        });
    },
    methods: {
        tapPoster: function() {
            if (this.data.isDaily) this.triggerEvent("drawPoster"); else {
                var e = {
                    articleId: this.data.articleId,
                    imgUrl: this.data.posterShareImg,
                    isVideo: this.data.isVideo,
                    title: this.data.title
                };
                a.poster.genPoster(this.data.fromPage, this.data.pageArea, e);
            }
        }
    }
});