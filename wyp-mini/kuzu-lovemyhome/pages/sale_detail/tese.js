var a = getApp(), e = require("../../sdk/dingxiang.js"), t = require("../../utils/gio-minp/index.js").default, d = require("../../sdk/gioConfig.js").default;

t("setConfig", d), Page({
    data: {
        d_url: 1,
        loading: !0,
        detailId: "",
        cityId: ""
    },
    onLoad: function(t) {
        var d = this;
        new e({
            appId: a.globalData.dxAppId
        }, function(a, e) {
            a ? console.log(a) : (d.setData({
                dxDeviceId: e
            }), d.setData({
                detailId: t.houseId,
                cityId: t.cityId,
                d_url: t.detailUrl
            }), d.getData(t));
        });
    },
    getData: function() {
        var e = this, t = a.globalData.url_host, d = "exchange";
        console.log(e.data.detailId), console.log(e.data.cityId), console.log(e.data.d_url), 
        1 == e.data.d_url && (d = "exchange", console.log("二手房")), 2 == e.data.d_url && (d = "rent", 
        console.log("租房"));
        var o = {
            hid: e.data.detailId
        };
        wx.request({
            url: t + "/" + d + "/" + e.data.cityId + "/v1/allinfo",
            data: o,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                e.setData({
                    detail_data: a.data.data,
                    loading: !1
                });
            }
        });
    },
    onReady: function() {
        t("setPage", {
            pagename: "房源详情页",
            businessline_pvar: "二手房",
            pagetype_pvar: "房源特色查看更多页",
            houseid_pvar: this.data.detailId,
            vrtype: ""
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(a) {}
});