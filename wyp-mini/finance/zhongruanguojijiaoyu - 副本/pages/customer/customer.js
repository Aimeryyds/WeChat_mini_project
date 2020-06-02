var t = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 1e3,
    timingFunction: "ease",
    delay: 0
});

Page({
    data: {
        animationData: t
    },
    onLoad: function() {
        var t = this;
        wx.request({
            url: "https://miniprogram.zretc.com/api/customer.json",
            success: function(a) {
                t.setData({
                    customer: a.data.question
                });
            }
        });
    },
    questionClick: function(t) {
        var a = this.data.customer;
        a[t.target.id].isShow = !a[t.target.id].isShow, this.setData({
            customer: a
        });
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: "4006663775"
        });
    }
});