Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require("./../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

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

var wxRequest = function() {
    var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
        var setting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _wepy2.default.request({
                        url: url,
                        method: setting.method || "post",
                        data: setting.params || {},
                        header: {
                            "Content-Type": "application/json"
                        }
                    });

                  case 2:
                    res = _context.sent;
                    return _context.abrupt("return", res);

                  case 4:
                  case "end":
                    return _context.stop();
                }
            }
        }, _callee, undefined);
    }));
    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

exports.default = wxRequest;