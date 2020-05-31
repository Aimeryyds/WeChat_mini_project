function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function e() {
    var t = this;
    this.XList && (wx.setPageData("dirdetail", function(e) {
        return t.XList.reloadList();
    }), wx.setPageData("dirdetail", this.currentPath));
}

var a = require("../../netdiisk_requestapi/fileOper.js"), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../netdisk_utils/upload.js")), o = require("../../netdisk_utils/common.js"), s = (require("../../netdisk_utils/errnoText.js"), 
require("../../netdisk_utils/batchFn.js")), n = require("../../netdisk_utils/guideMemberMixin"), l = require("../../netdisk_utils/setUserCenterInfo.js"), r = require("../../netdisk_utils/transAssistant.js"), h = wx.ENV, d = h.staticName, u = h.version, c = getApp(), p = void 0, m = void 0;

Page((0, n.guideMemberPageMixin)({
    data: {
        systemInfo: null,
        uploadData: {},
        isGuideUser: c.globalData.isGuideUser,
        height: 0,
        isBottom: !1,
        timer: null,
        xListLen: 0,
        serverFilename: "",
        isBatch: !1,
        shareButtonShow: !1,
        count: 0,
        isAllDir: !1,
        isAll: !1,
        fromShareToBatch: !1,
        isListEmpty: null,
        quota: 0,
        isHideBack: !1
    },
    onReady: function() {
        var t = this;
        this.pageType = "dirdetail", this.modalDialog = this.selectComponent("#modalDialog"), 
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.topTip = this.selectComponent("#topTip"), this.tipPopup = this.selectComponent("#tipPopup"), 
        this.dialog = this.selectComponent("#dialog"), this.buttonBox = this.selectComponent("#buttonBox"), 
        this.XList = this.selectComponent("#XList"), this.comfirmDialog = this.selectComponent("#comfirmDialog"), 
        this.bottomBtnBar = this.selectComponent("#bottomBtnBar"), this.XList.initCurrentPage(this), 
        this.XList.loadList(this.currentPath, this.isFromShare), e.call(this), (0, o.isShowSavedTip)() && this.isFromShare && (this.tipPopup.show(!0), 
        setTimeout(function() {
            t.tipPopup.show(!1);
        }, 6e3));
    },
    onLoad: function(t) {
        var e = t.fid, a = t.isShare, i = t.isRoot, o = t.path, n = t.serverFilename, r = t.fileMeta, h = t.isHideBack, d = void 0 !== h && h, u = t.from;
        this.isFromShare = "share" === u, this.isFromShare && (this.pageStartTime = Date.now()), 
        r = r ? JSON.parse(decodeURIComponent(r)) : {}, this.Navbar = this.selectComponent("#Navbar"), 
        o = this.currentPath = decodeURIComponent(o), c.globalData.preShareData.currentFileItem = this.currentFileItem = {
            fid: e,
            isShare: +a,
            isRoot: +i,
            path: o,
            serverFilename: n
        }, p = (750 / c.globalData.systemInfo.windowWidth).toFixed(2), m = (c.globalData.statusBarHeight + c.globalData.totalHeight) * p, 
        this.setData({
            fileMeta: r,
            systemInfo: c.globalData.systemInfo,
            height: c.globalData.navHeight,
            serverFilename: n,
            scrollHeight: c.globalData.systemInfo.visualHeightRpx - 112,
            navbarHeight: m,
            isHideBack: d
        }), (0, s.batchFn)(this), (0, l.setUserCenterInfo)();
    },
    onHide: function() {
        this.sendDwellTimeLog();
    },
    onUnload: function() {
        this.sendDwellTimeLog();
    },
    onShow: function() {
        var t = this;
        this.XList && this.XList.refreshMode(), this.XList && this.XList.initHighlight(), 
        e.call(this);
        var a = this.data.uploadData, i = a.isUpload, o = a.uploadMod;
        if (i) {
            var s = null;
            if ("cloud" === o && (s = this.cloudUpload()), "local" === o && (s = this.localUpload()), 
            !s) return;
            s.then(function() {
                t.setData({
                    uploadData: {}
                }), t.getFileList();
            });
        }
    },
    handleTapBottomModalItem: function(t) {
        var e = t.currentTarget.dataset.tapfunc;
        e && this[e].call(this);
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), this.data.timer ? (clearTimeout(this.data.timer), this.data.timer = null, 
        this.data.timer = setTimeout(function() {
            console.log("pulldown settimeout");
        }, 500)) : (this.XList.loadList(this.currentPath), this.data.timer = setTimeout(function() {}, 500));
    },
    loadMoreScrollLower: function() {
        this.XList.loadMore(this.currentPath);
    },
    loadMoreScrollUpper: function() {
        this.data.isBatch || (this.XList.loadList(this.currentPath), wx.wetoast({
            content: "文件已更新",
            duration: 1600
        }));
    },
    onReachBottom: function() {
        var t = this;
        this.data.isBottom || (this.XList.loadMore(this.currentPath, this.isFromShare), 
        this.data.isBottom = !0, this.data.timer = setTimeout(function() {
            t.data.isBottom = !1;
        }, 1500));
    },
    addLocalFile: function() {
        var t = this;
        wx.log.normal.normalDirDetailAddLocalFileBtnClick.send(), wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(e) {
                var a = e.tempFilePaths;
                c.globalData.uploadList = a, t.localUpload().then(function() {
                    t.setData({
                        uploadData: {}
                    }), t.getFileList();
                });
            }
        });
    },
    addVideo: function() {
        o.putVideo.call(this), wx.log.normal.addVideo.send();
    },
    addMessageFile: function() {
        o.putMessageFile.call(this), wx.log.normal.addMessageFile.send();
    },
    goTransAssistantHome: function() {
        (0, r.goTransAssistantHome)(), wx.log.transAssistant.entry.send();
    },
    addDiskFile: function() {
        wx.log.normal.normalDirDetailAddDiskFileBtnClick.send();
        var t = this.currentPath;
        wx.safeNavigateTo("/pages/netdisk_upload/upload?path=/&mod=select&uploadPath=" + t);
    },
    createNewFolder: function() {
        wx.log.normal.createNewDir.send(), this.dialog.show({
            title: "新建文件夹",
            placeholder: "请输入文件夹名称"
        });
    },
    batchEdit: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            detail: ""
        };
        wx.log.normal.batch_click.send();
        var e = wx.getCurrentViewMode();
        t.detail;
        "grid" === e && wx.log.file.thumbnailBatchChoose.send(), this.XList.longPress({
            detail: {
                canSelected: !0
            }
        });
    },
    shareButtonClick: function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0], c.globalData.systemInfo.windowHeightRpx;
        this.setData({
            isBatch: !0,
            fromShareToBatch: !0,
            shareButtonShow: !0,
            scrollHeight: c.globalData.systemInfo.windowHeightRpx - m - 112
        }), wx.log.normal.normalDirDetailShareButtonClickCount.send();
    },
    localUpload: function() {
        var t = this;
        return this.topTip.show("uploading"), wx.log.normal.normalDirDetailAddFileLocalupload.send(), 
        i.default.uploadLocalFiles(this.currentPath).then(function(e) {
            var a = e.successCount, i = e.failureCount, o = e.hasExceedQuota, s = e.guideMemberTip;
            wx.log.normal.normalDirDetailAddFileLocaluploadSuccess.send({
                from: a
            }), wx.log.normal.normalDirDetailAddFileLocaluploadFail.send({
                from: i
            }), t.topTip.show("localUploading", a, i, o, s);
        }).catch(function(t) {
            console.log(t);
        });
    },
    cloudUpload: function() {
        var t = this;
        wx.log.normal.normalDirDetailAddFileCloundupload.send(), this.topTip.show("uploading");
        var e = c.globalData.uploadList.map(function(e) {
            var a = e.path, i = e.server_filename;
            return {
                path: a,
                dest: t.currentPath,
                newname: i
            };
        });
        return a.fileOper.asyncCloudUploadFiles(e).then(function() {
            wx.log.normal.normalDirDetailAddFileClounduploadSuccess.send(), t.topTip.show("success");
        }).catch(function(e) {
            if (e && e.data) {
                var a = e.data, i = a.errno, o = a.total, s = a.task_errno, l = c.globalData.userCenterInfo || {}, r = l && l.quotaSize || {}, h = (0, 
                n.getTipByQuota)({
                    size: e.data.target_size,
                    total: r.total,
                    used: r.used
                });
                -30 === i ? t.topTip.show("cloudUploading", o, c.globalData.uploadList.length - o) : -32 === s && h ? t.topTip.show("cloudUploadingExceed", Object.assign({}, h, {
                    trigger: "uploadCopy"
                })) : t.topTip.show("caution", i);
            } else t.topTip.show("caution");
        }).then(function() {
            c.globalData.uploadList = [];
        });
    },
    getFileList: function() {
        this.XList.reloadList();
    },
    shareSnapshoot: function() {
        var t = this.currentFileItem, e = t.isShare, a = t.fid, i = t.serverFilename, o = t.path, s = t.isRoot;
        if (!e || e && s) {
            wx.log.normal.normalDirDetailShareToClick.send();
            var n = wx.getStorageSync("uk");
            wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
                uk: n,
                fid: a,
                share: e,
                hasListData: !1,
                serverFilename: i,
                path: encodeURIComponent(o)
            });
        } else wx.wetoast({
            content: "父目录已经共享，子目录无法共享",
            duration: 3e3
        });
    },
    getIsBreakLawInfo: function() {
        var e, i = this, o = JSON.stringify([ i.data.fileMeta.path ]);
        a.fileOper.shareSet((e = {
            path_list: o,
            channel_list: JSON.stringify([]),
            schannel: 25,
            period: 0
        }, t(e, "schannel", 0), t(e, "is_card", 0), e)).then(function(t) {
            var e = t.data, a = e.errno, o = e.shorturl, s = e.imagetype, n = o;
            n = n.substring(n.indexOf("s/") + 2, n.length), i.setData({
                shareInfo: {
                    errno: a,
                    str: n,
                    imagetype: s
                }
            });
        }, function(t) {
            var e = t.data.errno;
            wx.log.send({
                value: "文件分享按钮点击，提示无法共享的用户数和次数",
                type: "single_share_fail_" + e
            }), i.setData({
                shareInfo: {
                    errno: e
                }
            });
        });
    },
    shareToOthersSync: function(t) {
        var e = this;
        wx.log.share.singleShareClick.send();
        var a = !1, i = (JSON.stringify([ t.path ]), wx.getStorageSync("uk"));
        t.isdir || !t.thumbs && 2 !== t.category || (c.globalData.preShareData.list = [], 
        c.globalData.preShareData.list.push(t), a = !0), wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
            fid: t.fs_id,
            uk: i,
            surl: encodeURIComponent(e.data.shareInfo.str),
            hasListData: !1,
            serverFilename: t.server_filename,
            path: encodeURIComponent(t.path),
            isOneImg: a
        });
    },
    onShareAppMessage: function(t) {
        if ("menu" === t.from) return wx.log.normal.normalDirDetailShare.send(), {
            path: "pages/netdisk_index/index",
            imageUrl: d + "/mini-program/images/default_map.png?v=" + u
        };
    },
    switchMode: function() {
        wx.log.file.normalChangeView.send();
    },
    _confirmEvent: function(t) {
        console.log("launch", t);
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
            this.modalDialog.show(wx.MODAL_DIALOG_TYPE.ADD_FILES, null, {
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

          case "shareToFriends":
            this.shareSnapshoot();
            break;

          default:
            if (this.data.isBatch) return void this.onlyShareToOthers(e);
            this.shareButtonClick();
        }
    },
    setIsBatchTrue: function() {
        this.setData({
            isBatch: !0
        });
    },
    sendDwellTimeLog: function() {
        this.isFromShare && wx.log.transferOptimization.dwellTime.send({
            from: Date.now() - this.pageStartTime
        });
    }
}));