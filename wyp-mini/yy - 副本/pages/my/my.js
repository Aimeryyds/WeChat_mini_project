var n = getApp(), t = require("../../utils/hdweapp.js"), e = require("../../utils/paramConfig.js").ParamConfig, o = require("../../utils/request.js"), i = (o.RequestGet, 
o.RequestCookie), a = null;

Page({
    data: {
        statusBar: {
            title: "YY直播",
            height: n.globalData.systemInfo.statusBarHeight
        },
        userInfo: {
            nickName: "",
            hasLogin: !1,
            udbInfo: null,
            yyNum: "",
            avatar: ""
        }
    },
    getYYUserInfo: function() {
        var n = this, t = "", o = e.YY_COM_HOST + "/zone/userinfo/getUserInfo.json";
        for (var r in a) "partnerImage" != r && "partnerNickname" != r && (t += r + "=" + a[r] + "; ");
        i(o, t).then(function(t) {
            t.code || (a.yy_num = t.data.yy_num, n.setData({
                udbInfo: a
            }));
        });
    },
    fetchLoginInfo: function() {
        if (a && a.yyuid) {
            if (this.setData({
                hasLogin: !0
            }), a && a.yy_num) return;
            this.getYYUserInfo();
        }
    },
    getuserinfoLogin: function(t) {
        wx.showLoading({
            title: "加载中..."
        });
        var e = t.currentTarget.dataset.url, o = this;
        if (a && a.yyuid) return o.setData({
            hasLogin: !0,
            udbInfo: a
        }), void o.gotoUrl(e);
        n.getUdbLogin(t.detail).then(function(n) {
            if (wx.hideLoading(), 1 == n.rcode) if (n && n.yyuid) {
                if (o.setData({
                    hasLogin: !0
                }), o.data.udbInfoObj && o.data.udbInfoObj.yy_num) return;
                a = n, o.gotoUrl(e), o.getYYUserInfo();
            } else wx.showToast({
                title: "登录失败~",
                icon: "none",
                duration: 2e3
            }); else 100 == a.rcode ? wx.showToast({
                title: "用户被封禁",
                icon: "none"
            }) : wx.showToast({
                title: "登录失败",
                icon: "none"
            });
        }).catch(function(n) {
            wx.showToast({
                title: n
            });
        });
    },
    gotoUrl: function(n) {
        wx.hideLoading(), n && n && wx.navigateTo({
            url: n
        });
    },
    onShareAppMessage: function() {
        return {
            title: "YY直播",
            path: "/pages/my/my?father_openId=" + (wx.getStorageSync("HDSDK_openid") || "") + "&origin_channel=" + (wx.getStorageSync("origin_channel") || "wx_miniapp")
        };
    },
    onLoad: function(e) {
        t.Page.init(), n.reportChnInfo(e);
    },
    onShow: function() {
        a = wx.getStorageSync("udbInfo"), n.getOpenId(), this.fetchLoginInfo();
    },
    onHide: function() {},
    onTabItemTap: function() {
        t.event({
            id: "10003",
            label: "0003"
        });
    },
    onUnload: function() {}
});