function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../network/api.js")), o = t(require("../../../dist/index"));

Page(Object.assign({}, o.default.Toast, {
    data: {
        receiveData: {}
    },
    onLoad: function(t) {
        console.log(t, "oooooooooooooooo");
        var e = t.giftCardId, o = t.pkgId;
        this.setData({
            giftCardId: e,
            pkgId: o,
            urlType: t.urlType
        }), this.queryGiveDetail(e, o);
    },
    queryGiveDetail: function(t, o) {
        var a = this;
        wx.showLoading({
            title: "请稍后"
        }), e.default.queryGiveDetail({
            giftCardId: t || 0,
            pkgId: o || ""
        }).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), a.setData({
                receiveData: t.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    onReceive: function(t) {
        var o = this;
        console.log(t, "LLLLLLLLLLLLL"), wx.showLoading({
            title: "请稍后"
        }), e.default.queryGiftcardReceive({
            giftCardId: this.data.giftCardId || 0,
            pkgId: this.data.pkgId || ""
        }).then(function(t) {
            wx.hideLoading(), o.queryGiveDetail(o.data.giftCardId || 0, o.data.pkgId || "");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    giveOn: function(t) {
        console.log(this.data.urlType, "LLLLLLLLLLL"), wx.switchTab({
            url: "/tabs/home/index"
        });
    }
}));