function e(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var t = require("../../../netdisk_utils/account.js"), r = require("../../../act/account.js"), i = require("../../../netdiisk_requestapi/getUserCenterInfo.js"), n = require("../../../netdisk_utils/getRedirectQuery"), s = require("../../../netdisk_utils/logicUtils.js"), a = require("../../../netdisk_utils/wxApiToPromise.js"), o = getApp(), u = o.globalData;

Component({
    data: {
        userInfo: {},
        productInfo: {},
        userShowStatus: {
            vipLeaveDay: 0,
            svipLeaveDay: 0,
            overlayShow: !1
        },
        hasWxUserInfo: !0,
        hasBdUserInfo: !0,
        isGuideUser: !1,
        redirectUrl: "",
        redirectQuery: ""
    },
    lifetimes: {
        created: function() {
            this.initUserData();
        },
        ready: function() {
            this.Authorize = this.selectComponent("#Authorize"), this.checkAuthorizeWx(), this.setData({
                height: u.navHeight + "px"
            });
        }
    },
    methods: {
        initUserData: function() {
            var t = this;
            Promise.all([ i.userCenter.getUserInfo(), i.userCenter.getUser() ]).then(function(r) {
                var i = r[0].data || {}, n = r[1].data || {};
                if (0 == +i.error_code) {
                    t.setData({
                        userInfo: i.user_info,
                        productInfo: n
                    }), u.payUserInfo = i.user_info;
                    var s = i.user_info.is_svip ? "svip" : i.user_info.is_vip ? "vip" : "";
                    t.triggerEvent("updateUserVipStatus", {
                        userVipStatus: s
                    });
                }
                if (n.product_infos && "[object Array]" === Object.prototype.toString.call(n.product_infos)) {
                    var a, o = t.getTermTime(n.product_infos), h = 0 !== o.vipEndTime ? t.timeFormat(o.vipEndTime) : 0, g = 0 !== o.svipEndTime ? t.timeFormat(o.svipEndTime) : 0;
                    t.setData((a = {}, e(a, "userShowStatus.vipLeaveDay", h), e(a, "userShowStatus.svipLeaveDay", g), 
                    a));
                }
            }).catch(function(e) {
                console.log("获取用户会员数据fail：" + e);
            });
        },
        getTermTime: function(e) {
            for (var t = e, r = [], i = [], n = 0; n < t.length; n++) {
                var s = t[n].product_name, a = t[n].detail_cluster;
                "string" != typeof s || !/vip[1|2]/gi.test(s) || "vip" !== a && "evip" !== a ? "string" == typeof s && /vip[1|2]/gi.test(s) && "svip" === a && i.push(t[n].end_time) : r.push(t[n].end_time);
            }
            return {
                vipEndTime: r.length > 0 ? Math.max.apply(Math, r) : 0,
                svipEndTime: i.length > 0 ? Math.max.apply(Math, i) : 0
            };
        },
        timeFormat: function(e, t) {
            var r = new Date(1e3 * parseFloat(e));
            if (+t) {
                var i = r.getMonth() + 1, n = r.getDate(), s = r.getHours(), a = r.getMinutes(), o = r.getSeconds();
                return r.getFullYear() + "-" + (String(i).length < 2 ? "0" + i : i) + "-" + (String(n).length < 2 ? "0" + n : n) + " " + (String(s).length < 2 ? "0" + s : s) + ":" + (String(a).length < 2 ? "0" + a : a) + ":" + (String(o).length < 2 ? "0" + o : o);
            }
            var i = r.getMonth() + 1, n = r.getDate();
            return r.getFullYear() + "-" + (String(i).length < 2 ? "0" + i : i) + "-" + (String(n).length < 2 ? "0" + n : n);
        },
        changeOverlay: function() {
            this.setData(e({}, "userShowStatus.overlayShow", !this.data.userShowStatus.overlayShow));
        },
        closeOverlay: function() {
            this.setData(e({}, "userShowStatus.overlayShow", !1));
        },
        checkAuthorizeWx: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    if (e.setData({
                        hasWxUserInfo: !!t.authSetting["scope.userInfo"]
                    }), e.data.hasWxUserInfo) return (0, a.getUserWxInfo)().then(function(e) {
                        var t = e.userInfo;
                        o.globalData.userWxInfo = t, o.globalData.hasWxAuthor = !0, (0, s.serverLogin)();
                    }), void e.checkAuthorizeBd();
                    e.goAuthorizeWx();
                }
            });
        },
        goAuthorizeWx: function() {
            var e = this, t = wx.getCurrentViewPage();
            this.setData({
                redirectUrl: /^\//.test(t.route) ? t.route : "/" + t.route,
                redirectQuery: (0, n.getQuery)(t.options)
            }, function() {
                e.Authorize.toggleStatus(!0);
            });
        },
        checkAuthorizeBd: function() {
            var e = wx.getStorageSync("userInfo");
            this.setData({
                hasBdUserInfo: !!e,
                isGuideUser: !!e && (0, t.isGuide)(e)
            });
        },
        goAuthorizeBd: function() {
            var e = wx.getCurrentViewPage().route, t = /^\//.test(e) ? e : "/" + e;
            (0, r.bindNormalAccount)(t);
        }
    }
});