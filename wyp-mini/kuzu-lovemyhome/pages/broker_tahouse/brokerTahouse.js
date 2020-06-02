var t = getApp(), a = require("../../sdk/dingxiang.js");

Page({
    data: {
        brokerId: "",
        cityId: "",
        more: ""
    },
    onLoad: function(e) {
        var o = this;
        new a({
            appId: t.globalData.dxAppId
        }, function(t, a) {
            t ? console.log(t) : (o.setData({
                dxDeviceId: a
            }), o.setData({
                cityId: e.cityId,
                brokerId: e.brokerId,
                listP: e.listP,
                more: e.more
            }), o.getData(e));
        });
    },
    getData: function() {
        var a = this, e = "exchange", o = t.globalData.url_host, i = {
            brokerid: a.data.brokerId,
            more: a.data.more
        };
        if (console.log(a.data.brokerId), 1 == a.data.listP) {
            r = o + "/" + (e = "rent") + "/" + a.data.cityId + "/v1/webhouselist";
            console.log("租房"), wx.setNavigationBarTitle({
                title: "Ta的租房"
            });
        }
        if (2 == a.data.listP) {
            r = o + "/" + (e = "exchange") + "/" + a.data.cityId + "/v1/webhouselist";
            console.log("二手房"), wx.setNavigationBarTitle({
                title: "Ta的二手房"
            });
        }
        if (3 == a.data.listP) {
            var r = o + "/estate/" + a.data.cityId + "/listbybroker";
            console.log("新房"), wx.setNavigationBarTitle({
                title: "Ta的新房"
            });
        }
        wx.request({
            url: r,
            data: i,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                200 == t.data.status && (console.log(t.data), a.setData({
                    taData: t.data.data
                }));
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    toSaleDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + a + "&cityId=" + this.data.cityId + "&brokerId=" + this.data.brokerId + "&dianpu=1"
        });
    },
    toRentDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        console.log(a), wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + a + "&cityId=" + this.data.cityId + "&brokerId=" + this.data.brokerId + "&dianpu=1"
        });
    },
    toNewDetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.propertytypeid;
        console.log(a), wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + a + "&propertytypeid=" + e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    avatarError: function(t) {
        var a = this, e = {};
        e["brokerlist_data[" + Number(t.target.dataset.imgindex) + "].brokerimg"] = "/img/resources/default_broker_404.png", 
        a.setData(e);
    }
});