var n, e = getApp(), s = require("../../../utils/functions");

require("../../../utils/util");

Page({
    data: {
        spokesman: null
    },
    onLoad: function(s) {
        n = this, e.getUserInfo(function() {
            n.getSpokesmanInfo();
        });
    },
    getSpokesmanInfo: function() {
        s.getSpokesmanInfo(function(s) {
            e.globalData.userInfo.spokesman = s.spokesman, s.spokesman.amount = (s.spokesman.settleAmount + s.spokesman.balance).toFixed(2), 
            n.setData({
                spokesman: s.spokesman
            });
        });
    }
});