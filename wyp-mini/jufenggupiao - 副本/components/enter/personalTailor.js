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

var _api = require("./../../service/api/api.js");

var _cell = require("./../cell.js");

var _cell2 = _interopRequireDefault(_cell);

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

var personal = function(_wepy$component) {
    _inherits(personal, _wepy$component);
    function personal() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, personal);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = personal.__proto__ || Object.getPrototypeOf(personal)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.$repeat = {
            completeArray: {
                com: "cellBox",
                props: "source.sync"
            }
        }, _this.$props = {
            cellBox: {
                "xmlns:v-bind": {
                    value: "",
                    for: "completeArray",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:source.sync": {
                    value: "item",
                    type: "item",
                    for: "completeArray",
                    item: "item",
                    index: "index",
                    key: "key"
                }
            }
        }, _this.$events = {}, _this.components = {
            mask: _mask2.default,
            cellBox: _cell2.default
        }, _this.data = {
            region: [],
            // customItem: '全部',
            ageArray: [ {
                name: "50后",
                id: "50后"
            }, {
                name: "60后",
                id: "60后"
            }, {
                name: "70后",
                id: "70后"
            }, {
                name: "80后",
                id: "80后"
            }, {
                name: "90后",
                id: "90后"
            }, {
                name: "00后",
                id: "00后"
            } ],
            area: [],
            completeArray: [],
            // 不包含开始的默认年龄段
            sortKey: [ [ "sex", "性别" ], [ "occupation", "职业" ], [ "region", "所在区域" ], [ "investorYear", "投资年限" ], [ "investorFund", "投入资金量" ], [ "riskHobby", "风险偏好" ], [ "nowSpace", "当前仓位" ], [ "operateStyle", "操作风格" ] ],
            completeObject: {}
        }, _this.events = {
            "get-Personaltailor": function getPersonaltailor($event) {
                _this.getcard();
            },
            "modify-val": function modifyVal(obj) {
                _this.completeObject = Object.assign({}, _this.completeObject, obj);
            }
        }, _this.watch = {}, _this.methods = {
            customizedsss: function customizedsss() {
                this.setSrdzDict();
            },
            tap: function tap() {
                this.$emit("closeModal", 1);
            },
            skip: function skip() {
                this.$emit("closeModal", 1);
            },
            bindAreaChange: function bindAreaChange(e) {
                // 选择区域
                this.area = e.detail.code;
                this.region = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(personal, [ {
        key: "getcard",
        // 获取私人订制选项卡
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var _this2 = this;
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _api.getSrdzDict)();

                          case 2:
                            res = _context.sent;
                            this.sortKey.forEach(function(ele) {
                                _this2.completeArray.push({
                                    title: ele[1],
                                    value: res.data[ele[0]],
                                    index: -1,
                                    key: ele[0]
                                });
                            });
                            // 开始位置插入年龄
                                                        this.completeArray.unshift({
                                title: "年龄",
                                index: -1,
                                value: this.ageArray,
                                key: "age"
                            });
                            this.$apply();

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getcard() {
                return _ref2.apply(this, arguments);
            }
            return getcard;
        }()
    }, {
        key: "setSrdzDict",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var _area, _params, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _area = {
                                province: this.area.length > 0 ? this.area[0] : "",
                                area: this.area.length > 0 ? this.area[1] : ""
                            };
                            _params = Object.assign({}, this.completeObject, _area);
                            _context2.next = 4;
                            return (0, _api.setSrdzDict)({
                                params: _params
                            });

                          case 4:
                            res = _context2.sent;
                            if (res.code == 0) {
                                this.$emit("closeModal", 1);
                            }

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function setSrdzDict() {
                return _ref3.apply(this, arguments);
            }
            return setSrdzDict;
        }()
    } ]);
    return personal;
}(_wepy2.default.component);

exports.default = personal;