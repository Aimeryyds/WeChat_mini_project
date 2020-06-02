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

var _util = require("./../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _Tips = require("./../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _net = require("./../components/net.js");

var _net2 = _interopRequireDefault(_net);

var _api = require("./../service/api/api.js");

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

var webpage = function(_wepy$page) {
    _inherits(webpage, _wepy$page);
    function webpage() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, webpage);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = webpage.__proto__ || Object.getPrototypeOf(webpage)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.config = {
            navigationBarTitleText: ""
        }, _this.data = {
            weburl: ""
        }, _this.events = {}, _this.components = {
            net: _net2.default
        }, _this.watch = {}, _this.methods = {
            suc: function suc(e) {},
            err: function err(e) {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(webpage, [ {
        key: "onShareAppMessage",
        value: function onShareAppMessage(res) {
            return {
                title: "用心专为您的投资",
                path: res.webViewUrl,
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
        value: function onLoad(options) {
            wx.hideShareMenu();
            _Tips2.default.loading();
            var _name = options.name;
            var _code = options.code;
            wx.setNavigationBarTitle({
                title: decodeURI(_name) + "(" + _code + ")"
            });
            this.weburl = _util2.default.urlEncodeNoWeburl(options.weburl, options);
            this.weburl = this.weburl + "&token=" + wx.getStorageSync("token");
            console.log("最终跳转的webulr", this.weburl);
            setTimeout(function() {
                _Tips2.default.loaded();
            }, 2200);
        }
    } ]);
    return webpage;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(webpage, "pages/industry"));