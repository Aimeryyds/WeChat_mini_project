var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger")), a = require("../../store/index"), e = require("../../utils/common"), n = require("../../services/jump"), i = require("../../services/report"), u = require("./service");

Page({
    data: {
        fromPage: i.FROM_PAGE.mine_page,
        nickName: "",
        avatarUrl: "",
        coral_uid: "",
        uin: "",
        showLikeCountModal: !1,
        pageStatus: a.constant.pageStatus,
        status: a.constant.pageStatus.loading,
        numbers: {
            pubNum: {
                value: "0",
                text: "发表",
                tapEvent: "tapUser"
            },
            followNum: {
                value: "0",
                text: "关注",
                tapEvent: "tapFocus"
            },
            fansNum: {
                value: "0",
                text: "粉丝",
                tapEvent: "tapFans"
            },
            likeNum: {
                value: "0",
                text: "获赞",
                tapEvent: "tapAgree"
            }
        },
        links: {
            message: {
                icon: "http://mat1.gtimg.com/www/images/news_minipro/set_ic_information.png",
                text: "消息",
                msgCount: "",
                tapEvent: "tapMessage"
            },
            share: {
                icon: "http://mat1.gtimg.com/www/images/news_minipro/set-ic-share.png",
                text: "分享圈",
                msgCount: "",
                tapEvent: "tapShare"
            },
            setting: {
                icon: "http://mat1.gtimg.com/www/js/news/set_ic_set.png",
                text: "推送设置",
                tapEvent: "tapSetting"
            }
        }
    },
    onLoad: function(t) {
        Object.assign(this, {
            showCount: 0
        });
    },
    onReady: function() {
        this.init();
    },
    onShow: function() {
        this.showCount += 1, 1 !== this.showCount && this.data.status !== a.constant.pageStatus.ready && this.init();
    },
    onHide: function() {},
    onUnload: function() {},
    onTabItemTap: function(t) {
        wx.setTabBarItem({
            index: 0,
            text: "首页"
        }), a.global.activeTab !== a.constant.tabItem.mine && (a.global.activeTab = a.constant.tabItem.mine);
    },
    init: function() {
        var n = this;
        return (0, u.getUserInfo)().then(function(t) {
            n.setData({
                "numbers.pubNum.value": (0, e.formatCount)(t.pubNum, !0),
                "numbers.followNum.value": (0, e.formatCount)(t.followNum, !0),
                "numbers.fansNum.value": (0, e.formatCount)(t.fansNum, !0),
                "numbers.likeNum.value": (0, e.formatCount)(t.likeNum, !0),
                nickName: a.userInfo.nickName,
                avatarUrl: a.userInfo.avatarUrl,
                coral_uid: t.coral_uid,
                uin: t.uin,
                status: a.constant.pageStatus.ready
            });
        }).catch(function(e) {
            n.setData({
                status: a.constant.pageStatus.error
            }), t.default.error("拉取用户信息出错：", e);
        });
    },
    tapUser: function() {
        (0, n.navigateTo)(n.PAGE_PATH.USER, {
            type: "master",
            coral_uid: this.data.coral_uid,
            uin: this.data.uin
        });
    },
    tapFocus: function() {
        (0, n.navigateTo)(n.PAGE_PATH.USER_FOCUS, {
            type: "master",
            uin: this.data.uin,
            coral_uid: this.data.coral_uid
        });
    },
    tapFans: function() {
        (0, n.navigateTo)(n.PAGE_PATH.USER_FANS, {
            type: "master",
            uin: this.data.uin,
            coral_uid: this.data.coral_uid
        });
    },
    tapAgree: function() {
        this.setData({
            showLikeCountModal: !0
        });
    },
    tapMessage: function() {
        (0, n.navigateTo)(n.PAGE_PATH.MINE_MESSAGE, {
            uin: this.data.uin,
            coral_uid: this.data.coral_uid
        });
    },
    tapShare: function() {
        (0, n.navigateTo)(n.PAGE_PATH.MINE_SHARE_CIRCLE);
    },
    tapSetting: function() {
        (0, n.navigateTo)(n.PAGE_PATH.MINE_SETTING);
    }
});