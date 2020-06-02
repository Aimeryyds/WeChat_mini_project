function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, a) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" != typeof a && "function" != typeof a ? e : a;
}

function _inherits(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    e.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, _createClass = function() {
    function e(e, a) {
        for (var t = 0; t < a.length; t++) {
            var r = a[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(a, t, r) {
        return t && e(a.prototype, t), r && e(a, r), a;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), openCity = function(e) {
    function a() {
        var e, t, r, n;
        _classCallCheck(this, a);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return t = r = _possibleConstructorReturn(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "选择孩子当前年级",
            backgroundTextStyle: "dark",
            backgroundColor: "#FFFFFF",
            navigationBarTextStyle: "black"
        }, r.data = {
            anonymous: "",
            note: "",
            isChecked: !1,
            gradeArray: [],
            gradeName: [],
            itemGradeId: null,
            isActive: !1,
            isSHOW: !1,
            areainfo: {},
            gradeInfo: {}
        }, r.methods = {
            getGradeId: function(e) {
                if (this.itemGradeId !== e.grd_id) {
                    this.gradeInfo = e, this.anonymous = _extends({}, this.gradeInfo, this.areainfo), 
                    this.setWeChatExpress(), this.mergeAnonymousInfo();
                    var a = this.areainfo.default, t = {
                        grid: e.grd_id
                    };
                    return "cityclass" === a ? void wx.navigateBack({
                        delta: 1
                    }) : "info" === a || "classDetail" === a ? void this.changeGrade(t) : void this.setTouristInfo();
                }
            }
        }, n = t, _possibleConstructorReturn(r, n);
    }
    return _inherits(a, e), _createClass(a, [ {
        key: "setWeChatExpress",
        value: function() {
            var e = wx.getStorageSync("weChatExpress") || {}, a = this.anonymous, t = a.city_code, r = a.city_name, n = a.grd_id, o = a.grd_name;
            e.area_code = t, e.area_name = r, e.grade = n, e.grade_name = o, console.log("存储4", e), 
            wx.setStorageSync("weChatExpress", e);
        }
    }, {
        key: "setTouristInfo",
        value: function() {
            var e = this.anonymous, a = wx.getStorageSync("openid"), t = _path2.default.setinfo, r = {
                open_id: a,
                grade_id: e.grd_id,
                grade_name: e.grd_name,
                area_code: e.city_code,
                area_name: e.city_name
            };
            (0, _common.axios)({
                url: t,
                data: r
            }).then(function(e) {
                var a = e.data;
                if (a && a.data && 0 === a.error_code) {
                    var t = a.data.set_result ? "游客模式设置成功" : "游客模式设置失败";
                    wx.setStorageSync("TouristStatus", t), wx.redirectTo({
                        url: "/pages/classlist/classlist"
                    });
                } else wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 1e3
                });
            });
        }
    }, {
        key: "onLoad",
        value: function(e) {
            e && "{}" !== JSON.stringify(e) && (this.areainfo = JSON.parse(e.cityInfo), this.rememberPath(this.areainfo), 
            this.getGradeList());
        }
    }, {
        key: "mergeAnonymousInfo",
        value: function() {
            var e = this.anonymous, a = {
                city: e.city_name,
                city_code: e.city_code,
                grade_id: e.grd_id,
                grade: e.grd_name
            };
            app.XesAnalyticsMP.setProfile(a);
        }
    }, {
        key: "rememberPath",
        value: function(e) {
            e.default && wx.setStorageSync("entry", this.areainfo.default);
        }
    }, {
        key: "defineActive",
        value: function() {
            var e = this.areainfo.default;
            if ("info" === e || "classDetail" === e) {
                var a = wx.getStorageSync("userInfoStatus");
                return this.itemGradeId = a.grade, void this.$apply();
            }
            var t = wx.getStorageSync("weChatExpress"), r = t.grade;
            this.itemGradeId = r, this.$apply();
        }
    }, {
        key: "getGradeList",
        value: function() {
            var e = this, a = null, t = _path2.default.new_gradelists, r = wx.getStorageSync("weChatExpress") || {}, n = r.area_code, o = {
                area_code: this.areainfo.city_code || n,
                data_format: 1
            };
            clearTimeout(a), (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: t,
                data: o
            }).then(function(t) {
                var r = t.data;
                if (r && r.data && 0 === r.error_code) if (r.data.rlt.length) {
                    e.note = r.data.note;
                    var n = r.data.rlt || [];
                    e.gradeArray = [], n.forEach(function(a, t) {
                        var r = {};
                        r[t] = {
                            id: a[t].id,
                            name: a[t].name
                        }, "[object Array]" === toString.call(a.grades) && (r.data = [], a.grades.forEach(function(e) {
                            var n = {};
                            n.grd_id = e.id, n.grd_name = e.name, n.cla_gt_id = a[t].id, n.cla_gt_name = a[t].name, 
                            n.grd_custom_name = e.name, r.data.push(n);
                        })), e.gradeArray.push(r);
                    }), e.gradeArray.forEach(function(a) {
                        a.data.forEach(function(a) {
                            e.gradeName.push(a.grd_custom_name);
                        });
                    }), e.defineActive(), e.$apply();
                } else wx.showToast({
                    title: "没有找到城市对应的年级",
                    icon: "none",
                    duration: 1e3
                }), e.areainfo || (a = setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3)); else wx.showToast({
                    title: r.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "changeGrade",
        value: function(e) {
            var a = this, t = a.gradeInfo, r = "学员年级将修改成" + t.grd_custom_name;
            wx.showModal({
                title: "提示",
                content: r,
                success: function(r) {
                    r.confirm && a.requestChangeGradea(e, t);
                }
            });
        }
    }, {
        key: "requestChangeGradea",
        value: function(e, a) {
            var t = this, r = _path2.default.changeGrade, n = e, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, o)) && (0, _common.axios)({
                url: r,
                data: n,
                header: o
            }).then(function(e) {
                var r = e.data;
                r && (t.checkChangeGrade(r, a), t.gradeTrack(r), wx.navigateBack({
                    delta: 1
                }), t.itemGradeId = a.grd_id, t.$apply());
            });
        }
    }, {
        key: "checkChangeGrade",
        value: function(e, a) {
            if (!e.error_code) return void this.changeSuccess(a);
            this.changeFail();
        }
    }, {
        key: "changeSuccess",
        value: function(e) {
            var a = wx.getStorageSync("userInfoStatus"), t = wx.getStorageSync("weChatExpress"), r = {
                changedGrade: 1,
                refreshGrade: !0
            };
            wx.setStorageSync("changeGradeState", r), t.grade = e.grd_id, t.grade_name = e.grd_name, 
            console.log("存储5", t), wx.setStorageSync("weChatExpress", t), a && (a.grade = e.grd_id, 
            a.grade_name = e.grd_name, wx.setStorageSync("userInfoStatus", a));
        }
    }, {
        key: "changeFail",
        value: function() {
            var e = wx.getStorageSync("changeGradeState");
            e.changedGrade = 2, wx.setStorageSync("changeGradeState", e);
        }
    }, {
        key: "gradeTrack",
        value: function(e) {
            var a = {
                result_id: e.error_code,
                result_detail: e.error_msg ? e.error_msg : "成功"
            };
            app.sensors.track("changeGrade_result", a);
        }
    } ]), a;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(openCity, "pages/searchgrade/searchgrade"));