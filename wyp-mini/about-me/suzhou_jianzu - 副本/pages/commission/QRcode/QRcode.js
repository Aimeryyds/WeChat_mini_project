var e = require("../../../utils/server"), t = wx.getStorageSync("utoken");

getApp();

Page({
    data: {
        loading: !0,
        img: "",
        name: "",
        data: ""
    },
    onLoad: function(a) {
        t = wx.getStorageSync("utoken"), console.log(a);
        var o = this;
        if (a.mid) {
            o.setData({
                mid: a.mid
            });
            wx.setStorageSync("mid", a.mid), wx.getStorageSync("mid");
        }
        e.sendRequest({
            url: "?r=wxapp.commission.qrcode&utoken=" + t + "&mid=" + a.mid,
            showToast: !1,
            method: "POST",
            data: "",
            success: function(e) {
                console.log(e);
                var t = e.data.result;
                o.setData({
                    loading: !1,
                    data: t
                });
            },
            fail: function(e) {
                console.log(e);
            }
        }), o.setData({
            mid: a.mid
        });
    },
    previewImage: function(e) {
        var t = [];
        t.push(e.currentTarget.dataset.src), wx.previewImage({
            urls: t
        });
    },
    onShareAppMessage: function() {
        return {
            title: "分享分销",
            path: "/pages/commission/QRcode/QRcode?mid=" + this.data.mid
        };
    }
});