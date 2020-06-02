var e = require("../template/index.js"), n = getApp(), o = {
    data: {
        msg_template: "",
        sure_template: "呼叫",
        show: !0,
        phone: "",
        index_pht: "../../images/un_index.png",
        my_pht: "../../images/up_my.png",
        head_pht: "../../images/head_pht.png"
    },
    callFn: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.data.msg_template
        });
    },
    login: function() {
        wx.navigateTo({
            url: "/pages/login/index"
        });
    },
    logout: function() {
        wx.removeStorage({
            key: "userInfo",
            success: function(e) {
                n.globalData.userInfo = null;
            }
        }), wx.removeStorage({
            key: "orderSaveId",
            success: function(e) {}
        }), wx.login({
            success: function(e) {
                e.code && wx.setStorage({
                    key: "code",
                    data: e.code
                });
            }
        }), this.setData({
            show: !0
        });
    },
    toIndexFn: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    toMyFn: function() {
        wx.reLaunch({
            url: "/pages/my/index"
        });
    },
    toCollectFn: function() {
        null != n.globalData.userInfo ? wx.navigateTo({
            url: "/pages/collect/index?kind=1"
        }) : wx.showToast({
            icon: "none",
            title: "您尚未登录，请登录后继续操作",
            mask: !0
        });
    },
    toBrowseFn: function() {
        wx.navigateTo({
            url: "/pages/collect/index?kind=2"
        });
    },
    onLoad: function(e) {
        void 0 !== e.phone && this.setData({
            phone: e.phone,
            show: !1
        });
    },
    onReady: function() {},
    onShow: function() {
        null !== n.globalData.userInfo && void 0 !== n.globalData.userInfo.mobile && this.setData({
            show: !1,
            phone: n.globalData.userInfo.mobile
        }), this.setData({
            msg_template: n.globalData["tel-phone"]
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
};

n.extend(o, e), Page(o);