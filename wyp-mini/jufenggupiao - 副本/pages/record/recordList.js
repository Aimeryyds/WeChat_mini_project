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

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _loadFooter = require("./../../components/loadFooter.js");

var _loadFooter2 = _interopRequireDefault(_loadFooter);

var _util = require("./../../service/util.js");

var _util2 = _interopRequireDefault(_util);

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

var Index = function(_wepy$page) {
    _inherits(Index, _wepy$page);
    function Index() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Index);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "战绩回顾",
            usingComponents: {
                "i-icon": "../ui/icon/index"
            },
            onReachBottomDistance: 68,
            enablePullDownRefresh: true
        }, _this.$repeat = {}, _this.$props = {
            loadFooter: {
                "xmlns:v-bind": "",
                "v-bind:loadComplete.sync": "isCom",
                "v-bind:curStatus.sync": "isMore"
            }
        }, _this.$events = {}, _this.components = {
            net: _net2.default,
            loadFooter: _loadFooter2.default,
            backHome: _backHome2.default
        }, _this.data = {
            list: [],
            defaultPage: 1,
            isMore: 1,
            isCom: false,
            clickNum: ""
        }, _this.computed = {}, _this.methods = {}, _this.watch = {}, _this.events = {}, 
        _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Index, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onReachBottom",
        value: function onReachBottom() {
            ++this.defaultPage;
            this.isMore = 2;
            this.getRecordMoreList();
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage(res) {
            return {
                title: "用心专为您的投资",
                imageUrl: _util2.default.getShareRandomImg(),
                path: _util2.default.getCurrentPageUrlWithArgs(),
                success: function success(res) {
                    if (res.errMsg == "shareAppMessage:ok") {
                        (0, _api.APP_SHARE_COUNT)({
                            params: {
                                behavior: "share"
                            }
                        });
                        _Tips2.default.success("分享成功");
                    }
                },
                fail: function fail(res) {
                    if (res.errMsg == "shareAppMessage:fail cancel") {} else if (res.errMsg == "shareAppMessage:fail") {}
                }
            };
        }
    }, {
        key: "onPullDownRefresh",
        value: function onPullDownRefresh() {
            this.defaultPage = 1;
            this.getRecordMoreListREfesh();
        }
    }, {
        key: "onLoad",
        value: function onLoad() {
            this.defaultPage = 1;
            this.list = [];
            this.getRecordMoreList();
        }
    }, {
        key: "onShow",
        value: function onShow() {
            this.recordDistclickNum();
        }
    }, {
        key: "onReady",
        value: function onReady() {}
        // 获取战绩回顾列表
        }, {
        key: "getRecordMoreList",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context.next = 3;
                            return (0, _api.getRecordMore)({
                                params: {
                                    page: this.defaultPage
                                }
                            });

                          case 3:
                            res = _context.sent;
                            this.list = this.list.concat(res.data);
                            if (res.data.length < 10) {
                                this.isMore = 3;
                            }
                            this.$apply();
                            _Tips2.default.loaded();
                            this.isCom = true;

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getRecordMoreList() {
                return _ref2.apply(this, arguments);
            }
            return getRecordMoreList;
        }()
    }, {
        key: "getRecordMoreListREfesh",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context2.next = 3;
                            return (0, _api.getRecordMore)({
                                params: {
                                    page: 1
                                }
                            });

                          case 3:
                            res = _context2.sent;
                            this.list = res.data;
                            wx.stopPullDownRefresh();
                            if (res.data.length < 10) {
                                this.isMore = 3;
                            }
                            this.$apply();
                            _Tips2.default.loaded();
                            this.isCom = true;

                          case 10:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function getRecordMoreListREfesh() {
                return _ref3.apply(this, arguments);
            }
            return getRecordMoreListREfesh;
        }()
    }, {
        key: "recordDistclickNum",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3() {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return (0, _api.recordDistclickNum)();

                          case 2:
                            res = _context3.sent;
                            if (res.code == 0) {
                                this.clickNum = res.data;
                            }
                            this.$apply();

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function recordDistclickNum() {
                return _ref4.apply(this, arguments);
            }
            return recordDistclickNum;
        }()
    } ]);
    return Index;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/record/recordList"));