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

var _empty = require("./../empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _ask = require("./../ask.js");

var _ask2 = _interopRequireDefault(_ask);

var _api = require("./../../service/api/api.js");

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _loadFooter = require("./../loadFooter.js");

var _loadFooter2 = _interopRequireDefault(_loadFooter);

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

var question = function(_wepy$component) {
    _inherits(question, _wepy$component);
    function question() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, question);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = question.__proto__ || Object.getPrototypeOf(question)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.$repeat = {}, _this.$props = {
            empty: {
                "xmlns:v-bind": "",
                "v-bind:text.once": "text"
            },
            ask: {},
            loadFooter: {
                "v-bind:loadComplete.sync": "emptyBox",
                "v-bind:curStatus.sync": "isMore"
            }
        }, _this.$events = {}, _this.components = {
            empty: _empty2.default,
            ask: _ask2.default,
            loadFooter: _loadFooter2.default
        }, _this.data = {
            isHas: false,
            text: "没有类似的提问,去提问看看吧~",
            question: [],
            isMore: 1,
            defaultPage: 1,
            inputVal: "",
            emptyBox: false,
            isShowAsk: true,
            goback: false
        }, _this.events = {
            "load-more-question": function loadMoreQuestion($event) {
                if ($event == "init") {
                    _this.defaultPage = 1;
                }
                if (_this.inputVal) {
                    _this.searcQa();
                } else {
                    _this.loadMoreQa();
                }
            }
        }, _this.watch = {}, _this.methods = {
            goAll: function goAll() {
                this.defaultPage = 1;
                this.goback = false;
                if (this.question.length) {
                    this.emptyBox = true;
                }
                this.inputVal = "";
                this.getQA();
            },
            check: function check(id, tar) {
                this.question.forEach(function(ele) {
                    if (ele.qusetion_id == id) {
                        ele[tar] = !ele[tar];
                    }
                });
            },
            goAsk: function goAsk() {
                wx.navigateTo({
                    url: "/pages/qa/askStock"
                });
            },
            real: function real(e) {
                this.inputVal = e.detail.value;
            },
            confirm: function confirm() {
                this.defaultPage = 1;
                if (this.inputVal) {
                    this.searcQa();
                } else {
                    this.loadMoreQa();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(question, [ {
        key: "onLoad",
        value: function onLoad() {}
    }, {
        key: "loadMoreQa",
        value: function loadMoreQa() {
            this.isMore = 2;
            this.getQA();
        }
    }, {
        key: "getQA",
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
                            return (0, _api.questionList)({
                                params: {
                                    page: this.defaultPage
                                }
                            });

                          case 4:
                            res = _context.sent;
                            if (this.defaultPage == 1) {
                                this.question = [];
                                if (!res.data.length) {
                                    this.isHas = true;
                                    this.isShowAsk = false;
                                    this.emptyBox = false;
                                    this.goback = true;
                                } else {
                                    this.isHas = false;
                                    this.isShowAsk = true;
                                    this.goback = false;
                                    this.emptyBox = true;
                                }
                            }
                            this.question = this.question.concat(res.data);
                            this.question.forEach(function(ele) {
                                ele.qc = false;
                                ele.ac = false;
                            });
                            this.defaultPage++;
                            if (res.data.length < 10) {
                                this.isMore = 3;
                            }
                            wx.stopPullDownRefresh();
                            this.$apply();
                            _Tips2.default.loaded();
                            _context.next = 17;
                            break;

                          case 15:
                            _context.prev = 15;
                            _context.t0 = _context["catch"](0);

                          case 17:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this, [ [ 0, 15 ] ]);
            }));
            function getQA() {
                return _ref2.apply(this, arguments);
            }
            return getQA;
        }()
    }, {
        key: "searcQa",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _Tips2.default.loading();
                            this.isMore = 2;
                            _context2.next = 5;
                            return (0, _api.searchQuestionList)({
                                params: {
                                    page: this.defaultPage,
                                    search: this.inputVal
                                }
                            });

                          case 5:
                            res = _context2.sent;
                            if (this.defaultPage == 1) {
                                this.question = [];
                                if (!res.data.length) {
                                    // this.isHas = true;
                                    this.isShowAsk = false;
                                    this.goback = true;
                                    this.emptyBox = false;
                                } else {
                                    // this.isHas = false;
                                    this.goback = false;
                                    this.isShowAsk = true;
                                    this.emptyBox = true;
                                }
                            }
                            this.question = this.question.concat(res.data);
                            this.question.forEach(function(ele) {
                                ele.qc = false;
                                ele.ac = false;
                            });
                            this.defaultPage++;
                            wx.stopPullDownRefresh();
                            if (res.data.length < 10) {
                                this.isMore = 3;
                            }
                            this.$apply();
                            _Tips2.default.loaded();
                            _context2.next = 18;
                            break;

                          case 16:
                            _context2.prev = 16;
                            _context2.t0 = _context2["catch"](0);

                          case 18:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this, [ [ 0, 16 ] ]);
            }));
            function searcQa() {
                return _ref3.apply(this, arguments);
            }
            return searcQa;
        }()
    } ]);
    return question;
}(_wepy2.default.component);

exports.default = question;