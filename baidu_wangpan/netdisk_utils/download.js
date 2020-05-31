function o() {
    wx.getSetting({
        success: function(o) {
            o.authSetting["scope.writePhotosAlbum"] || wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    console.log("授权成功");
                },
                fail: function() {
                    wx.showDialog({
                        title: "保存失败提示",
                        content: "请您设置允许【保存到相册】后再尝试下载",
                        confirm: function() {
                            wx.openSetting({});
                        },
                        cancel: function() {
                            console.log("用户点击取消");
                        }
                    }), e = 0;
                }
            });
        }
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t) {
    ++e > 1 || (wx.wetoast({
        content: "下载中...",
        loading: !0,
        duration: !0
    }), wx.downloadFile({
        url: t,
        success: function(t) {
            wx.saveImageToPhotosAlbum({
                filePath: t.tempFilePath,
                success: function(o) {
                    wx.toasthide(), setTimeout(function() {
                        wx.wetoast({
                            content: "成功保存到本地",
                            duration: 2e3
                        }), e = 0;
                    }, 200);
                },
                fail: function(t) {
                    wx.toasthide(), "saveImageToPhotosAlbum:fail auth deny" === t.errMsg || "saveImageToPhotosAlbum:fail:auth denied" === t.errMsg ? o() : "saveImageToPhotosAlbum:fail system deny" === t.errMsg || "saveImageToPhotosAlbum:fail:system denied" === t.errMsg ? (wx.showDialog({
                        title: "保存失败提示",
                        content: "请您设置允许微信【访问图片】后再尝试下载",
                        confirm: function() {
                            wx.openSetting({});
                        },
                        cancel: function() {
                            console.log("用户点击取消");
                        }
                    }), e = 0) : (wx.wetoast({
                        content: "保存失败",
                        duration: 2e3
                    }), e = 0);
                },
                complete: function(o) {
                    console.log(o);
                }
            });
        }
    }));
};

var e = 0;