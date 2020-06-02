var t, a = getApp();

Page({
    data: {
        code: "",
        code_q: "",
        tip: "",
        isdo: !1,
        time: "",
        reload: !1,
        status: !0,
        number: "",
        coundown: 180
    },
    onLoad: function(t) {
        wx.hideShareMenu();
        var a = this, e = t.ref ? t.ref : "";
        a.setData({
            number: t.number,
            ref: e
        }), a.setData({
            time: a.data.coundown + parseInt(wx.getStorageSync("ctime")) - Math.round(new Date().getTime() / 1e3)
        }), a.do_timer();
    },
    onShow: function() {},
    do_timer: function(a) {
        var e = this;
        t = setInterval(function() {
            var t = e.data.time;
            t > 0 ? e.setData({
                time: t - 1
            }) : (e.stop_timer(), e.setData({
                reload: !0
            }));
        }, 1e3);
    },
    stop_timer: function() {
        clearInterval(t);
    },
    codeinput: function(t) {
        var a = this;
        a.setData({
            code_q: t.detail.value
        }), 6 == t.detail.value.length && a.setData({
            code: t.detail.value
        }), /^\d{6}$/.test(t.detail.value) ? a.setData({
            code: t.detail.value,
            isdo: !0
        }) : a.setData({
            isdo: !1
        }), a.data.code_q.length > 6 ? setTimeout(function() {
            a.setData({
                code_q: a.data.code
            }), /^\d{6}$/.test(a.data.code) && a.setData({
                isdo: !0
            });
        }, 100) : a.setData({
            code_q: t.detail.value
        });
    },
    do_reload: function() {
        var t = this;
        if (!t.data.status) return !1;
        t.setData({
            status: !1
        });
        var e = "user_sendVerificationCode", o = {
            phone: t.data.number,
            type: 0
        }, s = a.getParam(e, o);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[e].error ? (t.setData({
                    time: t.data.coundown,
                    reload: !1,
                    code: "",
                    code_q: "",
                    tip: ""
                }), t.do_timer()) : t.setData({
                    tip: a.data[e].msg ? a.data[e].msg : "服务器繁忙，请稍后再试"
                });
            },
            fail: function() {
                t.setData({
                    tip: "操作失败，请重试"
                });
            },
            complete: function() {
                t.setData({
                    status: !0
                });
            }
        });
    },
    phone_do: function() {
        var t = this;
        if (!t.data.status) return !1;
        if (t.data.isdo) {
            t.setData({
                status: !1
            }), wx.showToast({
                title: "操作中...",
                icon: "loading",
                duration: 1e5
            });
            var e = "user_userPhoneLogin", o = {
                phone: t.data.number,
                code: t.data.code
            }, s = a.getParam(e, o);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: s
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(o) {
                    if (0 == o.data[e].error) {
                        var s = new Date().getTime();
                        a.globalData.uid = o.data[e].data.uid, a.globalData.key = t.data.number, wx.setStorageSync("uid", o.data[e].data.uid), 
                        wx.setStorageSync("key", t.data.number), o.data[e].data.session && (a.globalData.session = o.data[e].data.session, 
                        wx.setStorageSync("session", o.data[e].data.session)), wx.setStorageSync("time", s), 
                        wx.showToast({
                            title: "操作成功",
                            icon: "success",
                            duration: 2e3
                        }), wx.setStorageSync("loginerror", 0), setTimeout(function() {
                            wx.hideToast(), "goods" == t.data.ref ? wx.redirectTo({
                                url: "../goods/goods"
                            }) : wx.switchTab({
                                url: "../my/my"
                            });
                        }, 1e3);
                    } else t.setData({
                        tip: o.data[e].msg ? o.data[e].msg : "服务器繁忙，请稍后再试"
                    });
                },
                fail: function() {
                    t.setData({
                        tip: "操作失败，请重试"
                    });
                },
                complete: function() {
                    wx.hideToast(), t.setData({
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
        a.globalData.uid > 0 && wx.switchTab({
            url: "../my/my"
        });
    }
});