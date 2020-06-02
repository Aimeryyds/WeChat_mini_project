var e = "", t = require("../../../../utils/server"), a = wx.getStorageSync("utoken"), r = "";

Page({
    data: {
        ClassNum: 1,
        Treatmentmodeitems: [ "退款（仅退款不退货）", "退款（退款退货）", "退款（退款退货）", "换货（不退款)" ],
        nothing: "无"
    },
    onLoad: function(e) {
        var s = this, d = e.id, n = e.currIndex;
        a = wx.getStorageSync("utoken"), s.setData({
            order_id: d,
            currIndex: n
        }), t.sendRequest({
            url: "?r=order.refund.detail&utoken=" + a + "&id=" + s.data.order_id,
            method: "POST",
            success: function(e) {
                s.setData({
                    refundList: e.data.result,
                    applyprice: e.data.result.applyprice,
                    content: e.data.result.content,
                    createtime: e.data.result.createtime,
                    reason: e.data.result.reason,
                    rtypeNum: e.data.result.rtype,
                    statemsg: e.data.result.statemsg,
                    images: e.data.result.images,
                    isimages: e.data.result.images[0]
                });
                for (var t = 0; t < s.data.Treatmentmodeitems.length; t++) s.data.rtypeNum == t && (r = s.data.Treatmentmodeitems[t]);
                s.setData({
                    rtype: r
                });
            }
        });
    },
    moreSelectArrow: function() {
        1 == (e = this).data.ClassNum ? e.setData({
            ClassNum: 0
        }) : e.setData({
            ClassNum: 1
        });
    },
    formSubmit: function() {
        var e = this;
        a = wx.getStorageSync("utoken"), wx.showModal({
            title: "提示",
            content: "您确定要取消申请么",
            success: function(r) {
                r.confirm ? t.sendRequest({
                    url: "?r=order.refund.cancel&utoken=" + a + "&id=" + e.data.order_id,
                    method: "GET",
                    success: function(t) {
                        wx.navigateTo({
                            url: "/pages/order/details/index?order_id=" + e.data.order_id + "&currIndex=" + e.data.currIndex
                        });
                    }
                }) : r.cancel;
            }
        });
    }
});