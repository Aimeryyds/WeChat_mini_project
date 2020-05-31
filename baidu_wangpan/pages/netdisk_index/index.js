function t() {
    this.XList && !this.data.isBatch && (this.XList.initCurrentPage(this), this.requestTabData(this.data.currentTab));
}

function e() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter(function(t) {
        return 2 === t.status || 1 === t.status;
    });
}

var a = require("../../netdisk_utils/wxApiToPromise.js"), i = require("../../netdisk_utils/logicUtils.js"), s = require("../../netdisk_utils/shareGroupOper.js"), o = require("../../netdiisk_requestapi/fileOper.js"), r = require("../../netdisk_utils/account.js"), n = require("../../netdiisk_requestapi/reportUser.js"), l = require("../../netdisk_utils/transform.js"), u = require("../../netdiisk_requestapi/getDiffallInfo.js"), h = (require("../../pass_utils/loginFn.js"), 
require("../../netdisk_utils/wxcatch.js")), c = require("../../netdiisk_requestapi/getInterim.js"), d = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../netdisk_utils/upload.js")), g = require("../../netdisk_utils/common.js"), f = require("../../netdisk_utils/batchFn.js"), p = require("../../netdisk_utils/getRedirectQuery"), m = require("../../netdisk_utils/guideMemberMixin"), D = require("../../netdisk_utils/setUserCenterInfo.js"), b = require("../../netdisk_utils/transAssistant.js"), x = wx.ENV, w = (x.bgForwardName, 
x.staticName), S = x.version, v = getApp();

