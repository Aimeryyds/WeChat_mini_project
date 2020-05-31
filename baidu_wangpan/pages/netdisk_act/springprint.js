var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
}, e = require("../../act/account.js"), i = require("../../netdisk_utils/wxApiToPromise.js"), a = require("../../netdisk_utils/common.js"), o = (require("../../netdiisk_requestapi/reportUser.js"), 
require("../../netdiisk_requestapi/loginSync.js"), require("../../act/getData.js")), s = require("../../act/actionsConfig.js"), r = require("../../act/webUrl.js"), n = "/pages/netdisk_act/springprint?id=826311545794", l = getApp().globalData;

Page({
    data: {
        rewardinfo: {},
        mainimg: "",
        titleData: {},
        userInvitedData: [],
        pageError: !1,
        familyData: {},
        isShow: !1,
        moreBg: "",
        goodsBg: "",
        rulesImg: "",
        rulesInfo: {},
        userStatus: null,
        share: {}
    },
    onLoad: function() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        console.log(i), this.userStatus = (0, e.checkUser)(), i.normal && (this.userStatus < 2 ? (s.log.author.send("bdNormal", {
            from: i.normal
        }), (0, e.bindNormalAccount)(n, t({}, i))) : s.log.author.send("bdNormalSuccess", {
            from: i.normal
        })), this.confirm = this.selectComponent("#confirm"), this.rule = this.selectComponent("#rule"), 
        this.dialog = this.selectComponent("#dialog"), this.Navbar = this.selectComponent("#Navbar"), 
        "wpicon" !== i.from && "wpbanner" !== i.from && this.Navbar.setShowBack(!1), this.initOptions(i), 
        this.init(), this.setData({
            height: l.statusBarHeight + l.totalHeight + "px",
            userStatus: this.userStatus,
            pagetype: i.pagetype || ""
        }), i.bdathorize && s.log.author.send("bdAthorizeSuccess", {
            from: i.bdathorize
        }), s.log.scene.send("entrySceneSource", {
            scene: i.from
        });
    },
    initOptions: function(t) {
        this.options = {};
        for (var e in t) this.options[e] = t[e];
    },
    onShow: function() {
        wx.getStorageSync("reload") && (this.init(), wx.removeStorageSync("reload"));
    },
    onReady: function() {
        this.toast = this.selectComponent("#toast");
    },
    init: function() {
        var t = this;
        (0, o.getDataApi)().then(function(e) {
            var i = e.data;
            0 === i.errno || 1003 === i.errno ? t.handleData(i.data) : t.pageFail(i.errno);
        }).catch(function(e) {
            console.log(e), t.pageFail(e);
        });
    },
    pageFail: function(t) {
        getApp().mtj.trackEvent("get_api_error", {
            errno: t,
            pagetype: this.options.pagetype
        }), 1001 === t && "invite" === this.options.pagetype ? (wx.wetoast({
            content: "分享已失效",
            loading: !1,
            duration: 1e3
        }), wx.redirectTo({
            url: n
        })) : this.setData({
            pageError: !0
        });
    },
    onShareAppMessage: function(t) {
        var e = this.data.assistShare;
        "menu" !== t.from && "pagetop" !== t.target.id || (e = this.data.share);
        var i = e, a = i.title, o = i.mpShareSrc, r = t.target ? t.target.id : "titlebar", l = this.data, c = l.selfToken, u = l.selfUk, h = r.indexOf("assist") > -1 ? n + "&pagetype=invite&uk=" + u + "&token=" + c : n;
        return s.log.activity.send("activeShareClick", {
            from: r
        }), {
            title: a,
            path: h,
            imageUrl: o
        };
    },
    handleData: function(e) {
        if (Object.keys(e).length < 1) this.setData({
            pageError: !0
        }); else {
            var i = e.tpldata, a = i.rulesInfo, o = i.share, s = i.assistShare, r = i.mainPage, n = i.deadline, l = i.startline, c = i.resultModal, u = {
                time: e.time,
                deadline: n,
                startline: l
            }, h = this.getServerData(e), g = this.getSeckillData(e), d = this.getAssistData(h, r, u), p = r.seckillContent, f = i.actRewardUrl;
            this.setData(t({
                bgSrc: d.assistContent.bgSrc,
                bgColor: g.seckillContent.bgColor,
                assistData: d,
                rulesInfo: a,
                familyData: p
            }, h, {
                resultModal: c
            }, h, {
                seckillData: g,
                share: o,
                assistShare: s,
                actRewardUrl: f
            })), "invite" === this.options.pagetype && this.pull();
        }
    },
    getServerData: function(t) {
        return {
            selfUk: t.self_uk || "",
            selfToken: t.self_token || "",
            time: t.time || new Date(),
            invite: t.activity_result.invite,
            seckill: t.activity_result.spike
        };
    },
    getSeckillData: function(t) {
        var e = t.tpldata, i = t.activity_result.spike, a = e.mainPage.seckillContent;
        return {
            time: t.time,
            startline: e.startline,
            deadline: e.deadline,
            isGetPrivilege: i.is_get_privilege,
            isOrder: i.is_order,
            isAddress: i.is_address,
            isUpload: i.is_upload,
            haveStores: i.is_pool_open,
            receiveNum: i.receive_num,
            timeArr: e.sectimelist,
            seckillContent: a,
            resultModal: e.resultModal,
            isSecNormal: "seckill" === this.options.normal && this.options.normal
        };
    },
    getAssistData: function(e, i, a) {
        var o = t({}, e, {
            assistContent: i.assistContent,
            timeData: a,
            rulesImg: i.ruleSrc
        });
        return Object.assign(o, this.options), o;
    },
    formSubmit: function(t) {
        return (0, a.generateFormId)(t);
    },
    myPrize: function() {
        var t = this;
        if (s.log.activity.send("mainPageClickMyPrize"), this.userStatus > 1) {
            var a = "/pages/netdisk_springView/springView?";
            (0, r.getUrlParams)(this.data.actRewardUrl).then(function(t) {
                wx.navigateTo({
                    url: a + t
                });
            }, function(t) {
                wx.navigateTo({
                    url: a + t
                });
            });
        } else (0, i.getUserWxInfo)().then(function(t) {
            t.userInfo;
            (0, e.bindNormalAccount)("/pages/netdisk_act/springprint&normal=prize");
        }, function(e) {
            t.confirm.show();
        });
    },
    rules: function() {
        s.log.activity.send("activeRulesClick"), this.rule.show(t({}, this.data.rulesInfo));
    },
    pull: function() {
        var t = this;
        s.log.activity.send("assistanceActiveInvitePageShow");
        var e = this.options, i = e.uk, a = e.token;
        if (0 === this.userStatus) return s.log.activity.send("assistConfirmShow"), void this.confirm.show();
        (0, o.pullNewApi)({
            uk: i,
            token: a
        }).then(function(e) {
            var i = e.data;
            t.pullErrno = i.errno, 1003 === i.errno && (wx.removeStorageSync("userInfo"), t.userStatus = 0, 
            i.errno = "default"), t.showDialog(i.errno), s.log.activity.send("assistanceDialog", {
                type: t.pullErrno
            }), delete t.options.pagetype;
        }).catch(function(e) {
            s.log.activity.send("assistanceDialog", {
                type: "err"
            }), t.showDialog("default");
        });
    },
    showDialog: function(t) {
        if (4004 !== t || !wx.getStorageSync("isShowDToOwner")) {
            4004 === t && wx.setStorageSync("isShowDToOwner", "true");
            var e = this.data.assistData.assistContent.resultModal, i = this.data.resultModal, a = e.filter(function(e) {
                return e.status - 0 === t;
            })[0], o = a.content, s = a.btnText;
            this.setData({
                dialogContent: o
            });
            var r = {
                width: 576,
                height: 420,
                mpBgSrc: i.bgSrc,
                btnColor: i.btnColor,
                btn1: {
                    isShow: !0,
                    openType: "",
                    btnBg: i.btnSrc,
                    btnColor: i.btnColor,
                    btnText: s
                }
            };
            this.dialog.show(r);
        }
    },
    hideDialog: function() {
        s.log.activity.send("assistanceDialogBtn", {
            type: this.pullErrno
        }), this.dialog.hide();
    },
    getuserinfo: function(i) {
        var a = i.detail.detail || i.detail, o = i.detail.detail ? t({}, this.options, {
            bdathorize: "assist"
        }) : {
            normal: "prize",
            bdathorize: "prize"
        }, r = i.detail.detail ? "assist" : "prize", c = a.errMsg, u = a.userInfo;
        -1 !== c.indexOf("ok") ? (l.userWxInfo = u, l.hasWxAuthor = !0, s.log.author.send("wxAthorizeSuccess", {
            from: r
        }), (0, e.bdWxLogin)(n, o)) : s.log.author.send("wxAthorizeFail", {
            from: r
        });
    },
    initScroll: function() {
        !!wx.getStorageSync("accessInfo") || (wx.setStorage({
            key: "accessInfo",
            data: "accessed"
        }), this.scrollAnimation(0, .6 * wx.getSystemInfoSync().windowHeight));
    },
    touchmove: function(t) {
        this.scrollToTop && clearTimeout(this.scrollToTop);
    },
    scrollAnimation: function(t, e) {
        var i = this, a = e - t, o = t;
        a > 0 ? i.scrollToTop = setInterval(function() {
            var t = Math.ceil(a / 1e3);
            (o += t) < e ? wx.pageScrollTo({
                scrollTop: o,
                duration: 0
            }) : o > e && (clearInterval(i.scrollToTop), i.scrollTime = setTimeout(function() {
                i.scrollAnimation(o, 0);
            }, 500));
        }, 2) : (i.scrollTime && clearInterval(i.scrollTime), i.scrollToTop = setInterval(function() {
            var t = Math.ceil((0 - a) / 1e3);
            (o -= t) > e ? wx.pageScrollTo({
                scrollTop: o,
                duration: 0
            }) : o < e && (clearInterval(i.scrollToTop), clearTimeout(i.timeoutScroll));
        }, 2));
    },
    refresh: function() {
        var t = this.options, e = t.uk, i = t.token, a = "invite" === t.pagetype ? n + "&pagetype=invite&uk=" + e + "&token=" + i : n;
        wx.redirectTo({
            url: a
        });
    }
});