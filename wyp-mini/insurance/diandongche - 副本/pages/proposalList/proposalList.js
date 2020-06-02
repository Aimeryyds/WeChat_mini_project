var a = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        proposalList: []
    },
    onLoad: function(e) {
        a.GetToken();
        var o = wx.getStorageSync("userToken");
        null != o && "" != o || wx.redirectTo({
            url: "../login/login"
        });
        var l = {
            userToken: o
        };
        this.setData({
            loadModal: !0
        });
        var s = this;
        a.GetTokenCallBack(function() {
            a.Requests_json(t.globalData.insuranceUrl + "/api/proposal/findAllProposal", l).then(function(a) {
                s.setData({
                    loadModal: !1
                }), "0" == a.code && s.setData({
                    proposalList: a.result
                });
            });
        });
    },
    getDetail: function(e) {
        var o = this, l = e.currentTarget.dataset.insuranceno, s = e.currentTarget.dataset.proposalstat;
        if ("" != l && "" != s) {
            var r = e.currentTarget.dataset.proposalid, n = o.data, d = t.globalData.insuranceUrl + "/downLoadPDF/" + r;
            o.setData({
                loadModal: !0
            }), a.Requests_json(d, n).then(function(e) {
                if (0 == e.code) {
                    var l = e.msg;
                    a.DownloadPdf(t.globalData.staticUrl + "/pdf/" + l + ".pdf", l), o.setData({
                        loadModal: !1
                    });
                } else o.setData({
                    loadModal: !1
                }), a.AlertMsg("网络繁忙,请稍后再试");
            });
        } else a.AlertMsg("无电子保单");
    }
});