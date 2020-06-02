(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/weituo/weituo" ], {
    "0870": function(e, t, n) {
        var a = n("95c0");
        n.n(a).a;
    },
    "95c0": function(e, t, n) {},
    b53a: function(e, t, n) {
        n.r(t);
        var a = n("d8c5"), i = n("dfe8");
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("0870");
        var o = n("f0c5"), u = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    b905: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("e027"), t(n("66fd")), e(t(n("b53a")).default);
        }).call(this, n("543d").createPage);
    },
    c189: function(e, t, n) {
        (function(e) {
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n("5f18")), r = a(n("733e")), o = getApp(), u = {
                data: function() {
                    return {
                        time: "获取验证码",
                        currentTime: 61,
                        areaIndex: 0,
                        areaList: [],
                        areaNum: [],
                        userName: "",
                        phoneNum: "",
                        yzmInput: "",
                        xqInput: "",
                        yzmimgValue: "",
                        yzmimgInput: "",
                        errInfo: "",
                        errImg: [],
                        dxyzm: "",
                        current_cityNum: "",
                        yzmNum: !0,
                        flag: !1,
                        clickNum: 1,
                        disabled: !1,
                        yzmPhone: "",
                        confirm_bg: ""
                    };
                },
                onLoad: function() {
                    console.log("app", o), console.log(e.getStorageSync("cityNum_arr")), this.areaList = e.getStorageSync("cityName_arr"), 
                    this.areaNum = e.getStorageSync("cityNum_arr");
                },
                methods: {
                    bindPickerChange: function(e) {
                        this.areaIndex = e.target.value, this.current_cityNum = this.areaNum[e.target.value];
                    },
                    phoneNumInput: function(e) {
                        this.phoneNum = e.target.value;
                    },
                    getVerificationCode: function(e) {
                        this.yzmimgValue = "", this.errImg = [], this.yzmNum = !1, "" == this.phoneNum ? (this.errInfo = "", 
                        this.errInfo = "手机号码不能为空") : /^1[3456789]\d{9}$/.test(this.phoneNum) ? (this.errInfo = "", 
                        this.getCode(), this.disabled = !0, this.sendText()) : (this.errInfo = "", this.errInfo = "手机号码格式不正确");
                    },
                    getCode: function() {
                        var e = this, t = setInterval(function() {
                            e.currentTime--, e.time = e.currentTime + "秒", e.currentTime <= 0 && (clearInterval(t), 
                            e.time = "重新发送", e.currentTime = 61, e.disabled = !1);
                        }, 1e3);
                    },
                    sendText: function() {
                        var t = this;
                        (0, r.default)(i.default.url + "/web-api/wechat-applets/send-text-verify-code", {
                            app_id: "wx024695259e1a68cb",
                            city_id: "",
                            mobile: t.phoneNum
                        }, "POST", !1, {
                            app_id: "wx024695259e1a68cb",
                            city_id: "",
                            mobile: t.phoneNum
                        }).then(function(n) {
                            console.log(n), "验证码发送频繁" == n.data.msg ? (t.flag = !0, t.yzmImage()) : e.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 3e3
                            });
                        });
                    },
                    yzmImage: function() {
                        var e = this;
                        e.yzmPhone = i.default.url + "/get-img-code/75/30?mobile=" + e.phoneNum + "&time=" + new Date().getTime();
                    },
                    imgYzmInput: function(e) {
                        var t = this, n = e.detail.value;
                        5 == n.toString().length ? (t.confirm_bg = "#3DBCC6", t.hatdisable_con = !0) : 5 != n.toString().length && (t.confirm_bg = "#D8DBDF"), 
                        t.yzmimgInput = n;
                    },
                    yzmqd: function(e) {
                        var t = this, n = this;
                        n.errImg = [], (0, r.default)(i.default.url + "/web-api/wechat-applets/img-code", {
                            city_id: "",
                            mobile: n.phoneNum,
                            verify_code: n.yzmimgInput,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }).then(function(e) {
                            console.log(e), e.data.success ? (t.flag = !1, n.sendText()) : (n.errImg = [], n.yzmImage());
                        });
                    },
                    changeImg: function() {
                        this.yzmImage();
                    },
                    userNameInput: function(e) {
                        this.userName = e.target.value;
                    },
                    community: function(e) {
                        this.xqInput = e.target.value;
                    },
                    verification: function(e) {
                        this.yzmInput = e.target.value;
                    },
                    confirm: function() {
                        var t = this;
                        "" == t.userName ? (t.errInfo = "", t.errInfo = "姓名不能为空") : /[+=/￥()!^-_@#\$%\^&\* ]+/g.test(t.userName) ? (t.errInfo = "", 
                        t.errInfo = "姓名有非法字符") : "" == t.phoneNum ? (t.errInfo = "", t.errInfo = "手机号不能为空") : "" == t.yzmInput ? (t.errInfo = "", 
                        t.errInfo = "验证码不能为空") : "" == t.xqInput ? (t.errInfo = "", t.errInfo = "小区名称不能为空") : /^1[345678]\d{9}$/.test(t.phoneNum) ? (t.errInfo = "", 
                        (0, r.default)(i.default.url + "/web-api/wechat-applets/ajax-info", {
                            city_id: "",
                            mobile: t.phoneNum,
                            sms_code: t.yzmInput,
                            from_type: "index",
                            area_name: t.xqInput,
                            name: t.userName,
                            city: t.areaList[t.areaIndex],
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !0, {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }).then(function(n) {
                            console.log(n), n.data.success ? (o.sensors.track("Xcx_weituo", {
                                Xcx_weituo: "在线委托-成功提交"
                            }), e.navigateTo({
                                url: "../wtSuccess/wtSuccess"
                            })) : t.errInfo = n.data.msg;
                        })) : (t.errInfo = "", t.errInfo = "手机号码格式不正确");
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    d8c5: function(e, t, n) {
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
    dfe8: function(e, t, n) {
        n.r(t);
        var a = n("c189"), i = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = i.a;
    }
}, [ [ "b905", "common/runtime", "common/vendor" ] ] ]);