var t = require("../../14E98D478A740DDF728FE5401BCCC841.js"), e = getApp();

Page({
    data: {
        navTxtStr: "充值",
        navTopBackShow: !0,
        navHeight: e.globalData.navStatusbarHeight + e.globalData.navTopHeight,
        userInfo: {},
        tokensAmount: 0,
        productInfoList: [],
        nowCss: "no"
    },
    onLoad: function(t) {},
    onReady: function() {
        this.myComponent = this.selectComponent("#mineTopBar");
    },
    onShow: function() {
        var t = this;
        t.setData({
            userInfo: e.currentUser
        }), t.getTokensAccount(), t.getProduct();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    MethodComponent: function() {
        this.myComponent.ClickBack();
    },
    getTokensAccount: function() {
        var n = this, o = Date.parse(new Date()), s = {
            api_key: e.opApiKey,
            v: "1",
            call_id: o,
            session_key: e.currentUser.session_key,
            client_info: e.client_info
        }, a = t.getsign(s);
        s.sig = a, wx.request({
            url: e.apiurl + "token/getTokensAccount",
            data: s,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                if (t.data.TokensAccountResponse) {
                    var e = parseInt(t.data.TokensAccountResponse.tokensAmount);
                    n.setData({
                        tokensAmount: e
                    });
                }
            }
        });
    },
    getProduct: function() {
        var n = this, o = Date.parse(new Date()), s = {
            api_key: e.opApiKey,
            v: "1",
            call_id: o,
            session_key: e.currentUser.session_key,
            productType: 0,
            status: 1
        }, a = t.getsign(s);
        s.sig = a, wx.request({
            url: e.apiurl + "token/getProduct",
            method: "POST",
            data: s,
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                var e = t.data, o = [];
                e.tokensProductInfoList && e.tokensProductInfoList.length > 0 && e.tokensProductInfoList.forEach(function(t, e) {
                    7 != t.id && (t.unitPrice = parseInt(t.unitPrice), o.push(t));
                }), n.setData({
                    productInfoList: o
                });
            }
        });
    },
    payClick: function(e) {
        var n = this, o = e.currentTarget.dataset.item, s = e.currentTarget.dataset.index;
        n.setData({
            nowCss: s
        }), t.createRenrenguoOrder("token/createRechargeOrder", o), t.paySuccessCheckCallback = function(e) {
            n.setData({
                nowCss: "no"
            }), t.getMyTokensAccount("token/getTokensAccount"), n.getTokensAccount();
        }, t.payFailCheckCallback = function(t) {
            n.setData({
                nowCss: "no"
            });
        };
    }
});