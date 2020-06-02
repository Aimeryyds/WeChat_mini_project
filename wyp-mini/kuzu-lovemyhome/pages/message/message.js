var t = getApp(), e = require("../../utils/gio-minp/index.js").default, a = require("../../sdk/gioConfig.js").default;

e("setConfig", a), Page({
    data: {
        list: {},
        loginStatus: 0,
        cityId: 1,
        showAllData: !0,
        unReadNum: 0
    },
    onLoad: function(t) {
        console.log(t), void 0 !== t.cityId && this.setData({
            cityId: t.cityId
        });
        var e = wx.getStorageSync("loginStatus");
        if (1 == e) {
            var a = wx.getStorageSync("userInfo");
            this.setData({
                loginStatus: e,
                uid: a.uid,
                userInfo: a
            });
        }
        this.connect();
    },
    onReady: function() {},
    getMessageList: function() {
        var e = this, a = t.globalData.url_host;
        wx.request({
            url: a + "/wxim/messagelist",
            method: "POST",
            data: {
                user_id: e.data.uid
            },
            success: function(t) {
                console.log(t.data);
                for (var a = 0, i = 0; i < t.data.list.length; i++) {
                    for (var o in t.data.list[i]) a += parseInt(t.data.list[i][o].is_viewed_num);
                    a > 99 && (a = "99+");
                }
                e.setData({
                    list: t.data.list,
                    showAllData: !1,
                    unReadNum: a
                });
            }
        });
    },
    connect: function() {
        var t = this;
        wx.onSocketMessage(function(e) {
            var a = JSON.parse(e.data);
            console.log(a), void 0 === a.type && t.getMessageList(), console.log(JSON.parse(e.data));
        });
    },
    getWesocketIp: function() {
        var e = this, a = t.url_host;
        wx.request({
            url: a + "/wxim/getwebsocketip",
            method: "POST",
            data: {
                user_id: e.data.uid
            },
            success: function(t) {
                t.data ? (e.setData({
                    websocket_ip: t.data
                }), e.connect()) : e.getWesocketIp();
            }
        });
    },
    toIm: function(a) {
        var i = a.currentTarget.dataset.bid;
        e("track", "onlineconsult", {
            agentid_var: i
        }), wx.requestSubscribeMessage({
            tmplIds: t.tmplids,
            success: function(t) {
                console.log(t);
            }
        }), wx.navigateTo({
            url: "../im/im?bid=" + i
        });
    },
    imgError: function(t) {
        var e = {};
        e["list[" + t.target.dataset.k + "]." + t.target.dataset.index + ".brokerInfo.join_head_img"] = "https://res.5i5j.com/cache/weixin/common/moHead.png", 
        console.log(e), this.setData(e), console.log(this.data.list);
    },
    toUser: function() {
        wx.redirectTo({
            url: "../user/user"
        });
    },
    toHome: function() {
        wx.reLaunch({
            url: "../index?city=" + this.data.cityId
        });
    },
    toLogin: function() {
        wx.redirectTo({
            url: "../login/login?url=message/message&cityId =" + this.data.cityId
        });
    },
    toSale: function() {
        var t = this.data.cityId;
        wx.redirectTo({
            url: "../sale/sale?listParam=1&cityId=" + t
        });
    },
    onShow: function() {
        1 == this.data.loginStatus && this.getMessageList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});