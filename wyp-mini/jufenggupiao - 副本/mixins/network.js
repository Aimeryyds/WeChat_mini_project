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

var _util = require("./../service/util.js");

var _util2 = _interopRequireDefault(_util);

var _net = require("./../components/net.js");

var _net2 = _interopRequireDefault(_net);

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

var network = function(_wepy$mixin) {
    _inherits(network, _wepy$mixin);
    function network() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, network);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = network.__proto__ || Object.getPrototypeOf(network)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(network, [ {
        key: "onShow",
        value: function onShow() {}
    }, {
        key: "onLoad",
        value: function onLoad() {
            var pagesStacks = getCurrentPages();
            var _beforeStacks = [];
            var _curRoute = _util2.default.getCurrentPageUrlWithArgs();
            if (pagesStacks.length > 1) {
                pagesStacks = pagesStacks.slice(0, pagesStacks.length - 1);
                pagesStacks.forEach(function(ele) {
                    _beforeStacks.push(ele.route);
                });
                if (_beforeStacks.includes(_curRoute)) return false;
            }
            wx.getNetworkType({
                success: function success(_ref2) {
                    var networkType = _ref2.networkType;
                    console.log("res", networkType);
                    if (networkType == "none") {
                        wx.navigateTo({
                            url: "/pages/network"
                        });
                    }
                }
            });
        }
    }, {
        key: "onUnload",
        value: function onUnload() {}
    } ]);
    return network;
}(_wepy2.default.mixin);

exports.default = network;