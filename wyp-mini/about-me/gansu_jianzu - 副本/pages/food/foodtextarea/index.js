!function(t) {
    t && t.__esModule;
}(require("../../../utils/util"));

Page({
    data: {
        msg: ""
    },
    onLoad: function(t) {
        this.setData({
            msg: t.msg
        });
    },
    clearvalue: function() {
        this.setData({
            msg: ""
        });
    },
    onchagevalue: function(t) {
        this.setData({
            msg: t.detail.value
        });
    },
    jumporder: function() {
        var t = this.data.msg;
        getApp().setFlash("food-msg", t), wx.navigateBack({
            delta: 1
        });
    }
});