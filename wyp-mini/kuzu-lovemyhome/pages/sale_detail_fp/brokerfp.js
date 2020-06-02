var a = getApp(), t = require("../../sdk/dingxiang.js"), e = require("../../utils/gio-minp/index.js").default, o = require("../../sdk/gioConfig.js").default;

e("setConfig", o), Page({
    data: {
        loading: !0,
        showAllData: !0,
        detailId: "",
        cityId: "",
        currentTab: 0,
        page_num: 1,
        totalpage: 0,
        listLock: 1,
        fplist_data: [],
        orderPram: 2
    },
    onLoad: function(e) {
        var o = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(a, t) {
            a ? console.log(a) : (o.setData({
                dxDeviceId: t
            }), o.setData({
                detailId: e.houseId,
                cityId: e.cityId
            }), o.getData(o.data.orderPram));
        });
    },
    getData: function(t) {
        var e = this, o = a.globalData.url_host, d = {
            page: e.data.page_num,
            pcount: 15
        }, n = {
            hid: e.data.detailId,
            orderrule: t
        }, i = Object.assign(d, n);
        wx.request({
            url: o + "/exchange/" + e.data.cityId + "/v1/brokerinfolist",
            data: i,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    if (console.log(a.data.data), console.log("totalCount : ", a.data.data.totalCount), 
                    0 == a.data.data.totalCount) console.log(0), e.setData({
                        height: "128rpx"
                    }); else if (a.data.data.totalCount < 15) console.log(a.data.data.totalCount, "小于", 15), 
                    e.data.listLock = 2, e.setData({
                        fplist_data: a.data.data.list,
                        height: "128rpx",
                        loading: !1
                    }); else if (e.data.listLock = 1, e.data.totalpage = Math.ceil(a.data.data.totalCount / 15), 
                    console.log("totalpage", e.data.totalpage), e.data.totalpage >= e.data.page_num) {
                        console.log("翻页之前数据", e.data.fplist_data);
                        var t = e.data.fplist_data.concat(a.data.data.list);
                        console.log("翻页之后数据", e.data.fplist_data.concat(a.data.data.list)), e.setData({
                            fplist_data: t,
                            height: "128rpx",
                            loading: !1
                        }), e.data.page_num += 1, console.log("翻页", e.data.page_num), console.log("setData", t);
                    }
                } else e.data.listLock = 2, console.log("msg:", a.data.msg), e.setData({});
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {
                wx.hideLoading();
            }
        });
    },
    dk_tel: function(t) {
        var o = this, d = t.currentTarget.id, n = (o.data.cityId, t.currentTarget.dataset.bid), i = a.tdsdk, l = t.currentTarget.dataset.index + 1;
        console.log("*************************************************************************************", l), 
        e("track", "telconsult", {
            iconlocation_var: l,
            agentid_var: n,
            telnum_var: d
        }), i.appEvent.eventId({
            eventLabel: 1
        }), i.appEvent.eventId({
            eventLabel: 2
        }), i.appEvent.eventId({
            eventLabel: 4
        });
        var r = a.globalData.url_host;
        wx.request({
            url: r + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: a.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(a) {
                console.log("成功666:", a);
            }
        });
        var c = t.currentTarget.dataset.jobleave;
        1 == c && wx.makePhoneCall({
            phoneNumber: d,
            success: function() {
                console.log("拨打成功", d);
            },
            fail: function() {
                console.log("拨打失败", d);
            }
        }), 0 == c && wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人",
            icon: "none"
        });
    },
    brokerDeatil: function(a) {
        var t = this, e = a.currentTarget.dataset.brokerid;
        a.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "../broker_detail/brokerDetail?brokerId=" + e + "&cityId=" + t.data.cityId + "&citycode="
        });
    },
    clickTab: function(a) {
        var t = this;
        if (this.data.currentTab == a.target.dataset.current) return !1;
        t.setData({
            currentTab: a.target.dataset.current
        }), console.log(a.target.dataset.current), 0 == a.target.dataset.current && (t.setData({
            fplist_data: []
        }), t.data.page_num = 1, this.data.orderPram = 2, console.log("最新2::::", t.data.orderPram), 
        t.getData(t.data.orderPram)), 1 == a.target.dataset.current && (t.setData({
            fplist_data: []
        }), t.data.page_num = 1, this.data.orderPram = 1, console.log("次数最多1::::", t.data.orderPram), 
        t.getData(t.data.orderPram));
    },
    onReady: function() {
        e("setPage", {
            pagename: "房源详情页",
            businessline_pvar: "二手房",
            pagetype_pvar: "经纪人带看房评页",
            houseid_pvar: this.data.detailId,
            vrtype: ""
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var a = this;
        if (console.log("totalpage", a.data.totalpage), console.log("page_num", a.data.page_num), 
        a.data.totalpage < a.data.page_num && (console.log("没有新数据"), a.setData({
            showAllData: !1
        }), a.data.listLock = 2), 2 == a.data.listLock) return !1;
        wx.showLoading({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), a.getData(a.data.orderPram);
    },
    toIm: function(t) {
        var o = this, d = a.globalData.url_host, n = wx.getStorageSync("loginStatus"), i = t.currentTarget.dataset.bid, l = o.data.cityId, r = o.data.detailId, c = t.currentTarget.dataset.index + 1;
        if (console.log("*************************************************************************************", c), 
        e("track", "onlineconsult", {
            iconlocation_var: c,
            agentid_var: i
        }), 1 == n) {
            var s = t.currentTarget.dataset.leave, u = a.tdsdk;
            u.appEvent.eventId({
                eventLabel: 1
            }), u.appEvent.eventId({
                eventLabel: 3
            }), u.appEvent.eventId({
                eventLabel: 8
            }), wx.request({
                url: d + "/wxim/wxcallback",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    click_id: a.globalData.click_id,
                    action_type: "RESERVATION",
                    value: 40,
                    user_action_set_id: 1110064786
                },
                method: "post",
                success: function(a) {
                    console.log("成功666:", a);
                }
            }), void 0 === s || 1 == s ? (wx.requestSubscribeMessage({
                tmplIds: a.globalData.tmplids,
                success: function(a) {
                    console.log(a);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + i + "&hid=" + r + "&cityId=" + l + "&type=1"
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + i + "&ret_type=1&hid=" + r + "&cityId=" + l + "&type=1&maidian=1"
            });
        }
    },
    onShareAppMessage: function() {}
});