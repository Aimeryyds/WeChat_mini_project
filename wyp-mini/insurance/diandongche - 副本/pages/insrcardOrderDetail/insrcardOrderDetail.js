var r = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        loadModal: !0,
        insrcardOrder: {
            productName: "",
            caseName: "",
            amounts: "",
            showCreateTime: "",
            orderContacts: "",
            orderTelephone: "",
            orderAddress: "",
            courierName: "",
            courierNumber: "",
            stateName: ""
        }
    },
    onLoad: function(r) {
        var e = r.orderId;
        this.findOrderInsrcardDetail(e);
    },
    findOrderInsrcardDetail: function(a) {
        var t = this;
        r.Requests_json(e.globalData.insuranceUrl + "/ebike/" + a + "/findOrderInsrcardDetail", {}).then(function(e) {
            t.setData({
                loadModal: !1
            }), "0" == e.code ? t.setData({
                insrcardOrder: e.result
            }) : r.AlertMsg(e.msg);
        });
    }
});