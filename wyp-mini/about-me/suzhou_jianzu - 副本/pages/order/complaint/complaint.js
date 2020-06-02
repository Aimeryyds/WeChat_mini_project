var t = "", e = require("../../../utils/server"), s = wx.getStorageSync("utoken");

Page({
    data: {
        myQuesAll: [],
        areaCont: ""
    },
    onLoad: function(u) {
        t = this, e.sendRequest({
            url: "?r=order.question.my_question&utoken=" + s,
            method: "GET",
            success: function(e) {
                e.data.result && t.setData({
                    myQuesAll: e.data.result
                });
            }
        });
    },
    onShow: function() {
        t = this, e.sendRequest({
            url: "?r=order.question.my_question&utoken=" + s,
            method: "GET",
            success: function(e) {
                e.data.result && t.setData({
                    myQuesAll: e.data.result
                });
            }
        });
    },
    bindinputCont: function(e) {
        (t = this).setData({
            areaCont: e.detail.value
        });
    },
    bindFormSubmit: function() {
        t = this, e.sendRequest({
            url: "?r=order.question.ask&utoken=" + s,
            data: {
                question: t.data.areaCont
            },
            method: "POST",
            success: function(u) {
                e.sendRequest({
                    url: "?r=order.question.my_question&utoken=" + s,
                    method: "GET",
                    success: function(e) {
                        t.setData({
                            myQuesAll: e.data.result
                        }), t.setData({
                            areaCont: ""
                        });
                    }
                });
            }
        });
    },
    joinQues: function(e) {
        t = this;
        var s = e.currentTarget.dataset.index, u = t.data.myQuesAll[s].id;
        wx.navigateTo({
            url: "../myQuestion/myQuestion?id=" + u
        });
    },
    everyComp: function() {
        wx.navigateTo({
            url: "../complaintEvery/complaintEvery"
        });
    },
    onPullDownRefresh: function() {
        t = this, e.sendRequest({
            url: "?r=order.question.my_question&utoken=" + s,
            method: "GET",
            success: function(e) {
                e.data.result && t.setData({
                    myQuesAll: e.data.result
                });
            }
        });
    }
});