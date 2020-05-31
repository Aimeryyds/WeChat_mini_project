function e(e) {
    if (!e.original) return !1;
    try {
        return wx.getFileSystemManager().accessSync(e.original), !0;
    } catch (e) {
        return !1;
    }
}

function i(e) {
    return u.downloadDic[e.file_id] || {
        file: e,
        status: f.NONE,
        download_task: void 0
    };
}

function o(e) {
    wx.showToast({
        title: e,
        icon: "none",
        duration: 3e3
    });
}

function t(e) {
    e.status !== f.DOWNLOADING && e.status !== f.FINISHED ? delete u.downloadDic[e.file.file_id] : u.downloadDic[e.file.file_id] = e;
}

function a() {
    var e = 0, i = !0, o = !1, t = void 0;
    try {
        for (var a, n = Object.values(u.downloadDic)[Symbol.iterator](); !(i = (a = n.next()).done); i = !0) a.value.status === f.DOWNLOADING && e++;
    } catch (e) {
        o = !0, t = e;
    } finally {
        try {
            !i && n.return && n.return();
        } finally {
            if (o) throw t;
        }
    }
    return e;
}

function n(e) {
    var i = function(e) {
        wx.saveImageToPhotosAlbum({
            filePath: e.original,
            success: function() {
                s.log("[downloadManager]: wx.saveImageToPhotosAlbum save file " + e.filename + "fid " + e.file_id + "success"), 
                s.write(), o(d.reviseFileName(e.filename, 2) + "已保存到手机相册");
            },
            fail: function(i) {
                s.log("[downloadManager]: wx.saveImageToPhotosAlbum save file " + e.filename + "fid " + e.file_id + "error " + i.errMsg), 
                s.write(), o("该格式照片不支持保存到手机相册");
            }
        });
    }, t = function(e) {
        wx.saveVideoToPhotosAlbum({
            filePath: e.original,
            success: function() {
                s.log("[downloadManager]: wx.saveVideoToPhotosAlbum save file " + e.filename + "fid " + e.file_id + "success"), 
                s.write(), o(d.reviseFileName(e.filename, 2) + "已保存到手机相册");
            },
            fail: function(i) {
                s.log("[downloadManager]: wx.saveVideoToPhotosAlbum save file " + e.filename + "fid " + e.file_id + "error " + i.errMsg), 
                s.write(), o("该格式视频不支持保存到手机相册");
            }
        });
    };
    wx.getSetting({
        success: function(a) {
            void 0 !== a.authSetting["scope.writePhotosAlbum"] ? a.authSetting["scope.writePhotosAlbum"] ? r.isImage(e.ext) ? i(e) : t(e) : wx.openSetting({
                success: function(a) {
                    a.authSetting["scope.writePhotosAlbum"] ? r.isImage(e.ext) ? i(e) : t(e) : o("请授权相册读写权限");
                },
                fail: function(e) {
                    s.log("[downloadManager]: wx.openSetting  error " + e.errMsg), s.write(), wx.showToast({
                        title: "读取相册授权失败，请设置里授权后重新保存",
                        icon: "none",
                        duration: 3e3
                    });
                }
            }) : wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    r.isImage(e.ext) ? i(e) : t(e);
                },
                fail: function() {
                    o("请授权相册读写权限");
                }
            });
        },
        fail: function(e) {
            s.log("[downloadManager]: wx.getSetting get error" + e), s.write(), o("读取系统相册权限失败");
        }
    });
}

var l = require("request.js"), s = require("md.js"), r = require("file.js"), d = require("../external/fileType.js"), u = (getApp() || {}).global, f = {
    NONE: "none",
    DOWNLOADING: "downloading",
    FINISHED: "Finished",
    ERROR: "Error"
};

