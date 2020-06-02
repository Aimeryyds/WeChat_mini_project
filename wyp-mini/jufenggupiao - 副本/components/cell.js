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

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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

var cell = function(_wepy$component) {
    _inherits(cell, _wepy$component);
    function cell() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, cell);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cell.__proto__ || Object.getPrototypeOf(cell)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {
            source: {
                type: Object,
                default: null
            }
        }, _this.data = {}, _this.methods = {
            bindChange: function bindChange(e) {
                this.source.index = e.detail.value;
                var _index = e.detail.value;
                var _obj = _defineProperty({}, this.source.key, this.source.value[_index].id);
                this.$emit("modify-val", _obj);
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    return cell;
}(_wepy2.default.component);

exports.default = cell;