function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../utils/bike/bikeOperate.js"), e = getApp(), o = require("../../utils/util.js"), n = require("../../utils/extraMap.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        showView: !1,
        isPark: !0,
        isRide: !1,
        flag: !1,
        tipDialog: !1,
        guideDialog: !1,
        showEx: !1,
        showContact: !1,
        showActivity: !0,
        isInGeo: !1,
        title: "",
        searchHeight: 0,
        topHeight: 0,
        confirmbg: "#888888",
        bleTip: "",
        dialogTip: "余额不足，请先充值。",
        noBalanceData: 0,
        topImage: [],
        boundImage: [],
        showType: -1,
        phoneList: [],
        textColor: e.globalData.textColor,
        mainColor: e.globalData.mainColor,
        headColor: e.globalData.headColor,
        applyPointImage: "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/huanchedian@3x.png",
        faultImage: "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/guzhangshangbao@3x.png",
        helpImage: "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/question_icon@3x.png",
        adviceImage: "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/yijianfankui@3x.png",
        scanImage: "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/saoma.png",
        myImage: "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/my.png",
        guideImage: "../../images/bluetooth_g_b.png",
        topImageWidth: 0,
        topImageHeight: 0,
        longitude: "116.403967",
        latitude: "39.909719",
        scale: 16,
        markers: [],
        circles: [],
        polyline: [],
        polygon: [],
        polygonArea: [],
        lastGeoId: "",
        geoIds: [],
        stopTime: 0,
        machineNO: "",
        longMachineNO: "",
        modelType: 0
    },
    onLoad: function(t) {
        var o = this;
        this.conctrlLoading = !1, this.clicked = !1, this.isBorrow = !1, this.mapCtx = wx.createMapContext("myMap"), 
        this.stillOutSideCode = !1, e.globalData.mobileOS.indexOf("iOS") > -1 && this.setData({
            guideImage: "../../images/bluetooth_g_a.png"
        });
        var n = decodeURIComponent(t.q);
        this.outSideMsg = n, this.setTop(), this.preInit(), e.initApp(function(a) {
            o.phone = a.phone;
            var i = a.textColor;
            if (314 == a.accountId && (i = "#000000"), 315 == a.accountId && (i = "#000000"), 
            o.setData({
                mainColor: a.mainColor,
                textColor: i,
                headColor: a.headColor,
                title: a.name
            }), e.getAdAccountId(function(t) {
                o.setData({
                    modelType: e.globalData.modelType
                }), o.matchState("first", function(a) {
                    "isBorrowing" != a ? "undefined" != n && "no token" == t ? (e.globalData.isScanCode = !0, 
                    o.analysisMachineNO(n)) : e.initUserInfo(function() {
                        void 0 !== n && (n.indexOf("?machineNO") > -1 || n.indexOf("?userCode") > -1) && (e.globalData.isScanCode = !0, 
                        o.analysisMachineNO(n));
                    }) : e.initUserInfo();
                });
            }), void 0 !== t.returnBike) {
                var l = t.returnBike;
                console.log("补足余额，立即还车" + l), 1 == l && o.returnBike();
            }
            o.getUserLocation();
        }), this.bikeOperate = new a();
        var i = wx.getStorageSync("showActivity");
        !1 === i && this.setData({
            showActivity: i
        });
    },
    preInit: function() {
        var t = wx.getStorageSync("mainColor"), a = wx.getStorageSync("textColor"), o = wx.getStorageSync("headColor"), n = (wx.getStorageSync("baseUrl"), 
        wx.getStorageSync("phone")), i = wx.getStorageSync("name");
        this.phone = n, 314 != e.globalData.accountId && 315 != e.globalData.accountId || (a = "#000000"), 
        this.setData({
            mainColor: t,
            textColor: a,
            headColor: o,
            title: i
        });
    },
    setTop: function() {
        var t = this;
        setTimeout(function() {
            var a = wx.getSystemInfoSync(), e = (a.windowHeight, 55 / 355 * (a.windowWidth - 20));
            t.setData({
                topHeight: a.safeArea.top,
                topImageWidth: a.windowWidth - 20,
                topImageHeight: e
            });
        }, 300);
    },
    matchState: function(t, a) {
        var e = this;
        this.judgeUserState().then(function(o) {
            "isBorrowing" == o && (e.isBorrow = !0, e.setData({
                guideDialog: !1
            }), console.log("借车"), a && a("isBorrowing"), e.showTypeAlter(2, t));
        }, function(o) {
            "noBorrowing" == o ? (e.isBorrow = !1, a && a("noBorrowing"), console.log("无借车"), 
            e.showTypeAlter(1, t)) : "logout" == o && (e.isBorrow = !1, a && a("logout"), e.showTypeAlter(1, t));
        });
    },
    onShow: function() {
        this.setData({
            polygon: [],
            polygonArea: [],
            lastGeoId: "",
            geoIds: []
        }), e.globalData.firstRender ? e.globalData.firstRender = !1 : (console.log("user:", e.globalData.userInfo), 
        this.getUserLocation(), this.matchState("first")), console.log("实名情况：", e.globalData.pushNameAuth), 
        console.log("自动流程", e.globalData.autoAction, this.outSideMsg), "auto" == e.globalData.autoAction && (e.globalData.autoAction = null, 
        void 0 !== this.outSideMsg && (this.outSideMsg.indexOf("?machineNO") > -1 || this.outSideMsg.indexOf("?userCode") > -1) ? this.analysisMachineNO(this.outSideMsg) : this.scanCode());
    },
    onReady: function() {
        var t = this, a = this.createSelectorQuery();
        a.select("#myMap").boundingClientRect(), a.exec(function(a) {
            var e = a[0].height / a[0].width;
            t.setData({
                searchHeight: a[0].height / 2 - 32 * e
            });
        });
    },
    analysisMachineNO: function(t) {
        var a = this;
        console.log("外部扫描内容：q" + t), wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0,
            duration: 1e5
        });
        var e = t.split("=")[1];
        this.data.machineNO = e, e && e.length > 9 && (this.data.longMachineNO = e.substring(e.length - 9, e.length)), 
        this.checkUserStatus().then(function() {
            wx.hideToast(), e.length > 0 && wx.navigateTo({
                url: "../machineStatus/machineStatus?machineNO=" + e
            });
        }, function() {
            wx.hideToast(), a.stillOutSideCode = !0;
        });
    },
    checkUserStatus: function() {
        return new Promise(function(t, a) {
            var o = e.globalData.userInfo;
            o ? e.globalData.pushNameAuth && !o.nameAuth ? (a(), e.globalData.autoAction = "scan", 
            wx.navigateTo({
                url: "../authentication/authentication"
            })) : t() : (e.globalData.autoAction = "scan", a(), wx.navigateTo({
                url: "../login/login"
            }));
        });
    },
    getAdvertisement: function(t) {
        var a = this, n = e.globalData.baseUrl + "adAccount/getByLocation.do", i = {
            accountId: e.globalData.accountId,
            lo: t.longitude,
            la: t.latitude,
            mapType: 2
        };
        o.request(n, i, function(t) {
            if (t.ret) {
                console.log(t);
                var o = [], n = [], i = [];
                t.data.forEach(function(t, a) {
                    var l = e.globalData.baseUrl + "/image/getByImageId.do?imageId=" + t.imageId;
                    0 == t.adType ? i.push(l) : 1 == t.adType ? n.push({
                        src: l,
                        target: t.openURL
                    }) : 2 == t.adType && o.push({
                        src: l,
                        target: t.openURL
                    });
                }), e.globalData.boundImage = n, n.length > 0 ? (a.setData({
                    boundImage: n,
                    topImage: o,
                    guideDialog: !a.isBorrow
                }), console.log("guanggao", a.isBorrow, a.isBorrow ? "false" : "true")) : a.setData({
                    boundImage: n,
                    topImage: o
                });
            }
        });
    },
    toTarget: function(t) {
        var a = t.currentTarget.dataset.url;
        a && a.length > 0 && (a.indexOf("http") > -1 ? wx.navigateTo({
            url: "../urlTarget/urlTarget?targetUrl=" + a
        }) : e.globalData.userInfo ? wx.navigateTo({
            url: a
        }) : wx.navigateTo({
            url: "../login/login?unknowUrl=" + a
        }));
    },
    getUserLocation: function(t) {
        var a = this;
        e.getLocationInfo("gcj02", function(o) {
            a.setData({
                longitude: o.longitude,
                latitude: o.latitude,
                centerLongitude: o.longitude,
                centerLatitude: o.latitude
            }), e.globalData.areaLocation = o, e.globalData.displayAD && a.getAdvertisement(o), 
            console.log("用户位置：", o.longitude, o.latitude), a.geoForm(o.longitude, o.latitude, t);
        });
    },
    regionchange: function(t) {
        var a = this;
        "end" == t.type && (this.conctrlLoading || (this.conctrlLoading = !0), this.mapCtx.getCenterLocation({
            success: function(t) {
                var n = {
                    latitude: a.data.centerLatitude,
                    longitude: a.data.centerLongitude
                }, i = {
                    latitude: t.latitude,
                    longitude: t.longitude
                }, l = 1e3 * o.getDistance(n.longitude, n.latitude, i.longitude, i.latitude);
                console.log("移动距离" + l + "米,模式：" + a.data.showType), l >= 200 && a.geoForm(t.longitude, t.latitude), 
                l >= 250 && 1 == a.data.showType ? (a._loadCars(t.longitude, t.latitude), a.setData({
                    centerLongitude: t.longitude,
                    centerLatitude: t.latitude
                }), e.returnAdAccountId(t, function() {
                    a.setData({
                        modelType: e.globalData.modelType
                    });
                })) : l >= 500 && 2 == a.data.showType && (0 == e.globalData.modelType ? a._getParks(t.longitude, t.latitude, 2) : a._getProhibitArea(t.longitude, t.latitude, 2), 
                a.setData({
                    centerLongitude: t.longitude,
                    centerLatitude: t.latitude
                }), e.returnAdAccountId(t, function() {
                    a.setData({
                        modelType: e.globalData.modelType
                    });
                }));
            }
        }));
    },
    loadGeo: function(t, a) {
        var n = this, i = e.globalData.baseUrl + "geo/getInGeo.do", l = {
            lo: t,
            la: a,
            mapType: 2,
            accountId: e.globalData.accountId
        };
        return new Promise(function(t, a) {
            e.checkToken(function(s) {
                s.length > 0 && (l.token = s), o.request(i, l, function(o) {
                    if (void 0 != o.data) {
                        var i = n.data.geoIds;
                        e.globalData.areaPolygon = o.data, n.setData({
                            isInGeo: !0
                        }), n.isRepeat(i, o.data.geoId) ? (console.log("repeat point"), n.setData({
                            lastGeoId: o.data.geoId
                        }), a("repeat point")) : t(o);
                    } else n.setData({
                        isInGeo: !1
                    }), e.globalData.areaPolygon = null, a("without point");
                });
            });
        });
    },
    isRepeat: function(t, a) {
        var e = t.length;
        if (e > 0) for (var o = 0; o < e; o++) if (t[o] == a) return !0;
        return !1;
    },
    geoForm: function(t, a, e) {
        var o = this;
        this.loadGeo(t, a).then(function(t) {
            if (t.data) {
                for (var a = [], n = t.data.points.split(";"), i = [], l = 0; l < n.length; l++) {
                    var s = {};
                    s.longitude = n[l].split(",")[0], s.latitude = n[l].split(",")[1], i.push(s);
                }
                a = [ {
                    points: i,
                    strokeWidth: 5,
                    strokeColor: "#FF0000DD",
                    fillColor: "#FF000009",
                    zIndex: -9
                } ];
                var r = o.data.geoIds;
                r.push(t.data.geoId);
                var c = o.data.polygonArea;
                c = c.concat(a), o.setData({
                    polygon: a.concat(o.data.polygon),
                    polygonArea: c,
                    lastGeoId: t.data.geoId,
                    geoIds: r
                }), console.log("渲染围栏", e), e && e();
            }
        }, function(t) {
            console.log("重复电子围栏"), e && e();
        });
    },
    showTypeAlter: function(t, a) {
        var e = this;
        console.log("showTypeAlter方法", this.data.showType, t), this.data.showType == t && "first" != a || (console.log("操作类型：", t), 
        this.setData({
            showType: t,
            markers: [],
            polygon: this.data.polygonArea,
            polyline: []
        }), "first" == a ? wx.getLocation({
            type: "gcj02",
            success: function(a) {
                e.loadParksOrCars(a.longitude, a.latitude, t);
            }
        }) : this.mapCtx.getCenterLocation({
            success: function(a) {
                e.loadParksOrCars(a.longitude, a.latitude, t);
            }
        }));
    },
    loadParksOrCars: function(t, a, o) {
        1 == this.data.showType ? (console.log("车辆模式"), this._loadCars(t, a, o)) : 2 == this.data.showType && (console.log("站点模式/禁停区模式", e.globalData.modelType), 
        0 == e.globalData.modelType ? this._getParks(t, a, o) : this._getProhibitArea(t, a, o));
    },
    _getParks: function(t, a, n) {
        var i = this, l = e.globalData.baseUrl + "parkPoint/getNear.do", s = {
            accountId: e.globalData.accountId,
            radius: 500,
            mapType: 2,
            lo: t,
            la: a
        };
        e.checkToken(function(t) {
            t.length > 0 && (s.token = t), o.request(l, s, function(t) {
                if (t.data.length > 0) {
                    var a = [], o = [], l = [];
                    t.data.forEach(function(t, n) {
                        var i = "";
                        i = "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/park/huanchedian.png";
                        var s = {
                            id: n,
                            accountId: t.accountId,
                            parkPointId: t.parkPointId,
                            iconPath: i,
                            latitude: t.laC ? t.laC : t.la,
                            longitude: t.loC ? t.loC : t.lo,
                            width: 26,
                            height: 36
                        };
                        if (a.push(s), t.pointsC && 1 == t.parkPointType) {
                            for (var r = t.pointsC.split(";"), c = r.length, u = [], g = 0; g < c; g++) {
                                var d = r[g].split(","), h = {
                                    latitude: d[1],
                                    longitude: d[0]
                                };
                                u.push(h);
                            }
                            var p = {
                                points: u,
                                fillColor: "#00a2e933",
                                strokeColor: "#00a2e955",
                                strokeWidth: 2,
                                zIndex: -9
                            };
                            l.push(p);
                        } else {
                            var f = {
                                latitude: t.laC,
                                longitude: t.loC,
                                radius: t.allowRange,
                                color: "#00a2e955",
                                fillColor: "#00a2e933"
                            };
                            o.push(f);
                        }
                    }), console.log("站点渲染：", n, i.data.showType), n == i.data.showType ? i.setData({
                        markers: a,
                        polygon: l.concat(i.data.polygonArea)
                    }) : i.setData({
                        polygon: i.data.polygonArea
                    }), console.log("站点和区域点个数:", i.data.polygon.length);
                }
            });
        });
    },
    _loadCars: function(t, a) {
        var n = this;
        console.log("进入车辆渲染");
        var i = e.globalData.baseUrl + "machineStatus/getNearMachine.do", l = {
            accountId: e.globalData.accountId,
            radius: 250,
            mapType: 2,
            lo: t,
            la: a
        };
        e.checkToken(function(t) {
            t.length > 0 && (l.token = t), o.request(i, l, function(t) {
                var a = [];
                t.data.length > 0 && (t.data.forEach(function(t, o) {
                    var n = "" + e.globalData.imagesUrl + e.globalData.accountId + "/map/car/icon_che.png", i = {
                        id: o,
                        machineId: t.machineId,
                        iconPath: n,
                        latitude: t.latC ? t.latC : t.lat,
                        longitude: t.lonC ? t.lonC : t.lon,
                        width: 34,
                        height: 38,
                        surplusMileage: t.surplusMileage,
                        callout: {
                            content: "可骑行" + t.surplusMileage + "公里",
                            bgColor: "#444",
                            color: "#fff",
                            borderRadius: 5,
                            padding: 8,
                            textAlign: "center",
                            borderWidth: 2,
                            borderColor: e.globalData.mainColor
                        }
                    };
                    a.push(i);
                }), n.lastMarkerId = null, n.setData({
                    markers: a,
                    polyline: []
                }), console.log("绘制车辆"));
            });
        });
    },
    _getProhibitArea: function(t, a, n) {
        var i = this, l = e.globalData.baseUrl + "prohibitArea/getByArea.do", s = {
            mapType: 2,
            lo: t,
            la: a,
            accountId: e.globalData.adAccountId,
            radius: 500
        };
        e.checkToken(function(t) {
            t.length > 0 && (s.token = t), o.request(l, s, function(t) {
                if (console.log(t), t.data.length > 0) {
                    var a = [], e = [];
                    t.data.forEach(function(t, o) {
                        var n = "";
                        n = "/images/map/jintingqu@3x.png";
                        var i = {
                            id: o,
                            accountId: t.accountId,
                            prohibitAreaId: t.prohibitAreaId,
                            iconPath: n,
                            latitude: t.laC ? t.laC : t.la,
                            longitude: t.loC ? t.loC : t.lo,
                            width: 26,
                            height: 36
                        };
                        if (a.push(i), t.pointsC && 1 == t.prohibitAreaType) {
                            for (var l = t.pointsC.split(";"), s = l.length, r = [], c = 0; c < s; c++) {
                                var u = l[c].split(","), g = {
                                    latitude: u[1],
                                    longitude: u[0]
                                };
                                r.push(g);
                            }
                            var d = {
                                points: r,
                                fillColor: "#ff223366",
                                strokeColor: "#ff22339a",
                                strokeWidth: 2,
                                zIndex: -9
                            };
                            e.push(d);
                        }
                    }), console.log("禁停区渲染：", n, i.data.showType), n == i.data.showType ? i.setData({
                        markers: a,
                        polygon: e.concat(i.data.polygonArea)
                    }) : i.setData({
                        polygon: i.data.polygonArea
                    }), console.log("禁停区个数:", i.data.polygon.length);
                }
            });
        });
    },
    markerChange: function(a) {
        var e = this, o = this.data.markers, i = o[a].height + 10, l = o[a].width + 10, s = "markers[" + a + "].height", r = "markers[" + a + "].width", c = "markers[" + a + "].callout.display";
        if (void 0 != this.lastMarkerId && null != this.lastMarkerId) {
            var u, g = "markers[" + this.lastMarkerId + "].height", d = "markers[" + this.lastMarkerId + "].width", h = "markers[" + this.lastMarkerId + "].callout.display";
            this.setData((u = {}, t(u, s, i), t(u, r, l), t(u, c, "ALWAYS"), t(u, g, i - 10), 
            t(u, d, l - 10), t(u, h, "BYCLICK"), u));
        } else {
            var p;
            this.setData((p = {}, t(p, s, i), t(p, r, l), t(p, c, "ALWAYS"), p));
        }
        this.lastMarkerId = a, n.getQQWalkingRoute(o[a], function(t) {
            e.setData({
                polyline: t
            });
        });
    },
    exAnimation: function(t) {
        var a = this, e = wx.createAnimation({});
        "up" == t ? e.translateY(0).step({
            duration: 150
        }) : "down" == t && e.translateY("100%").step({
            duration: 0
        }), a.setData({
            animation: e.export()
        });
    },
    showControlsByIsUsing: function(t, a) {
        var n = this;
        e.checkToken(function(i) {
            if (i.length > 0) {
                var l = e.globalData.baseUrl + "machine/getBorrowing.do", s = {
                    token: i
                };
                clearTimeout(n.borrowBikeTimer), n.borrowBikeTimer = null, o.request(l, s, function(l) {
                    if (void 0 != l.data && 0 != l.data.length) {
                        n.isBorrow = !0, n.borrowBikeTimer = setTimeout(function() {
                            n.showControlsByIsUsing(!0, a);
                        }, 3e4), t || (console.log("借车"), n.showTypeAlter(2, a));
                        var s = e.globalData.baseUrl + "park/getByUserId.do", r = {
                            token: i
                        };
                        o.request(s, r, function(t) {
                            void 0 != t.data && 0 != t.data.length ? n.setControls(!0, !0, l.data) : n.setControls(!0, !1, l.data);
                        });
                    } else n.borrowBikeTimer && (clearTimeout(n.borrowBikeTimer), n.borrowBikeTimer = null), 
                    n.isBorrow = !1, n.setControls(!1), t || (console.log("无借车"), n.showTypeAlter(1, a));
                });
            } else n.isBorrow = !1, n.setControls(!1), n.showTypeAlter(1, a);
        });
    },
    judgeUserState: function() {
        var t = this;
        return clearTimeout(this.borrowBikeTimer), this.borrowBikeTimer = null, new Promise(function(a, n) {
            e.checkToken(function(i) {
                if (i.length > 0) {
                    var l = e.globalData.baseUrl + "machine/getBorrowing.do", s = {
                        token: i
                    };
                    o.request(l, s, function(l) {
                        if (void 0 != l.data && 0 != l.data.length) {
                            a("isBorrowing"), t.borrowBikeTimer = setTimeout(function() {
                                t.judgeUserState();
                            }, 3e4);
                            var s = e.globalData.baseUrl + "park/getByUserId.do", r = {
                                token: i
                            };
                            o.request(s, r, function(a) {
                                void 0 != a.data && 0 != a.data.length ? t.setControls(!0, !0, l.data) : t.setControls(!0, !1, l.data);
                            });
                        } else t.setControls(!1), n("noBorrowing");
                    });
                } else t.setControls(!1), n("logout");
            });
        });
    },
    setControls: function(t, a, n) {
        var i = this;
        e.getSystemInfo(function(l) {
            if (t) {
                var s = o.formatTime(new Date());
                console.log(n.startTime, s, o.timeDifference(o.isTimeUndefined(n.startTime), s)), 
                e.globalData.machineNO = n.machineNO;
                var r = "";
                n.machineNO.length > 9 && (r = n.machineNO.substring(n.machineNO.length - 9, n.machineNO.length));
                var c = (Number(n.money) / 100).toFixed(2);
                a ? i.setData({
                    showView: !0,
                    isPark: !1,
                    isRide: !0,
                    time: o.timeDifference(o.isTimeUndefined(n.startTime), s),
                    machineNO: n.machineNO,
                    longMachineNO: r,
                    mileage: n.mileage + "km",
                    money: c + "元"
                }) : i.setData({
                    showView: !0,
                    isPark: !0,
                    isRide: !1,
                    time: o.timeDifference(o.isTimeUndefined(n.startTime), s),
                    machineNO: n.machineNO,
                    longMachineNO: r,
                    mileage: n.mileage + "km",
                    money: c + "元",
                    stopTime: parseFloat(n.stopTime / 60).toFixed(0),
                    stopTimeBase: parseFloat(n.stopTime / 60).toFixed(0)
                });
            } else i.setData({
                showView: !1
            });
        });
    },
    contact: function() {
        var t = this;
        e.checkToken(function(a) {
            if (a.length > 0) {
                var n = e.globalData.baseUrl + "account/getPhone.do", i = {
                    token: a
                };
                o.request(n, i, function(a) {
                    a.data.adPhone && 0 != a.data.adPhone.length ? t.phoneFormat(a.data.adPhone) : t.phoneFormat(a.data.phone);
                });
            } else t.phoneFormat(t.phone);
        });
    },
    phoneFormat: function(t) {
        if (t && "" != t) {
            var a = /((400|800)[-| ]?[0-9]{3}[-| ]?[0-9]{4})|(1(3|4|7|5|8|9)[0-9]{9})|((0[0-9]{2,3})?[-| ]?[0-9]{7,8})/, e = /[0-9]{1,2}[:|：]{1}[0-9]{1,2}[-]?[0-9]{1,2}[:|：]{1}[0-9]{1,2}/, o = [];
            t.split(";").forEach(function(t) {
                var n = t.match(a), i = t.match(e), l = {
                    phone: null == n ? "" : n[0],
                    time: null == i ? "" : i[0]
                };
                o.push(l);
            }), this.setData({
                phoneList: o,
                showContact: !0
            });
        } else wx.showToast({
            title: "暂无设置客服电话",
            icon: "none"
        });
    },
    returnBike: function() {
        var t = this;
        console.log("user:", e.globalData.userInfo), this.dispatchMachine(function(a, n) {
            t.dispatchType = a, console.log("user:", e.globalData.userInfo), t.bikeOperate.returnBike(n, a, function(e, i) {
                if ("timeout" == e) t.operateType = 3, t.bluetoothOperate(); else if ("success" == e) {
                    "" !== n && void 0 === n.longitude || (void 0 !== n.longitude ? "小程序网络还车成功(手机位置)" : "小程序网络还车成功(设备位置第二次)"), 
                    t.setData({
                        showView: !1
                    }), t.toOrder();
                } else "-3008" == e ? (t.operateType = 3, t.bluetoothOperate()) : "-3004" == e ? o.showModal("余额不足，请先充值！", function() {
                    t.noBalance(i, a);
                }) : "-3006" == e && t.matchState("change");
            });
        });
    },
    continueRide: function() {
        var t = this;
        this.bikeOperate.continueRide(function(a) {
            a ? (t.operateType = 2, t.bluetoothOperate()) : e.checkToken(function(a) {
                var n = e.globalData.baseUrl + "machine/getBorrowing.do", i = {
                    token: a
                };
                o.request(n, i, function(a) {
                    if (void 0 != a.data && 0 != a.data.length) {
                        var e = o.formatTime(new Date());
                        t.setData({
                            time: o.timeDifference(o.isTimeUndefined(a.data.startTime), e),
                            mileage: a.data.mileage + "km",
                            money: (Number(a.data.money) / 100).toFixed(2) + "元",
                            stopTimeBase: parseFloat(a.data.stopTime / 60).toFixed(0),
                            stopTime: parseFloat(a.data.stopTime / 60).toFixed(0),
                            isPark: !0,
                            isRide: !1
                        });
                    }
                });
            });
        });
    },
    toOrder: function() {
        var t = e.globalData.baseUrl + "rideLog/queryPage.do";
        wx.showToast({
            title: "正在查询订单",
            icon: "loading",
            mask: !0
        }), e.checkToken(function(a) {
            if (a.length > 0) {
                var n = {
                    token: a,
                    rowCount: 1,
                    pageNO: 1
                };
                o.request(t, n, function(t) {
                    wx.hideToast(), e.globalData.historyItem = t.data[0], wx.navigateTo({
                        url: "../historyOrder/historicalTrack/historicalTrack?action=order"
                    });
                });
            }
        });
    },
    parkRide: function() {
        var t = this;
        this.bikeOperate.tempPark(function(a) {
            a ? t.setData({
                isPark: !1,
                isRide: !0
            }) : (t.operateType = 1, t.bluetoothOperate());
        });
    },
    dispatchMachine: function(t) {
        var a = this;
        console.log("调度"), wx.showToast({
            title: "正在查询",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), e.checkToken(function(e) {
            e.length > 0 && wx.getLocation({
                type: "gcj02",
                success: function(o) {
                    a._dispatchOperate(t, o, e);
                },
                fail: function(e) {
                    wx.hideToast(), wx.showModal({
                        title: "",
                        content: "获取手机位置失败，请重试！",
                        confirmText: "重试",
                        success: function(e) {
                            e.confirm && a.dispatchMachine(t);
                        }
                    });
                }
            });
        });
    },
    _dispatchOperate: function(t, a, n) {
        var i = this, l = e.globalData.baseUrl + "dispatch/check.do", s = {
            token: n,
            mapType: 2
        };
        void 0 != a && "" != a && (s.lo = a.longitude, s.la = a.latitude), o.request(l, s, function(e) {
            if (wx.hideToast(), e.ret) {
                var o = 0;
                void 0 !== e.data.money && (o = (Number(e.data.money) / 100).toFixed(2));
                var n = e.data.type;
                switch (console.log("调度情况：" + n + "，2不支持调度，不在还车点，3支持调度，不在运营区域还车，4支持调度，不在站点还车点"), 
                n) {
                  case 1:
                    t(n, a);
                    break;

                  case 2:
                    t(n, a), i.getLastPark();
                    break;

                  case 3:
                    0 == i.data.modelType ? wx.showModal({
                        title: "温馨提示",
                        content: "您目前不在运营区，请移到还车点(P点)还车，强制还车需要支付调度费用" + o + "元。",
                        confirmText: "强制还车",
                        confirmColor: "#65ae56",
                        cancelText: "导航",
                        success: function(e) {
                            e.confirm ? t && t(n, a) : i.getLastPark();
                        }
                    }) : wx.showModal({
                        title: "温馨提示",
                        content: "您目前不在运营区，强制还车需要支付调度费用" + o + "元。",
                        confirmText: "强制还车",
                        confirmColor: "#65ae56",
                        success: function(e) {
                            e.confirm && t && t(n, a);
                        }
                    });
                    break;

                  case 4:
                    0 == i.data.modelType ? wx.showModal({
                        title: "温馨提示",
                        content: "您目前不在站点，请骑到还车点(P点)还车，强制还车需要支付调度费用" + o + "元。",
                        confirmText: "强制还车",
                        confirmColor: "#65ae56",
                        cancelText: "导航",
                        success: function(e) {
                            e.confirm ? t && t(n, a) : i.getLastPark();
                        }
                    }) : wx.showModal({
                        title: "温馨提示",
                        content: "您目前在禁停区内，请骑到非禁停区还车，强制还车需要支付调度费用" + o + "元。",
                        confirmText: "强制还车",
                        confirmColor: "#65ae56",
                        success: function(e) {
                            e.confirm && t && t(n, a);
                        }
                    });
                }
            } else "-3006" == e.code && i.matchState("change");
        });
    },
    getLastPark: function(t) {
        var a = this;
        e.checkToken(function(n) {
            n.length > 0 && e.getLocationInfo("gcj02", function(i) {
                var l = e.globalData.baseUrl + "parkPoint/getPark.do", s = {
                    token: n,
                    lo: i.longitude,
                    la: i.latitude,
                    mapType: 2,
                    accountId: e.globalData.accountId
                };
                o.request(l, s, function(e) {
                    if (e.ret && void 0 != e.data) {
                        console.log(e, a.data.markers);
                        for (var o = e.data, n = a.data.markers, l = n.length, s = 0; s < l; s++) if (n[s].parkPointId == o.parkPointId) {
                            a.markerChange(s), a.mapCtx.includePoints({
                                points: [ i, {
                                    longitude: o.loC,
                                    latitude: o.laC
                                } ],
                                padding: [ 60 ]
                            });
                            break;
                        }
                        t && t();
                    }
                });
            });
        });
    },
    noBalance: function(t, a) {
        var n = this;
        wx.showToast({
            title: "请稍候...",
            icon: "loading",
            mask: !0,
            duration: 2e3
        });
        e.checkToken(function(i) {
            console.log("user:", e.globalData.userInfo), i.length > 0 && wx.login({
                success: function(l) {
                    if (l.code) {
                        var s = e.globalData.baseUrl + "weixinPay/createOrder_weixin.do", r = {
                            token: i,
                            deposit: !1,
                            money: t,
                            code: l.code,
                            rechargeType: 3,
                            dispatchType: a,
                            adAccountId: e.globalData.adAccountId
                        };
                        o.request(s, r, function(t) {
                            var a = JSON.parse("{" + t.data.replace(/'/g, '"') + "}");
                            wx.requestPayment({
                                timeStamp: a.timeStamp,
                                nonceStr: a.nonceStr,
                                package: a.package,
                                signType: "MD5",
                                paySign: a.paySign,
                                success: function(t) {
                                    n.bikeOperate.getOrderStatus(function(t) {
                                        if ("timeout" == t) n.operateType = 3, n.bluetoothOperate(); else if ("success" == t) {
                                            n.toOrder();
                                        }
                                    });
                                },
                                fail: function(t) {}
                            });
                        });
                    }
                }
            });
        });
    },
    retry: function() {
        this.setData({
            flag: !1
        }), this.bluetoothOperate();
    },
    bluetoothOperate: function() {
        var t = this;
        wx.openBluetoothAdapter({
            success: function(a) {
                1 == t.operateType ? t.bikeOperate.openLock("1", function() {
                    t.setData({
                        isPark: !1,
                        isRide: !0
                    });
                }) : 2 == t.operateType ? t.bikeOperate.openLock("2", function() {
                    t.setData({
                        isPark: !0,
                        isRide: !1
                    });
                }) : 3 == t.operateType && t.bikeOperate.openLock("3", function() {
                    t.setData({
                        showView: !1
                    }), toOrder();
                }, t.dispatchType);
            },
            fail: function(a) {
                console.log(a), "10001" != a.errCode && "10008" != a.errCode || t.setData({
                    flag: !0
                });
            }
        });
    },
    cancel: function(t) {
        e.bluetooth.end(), this.setData({
            flag: !1
        });
    },
    markertap: function(t) {
        var a = t.markerId;
        this.markerChange(a);
    },
    changeShowType: function(t) {
        var a = t.currentTarget.dataset.type;
        this.showTypeAlter(a, "change");
    },
    tabMap: function() {
        if (void 0 != this.lastMarkerId && null != this.lastMarkerId) {
            var a, e = this.data.markers, o = e[this.lastMarkerId].height - 10, n = e[this.lastMarkerId].width - 10, i = "markers[" + this.lastMarkerId + "].height", l = "markers[" + this.lastMarkerId + "].width", s = "markers[" + this.lastMarkerId + "].callout.display";
            this.setData((a = {}, t(a, i, o), t(a, l, n), t(a, s, "BYCLICK"), t(a, "polyline", []), 
            a)), this.lastMarkerId = null;
        }
    },
    scanCode: function() {
        var t = this;
        e.globalData.autoAction = "scan", this.checkUserStatus().then(function() {
            wx.scanCode({
                success: function(t) {
                    var a = t.result;
                    if (0 == a.length) wx.showModal({
                        title: "提示",
                        content: "未识别到内容，请重新扫描!",
                        showCancel: !1,
                        success: function(t) {}
                    }); else {
                        var o = /\d{6,}/, n = a.match(o);
                        if (console.log("内部扫描内容:", a, n), n) {
                            var i = n[0];
                            e.globalData.machineNO = i, wx.navigateTo({
                                url: "../machineStatus/machineStatus?machineNO=" + i
                            });
                        } else wx.showToast({
                            title: "无效二维码",
                            icon: "none"
                        });
                    }
                }
            });
        }, function() {
            wx.hideToast(), t.stillOutSideCode = !0;
        });
    },
    showExtraMenu: function() {
        var t = this;
        e.checkToken(function(a) {
            a.length > 0 ? t.setData({
                showEx: !0
            }) : wx.navigateTo({
                url: "../login/login"
            });
        });
    },
    moveTo: function() {
        this.mapCtx.moveToLocation();
    },
    refresh: function() {
        wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0,
            duration: 1500
        }), this.loadParksOrCars(this.data.centerLongitude, this.data.centerLatitude);
    },
    tipCancel: function(t) {
        this.setData({
            tipDialog: !1
        });
    },
    tipConfirm: function(t) {
        this.noBalance(this.data.noBalanceData), this.setData({
            tipDialog: !1
        });
    },
    hideEx: function() {
        this.setData({
            showEx: !1
        });
    },
    hideContactEx: function() {
        this.setData({
            showContact: !1
        });
    },
    knownTap: function() {
        this.setData({
            guideDialog: !1
        });
    },
    activityCancel: function() {
        wx.setStorageSync("showActivity", !1), this.setData({
            showActivity: !1
        });
    },
    phoneCall: function(t) {
        var a = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    toSearch: function() {
        this.data.isInGeo && this.mapCtx.getCenterLocation({
            success: function(t) {
                wx.chooseLocation({
                    latitude: t.latitude,
                    longitude: t.longitude,
                    success: function(t) {
                        wx.navigateTo({
                            url: "../map/targetMap/targetMap?aim=" + JSON.stringify(t)
                        });
                    }
                });
            }
        });
    },
    toMyInfo: function() {
        var t = e.globalData.userInfo;
        console.log(e.globalData.userInfo), t ? wx.navigateTo({
            url: "../myInfo/myInfo"
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    toInstructions: function() {
        wx.navigateTo({
            url: "../instructions/instructions"
        });
    },
    toFault: function() {
        wx.navigateTo({
            url: "../fault/fault"
        });
    },
    toHelp: function() {
        wx.navigateTo({
            url: "../help/help"
        });
    },
    toAdvice: function() {
        wx.navigateTo({
            url: "../advice/advice"
        });
    },
    toApplyPoint: function() {
        wx.navigateTo({
            url: "../applyPoint/applyPoint"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "",
            path: "/pages/map/map",
            success: function(t) {},
            fail: function(t) {}
        };
    }
});