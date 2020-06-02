var a = getApp(), e = require("../../sdk/dingxiang.js"), t = require("../../utils/gio-minp/index.js").default, d = require("../../sdk/gioConfig.js").default;

t("setConfig", d), Page({
    data: {
        loading: !0,
        detailId: "",
        cityId: "",
        isHouse: ""
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
                isHouse: t.exchangeAndRent,
                brokerId: t.brokerid,
                sharetype: t.sharetype
            }), d.getData(t), console.log(t));
        });
    },
    getData: function() {
        var e = this, t = a.globalData.url_host;
        if (console.log(e.data.detailId), console.log(e.data.cityId), 1 == e.data.sharetype) {
            console.log("分享");
            d = {
                hid: e.data.detailId,
                brokerid: e.data.brokerId,
                from: "applet"
            };
        } else var d = {
            hid: e.data.detailId
        };
        console.log("houseid--", d), wx.request({
            url: t + "/" + e.data.isHouse + "/" + e.data.cityId + "/v1/allinfo",
            data: d,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    var t = a.data.data.houseinfo.img3durl + "&equipment=wap";
                    e.setData({
                        detail_data: a.data.data,
                        hrefsrc: t,
                        loading: !1
                    });
                }
            }
        });
    },
    onReady: function() {
        t("setPage", {
            pagename: "房源详情页",
            businessline_pvar: "二手房",
            pagetype_pvar: "VR详情页",
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