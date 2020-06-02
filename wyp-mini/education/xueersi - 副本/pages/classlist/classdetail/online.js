function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, s) {
                try {
                    var o = t[r](s), i = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
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
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _comDetails = require("./../../../components/ClassDetail/comDetails.js"), _comDetails2 = _interopRequireDefault(_comDetails), _newDetails = require("./../../../components/NewClassDetail/newDetails.js"), _newDetails2 = _interopRequireDefault(_newDetails), _ABTest = require("./../../../common/util/ABTest.js"), ClassDetailOnline = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), i = 0; i < s; i++) o[i] = arguments[i];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "课程详情",
            backgroundColor: "#F4F5F6",
            backgroundTextStyle: "dark"
        }, a.components = {
            ComDetails: _comDetails2.default,
            NewDetails: _newDetails2.default
        }, a.data = {
            isLoad: !1,
            timer: null,
            areaCode: "",
            classId: "",
            ABTest: !1
        }, a.methods = {}, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShareAppMessage",
        value: function(e) {
            return {
                path: "/pages/classlist/classdetail/online?areaCode=" + this.areaCode + "&classId=" + this.classId + "&from=share&route=share"
            };
        }
    }, {
        key: "getDetailValue",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = wx.getStorageSync("userInfoStatus") || {}, n = wx.getStorageSync("weChatExpress") || {};
            return e && e.areaCode && e.classId ? (this.areaCode = e.areaCode, void (this.classId = e.classId)) : t && t.area_code && e.classId ? (this.areaCode = t.area_code, 
            void (this.classId = e.classId)) : void (n && n.area_code && e.classId && (this.areaCode = n.area_code, 
            this.classId = e.classId));
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {}
    }, {
        key: "abTestHandler",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, a, r, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = _wepy2.default.$instance.globalData.ABTestConfig.classDetail.experiment, 
                        a = _wepy2.default.$instance.globalData.ABTestConfig.classDetail.groupId) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, (0, _ABTest.getABtest)("classDetail");

                      case 5:
                        a = _wepy2.default.$instance.globalData.ABTestConfig.classDetail.groupId;

                      case 6:
                        this.ABTest = n === a, this.$apply(), this.isLoad ? (r = this.ABTest ? "onload-event-new" : "onload-event", 
                        this.$broadcast(r, t, "online")) : (s = this.ABTest ? "onshow-event-new" : "onshow-event", 
                        this.$broadcast(s, "online")), this.getDetailValue(t);

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "userModes",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.$instance.globalData.usersFunc();

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.isLoad = !0, e.next = 3, this.userModes();

                      case 3:
                        this.abTestHandler(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            this.isLoad || this.abTestHandler();
        }
    }, {
        key: "onHide",
        value: function() {
            this.isLoad = !1;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(ClassDetailOnline, "pages/classlist/classdetail/online"));