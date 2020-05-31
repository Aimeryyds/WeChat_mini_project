function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    var e = [];
    return t.map(function(t, a) {
        e.push((0, o.getOriginImgUrl)(t.thumbs.url3));
    }), e;
}

var a = t(require("../../netdisk_utils/download.js")), i = require("../../netdiisk_requestapi/fileOper.js"), r = require("../../netdisk_utils/transform.js"), s = require("../../netdiisk_requestapi/transferFiles.js"), n = require("../List/ShareList/msg.js"), o = (require("../../netdisk_utils/errnoText.js"), 
require("../../netdisk_utils/calculate.js")), d = require("../../netdisk_utils/shareFn.js"), h = (t(require("./ImageSize.js")), 
require("../../netdisk_utils/common")), u = t(require("../../netdisk_utils/guideMemberMixin")), c = t(require("../../netdisk_utils/shareGuideMemberMixin")), g = getApp().globalData, l = "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&origin=1";

Component({
    behaviors: [ u.default, c.default ],
    properties: {
        hasLogin: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        imageList: [],
        currentImg: [],
        isGuideUser: !1,
        flag: !0,
        isDown: !1,
        currentIndex: 0,
        fromPreview: !0,
        swiperImg: [],
        maxSize: 40,
        allText: "",
        isShare: !0,
        transferSuccess: !1,
        copySurl: !1,
        activity: {}
    },
    created: function() {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#ff0000"
        });
    },
    ready: function() {
        var t = g.systemInfo.statusBarHeight;
        this.setData({
            isGuideUser: g.isGuideUser,
            statusHeight: t,
            screenHeightRpx: g.systemInfo.screenHeightRpx,
            activity: g.imgActivity,
            statusBarHeightRpx: t * +g.systemInfo.ratio
        }), g.imgActivity.isValid && wx.log.activity.imgShow.send({
            from: g.imgActivity.activityid
        });
    },
    attached: function() {
        var t = !!g.fromNA;
        this.setData({
            fromNa: t,
            checkSizeFn: this.checkSize.bind(this)
        }), this.sizeDialogRef = this.selectComponent("#sizeDialog");
    },
    methods: {
        showActionsheet: function(t) {
            if (this.checkLogin() && this.data.imageList[this.data.currentIndex].dlink) {
                var e = this;
                wx.showDialog({
                    title: "保存图片",
                    confirm: function() {
                        e.downLoad();
                    },
                    cancel: function() {
                        console.log("用户点击取消");
                    }
                });
            }
        },
        previewImage: function(t) {
            this.checkLogin() && wx.previewImage({
                current: this.data.currentImg[this.data.currentIndex],
                urls: this.data.currentImg
            });
        },
        downLoad: function() {
            var t = this;
            if (!this.data.isDown && (this.data.isShare ? this.data.isStory ? wx.log.sharepage.storyImageDownload.send() : wx.log.sharepage.singeImageDownload.send() : wx.log.file.normalImgPreviewDownLoadBtnClick.send(), 
            this.checkSize())) {
                var e = void 0;
                try {
                    e = this.data.imageList[this.data.currentIndex].dlink.replace("http", "https");
                } catch (t) {
                    console.warn(t);
                }
                (0, a.default)(e), this.data.isDown = !0, setTimeout(function() {
                    t.data.isDown = !1;
                }, 1500);
            }
        },
        loadList: function(t, a, i, r) {
            var s = wx.getCurrentViewPage().options, n = s.isStory && "true" === s.isStory || !1, o = wx.getStorageSync("uk"), d = o === t.data.uk;
            if (this.setData({
                imageList: t.data.list,
                surl: a,
                path: i,
                owner: d,
                isGuideUser: g.isGuideUser,
                transfer: r || !1,
                currentImg: e(t.data.list),
                currentIndex: t.data.currentIndex ? t.data.currentIndex - 1 : 0,
                fromPreview: !!t.data.fromPreview && t.data.fromPreview,
                allText: t.data.fromPreview ? "全部" : "",
                isShare: t.data.isShare,
                isStory: n,
                uname: t.data.uname || "",
                pwd: t.data.pwd || "",
                appParameter: l,
                userUk: o,
                shareid: t.data.shareid || "",
                shareUk: t.data.uk
            }), this.data.currentImg.length < this.data.maxSize) this.data.swiperImg = this.data.currentImg; else {
                var h = this.data.currentIndex;
                this.data.swiperImg.length = this.data.currentImg.length, this.data.swiperImg[h] = this.data.currentImg[h], 
                h > 0 && (this.data.swiperImg[h - 1] = this.data.currentImg[h - 1]), h > 0 && h < this.data.currentImg.length - 1 && (this.data.swiperImg[h + 1] = this.data.currentImg[h + 1]);
            }
            this.setData(this.data), this.data.isShare && (this.data.fromPreview || this.setShareInfo(t), 
            this.autoTrans());
        },
        setShareInfo: function(t) {
            var e = (0, r.dataTransform)(t.data.list), a = [];
            e.length > 0 && (a = this.getFsid(e));
            var i = {
                shareid: t.data.shareid,
                uk: t.data.uk,
                fsidlist: a
            };
            g.shareInfo = i;
        },
        onSlideChangeEnd: function(t) {
            if ("touch" === t.detail.source) {
                var e = t.detail.current;
                this.data.currentIndex = e, this.data.currentImg.length >= this.data.maxSize && (this.data.swiperImg[e] = this.data.currentImg[e], 
                e > 0 && (this.data.swiperImg[e - 1] = this.data.currentImg[e - 1]), e > 0 && e < this.data.currentImg.length - 1 && (this.data.swiperImg[e + 1] = this.data.currentImg[e + 1])), 
                this.setData(this.data);
            }
        },
        getFsid: function(t) {
            var e = [];
            return t.forEach(function(t) {
                t.fs_id && e.push(t.fs_id);
            }), e;
        },
        changeToOrigin: function() {
            if (this.checkLogin()) {
                var t = "originImgPreview";
                this.data.isShare || (t = "normalImgPreviewViewOriginClick"), this.data.isShar && this.data.isStory && (t = "storyImgPreviewViewOriginClick"), 
                wx.log.file[t].send(), wx.logBp.file[t].send();
            }
        },
        saveFile: function() {
            var t = this;
            if (this.data.isGuideUser) {
                wx.setStorageSync(this.data.surl, "auto");
                var e = "to=share&surl=" + this.data.surl + "&transfer=true";
                g.transfer = !0, wx.safeNavigateTo("/pages/netdisk_bindAccount/bindAccount?" + e);
            } else {
                if (!this.data.flag) return;
                this.setData({
                    flag: !1
                }), wx.wetoast({
                    content: "正在转存...",
                    loading: !0,
                    duration: !0
                });
                var a = g.storyInfo || {}, r = this.newFileName(a.storyTitle, a.storyTime, a.storyUname), s = this.data.isStory;
                s ? wx.log.sharepage.storyImageTransfer.send() : wx.log.sharepage.singeImageTransfer.send(), 
                this.paths = s ? "/我的资源/" + r : "/我的资源", s ? i.fileOper.createDir(this.paths).then(function(e) {
                    var a = e.data;
                    t.transFiles(a.path);
                }).catch(function() {
                    wx.wetoast({
                        content: "保存文件失败",
                        duration: 3e3
                    });
                }) : this.transFiles(this.paths);
            }
        },
        transFiles: function(t) {
            var e = this, a = wx.getStorageSync(this.data.surl), i = this.data.isStory ? 0 : 1;
            (0, s.transferFiles)(t, i).then(function(t) {
                var i = t.data;
                e.transferSucCallback(i), "auto" === a && wx.removeStorageSync(e.surl);
            }, function(t) {
                e.transferFailCallback(t);
            });
        },
        newFileName: function(t, e, a) {
            return t && e ? t + "-" + e : e || (a ? a + "的故事" : "网盘故事");
        },
        transferSucCallback: function(t) {
            var e = this;
            t || this.transferFailCallback();
            var a = Number(t.errno);
            12 === a && (a = this.handleErrno(t));
            var r = n.transferMsg[a] || "";
            this.checkGuideMemberErrno({
                errno: a,
                targetSize: t.target_size,
                targetFileNums: t.target_file_nums
            });
            var s = 0 === a && t.task_id, o = "fail";
            0 === a && !s || -8 === a || -30 === a ? (o = "success", this.setData({
                transferSuccess: !0
            })) : this.data.isStory && i.fileOper.deleteFile(this.paths), this.handleMsg(o, r, a), 
            setTimeout(function() {
                e.setData({
                    flag: !0
                });
            }, 1500);
        },
        handleErrno: function(t) {
            var e = t.info, a = null;
            if (e && e.length > 0) for (var i = 0; i < e.length; i++) {
                var r = e[i].errno;
                if (0 !== r) {
                    a = r;
                    break;
                }
            }
            return a;
        },
        transferFailCallback: function(t) {
            var e = this;
            wx.toasthide(), this.transferToast(), setTimeout(function() {
                e.setData({
                    flag: !0
                });
            }, 1500), this.transferLog();
        },
        transferToast: function() {
            wx.wetoast({
                content: "网络出错，请稍后再试",
                duration: 1500
            });
        },
        transferLog: function(t) {
            var e = "失败", a = "fail";
            0 !== t && -8 !== t && -30 !== t || (a = "success", e = 0 === t ? "成功" : "已存在");
            var i = this.data.isStory ? "故事预览外链分享,转存文件" + e : "外链分享,转存文件" + e, r = this.data.isStory ? "wx_sharepage_story_transfer_" + a + "_" + t : "wx_sharepage_transfer_" + a + "_" + t;
            wx.log.send({
                value: i,
                type: r
            }), this.data.transfer && wx.log.send({
                value: "游客正常化" + i,
                type: "wx_sharepage_transfer_" + a + "_normal_" + t
            });
        },
        handleMsg: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = arguments[2];
            if ("success" === t) wx.toasthide(), this.transferLog(0), wx.wetoast({
                content: "已转存至“我的资源”",
                duration: 1500
            }); else {
                if (wx.toasthide(), this.transferLog(a), this.data.showGuideMember) return;
                wx.wetoast({
                    content: e || "转存失败，请重试",
                    duration: 1500
                });
            }
        },
        autoTrans: function() {
            "auto" !== wx.getStorageSync(this.data.surl) || this.data.owner || this.data.isGuideUser || this.saveFile();
        },
        shareToOthers: function() {
            var t = this.data.imageList[this.data.currentIndex], e = {
                from: "image"
            };
            (0, d.jumpToShareSnap)(t, e);
        },
        checkLogin: function() {
            return this.data.hasLogin || this.triggerEvent("authorize"), this.data.hasLogin;
        },
        getSizeDialogParam: function() {
            var t = this.data, e = (t.transferSuccess, t.fromNa), a = (t.isShare, ""), i = "";
            return e ? (a = "图片较大，请在百度网盘App内查看", i = "使用App打开") : (a = "图片较大，请复制口令后打开百度网盘App查看", 
            i = "复制口令"), {
                content: a,
                confirmText: i,
                cancelText: e ? "知道了" : "取消"
            };
        },
        checkSize: function() {
            var t = this.data, e = t.imageList[t.currentIndex] || {};
            if (e.originSize < 52428800) return !0;
            var a = t.fromNa, i = t.transferSuccess, r = this.getSizeDialogParam();
            this.setData({
                sizeDialog: r
            });
            var s = t.isShare, n = "", o = "", d = !1;
            return s ? i ? (n = "/我的资源/" + e.server_filename, o = l + "&uk=" + t.userUk + "&origin=1&path=" + encodeURIComponent(n)) : o = "bdnetdisk://n/action.SAVE?m_n_v=8.3.0&origin=1&path=/&shareid=" + t.shareid + "&uk=" + t.shareUk : (n = e.path, 
            o = l + "&uk=" + t.userUk + "&origin=1&path=" + encodeURIComponent(n)), !s || a || i || (d = !0), 
            this.setData({
                appParameter: o,
                sizeDialog: r,
                copySurl: d
            }), wx.log.common.copyDialog.send({
                from: "singleImg"
            }), this.sizeDialogRef.show(), !1;
        },
        handleConfirm: function() {
            var t = this.data;
            if (t.copySurl) {
                var e = (0, h.getNaSurlStr)(t.surl, t.pwd);
                return wx.setClipboardData({
                    data: e,
                    success: function() {
                        wx.showToast({
                            title: "口令复制成功，打开百度网盘App查看",
                            icon: "none"
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "口令复制失败，请稍后重试",
                            icon: "none"
                        });
                    }
                }), void wx.log.common.copySurl.send({
                    from: "singleImg"
                });
            }
            (0, h.setCode)(t.appParameter, {
                success: function() {
                    wx.showToast({
                        title: "口令已复制，请打开百度网盘App查看",
                        icon: "none"
                    });
                }
            });
        },
        handleImageError: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail, i = a.isOrigin, r = a.msg;
            if (r = encodeURIComponent(r), e === this.data.currentIndex) {
                var s = i ? "originImgError" : "imgError", n = i ? "imgOrigin" : "img";
                wx.log.common[s].send({
                    msg: r
                }), wx.logBp.common[s].send({
                    msg: r
                }), wx.wxMonitor[n].send();
            }
        },
        handleImageLoad: function(t) {
            var e = t.currentTarget.dataset.index, a = t.detail.isOrigin;
            if (e === this.data.currentIndex) {
                var i = a ? "originImgLoad" : "imgLoad";
                wx.log.common[i].send(), wx.logBp.common[i].send();
            }
        }
    }
});