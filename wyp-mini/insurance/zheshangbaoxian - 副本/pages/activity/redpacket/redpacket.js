var a = require("../../../utils/wxml2canvas"), e = getApp();

Page({
    data: {
        time: 108e6,
        timeData: {},
        showOverlay: !1,
        shareImage: ""
    },
    onLoad: function() {},
    drawCanvas: function() {
        a("#wrapper", ".draw", "canvas-map").then(function(a) {});
    },
    createImage: function(a) {
        var e = this;
        this.createShareImage(function() {
            e.onClickShow();
        });
    },
    createShareImage: function(a) {
        var e = this;
        wx.showLoading({
            title: "加载中..."
        });
        var t = wx.createCanvasContext("myCanvas", e);
        wx.getImageInfo({
            src: "/assets/images/share_img.jpg",
            success: function(n) {
                var s = n.width, i = n.height, o = n.path;
                e.setData({
                    canvasHeight: i,
                    canvasWidth: s
                }), t.drawImage("/" + o, 0, 0, s, i), e.getQcode({
                    access_token: "32_Aw5NWJw4AHQx3dQALTmYGodX3iXS84FfKSiyVQrR4e1X6I4u3b7j1CbcbfD7xyeFbRwWfAz9ldSJ1MShT1SmgBNC4a446Xe_eZGDJucxM5e6sLga2Hhe58zdR3aPYN-okVMc__0qe5bi5nyTKCHeAAADVA",
                    data: {
                        scene: "a=12&b=www",
                        page: "pages/index/index"
                    },
                    success: function(n) {
                        t.drawImage(n, 150, i - 150, 100, 100), t.draw(), wx.showLoading({
                            title: "正在努力生成海报..."
                        }), setTimeout(function() {
                            wx.canvasToTempFilePath({
                                canvasId: "myCanvas",
                                success: function(t) {
                                    var n = t.tempFilePath;
                                    console.log("canvasToTempFilePath 合成图片成功:", n), wx.hideLoading(), e.setData({
                                        shareImage: n
                                    }, function() {
                                        a && a();
                                    });
                                },
                                fail: function(a) {}
                            });
                        }, 1500);
                    }
                });
            }
        });
    },
    getQcode: function(a) {
        e.$http({
            baseUrl: "https://api.weixin.qq.com",
            method: "POST",
            responseType: "arraybuffer",
            url: "/wxa/getwxacodeunlimit?access_token=" + a.access_token,
            data: a.data
        }).then(function(e) {
            var t = new Uint8Array(e), n = wx.arrayBufferToBase64(t);
            a.success && a.success("data:image/png;base64," + n);
        }).catch(function(a) {});
    },
    onClickShow: function() {
        this.setData({
            showOverlay: !0
        });
    },
    onClickHide: function() {
        this.setData({
            showOverlay: !1
        });
    },
    onCountDownChange: function(a) {
        this.setData({
            timeData: a.detail
        });
    },
    transformArrayBufferToBase64: function(a) {
        for (var e = "", t = new Uint8Array(a), n = t.byteLength, s = 0; s < n; s++) e += String.fromCharCode(t[s]);
        return window.btoa(e);
    }
});