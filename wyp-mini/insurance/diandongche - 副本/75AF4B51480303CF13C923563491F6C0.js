Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = function(e) {
    var t = 0 < arguments.length && void 0 !== e ? e : {}, r = Object.assign({}, t);
    for (var o in r) r.hasOwnProperty(o) && "function" == typeof r[o] && delete r[o];
    return r;
};