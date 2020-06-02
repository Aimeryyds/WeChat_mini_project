function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e, n, i, o = require("../../utils/https.js"), r = (require("../../utils/vehsocket.js"), 
require("../../utils/wxWebSocket.js"), require("../../utils/index.js")), s = require("../../utils/util.js"), c = new (require("../../utils/qqmap-wx-jssdk.js"))({
    key: "2MRBZ-HLZK2-XI3UA-CEIP5-HWINT-LZFQD"
}), d = getApp(), l = [], u = [], g = [], h = [], f = [], w = [], v = o.imgurl, y = "", m = 0, x = "1", p = 0, S = 0, D = !1, k = new Date(), T = 0, C = !1, L = !1, b = !1;

Page((e = {
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
        myvid: v + "myvid.png",
        wcIcon: v + "iconcar.png",
        wcIcon2: v + "icont.png",
        userImg: v + "my.png",
        CloseLock: "关锁",
        userName: "未登录",
        carTypeing: "骑行中",
        userInfo: {},
        defaultBG: "#ededed",
        activeBG: "#ffffff",
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        user: v + "user3.png",
        MyMessage: v + "msg.png",
        seacImg: v + "ser.png",
        logo: v + "logo23.png",
        smImgs: v + "sc.png",
        kfImgs: v + "kf.png",
        locImgs: v + "location1.png",
        dg: v + "dg.png",
        img11: v + "11.png",
        imgdc: v + "dc.png",
        imgbs: v + "bs.png",
        imgjb: v + "jb.png",
        imgph: v + "helpBlue.png",
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
            icon: v + "qianbao.png",
            listname: "钱包",
            url: "../payment/wallet/index",
            rightNum: "0"
        }, {
            icon: v + "xingc.png",
            listname: "行程",
            url: "../order/order/index",
            rightNum: ""
        }, {
            icon: v + "yaoq.png",
            listname: "消息",
            url: "../notice/index"
        }, {
            icon: v + "heh.png",
            listname: "加盟",
            url: "../join/index"
        }, {
            icon: v + "share.png",
            listname: "分享",
            url: "../share/index"
        }, {
            icon: v + "msg.png",
            listname: "活动",
            url: "../actCenter/index"
        }, {
            icon: v + "shez.png",
            listname: "设置",
            url: "../setting/index"
        }, {
            icon: v + "helpBlack.png",
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
    t(a, "srcTX", v + "tixing.mp3"), t(a, "srcClose", v + "close.mp3"), t(a, "srcOpen", v + "open.mp3"), 
    t(a, "srcTemp", v + "tempClose.mp3"), t(a, "lsUnclockBtnFirst", !1), t(a, "temporaryClockFirst", !1), 
    t(a, "overUnclockBtnFirst", !1), t(a, "closeActiveUrl", v + "close3.png"), t(a, "activeUrl", ""), 
    t(a, "activitytype", ""), t(a, "phonex", "25px"), t(a, "mapCtx", ""), t(a, "huanpaytype", 3), 
    t(a, "adcode", ""), t(a, "areaid", ""), t(a, "vehcode", ""), t(a, "activity2on", ""), 
    t(a, "huodongList", []), t(a, "switch2Checked", ""), t(a, "restrict", ""), a),
    onUnload: function() {},
    onReady: function(t) {
        var a = wx.getSystemInfoSync().windowHeight > 800 ? "44px" : "25px";
        wx.getSystemInfo({
            success: function(t) {}
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
        r.ShowMSG();
    },
    hideModal: function() {
        this.setData({
            showModal: !1
        });
    },
    ScavengingScan: function(t) {
        if (this.setData({
            sao: !0
        }), t) {
            wx.setStorageSync("isSao", t), void 0 != this.data.lat && "" != this.data.lat || this.getUserLocation();
            try {
                wx.setStorageSync("myVeh", t);
            } catch (t) {}
            try {
                var a = wx.getStorageSync("uid"), e = wx.getStorageSync("depositstate"), n = wx.getStorageSync("certify");
                if (!a) return void wx.navigateTo({
                    url: "../login/phoneLogin",
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                });
                if (!n) return void this.certify();
                if (1 != e && 2 != e && 2 != wx.getStorageSync("zhimacreditstate") && !wx.getStorageSync("hasridingcard") && 1 != wx.getStorageSync("wxpayscorestate")) return void this.depositstate();
            } catch (t) {}
            var i = this;
            "" != a && (n && this.setData({
                certifyType: !1
            }), n ? 1 == e || 2 == e || 2 == wx.getStorageSync("zhimacreditstate") || wx.getStorageSync("hasridingcard") || 1 == wx.getStorageSync("wxpayscorestate") ? i.setData({
                depositstateType: !1
            }) : i.setData({
                depositstateType: !0
            }) : this.setData({
                certifyType: !0
            }));
        }
    },
    Scavenging: s.throttle(function(t) {
        var a = this;
        void 0 != a.data.lat && "" != a.data.lat || a.getUserLocation();
        var e = wx.getStorageSync("uid"), n = wx.getStorageSync("depositstate"), i = wx.getStorageSync("certify");
        if (i && e && (1 == n || 2 == n || 2 == wx.getStorageSync("zhimacreditstate") || wx.getStorageSync("hasridingcard") || wx.getStorageSync("wxpayscorestate")), 
        "" == e) a.NotLogin(); else {
            if (!i) return void wx.showModal({
                title: "提示",
                content: "还未实名认证，去实名认证",
                success: function(t) {
                    t.confirm && a.certify();
                }
            });
            if (1 != n && 2 != n && 2 != wx.getStorageSync("zhimacreditstate") && !wx.getStorageSync("hasridingcard") && 1 != wx.getStorageSync("wxpayscorestate")) return void wx.showModal({
                title: "提示",
                content: "还未缴纳押金，去缴纳押金",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "../payment/depositRideCard/index"
                    });
                }
            });
            var r = {
                areaid: a.data.adcode
            };
            o.req("User/AppParm", r, function(t, e) {
                var n = e.data.data.restrict;
                0 == e.data.code && o.req11("MenberUser/CoinPurse", {}, function(t, e) {
                    0 == e.data.code && (e.data.data.balance + e.data.data.givebalance >= n ? a.PayOrder(function(t) {
                        t || wx.scanCode({
                            success: function(t) {
                                var e = t.result, n = s.parseURL(e).id;
                                wx.showToast({
                                    title: "扫码成功",
                                    icon: "success",
                                    duration: 2e3
                                }), d.globalData.myVeh = {
                                    vCarId: n,
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
        }), void (L = !1);
        o.req11("V2.0/Order/GetRidingOrder", {
            id: wx.getStorageSync("orderno")
        }, function(e, n) {
            if (0 == n.data.code) {
                wx.showToast({
                    icon: "none",
                    title: "支付成功",
                    mask: !0
                }), d.globalData.myLocation = {}, wx.removeStorageSync("vid"), L = !1;
                var i = n.data.data.amount, o = n.data.data.ridingtime, r = n.data.data.mile, s = n.data.data.stime.replace(/T/, " "), c = n.data.data.etime.substr(0, 19).replace(/T/, " "), l = n.data.data.costprice, u = n.data.data.dispatchamount, g = n.data.data.couponamount;
                wx.navigateTo({
                    url: "endtrip/index?amount=" + i + "&ridingtime=" + o + "&mile=" + r + "&code=0&stime=" + s + "&etime=" + c + "&costprice=" + l + "&dispatchamount=" + u + "&couponamount=" + g
                });
            } else setTimeout(function() {
                a.zffsucc(t + 1);
            }, 2e3);
        });
    },
    successRetCars: function() {
        var t = this, a = this;
        this.mapCtx && this.mapCtx.getCenterLocation({
            success: function(t) {
                var e = t.latitude, n = t.longitude;
                a.setData({
                    RetCarlat: e,
                    RetCarlng: n
                });
            }
        }), o.req11("V2.0/Order/GetRidingOrder", {
            id: wx.getStorageSync("orderno")
        }, function(e, n) {
            if (0 == n.data.code) {
                var i = n.data.data.paytype, o = n.data.data.paystatus;
                n.data.data.coupontype;
                if (15 == i && n.data.data) 1 == o ? (wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0
                }), wx.removeStorageSync("vid"), t.endTrip(n)) : (wx.showToast({
                    title: "支付中...",
                    icon: "none",
                    duration: 3e4,
                    mask: !0
                }), setTimeout(function() {
                    a.zffsucc(1);
                }, 2e3)); else if (0 == o) {
                    if (1 == C || 1 == L || 1 == b) return;
                    L = !0, wx.showLoading({
                        title: "支付中...",
                        mask: !0
                    }), a.huanpay(3);
                } else 1 == o && (wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0
                }), wx.removeStorageSync("vid"), a.endTrip(n));
            }
        });
    },
    huanpay: function(t) {
        var a = this, e = this, n = {
            paytype: t
        };
        1 != b && 1 != C ? o.req11("V2.0/Order/PayOrder", n, function(t, r) {
            if (0 == r.data.code) if (4 == n.paytype) {
                var s = r.data.data.data;
                if (1 == b || 1 == C) return void wx.hideLoading();
                b = !0, wx.requestPayment({
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
                        var a = 0, n = setInterval(function() {
                            if ((a += 1) > 15) return clearInterval(n), wx.hideLoading(), L = !1, b = !1, void wx.showModal({
                                title: "提示",
                                content: "网络堵塞,请勿重复支付,稍后进入小程序"
                            });
                            o.req11("V2.0/Order/GetUnpayOrder", {}, function(t, a) {
                                -1 == a.data.code && (clearInterval(n), wx.hideLoading(), L = !1, b = !1, wx.showToast({
                                    title: "支付成功",
                                    icon: "success",
                                    mask: !0
                                }), d.globalData.myLocation = {}, wx.removeStorageSync("vid"), clearInterval(n), 
                                clearInterval(void 0), clearInterval(i), e.setData({
                                    scaveSeccess: !0,
                                    ingBottom: "7%"
                                }), wx.setStorageSync("mytype", "3"));
                            });
                        }, 2e3);
                    },
                    fail: function(t) {
                        L = !1, b = !1, wx.hideLoading(), "requestPayment:fail cancel" != t.errMsg && wx.showModal({
                            title: "提示",
                            content: t.errMsg,
                            success: function(t) {
                                t.confirm;
                            }
                        });
                    },
                    complete: function() {}
                });
            } else 3 == n.paytype ? o.req11("V2.0/Order/GetRidingOrder", {
                id: wx.getStorageSync("orderno")
            }, function(t, a) {
                var n = a.data.data.amount, o = a.data.data.ridingtime, r = a.data.data.mile, s = a.data.data.stime.replace(/T/, " "), c = a.data.data.etime.substr(0, 19).replace(/T/, " "), l = a.data.data.costprice, u = a.data.data.dispatchamount, g = a.data.data.couponamount;
                wx.hideLoading(), L = !1, wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0
                }), d.globalData.myLocation = {}, wx.removeStorageSync("vid"), clearInterval(void 0), 
                clearInterval(i), e.setData({
                    scaveSeccess: !0,
                    ingBottom: "7%"
                }), wx.setStorageSync("mytype", "3"), wx.navigateTo({
                    url: "endtrip/index?amount=" + n + "&ridingtime=" + o + "&mile=" + r + "&code=0&stime=" + s + "&etime=" + c + "&costprice=" + l + "&dispatchamount=" + u + "&couponamount=" + g
                });
            }) : (wx.hideLoading(), L = !1, wx.showToast({
                title: r.data.retmsg,
                icon: "success",
                duration: 2e3
            }), wx.removeStorageSync("vid"), a.endTrip(r)); else if (1 == r.data.code) {
                if (1 == b || 1 == C) return void wx.hideLoading();
                e.huanpay(4);
            } else wx.hideLoading(), L = !1, wx.showModal({
                title: "提示",
                content: r.data.retmsg
            });
        }) : wx.hideLoading();
    },
    endTrip: function(t) {
        var a = t.data.data.amount, e = t.data.data.ridingtime, n = t.data.data.mile, i = t.data.data.stime.replace(/T/, " "), o = t.data.data.etime.substr(0, 19).replace(/T/, " "), r = t.data.data.costprice, s = t.data.data.dispatchamount, c = t.data.data.couponamount;
        wx.showToast({
            title: "支付成功",
            icon: "success",
            mask: !0
        }), d.globalData.myLocation = {}, wx.setStorageSync("mytype", "3"), wx.removeStorageSync("vid"), 
        wx.navigateTo({
            url: "endtrip/index?amount=" + a + "&ridingtime=" + e + "&mile=" + n + "&code=0&stime=" + i + "&etime=" + o + "&costprice=" + r + "&dispatchamount=" + s + "&couponamount=" + c
        });
    },
    PayOrder: function(t) {
        var a = this, e = {};
        o.req11("V2.0/Order/GetUnpayOrder", e, function(e, n) {
            0 == n.data.code && n.data.data ? (a.setData({
                vehcode: ""
            }), t(!0), a.PayOrderT(n.data.data.paytype)) : -1 == n.data.code ? t(!1) : (a.setData({
                vehcode: ""
            }), wx.showToast({
                title: n.data.retmsg,
                icon: "none",
                duration: 2e3
            }), t(!1));
        });
    },
    PayOrderT: function(t) {
        15 != t ? 1 != C && 1 != L && 1 != b && (C = !0, wx.showModal({
            title: "提示",
            content: "您有未支付订单,去支付",
            success: function(t) {
                if (t.confirm) {
                    if (C = !1, 1 == L || 1 == b) return;
                    wx.navigateTo({
                        url: "../order/order/index"
                    });
                } else t.cancel && (C = !1);
            },
            fail: function() {
                C = !1;
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
                o.req("Veh/isReturnCarRange", e, function(a, e) {
                    t(0 == e.data.code ? !0 : !1);
                });
            },
            fail: function(e) {
                var n = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: a.data.lat,
                    lng: a.data.lng
                };
                o.req("Veh/isReturnCarRange", n, function(a, e) {
                    t(0 == e.data.code ? !0 : !1);
                });
            }
        });
    },
    UserGetCmd: function(t, a, e) {
        var n = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, r = this, s = 1e3 * a, c = setInterval(function() {
            if (a > 15) return wx.showToast({
                title: "操作超时",
                icon: "none",
                mask: !0
            }), clearInterval(c), void e(-2);
            var a = a + 1;
            o.req11("V2.0/UserVehCmd/UserGetCmd", {
                id: t
            }, function(t, a) {
                if (t) return wx.showToast({
                    title: t.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(c), void e(-100);
                if (0 == a.data.code) {
                    if (wx.showToast({
                        title: "操作成功",
                        icon: "success",
                        mask: !0
                    }), clearInterval(c), e(0), 3 == i) r.VehNewPos(r.data.vid); else if (2 == i) {
                        var o = r.data.markers.filter(function(t) {
                            return 1 != t.myId;
                        });
                        n.setData({
                            markers: o
                        }), d.globalData.myLocation = {};
                    }
                } else 2 == a.data.code || (a.data.code, wx.showToast({
                    title: a.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(c), e(-1));
            });
        }, s);
    },
    lsUnclockBtnFirstFn2: s.throttle(function() {
        if (console.log("零时锁车" + this.data.btn), this.data.btn) {
            console.log("临时锁车"), this.setData({
                btn: !1
            });
            var t = this;
            y = "2";
            wx.showModal({
                title: "提示",
                content: "临时锁车期间按照正常用车持续计费，若临时锁车超过40分钟，系统将自动结束订单。",
                cancelText: "不再提示",
                success: function(a) {
                    if (a.confirm) {
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
                        o.req11("V2.0/UserVehCmd/UserSendCmdTempCloseLock", e, function(a, e) {
                            0 == e.data.code ? (wx.showToast({
                                title: "操作成功",
                                icon: "success",
                                mask: !0
                            }), t.setData({
                                carTypeing: "临时锁车中",
                                temporaryClock: !1,
                                btn: !0
                            })) : 2 == e.data.code ? t.UserGetCmd(e.data.data.id, e.data.data.wait, function(a) {
                                0 === a ? t.setData({
                                    carTypeing: "临时锁车中",
                                    temporaryClock: !1,
                                    btn: !0
                                }) : t.setData({
                                    btn: !0
                                });
                            }, 3) : (wx.showToast({
                                title: e.data.retmsg,
                                duration: 2e3,
                                icon: "none",
                                mask: !0
                            }), t.setData({
                                btn: !0
                            }));
                        });
                    } else a.cancel && (t.lsUnclockBtnFirst = !1, t.setData({
                        btn: !0
                    }));
                }
            });
        }
    }),
    temporaryClockFirstFn2: s.throttle(function() {
        if (console.log("零时开锁" + this.data.btn), this.data.btn) {
            console.log("临时开锁"), this.setData({
                btn: !1
            });
            var t = this;
            y = "3", wx.showToast({
                title: "正在开锁...",
                icon: "none",
                duration: 5e4,
                mask: !0
            });
            var a = {
                cmd: 2,
                order_id: wx.getStorageSync("orderno")
            };
            o.req11("V2.0/UserVehCmd/UserSendCmdTempOpenLock", a, function(a, e) {
                0 == e.data.code ? (wx.showToast({
                    title: "操作成功",
                    icon: "success",
                    mask: !0
                }), t.setData({
                    carTypeing: "骑行中",
                    temporaryClock: !0,
                    btn: !0
                })) : 2 == e.data.code ? t.UserGetCmd(e.data.data.id, e.data.data.wait, function(a) {
                    0 === a ? t.setData({
                        carTypeing: "骑行中",
                        temporaryClock: !0,
                        btn: !0
                    }) : t.setData({
                        btn: !0
                    });
                }, 2) : wx.showToast({
                    title: e.data.retmsg,
                    duration: 2e3,
                    icon: "none",
                    mask: !0
                });
            });
        }
    }),
    overUnclockBtnFirstFn2: s.throttle(function() {
        if (console.log("结束行程" + this.data.btn), this.data.btn) {
            console.log("结束行程"), this.setData({
                btn: !1
            });
            var t = this;
            wx.showModal({
                title: "提示",
                content: "确定结束本次行程？",
                cancelText: "取消",
                confirmText: "确认",
                success: function(a) {
                    a.confirm ? (wx.showToast({
                        icon: "none",
                        title: "正在还车...",
                        mask: !0,
                        duration: 5e4
                    }), t.ReturnCar()) : a.cancel && (console.log("用户点击取消"), t.setData({
                        btn: !0
                    }));
                }
            });
        }
    }),
    findCard: s.throttle(function() {
        var t = this;
        this.setData({
            xuncheBack: "/Content/Img/xuncheNo.png"
        }), setTimeout(function() {
            t.setData({
                xuncheBack: "/Content/Img/xuncheYes.png"
            });
        }, 5e3), o.req11("V2.0/UserVehCmd/UserSendCmdCall", {
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
        var n = 1e3 * a, i = setInterval(function() {
            if (a > 15) return wx.showToast({
                title: "操作超时",
                icon: "none",
                mask: !0
            }), clearInterval(i), void e(-2);
            var a = a + 1;
            o.req11("V2.0/UserVehCmd/UserGetCmdCloseLock", {
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
                }), clearInterval(i), e(0)) : 2 == a.data.code || (a.data.code, wx.showToast({
                    title: a.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(i), e(-1));
            });
        }, n);
    },
    UserSendCmdCloseLock: function(t) {
        var a = this;
        o.req11("V2.0/UserVehCmd/UserSendCmdCloseLock", t, function(t, e) {
            0 == e.data.code ? (wx.showToast({
                title: "操作成功",
                icon: "success",
                mask: !0
            }), a.successRetCars(), a.setData({
                scaveSeccess: !0,
                ingBottom: "7%",
                btn: !0
            }), y = "") : 2 == e.data.code ? a.UserGetCmdCloseLock(e.data.data.id, e.data.data.wait, function(t) {
                0 === t ? (a.successRetCars(), a.setData({
                    scaveSeccess: !0,
                    ingBottom: "7%",
                    btn: !0
                }), y = "") : a.setData({
                    btn: !0
                });
            }) : (wx.showToast({
                title: e.data.retmsg,
                duration: 2e3,
                icon: "none",
                mask: !0
            }), a.setData({
                btn: !0
            }));
        });
    },
    ReturnCar: function(t) {
        var a = this;
        t || (t = 0), wx.getLocation({
            success: function(e) {
                var n = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: e.latitude,
                    lng: e.longitude,
                    type: t
                };
                o.req("Veh/isReturnCarRange", n, function(t, e) {
                    if (0 == e.data.code) {
                        y = "1", T = 0;
                        var n = {
                            cmd: 1,
                            order_id: wx.getStorageSync("orderno")
                        };
                        a.UserSendCmdCloseLock(n);
                    } else -1 == e.data.code ? (wx.showToast({
                        title: e.data.retmsg,
                        icon: "none"
                    }), a.setData({
                        btn: !0
                    }), a.lsUnclockBtnFirst = !1) : 2 == e.data.code ? (wx.hideToast(), wx.showModal({
                        title: "提示",
                        content: e.data.retmsg,
                        success: function(t) {
                            t.confirm ? a.ReturnCar(1) : t.cancel && (wx.showToast({
                                title: "取消还车",
                                icon: "none",
                                duration: 2e3
                            }), a.setData({
                                btn: !0
                            }));
                        }
                    })) : (wx.showToast({
                        title: e.data.retmsg
                    }), a.setData({
                        btn: !0
                    }));
                });
            },
            fail: function(e) {
                var n = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    lat: e.latitude,
                    lng: e.longitude,
                    type: t
                };
                o.req("Veh/isReturnCarRange", n, function(t, e) {
                    if (0 == e.data.code) {
                        y = "1", T = 0;
                        var n = {
                            cmd: 1,
                            order_id: wx.getStorageSync("orderno")
                        };
                        a.UserSendCmdCloseLock(n);
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
        var e = this, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.data.scaveSeccess) {
            var i = this, r = {
                lng: a,
                lat: t
            };
            g = [];
            i.data.curLatitude, i.data.curLongitude;
            i.setData({
                markers: []
            }), o.req("Veh/GetALLVeh", r, function(o, r) {
                if (0 == r.data.code) {
                    if (0 == r.data.data.veh.length) wx.showToast({
                        title: "附近暂无车辆",
                        icon: "none",
                        duration: 2e3
                    }), n && i.getservicearea(t, a); else if (n) {
                        if (i.data.scaveSeccess) {
                            var s = r.data.data.veh[0].areaid;
                            e.setData({
                                areaid: s
                            });
                        }
                        i.getservicearea(t, a);
                    }
                    var c = r.data.data.veh;
                    n && (f = []);
                    var d = !0, l = !1, h = void 0;
                    try {
                        for (var w, v = c[Symbol.iterator](); !(d = (w = v.next()).done); d = !0) {
                            var y = w.value, m = {
                                id: y.vid,
                                latitude: y.lat,
                                longitude: y.lng,
                                iconPath: "/Content/Img/veh.png",
                                width: 37,
                                height: 42
                            };
                            g.push(m);
                        }
                    } catch (o) {
                        l = !0, h = o;
                    } finally {
                        try {
                            !d && v.return && v.return();
                        } finally {
                            if (l) throw h;
                        }
                    }
                    u = g, 1 == x && i.setData({
                        polygons: f,
                        markers: g
                    });
                }
            }), D = !1;
        }
    },
    getservicearea: function(t, a) {
        f = [];
        var e = [], n = this;
        c.reverseGeocoder({
            location: {
                latitude: t,
                longitude: a
            },
            fail: function(t) {},
            success: function(i) {
                var r = n.data.areaid ? n.data.areaid : i.result.ad_info.adcode;
                d.globalData.myAreaid = n.data.areaid ? n.data.areaid : i.result.ad_info.adcode, 
                n.DefaultNum(r), wx.setStorageSync("adcode", r);
                var s = wx.getStorageSync("uid");
                wx.getStorageSync("activity2date") == n.formatDate(new Date()) && wx.getStorageSync("switch2Checked") && !1 === wx.getStorageSync("showhuodong") || d.globalData.myShow && s && n.GetActivityDisplay(r), 
                n.setData({
                    adcode: r
                });
                var c = {
                    lat: t,
                    lng: a,
                    adcode: r
                };
                o.req("User/GetServiceArea", c, function(t, a) {
                    if (0 == a.data.code) {
                        var i = a.data.data, o = !0, r = !1, s = void 0;
                        try {
                            for (var c, d = i[Symbol.iterator](); !(o = (c = d.next()).done); o = !0) {
                                var l = c.value.points.split("|"), u = [], g = !0, h = !1, f = void 0;
                                try {
                                    for (var w, v = l[Symbol.iterator](); !(g = (w = v.next()).done); g = !0) {
                                        var y = w.value;
                                        if ("" != y) {
                                            var m = y.split(",");
                                            u.push({
                                                latitude: m[1],
                                                longitude: m[0]
                                            });
                                        }
                                    }
                                } catch (t) {
                                    h = !0, f = t;
                                } finally {
                                    try {
                                        !g && v.return && v.return();
                                    } finally {
                                        if (h) throw f;
                                    }
                                }
                                var x = {
                                    points: u,
                                    width: 3,
                                    color: "#26b2f3"
                                };
                                e.push(x);
                            }
                        } catch (t) {
                            r = !0, s = t;
                        } finally {
                            try {
                                !o && d.return && d.return();
                            } finally {
                                if (r) throw s;
                            }
                        }
                        n.setData({
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
                e.setData({
                    polygons: f
                });
                var n = {
                    uid: wx.getStorageSync("uid"),
                    vid: wx.getStorageSync("vid"),
                    latitude: t,
                    longitude: a
                };
                o.req("veh/NoParking", n, function(t, a) {
                    if (0 == a.data.code) {
                        var n = a.data.data, i = !0, o = !1, r = void 0;
                        try {
                            for (var s, c = n[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                var d = s.value.points.split("|"), l = [], u = !0, g = !1, w = void 0;
                                try {
                                    for (var v, y = d[Symbol.iterator](); !(u = (v = y.next()).done); u = !0) {
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
                                    g = !0, w = t;
                                } finally {
                                    try {
                                        !u && y.return && y.return();
                                    } finally {
                                        if (g) throw w;
                                    }
                                }
                                var p = {
                                    points: l,
                                    strokeWidth: 3,
                                    strokeColor: "#F00A02AA",
                                    fillColor: "#F00A0233"
                                };
                                h.push(p);
                            }
                        } catch (t) {
                            o = !0, r = t;
                        } finally {
                            try {
                                !i && c.return && c.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        f.concat(h), e.setData({
                            polygons: h.concat(f)
                        });
                    } else wx.hideLoading();
                });
            }
        }
    },
    ParkingArea: function(t, a) {
        var e = this;
        if (!this.data.activity2on) {
            var n = this;
            if (n.setData({
                polygons: f
            }), x = "2", "" == wx.getStorageSync("uid")) return wx.showModal({
                title: "",
                content: "登录查看站点...",
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "../login/phoneLogin"
                    });
                }
            }), void (D = !1);
            var i = {
                lng: a,
                lat: t
            };
            o.req("Veh/GetALLVeh", i, function(i, r) {
                0 == r.data.code && (0 != r.data.data.veh.length ? e.setData({
                    vidZ: r.data.data.veh[0].vid
                }) : e.setData({
                    vidZ: ""
                }));
                var c = a || e.data.longitude, l = t || e.data.latitude, u = s.gcj_decrypt(l, c), w = {
                    vid: wx.getStorageSync("vid") ? wx.getStorageSync("vid") : e.data.vidZ,
                    lng: u[0],
                    lat: u[1]
                };
                "" != w.lng && (wx.showLoading({
                    title: "加载站点..."
                }), n.data.scaveSeccess || n.NoParking(), o.req("Veh/ParkingArea", w, function(e, i) {
                    if (i.data.data || n.setData({
                        markers: []
                    }), 0 == i.data.code) {
                        wx.hideLoading();
                        var o = i.data.data ? i.data.data : [], r = (g = []).find(function(t) {
                            return t.myId;
                        });
                        if (!(o.length > 0)) return void n.setData({
                            markers: [],
                            polygons: f
                        });
                        var s = !0, c = !1, l = void 0;
                        try {
                            for (var u, w = o[Symbol.iterator](); !(s = (u = w.next()).done); s = !0) {
                                for (var y = u.value, m = y.points.split("|"), p = [], S = [], D = 0; D < m.length; D++) if ((r = m[D].split(","))[0]) {
                                    var k = {
                                        lng: r[0],
                                        lat: r[1]
                                    };
                                    k.distance = n.getDistance(k.lat, k.lng, t, a), S.push(k);
                                }
                                S.sort(function(t, a) {
                                    return t.distance - a.distance;
                                });
                                var T = !0, C = !1, L = void 0;
                                try {
                                    for (var b, M = m[Symbol.iterator](); !(T = (b = M.next()).done); T = !0) {
                                        var I = b.value;
                                        if ("" != I) {
                                            var U = I.split(",");
                                            p.push({
                                                latitude: U[1],
                                                longitude: U[0]
                                            });
                                        }
                                    }
                                } catch (e) {
                                    C = !0, L = e;
                                } finally {
                                    try {
                                        !T && M.return && M.return();
                                    } finally {
                                        if (C) throw L;
                                    }
                                }
                                var A = {
                                    id: y.id,
                                    latitude: S[0].lat,
                                    longitude: S[0].lng,
                                    width: 27,
                                    height: 32,
                                    iconPath: v + "pStor.png"
                                }, V = {
                                    points: p,
                                    strokeWidth: 1,
                                    strokeColor: "#FCE8A9AA",
                                    fillColor: "#FCE8A980"
                                };
                                g.push(A), h.push(V);
                            }
                        } catch (e) {
                            c = !0, l = e;
                        } finally {
                            try {
                                !s && w.return && w.return();
                            } finally {
                                if (c) throw l;
                            }
                        }
                        g.push(d.globalData.myLocation), 2 == x && (wx.hideLoading(), n.setData({
                            polygons: h.concat(f),
                            markers: g
                        }));
                    }
                }), D = !1);
            });
        }
    },
    getDistance: function(t, a, e, n) {
        t = t || 0, a = a || 0, e = e || 0, n = n || 0;
        var i = t * Math.PI / 180, o = e * Math.PI / 180, r = i - o, s = a * Math.PI / 180 - n * Math.PI / 180;
        return 12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(i) * Math.cos(o) * Math.pow(Math.sin(s / 2), 2)));
    },
    showALLVeh: function() {
        if (new Date().getTime() - k.getTime() > 2e3) {
            k = new Date();
            var t = this;
            x = "1", g = [], w = [], l = [], t.setData({
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
        if (new Date().getTime() - k.getTime() > 2e3) {
            k = new Date();
            var t = this;
            wx.getStorageSync("uid");
            x = 2, w = [], l = [], h = [], t.setData({
                activeBG: "#ededed",
                defaultBG: "#ffffff",
                ckeckMarkY: !1
            });
            t.data.latitude, t.data.longitude;
            var a = t.data.lxlatitude, e = t.data.lxlongitude;
            g = [], t.setData({
                markers: [],
                polygons: f
            }), t.ParkingArea(a, e);
        }
    },
    calculateDistance: function(t, a) {
        var e = this;
        c.calculateDistance({
            mode: "walking",
            from: e.data.lxlatitude + "," + e.data.lxlongitude,
            to: t + "," + a,
            success: function(t) {
                for (var t = t.result, a = [], n = 0; n < t.elements.length; n++) a.push(t.elements[n].distance);
                var i = parseInt(t.elements[0].distance / 60);
                e.setData({
                    distance: t.elements[0].distance,
                    appointmentLong: t.elements[0].distance,
                    appointmentTime: i
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    reverseGeocoder: function(t, a) {
        var e = this;
        c.reverseGeocoder({
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
            fail: function(t) {}
        });
    },
    showlocation: s.throttle(function() {
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
            action: m
        };
        o.req("Veh/Directive", a, function(a, e) {
            0 == e.data.code ? (m = 0, wx.showToast({
                title: "操作成功",
                icon: "success",
                duration: 2e3
            })) : 1 == e.data.code ? (m = 0, wx.showLoading({
                title: "操作失败..."
            })) : 2 == e.data.code && (m = 1, setTimeout(function() {
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
        }), D || (D = !0, a.getLngLat()));
    },
    getLngLat: function() {
        var t = this;
        t.mapCtx && t.mapCtx.getCenterLocation({
            success: function(a) {
                t.setData({
                    lxlatitude: a.latitude,
                    lxlongitude: a.longitude
                });
                var e = a.latitude, n = a.longitude;
                if (p != e || S != n) {
                    if (t.getDistance(p, S, e, n) < 100) return void (D = !1);
                    p = e, S = n, 2 == x && (l = [], h = [], t.setData({
                        markers: [],
                        polygons: f
                    }), t.ParkingArea(e, n), t.NoParking(e, n), t.data.isNoPt && t.getservicearea(e, n)), 
                    l = [], t.setData({
                        circles: [],
                        curLatitude: e,
                        curLongitude: n
                    }), 1 == x ? (g = [], t.setData({
                        myvidIcon: !0
                    }), t.GetALLVeh(e, n), t.data.isNoPt && (t.getservicearea(e, n), t.setData({
                        isNoPt: !1
                    }))) : 2 == x ? (l = [], p == e && S == n || t.setData({})) : 3 == x && (t.setData({
                        myvidIcon: !1
                    }), D = !1);
                } else D = !1;
            }
        });
    },
    getVehAreaid: function(t) {
        var a = this;
        o.req11("V2.0/OpVeh/VehDetail", {
            vid: t
        }, function(t, e) {
            if (0 == e.data.code && e.data.data.areaid) {
                if (!a.data.temporaryClock && 0 == g.length) {
                    var n = s.gcj_encrypt(e.data.data.latitude, e.data.data.longitude), i = {
                        latitude: n[1],
                        longitude: n[0],
                        width: 27,
                        height: 32,
                        iconPath: "/Content/Img/veh.png",
                        myId: 1
                    };
                    g.push(i);
                }
                var o = e.data.data.areaid;
                wx.setStorageSync("adcode", o), a.setData({
                    areaid: o,
                    adcode: o
                }), a.getservicearea(e.data.data.latitude, e.data.data.longitude), a.ParkingArea(e.data.data.latitude, e.data.data.longitude), 
                a.NoParking(e.data.data.latitude, e.data.data.longitude);
            }
        });
    },
    CalculateCost: function() {
        var t = this, a = this, e = wx.getStorageSync("uid");
        if (e) {
            var n = {
                uid: e
            };
            o.req("Veh/CalculateCost", n, function(t, e) {
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
                }), a.VehNewPos(e.data.data.vid)), i = setInterval(function() {
                    a.CarTravelMile();
                }, 12e4)) : "身份验证过期!请退出重新登录" == e.data.retmsg || ("1" == x ? a.showALLVeh() : a.showParkingArea(), 
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
        var t = this, a = this, e = wx.getStorageSync("uid");
        if (e) {
            var n = {
                uid: e
            };
            o.req("Veh/CalculateCost", n, function(e, n) {
                0 == n.data.code ? (g = [], "2" != wx.getStorageSync("mytype") && wx.setStorageSync("mytype", "1"), 
                wx.setStorageSync("vid", n.data.data.vid), wx.setStorageSync("orderno", n.data.data.orderno), 
                t.setData({
                    myVidOne: n.data.data.vid,
                    vid: n.data.data.vid
                }), 1 == n.data.data.orderstatus || 2 == n.data.data.orderstatus || 4 == n.data.data.orderstatus ? (t.getVehAreaid(n.data.data.vid), 
                a.setData({
                    temporaryClock: !0,
                    carTypeing: "骑行中",
                    scaveSeccess: !1,
                    ingBottom: "32%",
                    mile: n.data.data.mile
                })) : 5 == n.data.data.orderstatus && (t.getVehAreaid(n.data.data.vid), a.setData({
                    temporaryClock: !1,
                    carTypeing: "临时锁车中",
                    scaveSeccess: !1,
                    ingBottom: "32%",
                    mile: n.data.data.mile
                }))) : (d.globalData.myLocation = {}, t.showALLVeh(), wx.removeStorageSync("vid"));
            }, function() {}, function() {});
        }
    },
    VehNewPos: function(t) {
        var a = this;
        o.req11("V2.0/UserVeh/VehNewPos", {
            vid: t
        }, function(t, e) {
            if (0 == e.data.code) {
                var n = s.gcj_encrypt(e.data.data.latitude, e.data.data.longitude), i = {
                    latitude: n[1],
                    longitude: n[0],
                    width: 37,
                    height: 42,
                    iconPath: "/Content/Img/veh.png",
                    myId: 1
                };
                g.push(i), d.globalData.myLocation = i, a.setData({
                    markers: g
                });
            }
        });
    },
    DefaultNum: function(t) {
        var a = this, e = {
            areaid: t
        };
        o.req("User/AppParm", e, function(t, e) {
            if (0 == e.data.code) {
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
        var t = this, a = wx.getStorageSync("startprice"), e = t.data.allTime, i = wx.getStorageSync("everyprice"), o = 60 * wx.getStorageSync("startmin"), r = 60 * wx.getStorageSync("everymin");
        if (e > o) {
            var s = e - o, c = a + (s % r == 0 ? s / r * i : (parseInt(s / r) + 1) * i);
            t.setData({
                startprice: c
            });
        } else {
            c = a;
            t.setData({
                startprice: c
            });
        }
        n = setTimeout(function() {
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
        }) : o.req("User/UserInfo", {}, function(t, e) {
            0 == e.data.code && wx.setStorageSync("certify", e.data.data.certify);
            var n = a.data.userName;
            wx.navigateTo({
                url: "../logs/logs?userName=" + n
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
    }
}, t(e, "getDistance", function(t, a, e, n) {
    t = t || 0, a = a || 0, e = e || 0, n = n || 0;
    var i = t * Math.PI / 180, o = e * Math.PI / 180, r = i - o, s = a * Math.PI / 180 - n * Math.PI / 180;
    return (12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(i) * Math.cos(o) * Math.pow(Math.sin(s / 2), 2)))).toFixed(0);
}), t(e, "makePhoneCall", function() {
    wx.navigateTo({
        url: "../helpCenter/index"
    });
}), t(e, "inspect", function() {
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
}), t(e, "CarTravelMile", function() {
    var t = this, a = wx.getStorageSync("uid");
    if ("" != a) {
        var e = {
            uid: a,
            vid: wx.getStorageSync("carId"),
            orderno: ""
        };
        e.vid && o.req("Veh/TravelMile", e, function(a, e) {
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
}), t(e, "ServerInfoPush", function() {
    var t = this, a = {
        uid: wx.getStorageSync("uid"),
        orderno: wx.getStorageSync("orderno"),
        type: 0
    };
    o.req("User/ServerInfoPush", a, function(a, e) {
        0 == e.data.code ? null != e.data.data && t.setData({
            pushnew: !0,
            PushContent: e.data.data.msg
        }) : 1 == e.data.code && (wx.showToast({
            title: "车辆已自动还车，感谢您的使用！",
            icon: "none",
            duration: 2e3
        }), t.ReturnCar());
    });
}), t(e, "depositstate", function() {
    wx.navigateTo({
        url: "../payment/depositRideCard/index"
    });
}), t(e, "certify", function() {
    wx.getStorageSync("token");
    wx.navigateTo({
        url: "../logs/authentication/index"
    });
}), t(e, "NoLogin", function() {
    wx.navigateTo({
        url: "../login/phoneLogin"
    });
}), t(e, "remind", function() {
    wx.navigateTo({
        url: "../actCenter/stopcont/index"
    });
}), t(e, "myEventListener", function(t) {
    this.setData({
        curidx: t.detail
    });
}), t(e, "lunbo", function() {
    var t = this;
    clearInterval(d.globalData.timer);
    var a = 0;
    d.globalData.timer = setInterval(function() {
        (a = t.data.curidx) >= t.data.huodongList.length - 1 ? a = 0 : a++, t.setData({
            curidx: a
        });
    }, 5e3);
}), t(e, "onShow", function() {
    var t = this;
    this.getQi(), this.geo(), this.data.activity2on && this.lunbo();
    var a = this;
    wx.getStorageSync("uid"), wx.getStorageSync("depositstate"), wx.getStorageSync("certify");
    o.req11("MenberUser/UserInfo", {}, function(e, n) {
        if (0 == n.data.code) {
            var i = n.data.data.deposit, o = n.data.data.zhimacreditstate, r = n.data.data.hasridingcard, s = n.data.data.wxpayscorestate, c = n.data.data.certify;
            if (wx.setStorageSync("depositstate", i), wx.setStorageSync("zhimacreditstate", o), 
            wx.setStorageSync("hasridingcard", r), wx.setStorageSync("wxpayscorestate", s), 
            wx.setStorageSync("certify", c), c) {
                if (a.setData({
                    certifyType: !1
                }), 1 == i || 2 == i || 2 == o || r || 1 == s) {
                    if (a.setData({
                        depositstateType: !1
                    }), wx.getStorageSync("isSao")) try {
                        var l = wx.getStorageSync("myVeh");
                        l && a.PayOrder(function(t) {
                            if (!t && l) {
                                var e = l, n = {
                                    login: a.data.NoLogin,
                                    deposit: a.data.depositstateType,
                                    certify: a.data.certifyType
                                };
                                n.login || n.deposit || n.certify || (d.globalData.myVeh = {
                                    vCarId: e,
                                    lat: a.data.lat ? a.data.lat : 0,
                                    lng: a.data.lng ? a.data.lng : 0
                                }, wx.navigateTo({
                                    url: "unlock/index"
                                }));
                            }
                        });
                    } catch (t) {}
                } else if (a.setData({
                    depositstateType: !0
                }), !d.globalData.vs && !t.data.sao) return void t.depositstate();
            } else a.setData({
                certifyType: !0
            }), d.globalData.vs || t.data.sao || t.certify();
        }
        t.onshowfn();
    }, function() {}, function(a) {
        a && (t.setData({
            NoLogin: !1
        }), t.onLoad(), t.onShow());
    });
}), t(e, "onshowfn", function() {
    var t = this;
    t.getUserLocation(), t.CalculateCost();
}), t(e, "onLoad", function(a) {
    this.getQi(), this.geo();
    var e = this, n = "";
    if (wx.getLocation({
        type: "gcj02",
        success: function(t) {
            var a = t.latitude, n = t.longitude;
            p = a, S = n, e.GetALLVeh(a, n, !0), e.setData({
                lat: a,
                lng: n,
                latitude: a,
                longitude: n
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
        wx.setStorageSync("e", JSON.stringify(a));
        var i = decodeURIComponent(a.q).split("?");
        n = (i = (i = i[1]).split("="))[1], this.setData({
            vehcode: n
        }), this.ScavengingScan(n);
    }
    if (wx.getStorageSync("uid")) {
        e.setData({
            NoLogin: !1
        });
        var o = wx.getStorageSync("account"), r = wx.getStorageSync("startprice"), s = (wx.getStorageSync("everyprice"), 
        wx.getStorageSync("certify"), wx.getStorageSync("balance")), c = (wx.getStorageSync("mile"), 
        wx.getStorageSync("givebalance"));
        wx.getStorageSync("depositstate");
        e.setData(t({
            userName: o,
            startprice: r
        }, "navLeft[0].rightNum", s + c + "元"));
    } else e.setData({
        NoLogin: !0
    }), o = "未登陆", e.setData({
        userName: o
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
}), t(e, "gorecharge", function() {
    1 == this.data.activitytype && wx.navigateTo({
        url: "/pages/payment/recharge/index"
    });
}), t(e, "formatDate", function(t) {
    var a = t.getFullYear(), e = t.getMonth() + 1, n = t.getDate();
    return e < 10 && (e = "0" + e), n < 10 && (n = "0" + n), a + "-" + e + "-" + n;
}), t(e, "switch2Change", function(t) {
    this.setData({
        switch2Checked: !this.data.switch2Checked
    });
}), t(e, "GetActivityDisplay", function(t) {
    var a = this, e = this;
    o.req11("Activity/GetActivityDisplay", {
        areaid: t
    }, function(t, n) {
        if (0 == n.data.code) {
            var i = n.data.data;
            if (i && 0 == i.length) return void e.setData({
                huodongList: [],
                activity2on: ""
            });
            wx.setStorageSync("activity2date", e.formatDate(new Date())), e.setData({
                huodongList: i,
                activity2on: "on"
            }), a.lunbo();
        }
    });
}), t(e, "closehuodong", function() {
    if (wx.setStorageSync("switch2Checked", this.data.switch2Checked), wx.setStorageSync("showhuodong", !1), 
    clearInterval(d.globalData.timer), this.setData({
        activity2on: ""
    }), this.data.scaveSeccess) {
        if (d.globalData.isEnd) {
            this.setData({
                activeBG: "#ffffff",
                defaultBG: "#ededed"
            }), x = "1";
            try {
                var t = this.data.lxlatitude, a = this.data.lxlongitude;
                this.GetALLVeh(t, a);
            } catch (t) {}
        }
    } else this.ParkingArea(this.data.lxlatitude, this.data.lxlongitude), this.NoParking(this.data.lxlatitude, this.data.lxlongitude), 
    this.setData({
        activeBG: "#ededed",
        defaultBG: "#ffffff",
        ckeckMarkY: !1
    });
}), t(e, "closeActive", function() {
    this.setData({
        activeUrl: "",
        activitytype: ""
    });
}), t(e, "getActivity", function() {
    var t = this;
    wx.request({
        url: "https://api.xiaobeibike.com/app/Activity/GetActivity",
        data: {},
        method: "get",
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
            token: wx.getStorageSync("token"),
            version: 1.1
        },
        success: function(a) {
            if (-2 != a.data.code) {
                var e = a.data.data, n = e.activitypicurl, i = e.activitytype;
                n && (t.setData({
                    activeUrl: n,
                    activitytype: i
                }), wx.setStorageSync("oldGetActivity", !0));
            } else wx.reLaunch({
                url: "/pages/login/phoneLogin"
            });
        },
        fail: function(t) {}
    });
}), t(e, "getUserInfo", function(t) {
    d.globalData.userInfo = t.detail.userInfo, this.setData({
        userInfo: t.detail.userInfo,
        hasUserInfo: !0
    });
}), t(e, "onShareAppMessage", function() {
    return {
        title: this.data.sharedesc,
        path: "/pages/index/index"
    };
}), t(e, "getUserLocation", function() {
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
            }) : (a.authSetting["scope.userLocation"], t.geo());
        }
    });
}), t(e, "geo", function() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    var t = this;
    wx.getLocation({
        type: "gcj02",
        success: function(a) {
            d.globalData.myShow = !0, void 0 != a.latitude && a.latitude ? t.setData({
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
            }), d.globalData.myShow = !1, wx.removeStorageSync("adcode"), t.setData({
                latitude: 39.90923,
                longitude: 116.397428,
                lat: 0,
                lng: 0,
                isNoPt: !0
            });
        }
    });
}), e));