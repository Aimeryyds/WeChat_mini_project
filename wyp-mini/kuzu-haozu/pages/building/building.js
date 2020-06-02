var a = getApp(), e = require("../../utils/icon.js"), t = require("../../utils/point.js"), i = require("../../utils/scrollx.js");

Page({
    data: {
        imgUrls: [ "http://fang-oss.haozu.com/cms/index/2018/04/17/sRS6YK6pM7.jpg@750w_490h_1e_1c" ],
        building: {},
        rents: [],
        gxlist: [],
        zblist: [],
        mapUrl: "",
        total: 0,
        currIndex: 1,
        tel_phone: "",
        txpoint: {},
        isUp: !0,
        showYK: !1,
        shade: !1,
        subsucc: !1,
        hasError: !1,
        resPhone: "",
        isYK: !1,
        isSC: !1,
        loginYK: !0,
        seeWidth: 0,
        ulen: 300,
        moveCurr: 0,
        share: 0,
        shareimg: e.fenxiang,
        xingimg: e.xing,
        mapimg: e.mapimg,
        zhankai: e.zhankai,
        rightmore: e.rightmore,
        heart: e.heart,
        heart_red: e.heart_red,
        error_icon: e.error,
        close: e.close,
        msg_template: "",
        cnName: "",
        img: "",
        enName: "",
        title: "",
        level: {}
    },
    showAll: function() {
        this.setData({
            isUp: !1
        });
    },
    changeCur: function(a) {
        this.setData({
            currIndex: a.detail.current + 1
        });
    },
    toMapInfo: function() {
        var e = this.data.building, t = this.data.txpoint;
        a.mapCall({
            latitude: t.lat,
            longitude: t.lng,
            scale: 16,
            name: e.name,
            address: e.address
        });
    },
    onLoad: function(e) {
        e.building_id = e.building_id || "27";
        var i = this;
        i.setData({
            share: e.share ? e.share : 0,
            tel_phone: a.globalData["tel-phone"]
        }), a.globalDataLoad(i, "tel-phone", "msg_template");
        var n, s = (wx.getStorageSync("keyPhone") || []).filter(function(a, t) {
            return a.bid === e.building_id;
        })[0];
        s && (n = s.phone, i.setData({
            resPhone: n
        }));
        var r = a.getSecret(), l = a.globalData.userInfo || {};
        l && l.mobile && i.setData({
            isDis: !0,
            resPhone: n || l.mobile,
            loginYK: !1
        }), wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/detail/",
            data: {
                building_id: e.building_id,
                mobile: l.mobile || "",
                user_guid: l.user_guid || "",
                currtime: r.currtime,
                sign: r.sign
            },
            success: function(e) {
                var n = e.data;
                if (200 === n.code) {
                    var s = n.data.buildingInfo;
                    i.setData({
                        building: s,
                        imgUrls: s.image_list,
                        rents: n.data.rentHouseList,
                        gxlist: n.data.gxHouseList,
                        total: s.image_list ? s.image_list.length : 0,
                        isYK: !!s.isIntention,
                        isSC: !!s.isCollect
                    });
                    var r = n.data.employeeInfo;
                    r && Object.keys(r).length > 0 && i.setData({
                        cnName: r.cnName,
                        img: r.pic,
                        enName: r.enName,
                        title: r.title,
                        level: r
                    }), t.getPoint({
                        lat: s.lat,
                        lng: s.lng
                    }).then(function(e) {
                        i.setData({
                            txpoint: e,
                            mapUrl: "http://apis.map.qq.com/ws/staticmap/v2/?center=" + e.lat + "," + e.lng + "&zoom=15&size=750*400&maptype=roadmap&markers=size:large|color:0xFFCCFF|label:H|" + e.lat + "," + e.lng + "&key=" + a.globalData.tencentMapKey
                        });
                    }), a.orderDisabled(i, i.data.building.id, "building_id");
                    var l = {
                        district_name: "",
                        thumb_image: "",
                        subway_display: "",
                        status: "",
                        circle_name: "",
                        tag_list: []
                    };
                    for (var o in l) l[o] = s[o];
                    l.building_name = s.name, l.subway_display = s.subway[0], l.area_min = s.areaMin, 
                    l.area_max = s.areaMax, l.price = s.priceMin, l.price_unit = s.priceUnit, l.type = 1, 
                    l.status = 0, l.building_id = s.id;
                    var u = {
                        t: 1,
                        v: s.id,
                        c: s.city_id,
                        d: s.district_id,
                        ci: s.circle_id,
                        s: s.street_id,
                        vt: new Date().getTime()
                    };
                    a.saveStorage(u, l);
                }
            }
        }), wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/likebuilding/",
            data: {
                building_id: e.building_id,
                currtime: r.currtime,
                sign: r.sign
            },
            success: function(a) {
                var e = a.data;
                200 == e.code && i.setData({
                    zblist: e.data
                });
            }
        });
    },
    onShareAppMessage: function(a) {
        var e = this;
        return {
            title: e.data.building.name,
            desc: e.data.building.address,
            path: "/pages/building/building?share=1&building_id=" + e.data.building.id
        };
    },
    onReady: function(a) {
        var e = this, t = wx.createSelectorQuery();
        t.select(".head_swiper").boundingClientRect(), t.exec(function(a) {
            var t = a[0].width;
            e.setData({
                seeWidth: t - 30 * t / 750
            });
        });
    },
    touchStart: i.touchStart,
    touchEnd: function(a) {
        i.touchEnd.call(this, a), i.goFun.call(this, a);
    },
    turnScroll: i.turnScroll,
    turnEnd: function(a) {
        i.goFun.call(this, a);
    },
    showyekan: function(a) {
        this.setData({
            shade: !0,
            showYK: !0
        });
    },
    closeyuekan: function(a) {
        this.setData({
            shade: !1,
            showYK: !1
        });
    },
    inputChange: function(a) {
        this.setData({
            resPhone: a.detail.value
        });
    },
    submitYK: function(e) {
        var t = this, i = /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/, n = t.data.resPhone;
        return !t.data.isYK && (i.test(n) ? (t.setData({
            hasError: !1
        }), void a.orderlogin({
            mobile: n,
            name: "小程序楼盘页预约",
            building_id: t.data.building.id,
            building_name: t.data.building.name,
            from_page: 2
        }).then(function(a) {
            var e = {
                bid: t.data.building.id,
                phone: t.data.resPhone
            }, i = wx.getStorageSync("keyPhone") || [];
            i.push(e), wx.setStorage({
                key: "keyPhone",
                data: i
            }), 200 == a.code && t.setData({
                showYK: !1,
                subsucc: !0,
                isYK: !0
            });
        })) : (t.setData({
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
    shouchang: function(e) {
        var t = this;
        if (a.globalData.userInfo) {
            var i = a.getSecret(), n = a.globalData.userInfo || {};
            t.data.isSC ? wx.request({
                url: a.globalData.uchaozuBase + "/api/miniapps/collect/del/",
                data: {
                    uid: n.user_id || "",
                    type: "1",
                    opt_id: t.data.building.id,
                    currtime: i.currtime,
                    sign: i.sign
                },
                success: function(a) {
                    a.data;
                    if (500 === a.statusCode) return !1;
                    t.setData({
                        isSC: !1
                    });
                }
            }) : wx.request({
                url: a.globalData.uchaozuBase + "/api/miniapps/collect/add/",
                data: {
                    uid: n.user_id || "",
                    type: "1",
                    opt_id: t.data.building.id,
                    currtime: i.currtime,
                    sign: i.sign
                },
                success: function(a) {
                    a.data;
                    if (500 === a.statusCode) return !1;
                    t.setData({
                        isSC: !0
                    });
                }
            });
        } else wx.navigateTo({
            url: "/pages/login/index"
        });
    },
    zixun: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.tel_phone
        });
    },
    showFn: function() {
        var a = this;
        wx.makePhoneCall({
            phoneNumber: a.data.msg_template
        });
    }
});