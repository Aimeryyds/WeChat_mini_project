Page({
    data: {
        orderId: "",
        myList: ""
    },
    toStart: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    },
    onLoad: function(t) {
        "myList" == t.myList && this.setData({
            myList: !0
        });
        t.order_id;
        var a = server.globalData.order, e = server.globalData.wxdata;
        this.setData({
            order: a,
            wxdata: e
        });
    },
    pay: function() {
        var t = server.globalData.wxdata.wdata, a = t.timeStamp + "", e = t.nonceStr + "", i = t.package, s = t.sign;
        wx.requestPayment({
            nonceStr: e,
            package: i,
            signType: "MD5",
            timeStamp: a,
            paySign: s,
            success: function(t) {
                wx.showToast({
                    title: "支付成功",
                    image: "https://tws.cnweisou.com/images/eidtSucc.png",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../../member/index/index"
                    });
                }, 2e3);
            },
            fail: function(t) {
                wx.showToast({
                    title: "支付失败",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 1500
                }), that.data.myList ? setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1500) : setTimeout(function() {
                    wx.redirectTo({
                        url: "../list/list?id=1&currid=1"
                    });
                }, 1500);
            }
        });
    }
});