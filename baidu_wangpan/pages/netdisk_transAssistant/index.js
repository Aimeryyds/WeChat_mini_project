var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../../netdisk_utils/calculate"), s = require("../../netdisk_utils/account.js"), i = require("../../netdisk_utils/logicUtils"), n = require("../../netdiisk_requestapi/transAssistant"), a = require("../../netdisk_utils/setUserCenterInfo.js"), o = getApp(), r = wx.ENV.staticPath, c = r + "/ic_trans_error.png", l = r + "/trans-success.png", h = "/pages/netdisk_transAssistant/index";

Page({
    data: {
        title: "",
        expire_time: 0,
        expireTime: "",
        load: {
            fail: !1,
            icon: ""
        },
        check: {
            fail: !1,
            msg: "",
            icon: ""
        },
        success: {
            show: !1,
            icon: ""
        },
        infoIcon: r + "/ic_trans_introduce.png",
        hasLogin: !1,
        username: "",
        btnText: "管理已发送文件",
        tranSchema: "bdnetdisk://n/action.xpan_transmiss?page=home&m_n_v=10.0.120&params=%7bcheck%3a1%7d",
        helpLogSended: !1,
        hasBindNormal: !1
    },
    onLoad: function(t) {
        var s = this, i = t.surl, o = void 0 === i ? "" : i, r = t.title, c = void 0 === r ? "" : r, l = t.expire_time, h = void 0 === l ? 0 : l, u = t.username, d = void 0 === u ? "" : u, f = t.scene, m = void 0 === f ? "" : f, p = t.from, g = void 0 === p ? "" : p, x = t.status, k = void 0 === x ? "" : x, v = t.msg, w = void 0 === v ? "参数错误" : v;
        if (this.pageType = "transAssistant", "string" == typeof h && (h = +h), this.toast = this.selectComponent("#toast"), 
        this.getLoginStatus(), "upload" !== g) {
            if (o || "string" != typeof m || (o = m.split("$")[0].trim()), "string" == typeof o && (o = o.trim()), 
            o && (!c || !h)) return this.setData({
                surl: o,
                username: d
            }), void this.getLoginStatus().then(function() {
                var t = !!s.checkAccount();
                s.checkSurl(t);
            });
            if (o && c && h) {
                if (new Date().getTime() / 1e3 >= h) return this.handleCheckFail(n.errMap[42902]), 
                void wx.log.transAssistant.checkFail.send({
                    from: 42902
                });
                var S = (0, e.formatTime)(new Date(1e3 * h), !1);
                this.setData({
                    surl: o,
                    expireTime: S,
                    title: c,
                    expire_time: h,
                    username: d
                }), wx.log.transAssistant.show.send(), (0, a.setUserCenterInfo)(), this.checkHelpLog();
            } else this.handleCheckFail("参数错误");
        } else if ("success" === k) {
            this.handleTransSuccess();
            var _ = (0, e.formatTime)(new Date(1e3 * h), !1);
            this.setData({
                surl: o,
                title: c,
                expire_time: h,
                expireTime: _,
                username: d
            }), wx.log.transAssistant.successPage.send();
        } else this.handleCheckFail(w || "参数错误");
    },
    onReady: function() {
        this.localFileComp = this.selectComponent("#localFile"), this.showDialog = this.selectComponent("#showDialog");
    },
    checkIsGuide: function() {
        var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = wx.getStorageSync("userInfo");
        if (!(0, s.isGuide)(i)) return !0;
        var n = this.data, a = n.surl, r = n.title, c = n.expire_time, l = n.username, u = n.hasBindNormal;
        if (i && i.bduss) {
            if (u) return;
            this.setData({
                hasBindNormal: !0
            }), setTimeout(function() {
                t.setData({
                    hasBindNormal: !1
                });
            }, 3e3), (0, s.bindNormalAccount)({
                to: "transAssistant",
                surl: a,
                title: r,
                expire_time: c,
                username: l
            });
        } else if (e) {
            if (o.globalData.passErr) return;
            (0, s.bdWxLogin)(h, {
                surl: a,
                title: r,
                expire_time: c,
                username: l
            });
        }
    },
    getLoginStatus: function() {
        var t = this;
        return (0, i.getAuthSetting)("scope.userInfo").then(function() {
            t.setData({
                hasLogin: !0
            }), t.checkIsGuide(!1);
        }).catch(function(e) {
            t.setData({
                hasLogin: !1
            });
        });
    },
    handleRefresh: function() {
        this.data.hasLogin && (this.checkSurl(), wx.log.transAssistant.refresh.send());
    },
    checkAccount: function() {
        if (this.data.hasLogin && this.checkIsGuide()) return !0;
    },
    handleSelect: function() {
        var t = this;
        wx.log.transAssistant.select.send(), this.checkAccount() && this.checkSurl().then(function(e) {
            e && t.navToUpload();
        });
    },
    handleOpenLocalModal: function() {
        var t = this;
        wx.log.transAssistant.sendLocalFile.send(), this.checkAccount() && this.checkSurl().then(function(e) {
            e && t.localFileComp.openLocalModal();
        });
    },
    goLocalModel: function() {
        var t = this;
        this.setData({
            success: {
                show: !1
            }
        }), wx.nextTick(function() {
            t.localFileComp = t.selectComponent("#localFile");
        });
    },
    navToUpload: function() {
        var t = (0, n.getTransAssistantParam)(this.data);
        wx.navigateTo({
            url: "/pages/netdisk_upload/upload?path=/&from=transAssistant&whenEmpty=batchEditList&" + t
        });
    },
    resetAllStatus: function() {
        this.setData({
            load: {
                fail: !1
            },
            check: {
                fail: !1
            },
            success: {
                show: !1
            }
        });
    },
    checkSurl: function() {
        var t = this, s = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = this.data.surl;
        return s && wx.wetoast({
            content: "请稍候...",
            loading: !0,
            duration: !0
        }), (0, n.verifyTrans)(i).then(function(s) {
            if (wx.toasthide(), 0 === (s = s.data || {}).errno) {
                t.resetAllStatus();
                var i = t.data, a = i.expire_time, o = i.title, r = i.expireTime;
                return s.expire_time && s.expire_time !== a && (a = s.expire_time, r = (0, e.formatTime)(new Date(1e3 * a), !1), 
                t.setData({
                    expireTime: r,
                    expire_time: a
                })), s.title && s.title !== o && (o = s.title, t.setData({
                    title: o
                })), t.checkHelpLog(), !0;
            }
            var c = n.errMap[s.errno];
            c ? t.handleCheckFail(c) : t.handleLoadFail(), wx.log.transAssistant.checkFail.send({
                from: s.errno
            });
        }).catch(function(e) {
            wx.toasthide(), t.handleLoadFail(), wx.log.transAssistant.checkFail.send({
                from: "catch"
            });
        });
    },
    handleCheckFail: function(t) {
        this.setData({
            check: {
                fail: !0,
                icon: c,
                msg: t
            }
        });
    },
    handleLoadFail: function() {
        this.setData({
            load: {
                fail: !0,
                icon: c
            }
        });
    },
    handleTransSuccess: function() {
        this.setData({
            success: {
                show: !0,
                icon: l
            }
        });
    },
    getUserInfo: function(e) {
        var i = this.data, n = i.surl, a = i.title, o = i.expire_time, r = i.username;
        "object" === t(e.detail) && e.detail.userInfo && (0, s.bdWxLogin)(h, {
            surl: n,
            title: a,
            expire_time: o,
            username: r
        });
    },
    handleSuccessSelect: function() {
        this.goLocalModel(), wx.log.transAssistant.successSelect.send();
    },
    gohome: function() {
        wx.navigateTo({
            url: "/pages/netdisk_transmission/transmission"
        }), wx.log.transAssistant.successHome.send();
    },
    onShareAppMessage: function() {
        var t = this.data, e = t.title, s = t.username, i = e;
        s && (i += "——" + s);
        var a = (0, n.getTransAssistantParam)(this.data);
        return {
            title: i,
            path: h + "?" + a,
            imageUrl: r + "/trans-assistant-share.png"
        };
    },
    handleLocalTransSuccess: function() {
        this.handleTransSuccess();
    },
    _clickQuestion: function() {
        wx.navigateTo({
            url: "/pages/netdisk_helpcontent/helpcontent?questionid=8&contentType=1"
        }), wx.log.transAssistant.helpClick.send({
            from: "send"
        });
    },
    checkHelpLog: function() {
        var t = this.data, e = t.success, s = t.load, i = t.check;
        t.helpLogSended || e.show || s.fail || i.fail || (wx.log.transAssistant.helpShow.send({
            from: "send"
        }), this.setData({
            helpLogSended: !0
        }));
    }
});