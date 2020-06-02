function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, o) {
                try {
                    var i = t[r](o), s = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _newCommon = require("./../../common/util/newCommon.js"), _common = require("./../../common/util/common.js"), _gradeSelect = require("./../../components/Commons/gradeSelect.js"), _gradeSelect2 = _interopRequireDefault(_gradeSelect), _citySelect = require("./../../components/Commons/citySelect.js"), _citySelect2 = _interopRequireDefault(_citySelect), _form = require("./../../components/familyAccount/form.js"), _form2 = _interopRequireDefault(_form), app = getApp(), myAccount = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "添加学员"
        }, n.$repeat = {}, n.$props = {
            chooseForm: {
                "xmlns:v-bind": "",
                "v-bind:name.sync": "userName",
                "v-bind:city.sync": "city",
                "v-bind:grade.sync": "grade",
                "v-bind:isMan.sync": "sex",
                "xmlns:v-on": ""
            },
            gradeSelect: {
                "v-bind:isShow.sync": "showGradeSelect",
                "v-bind:currentGradeId.sync": "currentGradeId",
                "v-bind:gradeList.sync": "gradeList"
            },
            citySelect: {
                "v-bind:isShow.sync": "showCitySelect",
                "v-bind:currentCityInfo.sync": "cityInfo",
                "v-bind:cityList.sync": "cityList"
            }
        }, n.$events = {
            chooseForm: {
                "v-on:selectCity": "getCity",
                "v-on:selectGrade": "getGrade",
                "v-on:nameChange": "getUserName",
                "v-on:sexChange": "getSex"
            },
            gradeSelect: {
                "v-on:submit": "getGrade"
            },
            citySelect: {
                "v-on:submit": "getCity"
            }
        }, n.components = {
            chooseForm: _form2.default,
            gradeSelect: _gradeSelect2.default,
            citySelect: _citySelect2.default
        }, n.data = {
            userName: "",
            showGradeSelect: !1,
            showCitySelect: !1,
            currentGradeId: "",
            gradeInfo: {
                gradeId: "",
                gradeName: "请选择年级"
            },
            cityInfo: {
                city_code: "",
                city_name: "请选择城市",
                default: "myAccount"
            },
            gradeList: [],
            cityList: [],
            city: "",
            grade: "",
            gradeName: "",
            showName: !0,
            isHas: !0,
            stuName: "",
            sex: null,
            password: ""
        }, n.computed = {
            canSubmit: function() {
                return this.stuName && this.password;
            },
            canPass: function() {
                return this.userName && this.grade && this.city && this.sex;
            }
        }, n.methods = {
            passChange: function(e) {
                this.password = e.detail.value;
            },
            numberChange: function(e) {
                this.stuName = e.detail.value;
            },
            getUserName: function(e) {
                var t = this;
                this.userName = e;
                var a = setTimeout(function() {
                    clearTimeout(a), t.$apply();
                }, 100);
            },
            getSex: function(e) {
                this.sex = e, this.$apply();
            },
            submission: function() {
                var e = this;
                if (this.isHas) {
                    var t = _wepy2.default.$instance.globalData.RSA, a = _wepy2.default.$instance.globalData.publicKey;
                    if (!this.stuName || !this.password) return;
                    wx.showLoading({
                        mask: !0
                    });
                    var n = _path2.default.userRelateBind, r = this.password, o = t.KEYUTIL.getKey(a), i = o.encrypt(r);
                    i = t.hex2b64(i);
                    var s = {
                        token: wx.getStorageSync("weChatExpress").token || "",
                        target_login_name: this.stuName,
                        target_pass: i || ""
                    };
                    app.XesAnalyticsMP.track("132-1798"), (0, _common.axios)({
                        url: n,
                        data: s
                    }).then(function() {
                        var t = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                            var n, r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n = a.data, n && n.data && 0 === n.error_code ? (wx.hideLoading(), 0 === Number(n.data.info) ? (r = wx.getStorageSync("pagePath") || {}, 
                                    r.url = "account", wx.setStorageSync("pagePath", r), wx.redirectTo({
                                        url: "/pages/loginRelevant/cityclass?stuToken=" + n.data.token
                                    })) : wx.navigateBack({
                                        delta: 1
                                    })) : (wx.hideLoading(), wx.showToast({
                                        title: n.error_msg,
                                        icon: "none",
                                        duration: 1e3
                                    }));

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, t, e);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }());
                } else {
                    var c = _path2.default.userRelateAdd;
                    if (!(this.userName && this.gradeInfo.gradeId && this.cityInfo.city_code && this.sex)) return;
                    if (this.userName.length < 2) return wx.showToast({
                        title: "姓名太短，至少需要2个字符",
                        icon: "none",
                        duration: 1e3
                    });
                    wx.showLoading({
                        mask: !0
                    });
                    var u = {
                        token: wx.getStorageSync("weChatExpress").token || "",
                        user_name: this.userName || "",
                        grid_id: this.gradeInfo.gradeId || "",
                        area_code: this.cityInfo.city_code || "",
                        sex: this.sex + ""
                    };
                    app.XesAnalyticsMP.track("132-1797"), (0, _common.axios)({
                        url: c,
                        data: u
                    }).then(function() {
                        var t = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n = a.data, n && n.data && 0 === n.error_code ? (wx.hideLoading(), wx.showToast({
                                        title: "添加成功",
                                        icon: "none",
                                        duration: 2e3
                                    }), console.log("res", n), wx.navigateBack({
                                        delta: 1
                                    })) : (wx.hideLoading(), wx.showToast({
                                        title: n.error_msg,
                                        icon: "none",
                                        duration: 1e3
                                    }));

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, t, e);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }());
                }
            },
            getCity: function(e) {
                if (e) {
                    var t = e.area, a = e.name;
                    this.cityInfo.city_code = t, this.cityInfo.city_name = a, this.city = a, this.gradeInfo.gradeId = "", 
                    this.gradeInfo.gradeName = "请选择年级", this.grade = "", this.getGradeList();
                }
                this.showCitySelect = !this.showCitySelect, this.$apply();
            },
            getGrade: function(e) {
                if (e) {
                    var t = e.id, a = e.name;
                    this.gradeInfo.gradeId = t, this.gradeInfo.gradeName = a, this.grade = a;
                }
                this.showGradeSelect = !this.showGradeSelect, this.$apply();
            },
            checkTab: function(e) {
                "1" === e ? (this.isHas = !0, this.$apply()) : (this.isHas = !1, this.$apply()), 
                console.log("asdad", this.isHas);
            }
        }, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.defaultLoad();
        }
    }, {
        key: "defaultLoad",
        value: function() {
            this.getCityList(), this.getGradeList();
        }
    }, {
        key: "getGradeList",
        value: function() {
            var e = this, t = _path2.default.new_gradelists, a = wx.getStorageSync("weChatExpress") || {}, n = this.cityInfo.city_code || a.area_code, r = {
                area_code: n,
                data_format: 1
            };
            (0, _common.axios)({
                url: t,
                data: r
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code ? a.data.rlt.length ? (e.gradeList = a.data.rlt, 
                e.$apply()) : wx.showToast({
                    title: "没有找到城市对应的年级",
                    icon: "none",
                    duration: 1e3
                }) : wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getCityList",
        value: function() {
            var e = this, t = _path2.default.getCityOfSecond;
            (0, _newCommon.newAxios)({
                url: t,
                method: "GET"
            }).then(function(t) {
                t = t || {};
                var a = t.data;
                a && 0 === t.status ? e.cityList = a : wx.showToast({
                    title: a.msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(myAccount, "pages/familyAccount/addAccount"));