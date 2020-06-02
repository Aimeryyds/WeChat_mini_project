Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = mixin;

function mixin() {
    for (var _len = arguments.length, behaviors = Array(_len), _key = 0; _key < _len; _key++) {
        behaviors[_key] = arguments[_key];
    }
    return function(_ref) {
        var prototype = _ref.prototype;
        behaviors.forEach(function(behavior) {
            Object.keys(behavior).forEach(function(key) {
                var mixinKey = "__mixin_" + key;
                prototype[mixinKey] = prototype[mixinKey] || [ prototype[key] ];
                prototype[mixinKey] = prototype[mixinKey].concat(behavior[key]).filter(function(fn) {
                    return typeof fn == "function";
                });
                prototype[key] = function() {
                    if (prototype[mixinKey].length == 1) return prototype[mixinKey][0].apply(this, arguments);
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = prototype[mixinKey][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var fn = _step.value;
                            if (fn.apply(this, arguments) !== undefined) throw new Error("A mixed in method returned a value when undefined was expected.");
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator["return"]) {
                                _iterator["return"]();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                };
            });
        });
    };
}

module.exports = exports["default"];