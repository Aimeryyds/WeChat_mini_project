function e(e) {
    return "[object Arguments]" == Object.prototype.toString.call(e);
}

function t(e) {
    return e && "object" == (void 0 === e ? "undefined" : (0, o.default)(e)) && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1;
}

var r = module.exports = {}, o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../babel-runtime/helpers/typeof.js")), n = "[object Arguments]" == function() {
    return Object.prototype.toString.call(arguments);
}();

(r = module.exports = n ? e : t).supported = e, r.unsupported = t;