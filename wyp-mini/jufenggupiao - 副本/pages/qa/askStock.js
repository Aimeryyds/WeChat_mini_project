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

var _tailorSuc = require("./../../components/enter/tailorSuc.js");

var _tailorSuc2 = _interopRequireDefault(_tailorSuc);

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

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

var askStock = function(_wepy$page) {
    _inherits(askStock, _wepy$page);
    function askStock() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, askStock);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = askStock.__proto__ || Object.getPrototypeOf(askStock)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            usingComponents: {}
        }, _this.components = {
            tailorSuc: _tailorSuc2.default,
            net: _net2.default,
            backHome: _backHome2.default
        }, _this.data = {
            columnist: [ {}, {}, {}, {} ],
            textValue: "",
            isShow: false,
            deVal: "",
            isText: true,
            defaultImg: "https://jfinfo.oss-cn-beijing.aliyuncs.com/jugupiao/images/enter/1.png"
        }, _this.computed = {}, _this.methods = {
            goArtice: function goArtice(val) {
                if (val.catalog == "cjdk") {
                    wx.navigateTo({
                        url: "/pages/myService/video?id=" + val.id + "&catalog=" + val.catalog
                    });
                } else {
                    wx.navigateTo({
                        url: "/pages/myService/artice?id=" + val.id + "&catalog=" + val.catalog
                    });
                }
            },
            saveQuestion: function saveQuestion() {
                this.saveInfo();
            },
            refeshVal: function refeshVal(e) {
                this.textValue = e.detail.value;
            },
            back: function back() {
                this.isShow = false;
                wx.navigateBack();
            }
        }, _this.watch = {
            textValue: function textValue(newVal) {
                this.deVal = newVal;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(askStock, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage(res) {
            return {
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
                        _Tips2.default.success("分享成功");
                    }
                },
                fail: function fail(res) {
                    if (res.errMsg == "shareAppMessage:fail cancel") {} else if (res.errMsg == "shareAppMessage:fail") {}
                }
            };
        }
    }, {
        key: "onLoad",
        value: function onLoad(options) {
            this.isShow = false;
            if (options.name && options.code) {
                this.textValue = options.name + "(" + options.code + ")";
            } else {
                this.textValue = "";
            }
            // 获取随机栏目
                        this.getColumnist();
        }
    }, {
        key: "onReady",
        value: function onReady() {}
    }, {
        key: "onUnload",
        value: function onUnload() {}
    }, {
        key: "getColumnist",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context.next = 3;
                            return (0, _api.getRandomColumnist)();

                          case 3:
                            res = _context.sent;
                            this.columnist = res.data;
                            this.$apply();
                            _Tips2.default.loaded();

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getColumnist() {
                return _ref2.apply(this, arguments);
            }
            return getColumnist;
        }()
    }, {
        key: "saveInfo",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (this.textValue) {
                                _context2.next = 3;
                                break;
                            }
                            wx.showToast({
                                title: "问题不能为空~",
                                icon: "none",
                                duration: 1500
                            });
                            return _context2.abrupt("return");

                          case 3:
                            _context2.next = 5;
                            return (0, _api.saveAnswer)({
                                params: {
                                    content: this.textValue
                                }
                            });

                          case 5:
                            res = _context2.sent;
                            if (res.code == 0) {
                                this.isShow = true;
                                this.isText = false;
                                this.$apply();
                            } else if (res.code == 500024) {
                                wx.showToast({
                                    title: "您的问题为敏感问题，换个其他方式提问吧~",
                                    icon: "none"
                                });
                            } else if (res.code == 500004) {
                                wx.showToast({
                                    title: "字数长度不能超过150~",
                                    icon: "none"
                                });
                            }

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function saveInfo() {
                return _ref3.apply(this, arguments);
            }
            return saveInfo;
        }()
    } ]);
    return askStock;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(askStock, "pages/qa/askStock"));