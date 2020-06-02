var t = require("../../../utils/gio-minp/index.js").default, e = require("../../../sdk/gioConfig.js").default;

t("setConfig", e), Page({
    data: {
        brokerData: ""
    },
    onLoad: function(t) {
        console.log(t), this.getBrokerList(t.estateid);
    },
    getBrokerList: function(t) {
        var e = this;
        wx.request({
            url: "https://appapi.5i5j.com/agency/list",
            method: "POST",
            data: {
                estateID: t
            },
            success: function(t) {
                console.log(t.data.data), e.setData({
                    brokerData: t.data.data
                });
            }
        });
    },
    givecall: function(e) {
        var a = e.currentTarget.dataset.tel, o = e.currentTarget.dataset.bid, r = e.currentTarget.dataset.teltype, n = e.currentTarget.dataset.index + 1;
        console.log("*************************************************************************************", n), 
        t("track", "telconsult", {
            module_var: r,
            iconlocation_var: n,
            agentid_var: o,
            telnum_var: a
        }), console.log(a), wx.makePhoneCall({
            phoneNumber: a
        });
    },
    imgloadError: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.sort, o = this.data.brokerData;
        "common" == a ? o.common[e].avatarsImageName = "/img/resources/default_broker_404.png" : "super" == a && (o.super.avatarsImageName = "/img/resources/default_broker_404.png"), 
        this.setData({
            brokerData: o
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