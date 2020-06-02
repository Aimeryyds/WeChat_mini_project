Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = undefined;

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

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

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

var stock = function(_wepy$component) {
    _inherits(stock, _wepy$component);
    function stock() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, stock);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = stock.__proto__ || Object.getPrototypeOf(stock)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.data = {
            toView: "red",
            singleInfo: [],
            title: [],
            stock: [],
            slideWidth: ""
        }, _this.events = {
            "get-stock-home": function getStockHome($event) {
                _this.getRealTime();
                var hour = new Date().getHours();
                if (hour >= 9 && hour <= 16) {
                    clearInterval(wx.selfInter);
                    wx.selfInter = setInterval(function() {
                        _this.getRealTime();
                    }, 6e3);
                }
                _this.getStockHome();
            }
        }, _this.watch = {}, _this.computed = {}, _this.methods = {
            goAskStock: function goAskStock(e) {
                var info = e.currentTarget.dataset;
                wx.navigateTo({
                    url: "/pages/qa/askStock?name=" + info.name + "&code=" + info.code
                });
            },
            diagnostic: function diagnostic(e) {
                var _url = _util2.default.urlEncode("/pages/webpage", {
                    weburl: "https://wv.tougub.com/dia",
                    code: e.currentTarget.dataset.code
                });
                wx.navigateTo({
                    url: _url
                });
            },
            goIndustry: function goIndustry(item) {
                var _url = _util2.default.urlEncode("/pages/industry", {
                    weburl: "https://wv.tougub.com/stock/stocks/" + item.code,
                    showheader: "hide",
                    code: item.code,
                    name: encodeURI(item.name)
                });
                wx.navigateTo({
                    url: _url
                });
            },
            goWeburl: function goWeburl() {
                var _url = _util2.default.urlEncode("/pages/webpage", {
                    weburl: "https://wv.tougub.com/stockSetting"
                });
                wx.navigateTo({
                    url: _url
                });
            },
            upper: function upper(e) {},
            lower: function lower(e) {},
            scroll: function scroll(e) {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(stock, [ {
        key: "onLoad",
        value: function onLoad() {}
    }, {
        key: "getStockHome",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            _Tips2.default.loading();
                            _context.next = 4;
                            return (0, _api.getStockHome)();

                          case 4:
                            res = _context.sent;
                            if (res.code == 0) {
                                this.title = res.data.title;
                                this.stock = res.data.stock;
                                this.slideWidth = 220 * res.data.title.length;
                                wx.stopPullDownRefresh();
                                this.$apply();
                                _Tips2.default.loaded();
                            }
                            _context.next = 10;
                            break;

                          case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](0);

                          case 10:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this, [ [ 0, 8 ] ]);
            }));
            function getStockHome() {
                return _ref2.apply(this, arguments);
            }
            return getStockHome;
        }()
    }, {
        key: "getRealTime",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var _inter;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return (0, _api.getRealTimeIndex)();

                          case 2:
                            _inter = _context2.sent;
                            this.singleInfo = _inter.data;
                            _inter = null;
                            this.$apply();

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function getRealTime() {
                return _ref3.apply(this, arguments);
            }
            return getRealTime;
        }()
    } ]);
    return stock;
}(_wepy2.default.component);

exports.default = stock;