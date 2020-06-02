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

var _wxParse = require("./../../components/wxParse/wxParse.js");

var _wxParse2 = _interopRequireDefault(_wxParse);

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _util = require("./../../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _net = require("./../../components/net.js");

var _net2 = _interopRequireDefault(_net);

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
            usingComponents: {},
            enablePullDownRefresh: true
        }, _this.components = {
            net: _net2.default,
            backHome: _backHome2.default
        }, _this.data = {
            res: {},
            id: "",
            wHeight: wx.getSystemInfoSync().windowHeight,
            isListEnter: true,
            scrollSite: false,
            bind1: {},
            bindData: {},
            bind2: {},
            is_index: null
        }, _this.computed = {}, _this.methods = {
            wxParseImgTap: function wxParseImgTap(e) {
                this.wxParseImgTap(e, this.bindData);
            },
            preview: function preview(img) {
                wx.previewImage({
                    urls: [ img ]
                });
            },
            goMoreZj: function goMoreZj() {
                wx.navigateTo({
                    url: "/pages/record/recordList"
                });
            },
            goIndustry: function goIndustry(res) {
                var _url = _util2.default.urlEncode("/pages/industry", {
                    weburl: "https://wv.tougub.com/stock/stocks/" + res.stock,
                    showheader: "hide",
                    code: res.stock,
                    name: encodeURI(res.stock_name)
                });
                wx.navigateTo({
                    url: _url
                });
            }
        }, _this.watch = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Index, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onLoad",
        value: function onLoad(options) {
            this.isListEnter = options.isListEnter ? !!Number(options.isListEnter) : true;
            this.id = options.id;
            this.is_index = options.is_index ? options.is_index : null;
            this.getDetail(options.id);
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
        key: "onReady",
        value: function onReady() {}
    }, {
        key: "onPullDownRefresh",
        value: function onPullDownRefresh() {
            this.getDetail(this.id);
        }
    }, {
        key: "onPageScroll",
        value: function onPageScroll(e) {
            if (e.scrollTop > this.wHeight) {
                this.scrollSite = true;
                this.$apply();
            } else {
                this.scrollSite = false;
                this.$apply();
            }
        }
    }, {
        key: "getDetail",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee(_id) {
                var _this2 = this;
                var res, _a, _arr, i, _s, _s2;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context.next = 3;
                            return (0, _api.getZjDetail)({
                                params: {
                                    id: _id,
                                    is_index: this.is_index
                                }
                            });

                          case 3:
                            res = _context.sent;
                            this.res = res.data;
                            this.res.title = res.data.title.slice(0, 15);
                            if (this.res.video_url && this.res.video_url.indexOf("p.bokecc.com") != -1) {
                                this.res.video_url.replace(/HTTPS/g, "https");
                                this.res.videoOpt = _util2.default.urlToObj(this.res.video_url);
                                (0, _api.getCCMp4)(this.res.videoOpt.vid, this.res.videoOpt.siteid, "", function(res) {
                                    var data = res.data;
                                    data = data.substring(data.indexOf("(") + 1, data.length - 1);
                                    var dataObj = JSON.parse(data);
                                    // 高清
                                                                        _this2.res.videoUrlReal = dataObj.copies[0].playurl;
                                    _this2.res.videoCover = dataObj.img;
                                    _this2.$apply();
                                });
                            }
                            if (this.res.video_name) {
                                this.res.video_name = this.res.video_name.length > 16 ? this.res.video_name.substr(0, 16) + "..." : this.res.video_name;
                            }
                            _a = [];
                            _arr = res.data.columnists_subscribe_num.toString();
                            for (i = 0; i < _arr.length; i++) {
                                _a.push(_arr[i]);
                            }
                            this.res.columnists_subscribe_num = _a;
                            _a = null;
                            _arr = null;
                            if (res.data.content) {
                                _s = _wxParse2.default.wxParse("article", "html", res.data.content, this, 5);
                                this.bind1 = _s;
                            }
                            if (res.data.columnists_marketing_desc) {
                                _s2 = _wxParse2.default.wxParse("aaa", "html", res.data.columnists_marketing_desc, this, 5);
                                this.bind2 = _s2;
                            }
                            this.bindData = Object.assign({}, this.bind1, this.bind2);
                            wx.stopPullDownRefresh();
                            this.$apply();
                            _Tips2.default.loaded();

                          case 20:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getDetail(_x) {
                return _ref2.apply(this, arguments);
            }
            return getDetail;
        }()
    } ]);
    return Index;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/record/recordDetails"));