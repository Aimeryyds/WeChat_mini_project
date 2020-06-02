var t = require("../../services/report"), e = require("../../services/jump"), a = require("./service");

Component({
    properties: {
        chlid: String,
        chlname: String,
        chlicon: String,
        desc: String,
        follow: Boolean
    },
    data: {},
    created: function() {},
    attached: function() {},
    methods: {
        tapMedia: function(a) {
            (0, e.navigateTo)(e.PAGE_PATH.USER, {
                mediaId: this.data.chlid
            }), (0, t.report)({
                opType: t.OP_TYPE.dujia_account_click,
                fromPage: t.FROM_PAGE.news_page
            });
        },
        tapButton: function(e) {
            var o = this, i = {}, r = this.data.follow;
            this.data.follow ? i.del = this.data.chlid : (i.add = this.data.chlid, (0, t.report)({
                opType: t.OP_TYPE.dujia_follow_click,
                fromPage: t.FROM_PAGE.news_page
            })), this.setData({
                follow: !r
            }), (0, a.postFollowMedia)(i).catch(function(t) {
                logger.error("关注、取关媒体出现错误：", t), o.setData({
                    follow: r
                });
            });
        }
    }
});