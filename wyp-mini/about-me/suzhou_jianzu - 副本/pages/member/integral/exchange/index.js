var a = require("../../../../utils/server"), t = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        animationData: {},
        width: Math.ceil(wx.getSystemInfoSync().windowHeight + 80)
    },
    onLoad: function(a) {
        t = wx.getStorageSync("utoken");
        var e = this;
        e.setData({
            id: e.options.id
        }), e.loadingData();
    },
    loadingData: function() {
        t = wx.getStorageSync("utoken");
        var e = this;
        a.sendRequest({
            url: "?r=wxapp.creditshop.create&id=" + e.data.id + "&optionid=0",
            showToast: !1,
            data: {
                utoken: t
            },
            method: "GET",
            success: function(a) {
                if (e.setData({
                    data: a.data.result.goods
                }), "" != a.data.result.address && e.setData({
                    address: a.data.result.address
                }), a.data.result.goods.dispatch > "0.00" || a.data.result.goods.money > "0.00") {
                    var t = parseFloat(a.data.result.goods.money) + parseFloat(a.data.result.goods.dispatch);
                    e.setData({
                        sum: t
                    });
                }
            }
        });
    },
    onShow: function() {
        var a = this;
        if (wx.getStorageSync("addrdata")) {
            var t = wx.getStorageSync("addrdata"), e = {
                realname: t.addressInfo.realname,
                province: t.addressInfo.province,
                city: t.addressInfo.city,
                area: t.addressInfo.area,
                mobile: t.addressInfo.mobile,
                id: t.id
            };
            a.setData({
                address: e
            }), console.log(wx.getStorageSync("addrdata")), console.log(a.data.address), console.log(a.data.aid), 
            wx.removeStorageSync("addrdata");
        }
        a.setData({
            loading: !1
        });
    },
    addressSelect: function() {
        wx.navigateTo({
            url: "../../../address/select/index?addr=addr"
        });
    },
    toAddrList: function() {
        wx.navigateTo({
            url: "../address/list/index"
        });
    },
    top: function() {
        if (this.data.address) {
            var a = wx.createAnimation({
                timingFunction: "ease-in"
            }).translate(0, 0 - this.data.width).step({
                duration: 1e3
            });
            this.setData({
                animationData: a.export()
            });
        } else wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "请填写地址后提交",
            success: function(a) {
                a.confirm && console.log("用户点击确定");
            }
        });
    },
    bottom: function() {
        var a = wx.createAnimation({
            timingFunction: "ease-in"
        }).translate(0, this.data.width).step({
            duration: 1e3
        });
        this.setData({
            animationData: a.export()
        });
    },
    toSuccess: function() {
        var e = this;
        a.sendRequest({
            url: "?r=wxapp.creditshop.detail.pay&id=" + e.data.id,
            data: {
                utoken: t,
                addressid: e.data.address.id
            },
            method: "GET",
            success: function(d) {
                if ("" == d.data.result) return e.setData({
                    show: 1,
                    strA: d.data.msg
                }), void setTimeout(function() {
                    d.data.status < 0 && wx.reLaunch({
                        url: "../../../index/index"
                    });
                }, 2e3);
                e.setData({
                    show: 1,
                    strA: d.data.msg
                }), setTimeout(function() {
                    e.setData({
                        show: 0
                    });
                }, 2e3);
                var s = d.data.result.logid;
                if (d.data.result.wechat && d.data.result.wechat.data && "" != d.data.result.wechat.data.appId || d.data.result.data) {
                    var o = d.data.result;
                    wx.setStorageSync("result", o), wx.navigateTo({
                        url: "../../../groupbuy/cashier/index?orderid=" + e.data.id + "&addressid=" + e.data.address.id + "&name=integral"
                    });
                } else a.sendRequest({
                    url: "?r=wxapp.creditshop.detail.lottery&logid=" + s,
                    data: {
                        id: e.data.id,
                        utoken: t
                    },
                    method: "GET",
                    success: function(a) {}
                }), wx.navigateTo({
                    url: "../success/index?logid=" + s
                });
            }
        });
    },
    todetail: function(a) {
        console.log(a.currentTarget.dataset.id), wx.navigateTo({
            url: "../detail/index?id=" + a.currentTarget.dataset.id
        });
    }
});