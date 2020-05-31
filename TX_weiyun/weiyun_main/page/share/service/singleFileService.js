function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var n = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), r = require("../../../external/mta_analysis.js"), o = require("../../../common/md.js"), s = require("./baseService.js"), a = require("./previewService.js"), c = function(c) {
    function u(i) {
        e(this, u);
        var n = t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, i));
        return n.previewService = new a(n.Page), n;
    }
    return i(u, s), n(u, [ {
        key: "init",
        value: function(e, t) {
            var i = this, n = void 0;
            if (t) {
                var r = e.file_list[0];
                n = this.fileFormat(r);
            } else n = e;
            return this.Page.setData({
                singleFile: n.type,
                singleFileInfo: n
            }), this.dispatchInit(n, e.is_share_owner).then(function(e) {
                i.Page.setData({
                    singleFileInfo: Object.assign(n, e)
                });
            }).catch(function(e) {
                switch (e.type) {
                  case "document-preview":
                    wx.showToast({
                        icon: "none",
                        title: e.message,
                        duration: 3e3
                    });
                }
            });
        }
    }, {
        key: "dispatchInit",
        value: function(e, t) {
            switch (e.type) {
              case "video":
                return this.singleVideoInit(e);

              case "pic":
                return this.singlePicInit(e);

              case "doc":
              case "xls":
              case "ppt":
              case "pdf":
              case "txt":
                return this.singleDocumentInit(e, t);

              default:
                return Promise.resolve({});
            }
        }
    }, {
        key: "singleVideoInit",
        value: function(e) {
            return this.loadCloudPlayInfo(e).then(function(e) {
                var t = void 0;
                return 0 === e.cloud_play_retcode ? (t = e.dl_proxy_https_cos_path, o.log("[preview video]: 播放转码后视频: " + t)) : (t = e.https_download_url, 
                o.log("[preview video]: 播放未转码视频: " + t)), {
                    downloadURL: t
                };
            });
        }
    }, {
        key: "singlePicInit",
        value: function(e) {
            var t = wx.getSystemInfoSync().screenWidth;
            return new Promise(function(i) {
                var n = void 0;
                e.picHeight && e.picWidth ? (n = e.picHeight / e.picWidth, i({
                    previewHeight: t * n
                })) : wx.getImageInfo({
                    src: e.previewURL,
                    success: function(e) {
                        n = e.height / e.width, i({
                            previewHeight: t * n
                        });
                    },
                    fail: function() {
                        i({});
                    }
                });
            });
        }
    }, {
        key: "singleDocumentInit",
        value: function(e, t) {
            return this.previewService.document(e, t).catch(function(e) {
                wx.showToast({
                    icon: "none",
                    title: e.message,
                    duration: 3e3
                });
            });
        }
    }, {
        key: "save",
        value: function(e) {
            r.Event.stat("baocun", {
                sharesavedo: "true"
            });
            var t = e.pDirKey || "", i = {
                isSaveAll: !0,
                dstPpdirKey: e.ppDirKey || "",
                dstPdirKey: t
            };
            return this.doSave(i).then(function() {
                wx.reLaunch({
                    url: "../index/index?save_share=true"
                });
            }).catch(function(e) {
                o.log("[share page]: fail, multiFileService.saveAllSelected"), o.log("more info: " + e.message), 
                o.write(), wx.showToast({
                    icon: "none",
                    title: "" + e.message
                });
            });
        }
    }, {
        key: "saveAsync",
        value: function(e) {
            var t = this;
            r.Event.stat("baocun", {
                sharesavedo: "true"
            });
            var i = e.pDirKey || "", n = {
                isSaveAll: !0,
                dstPpdirKey: e.ppDirKey || "",
                dstPdirKey: i
            };
            return new Promise(function(e, i) {
                t.doSave(n).then(function(t) {
                    e(t);
                }).catch(function(e) {
                    o.log("[share page]: fail, multiFileService.saveAllSelected"), o.log("more info: " + e.message), 
                    o.write(), i(e);
                });
            });
        }
    } ]), u;
}();

module.exports = c;