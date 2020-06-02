function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../component/about/about")), u = {
    data: {}
};

e(require("../../utils/util")).default.registComp(u, t.default, {
    onShareAppMessage: function() {
        return {
            path: "/tabs/home/index"
        };
    }
}), Page(u);