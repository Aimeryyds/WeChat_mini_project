var e = require("../../58268180480303CF3E40E9872402F6C0.js"), a = getApp();

Page({
    data: {
        departmentId: "",
        productName: "",
        name: "",
        phone: "",
        address: "",
        addressId: "",
        cardzm: a.globalData.staticUrl + "/cardzm.png",
        caseId: "",
        orderPrice: "0",
        checkbox: [],
        addressList: [],
        onloadModal: !0,
        loadModal: !1
    },
    showModal: function(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        });
    },
    hideModal: function(e) {
        this.setData({
            modalName: null
        });
    },
    onLoad: function(e) {
        var a = e.id;
        this.setData({
            departmentId: a
        }), this.findInsrcardCaseList(), this.findAddressList();
    },
    ChooseCheckbox: function(e) {
        for (var a = this, t = this.data.checkbox, s = e.currentTarget.dataset.value, r = 0; r < t.length; r++) t[r].value == s ? (t[r].checked = !0, 
        a.setData({
            caseId: t[r].caseId,
            orderPrice: t[r].casePrice
        })) : t[r].checked = !1;
        a.setData({
            checkbox: t
        });
    },
    ChooseRadio: function(e) {
        var a = e.currentTarget.dataset.value.contacts, t = e.currentTarget.dataset.value.telephone, s = e.currentTarget.dataset.value.address, r = e.currentTarget.dataset.value.addressId;
        this.setData({
            addressId: r,
            name: a,
            phone: t,
            address: s,
            modalName: null
        });
    },
    findInsrcardCaseList: function() {
        var t = this;
        e.Requests_json(a.globalData.insuranceUrl + "/ebike/findInsrcardCaseList", {}).then(function(e) {
            if (console.info(e), "0" == e.code) {
                var a = e.result.caseVoList, s = e.result.productName;
                t.setData({
                    productName: s,
                    checkbox: a
                });
            }
        });
    },
    findAddressList: function() {
        var t = this, s = this.data.departmentId;
        e.Requests_json(a.globalData.insuranceUrl + "/ebike/" + s + "/findAddressList", {}).then(function(e) {
            if ("0" == e.code) {
                t.setData({
                    addressList: e.result.addressList
                });
                var a = e.result.defaultAddress;
                t.setData({
                    name: null != a.contacts ? a.contacts : "",
                    phone: null != a.telephone ? a.telephone : "",
                    address: null != a.address ? a.address : "",
                    addressId: null != a.addressId ? a.addressId : "",
                    onloadModal: !1
                });
            }
        });
    },
    saveOrder: function(t) {
        var s = this, r = wx.getStorageSync("userToken"), d = s.data.caseId, n = s.data.addressId, o = s.data.departmentId;
        if ("" == d) return e.AlertMsg("请选择购买数量"), !1;
        if ("" == n) return e.AlertMsg("请选择收件地址"), !1;
        if ("" == o) return e.AlertMsg("创建订单失败, 门店信息异常"), !1;
        s.setData({
            loadModal: !0
        });
        var i = {
            openId: wx.getStorageSync("openId")
        };
        e.GetTokenCallBack(function() {
            e.Requests_json(a.globalData.insuranceUrl + "/ebike//" + r + "/" + d + "/" + n + "/" + o + "/saveOrder", i).then(function(t) {
                if (console.info(t), s.setData({
                    loadModal: !1
                }), "0" == t.code) {
                    var r = t.result;
                    wx.requestPayment({
                        timeStamp: r.timeStamp,
                        nonceStr: r.nonceStr,
                        package: r.package,
                        signType: r.signType,
                        paySign: r.paySign,
                        success: function(t) {
                            e.AlertSuccess("支付成功"), e.Requests_json(a.globalData.insuranceUrl + "/ebike/" + r.outTradeNo + "/queryWxOrder", {}), 
                            wx.redirectTo({
                                url: "../dealerhome/dealerhome?id=" + o
                            });
                        },
                        fail: function(a) {
                            e.AlertError("支付失败");
                        },
                        complete: function(e) {
                            console.info("支付结束");
                        }
                    });
                } else e.AlertError(t.msg);
            });
        });
    },
    goDealerAddrList: function(a) {
        var t = wx.getStorageSync("userToken");
        if (null == t || "" == t) e.GetUserToken(); else {
            var s = this.data.departmentId;
            wx.redirectTo({
                url: "../dealeraddrlist/dealeraddrlist?id=" + s
            });
        }
    }
});