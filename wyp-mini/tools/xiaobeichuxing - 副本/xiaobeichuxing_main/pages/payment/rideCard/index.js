var t = require("../../../utils/https.js"), a = new getApp();

Page({
    data: {
        cur: 0,
        cardList: [],
        shoumingList: [ "• 免押金骑行卡是为了保障正式用户的使用权益所采用的会员制服务;", "• 凡购买了免押金骑行卡的用户即属于小呗出行正式用户, 可享受免去支付额外的租车使用押金的服务;", "• 不同类型的免押金骑行卡对应的免押金天数(次数)不同;", "• 免押金骑行卡有效期从支付成功的当天开始计算, 购买成功后可到我的钱包--押金 查看有效期;", "• 免押金骑行卡超过有效期后, 需再次购买才能继续用车, 否则无法用车;" ],
        myHight: "",
        ishow: !0
    },
    myEventListener: function(t) {
        this.setData({
            myHight: t.detail
        });
    },
    userProtocol: function() {
        wx.navigateTo({
            url: "../recharge/userProtocol/index"
        });
    },
    pay: function() {
        if ("" !== this.data.cur) {
            var a = {
                id: this.data.cardList[this.data.cur].id,
                paytype: 4
            };
            t.req11("RidingCard/BuyFeeRidingCard", a, function(t, a) {
                if (0 == a.data.code) {
                    var n = JSON.parse(JSON.parse(a.data.data).Obj);
                    wx.requestPayment({
                        timeStamp: n.timeStamp,
                        nonceStr: n.nonceStr,
                        package: n.package,
                        signType: "MD5",
                        paySign: n.paySign,
                        success: function(t) {
                            wx.showToast({
                                title: "充值成功",
                                icon: "success",
                                duration: 1e3
                            }), wx.setStorageSync("hasridingcard", !0), setTimeout(function() {
                                wx.redirectTo({
                                    url: "../../index/index"
                                });
                            }, 1e3);
                        },
                        fail: function(t) {
                            console.log("fail:" + JSON.stringify(t));
                        }
                    });
                } else wx.showModal({
                    title: "充值失败",
                    content: a.data.retmsg,
                    showCancel: !1,
                    success: function(t) {}
                });
            });
        }
    },
    change: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            cur: a
        });
    },
    GetFeeRidingCard: function() {
        var n = this;
        t.req11("RidingCard/GetFeeRidingCard", {
            areaid: a.globalData.myAreaid
        }, function(t, a) {
            if (0 == a.data.code) {
                var e = a.data.data;
                if (0 == e.length && (n.setData({
                    ishow: !1
                }), wx.showModal({
                    title: "提示",
                    content: "当前城市无在售免押金骑行卡",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm ? wx.navigateBack() : t.cancel && console.log("用户点击取消");
                    }
                })), !e) return;
                e.length > 0 && n.setData({
                    cardList: e
                });
            } else wx.showModal({
                title: "",
                content: a.data.retmsg
            });
        });
    },
    tomy: function() {
        wx.navigateTo({
            url: "./my"
        });
    },
    navBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(t) {
        this.GetFeeRidingCard();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});