function t(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

require("../../utils/util.js");

var e = require("../../utils/https.js").imgurl;

Page({
    data: {
        userList: [ {
            name: "头像",
            Rcont: e + "my.png",
            url: ""
        }, {
            name: "手机号",
            Rcont: "未登录",
            url: ""
        }, {
            name: "实名认证",
            Rcont: "",
            url: ""
        } ],
        certify: "",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onShow: function(e) {
        var n = wx.getStorageSync("certify"), i = wx.getStorageSync("account"), a = "userList[1].Rcont", o = "userList[1].url";
        if ("" == i) {
            var r;
            this.setData((r = {}, t(r, a, "请先登录 >"), t(r, o, "../login/phoneLogin"), r));
        } else {
            var s;
            this.setData((s = {}, t(s, a, i + " >"), t(s, o, "phone/index"), s));
        }
        if (2 == n || 1 == n) this.setData(t({}, "userList[2].Rcont", "已认证")); else {
            var u;
            this.setData((u = {}, t(u, "userList[2].Rcont", "未认证"), t(u, "userList[2].url", "authentication/index"), 
            u));
        }
        this.setData({
            certify: n
        });
    },
    navTonew: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: e
        });
    },
    authentication: function() {
        wx.navigateTo({
            url: "authentication/index"
        });
    },
    Cancellation: function() {
        wx.showModal({
            title: "",
            content: "确定注销吗?",
            success: function(t) {
                t.confirm ? (wx.clearStorage(), wx.navigateTo({
                    url: "../login/phoneLogin"
                })) : t.cancel;
            }
        });
    }
});