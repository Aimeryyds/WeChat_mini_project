function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, s) {
                try {
                    var o = t[r](s), i = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _comDetails = require("./../../../components/ClassDetail/comDetails.js"), _comDetails2 = _interopRequireDefault(_comDetails), _newDetails = require("./../../../components/NewClassDetail/newDetails.js"), _newDetails2 = _interopRequireDefault(_newDetails), _ABTest = require("./../../../common/util/ABTest.js"), ClassDetailOffline = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), i = 0; i < s; i++) o[i] = arguments[i];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationBarTitleText: "课程详情",
            backgroundColor: "#F4F5F6",
            backgroundTextStyle: "dark"
        }, n.components = {
            ComDetails: _comDetails2.default,
            NewDetails: _newDetails2.default
        }, n.data = {
            isLoad: !1,
            timer: null,
            areaCode: "",
            classId: "",
            ABTest: !1
        }, n.methods = {}, n.events = {}, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShareAppMessage",
        value: function() {
            return {
                path: "/pages/classlist/classdetail/offline?areaCode=" + this.areaCode + "&classId=" + this.classId + "&from=share&route=share"
            };
        }
    }, {
        key: "getDetailValue",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = wx.getStorageSync("userInfoStatus") || {}, a = wx.getStorageSync("weChatExpress") || {};
            return e && e.areaCode && e.classId ? (this.areaCode = e.areaCode, void (this.classId = e.classId)) : t && t.area_code && e.classId ? (this.areaCode = t.area_code, 
            void (this.classId = e.classId)) : void (a && a.area_code && e.classId && (this.areaCode = a.area_code, 
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
                var a, n, r, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = _wepy2.default.$instance.globalData.ABTestConfig.classDetail.experiment, 
                        n = _wepy2.default.$instance.globalData.ABTestConfig.classDetail.groupId) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, (0, _ABTest.getABtest)("classDetail");

                      case 5:
                        n = _wepy2.default.$instance.globalData.ABTestConfig.classDetail.groupId;

                      case 6:
                        this.ABTest = a === n, this.$apply(), this.isLoad ? (r = this.ABTest ? "onload-event-new" : "onload-event", 
                        this.$broadcast(r, t, "offline")) : (s = this.ABTest ? "onshow-event-new" : "onshow-event", 
                        this.$broadcast(s, "offline")), this.getDetailValue(t);

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

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(ClassDetailOffline, "pages/classlist/classdetail/offline"));