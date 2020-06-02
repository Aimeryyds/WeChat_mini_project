var a = require("../../58268180480303CF3E40E9872402F6C0.js"), o = getApp();

Page({
    data: {
        loadModal: !1,
        proposalList: []
    },
    onLoad: function(t) {
        var e = this, s = {
            userToken: wx.getStorageSync("userToken")
        };
        e.setData({
            loadModal: !0
        }), a.GetTokenCallBack(function() {
            a.Requests_json(o.globalData.insuranceUrl + "/api/proposal/findAllProposal", s).then(function(a) {
                e.setData({
                    loadModal: !1
                }), "0" == a.code && e.setData({
                    proposalList: a.result
                });
            });
        });
    }
});