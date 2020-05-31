var r = Object.assign || function(r) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    }
    return r;
}, t = {};

(0, function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../popupBehavior.js")).default)({
    options: {},
    data: r({}, t),
    methods: {}
});