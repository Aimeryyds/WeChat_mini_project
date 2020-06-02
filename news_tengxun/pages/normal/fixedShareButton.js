var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/mlodash")), t = require("../../store/index"), a = require("../../services/report");

Component({
    properties: {
        articleId: String,
        title: String,
        posterShareImg: String,
        fromPage: String,
        isVideo: Boolean,
        spread: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        pageArea: a.PAGE_AREA.comment
    },
    attached: function() {
        this.setData({
            shareText: e.default.get(t.userData, "appConf.share_text", "海报")
        });
    },
    ready: function() {},
    methods: {
        changeSpreadState: function(t) {
            var a = e.default.get(t, "currentTarget.dataset.spread");
            this.triggerEvent("changeSpread", {
                spread: a
            });
        },
        tapPoster: function() {
            var e = {
                articleId: this.data.articleId,
                imgUrl: this.data.posterShareImg,
                isVideo: this.data.isVideo,
                title: this.data.title
            };
            t.poster.genPoster(this.data.fromPage, this.data.pageArea, e);
        }
    }
});