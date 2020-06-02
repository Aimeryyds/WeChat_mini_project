Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isPresetColor = exports.colors = void 0;

var e = {
    light: "#ddd",
    stable: "#b2b2b2",
    positive: "#387ef5",
    calm: "#11c1f3",
    balanced: "#33cd5f",
    energized: "#ffc900",
    assertive: "#ef473a",
    royal: "#886aea",
    dark: "#444"
};

exports.colors = e;

exports.isPresetColor = function(r) {
    return !!r && (e[r] ? e[r] : r);
};