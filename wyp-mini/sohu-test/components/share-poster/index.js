function e(e) {
    return e.newsIds ? function(e) {
        return new Promise(function(t, o) {
            var n = e.newsIds.join(",");
            wx.downloadFile({
                url: c.mutiNewsIdsWechatAppCodeUrl + "?openId=" + a.globalData.usrKey.openid + "&newsIds=" + n + "&timestamp=" + e.timestamp,
                success: function(e) {
                    t(e.tempFilePath);
                }
            });
        });
    }(e) : e.newsId ? function(e) {
        return new Promise(function(t, o) {
            wx.downloadFile({
                url: c.singleWechatAppCodeUrl + "?openId=" + a.globalData.usrKey.openid + "&latitude=" + a.globalData.usrLoc.latitude + "&longitude=" + a.globalData.usrLoc.longitude + "&newsId=" + e.newsId + "&newsType=" + e.newsType + "&u=" + a.globalData.u + "&from=" + e.from,
                success: function(e) {
                    t(e.tempFilePath);
                }
            });
        });
    }(e) : void 0;
}

function t(e, t) {
    wx.saveImageToPhotosAlbum({
        filePath: t,
        success: function() {
            e.setData({
                "sharePoster.saveHidden": !1
            });
        },
        fail: function(t) {
            wx.showToast({
                icon: "none",
                title: "保存失败"
            }), e.onSharePosterClose && e.onSharePosterClose();
        }
    });
}

function o(e, o) {
    wx.getSetting({
        success: function(n) {
            n.authSetting["scope.record"] ? t(e, o) : wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    t(e, o);
                },
                fail: function() {
                    e.setData({
                        "sharePoster.needGotoSettings": !0
                    });
                }
            });
        }
    });
}

function n(e) {
    var t = e;
    wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 1115,
        height: 1800,
        destWidth: 1115,
        destHeight: 1800,
        fileType: "jpg",
        canvasId: r,
        success: function(e) {
            console.log("图片生成", e.tempFilePath);
            var n = e.tempFilePath;
            o(t, n);
        }
    });
}

function s(e) {
    this.context = e, this.init();
}

var a = getApp(), i = require("../../utils/stat"), r = "forWechat", c = {
    singleWechatAppCodeUrl: a.globalData.baseUrl + "api/applet/share/getWechatAppCode.go",
    mutiNewsIdsWechatAppCodeUrl: a.globalData.baseUrl + "api/applet/share/hotChannelShare.go"
};

s.prototype.init = function() {
    var e = this.context;
    e.setData({
        "sharePoster.needGotoSettings": !1
    }), e.onSharePosterClose = function() {
        wx.hideLoading(), e.setData({
            vhidden: !1,
            "sharePoster.hidden": !0
        });
    }, e.onGotoSettings = function() {
        wx.openSetting({
            success: function(t) {
                t.authSetting["scope.writePhotosAlbum"] ? (n(e), e.setData({
                    "sharePoster.needGotoSettings": !1
                })) : e.onSharePosterClose();
            }
        });
    }, e.onCancelGotoSettings = function() {
        e.onSharePosterClose();
    };
}, s.prototype.drawSharePicture = function(t) {
    var o = this.context, s = wx.createCanvasContext(r);
    s.setFillStyle("#ffffff"), s.fillRect(0, 0, 285, 460), s.draw(), wx.showLoading({
        title: "加载中"
    }), o.setData({
        "sharePoster.saveHidden": !0
    }), e(t).then(function(e) {
        s.drawImage(e, 0, 0, 285, 460), s.setFontSize(50), s.draw(!0, function() {}), wx.hideLoading();
    }).then(function() {
        i.h5({
            objType: "miniapp_clk_savepic",
            statType: "clk"
        }), n(o);
    });
}, module.exports = s;