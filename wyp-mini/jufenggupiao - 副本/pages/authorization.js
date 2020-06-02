Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _wepy = require("./../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _process = require("./../service/process.js");

var _process2 = _interopRequireDefault(_process);

var _api = require("./../service/api/api.js");

var _net = require("./../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _util = require("./../service/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    }, function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _tarGlobalPage = "/pages/index";

var middle = function(_wepy$page) {
    _inherits(middle, _wepy$page);
    function middle() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, middle);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = middle.__proto__ || Object.getPrototypeOf(middle)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.config = {
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#1E82D2",
                navigationBarTextStyle: "#fff",
                backgroundColor: "#1E82D2"
            }
        }, _this.components = {
            net: _net2.default
        }, _this.data = {
            canIUse: wx.canIUse("button.open-type.getUserInfo"),
            isAuthStatus: false
        }, _this.events = {}, _this.watch = {}, _this.methods = {
            bindGetUserInfo: function bindGetUserInfo(e) {
                var _this2 = this;
                if (e.detail.userInfo) {
                    var _t = null;
                    this.$parent.globalData.userInfo = e.detail.userInfo;
                    var interval = setInterval(function() {
                        _t = wx.getStorageSync("token");
                        if (_t) {
                            _this2.saveUserInfo(e.detail.userInfo);
                            wx.redirectTo({
                                url: _tarGlobalPage
                            });
                            clearInterval(interval);
                        }
                    }, 300);
                } else {
                    wx.showModal({
                        title: "提示",
                        content: "拒绝授权将不能体验小程序完整功能",
                        showCancel: false,
                        success: function success() {}
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(middle, [ {
        key: "onLoad",
        value: function onLoad(options) {
            wx.hideShareMenu();
            if (options.page) {
                _tarGlobalPage = wx.shareOptionsWithUrl ? _util2.default.urlEncode(options.page, wx.shareOptionsWithUrl) : options.page;
            }
            wx.shareOptionsWithUrl = null;
            this.isAuthinspect();
        }
    }, {
        key: "isAuthinspect",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var authInfo, res, _d;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _process2.default.isAuthorization();

                          case 2:
                            authInfo = _context.sent;
                            if (!authInfo) {
                                _context.next = 7;
                                break;
                            }
                            wx.redirectTo({
                                url: _tarGlobalPage
                            });
                            _context.next = 16;
                            break;

                          case 7:
                            this.isAuthStatus = true;
                            _context.next = 10;
                            return _process2.default.wxLogin();

                          case 10:
                            res = _context.sent;
                            if (!res.isOk) {
                                _context.next = 16;
                                break;
                            }
                            _context.next = 14;
                            return (0, _api.getToken)({
                                params: {
                                    code: res.code
                                }
                            });

                          case 14:
                            _d = _context.sent;
                            if (_d.code == 0) {
                                console.log("old token", wx.getStorageSync("token"));
                                wx.setStorageSync("token", _d.data);
                                console.log("new token", wx.getStorageSync("token"));
                                // 首次新用户分享统计
                                                                (0, _api.APP_START_COUNT)({
                                    params: {
                                        equipment: wx.getSystemInfoSync().system.toLowerCase().startsWith("android") ? "Android" : "iPhone"
                                    }
                                });
                            }

                          case 16:
                            this.$apply();
                            console.log("是否授权", authInfo);

                          case 18:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function isAuthinspect() {
                return _ref2.apply(this, arguments);
            }
            return isAuthinspect;
        }()
    }, {
        key: "saveUserInfo",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(data) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return (0, _api.saveWxUserInfo)({
                                params: data
                            });

                          case 2:
                            res = _context2.sent;

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function saveUserInfo(_x) {
                return _ref3.apply(this, arguments);
            }
            return saveUserInfo;
        }()
    } ]);
    return middle;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(middle, "pages/authorization"));