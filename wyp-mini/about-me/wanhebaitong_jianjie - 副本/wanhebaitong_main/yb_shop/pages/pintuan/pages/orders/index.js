var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        currentTab: 0,
        scrollTop: 0,
        scrollLeft: 0,
        page: 1,
        ordersList: [],
        loading: !0
    },
    onLoad: function(t) {
        var e = t.id;
        this.data.currentTab = e || 0, this.systemInfo = wx.getSystemInfoSync(), this.setData({
            currentTab: this.data.currentTab,
            windowHeight: this.systemInfo.windowHeight
        });
    },
    onShow: function(t) {
        0 == this.data.currentTab && this.setCurrentData();
    },
    setCurrentData: function() {
        var t = this;
        t.setData({
            loading: !0
        }), e.get("Pintuan/ptOrderList", {
            page: t.data.page,
            status: t.data.currentTab,
            uid: getApp().getCache("userinfo").uid
        }, function(a) {
            console.log(a), 0 == a.code ? (t.setData({
                loading: !1,
                show: !0
            }), 0 < a.info.length && t.setData({
                page: t.data.page + 1,
                ordersList: t.data.ordersList.concat(a.info)
            }), a.info.length < 10 && t.setData({
                loaded: !0
            })) : e.alert(a.msg);
        }, !0);
    },
    toGroupDetail: function(e) {
        var a = e.currentTarget.dataset.id;
        t.redirect("group/detail", "id=" + a);
    },
    toPay: function(t) {
        wx.showLoading({
            title: "正在提交",
            mask: !0
        });
        var a = this, r = t.currentTarget.dataset;
        e.get("Pintuan/ptPay", {
            oid: r.id,
            openid: getApp().getCache("userinfo").openid
        }, function(t) {
            wx.hideLoading(), 0 == t.code ? wx.requestPayment({
                timeStamp: t.info.timeStamp,
                nonceStr: t.info.nonceStr,
                package: t.info.package,
                signType: "MD5",
                paySign: t.info.paySign,
                success: function(t) {
                    console.log(t), 1 == r.isGroup ? wx.redirectTo({
                        url: "/yb_shop/pages/pintuan/pages/group/detail?id=" + r.id
                    }) : (a.setData({
                        ordersList: [],
                        page: 1,
                        loaded: !1
                    }), a.setCurrentData());
                },
                fail: function(t) {}
            }) : e.alert(t.msg, function() {
                wx.redirectTo({
                    url: "/yb_shop/pages/pintuan/pages/orders/index"
                });
            });
        });
    },
    confirmReceipt: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        wx.showModal({
            content: "是否确认收货？",
            success: function(t) {
                t.confirm && e.get("Pintuan/SignOrder", {
                    id: r,
                    uid: getApp().getCache("userinfo").uid
                }, function(t) {
                    0 == t.code ? (e.success("收货成功"), setTimeout(function() {
                        a.setData({
                            ordersList: [],
                            page: 1,
                            loaded: !1
                        }), a.setCurrentData();
                    })) : e.alert(t.msg);
                });
            }
        });
    },
    tuikuan: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        wx.showModal({
            content: "是否要申请退款？",
            success: function(t) {
                t.confirm && e.get("Pintuan/refundOrder", {
                    id: r,
                    uid: getApp().getCache("userinfo").uid
                }, function(t) {
                    0 == t.code ? (e.success("申请成功"), setTimeout(function() {
                        a.setData({
                            ordersList: [],
                            page: 1,
                            loaded: !1
                        }), a.setCurrentData();
                    })) : e.alert(t.msg);
                });
            }
        });
    },
    showOrderDetail: function(e) {
        var a = e.currentTarget.dataset.id;
        t.redirect("orders/detail", "oid=" + a);
    },
    showGoodsDetial: function(e) {
        var a = e.currentTarget.dataset.id;
        t.redirect("goods/detail", "gid=" + a);
    },
    bindChange: function(t) {
        this.data.page = 0, this.data.ordersList = [], this.data.loading = !0, this.data.currentTab = t.detail.current, 
        this.setCurrentData(), this.setData({
            loading: !0,
            ordersList: [],
            currentTab: this.data.currentTab
        });
    },
    swichNav: function(t) {
        if (this.data.currentTab != t.currentTarget.dataset.current) {
            this.data.currentTab = t.currentTarget.dataset.current;
            var e = this.systemInfo.windowWidth, a = t.currentTarget.offsetLeft, r = this.data.scrollLeft;
            r = e / 2 < a ? a : 0, this.setData({
                scrollLeft: r,
                currentTab: this.data.currentTab
            });
        }
    },
    onPullDownRefresh: function() {
        this.setData({
            ordersList: [],
            page: 1,
            loaded: !1
        }), this.setCurrentData(), wx.stopPullDownRefresh();
    },
    scrolltolower: function() {
        console.log("加载更多"), this.data.loaded || this.setCurrentData();
    }
});