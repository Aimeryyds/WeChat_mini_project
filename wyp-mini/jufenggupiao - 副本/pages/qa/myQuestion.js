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

var _empty = require("./../../components/empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _ask = require("./../../components/ask.js");

var _ask2 = _interopRequireDefault(_ask);

var _api = require("./../../service/api/api.js");

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

var myQuestion = function(_wepy$page) {
    _inherits(myQuestion, _wepy$page);
    function myQuestion() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, myQuestion);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myQuestion.__proto__ || Object.getPrototypeOf(myQuestion)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "我的提问",
            usingComponents: {
                "i-icon": "../ui/icon/index"
            }
        }, _this.$repeat = {}, _this.$props = {
            empty: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:text.once": "text"
            }
        }, _this.$events = {}, _this.components = {
            empty: _empty2.default,
            ask: _ask2.default,
            net: _net2.default,
            backHome: _backHome2.default
        }, _this.data = {
            text: "您还没有提问,赶快去提问吧~",
            isHas: false,
            question: [],
            user: {}
        }, _this.computed = {}, _this.methods = {
            check: function check(id, tar) {
                this.question.forEach(function(ele) {
                    if (ele.id == id) {
                        ele[tar] = !ele[tar];
                    }
                });
            },
            goAsk: function goAsk() {
                wx.navigateTo({
                    url: "/pages/qa/askStock"
                });
            }
        }, _this.watch = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(myQuestion, [ {
        key: "onShow",
        value: function onShow() {
            this.getList();
        }
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
        value: function onLoad() {}
    }, {
        key: "onReady",
        value: function onReady() {}
        // 我的提问
        }, {
        key: "getList",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context.next = 3;
                            return (0, _api.getAnswerList)();

                          case 3:
                            res = _context.sent;
                            if (!res.data.question.length) {
                                this.isHas = true;
                            } else {
                                this.isHas = false;
                            }
                            this.question = [];
                            this.question = res.data.question;
                            this.user = res.data.user;
                            this.question.forEach(function(ele) {
                                ele.qc = false;
                                ele.ac = false;
                            });
                            this.$apply();
                            _Tips2.default.loaded();

                          case 11:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getList() {
                return _ref2.apply(this, arguments);
            }
            return getList;
        }()
    } ]);
    return myQuestion;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(myQuestion, "pages/qa/myQuestion"));