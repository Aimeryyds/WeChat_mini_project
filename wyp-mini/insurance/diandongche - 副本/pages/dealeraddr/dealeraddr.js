var e = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        addressId: "",
        departmentId: "",
        contacts: "",
        address: "",
        telephone: "",
        state: "1"
    },
    onLoad: function(e) {
        var t = e.departmentId, a = this, d = JSON.parse(e.addresslist);
        console.log(d), a.setData({
            addressId: d.addressId,
            departmentId: t,
            contacts: d.contacts,
            address: d.address,
            telephone: d.telephone,
            state: d.state
        });
    },
    operationAddress: function(a) {
        var d = this, r = this, s = r.data;
        console.info("params=" + r.data.state);
        var n = s.departmentId, i = wx.getStorageSync("userToken");
        e.Requests_json(t.globalData.insuranceUrl + "/ebike/" + i + "/" + n + "/operationAddress", s).then(function(t) {
            if ("0" == t.code) {
                var a = d.data.departmentId;
                wx.redirectTo({
                    url: "../dealeraddrlist/dealeraddrlist?id=" + a
                });
            } else e.AlertError(t.msg);
        });
    },
    deleteAddress: function(a) {
        var d = this, r = this.data.addressId;
        e.Requests_json(t.globalData.insuranceUrl + "/ebike/" + r + "/deleteAddress", {}).then(function(t) {
            if ("0" == t.code) {
                var a = d.data.departmentId;
                wx.redirectTo({
                    url: "../dealeraddrlist/dealeraddrlist?id=" + a
                });
            } else e.AlertError(t.msg);
        });
    },
    goBackDealerlist: function() {
        var e = this.data.departmentId;
        wx.redirectTo({
            url: "../dealeraddrlist/dealeraddrlist?id=" + e
        });
    },
    getInputValue: function(e) {
        var t = e.currentTarget.id, a = e.detail.value, d = this.data;
        d[t] = a, this.setData(d);
    },
    changeState: function(e) {
        var t = "1" == this.data.state ? "0" : "1";
        this.setData({
            state: t
        });
    }
});