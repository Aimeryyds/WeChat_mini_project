function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _gohome = require("./../../components/GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _dist = require("./../../npm/xesEncrypt/dist/index.js"), _dist2 = _interopRequireDefault(_dist), app = getApp(), testlist = function(e) {
    function t() {
        var e, a, n, o;
        _classCallCheck(this, t);
        for (var r = arguments.length, s = Array(r), i = 0; i < r; i++) s[i] = arguments[i];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: "个人信息",
            navigationBarTextStyle: "black",
            backgroundTextStyle: "dark"
        }, n.$repeat = {}, n.$props = {
            GoHomeView: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            GoHomeView: _gohome2.default
        }, n.data = {
            studentInfo: {
                pic: "http://static-xesapi.speiyou.cn/1524642003100.png",
                realName: "",
                studentNum: "",
                cityName: "",
                gradeName: ""
            },
            tempFilePaths: [],
            defaultImg: "http://static-xesapi.speiyou.cn/1524642003100.png"
        }, n.methods = {
            errorImg: function(e) {
                this.studentInfo.pic = this.defaultImg;
            }
        }, o = a, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.mergeStudentInfo(), this.decideGradeStatus(), this.cleanPath();
        }
    }, {
        key: "mergeStudentInfo",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus");
            e && (this.studentInfo.realName = e.name, this.studentInfo.studentNum = e.stu_number, 
            this.studentInfo.cityName = e.area_name, this.studentInfo.gradeName = e.grade_name, 
            this.studentInfo.pic = e.head_img);
        }
    }, {
        key: "setChooseImgHeader",
        value: function() {
            var e = _wepy2.default.$instance.globalData.privateKey, t = {
                headers: {},
                formData: {
                    stu_id: wx.getStorageSync("userInfoStatus").stu_id
                }
            }, a = null;
            return t.headers = {
                "content-type": "application/x-www-form-urlencoded",
                version: "1.2.0",
                accessid: "mini",
                sign: "",
                authorization: wx.getStorageSync("user-token"),
                timestamp: _wepy2.default.$instance.globalData.RecordTimers,
                nonce: _dist2.default.nonce()
            }, a = _dist2.default.sign(t, e), t.headers.sign = a, t.headers;
        }
    }, {
        key: "chooseImg",
        value: function() {
            var e = this, t = this;
            wx.chooseImage({
                count: 1,
                success: function(a) {
                    wx.showLoading({
                        title: "正在上传",
                        mask: !0
                    }), wx.uploadFile({
                        url: _path2.default.uploadFileUrl,
                        header: e.setChooseImgHeader(),
                        filePath: a.tempFilePaths[0],
                        name: "photo",
                        formData: {
                            stu_id: wx.getStorageSync("userInfoStatus").stu_id
                        },
                        success: function(e) {
                            var a = e.data;
                            if (wx.hideLoading(), a = JSON.parse(a), 0 === a.error_code) return t.studentInfo.pic = a.data.avatar_url, 
                            t.updateUserInfo(t.studentInfo.pic), void t.$apply();
                            wx.showToast({
                                title: a.error_msg || "修改头像失败，请重试",
                                icon: "none",
                                duration: 2e3
                            });
                        },
                        fail: function() {
                            wx.hideLoading(), wx.showToast({
                                title: "修改头像失败，请重试",
                                icon: "none",
                                duration: 2e3
                            });
                        }
                    });
                }
            });
        }
    }, {
        key: "updateUserInfo",
        value: function(e) {
            var t = wx.getStorageSync("userInfoStatus");
            t.head_img = e, wx.setStorageSync("userInfoStatus", t);
        }
    }, {
        key: "changeGrade",
        value: function() {
            var e = {
                city_code: wx.getStorageSync("userInfoStatus").area_code,
                city_name: wx.getStorageSync("userInfoStatus").area_name,
                default: "info"
            };
            e = JSON.stringify(e), wx.navigateTo({
                url: "/pages/searchgrade/searchgrade?cityInfo=" + e,
                success: function() {
                    app.sensors.track("changeGrade", {
                        from: "个人信息"
                    });
                }
            });
        }
    }, {
        key: "decideGradeStatus",
        value: function() {
            var e = wx.getStorageSync("changeGradeState");
            e.changedGrade && (1 === e.changedGrade ? this.changeGradeSuccess() : 2 === e.changedGrade && this.changeGradeFail());
        }
    }, {
        key: "changeGradeSuccess",
        value: function() {
            var e = this;
            wx.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3,
                success: function(t) {
                    e.cleanGradeStatus();
                }
            });
        }
    }, {
        key: "changeGradeFail",
        value: function() {
            var e = this;
            wx.showModal({
                title: "请联系客服电话10108899修改",
                content: "抱歉，您已达到年级修改次数的上限",
                showCancel: !1,
                confirmText: "知道了",
                success: function(t) {
                    t.confirm && e.cleanGradeStatus();
                }
            });
        }
    }, {
        key: "cleanGradeStatus",
        value: function() {
            var e = wx.getStorageSync("changeGradeState");
            e.changedGrade = "", wx.setStorageSync("changeGradeState", e);
        }
    }, {
        key: "cleanPath",
        value: function() {
            "info" === wx.getStorageSync("entry") && wx.setStorageSync("entry", "");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(testlist, "pages/personcenter/info"));