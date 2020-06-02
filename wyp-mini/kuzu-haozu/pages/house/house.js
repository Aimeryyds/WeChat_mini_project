var e = getApp(), a = require("../../utils/icon.js"), t = require("../../utils/point.js"), i = require("../../utils/scrollx.js");

Page({
    data: {
        house_title: "",
        house: {},
        building: {},
        imgUrls: [ "http://fang-oss.haozu.com/cms/index/2018/04/17/sRS6YK6pM7.jpg@750w_490h_1e_1c" ],
        tjlist: [],
        houseNum: 0,
        mapUrl: "",
        tel_phone: "",
        total: 0,
        currIndex: 1,
        txpoint: {},
        share: 0,
        showYK: !1,
        shade: !1,
        subsucc: !1,
        hasError: !1,
        resPhone: "",
        isYK: !1,
        isDis: !1,
        isSC: !1,
        loginYK: !0,
        seeWidth: 0,
        ulen: 300,
        moveCurr: 0,
        shareimg: a.fenxiang,
        xingimg: a.xing,
        mapimg: a.mapimg,
        zhankai: a.zhankai,
        rightmore: a.rightmore,
        heart: a.heart,
        heart_red: a.heart_red,
        error_icon: a.error,
        close: a.close,
        msg_template: "",
        cnName: "",
        img: "",
        enName: "",
        title: "",
        level: {}
    },
    changeCur: function(e) {
        this.setData({
            currIndex: e.detail.current + 1
        });
    },
    onShareAppMessage: function(e) {
        var a = this;
        return {
            title: a.data.title,
            desc: a.data.title,
            path: "/pages/house/house?share=1&house_id=" + a.data.house.id
        };
    },
    toMapInfo: function() {
        var a = this.data.txpoint, t = this.data.house, i = this.data.building;
        e.mapCall({
            latitude: a.lat,
            longitude: a.lng,
            scale: 16,
            name: t.building_name,
            address: i.address
        });
    },
    onLoad: function(a) {
        a.building_id = a.building_id || "27";
        var i = this;
        i.setData({
            share: a.share ? a.share : 0,
            tel_phone: e.globalData["tel-phone"]
        });
        var s = e.getSecret(), n = e.globalData.userInfo || {};
        e.globalDataLoad(i, "tel-phone", "msg_template"), n && n.mobile && i.setData({
            isDis: !0,
            resPhone: n.mobile,
            loginYK: !1
        }), wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/house/",
            data: {
                house_id: a.house_id,
                mobile: n.mobile || "",
                user_guid: n.user_guid || "",
                currtime: s.currtime,
                sign: s.sign
            },
            success: function(a) {
                var s = a.data;
                if (200 === s.code) {
                    var n = s.data.imageList, o = s.data.houseInfo;
                    i.setData({
                        house_title: s.data.title,
                        house: o,
                        building: s.data.buildingInfo,
                        imgUrls: n,
                        houseNum: s.data.buildingHouseNumber,
                        total: n ? n.length : 0,
                        isYK: !!s.data.isIntention,
                        isSC: !!s.data.isCollect
                    });
                    var r = s.data.employeeInfo;
                    r && Object.keys(r).length > 0 && i.setData({
                        cnName: r.cnName,
                        img: r.pic,
                        enName: r.enName,
                        title: r.title,
                        level: r
                    });
                    var u = s.data.buildingInfo.lat, l = s.data.buildingInfo.lng;
                    t.getPoint({
                        lat: u,
                        lng: l
                    }).then(function(a) {
                        i.setData({
                            txpoint: a,
                            mapUrl: "http://apis.map.qq.com/ws/staticmap/v2/?center=" + a.lat + "," + a.lng + "&zoom=15&size=750*400&maptype=roadmap&markers=size:large|color:0xFFCCFF|label:H|" + a.lat + "," + a.lng + "&key=" + e.globalData.tencentMapKey
                        });
                    }), e.orderDisabled(i, i.data.house.id, "house_id");
                    var d = {
                        id: "",
                        status: "",
                        circle_name: "",
                        district_name: "",
                        thumb_image: ""
                    };
                    for (var c in d) d[c] = o[c];
                    d.building_name = o.building_name, d.gongwei_number_min = o.gongwei_number_min, 
                    d.gongwei_number_max = o.gongwei_number_max, d.rent_price = o.avg_price, d.price_unit = o.avg_price_unit, 
                    d.total_price = o.price, d.total_price_unit = o.price_unit, d.zhuangxiu = o.briefIntroduction.zhuangxiu.val, 
                    d.area = o.area, d.type = 2;
                    var h = {
                        t: 2,
                        v: o.id,
                        c: o.city_id,
                        d: o.district_id,
                        ci: o.circle_id,
                        s: o.street_id,
                        vt: new Date().getTime()
                    };
                    e.saveStorage(h, d);
                }
            }
        }), wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/likehouse/",
            data: {
                house_id: a.house_id,
                currtime: s.currtime,
                sign: s.sign
            },
            success: function(e) {
                var a = e.data;
                i.setData({
                    tjlist: a.data
                });
            }
        });
    },
    onReady: function(e) {
        var a = this, t = wx.createSelectorQuery();
        t.select(".head_swiper").boundingClientRect(), t.exec(function(e) {
            var t = e[0].width;
            a.setData({
                seeWidth: t - 30 * t / 750
            });
        });
    },
    touchStart: i.touchStart,
    touchEnd: function(e) {
        i.touchEnd.call(this, e), i.goFun.call(this, e);
    },
    turnScroll: i.turnScroll,
    turnEnd: function(e) {
        i.goFun.call(this, e);
    },
    showyekan: function(e) {
        this.setData({
            shade: !0,
            showYK: !0
        });
    },
    closeyuekan: function(e) {
        this.setData({
            shade: !1,
            showYK: !1
        });
    },
    inputChange: function(e) {
        this.setData({
            resPhone: e.detail.value
        });
    },
    submitYK: function(a) {
        var t = this, i = /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/, s = t.data.resPhone;
        return !t.data.isYK && (i.test(s) ? (t.setData({
            hasError: !1
        }), void e.orderlogin({
            mobile: s,
            name: "小程序楼盘页预约",
            building_id: t.data.building.id,
            building_name: t.data.building.name,
            from_page: 2
        }).then(function(e) {
            200 == e.code && t.setData({
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
    shouchang: function(a) {
        var t = this;
        if (e.globalData.userInfo) {
            var i = e.getSecret(), s = e.globalData.userInfo || {};
            t.data.isSC ? wx.request({
                url: e.globalData.uchaozuBase + "/api/miniapps/collect/del/",
                data: {
                    uid: s.user_id || "",
                    type: "2",
                    opt_id: t.data.house.id,
                    currtime: i.currtime,
                    sign: i.sign
                },
                success: function(e) {
                    e.data;
                    if (500 === e.statusCode) return !1;
                    t.setData({
                        isSC: !1
                    });
                }
            }) : wx.request({
                url: e.globalData.uchaozuBase + "/api/miniapps/collect/add/",
                data: {
                    uid: s.user_id || "",
                    type: "2",
                    opt_id: t.data.house.id,
                    currtime: i.currtime,
                    sign: i.sign
                },
                success: function(e) {
                    e.data;
                    if (500 === e.statusCode) return !1;
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
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.data.msg_template
        });
    }
});