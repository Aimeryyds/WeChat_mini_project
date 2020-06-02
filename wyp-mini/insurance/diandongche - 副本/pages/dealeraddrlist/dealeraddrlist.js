var t = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        id: "",
        addressList: []
    },
    onLoad: function(a) {
        var s = a.id;
        this.setData({
            id: s
        });
        var r = this;
        t.Requests_json(e.globalData.insuranceUrl + "/ebike/" + s + "/findAddressList", {}).then(function(t) {
            "0" == t.code && r.setData({
                addressList: t.result.addressList
            });
        });
    },
    goDealerAddr: function(e) {
        var a = wx.getStorageSync("userToken");
        if (null == a || "" == a) t.GetUserToken(); else {
            var s = e.currentTarget.dataset.value;
            null != s && "" != s || (s = {
                addressId: "",
                contacts: "",
                address: "",
                telephone: "",
                state: "0"
            });
            var r = JSON.stringify(s), i = this.data.id;
            wx.redirectTo({
                url: "../dealeraddr/dealeraddr?departmentId=" + i + "&addresslist=" + r
            });
        }
    },
    deleteAddress: function(a) {
        var s = this, r = a.currentTarget.dataset.value;
        t.Requests_json(e.globalData.insuranceUrl + "/ebike/" + r + "/deleteAddress", {}).then(function(e) {
            if ("0" == e.code) {
                var a = s.data.id;
                wx.redirectTo({
                    url: "../dealeraddrlist/dealeraddrlist?id=" + a
                });
            } else t.AlertError(e.msg);
        });
    },
    ListTouchStart: function(t) {
        this.setData({
            ListTouchStart: t.touches[0].pageX
        });
    },
    ListTouchMove: function(t) {
        this.setData({
            ListTouchDirection: t.touches[0].pageX - this.data.ListTouchStart > 0 ? "right" : "left"
        });
    },
    ListTouchEnd: function(t) {
        "left" == this.data.ListTouchDirection ? this.setData({
            modalName: t.currentTarget.dataset.target
        }) : this.setData({
            modalName: null
        }), this.setData({
            ListTouchDirection: null
        });
    }
});