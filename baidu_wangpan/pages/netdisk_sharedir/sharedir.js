function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function t() {
    var a = this;
    this.XList && (wx.setPageData("sharedir", function(t) {
        return a.XList.reloadList();
    }), wx.setPageData("sharedir", this.uploadFilePath));
}

function e() {
    this.XList || (this.XList = this.selectComponent("#XList"), this.XList && (t.call(this), 
    this.XList.initCurrentPage(this), this.XList.loadList(this.uploadFilePath)));
}

var i = require("../../netdiisk_requestapi/getShareDirDetail.js"), s = require("../../netdiisk_requestapi/getSurlInfo.js"), o = require("../../netdiisk_requestapi/acceptShareDir.js"), r = require("../../netdiisk_requestapi/weixinGroup.js"), l = a(require("../../netdisk_utils/calculate.js")), n = a(require("../../netdisk_utils/upload.js")), d = require("../../netdisk_utils/batchFn.js"), h = a(require("./shareUtils.js")), u = require("../../netdiisk_requestapi/fileOper.js"), c = require("../../netdisk_utils/common.js"), p = (require("../../netdiisk_requestapi/getUserCenterInfo.js"), 
require("../../netdisk_utils/guideMemberMixin")), g = require("../../netdisk_utils/setUserCenterInfo.js"), D = require("../../netdisk_utils/transAssistant.js"), f = getApp(), m = wx.ENV, w = (m.staticName, 
m.version, 0);

