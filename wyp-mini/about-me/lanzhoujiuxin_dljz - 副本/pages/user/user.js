var e = getApp();

Page({
    data: {
        avatarUrl: "",
        nickName: "",
        globalColor: "",
        showMore: !1,
        hasUserInfo: !1
    },
    components: {
        login: {
            title: "我的",
            isUserCol: !0
        }
    },
    onLoad: function() {},
    myPageAddr: function() {
        e.globalData.wxAppRequest.getLocationFromBaidu(this.data.myPage.adr);
    },
    toMyOrderWaitPay: function() {
        wx.navigateTo({
            url: "/pages/myOrder/myOrder?currentTab=1"
        });
    },
    toMyOrderProccess: function() {
        wx.navigateTo({
            url: "/pages/myOrder/myOrder?currentTab=2"
        });
    },
    toMyOrderAppraise: function() {
        wx.navigateTo({
            url: "/pages/myOrder/myOrder?currentTab=3"
        });
    },
    tpMyOrderCancel: function() {
        wx.navigateTo({
            url: "/pages/myOrder/myOrder?currentTab=4"
        });
    },
    toMyOrderAll: function() {
        wx.navigateTo({
            url: "/pages/myOrder/myOrder"
        });
    },
    viewMoreOrNot: function() {
        var e = this.data.showMore;
        this.setData({
            showMore: !e
        });
    },
    makePhoneCall: function() {
        var e = this.data.cusService.phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    backToHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    showAdvertising: function(a) {
        e.globalData.wxAppRequest.logDog(7000032, 0), e.globalData.isVerFree ? e.globalData.wxAppRequest.logDog(7000047, 1) : e.globalData.wxAppRequest.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=0"
        });
    },
    showServiceAdvertising: function(a) {
        e.globalData.wxAppRequest.logDog(7000032, 3), e.globalData.isVerFree ? e.globalData.wxAppRequest.logDog(7000047, 1) : e.globalData.wxAppRequest.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=1"
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    }
});