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

var _index = require("./live/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./myService/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("./questionAndAnswer/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = require("./selfSelectedStock/index.js");

var _index8 = _interopRequireDefault(_index7);

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

var behaviors = [ {
    event: function event(_e) {
        _e.$broadcast("get-live-data");
        _e.$broadcast("get-live-news-data");
    }
}, {
    event: function event(_e) {
        _e.$broadcast("get-myService-data");
    }
}, {
    event: function event(_e) {
        _e.$broadcast("get-stock-home");
    }
}, {
    event: function event(_e) {
        _e.$broadcast("load-more-question", "init");
    }
} ];

var tabSwitch = function(_wepy$component) {
    _inherits(tabSwitch, _wepy$component);
    function tabSwitch() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, tabSwitch);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tabSwitch.__proto__ || Object.getPrototypeOf(tabSwitch)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.components = {
            live: _index2.default,
            myService: _index4.default,
            question: _index6.default,
            stock: _index8.default
        }, _this.props = {
            tab: {
                type: Number,
                default: 0
            }
        }, _this.watch = {
            tab: function tab(newValue, oldValue) {
                clearInterval(wx.selfInter);
                clearInterval(wx.liveNewsInter);
                behaviors[newValue].event(this);
            }
        }, _this.data = {}, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(tabSwitch, [ {
        key: "onLoad",
        value: function onLoad() {
            var _this2 = this;
            setTimeout(function() {
                _this2.$broadcast("get-live-data");
            }, 0);
        }
    } ]);
    return tabSwitch;
}(_wepy2.default.component);

exports.default = tabSwitch;