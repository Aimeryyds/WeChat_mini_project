var n, o = getApp();

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        userInfo: null,
        bangding: "去绑定",
        avatarUrl: ""
    },
    onLoad: function(n) {
        var o = this;
        o.data.userInfo && ("1" == o.data.userInfo.status ? o.setData({
            bangding: "去解绑"
        }) : "4" == o.data.userInfo.status && o.setData({
            bangding: "去认证"
        }));
    },
    onShow: function() {
        var a = this;
        n = null, o.globalData.sessionToken && "" != o.globalData.sessionToken ? a.data.userInfo && null != a.data.userInfo && a.data.userInfo.avatarUrl && "" != a.data.userInfo.avatarUrl ? a.queryUserInfo() : a.queryUserInfo(function() {
            a.setNewUserInfo();
        }) : o.toCheckSession(function() {
            a.queryUserInfo(function() {
                a.setNewUserInfo();
            });
        });
    },
    toSaveFormId: function(a) {
        console.log(a);
        var t, e = a.detail.formId;
        t || (t = a.currentTarget.dataset.urltype), t && "MY_CLAIM" == t ? n = e : o.saveFormId(e, t);
    },
    onPopView: function(n) {
        console.log(n);
        if (n.detail.userInfo) {
            wx.showToast({
                title: "加载中",
                icon: "loading"
            });
            var a = n.currentTarget.dataset.urltype, t = n.detail.formId;
            o.sendRedirect(a, t);
        }
    },
    onMyClaim: function(a) {
        console.log(a);
        var t = a.detail.formId;
        a.detail.userInfo && wx.showActionSheet({
            itemList: [ "车险理赔查询", "意健险理赔查询", "家财险理赔查询" ],
            success: function(a) {
                console.log(a.tapIndex), wx.showToast({
                    title: "加载中",
                    icon: "loading"
                }), t || (t = n, n = null), 0 == a.tapIndex ? o.sendRedirect("AUTO_CLAIM", t) : 1 == a.tapIndex ? o.sendRedirect("HEALTH_CLAIM", t) : o.sendRedirect("FAMILY_CLAIM", t);
            },
            fail: function(n) {
                console.log(n);
            }
        });
    },
    queryUserInfo: function(n) {
        console.log("获取用户信息"), wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var a = this;
        wx.request({
            url: o.globalData.domainPath + o.globalData.projectName + "/queryUserInfo.do",
            data: {
                sessionToken: o.globalData.sessionToken
            },
            success: function(o) {
                console.log(o), o.data.userInfo ? (a.setUserInfoData(o.data.userInfo), wx.hideLoading(), 
                "function" == typeof n && n()) : (wx.hideLoading(), "function" == typeof n && n());
            },
            fail: function(o) {
                wx.hideLoading(), "function" == typeof n && n();
            }
        });
    },
    setNewUserInfo: function() {
        console.log("去从微信获取用户信息");
        var n = this;
        this.data.canIUse ? wx.getSetting({
            success: function(o) {
                console.log(o), o.authSetting["scope.userInfo"] && n.toGetUserInfo();
            },
            fail: function(n) {
                console.log(n), wx.hideLoading();
            }
        }) : n.toGetUserInfo();
    },
    toGetUserInfo: function() {
        console.log("设置最新微信获取用户信息");
        var n = this;
        wx.getUserInfo({
            success: function(o) {
                n.toUpUserInfo(o.userInfo), n.setUserInfoData({
                    avatarUrl: o.userInfo.avatarUrl,
                    nickName: o.userInfo.nickName
                });
            },
            complete: function(n) {
                wx.hideLoading();
            }
        });
    },
    bangding: function(a) {
        console.log(a);
        var t = this;
        if (a.detail.userInfo) if (t.data.userInfo && t.data.userInfo.status) if ("1" == t.data.userInfo.status) t.toUnbunding(); else {
            var e = n;
            n = null, t.toBinding(e);
        } else t.verifyBinding(o.globalData.sessionToken, function() {
            t.toUnbunding();
        }); else wx.hideLoading();
    },
    toBinding: function(n) {
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), o.sendRedirect("USERCENTER_TO_BINDING", n);
    },
    toUnbunding: function() {
        console.log("去解绑");
        var n = this;
        wx.hideLoading(), wx.showModal({
            title: "提示",
            content: "是否确定要解绑？",
            success: function(a) {
                console.log(a), a.confirm ? (wx.showLoading({
                    title: "处理中...",
                    mask: !0
                }), wx.request({
                    url: o.globalData.domainPath + o.globalData.projectName + "/unbunding.do",
                    data: {
                        sessionToken: o.globalData.sessionToken
                    },
                    success: function(o) {
                        n.setUserInfoData({
                            status: "2"
                        });
                    },
                    fail: function(o) {
                        wx.showToast({
                            title: "系统错误,请稍后再试",
                            icon: "none"
                        }), n.setUserInfoData({
                            status: "1"
                        });
                    },
                    complete: function(n) {
                        wx.hideLoading();
                    }
                })) : a.cancel;
            }
        });
    },
    verifyBinding: function(n, a, t) {
        var e = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), n || (console.log("sessionToken为空，再次获取..."), n = o.getAppSessionToken()), wx.request({
            url: o.globalData.domainPath + o.globalData.projectName + "/verifyBinding.do",
            data: {
                sessionToken: n,
                formId: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                console.log(n), "0000" == n.data.errcode ? "function" == typeof a ? a() : wx.hideLoading() : "-1000" == n.data.errcode ? e.toBinding(t) : (wx.hideLoading(), 
                wx.showToast({
                    title: "系统错误,请稍后再试",
                    icon: "none"
                }));
            },
            fail: function(n) {
                console.log(n), wx.hideLoading(), wx.showToast({
                    title: "系统错误,请稍后再试",
                    icon: "none"
                });
            }
        });
    },
    toUpUserInfo: function(n) {
        var a = this.data.userInfo;
        !n || a && a.avatarUrl == n.avatarUrl && a.nickName == n.nickName || (console.log("更新信息"), 
        console.log(n), o.upUserInfo(n));
    },
    setUserInfoData: function(n) {
        var o = this, a = o.data.userInfo;
        a && null != a && "" != a || (a = {});
        for (var t in n) n[t] && null != n[t] && "" != n[t] && "null" != n[t] && (console.log(n[t]), 
        a[t] = n[t]);
        "4" == a.status ? a.customerName = "已绑定手机，身份待认证" : a.customerName && "1" == a.status && null != a.customerName && "" != a.customerName || (a.customerName = "游客"), 
        "1" == a.status ? o.setData({
            bangding: "去解绑"
        }) : "4" == a.status ? o.setData({
            bangding: "去认证"
        }) : o.setData({
            bangding: "去绑定"
        }), a.avatarUrl && null != a.avatarUrl && "" != a.avatarUrl && "null" != a.avatarUrl && o.data.avatarUrl != a.avatarUrl && o.setData({
            avatarUrl: a.avatarUrl
        });
        for (t in a) "null" == a[t] && (a[t] = null);
        o.setData({
            userInfo: a
        }), console.log(o.data);
    }
});