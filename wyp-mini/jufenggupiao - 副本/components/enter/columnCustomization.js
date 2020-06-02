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

var _mask = require("./mask.js");

var _mask2 = _interopRequireDefault(_mask);

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _api = require("./../../service/api/api.js");

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

var column = function(_wepy$component) {
    _inherits(column, _wepy$component);
    function column() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, column);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = column.__proto__ || Object.getPrototypeOf(column)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.components = {
            mask: _mask2.default
        }, _this.data = {
            list: [],
            chooseList: []
        }, _this.events = {
            "get-CustomColumnist": function getCustomColumnist($event) {
                _this.getDataCustom();
            }
        }, _this.watch = {}, _this.methods = {
            skip: function skip() {
                this.$emit("closeModal", 4);
                this.cancelFirstStatus();
            },
            custom: function custom() {
                if (!this.chooseList.length) {
                    wx.showToast({
                        title: "请选择喜欢的栏目~",
                        icon: "none",
                        duration: 1500
                    });
                    return;
                }
                this.setDataCustom();
            },
            chooseColumn: function chooseColumn(item) {
                var _isDefault = item.is_default;
                var _id = item.id;
                var _existence = this.chooseList.indexOf(_id);
                // 0默认,1不是默认
                                if (!_isDefault) {
                    if (_existence < 0) {
                        this.chooseList.push(_id);
                    }
                } else {
                    if (_existence >= 0) {
                        this.chooseList.splice(_existence, 1);
                    }
                }
                this.list.forEach(function(element) {
                    if (element.id == _id) {
                        element.is_default = !element.is_default;
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(column, [ {
        key: "getDataCustom",
        // 获取栏目定制
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var _this2 = this;
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _api.getCustomColumnist)();

                          case 2:
                            res = _context.sent;
                            if (res.code == 0) {
                                this.list = res.data;
                                this.list.forEach(function(ele) {
                                    ele.is_default = ele.is_default == "1" ? true : false;
                                    if (ele.is_default) {
                                        _this2.chooseList.push(ele.id);
                                    }
                                });
                                this.$apply();
                            }

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getDataCustom() {
                return _ref2.apply(this, arguments);
            }
            return getDataCustom;
        }()
    }, {
        key: "setDataCustom",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return (0, _api.setCustomColumnist)({
                                params: {
                                    id: this.chooseList.join()
                                }
                            });

                          case 2:
                            res = _context2.sent;
                            if (res.code == 0) {
                                this.$emit("closeModal", 2);
                                this.cancelFirstStatus();
                            }

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function setDataCustom() {
                return _ref3.apply(this, arguments);
            }
            return setDataCustom;
        }()
    }, {
        key: "cancelFirstStatus",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return (0, _api.cancelFirstLogin)();

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function cancelFirstStatus() {
                return _ref4.apply(this, arguments);
            }
            return cancelFirstStatus;
        }()
    } ]);
    return column;
}(_wepy2.default.component);

exports.default = column;