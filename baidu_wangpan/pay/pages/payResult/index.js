var e = getApp().globalData;

Page({
    data: {
        height: e.navHeight,
        getResultSuc: !1,
        type: "",
        price: "",
        productName: "",
        endTime: "",
        backurl: "",
        username: ""
    },
    onLoad: function(e) {
        if (e.hasOwnProperty("price") && e.hasOwnProperty("product_name")) {
            var t = this.formatDate(1e3 * e.end_time);
            this.setData({
                backurl: e.backurl,
                getResultSuc: !0,
                type: e.type,
                price: parseFloat(e.price / 100, 10),
                productName: e.product_name,
                endTime: t,
                username: e.username
            });
        } else this.setData({
            backurl: e.backurl
        });
        wx.hideShareMenu();
    },
    onUnload: function() {
        e.payScene = "nomal";
    },
    formatDate: function(e) {
        var t = new Date(e);
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    },
    goBack: function() {
        var e = decodeURIComponent(this.data.backurl);
        wx.reLaunch({
            url: /^\//.test(e) ? e : "/" + e
        });
    }
});