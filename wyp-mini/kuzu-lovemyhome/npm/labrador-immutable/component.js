function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var r = e(require("../babel-runtime/core-js/object/get-prototype-of.js")), u = e(require("../babel-runtime/helpers/classCallCheck.js")), s = e(require("../babel-runtime/helpers/createClass.js")), l = e(require("../babel-runtime/helpers/possibleConstructorReturn.js")), a = e(require("../babel-runtime/helpers/inherits.js")), i = require("../labrador/index.js"), n = e(require("../seamless-immutable/src/seamless-immutable.js"));

wx.immutable = n.default;

var o = (0, n.default)({}), m = function(e) {
    function t() {
        return (0, u.default)(this, t), (0, l.default)(this, (t.__proto__ || (0, r.default)(t)).apply(this, arguments));
    }
    return (0, a.default)(t, e), (0, s.default)(t, [ {
        key: "state",
        get: function() {
            return this._immutable_state || o;
        },
        set: function(e) {
            this._immutable_state = (0, n.default)(e);
        }
    }, {
        key: "props",
        get: function() {
            return this._immutable_props || o;
        },
        set: function(e) {
            this._immutable_props = (0, n.default)(e);
        }
    } ]), t;
}(i.Component);

t.default = m;