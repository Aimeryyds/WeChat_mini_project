getApp();

Page({
    data: {
        pickinfo: {
            pickname: "",
            pickphone: ""
        },
        uid: 0
    },
    onShow: function() {},
    formSubmit: function() {
        var a = this, t = a.data.pickname, e = a.data.pickphone;
        if (t && e) {
            var n = getCurrentPages();
            n[n.length - 2].setData({
                pickname: t,
                pickphone: e
            }), wx.navigateBack({
                delta: 1
            });
        } else wx.showModal({
            title: "提示",
            content: "请填写完整资料",
            showCancel: !1
        });
    },
    bindName: function(a) {
        this.setData({
            pickname: a.detail.value
        });
    },
    toBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    bindPhone: function(a) {
        this.setData({
            pickphone: a.detail.value
        });
    },
    onLoad: function(a) {
        this.setData({
            pickname: a.pickname,
            pickphone: a.pickphone
        });
    }
});