function e(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function o(e, o) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? e : o;
}

function i(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
}

var t = function() {
    function e(e, o) {
        for (var i = 0; i < o.length; i++) {
            var t = o[i];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(o, i, t) {
        return i && e(o.prototype, i), t && e(o, t), o;
    };
}(), n = require("../../../common/md.js"), a = require("../../../common/error.js").format, r = require("./baseService.js"), u = {
    supportSuffix: {
        audio: [ "m4a", "aac", "mp3", "wav" ]
    },
    verify: function(e, o) {
        var i = Boolean(u.supportSuffix[o].find(function(o) {
            return e.toLocaleLowerCase().endsWith(o);
        }));
        return i || (n.log("[share page]: preview " + o + " verify format fail"), n.write(), 
        wx.showToast({
            title: "小程序暂不支持播放此格式文件，请用保存后使用微云APP播放",
            icon: "none",
            duration: 3e3
        })), i;
    },
    audio: function(e) {
        return this.verify(e, "audio");
    }
}, s = function(s) {
    function l(i) {
        return e(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, i));
    }
    return i(l, r), t(l, [ {
        key: "pic",
        value: function(e) {
            var o = this.Page.options.share_key, i = (this.Page.data.multiFileInfo ? this.Page.data.multiFileInfo.fileList || [ e ] : [ e ]).filter(function(e) {
                return "pic" === e.type;
            });
            (getApp() || {}).global.galleryData = {
                list: i
            }, n.log("[share page]: preview image navigate to gallery, file_id: " + e.id), wx.navigateTo({
                url: "../gallery/gallery?image=" + e.id + "&share_key=" + o + "&from=share",
                fail: function(e) {
                    n.log("[share page]: preview image navigate fail: " + e.errMsg), n.write();
                }
            });
        }
    }, {
        key: "audio",
        value: function(e) {
            u.audio(e.name) && (wx.showLoading(), this.loadDownloadURL({
                id: e.id,
                name: e.name,
                pdirKey: e.pdirKey
            }).then(function(o) {
                wx.hideLoading();
                var i = "../audio/index?audio_src=" + encodeURIComponent(o) + "&audio_name=" + encodeURIComponent(e.name) + "&audio_size=" + encodeURIComponent(e.size);
                wx.navigateTo({
                    url: i,
                    success: function() {
                        n.log("[share page]: success, preview audio navigate to " + i);
                    },
                    fail: function(e) {
                        n.log("[share page]: fail, preview audio navigate to " + i), n.log("more info: " + e.message + "}"), 
                        n.write();
                    }
                });
            }));
        }
    }, {
        key: "video",
        value: function(e) {
            var o = "index?share_key=" + this.shareKey + "&single_file_info=" + JSON.stringify(e);
            wx.navigateTo({
                url: o,
                success: function() {
                    n.log("[share page]: success, preview video navigate to " + o);
                },
                fail: function(e) {
                    n.log("[share page]: fail, preview video navigate to " + o), n.log("more info: " + e.message + "}"), 
                    n.write();
                }
            });
        }
    }, {
        key: "document",
        value: function(e, o) {
            var i = 10 * Math.pow(1024, 2);
            return o ? Promise.reject({
                type: "document-preview",
                message: "正在分享文档文件"
            }) : e.size > i ? Promise.reject({
                type: "document-preview",
                message: "文件大小超过预览限制，请保存到微云后查看"
            }) : (wx.showLoading(), this.loadDownloadURL(e).then(function(e) {
                return new Promise(function(o, i) {
                    var t = (e = e.replace(/^http:\/\//, "https://")).split(".").pop();
                    t = t ? t.toLowerCase() : "docx", wx.downloadFile({
                        url: e,
                        success: function(e) {
                            var n = e.tempFilePath;
                            wx.openDocument({
                                filePath: n,
                                fileType: t,
                                success: function() {
                                    wx.hideLoading(), o();
                                },
                                fail: function(e) {
                                    wx.hideLoading(), i(a(e));
                                }
                            });
                        },
                        fail: function(e) {
                            n.log("[share page]: fail, previewService.document"), n.log("more info: " + e.message), 
                            n.write(), i(a(e));
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                });
            }));
        }
    } ]), l;
}();

module.exports = s;