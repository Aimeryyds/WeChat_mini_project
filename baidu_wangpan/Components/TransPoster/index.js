var t = wx.ENV.staticPath, e = wx.ENV.hostPanName;

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        surl: {
            type: String,
            value: ""
        }
    },
    data: {
        canvasData: {},
        transBgImg: t + "/trans-assistant-share-v2.png",
        showTip: !1
    },
    attached: function() {
        this.init();
    },
    methods: {
        rpx2px: function(t, e) {
            return t / (750 / e);
        },
        init: function() {
            var t = this, i = wx.getSystemInfoSync(), n = i.windowWidth, o = (i.windowHeight, 
            function(e) {
                return t.rpx2px(e * (750 / 570), n);
            }), a = this.data, s = a.title, r = a.transBgImg, h = a.surl, c = {
                width: n,
                height: o(936),
                pixelRatio: 1,
                bgColor: "#FFFFFF",
                borderRadius: o(20),
                items: [ {
                    type: "image",
                    width: o(570),
                    height: o(488),
                    sx: 0,
                    sy: 0,
                    url: r
                }, {
                    type: "text",
                    content: s ? "『 " + s + " 』" : "",
                    top: o(424),
                    left: o(50),
                    color: "#069CFF",
                    fontSize: o(32),
                    textAlign: "center",
                    bolder: !0,
                    breakWord: !0,
                    width: o(470),
                    MaxLineNumber: 1
                }, {
                    type: "line",
                    start: [ o(59), o(488) ],
                    end: [ o(512), o(488) ],
                    color: "#DFE1E6",
                    lineWidth: o(1)
                }, {
                    type: "image",
                    width: o(238),
                    height: o(238),
                    top: o(568),
                    left: o(166),
                    url: e + "api/wechat/qrcode?width=200&path=pages/netdisk_transAssistant/index&scene=" + h + "&source_from=nd_wechat"
                }, {
                    type: "text",
                    content: "扫一扫或长按查看分享",
                    top: o(826),
                    left: o(175),
                    color: "#BDBDBD",
                    fontSize: o(22),
                    textAlign: "center",
                    width: o(220)
                } ]
            };
            this.setData({
                canvasData: c
            });
        },
        hide: function() {
            this.triggerEvent("hide");
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
                                    wx.openSetting({}), t.hide();
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
        eventSave: function(t) {
            var e = this;
            wx.wetoast({
                content: "生成中...",
                loading: !0,
                duration: !0
            }), wx.saveImageToPhotosAlbum({
                filePath: t,
                success: function(t) {
                    wx.wetoast({
                        content: "已保存至手机相册",
                        duration: 2e3
                    }), e.setData({
                        showTip: !0
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
            var e = this, i = t.detail, n = i.tempFilePath;
            "canvasdrawer:ok" === i.errMsg ? (this.setData({
                shareImage: n,
                showBtn: !0
            }), wx.toasthide(), this.eventSave(n)) : setTimeout(function() {
                wx.toasthide(), e.hide(), wx.wetoast({
                    content: "生成卡片失败",
                    duration: 2e3
                });
            }, 1200);
        },
        downloadFail: function() {
            wx.wetoast({
                content: "保存失败",
                duration: 2e3
            }), this.hide();
        }
    }
});