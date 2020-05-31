function e(e) {
    return ("share" === wx.getCurrentViewPage().pageType ? wx.getCurrentViewPage().shareList.data.list : wx.getCurrentViewPage().XList.data.list).filter(function(t) {
        return t.category - 0 === e;
    });
}

function t(e, a, i, s, n) {
    var l = this;
    (0, o.getDocumentUr)(e).then(function(o) {
        if ("PROCESSING" === o.data.status && i < 2) return i += 1, void setTimeout(function() {
            t.call(l, e, a, i, s);
        }, 2e3);
        if ("HITNDB" !== o.data.status) wx.toasthide(), wx.showDialog({
            title: "",
            showCancel: !1,
            content: "文档已在后台转码中，请稍后再试"
        }); else {
            wx.wetoast({
                content: "文档加载中",
                loading: !0,
                duration: !0
            });
            var d = a + "&method=newview&ndb_key=" + o.data.ndb_key + "&region=" + o.data.region;
            wx.downloadFile({
                url: d,
                success: function(e) {
                    var t = e.tempFilePath;
                    if (wx.toasthide(), s) u.globalData.systemInfo.ispc ? r.call(l, "DOC", n, {
                        title: "",
                        content: "因小程序限制，较大文档仅能查看前10页，请到百度网盘客户端查看",
                        showCancel: !1,
                        confirm: function() {
                            wx.openDocument({
                                filePath: t
                            });
                        }
                    }, 1, t) : r.call(l, "DOC", n, {
                        title: "",
                        content: "因小程序限制，较大文档仅能查看前10页，更多内容请在百度网盘App内查看",
                        showCancel: !1,
                        confirm: function() {
                            wx.openDocument({
                                filePath: t
                            });
                        }
                    }, 1, t), wx.log.file.docTenPage.send(); else {
                        wx.openDocument({
                            filePath: t
                        });
                        var a = wx.getCurrentViewPage().pageType;
                        "sharedir" === a ? wx.log.file.shareDocPreviewSuccess.send() : "share" === a ? wx.log.file.sharePageDocPreviewSuccess.send() : wx.log.file.normalDocPreviewSuccess.send();
                    }
                },
                fail: function(e) {
                    wx.toasthide(), -1 !== e.errMsg.indexOf("exceed max file size") ? (u.globalData.systemInfo.ispc ? r.call(l, "DOC", n, {
                        title: "",
                        showCancel: !1,
                        content: "因小程序限制，较大的文档请到百度网盘客户端查看"
                    }, 0) : r.call(l, "DOC", n, {
                        title: "",
                        showCancel: !1,
                        content: "因小程序限制，较大的文档请在百度网盘App内查看"
                    }, 0), wx.log.file.docPreviewFailed.send()) : (wx.wetoast({
                        content: "文档加载出错，请重试",
                        duration: 2e3
                    }), wx.log.file.docTrancodeFail.send());
                }
            });
        }
    });
}

