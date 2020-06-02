var t = require("../../14E98D478A740DDF728FE5401BCCC841.js"), e = getApp(), n = !0;

Page({
    data: {
        navTxtStr: "我的贡献",
        navTopBackShow: !0,
        padBottom: 0,
        navHeight: e.globalData.navStatusbarHeight + e.globalData.navTopHeight,
        pageHeight: e.globalData.screenHeight - e.globalData.navStatusbarHeight - e.globalData.navTopHeight,
        consumeList: [],
        consumeOff: 0,
        limit: 20
    },
    onLoad: function(t) {
        this.getChangeListNew();
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
    getChangeListNew: function() {
        var o, a = this;
        if (!n) return !1;
        o = a.data.consumeOff;
        var i = Date.parse(new Date()), s = {
            api_key: e.opApiKey,
            v: "1",
            call_id: i,
            session_key: e.currentUser.session_key,
            changeType: 2,
            client_info: e.client_info,
            offset: o,
            limit: a.data.limit
        };
        s.sig = t.getsign(s), wx.request({
            url: e.apiurl + "token/getChangeListNew",
            data: s,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                console.log("rewewerwerwerew==", t);
                var e = t.data;
                if (e.infoList && e.infoList.length > 0) {
                    e.infoList.forEach(function(t, e) {
                        t.tokenAmountStr = parseInt(t.tokenAmountStr);
                    });
                    var o = [];
                    o = a.data.consumeList.concat(e.infoList), a.setData({
                        consumeList: o,
                        consumeOff: a.data.consumeOff + a.data.limit
                    });
                } else n = !1;
            }
        });
    }
});