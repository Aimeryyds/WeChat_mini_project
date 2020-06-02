function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var o = module.exports = {};

Object.defineProperty(o, "__esModule", {
    value: !0
}), o.Component = o.PropTypes = void 0;

var r = require("../labrador/index.js"), t = e(r), u = e(require("./component.js"));

o.default = t.default, o.PropTypes = r.PropTypes, o.Component = u.default;