Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(r, e) {
    var t = {
        dataArr: [],
        errArr: []
    };
    return 0 == r.length || 0 == e.length ? t : (r.forEach(function(r) {
        var a = 0;
        e.forEach(function(e) {
            void 0 !== r[e] && "--" !== r[e] || (a += 1);
        }), a > 0 ? t.errArr.push(r) : t.dataArr.push(r);
    }), t);
};