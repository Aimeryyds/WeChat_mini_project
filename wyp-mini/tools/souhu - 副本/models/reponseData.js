function t(t) {
    return t && "parseArrayObject" in t;
}

function e(t) {
    return t && "parseObject" in t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isArrayData = t, exports.isBasicData = e;

var a = function() {
    function a(a, s) {
        if (this.message = "", this.status = 0, this.message = a.message || "", this.status = a.status || 0, 
        t(s)) if (a.data && a.data instanceof Array) {
            var r = s.parseArrayObject;
            this.data = a.data.map(function(t) {
                return new r(t);
            });
        } else this.data = []; else if (e(s)) {
            var n = s.parseObject;
            this.data = new n(a.data);
        } else this.data = a || {};
    }
    return a.create = function() {
        return new a(arguments[0], arguments[1]);
    }, a;
}();

exports.ResponseData = a;