function e() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "time", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = "server_mtime", r = 1;
    return "name" === e && (n = "server_filename", r = -1), t.sort(function(e, t) {
        return e[n] < t[n] ? r : -r;
    });
}

function t() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "time", n = [], r = [];
    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).forEach(function(e) {
        1 == +e.isdir && 6 == +e.category ? n.push(e) : r.push(e);
    }), e(t, n).concat(e(t, r));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.sortFileList = function() {
    return t(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "time", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []);
};