module.exports = {
    downloadFile: function(u, c, w, g) {
        return new Promise(function(c, m) {
            wx.getNetworkType({
                success: function(v) {
                    var p = i(u);
                    if ("none" == v.networkType || "unknown" == v.networkType) return p.status = f.ERROR, 
                    t(p), void m({
                        code: -2,
                        message: "none" === v.networkType ? "网络中断，请检查网络连接" : message
                    });
                    if (e(p.file)) return p.status = f.FINISHED, u.original = p.file.original, p.file = u, 
                    t(p), r.isImage(u.ext) || r.isVideo(u.ext) ? n(u) : o(d.reviseFileName(u.filename, 2) + "已下载"), 
                    void c(p);
                    if (p.status !== f.DOWNLOADING) if (5 !== a()) {
                        var x = u, N = x.file_id, h = x.filename, D = x.pdir_key, _ = {
                            file_id: N,
                            filename: h,
                            pdir_key: D
                        }, y = {
                            cmd: "DiskFileBatchDownload",
                            data: {
                                download_type: 14,
                                file_list: [ {
                                    file_id: N,
                                    filename: h,
                                    pdir_key: D
                                } ]
                            }
                        };
                        l.webapp(y).then(function(e) {
                            var i = ((e || {}).file_list || [])[0] || {}, a = void 0;
                            i.https_download_url ? (a = i.https_download_url.replace(/^http:\/\//, "https://"), 
                            r.isDoc(p.file.ext) && (a = a.replace(/(fname=[^&]+)&*(.*)/, function(e, i, o) {
                                return ("" === o ? "" : o + "&") + i;
                            })), qq.invokeNativePlugin({
                                api_name: "weiyunDownload",
                                data: {
                                    action: "createDownloadTask",
                                    data: JSON.stringify(_)
                                },
                                success: function(e) {
                                    console.log("success");
                                },
                                fail: function(e) {
                                    console.log("fail");
                                }
                            }), p.status = f.DOWNLOADING, t(p), c(p), qq.onNativePluginEvent("onWeiyunDownLoadEvent", function(e) {
                                var i = r.getStore(e.taskId || e.data.taskId);
                                "pause" === e.eventName ? console.log("pause") : "resume" === e.eventName ? console.log("resume") : "onProgressUpdate" === e.eventName ? w(e, i) : "complete" === e.eventName ? (p.status = f.FINISHED, 
                                e.data.retcode || wx.showToast({
                                    title: "下载失败,请稍后重试",
                                    icon: "none"
                                }), g(e, i)) : "success" === e.eventName ? (o(), e.data.tempFilePath ? (s.log("[downloadManager]: wx.downloadFile success, file_id: " + N + ", filename: " + h + ", url: " + e.data.tempFilePath), 
                                s.write(), u.original = e.data.tempFilePath, p.file.original = e.data.tempFilePath, 
                                p.status = f.FINISHED, t(p), r.isImage(u.ext) || r.isVideo(u.ext) ? n(u) : r.isDoc(u.ext) && o(d.reviseFileName(u.filename, 2) + "下载成功")) : (s.log("[downloadManager]: wx.downloadFile respond fail, file_id: " + N + ", filename: " + h + ", pdir_key: " + D), 
                                s.write(), p.status = f.ERROR, t(p), o("网络中断，请检查网络后重新下载。"))) : "fail" === e.eventName && (s.log("[downloadManager]: wx.downloadFile resquest fail, file_id: " + N + ", filename: " + h + ", err: " + err), 
                                s.write(), p.status = f.ERROR, t(p), o("网络中断，请检查网络后重新下载。"));
                            })) : (s.log("[downloadManager]: get download url respond fail, file_id: " + N + ", filename: " + h + ", pdir_key: " + D), 
                            s.write(), p.status = f.ERROR, t(p), m({
                                code: -1,
                                message: "获取下载URL失败，请稍后重试"
                            }));
                        }, function(e) {
                            s.log("[downloadManager]: get download url resquest fail, file_id: " + N + ", filename: " + h + ", error : " + +e), 
                            s.write(), p.status = f.ERROR, t(p), wx.getNetworkType({
                                success: function(e) {
                                    m({
                                        code: -2,
                                        message: "none" === e.networkType ? "网络中断，请检查网络连接" : "获取下载URL失败，请稍后重试"
                                    });
                                },
                                fail: function() {
                                    m({
                                        code: -2,
                                        message: "获取下载URL失败，请稍后重试"
                                    });
                                }
                            });
                        });
                    } else m({
                        code: 0,
                        message: "下载任务数已达上限"
                    }); else c(p);
                }
            });
        });
    },
    canSupportDownload: function(e) {
        return e.ext && (r.isImage(e.ext) || r.isVideo(e.ext) || r.isDoc(e.ext));
    },
    mapToLocal: function(e) {
        var o = i(e);
        void 0 !== o.file.original && (e.original = o.file.original);
    },
    stopTaskObserver: function(e) {
        var i = !0, o = !1, t = void 0;
        try {
            for (var a, n = Object.values(u.downloadDic)[Symbol.iterator](); !(i = (a = n.next()).done); i = !0) {
                var l = a.value;
                l.status === f.DOWNLOADING && l.file.currentTap !== e && l.download_task.off("onProgressUpdate", function(e) {
                    console.log("[downloadManager]: stop downloadFile: " + file.filename + "observer success");
                });
            }
        } catch (e) {
            o = !0, t = e;
        } finally {
            try {
                !i && n.return && n.return();
            } finally {
                if (o) throw t;
            }
        }
    },
    DownloadStatus: f
};