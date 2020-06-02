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

var _wepy = require("./../wepy/lib/wepy.js");

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

var MyPage = function(_wepy$component) {
    _inherits(MyPage, _wepy$component);
    function MyPage() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, MyPage);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPage.__proto__ || Object.getPrototypeOf(MyPage)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {
            params: {
                type: Object,
                default: {
                    animate: "bounceIn",
                    activeColor: "red",
                    color: "#999999",
                    enableCancel: true
                },
                twoWay: true
            },
            active: {
                type: Boolean,
                default: false,
                twoWay: true
            }
        }, _this.customData = {}, _this.config = {}, _this.data = {
            animatePalying: false
        }, _this.components = {}, _this.mixins = [], _this.computed = {}, _this.watch = {
            params: function params(newValue, oldValue) {
                newValue.animate = newValue.animate ? newValue.animate : "bounceIn";
                newValue.activeColor = newValue.activeColor ? newValue.activeColor : "red";
                newValue.color = newValue.color ? newValue.color : "#999999";
                newValue.enableCancel = newValue.enableCancel ? newValue.enableCancel : true;
            }
        }, _this.methods = {
            toggle: function toggle() {
                var _this2 = this;
                var isToggleStatus = new Promise(function(resolve, reject) {
                    if (_this2.params.enableCancel) {
                        resolve();
                    } else {
                        if (_this2.active) {
                            reject();
                        } else {
                            resolve();
                        }
                    }
                });
                isToggleStatus.then(function() {
                    _this2.active = !_this2.active;
                    _this2.$apply();
                    if (_this2.active) {
                        _this2.animatePalying = true;
                        _this2.$apply();
                        var self = _this2;
                        setTimeout(function() {
                            self.animatePalying = false;
                            self.$apply();
                        }, 1e3);
                    }
                }, function() {
                    return false;
                });
            },
            confirm: function confirm() {}
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(MyPage, [ {
        key: "customFunction",
        // 自定义数据
        value: function customFunction() {}
        // 自定义方法
        }, {
        key: "onLoad",
        value: function onLoad() {}
        // 在Page和Component共用的生命周期函数
        }, {
        key: "onShow",
        // 声明组件之间的事件处理函数
        value: function onShow() {}
        // 只在Page中存在的页面生命周期函数
        // 只在Page实例中存在的配置数据，对应于原生的page.json文件
        // 页面所需数据均需在这里声明，可用于模板数据绑定
        // 声明页面中所引用的组件，或声明组件中所引用的子组件
        // 声明页面所引用的Mixin实例
        // 声明计算属性（详见后文介绍）
        // 声明数据watcher（详见后文介绍）
        // 声明页面wxml中标签的事件处理函数。注意，此处只用于声明页面wxml中标签的bind、catch事件，自定义方法需以自定义方法的方式声明
        } ]);
    return MyPage;
}(_wepy2.default.component);

exports.default = MyPage;