var o = require("../../wxParse/common.js"), t = getApp();

Page({
    data: {
        bottomicon01: "../../common/bottomicon01.png",
        bottomicon03_hover: "../../common/bottomicon03_hover.png",
        bottomicon04: "../../common/bottomicon04.png",
        qrurl: "",
        fxid: "",
        fxkey: "",
        headphoto: "",
        weixin_nickname: "",
        qrc_error: "../../common/error.jpg",
        canIUseAvatarUrl: wx.canIUse("open-data.type.userAvatarUrl"),
        error_show: !1
    },
    get_coupons: function(o) {},
    tosy: function() {
        wx.redirectTo({
            url: "../fxdp_sy/fxdp_sy"
        });
    },
    toqrc: function() {
        wx.redirectTo({
            url: "../fxdp_qrc/fxdp_qrc"
        });
    },
    tohome: function() {
        wx.redirectTo({
            url: "../mydistribution/mydistribution"
        });
    },
    onLoad: function(e) {
        var n = this;
        wx.showLoading({
            title: "请求中",
            mask: !0
        }), o.get_cuser({
            success: function(o) {
                if (0 == o) wx.showToast({
                    title: "请先登录"
                }), wx.navigateTo({
                    url: "../login/login?fxid=" + this.data.fxid
                }); else {
                    var e = o.id;
                    n.setData({
                        fxkey: "wx_" + o.id,
                        headphoto: o.headphoto,
                        weixin_nickname: o.weixin_nickname
                    });
                    var i = wx.canIUse("alert") ? "alipay" : "wechat";
                    t.apiRequest("distribution", "getUserQrCode", {
                        data: {
                            user_id: e,
                            is_ajax: "1",
                            apptype: i
                        },
                        success: function(o) {
                            var t = "";
                            if ("haserror" == o.data) t = n.data.qrc_error, n.setData({
                                error_show: !0
                            }); else {
                                var i = getApp().globalData.config.domain || "", a = getApp().globalData.config.checkcode || "", r = getApp().globalData.APISESSID || "";
                                t = i + "/wxappapi/distribution/getUserQrCode?user_id=" + e + "&APISESSID=" + r + "&apitoken=" + a;
                            }
                            if (n.setData({
                                qrurl: t
                            }), "ERROR" == o.data.result) return console.log("ERROR"), wx.hideLoading(), !1;
                            wx.hideLoading();
                        },
                        complete: function() {
                            wx.hideLoading();
                        },
                        fail: function() {
                            console.error("请求失败");
                        }
                    });
                }
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "分销店铺",
            path: "/pages/fxdp_sy/fxdp_sy?fxid=" + this.data.fxkey
        };
    }
});