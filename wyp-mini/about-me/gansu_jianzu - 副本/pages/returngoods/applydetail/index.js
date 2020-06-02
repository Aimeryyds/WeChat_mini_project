function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../network/api.js")), o = t(require("../../../dist/index")), i = t(require("../../../utils/util"));

Page(Object.assign({}, o.default.Toast, {
    data: {},
    onLoad: function(t) {
        this.setData({
            id: t.id
        });
        var e = getApp().globalData.color;
        this.setData({
            color: e
        });
    },
    onShow: function() {
        this.queryReturnGoodsDetail(this.data.id);
    },
    queryReturnGoodsDetail: function(t) {
        var o = this;
        wx.showLoading({
            title: "请稍后"
        }), e.default.queryReturnGoodsDetail({
            id: t
        }).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), o.setData({
                applyDetailData: t.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    queryApplyCancel: function() {
        var t = this.data.id, o = this;
        console.log(t, "?????????????"), wx.showModal({
            title: "确定撤销本次申请？",
            content: "撤销后，不能再次发起退款",
            success: function(i) {
                i.confirm ? e.default.queryApplyCancel({
                    id: t
                }).then(function(e) {
                    wx.hideLoading(), setTimeout(function() {
                        o.queryReturnGoodsDetail(t);
                    }, 2e3);
                }).catch(function(t) {
                    return console.log(t);
                }) : i.cancel && console.log("用户点击取消");
            }
        });
    },
    applyModifyUrl: function() {
        wx.redirectTo({
            url: "/pages/returngoods/applyform/index?modifyType=modifyForm&data=" + i.default.stringify(this.data.applyDetailData)
        });
    },
    logisticsInfoUrl: function(t) {
        console.log(t, "{{{{{{{{{{{"), wx.redirectTo({
            url: "/pages/returngoods/logistics/index?id=" + this.data.id
        });
    },
    logisticsInfoUrlModify: function(t) {
        console.log(t, "{{{{{{{{{{{"), wx.redirectTo({
            url: "/pages/returngoods/logistics/index?id=" + this.data.id + "&type=logModify&expressComp=" + this.data.applyDetailData.expressComp + "&expressNo=" + this.data.applyDetailData.expressNo + "&expressRemark=" + this.data.applyDetailData.expressRemark
        });
    }
}));