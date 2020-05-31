var e = require("../../common/md.js"), t = require("../../common/request.js"), i = require("../../common/service/share.js"), a = (getApp() || {}).global, o = !1, n = void 0, r = void 0, s = void 0, l = void 0, d = void 0, c = void 0, u = void 0, h = void 0;

Page({
    data: {
        list: [],
        current: 0,
        progress: 0,
        canShare: !1,
        progressing: !1,
        originaling: !1
    },
    onLoad: function(e) {
        n = new i(this), l = e.share_key, d = e.from, r = [], s = 0;
        for (var t, o = 0, c = a.galleryData.list.length; o < c; o++) (t = this.formatData(a.galleryData.list[o])).id === e.image && (s = o), 
        r.push(t);
    },
    onReady: function() {
        this.setData({
            current: s,
            list: r,
            canShare: "share" !== d
        });
    },
    formatData: function(e) {
        var t = {};
        return "share" === d ? (t.id = e.id, t.name = e.name, t.pdirKey = e.pdirKey, t.preview = e.previewURL, 
        t.size = e.sizeText, t.type = e.type) : (t.id = e.file_id, t.name = e.filename, 
        t.pdirKey = e.pdir_key, t.preview = e.preview, t.size = e.file_read_size, t.type = e.type), 
        t;
    },
    preivew: function(e) {
        var t = e.currentTarget.dataset.src;
        wx.previewImage({
            urls: [ t ]
        });
    },
    startDownload: function(e) {
        var t = this, i = e.currentTarget.dataset.scene;
        this.setData({
            progressing: !0
        }), this.requestFile().then(function(e) {
            switch (this.setData({
                progressing: !1,
                list: this.data.list
            }), i) {
              case "original":
                wx.previewImage({
                    urls: [ e ]
                });
                break;

              case "save":
                wx.saveImageToPhotosAlbum({
                    filePath: e,
                    success: function() {
                        wx.showToast({
                            title: "已保存到手机相册",
                            icon: "none",
                            duration: 3e3
                        });
                    }
                });
            }
            o = !1;
        }.bind(this), function() {
            t.setData({
                progressing: !1
            }), wx.showToast({
                title: "图片下载失败，请重试",
                icon: "none",
                duration: 3e3
            }), o = !1;
        });
    },
    download: function(e) {
        var t = this, i = e.currentTarget.dataset.scene;
        o || (o = !0, "original" !== i ? wx.getSetting({
            success: function(i) {
                void 0 !== i.authSetting["scope.writePhotosAlbum"] ? i.authSetting["scope.writePhotosAlbum"] ? t.startDownload(e) : wx.openSetting({
                    success: function(i) {
                        i.authSetting["scope.writePhotosAlbum"] ? t.startDownload(e) : (wx.showToast({
                            title: "保存图片需要在权限设置中授权相册读写权限",
                            icon: "none",
                            duration: 3e3
                        }), o = !1);
                    },
                    fail: function() {
                        wx.showToast({
                            title: "请求相册读写授权失败，请重试",
                            icon: "none",
                            duration: 3e3
                        }), o = !1;
                    }
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        t.startDownload(e);
                    },
                    fail: function() {
                        wx.showToast({
                            title: "保存图片需要在权限设置中授权相册读写权限",
                            icon: "none",
                            duration: 3e3
                        }), o = !1;
                    }
                });
            },
            fail: function() {
                t.startDownload(e);
            }
        }) : t.startDownload(e));
    },
    requestFile: function() {
        var i = this, a = this.data.list[this.data.current], o = a.id, n = a.name, r = a.pdirKey, s = {
            cmd: "DiskFileBatchDownload",
            data: {
                download_type: 14,
                file_list: [ {
                    file_id: o,
                    filename: n,
                    pdir_key: r
                } ]
            }
        };
        return "share" === d && (s.cmd = "WeiyunShareBatchDownload", s.data.share_key = l), 
        new Promise(function(l, d) {
            a.original ? l(a.original) : t.webapp(s).then(function(t) {
                var s = ((t || {}).file_list || [])[0] || {}, c = void 0;
                s.https_download_url ? (c = s.https_download_url.replace(/^http:\/\//, "https://"), 
                wx.downloadFile({
                    url: c,
                    success: function(t) {
                        t.tempFilePath ? (a.original = t.tempFilePath, l(t.tempFilePath)) : (e.log("[gallery page]: wx.downloadFile respond fail, file_id: " + o + ", filename: " + n + ", pdir_key: " + r), 
                        e.write(), d());
                    },
                    fail: function() {
                        e.log("[gallery page]: wx.downloadFile resquest fail, file_id: " + o + ", filename: " + n + ", pdir_key: " + r), 
                        e.write(), d();
                    }
                }).onProgressUpdate(function(e) {
                    i.setData({
                        progress: e.progress
                    });
                })) : (e.log("[gallery page]: get download url respond fail, file_id: " + o + ", filename: " + n + ", pdir_key: " + r), 
                e.write(), d());
            }, function() {
                e.log("[gallery page]: get download url resquest fail, file_id: " + o + ", filename: " + n + ", pdir_key: " + r), 
                e.write(), d();
            });
        });
    },
    share: function() {
        var e = this.data.list[this.data.current];
        "share" !== d && n.createSharePage(e);
    },
    change: function(e) {
        this.setData({
            current: e.detail.current
        });
    },
    touchStart: function(e) {
        c = e.touches;
    },
    touchMove: function(e) {
        u = e.touches;
    },
    touchEnd: function(e) {
        h = e.touches;
    }
});