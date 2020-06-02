var a = getApp();

Page({
    data: {
        items: []
    },
    onLoad: function(a) {
        wx.setNavigationBarTitle({
            title: "选择收货地址"
        }), this.onShow();
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        a.apiRequest("user", "getarea", {
            data: {
                type: "takeaway"
            },
            success: function(a) {
                a.data.addresses.length > 0 && t.setData({
                    items: a.data.addresses
                });
            }
        });
    },
    choseAddress: function(a) {
        var t = a.currentTarget.dataset.index, e = this.data.items;
        for (var n in e) e[n].checked = n == t;
        this.setData({
            items: e
        }), wx.setStorage({
            key: "takeaway_address",
            data: e[t],
            success: function() {
                wx.navigateBack();
            }
        });
    },
    add_address: function(t) {
        a.navigateTo({
            url: "../meal_add_edit/meal_add_edit"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});