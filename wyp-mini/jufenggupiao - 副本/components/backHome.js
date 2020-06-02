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

var backHome = function(_wepy$component) {
    _inherits(backHome, _wepy$component);
    function backHome() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, backHome);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = backHome.__proto__ || Object.getPrototypeOf(backHome)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {
            text: String
        }, _this.data = {
            isShow: false
        }, _this.events = {}, _this.watch = {}, _this.methods = {
            goHome: function goHome() {
                wx.redirectTo({
                    url: "/pages/index"
                });
                wx.backHomeButtonIsClick = true;
                this.isShow = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(backHome, [ {
        key: "onLoad",
        value: function onLoad() {
            console.log("wx.isFromShareChannel->是否分享渠道", wx.isFromShareChannel);
            console.log("wx.ShareUrlIsIndex->是否首页", wx.ShareUrlIsIndex);
            console.log("wx.backHomeButtonIsClick->是否有点击态", wx.backHomeButtonIsClick);
            if (wx.isFromShareChannel && !wx.ShareUrlIsIndex && !wx.backHomeButtonIsClick) {
                this.isShow = true;
            }
        }
    } ]);
    return backHome;
}(_wepy2.default.component);

exports.default = backHome;