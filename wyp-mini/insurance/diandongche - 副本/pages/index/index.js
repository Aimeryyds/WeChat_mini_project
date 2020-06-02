var e = getApp();

Page({
    data: {
        onloadModal: !0,
        mySecret: ""
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function(a) {
        console.log("option.dealer===" + a.dealer), void 0 != a.dealer && null != a.dealer && "" != a.dealer && (this.setData({
            mySecret: {
                appId: a.dealer,
                appSecret: "123456"
            }
        }), e.globalData.secret = this.data.mySecret), "1" == wx.getStorageSync("userType") ? (this.setData({
            onloadModal: !1
        }), wx.redirectTo({
            url: "../dealerhome/dealerhome"
        })) : (this.setData({
            onloadModal: !1
        }), wx.redirectTo({
            url: "../home/home"
        }));
    }
});