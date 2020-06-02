var e = "", a = "", t = require("../../../utils/server"), n = wx.getStorageSync("utoken");

Page({
    data: {
        Treatmentmode: !1,
        Refundreason: !1,
        Treatmentmodeitems: [ "退款", "退款退货", "换货（不退款）" ],
        TreatmentmodeValue: "",
        Refundreasonitems: [ "不想要了", "卖家缺货", "拍错了/订单信息错误", "其它" ],
        RefundreasonValue: "",
        images: [],
        values: [],
        RefundreasonSelectIndex: -1
    },
    onLoad: function(a) {
        if (e = this, console.log(a), e.setData({
            maxAmount: a.maxAmount,
            order_id: a.order_id,
            currIndex: a.currIndex,
            myIndex: a.myIndex
        }), 2 == e.data.myIndex) {
            var t = [ "退款" ];
            e.setData({
                Treatmentmodeitems: t
            });
        }
        3 == e.data.myIndex && e.setData({
            maxAmount: a.maxAmount - a.dispatchprice
        });
    },
    Treatmentmode: function() {
        (e = this).setData({
            Treatmentmode: !0
        });
    },
    TreatmentmodeSelect: function(a) {
        e = this;
        var t = a.detail.value;
        e.setData({
            TreatmentmodeValue: e.data.Treatmentmodeitems[t],
            Treatmentmode: !1,
            TreatmentmodeNum: t
        });
    },
    radioChange1: function(t) {
        (e = this).setData({
            TreatmentmodeValue: t.detail.value,
            Treatmentmode: !1
        });
        for (var n = [], d = 0; d < e.data.Treatmentmodeitems.length; d++) n.push(e.data.Treatmentmodeitems[d].name);
        for (var o = 0; o < n.length; o++) n[o] == e.data.TreatmentmodeValue && (a = o);
        e.setData({
            TreatmentmodeNum: a
        });
    },
    Refundreason: function() {
        (e = this).setData({
            Refundreason: !0
        });
    },
    RefundreasonSelect: function(a) {
        (e = this).setData({
            RefundreasonValue: e.data.Refundreasonitems[a.detail.value],
            Refundreason: !1
        });
    },
    radioChange2: function(a) {
        (e = this).setData({
            RefundreasonValue: a.detail.value,
            Refundreason: !1
        });
    },
    Refunddescription: function(a) {
        (e = this).setData({
            RefunddescriptionValue: a.detail.value
        });
    },
    refundamount: function(a) {
        e = this, parseFloat(a.detail.value) <= parseFloat(e.data.maxAmount) ? e.setData({
            refundamountValue: a.detail.value
        }) : parseFloat(a.detail.value) > parseFloat(e.data.maxAmount) && e.setData({
            refundamountValue: e.data.maxAmount
        });
    },
    chooseImage: function() {
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var t = a.tempFilePaths;
                wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=order.refund.upload_img&utoken=" + n + "&i=450",
                    filePath: t[0],
                    name: "img",
                    success: function(a) {
                        var t = JSON.parse(a.data), n = e.data.images, d = e.data.values;
                        n.push(t.result.url), d.push(t.result.value), n.length > 5 || d.length > 5 ? (wx.showToast({
                            title: "最多只能选5张",
                            icon: "success",
                            duration: 2e3
                        }), n.splice(5, n.length), d.splice(5, d.length), e.setData({
                            images: n,
                            ValueLists: d
                        })) : e.setData({
                            images: n,
                            ValueLists: d
                        });
                    }
                });
            }
        });
    },
    previewImage: function() {
        wx.previewImage({
            urls: e.data.images
        });
    },
    delete: function(a) {
        var t = a.currentTarget.dataset.index, n = e.data.images;
        n.splice(t, 1), e.setData({
            images: n
        });
    },
    formSubmit: function(a) {
        e = this, console.log(a), e.data.TreatmentmodeValue ? e.data.RefundreasonValue ? !a.detail.value.refundamountName || a.detail.value.refundamountName > parseFloat(e.data.maxAmount) ? wx.showModal({
            title: "提示",
            content: "退款金额不在指定范围内",
            showCancel: !1
        }) : (n = wx.getStorageSync("utoken"), t.sendRequest({
            url: "?r=order.refund.apply&utoken=" + n + "&id=" + e.data.order_id,
            data: {
                price: e.data.refundamountValue,
                rtype: e.data.TreatmentmodeNum,
                reason: e.data.RefundreasonValue,
                content: e.data.RefunddescriptionValue,
                imgs: e.data.ValueLists
            },
            method: "POST",
            success: function(a) {
                wx.redirectTo({
                    url: "../details/index?order_id=" + e.data.order_id + "&currIndex=" + e.data.currIndex + "&myIndex=" + e.data.myIndex
                });
            }
        })) : wx.showModal({
            title: "提示",
            content: "请选择退款原因",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请选择处理方式",
            showCancel: !1
        });
    },
    formReset: function() {
        wx.navigateBack({});
    }
});