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

var _block = require("./../../components/tool/block.js");

var _block2 = _interopRequireDefault(_block);

var _artice_after = require("./../../components/tool/artice_after.js");

var _artice_after2 = _interopRequireDefault(_artice_after);

var _footer = require("./../../components/tool/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _myService = require("./../../service/api/myService.js");

var _api = require("./../../service/api/api.js");

var _wxParse = require("./../../components/wxParse/wxParse.js");

var _wxParse2 = _interopRequireDefault(_wxParse);

var _util = require("./../../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

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

var artice = function(_wepy$page) {
    _inherits(artice, _wepy$page);
    function artice() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, artice);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = artice.__proto__ || Object.getPrototypeOf(artice)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.$repeat = {}, _this.$props = {
            blocks: {
                text: "相关股票"
            },
            anotherblocks: {
                text: "相关推荐"
            },
            after: {
                "xmlns:v-bind": "",
                "v-bind:author.sync": "bothData"
            }
        }, _this.$events = {}, _this.components = {
            blocks: _block2.default,
            anotherblocks: _block2.default,
            after: _artice_after2.default,
            footers: _footer2.default,
            net: _net2.default,
            backHome: _backHome2.default
        }, _this.data = {
            headArr: [ "简称", "现价", "涨跌幅", "+自选", "诊断", "询问" ],
            bothData: {},
            bindData: {},
            query: {},
            loaded: false
        }, _this.events = {}, _this.watch = {}, _this.methods = {
            goList: function goList() {
                wx.navigateTo({
                    url: "/pages/myService/list?type=1&article_id=" + this.bothData.article_id + "&columnist_id=" + this.bothData.columnist_id + "&catalog=" + this.query.catalog
                });
            },
            checkStock: function checkStock(val, index) {
                if (val.isExists) {
                    this.delStock(val, index);
                } else {
                    this.addStock(val, index);
                }
            },
            add: function add(par) {
                this.getoptions({
                    cid: this.bothData.columnist_id,
                    aid: this.bothData.articleInfo.article_id,
                    op: par
                });
            },
            goIndustry: function goIndustry(e) {
                var _url = _util2.default.urlEncode("/pages/industry", {
                    weburl: "https://wv.tougub.com/stock/stocks/" + e.code,
                    showheader: "hide",
                    code: e.code,
                    name: e.name
                });
                wx.navigateTo({
                    url: _url
                });
            },
            goAskStock: function goAskStock(e) {
                wx.navigateTo({
                    url: "/pages/qa/askStock?name=" + e.name + "&code=" + e.code
                });
            },
            diagnostic: function diagnostic(e) {
                var _url = _util2.default.urlEncode("/pages/webpage", {
                    weburl: "https://wv.tougub.com/dia",
                    code: e.code
                });
                wx.navigateTo({
                    url: _url
                });
            },
            addDy: function() {
                var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee(val) {
                    var res, _res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                wx.showLoading({
                                    title: "操作中...",
                                    mask: true
                                });
                                if (val.is_subscribe) {
                                    _context.next = 8;
                                    break;
                                }
                                _context.next = 4;
                                return (0, _myService.addColumnists)({
                                    params: {
                                        id: val.id
                                    }
                                });

                              case 4:
                                res = _context.sent;
                                if (res.code == 0) {
                                    if (!this.bothData.columnistInfo.is_subscribe) {
                                        this.bothData.columnistInfo.is_subscribe = true;
                                        this.bothData.columnistInfo.subscribe_num++;
                                    }
                                    this.$apply();
                                    wx.hideLoading();
                                }
                                _context.next = 12;
                                break;

                              case 8:
                                _context.next = 10;
                                return (0, _myService.cancelSubscribe)({
                                    params: {
                                        id: val.id
                                    }
                                });

                              case 10:
                                _res = _context.sent;
                                if (_res.code == 0) {
                                    if (this.bothData.columnistInfo.is_subscribe) {
                                        this.bothData.columnistInfo.is_subscribe = false;
                                        this.bothData.columnistInfo.subscribe_num--;
                                    }
                                    this.$apply();
                                    wx.hideLoading();
                                }

                              case 12:
                              case "end":
                                return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function addDy(_x) {
                    return _ref2.apply(this, arguments);
                }
                return addDy;
            }(),
            wxParseImgTap: function wxParseImgTap(e) {
                this.wxParseImgTap(e, this.bindData);
            },
            redictUrl: function redictUrl(val) {
                wx.redirectTo({
                    url: "/pages/myService/artice?type=1&id=" + val.id + "&catalog=" + this.query.catalog
                });
                // this.onLoad({id:val.id});
                // wx.pageScrollTo({
                //   scrollTop:0,
                //   duration:0
                // })
                        }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(artice, [ {
        key: "onLoad",
        value: function onLoad(option) {
            this.query = option;
            wx.showNavigationBarLoading();
            if (option.type) {
                this.getArticeData(option.id, option.catalog);
            } else {
                this.getdata(option.id);
            }
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
                    if (res.errMsg == "shareAppMessage:fail cancel") {
                        // 用户取消转发
                    } else if (res.errMsg == "shareAppMessage:fail") {
                        // 转发失败,其中 detail message 为详细失败信息
                    }
                }
            };
        }
    }, {
        key: "getArticeData",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(val, val1) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return (0, _myService.getArticleDetail)({
                                params: {
                                    id: val,
                                    catalog: val1
                                }
                            });

                          case 2:
                            res = _context2.sent;
                            this.callbacks(res);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function getArticeData(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }
            return getArticeData;
        }()
    }, {
        key: "callbacks",
        value: function callbacks(res) {
            wx.hideNavigationBarLoading();
            if (res && res.code == 0) {
                this.loaded = true;
                this.bothData = res.data;
                var a = _wxParse2.default.wxParse("article", "html", this.bothData.articleInfo.content, this, 0);
                this.bindData = a;
                wx.setNavigationBarTitle({
                    title: this.bothData.columnistInfo.name
                });
                this.$apply();
            }
            /* else {
        wx.showToast({
          icon: 'none',
          title: '系统出错'
        });
      } */        }
    }, {
        key: "getdata",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3(val) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return (0, _myService.toColumnistDetail)({
                                params: {
                                    id: val
                                }
                            });

                          case 2:
                            res = _context3.sent;
                            this.callbacks(res);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function getdata(_x4) {
                return _ref4.apply(this, arguments);
            }
            return getdata;
        }()
    }, {
        key: "addStock",
        value: function() {
            var _ref5 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(stockCode, index) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context4.next = 3;
                            return (0, _api.addStock)({
                                params: {
                                    code: stockCode.code,
                                    way: this.bothData.columnistInfo.id
                                }
                            });

                          case 3:
                            res = _context4.sent;
                            if (res.code == 0) {
                                this.bothData.stockInfo[index].isExists = true;
                                _Tips2.default.loaded();
                                _Tips2.default.success("添加成功");
                                this.$apply();
                            }

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function addStock(_x5, _x6) {
                return _ref5.apply(this, arguments);
            }
            return addStock;
        }()
    }, {
        key: "delStock",
        value: function() {
            var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee5(stockCode, index) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context5.next = 3;
                            return (0, _api.removeStock)({
                                params: {
                                    code: stockCode.code
                                }
                            });

                          case 3:
                            res = _context5.sent;
                            if (res.code == 0) {
                                this.bothData.stockInfo[index].isExists = false;
                                _Tips2.default.success("取消成功");
                                _Tips2.default.loaded();
                                this.$apply();
                            }

                          case 5:
                          case "end":
                            return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));
            function delStock(_x7, _x8) {
                return _ref6.apply(this, arguments);
            }
            return delStock;
        }()
    }, {
        key: "getoptions",
        value: function() {
            var _ref7 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee6(val) {
                var res;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            wx.showLoading({
                                title: "操作中...",
                                mask: true
                            });
                            _context6.next = 3;
                            return (0, _myService.getoption)({
                                params: {
                                    cid: val.cid,
                                    aid: val.aid,
                                    op: val.op
                                }
                            });

                          case 3:
                            res = _context6.sent;
                            wx.hideLoading();
                            if (res.code == 0) {
                                this.bothData.articleInfo.is_collect = !this.bothData.articleInfo.is_collect;
                                this.$apply();
                            }

                          case 6:
                          case "end":
                            return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));
            function getoptions(_x9) {
                return _ref7.apply(this, arguments);
            }
            return getoptions;
        }()
    } ]);
    return artice;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(artice, "pages/myService/artice"));