var a = require("../../utils/aesKey.js"), e = getApp(), o = (require("../../utils/util.js"), 
require("../../utils/aes.js"));

Page({
    data: {
        policyDetail: null,
        polInsuredListNames: "",
        baseUrl: e.globalData.baseUrl,
        state: "",
        showVanDialog: !1,
        app_download: e.globalData.baseUrl + "/wxresource/home/app_download.png"
    },
    queryPolicyInfoByPolNo: function(t, l) {
        var n = this, r = (0, a.getChannelKey)();
        wx.request({
            url: e.globalData.baseUrl + "/miniapp/queryPolicyInfoByPolNo.do",
            data: {
                polNo: o.encrypt(t + "", r),
                certno: o.encrypt(l + "", r)
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var e = a.data.data;
                if ("00" == a.data.returnCode && Array.isArray(e.polInsuredList)) {
                    var o = e.polInsuredList.map(function(a) {
                        return a.customerName;
                    }).join("、");
                    n.setData({
                        policyDetail: e,
                        polInsuredListNames: o
                    });
                }
            },
            fail: function() {},
            complete: function() {}
        });
    },
    electronicPolicy: function() {
        this.setData({
            showVanDialog: !0
        });
    },
    onLoad: function(a) {
        console.log(a);
        var e = a.polno || "", o = a.certno || "", t = a.state || "";
        this.setData({
            state: t
        }), this.queryPolicyInfoByPolNo(e, o);
    }
});