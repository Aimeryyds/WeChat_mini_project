var t, e = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        t = this;
        var r = a.typeid;
        t.setData({
            typeid: a.typeid
        }), console.log(r);
        var o = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.diyform.diyform.getlistdetail&utoken=" + o + "&typeid=" + t.data.typeid,
            data: {},
            method: "GET",
            success: function(e) {
                e.data.result.sj ? e.data.result.sj[0] && t.setData({
                    myList: e.data.result.sj,
                    title: e.data.result.type.title
                }) : wx.showModal({
                    title: "提示",
                    content: "您还未参与该活动，点击确定即可申请",
                    success: function(e) {
                        e.confirm ? wx.redirectTo({
                            url: "../../customerForm/customerForm?id=" + t.data.typeid
                        }) : e.cancel && wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    joinCreate: function() {
        wx.redirectTo({
            url: "../../customerForm/customerForm?id=" + t.data.typeid
        });
    }
});