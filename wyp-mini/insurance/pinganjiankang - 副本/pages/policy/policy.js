for (var t = require("../../utils/util.js"), a = getApp(), e = new Date(), i = [], n = 1980; n <= e.getFullYear(); n++) i.push(n);

for (var s = [], o = 1980; o <= e.getFullYear(); o++) s.push(o);

Page({
    data: {
        iconType: [ "search" ],
        startyears: i,
        startyear: e.getFullYear(),
        startvalue: [ 9999 ],
        endyears: s,
        endyear: e.getFullYear(),
        endvalue: [ 9999 ],
        list: [],
        orderList: [],
        orderDetailList: [],
        hiddenLoading: !0,
        url: ""
    },
    startbindDateChange: function(t) {
        this.setData({
            startyear: t.detail.value
        });
    },
    endbindDateChange: function(t) {
        this.setData({
            endyear: t.detail.value
        });
    },
    backindex: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    searchbaodan: function() {
        var e = this, i = this.data.startyear, n = this.data.endyear;
        i > n ? wx.showModal({
            title: "提示",
            content: "起始年份不能大于结束年份"
        }) : (wx.showToast({
            title: "查询中",
            icon: "loading"
        }), wx.request({
            url: a.globalData.baseUrl + "/ehis-hm/miniapp/user/orders",
            method: "POST",
            data: {
                page: 1,
                startYear: i,
                endYear: n,
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(a) {
                if (wx.hideToast(), console.log(a.data.data), "200" == a.statusCode) if (0 == a.data.data.length) wx.showToast({
                    title: "未查询到该时间段内保单信息",
                    icon: "success",
                    duration: 1e3
                }); else {
                    for (var i = a.data.data, n = 0; n < i.length; n++) i[n].effectiveDate = t.formatTime(i[n].effectiveDate), 
                    i[n].matuDate = t.formatTime(i[n].matuDate);
                    e.setData({
                        orderList: i
                    });
                }
            }
        }));
    },
    search: function() {
        this.data.flag ? this.animation.rotate(0).step() : this.animation.rotate(90).step(), 
        this.setData({
            animation: this.animation.export(),
            flag: !this.data.flag
        });
    },
    showOrder: function(e) {
        var i = this, n = e.currentTarget.dataset.orderid;
        n && (wx.showToast({
            title: "查询中",
            icon: "loading"
        }), wx.request({
            url: a.globalData.baseUrl + "/ehis-hm/miniapp/user/order",
            method: "POST",
            data: {
                orderId: n,
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(a) {
                console.log(a.data), wx.hideToast();
                for (var e = a.data, n = 0; n < e.length; n++) e[n].effectiveDate = t.formatTime(e[n].effectiveDate), 
                e[n].matuDate = t.formatTime(e[n].matuDate);
                i.setData({
                    orderDetailList: e
                });
            }
        }));
    },
    search1: function() {
        this.data.flag1 ? this.animation1.rotate(0).step() : this.animation1.rotate(90).step(), 
        this.setData({
            animation1: this.animation1.export(),
            flag1: !this.data.flag1
        });
    },
    onLoad: function(a) {
        this.setData({
            logs: (wx.getStorageSync("logs") || []).map(function(a) {
                return t.formatyear(new Date(a));
            })
        }), this.animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 100,
            transformOrigin: "center center 0",
            success: function(t) {
                console.log(t);
            }
        }), this.animation1 = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 100,
            transformOrigin: "center center 0",
            success: function(t) {
                console.log(t);
            }
        });
    }
});