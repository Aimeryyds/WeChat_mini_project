var a, t, e, s, d = require("../../../utils/server"), o = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        height: Math.ceil(wx.getSystemInfoSync().screenHeight)
    },
    onLoad: function(d) {
        o = wx.getStorageSync("utoken"), console.log(d), console.log(o), console.log("TTTTTTTTTTTTTTTTT");
        var r = this;
        o = wx.getStorageSync("utoken"), d.id && (a = d.id, t = d.type), d.teamid && (e = d.teamid), 
        d.heads && (s = d.heads, r.setData({
            heads: s
        })), r.setData({
            type: t
        }), r.loadPageData();
    },
    loadPageData: function() {
        o = wx.getStorageSync("utoken");
        var r = this;
        e ? d.sendRequest({
            url: "?r=wxapp.groups.orders.confirm",
            showToast: !1,
            data: {
                utoken: o,
                id: a,
                type: t,
                teamid: e
            },
            method: "GET",
            success: function(a) {
                if (console.log(a), console.log("111111111111111111111111111"), r.setData({
                    loading: !1
                }), a.data.status < 0) r.setData({
                    status: 1,
                    msg: a.data.msg
                }); else {
                    if (r.setData({
                        data: a.data.result
                    }), r.data.data.goods.singleprice) var t = parseFloat(r.data.data.goods.groupsprice) + parseFloat(r.data.data.goods.freight);
                    r.setData({
                        total: t
                    }), "" != a.data.result.address && r.setData({
                        address: a.data.result.address,
                        aid: a.data.result.address.id
                    });
                }
            }
        }) : s ? d.sendRequest({
            url: "?r=wxapp.groups.orders.confirm",
            showToast: !1,
            data: {
                utoken: o,
                id: a,
                heads: 1,
                type: t
            },
            method: "GET",
            success: function(a) {
                if (r.setData({
                    loading: !1
                }), a.data.status < 0) r.setData({
                    status: 1,
                    msg: a.data.msg
                }); else {
                    if (r.setData({
                        data: a.data.result
                    }), r.data.data.goods.singleprice) var t = parseFloat(r.data.data.goods.groupsprice) + parseFloat(r.data.data.goods.freight) - parseFloat(r.data.data.goods.headsmoney);
                    r.setData({
                        total: t
                    }), "" != a.data.result.address && r.setData({
                        address: a.data.result.address,
                        aid: a.data.result.address.id
                    });
                }
            }
        }) : d.sendRequest({
            url: "?r=wxapp.groups.orders.confirm",
            data: {
                utoken: o,
                id: a,
                type: t
            },
            showToast: !1,
            method: "GET",
            success: function(a) {
                if (r.setData({
                    loading: !1
                }), a.data.status < 0) r.setData({
                    status: 1,
                    msg: a.data.msg
                }); else {
                    if (r.setData({
                        data: a.data.result
                    }), r.data.data.goods.singleprice) var t = parseFloat(r.data.data.goods.singleprice) + parseFloat(r.data.data.goods.freight);
                    r.setData({
                        total: t
                    }), "" != a.data.result.address && r.setData({
                        address: a.data.result.address,
                        aid: a.data.result.address.id
                    });
                }
            }
        });
    },
    toStart: function() {
        wx.reLaunch({
            url: "../../index/index"
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
                mobile: t.addressInfo.mobile
            }, s = t.id;
            a.setData({
                address: e,
                aid: s
            }), console.log(wx.getStorageSync("addrdata")), console.log(a.data.address), console.log(a.data.aid), 
            wx.removeStorageSync("addrdata");
        }
    },
    bindFormSubmit: function(r) {
        var i = this;
        "undefined" != s ? d.sendRequest({
            url: "?r=wxapp.groups.orders.confirm",
            data: {
                utoken: o,
                id: a,
                aid: i.data.aid,
                message: r.detail.value.prompt,
                type: t,
                heads: s,
                teamid: e
            },
            method: "POST",
            success: function(a) {
                a.data.status < 0 ? wx.showToast({
                    title: "失败",
                    icon: "success",
                    duration: 2e3
                }) : wx.reLaunch({
                    url: "../cashier/index?orderid=" + a.data.result.orderid + "&teamid=" + e
                });
            }
        }) : d.sendRequest({
            url: "?r=wxapp.groups.orders.confirm",
            data: {
                utoken: o,
                id: a,
                aid: i.data.aid,
                message: r.detail.value.prompt,
                type: t,
                teamid: e
            },
            method: "POST",
            success: function(a) {
                a.data.status < 0 ? wx.showToast({
                    title: "失败",
                    icon: "success",
                    duration: 2e3
                }) : wx.reLaunch({
                    url: "../cashier/index?orderid=" + a.data.result.orderid + "&teamid=" + e
                });
            }
        });
    },
    addressSelect: function() {
        wx.navigateTo({
            url: "../../address/select/index?addr=addr"
        });
    },
    todetail: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    }
});