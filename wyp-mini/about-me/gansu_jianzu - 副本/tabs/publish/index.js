Page({
    data: {},
    bindPublish: function(a) {
        var t = a.currentTarget.dataset.url;
        console.log(a);
        var e = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: e
        }), e.mobile ? wx.navigateTo({
            url: t
        }) : this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    }
});