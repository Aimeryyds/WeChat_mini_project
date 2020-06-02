var a = getApp(), e = require("../../utils/icon.js"), t = require("../../utils/point.js");

Page({
    data: {
        title: "",
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
        showYK: !1,
        shade: !1,
        subsucc: !1,
        hasError: !1,
        resPhone: "",
        isYK: !1,
        isDis: !1,
        isSC: !1,
        share: 0,
        loginYK: !0,
        shareimg: e.fenxiang,
        xingimg: e.xing,
        mapimg: e.mapimg,
        zhankai: e.zhankai,
        rightmore: e.rightmore,
        heart: e.heart,
        heart_red: e.heart_red,
        error_icon: e.error,
        close: e.close,
        msg_template: ""
    },
    changeCur: function(a) {
        this.setData({
            currIndex: a.detail.current + 1
        });
    },
    onShareAppMessage: function(a) {
        var e = this;
        return {
            title: e.data.title,
            desc: e.data.title,
            path: "/pages/shareoffice/shareoffice?share=1&house_id=" + e.data.house.id
        };
    },
    toMapInfo: function() {
        var e = this.data.house, t = this.data.building, i = this.data.txpoint;
        a.mapCall({
            latitude: i.lat,
            longitude: i.lng,
            scale: 16,
            name: e.building_name,
            address: t.address
        });
    },
    onLoad: function(e) {
        e.building_id = e.building_id || "27";
        var i = this;
        i.setData({
            share: e.share ? e.share : 0,
            tel_phone: a.globalData["tel-phone"]
        }), a.globalDataLoad(i, "tel-phone", "msg_template");
        var s = a.getSecret(), n = a.globalData.userInfo || {};
        n && n.mobile && i.setData({
            isDis: !0,
            resPhone: n.mobile,
            loginYK: !1
        }), wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/house/",
            data: {
                house_id: e.house_id,
                mobile: n.mobile || "",
                user_guid: n.user_guid || "",
                currtime: s.currtime,
                sign: s.sign
            },
            success: function(e) {
                var s = e.data;
                if (200 === s.code) {
                    var n = s.data.imageList, o = s.data.houseInfo;
                    i.setData({
                        title: s.data.title,
                        house: o,
                        building: s.data.buildingInfo,
                        imgUrls: n,
                        houseNum: s.data.buildingHouseNumber,
                        total: n ? n.length : 0,
                        isYK: !!o.isIntention,
                        isSC: !!o.isCollect
                    });
                    var r = s.data.buildingInfo.lat, l = s.data.buildingInfo.lng;
                    t.getPoint({
                        lat: r,
                        lng: l
                    }).then(function(e) {
                        i.setData({
                            txpoint: e,
                            mapUrl: "http://apis.map.qq.com/ws/staticmap/v2/?center=" + e.lat + "," + e.lng + "&zoom=15&size=750*400&maptype=roadmap&markers=size:large|color:0xFFCCFF|label:H|" + e.lat + "," + e.lng + "&key=" + a.globalData.tencentMapKey
                        });
                    }), a.orderDisabled(i, i.data.house.id, "house_id");
                }
            }
        });
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
        var t = this, i = /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/, s = t.data.resPhone;
        return !t.data.isYK && (i.test(s) ? (t.setData({
            hasError: !1
        }), void a.orderlogin({
            mobile: s,
            name: "小程序楼盘页预约",
            building_id: t.data.building.id,
            building_name: t.data.building.name,
            from_page: 2
        }).then(function(a) {
            200 == a.code && t.setData({
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
    zixun: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.tel_phone
        });
    }
});