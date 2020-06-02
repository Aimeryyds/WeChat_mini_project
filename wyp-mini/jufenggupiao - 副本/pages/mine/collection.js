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

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _api = require("./../../service/api/api.js");

var _wepyRedux = require("./../../npm/wepy-redux/lib/index.js");

var _empty = require("./../../components/empty.js");

var _empty2 = _interopRequireDefault(_empty);

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

var store = (0, _wepyRedux.getStore)();

var collection = function(_wepy$page) {
    _inherits(collection, _wepy$page);
    function collection() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, collection);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = collection.__proto__ || Object.getPrototypeOf(collection)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "我的收藏",
            usingComponents: {
                "i-icon": "../ui/icon/index",
                "i-tabs": "../ui/tabs/index",
                "i-tab": "../ui/tab/index",
                "i-modal": "../ui/modal/index"
            }
        }, _this.$repeat = {}, _this.$props = {
            empty: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:text.once": "text"
            }
        }, _this.$events = {}, _this.components = {
            empty: _empty2.default,
            net: _net2.default
        }, _this.data = {
            isHas: false,
            text: "您还没有收藏内容,先去逛逛吧~",
            current_scroll: "",
            list: [],
            articleData: [],
            livaData: [],
            isordinary: true,
            category_id: "",
            liveDeault: {
                columnists_id: "live",
                name: "股市播报"
            },
            visible2: false,
            cancelItem: {},
            allWidth: ""
        }, _this.computed = {}, _this.methods = {
            preview: function preview(imgArr, i) {
                wx.previewImage({
                    current: imgArr[i],
                    urls: imgArr
                });
            },
            goArtice: function goArtice(val) {
                if (val.catalog == "cjdk") {
                    wx.navigateTo({
                        url: "/pages/myService/video?type=1&catalog=" + val.catalog + "&id=" + val.article_id
                    });
                } else {
                    wx.navigateTo({
                        url: "/pages/myService/artice?type=1&catalog=" + val.catalog + "&id=" + val.article_id
                    });
                }
            },
            goHome: function goHome() {
                wx.reLaunch({
                    url: "/pages/index",
                    success: function success() {
                        store.dispatch({
                            type: "STOCK_LIVE"
                        });
                    }
                });
            },
            getArticle: function getArticle(item) {
                if (item.columnists_id == this.current_scroll) return;
                this.current_scroll = item.columnists_id;
                if (item.columnists_id == "live") {
                    this.isordinary = false;
                    this.livaData = [];
                    this.liveList();
                } else {
                    this.articleData = [];
                    this.isordinary = true;
                    this.category_id = item.category_id;
                    this.articleList(item.columnists_id, this.category_id);
                }
            },
            handleClose: function handleClose() {
                this.visible2 = false;
            },
            handleOk: function handleOk() {
                if (this.current_scroll == "live") {
                    this.cancelLiveCol(this.cancelItem);
                } else {
                    this.cancelPCol(this.cancelItem);
                }
                this.visible2 = false;
            },
            cancelCol: function cancelCol(item) {
                this.cancelItem = item;
                this.visible2 = true;
            },
            check: function check(_ref2) {
                var live_id = _ref2.live_id;
                this.livaData.forEach(function(ele) {
                    if (ele.live_id == live_id) {
                        ele.isCheck = !ele.isCheck;
                        return;
                    }
                });
            }
        }, _this.watch = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(collection, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onLoad",
        value: function onLoad() {
            wx.hideShareMenu();
            this.collection();
        }
    }, {
        key: "onReady",
        value: function onReady() {}
    }, {
        key: "collection",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res, res2, arr;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _api.getCollection)();

                          case 2:
                            res = _context.sent;
                            _context.next = 5;
                            return (0, _api.getLiveCol)();

                          case 5:
                            res2 = _context.sent;
                            _context.prev = 6;
                            arr = res.data;
                            if (res2.data.length) {
                                arr.push(this.liveDeault);
                            }
                            if (arr.length) {
                                _context.next = 13;
                                break;
                            }
                            this.isHas = true;
                            this.$apply();
                            return _context.abrupt("return");

                          case 13:
                            this.list = arr;
                            this.allWidth = this.sellomTabWidth(this.list);
                            this.getCurComlunis(this.list[0]);
                            this.$apply();
                            _context.next = 22;
                            break;

                          case 19:
                            _context.prev = 19;
                            _context.t0 = _context["catch"](6);
                            console.warn("get collection extremely -> " + _context.t0);

                          case 22:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this, [ [ 6, 19 ] ]);
            }));
            function collection() {
                return _ref3.apply(this, arguments);
            }
            return collection;
        }()
    }, {
        key: "sellomTabWidth",
        value: function sellomTabWidth(arr) {
            var num = 0;
            arr.forEach(function(ele) {
                num += ele.name.length * 42;
            });
            return num;
        }
        // 获取对应栏目的文章列表
        }, {
        key: "getCurComlunis",
        value: function getCurComlunis(item) {
            this.current_scroll = item.columnists_id;
            if (this.current_scroll == "live") {
                this.liveList();
            } else {
                this.category_id = item.category_id;
                this.articleList(this.current_scroll, this.category_id);
            }
        }
        // 获取对应栏目下的文章列表
        }, {
        key: "articleList",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(_id, _category_id) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context2.next = 3;
                            return (0, _api.getColArticle)({
                                params: {
                                    cid: _id,
                                    category_id: _category_id
                                }
                            });

                          case 3:
                            res = _context2.sent;
                            try {
                                this.articleData = res.data;
                                this.isordinary = true;
                                this.$apply();
                            } catch (error) {
                                console.warn("get articleList extremely -> " + error);
                            }
                            _Tips2.default.loaded();

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function articleList(_x, _x2) {
                return _ref4.apply(this, arguments);
            }
            return articleList;
        }()
    }, {
        key: "liveList",
        value: function() {
            var _ref5 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3() {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context3.next = 3;
                            return (0, _api.getLiveCol)();

                          case 3:
                            res = _context3.sent;
                            try {
                                this.livaData = res.data;
                                this.livaData.forEach(function(ele) {
                                    ele.isCheck = false;
                                    ele.imgBoxWidth = ele.content_image.length * (228 + 3);
                                    ele.nodes = [];
                                    ele.nodes.push({
                                        type: "text",
                                        text: ele.content_text
                                    });
                                });
                                this.isordinary = false;
                                this.$apply();
                            } catch (error) {
                                console.warn("get liveList extremely -> " + error);
                            }
                            _Tips2.default.loaded();

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function liveList() {
                return _ref5.apply(this, arguments);
            }
            return liveList;
        }()
    }, {
        key: "cancelPCol",
        value: function() {
            var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(item) {
                var _this2 = this;
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return (0, _api.cancelArticle)({
                                params: {
                                    cid: item.columnists_id,
                                    aid: item.article_id,
                                    op: "2"
                                }
                            });

                          case 2:
                            res = _context4.sent;
                            try {
                                if (res.code == 0) {
                                    this.articleData.forEach(function(ele, index) {
                                        if (ele.article_id == item.article_id) {
                                            _this2.articleData.splice(index, 1);
                                            return;
                                        }
                                    });
                                    if (this.articleData.length == 0) {
                                        this.list.forEach(function(ele, i) {
                                            if (ele.columnists_id == item.columnists_id) {
                                                _this2.list.splice(i, 1);
                                                return;
                                            }
                                        });
                                    }
                                }
                                setTimeout(function() {
                                    _Tips2.default.success("取消成功");
                                }, 300);
                                this.isAllDel(this.articleData);
                                this.$apply();
                            } catch (error) {
                                console.warn("get cancelPCol extremely -> " + error);
                            }

                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function cancelPCol(_x3) {
                return _ref6.apply(this, arguments);
            }
            return cancelPCol;
        }()
    }, {
        key: "cancelLiveCol",
        value: function() {
            var _ref7 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee5(item) {
                var _this3 = this;
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return (0, _api.liveAdd)({
                                params: {
                                    id: item.live_id,
                                    op: "2"
                                }
                            });

                          case 2:
                            res = _context5.sent;
                            try {
                                if (res.code == 0) {
                                    this.livaData.forEach(function(ele, index) {
                                        if (ele.live_id == item.live_id) {
                                            _this3.livaData.splice(index, 1);
                                            return;
                                        }
                                    });
                                    if (this.livaData.length == 0) {
                                        this.list.forEach(function(ele, i) {
                                            if (ele.columnists_id == "live") {
                                                _this3.list.splice(i, 1);
                                                return;
                                            }
                                        });
                                    }
                                }
                                setTimeout(function() {
                                    _Tips2.default.success("取消成功");
                                }, 300);
                                this.isAllDel(this.livaData);
                                this.$apply();
                            } catch (error) {
                                console.warn("get cancelLiveCol extremely -> " + error);
                            }

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));
            function cancelLiveCol(_x4) {
                return _ref7.apply(this, arguments);
            }
            return cancelLiveCol;
        }()
    }, {
        key: "isAllDel",
        value: function isAllDel(arr) {
            if (this.list.length == 0) {
                this.isHas = true;
                return;
            }
            if (arr.length == 0) {
                this.allWidth = this.sellomTabWidth(this.list);
                this.getCurComlunis(this.list[0]);
            }
        }
    } ]);
    return collection;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(collection, "pages/mine/collection"));