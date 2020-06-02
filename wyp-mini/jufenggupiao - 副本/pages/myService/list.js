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

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _loadFooter = require("./../../components/loadFooter.js");

var _loadFooter2 = _interopRequireDefault(_loadFooter);

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

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

var list = function(_wepy$page) {
    _inherits(list, _wepy$page);
    function list() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, list);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = list.__proto__ || Object.getPrototypeOf(list)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "更多推荐",
            usingComponents: {
                "i-icon": "../ui/icon/index"
            },
            onReachBottomDistance: 68
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
            isMore: 2,
            query: {},
            info: {},
            isCom: false,
            Img_isLoad: false
        }, _this.computed = {}, _this.methods = {
            isload: function isload(event) {
                this.Img_isLoad = true;
                this.$apply();
            },
            goDetail: function goDetail(val) {
                if (this.query.catalog != "cjgcj") {
                    wx.navigateTo({
                        url: "/pages/myService/artice?type=1&no_show=1&id=" + val.article_id + "&catalog=" + this.query.catalog
                    });
                } else {
                    wx.navigateTo({
                        url: "/pages/myService/video?type=1&no_show=1&id=" + val.article_id + "&catalog=" + this.query.catalog
                    });
                }
            }
        }, _this.watch = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(list, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onReachBottom",
        value: function onReachBottom() {
            ++this.defaultPage;
            this.isMore = 2;
            this.getArticle();
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
                        _Tips2.default.success("分享成功");
                    }
                },
                fail: function fail(res) {
                    if (res.errMsg == "shareAppMessage:fail cancel") {} else if (res.errMsg == "shareAppMessage:fail") {}
                }
            };
            return shareObj;
        }
    }, {
        key: "onLoad",
        value: function onLoad(option) {
            this.defaultPage = 1;
            this.query = option;
            this.getArticle();
            this.getColumnist(option);
        }
    }, {
        key: "onReady",
        value: function onReady() {}
        //栏目详情
        }, {
        key: "getColumnist",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee(val) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _myService.getColumnistDetail)({
                                params: {
                                    columnist_id: val.columnist_id
                                }
                            });

                          case 2:
                            res = _context.sent;
                            if (res.code == 0) {
                                this.info = res.data;
                            }

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getColumnist(_x) {
                return _ref2.apply(this, arguments);
            }
            return getColumnist;
        }()
    }, {
        key: "getArticle",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(val) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context2.next = 3;
                            return (0, _myService.getArticleList)({
                                params: {
                                    article_id: this.query.article_id,
                                    columnist_id: this.query.columnist_id,
                                    catalog: this.query.catalog,
                                    page: this.defaultPage
                                }
                            });

                          case 3:
                            res = _context2.sent;
                            this.list = this.list.concat(res.data);
                            if (res.data.length < 10) {
                                this.isMore = 3;
                            }
                            this.$apply();
                            this.isCom = true;
                            _Tips2.default.loaded();

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function getArticle(_x2) {
                return _ref3.apply(this, arguments);
            }
            return getArticle;
        }()
    } ]);
    return list;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(list, "pages/myService/list"));