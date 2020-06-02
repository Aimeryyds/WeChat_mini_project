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

var _wepy = require("./../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require("./../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

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

var net = function(_wepy$component) {
    _inherits(net, _wepy$component);
    function net() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, net);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = net.__proto__ || Object.getPrototypeOf(net)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.data = {
            hasNet: false,
            inter: null
        }, _this.events = {}, _this.watch = {}, _this.methods = {
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
    _createClass(net, [ {
        key: "onLoad",
        value: function onLoad() {
            var that = this;
            wx.getNetworkType({
                success: function success(_ref3) {
                    var networkType = _ref3.networkType;
                    if (networkType == "none") {
                        that.hasNet = true;
                        that.refeshNet();
                    } else {
                        that.hasNet = false;
                    }
                    _Tips2.default.loaded();
                    that.$apply();
                }
            });
        }
    }, {
        key: "refeshNet",
        value: function refeshNet() {
            var that = this;
            clearTimeout(that.inter);
            that.inter = setInterval(function() {
                _Tips2.default.loading();
                wx.getNetworkType({
                    success: function success(_ref4) {
                        var networkType = _ref4.networkType;
                        if (networkType == "none") {
                            that.hasNet = true;
                        } else {
                            that.hasNet = false;
                            clearTimeout(that.inter);
                            wx.redirectTo({
                                url: _util2.default.getCurrentPageUrlWithArgs()
                            });
                            _Tips2.default.loaded();
                        }
                        that.$apply();
                    }
                });
            }, 300);
        }
    } ]);
    return net;
}(_wepy2.default.component);

exports.default = net;