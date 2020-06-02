var o = getApp(), a = o.requirejs("core");

Page({
    data: {
        addressData: {},
        address: !1,
        show: !1,
        freight: 0,
        totalPrice: 0
    },
    onLoad: function(a) {
        wx.showLoading({
            title: "正在加载",
            mask: !0
        }), this.setData({
            address: o.goodsInfo.address,
            goodsNum: o.goodsInfo.num,
            goodsInfo: o.goodsInfo,
            goodsPrice: o.goodsInfo.goodsPrice,
            totalPrice: o.goodsInfo.goodsPrice * o.goodsInfo.num,
            show: !0
        }), wx.hideLoading();
    },
    onShow: function(a) {
        wx.showLoading({
            title: "正在加载",
            mask: !0
        });
        var s = o.getCache("orderAddress");
        s && (s.userName = s.consigner, s.telNumber = s.phone, this.setData({
            address: s
        })), wx.hideLoading();
    },
    showAddressList: function() {
        wx.navigateTo({
            url: "/yb_shop/pages/member/address/select"
        });
    },
    goToPay: function() {
        var s = this;
        if (!this.data.address) return o.showToast(this, "请选择地址"), !1;
        var e = {
            pid: s.data.goodsInfo.groupPid,
            isGroup: s.data.goodsInfo.buyType,
            gid: s.data.goodsInfo.id,
            goodsNum: s.data.goodsNum,
            limitTime: s.data.goodsInfo.limitTime,
            address: JSON.stringify(s.data.address),
            totalPrice: s.data.goodsInfo.goodsPrice * s.data.goodsNum + parseFloat(s.data.freight),
            uid: o.getCache("userinfo").uid
        };
        this.data.oid || (wx.showLoading({
            title: "正在提交",
            mask: !0
        }), a.get("Pintuan/ptCreateOrder", e, function(o) {
            wx.hideLoading(), 0 == o.code ? (s.setData({
                oid: o.info
            }), a.get("Pintuan/ptPay", {
                oid: o.info,
                openid: getApp().getCache("userinfo").openid
            }, function(s) {
                0 == s.code ? wx.requestPayment({
                    timeStamp: s.info.timeStamp,
                    nonceStr: s.info.nonceStr,
                    package: s.info.package,
                    signType: "MD5",
                    paySign: s.info.paySign,
                    success: function(a) {
                        console.log(a), 1 == e.isGroup ? wx.redirectTo({
                            url: "/yb_shop/pages/pintuan/pages/group/detail?id=" + o.info
                        }) : wx.redirectTo({
                            url: "/yb_shop/pages/pintuan/pages/orders/index"
                        });
                    },
                    fail: function(o) {
                        a.alert("您已取消了支付", function() {
                            wx.redirectTo({
                                url: "/yb_shop/pages/pintuan/pages/orders/index"
                            });
                        });
                    }
                }) : a.alert(s.msg, function() {
                    wx.redirectTo({
                        url: "/yb_shop/pages/pintuan/pages/orders/index"
                    });
                });
            })) : a.alert(o.msg);
        }));
    },
    minus: function() {
        var o = 1 < this.data.goodsNum ? --this.data.goodsNum : 1, a = this.data.goodsPrice * o;
        this.setData({
            goodsNum: o,
            totalPrice: a.toFixed(2)
        });
    },
    plus: function() {
        var o = ++this.data.goodsNum, a = this.data.goodsPrice * o;
        this.setData({
            goodsNum: o,
            totalPrice: a.toFixed(2)
        });
    }
});