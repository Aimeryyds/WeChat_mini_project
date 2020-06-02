function a(a) {
    return new Promise(function(a, t) {
        wx.getLocation({
            type: "gcj02",
            success: function(t) {
                a(t);
            },
            fail: function() {
                t();
            }
        });
    });
}

var t = getApp(), e = require("../../utils/icon.js");

Page({
    data: {
        domain: "bj",
        citys: [],
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        list_name: [],
        building_items: [],
        house_type: [],
        msg_template: "",
        showYK: !1,
        shade: !1,
        subsucc: !1,
        hasError: !1,
        resPhone: "",
        isYK: !1,
        building: {},
        demo: {},
        lat: "",
        lng: "",
        show_place: [],
        loginYK: !0,
        close: e.close
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    intap: function(a) {},
    showFn: function() {
        var a = this;
        wx.makePhoneCall({
            phoneNumber: a.data.msg_template
        });
    },
    clickFun: function(a) {
        new Promise(function(a, e) {
            wx.request({
                url: t.globalData.haozuBase + "/bj/cooperation/ganji/",
                data: {
                    city_id: "12",
                    district_id: "173",
                    street_id: "793",
                    page_size: "5"
                },
                success: function(t) {
                    a(t);
                }
            });
        }).then(function(a) {}, function(a) {}).catch(function(a) {});
    },
    outap: function(a) {},
    onLoad: function(a) {
        var e = this, n = this;
        if (a.scene) {
            for (var o = decodeURIComponent(a.scene).split("&"), s = {}, i = 0; i < o.length; i++) {
                var l = o[i].split("=");
                s[l[0]] = l[1];
            }
            t.globalData["tel-phone"] = s.m;
        }
        a.domain && (t.globalData.domain = a.domain), n.setData({
            domain: t.globalData.domain
        }), t.globalDataLoad(n, "citys"), t.globalDataLoad(n, "tel-phone", "msg_template");
        t.getSecret();
        var u = t.globalData.userInfo || {};
        u && u.mobile && n.setData({
            isDis: !0,
            resPhone: u.mobile,
            loginYK: !1
        }), t.globalData.userInfo ? this.setData({
            userInfo: t.globalData.userInfo,
            resPhone: t.globalData.userInfo.mobile,
            hasUserInfo: !0
        }) : this.data.canIUse ? t.userInfoReadyCallback = function(a) {
            e.setData({
                userInfo: a.userInfo,
                resPhone: t.globalData.userInfo.mobile,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(a) {
                t.globalData.userInfo = a.userInfo, e.setData({
                    userInfo: a.userInfo,
                    resPhone: t.globalData.userInfo.mobile,
                    hasUserInfo: !0
                });
            }
        });
    },
    onReady: function() {
        var e = this, n = t.getSecret();
        a().then(function(a) {
            wx.request({
                url: t.globalData.haozuBase + "/api/miniapps/getindexlist/",
                data: {
                    domain: e.data.domain,
                    lat: a.latitude,
                    lng: a.longitude,
                    currtime: n.currtime,
                    sign: n.sign
                },
                success: function(a) {
                    var t = a.data, n = t.data, o = [];
                    for (var s in n.list) o.push(n.list[s]);
                    e.setData({
                        building_items: o,
                        show_place: t.data.show_place
                    });
                }
            });
        }, function() {
            wx.request({
                url: t.globalData.haozuBase + "/api/miniapps/getindexlist/",
                data: {
                    domain: e.data.domain,
                    currtime: n.currtime,
                    sign: n.sign
                },
                success: function(a) {
                    var t = a.data, n = t.data, o = [];
                    for (var s in n.list) o.push(n.list[s]);
                    e.setData({
                        building_items: o,
                        show_place: t.data.show_place
                    });
                }
            });
        });
    },
    refresh: function() {
        var e = this, n = t.getSecret();
        a().then(function(a) {
            wx.request({
                url: t.globalData.haozuBase + "/api/miniapps/getindexlist/",
                data: {
                    domain: e.data.domain,
                    lat: a.latitude,
                    lng: a.longitude,
                    currtime: n.currtime,
                    sign: n.sign
                },
                success: function(a) {
                    var t = a.data, n = t.data, o = [];
                    for (var s in n.list) o.push(n.list[s]);
                    e.setData({
                        building_items: o,
                        show_place: t.data.show_place
                    });
                }
            });
        }, function() {});
    },
    getUserInfo: function(a) {
        t.globalData.userInfo = a.detail.userInfo, this.setData({
            userInfo: a.detail.userInfo,
            hasUserInfo: !0
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: "办公选址上好租，专业靠谱",
            desc: "办公选址上好租，专业靠谱",
            path: "/pages/index/index?share=1&domain=" + t.globalData.domain
        };
    },
    onShow: function() {
        t.globalDataLoad(this, "tel-phone", "msg_template"), null !== t.globalData.userInfo && this.setData({
            show: !1,
            phone: t.globalData.userInfo.mobile
        });
    },
    inputChange: function(a) {
        this.setData({
            resPhone: a.detail.value
        });
    },
    submitYK: function(a) {
        var e = this, n = /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/, o = e.data.resPhone;
        return !e.data.isYK && (n.test(o) ? (e.setData({
            hasError: !1
        }), void t.orderlogin({
            mobile: o,
            name: "小程序楼盘页预约",
            building_id: e.data.building.id,
            building_name: e.data.building.name,
            from_page: 2
        }).then(function(a) {
            200 == a.code && e.setData({
                showYK: !1,
                subsucc: !0,
                isYK: !0
            });
        })) : (e.setData({
            hasError: !0
        }), !1));
    },
    Ylogin: function() {
        wx.navigateTo({
            url: "/pages/login/index?phone=" + this.data.resPhone
        }), this.setData({
            shade: !1,
            subsucc: !1
        });
    },
    closePop: function() {
        this.setData({
            shade: !1,
            subsucc: !1
        });
    },
    toMyFn: function() {
        wx.reLaunch({
            url: "/pages/my/index"
        });
    },
    onReachBottom: function() {
        wx.navigateTo({
            url: "/pages/list/list?domain=" + this.data.domain
        });
    }
});