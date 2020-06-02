var e = require("@babel/runtime/helpers/interopRequireDefault"), t = e(require("./services/proxyOrigin.js")), o = e(require("./module-local/js/lib/rudata.js")), n = e(require("./module-local/js/lib/mta_analysis.js")), a = require("./store/index.js"), s = require("./network/index.js"), i = (require("./network/abtest.js"), 
require("./services/report")), r = e(require("./utils/logger")), u = e(require("./utils/mlodash"));

r.default.info("源码加载完毕，当前版本号:", a.systemInfo.app_version);

App({
    onLaunch: function(e) {
        var o = this;
        r.default.info("app启动参数：", e), Object.assign(this, {
            onLaunchTime: Date.now(),
            onShowTime: Date.now()
        }), function() {
            try {
                var e = wx.getStorageSync("UUID");
                if (e && 36 === e.length) return a.userInfo.uuid = e, e;
                for (var t = [], o = 0; o < 36; ) t[o] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1), 
                o += 1;
                t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", 
                e = t.join(""), a.userInfo.uuid = e, wx.setStorageSync("UUID", e);
            } catch (e) {}
        }(), a.systemInfo.getSysInfo(), a.systemInfo.getNetworkType(), wx.onNetworkStatusChange(function(e) {
            a.systemInfo.networkType = e.networkType, a.systemInfo.networkIsConnected = e.isConnected;
        }), wx.cloud.init({
            env: "prod-bebba2",
            traceUser: !0
        });
        var u = (0, s.getOpenId)().then(function() {
            a.userInfo.refreshUserInfo(), a.userInfo.getToken(), a.userInfo.initOver = !0, a.userInfo.emit(a.userInfo.event.initOver), 
            r.default.info("userInfo.openid = ", a.userInfo.openid), t.default.setOpenid(a.userInfo.openid), 
            t.default.setUnionid(a.userInfo.openid), (0, s.flushReqQueue)(), (0, i.flushReportQueue)(), 
            a.follow.getFollowData();
        });
        this.loadNoInterestData(), this.getNetworkType(), n.default.App.init({
            appID: "500630967",
            eventID: "500631042",
            statPullDownFresh: !0,
            statShareApp: !0,
            statReachBottom: !0
        });
        var l = a.systemInfo.getSysInfo();
        Object.assign(this.global.comPostInfo, l), this.global.comPostInfo.app_version = a.systemInfo.app_version, 
        this.global.isIphoneX = l.isIphoneX, u.then(function() {
            Object.assign(o.global.userInfo, a.userInfo.userInfo), Object.assign(o.global.comPostInfo, a.userInfo.reqParams);
        });
    },
    onShow: function(e) {
        r.default.info("app切换到前台，携带参数", e), a.global.scene = parseInt(e.scene), "/pages/jump/jump" !== e.path && "pages/jump/jump" !== e.path || 0 === Object.keys(e.query).length || (a.global.fromOutside = !0, 
        a.shareInfo.openGId = "", e.shareTicket && (0, s.getOpenGid)(e.shareTicket)), this.onShowTime = Date.now(), 
        (0, i.report)({
            opType: i.OP_TYPE.open_open,
            fromPage: i.FROM_PAGE.app,
            sharerId: u.default.get(e, "query.omgid", u.default.get(e, "query.openid", ""))
        });
    },
    onHide: function() {
        r.default.info("app切换到后台");
        var e = Date.now(), t = e - this.onShowTime, o = i.OP_TYPE.leave_devtools;
        "ios" === a.systemInfo.platform ? o = i.OP_TYPE.leave_ios : "android" == a.systemInfo.platform && (o = i.OP_TYPE.leave_android), 
        (0, i.report)({
            opType: o,
            fromPage: i.FROM_PAGE.app,
            startTime: this.onShowTime,
            endTime: e,
            duration: t
        }), (0, i.report)({
            opType: i.OP_TYPE.app_retention_time,
            fromPage: i.FROM_PAGE.app,
            startTime: this.onShowTime,
            endTime: e,
            duration: t,
            launchStartTime: this.onLaunchTime,
            launchDuration: e - this.onLaunchTime
        });
    },
    onError: function(e) {
        r.default.error("app出现错误: ", e);
    },
    clearOutDateNoInterestItem: function(e) {
        var t = e.global;
        if (t.noInterestListData) {
            var o = new Date().getTime(), n = {};
            for (var a in t.noInterestListData) {
                var s = t.noInterestListData["" + a];
                o > s && o - s < 864e5 && (n[a] = s);
            }
            t.noInterestListData = n;
        }
    },
    loadNoInterestData: function() {
        var e = this;
        wx.getStorage({
            key: "key_no_interest_list",
            success: function(t) {
                if (t && t.data) {
                    var o = new Date().getTime(), n = {};
                    for (var a in t.data) {
                        var s = t.data["" + a];
                        o > s && o - s < 864e5 && (n[a] = s);
                    }
                    e.global.noInterestListData = n;
                }
                e.global.noInterestListData = {};
            },
            fail: function(t) {
                e.global.noInterestListData = {};
            }
        });
    },
    getNetworkType: function() {
        var e = this;
        a.systemInfo.getNetworkType().then(function(t) {
            e.global.network = t;
        }).catch(function(e) {
            wx.showToast({
                title: "获取网络状态失败",
                icon: "success",
                duration: 2e3
            });
        });
    },
    global: {
        chlid: "",
        cityInfo: {},
        start: "",
        comPostInfo: {
            openid: "",
            ukey: "",
            unionid: "",
            cmnid: "",
            network: "",
            latitude: "",
            longitude: "",
            user_city: "",
            last_time: ""
        },
        noInterestListData: {},
        lastBarTapType: "news",
        isNewsRefreshLoading: !1,
        isLocalRefreshLoading: !1,
        isVideoRefreshLoading: !1,
        saveVideoPlayTimeDit: {},
        userInfo: {},
        shouldShowBackViewTip: !1,
        isIphoneX: !1,
        mta: n.default,
        rudata: (0, o.default)({
            appid: 100006
        }),
        isLogining: !1,
        sdkVersion: "",
        goneLive: !1,
        hasClickFullScreen: !1,
        userSubTopicAndCpList: null
    }
});