var t = "", e = require("../../../utils/server"), s = wx.getStorageSync("utoken");

Page({
    data: {},
    onShow: function() {
        t = this, s = wx.getStorageSync("utoken"), e.sendRequest({
            url: "?r=order.question.question_list&utoken=" + s,
            method: "GET",
            success: function(e) {
                e.data.result[0] && t.setData({
                    myQuesList: e.data.result,
                    listLength: e.data.result.length
                });
            }
        });
    },
    joinQues: function(t) {
        wx.redirectTo({
            url: "/pages/order/complaint/complaint"
        });
    }
});