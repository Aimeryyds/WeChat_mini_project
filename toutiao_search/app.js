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

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("./npm/@tarojs/async-await/index.js");

var _index3 = require("./utils/index.js");

var _index4 = _interopRequireDefault(_index3);

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

var Tea = _index4.default.Tea;

var _App = function(_BaseComponent) {
    _inherits(_App, _BaseComponent);
    function _App() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, _App);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            pages: [ "pages/index/index", // 首页
            "pages/search/index", // 搜索页
            "pages/searchRank/index", // 热搜榜页
            "pages/detail/index", // 详情页
            "pages/subject/index" ],
            window: {
                navigationStyle: "custom",
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#d43d3d",
                navigationBarTitleText: "头条热搜",
                navigationBarTextStyle: "light"
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(_App, [ {
        key: "componentDidMount",
        value: function componentDidMount() {
            _index4.default.getTTWebid();
            this.initTea();
        }
    }, {
        key: "componentDidShow",
        value: function componentDidShow() {
            var share = this.$router.params.query.share;
            Tea.event("launch_mp", {
                enter_from: share ? "share" : "other"
            });
            var lastActiveInfo = _index2.default.getStorageSync("lastActiveInfo");
            if (lastActiveInfo) {
                lastActiveInfo = JSON.parse(lastActiveInfo);
                var _lastActiveInfo = lastActiveInfo, appHideTime = _lastActiveInfo.appHideTime, appActiveTime = _lastActiveInfo.appActiveTime;
                var now = Math.floor(Date.now() / 1e3);
                var disdance = now - appHideTime;
                console.log("【打开app】距离上次离开时间间隔: " + disdance + "s");
                if (disdance > 10) {
                    console.log("发送mp_stay_time: " + appActiveTime + "s");
                    Tea.event("mp_stay_time", {
                        stay_time: appActiveTime
                    });
                    _index2.default.removeStorageSync("lastActiveInfo");
                }
            } else {
                console.log("【打开app】未检测到历史活动记录，发送launch_mp");
                Tea.event("launch_mp", {
                    enter_from: share ? "share" : "other",
                    path: this.$router.params.path
                });
            }
            this.appShowTime = Math.floor(Date.now() / 1e3);
        }
    }, {
        key: "componentDidHide",
        value: function componentDidHide() {
            var appHideTime = Math.floor(Date.now() / 1e3);
            var appActiveTime = appHideTime - this.appShowTime;
            var lastActiveInfo = _index2.default.getStorageSync("lastActiveInfo");
            if (lastActiveInfo) {
                lastActiveInfo = JSON.parse(lastActiveInfo);
                lastActiveInfo.appHideTime = appHideTime;
                lastActiveInfo.appActiveTime = lastActiveInfo.appActiveTime + appActiveTime;
            } else {
                lastActiveInfo = {
                    appHideTime: appHideTime,
                    appActiveTime: appActiveTime
                };
            }
            console.log("【隐藏app】本次记录的活跃时间为: " + lastActiveInfo.appActiveTime + "s");
            _index2.default.setStorageSync("lastActiveInfo", JSON.stringify(lastActiveInfo));
        }
        // https://docs.bytedance.net/doc/i7iDn8IIEkctechsV7yaSd
        }, {
        key: "initTea",
        value: function initTea() {
            Tea.init(1628);
            var _$router$params$query = this.$router.params.query, share = _$router$params$query.share, origin = _$router$params$query.origin, version_id = _$router$params$query.version_id;
            var evtParams = {
                isShare: share ? 1 : 0,
                origin: origin || "",
                version_id: +version_id || 0
            };
            Tea.config({
                log: true,
                evtParams: evtParams
            });
            Tea.send();
        }
        // 在 App 类中的 render() 函数没有实际作用
        // 请勿修改此函数
        }, {
        key: "_createData",
        value: function _createData() {}
    } ]);
    return _App;
}(_index.Component);

exports.default = _App;

App(require("./npm/@tarojs/taro-weapp/index.js").default.createApp(_App));

_index2.default.initPxTransform({
    designWidth: 750,
    deviceRatio: {
        640: 1.17,
        750: 1,
        828: .905
    }
});