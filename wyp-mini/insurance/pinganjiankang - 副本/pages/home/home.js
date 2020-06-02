var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../vant/toast/toast")), o = getApp();

Page({
    data: {
        userInfo: {
            avatarUrl: "../../images/user-unlogin.png"
        },
        logged: !1,
        takeSession: !1,
        requestResult: "",
        bindStatusCode: "",
        userListInfo: [ {
            icon: "sign",
            text: "我的保单",
            index: 3
        }, {
            icon: "orders-o",
            text: "全部订单",
            index: 0
        }, {
            icon: "balance-list-o",
            text: "待付款",
            index: 1
        }, {
            icon: "flag-o",
            text: "关于平安健康",
            index: 2
        } ],
        isShowTip: !1
    },
    bindViewTap: function() {
        this.data.userInfo.nickName || wx.navigateTo({
            url: "../login/login"
        });
    },
    onTabItemTap: function(e) {
        console.log(e.index), console.log(e.pagePath), console.log(e.text);
    },
    onShow: function() {
        var e = wx.getStorageSync("rawData");
        e && this.setData({
            userInfo: JSON.parse(e)
        });
    },
    isShowTip: function() {
        var e = this;
        "isShowTip" !== wx.getStorageSync("isShowTip") && (wx.setStorageSync("isShowTip", "isShowTip"), 
        this.setData({
            isShowTip: !0
        }), setTimeout(function() {
            e.setData({
                isShowTip: !1
            });
        }, 3e3));
    },
    onLoad: function() {
        wx.cloud ? this.checkLogin() : wx.redirectTo({
            url: "../chooseLib/chooseLib"
        });
    },
    checkLogin: function() {
        wx.getStorageSync("accessToken") || wx.navigateTo({
            url: "../login/login"
        });
    },
    onGetUserInfo: function(e) {
        !this.logged && e.detail.userInfo && this.setData({
            logged: !0,
            avatarUrl: e.detail.userInfo.avatarUrl,
            userInfo: e.detail.userInfo
        });
    },
    onGetOpenid: function() {
        wx.cloud.callFunction({
            name: "login",
            data: {},
            success: function(e) {
                console.log("[云函数] [login] user openid: ", e.result.openid), o.globalData.openid = e.result.openid, 
                wx.navigateTo({
                    url: "../userConsole/userConsole"
                });
            },
            fail: function(e) {
                console.error("[云函数] [login] 调用失败", e), wx.navigateTo({
                    url: "../deployFunctions/deployFunctions"
                });
            }
        });
    },
    unbind: function() {
        wx.showModal({
            content: "解除绑定后查询保单需要重新绑定身份信息，是否继续？",
            confirmText: "继续",
            confirmColor: "#ff6600",
            success: function(o) {
                o.confirm ? (0, e.default)("解绑成功") : o.cancel;
            }
        });
    },
    policy: function() {
        if ("00" == this.data.bindStatusCode) wx.navigateTo({
            url: "../myPolicy/myPolicy"
        }); else {
            var e = wx.getStorageSync("unionId"), n = wx.getStorageSync("openId");
            if (!n) return void wx.navigateTo({
                url: "../login/login"
            });
            wx.showLoading({
                title: "加载中"
            }), wx.request({
                url: o.globalData.baseUrl + "/miniapp/isBindCustomerNo.do",
                data: {
                    unionId: e,
                    openId: n
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    wx.hideLoading(), e.data && "00" == e.data.returnCode ? wx.navigateTo({
                        url: "../myPolicy/myPolicy"
                    }) : wx.showModal({
                        content: "您还未绑定用户信息",
                        confirmText: "立即绑定",
                        confirmColor: "#ff6600",
                        success: function(e) {
                            e.confirm ? wx.navigateTo({
                                url: "../orderBind/orderBind"
                            }) : e.cancel;
                        }
                    });
                },
                fail: function() {
                    wx.hideLoading();
                },
                complete: function() {}
            });
        }
    },
    tiaozhuan: function(e) {
        switch (e.target.dataset.index) {
          case 0:
            wx.navigateTo({
                url: "../orderstate/orderstate"
            }), wx.setStorageSync("to_be_paidSel", !1);
            break;

          case 1:
            wx.navigateTo({
                url: "../orderstate/orderstate"
            }), wx.setStorageSync("to_be_paidSel", !0);
            break;

          case 2:
            wx.navigateTo({
                url: "../about/about"
            });
            break;

          case 3:
            this.policy();
            break;

          case 4:
            this.unbind();
            break;

          case 5:
            wx.navigateTo({
                url: "../runData/index/index"
            });
        }
    }
});