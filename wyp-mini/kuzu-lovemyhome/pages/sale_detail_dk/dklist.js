var a = getApp(), e = require("../../sdk/dingxiang.js"), t = require("../../utils/gio-minp/index.js").default, d = require("../../sdk/gioConfig.js").default;

t("setConfig", d), Page({
    data: {
        d_url: 1,
        loading: !0,
        showAllData: !0,
        more: !0,
        detailId: "",
        cityId: ""
    },
    onLoad: function(t) {
        var d = this;
        new e({
            appId: a.globalData.dxAppId
        }, function(a, e) {
            a ? console.log(a) : (d.setData({
                dxDeviceId: e
            }), d.setData({
                detailId: t.houseId,
                cityId: t.cityId,
                d_url: t.detailUrl
            }), d.getData(t));
        });
    },
    getData: function() {
        var e = this, t = a.globalData.url_host, d = "exchange";
        1 == e.data.d_url && (d = "exchange", console.log("二手房")), 2 == e.data.d_url && (d = "rent", 
        console.log("租房"));
        var o = {
            hid: e.data.detailId
        };
        wx.request({
            url: t + "/" + d + "/" + e.data.cityId + "/v1/dklist",
            data: o,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    if ("null" != a.data.data.takelookTime) t = a.data.data.takelookTime.substring(0, 10); else var t = "";
                    for (var d = [], o = 0; o < a.data.data.recordInfoList.length; o++) {
                        var n = a.data.data.recordInfoList[o].lookHouseTime.substring(0, 10);
                        d.push(n);
                    }
                    console.log(d), e.setData({
                        dklist_data: a.data.data,
                        newtimes: t,
                        kfarr: d,
                        loading: !1
                    });
                }
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    dklistmore: function() {
        var e = this, t = a.globalData.url_host, d = "exchange";
        1 == e.data.d_url && (d = "exchange", console.log("二手房")), 2 == e.data.d_url && (d = "rent", 
        console.log("租房")), console.log(d);
        var o = {
            hid: e.data.detailId
        };
        wx.request({
            url: t + "/" + d + "/" + e.data.cityId + "/v1/dklistmore",
            data: o,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    for (var t = [], d = 0; d < a.data.data.length; d++) {
                        var o = a.data.data[d].lookHouseTime.substring(0, 10);
                        t.push(o);
                    }
                    e.setData({
                        dklistmore_data: a.data.data,
                        kfarrmore: t,
                        more: !1,
                        showAllData: !1
                    });
                }
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    dk_tel: function(e) {
        var d = this, o = e.currentTarget.id, n = a.tdsdk, i = e.currentTarget.dataset.bid, l = (d.data.cityId, 
        e.currentTarget.dataset.index + 1);
        n.appEvent.eventId({
            eventLabel: 1
        }), n.appEvent.eventId({
            eventLabel: 2
        }), 1 == d.data.d_url && (t("track", "telconsult", {
            iconlocation_var: l,
            agentid_var: i,
            telnum_var: o
        }), n.appEvent.eventId({
            eventLabel: 4
        })), 2 == d.data.d_url && (t("track", "telconsult", {
            iconlocation_var: l,
            agentid_var: i,
            telnum_var: o
        }), n.appEvent.eventId({
            eventLabel: 5
        }));
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
        var c = e.currentTarget.dataset.jobleave;
        console.log(c), 1 == c && wx.makePhoneCall({
            phoneNumber: o,
            success: function() {
                console.log("拨打成功", o);
            },
            fail: function() {
                console.log("拨打失败", o);
            }
        }), 0 == c && wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人",
            icon: "none"
        });
    },
    toIm: function(e) {
        var d = this, o = a.globalData.url_host, n = wx.getStorageSync("loginStatus"), i = e.currentTarget.dataset.bid, l = d.data.cityId, r = d.data.detailId, c = e.currentTarget.dataset.index + 1;
        if (1 == d.data.d_url && t("track", "onlineconsult", {
            iconlocation_var: c,
            agentid_var: i
        }), 2 == d.data.d_url && t("track", "onlineconsult", {
            iconlocation_var: c,
            agentid_var: i
        }), 1 == n) {
            var s = e.currentTarget.dataset.leave, u = a.tdsdk;
            u.appEvent.eventId({
                eventLabel: 1
            }), u.appEvent.eventId({
                eventLabel: 3
            }), 1 == d.data.d_url && u.appEvent.eventId({
                eventLabel: 8
            }), 2 == d.data.d_url && u.appEvent.eventId({
                eventLabel: 9
            }), wx.request({
                url: o + "/wxim/wxcallback",
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
                url: "../im/im?bid=" + i + "&hid=" + r + "&cityId=" + l + "&type=" + d.data.d_url
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + i + "&ret_type=1&hid=" + r + "&cityId=" + l + "&type=" + d.data.d_url + "&maidian=1&d_url=" + d.data.d_url
            });
        }
    },
    onReady: function() {
        var a = this;
        1 == a.data.d_url && t("setPage", {
            pagename: "房源详情页",
            businessline_pvar: "二手房",
            pagetype_pvar: "带看记录页",
            houseid_pvar: a.data.detailId,
            vrtype: ""
        }), 2 == a.data.d_url && t("setPage", {
            pagename: "房源详情页",
            businessline_pvar: "租房",
            pagetype_pvar: "带看记录页",
            houseid_pvar: a.data.detailId,
            vrtype: ""
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});