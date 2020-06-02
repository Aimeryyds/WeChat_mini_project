function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = module.exports = {};

e.__esModule = !0;

var u = t(require("../core-js/symbol/iterator.js")), n = t(require("../core-js/symbol.js")), f = "function" == typeof n.default && "symbol" === o(u.default) ? function(t) {
    return void 0 === t ? "undefined" : o(t);
} : function(t) {
    return t && "function" == typeof n.default && t.constructor === n.default && t !== n.default.prototype ? "symbol" : void 0 === t ? "undefined" : o(t);
};

e.default = "function" == typeof n.default && "symbol" === f(u.default) ? function(t) {
    return void 0 === t ? "undefined" : f(t);
} : function(t) {
    return t && "function" == typeof n.default && t.constructor === n.default && t !== n.default.prototype ? "symbol" : void 0 === t ? "undefined" : f(t);
};