var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, t = require("utils/util.js"), e = require("utils/bluetooth-wx-jssdk2.0/bluetooth.js");

App({
    onLaunch: function() {
        var o = this.globalData.accountId, a = this.globalData.newServiceAccountId, n = !0, l = !1, c = void 0;
        try {
            for (var i, s = a[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) if (o == i.value) {
                this.globalData.serviceUrl = "https://client1.uqbike.cn/shared_bike_mp/";
                break;
            }
        } catch (o) {
            l = !0, c = o;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (l) throw c;
            }
        }
        var r = this, u = wx.getSystemInfoSync();
        r.globalData.mobileBrand = u.model, r.globalData.mobileOS = u.system, r.globalData.systemInfo = u;
        var g = u.SDKVersion.split(".");
        (g[0] < 2 || g[1] < 9) && t.showModal_nocancel("客户端基础库版本过低，请检查微信版本！"), console.log(r.globalData.mobileBrand + "," + r.globalData.mobileOS), 
        wx.login({
            success: function(o) {
                r.globalData.code = o.code;
            }
        }), this.bluetooth = new e();
    },
    initApp: function(e) {
        var a = this, n = this.globalData.initUrl, l = {
            accountId: this.globalData.accountId
        };
        t.request(n, l, function(n) {
            n.ret && void 0 != o(n.data) ? (console.log("色彩：", n.data.headColor + "," + n.data.mainColor + "," + n.data.textColor), 
            a.appForm(n.data), e && e(n.data)) : t.showModal_nocancel("无此定制品牌！");
        });
    },
    appForm: function(o) {
        try {
            var t = wx.getStorageSync("mainColor"), e = wx.getStorageSync("textColor"), a = wx.getStorageSync("headColor"), n = wx.getStorageSync("baseUrl"), l = wx.getStorageSync("phone"), c = wx.getStorageSync("name");
            0 != t.length && t == o.mainColor || (t = o.mainColor, wx.setStorageSync("mainColor", t)), 
            0 != e.length && e == o.textColor || (e = o.textColor, 314 != o.accountId && 315 != o.accountId || (e = "#000000"), 
            wx.setStorageSync("textColor", e)), 0 != a.length && a == o.headColor || (a = o.headColor, 
            wx.setStorageSync("headColor", a)), 0 != n.length && n == o.baseURL || (n = o.baseURL, 
            wx.setStorageSync("baseUrl", n)), 0 != l.length && l == o.phone || (l = o.phone, 
            wx.setStorageSync("phone", l)), 0 != c.length && c == o.name || (c = o.name, wx.setStorageSync("name", c)), 
            this.globalData.baseUrl = n + "/", this.globalData.mainColor = t, this.globalData.textColor = e, 
            this.globalData.headColor = a, this.globalData.phone = l, wx.setNavigationBarTitle({
                title: c
            });
        } catch (o) {
            console.log(o);
        }
    },
    getAdAccountId: function(o) {
        var t = this;
        this.getLocationInfo("gcj02", function(e) {
            t.returnAdAccountId(e, o);
        });
    },
    returnAdAccountId: function(o, e) {
        var a = this;
        this.checkToken(function(n) {
            var l = a.globalData.baseUrl + "adAccountDeposit/getByLocation.do", c = {
                accountId: a.globalData.accountId,
                lo: o.longitude,
                la: o.latitude,
                mapType: 2
            };
            n.length > 0 && (c.token = n), t.request(l, c, function(o) {
                o.ret ? (a.globalData.adAccountId = o.data.accountId, a.globalData.modelType = o.data.modelType ? o.data.modelType : 0, 
                a.globalData.pushNameAuth = void 0 != o.data.nameAuth ? o.data.nameAuth : 1, e && e()) : "-3050" == o.code && (t.showModal_nocancel(o.msg), 
                a.globalData.adAccountId = "", e && e());
            });
        });
    },
    initUserInfo: function(o) {
        var t = this;
        this.checkToken(function(e) {
            if (e.length > 0) {
                var a = t.globalData.baseUrl + "user/getByUserId.do", n = {
                    token: e
                };
                t.globalData.adAccountId && "" != t.globalData.adAccountId && (n.adAccountId = t.globalData.adAccountId), 
                wx.request({
                    url: a,
                    data: n,
                    method: "GET",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        (e = e.data).ret ? t.globalData.userInfo = e.data : "请先登录" == e.msg && (wx.setStorageSync("token", ""), 
                        t.globalData.userInfo = null), o && o();
                    }
                });
            }
        });
    },
    checkToken: function(o) {
        var t = "";
        try {
            t = wx.getStorageSync("token");
        } catch (o) {
            wx.showModal({
                content: o
            });
        }
        t.length > 0 ? (console.log("token存在", t), o && o(t)) : (console.log("token不存在"), 
        o && o(""));
    },
    lockAudio: function() {
        var o = this, t = wx.createInnerAudioContext();
        t.autoplay = !0, t.src = o.globalData.baseUrl + "audio/lock.mp3", t.onPlay(function() {
            console.log("锁车成功播放");
        });
    },
    unlockAudio: function() {
        var o = this, t = wx.createInnerAudioContext();
        t.autoplay = !0, t.src = o.globalData.baseUrl + "audio/unlock.mp3", t.onPlay(function() {
            console.log("开锁成功播放");
        });
    },
    getLocationInfo: function(o, t) {
        var e = this, a = this;
        wx.getLocation({
            type: o,
            success: function(o) {
                console.log("位置：" + JSON.stringify(o)), a.globalData.locationInfo = o, t(a.globalData.locationInfo);
            },
            fail: function(a) {
                wx.hideLoading(), wx.hideToast(), console.log("位置错误：", a), a.errMsg.indexOf("fail auth deny") > -1 || a.errMsg.indexOf("fail authorize no") > -1 ? (console.log("拒绝授权定位"), 
                wx.showModal({
                    title: "温馨提示",
                    content: "请在小程序设置中开打位置授权。",
                    confirmText: "重试",
                    success: function(a) {
                        a.confirm && e.getLocationInfo(o, t);
                    }
                })) : 2 == a.errCode || a.errMsg.indexOf("ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF") > -1 ? (console.log("没有开启定位服务"), 
                wx.showModal({
                    title: "温馨提示",
                    content: "请打开手机定位。",
                    confirmText: "重试",
                    success: function(a) {
                        a.confirm && e.getLocationInfo(o, t);
                    }
                })) : (a.errMsg.indexOf("fail:system permission") > -1 || a.errMsg.indexOf("fail system permission") > -1) && (console.log("系统禁止定位获取"), 
                wx.showModal({
                    title: "温馨提示",
                    content: "微信地理位置访问权限被禁用。",
                    confirmText: "重试",
                    success: function(a) {
                        a.confirm && e.getLocationInfo(o, t);
                    }
                }));
            },
            complete: function() {}
        });
    },
    getSystemInfo: function(o) {
        var t = this;
        this.globalData.res_system ? o(this.globalData.res_system) : wx.getSystemInfo({
            success: function(e) {
                t.globalData.res_system = e, o(t.globalData.res_system);
            }
        });
    },
    isAuth: function(o) {
        var t = this, e = wx.getStorageSync("third_session");
        0 == e.length ? t.login(function(e) {
            t.getAccountInfo(e, o);
        }) : t.getAccountInfo(e, o);
    },
    getAccountInfo: function(o, t) {
        var e = this;
        this.globalData.account ? t(this.globalData.account) : wx.request({
            url: e.glabalData.baseUrl + "account/getBySessionKey.do",
            data: {
                sessionKey: o
            },
            method: "GET",
            success: function(o) {
                console.log("account信息（认证，金额，时间）：" + JSON.stringify(o)), "request:ok" == o.errMsg ? (e.globalData.account = o.data.data, 
                t && t(e.globalData.account)) : console.log("获取认证状态失败：" + o.errMsg);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    operateBluetooth: function(o, t, e) {
        var a = this;
        this.getSecretKey(t).then(function(n) {
            a.bluetooth.start(o, n.machineNO, n.secret, function(o) {
                a.saveLog(t, a.globalData.mobileBrand, a.globalData.mobileOS, JSON.stringify(a.bluetooth.getLog())), 
                console.log(a.bluetooth.getMachinevoltage()), e && e(o);
            });
        });
    },
    saveLog: function(o, t, e, a, n) {
        var l = this;
        console.log(a), this.checkToken(function(c) {
            var i = l.globalData.baseUrl + "debug/addLog.do", s = {
                machineNO: o,
                mobileBrand: t,
                mobileOS: e,
                remark: a,
                token: c
            };
            wx.request({
                url: i,
                data: s,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(o) {
                    "200" == o.statusCode && (o.data.ret ? (console.log("日志上传成功！"), n && n()) : console.log(o.data.msg));
                },
                fail: function(o) {
                    wx.showModal(o);
                },
                complete: function(o) {}
            });
        });
    },
    getSecretKey: function(o) {
        var e = this;
        return new Promise(function(a, n) {
            var l = e.globalData.baseUrl + "/machine/getBleSecret.do";
            e.checkToken(function(e) {
                if (e.length > 0) {
                    var n = {
                        token: e,
                        userCode: o
                    };
                    t.request(l, n, function(o) {
                        console.log("获取的秘钥", o.data), a(o.data);
                    });
                } else wx.hideToast();
            });
        });
    },
    globalData: {
        baseUrl: "",
        mainColor: "",
        textColor: "",
        headColor: "",
        phone: "",
        version: "v2.2.8",
        initUrl: "https://client.uqbike.cn/mpBrand/getByAccountId.do",
        accountId: 78,
        imagesUrl: "https://client.uqbike.cn/shared_bike_mp/images/",
        serviceUrl: "https://client.uqbike.cn/shared_bike_mp/",
        userInfo: null,
        locationInfo: null,
        res_system: null,
        account: null,
        mobileBrand: "",
        mobileOS: "",
        systemInfo: null,
        sequenceId_heart_16: "",
        btId: "",
        repeatConnetTip: !1,
        machineNO: "",
        connected: !1,
        code: null,
        areaLocation: null,
        areaCity: null,
        areaPolygon: null,
        firstRender: !0,
        displayAD: !0,
        adAccountId: "",
        autoAction: null,
        modelType: 0,
        pushNameAuth: 1,
        boundImage: [],
        isScanCode: !1,
        newServiceAccountId: [ 10, 10264, 10258, 10203, 348, 10327, 10328, 10456, 10466 ]
    }
});