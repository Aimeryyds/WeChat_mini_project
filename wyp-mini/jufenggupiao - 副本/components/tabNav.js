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

var _dec, _class;

var _wepy = require("./../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require("./../npm/wepy-redux/lib/index.js");

var _index = require("./../store/types/index.js");

var _up = require("./up.js");

var _up2 = _interopRequireDefault(_up);

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

var tabNav = (_dec = (0, _wepyRedux.connect)({}, {
    STOCK_LIVE: _index.STOCK_LIVE,
    MY_SERVICE: _index.MY_SERVICE,
    CHOOSE_STOCK: _index.CHOOSE_STOCK,
    QA: _index.QA
}), _dec(_class = function(_wepy$component) {
    _inherits(tabNav, _wepy$component);
    function tabNav() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, tabNav);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tabNav.__proto__ || Object.getPrototypeOf(tabNav)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.watch = {}, _this.props = {
            tab: {
                type: Number,
                default: 0
            }
        }, _this.data = {
            toggleTab: false,
            isShow: false
        }, _this.events = {
            "hide-box": function hideBox($event) {
                _this.isShow = false;
            }
        }, _this.$repeat = {}, _this.$props = {
            up: {}
        }, _this.$events = {}, _this.components = {
            up: _up2.default
        }, _this.methods = {
            showMore: function showMore() {
                this.isShow = true;
            },
            goAsk: function goAsk() {
                this.isShow = false;
                wx.navigateTo({
                    url: "/pages/qa/askStock"
                });
            },
            goMine: function goMine() {
                this.isShow = false;
                wx.navigateTo({
                    url: "/pages/mine/me"
                });
            },
            goSearch: function goSearch() {
                this.isShow = false;
                wx.navigateTo({
                    url: "/pages/search?source=home"
                });
            },
            disappear: function disappear() {
                this.toggleTab = false;
                this.isShow = false;
            },
            appear: function appear() {
                this.toggleTab = true;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(tabNav, [ {
        key: "onLoad",
        value: function onLoad() {
            this.isShow = false;
        }
    } ]);
    return tabNav;
}(_wepy2.default.component)) || _class);

exports.default = tabNav;