function a(a, i, n) {
    (0, c.systemInfoSync)();
    var o = wx.getCurrentViewPage(), d = o.pageType, m = o.options.imagetype && 3 == +o.options.imagetype ? 1 : 0, w = o.shareList && o.shareList.data.btn.saveState ? 1 : 0, f = (0, 
    l.getUk)(), v = "", y = "", x = !1, _ = !1, S = "share" === d;
    S && (_ = !0);
    var P = this.data.shareUrlInfo || {}, C = S && P.uk, D = S ? C === f ? 1 : +w : 1, I = o.data.shareid || "", b = P.pwd || "";
    if (D) {
        var k = a.path;
        S && !k.includes("/我的资源/") && (k = "/我的资源/" + a.server_filename), v = "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&origin=1&uk=" + f + "&path=" + encodeURIComponent(k);
    } else {
        v = "bdnetdisk://n/action.SAVE?m_n_v=8.3.0&surl=" + P.shortUrl + "&shortUrl=" + P.shortUrl + "&shareid=" + I + "&uk=" + C + "&pwd=" + b + "&path=/&origin=1";
        var T = P.shortUrl, A = P.pwd;
        y = (0, l.getNaSurlStr)(T, A), x = !0;
    }
    if (a.category - 0 == 3) {
        if (("sharedir" === d || "share" === d) && a.originSize >= 1024 * h * 1024) return void (u.globalData.systemInfo.ispc ? r.call(this, "MYFILE", a, {
            title: "",
            showCancel: !1,
            content: x ? "图片较大，请保存后到百度网盘客户端查看" : "图片较大，请到百度网盘客户端查看"
        }, 4) : r.call(this, "MYFILE", a, {
            content: "图片较大，请复制口令后打开百度网盘App查看"
        }, 4, "", {
            appParameter: v,
            naSurlStr: y,
            copySurl: x,
            usePcodeAppParam: _,
            copySurlLogType: "bigImg"
        }));
        if ("sharedir" === d) return wx.log.file.shareImgPreview.send(), wx.navigateTo({
            url: "/pages/netdisk_previewimage/previewimage?preview=sharedir"
        }), void wx.setStorage({
            key: "imagelist",
            data: s({}, wx.getCurrentViewPage().XList.data, {
                currentFsId: a.fs_id
            })
        });
        if ("share" === d) {
            wx.log.file.sharePageImgPreview.send();
            JSON.stringify(wx.getCurrentViewPage().shareList.data);
            var U = m > 0 ? "/pages/netdisk_previewimage/previewimage?preview=share&isStory=true" : "/pages/netdisk_previewimage/previewimage?preview=share";
            return U = U + "&surl=" + P.shortUrl + "&pwd=" + P.pwd + "&imagetype=" + o.options.imagetype, 
            wx.navigateTo({
                url: U
            }), void wx.setStorage({
                key: "imagelist",
                data: s({}, wx.getCurrentViewPage().shareList.data, {
                    currentFsId: a.fs_id
                })
            });
        }
        var E = "/pages/netdisk_previewimage/previewimage?preview=normal";
        this.data.imgHideShare && (E += "&imgHideShare=1"), wx.navigateTo({
            url: E
        });
        var L = wx.getCurrentViewPage().XList, O = s({}, L && L.data || {}, {
            currentFsId: a.fs_id
        });
        return (this.data.isJumpItem || this.data.isSingleItem) && (O.list = [ this.data.fileMeta ]), 
        wx.setStorage({
            key: "imagelist",
            data: O
        }), void wx.log.file.normalImgPreview.send();
    }
    if (a.category - 0 == 4) {
        var M = (a.server_filename || "").split("."), V = {
            from: M = M.length ? M[M.length - 1] : ""
        };
        if ("sharedir" === d ? wx.log.file.shareDocPreview.send(V) : "share" === d ? wx.log.file.sharePageDocPreview.send(V) : wx.log.file.normalDocPreview.send(V), 
        void 0 === a.lodocpreview && a.docpreview && (a.lodocpreview = a.docpreview + "&type=pdf&from=lo"), 
        !a.lodocpreview) return void wx.wetoast({
            content: "该文档暂不支持预览",
            duration: 3e3
        });
        var N = a.lodocpreview.replace(/http:\/\/pcsdata\.baidu\.com/, "https://pcsdata.baidu.com");
        -1 === N.indexOf("?") && (N += "?clienttype=25"), N += "&clienttype=25";
        var F = "", R = !1;
        if (!(a.originSize < 10485760)) return F = N + "&method=newinfo&part_index=0", R = !0, 
        void (u.globalData.systemInfo.ispc ? r.call(this, "MYFILE", a, {
            title: "",
            showCancel: !1,
            content: x ? "文档较大，请保存后到百度网盘客户端查看" : "文档较大，请到百度网盘客户端查看"
        }, 4) : r.call(this, "DOC", a, {
            content: g
        }, 0, "", {
            appParameter: v,
            naSurlStr: y,
            copySurl: x,
            usePcodeAppParam: _,
            copySurlLogType: "bigDoc"
        }));
        F = N + "&method=newinfo&part_index=0", R = !1;
        wx.wetoast({
            content: "文档转码中",
            loading: !0,
            duration: !0
        }), wx.log.file.docTrancodeIng.send(), t.call(this, F, N, 0, R, a);
    } else if (a.category - 0 == 1) {
        "sharedir" === d ? wx.log.file.shareVideoPreview.send() : "share" === d ? wx.log.file.sharePageVideoPreview.send() : wx.log.file.normalVideoPreview.send();
        var Y = wx.getCurrentViewPage().data, j = Y.shareid || "", q = Y.shareUk || "", z = encodeURIComponent(a.path), B = encodeURIComponent(a.server_filename), J = encodeURIComponent(a.thumbs.url1 || a.thumbs.url2 || a.thumbs.url3), H = a.fs_id, X = a.md5, G = a.size;
        if (!z || !B) return void wx.wetoast({
            content: "文件已被删除",
            duration: 1500
        });
        wx.navigateTo({
            url: "/pages/netdisk_previewvideo/previewvideo?path=" + z + "&filename=" + B + "&thumbs=" + J + "&fid=" + H + "&md5=" + X + "&size=" + G + "&from=" + d + "&isdir=" + a.isdir + "&category=" + a.category + "&fs_id=" + a.fs_id + "&surl=" + (i || "") + "&imagetype=" + (this.data.imagetype || -1) + "&shareid=" + j + "&shareuk=" + q + "&saved=" + w + "&pwd=" + n
        });
    } else if (a.category - 0 == 2) {
        if (a.originSize >= 1024 * h * 1024) return void (u.globalData.systemInfo.ispc ? r.call(this, "AUDIO", a, {
            title: "",
            showCancel: !1,
            content: x ? "音频较大，请保存后到百度网盘客户端查看" : "音频较大，请到百度网盘客户端查看"
        }, 3) : r.call(this, "AUDIO", a, {
            content: "音频较大，请复制口令后打开百度网盘App查看"
        }, 3, "", {
            appParameter: v.replace("action.MYFILE", "action.AUDIO"),
            naSurlStr: y,
            copySurl: x,
            usePcodeAppParam: !0,
            copySurlLogType: "bigAudio"
        }));
        if (!(0, l.isSupportAudio)(a.server_filename)) return void (u.globalData.systemInfo.ispc ? r.call(this, "AUDIO", a, {
            title: "",
            showCancel: !1,
            content: x ? "暂不支持该格式预览，请保存后到百度网盘客户端查看" : "暂不支持该格式预览，请到百度网盘客户端查看"
        }, 3) : r.call(this, "AUDIO", a, {
            content: p,
            duration: 1200
        }, 3, "", {
            naSurlStr: y,
            copySurl: x
        }));
        var K = [], Q = (K = this.data.isJumpItem || this.data.isSingleItem ? [ this.data.fileMeta ] : e(2).filter(function(e) {
            return (0, l.isSupportAudio)(e.server_filename);
        })).findIndex(function(e) {
            return e.fs_id === a.fs_id;
        });
        getApp().globalData.audioList = K;
        var W = wx.getCurrentViewPage().data, Z = W.shareid || "", $ = W.shareUk || "";
        wx.navigateTo({
            url: "/pages/netdisk_previewaudio/previewaudio?currentIndex=" + Q + "&from=" + d + "&surl=" + this.data.surl + "&imagetype=" + (this.data.imagetype || -1) + "&shareid=" + Z + "&shareuk=" + $ + "&saved=" + w + "&pwd=" + n
        });
    } else "index" === d || "dirdetail" === d || "share" === d ? u.globalData.systemInfo.ispc ? r.call(this, "MYFILE", a, {
        title: "",
        showCancel: !1,
        content: x ? "暂不支持该格式预览，请保存后到百度网盘客户端查看" : "暂不支持该格式预览，请到百度网盘客户端查看"
    }, 3) : r.call(this, "MYFILE", a, {
        content: p
    }, "", "", {
        appParameter: v,
        naSurlStr: y,
        copySurl: x,
        usePcodeAppParam: _,
        copySurlLogType: "unsupport"
    }) : wx.wetoast({
        content: "暂不支持该格式，请在百度网盘App预览",
        duration: 1200
    }), wx.log.file.previewOthers.send();
}

