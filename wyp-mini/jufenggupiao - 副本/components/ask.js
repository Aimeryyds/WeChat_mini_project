Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = undefined;

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

var ask = function(_wepy$component) {
    _inherits(ask, _wepy$component);
    function ask() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, ask);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ask.__proto__ || Object.getPrototypeOf(ask)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.data = {}, _this.events = {}, _this.watch = {}, 
        _this.methods = {
            goAsk: function goAsk() {
                wx.navigateTo({
                    url: "/pages/qa/askStock"
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    return ask;
}(_wepy2.default.component);

exports.default = ask;