require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../store/index"), t = require("../../services/jump"), a = require("../../services/report");

Component({
    properties: {
        img: String,
        title: String,
        fromPage: String,
        info: {
            type: Object,
            observer: function(t) {
                var a = [];
                t.comment || t.thanks ? (t.thanks && a.push("，".concat(t.thanks, "位群友感谢你的分享")), 
                t.comment && a.push("，有".concat(t.comment, "条群友评论"))) : t.read && a.push("，".concat(t.read, "位群友看过")), 
                this.setData({
                    shareInfo: a.join(""),
                    openGId: t.openGId,
                    lang: e.systemInfo.language
                });
            }
        },
        articleId: String,
        atype: Number
    },
    data: {
        avatarUrl: "",
        nickName: "",
        shareInfo: "",
        lang: "zh_CN"
    },
    created: function() {},
    attached: function() {
        this.setData({
            nickName: e.userInfo.nickName,
            avatarUrl: e.userInfo.avatarUrl
        });
    },
    methods: {
        tapArticle: function() {
            (0, a.report)({
                fromPage: this.data.fromPage,
                opType: a.OP_TYPE.cell_click,
                articleId: this.data.articleId,
                articleType: this.data.atype
            });
            var e = this.data, r = e.articleId, i = e.atype, n = e.openGId;
            r && (0, t.navigateTo)((0, t.atypeToUrl)(i, {
                id: r,
                openGId: n
            }));
        }
    }
});