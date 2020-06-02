Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.format = function(e) {
    return e <= 0 ? "0" : e < 1e4 ? e.toString() : e < 1e5 ? (e / 1e4).toFixed(1).replace(/\.?0*$/gi, "") + "万" : e <= 1e8 ? (e / 1e4).toFixed(1) + "万+" : (e / 1e7).toFixed(1).replace(/\.?0*$/gi, "") + "亿+";
};