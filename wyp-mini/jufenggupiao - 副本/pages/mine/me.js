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

var _wepy = require("./../../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require("./../../service/api/api.js");

var _util = require("./../../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _process = require("./../../service/process.js");

var _process2 = _interopRequireDefault(_process);

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

var mine = function(_wepy$page) {
    _inherits(mine, _wepy$page);
    function mine() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, mine);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mine.__proto__ || Object.getPrototypeOf(mine)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "我的",
            usingComponents: {
                "i-icon": "../ui/icon/index"
            }
        }, _this.components = {
            net: _net2.default
        }, _this.data = {
            user: null,
            userType: {},
            isload: false
        }, _this.computed = {}, _this.methods = {
            goSdx: function goSdx() {
                var _url = _util2.default.urlEncode("/pages/webpage", {
                    weburl: "https://wv.tougub.com/evaluation2/" + (this.userType.isExist ? "sign_5" : "sign_1")
                });
                wx.navigateTo({
                    url: _url
                });
            },
            jump: function jump(e) {
                wx.navigateTo({
                    url: e.currentTarget.dataset.page
                });
            },
            callTel: function callTel() {
                wx.makePhoneCall({
                    phoneNumber: "400-633-5058"
                });
            }
        }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(mine, [ {
        key: "onShow",
        value: function onShow() {
            this.getUserType();
        }
    }, {
        key: "onLoad",
        value: function onLoad() {
            wx.hideShareMenu();
            var that = this;
            wx.getUserInfo({
                success: function success(res) {
                    if (res.errMsg == "getUserInfo:ok") {
                        that.user = JSON.parse(res.rawData);
                    }
                    that.$apply();
                },
                fail: function fail(error) {}
            });
        }
        // 获取用户风险类型基本信息
        }, {
        key: "getUserType",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _api.getUserInvestmentType)();

                          case 2:
                            res = _context.sent;
                            this.isload = true;
                            this.userType = res.data;
                            this.$apply();

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getUserType() {
                return _ref2.apply(this, arguments);
            }
            return getUserType;
        }()
    } ]);
    return mine;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(mine, "pages/mine/me"));