(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/changePhone/changePhone", "components/range-slider/range-slider" ], {
    1080: function(e, t, n) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    "10e9": function(e, t, n) {
        n.r(t);
        var a = n("1080"), i = n("cab1");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("b578");
        var r = n("f0c5"), u = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    1548: function(e, t, n) {},
    "2d41": function(e, t, n) {
        n.r(t);
        var a = n("4f74"), i = n("62e8");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("f186");
        var r = n("f0c5"), u = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    "31c2": function(e, t, n) {
        (function(e) {
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n("5f18")), o = a(n("733e"));
            a(n("2d41")), getApp();
            var r = {
                data: function() {
                    return {
                        time1: "获取验证码",
                        time2: "获取验证码",
                        currentTime1: 61,
                        currentTime2: 61,
                        areaIndex: 0,
                        areaList: [],
                        areaNum: [],
                        userName: "",
                        phoneNum: "",
                        yzmInput1: "",
                        yzmInput2: "",
                        xqInput: "",
                        yzmimgValue: "",
                        yzmimgInput1: "",
                        yzmimgInput2: "",
                        yzmPhone1: "",
                        yzmPhone2: "",
                        errInfo: "",
                        errImg: [],
                        dxyzm: "",
                        cityNum: [],
                        yzmNum: !0,
                        flag: !1,
                        clickNum: 1,
                        bg_con: "",
                        disable_con: !1,
                        mobileNum: "",
                        present_phoneNum: "",
                        user_id: "",
                        token: "",
                        newPhone: !1,
                        oldPhone: !0,
                        inputVal: "",
                        indetify1: !0,
                        indetify2: !1,
                        indetify3: !0,
                        indetify4: !1,
                        phoneNumInput: "",
                        disabled1: !1,
                        disabled2: !1
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "租的省心,住得舒心",
                        imageUrl: "../../images/share_img.png",
                        path: "pages/index/index"
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    e.getStorage({
                        key: "userMobile",
                        success: function(e) {
                            console.log(e.data), n.present_phoneNum = e.data;
                        }
                    }), e.getStorage({
                        key: "userId",
                        success: function(e) {
                            console.log(e.data), n.user_id = e.data;
                        }
                    });
                },
                components: {},
                props: {},
                methods: {
                    new_phoneNumInput: function(e) {
                        this.phoneNumInput = e.detail.value;
                    },
                    new_yzmimgInput1: function(e) {
                        this.yzmimgInput1 = e.detail.value;
                    },
                    new_yzmimgInput2: function(e) {
                        this.yzmimgInput2 = e.detail.value;
                    },
                    new_yzmInput1: function(e) {
                        4 == e.detail.value.toString().length ? (this.bg_con = "#3DBCC6", this.disable_con = !1) : (this.bg_con = "#9EDDE2", 
                        this.disable_con = !1), this.yzmInput1 = e.detail.value;
                    },
                    new_yzmInput2: function(e) {
                        4 == e.detail.value.toString().length ? (this.bg_con = "#3DBCC6", this.disable_con = !1) : (this.bg_con = "#9EDDE2", 
                        this.disable_con = !1), this.yzmInput2 = e.detail.value;
                    },
                    getVerificationCode1: function(e) {
                        var t = this;
                        this.yzmimgValue = "", this.errImg = [], t.yzmNum = !1;
                        var n = t.present_phoneNum;
                        "" == t.present_phoneNum ? (t.errInfo = "", t.errInfo = "手机号不能为空", t.errInfo = t.errInfo) : /^1[3456789]\d{9}$/.test(n) ? (t.errInfo = "", 
                        t.disabled1 = !0, t.getCode1(), t.sendText1()) : (t.errInfo = "", t.errInfo = "手机号码格式不正确");
                    },
                    getVerificationCode2: function(e) {
                        var t = this;
                        this.yzmimgValue = "", this.errImg = [], t.yzmNum = !0;
                        var n = t.phoneNumInput;
                        "" == t.phoneNumInput ? (t.errInfo = "", t.errInfo = "手机号不能为空") : /^1[345678]\d{9}$/.test(n) ? (t.errInfo = "", 
                        t.getCode2(), t.disabled2 = !0, t.sendText2()) : (t.errInfo = "", t.errInfo = "手机号码格式不正确");
                    },
                    getCode1: function(e) {
                        var t = this, n = setInterval(function() {
                            t.currentTime1--, t.time1 = "重新发送(" + t.currentTime1 + "秒)", t.currentTime1 <= 0 && (clearInterval(n), 
                            t.time1 = "重新发送", t.currentTime1 = 61, t.disabled1 = !1);
                        }, 1e3);
                    },
                    getCode2: function(e) {
                        var t = this, n = setInterval(function() {
                            t.currentTime2--, t.time2 = "重新发送" + t.currentTime2 + "秒", t.currentTime2 <= 0 && (clearInterval(n), 
                            t.time2 = "重新发送", t.currentTime2 = 61, t.disabled2 = !1);
                        }, 1e3);
                    },
                    sendText1: function() {
                        var t = this;
                        (0, o.default)(i.default.url + "/web-api/wechat-applets/send-text-verify-code", {
                            city_id: "",
                            mobile: t.present_phoneNum,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            city_id: "",
                            app_id: "wx024695259e1a68cb",
                            mobile: t.present_phoneNum
                        }).then(function(n) {
                            console.log(n), "验证码发送频繁" == n.data.msg ? (t.flag = !0, t.yzmImage1()) : e.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 3e3
                            });
                        });
                    },
                    sendText2: function() {
                        var t = this;
                        (0, o.default)(i.default.url + "/web-api/wechat-applets/send-text-verify-code", {
                            city_id: "",
                            mobile: t.phoneNumInput,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            city_id: "",
                            app_id: "wx024695259e1a68cb",
                            mobile: t.phoneNumInput
                        }).then(function(n) {
                            console.log(n), "验证码发送频繁" == n.data.msg ? (t.flag = !0, t.yzmImage2()) : e.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 3e3
                            });
                        });
                    },
                    yzmqd1: function(e) {
                        var t = this, n = this;
                        n.errImg = [], (0, o.default)(i.default.url + "/web-api/wechat-applets/img-code", {
                            city_id: "",
                            mobile: n.present_phoneNum,
                            verify_code: n.yzmimgInput1,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }).then(function(e) {
                            console.log(e), e.data.success ? (t.flag = !1, n.sendText1()) : (n.yzmImage1(), 
                            n.errImg = [], n.errImg.push(e.data.msg), n.errImg = n.errImg, n.yzmImage1());
                        });
                    },
                    yzmqd2: function(e) {
                        var t = this, n = this;
                        n.errImg = [], (0, o.default)(i.default.url + "/web-api/wechat-applets/img-code", {
                            city_id: "",
                            mobile: n.present_phoneNum,
                            verify_code: n.yzmimgInput2,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }).then(function(e) {
                            e.data.success ? (t.flag = !0, n.sendText2()) : (n.yzmImage1(), n.errImg = [], n.errImg.push(e.data.msg), 
                            n.errImg = n.errImg, n.yzmImage2());
                        });
                    },
                    yzmImage1: function() {
                        var e = this;
                        e.yzmPhone1 = i.default.url + "/get-img-code/75/30?mobile=" + e.present_phoneNum + "&time=" + new Date().getTime();
                    },
                    yzmImage2: function() {
                        var e = this;
                        e.yzmPhone2 = i.default.url + "/get-img-code/75/30?mobile=" + e.phoneNumInput + "&time=" + new Date().getTime();
                    },
                    changeImg1: function() {
                        this.yzmImage1();
                    },
                    changeImg2: function() {
                        this.yzmImage2();
                    },
                    confirm1: function() {
                        var t = this, n = t.present_phoneNum, a = t.yzmInput1;
                        "" == n ? (t.errInfo = "", t.errInfo = "手机号不能为空") : "" == a ? (t.errInfo = "", t.errInfo = "验证码不能为空") : /^1[345678]\d{9}$/.test(n) ? (t.errInfo = "", 
                        (0, o.default)(i.default.url + "/web-api/wechat-applets/verify-change-code", {
                            mobile: t.present_phoneNum,
                            code: t.yzmInput1,
                            user_id: t.user_id,
                            type: 1,
                            city_id: "",
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            city_id: "",
                            app_id: "wx024695259e1a68cb",
                            user_id: t.user_id
                        }).then(function(n) {
                            console.log(n), n.data.success ? (t.token = n.data.data.token, t.newPhone = !0, 
                            t.oldPhone = !1, t.inputVal = "", t.indetify1 = !1, t.indetify2 = !0) : e.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 3e3
                            });
                        })) : (t.errInfo = "", t.errInfo = "手机号码格式不正确");
                    },
                    confirm2: function() {
                        var t = this, n = t.phoneNumInput, a = t.yzmInput2;
                        "" == n ? (t.errInfo = "", t.errInfo = "手机号不能为空") : "" == a ? (t.errInfo = "", t.errInfo = "验证码不能为空") : /^1[345678]\d{9}$/.test(n) ? (t.errInfo = "", 
                        (0, o.default)(i.default.url + "/web-api/wechat-applets/verify-change-code", {
                            mobile: t.phoneNumInput,
                            code: t.yzmInput2,
                            user_id: t.user_id,
                            type: 2,
                            city_id: "",
                            token: t.token,
                            mobile_old: t.present_phoneNum,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            city_id: "",
                            app_id: "wx024695259e1a68cb",
                            user_id: t.user_id
                        }).then(function(n) {
                            console.log(n), n.data.success ? (e.setStorage({
                                key: "userMobile",
                                data: t.phoneNumInput
                            }), e.setStorage({
                                key: "userNickname",
                                data: n.data.data.mobile
                            }), setTimeout(function() {
                                e.reLaunch({
                                    url: "../user/user"
                                });
                            }, 2e3)) : e.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 3e3
                            });
                        })) : (t.errInfo = "", t.errInfo = "手机号码格式不正确");
                    },
                    phonenum: function() {
                        e.makePhoneCall({
                            phoneNumber: "4001-551-551",
                            success: function() {
                                console.log("拨打电话成功！");
                            },
                            fail: function() {
                                console.log("拨打电话失败！");
                            }
                        });
                    }
                },
                computed: {},
                watch: {}
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    "4f74": function(e, t, n) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    "62e8": function(e, t, n) {
        n.r(t);
        var a = n("a573"), i = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    },
    "9f20": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("e027"), t(n("66fd")), e(t(n("10e9")).default);
        }).call(this, n("543d").createPage);
    },
    a573: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e.getSystemInfoSync().windowWidth, a = {
                data: function() {
                    return {
                        MAX_LENGTH: 700,
                        maxBlockLeft: 350,
                        minBlockLeft: 0,
                        progressBarLeft: 0,
                        progressBarWidth: 350
                    };
                },
                components: {},
                props: {
                    width: {
                        type: Number,
                        default: 750
                    },
                    height: {
                        type: Number,
                        default: 100
                    },
                    blockSize: {
                        type: Number,
                        default: 50
                    },
                    barHeight: {
                        type: Number,
                        default: 5
                    },
                    backgroundColor: {
                        type: String,
                        default: "#e9e9e9"
                    },
                    activeColor: {
                        type: String,
                        default: "#1aad19"
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    values: {
                        type: Array,
                        default: function() {
                            return [ 0, 100 ];
                        }
                    }
                },
                created: function() {
                    this._refresh();
                },
                onLoad: function(e) {
                    this._refresh();
                },
                onUnload: function() {},
                watch: {
                    width: function(e, t, n) {
                        e != this.width && this._refresh();
                    },
                    blockSize: function(e, t, n) {
                        e != this.blockSize && this._refresh();
                    },
                    min: function(e, t, n) {
                        var a = this;
                        e != a.min && a._refresh();
                    },
                    max: function(e, t, n) {
                        var a = this;
                        e != a.max && a._refresh();
                    },
                    values: function(e, t, n) {
                        var a = this, i = a.values;
                        a._isValuesValid(e) && a._isValuesValid(i) && (i[0] == t[0] && i[1] == t[1] || a._refresh());
                    }
                },
                methods: {
                    _pxToRpx: function(e) {
                        return 750 * e / n;
                    },
                    _onBlockTouchStart: function(e) {
                        var t = e.target.dataset.tag;
                        "minBlock" != t && "maxBlock" != t || (e.hasOwnProperty("changedTouches") ? this._blockDownX = e.changedTouches[0].pageX : this._blockDownX = e.pageX, 
                        this._blockLeft = e.target.dataset.left, this._curBlock = e.target.dataset.tag);
                    },
                    _onBlockTouchMove: function(e) {
                        var t = e.target.dataset.tag;
                        if ("minBlock" == t || "maxBlock" == t) {
                            var n = this, a = n._calculateValues(e);
                            n._refreshProgressBar(a[2], a[3]), n._refreshBlock(a[2], a[3]);
                            var i = {
                                minValue: a[0],
                                maxValue: a[1],
                                fromUser: !0
                            }, o = {};
                            n.$emit("rangechange", i, o);
                        }
                    },
                    _onBlockTouchEnd: function(e) {
                        var t = e.target.dataset.tag;
                        if ("minBlock" == t || "maxBlock" == t) {
                            var n = this, a = n._calculateValues(e.mp.changedTouches[0]);
                            n._refreshProgressBar(a[2], a[3]), n._refreshBlock(a[2], a[3]);
                            var i = {
                                minValue: a[0],
                                maxValue: a[1],
                                fromUser: !0
                            }, o = {};
                            n.$emit("rangechange", i, o);
                        }
                    },
                    _isValuesValid: function(e) {
                        return null != e && void 0 != e && 2 == e.length;
                    },
                    _calculateValues: function(e) {
                        var t = e.pageX;
                        e.hasOwnProperty("changedTouches") && (t = e.changedTouches[0].pageX);
                        var n = this, a = t - n._blockDownX, i = n._blockLeft + n._pxToRpx(a);
                        i = Math.max(0, i), i = Math.min(i, n.MAX_LENGTH);
                        var o = n.minBlockLeft, r = n.maxBlockLeft;
                        "minBlock" == n._curBlock ? o = i : r = i;
                        var u = n.max - n.min, c = Math.min(o, r), s = Math.max(o, r);
                        return [ c / n.MAX_LENGTH * u + n.min, s / n.MAX_LENGTH * u + n.min, c, s ];
                    },
                    _calculateBlockLeft: function(e, t) {
                        var n = this, a = (n.blockSize, n.max - n.min);
                        return [ (e - n.min) / a * n.MAX_LENGTH, (t - n.min) / a * n.MAX_LENGTH ];
                    },
                    _refreshProgressBar: function(e, t) {
                        var n = this, a = n.blockSize;
                        n.progressBarLeft = e + a / 2, n.progressBarWidth = Math.abs(t - e);
                    },
                    _refreshBlock: function(e, t) {
                        var n = this;
                        n.minBlockLeft = e, n.maxBlockLeft = t;
                    },
                    _refresh: function() {
                        console.log("refresh");
                        var e = this, t = e.width - e.blockSize;
                        e.MAX_LENGTH = t, e.maxBlockLeft = t, e.progressBarWidth = t;
                        var n = e.values;
                        if (e._isValuesValid(n)) {
                            n[0] = Math.max(e.min, n[0]), n[0] = Math.min(n[0], e.max), n[1] = Math.max(e.min, n[1]), 
                            n[1] = Math.min(n[1], e.max);
                            var a = e._calculateBlockLeft(n[0], n[1]);
                            e._refreshProgressBar(a[0], a[1]), e._refreshBlock(a[0], a[1]);
                        }
                    }
                }
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    b578: function(e, t, n) {
        var a = n("1548");
        n.n(a).a;
    },
    c08f: function(e, t, n) {},
    cab1: function(e, t, n) {
        n.r(t);
        var a = n("31c2"), i = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    },
    f186: function(e, t, n) {
        var a = n("c08f");
        n.n(a).a;
    }
}, [ [ "9f20", "common/runtime", "common/vendor" ] ] ]);