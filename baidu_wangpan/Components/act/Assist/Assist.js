var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../act/getStatus.js")), n = require("../../../act/webUrl.js"), i = (require("../../../act/getData.js"), 
require("../../../act/account.js")), s = require("../../../netdisk_utils/common.js"), r = require("../../../netdisk_utils/wxApiToPromise.js"), a = require("../../../act/actionsConfig.js"), o = getApp().globalData, u = "/pages/netdisk_act/springprint?id=826311545794";

Component({
    properties: {
        assistData: {
            type: Object,
            value: {},
            observer: function(t) {
                this._resetData(t || {});
            }
        }
    },
    data: {},
    ready: function() {},
    methods: {
        _resetData: function(t) {
            Object.keys(t).length > 0 && this.init(t);
        },
        init: function(e) {
            this.userStatus = (0, i.checkUser)();
            var n = e.invite, s = e.assistContent, r = e.timeData, a = e.rulesImg, o = this.getInviters(n), u = this.getBtnStatus(r, n);
            this.handleBtnStatus(s.buttonInfo, u), this.setData(t({}, e.assistContent, {
                inviteUsers: o,
                invite: n,
                timeData: r,
                rulesImg: a
            }));
        },
        getInviters: function(t) {
            var e = t.invite_users || [];
            for (e = e.slice(0, 5); e.length < 5; ) e.push("");
            return e;
        },
        getBtnStatus: function(t, n) {
            if (0 === this.userStatus) return "fresh_have";
            var i = {
                time: t.time,
                startline: t.startline,
                deadline: t.deadline,
                isGetPrivilege: n.is_get_privilege,
                isOrder: n.is_order,
                isAddress: n.is_address,
                isUpload: n.is_upload,
                haveStores: n.is_pool_open
            };
            return (0, e.default)(i);
        },
        gotoUrl: function() {
            if (2 !== this.userStatus) return a.log.author.send("bdNormal", {
                from: "invite"
            }), void (0, i.bindNormalAccount)(u, {
                normal: "invite"
            });
            var t = "/pages/netdisk_springView/springView?";
            (0, n.getUrlParams)(this.data.btnUrl).then(function(e) {
                wx.navigateTo({
                    url: t + e
                });
            }, function(e) {
                wx.navigateTo({
                    url: t + e
                });
            });
        },
        getBtnInfo: function(t) {
            var e = this, n = "";
            0 != +t.enabled && (0, r.getUserWxInfo)().then(function(i) {
                var s = i.userInfo;
                o.userWxInfo = s, o.hasWxAuthor = !0, n = 0 === e.userStatus ? "getUserInfo" : +t.openShare ? "share" : "";
                var r = +t.needSkip ? "gotoUrl" : "";
                e.setData({
                    openType: n,
                    shareEve: r,
                    btnUrl: t.url
                });
            }, function(t) {
                n = "getUserInfo", e.setData({
                    openType: n
                });
            });
        },
        handleBtnStatus: function(t, e) {
            var n = t.statusList.filter(function(t) {
                return t.status.indexOf(e) >= 0;
            });
            n.length < 1 && (n = t.statusList.filter(function(t) {
                return t.status.indexOf("fresh_have") >= 0;
            }));
            var i = n[0], s = i.bgSrc, r = i.enabled, a = i.tipShow;
            this.getBtnInfo(n[0]), this.setData({
                btnSrc: s,
                btnStatus: r,
                btnStatusStr: e,
                btnInfo: t.btnTip,
                tipShow: +a
            });
        },
        getuserinfo: function(t) {
            this.data.btnStatusStr;
            var e = t.detail, n = e.errMsg, s = e.userInfo;
            -1 !== n.indexOf("ok") ? (a.log.author.send("wxAthorizeSuccess", {
                from: "invite"
            }), o.userWxInfo = s, o.hasWxAuthor = !0, (0, i.bdWxLogin)(u, {
                bdathorize: "invite"
            })) : a.log.author.send("wxAthorizeFail", {
                from: "invite"
            });
        },
        clickButton: function() {
            var t = this.data.btnStatusStr;
            0 === this.userStatus && (t = "not_login"), a.log.activity.send("assistanceClick", {
                type: t
            });
        },
        rules: function() {
            this.triggerEvent("openRules");
        },
        formSubmit: function(t) {
            return (0, s.generateFormId)(t);
        }
    }
});