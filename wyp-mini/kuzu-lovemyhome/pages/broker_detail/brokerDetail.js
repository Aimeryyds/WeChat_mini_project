var e = getApp(), t = require("../../sdk/dingxiang.js"), a = e.globalData.url_host, o = require("../../utils/gio-minp/index.js").default, d = require("../../sdk/gioConfig.js").default;

o("setConfig", d);

var r, i, n, c, s = [], l = [], u = [];

Page({
    data: {
        loading: !0,
        brokerId: "",
        cityId: "",
        citycode: "",
        isdata: 0,
        sweep_code: "",
        wxSence: "",
        mobile: "",
        senceMobile: "",
        sencePc: "",
        isKaitong: !1
    },
    onLoad: function(o) {
        var d = this;
        new t({
            appId: e.globalData.dxAppId
        }, function(e, t) {
            if (e) console.log(e); else {
                d.setData({
                    dxDeviceId: t
                });
                var r = d;
                if (n = decodeURIComponent(o.scene), console.log("scene:" + n), i = n.split("_"), 
                console.log("sceneArrType:" + i[3]), n.indexOf("_") > -1) {
                    console.log("saoma");
                    var s = {
                        city_id: i[0]
                    };
                    wx.request({
                        url: a + "/vr/getsweepcodeswitch",
                        data: s,
                        method: "post",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                            deviceSource: 3,
                            dxdeviceId: r.data.dxDeviceId
                        },
                        success: function(e) {
                            if (console.log("给接口返回的城市id*****", i[0]), 200 == e.statusCode) {
                                if (console.log("getsweepcodeswitch请求接口-----", e.data.data), 1 == e.data.data) {
                                    console.log("天津的二维码");
                                    var t = {
                                        code: n
                                    };
                                    console.log(t), wx.request({
                                        url: a + "/vr/1/v1/sweepcode",
                                        data: t,
                                        method: "post",
                                        header: {
                                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                            deviceSource: 3,
                                            dxdeviceId: r.data.dxDeviceId
                                        },
                                        success: function(e) {
                                            console.log(i[2]), 200 == e.statusCode && (c = i[2], console.log("天津时请求接口-----", e));
                                        },
                                        fail: function(e) {
                                            console.log("error", e);
                                        }
                                    }), r.setData({
                                        isKaitong: e.data.data
                                    });
                                } else r.setData({
                                    isKaitong: !1
                                });
                                r.getData(o);
                            }
                        },
                        fail: function(e) {
                            console.log("error", e);
                        }
                    }), r.setData({
                        cityId: i[0],
                        brokerId: i[1],
                        citycode: "",
                        wxSence: n,
                        type: i[3]
                    });
                } else console.log("qita"), r.setData({
                    cityId: o.cityId,
                    brokerId: o.brokerId,
                    citycode: o.citycode
                }), r.getData(o);
            }
        });
    },
    getData: function() {
        var e = this;
        console.log(i[2]);
        var t = {
            brokerid: e.data.brokerId,
            deviceSource: 3,
            citycode: e.data.citycode,
            sweep_code: i[2],
            type: i[3]
        };
        console.log("--------------------------------", t), console.log("isKaitong----", e.data.isKaitong), 
        wx.request({
            url: a + "/broker/" + e.data.cityId + "/v1/allbrokerinfo",
            data: t,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (200 == t.data.status) {
                    console.log("getData---经纪人：", t.data), e.data.wxSence.indexOf("_") > -1 && (1 == e.data.isKaitong && i[2] && (r = t.data.data.brokerinfoparams.mobile_pc, 
                    console.log("400扫码"), console.log("sceneArr[2]----", i[2]), e.tel(r)), i[4] ? (r = i[4], 
                    console.log("cbs 拨打电话"), console.log("sceneArr[4]----", i[4]), e.tel(r)) : (r = t.data.data.brokerinfoparams.mobile, 
                    console.log("其他扫码"), e.tel(r))), wx.setNavigationBarTitle({
                        title: t.data.data.brokerinfoparams.bname + "的店铺"
                    });
                    var a = 114, o = 4 * a / 3 + "rpx", d = 4 * (a = 80) / 3 + "rpx", n = t.data.data.brokerinfoparams.dkscore.toFixed(1);
                    u = [];
                    for (p = 0; p < t.data.data.knowhouselist.list.length; p++) if (void 0 != t.data.data.knowhouselist.list[p].startData) {
                        var c = t.data.data.knowhouselist.list[p].startData.substring(0, 4);
                        u.push(c);
                    }
                    if (void 0 != t.data.data.dkrecord) {
                        l = [];
                        for (p = 0; p < t.data.data.dkrecord.list.length; p++) {
                            var g = t.data.data.dkrecord.list[p].showdate.substring(0, 10);
                            l.push(g);
                        }
                    }
                    var v = "", f = "";
                    if (s = [], void 0 != t.data.data.dkrecord.list) for (var p = 0; p < t.data.data.dkrecord.list.length; p++) if (void 0 != t.data.data.dkrecord.list[p].housetitle) {
                        var b = t.data.data.dkrecord.list[p].housetitle.split(" "), k = {
                            tagName: v = b[0],
                            tagTing: f = b[1]
                        };
                        s.push(k);
                    }
                    e.setData({
                        brokerData: t.data.data,
                        imgHeight: d,
                        imgHeight2: o,
                        dkscore: n,
                        dkTimeArr: l,
                        dkrecordArr: s,
                        taTimeArr: u,
                        mobile: t.data.data.brokerinfoparams.mobile,
                        isdata: 0,
                        loading: !1
                    });
                }
                204 == t.data.status && (console.log("无数据"), e.setData({
                    isdata: 1,
                    loading: !1
                }));
            },
            fail: function(e) {
                console.log("error", e);
            },
            complete: function(e) {}
        });
    },
    mmMore: function(e) {
        var t = this, a = e.currentTarget.dataset.brokerid, o = e.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "../broker_record/brokerRecord?cityId=" + t.data.cityId + "&brokerId=" + a + "&resultParm=1&citycode=" + o
        });
    },
    zlMore: function(e) {
        var t = this, a = e.currentTarget.dataset.brokerid, o = e.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "../broker_record/brokerRecord?cityId=" + t.data.cityId + "&brokerId=" + a + "&resultParm=2&citycode=" + o
        });
    },
    dkMore: function(e) {
        var t = this, a = e.currentTarget.dataset.brokerid, o = e.currentTarget.dataset.citycode;
        wx.navigateTo({
            url: "../broker_dk/brokerDk?cityId=" + t.data.cityId + "&brokerId=" + a + "&citycode=" + o
        });
    },
    jxHouse: function(e) {
        var t = this, a = e.currentTarget.dataset.ident, o = e.currentTarget.dataset.houseid;
        console.log(a), 1 == a ? (console.log("租房"), console.log(o), wx.navigateTo({
            url: "../zufang_detail/zufang_detail?cityId=" + t.data.cityId + "&houseId=" + o + "&brokerId=" + t.data.brokerId + "&dianpu=1"
        })) : (console.log("二手房"), console.log(o), wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + o + "&cityId=" + t.data.cityId + "&brokerId=" + t.data.brokerId + "&dianpu=1"
        }));
    },
    xqHouse: function(e) {
        var t = this, a = e.currentTarget.dataset.communityid;
        console.log(a), wx.navigateTo({
            url: "../community_detail/comDetail?communityId=" + a + "&cityId=" + t.data.cityId + "&brokerId=" + t.data.brokerId + "&dianpu=1"
        });
    },
    esfHouse: function(e) {
        var t = this, a = e.currentTarget.dataset.houseid;
        console.log(a), wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + a + "&cityId=" + t.data.cityId + "&brokerId=" + t.data.brokerId + "&dianpu=1"
        });
    },
    zfHouse: function(e) {
        var t = this, a = e.currentTarget.dataset.houseid;
        console.log(a), wx.navigateTo({
            url: "../zufang_detail/zufang_detail?cityId=" + t.data.cityId + "&houseId=" + a + "&brokerId=" + t.data.brokerId + "&dianpu=1"
        });
    },
    xfHouse: function(e) {
        var t = e.currentTarget.dataset.houseid, a = e.currentTarget.dataset.propertytypeid;
        console.log(t), wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + t + "&propertytypeid=" + a
        });
    },
    taList: function(e) {
        var t = this, a = e.currentTarget.dataset.listparm, o = e.currentTarget.dataset.brokerid;
        console.log(a), console.log(o), wx.navigateTo({
            url: "../broker_tahouse/brokerTahouse?cityId=" + t.data.cityId + "&listP=" + a + "&brokerId=" + o + "&more=1"
        });
    },
    tel: function(t) {
        var a = this, d = e.tdsdk;
        d.appEvent.eventId({
            eventLabel: 1
        }), d.appEvent.eventId({
            eventLabel: 2
        }), d.appEvent.eventId({
            eventLabel: 6
        });
        var i = e.globalData.url_host;
        if (wx.request({
            url: i + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: a.data.dxDeviceId
            },
            data: {
                click_id: e.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(e) {
                console.log("成功666:", e);
            }
        }), a.data.wxSence.indexOf("_") > -1) console.log("打电话扫码"), console.log("that.data", a.data), 
        wx.makePhoneCall({
            phoneNumber: r,
            success: function() {
                console.log("成功", r), r = a.data.mobile;
            },
            fail: function() {
                console.log("失败", r), r = a.data.mobile;
            }
        }); else {
            console.log("列表"), r = t.currentTarget.id;
            var n = t.currentTarget.dataset.bid;
            o("track", "telconsult", {
                agentid_var: n,
                telnum_var: r
            }), wx.makePhoneCall({
                phoneNumber: r,
                success: function() {
                    console.log("拨打电话成功!"), console.log("成功", r);
                },
                fail: function() {
                    console.log("拨打电话失败！"), console.log("失败", r);
                }
            });
        }
    },
    toIm: function(t) {
        var a = wx.getStorageSync("loginStatus"), d = t.currentTarget.dataset.bid, r = e.globalData.url_host;
        if (o("track", "onlineconsult", {
            agentid_var: d
        }), 1 == a) {
            var i = t.currentTarget.dataset.leave, n = e.tdsdk;
            console.log("sdk", n), n.appEvent.eventId({
                eventLabel: 1
            }), n.appEvent.eventId({
                eventLabel: 3
            }), n.appEvent.eventId({
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
                success: function(e) {
                    console.log("成功666:", e);
                }
            }), void 0 === i || 1 == i ? (wx.requestSubscribeMessage({
                tmplIds: e.globalData.tmplids,
                success: function(e) {
                    console.log(e);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + d
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + d + "&ret_type=1&maidian=1&jjrMain=1"
            });
        }
    },
    headError: function(e) {
        var t = this, a = {};
        a["brokerData.brokerinfoparams.brokerimg"] = "/img/resources/default_broker_404.png", 
        t.setData(a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {}
});