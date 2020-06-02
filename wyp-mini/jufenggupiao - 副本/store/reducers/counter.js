Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleActions;

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var _reduxActions = require("./../../npm/redux-actions/lib/index.js");

var _counter = require("./../types/counter.js");

var _state = require("./../state.js");

var _state2 = _interopRequireDefault(_state);

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

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _counter.STOCK_LIVE, function(state, action) {
    // 股市直播
    return _extends({}, state, {
        tab: 0
    });
}), _defineProperty(_handleActions, _counter.MY_SERVICE, function(state, action) {
    // 我的服务
    return _extends({}, state, {
        tab: 1
    });
}), _defineProperty(_handleActions, _counter.CHOOSE_STOCK, function(state, action) {
    // 自选股
    return _extends({}, state, {
        tab: 2
    });
}), _defineProperty(_handleActions, _counter.QA, function(state, action) {
    // 问答
    return _extends({}, state, {
        tab: 3
    });
}), _handleActions), _extends({}, _state2.default));