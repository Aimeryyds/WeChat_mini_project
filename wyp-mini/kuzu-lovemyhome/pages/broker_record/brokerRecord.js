var t = getApp(), e = require("../../sdk/dingxiang.js");

Page({
    data: {
        loading: !0,
        resultParm: 1,
        brokerId: "",
        cityId: "",
        citycode: ""
    },
    onLoad: function(a) {
        var o = this;
        new e({
            appId: t.globalData.dxAppId
        }, function(t, e) {
            if (t) console.log(t); else {
                o.setData({
                    dxDeviceId: e
                });
                var n = o;
                n.setData({
                    cityId: a.cityId,
                    brokerId: a.brokerId,
                    citycode: a.citycode,
                    resultParm: a.resultParm
                }), n.getData(a);
            }
        });
    },
    getData: function() {
        var e = this, a = t.globalData.url_host, o = "exchangedealresult";
        console.log(e.data.resultParm), 1 == e.data.resultParm && (o = "exchangedealresult", 
        console.log("买卖"), wx.setNavigationBarTitle({
            title: "近一年买卖成交记录"
        })), 2 == e.data.resultParm && (o = "rentdealresult", console.log("租赁"), wx.setNavigationBarTitle({
            title: "近一年租赁成交记录"
        }));
        var n = {
            brokerid: e.data.brokerId
        };
        wx.request({
            url: a + "/broker/" + e.data.cityId + "/v1/" + o,
            data: n,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                200 == t.data.status && (console.log(t.data), e.setData({
                    brokerRecordData: t.data.data,
                    loading: !1
                }));
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
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