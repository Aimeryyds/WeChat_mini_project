var t, e = require("../../../utils/server.js"), s = wx.getStorageSync("utoken");

Page({
    data: {
        addressList: []
    },
    onLoad: function(e) {
        s = wx.getStorageSync("utoken"), void 0 != e.addr && (t = e.addr);
    },
    onShow: function() {
        this.getAddressList();
    },
    add: function() {
        wx.navigateTo({
            url: "../add/add"
        });
    },
    editAddress: function(t) {
        wx.navigateTo({
            url: "../add/add?id=" + t.currentTarget.dataset.id
        });
    },
    deleteAddress: function(t) {
        var a = this, d = t.currentTarget.dataset.id;
        wx.showModal({
            title: "真的要删除这个地址吗？",
            content: "",
            success: function(n) {
                if (n.cancel) return !1;
                e.sendRequest({
                    url: "?r=wxapp.member.address.delete",
                    data: {
                        utoken: s,
                        id: t.currentTarget.dataset.id
                    },
                    success: function(t) {
                        if (1 == t.data.status) {
                            var e = wx.getStorageSync("addrID");
                            d == e && wx.removeStorageSync("addrID"), wx.showToast({
                                title: "成功",
                                icon: "success",
                                duration: 800,
                                success: function() {
                                    a.getAddressList();
                                }
                            });
                        }
                    }
                });
            }
        });
    },
    getAddressList: function() {
        var t = this;
        e.sendRequest({
            url: "?r=wxapp.member.address",
            data: {
                utoken: s
            },
            success: function(e) {
                console.log(e), t.setData({
                    addressList: e.data.result
                });
            }
        });
    },
    setdefault: function(a) {
        var d = this;
        if (1 == a.currentTarget.dataset.isdefault) return !1;
        wx.showModal({
            title: "设当前地址为默认地址？",
            content: "",
            success: function(n) {
                n.confirm ? e.sendRequest({
                    url: "?r=wxapp.member.address.setdefault",
                    data: {
                        utoken: s,
                        id: a.currentTarget.dataset.id
                    },
                    success: function(e) {
                        1 == e.data.status && wx.showToast({
                            title: "成功",
                            icon: "success",
                            duration: 800,
                            success: function() {
                                void 0 != t ? wx.navigateBack({
                                    delta: 2
                                }) : d.getAddressList();
                            }
                        });
                    }
                }) : n.cancel;
            }
        });
    }
});