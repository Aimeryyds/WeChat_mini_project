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

var _api = require("./../service/api/api.js");

var _util = require("./../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _Tips = require("./../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _net = require("./../components/net.js");

var _net2 = _interopRequireDefault(_net);

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

var search = function(_wepy$page) {
    _inherits(search, _wepy$page);
    function search() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, search);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.config = {
            usingComponents: {
                "i-icon": "../ui/icon/index"
            }
        }, _this.data = {
            list: [],
            source: "",
            defVal: "",
            isinput: false,
            timer: null,
            beforeRequest: null
        }, _this.components = {
            net: _net2.default
        }, _this.events = {}, _this.watch = {}, _this.methods = {
            clear: function clear() {
                this.defVal = "";
                this.list = [];
                this.isinput = false;
            },
            focus: function focus() {
                this.isinput = true;
            },
            blur: function blur(e) {},
            goDia: function goDia(item) {
                var _url = "";
                if (this.source) {
                    _url = _util2.default.urlEncode("/pages/webpage", {
                        weburl: "https://wv.tougub.com/dia",
                        code: item.code
                    });
                } else {
                    _url = _util2.default.urlEncode("/pages/industry", {
                        weburl: "https://wv.tougub.com/stock/stocks/" + item.code,
                        showheader: "hide",
                        code: item.code,
                        name: encodeURI(item.name)
                    });
                }
                wx.navigateTo({
                    url: _url
                });
            },
            back: function back() {
                wx.navigateBack();
            },
            search: function search(e) {
                var _this2 = this;
                this.isinput = true;
                this.defVal = e.detail.value;
                this.list = [];
                if (!this.defVal) {
                    this.isinput = false;
                    return;
                }
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(function() {
                    _this2.searchStock();
                }, 300);
            },
            chooseAdd: function chooseAdd(item) {
                this.addStock(item);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(search, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onLoad",
        value: function onLoad(options) {
            wx.hideShareMenu();
            this.source = options.source;
        }
    }, {
        key: "searchStock",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Tips2.default.loading();
                            if (this.beforeRequest) {
                                this.beforeRequest.abort();
                                this.beforeRequest = null;
                            }
                            _context.next = 4;
                            return (0, _api.searchStock)({
                                params: {
                                    code: this.defVal
                                }
                            });

                          case 4:
                            this.beforeRequest = _context.sent;
                            if (this.beforeRequest.code == 0) {
                                this.list = this.beforeRequest.data;
                                this.beforeRequest = null;
                                this.$apply();
                                _Tips2.default.loaded();
                            }

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function searchStock() {
                return _ref2.apply(this, arguments);
            }
            return searchStock;
        }()
    }, {
        key: "addStock",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(item) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!item.isChoose) {
                                _context2.next = 2;
                                break;
                            }
                            return _context2.abrupt("return");

                          case 2:
                            wx.showLoading({
                                title: "操作中...",
                                mask: true
                            });
                            _context2.next = 5;
                            return (0, _api.addStock)({
                                params: {
                                    code: item.code,
                                    way: "搜索"
                                }
                            });

                          case 5:
                            res = _context2.sent;
                            if (res.code == 0) {
                                this.list.forEach(function(element) {
                                    if (element.code == item.code) {
                                        element.isChoose = true;
                                        return;
                                    }
                                });
                                wx.hideLoading();
                                this.$apply();
                            }

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function addStock(_x) {
                return _ref3.apply(this, arguments);
            }
            return addStock;
        }()
    } ]);
    return search;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(search, "pages/search"));