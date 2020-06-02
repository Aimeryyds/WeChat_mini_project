require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../services/jump"), i = require("../../services/report");

Component({
    properties: {
        chlicon: String,
        chlname: String,
        chlid: String,
        articleId: String,
        publishTime: String
    },
    data: {},
    ready: function() {},
    created: function() {},
    attached: function() {},
    methods: {
        mediaTap: function(t) {
            this.data.chlid && this.data.chlicon && (0, e.navigateTo)(e.PAGE_PATH.USER, {
                mediaId: this.data.chlid
            }), (0, i.report)({
                fromPage: i.FROM_PAGE.news_page,
                opType: i.OP_TYPE.index_cell_om_image,
                articleId: this.data.articleId
            });
        }
    }
});