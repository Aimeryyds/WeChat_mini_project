var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api.js"));

Page({
    data: {},
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.negotiationHistory(this.data.id);
    },
    negotiationHistory: function(a) {
        var n = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.negotiationHistory({
            id: a
        }).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), n.setData({
                consultData: t.data.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    onTapPic: function(t) {
        console.log("4545454545454545", t.currentTarget.dataset.index), wx.previewImage({
            current: t.currentTarget.dataset.link,
            urls: this.data.consultData[t.currentTarget.dataset.index].proofUrl
        });
    }
});