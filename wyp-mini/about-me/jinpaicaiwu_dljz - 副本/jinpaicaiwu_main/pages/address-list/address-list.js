function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
    return Array.from(t);
}

require("../../wxParse/common.js");

var e = getApp();

Page({
    data: {
        address: {},
        prompt: {
            hidden: !0,
            icon: "",
            title: "还没有收货地址呢",
            text: "暂时没有相关数据"
        },
        items: [],
        areaname: [],
        fr: ""
    },
    onLoad: function(t) {
        var e = this;
        t && "chose" == t.fr && e.setData({
            fr: "chose"
        }), e.onShow();
    },
    onShow: function() {
        var t = this;
        wx.setStorage({
            key: "address",
            data: ""
        }), e.apiRequest("user", "getarea", {
            data: {
                type: "ucenter"
            },
            success: function(e) {
                e.data.addresses.length > 0 ? t.setData({
                    items: e.data.addresses,
                    areaname: e.data.areaname,
                    "prompt.hidden": !0
                }) : t.setData({
                    "prompt.hidden": !1
                });
            }
        });
    },
    toAddressEdit: function(t) {
        wx.navigateTo({
            url: "../address/address?id=" + t.currentTarget.dataset.id
        });
    },
    toAddressAdd: function(t) {
        console.log(t), wx.navigateTo({
            url: "../address/address"
        });
    },
    cancelAddress: function(t) {
        var a = t.currentTarget.dataset.id, s = this;
        a && wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该地址",
            success: function(t) {
                t.confirm ? e.apiRequest("user", "del_consignee", {
                    data: {
                        id: a
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "删除成功"
                        }), s.onLoad()) : wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    setDefalutAddress: function(t) {
        var a = t.currentTarget.dataset.id, s = this;
        a && e.apiRequest("user", "setDefaultAddress", {
            data: {
                id: a
            },
            success: function(t) {
                s.onLoad();
            }
        });
    },
    getList: function() {
        var e = this, a = this.data.address, s = a.params;
        this.address.queryAsync(s).then(function(s) {
            console.log(s), 0 == s.meta.code && (a.items = [].concat(t(a.items), t(s.data.items)), 
            a.paginate = s.data.paginate, a.params.page = s.data.paginate.next, a.params.limit = s.data.paginate.perPage, 
            e.setData({
                address: a,
                "prompt.hidden": a.items.length
            }));
        });
    },
    choseAddress: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.areaname, s = this.data.items, d = s[e];
        d.detail = "", d.prov_id > 0 && (d.detail += a[d.prov_id]), d.city_id > 0 && (d.detail += a[d.city_id]), 
        d.dist_id > 0 && (d.detail += a[d.dist_id]), d.detail += d.detailed_addr;
        this.data.fr;
        if (!"chose") return !1;
        wx.setStorage({
            key: "address",
            data: s[e],
            success: function() {
                wx.navigateBack();
            }
        });
    },
    onPullDownRefresh: function() {
        this.onShow(), wx.stopPullDownRefresh();
    }
});