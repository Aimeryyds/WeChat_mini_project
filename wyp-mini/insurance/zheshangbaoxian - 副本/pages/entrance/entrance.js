var e = getApp();

Page({
    data: {
        scene: "default",
        motto: "小程序红包功能研究中,正常功能暂不可用",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    jumpPage2: function() {
        wx.navigateTo({
            url: "../redPacket/redPacket"
        });
    },
    onLoad: function() {
        var a = this;
        e.globalData.userInfo ? this.setData({
            userInfo: e.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? e.userInfoReadyCallback = function(e) {
            a.setData({
                userInfo: e.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(o) {
                e.globalData.userInfo = o.userInfo, a.setData({
                    userInfo: o.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(a) {
        console.log(a), e.globalData.userInfo = a.detail.userInfo, this.setData({
            userInfo: a.detail.userInfo,
            hasUserInfo: !0
        });
    },
    getRedPacketStandard: function(e) {
        console.log(e), this.setData({
            scene: "场景值为" + launchOption.scene
        }), 1 == res.data.code ? (console.log(res.data), wx.sendBizRedPacket({
            timeStamp: res.data.timeStamp,
            nonceStr: res.data.nonceStr,
            package: res.data.package,
            signType: res.data.signType,
            paySign: res.data.paySign,
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log(e);
            },
            complete: function(e) {
                console.log(e);
            }
        })) : wx.showToast({
            title: res.data.msg,
            icon: "none"
        });
    },
    getScene: function(e) {
        var a = wx.getLaunchOptionsSync();
        this.setData({
            scene: "场景值为" + a.scene
        }), console.error("launchOption: " + a.scene);
    },
    getRedPacket: function(e) {
        console.log(e), wx.sendBizRedPacket({
            timeStamp: "1568898784",
            nonceStr: "123456789",
            package: "sendid%3D242e8abd163d300019b2cae74ba8e8c06e3f0e51ab84d16b3c80decd22a5b672%26ver%3D8%26sign%3D4110d649a5aef52dd6b95654ddf91ca7d5411ac159ace4e1a766b7d3967a1c3dfe1d256811445a4abda2d9cfa4a9b377a829258bd00d90313c6c346f2349fe5d%26mchid%3D11475856%26appid%3Dwxd27ebc41b85ce36d",
            signType: "MD5",
            paySign: "06190fea34e28f6d967a9c9af03a8f79",
            success: function(e) {
                console.log("success"), console.log(e), wx.showModal({
                    title: "提示",
                    content: e
                });
            },
            fail: function(e) {
                console.log("fail"), console.log(e), wx.showModal({
                    title: "提示",
                    content: e.errMsg
                });
            },
            complete: function(e) {
                console.log("complete"), console.log(e), wx.showModal({
                    title: "提示",
                    content: e
                });
            }
        });
    }
});