var t = getApp(), o = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        historyRecords: [],
        height: "",
        tip: "",
        mainColor: "",
        textColor: ""
    },
    onLoad: function() {
        this.setData({
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor
        });
        var a = this, e = t.globalData.baseUrl + "userAccountLog/getByUserId.do";
        wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), t.checkToken(function(t) {
            t.length > 0 && o.request(e, {
                token: t
            }, function(t) {
                wx.hideToast(), void 0 !== t.data && 0 != t.data.length ? a.setData({
                    historyRecords: t.data
                }) : a.setData({
                    tip: "没有更多记录了 "
                });
            });
        });
    },
    onReady: function() {},
    onShow: function() {}
});