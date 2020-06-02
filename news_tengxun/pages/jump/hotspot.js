var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../../@babel/runtime/helpers/defineProperty")), t = (e(require("../../utils/logger")), 
e(require("../../utils/mlodash"))), i = require("../../services/report"), a = require("../../services/jump.js"), o = require("./service");

Component({
    properties: {
        articleId: String,
        title: String,
        articleList: Array,
        atype: Number,
        showType: Number,
        zwbFolded: {
            type: Boolean,
            observer: function(e) {
                if (e) {
                    var i, a = -1;
                    t.default.forEach(this.data.articleList, function(e, r) {
                        if (e.zwbType) return a = r, i = (1 === e.zwbType ? "新闻早报/" : "新闻晚报/") + e.title, 
                        !1;
                    }), -1 !== a && this.setData((0, r.default)({}, "articleList[".concat(a, "].title"), i));
                }
            }
        },
        zwbHasExposured: {
            type: Boolean,
            observer: function(e) {
                e || (0, o.report)({
                    opType: i.OP_TYPE.morning_evening_exposure,
                    fromPage: i.FROM_PAGE.news_page
                });
            }
        }
    },
    data: {},
    created: function() {},
    attached: function() {},
    methods: {
        newsClick: function(e) {
            (0, a.navigateTo)(a.PAGE_PATH.HOT_NEWS);
        },
        handleTapMore: function() {
            (0, a.navigateTo)(a.PAGE_PATH.HOT_NEWS), (0, o.report)({
                fromPage: i.FROM_PAGE.news_page,
                opType: i.OP_TYPE.hot_news_more,
                articleId: this.data.articleId,
                articleType: this.data.atype
            });
        }
    }
});