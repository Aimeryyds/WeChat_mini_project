var a = getApp(), t = require("../../sdk/dingxiang.js");

Page({
    data: {
        loading: !0,
        d_url: 1,
        detailId: "",
        cityId: ""
    },
    onLoad: function(e) {
        var o = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(a, t) {
            a ? console.log(a) : (o.setData({
                dxDeviceId: t
            }), o.setData({
                detailId: e.houseId,
                cityId: e.cityId,
                d_url: e.detailUrl
            }), o.getData(e));
        });
    },
    getData: function() {
        var t = this, e = a.globalData.url_host, o = "exchange";
        console.log(t.data.d_url), 1 == t.data.d_url && (o = "exchange", console.log("二手房")), 
        2 == t.data.d_url && (o = "rent", console.log("租房"));
        var d = {
            hid: t.data.detailId
        };
        wx.request({
            url: e + "/" + o + "/" + t.data.cityId + "/v1/allinfo",
            data: d,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                200 == a.data.status && t.setData({
                    detail_data: a.data.data,
                    loading: !1
                });
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(a) {}
});