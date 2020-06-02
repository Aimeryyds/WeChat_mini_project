var t, e = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        t = this;
        var r = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.diyform.diyform.getlist&utoken=" + r,
            method: "GET",
            success: function(e) {
                e.data.result[0] ? t.setData({
                    myList: e.data.result
                }) : wx.showModal({
                    title: "提示",
                    content: "目前没有可以参与的活动",
                    success: function(t) {
                        t.confirm ? wx.navigateBack({
                            delta: 1
                        }) : t.cancel && wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    joinDetail: function(e) {
        var a = e.currentTarget.dataset.index, r = t.data.myList[a].id;
        wx.navigateTo({
            url: "../formDetail/formDetail?typeid=" + r
        });
    },
    joinCreate: function() {
        wx.redirectTo({
            url: "../../customerForm/customerForm"
        });
    }
});