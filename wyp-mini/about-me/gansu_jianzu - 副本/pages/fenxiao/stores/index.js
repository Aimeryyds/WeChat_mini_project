var t = require("../../../network/api.js"), o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/util.js")), e = require("../../../dist/index"), a = o.default.registComp({}, e.Toast, {
    onLoad: function(t) {
        var o = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: o
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryStores();
    },
    queryStores: function() {
        var o = this;
        (0, t.queryFenxiaoStores)({
            pageSize: 9999
        }).then(function(t) {
            wx.hideLoading(), o.setData({
                stores: t.data.data
            });
        }).catch(function(t) {
            console.log(t), wx.hideLoading();
        });
    },
    hideQrDialog: function(t) {
        this.setData({
            showDialog: !1,
            downloadStatus: 0
        });
    },
    showQrDialog: function(o) {
        var a = this;
        wx.showLoading({
            title: "请稍后"
        });
        var s = o.currentTarget.dataset.store;
        (0, t.queryFenxiaoStoreQr)({
            storeId: s.id
        }).then(function(t) {
            wx.hideLoading(), a.setData({
                currentStore: t.data,
                showDialog: !0,
                downloadStatus: 0
            });
        }).catch(function(t) {
            wx.hideLoading(), e.Toast.showZanToast.call(a, "网络连接错误");
        });
    },
    handleTapQr: function(t) {
        this.qrAuth();
    },
    qrAuth: function() {
        var t = this;
        wx.getSetting({
            success: function(o) {
                o.authSetting["scope.writePhotosAlbum"] ? t.downloadQr() : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(o) {
                        console.log("success", o), t.downloadQr();
                    },
                    fail: function(o) {
                        o.errCode && wx.openSetting({
                            success: function(o) {
                                t.qrAuth();
                            }
                        });
                    }
                });
            }
        });
    },
    downloadQr: function() {
        var t = this, o = this.data.currentStore;
        t.setData({
            downloadStatus: 1
        }), wx.downloadFile({
            url: o.downloadUrl,
            header: {
                "x-comp-token": getApp().globalData.token || "",
                accesstoken: getApp().globalData.accessToken || ""
            },
            success: function(o) {
                console.log(o), 200 === o.statusCode && wx.saveImageToPhotosAlbum({
                    filePath: o.tempFilePath,
                    success: function(o) {
                        t.setData({
                            downloadStatus: 2
                        });
                    }
                });
            }
        });
    }
});

Page(a);