Page((0, m.guideMemberPageMixin)({
    hasUserInfo: !0,
    data: {
        redirectUrl: "",
        redirectQuery: "",
        hasLogin: !1,
        userWxInfo: null,
        systemInfo: v.globalData.systemInfo,
        hasWxUserInfo: v.globalData.hasWxAuthor,
        hasBdUserInfo: v.globalData.hasBdAuthor,
        currentTab: 0,
        onLoadData: {},
        isGuideUser: v.globalData.isGuideUser,
        xsharelist: 0,
        xListLen: 0,
        isSwitch: !0,
        banner: {},
        height: 60,
        isOnError: !1,
        diffallInfoList: [],
        exitTimer: null,
        bottomBarHeight: 0,
        isListEmpty: !1,
        icon: {},
        isBatch: !1,
        barType: "wpFileNonEmpty",
        count: 0,
        shareButtonShow: !1,
        isHideOperModeDialog: !0,
        ispc: !1,
        jumpInfo: {
            jumpPage: 0,
            jumpFsId: 0,
            jumpIndex: 0,
            jumpOrder: "time",
            jumpDesc: 1,
            jumpPath: "/"
        }
    },
    onReady: function() {
        this.modalDialog = this.selectComponent("#modalDialog"), this.toast = this.selectComponent("#toast"), 
        this.dialog = this.selectComponent("#dialog"), this.showDialog = this.selectComponent("#showDialog"), 
        this.diffallInfoPopup = this.selectComponent("#popup-diffall"), this.bottomBtnBar = this.selectComponent("#bottomBtnBar");
    },
    onLoad: function(t) {
        var e = this;
        this.Authorize = this.selectComponent("#Authorize"), this.Navbar = this.selectComponent("#Navbar"), 
        this.Search = this.selectComponent("#Search"), this.topTip = this.selectComponent("#topTip"), 
        this.Activitybtn = this.selectComponent("#activitybtn"), this.guidLayer = this.selectComponent("#guidLayer"), 
        this.comfirmDialog = this.selectComponent("#comfirmDialog"), this.data.onLoadData = t;
        var s = decodeURIComponent(t.scene).split("#")[2], o = "wx_index_origin_" + s;
        if (+t.jumpPage && +t.jumpFsId) {
            var n = this.data.jumpInfo;
            Object.assign(n, {
                jumpPage: +t.jumpPage,
                jumpFsId: +t.jumpFsId
            }), "string" == typeof t.jumpIndex && (n.jumpIndex = +t.jumpIndex), t.jumpOrder && (n.jumpOrder = t.jumpOrder), 
            "string" == typeof t.jumpDesc && (n.jumpDesc = +t.jumpDesc), t.jumpParentDir && (n.jumpParentDir = t.jumpParentDir), 
            this.setData({
                jumpInfo: n
            });
        }
        this.initGlobalData(), this.data.ispc && wx.log.pcReport.pcReportUser.send(), (0, 
        f.batchFn)(this), (0, a.getUserWxInfo)().then(function(t) {
            var a = t.userInfo;
            wx.log.author.userInfoFirstSuccess.send(), v.globalData.userWxInfo = a, v.globalData.hasWxAuthor = !0, 
            e.data.userWxInfo = a, e.data.hasWxUserInfo = !0, e.setData({
                hasWxUserInfo: !0,
                hasLogin: !0
            }, function() {
                e.Authorize.toggleStatus(!1);
            });
            var s = wx.getStorageSync("lsk");
            if ("normal" === v.globalData.accountAction || s ? (0, i.checkonLoadData)() : (0, 
            i.checkBdAuthor)(), !wx.getStorageSync("userInfo")) {
                var o = new Date().getTime();
                v && v.mtj && v.mtj.trackEvent("login_storage_lost", {
                    key: "userInfo",
                    time: o
                }), (0, r.bdWxLogin)("/pages/netdisk_index/index");
            }
            setTimeout(function() {
                (0, D.setUserCenterInfo)();
            }, 1e3);
        }, function(t) {
            return e.authorize(e.route, e.options);
        }).catch(function(t) {
            return e.authorize(e.route, e.options);
        }), s >= 0 && wx.log.send({
            logValue: "扫描二维码进入小程序首页来源",
            type: o
        });
        var l = t.from;
        l && wx.log.send({
            logValue: "春节活动来源",
            type: "wx_index_origin_" + l
        }), (0, r.rebindAccount)(t.unbind || "");
        var u = t.accountAction;
        v.globalData.accountAction = u, "normal" === u && (0, i.serverLogin)(), wx.getSetting({
            success: function(t) {
                !0 !== t.authSetting["scope.userInfo"] && (v.globalData.hasWxAuthor = !1, e.setData({
                    hasWxUserInfo: !1
                }));
            }
        });
        var h = wx.getStorageSync("userInfo");
        h && (v.globalData.isGuideUser = (0, r.isGuide)(h), v.globalData.userBdInfo = h, 
        this.setData({
            hasBdUserInfo: !0,
            isGuideUser: v.globalData.isGuideUser
        })), !v.globalData.sequence && (0, i.systemInfoSync)(), this.setData({
            systemInfo: v.globalData.systemInfo
        });
        var c = t.currentTab;
        this.setData({
            height: v.globalData.navHeight,
            bottomBarHeight: 0 === this.data.currentTab ? 128 : 0
        }), c && (c = +c, this.setData({
            currentTab: 0 <= c && c < 3 ? c : 0
        })), this.wxIcon();
    },
    onHide: function() {
        v.globalData.firstVisit = !1;
    },
    onShow: function(e) {
        this.pageType = "index", this.XList = this.selectComponent("#XList"), this.XShareList = this.selectComponent("#XShareList"), 
        this.UserCenter = this.selectComponent("#UserCenter"), this.topTip = this.selectComponent("#topTip"), 
        this.refreshShare(), wx.log.index.indexShow.send();
        var a = wx.getStorageSync("userInfo");
        if (this.setData({
            height: v.globalData.navHeight
        }), a && (v.globalData.isGuideUser = (0, r.isGuide)(a), v.globalData.userBdInfo = a, 
        this.setData({
            hasBdUserInfo: !0,
            isGuideUser: v.globalData.isGuideUser
        }), !v.globalData.isGuideUser && this.initGuidLayer()), t.call(this), wx.getStorageSync("lsk") && v.globalData.userBdInfo) {
            (0, n.reportUser)(), v.globalData.isGuideUser && (wx.log.guide.guide.send(), (0, 
            n.reportGuide)()), "normal" === v.globalData.accountAction && wx.log.guide.normalSuccess.send();
            var i = wx.getStorageSync("newDirTemData");
            i && v.globalData.createSharing && o.fileOper.asyncDeleteFiles(i.path).then(function() {
                wx.log.index.deleteTemDir.send(), wx.removeStorageSync("newDirTemData");
            });
        }
    },
    refreshShare: function() {
        var t = v.globalData.shareDirData.currentDirData.dirMeta.server_filename, e = t && wx.getStorageSync(t);
        1 === this.data.currentTab && e && !this.data.isBatch && (this.requestTabData(this.data.currentTab), 
        wx.removeStorageSync(t));
    },
    requestTabData: function(t) {
        0 === t ? this.XList && this.XList.loadList() : 1 === t ? (this.XShareList && this.XShareList.loadList(), 
        this.getDiffallInfo()) : 2 === t && this.UserCenter && this.UserCenter.loadUserInfo(), 
        this.setData({
            isOnError: !!v.globalData.isOffLine,
            bottomBarHeight: 0 === this.data.currentTab ? 128 : 0
        });
    },
    getDiffallInfo: function() {
        var t = this;
        (0, u.getDiffallInfo)().then(function(a) {
            var i = a.data, s = e(i.sf.list), o = s.length, r = "已被移除共享";
            0 === i.errno && o && (o > 3 && (s = s.slice(0, 3).concat({
                filename: "..."
            }), r = "已被移除" + o + "个共享"), t.setData({
                diffallInfoList: s
            }), wx.log.share.cickedOutDialogPrompt.send(), t.diffallInfoPopup.show({
                title: r
            }));
        }).catch(function(t) {
            console.warn(t);
        });
    },
    switchNav: function(t) {
        var e = this;
        if (this.data.currentTab == t.target.dataset.current || !this.data.isSwitch) return !1;
        this.setData({
            currentTab: +t.target.dataset.current,
            isSwitch: !1
        }), setTimeout(function() {
            e.setData({
                isSwitch: !0
            });
        }, 400), this.requestTabData(+t.target.dataset.current);
    },
    changeTab: function(t) {
        if (!this.data.isBatch && +t.detail.current != +this.data.currentTab) {
            var e = this.data.currentTab;
            t && (e = t.detail.current, this.setData({
                currentTab: e
            }), wx.log.index["navTab" + e].send()), this.requestTabData(e);
        }
    },
    createShareDirRes: function(t, e) {
        if (0 === e.sharedir_errno) {
            wx.toasthide();
            var a = e.fs_id;
            v.globalData.shareDirData.currentDirData = {
                isRoot: !0,
                publicMeta: {
                    avator: [ v.globalData.userWxInfo.avatarUrl ],
                    uname: [ v.globalData.userWxInfo.nickName ],
                    memberNum: 1,
                    shareinfo: {
                        fid: a
                    }
                },
                dirMeta: {
                    server_filename: e.name.substr(1),
                    server_mtime: (0, l.transformTime)(e.ctime),
                    path: e.path,
                    fid: a,
                    uk: wx.getStorageSync("uk")
                }
            };
            var i = e.path.substr(1);
            wx.safeNavigateTo("/pages/netdisk_createshare/createshare?fid=" + a + "&path=" + i);
        } else s.shareGroupOper.createGroupCancel(t).then(function() {
            wx.toasthide(), wx.wetoast({
                content: "创建共享失败，请稍后再试",
                duration: 3e3
            }), v.globalData.toCreateSharing = !1;
        }).catch(function(t) {
            v.globalData.toCreateSharing = !1;
        });
    },
    handleTapCreateShareDir: function() {
        var t = this;
        if (!v.globalData.toCreateSharing) {
            v.globalData.toCreateSharing = !0;
            var e = v.globalData.userWxInfo.nickName, a = s.shareGroupOper.defaultNewDir(e);
            s.shareGroupOper.createNewDir(a).then(function(e) {
                var i = e.data;
                t.createShareDirRes(a, i);
            }).catch(function(t) {
                v.globalData.toCreateSharing = !1, wx.toasthide(), wx.wetoast({
                    content: "创建共享出错",
                    duration: 3e3
                });
            }), wx.log.share.createShareBtnClick.send();
        }
    },
    addShareMember: function() {
        wx.log.share.shareBtnAddMemberClick.send();
        var t = this.modalDialog.getFileMeta(), e = t.uk, a = t.fid, i = t.server_filename, s = t.path, o = t.share;
        wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
            uk: e,
            fid: a,
            share: o,
            serverFilename: i,
            path: encodeURIComponent(s),
            hasListData: !1
        });
    },
    modifiedShareDirName: function() {
        wx.log.share.modifiedShareDirName.send();
        var t = this.modalDialog.getTitle(), e = this.modalDialog.getFileMeta();
        if (!e || e.is_owner) {
            var a = "ios" === v.globalData.systemInfo.platform ? 250 : t.length;
            this.dialog.show({
                title: "修改共享名称",
                value: t,
                selectionEnd: a,
                shareDir: !0
            });
        } else wx.wetoast({
            content: "只能管理自己上传的文件哦",
            duration: 1500
        });
    },
    shareDirRename: function(t, e, a) {
        var i = this;
        s.shareGroupOper.renameFileName("/" + a, t).then(function() {
            i.XShareList && i.XShareList.loadList();
        });
    },
    onShareAppMessage: function(t) {
        var e = t.target, a = void 0 === e ? {} : e, i = t.currentTarget, s = void 0 === i ? {} : i, o = t.from;
        a.dataset || s.dataset;
        if ("menu" === o) return wx.log.index.indexShare.send(), {
            title: "邀请您加入网盘小程序",
            path: "pages/netdisk_index/index",
            imageUrl: w + "/mini-program/images/bg_forward.png?v=" + S
        };
    },
    retry: function() {
        var t = this.data.currentTab;
        this.requestTabData(t);
    },
    batchEdit: function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wx.log.normal.normalDirShareButtonClickCount.send(), this.XList.longPress({
            detail: {
                canSelected: !0
            }
        });
    },
    initGuidLayer: function() {
        var t = this;
        if (!h.wxcatch.getStorage("guidlayer")) {
            setTimeout(function() {
                t.guidLayer.show();
            }, 1e3);
            h.wxcatch.setStorage("guidlayer", "guidlayer", 7776e3);
        }
    },
    isListEmpty: function(t) {
        t.detail && this.data.isGuideUser && this.setData({
            isListEmpty: !0,
            barType: "wpFileEmpty"
        });
    },
    showAddModalDialog: function() {
        this.bottomBtnFn({
            detail: "upload"
        });
    },
    bottomBtnFn: function(t) {
        var e = this.XList.getSelectItems();
        switch (t.detail) {
          case "upload":
            this.modalDialog.show(wx.MODAL_DIALOG_TYPE.INDEX_ADD_FILES, null, {
                mode: "multiple"
            }), wx.log.index.upload.send();
            break;

          case "edit":
            this.batchEdit();
            break;

          case "creat":
            wx.log.normal.createNewDir.send(), this.dialog.show({
                title: "新建文件夹",
                placeholder: "请输入文件夹名称"
            });
            break;

          default:
            this.data.isBatch && this.onlyShareToOthers(e), this.shareButtonClick();
        }
    },
    wxIcon: function() {
        var t = this;
        (0, c.getWxIcon)().then(function(e) {
            var a = {}, i = {};
            e.forEach(function(t) {
                switch (t.pop_type) {
                  case 1:
                    a = t;
                    break;

                  case 2:
                    i = t;
                }
            }), a.isValid && wx.log.activity.iconShow.send({
                from: a.activityid
            }), t.setData({
                icon: a,
                banner: i
            });
        }).catch(function(t) {
            console.error(t);
        });
    },
    addVideo: function() {
        g.putVideo.call(this), wx.log.normal.addVideo.send();
    },
    addMessageFile: function() {
        g.putMessageFile.call(this), wx.log.normal.addMessageFile.send();
    },
    goTransAssistantHome: function() {
        (0, b.goTransAssistantHome)(), wx.log.transAssistant.entry.send();
    },
    getFileList: function() {
        this.XList && this.XList.reloadList();
    },
    localUpload: function() {
        var t = this;
        return this.topTip.show("uploading"), wx.log.normal.normalDirDetailAddFileLocalupload.send(), 
        d.default.uploadLocalFiles("/").then(function(e) {
            var a = e.successCount, i = e.failureCount, s = e.hasExceedQuota, o = e.guideMemberTip;
            wx.log.normal.normalDirDetailAddFileLocaluploadSuccess.send({
                from: a
            }), wx.log.normal.normalDirDetailAddFileLocaluploadFail.send({
                from: i
            }), t.topTip.show("localUploading", a, i, s, o);
        }).catch(function(t) {
            console.log(t);
        });
    },
    setIsBatchTrue: function() {
        this.setData({
            isBatch: !0
        });
    },
    showOperModeDialog: function() {
        this.setData({
            isHideOperModeDialog: !1
        });
    },
    hideOperModeDialog: function() {
        this.setData({
            isHideOperModeDialog: !0
        });
    },
    hideXLisOperModeDialog: function() {
        this.XList.operModeDialog.hide(), this.hideOperModeDialog();
    },
    shareButtonClick: function() {
        this.setData({
            isBatch: !0,
            fromShareToBatch: !0,
            shareButtonShow: !0
        }), wx.log.normal.normalDirShareButtonClickCount.send();
    },
    authorize: function(t, e) {
        var a = this;
        this.setData({
            redirectUrl: /^\//.test(t) ? t : "/" + t,
            redirectQuery: (0, p.getQuery)(e),
            hasLogin: !1
        }, function() {
            a.Authorize.toggleStatus(!0);
        });
    },
    handleIconCancel: function() {
        wx.log.activity.iconCancel.send({
            from: this.data.icon.activityid
        });
    },
    initGlobalData: function() {
        (0, i.systemInfoSync)(), this.setData({
            ispc: v.globalData.systemInfo.ispc
        });
    }
}));