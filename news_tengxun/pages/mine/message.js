var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../utils/mlodash")), i = (e(require("../../utils/logger")), 
require("../../services/report"));

Page({
    data: {
        fromPage: i.FROM_PAGE.mine_message_page,
        tabNames: [ "评论", "点赞", "粉丝" ],
        coral_uid: "",
        uin: "",
        ready: !1,
        activeIndex: 0,
        fansNoDataTips: [ " - 还没有粉丝哦 -", "听说多发表评论可以吸粉!" ]
    },
    onLoad: function() {
        var e = this;
        this.changeActiveIndex = a.default.debounce(function(a) {
            e.setData({
                activeIndex: a
            });
        }, 200, {
            leading: !0
        });
    },
    onShow: function() {},
    onReady: function() {
        this.setData({
            uin: this.query.uin,
            coral_uid: this.query.coral_uid,
            ready: !0
        });
    },
    onChange: function(e) {
        var i = a.default.get(e, "detail.current", 0);
        i !== this.data.activeIndex && this.changeActiveIndex(i);
    }
});