function t(t) {
    var s = this, r = f, n = "/" === this.currentPath ? 1 : 0;
    return wx.wetoast({
        content: "请稍候...",
        loading: !0,
        duration: !0
    }), (0, o.getShareData)(this.surl, this.currentPath, n, 1, r, t).then(function(r) {
        wx.toasthide();
        var n = r.data, o = n && n.data || {}, h = (0, g.processNewErr)(n);
        s.setData({
            newErr: h
        }), -130 === n.errno && (n.errtype + "").indexOf("pwd") > -1 ? (s.setData({
            needExtractCode: !0
        }), s.extractCode || (s.extractCode = s.selectComponent("#ExtractCode")), s.extractCode.initCountdown({
            expiredType: o.expiredType,
            expireTimestamp: n.expiretimestamp
        })) : s.setData({
            needExtractCode: !1
        }), r.header["Set-Cookie"] && r.header["Set-Cookie"].indexOf("BDCLND") > -1 && (0, 
        i.setCookieToStorage)(r.header, [ "BDCLND" ]), r.header["Set-Cookie"] && r.header["Set-Cookie"].indexOf("BAIDUID") > -1 && (0, 
        i.setCookieToStorage)(r.header, [ "BAIDUID" ]), s.setData({
            sharedUser: {
                name: o.uname || "",
                avatar: o.user && o.user.avatar || ""
            },
            shareUrlInfo: {
                expiredType: o.expiredType,
                shortUrl: s.surl,
                uk: o.uk,
                shareId: o.shareid,
                pwd: t
            }
        }), a.call(s, r.data), s.shareData = o, e.call(s, {
            shareid: s.shareData.shareid,
            share_surl: s.surl,
            share_uk: s.shareData.uk,
            feedback_type: 1
        });
    }).catch(function(t) {
        wx.toasthide(), s.setData({
            isImage: -1
        }), s.data.needExtractCode || (s.shareList = s.selectComponent("#ShareList"), s.shareList.loadList({
            errno: !1,
            data: {
                list: [],
                has_more: !1
            }
        }, s.surl, s.currentPath, s.transfer, s.pwd));
    });
}

function e() {
    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, o.getLinkFeedback)(e).then(function(e) {
        var a = "none";
        (e = e.data || {}).button && 1 === e.button.feedback_type && (t.shareList || (t.shareList = t.selectComponent("#ShareList")), 
        a = e.button.pressed ? "done" : "todo", t.shareList.updateRemind(a));
    }).catch(function(t) {
        console.error(t);
    });
}

function a(t) {
    var e = t.data && t.data.list ? t.data.list : [];
    if (this.data.story) {
        var a = t.data.sinfo;
        this.setData({
            storyInfo: a,
            shareImage: a.cover_info.url,
            title: a.title
        });
    }
    if (1 === e.length && e[0] && e[0].category - 0 == 3 && this.data.isRoot - 0 > 0 && !this.data.story) {
        var s = wx.getStorageSync("uk") === t.data.uk;
        this.setData({
            owner: s,
            isImage: e.length,
            shareImage: e[0].thumbs.url3,
            uname: t.data.uname
        });
        var i = t.data && t.data.list && t.data.list[0] ? t.data.list[0].server_filename : "";
        t.fileNums > 1 && "" !== i ? i += "等" + t.fileNums + "个文件" : "" !== i && i || (i = "网盘分享"), 
        this.data.title = i, t.data.isShare = !0, this.imagepreview || (this.imagepreview = this.selectComponent("#ImagePreview")), 
        t.data.pwd = this.pwd, this.imagepreview.loadList(t, this.surl, this.currentPath, this.transfer || !1, this.pwd);
    } else {
        var r = t.data && t.data.list && t.data.list[0] ? t.data.list[0].server_filename : "";
        t.fileNums > 1 && "" !== r ? r += "等" + t.fileNums + "个文件" : "" !== r && r || (r = "网盘分享"), 
        this.setData({
            isImage: -1,
            shareUk: t.data.uk || "",
            shareid: t.data.shareid || "",
            uname: t.data.uname || "",
            shareImage: e[0] && e[0].thumbs && e[0].thumbs.url3 || "",
            title: r
        }), this.shareList = this.selectComponent("#ShareList"), this.shareList.loadList(t, this.surl, this.currentPath, this.transfer, this.pwd, this.data.imagetype);
    }
}

