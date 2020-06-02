function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../../utils/const.js"));

var e = t(require("../../../network/api")), a = t(require("../../../utils/util"));

Page({
    data: {},
    onLoad: function(t) {
        t.order ? this.setData({
            order: a.default.parse(t.order),
            item: a.default.parse(t.item),
            formData: a.default.parse(t.formData)
        }) : t.scoreorder && (t.ordertype && this.setData({
            ordertype: t.ordertype
        }), this.setData({
            scoreorder: a.default.parse(t.scoreorder),
            item: a.default.parse(t.item),
            formData: a.default.parse(t.formData)
        })), this.setData({
            cityName: t.city,
            provinceName: t.province,
            type: t.type
        });
    },
    handleChangeValue: function(t) {
        this.setData({
            keyword: "" + t.detail.value
        });
    },
    searchCtiy: function() {
        var t = this;
        if (this.data.keyword) {
            var a = {
                cityName: this.data.provinceName + this.data.cityName,
                keyword: this.data.keyword
            };
            e.default.queryMap(a).then(function(e) {
                wx.stopPullDownRefresh(), console.log("bingooooooooooooo", e), t.setData({
                    addlist: e.data
                });
            }).catch(function(t) {
                return console.log(t);
            });
        }
    },
    bindaddress: function(t) {
        var e = t.currentTarget.dataset.item;
        if (this.data.order) "edit" == this.data.type ? this.handleJump("/pages/address/new/new?order=" + a.default.stringify(this.data.order) + "&search=" + a.default.stringify(e) + "&item=" + a.default.stringify(this.data.item) + "&formData=" + a.default.stringify(this.data.formData)) : this.handleJump("/pages/address/new/new?order=" + a.default.stringify(this.data.order) + "&search=" + a.default.stringify(e) + "&item=" + a.default.stringify(this.data.item) + "&type=" + this.data.type + "&formData=" + a.default.stringify(this.data.formData)); else if (this.data.scoreorder) if ("edit" == this.data.type) {
            var r = "/pages/address/new/new?scoreorder=" + a.default.stringify(this.data.scoreorder) + "&search=" + a.default.stringify(e) + "&item=" + a.default.stringify(this.data.item) + "&formData=" + a.default.stringify(this.data.formData);
            this.data.ordertype ? this.handleJump(r + "&ordertype=order") : this.handleJump(r);
        } else {
            var i = "/pages/address/new/new?scoreorder=" + a.default.stringify(this.data.scoreorder) + "&search=" + a.default.stringify(e) + "&item=" + a.default.stringify(this.data.item) + "&type=" + this.data.type + "&formData=" + a.default.stringify(this.data.formData);
            this.data.ordertype ? this.handleJump(i + "&ordertype=order") : this.handleJump(i);
        } else console.log(e, "searchAddress"), getApp().setFlash("searchAddress", e), wx.navigateBack();
    },
    handleJump: function(t) {
        wx.redirectTo({
            url: t
        });
    }
});