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
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), app = getApp(), myAccount = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), u = 0; u < s; u++) o[u] = arguments[u];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "我的账户",
            backgroundColor: "#fff"
        }, r.components = {}, r.data = {
            stu_name: "",
            stu_area: "",
            stu_grade: "",
            stu_avatar: "",
            accountList: [],
            stu_number: "",
            firstNumber: "",
            secondNumber: "",
            threeNumber: "",
            isBtn: !0
        }, r.computed = {}, r.methods = {
            tochange: function(e) {
                var t = this, a = wx.getStorageSync("weChatExpress") || {};
                a.stu_number = e.card, a.area_name = e.city, a.area_code = e.city_id, a.grade_name = e.grd_name, 
                a.grade = e.gradeID, a.stu_id = e.stu_id, a.name = e.username, wx.setStorageSync("weChatExpress", a), 
                this.stu_name = wx.getStorageSync("weChatExpress").name || "", this.stu_area = wx.getStorageSync("weChatExpress").area_name || "", 
                this.stu_grade = wx.getStorageSync("weChatExpress").grade_name || "", this.stu_number = wx.getStorageSync("weChatExpress").stu_number || "", 
                this.firstNumber = this.stu_number.substring(0, 4), this.secondNumber = this.stu_number.substring(4, 8), 
                this.threeNumber = this.stu_number.substring(8, 12);
                var r = wx.getStorageSync("userInfoStatus") || {};
                r.stu_number = e.card, r.area_name = e.city, r.area_code = e.city_id, r.grade_name = e.grd_name, 
                r.grade = e.gradeID, r.stu_id = e.stu_id, r.name = e.username, wx.setStorageSync("userInfoStatus", r), 
                wx.showLoading({
                    mask: !0
                });
                var n = _path2.default.userRelateChange, s = {
                    client_type: 6,
                    devid: wx.getStorageSync("openid")
                }, o = {
                    token: wx.getStorageSync("user-token") || "",
                    target_uid: e.uid
                };
                app.XesAnalyticsMP.track("132-1950"), (0, _common.axios)({
                    url: n,
                    data: o,
                    header: s
                }).then(function(e) {
                    var a = e.data;
                    if (a && a.data && 0 === a.error_code) {
                        wx.hideLoading();
                        var r = a.data.current_user.token, n = wx.getStorageSync("weChatExpress") || {};
                        n.token = r, wx.setStorageSync("weChatExpress", n), wx.setStorageSync("user-token", r), 
                        t.getUserRelateList(), _wepy2.default.$instance.globalData.accountNeedBack && (_wepy2.default.$instance.globalData.accountNeedBack = !1, 
                        wx.navigateBack({
                            delta: 1
                        })), t.$apply();
                    } else wx.hideLoading(), wx.showToast({
                        title: a.error_msg,
                        icon: "none",
                        duration: 2e3
                    });
                });
            },
            goToInfo: function() {
                app.XesAnalyticsMP.track("132-1799"), wx.navigateTo({
                    url: "/pages/personcenter/info"
                });
            },
            toAdd: function() {
                wx.navigateTo({
                    url: "/pages/familyAccount/addAccount"
                });
            },
            copy: function() {
                this.stu_number && wx.setClipboardData({
                    data: this.stu_number,
                    success: function(e) {
                        wx.showToast({
                            title: "复制成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                });
            }
        }, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {}
    }, {
        key: "onShow",
        value: function() {
            this.stu_avatar = wx.getStorageSync("weChatExpress").avatar || "http://static-xesapi.speiyou.cn/1524642003100.png", 
            this.stu_name = wx.getStorageSync("weChatExpress").name || "", this.stu_area = wx.getStorageSync("weChatExpress").area_name || "", 
            this.stu_grade = wx.getStorageSync("userInfoStatus").grade_name || "", this.stu_number = wx.getStorageSync("weChatExpress").stu_number || "", 
            this.firstNumber = this.stu_number.substring(0, 4), this.secondNumber = this.stu_number.substring(4, 8), 
            this.threeNumber = this.stu_number.substring(8, 12), this.getUserRelateList();
        }
    }, {
        key: "getUserRelateList",
        value: function() {
            var e = this;
            this.isBtn = !0;
            var t = _path2.default.userRelateList, a = {
                client_type: 6,
                devid: wx.getStorageSync("openid")
            }, r = {
                token: wx.getStorageSync("weChatExpress").token || ""
            };
            (0, _common.axios)({
                url: t,
                data: r,
                header: a
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code ? (e.accountList = a.data, e.accountList.forEach(function(t, a) {
                    t.avatar || (e.accountList[a].avatar = "http://static-xesapi.speiyou.cn/1524642003100.png");
                }), e.accountList && 5 === e.accountList.length && (e.isBtn = !1, e.$apply()), e.$apply()) : wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(myAccount, "pages/familyAccount/myAccount"));