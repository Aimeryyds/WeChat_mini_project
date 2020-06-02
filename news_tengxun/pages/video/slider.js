var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), a = require("../../services/report"), r = require("../../store/index.js"), i = require("../../services/appScheme");

e(require("../../utils/logger"));

Component({
    properties: {
        fixList: {
            type: Object,
            observer: function(e) {
                var t = (0, i.getScheme)({
                    fromPage: this.data.fromPage,
                    bossName: "bottom",
                    options: {
                        nm: this.data.articleId
                    }
                });
                this.data.list[0].appParameter = t, this.setData({
                    list: this.data.list.concat(e)
                });
            }
        },
        fromPage: String,
        articleId: String
    },
    data: {
        current: 0,
        isIphoneX: r.systemInfo.isIphoneX,
        list: [ {
            title: "腾讯新闻",
            img: "http://mat1.gtimg.com/www/images/newsapp/wxapp/news/icon_logo_small_normal.png",
            appParameter: ""
        } ],
        reportParams: {
            successOpType: a.OP_TYPE.open_bottom_click,
            failOpType: a.OP_TYPE.open_bottom_failure
        }
    },
    ready: function() {
        (0, a.report)({
            opType: a.OP_TYPE.open_bottom_exposure,
            fromPage: this.data.fromPage,
            articleId: this.data.articleId
        });
    },
    created: function() {},
    attached: function() {
        var e = this;
        this.changeActiveIndex = t.default.debounce(function(t) {
            e.setData({
                current: t
            });
        }, 200, {
            leading: !0
        });
    },
    methods: {
        bindSwiperChange: function(e) {
            var t = e.detail.current;
            t !== this.data.current && this.changeActiveIndex(t);
        }
    }
});