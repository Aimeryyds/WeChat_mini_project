var t = require("../../14E98D478A740DDF728FE5401BCCC841.js"), a = getApp(), e = !0, n = !0;

Page({
    data: {
        navTxtStr: "我的账单",
        navTopBackShow: !0,
        navHeight: a.globalData.navStatusbarHeight + a.globalData.navTopHeight,
        pageTop: a.globalData.navStatusbarHeight + a.globalData.navTopHeight + 45,
        pageHeight: a.globalData.screenHeight - a.globalData.navStatusbarHeight - a.globalData.navTopHeight - 45,
        rechargeOff: 0,
        consumeOff: 0,
        limit: 20,
        type: 1,
        rechangeList: [],
        consumeList: [],
        amountNum: 0,
        rechargeCss: "active",
        consumeCss: ""
    },
    onLoad: function(t) {
        var a = this;
        t.amountNum || (t.amountNum = 0), a.setData({
            amountNum: t.amountNum
        }), a.onRecharge();
    },
    onReady: function() {
        this.myComponent = this.selectComponent("#mineTopBar");
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.getChangeListNew();
    },
    MethodComponent: function() {
        this.myComponent.ClickBack();
    },
    onRecharge: function() {
        var t = this;
        t.setData({
            type: 1,
            rechargeCss: "active",
            consumeCss: ""
        }), t.data.rechangeList && t.data.rechangeList.length <= 0 && t.getChangeListNew();
    },
    onConsume: function() {
        var t = this;
        t.setData({
            type: 2,
            rechargeCss: "",
            consumeCss: "active"
        }), t.data.consumeList && t.data.consumeList.length <= 0 && t.getChangeListNew();
    },
    getChangeListNew: function() {
        var i, o = this;
        if (1 == o.data.type) {
            if (!e) return !1;
            i = o.data.rechargeOff;
        } else {
            if (!n) return !1;
            i = o.data.consumeOff;
        }
        var s = Date.parse(new Date()), c = {
            api_key: a.opApiKey,
            v: "1",
            call_id: s,
            session_key: a.currentUser.session_key,
            changeType: o.data.type,
            client_info: a.client_info,
            offset: i,
            limit: o.data.limit
        };
        c.sig = t.getsign(c), wx.request({
            url: a.apiurl + "token/getChangeListNew",
            data: c,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                var a = t.data;
                if (!(a.infoList && a.infoList.length > 0)) return 1 == o.data.type ? e = !1 : n = !1, 
                !1;
                a.infoList.forEach(function(t, a) {
                    t.tokenAmountStr = parseInt(t.tokenAmountStr);
                });
                var i = [];
                1 == o.data.type ? (i = o.data.rechangeList.concat(a.infoList), o.setData({
                    rechangeList: i,
                    rechargeOff: o.data.rechargeOff + o.data.limit
                })) : (i = o.data.consumeList.concat(a.infoList), o.setData({
                    consumeList: i,
                    consumeOff: o.data.consumeOff + o.data.limit
                }));
            }
        });
    },
    toBillDetails: function(t) {
        var a = t.currentTarget.dataset.item;
        a = JSON.stringify(a), wx.navigateTo({
            url: "../myBillDetails/myBillDetails?details=" + a + "&type=" + this.data.type
        });
    }
});