var t = require("../../../utils/server");

wx.getStorageSync("utoken"), getApp();

Page({
    data: {
        loading: !0
    },
    todetail: function(t) {
        wx.navigateTo({
            url: "../detail/index?id=" + t.currentTarget.dataset.id
        });
    },
    onLoad: function() {
        var a = wx.getStorageSync("utoken"), e = this;
        t.sendRequest({
            url: "?r=wxapp.video.getlist",
            showToast: !1,
            method: "GET",
            data: {
                utoken: a
            },
            success: function(t) {
                console.log(t), t.data.result && e.setData({
                    loading: !1,
                    data: t.data.result,
                    search: t.data.result
                });
            }
        });
    },
    formSubmit: function(a) {
        var e = this;
        console.log(a);
        var o = a.detail.value;
        e.setData({
            nowCont: o
        }), console.log(e.data.nowCont);
        var n = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.video.getlist&keyword=" + e.data.nowCont,
            method: "POST",
            data: {
                utoken: n
            },
            success: function(t) {
                console.log(t), t.data.result && (e.setData({
                    data: t.data.result,
                    search: t.data.result
                }), 0 == e.data.data.length && wx.showModal({
                    title: "提示",
                    content: "没有搜索到相应内容",
                    success: function(t) {
                        t.confirm ? e.setData({
                            nowCont: ""
                        }) : t.cancel && e.setData({
                            nowCont: ""
                        });
                    }
                }));
            }
        });
    }
});