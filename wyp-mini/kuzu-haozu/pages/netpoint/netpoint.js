var t = getApp(), a = require("../../utils/icon.js"), i = require("../../utils/point.js"), e = require("../../utils/scrollx.js");

Page({
    data: {
        imgUrls: [ "http://fang-oss.haozu.com/cms/index/2018/04/17/sRS6YK6pM7.jpg@750w_490h_1e_1c" ],
        pointInfo: {},
        building: {},
        simpleInfo: {},
        gxlist: [],
        zblist: [],
        mapUrl: [],
        tel_phone: "",
        companyList: [],
        baseList: [],
        total: 0,
        currIndex: 1,
        txpoint: {},
        share: 0,
        isUp: !0,
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
        msg_template: ""
    },
    changeCur: function(t) {
        this.setData({
            currIndex: t.detail.current + 1
        });
    },
    showAll: function() {
        this.setData({
            isUp: !1
        });
    },
    toMapInfo: function() {
        var a = this.data.building, i = this.data.txpoint;
        t.mapCall({
            latitude: i.lat,
            longitude: i.lng,
            scale: 16,
            name: a.name,
            address: a.address
        });
    },
    onLoad: function(a) {
        a.point_id = a.point_id || "35";
        var e = this;
        e.setData({
            share: a.share ? a.share : 0,
            tel_phone: t.globalData["tel-phone"]
        });
        var n = t.getSecret(), s = t.globalData.userInfo || {};
        s && s.mobile && e.setData({
            isDis: !0,
            resPhone: s.mobile,
            loginYK: !1
        }), wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/point/",
            data: {
                point_id: a.point_id,
                mobile: s.mobile || "",
                user_guid: s.user_guid || "",
                currtime: n.currtime,
                sign: n.sign
            },
            success: function(a) {
                var n = a.data;
                if (200 === n.code) {
                    var s = n.data.topic_image_list, o = n.data.point_info, r = [];
                    for (var l in o.baseService) r.push({
                        key: l,
                        name: o.baseService[l]
                    });
                    var u = [];
                    for (var l in o.companyService) u.push({
                        key: l,
                        name: o.companyService[l]
                    });
                    e.setData({
                        building: n.data.building_info,
                        pointInfo: o,
                        simpleInfo: n.data.simple_info,
                        imgUrls: s,
                        gxlist: n.data.house_list,
                        zblist: n.data.recommend_point_list,
                        total: s ? s.length : 0,
                        companyList: u,
                        baseList: r,
                        isYK: !!o.isIntention,
                        isSC: !!o.isCollect
                    });
                    var d = n.data.building_info.lat, c = n.data.building_info.lng;
                    i.getPoint({
                        lat: d,
                        lng: c
                    }).then(function(a) {
                        e.setData({
                            txpoint: a,
                            mapUrl: "http://apis.map.qq.com/ws/staticmap/v2/?center=" + a.lat + "," + a.lng + "&zoom=15&size=750*400&maptype=roadmap&markers=size:large|color:0xFFCCFF|label:H|" + a.lat + "," + a.lng + "&key=" + t.globalData.tencentMapKey
                        });
                    }), t.orderDisabled(e, e.data.building.id, "building_id");
                }
            }
        });
    },
    onShareAppMessage: function(t) {
        var a = this;
        return {
            title: a.data.pointInfo.name,
            desc: a.data.building.address,
            path: "/pages/netpoint/netpoint?share=1&point_id=" + a.data.pointInfo.id
        };
    },
    onReady: function(t) {
        var a = this, i = wx.createSelectorQuery();
        i.select(".head_swiper").boundingClientRect(), i.exec(function(t) {
            var i = t[0].width;
            a.setData({
                seeWidth: i - 30 * i / 750
            });
        });
    },
    touchStart: e.touchStart,
    touchEnd: function(t) {
        e.touchEnd.call(this, t), e.goFun.call(this, t);
    },
    turnScroll: e.turnScroll,
    turnEnd: function(t) {
        e.goFun.call(this, t);
    },
    showyekan: function(t) {
        this.setData({
            shade: !0,
            showYK: !0
        });
    },
    closeyuekan: function(t) {
        this.setData({
            shade: !1,
            showYK: !1
        });
    },
    inputChange: function(t) {
        this.setData({
            resPhone: t.detail.value
        });
    },
    submitYK: function(a) {
        var i = this, e = /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/, n = i.data.resPhone;
        return !i.data.isYK && (e.test(n) ? (i.setData({
            hasError: !1
        }), void t.orderlogin({
            mobile: n,
            name: "小程序楼盘页预约",
            building_id: i.data.building.id,
            building_name: i.data.building.name,
            from_page: 2
        }).then(function(t) {
            200 == t.code && i.setData({
                showYK: !1,
                subsucc: !0,
                isYK: !0
            });
        })) : (i.setData({
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