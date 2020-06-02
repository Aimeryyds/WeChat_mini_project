var t = getApp(), a = require("../../sdk/dingxiang.js");

(0, require("../../utils/gio-minp/index.js").default)("setConfig", require("../../sdk/gioConfig.js").default);

var e = [], o = [];

Page({
    data: {
        loading: !0,
        brokerId: "",
        cityId: "",
        citycode: ""
    },
    onLoad: function(e) {
        var o = this;
        new a({
            appId: t.globalData.dxAppId
        }, function(t, a) {
            if (t) console.log(t); else {
                o.setData({
                    dxDeviceId: a
                });
                var i = o;
                i.setData({
                    cityId: e.cityId,
                    brokerId: e.brokerId,
                    citycode: e.citycode
                }), i.getData(e);
            }
        });
    },
    getData: function() {
        var a = this, i = t.globalData.url_host, d = {
            brokerid: a.data.brokerId
        };
        wx.request({
            url: i + "/broker/" + a.data.cityId + "/v1/brokershowlist",
            data: d,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (200 == t.data.status) {
                    console.log(t.data);
                    var i = "", d = "";
                    o = [];
                    for (l = 0; l < t.data.data.list.length; l++) {
                        var n = t.data.data.list[l].showdate.substring(0, 10), r = {
                            timeYears: i = n.substring(0, 4),
                            timeMous: d = n.substring(n.length - 5)
                        };
                        o.push(r);
                    }
                    var s = "", c = "";
                    e = [];
                    for (var l = 0; l < t.data.data.list.length; l++) if (void 0 != t.data.data.list[l].housetitle) {
                        var u = t.data.data.list[l].housetitle.split(" "), g = {
                            tagName: s = u[0],
                            tagTing: c = u[1]
                        };
                        e.push(g);
                    }
                    a.setData({
                        brokerDkData: t.data.data,
                        dkrecordArr: e,
                        dkTimeArr: o,
                        loading: !1
                    });
                }
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