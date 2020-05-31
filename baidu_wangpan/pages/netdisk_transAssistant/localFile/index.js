function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var s = t(require("../../../netdisk_utils/upload.js")), e = require("../../../netdisk_utils/common.js"), a = require("../../../netdiisk_requestapi/transAssistant"), i = require("../../../netdisk_utils/guideMemberMixin"), n = t(i), o = getApp(), l = {
    topTipText: "",
    showTopTip: !1,
    topTipShowClose: !0,
    topTipKind: ""
};

Component({
    behaviors: [ n.default ],
    properties: {
        surl: {
            type: String,
            value: ""
        },
        hasLogin: {
            type: Boolean,
            value: !1
        }
    },
    data: Object.assign({
        successList: [],
        failList: [],
        status: "",
        uploadSize: 0,
        hasExceed: !1,
        canRetry: !0
    }, l),
    methods: {
        handleOpenLocalModal: function() {
            this.triggerEvent("openLocalModal");
        },
        openLocalModal: function() {
            this.modalDialog.show(wx.MODAL_DIALOG_TYPE.DIR_TRANS_ASSISTANT, null, {
                mode: "multiple"
            });
        },
        getUploadPath: function() {
            return (0, e.isIos)() ? "/来自：iphone" : "/我的分享";
        },
        showTopTip: function(t) {
            var s = t.text, e = t.showClose, a = void 0 === e || e, i = t.kind, n = void 0 === i ? "normal" : i;
            s && this.setData({
                topTipText: s,
                showTopTip: !0,
                topTipShowClose: a,
                topTipKind: n
            });
        },
        hideTopTip: function() {
            this.setData(Object.assign({}, l));
        },
        changeStatus: function(t) {
            this.setData({
                status: t
            });
        },
        addLocalFile: function() {
            var t = this;
            wx.log.transAssistant.sendImgFile.send(), wx.chooseImage({
                count: 9,
                sizeType: [ "original" ],
                sourceType: [ "album" ],
                success: function(s) {
                    var e = s.tempFilePaths;
                    if (e.length) {
                        var a = s.tempFiles.map(function(t) {
                            return t.size;
                        }).reduce(function(t, s) {
                            return t + s;
                        });
                        t.setData({
                            uploadSize: a
                        }), t.uploadFile(e);
                    }
                }
            });
        },
        addVideo: function() {
            var t = this;
            wx.log.transAssistant.sendVideoFile.send(), (0, e.checkPutVideoPri)() && (0, e.getVideo)().then(function(s) {
                t.setData({
                    uploadSize: s.size
                }), t.uploadFile([ s.tempFilePath ]);
            }).catch(function(t) {
                console.warn(t);
            });
        },
        addMessageFile: function() {
            var t = this;
            wx.log.transAssistant.sendWxFile.send(), (0, e.getMessageFile)().then(function(s) {
                var e = s.tempFiles, a = e.map(function(t) {
                    return t.size;
                }).reduce(function(t, s) {
                    return t + s;
                });
                t.setData({
                    uploadSize: a
                });
                var i = e.map(function(t) {
                    return t.path;
                });
                t.uploadFile(i);
            }).catch(function(t) {
                console.warn(t);
            });
        },
        uploadFile: function(t) {
            var e = this, a = this.getUploadPath();
            this.showToptipStartTip(t.length), this.changeStatus("uploading"), s.default.transAssistantUpload({
                uploadPath: a,
                uploadList: t
            }).then(function(t) {
                var a = t.successList, i = t.failList, n = t.resList, o = s.default.checkHasExceed(n);
                e.setData({
                    successList: a,
                    failList: i,
                    hasExceed: o
                }), a.length ? e.sendFile() : e.allFail();
            }), wx.log.transAssistant.localUpload.send();
        },
        sendFile: function() {
            var t = this, s = this.data, e = s.successList, i = s.failList, n = 0 === i.length, o = e.map(function(t) {
                return t.fs_id;
            }), l = function(s) {
                var o = a.errMap[s], l = (n ? e.length : e.length + i.length) + "个文件传输失败，点击重试";
                42903 !== s && o || (o = l), n ? t.uploadSuccessSendFail(o) : t.partSuccessSendFail(o);
            }, c = function() {
                n ? t.allSuccess() : t.partSuccessSendSuccess();
            };
            switch (this.data.status) {
              case "uploadSuccessSendFail":
                this.showToptipStartTip(e.length);
                break;

              case "partSuccessSendFail":
                this.showToptipStartTip(e.length + i.length);
            }
            return this.changeStatus("sending"), this.setData({
                canRetry: !0
            }), (0, a.sendFile)({
                surl: this.data.surl,
                list: JSON.stringify(o)
            }).then(function(s) {
                if (0 === (s = s.data || {}).errno) c(); else {
                    var e = !a.sendFailNavNoMap[s.errno];
                    t.setData({
                        canRetry: e
                    }), l(s.errno);
                }
            }).catch(function(t) {
                l();
            });
        },
        handleRetry: function() {
            var t = this;
            wx.log.transAssistant.localRetry.send();
            var s = this.data, a = s.hasExceed, i = s.guideMemberTip, n = s.status, o = s.failList;
            s.canRetry && ("allFail" === n && a && i ? this.showGuideMemberModal() : (0, e.checkNetwork)().then(function() {
                switch (t.data.status) {
                  case "allFail":
                    t.uploadFile(o);
                    break;

                  case "uploadSuccessSendFail":
                    t.sendFile();
                    break;

                  case "partSuccessSendSuccess":
                    t.uploadFile(o);
                    break;

                  case "partSuccessSendFail":
                    t.sendFile();
                }
            }).catch(function() {
                wx.wetoast({
                    content: "网络连接失败，请检查后重试",
                    duration: 1500
                });
            }));
        },
        showTopTipFailTip: function(t, s) {
            this.showTopTip({
                text: s || t + "个文件上传失败，点击重试",
                showClose: !0,
                kind: "err"
            });
        },
        showToptipStartTip: function(t) {
            this.showTopTip({
                text: "正在上传" + t + "个文件，请耐心等待",
                showClose: !1
            });
        },
        allSuccess: function() {
            this.triggerEvent("localTransSuccess"), this.hideTopTip(), this.changeStatus("success"), 
            wx.log.transAssistant.localAllSuccess.send();
        },
        allFail: function() {
            var t = this.data, s = t.failList, e = t.uploadSize;
            if (t.hasExceed) {
                var a = o.globalData.userCenterInfo || {}, n = a && a.quotaSize || {}, l = (0, i.getTipByQuota)({
                    size: e,
                    total: n.total,
                    used: n.used
                });
                l = l && Object.assign({}, l, {
                    trigger: "transAssistant"
                }), this.setData({
                    guideMemberTip: l
                }), l && this.showGuideMemberModal(), this.showTopTipFailTip(s.length, "容量不足，" + s.length + "个文件上传失败，点击重试");
            } else this.showTopTipFailTip(s.length);
            this.changeStatus("allFail"), wx.log.transAssistant.localAllFail.send();
        },
        uploadSuccessSendFail: function(t) {
            var s = this.data.successList;
            this.showTopTipFailTip(s.length, t), this.changeStatus("uploadSuccessSendFail"), 
            wx.log.transAssistant.uploadSuccessSendFail.send();
        },
        partSuccessSendSuccess: function() {
            var t = this.data.failList;
            this.showTopTipFailTip(t.length), this.changeStatus("partSuccessSendSuccess"), wx.log.transAssistant.partSuccessSendSuccess.send();
        },
        partSuccessSendFail: function(t) {
            var s = this.data, e = s.successList, a = s.failList;
            this.showTopTipFailTip(e.length + a.length, t), this.changeStatus("partSuccessSendFail"), 
            wx.log.transAssistant.partSuccessSendFail.send();
        },
        getUserInfo: function(t) {
            this.triggerEvent("getUserInfo", t.detail);
        }
    },
    ready: function() {
        this.modalDialog = this.selectComponent("#modalDialog");
    }
});