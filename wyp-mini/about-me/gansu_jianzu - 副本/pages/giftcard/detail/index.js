function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../network/api.js")), e = t(require("../../../dist/index"));

Page(Object.assign({}, e.default.Toast, {
    data: {
        cardData: {},
        showDialog: !1
    },
    onLoad: function(t) {
        console.log(t, "PPPPPPPPPPPPPPPPP1111111");
        var a = t.id;
        this.setData({
            id: a
        }), "myCardRcord" == t.type ? (this.setData({
            type: !0
        }), this.queryGiftCardgiveRecorddetail(a)) : this.queryGiftcardDetail(a);
    },
    queryGiftcardDetail: function(t) {
        var e = this;
        wx.showLoading({
            title: "请稍后"
        }), a.default.queryGiftcardDetail({
            id: t
        }).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), e.setData({
                cardData: t.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    queryGiftCardgiveRecorddetail: function(t) {
        var e = this;
        wx.showLoading({
            title: "请稍后"
        }), a.default.queryGiftCardgiveRecorddetail({
            id: t
        }).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), e.setData({
                cardData: t.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    toggleStoreDialog: function() {
        console.log("close"), this.setData({
            showDialog: !this.data.showDialog
        });
    },
    onOwnUse: function() {
        var t = this, e = this.data.id;
        wx.showLoading({
            title: "请稍后"
        }), a.default.queryUseGiftCard({
            giftCardCustomerId: e
        }).then(function(a) {
            wx.hideLoading(), setTimeout(function() {
                t.queryGiftcardDetail(e);
            }, 2e3);
        }).catch(function(t) {
            return console.log(t);
        });
    },
    revokeLargess: function() {
        var t = this.data.id, e = this;
        console.log(t, "?????????????"), wx.showModal({
            content: "确定要撤销赠送吗？",
            success: function(i) {
                i.confirm ? a.default.queryRevokeLargess({
                    giftCardId: t
                }).then(function(a) {
                    wx.hideLoading(), setTimeout(function() {
                        e.queryGiftcardDetail(t);
                    }, 2e3);
                }).catch(function(t) {
                    return console.log(t);
                }) : i.cancel && console.log("用户点击取消");
            }
        });
    },
    onShareAppMessage: function(t) {
        console.log(t, ":lllllllllllll");
        var e = this;
        return {
            title: e.data.cardData.name + " " + e.data.cardData.originalPrice + "元",
            path: "/pages/giftcard/receive/index?giftCardId=" + e.data.cardData.id + "&urlType=myGiftCard",
            imageUrl: e.data.cardData.imgUrl,
            success: function() {
                a.default.giftcardLargess({
                    giftCardId: e.data.cardData.id
                }), setTimeout(function() {
                    e.queryGiftcardDetail(e.data.cardData.id);
                }, 2e3);
            }
        };
    }
}));