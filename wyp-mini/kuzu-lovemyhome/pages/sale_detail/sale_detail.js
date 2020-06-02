function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = require("../../utils/z_time.js"), o = [], i = getApp(), d = require("../../sdk/dingxiang.js"), n = require("../../utils/gio-minp/index.js").default, r = require("../../sdk/gioConfig.js").default;

n("setConfig", r);

var s, l, c, u, g, h, p = require("../../js/coordinate.js"), f = [], v = [], m = [], I = [], y = [], w = "";

Page((t = {
    data: {
        loading: !0,
        foot: !1,
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
        currentTab: 0,
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
        shareArea: "",
        dianpu: null
    },
    onLoad: function(a) {
        var t = this;
        new d({
            appId: i.globalData.dxAppId
        }, function(e, o) {
            if (e) console.log(e); else {
                switch (t.setData({
                    dxDeviceId: o
                }), console.log("详情页场景值——" + i.globalData.detail_scene), i.globalData.detail_scene) {
                  case 1007:
                    w = "1007单人聊天绘画中的小程序消息卡片（分享）";
                    break;

                  case 1008:
                    w = "1008群聊绘画中的小程序消息卡片（分享）";
                    break;

                  case 1047:
                    w = "1047扫描小程序码（扫码）";
                    break;

                  case 1048:
                    w = "1048长按识别小程序码（图片识码）";
                    break;

                  case 1049:
                    w = "1049手机相册选取小程序码（图片识码）";
                    break;

                  default:
                    w = "其他";
                }
                console.log(w);
                var d = t, n = wx.getStorageSync("loginStatus"), r = wx.getStorageSync("userInfo"), s = i.globalData.url_host;
                if ("1" == n) l = r.token; else var l = "";
                wx.request({
                    url: s + "/event/activeactivitynq?city_id=" + a.cityId,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                        deviceSource: 3,
                        token: l
                    },
                    success: function(a) {
                        d.setData({
                            returnData: a.data.data.lq
                        }), a.data.data.activities ? (console.log("查看是有数据-------", a.data.data.activities.length), 
                        d.setData({
                            returnData: a.data.data.lq,
                            kajuanLength: a.data.data.activities
                        })) : (console.log("没有数据"), d.setData({
                            kajuanLength: void 0
                        }));
                    }
                }), clearInterval(d.data.setInter), wx.getSystemInfo({
                    success: function(a) {
                        d.setData({
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
                        d.setData({
                            networkType: a.networkType
                        });
                    }
                });
                var c = decodeURIComponent(a.scene);
                console.log("scene:" + c);
                var u = c.split("_");
                c.indexOf("_") > -1 ? (console.log("分享过来"), d.cityId = u[0], d.houseId = u[1], d.brokerId = u[2], 
                console.log("扫码城市id——" + d.cityId), console.log("扫码房源id——" + d.houseId), console.log("扫码经纪人id——" + d.brokerId), 
                d.setData({
                    detailId: d.houseId,
                    cityId: d.cityId,
                    brokerId: d.brokerId,
                    sharetype: 1
                })) : (console.log("列表或者分享卡片过来"), d.setData({
                    detailId: a.houseId,
                    cityId: a.cityId,
                    brokerId: a.brokerId,
                    sharetype: a.sharetype
                })), d.data.brokerId && 1 == d.data.sharetype && (d.data.setInter = setInterval(function() {
                    var a = d.data.residenceTime + 1, t = d.data.jishiqi + 1;
                    d.setData({
                        residenceTime: a,
                        jishiqi: t
                    });
                }, 1e3)), console.log(d.data.sharetype), d.getData(a), d.getBrokerData(a), 1 == d.data.sharetype ? (console.log("分享的页面"), 
                wx.getSetting({
                    success: function(a) {
                        a.authSetting["scope.userInfo"] ? (console.log("已经授权"), wx.checkSession({
                            success: function() {
                                console.log("授权未过期"), d.setData({
                                    shouq: !1
                                });
                            },
                            fail: function() {
                                console.log("授权过期"), 0 == d.data.loading && d.setData({
                                    shouq: !0
                                });
                            }
                        })) : (console.log("没有授权"), d.setData({
                            shouq: !0
                        }));
                    }
                })) : (console.log("其他"), d.setData({
                    dianpu: a.dianpu,
                    shouq: !1
                })), d.kaiqihudong();
            }
        });
    },
    getData: function() {
        var a = i.globalData.url_host, t = this, d = wx.getStorageSync("userInfo");
        if (t.data.loginStatus = wx.getStorageSync("loginStatus"), console.log("loginStatus", t.data.loginStatus), 
        "1" == t.data.loginStatus ? (t.data.uidNum = d.uid, t.data.tokenVal = d.token) : (t.data.uidNum = "", 
        t.data.tokenVal = ""), 1 == t.data.sharetype) n = {
            hid: t.data.detailId,
            uid: t.data.uidNum,
            brokerid: t.data.brokerId,
            from: "applet"
        }; else var n = {
            hid: t.data.detailId,
            uid: t.data.uidNum
        };
        wx.request({
            url: a + "/appapi/exchange/" + t.data.cityId + "/v1/allinfo",
            data: n,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: t.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    if (console.log(a.data), void 0 != a.data.data.takelooklastdate) i = a.data.data.takelooklastdate.substring(0, 10); else var i = "";
                    if (void 0 != a.data.data.houseinfo.webHousePlList) {
                        d = a.data.data.houseinfo.webHousePlList[0].dktime.substring(0, 10);
                        d = e.formatTime(d, "Y-M-D");
                    } else var d = "";
                    if (void 0 != a.data.data.brokerlist) {
                        r = (r = Number(a.data.data.brokerlist[0].dkscore)).toFixed(1);
                        for (k = 0; k < a.data.data.brokerlist.length; k++) {
                            var n = Number(a.data.data.brokerlist[k].dkscore).toFixed(1);
                            o.push(n);
                        }
                    } else {
                        var r = "";
                        o = [];
                    }
                    I = [], y = [];
                    for (k = 0; k < a.data.data.copywriting.length; k++) {
                        v = [], m = [];
                        for (b = 0; b < a.data.data.copywriting[k].detailmessage.length; b++) {
                            for (c = a.data.data.copywriting[k].detailmessage[b].title.titlestr; c.indexOf("\n") >= 0; ) c = c.replace("\n", " , ");
                            for (g = a.data.data.copywriting[k].detailmessage[b].des.titlestr; g.indexOf("\n") >= 0; ) g = g.replace("\n", " , ");
                            if (void 0 != a.data.data.copywriting[k].detailmessage[b].des.replace) for (w = 0; w < a.data.data.copywriting[k].detailmessage[b].des.replace.length; w++) {
                                l = a.data.data.copywriting[k].detailmessage[b].des.replace, h = g;
                                for (x = 0; x < l.length; x++) h = h.replace("@", l[x]);
                                g = h;
                            }
                            if (void 0 != a.data.data.copywriting[k].detailmessage[b].title.replace) for (var w = 0; w < a.data.data.copywriting[k].detailmessage[b].title.replace.length; w++) {
                                s = a.data.data.copywriting[k].detailmessage[b].title.replace, u = c;
                                for (var x = 0; x < s.length; x++) u = u.replace("@", s[x]);
                                c = u;
                            }
                            v.push(c), m.push(g);
                        }
                        I.push(v), y.push(m);
                    }
                    for (var k = 0; k < I.length; k++) for (var b = 0; b < I[k].length; b++) I[k][b] = [ I[k][b].concat(y[k][b]) ];
                    var _ = p.transformFromBaiduToGCJ(a.data.data.communityaround.y, a.data.data.communityaround.x);
                    console.log("location", _), f = f.concat({
                        id: t.data.cityId,
                        callout: {
                            borderRadius: 15
                        },
                        latitude: _.latitude,
                        longitude: _.longitude
                    });
                    var T;
                    T = a.data.data.houseinfo.imgs ? a.data.data.houseinfo.imgs[0].replace("https", "http") : "https://res.5i5j.com/cache/weixin/common/default_house_detail_404.png";
                    var D, S;
                    D = 99 == a.data.data.houseinfo.bedroom ? "多" : a.data.data.houseinfo.bedroom, S = 99 == a.data.data.houseinfo.livingroom ? "多" : a.data.data.houseinfo.livingroom, 
                    t.setData({
                        detail_data: a.data.data,
                        detail_data_info: a.data.data.houseinfo,
                        dktimes: i,
                        fptimes: d,
                        bro_score: r,
                        bro_fenshu: o,
                        markers: f,
                        latitude: _.latitude,
                        longitude: _.longitude,
                        zhishuData: I,
                        loading: !1,
                        price: a.data.data.houseinfo.price,
                        focussTate: a.data.data.houseinfo.focusstate,
                        shareImgs: T,
                        shareHouse_Tit: a.data.data.houseinfo.communityname,
                        shareShi: D + "室",
                        shareTing: S + "厅",
                        shareQian: a.data.data.houseinfo.price + "万",
                        shareArea: a.data.data.houseinfo.buildarea + "㎡",
                        isor3d: a.data.data.houseinfo.flag3d
                    }), console.log("++++++++++是否有3d的字段+++++++++++++++++++++++ ", t.data.isor3d), 0 == t.data.loading && t.setData({
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
        var a = i.globalData.url_host, t = this, e = {
            brokerid: t.data.brokerId
        };
        wx.request({
            url: a + "/appapi/broker/" + t.data.cityId + "/v1/allbrokerinfo",
            data: e,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (console.log(a.data), 200 == a.data.status) {
                    var e;
                    if (void 0 != a.data.data.brokerinfoparams) e = a.data.data.brokerinfoparams, o = (o = Number(e.dkscore)).toFixed(1); else var o = "";
                    t.setData({
                        detail_broker_data: a.data.data.brokerinfoparams,
                        tBrokerid: e,
                        sharebroker_score: o
                    });
                }
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
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
            url: "../zaishou/zaishou?sqId=" + t + "&cityId=" + this.data.cityId + "&listParam=1"
        });
    },
    txq_zaishou: function(a) {
        var t = this.data.detail_data.houseinfo.communityid;
        wx.navigateTo({
            url: "../zaishou/zaishou?communityId=" + t + "&cityId=" + this.data.cityId + "&listParam=1"
        });
    },
    icon_3d: function(a) {
        this.data.detail_data.houseinfo.img3durl;
        wx.navigateTo({
            url: "../sale_detail/vr?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&exchangeAndRent=exchange&sharetype=" + this.data.sharetype + "&brokerid=" + this.data.brokerId
        });
    },
    brokerfp: function(a) {
        wx.navigateTo({
            url: "../sale_detail_fp/brokerfp?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId
        });
    },
    tuijian: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + t + "&cityId=" + this.data.cityId
        });
    },
    tese: function(a) {
        wx.navigateTo({
            url: "../sale_detail/tese?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&detailUrl=1"
        });
    },
    ziping: function() {
        wx.navigateTo({
            url: "../zufang_detail/ziping?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&detailUrl=1"
        });
    },
    clickTab: function(a) {
        var t = this;
        if (this.data.currentTab === a.target.dataset.current) return !1;
        t.setData({
            currentTab: a.target.dataset.current
        });
    },
    dklist: function(a) {
        wx.navigateTo({
            url: "../sale_detail_dk/dklist?houseId=" + this.data.detailId + "&cityId=" + this.data.cityId + "&detailUrl=1"
        });
    },
    tel: function(a) {
        var t = this, e = a.currentTarget.id, o = a.currentTarget.dataset.bid, d = a.currentTarget.dataset.index + 1, r = a.currentTarget.dataset.teltype;
        n("track", "telconsult", {
            module_var: r,
            iconlocation_var: d,
            agentid_var: o,
            telnum_var: e
        });
        var s = i.tdsdk;
        console.log("sdk", s), s.appEvent.eventId({
            eventLabel: 1
        }), s.appEvent.eventId({
            eventLabel: 2
        }), s.appEvent.eventId({
            eventLabel: 4
        });
        var l = i.globalData.url_host;
        if (wx.request({
            url: l + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: i.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(a) {
                console.log("成功666:", a);
            }
        }), t.data.brokerId) {
            var c = a.currentTarget.dataset.jobleave;
            console.log(c), 0 == c ? wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人",
                icon: "none"
            }) : wx.makePhoneCall({
                phoneNumber: e,
                success: function() {
                    console.log("拨打成功", e);
                },
                fail: function() {
                    console.log("拨打失败", e);
                }
            });
        }
        t.data.brokerId || wx.makePhoneCall({
            phoneNumber: e,
            success: function() {
                console.log("拨打电话成功!"), console.log("成功", e);
            },
            fail: function() {
                console.log("拨打电话失败！"), console.log("失败", e);
            }
        });
    },
    tagIndex: function(a) {
        var t = a.currentTarget.dataset.src;
        wx.setStorageSync("imgsrc", t), wx.navigateTo({
            url: "../sale_detail/tag?cityId=" + this.data.cityId
        });
    },
    brokerDeatil: function(a) {
        var t = this, e = a.currentTarget.dataset.brokerid;
        a.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "../broker_detail/brokerDetail?brokerId=" + e + "&cityId=" + t.data.cityId + "&citycode="
        });
    },
    onReady: function() {
        var a = this, t = a.data.isor3d;
        console.log("------------is3d-------------------------", t), n("setPage", {
            pagename: "房源详情页",
            businessline_pvar: "二手房",
            houseid_pvar: a.data.detailId,
            vrtype: ""
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
            var t = i.globalData.url_host, e = parseInt(a.data.jishiqi), o = 0, d = 0;
            e > 60 && (o = parseInt(e / 60), e = parseInt(e % 60), o > 60 && (d = parseInt(o / 60), 
            o = parseInt(o % 60)));
            var n = parseInt(e) + "秒";
            o > 0 && (n = parseInt(o) + "分" + n), d > 0 && (n = parseInt(d) + "小时" + n), a.setData({
                residenceTime: n
            }), console.log("返回时间" + n), console.log("手机型号 : " + a.data.model), console.log("设备像素比--- " + a.data.pixelRatio), 
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
            console.log("来源--- " + w), console.log("type--- 1"), console.log("stuaIs--- " + a.data.stuaIs), 
            wx.request({
                url: t + "/user/v1/wxshareuser",
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
                    form_url: w,
                    city_id: a.data.cityId,
                    type: 1,
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
            path: "/pages/sale_detail/sale_detail?sharetype=1&houseId=" + t.data.detailId + "&cityId=" + t.data.cityId + "&brokerId=" + t.data.brokerId
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
        e["item.imgurl"] = "https://res.5i5j.com/cache/weixin/common/default_house_detail_404.png", 
        t.setData(e);
    },
    toCommunity: function(a) {
        var t = a.currentTarget.dataset.communityid;
        console.log(t), wx.navigateTo({
            url: "../community_detail/comDetail?communityId=" + t + "&cityId=" + this.data.cityId
        });
    },
    focusFn: function() {
        var a = i.globalData.url_host, t = this;
        if ("1" == t.data.loginStatus) {
            var e = {
                uid: t.data.uidNum,
                companysid: t.data.cityId,
                type: 2,
                price: t.data.price,
                commonid: t.data.detailId
            };
            wx.request({
                url: a + "/appapi/user/v1/focus",
                method: "POST",
                data: e,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: t.data.tokenVal,
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                success: function(a) {
                    t.setData({
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
            url: "../login/login?url=sale_detail/sale_detail&houseId=" + t.data.detailId + "&cityId=" + t.data.cityId
        });
    }
}, a(t, "toCommunity", function(a) {
    var t = a.currentTarget.dataset.communityid;
    console.log(t), wx.navigateTo({
        url: "../community_detail/comDetail?communityId=" + t + "&cityId=" + this.data.cityId
    });
}), a(t, "unfocusFn", function() {
    var a = i.globalData.url_host, t = this;
    if ("1" == t.data.loginStatus) {
        var e = {
            uid: t.data.uidNum,
            companysid: t.data.cityId,
            type: 2,
            commonid: t.data.detailId
        };
        wx.request({
            url: a + "/appapi/user/v1/unfocus",
            method: "POST",
            data: e,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: t.data.tokenVal,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                t.setData({
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
        url: "../login/login?url=sale_detail/sale_detail&houseId=" + t.data.detailId + "&cityId=" + t.data.cityId
    });
}), a(t, "toIm", function(a) {
    var t = this, e = wx.getStorageSync("loginStatus"), o = a.currentTarget.dataset.bid, d = t.data.cityId, r = t.data.detailId, s = i.globalData.url_host, l = a.currentTarget.dataset.ailiaotype, c = a.currentTarget.dataset.index + 1;
    if (n("track", "onlineconsult", {
        module_var: l,
        iconlocation_var: c,
        agentid_var: o
    }), 1 == e) {
        var u = a.currentTarget.dataset.leave, g = i.tdsdk;
        console.log("sdk", g), g.appEvent.eventId({
            eventLabel: 1
        }), g.appEvent.eventId({
            eventLabel: 3
        }), g.appEvent.eventId({
            eventLabel: 8
        }), wx.request({
            url: s + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: i.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(a) {
                console.log("成功666:", a);
            }
        }), void 0 === u || 1 == u ? (wx.requestSubscribeMessage({
            tmplIds: i.globalData.tmplids,
            success: function(a) {
                console.log(a);
            }
        }), wx.navigateTo({
            url: "../im/im?bid=" + o + "&hid=" + r + "&cityId=" + d + "&type=1"
        })) : wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人！",
            icon: "none"
        });
    } else {
        wx.navigateTo({
            url: "../login/login?url=im/im&bid=" + o + "&ret_type=1&hid=" + r + "&cityId=" + d + "&type=1&maidian=1"
        });
    }
}), a(t, "sqHuodong", function() {
    var a = this, t = i.globalData.url_host, e = wx.getStorageSync("loginStatus"), o = wx.getStorageSync("userInfo");
    if (console.log("index--token----", o), "1" == e) d = o.token; else var d = "";
    wx.request({
        url: t + "/event/activeactivitynq?city_id=" + a.data.cityId,
        method: "GET",
        header: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            deviceSource: 3,
            token: d
        },
        success: function(t) {
            200 == t.data.status && (console.log("详情查看是否领取-------", t), 1 == t.data.data.lq ? (console.log("跳转领取"), 
            wx.navigateTo({
                url: "../siqing/lingqu?cityId=" + a.data.cityId + "&lingqule=false"
            })) : (console.log("跳转未领取"), wx.redirectTo({
                url: "../siqing/siqing?cityId=" + a.data.cityId + "&returnData=" + t.data.data.lq
            })));
        }
    });
}), a(t, "kaiqihudong", function() {
    var a = this, t = (wx.getStorageSync("loginStatus"), wx.getStorageSync("userInfo")), e = i.globalData.url_host;
    console.log("xiangqing---", a.data.cityId), wx.request({
        url: e + "/event/v1/homenq",
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            deviceSource: 3,
            deviceId: t.uid
        },
        data: {
            cityid: a.data.cityId,
            userid: t.uid
        },
        success: function(t) {
            console.log("调用接口了-------", t), console.log("调用接口了2-------", t.data.msg), 204 == t.data.status ? (console.log("res.data.data.msg---", t.data.status), 
            a.setData({
                xiaohb: !0
            })) : a.setData({
                xiaohb: !1
            });
        }
    });
}), t));