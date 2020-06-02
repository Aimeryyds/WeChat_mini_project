var t = "", a = require("../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(s) {
        t = this, a.sendRequest({
            url: "?r=order.question.detail&utoken=" + e,
            data: {
                id: s.id
            },
            method: "GET",
            success: function(a) {
                t.setData({
                    myQuesList: a.data.result,
                    nickname: a.data.result.nickname,
                    question: a.data.result.question,
                    create_time: a.data.result.create_time,
                    avatar: a.data.result.avatar,
                    answer: a.data.result.answer
                }), null == t.data.answer && t.setData({
                    answer: ""
                });
            }
        });
    },
    joinComplaint: function() {
        t = this, wx.navigateBack();
    }
});