function i(e) {
    var t = {}, a = e.isdir, i = e.category, r = e.thumbs, s = e.share, o = e.path, d = "", c = wx.getCurrentViewPage().pageType;
    if (i = Number(i), 1 === Number(a)) d = wx.ENV.staticName + "mini-program/images/ic_share_v2.png", 
    (!this.data.shareDirPage && s % 2 == 0 || "share" === c) && (d = wx.ENV.staticName + "mini-program/images/ic_file2.png"), 
    t = {
        categoryImage: d
    }; else {
        var p = 1 === i, g = p || 3 === i, u = "", h = (0, l.checkType)(o);
        2 === i && (h = wx.ENV.CONF.FILE_CATEGORY[i]), d = wx.ENV.staticName + "mini-program/images/ic_" + h + "_v2.png?v=1.0", 
        g && (u = (0, n.getOriginImgUrl)(r.url1 || r.url2 || r.url3)), t = {
            categoryImage: d,
            thumbnail: u,
            isVideo: p
        };
    }
    this.setData(t);
}

function r(e, t, a, i, r) {
    var s = this, n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, o = wx.getCurrentViewPage(), l = u.globalData.fromNA, d = n.naSurlStr, c = n.copySurl, p = n.usePcodeAppParam, g = n.appParameter, h = n.copySurlLogType;
    u.globalData.systemInfo.ispc ? wx.showModal({
        content: a.content,
        confirmText: "我知道了",
        showCancel: !1,
        success: function(e) {
            e.cancel, e.confirm;
            wx.log.pcReport.pcReportBtnClick.send();
        }
    }) : l ? (o.comfirmDialog.setAppParameter(e, t, i, r, n), o.comfirmDialog.isHideDialog()) : (wx.log.common.copyDialog.send({
        from: h
    }), wx.showModal({
        content: a.content,
        confirmText: "复制口令",
        success: function(e) {
            e.cancel;
            e.confirm && (c ? (wx.setClipboardData({
                data: d,
                success: function() {},
                fail: function() {
                    wx.showToast({
                        title: "口令复制失败，请稍后重试",
                        icon: "none"
                    });
                }
            }), wx.log.common.copySurl.send({
                from: h
            })) : s.setCodes(t, p ? g : ""));
        }
    }));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, n = require("../../netdisk_utils/calculate.js"), o = require("../../netdiisk_requestapi/getDocumentUrl.js"), l = require("../../netdisk_utils/common.js"), d = require("../../netdiisk_requestapi/transAssistant"), c = require("../../netdisk_utils/logicUtils"), p = "暂不支持该格式预览，请复制口令后打开百度网盘App查看", g = "文档较大，请复制口令后打开百度网盘App查看", u = getApp(), h = 50, m = {
    properties: {
        isSelect: {
            type: Boolean,
            value: !1
        },
        index: {
            type: Number,
            value: 0
        },
        fileMeta: {
            type: Object,
            value: {},
            observer: function(e) {
                this._genData(e);
            }
        },
        imagetype: {
            type: Number,
            value: -1
        },
        canSelected: {
            type: Boolean,
            value: !1
        },
        shareDirPage: {
            type: Boolean,
            value: !1
        },
        surl: {
            type: String,
            value: ""
        },
        isLongPressEntrySelection: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        pressDownClass: "",
        staticName: wx.ENV.staticName,
        isVideo: !1,
        thumbnail: "",
        categoryImage: "",
        selectedTimer: null
    },
    methods: {
        _touchStart: function() {
            this.setData({
                pressDownClass: "press-down"
            });
        },
        _touchEnd: function() {
            this.setData({
                pressDownClass: ""
            });
        },
        _longPress: function() {
            var e = this, t = wx.getCurrentViewPage();
            this.data.isLongPressEntrySelection ? this.triggerEvent("longPress", {
                canSelected: !0
            }) : ((t.batchEdit && "dirdetail" !== t.pageType || "dirdetail" === t.pageType && !1 === t.data.isBatch) && (wx.log.normal.longtab_batch.send(), 
            t.batchEdit(), clearTimeout(this.data.selectedTimer), this.data.selectedTimer = setTimeout(function() {
                e._touchEnd();
            }, 800)), "grid" === wx.getCurrentViewMode() && wx.log.file.thumbnailLongTouch.send());
        },
        _select: function() {
            var e = this.data, t = e.isCollectionList, a = e.fileMeta, i = e.itemKey, r = {
                id: a[void 0 === i ? "fs_id" : i],
                isSelect: !this.data.isSelect
            };
            t && (r = {
                fileMeta: a,
                isSelect: !this.data.isSelect
            }), this.triggerEvent("select", r);
        },
        _click: function() {
            var e = this.data, t = e.isTransAssisList, i = e.isCollectionList, r = e.fileMeta, s = e.previewCate, n = e.canNavDir;
            if (t || i) this.triggerEvent("click", {
                fileMeta: r
            }); else {
                wx.log.normal.visitnormalDir.send();
                var o = wx.getCurrentViewPage(), l = o.pageType, c = this.data.fileMeta;
                if (c.highlight && wx.log.transferOptimization.consumeFile.send(), "uploading" !== l && this.data.canSelected) this._select(); else {
                    var p = "", g = this.data.surl, u = "", h = this.data.shareUrlInfo;
                    u = h && h.pwd || "";
                    var m = 1 === Number(c.isdir);
                    if (m) if (n) {
                        var w = !0;
                        switch (l) {
                          case "uploading":
                            var f = "", v = o.data, y = v.isTransAssistant, x = v.whenEmpty, _ = v.count;
                            y && (f = "&" + (0, d.getTransAssistantParam)(o.data) + "&from=transAssistant&whenEmpty=" + x), 
                            _ && (this._select(), w = !1), p = "/pages/netdisk_upload/upload?path=" + encodeURIComponent(c.path) + f;
                            break;

                          case "sharedir":
                            if (p = "/pages/netdisk_sharedir/sharedir?from=filelist", m) {
                                var S = getApp().globalData.shareDirData.currentDirData;
                                S.isRoot = !1, S.dirMeta = c;
                            }
                            break;

                          case "share":
                            p = "/pages/netdisk_share/share?" + ("path=" + encodeURIComponent(c.path) + "&surl=" + g + "&isRoot=0&serverFilename=" + c.server_filename + "&imagetype=" + this.data.imagetype + "&pwd=" + u);
                            break;

                          case "copyShare":
                            var P = c.path || "", C = c.is_root || 0, D = encodeURIComponent(JSON.stringify(c)), I = JSON.stringify(o.data.saveList);
                            p = "/pages/netdisk_copyshare/copyshare?path=" + encodeURIComponent(P) + "&isShare=" + c.share + "&isRoot=" + C + "&fid=" + c.fs_id + "&serverFilename=" + c.server_filename + "&fileMeta=" + D + "&from=" + o.from + "&saveList=" + I;
                            break;

                          default:
                            C = c.is_root || 0, D = encodeURIComponent(JSON.stringify(c)), p = "/pages/netdisk_dirdetail/dirdetail?path=" + encodeURIComponent(c.path) + "&isShare=" + c.share + "&isRoot=" + C + "&fid=" + c.fs_id + "&serverFilename=" + c.server_filename + "&fileMeta=" + D;
                        }
                        w && wx.safeNavigateTo(p);
                    } else this.triggerEvent("click", {
                        fileMeta: r
                    }); else {
                        if (Array.isArray(s)) {
                            var b = c.category;
                            if (-1 === s.indexOf(b)) return void this.triggerEvent("click", {
                                fileMeta: r
                            });
                        }
                        "uploading" === l ? this._select() : a.call(this, c, g, u);
                    }
                }
            }
        },
        _genData: function(e) {
            i.call(this, e || this.data.fileMeta);
        },
        setCodes: function(e, t) {
            var a = (0, l.getUk)();
            if (!a) return wx.log.common.appUseUkErr.send(), void wx.wetoast({
                content: "获取口令失败，请稍候再试"
            });
            var i = "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&uk=" + a + "&path=" + encodeURIComponent(e.path) + "&origin=1";
            (0, l.setCode)(t || i);
        }
    }
};

exports.default = function(e) {
    return e.properties = s({}, m.properties, e.properties), e.data = s({}, m.data, e.data), 
    e.methods = s({}, m.methods, e.methods), Component(e);
};