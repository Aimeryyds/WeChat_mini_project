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

var _dec, _dec2, _class;

var _wepy = require("./../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _tabNav = require("./../components/tabNav.js");

var _tabNav2 = _interopRequireDefault(_tabNav);

var _tabSwitch = require("./../components/tabSwitch.js");

var _tabSwitch2 = _interopRequireDefault(_tabSwitch);

var _tailor = require("./../components/tailor.js");

var _tailor2 = _interopRequireDefault(_tailor);

var _net = require("./../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _api = require("./../service/api/api.js");

var _wepyRedux = require("./../npm/wepy-redux/lib/index.js");

var _Tips = require("./../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _mixinDecorator = require("./../npm/mixin-decorator/dist/index.js");

var _mixinDecorator2 = _interopRequireDefault(_mixinDecorator);

var _onPullDownRefresh = require("./../mixins/onPullDownRefresh.js");

var _onPullDownRefresh2 = _interopRequireDefault(_onPullDownRefresh);

var _onReachBottom = require("./../mixins/onReachBottom.js");

var _onReachBottom2 = _interopRequireDefault(_onReachBottom);

var _util = require("./../service/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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

var Index = (_dec = (0, _wepyRedux.connect)({
    tab: function tab(state) {
        return state.counter.tab;
    }
}), _dec2 = (0, _mixinDecorator2.default)(_onPullDownRefresh2.default, _onReachBottom2.default), 
_dec(_class = _dec2(_class = function(_wepy$page) {
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
            usingComponents: {
                "i-icon": "../ui/icon/index",
                "i-notice-bar": "../ui/notice-bar/index",
                "i-cell-group": "../ui/cell-group/index",
                "i-cell": "../ui/cell/index",
                "i-load-more": "../ui/load-more/index",
                "i-message": "../ui/message/index",
                painter: "../components/painter/painter"
            },
            onReachBottomDistance: 68,
            backgroundTextStyle: "light",
            enablePullDownRefresh: true
        }, _this.$repeat = {}, _this.$props = {
            tabSwitch: {
                "v-bind:tab.sync": "tab"
            },
            tabNav: {
                "xmlns:v-bind": "",
                "v-bind:tab.sync": "tab"
            }
        }, _this.$events = {}, _this.components = {
            tabSwitch: _tabSwitch2.default,
            tabNav: _tabNav2.default,
            tailor: _tailor2.default,
            net: _net2.default
        }, _this.data = {
            current: "homepage",
            clientH: wx.getSystemInfoSync().windowHeight
        }, _this.computed = {}, _this.methods = {}, _this.watch = {}, _this.events = {}, 
        _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Index, [ {
        key: "onShow",
        value: function onShow() {
            if (this.tab == 2) {
                this.$broadcast("get-stock-home");
            } else if (this.tab == 1) {
                this.$broadcast("get-myService-data");
            } else if (this.tab == 0) {
                this.$broadcast("get-live-news-data");
            }
        }
    }, {
        key: "onLoad",
        value: function onLoad() {}
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
        key: "onPageScroll",
        value: function onPageScroll(e) {
            wx.liveScrollTop = e.scrollTop;
            if (e.scrollTop > 115) {
                this.$invoke("tabNav", "appear");
                this.$broadcast("mini-nav", true);
            } else {
                this.$invoke("tabNav", "disappear");
                this.$broadcast("mini-nav", false);
            }
        }
    } ]);
    return Index;
}(_wepy2.default.page)) || _class) || _class);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index"));