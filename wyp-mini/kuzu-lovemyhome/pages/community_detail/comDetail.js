require("../../utils/z_time.js");

var t, a = require("../../js/qqmap-wx-jssdk.min.js"), e = getApp(), o = require("../../sdk/dingxiang.js"), i = require("../../js/coordinate.js"), n = require("../../utils/gio-minp/index.js").default, r = require("../../sdk/gioConfig.js").default;

n("setConfig", r), Page({
    data: {
        loading: !0,
        foot: !1,
        shouq: !0,
        indicatorDots: !1,
        vertical: !1,
        autoplay: !0,
        circular: !0,
        interval: 6e3,
        duration: 1e3,
        previousMargin: 0,
        nextMargin: 0,
        swiperCurrent: 0,
        communityId: "",
        cityId: "",
        header_tag: [ "基础信息", "小区周边", " 小区问答", " 小区房源", "小区经纪人" ],
        header_current: 0,
        header_hidden: !0,
        brokerStoreId: "",
        dianpu: "",
        brokerId: "",
        sharetype: "",
        flag: !0,
        currentTab: 0,
        rawData: {},
        latitude: "",
        longitude: "",
        circum_title: "交通",
        circum_des: "附近的地铁站和公交站",
        circum_list: [ "交通", "学校", "医疗", "购物", "门店" ],
        circum_current: 0,
        comIfon: ""
    },
    onLoad: function(i) {
        var n = this;
        new o({
            appId: e.globalData.dxAppId
        }, function(e, o) {
            e ? console.log(e) : (n.setData({
                dxDeviceId: o
            }), console.log("小区详情", i), i.brokerId ? n.setData({
                communityId: i.communityId,
                cityId: i.cityId,
                brokerStoreId: i.brokerId,
                dianpu: i.dianpu
            }) : n.setData({
                communityId: i.communityId,
                cityId: i.cityId
            }), n.getData(), t = new a({
                key: "PHJBZ-23WC3-WZH3J-YCJHE-ZOSVV-FXBOB"
            }));
        });
    },
    getData: function() {
        var t = this, a = e.globalData.url_host;
        wx.request({
            url: a + "/community/" + t.data.cityId + "/v1/allinfo",
            data: {
                communityid: t.data.communityId
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                console.log(a.data.data), wx.setNavigationBarTitle({
                    title: a.data.data.communityInfo.address
                });
                var e = a.data.data.copywriting, o = [], n = [];
                if (void 0 != e) for (var r = 0; r < e.length; r++) {
                    o.push(e[r].title);
                    for (var c = e[r].detailmessage, d = [], l = 0; l < c.length; l++) {
                        var s = c[l].title.titlestr, u = c[l].des.titlestr;
                        if (void 0 != c[l].title.replace && c[l].title.replace.length > 0) for (var g = 0; g < c[l].title.replace.length; g++) s = s.replace("@", "<span style='color:#FFB102'>" + c[l].title.replace[g] + "</span>");
                        if (void 0 != c[l].des.replace && c[l].des.replace.length > 0) for (var m = 0; m < c[l].des.replace.length; m++) u = u.replace("@", "<span style='color:#FFB102'>" + c[l].des.replace[m] + "</span>");
                        s = s.replace(/\n/g, "<br>"), u = u.replace(/\n/g, "<br>");
                        var h = {
                            icon: c[l].imgurl,
                            info: s + "&emsp;" + u
                        };
                        d.push(h);
                    }
                    n.push(d);
                }
                var p = i.transformFromBaiduToGCJ(a.data.data.communityInfo.y, a.data.data.communityInfo.x), f = {
                    id: t.cityId,
                    callout: {
                        borderRadius: 15
                    },
                    latitude: p.latitude,
                    longitude: p.longitude
                }, _ = a.data.data.questionlist;
                void 0 == _ && (_ = null);
                var y = a.data.data.SaleProListInfo;
                void 0 == y && (y = null);
                var v = a.data.data.RentProListInfo;
                void 0 == v && (v = null);
                var I = a.data.data.broker1;
                void 0 == I && (I = null);
                var w = a.data.data.broker2;
                void 0 == w && (w = null);
                if (t.setData({
                    loading: !1,
                    communityInfo: a.data.data.communityInfo,
                    copywriting_title: o,
                    copywriting_info: n,
                    markersIndex: f,
                    latitude: p.latitude,
                    longitude: p.longitude,
                    qua: _,
                    sale: y,
                    rent: v,
                    broker1: I,
                    broker2: w,
                    height: "128rpx",
                    shop: a.data.data.CommunityidStores,
                    comIfon: a.data.data.communityInfo
                }), 0 != a.data.data.communityInfo.y && 0 != a.data.data.communityInfo.x) {
                    var x = wx.getStorageSync("traffic_mk_" + t.data.communityId), k = wx.getStorageSync("traffic_con_" + t.data.communityId);
                    x && k ? t.setData({
                        markers: x,
                        circum: k
                    }) : t.trafficShow();
                }
                0 == t.data.loading && t.setData({
                    foot: !0
                });
            }
        });
    },
    chooseCircum: function(t) {
        var a = this;
        switch (t.currentTarget.dataset.index) {
          case 0:
            var e = wx.getStorageSync("traffic_mk_" + a.data.communityId), o = wx.getStorageSync("traffic_con_" + a.data.communityId);
            console.log(e), e && o ? a.setData({
                markers: e,
                circum: o
            }) : a.trafficShow(), a.setData({
                circum_current: 0,
                circum_title: "交通",
                circum_des: "附近的地铁站和公交站"
            });
            break;

          case 1:
            var i = wx.getStorageSync("school_mk_" + a.data.communityId), n = wx.getStorageSync("school_con_" + a.data.communityId);
            console.log("school", i), i && n ? a.setData({
                markers: i,
                circum: n
            }) : a.schoolShow(), a.setData({
                circum_current: 1,
                circum_title: "学校",
                circum_des: "附近的学校"
            });
            break;

          case 2:
            var r = wx.getStorageSync("hospital_mk_" + a.data.communityId), c = wx.getStorageSync("hospital_con_" + a.data.communityId);
            r && c ? a.setData({
                markers: r,
                circum: c
            }) : a.hospitalShow(), a.setData({
                circum_current: 2,
                circum_title: "医疗",
                circim_des: "附近的医院"
            });
            break;

          case 3:
            var d = wx.getStorageSync("shopping_mk_" + a.data.communityId), l = wx.getStorageSync("shopping_con_" + a.data.communityId);
            d && l ? a.setData({
                markers: d,
                circum: l
            }) : a.shoppingShow(), a.setData({
                circum_current: 3,
                circum_title: "购物",
                circim_des: "附近的商场"
            });
            break;

          case 4:
            a.shopShow(), a.setData({
                circum_current: 4,
                circum_title: "门店",
                circim_des: "附近的门店"
            });
        }
    },
    trafficShow: function() {
        var a = this;
        t.search({
            keyword: "交通",
            location: {
                latitude: a.data.latitude,
                longitude: a.data.longitude
            },
            filter: "category=地铁站,公交站",
            success: function(t) {
                for (var e = [], o = "", i = 0; i < t.data.length; i++) e.push({
                    title: t.data[i].title,
                    id: t.data[i].id,
                    latitude: t.data[i].location.lat,
                    longitude: t.data[i].location.lng,
                    iconPath: "../../img/resources/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + t.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == t.data.length - 1 ? o += t.data[i].title : o = o + t.data[i].title + ",";
                e.push(a.data.markersIndex), wx.setStorageSync("traffic_mk_" + a.data.communityId, e), 
                wx.setStorageSync("traffic_con_" + a.data.communityId, o), a.setData({
                    markers: e,
                    circum: o
                }), console.log("index", a.data.markersIndex);
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    schoolShow: function() {
        var a = this;
        t.search({
            keyword: "学校",
            filter: "category=大学,小学,幼儿园",
            location: {
                latitude: a.data.latitude,
                longitude: a.data.longitude
            },
            success: function(t) {
                console.log("res", t);
                var e = [], o = "";
                console.log("m", e);
                for (var i = 0; i < t.data.length; i++) e.push({
                    title: t.data[i].title,
                    id: t.data[i].id,
                    latitude: t.data[i].location.lat,
                    longitude: t.data[i].location.lng,
                    iconPath: "../../img/resources/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + t.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == t.data.length - 1 ? o += t.data[i].title : o = o + t.data[i].title + ",";
                e.push(a.data.markersIndex), wx.setStorageSync("school_mk_" + a.data.communityId, e), 
                wx.setStorageSync("school_con_" + a.data.communityId, o), console.log("mks", e), 
                a.setData({
                    markers: e,
                    circum: o
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    hospitalShow: function() {
        var a = this;
        t.search({
            keyword: "医院",
            location: {
                latitude: a.data.latitude,
                longitude: a.data.longitude
            },
            success: function(t) {
                for (var e = [], o = "", i = 0; i < t.data.length; i++) e.push({
                    title: t.data[i].title,
                    id: t.data[i].id,
                    latitude: t.data[i].location.lat,
                    longitude: t.data[i].location.lng,
                    iconPath: "../../img/resources/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + t.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == t.data.length - 1 ? o += t.data[i].title : o = o + t.data[i].title + ",";
                e.push(a.data.markersIndex), wx.setStorageSync("hospital_mk_" + a.data.communityId, e), 
                wx.setStorageSync("hospital_con_" + a.data.communityId, o), a.setData({
                    markers: e,
                    circum: o
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    shoppingShow: function() {
        var a = this;
        t.search({
            keyword: "购物",
            filter: "category=商场",
            location: {
                latitude: a.data.latitude,
                longitude: a.data.longitude
            },
            success: function(t) {
                for (var e = [], o = "", i = 0; i < t.data.length; i++) e.push({
                    title: t.data[i].title,
                    id: t.data[i].id,
                    latitude: t.data[i].location.lat,
                    longitude: t.data[i].location.lng,
                    iconPath: "../../img/resources/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + t.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == t.data.length - 1 ? o += t.data[i].title : o = o + t.data[i].title + ",";
                e.push(a.data.markersIndex), wx.setStorageSync("shopping_mk_" + a.data.communityId, e), 
                wx.setStorageSync("shopping_con_" + a.data.communityId, o), a.setData({
                    markers: e,
                    circum: o
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    shopShow: function() {
        for (var t = this, a = t.data.shop, e = [], o = "", i = 0; i < a.length; i++) e.push({
            title: a[i].shopname,
            latitude: a[i].y,
            longitude: a[i].x,
            iconPath: "../../img/resources/adr_icon.png",
            height: 1,
            width: 1,
            callout: {
                content: " " + a[i].shopname + " ",
                borderRadius: 15,
                bgColor: "#FFB102",
                display: "ALWAYS",
                padding: 3,
                borderWidth: .5,
                borderColor: "#999"
            }
        }), i == a.length - 1 ? o += a[i].shopname : o = o + a[i].shopname + ",";
        e.push(t.data.markersIndex), t.setData({
            markers: e,
            circum: o
        });
    },
    getCurrent: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    imgYu: function(t) {
        for (var a = t.currentTarget.dataset.src, e = t.currentTarget.dataset.list, o = [], i = 0; i < e.length; i++) {
            console.log(i);
            var n = e[i].replace("https", "http");
            o.push(n);
        }
        console.log(a), console.log(e), wx.previewImage({
            current: a,
            urls: o
        });
    },
    icon_3d: function(t) {
        this.data.detail_data.houseinfo.img3durl;
        wx.navigateTo({
            url: "../sale_detail/vr?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId
        });
    },
    clickTab: function(t) {
        var a = this;
        if (this.data.currentTab === t.target.dataset.current) return !1;
        a.setData({
            currentTab: t.target.dataset.current
        });
    },
    tel: function(t) {
        var a = this, o = t.currentTarget.id, i = t.currentTarget.dataset.job_leave, r = (a.data.cityId, 
        t.currentTarget.dataset.bid), c = t.currentTarget.dataset.teltype, d = t.currentTarget.dataset.index + 1;
        console.log("*************************************************************************************", d);
        var l = e.tdsdk;
        console.log("sdk", l), n("track", "telconsult", {
            module_var: c,
            iconlocation_var: d,
            agentid_var: r,
            telnum_var: o
        }), l.appEvent.eventId({
            eventLabel: 1
        }), l.appEvent.eventId({
            eventLabel: 2
        }), l.appEvent.eventId({
            eventLabel: 7
        });
        var s = e.globalData.url_host;
        wx.request({
            url: s + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: e.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(t) {
                console.log("成功666:", t);
            }
        }), console.log("job_leave", i), 1 == i ? wx.makePhoneCall({
            phoneNumber: o,
            success: function() {
                console.log("拨打电话成功!"), console.log("成功", o);
            },
            fail: function() {
                console.log("拨打电话失败！"), console.log("失败", o);
            }
        }) : wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人！",
            icon: "none"
        });
    },
    toHouseList: function(t) {
        var a = parseInt(t.currentTarget.dataset.list_param), e = t.currentTarget.dataset.communityid, o = t.currentTarget.dataset.cityid;
        wx.navigateTo({
            url: "../zaishou/zaishou?communityId=" + e + "&cityId=" + o + "&listParam=" + a
        });
    },
    toContact: function() {
        wx.navigateTo({
            url: "../contact/contact?communityid=" + this.data.communityId + "&cityId=" + this.data.cityId + "&brokerId=" + this.data.brokerStoreId + "&dianpu=" + this.data.dianpu
        });
    },
    toHouseDetail: function(t) {
        var a = parseInt(t.currentTarget.dataset.list_param), e = t.currentTarget.dataset.houseid, o = t.currentTarget.dataset.cityid;
        1 == a && wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + e + "&cityId=" + o
        }), 2 == a && wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + e + "&cityId=" + o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    guanbi: function() {
        this.setData({
            shouq: !1
        });
    },
    bindGetUserInfo: function(t) {
        var a = this, e = a.data.detail_data.houseinfo.housesid, o = a.data.brokerId;
        console.log("______________2"), console.log(o), console.log("______________2"), 
        console.log(t.detail.userInfo), t.detail.userInfo ? wx.login({
            success: function(t) {
                console.log(t);
                var a = t.code;
                console.log(e), wx.getUserInfo({
                    success: function(t) {
                        var i = t.rawData;
                        i = JSON.parse(i), console.log("===============11111111111"), console.log(i), console.log("hid:" + e + "\nbrokerid:" + o + "\ncode:" + a + "\nnickname:" + i.nickName + "\nherd_img:" + i.avatarUrl + "\nsex:" + i.gender + "\ncity:" + i.city + "\nprovince:" + i.province + "\ncountry:" + i.country + "\nform_url:" + wx_from), 
                        console.log("===============11111111111"), wx.request({
                            url: "https://appapi.5i5j.com/user/v1/wxshareuser",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                deviceSource: 3,
                                dxdeviceId: this.data.dxDeviceId
                            },
                            data: {
                                hid: e,
                                brokerid: o,
                                code: a,
                                openid: "",
                                nickname: i.nickName,
                                herd_img: i.avatarUrl,
                                sex: i.gender,
                                city: i.city,
                                province: i.province,
                                country: i.country,
                                form_url: wx_from
                            },
                            method: "post",
                            success: function(t) {
                                console.log("成功"), console.log(t);
                            }
                        });
                    }
                });
            }
        }) : console.log("用户按了拒绝按钮");
    },
    onShareAppMessage: function(t) {
        console.log(t), console.log(this.data.comIfon);
        var a = this.data.comIfon.address, e = "/pages/community_detail/comDetail?communityId=" + this.data.communityId + "&cityId=" + this.data.cityId;
        if (this.data.comIfon.imgs[0]) o = this.data.comIfon.imgs[0]; else var o = "https://res.5i5j.com/cache/weixin/common/default_house_detail_404.png";
        return console.log(e), {
            title: a,
            path: "/pages/community_detail/comDetail?communityId=" + this.data.communityId + "&cityId=" + this.data.cityId,
            imageUrl: o,
            success: function(t) {
                t.shareTickets;
                api.showToast("转发成功");
            },
            fail: function(t) {
                api.showToast("转发失败:" + JSON.stringify(t));
            }
        };
    },
    avatarError: function(t) {
        var a = {};
        a["detail_data.brokerlist[" + Number(t.target.dataset.imgindex) + "].brokerurl"] = "/img/resources/default_broker_404.png", 
        this.setData(a);
    },
    toIm: function(t) {
        var a = this, o = wx.getStorageSync("loginStatus"), i = t.currentTarget.dataset.bid, r = e.globalData.url_host, c = (a.data.cityId, 
        t.currentTarget.dataset.ailiaotype), d = t.currentTarget.dataset.index + 1;
        if (console.log("*************************************************************************************", d), 
        n("track", "onlineconsult", {
            module_var: c,
            iconlocation_var: d,
            agentid_var: i
        }), 1 == o) {
            var l = t.currentTarget.dataset.leave, s = e.tdsdk;
            console.log("sdk", s), s.appEvent.eventId({
                eventLabel: 1
            }), s.appEvent.eventId({
                eventLabel: 3
            }), s.appEvent.eventId({
                eventLabel: 10
            }), wx.request({
                url: r + "/wxim/wxcallback",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    click_id: e.globalData.click_id,
                    action_type: "RESERVATION",
                    value: 40,
                    user_action_set_id: 1110064786
                },
                method: "post",
                success: function(t) {
                    console.log("成功666:", t);
                }
            }), void 0 === l || 1 == l ? (wx.requestSubscribeMessage({
                tmplIds: e.globalData.tmplids,
                success: function(t) {
                    console.log(t);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + i
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + i + "&ret_type=1&maidian=1&jjrMain=1"
            });
        }
    },
    imageError: function(t) {
        var a = {};
        a["item.imgurl"] = "https://res.5i5j.com/cache/weixin/common/default_house_detail_404.png", 
        this.setData(a);
    },
    toBrokerDetail: function(t) {
        var a = t.currentTarget.dataset.brokerid, e = t.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "/pages/broker_detail/brokerDetail?brokerId=" + a + "&cityId=" + this.data.cityId + "&citycode=" + e
        });
    },
    toBrokerList: function(t) {
        var a = t.currentTarget.dataset.cityid, e = t.currentTarget.dataset.communityid, o = t.currentTarget.dataset.btype;
        wx.navigateTo({
            url: "/pages/comBrokerList/comBrokerList?cityid=" + a + "&communityid=" + e + "&btype=" + o
        });
    }
});