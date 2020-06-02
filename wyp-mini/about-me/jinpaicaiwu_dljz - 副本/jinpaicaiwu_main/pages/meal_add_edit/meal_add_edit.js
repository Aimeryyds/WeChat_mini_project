var a = getApp();

require("../meal_location/qqmap-wx-jssdk.js"), require("../../static/config.js");

Page({
    data: {
        location: "",
        detailed_addr: "",
        addsdata: {},
        uid: 0
    },
    onLoad: function(t) {
        var e = this;
        if (wx.setNavigationBarTitle({
            title: "添加地址"
        }), t.id) {
            var d = t.id;
            a.apiRequest("user", "getconsignee", {
                data: {
                    id: d
                },
                success: function(a) {
                    if ("OK" == a.data.result) {
                        var t = a.data.data;
                        e.setData({
                            addsdata: t,
                            uid: d
                        });
                    } else wx.showToast({
                        title: "参数错误"
                    }), wx.navigateBack();
                }
            });
        }
    },
    tapSearchLoc: function() {
        var a = this, t = a.data.addsdata;
        wx.chooseLocation({
            success: function(e) {
                e.latitude, e.longitude;
                t.detailed_addr = e.address, t.detailed_name = e.name, a.setData({
                    addsdata: t
                });
            },
            fail: function() {
                t.detailed_name = "定位失败", a.setData({
                    addsdata: t
                });
            }
        });
    },
    formSubmit: function(t) {
        var e = this, d = e.data.uid, i = e.data.addsdata, s = "";
        if (i.name ? i.phone ? i.detailed_addr ? i.house_number || (s = "请填写楼号/门牌号") : s = "请填写地址" : s = "请填写电话" : s = "请填写姓名", 
        s) return wx.showModal({
            title: s,
            content: "",
            showCancel: !1
        }), !1;
        a.apiRequest("user", "delivery_address", {
            data: {
                address: JSON.stringify(i),
                uid: d
            },
            success: function(a) {
                "OK" == a.data.result ? (wx.showToast({
                    title: "保存成功"
                }), wx.navigateBack()) : wx.showToast({
                    title: "保存失败"
                });
            }
        });
    },
    formChange: function(a) {
        var t = this.data.addsdata, e = a.detail.value;
        t[a.currentTarget.dataset.type] = e, this.setData({
            addsdata: t
        });
    },
    clearPhone: function() {
        var a = this.data.addsdata;
        a.phone = "", this.setData({
            addsdata: a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});