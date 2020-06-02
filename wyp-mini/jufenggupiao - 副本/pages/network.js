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

var network = function(_wepy$page) {
    _inherits(network, _wepy$page);
    function network() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, network);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = network.__proto__ || Object.getPrototypeOf(network)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "暂无网络"
        }, _this.data = {}, _this.events = {}, _this.watch = {}, _this.methods = {
            refresh: function refresh() {
                wx.getNetworkType({
                    success: function success(_ref2) {
                        var networkType = _ref2.networkType;
                        if (networkType == "none") {
                            wx.showToast({
                                title: "没有网络了,请检查您的网络连接~",
                                icon: "none",
                                duration: 1500
                            });
                        } else {
                            wx.navigateBack({
                                delta: 2
                            });
                        }
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(network, [ {
        key: "onLoad",
        value: function onLoad() {
            wx.hideShareMenu();
        }
    } ]);
    return network;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(network, "pages/network"));