Page((0, p.guideMemberPageMixin)({
    data: {
        systemInfo: f.globalData.systemInfo,
        sharedirData: {
            isRoot: null,
            dirMeta: null,
            memberNum: null,
            avator: [],
            uname: [],
            fileName: null,
            updateTime: null,
            path: null
        },
        isGuideUser: f.globalData.isGuideUser,
        uploadData: {},
        height: 0,
        isOwner: !1,
        xListLen: 0,
        quota: 0,
        scrollHeight: 0,
        isBatch: !1,
        count: 0,
        barType: "enjoyFileDetail",
        isListEmpty: null,
        shareButtonShow: !1,
        isMove: !1,
        isAllFileOwner: !1
    },
    onReady: function() {
        this.pageType = "sharedir", this.modalDialog = this.selectComponent("#modalDialog"), 
        this.comfirmDialog = this.selectComponent("#comfirmDialog"), this.toast = this.selectComponent("#toast"), 
        this.showDialog = this.selectComponent("#showDialog"), this.topTip = this.selectComponent("#topTip"), 
        this.dialog = this.selectComponent("#dialog"), this.buttonBox = this.selectComponent("#buttonBox"), 
        this.Navbar = this.selectComponent("#Navbar"), this.Navbar.setTitle(" "), e.call(this);
    },
    onLoad: function(a) {
        this.pageName = "sharedir";
        var t = f.globalData.shareDirData.currentDirData.dirMeta, e = t.path && !t.path.includes("<share>");
        this.ratio = (750 / f.globalData.systemInfo.windowWidth).toFixed(2);
        f.globalData.statusBarHeight, f.globalData.totalHeight, this.ratio;
        this.setData({
            systemInfo: f.globalData.systemInfo,
            isGuideUser: f.globalData.isGuideUser,
            height: f.globalData.navHeight,
            isOwner: !(!t.is_owner && !e),
            scrollHeight: f.globalData.systemInfo.visualHeightRpx - 112
        }), this.uploadFilePath = t.path || "";
        var i = t.server_filename;
        i && wx.setNavigationBarTitle({
            title: i
        }), (0, d.batchFn)(this), (0, h.default)(this, a), (0, g.setUserCenterInfo)();
    },
    checkFreshName: function() {
        var a = f.globalData.shareDirData, t = a ? a.currentDirData : "";
        if (a && t && t.dirMeta) {
            var e = this.data.sharedirData, i = e.path, s = "/" === i.substr(-1) ? i.substring(0, i.length - 1) : i, o = t.dirMeta;
            t.olddirPath === s && o.server_filename !== e.fileName && (this.data.sharedirData.fileName = o.server_filename, 
            this.data.sharedirData.path = o.path, this.setData({
                sharedirData: this.data.sharedirData
            }));
        }
    },
    updateSharedirData: function() {
        var a = null;
        f.globalData && (a = f.globalData.shareDirData.currentDirData.publicMeta) && (this.data.sharedirData.avator = a.avator, 
        this.data.sharedirData.uname = a.uname, this.setData({
            sharedirData: this.data.sharedirData
        }));
    },
    onShow: function() {
        var a = this;
        this.XList && this.XList.refreshMode(), t.call(this), this.data.sharedirData && this.data.sharedirData.path && (this.checkFreshName(), 
        this.updateSharedirData());
        var e = this.data.uploadData, i = e.isUpload, s = e.uploadMod;
        if (i) {
            var o = null;
            if ("cloud" === s && (o = this.cloudUpload()), "local" === s && (o = this.localUpload()), 
            !o) return;
            o.then(function() {
                a.setData({
                    uploadData: {}
                }), a.getFileList();
            });
        }
        var r = this.data.sharedirData, l = r.isRoot, n = r.dirMeta;
        l && n && (f.globalData.shareDirData.currentDirData.isRoot = l, f.globalData.shareDirData.currentDirData.dirMeta = n);
    },
    handleTapBottomModalItem: function(a) {
        var t = a.currentTarget.dataset.tapfunc;
        t && this[t].call(this);
    },
    localUpload: function() {
        var a = this;
        return this.topTip || (this.topTip = this.selectComponent("#topTip")), wx.log.share.shareDetailAddFileLocaluploadBtn.send(), 
        this.topTip.show("uploading"), (this.uploadFilePath.includes("<share>") ? n.default.uploadLocalFilesToShareDir : n.default.uploadLocalFiles)(this.uploadFilePath).then(function(t) {
            var e = t.successCount, i = t.failureCount, s = t.hasExceedQuota, o = t.guideMemberTip;
            wx.log.share.shareDetailAddFileLocaluploadSuccess.send(), wx.log.normal.normalDirDetailAddFileLocaluploadSuccess.send({
                from: e
            }), wx.log.normal.normalDirDetailAddFileLocaluploadFail.send({
                from: i
            }), a.topTip.show("localUploading", e, i, s, o);
        }).catch(function(a) {
            console.log(a);
        });
    },
    cloudUpload: function() {
        var a = this;
        this.topTip || (this.topTip = this.selectComponent("#topTip")), this.topTip.show("uploading"), 
        wx.log.share.shareDetailAddFileClounduploadBtn.send();
        var t = f.globalData.uploadList.map(function(t) {
            var e = t.path, i = t.server_filename;
            return {
                path: e,
                dest: a.uploadFilePath,
                newname: i
            };
        });
        return u.fileOper.asyncCloudUploadFiles(t).then(function() {
            wx.log.share.shareDetailAddFileClounduploadSuccess.send(), a.topTip.show("success");
        }).catch(function(t) {
            if (t && t.data) {
                var e = t.data, i = e.errno, s = e.total, o = e.task_errno, r = f.globalData.userCenterInfo || {}, l = r && r.quotaSize || {}, n = (0, 
                p.getTipByQuota)({
                    size: t.data.target_size,
                    total: l.total,
                    used: l.used
                });
                -30 === i ? a.topTip.show("cloudUploading", s, f.globalData.uploadList.length - s) : -32 === o && n ? a.topTip.show("cloudUploadingExceed", Object.assign({}, n, {
                    trigger: "uploadCopy"
                })) : a.topTip.show("caution", i);
            } else a.topTip.show("caution");
        }).then(function() {
            f.globalData.uploadList = [];
        });
    },
    getFileList: function() {
        this.XList.reloadList();
    },
    onShareAppMessage: function(a) {
        if (wx.showShareMenu({
            withShareTicket: !0
        }), "menu" === a.from) {
            wx.log.share.shareDirDetailShareClick.send();
            var t = this.data.sharedirData.dirMeta, e = t.uk, i = t.fid;
            return {
                title: "点击加入“" + t.server_filename + "”",
                path: "pages/netdisk_index/index?to=sharedir&from=sharedirmenu&fid=" + i + "&uk=" + e,
                imageUrl: ""
            };
        }
    },
    handleSurl: function(a) {
        var t = this;
        return (0, s.getSurlInfo)(a).then(function(a) {
            var e = a.data, i = e.errno, s = e.status, o = e.uk, r = e.fid;
            if (0 != +i || 0 !== s && 3 != s) return 1 === s ? void t.joinInvalid() : Promise.reject();
            t.joinSharedir({
                uk: o,
                fid: r
            });
        }).catch(function(a) {
            return wx.redirectTo({
                url: "/pages/netdisk_index/index"
            });
        });
    },
    joinSharedir: function(a) {
        var t = this, e = a.uk, i = a.fid, s = a.tt, l = a.invitor, n = a.sign;
        wx.log.share.joinShareSuccess.send();
        var d = null;
        e && i && s && l && n ? d = (0, o.acceptShareDir)({
            fid: i,
            tt: s,
            uk: e,
            invitor: l,
            sign: n
        }) : e && i && (d = r.weixinGroup.v2joinShareDir(e, i)), d.then(function(a) {
            var s = a.data, o = s.errno, r = s.show_msg, l = void 0 === r ? "" : r;
            0 == +o || 18214 == +o || 18215 == +o ? (0 == +o && wx.wetoast({
                content: l || "加入共享成功",
                duration: 1500
            }), t.data.isGuideUser && wx.log.sharepage.guideJoin.send(), t.getDirDetail({
                uk: e,
                fid: i
            })) : t.joinInvalid();
        });
    },
    getDirDetail: function(a) {
        var t = this, s = a.uk, o = a.fid, r = a.surl, n = {};
        return s && o ? n = {
            uk: s,
            fid: o
        } : r && (n = {
            s: r
        }), (0, i.getShareDirDetail)(n).then(function(a) {
            var e = a.data, i = e.errno, s = e.path, o = e.is_wx, r = e.group_num, n = e.avator, d = e.uname, h = e.server_filename, u = e.fid, c = e.tt, p = e.uk, g = e.sign, D = e.invitor, m = e.server_mtime, w = e.is_owner;
            if (0 != +i) return wx.redirectTo({
                url: "/pages/netdisk_index/index"
            }), Promise.reject();
            f.globalData.shareDirData.currentDirData = {
                isRoot: !0,
                isWeixin: o,
                publicMeta: {
                    avator: n,
                    uname: d,
                    memberNum: r,
                    gpIsOwner: w,
                    shareinfo: {
                        fid: u,
                        tt: c,
                        uk: p,
                        invitor: D,
                        sign: g
                    }
                },
                dirMeta: e
            }, wx.setNavigationBarTitle({
                title: h
            }), t.setData({
                sharedirData: {
                    isRoot: !0,
                    dirMeta: e,
                    memberNum: r,
                    avator: n,
                    uname: d,
                    fileName: h,
                    updateTime: l.default.formatTime(new Date(1e3 * m)),
                    path: s
                }
            }), t.uploadFilePath = s;
        }).then(function() {
            e.call(t);
        });
    },
    addLocalFile: function() {
        var a = this;
        wx.log.share.shareDetailAddLocalFileBtn.send(), wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(t) {
                var e = t.tempFilePaths;
                f.globalData.uploadList = e, a.localUpload().then(function() {
                    a.setData({
                        uploadData: {}
                    }), a.getFileList();
                });
            }
        });
    },
    addVideo: function() {
        c.putVideo.call(this), wx.log.normal.addVideo.send();
    },
    addMessageFile: function() {
        c.putMessageFile.call(this), wx.log.normal.addMessageFile.send();
    },
    goTransAssistantHome: function() {
        (0, D.goTransAssistantHome)(), wx.log.transAssistant.entry.send();
    },
    addDiskFile: function() {
        wx.log.share.shareDetailAddDiskFileBtn.send(), wx.safeNavigateTo("/pages/netdisk_upload/upload?path=/&mod=select&uploadPath=" + this.uploadFilePath);
    },
    sharedirAddPeople: function(a) {
        wx.log.share.shareDirDetailAddMemberClick.send(), f.globalData.isGuideUser && wx.log.guide.addIcon.send();
        var t = this.data.sharedirData.dirMeta, e = t.uk, i = t.fid, s = t.server_filename, o = t.path, r = t.share;
        wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
            uk: e,
            fid: i,
            share: r,
            hasListData: !1,
            serverFilename: s,
            path: encodeURIComponent(o)
        });
    },
    createNewFolder: function(a) {
        wx.log.share.createNewDir.send(), this.dialog.show({
            title: "新建文件夹",
            placeholder: "请输入文件夹名称"
        });
    },
    loadMoreScrollLower: function() {
        this.XList.loadMore();
    },
    switchMode: function() {
        wx.log.file.shareChangeView.send(), f.globalData.isGuideUser && wx.log.guide.gridItem.send();
    },
    toCeiling: function(a) {
        var t = w > 0 ? a.detail.scrollTop - w : 0;
        if (w = a.detail.scrollTop, t > 5 && a.detail.scrollTop > 0 && this.setData({
            isMove: !0,
            scrollHeight: this.data.isBatch ? f.globalData.systemInfo.visualHeightRpx - 224 : this.data.scrollHeight
        }), !this.data.isBatch) return !1;
        if (a.detail.scrollTop < 10 && t < 0) {
            this.setData({
                isMove: !1
            });
            var e = this;
            setTimeout(function() {
                e.setData({
                    scrollHeight: f.globalData.systemInfo.visualHeightRpx - 462
                });
            }, 1e3);
        }
    },
    moveStart: function() {
        w = 0;
    },
    showAddModalDialog: function() {
        this.modalDialog.show(wx.MODAL_DIALOG_TYPE.ADD_FILES, null, {
            mode: "multiple"
        });
    },
    _confirmEvent: function(a) {
        var t = wx.getCurrentViewPage().comfirmDialog.data.types;
        "DOC" === t ? wx.log.sharepage.doc.send() : "AUDIO" === t && wx.log.sharepage.audio.send();
    },
    joinInvalid: function() {
        wx.setNavigationBarTitle({
            title: "加入共享失败"
        }), this.setData({
            invalid: !0
        });
    },
    batchEdit: function() {
        this.setData({
            isBatch: !0,
            barType: 1 === this.data.sharedirData.dirMeta.is_owner ? "enjoyFileOwnBatch" : "enjoyFileOtherBatch",
            scrollHeight: this.data.isMove ? f.globalData.systemInfo.visualHeightRpx - 224 : f.globalData.systemInfo.visualHeightRpx - 462
        }), wx.log.share.batch_click.send();
    },
    move: function(a) {},
    goToSettingPage: function() {
        wx.safeNavigateTo("/pages/netdisk_setshare/setshare");
    },
    bottomBtnFn: function(a) {
        var t = this.XList.getSelectItems();
        switch (a.detail) {
          case "upload":
            this.data.isGuideUser ? (wx.log.guide.addDir.send(), wx.safeNavigateTo("/pages/netdisk_bindAccount/bindAccount?from=dirdetail")) : this.showAddModalDialog(), 
            wx.log.index.upload.send();
            break;

          case "edit":
            this.batchEdit();
            break;

          case "setting":
            wx.log.share.shareDetailSettingBtn.send(), this.goToSettingPage();
            break;

          case "copy":
            this.copy(t);
            break;

          case "rename":
            this.batchRename(t, this.data.isOwner);
            break;

          case "delete":
            this.batchDelete(t);
            break;

          case "share":
            this.onlyShareToOthers(t);
            break;

          default:
            if (this.data.isBatch) return void this.onlyShareToOthers(t);
            this.setData({
                isBatch: !0,
                barType: 1 === this.data.sharedirData.dirMeta.is_owner ? "enjoyFileOwnBatch" : "enjoyFileOtherBatch",
                shareButtonShow: !0
            });
        }
    }
}));