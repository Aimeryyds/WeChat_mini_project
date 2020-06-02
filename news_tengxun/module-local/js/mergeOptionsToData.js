Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.assign({}, e);
    for (var r in t) t.hasOwnProperty(r) && "function" == typeof t[r] && delete t[r];
    return t;
};

exports.default = e;