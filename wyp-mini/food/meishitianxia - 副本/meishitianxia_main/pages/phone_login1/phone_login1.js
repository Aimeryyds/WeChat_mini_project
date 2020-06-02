var t = getApp();

Page({
    data: {
        phone_q: "",
        number: "",
        tip: "",
        isdo: !1,
        status: !0,
        storage_number: "",
        storage_time: 0,
        coundown: 180,
        ref: ""
    },
    onLoad: function(t) {
        wx.hideShareMenu();
        var e = this, a = t.ref ? t.ref : "";
        e.setData({
            ref: a
        });
    },
    onShow: function() {
        this.setData({
            storage_number: wx.getStorageSync("number") ? wx.getStorageSync("number") : "",
            storage_time: wx.getStorageSync("ctime") ? wx.getStorageSync("ctime") : "",
            tip: ""
        });
    },
    phoneinput: function(t) {
        var e = this;
        e.setData({
            phone_q: t.detail.value
        }), 11 == t.detail.value.length && e.setData({
            number: t.detail.value
        }), /^1\d{10}$/.test(t.detail.value) ? e.setData({
            isdo: !0,
            number: t.detail.value
        }) : e.setData({
            isdo: !1
        }), e.data.phone_q.length > 11 ? setTimeout(function() {
            e.setData({
                phone_q: e.data.number
            }), /^1\d{10}$/.test(e.data.number) && e.setData({
                isdo: !0
            });
        }, 100) : e.setData({
            phone_q: t.detail.value
        });
    },
    phone_do: function() {
        var e = this;
        if (!e.data.status) return !1;
        if (e.data.isdo) {
            if (e.data.number == e.data.storage_number && Math.round(new Date().getTime() / 1e3) - parseInt(e.data.storage_time) < e.data.coundown) return wx.redirectTo({
                url: "/pages/phone_login2/phone_login2?number=" + e.data.number + "&ref=" + e.data.ref
            }), !1;
            e.setData({
                status: !1
            }), wx.showToast({
                title: "操作中...",
                icon: "loading",
                duration: 1e5
            });
            var a = "user_sendVerificationCode", n = {
                phone: e.data.number,
                type: 0
            }, o = t.getParam(a, n);
            wx.request({
                url: t.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(t) {
                    0 == t.data[a].error ? (wx.setStorageSync("number", e.data.number), wx.setStorageSync("ctime", Math.round(new Date().getTime() / 1e3)), 
                    wx.redirectTo({
                        url: "/pages/phone_login2/phone_login2?number=" + e.data.number + "&ref=" + e.data.ref
                    })) : e.setData({
                        tip: t.data[a].msg ? t.data[a].msg : "服务器繁忙，请稍后再试"
                    });
                },
                fail: function() {
                    e.setData({
                        tip: "操作失败，请重试"
                    });
                },
                complete: function() {
                    wx.hideToast(), e.setData({
                        status: !0
                    });
                }
            });
        }
    },
    login_drop: function() {
        "goods" == this.data.ref ? wx.redirectTo({
            url: "../goods/goods"
        }) : wx.switchTab({
            url: "../my/my"
        });
    },
    onReady: function() {
        t.globalData.uid > 0 && wx.switchTab({
            url: "../my/my"
        });
    }
});