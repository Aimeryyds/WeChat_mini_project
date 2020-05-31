!function(t) {
    t && t.__esModule;
}(require("./netdisk_utils/mtj/mtj-wx-sdk.js"));

require("./netdisk_config/netdiskConfig.js"), require("./netdisk_config/actionsConfig.js"), 
require("./netdisk_config/wxMonitorConfig.js"), require("./netdisk_config/page.js");

var t = require("./netdisk_utils/wxApiToPromise.js"), e = require("./netdisk_utils/common.js"), i = require("./netdisk_utils/logicUtils.js"), s = require("./netdisk_utils/account.js"), n = require("./netdiisk_requestapi/getUserCenterInfo.js"), r = require("./netdiisk_requestapi/getInterim.js"), a = require("./netdisk_utils/badmp.js");

try {
    a && a.init && a.init({
        env: wx,
        namespace: "wpwx",
        productId: 100420,
        report: {
            url: "https://pan.baidu.com/bpapi/analytics",
            systemInfo: !0
        }
    });
} catch (t) {}

App({
    globalData: {
        userWxInfo: null,
        userBdInfo: null,
        systemInfo: null,
        appOnshowData: null,
        hasWxAuthor: !0,
        uploadList: [],
        shareDirData: {
            currentDirData: {
                isRoot: null,
                publicMeta: {},
                dirMeta: {}
            }
        },
        preShareData: {},
        hasBdAuthor: !0,
        errTimes: 0,
        isLogining: !1,
        formIdList: [],
        createSharing: !1,
        firstVisit: !0,
        isGuideUser: !1,
        accountAction: null,
        userCenterInfo: null,
        fromNA: 0,
        shareInfo: {},
        listOrder: "time",
        transfer: !1,
        statusBarHeight: 20,
        totalHeight: 60,
        passErr: !1,
        isOffLine: !1,
        navHeight: 60,
        sequence: !1,
        isIpx: !1,
        uk: 0,
        imgActivity: {},
        savedList: [],
        highlightOff: !1,
        payScene: "nomal"
    },
    onLaunch: function(t) {
        var e = this;
        setTimeout(function() {
            e.processUk(), e.getActivity();
        }), (0, i.initSystemInfo)();
        var n = wx.getStorageSync("userInfo"), r = wx.getStorageSync("listOrder");
        if (n && (this.globalData.hasBdAuthor = !0, this.globalData.userBdInfo = n), this.checkHasWxAuth(), 
        this.globalData.isGuideUser = (0, s.isGuide)(n), r) this.globalData.listOrder = r; else try {
            wx.setStorageSync("listOrder", this.globalData.listOrder);
        } catch (t) {}
    },
    onShow: function(t) {
        1036 !== t.scene && 1069 !== t.scene || (this.globalData.fromNA = !0), (0, e.reportSceneAction)(this.globalData.appOnshowData = t);
    },
    onHide: function() {
        (0, e.uploadFormId)();
    },
    checkHasWxAuth: function() {
        var e = this.globalData, i = !!e.userWxInfo;
        e.hasWxAuthor = i, i || (0, t.getUserWxInfo)().then(function(t) {
            var i = t.userInfo;
            e.userWxInfo = i, e.hasWxAuthor = !0;
        }).catch(function(t) {
            console.error(t);
        });
    },
    processUk: function() {
        var t = this, e = wx.getStorageSync("uk");
        e ? this.globalData.uk = e : n.userCenter.getUserBaseInfo().then(function(e) {
            var i = e && e.data && e.data.uk;
            i && (t.globalData.uk = i, wx.log.common.appUk.send());
        }).catch(function(t) {
            console.error(t), wx.log.common.appUkErr.send();
        });
    },
    getActivity: function() {
        var t = this;
        (0, r.getWxIcon)().then(function(e) {
            var i = {};
            e.some(function(t) {
                if (17 === t.pop_type) return i = t, !0;
            }), t.globalData.imgActivity = i;
        }).catch(function(t) {
            console.error(t);
        });
    }
});