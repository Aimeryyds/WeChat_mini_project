var t = getApp();

Page({
    data: {
        total_price: 0,
        nowtime: "",
        oid: "",
        cuser: [],
        address: [],
        lastPrice: 0,
        openid: "",
        products: [],
        order: [],
        disass: [],
        getStatusId: "",
        now_status: "",
        status_no: "",
        status_str: "",
        take_number: "",
        status: ""
    },
    onLoad: function(a) {
        var s = a.oid, e = (wx.getStorageSync("openid"), this);
        s ? t.apiRequest("meal", "order_detail", {
            data: {
                oid: s
            },
            success: function(t) {
                console.log("res", t), "OK" == t.data.result ? (e.setData({
                    order: t.data.data,
                    products: t.data.data.products,
                    status_no: t.data.data.status_no,
                    status_str: t.data.data.status_str
                }), e.getStatus(s)) : "2" == t.data.errmsg && wx.navigateTo({
                    url: "../login/login"
                });
            }
        }) : (wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        }));
    },
    getStatus: function(a) {
        var s = this;
        t.apiRequest("meal", "order_status", {
            data: {
                oid: a
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var e = t.data.data.status_no || "", o = t.data.data.status_str || "", n = t.data.data.take_number || "";
                    s.setData({
                        status_no: e,
                        status_str: o,
                        take_number: n
                    });
                    var u = setTimeout(function() {
                        "9" != e && s.getStatus(a);
                    }, 3e3);
                    s.setData({
                        status: u
                    });
                }
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        var t = this.data.status;
        clearTimeout(t);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});