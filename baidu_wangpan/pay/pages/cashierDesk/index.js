var t = getApp(), e = t.globalData;

Page({
    data: {
        height: t.globalData.navHeight,
        chooseType: "svip",
        productType: "vip",
        backurl: "",
        from: "normal",
        userVipStatus: "",
        productId: "",
        productIdCanBuy: 1,
        productName: "",
        productPrice: "",
        productPriceNote: "",
        showBottomBtnHeight: "",
        showBottomBtn: !1
    },
    onLoad: function(t) {
        this.setData({
            productType: t.type || "vip",
            chooseType: t.category || "svip",
            backurl: t.backurl || "",
            from: t.from || "normal"
        }), wx.hideShareMenu();
    },
    onReady: function() {
        this.toast = this.selectComponent("#toast"), wx.log.send({
            type: "wx_pay_home_show",
            value: "会员中心-首页-展示"
        });
    },
    onUnload: function() {
        e.payScene = "nomal";
    },
    onShow: function() {
        var t = this, a = e.payScene, o = e.goCashierFromPrivilegePage || "", i = "";
        a.indexOf("svip") > -1 && o ? (i = "svip", e.goCashierFromPrivilegePage = !1, this.setData({
            chooseType: i
        })) : a.indexOf("vip") > -1 && o && (i = "vip", e.goCashierFromPrivilegePage = !1, 
        this.setData({
            chooseType: i
        })), this.data.showBottomBtnHeight || wx.createSelectorQuery().select("#cut-line").boundingClientRect(function(e) {
            var a = e.bottom + 60;
            t.setData({
                showBottomBtnHeight: a
            });
        }).exec();
    },
    scrollEvent: function(t) {
        var e = t.detail && t.detail.scrollTop;
        e > this.data.showBottomBtnHeight && !this.data.showBottomBtn ? this.setData({
            showBottomBtn: !0
        }) : e < this.data.showBottomBtnHeight && this.data.showBottomBtn && this.setData({
            showBottomBtn: !1
        });
    },
    onChangeTab: function(t) {
        var e = t.detail && t.detail.type;
        this.setData({
            chooseType: e
        });
    },
    updateUserVipStatus: function(t) {
        this.setData({
            userVipStatus: t.detail && t.detail.userVipStatus
        });
    },
    goProtocol: function() {
        wx.navigateTo({
            url: "/pay/pages/protocolOfPayment/index"
        });
    },
    changeProduct: function(t) {
        var e = t.detail && t.detail.productId, a = t.detail && t.detail.productIdCanBuy, o = t.detail && t.detail.productPrice, i = t.detail && t.detail.productName, r = t.detail && t.detail.productPriceNote;
        this.setData({
            productId: e,
            productIdCanBuy: a,
            productName: i,
            productPrice: o,
            productPriceNote: r
        });
    },
    payCallback: function(e) {
        var a = e.detail && e.detail.payStatus, o = this.data.backurl;
        "" === o && (o = "/pay/pages/cashierDesk/index?type=vip&category=svip");
        var i = "/pay/pages/payResult/index?backurl=" + o;
        if (a) {
            var r = e.detail && e.detail.payInfo;
            i += "&type=" + this.data.productType + "&price=" + r.price + "&product_name=" + r.product_name + "&end_time=" + r.end_time + "&username=" + t.globalData.payUserInfo.username;
        }
        wx.redirectTo({
            url: i
        });
    }
});