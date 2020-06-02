var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../network/api")), t = require("../../../utils/wxParse/wxParse.js");

Page({
    data: {
        loading: !0,
        isSubmitting: !1
    },
    onLoad: function(e) {
        var i = this;
        wx.showLoading({
            title: "请稍后"
        }), this.setData({
            loading: !0
        }), a.default.querySupplyDetail({
            id: e.id
        }).then(function(a) {
            wx.hideLoading(), i.setData({
                detailData: a.data,
                loading: !1
            }), t.wxParse("content", "html", a.data.describe ? a.data.describe : "暂无", i, 5);
        }).catch(function(a) {
            return console.log(a);
        });
    },
    onPhone: function(a) {
        var t = this.data.detailData.mobile;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    onTapPic: function(a) {
        console.log("e--\x3e", a), wx.previewImage({
            current: a.currentTarget.dataset.link,
            urls: this.data.detailData.imgUrl
        });
    }
});