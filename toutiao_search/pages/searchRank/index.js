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

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;
        if (getter === undefined) {
            return undefined;
        }
        return getter.call(receiver);
    }
};

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../api/index.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    }, function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
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

var getIcon = function getIcon(tag) {
    switch (tag) {
      case 2:
        return "/statics/image/icon-hot@2x.png";
        break;

      case 3:
        return "/statics/image/icon-recommend@2x.png";
        break;

      case 5:
        return "/statics/image/icon-local@2x.png";
        break;

      case 1:
        return "/statics/image/icon-new@2x.png";
        break;

      case 4:
        return "/statics/image/icon-unique@2x.png";
        break;

      default:
        return "/statics/image/icon-hot@2x.png";
    }
};

var Index = function(_BaseComponent) {
    _inherits(Index, _BaseComponent);
    function Index() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Index);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.$usedState = [ "anonymousState__temp", "loopArray0", "data" ], _this.state = {
            data: []
        }, _this.config = {
            usingComponents: {
                // NOTE: 自定义组件使用首字母小写
                statusbar: "../../components/StatusBar/StatusBar"
            }
        }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Index, [ {
        key: "_constructor",
        value: function _constructor(props) {
            _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage() {
            Utils.Tea.event("mp_share", {
                path: this.$scope.route
            });
            return {
                title: "头条热搜榜",
                path: "pages/searchRank/index?share=1"
            };
        }
    }, {
        key: "componentWillMount",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var _ref3, hotSearchList;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _index3.getHotSearch)();

                          case 2:
                            _ref3 = _context.sent;
                            hotSearchList = _ref3.hotSearchList;
                            this.setState({
                                data: hotSearchList
                            });

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function componentWillMount() {
                return _ref2.apply(this, arguments);
            }
            return componentWillMount;
        }()
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "componentDidShow",
        value: function componentDidShow() {}
    }, {
        key: "componentDidHide",
        value: function componentDidHide() {}
    }, {
        key: "handleClick",
        value: function handleClick(e) {
            var item = e.currentTarget.dataset.item;
            _index2.default.navigateTo({
                url: "/pages/search/index?query=" + encodeURIComponent(item.hotSearchWord) + "&source=trending_list"
            });
        }
    }, {
        key: "_createData",
        value: function _createData() {
            this.__state = arguments[0] || this.state || {};
            this.__props = arguments[1] || this.props || {};
            var anonymousState__temp = "/statics/image/search-rank-banner@2x.png";
            var loopArray0 = this.__state.data.map(function(i, key) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp3 = i.$original.tag ? getIcon(i.$original.tag) : null;
                var $loopState__temp5 = i.$original.tag ? (0, _index.internal_inline_style)({
                    width: i.$original.tag === 5 ? "28px" : "16px"
                }) : null;
                return {
                    $loopState__temp3: $loopState__temp3,
                    $loopState__temp5: $loopState__temp5,
                    $original: i.$original
                };
            });
            Object.assign(this.__state, {
                anonymousState__temp: anonymousState__temp,
                loopArray0: loopArray0
            });
            return this.__state;
        }
    } ]);
    return Index;
}(_index.Component);

Index.properties = {};

Index.$$events = [ "handleClick" ];

exports.default = Index;

Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));