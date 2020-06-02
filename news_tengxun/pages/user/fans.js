var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = (e(require("../../utils/logger")), 
e(require("../../utils/mlodash")), require("../../services/report"));

Page({
    data: {
        fromPage: a.FROM_PAGE.user_fans_page,
        mediaId: "",
        uin: "",
        coral_uid: "",
        ready: !1,
        noDataTips: [ " - 还没有粉丝哦 -", "听说多发表评论可以吸粉!" ]
    },
    onLoad: function(e) {
        "master" !== e.type ? (this.data.noDataTips = [ " - TA还没有粉丝哦 - ", "要不要关注TA?" ], 
        wx.setNavigationBarTitle({
            title: "TA的粉丝"
        })) : wx.setNavigationBarTitle({
            title: "我的粉丝"
        });
    },
    onReady: function() {
        this.setData({
            ready: !0,
            mediaId: this.query.mediaId || "",
            uin: this.query.uin || "",
            coral_uid: this.query.coral_uid || "",
            noDataTips: this.data.noDataTips
        });
    },
    onShow: function() {},
    onShareAppMessage: function() {}
});