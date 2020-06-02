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

var _wepy = require("./../../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require("./../../service/api/api.js");

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

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

var nices = function(_wepy$component) {
    _inherits(nices, _wepy$component);
    function nices() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, nices);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = nices.__proto__ || Object.getPrototypeOf(nices)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {
            source: {
                type: Object,
                default: null
            }
        }, _this.data = {}, _this.methods = {
            add: function add() {
                var _par = void 0;
                // 1是已收藏  0为收藏
                                if (this.source.is_favorites == 0) {
                    _par = 1;
                } else {
                    _par = 2;
                }
                this.addLive({
                    id: this.source.id,
                    op: _par
                }, this);
            }
        }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(nices, [ {
        key: "onLoad",
        value: function onLoad() {}
        // 在Page和Component共用的生命周期函数
        // 收藏/删除
        }, {
        key: "addLive",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee(parsms, env) {
                var _old, self, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _Tips2.default.loading();
                            _old = this.source;
                            self = this;
                            _context.next = 5;
                            return (0, _api.liveAdd)({
                                params: {
                                    id: parsms.id,
                                    op: parsms.op
                                }
                            });

                          case 5:
                            res = _context.sent;
                            if (res.code == 0) {
                                if (parsms.op == 1) {
                                    this.source.is_favorites = 1;
                                    this.source.animatePalying = true;
                                    setTimeout(function() {
                                        self.$emit("remove-follow", _old.id);
                                    }, 1e3);
                                    _Tips2.default.success("已收藏");
                                } else {
                                    this.source.animatePalying = false;
                                    this.source.is_favorites = 0;
                                    _Tips2.default.success("已取消");
                                    this.$apply();
                                }
                            }
                            this.$apply();
                            _Tips2.default.loaded();

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function addLive(_x, _x2) {
                return _ref2.apply(this, arguments);
            }
            return addLive;
        }()
    } ]);
    return nices;
}(_wepy2.default.component);

exports.default = nices;