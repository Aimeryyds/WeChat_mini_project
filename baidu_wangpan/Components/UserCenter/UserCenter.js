var t = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
}, n = require("../../netdisk_utils/setUserCenterInfo.js"), e = require("../../netdisk_utils/account.js"), a = getApp();

Component({
    properties: {
        hasLogin: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        avatar: "",
        name: "",
        memberType: "",
        quotaSize: {},
        quotaUsageRate: "",
        uk: "",
        userWxInfo: {},
        isGuideUser: !1,
        banner: {},
        activitySendLog: !1,
        isAndroid: !1
    },
    methods: {
        loadUserInfo: function() {
            var e = this;
            this.getBanner(), this.setData({
                isGuideUser: a.globalData.isGuideUser,
                userWxInfo: a.globalData.userWxInfo
            }), a.globalData.isGuideUser || (0, n.setUserCenterInfo)().then(function() {
                e.setData(t({}, a.globalData.userCenterInfo));
            });
        },
        handleBanner: function(t) {
            t.isValid && !this.data.activitySendLog && (wx.log.send({
                type: "wx_activity_show",
                value: "活动跳转卡片展示",
                from: t.activityid
            }), this.setData({
                activitySendLog: !0
            })), this.setData({
                banner: t
            });
        },
        getBanner: function() {
            var t = wx.getCurrentViewPage();
            this.handleBanner(t.data.banner);
        },
        _touchStart: function() {
            this.setData({
                contactTouchStyle: "background: #F9F9FA"
            });
        },
        _touchEnd: function() {
            this.setData({
                contactTouchStyle: ""
            });
        },
        _click: function() {
            wx.log.index.connectBtnClick.send();
        },
        blueBtnClick: function(t) {
            console.log("bluebutton 点击事件: ", t), wx.log.guide.myNormal.send(), (0, e.bindNormalAccount)();
        },
        unbindWechat: function(t) {
            wx.log.author.userUnbindClick.send(), (0, e.getToken)(function() {
                wx.showDialog({
                    title: "切换帐号",
                    content: "确认切换帐号吗？每日重新登录次数有限，请谨慎操作。",
                    confirm: function() {
                        wx.log.author.userUnbindConfirm.send(), (0, e.unbindWechat)();
                    }
                });
            });
        }
    },
    ready: function() {
        var t = "android" === wx.getSystemInfoSync().platform;
        this.setData({
            isAndroid: t
        });
    }
});