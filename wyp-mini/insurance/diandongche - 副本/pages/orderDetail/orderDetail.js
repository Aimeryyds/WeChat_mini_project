var a = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        loadModal: !0
    },
    onLoad: function(t) {
        var r = t.orderId;
        this.setData({
            orderId: r
        });
        var o = this.data, s = this;
        a.GetTokenCallBack(function() {
            a.Requests_json(e.globalData.insuranceUrl + "/api/order/orderDetail", o).then(function(e) {
                if (0 == e.code) {
                    var t = e.result.vehicleInfo;
                    s.setData({
                        order: e.result.order,
                        proposal: e.result.proposal,
                        policyCustomer: e.result.policyCustomer,
                        insuredCustomer: e.result.insuredCustomer,
                        vehicleInfo: t
                    }), s.setData({
                        loadModal: !1
                    });
                } else a.AlertMsg("查询订单失败");
            });
        });
    },
    toPayOrder: function(a) {
        var e = a.currentTarget.id;
        wx.navigateTo({
            url: "../confirm/confirm?orderId=" + e
        });
    },
    queryInsuranceDetail: function(t) {
        var r = this, o = this.data.proposal.proposalId, s = this.data, l = e.globalData.insuranceUrl + "/downLoadPDF/" + o;
        r.setData({
            loadModal: !0
        }), a.Requests_json(l, s).then(function(t) {
            if (0 == t.code) {
                var o = t.msg;
                a.DownloadPdf(e.globalData.staticUrl + "/pdf/" + o + ".pdf", o), r.setData({
                    loadModal: !1
                });
            } else a.AlertMsg("网络繁忙,无法获取电子保单");
        });
    }
});