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

var _myService = require("./../../service/api/myService.js");

var _footer = require("./../../components/tool/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _util = require("./../../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _api = require("./../../service/api/api.js");

var _backHome = require("./../../components/backHome.js");

var _backHome2 = _interopRequireDefault(_backHome);

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

var moduleList = function(_wepy$page) {
    _inherits(moduleList, _wepy$page);
    function moduleList() {
        var _ref;
        var _temp, _this2, _ret;
        _classCallCheck(this, moduleList);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = moduleList.__proto__ || Object.getPrototypeOf(moduleList)).call.apply(_ref, [ this ].concat(args))), 
        _this2), _this2.props = {}, _this2.components = {
            toolFooter: _footer2.default,
            net: _net2.default,
            backHome: _backHome2.default
        }, _this2.data = {
            indexData: {},
            loaded: false
        }, _this2.events = {}, _this2.watch = {}, _this2.methods = {
            goDetail: function goDetail(val) {
                if (val.catalog == "cjdk") {
                    wx.navigateTo({
                        url: "/pages/myService/video?id=" + val.id + "&catalog=" + val.catalog
                    });
                } else {
                    wx.navigateTo({
                        url: "/pages/myService/artice?id=" + val.id + "&catalog=" + val.catalog
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }
    _createClass(moduleList, [ {
        key: "onShow",
        value: function onShow() {
            wx.showNavigationBarLoading();
            this.getIndex();
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage(res) {
            var shareObj = {
                title: "用心专为您的投资",
                path: _util2.default.getCurrentPageUrlWithArgs(),
                imageUrl: _util2.default.getShareRandomImg(),
                success: function success(res) {
                    if (res.errMsg == "shareAppMessage:ok") {
                        (0, _api.APP_SHARE_COUNT)({
                            params: {
                                behavior: "share"
                            }
                        });
                        Tips.success("分享成功");
                    }
                },
                fail: function fail(res) {
                    if (res.errMsg == "shareAppMessage:fail cancel") {} else if (res.errMsg == "shareAppMessage:fail") {}
                }
            };
            return shareObj;
        }
    }, {
        key: "getIndex",
        //获取非定制栏目信息
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res, _this;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _myService.productIndex)();

                          case 2:
                            res = _context.sent;
                            _this = this;
                            wx.hideNavigationBarLoading();
                            if (res.code == 0) {
                                this.loaded = true;
                                this.indexData = res.data;
                                this.$apply();
                            }

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getIndex() {
                return _ref2.apply(this, arguments);
            }
            return getIndex;
        }()
    } ]);
    return moduleList;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(moduleList, "pages/myService/moduleList"));