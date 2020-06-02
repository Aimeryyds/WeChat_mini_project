function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _app = require("./app.js"), _app2 = _interopRequireDefault(_app), _page = require("./page.js"), _page2 = _interopRequireDefault(_page), _component = require("./component.js"), _component2 = _interopRequireDefault(_component), _event = require("./event.js"), _event2 = _interopRequireDefault(_event), _base = require("./base.js"), _base2 = _interopRequireDefault(_base), _util = require("./util.js"), _util2 = _interopRequireDefault(_util), _mixin = require("./mixin.js"), _mixin2 = _interopRequireDefault(_mixin);

exports.default = {
    event: _event2.default,
    app: _app2.default,
    component: _component2.default,
    page: _page2.default,
    mixin: _mixin2.default,
    $createApp: _base2.default.$createApp,
    $createPage: _base2.default.$createPage,
    $isEmpty: _util2.default.$isEmpty,
    $isEqual: _util2.default.$isEqual,
    $isDeepEqual: _util2.default.$isDeepEqual,
    $has: _util2.default.$has,
    $extend: _util2.default.$extend,
    $isPlainObject: _util2.default.$isPlainObject,
    $copy: _util2.default.$copy
};