var s = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
}, i = require("../../netdisk_utils/storage.js"), r = require("../../netdisk_utils/setUserCenterInfo.js"), n = require("../../netdiisk_requestapi/reportUser.js"), o = require("../../netdiisk_requestapi/getShareData.js"), h = require("../../netdisk_utils/wxApiToPromise.js"), d = require("../../netdisk_utils/account.js"), u = require("../../netdisk_utils/wxcatch.js"), l = require("../../netdisk_utils/getRedirectQuery"), c = require("../../netdisk_utils/logicUtils.js"), g = require("../../netdisk_utils/errnoText"), p = getApp().globalData, m = wx.ENV, f = (m.bgForwardName, 
m.staticName, m.version, wx.ENV.CONF.SHARE_FILES_LOAD_LIMITED_COUNT);

Page({
    data: {
        redirectUrl: "",
        redirectQuery: "",
        hasLogin: !1,
        avatar: "",
        name: "",
        memberType: "",
        quotaSize: {},
        quotaUsageRate: "",
        uk: "",
        isImage: "",
        shareImage: "",
        title: "",
        height: 60,
        isLogin: !1,
        story: 0,
        needExtractCode: !1,
        sharedUser: {},
        shareUrlInfo: {},
        uname: "",
        showAuth: !1,
        newErr: {
            hasErr: !1,
            msg: ""
        },
        ispc: !1
    },
    onShow: function() {
        this.pageType = "share", this.shareList = this.selectComponent("#ShareList"), this.shareList && (this.shareList.resetData(), 
        this.shareList.reShareInfoFsidlist());
    },
    onReady: function() {
        this.userPanel = this.selectComponent("#userPanel"), this.comfirmDialog = this.selectComponent("#comfirmDialog"), 
        this.guidButton = this.selectComponent("#guidButton"), this.setData({
            systemInfo: p.systemInfo,
            isGuideUser: p.isGuideUser
        }), p.isGuideUser && wx.log.sharepage.guiderIndex.send();
    },
    onLoad: function(t) {
        var e = this, a = t.surl, s = t.pwd, i = void 0 === s ? 0 : s, r = t.isRoot, o = void 0 === r ? 1 : r, u = t.path, l = void 0 === u ? "/" : u, g = (t.serverFilename, 
        t.transfer), m = t.scene, f = t.imagetype, w = void 0 === f ? -1 : f;
        if (this.initGlobalData(), this.data.ispc && wx.log.pcReport.pcReportUser.send(), 
        this.data.imagetype = w, this.Authorize = this.selectComponent("#Authorize"), this.toast = this.selectComponent("#toast"), 
        this.showDialog = this.selectComponent("#showDialog"), !p.sequence && (0, c.systemInfoSync)(), 
        i && (this.pwd = i), m) {
            var y = decodeURIComponent(m).split("#");
            a = y[0], this.pwd = y[1];
            var v = y[2], x = y[3];
            this.scene = m, this.data.imagetype = y[3] ? +y[3] : this.data.imagetype;
            var I = "wx_sharepage_fromQR_" + v;
            wx.log.send({
                surl: a,
                type: I
            }), 5 == +x && wx.log.send({
                logValue: "扫描二维码进入小程序外链页来源",
                type: "wx_sharepage_originate_128"
            });
        }
        this.setData({
            isImage: this.data.imagetype ? this.data.imagetype - 0 == 1 ? 1 : -1 : "",
            story: 3 == +this.data.imagetype ? 1 : 0,
            isRoot: o
        }), this.data.imagetype - 0 == 1 ? this.imagepreview = this.selectComponent("#ImagePreview") : this.data.imagetype && (this.shareList = this.selectComponent("#ShareList")), 
        wx.log.sharepage.index.send(), this.data.story && wx.log.sharepage.storyOpen.send(), 
        g && "true" === g.toString() && (this.transfer = !0, wx.log.sharepage.transBindAcc.send()), 
        this.surl = a, l = this.currentPath = l && decodeURIComponent(l);
        var D = wx.getStorageSync("userInfo");
        this.data.story;
        (0, h.getUserWxInfo)().then(function(t) {
            var a = t.userInfo;
            e.setData({
                hasLogin: !0
            }), e.Authorize.toggleStatus(!1), e.setData({
                showAuth: !1
            }), p.userWxInfo = a, D && e.userInfoOper(), (0, n.reportUser)();
        }, function(t) {
            return e.authorize(e.route, e.options);
        }).catch(function(t) {
            return e.authorize(e.route, e.options);
        });
        try {
            this.getFileListData();
        } catch (t) {
            console.log(t);
        }
        p.isGuideUser = (0, d.isGuide)(D), this.setData({
            height: p.navHeight,
            isLogin: !!D
        });
    },
    getFileListByPwd: function(t) {
        this.pwd = t.detail.pwd, this.getFileListData();
    },
    getFileListData: function() {
        return t.call(this, this.pwd);
    },
    userInfoOper: function() {
        var t = this;
        if (p.isGuideUser) {
            var e = p.userWxInfo;
            this.setData({
                avatar: e.avatarUrl,
                name: e.nickName
            });
        } else (0, r.setUserCenterInfo)().then(function() {
            t.setData(s({}, p.userCenterInfo));
        });
    },
    showUserPanel: function() {
        var t = this;
        this.userPanel.show(this.data), wx.log.sharepage.userhead.send(), p.isGuideUser || (0, 
        r.setUserCenterInfo)().then(function() {
            t.setData(s({}, p.userCenterInfo)), t.userPanel.updateData(t.data);
        });
    },
    onShareAppMessage: function(t) {
        "menu" === t.from ? wx.log.sharepage.share.send() : 1 === this.data.isImage ? wx.log.sharepage.singeImageShare.send() : t.target.dataset && "transfered" === t.target.dataset.type ? wx.log.sharepage.shareToFriendTransfered.send() : wx.log.sharepage.shareToFriend.send(), 
        this.data.story && wx.log.sharepage.storyShare.send();
        var e = "pages/netdisk_share/share?to=share&surl=" + this.surl;
        return this.data.imagetype > 0 && (e = e + "&imagetype=" + this.data.imagetype), 
        this.pwd && (e = e + "&pwd=" + this.pwd), {
            title: p.shareInfo.fileTitle || this.data.title,
            path: this.surl ? e : "pages/netdisk_index/index",
            imageUrl: this.data.shareImage
        };
    },
    downLoad: function() {
        this.checkLogin() && (this.imagepreview = this.selectComponent("#ImagePreview"), 
        this.imagepreview.downLoad());
    },
    saveFile: function() {
        this.checkLogin() && (this.imagepreview = this.selectComponent("#ImagePreview"), 
        this.imagepreview.saveFile());
    },
    initGuidButton: function() {
        var t = this;
        if (!u.wxcatch.getStorage("guidButton")) {
            setTimeout(function() {
                t.guidButton && t.guidButton.show();
            }, 1500);
            u.wxcatch.setStorage("guidButton", "guidButton", 7776e3);
        }
    },
    transSuccess: function() {
        this.data.shareUk === this.data.uk || this.initGuidButton();
    },
    makePoster: function() {
        this.SharePoster = this.selectComponent("#SharePoster"), this.SharePoster.show({
            isStory: this.data.story,
            title: this.data.story ? this.data.storyInfo.title : this.data.title,
            name: this.data.uname,
            shareImage: this.data.story ? this.data.storyInfo.cover_info.url : this.data.shareImage,
            surl: this.surl,
            pwd: this.pwd || ""
        });
    },
    showModalDialog: function() {
        this.checkLogin() && (this.ShareDialog = this.selectComponent("#ShareDialog"), this.ShareDialog.show(wx.SHARE_DIALOG_TYPE.SHARE_FILES, "", {
            mode: "multiple"
        }));
    },
    authorize: function(t, e) {
        this.setData({
            redirectUrl: /^\//.test(t) ? t : "/" + t,
            redirectQuery: (0, l.getQuery)(e),
            hasLogin: !1
        }, function() {});
    },
    handleChildAuth: function() {
        this.Authorize.toggleStatus(!0), this.setData({
            showAuth: !0
        });
    },
    checkLogin: function() {
        return this.data.hasLogin || this.handleChildAuth(), this.data.hasLogin;
    },
    handleRemind: function() {
        var t = this;
        this.shareData && (0, o.reportLinkFeedback)({
            shareid: this.shareData.shareid,
            share_surl: this.surl,
            share_uk: this.shareData.uk,
            feedback_type: 1
        }).then(function(e) {
            0 === (e = e.data || {}).errno ? (t.shareList.updateRemind("done"), wx.wetoast({
                content: "提醒成功",
                duration: 2e3
            })) : wx.wetoast({
                content: "提醒失败,请稍后再试",
                duration: 2e3
            });
        }).catch(function() {
            wx.wetoast({
                content: "提醒失败,请稍后再试",
                duration: 2e3
            });
        });
    },
    initGlobalData: function() {
        (0, c.systemInfoSync)(), this.setData({
            ispc: p.systemInfo.ispc
        });
    }
});