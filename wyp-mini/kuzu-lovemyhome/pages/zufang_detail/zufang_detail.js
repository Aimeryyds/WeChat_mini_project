var a = require("../../utils/z_time.js"), t = getApp(), e = require("../../sdk/dingxiang.js"), o = require("../../js/coordinate.js"), i = [], d = "", n = require("../../utils/gio-minp/index.js").default, s = require("../../sdk/gioConfig.js").default;

n("setConfig", s), Page({
    data: {
        loading: !0,
        shouq: !1,
        indicatorDots: !1,
        vertical: !1,
        autoplay: !0,
        circular: !0,
        interval: 6e3,
        duration: 1e3,
        previousMargin: 0,
        nextMargin: 0,
        swiperCurrent: 0,
        detailId: "",
        cityId: "",
        brokerId: "",
        sharetype: "",
        flag: !0,
        latitude: "",
        longitude: "",
        myrich: "",
        rawData: {},
        price: "",
        focussTate: "",
        code: "",
        openid: "",
        nickname: "",
        herd_img: "",
        sex: "",
        city: "",
        province: "",
        country: "",
        setInter: "",
        jishiqi: 0,
        brand: "",
        model: "",
        pixelRatio: "",
        screenWidth: "",
        screenHeight: "",
        language: "",
        version: "",
        system: "",
        SDKVersion: "",
        platform: "",
        networkType: "",
        residenceTime: 0,
        stuaIs: 0,
        shareHouse_img: "",
        shareHouse_Tit: "",
        shareShi: "",
        shareTing: "",
        shareQian: "",
        shareArea: ""
    },
    onLoad: function(a) {
        var o = this;
        new e({
            appId: t.globalData.dxAppId
        }, function(e, i) {
            if (e) console.log(e); else {
                o.setData({
                    dxDeviceId: i
                });
                var n = o;
                switch (console.log("租房详情页场景值——" + t.globalData.detail_scene), t.globalData.detail_scene) {
                  case 1007:
                    d = "1007单人聊天绘画中的小程序消息卡片（分享）";
                    break;

                  case 1008:
                    d = "1008群聊绘画中的小程序消息卡片（分享）";
                    break;

                  case 1047:
                    d = "1047扫描小程序码（扫码）";
                    break;

                  case 1048:
                    d = "1048长按识别小程序码（图片识码）";
                    break;

                  case 1049:
                    d = "1049手机相册选取小程序码（图片识码）";
                    break;

                  default:
                    d = "其他";
                }
                console.log(d), clearInterval(n.data.setInter), wx.getSystemInfo({
                    success: function(a) {
                        n.setData({
                            model: a.model,
                            pixelRatio: a.pixelRatio,
                            windowWidth: a.windowWidth,
                            windowHeight: a.windowHeight,
                            language: a.language,
                            version: a.version,
                            system: a.system,
                            platform: a.platform,
                            SDKVersion: a.SDKVersion,
                            brand: a.brand
                        });
                    }
                }), wx.getNetworkType({
                    success: function(a) {
                        n.setData({
                            networkType: a.networkType
                        });
                    }
                });
                var s = decodeURIComponent(a.scene);
                console.log("scene:" + s);
                var r = s.split("_");
                s.indexOf("_") > -1 ? (console.log("分享过来"), n.cityId = r[0], n.houseId = r[1], n.brokerId = r[2], 
                console.log("扫码城市id——" + n.cityId), console.log("扫码房源id——" + n.houseId), console.log("扫码经纪人id——" + n.brokerId), 
                n.setData({
                    detailId: n.houseId,
                    cityId: n.cityId,
                    brokerId: n.brokerId,
                    sharetype: 1
                })) : (console.log("列表或者分享卡片过来"), n.setData({
                    detailId: a.houseId,
                    cityId: a.cityId,
                    brokerId: a.brokerId,
                    sharetype: a.sharetype,
                    stuaIs: a.stuaIs
                })), n.data.brokerId && (n.data.setInter = setInterval(function() {
                    var a = n.data.residenceTime + 1, t = n.data.jishiqi + 1;
                    n.setData({
                        residenceTime: a,
                        jishiqi: t
                    });
                }, 1e3)), 1 == n.data.sharetype ? (console.log("分享的页面"), wx.getSetting({
                    success: function(a) {
                        a.authSetting["scope.userInfo"] ? (console.log("已经授权"), wx.checkSession({
                            success: function() {
                                console.log("授权未过期"), n.setData({
                                    shouq: !1
                                });
                            },
                            fail: function() {
                                console.log("授权过期"), 0 == n.data.loading && n.setData({
                                    shouq: !0
                                });
                            }
                        })) : (console.log("没有授权"), n.setData({
                            shouq: !0
                        }));
                    }
                })) : (console.log("其他"), n.setData({
                    shouq: !1
                })), console.log(n.data.sharetype), n.getData(a), n.getBrokerData(a);
            }
        });
    },
    getData: function() {
        var e = t.globalData.url_host, d = this, n = wx.getStorageSync("userInfo");
        if (d.data.loginStatus = wx.getStorageSync("loginStatus"), "1" == d.data.loginStatus ? (d.data.uidNum = n.uid, 
        d.data.tokenVal = n.token, console.log("tokenVal", d.data.tokenVal)) : (d.data.uidNum = "", 
        d.data.tokenVal = ""), 1 == d.data.sharetype) s = {
            hid: d.data.detailId,
            uid: d.data.uidNum,
            brokerid: d.data.brokerId,
            from: "applet"
        }; else var s = {
            hid: d.data.detailId,
            uid: d.data.uidNum
        };
        console.log(s), wx.request({
            url: e + "/appapi/rent/" + d.data.cityId + "/v1/allinfo",
            data: s,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: d.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (200 == t.data.status) {
                    if (console.log(t.data), void 0 == t.data.data.takelooklastdate && t.data.data.takelooklastdate) e = ""; else var e = t.data.data.takelooklastdate.substring(0, 10);
                    if (void 0 != t.data.data.houseinfo.webHousePlList) {
                        n = t.data.data.houseinfo.webHousePlList[0].dktime.substring(0, 10);
                        n = a.formatTime(n, "Y-M-D");
                    } else var n = "";
                    if (void 0 != t.data.data.brokerlist) {
                        c = (c = Number(t.data.data.brokerlist[0].dkscore)).toFixed(1);
                        for (var s = [], r = 0; r < t.data.data.brokerlist.length; r++) {
                            var l = Number(t.data.data.brokerlist[r].dkscore).toFixed(1);
                            s.push(l);
                        }
                    } else {
                        var c = "";
                        s = [];
                    }
                    var u = t.data.data.houseinfo.pay.replace(/##/g, "付"), g = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
                    if (void 0 != t.data.data.houseinfo.equipments) for (var h = t.data.data.houseinfo.equipments, r = 0; r < g.length; r++) h[r] != g[r] && h.splice(r, 0, "0");
                    var f = o.transformFromBaiduToGCJ(t.data.data.communityaround.y, t.data.data.communityaround.x);
                    i = i.concat({
                        id: 1,
                        latitude: f.latitude,
                        longitude: f.longitude
                    });
                    var p;
                    p = t.data.data.houseinfo.imgs ? t.data.data.houseinfo.imgs[0].replace("https", "http") : "https://res.5i5j.com/cache/weixin/common/default_house_detail_404.png";
                    var m, v;
                    m = 99 == t.data.data.houseinfo.bedroom ? "多" : t.data.data.houseinfo.bedroom, v = 99 == t.data.data.houseinfo.livingroom ? "多" : t.data.data.houseinfo.livingroom, 
                    d.setData({
                        detail_data: t.data.data,
                        detail_data_info: t.data.data.houseinfo,
                        dktimes: e,
                        fptimes: n,
                        bro_score: c,
                        bro_fenshu: s,
                        word_result: u,
                        allPosition: h,
                        markers: i,
                        latitude: f.latitude,
                        longitude: f.longitude,
                        loading: !1,
                        price: t.data.data.houseinfo.price,
                        focussTate: t.data.data.houseinfo.focusstate,
                        shareImgs: p,
                        shareHouse_Tit: t.data.data.houseinfo.communityname,
                        shareShi: m + "室",
                        shareTing: v + "厅",
                        shareQian: t.data.data.houseinfo.price + "元/月",
                        shareArea: t.data.data.houseinfo.area + "㎡"
                    }), console.log("focusstate", t.data.data.houseinfo.focusstate), 0 == d.data.loading && d.setData({
                        foot: !0
                    });
                }
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    getBrokerData: function() {
        var a = this, e = t.globalData.url_host, o = {
            brokerid: a.data.brokerId
        };
        wx.request({
            url: e + "/appapi/broker/" + a.data.cityId + "/v1/allbrokerinfo",
            data: o,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (console.log(t.data), 200 == t.data.status) {
                    var e;
                    if (void 0 != t.data.data.brokerinfoparams) e = t.data.data.brokerinfoparams, o = (o = Number(e.dkscore)).toFixed(1); else var o = "";
                    a.setData({
                        detail_broker_data: t.data.data.brokerinfoparams,
                        tBrokerid: e,
                        sharebroker_score: o
                    });
                }
            }
        });
    },
    getCurrent: function(a) {
        this.setData({
            swiperCurrent: a.detail.current
        });
    },
    imgYu: function(a) {
        var t = a.currentTarget.dataset.src, e = a.currentTarget.dataset.list;
        console.log(t), console.log(e);
        for (var o = [], i = 0; i < e.length; i++) {
            console.log(i);
            var d = e[i].replace("https", "http");
            o.push(d);
        }
        wx.previewImage({
            current: t,
            urls: o
        });
    },
    tsq_zaishou: function(a) {
        var t = this.data.detail_data.houseinfo.sqid;
        wx.navigateTo({
            url: "../zaishou/zaishou?sqId=" + t + "&cityId=" + this.data.cityId + "&listParam=2"
        });
    },
    txq_zaishou: function(a) {
        var t = this.data.detail_data.houseinfo.communityid;
        wx.navigateTo({
            url: "../zaishou/zaishou?communityId=" + t + "&cityId=" + this.data.cityId + "&listParam=2"
        });
    },
    tuijian: function(a) {
        var t = a.currentTarget.dataset.id;
        console.log(t), wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + t + "&cityId=" + this.data.cityId
        });
    },
    dklist: function(a) {
        wx.navigateTo({
            url: "../sale_detail_dk/dklist?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&detailUrl=2"
        });
    },
    xymore: function() {
        wx.navigateTo({
            url: "../zufang_detail/xy"
        });
    },
    tel: function(a) {
        var e = this, o = a.currentTarget.id, i = a.currentTarget.dataset.bid, d = (e.data.cityId, 
        a.currentTarget.dataset.teltype), s = a.currentTarget.dataset.index + 1;
        console.log("*************************************************************************************", s), 
        n("track", "telconsult", {
            module_var: d,
            iconlocation_var: s,
            agentid_var: i,
            telnum_var: o
        });
        var r = t.tdsdk;
        console.log("sdk", r), r.appEvent.eventId({
            eventLabel: 1
        }), r.appEvent.eventId({
            eventLabel: 2
        }), r.appEvent.eventId({
            eventLabel: 5
        });
        var l = t.globalData.url_host;
        if (wx.request({
            url: l + "/wxim/wxcallback",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: t.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            success: function(a) {
                console.log("成功666:", a);
            }
        }), e.data.brokerId) {
            var c = a.currentTarget.dataset.jobleave;
            console.log(c), 0 == c ? wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人",
                icon: "none"
            }) : wx.makePhoneCall({
                phoneNumber: o,
                success: function() {
                    console.log("拨打成功", o);
                },
                fail: function() {
                    console.log("拨打失败", o);
                }
            });
        }
        e.data.brokerId || wx.makePhoneCall({
            phoneNumber: o,
            success: function() {
                console.log("拨打电话成功!"), console.log("成功", o);
            },
            fail: function() {
                console.log("拨打电话失败！"), console.log("失败", o);
            }
        });
    },
    brokerDeatil: function(a) {
        var t = this, e = a.currentTarget.dataset.brokerid;
        a.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "../broker_detail/brokerDetail?brokerId=" + e + "&cityId=" + t.data.cityId + "&citycode="
        });
    },
    tese: function(a) {
        wx.navigateTo({
            url: "../sale_detail/tese?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&detailUrl=2"
        });
    },
    ziping: function() {
        wx.navigateTo({
            url: "../zufang_detail/ziping?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&detailUrl=2"
        });
    },
    tagIndex: function(a) {
        var t = a.currentTarget.dataset.src;
        wx.setStorageSync("imgsrc", t), wx.navigateTo({
            url: "../sale_detail/tag?cityId=" + this.data.cityId
        });
    },
    onReady: function(a) {
        this.mapCtx = wx.createMapContext("myMap");
    },
    getCenterLocation: function() {
        this.mapCtx.getCenterLocation({
            success: function(a) {
                console.log(a.longitude), console.log(a.latitude);
            }
        });
    },
    onShow: function() {
        var a = this;
        wx.login({
            success: function(t) {
                console.log(t);
                var e = t.code;
                wx.getUserInfo({
                    success: function(t) {
                        var o = t.rawData;
                        o = JSON.parse(o), a.setData({
                            code: e,
                            openid: "",
                            nickname: o.nickName,
                            herd_img: o.avatarUrl,
                            sex: o.gender,
                            city: o.city,
                            province: o.province,
                            country: o.country
                        });
                    }
                });
            }
        });
    },
    onHide: function() {
        var a = this;
        if (a.data.brokerId) {
            var e = t.globalData.url_host, o = parseInt(a.data.jishiqi), i = 0, n = 0;
            o > 60 && (i = parseInt(o / 60), o = parseInt(o % 60), i > 60 && (n = parseInt(i / 60), 
            i = parseInt(i % 60)));
            var s = parseInt(o) + "秒";
            i > 0 && (s = parseInt(i) + "分" + s), n > 0 && (s = parseInt(n) + "小时" + s), a.setData({
                residenceTime: s
            }), console.log("返回时间" + s), console.log("手机型号 : " + a.data.model), console.log("设备像素比--- " + a.data.pixelRatio), 
            console.log("屏幕宽度，单位px--- " + a.data.windowWidth), console.log("屏幕高度，单位px--- " + a.data.windowHeight), 
            console.log("微信设置的语言--- " + a.data.language), console.log("微信版本号--- " + a.data.version), 
            console.log("操作系统及版本--- " + a.data.system), console.log("客户端平台--- " + a.data.platform), 
            console.log("客户端基础库版本--- " + a.data.SDKVersion), console.log("设备品牌--- " + a.data.brand), 
            console.log("停留时间--- " + a.data.residenceTime), console.log("网络状态--- " + a.data.networkType), 
            console.log("昵称--- " + a.data.nickname), console.log("头像--- " + a.data.herd_img), 
            console.log("性别--- " + a.data.sex), console.log("province--- " + a.data.province), 
            console.log("country--- " + a.data.country), console.log("city--- " + a.data.city), 
            console.log("code--- " + a.data.code), console.log("经纪人id--- " + a.data.brokerId), 
            console.log("房源id--- " + a.data.detailId), console.log("city_id--- " + a.data.cityId), 
            console.log("来源--- " + d), console.log("type--- 2"), console.log("stuaIs--- " + a.data.stuaIs), 
            wx.request({
                url: e + "/user/v1/wxshareuser",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    hid: a.data.detailId,
                    brokerid: a.data.brokerId,
                    code: a.data.code,
                    openid: "",
                    nickname: a.data.nickname,
                    herd_img: a.data.herd_img,
                    sex: a.data.sex,
                    city: a.data.city,
                    province: a.data.province,
                    country: a.data.country,
                    form_url: d,
                    city_id: a.data.cityId,
                    type: 2,
                    model: a.data.model,
                    pixelRatio: a.data.pixelRatio,
                    windowWidth: a.data.windowWidth,
                    windowHeight: a.data.windowHeight,
                    language: a.data.language,
                    version: a.data.version,
                    system: a.data.system,
                    platform: a.data.platform,
                    SDKVersion: a.data.SDKVersion,
                    brand: a.data.brand,
                    residenceTime: a.data.residenceTime,
                    networkType: a.data.networkType,
                    stuaIs: a.data.stuaIs
                },
                method: "post",
                success: function(t) {
                    console.log("成功"), console.log(t), a.setData({
                        stuaIs: t.data.data
                    });
                }
            });
        }
    },
    onUnload: function() {
        var a = this;
        clearInterval(a.data.setInter);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    guanbi: function() {
        this.setData({
            shouq: !1
        });
    },
    bindGetUserInfo: function(a) {
        var t = this;
        console.log(a.detail.userInfo), a.detail.userInfo ? wx.login({
            success: function(a) {
                console.log(a);
                var e = a.code;
                wx.getUserInfo({
                    success: function(a) {
                        var o = a.rawData;
                        o = JSON.parse(o), t.setData({
                            code: e,
                            openid: "",
                            nickname: o.nickName,
                            herd_img: o.avatarUrl,
                            sex: o.gender,
                            city: o.city,
                            province: o.province,
                            country: o.country
                        });
                    }
                });
            }
        }) : console.log("用户按了拒绝按钮");
    },
    onShareAppMessage: function(a) {
        var t = this;
        return {
            title: t.data.shareHouse_Tit + " | " + t.data.shareShi + t.data.shareTing + " | " + t.data.shareArea + " | " + t.data.shareQian,
            imageUrl: t.data.shareImgs,
            path: "/pages/zufang_detail/zufang_detail?sharetype=1&houseId=" + t.data.detailId + "&cityId=" + t.data.cityId + "&brokerId=" + t.data.brokerId
        };
    },
    avatarError: function(a) {
        var t = this, e = {};
        e["detail_data.brokerlist[" + Number(a.target.dataset.imgindex) + "].brokerurl"] = "/img/resources/default_broker_404.png", 
        t.setData(e);
    },
    shareError: function(a) {
        var t = {};
        t["detail_broker_data.brokerimg"] = "/img/resources/default_broker_404.png", this.setData(t);
    },
    imageError: function(a) {
        var t = this, e = {};
        e["item.picUrl"] = "https://res.5i5j.com/cache/weixin/common/xybg.png", t.setData(e);
    },
    icon_3d: function(a) {
        this.data.detail_data.houseinfo.img3durl;
        wx.navigateTo({
            url: "../sale_detail/vr?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&exchangeAndRent=rent&sharetype=" + this.data.sharetype + "&brokerid=" + this.data.brokerId
        });
    },
    toCommunity: function(a) {
        var t = a.currentTarget.dataset.communityid;
        console.log(t), wx.navigateTo({
            url: "../community_detail/comDetail?communityId=" + t + "&cityId=" + this.data.cityId
        });
    },
    focusFn: function() {
        var a = t.globalData.url_host, e = this;
        if ("1" == e.data.loginStatus) {
            var o = {
                uid: e.data.uidNum,
                companysid: e.data.cityId,
                type: 1,
                price: e.data.price,
                commonid: e.data.detailId
            };
            console.log("tokenVal", e.data.tokenVal), wx.request({
                url: a + "/appapi/user/v1/focus",
                method: "POST",
                data: o,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: e.data.tokenVal,
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                success: function(a) {
                    e.setData({
                        focussTate: 1
                    }), wx.showToast({
                        title: "关注成功",
                        icon: "none"
                    });
                },
                fail: function(a) {
                    console.log("error", a);
                },
                complete: function(a) {}
            });
        } else wx.redirectTo({
            url: "../login/login?url=zufang_detail/zufang_detail&houseId=" + e.data.detailId + "&cityId=" + e.data.cityId
        });
    },
    unfocusFn: function() {
        var a = t.globalData.url_host, e = this;
        if ("1" == e.data.loginStatus) {
            var o = {
                uid: e.data.uidNum,
                companysid: e.data.cityId,
                type: 1,
                commonid: e.data.detailId
            };
            wx.request({
                url: a + "/appapi/user/v1/unfocus",
                method: "POST",
                data: o,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: e.data.tokenVal,
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                success: function(a) {
                    e.setData({
                        focussTate: 0
                    }), wx.showToast({
                        title: "已取消关注",
                        icon: "none"
                    });
                },
                fail: function(a) {
                    console.log("error", a);
                },
                complete: function(a) {}
            });
        } else wx.redirectTo({
            url: "../login/login?url=zufang_detail/zufang_detail&houseId=" + e.data.detailId + "&cityId=" + e.data.cityId
        });
    },
    toIm: function(a) {
        var e = this, o = wx.getStorageSync("loginStatus"), i = a.currentTarget.dataset.bid, d = e.data.cityId, s = e.data.detailId, r = t.globalData.url_host, l = a.currentTarget.dataset.ailiaotype, c = a.currentTarget.dataset.index + 1;
        if (console.log("*************************************************************************************", c), 
        n("track", "onlineconsult", {
            module_var: l,
            iconlocation_var: c,
            agentid_var: i
        }), 1 == o) {
            var u = a.currentTarget.dataset.leave, g = t.tdsdk;
            console.log("sdk", g), g.appEvent.eventId({
                eventLabel: 1
            }), g.appEvent.eventId({
                eventLabel: 3
            }), g.appEvent.eventId({
                eventLabel: 9
            }), wx.request({
                url: r + "/wxim/wxcallback",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    click_id: t.globalData.click_id,
                    action_type: "RESERVATION",
                    value: 40,
                    user_action_set_id: 1110064786
                },
                method: "POST",
                success: function(a) {
                    console.log("成功666:", a);
                }
            }), void 0 === u || 1 == u ? (wx.requestSubscribeMessage({
                tmplIds: t.globalData.tmplids,
                success: function(a) {
                    console.log(a);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + i + "&hid=" + s + "&cityId=" + d + "&type=2"
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + i + "&ret_type=1&hid=" + s + "&cityId=" + d + "&type=2&maidian=1&d_url=2"
            });
        }
    }
});