function addZero(e) {
    return parseInt(e) < 10 && (e = "0" + e), e;
}

function getMyDate(e) {
    var t = new Date(e), r = t.getFullYear(), a = t.getMonth() + 1, n = t.getDate();
    return r + "." + addZero(a) + "." + addZero(n);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = getMyDate;