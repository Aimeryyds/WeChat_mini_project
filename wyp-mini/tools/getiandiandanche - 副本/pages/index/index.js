function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e, o, n = require("../../utils/https.js"), i = (require("../../utils/vehsocket.js"), 
require("../../utils/wxWebSocket.js"), require("../../utils/index.js")), r = require("../../utils/util.js"), s = new (require("../../utils/qqmap-wx-jssdk.js"))({
    key: "BHIBZ-3BMR3-6BV3E-YSEFY-7KS4Z-4GBVE"
}), c = getApp(), d = [], l = [], g = [], u = [], h = [], f = [], w = n.imgurl, v = "", y = 0, m = "1", x = 0, p = 0, S = !1, T = new Date(), D = 0, k = !1, C = !1, L = !1;

Page({
    data: (a = {
        title: "index",
        btn: !0,
        Tips: "充值返利，多充多送！！！",
        curidx: null,
        sharedesc: "",
        startmin: "",
        startprice: "",
        vidZ: "",
        myVidOne: "",
        xuncheBack: "/Content/Img/xuncheYes.png",
        everymin: "",
        everyprice: "",
        myvid: w + "myvid.png",
        wcIcon: w + "iconcar.png",
        wcIcon2: w + "icont.png",
        userImg: w + "my.png",
        CloseLock: "关锁",
        userName: "未登录",
        carTypeing: "骑行中",
        userInfo: {},
        defaultBG: "#ededed",
        activeBG: "#ffffff",
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        user: w + "user3.png",
        MyMessage: w + "msg.png",
        seacImg: w + "ser.png",
        logo: w + "logo23.png",
        smImgs: w + "sc.png",
        kfImgs: w + "kf.png",
        locImgs: w + "location1.png",
        dg: w + "dg.png",
        img11: w + "11.png",
        imgdc: w + "dc.png",
        imgbs: w + "bs.png",
        imgjb: w + "jb.png",
        imgph: w + "helpBlue.png",
        ckeckMarkY: !1,
        ckeckMarkYSuccess: !1,
        ckeckpark: !1,
        pushnew: !1,
        certifyType: !1,
        NoLogin: !1,
        remindCond: !1,
        myvidIcon: "true",
        Yaddress: "",
        Ylatitude: "",
        Ylongitude: "",
        Carmile: "",
        showModal: !1,
        showModalkf: !1,
        secCatLoading: !0,
        newsCont: !0,
        depositstateType: !1,
        navLeft: [ {
            icon: w + "qianbao.png",
            listname: "钱包",
            url: "../payment/wallet/index",
            rightNum: "0"
        }, {
            icon: w + "xingc.png",
            listname: "行程",
            url: "../order/order/index",
            rightNum: ""
        }, {
            icon: w + "yaoq.png",
            listname: "消息",
            url: "../notice/index"
        }, {
            icon: w + "heh.png",
            listname: "加盟",
            url: "../join/index"
        }, {
            icon: w + "share.png",
            listname: "分享",
            url: "../share/index"
        }, {
            icon: w + "msg.png",
            listname: "活动",
            url: "../actCenter/index"
        }, {
            icon: w + "shez.png",
            listname: "设置",
            url: "../setting/index"
        }, {
            icon: w + "helpBlack.png",
            listname: "帮助中心",
            url: "../helpCenter/index"
        } ],
        yuyList: [ {
            long: "",
            secLong: "预约车辆"
        }, {
            long: "",
            secLong: "保留时间"
        } ],
        veh: {},
        yuyBtn: "寻车",
        quxBtn: "取消预约",
        cancelYuY: !1,
        seccBtn: !0,
        qxConts: "确定取消预约",
        qxContsOne: "取消后，今日你还有两次预约机会",
        qxContsTwo: "用完后今日不可预约用车",
        latitude: "",
        longitude: "",
        curLatitude: "",
        curLongitude: "",
        scaveSeccess: !0,
        temporaryClock: !0,
        lat: "",
        lng: "",
        isNoPt: !1,
        vid: "",
        orderno: "",
        CarTime: "",
        sao: !1
    }, t(a, "startprice", ""), t(a, "allTime", ""), t(a, "certify", ""), t(a, "markers", []), 
    t(a, "circles", []), t(a, "scale", "16"), t(a, "polygons", []), t(a, "polyline", [ {
        points: [],
        color: "#000000AA",
        width: 2,
        borderColor: "#000000AA"
    } ]), t(a, "mile", ""), t(a, "RetCarlat", ""), t(a, "RetCarlng", ""), t(a, "ingBottom", ""), 
    t(a, "srcTX", w + "tixing.mp3"), t(a, "srcClose", w + "close.mp3"), t(a, "srcOpen", w + "open.mp3"), 
    t(a, "srcTemp", w + "tempClose.mp3"), t(a, "lsUnclockBtnFirst", !1), t(a, "temporaryClockFirst", !1), 
    t(a, "overUnclockBtnFirst", !1), t(a, "closeActiveUrl", w + "close3.png"), t(a, "activeUrl", ""), 
    t(a, "activitytype", ""), t(a, "phonex", "25px"), t(a, "mapCtx", ""), t(a, "huanpaytype", 3), 
    t(a, "adcode", ""), t(a, "areaid", ""), t(a, "vehcode", ""), t(a, "activity2on", ""), 
    t(a, "huodongList", []), t(a, "switch2Checked", ""), t(a, "restrict", ""), a),
    onUnload: function() {},
    onReady: function(t) {
        var a = wx.getSystemInfoSync().windowHeight > 800 ? "44px" : "25px";
        wx.getSystemInfo({
            success: function(t) {
                console.log(t.statusBarHeight);
            }
        }), this.setData({
            phonex: a
        }), this.mapCtx = wx.createMapContext("myMap"), this.audioCtx = wx.createAudioContext("myAudio"), 
        this.audioCl = wx.createAudioContext("myAudioClose"), this.audioOP = wx.createAudioContext("myAudioOpen"), 
        this.audioTmp = wx.createAudioContext("myAudioTemp");
    },
    ShowViewLeft: function() {
        this.setData({
            showModal: !0
        });
    },
    showModelkf: function() {
        this.setData({
            showModalkf: !0
        });
    },
    hideModalkf: function() {
        this.setData({
            showModalkf: !1
        });
    },
    ShowMSG: function() {
        i.ShowMSG();
    },
    hideModal: function() {
        this.setData({
            showModal: !1
        });
    },
    ScavengingScan: function(t) {
        if (console.log("我是扫一扫"), this.setData({
            sao: !0
        }), t) {
            wx.setStorageSync("isSao", t), void 0 != this.data.lat && "" != this.data.lat || this.getUserLocation();
            try {
                wx.setStorageSync("myVeh", t);
            } catch (t) {}
            try {
                var a = wx.getStorageSync("uid"), e = wx.getStorageSync("depositstate"), o = wx.getStorageSync("certify");
                if (!a) return void wx.navigateTo({
                    url: "../login/phoneLogin",
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                });
                if (!o) return void this.certify();
                if (1 != e && 2 != e && 2 != wx.getStorageSync("zhimacreditstate") && !wx.getStorageSync("hasridingcard") && 1 != wx.getStorageSync("wxpayscorestate")) return void this.depositstate();
            } catch (t) {}
            var n = this;
            "" != a && (o && this.setData({
                certifyType: !1
            }), o ? 1 == e || 2 == e || 2 == wx.getStorageSync("zhimacreditstate") || wx.getStorageSync("hasridingcard") || 1 == wx.getStorageSync("wxpayscorestate") ? n.setData({
                depositstateType: !1
            }) : n.setData({
                depositstateType: !0
            }) : this.setData({
                certifyType: !0
            }));
        }
    },
    Scavenging: r.throttle(function(t) {
        var a = this;
        void 0 != a.data.lat && "" != a.data.lat || a.getUserLocation();
        var e = wx.getStorageSync("uid"), o = wx.getStorageSync("depositstate"), i = wx.getStorageSync("certify");
        if (i && e && (1 == o || 2 == o || 2 == wx.getStorageSync("zhimacreditstate") || wx.getStorageSync("hasridingcard") || 1 == wx.getStorageSync("wxpayscorestate")) && console.log(1212), 
        "" == e) a.NotLogin(); else {
            if (!i) return void wx.showModal({
                title: "提示",
                content: "还未实名认证，去实名认证",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "../logs/authentication/index"
                    });
                }
            });
            if (1 != o && 2 != o && 2 != wx.getStorageSync("zhimacreditstate") && !wx.getStorageSync("hasridingcard") && 1 != wx.getStorageSync("wxpayscorestate")) return void wx.showModal({
                title: "提示",
                content: "还未缴纳押金，去缴纳押金",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "../payment/depositRideCard/index"
                    });
                }
            });
            var s = {
                areaid: a.data.adcode
            };
            n.req("User/AppParm", s, function(t, e) {
                console.log(e.data.data.restrict);
                var o = e.data.data.restrict;
                0 == e.data.code && n.req11("MenberUser/CoinPurse", {}, function(t, e) {
                    0 == e.data.code && (e.data.data.balance + e.data.data.givebalance >= o ? a.PayOrder(function(t) {
                        t || wx.scanCode({
                            success: function(t) {
                                var e = t.result, o = r.parseURL(e).id;
                                wx.showToast({
                                    title: "扫码成功",
                                    icon: "success",
                                    duration: 2e3
                                }), c.globalData.myVeh = {
                                    vCarId: o,
                                    lat: a.data.lat ? a.data.lat : 0,
                                    lng: a.data.lng ? a.data.lng : 0
                                }, wx.navigateTo({
                                    url: "unlock/index"
                                });
                            }
                        });
                    }) : wx.showModal({
                        title: "提示",
                        content: "您的余额不足无法用车，请充值！",
                        confirmText: "去充值",
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "/pages/payment/recharge/index"
                            }) : t.cancel;
                        }
                    }));
                });
            });
        }
    }),
    zffsucc: function(t) {
        var a = this;
        if (t > 15) return wx.showToast({
            icon: "none",
            title: "支付超时,请前往微信支付分支付",
            mask: !0
        }), void (C = !1);
        n.req11("V2.0/Order/GetRidingOrder", {
            id: wx.getStorageSync("orderno")
        }, function(e, o) {
            if (0 == o.data.code) {
                wx.showToast({
                    icon: "none",
                    title: "支付成功",
                    mask: !0
                }), c.globalData.myLocation = {}, wx.removeStorageSync("vid"), C = !1;
                var n = o.data.data.amount, i = o.data.data.ridingtime, r = o.data.data.mile, s = o.data.data.stime.replace(/T/, " "), d = o.data.data.etime.substr(0, 19).replace(/T/, " "), l = o.data.data.costprice, g = o.data.data.dispatchamount, u = o.data.data.couponamount;
                wx.navigateTo({
                    url: "endtrip/index?amount=" + n + "&ridingtime=" + i + "&mile=" + r + "&code=0&stime=" + s + "&etime=" + d + "&costprice=" + l + "&dispatchamount=" + g + "&couponamount=" + u
                });
            } else setTimeout(function() {
                a.zffsucc(t + 1);
            }, 2e3);
        });
    },
    successRetCars: function() {
        var t = this;
        console.log("还车");
        var a = this;
        this.mapCtx && this.mapCtx.getCenterLocation({
            success: function(t) {
                var e = t.latitude, o = t.longitude;
                a.setData({
                    RetCarlat: e,
                    RetCarlng: o
                });
            }
        }), n.req11("V2.0/Order/GetRidingOrder", {
            id: wx.getStorageSync("orderno")
        }, function(e, o) {
            if (0 == o.data.code) {
                var n = o.data.data.paytype, i = o.data.data.paystatus;
                o.data.data.coupontype;
                if (15 == n && o.data.data) 1 == i ? (wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0
                }), console.log("======================="), wx.removeStorageSync("vid"), t.endTrip(o)) : (wx.showToast({
                    title: "支付中...",
                    icon: "none",
                    duration: 3e4,
                    mask: !0
                }), setTimeout(function() {
                    a.zffsucc(1);
                }, 2e3)); else if (0 == i) {
                    if (1 == k || 1 == C || 1 == L) return;
                    C = !0, wx.showLoading({
                        title: "支付中...",
                        mask: !0
                    }), a.huanpay(3);
                } else 1 == i && (wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0
                }), console.log("======================="), console.log("支付成功"), wx.removeStorageSync("vid"), 
                a.endTrip(o));
            }
        });
    },
    huanpay: function(t) {
        var a = this, e = this, i = {
            paytype: t
        };
        1 != L && 1 != k ? n.req11("V2.0/Order/PayOrder", i, function(t, r) {
            if (0 == r.data.code) if (4 == i.paytype) {
                var s = r.data.data.data;
                if (1 == L || 1 == k) return void wx.hideLoading();
                L = !0, wx.requestPayment({
                    timeStamp: s.timeStamp,
                    nonceStr: s.nonceStr,
                    package: s.package,
                    signType: "MD5",
                    paySign: s.paySign,
                    success: function(t) {
                        wx.hideLoading(), wx.showLoading({
                            title: "等待中...",
                            mask: !0
                        });
                        var a = 0, i = setInterval(function() {
                            if ((a += 1) > 15) return clearInterval(i), wx.hideLoading(), C = !1, L = !1, void wx.showModal({
                                title: "提示",
                                content: "网络堵塞,请勿重复支付,稍后进入小程序"
                            });
                            n.req11("V2.0/Order/GetUnpayOrder", {}, function(t, a) {
                                -1 == a.data.code && (clearInterval(i), wx.hideLoading(), C = !1, L = !1, wx.showToast({
                                    title: "支付成功",
                                    icon: "success",
                                    mask: !0
                                }), console.log("======================="), c.globalData.myLocation = {}, wx.removeStorageSync("vid"), 
                                clearInterval(i), clearInterval(void 0), clearInterval(o), e.setData({
                                    scaveSeccess: !0,
                                    ingBottom: "7%"
                                }), wx.setStorageSync("mytype", "3"));
                            });
                        }, 2e3);
                    },
                    fail: function(t) {
                        console.log("支付取消"), C = !1, L = !1, wx.hideLoading(), "requestPayment:fail cancel" != t.errMsg && wx.showModal({
                            title: "提示",
                            content: t.errMsg,
                            success: function(t) {
                                t.confirm;
                            }
                        });
                    },
                    complete: function() {}
                });
            } else 3 == i.paytype ? n.req11("V2.0/Order/GetRidingOrder", {
                id: wx.getStorageSync("orderno")
            }, function(t, a) {
                var n = a.data.data.amount, i = a.data.data.ridingtime, r = a.data.data.mile, s = a.data.data.stime.replace(/T/, " "), d = a.data.data.etime.substr(0, 19).replace(/T/, " "), l = a.data.data.costprice, g = a.data.data.dispatchamount, u = a.data.data.couponamount;
                wx.hideLoading(), C = !1, wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0
                }), c.globalData.myLocation = {}, wx.removeStorageSync("vid"), console.log("======================="), 
                clearInterval(void 0), clearInterval(o), e.setData({
                    scaveSeccess: !0,
                    ingBottom: "7%"
                }), wx.setStorageSync("mytype", "3"), console.log("跳转行程详情页"), wx.navigateTo({
                    url: "endtrip/index?amount=" + n + "&ridingtime=" + i + "&mile=" + r + "&code=0&stime=" + s + "&etime=" + d + "&costprice=" + l + "&dispatchamount=" + g + "&couponamount=" + u
                });
            }) : (wx.hideLoading(), C = !1, wx.showToast({
                title: r.data.retmsg,
                icon: "success",
                duration: 2e3
            }), wx.removeStorageSync("vid"), a.endTrip(r)); else if (1 == r.data.code) {
                if (1 == L || 1 == k) return void wx.hideLoading();
                e.huanpay(4);
            } else wx.hideLoading(), C = !1, wx.showModal({
                title: "提示",
                content: r.data.retmsg
            });
        }) : wx.hideLoading();
    },
    endTrip: function(t) {
        var a = t.data.data.amount, e = t.data.data.ridingtime, o = t.data.data.mile, n = t.data.data.stime.replace(/T/, " "), i = t.data.data.etime.substr(0, 19).replace(/T/, " "), r = t.data.data.costprice, s = t.data.data.dispatchamount, d = t.data.data.couponamount;
        wx.showToast({
            title: "支付成功",
            icon: "success",
            mask: !0
        }), c.globalData.myLocation = {}, wx.setStorageSync("mytype", "3"), wx.removeStorageSync("vid"), 
        wx.navigateTo({
            url: "endtrip/index?amount=" + a + "&ridingtime=" + e + "&mile=" + o + "&code=0&stime=" + n + "&etime=" + i + "&costprice=" + r + "&dispatchamount=" + s + "&couponamount=" + d
        });
    },
    PayOrder: function(t) {
        var a = this, e = {};
        n.req11("V2.0/Order/GetUnpayOrder", e, function(e, o) {
            0 == o.data.code && o.data.data ? (a.setData({
                vehcode: ""
            }), t(!0), a.PayOrderT(o.data.data.paytype)) : -1 == o.data.code ? t(!1) : (a.setData({
                vehcode: ""
            }), wx.showToast({
                title: o.data.retmsg,
                icon: "none",
                duration: 2e3
            }), t(!1));
        });
    },
    PayOrderT: function(t) {
        15 != t ? 1 != k && 1 != C && 1 != L && (k = !0, wx.showModal({
            title: "提示",
            content: "您有未支付订单,去支付",
            success: function(t) {
                if (t.confirm) {
                    if (k = !1, 1 == C || 1 == L) return;
                    wx.navigateTo({
                        url: "../order/order/index"
                    });
                } else t.cancel && (k = !1);
            },
            fail: function() {
                k = !1;
            }
        })) : wx.showModal({
            title: "提示",
            content: "请前往微信支付分支付"
        });
    },
    isReturnCarRange: function(t) {
        var a = this;
        wx.getLocation({
            success: function(a) {
                var e = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: a.latitude,
                    lng: a.longitude
                };
                n.req("Veh/isReturnCarRange", e, function(a, e) {
                    t(0 == e.data.code ? !0 : !1);
                });
            },
            fail: function(e) {
                var o = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: a.data.lat,
                    lng: a.data.lng
                };
                n.req("Veh/isReturnCarRange", o, function(a, e) {
                    t(0 == e.data.code ? !0 : !1);
                });
            }
        });
    },
    UserGetCmd: function(t, a, e) {
        var o = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, r = this, s = 1e3 * a, d = setInterval(function() {
            if (a > 15) return wx.showToast({
                title: "操作超时",
                icon: "none",
                mask: !0
            }), clearInterval(d), void e(-2);
            var a = a + 1;
            n.req11("V2.0/UserVehCmd/UserGetCmd", {
                id: t
            }, function(t, a) {
                if (t) return wx.showToast({
                    title: t.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(d), void e(-100);
                if (0 == a.data.code) {
                    if (wx.showToast({
                        title: "操作成功",
                        icon: "success",
                        mask: !0
                    }), clearInterval(d), e(0), 3 == i) r.VehNewPos(r.data.vid); else if (2 == i) {
                        var n = r.data.markers.filter(function(t) {
                            return 1 != t.myId;
                        });
                        o.setData({
                            markers: n
                        }), c.globalData.myLocation = {};
                    }
                } else 2 == a.data.code || (a.data.code, wx.showToast({
                    title: a.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(d), e(-1));
            });
        }, s);
    },
    lsUnclockBtnFirstFn2: r.throttle(function() {
        var t = this;
        if (this.data.btn) {
            console.log("锁车"), this.setData({
                btn: !1
            });
            var a = this;
            v = "2";
            var e = "临时锁车时间计入正常用车时间，若用车超时，额外收取加时费。\r\n(加时费计算规则：不足" + a.data.startmin + "分钟收取起步价" + a.data.startprice + "元，每超出" + a.data.everymin + "分钟收取" + a.data.everyprice + "元)";
            wx.showModal({
                title: "提示",
                content: e,
                cancelText: "不再提示",
                success: function(t) {
                    if (t.confirm) {
                        wx.showToast({
                            title: "正在临时锁车..",
                            icon: "none",
                            duration: 5e4,
                            mask: !0
                        });
                        var e = {
                            cmd: 3,
                            order_id: wx.getStorageSync("orderno")
                        };
                        n.req11("V2.0/UserVehCmd/UserSendCmdTempCloseLock", e, function(t, e) {
                            0 == e.data.code ? (wx.showToast({
                                title: "操作成功",
                                icon: "success",
                                mask: !0
                            }), console.log("临时锁车成功"), a.setData({
                                carTypeing: "临时锁车中",
                                temporaryClock: !1
                            })) : 2 == e.data.code ? a.UserGetCmd(e.data.data.id, e.data.data.wait, function(t) {
                                0 === t && a.setData({
                                    carTypeing: "临时锁车中",
                                    temporaryClock: !1
                                });
                            }, 3) : wx.showToast({
                                title: e.data.retmsg,
                                duration: 2e3,
                                icon: "none",
                                mask: !0
                            });
                        });
                    } else t.cancel && (a.lsUnclockBtnFirst = !1);
                }
            }), setTimeout(function() {
                t.setData({
                    btn: !0
                });
            }, 1e3);
        }
    }),
    temporaryClockFirstFn2: r.throttle(function() {
        var t = this;
        if (this.data.btn) {
            this.setData({
                btn: !1
            }), console.log("开锁" + new Date());
            var a = this;
            v = "3", wx.showToast({
                title: "正在开锁...",
                icon: "none",
                duration: 5e4,
                mask: !0
            });
            var e = {
                cmd: 2,
                order_id: wx.getStorageSync("orderno")
            };
            n.req11("V2.0/UserVehCmd/UserSendCmdTempOpenLock", e, function(t, e) {
                0 == e.data.code ? (wx.showToast({
                    title: "操作成功",
                    icon: "success",
                    mask: !0
                }), a.setData({
                    carTypeing: "骑行中",
                    temporaryClock: !0
                })) : 2 == e.data.code ? a.UserGetCmd(e.data.data.id, e.data.data.wait, function(t) {
                    0 === t && a.setData({
                        carTypeing: "骑行中",
                        temporaryClock: !0
                    });
                }, 2) : wx.showToast({
                    title: e.data.retmsg,
                    duration: 2e3,
                    icon: "none",
                    mask: !0
                });
            }), setTimeout(function() {
                t.setData({
                    btn: !0
                });
            }, 1e3);
        }
    }),
    overUnclockBtnFirstFn2: r.throttle(function() {
        var t = this;
        if (this.data.btn) {
            this.setData({
                btn: !1
            });
            var a = this;
            wx.showModal({
                title: "提示",
                content: "确定要还车？",
                cancelText: "点错了",
                confirmText: "不想骑了",
                success: function(t) {
                    t.confirm && (wx.showToast({
                        icon: "none",
                        title: "正在还车...",
                        mask: !0,
                        duration: 5e4
                    }), a.ReturnCar(), console.log("结束用车按钮点击"));
                }
            }), setTimeout(function() {
                t.setData({
                    btn: !0
                });
            }, 1e3);
        }
    }),
    findCard: r.throttle(function() {
        var t = this;
        this.setData({
            xuncheBack: "/Content/Img/xuncheNo.png"
        }), setTimeout(function() {
            t.setData({
                xuncheBack: "/Content/Img/xuncheYes.png"
            });
        }, 5e3), n.req11("V2.0/UserVehCmd/UserSendCmdCall", {
            vid: this.data.vid
        }, function(t, a) {
            t && wx.showToast({
                title: t.data.retmsg,
                icon: "none",
                mask: !0
            });
        });
    }, 5e3),
    UserGetCmdCloseLock: function(t, a, e) {
        var o = 1e3 * a, i = setInterval(function() {
            if (a > 15) return wx.showToast({
                title: "操作超时",
                icon: "none",
                mask: !0
            }), clearInterval(i), void e(-2);
            var a = a + 1;
            n.req11("V2.0/UserVehCmd/UserGetCmdCloseLock", {
                id: t
            }, function(t, a) {
                if (t) return wx.showToast({
                    title: t.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(i), void e(-100);
                0 == a.data.code ? (wx.showToast({
                    title: "操作成功",
                    icon: "success",
                    mask: !0
                }), console.log("开锁成功"), clearInterval(i), e(0)) : 2 == a.data.code || (a.data.code, 
                wx.showToast({
                    title: a.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(i), e(-1));
            });
        }, o);
    },
    UserSendCmdCloseLock: function(t) {
        console.log("锁车指令下发");
        var a = this;
        n.req11("V2.0/UserVehCmd/UserSendCmdCloseLock", t, function(t, e) {
            0 == e.data.code ? (wx.showToast({
                title: "操作成功",
                icon: "success",
                mask: !0
            }), a.successRetCars(), a.setData({
                scaveSeccess: !0,
                ingBottom: "7%"
            }), v = "") : 2 == e.data.code ? a.UserGetCmdCloseLock(e.data.data.id, e.data.data.wait, function(t) {
                0 === t && (a.successRetCars(), a.setData({
                    scaveSeccess: !0,
                    ingBottom: "7%"
                }), v = "");
            }) : wx.showToast({
                title: e.data.retmsg,
                duration: 2e3,
                icon: "none",
                mask: !0
            });
        });
    },
    ReturnCar: function(t) {
        console.log("开始还车");
        var a = this;
        t || (t = 0), wx.getLocation({
            success: function(e) {
                var o = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: e.latitude,
                    lng: e.longitude,
                    type: t
                };
                n.req("Veh/isReturnCarRange", o, function(t, e) {
                    if (0 == e.data.code) {
                        v = "1", D = 0;
                        var o = {
                            cmd: 1,
                            order_id: wx.getStorageSync("orderno")
                        };
                        a.UserSendCmdCloseLock(o);
                    } else -1 == e.data.code ? (wx.showToast({
                        title: e.data.retmsg,
                        icon: "none"
                    }), a.lsUnclockBtnFirst = !1) : 2 == e.data.code ? (wx.hideToast(), wx.showModal({
                        title: "提示",
                        content: e.data.retmsg,
                        success: function(t) {
                            t.confirm ? a.ReturnCar(1) : t.cancel && wx.showToast({
                                title: "取消还车",
                                icon: "none",
                                duration: 2e3
                            });
                        }
                    })) : wx.showToast({
                        title: e.data.retmsg
                    });
                });
            },
            fail: function(e) {
                var o = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: e.latitude,
                    lng: e.longitude,
                    type: t
                };
                n.req("Veh/isReturnCarRange", o, function(t, e) {
                    if (0 == e.data.code) {
                        v = "1", D = 0;
                        var o = {
                            cmd: 1,
                            order_id: wx.getStorageSync("orderno")
                        };
                        a.UserSendCmdCloseLock(o);
                    } else -1 == e.data.code ? (wx.showToast({
                        title: e.data.retmsg,
                        icon: "none"
                    }), a.lsUnclockBtnFirst = !1) : 2 == e.data.code ? (wx.hideToast(), wx.showModal({
                        title: "提示",
                        content: e.data.retmsg,
                        success: function(t) {
                            t.confirm ? a.ReturnCar(1) : t.cancel && wx.showToast({
                                title: "取消还车",
                                icon: "none",
                                duration: 2e3
                            });
                        }
                    })) : wx.showToast({
                        title: e.data.retmsg
                    });
                });
            }
        });
    },
    GetALLVeh: function(t, a) {
        var e = this, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.data.scaveSeccess) {
            var i = this, r = {
                lng: a,
                lat: t
            };
            g = [];
            i.data.curLatitude, i.data.curLongitude;
            i.setData({
                markers: []
            }), n.req("Veh/GetALLVeh", r, function(n, r) {
                if (console.log(r.data + "我是车辆"), 0 == r.data.code) {
                    if (console.log(e.data.scaveSeccess + "====" + o), 0 == r.data.data.veh.length) wx.showToast({
                        title: "附近暂无车辆",
                        icon: "none",
                        duration: 2e3
                    }), o && i.getservicearea(t, a); else if (o) {
                        if (i.data.scaveSeccess) {
                            var s = r.data.data.veh[0].areaid;
                            e.setData({
                                areaid: s
                            });
                        }
                        i.getservicearea(t, a);
                    }
                    var c = r.data.data.veh;
                    o && (h = []);
                    var d = !0, u = !1, f = void 0;
                    try {
                        for (var w, v = c[Symbol.iterator](); !(d = (w = v.next()).done); d = !0) {
                            var y = w.value, x = {
                                id: y.vid,
                                latitude: y.lat,
                                longitude: y.lng,
                                iconPath: "/Content/Img/veh.png",
                                width: 37,
                                height: 42
                            };
                            g.push(x);
                        }
                    } catch (n) {
                        u = !0, f = n;
                    } finally {
                        try {
                            !d && v.return && v.return();
                        } finally {
                            if (u) throw f;
                        }
                    }
                    l = g, console.log(l), 1 == m && i.setData({
                        polygons: h,
                        markers: g
                    });
                }
            }), S = !1;
        }
    },
    getservicearea: function(t, a) {
        console.log("我是运营区域"), h = [];
        var e = [], o = this;
        s.reverseGeocoder({
            location: {
                latitude: t,
                longitude: a
            },
            fail: function(t) {},
            success: function(i) {
                var r = o.data.areaid ? o.data.areaid : i.result.ad_info.adcode;
                c.globalData.myAreaid = o.data.areaid ? o.data.areaid : i.result.ad_info.adcode, 
                o.DefaultNum(r), wx.setStorageSync("adcode", r);
                var s = wx.getStorageSync("uid");
                console.log("活动" + o.data.isNoPt), wx.getStorageSync("activity2date") == o.formatDate(new Date()) && wx.getStorageSync("switch2Checked") && !1 === wx.getStorageSync("showhuodong") || (console.log("活动============="), 
                c.globalData.myShow && s && o.GetActivityDisplay(r)), o.setData({
                    adcode: r
                });
                var d = {
                    lat: t,
                    lng: a,
                    adcode: r
                };
                console.log(r + "我是请求上的adcode"), n.req("User/GetServiceArea", d, function(t, a) {
                    if (0 == a.data.code) {
                        var n = a.data.data, i = !0, r = !1, s = void 0;
                        try {
                            for (var c, d = n[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) {
                                var l = c.value.points.split("|"), g = [], u = !0, h = !1, f = void 0;
                                try {
                                    for (var w, v = l[Symbol.iterator](); !(u = (w = v.next()).done); u = !0) {
                                        var y = w.value;
                                        if ("" != y) {
                                            var m = y.split(",");
                                            g.push({
                                                latitude: m[1],
                                                longitude: m[0]
                                            });
                                        }
                                    }
                                } catch (t) {
                                    h = !0, f = t;
                                } finally {
                                    try {
                                        !u && v.return && v.return();
                                    } finally {
                                        if (h) throw f;
                                    }
                                }
                                var x = {
                                    points: g,
                                    width: 3,
                                    color: "#26b2f3"
                                };
                                e.push(x);
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && d.return && d.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        o.setData({
                            polyline: e
                        });
                    }
                });
            }
        });
    },
    NoParking: function(t, a) {
        if (!this.data.activity2on) {
            var e = this;
            if (wx.getStorageSync("vid")) {
                console.log("我是禁停区"), e.setData({
                    polygons: h
                });
                var o = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    latitude: t,
                    longitude: a
                };
                n.req("veh/NoParking", o, function(t, a) {
                    if (0 == a.data.code) {
                        var o = a.data.data;
                        console.log(123), console.log(o), console.log(123);
                        var n = !0, i = !1, r = void 0;
                        try {
                            for (var s, c = o[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                                var d = s.value.points.split("|"), l = [], g = !0, f = !1, w = void 0;
                                try {
                                    for (var v, y = d[Symbol.iterator](); !(g = (v = y.next()).done); g = !0) {
                                        var m = v.value;
                                        if ("" != m) {
                                            var x = m.split(",");
                                            l.push({
                                                latitude: x[1],
                                                longitude: x[0]
                                            });
                                        }
                                    }
                                } catch (t) {
                                    f = !0, w = t;
                                } finally {
                                    try {
                                        !g && y.return && y.return();
                                    } finally {
                                        if (f) throw w;
                                    }
                                }
                                var p = {
                                    points: l,
                                    strokeWidth: 3,
                                    strokeColor: "#F00A02AA",
                                    fillColor: "#F00A0233"
                                };
                                u.push(p);
                            }
                        } catch (t) {
                            i = !0, r = t;
                        } finally {
                            try {
                                !n && c.return && c.return();
                            } finally {
                                if (i) throw r;
                            }
                        }
                        h.concat(u), e.setData({
                            polygons: u.concat(h)
                        });
                    } else wx.hideLoading();
                });
            }
        }
    },
    ParkingArea: function(t, a) {
        var e = this;
        if (console.log("我是站点"), !this.data.activity2on) {
            var o = this;
            if (o.setData({
                polygons: h
            }), m = "2", "" == wx.getStorageSync("uid")) return wx.showModal({
                title: "",
                content: "登录查看站点...",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "../login/phoneLogin"
                    });
                }
            }), void (S = !1);
            var i = {
                lng: a,
                lat: t
            };
            n.req("Veh/GetALLVeh", i, function(i, s) {
                0 == s.data.code && (0 != s.data.data.veh.length ? e.setData({
                    vidZ: s.data.data.veh[0].vid
                }) : e.setData({
                    vidZ: ""
                }));
                var d = a || e.data.longitude, l = t || e.data.latitude, f = r.gcj_decrypt(l, d), v = {
                    vid: wx.getStorageSync("vid") ? wx.getStorageSync("vid") : e.data.vidZ,
                    lng: f[0],
                    lat: f[1]
                };
                "" != v.lng && (wx.showLoading({
                    title: "加载站点..."
                }), o.data.scaveSeccess || o.NoParking(), n.req("Veh/ParkingArea", v, function(t, a) {
                    if (a.data.data || o.setData({
                        markers: []
                    }), 0 == a.data.code) {
                        wx.hideLoading();
                        var e = a.data.data ? a.data.data : [], n = (g = []).find(function(t) {
                            return t.myId;
                        });
                        if (console.log(n), !(e.length > 0)) return void o.setData({
                            markers: [],
                            polygons: h
                        });
                        var i = !0, r = !1, s = void 0;
                        try {
                            for (var d, l = e[Symbol.iterator](); !(i = (d = l.next()).done); i = !0) {
                                var f = d.value, v = f.points.split("|"), y = [], x = 0, p = 0, S = !0, T = !1, D = void 0;
                                try {
                                    for (var k, C = v[Symbol.iterator](); !(S = (k = C.next()).done); S = !0) {
                                        var L = k.value;
                                        if ("" != L) {
                                            var I = L.split(",");
                                            y.push({
                                                latitude: I[1],
                                                longitude: I[0]
                                            }), x = Number(I[1]) + Number(x), p = Number(I[0]) + Number(p);
                                        }
                                    }
                                } catch (t) {
                                    T = !0, D = t;
                                } finally {
                                    try {
                                        !S && C.return && C.return();
                                    } finally {
                                        if (T) throw D;
                                    }
                                }
                                var M = {
                                    id: f.id,
                                    latitude: x / y.length,
                                    longitude: p / y.length,
                                    width: 27,
                                    height: 32,
                                    iconPath: w + "pStor.png"
                                }, b = {
                                    points: y,
                                    strokeWidth: 1,
                                    strokeColor: "#FCE8A9AA",
                                    fillColor: "#FCE8A980"
                                };
                                g.push(M), u.push(b);
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !i && l.return && l.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        g.push(c.globalData.myLocation), console.log(g), 2 == m && (wx.hideLoading(), o.setData({
                            polygons: u.concat(h),
                            markers: g
                        }));
                    }
                }), S = !1);
            });
        }
    },
    showALLVeh: function() {
        if (new Date().getTime() - T.getTime() > 2e3) {
            T = new Date();
            var t = this;
            m = "1", g = [], f = [], d = [], t.setData({
                activeBG: "#ffffff",
                defaultBG: "#ededed",
                circles: [],
                ckeckMarkY: !1,
                ckeckpark: !1
            });
            var a = t.data.lxlatitude, e = t.data.lxlongitude;
            t.GetALLVeh(a, e);
        }
    },
    showParkingArea: function() {
        if (new Date().getTime() - T.getTime() > 2e3) {
            T = new Date();
            var t = this;
            wx.getStorageSync("uid");
            m = 2, f = [], d = [], u = [], t.setData({
                activeBG: "#ededed",
                defaultBG: "#ffffff",
                ckeckMarkY: !1
            });
            t.data.latitude, t.data.longitude;
            var a = t.data.lxlatitude, e = t.data.lxlongitude;
            g = [], t.setData({
                markers: [],
                polygons: h
            }), t.ParkingArea(a, e);
        }
    },
    calculateDistance: function(t, a) {
        var e = this;
        s.calculateDistance({
            mode: "walking",
            from: e.data.lxlatitude + "," + e.data.lxlongitude,
            to: t + "," + a,
            success: function(t) {
                for (var t = t.result, a = [], o = 0; o < t.elements.length; o++) a.push(t.elements[o].distance);
                var n = parseInt(t.elements[0].distance / 60);
                e.setData({
                    distance: t.elements[0].distance,
                    appointmentLong: t.elements[0].distance,
                    appointmentTime: n
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    reverseGeocoder: function(t, a) {
        var e = this;
        s.reverseGeocoder({
            location: {
                latitude: t,
                longitude: a
            },
            success: function(t) {
                wx.setStorageSync("formatted_addresses", t.result.formatted_addresses.rough);
                e.setData({
                    Yaddress: t.result.formatted_addresses.rough
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    showlocation: r.throttle(function() {
        this.mapCtx.moveToLocation(), this.geo(!0);
    }),
    yuyBickCar: function() {
        this.Carsearching();
    },
    Carsearching: function() {
        var t = this, a = {
            uid: wx.getStorageSync("uid"),
            vid: wx.getStorageSync("carId"),
            orderno: "",
            otype: 4,
            utype: 1,
            action: y
        };
        n.req("Veh/Directive", a, function(a, e) {
            0 == e.data.code ? (y = 0, wx.showToast({
                title: "操作成功",
                icon: "success",
                duration: 2e3
            })) : 1 == e.data.code ? (y = 0, wx.showLoading({
                title: "操作失败..."
            })) : 2 == e.data.code && (y = 1, setTimeout(function() {
                t.Carsearching("1");
            }, 1e3 * e.data.data.wait));
        });
    },
    LetMethink: function() {
        this.setData({
            cancelYuY: !1
        });
    },
    security: function() {
        wx.navigateTo({
            url: "security/yunying/index"
        });
    },
    regionchange: function(t) {
        var a = this;
        "end" == t.type && (a.setData({
            ckeckMarkY: !1
        }), S || (S = !0, a.getLngLat()));
    },
    getLngLat: function() {
        var t = this;
        t.mapCtx && t.mapCtx.getCenterLocation({
            success: function(a) {
                t.setData({
                    lxlatitude: a.latitude,
                    lxlongitude: a.longitude
                });
                var e = a.latitude, o = a.longitude;
                if (x != e || p != o) {
                    if (t.getDistance(x, p, e, o) < 100) return void (S = !1);
                    x = e, p = o, 2 == m && (d = [], u = [], t.setData({
                        markers: [],
                        polygons: h
                    }), t.ParkingArea(e, o), t.NoParking(e, o), t.data.isNoPt && t.getservicearea(e, o)), 
                    d = [], t.setData({
                        circles: [],
                        curLatitude: e,
                        curLongitude: o
                    }), 1 == m ? (g = [], t.setData({
                        myvidIcon: !0
                    }), t.GetALLVeh(e, o), t.data.isNoPt && (t.getservicearea(e, o), t.setData({
                        isNoPt: !1
                    }))) : 2 == m ? (d = [], x == e && p == o || t.setData({})) : 3 == m && (t.setData({
                        myvidIcon: !1
                    }), S = !1);
                } else S = !1;
            }
        });
    },
    getVehAreaid: function(t) {
        var a = this;
        n.req11("V2.0/OpVeh/VehDetail", {
            vid: t
        }, function(t, e) {
            if (0 == e.data.code && e.data.data.areaid) {
                if (!a.data.temporaryClock && 0 == g.length) {
                    console.log("我是新的标点");
                    var o = r.gcj_encrypt(e.data.data.latitude, e.data.data.longitude), n = {
                        latitude: o[1],
                        longitude: o[0],
                        width: 27,
                        height: 32,
                        iconPath: "/Content/Img/veh.png",
                        myId: 1
                    };
                    g.push(n);
                }
                var i = e.data.data.areaid;
                wx.setStorageSync("adcode", i), a.setData({
                    areaid: i,
                    adcode: i
                }), a.getservicearea(e.data.data.latitude, e.data.data.longitude), a.ParkingArea(e.data.data.latitude, e.data.data.longitude), 
                a.NoParking(e.data.data.latitude, e.data.data.longitude);
            }
        });
    },
    CalculateCost: function() {
        var t = this, a = this, e = wx.getStorageSync("uid");
        if (e) {
            var i = {
                uid: e
            };
            n.req("Veh/CalculateCost", i, function(t, e) {
                0 == e.data.code ? (g = [], "2" != wx.getStorageSync("mytype") && wx.setStorageSync("mytype", "1"), 
                wx.setStorageSync("vid", e.data.data.vid), wx.setStorageSync("orderno", e.data.data.orderno), 
                1 == e.data.data.orderstatus || 2 == e.data.data.orderstatus || 4 == e.data.data.orderstatus ? a.setData({
                    temporaryClock: !0,
                    carTypeing: "骑行中",
                    scaveSeccess: !1,
                    ingBottom: "32%",
                    mile: e.data.data.mile,
                    vid: e.data.data.vid
                }) : 5 == e.data.data.orderstatus && (a.setData({
                    temporaryClock: !1,
                    carTypeing: "临时锁车中",
                    scaveSeccess: !1,
                    ingBottom: "32%",
                    mile: e.data.data.mile
                }), a.VehNewPos(e.data.data.vid)), o = setInterval(function() {
                    a.CarTravelMile();
                }, 12e4)) : "身份验证过期!请退出重新登录" == e.data.retmsg || ("1" == m ? a.showALLVeh() : a.showParkingArea(), 
                a.setData({
                    scaveSeccess: !0,
                    ingBottom: "7%"
                }));
            }, function() {}, function(a) {
                t.setData({
                    NoLogin: !1
                }), t.onLoad(), t.onShow();
            });
        }
    },
    getQi: function() {
        var t = this;
        console.log("骑行订单");
        var a = this, e = wx.getStorageSync("uid");
        if (e) {
            var o = {
                uid: e
            };
            n.req("Veh/CalculateCost", o, function(e, o) {
                0 == o.data.code ? (g = [], "2" != wx.getStorageSync("mytype") && wx.setStorageSync("mytype", "1"), 
                wx.setStorageSync("vid", o.data.data.vid), wx.setStorageSync("orderno", o.data.data.orderno), 
                t.setData({
                    myVidOne: o.data.data.vid,
                    vid: o.data.data.vid
                }), 1 == o.data.data.orderstatus || 2 == o.data.data.orderstatus || 4 == o.data.data.orderstatus ? (t.getVehAreaid(o.data.data.vid), 
                a.setData({
                    temporaryClock: !0,
                    carTypeing: "骑行中",
                    scaveSeccess: !1,
                    ingBottom: "32%",
                    mile: o.data.data.mile
                })) : 5 == o.data.data.orderstatus && (t.getVehAreaid(o.data.data.vid), a.setData({
                    temporaryClock: !1,
                    carTypeing: "临时锁车中",
                    scaveSeccess: !1,
                    ingBottom: "32%",
                    mile: o.data.data.mile
                }))) : (c.globalData.myLocation = {}, t.showALLVeh(), wx.removeStorageSync("vid"));
            }, function() {}, function() {});
        }
    },
    VehNewPos: function(t) {
        var a = this;
        n.req11("V2.0/UserVeh/VehNewPos", {
            vid: t
        }, function(t, e) {
            if (0 == e.data.code) {
                var o = r.gcj_encrypt(e.data.data.latitude, e.data.data.longitude), n = {
                    latitude: o[1],
                    longitude: o[0],
                    width: 37,
                    height: 42,
                    iconPath: "/Content/Img/veh.png",
                    myId: 1
                };
                g.push(n), c.globalData.myLocation = n, a.setData({
                    markers: g
                });
            }
        });
    },
    DefaultNum: function(t) {
        var a = this, e = {
            areaid: t
        };
        n.req("User/AppParm", e, function(t, e) {
            if (0 == e.data.code) {
                console.log(e.data.data.restrict + "用户骑行最小值判断");
                wx.setStorageSync("deposit", e.data.data.deposit), wx.setStorageSync("startprice", e.data.data.startprice), 
                wx.setStorageSync("startmin", e.data.data.startmin), wx.setStorageSync("everymin", e.data.data.everymin), 
                wx.setStorageSync("everyprice", e.data.data.everyprice), wx.setStorageSync("maxprice", e.data.data.maxprice), 
                wx.setStorageSync("sharedesc", e.data.data.sharedesc), wx.setStorageSync("startmile", e.data.data.startmile);
                a.setData({
                    sharedesc: e.data.data.sharedesc,
                    startmin: e.data.data.startmin,
                    startprice: e.data.data.startprice,
                    everymin: e.data.data.everymin,
                    everyprice: e.data.data.everyprice,
                    restrict: e.data.data.restrict
                });
            }
        });
    },
    charging: function() {
        var t = this, a = wx.getStorageSync("startprice"), o = t.data.allTime, n = wx.getStorageSync("everyprice"), i = 60 * wx.getStorageSync("startmin"), r = 60 * wx.getStorageSync("everymin");
        if (o > i) {
            var s = o - i, c = a + (s % r == 0 ? s / r * n : (parseInt(s / r) + 1) * n);
            t.setData({
                startprice: c
            });
        } else {
            c = a;
            t.setData({
                startprice: c
            });
        }
        e = setTimeout(function() {
            t.charging();
        }, r);
    },
    bindViewTap: function(t) {
        var a = this;
        "" == wx.getStorageSync("uid") ? wx.showModal({
            title: "",
            content: "请先登录",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../login/phoneLogin"
                });
            }
        }) : n.req("User/UserInfo", {}, function(t, e) {
            0 == e.data.code && wx.setStorageSync("certify", e.data.data.certify);
            var o = a.data.userName;
            wx.navigateTo({
                url: "../logs/logs?userName=" + o
            });
        });
    },
    setting: function() {
        wx.navigateTo({
            url: "../setting/index"
        });
    },
    navTonew: function(t) {
        var a = wx.getStorageSync("uid"), e = t.currentTarget.dataset.url;
        "" == a ? wx.showModal({
            title: "",
            content: "请先登录",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../login/phoneLogin"
                });
            }
        }) : ("../payment/wallet/index" == e && (e = e + "?adcode=" + this.data.adcode), 
        wx.navigateTo({
            url: e
        }));
    },
    TocherMy: function() {
        wx.getStorageSync("uid") ? wx.navigateTo({
            url: "../payment/wallet/index"
        }) : this.NotLogin();
    },
    CatRepair: function() {
        wx.getStorageSync("uid") ? wx.navigateTo({
            url: "../repair/index"
        }) : this.NotLogin();
    },
    CatReport: function() {
        wx.getStorageSync("uid") ? wx.navigateTo({
            url: "../report/index"
        }) : this.NotLogin();
    },
    NotLogin: function() {
        wx.showModal({
            title: "",
            content: "请先登录",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../login/phoneLogin"
                });
            }
        });
    },
    authentication: function() {
        wx.navigateTo({
            url: "../logs/authentication/index"
        });
    },
    getDistance: function(t, a, e, o) {
        t = t || 0, a = a || 0, e = e || 0, o = o || 0;
        var n = t * Math.PI / 180, i = e * Math.PI / 180, r = n - i, s = a * Math.PI / 180 - o * Math.PI / 180;
        return (12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(n) * Math.cos(i) * Math.pow(Math.sin(s / 2), 2)))).toFixed(0);
    },
    makePhoneCall: function() {
        wx.navigateTo({
            url: "../helpCenter/index"
        });
    },
    inspect: function() {
        var a = this;
        if ("" != wx.getStorageSync("uid")) {
            var e;
            a.setData((e = {}, t(e, "navLeft[0].url", "../payment/wallet/index"), t(e, "navLeft[1].url", "../order/order/index"), 
            t(e, "navLeft[2].url", "../notice/index"), t(e, "navLeft[3].url", "../join/index"), 
            t(e, "navLeft[4].url", "../setting/index"), t(e, "navLeft[5].url", "../share/index"), 
            e));
        } else wx.showModal({
            title: "",
            content: "请先登录",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../login/phoneLogin"
                });
            }
        });
    },
    CarTravelMile: function() {
        console.log(1212);
        var t = this, a = wx.getStorageSync("uid");
        if ("" != a) {
            var e = {
                uid: a,
                vid: wx.getStorageSync("carId"),
                orderno: ""
            };
            e.vid && n.req("Veh/TravelMile", e, function(a, e) {
                0 == e.data.code ? t.setData({
                    Carmile: e.data.data.mile,
                    mile: e.data.data.mile
                }) : wx.showToast({
                    title: e.data.retmsg,
                    icon: "none",
                    duration: 2e3
                });
            });
        } else t.setData({
            Carmile: "--"
        });
    },
    ServerInfoPush: function() {
        var t = this, a = {
            uid: wx.getStorageSync("uid"),
            orderno: wx.getStorageSync("orderno"),
            type: 0
        };
        n.req("User/ServerInfoPush", a, function(a, e) {
            0 == e.data.code ? null != e.data.data && t.setData({
                pushnew: !0,
                PushContent: e.data.data.msg
            }) : 1 == e.data.code && (wx.showToast({
                title: "车辆已自动还车，感谢您的使用！",
                icon: "none",
                duration: 2e3
            }), t.ReturnCar());
        });
    },
    depositstate: function() {
        wx.navigateTo({
            url: "../payment/depositRideCard/index"
        });
    },
    certify: function() {
        wx.navigateTo({
            url: "../logs/authentication/index"
        });
    },
    NoLogin: function() {
        wx.navigateTo({
            url: "../login/phoneLogin"
        });
    },
    remind: function() {
        wx.navigateTo({
            url: "../actCenter/stopcont/index"
        });
    },
    myEventListener: function(t) {
        this.setData({
            curidx: t.detail
        });
    },
    lunbo: function() {
        var t = this;
        clearInterval(c.globalData.timer);
        var a = 0;
        c.globalData.timer = setInterval(function() {
            (a = t.data.curidx) >= t.data.huodongList.length - 1 ? a = 0 : a++, t.setData({
                curidx: a
            }), console.log("我还在");
        }, 5e3);
    },
    onShow: function() {
        var t = this;
        this.getQi(), this.geo(), console.log("11"), this.data.activity2on && this.lunbo();
        var a = this;
        wx.getStorageSync("uid"), wx.getStorageSync("depositstate"), wx.getStorageSync("certify");
        n.req11("MenberUser/UserInfo", {}, function(e, o) {
            if (0 == o.data.code) {
                var n = o.data.data.deposit, i = o.data.data.zhimacreditstate, r = o.data.data.hasridingcard, s = o.data.data.wxpayscorestate, d = o.data.data.certify;
                if (wx.setStorageSync("depositstate", n), wx.setStorageSync("zhimacreditstate", i), 
                wx.setStorageSync("hasridingcard", r), wx.setStorageSync("wxpayscorestate", s), 
                wx.setStorageSync("certify", d), d) {
                    if (a.setData({
                        certifyType: !1
                    }), 1 == n || 2 == n || 2 == i || r || 1 == s) {
                        if (a.setData({
                            depositstateType: !1
                        }), wx.getStorageSync("isSao")) {
                            console.log("全部可以,准备执行骑行订单了");
                            try {
                                var l = wx.getStorageSync("myVeh");
                                l && a.PayOrder(function(t) {
                                    if (!t && l) {
                                        var e = l, o = {
                                            login: a.data.NoLogin,
                                            deposit: a.data.depositstateType,
                                            certify: a.data.certifyType
                                        };
                                        o.login || o.deposit || o.certify || (c.globalData.myVeh = {
                                            vCarId: e,
                                            lat: a.data.lat ? a.data.lat : 0,
                                            lng: a.data.lng ? a.data.lng : 0
                                        }, wx.navigateTo({
                                            url: "unlock/index"
                                        }));
                                    }
                                });
                            } catch (t) {}
                        }
                    } else if (a.setData({
                        depositstateType: !0
                    }), !c.globalData.vs && !t.data.sao) return void t.depositstate();
                } else a.setData({
                    certifyType: !0
                }), c.globalData.vs || t.data.sao || t.certify();
            }
            t.onshowfn();
        }, function() {}, function(a) {
            a && (t.setData({
                NoLogin: !1
            }), t.onLoad(), t.onShow());
        });
    },
    onshowfn: function() {
        var t = this;
        t.getUserLocation(), t.CalculateCost();
    },
    onLoad: function(a) {
        this.getQi(), this.geo();
        var e = this, o = "";
        if (wx.getLocation({
            type: "gcj02",
            success: function(t) {
                var a = t.latitude, o = t.longitude;
                x = a, p = o, e.GetALLVeh(a, o, !0), e.setData({
                    lat: a,
                    lng: o,
                    latitude: a,
                    longitude: o
                });
            },
            fail: function(t) {
                wx.getSetting({
                    success: function(t) {
                        t.authSetting["scope.userLocation"] || wx.showToast({
                            title: "请授权使用地理位置",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                });
            }
        }), a && a.q) {
            console.log("扫码"), wx.setStorageSync("e", JSON.stringify(a));
            var n = decodeURIComponent(a.q).split("?");
            o = (n = (n = n[1]).split("="))[1], console.log(n), this.setData({
                vehcode: o
            }), this.ScavengingScan(o);
        }
        if (wx.getStorageSync("uid")) {
            e.setData({
                NoLogin: !1
            });
            var i = wx.getStorageSync("account"), r = wx.getStorageSync("startprice"), s = (wx.getStorageSync("everyprice"), 
            wx.getStorageSync("certify"), wx.getStorageSync("balance")), c = (wx.getStorageSync("mile"), 
            wx.getStorageSync("givebalance"));
            wx.getStorageSync("depositstate");
            e.setData(t({
                userName: i,
                startprice: r
            }, "navLeft[0].rightNum", s + c + "元"));
        } else e.setData({
            NoLogin: !0
        }), i = "未登陆", e.setData({
            userName: i
        });
        var d = wx.getUpdateManager();
        wx.getUpdateManager().onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，单击确定重启应用",
                showCancel: !1,
                success: function(t) {
                    t.confirm && wx.getUpdateManager().applyUpdate();
                }
            });
        }), d.onUpdateFailed(function() {
            wx.showModal({
                title: "提示",
                content: "检查到有新版本，但下载失败，请检查网络设置",
                showCancel: !1
            });
        }), e.getActivity();
    },
    gorecharge: function() {
        1 == this.data.activitytype && wx.navigateTo({
            url: "/pages/payment/recharge/index"
        });
    },
    formatDate: function(t) {
        var a = t.getFullYear(), e = t.getMonth() + 1, o = t.getDate();
        return e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), a + "-" + e + "-" + o;
    },
    switch2Change: function(t) {
        this.setData({
            switch2Checked: !this.data.switch2Checked
        });
    },
    GetActivityDisplay: function(t) {
        var a = this, e = this;
        n.req11("Activity/GetActivityDisplay", {
            areaid: t
        }, function(t, o) {
            if (0 == o.data.code) {
                var n = o.data.data;
                if (n && 0 == n.length) return void e.setData({
                    huodongList: [],
                    activity2on: ""
                });
                wx.setStorageSync("activity2date", e.formatDate(new Date())), e.setData({
                    huodongList: n,
                    activity2on: "on"
                }), a.lunbo();
            }
        });
    },
    closehuodong: function() {
        if (wx.setStorageSync("switch2Checked", this.data.switch2Checked), wx.setStorageSync("showhuodong", !1), 
        clearInterval(c.globalData.timer), this.setData({
            activity2on: ""
        }), this.data.scaveSeccess) {
            if (c.globalData.isEnd) {
                this.setData({
                    activeBG: "#ffffff",
                    defaultBG: "#ededed"
                }), m = "1";
                try {
                    var t = this.data.lxlatitude, a = this.data.lxlongitude;
                    this.GetALLVeh(t, a);
                } catch (t) {
                    console.log(t);
                }
            }
        } else this.ParkingArea(this.data.lxlatitude, this.data.lxlongitude), this.NoParking(this.data.lxlatitude, this.data.lxlongitude), 
        this.setData({
            activeBG: "#ededed",
            defaultBG: "#ffffff",
            ckeckMarkY: !1
        });
    },
    closeActive: function() {
        this.setData({
            activeUrl: "",
            activitytype: ""
        });
    },
    getActivity: function() {
        var t = this;
        wx.request({
            url: "https://api.51gtdc.com/app/Activity/GetActivity",
            data: {},
            method: "get",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                token: wx.getStorageSync("token"),
                version: 1.1
            },
            success: function(a) {
                if (-2 != a.data.code) {
                    var e = a.data.data, o = e.activitypicurl, n = e.activitytype;
                    o && (t.setData({
                        activeUrl: o,
                        activitytype: n
                    }), wx.setStorageSync("oldGetActivity", !0));
                } else wx.reLaunch({
                    url: "/pages/login/phoneLogin"
                });
            },
            fail: function(t) {}
        });
    },
    getUserInfo: function(t) {
        c.globalData.userInfo = t.detail.userInfo, this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.sharedesc,
            path: "/pages/index/index"
        };
    },
    getUserLocation: function() {
        var t = this;
        wx.getSetting({
            success: function(a) {
                void 0 != a.authSetting["scope.userLocation"] && 1 != a.authSetting["scope.userLocation"] ? wx.showModal({
                    title: "请求授权当前位置",
                    content: "需要获取您的地理位置，请确认授权",
                    success: function(a) {
                        a.cancel ? wx.showToast({
                            title: "拒绝授权",
                            icon: "none",
                            duration: 1e3
                        }) : a.confirm && wx.openSetting({
                            success: function(a) {
                                1 == a.authSetting["scope.userLocation"] ? (wx.showToast({
                                    title: "授权成功",
                                    icon: "success",
                                    duration: 1e3
                                }), t.geo()) : wx.showToast({
                                    title: "授权失败",
                                    icon: "none",
                                    duration: 1e3
                                });
                            }
                        });
                    }
                }) : void 0 == a.authSetting["scope.userLocation"] ? t.geo() : (console.log("授权成功"), 
                t.geo());
            }
        });
    },
    geo: function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var t = this;
        wx.getLocation({
            type: "gcj02",
            success: function(a) {
                c.globalData.myShow = !0, void 0 != a.latitude && a.latitude ? t.setData({
                    lat: a.latitude,
                    lng: a.longitude
                }) : t.setData({
                    lat: 0,
                    lng: 0
                });
            },
            fail: function(a) {
                wx.showToast({
                    icon: "none",
                    title: "获取不到定位",
                    duration: 2e3
                }), c.globalData.myShow = !1, wx.removeStorageSync("adcode"), t.setData({
                    latitude: 39.90923,
                    longitude: 116.397428,
                    lat: 0,
                    lng: 0,
                    isNoPt: !0
                });
            }
        });
    }
});