var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }
    return t;
}, e = (function(t) {
    t && t.__esModule;
}(require("../../../netdisk_utils/download.js")), getApp().globalData);

Component({
    properties: {
        isShow: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        shareImageDefault: "https://staticwx.cdn.bcebos.com/mini-program/images/default_map.png",
        showBtn: !1,
        isStory: !1
    },
    ready: function() {
        var t = e.systemInfo.statusBarHeight;
        this.setData({
            statusHeight: t
        });
    },
    methods: {
        show: function(e) {
            wx.log.share.friendsPoster.send(), this.setData(t({}, e, {
                isShow: !0
            })), this.makePoster();
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        makePoster: function() {
            var t = wx.getSystemInfoSync(), e = t.screenHeight, a = t.screenWidth, o = t.pixelRatio;
            this.setData({
                screenHeight: e,
                screenWidth: a,
                pixelRatio: o,
                showBtn: !1
            });
            this.data.statusHeight;
            this.data.shareImage.includes("https") || this.setData({
                shareImage: this.data.shareImage.replace("http", "https")
            });
            var s = this.data.isStory ? "3" : "", i = this.data.title;
            i.length > 24 && (i = i.replace(i.substr(6, i.length - 16), "..."));
            var n = {
                width: a,
                height: e,
                pixelRatio: o,
                bgColor: "#FFFFFF",
                borderRadius: 10,
                items: [ {
                    type: "text",
                    content: i || "",
                    top: 25,
                    left: a / 2 - 100,
                    color: "#212121",
                    fontSize: 20,
                    textAlign: "center",
                    bolder: !0,
                    breakWord: !0,
                    width: 280,
                    MaxLineNumber: 1
                }, {
                    type: "text",
                    content: this.data.name ? this.data.name + "的分享" : "",
                    top: 50,
                    left: 200,
                    color: "#9e9e9e",
                    fontSize: 14,
                    textAlign: "center",
                    breakWord: !0,
                    width: 200,
                    MaxLineNumber: 1
                }, {
                    type: "image",
                    width: a,
                    height: e - 270,
                    top: 84,
                    left: 0,
                    sx: 0,
                    sy: 0,
                    sHeight: e - 260,
                    url: this.data.shareImage || this.data.shareImageDefault
                }, {
                    type: "image",
                    width: 120,
                    height: 120,
                    top: e - 164,
                    left: a / 2 - 60,
                    url: "https://pan.baidu.com/api/wechat/qrcode?shorturl=" + this.data.surl + "&source=6&pwd=" + this.data.pwd + "&imagetype=" + s + "&width=200"
                }, {
                    type: "text",
                    content: "扫一扫或长按查看分享",
                    top: e - 20 - 14,
                    left: 570 / this.data.pixelRatio / 2 - 10,
                    color: "#BDBDBD",
                    fontSize: 14,
                    textAlign: "center",
                    width: 200
                } ]
            };
            this.setData({
                canvasData: n
            });
        },
        eventSave: function(t) {
            this.showDialog = this.selectComponent("#showDialog");
            var e = this;
            wx.wetoast({
                content: "下载中...",
                loading: !0,
                duration: !0
            }), wx.saveImageToPhotosAlbum({
                filePath: t,
                success: function(t) {
                    wx.wetoast({
                        content: "已保存至手机相册",
                        duration: 2e3
                    });
                },
                fail: function(t) {
                    wx.toasthide(), "saveImageToPhotosAlbum:fail auth deny" === t.errMsg || "saveImageToPhotosAlbum:fail:auth denied" === t.errMsg ? e.isSetting() : "saveImageToPhotosAlbum:fail system deny" === t.errMsg || "saveImageToPhotosAlbum:fail:system denied" === t.errMsg || "saveImageToPhotosAlbum:fail authorize no response" === t.errMsg || "saveImageToPhotosAlbum:fail:authorize no response" === t.errMsg ? wx.showDialog({
                        title: "保存失败提示",
                        content: "请您设置允许微信【访问图片】后再尝试下载",
                        confirm: function() {
                            wx.openSetting({});
                        },
                        cancel: function() {
                            e.downloadFail();
                        }
                    }) : e.downloadFail();
                }
            });
        },
        eventGetImage: function(t) {
            var e = this, a = t.detail, o = a.tempFilePath;
            "canvasdrawer:ok" === a.errMsg ? (this.setData({
                shareImage: o,
                showBtn: !0
            }), wx.toasthide(), this.eventSave(o)) : setTimeout(function() {
                wx.toasthide(), e.setData({
                    isShow: !1
                }), wx.wetoast({
                    content: "生成卡片失败",
                    duration: 2e3
                });
            }, 1200);
        },
        cancel: function(t) {
            t.target.id || this.setData({
                isShow: !1
            });
        },
        isSetting: function() {
            var t = this;
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.writePhotosAlbum"] || wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                            console.log("授权成功");
                        },
                        fail: function() {
                            wx.showDialog({
                                title: "保存失败提示",
                                content: "请您设置允许【保存到相册】后再尝试下载",
                                confirm: function() {
                                    wx.openSetting({}), t.setData({
                                        isShow: !1
                                    });
                                },
                                cancel: function() {
                                    t.downloadFail();
                                }
                            });
                        }
                    });
                }
            });
        },
        downloadFail: function() {
            wx.wetoast({
                content: "保存失败",
                duration: 2e3
            }), this.setData({
                isShow: !1
            });
        }
    }
});