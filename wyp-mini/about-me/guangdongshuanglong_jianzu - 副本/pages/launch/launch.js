var t = require("../../utils/net.js"), a = require("../../utils/util.js"), n = getApp();

Page({
    data: {
        imgurl: ""
    },
    onLoad: function(t) {
        this.request(), setTimeout(function() {
            wx.switchTab({
                url: "../index/index"
            });
        }, 3e3);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    request: function() {
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var i = this;
        wx.request({
            url: t.Address.GET_MODEl_IMG,
            data: {
                appid: n.globalData.appid
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (1 == t.data.isok) {
                    var a = t.data.data;
                    if (t.data.data.length > 0) {
                        var n = a.find(function(t) {
                            return "nparam" == t.Param;
                        }), e = a.find(function(t) {
                            return "img" == t.Param;
                        });
                        void 0 != e && (i.data.imgurl = e.Value), i.setData(i.data), null != n && void 0 != n && wx.setNavigationBarTitle({
                            title: n.Value
                        });
                    }
                }
            },
            fail: function(t) {
                console.log("获取首页出错"), console.log(t);
            },
            complete: function() {
                wx.stopPullDownRefresh(), a.hideNavigationBarLoading();
            }
        });
    }
});