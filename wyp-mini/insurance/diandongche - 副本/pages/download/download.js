require("../../58268180480303CF3E40E9872402F6C0.js");

var o = getApp();

Page({
    data: {
        url: ""
    },
    onLanch: function() {},
    onLoad: function(n) {
        console.log(n);
        var e = decodeURIComponent(n.url);
        console.log(o.globalData.deviceInfo), console.log(e), wx.getSavedFileList({
            success: function(o) {
                o.fileList.forEach(function(o, n) {
                    wx.removeSavedFile({
                        filePath: o.filePath
                    });
                });
            }
        }), console.log("downloadFile"), wx.downloadFile({
            url: e,
            header: {},
            success: function(o) {
                var n = o.tempFilePath;
                console.log("openDocument"), wx.openDocument({
                    filePath: n,
                    success: function(o) {
                        console.log("打开文档成功");
                    }
                }), wx.saveFile({
                    tempFilePath: n,
                    success: function(o) {
                        var n = o.savedFilePath;
                        console.log(n);
                    },
                    fail: function(o) {
                        console.log("保存失败：", o);
                    }
                });
            },
            fail: function(o) {
                console.log("下载失败：", o);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});