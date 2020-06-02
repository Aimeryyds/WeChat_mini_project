var o = getApp();

Page({
    data: {
        userInfo: {},
        ewm: o.globalData.test1Url + "/ehis-hm/hys/img/123.jpg"
    },
    querySignBank: function() {
        wx.request({
            url: o.globalData.baseUrl + "/ehis-hm/common/api/v1/querySignBank.do",
            data: {
                bankNo: this.data.bankNo
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                wx.hideLoading();
                var a = o.data["ins-status"];
                "00" == a ? wx.showModal({
                    content: o.data.message,
                    showCancel: !1,
                    confirmText: "确定",
                    confirmColor: "#ff6600",
                    success: function(o) {
                        o.confirm ? wx.navigateTo({
                            url: "../myPolicy/myPolicy"
                        }) : o.cancel && console.log("用户点击取消");
                    }
                }) : "01" == a ? Toast(o.data.message) : "02" == a ? wx.showModal({
                    content: o.data.message,
                    showCancel: !1,
                    confirmText: "去购买",
                    confirmColor: "#ff6600",
                    success: function(o) {
                        o.confirm ? wx.navigateTo({
                            url: "../index/index"
                        }) : o.cancel && console.log("用户点击取消");
                    }
                }) : o.data.message && Toast(o.data.message);
            },
            fail: function() {
                wx.hideLoading();
            },
            complete: function() {}
        });
    },
    goOrder: function() {
        wx.redirectTo({
            url: "../orderstate/orderstate"
        });
    },
    onLoad: function() {
        console.log("onLoad");
        var a = this;
        o.getUserInfo(function(o) {
            a.setData({
                userInfo: o
            });
        });
    }
});