function t(t, e) {
    wx.saveImageToPhotosAlbum({
        filePath: e,
        success: function() {
            t.setData({
                "sharePoster.saveHidden": !1
            });
        },
        fail: function(e) {
            wx.showToast({
                icon: "none",
                title: "保存失败"
            }), t.onPosterClose && t.onPosterClose();
        }
    });
}

function e(e, i) {
    wx.getSetting({
        success: function(l) {
            l.authSetting["scope.record"] ? t(e, i) : wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    t(e, i);
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

function i(t) {
    var i = t;
    wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 1115,
        height: 1984,
        destWidth: 1115,
        destHeight: 1984,
        fileType: "jpg",
        canvasId: s,
        success: function(t) {
            console.log("图片生成", t.tempFilePath);
            var l = t.tempFilePath;
            e(i, l);
        }
    });
}

function l(t) {
    this.context = t, this.init();
}

getApp(), require("../../utils/stat");

var s = "forWechat";

l.prototype.init = function() {
    var t = this.context;
    t.setData({
        "sharePoster.needGotoSettings": !1
    }), t.onPosterClose = function() {
        wx.hideLoading(), t.setData({
            vhidden: !1,
            "sharePoster.hidden": !0
        });
    }, t.onGotoSettings = function() {
        wx.openSetting({
            success: function(e) {
                e.authSetting["scope.writePhotosAlbum"] ? (i(t), t.setData({
                    "sharePoster.needGotoSettings": !1
                })) : t.onPosterClose();
            }
        });
    }, t.onCancelGotoSettings = function() {
        t.onPosterClose();
    };
}, l.prototype.drawSharePicture = function(t) {
    var e = this.context, l = function(t, l) {
        var o = wx.createCanvasContext(s);
        if (o.setFillStyle("#ffffff"), o.fillRect(0, 0, 285, 506), o.draw(), o.scale(.92, .92), 
        o.drawImage("../../images/canvas-poster-bg-b.png", 0, 0, 285, 506), o.setFontSize(10), 
        o.setFillStyle("#818181"), o.fillText("更新于" + l, 15, 22), t[0]) {
            var n = t[0];
            o.drawImage(n.path, 210, 90, 60, 60), o.setFontSize(14), o.setFillStyle("#333333"), 
            o.fillText(n.title[0], 38, 110), o.fillText(n.title[1], 15, 130), o.setFillStyle("#F57258"), 
            o.fillRect(14, 99, 21, 12), o.setFillStyle("#ffffff"), o.setFontSize(7), o.fillText("TOP1", 16, 108);
        }
        if (t[1]) {
            var a = t[1];
            o.drawImage(a.path, 210, 160, 60, 60), o.setFontSize(14), o.setFillStyle("#333333"), 
            o.fillText(a.title[0], 38, 180), o.fillText(a.title[1], 15, 200), o.setFillStyle("#F57258"), 
            o.fillRect(14, 169, 21, 12), o.setFillStyle("#ffffff"), o.setFontSize(7), o.fillText("TOP2", 16, 178);
        }
        if (t[2]) {
            var f = t[2];
            o.setFontSize(14), o.setFillStyle("#333333"), o.fillText("3." + f.title[0], 15, 250), 
            o.fillText(f.title[1], 15, 270);
        }
        if (t[3]) {
            var c = t[3];
            o.setFontSize(14), o.setFillStyle("#333333"), o.fillText("4." + c.title[0], 15, 310), 
            o.fillText(c.title[1], 15, 330);
        }
        if (t[4]) {
            var r = t[4];
            o.setFontSize(14), o.setFillStyle("#333333"), o.fillText("5." + r.title[0], 15, 370), 
            o.fillText(r.title[1], 15, 390);
        }
        o.draw(!0, function() {
            i(e), wx.hideLoading();
        });
    }, o = [];
    t.newsList.forEach(function(t, e) {
        if (e < 2) {
            var i = t.title.slice(0, 11), l = t.title.slice(11, 22);
            l += t.title.length > 22 ? "..." : "", t.pic = t.pic.replace("http://", "https://"), 
            wx.getImageInfo({
                src: t.pic,
                success: function(t) {
                    o[e] = {
                        path: t.path,
                        title: [ i, l ]
                    };
                }
            });
        } else {
            var s = t.title.slice(0, 17), n = t.title.slice(17, 36);
            n += t.title.length > 36 ? "..." : "", o[e] = {
                path: "",
                title: [ s, n ]
            };
        }
    }), wx.showLoading({
        title: "加载中"
    }), e.setData({
        "sharePoster.saveHidden": !0
    }), setTimeout(function() {
        l(o, t.updateTime);
    }, 1e3);
}, module.exports = l;