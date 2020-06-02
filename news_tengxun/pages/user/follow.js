var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), i = (e(require("../../utils/logger")), 
require("../../services/report"));

Page({
    data: {
        fromPage: i.FROM_PAGE.user_follow_page,
        tabNames: [ "话题", "用户" ],
        activeIndex: 0,
        uin: "",
        coral_uid: "",
        ready: !1
    },
    onLoad: function(e) {
        var i = this;
        "master" !== e.type ? wx.setNavigationBarTitle({
            title: "TA的关注"
        }) : wx.setNavigationBarTitle({
            title: "我的关注"
        }), this.changeActiveIndex = t.default.debounce(function(e) {
            i.setData({
                activeIndex: e
            });
        }, 200, {
            leading: !0
        });
    },
    onShow: function() {},
    onReady: function() {
        this.setData({
            ready: !0,
            uin: this.query.uin || "",
            coral_uid: this.query.coral_uid || ""
        });
    },
    onChange: function(e) {
        var i = t.default.get(e, "detail.current", 0);
        i !== this.data.activeIndex && this.changeActiveIndex(i);
    }
});