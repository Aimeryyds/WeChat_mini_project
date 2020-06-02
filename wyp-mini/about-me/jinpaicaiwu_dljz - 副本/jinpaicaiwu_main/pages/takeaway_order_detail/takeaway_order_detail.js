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
    aliWxs: function(t) {
        for (var a = [], s = [], e = 0, n = t.length; e < n; ++e) e > 0 && e % 2 == 0 && (a.push(s), 
        s = []), s.push(t[e]);
        return s.length > 0 && a.push(s), a;
    },
    onLoad: function(a) {
        var s = a.oid, e = (wx.getStorageSync("openid"), this);
        s ? t.apiRequest("takeaway", "order_detail", {
            data: {
                oid: s
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var a = t.data.data.products || [];
                    a.length > 0 && a.forEach(function(t) {
                        return t.attr_data = e.aliWxs(t.attr_data || []);
                    }), e.setData({
                        order: t.data.data,
                        products: a,
                        status_no: t.data.data.status_no,
                        status_str: t.data.data.status_str
                    }), e.getStatus(s), wx.setNavigationBarTitle({
                        title: "订单" + t.data.data.status_str
                    });
                } else "2" == t.data.errmsg && wx.navigateTo({
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
        t.apiRequest("takeaway", "order_status", {
            data: {
                oid: a
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var e = t.data.data.status_no || "", n = t.data.data.status_str || "", o = t.data.data.take_number || "";
                    s.setData({
                        status_no: e,
                        status_str: n,
                        take_number: o
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