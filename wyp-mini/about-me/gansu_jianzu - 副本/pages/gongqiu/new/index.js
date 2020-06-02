function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, e = t(require("../../../utils/util")), o = t(require("../../../network/api.js")), i = t(require("../../../utils/notification")), s = t(require("../../../utils/const.js")), n = require("../../../dist/index"), u = e.default.registComp({}, n.TopTips, n.Toast, {
    data: {},
    onLoad: function(t) {
        var a = t.infoType, e = t.action, o = t.id, i = t.isback;
        this.setData({
            infoType: a,
            action: e,
            isback: i
        }), "new" == e ? this.setData({
            formData: {
                infoType: a
            }
        }) : (wx.showLoading({
            title: "请稍后"
        }), this.querySupplyBuy({
            id: o
        }));
    },
    onReady: function() {},
    querySupplyBuy: function(t) {
        var e = this;
        o.default.querySupplyBuy(t).then(function(t) {
            e.setData({
                formData: a({}, t.data)
            }), wx.hideLoading();
        }).catch(function(t) {
            wx.hideLoading();
        });
    },
    onShow: function() {
        var t = getApp().getFlash("address");
        t && this.setData({
            "formData.provinceCode": t.province.code,
            "formData.provinceName": t.province.fullName,
            "formData.cityCode": t.city.code,
            "formData.cityName": t.city.fullName,
            "formData.districtCode": t.district.code || "",
            "formData.districtName": t.district.fullName || ""
        });
    },
    handleRemoveImg: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.formData.imgUrl;
        e.splice(a, 1), this.setData({
            "formData.imgUrl": e
        });
    },
    validateForm: function(t) {
        console.log(t);
        var a = [];
        return t.provinceCode && t.cityCode || a.push("请选择区域"), t.address ? t.address.length < 5 && a.push("详细地址至少5个字") : a.push("请输入详细地址"), 
        t.title ? t.title.length < 8 && a.push("标题至少8个字") : a.push("请输入标题"), t.describe ? t.describe.length < 10 && a.push("描述信息至少10个字") : a.push("请输入描述"), 
        t.linkman || a.push("请输入联系人"), t.mobile ? e.default.testMobile(t.mobile) || a.push("请输入合法手机号码") : a.push("请输入手机号码"), 
        !(a.length > 0) || (this.showZanTopTips(a[0]), !1);
    },
    formSubmit: function(t) {
        var e = this, n = t.detail.value;
        console.log(n.imgUrl), n = a({}, n, {
            imgUrl: this.data.formData.imgUrl ? this.data.formData.imgUrl : []
        }), this.validateForm(n) && ("save" == t.detail.target.dataset.type ? o.default.saveSupplyBuy(n).then(function(t) {
            0 == t.status && t.data.result ? (e.showZanToast("保存成功"), e.data.isback ? (i.default.post(s.default.action.SUPPLY_TYPE, {
                status: "1"
            }), wx.navigateBack({
                delta: 1
            })) : wx.redirectTo({
                url: "/pages/gongqiu/mygongqiu/index?status=1"
            })) : e.showZanTopTips("保存失败，请重新保存");
        }).catch(function(t) {
            console.log(t), e.showZanTopTips("保存失败，请重新保存");
        }) : o.default.publishSupplyBuy(n).then(function(t) {
            0 == t.status && t.data.result ? (e.showZanToast("发布成功"), e.data.isback ? (i.default.post(s.default.action.SUPPLY_TYPE, {
                status: "2"
            }), wx.navigateBack({
                delta: 1
            })) : wx.redirectTo({
                url: "/pages/gongqiu/mygongqiu/index?status=2"
            })) : e.showZanTopTips("发布失败，请重新保存");
        }).catch(function(t) {
            console.log(t), e.showZanTopTips("保存失败，请重新发布");
        }));
    },
    handleChooseImg: function(t) {
        var a = this;
        wx.chooseImage({
            count: 1,
            success: function(t) {
                var e = t.tempFilePaths;
                console.log(e), o.default.uploadImage(e[0]).then(function(t) {
                    console.log(t);
                    var e = a.data.formData.imgUrl, o = void 0 === e ? [] : e;
                    o.push(t.url), a.setData({
                        "formData.imgUrl": o
                    });
                }).catch(function(t) {
                    console.log("chooseimage", t);
                });
            }
        });
    }
});

Page(u);