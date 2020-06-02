var a = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var e = "预约成功", n = "查看订单";
        1 == a.globalData.formItem.t && (e = "咨询提交成功", n = "查看我的咨询"), wx.setNavigationBarTitle({
            title: e
        }), this.setData({
            btnContent: n,
            title: e
        });
    },
    viewMyOrder: function() {
        wx.navigateTo({
            url: "/pages/myOrder/myOrder?currentTab=0&fromBookSuc=true"
        });
    },
    backToIndex: function() {
        wx.navigateTo({
            url: "/pages/index/index"
        }), wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onShareAppMessage: function() {
        var t = this.data.title, e = "";
        if (a.globalData.wxappInfo && a.globalData.wxappInfo.wxShare) {
            var n = a.globalData.wxappInfo.wxShare.tle, o = a.globalData.wxappInfo.wxShare.p, r = a.globalData.wxappInfo.wxShare.it, i = a.globalData.wxappInfo.wxShare.tt;
            n && i && (t = n), o && r && (e = o);
        }
        return {
            title: t,
            imageUrl: e
        };
    }
});