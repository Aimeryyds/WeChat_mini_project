function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../component/supply/supply")), u = e(require("../../utils/util")), r = require("../../dist/index"), i = {
    data: {}
};

u.default.registComp(i, t.default, r.TopTips, {
    onShareAppMessage: function() {
        return {
            path: "/tabs/home/index"
        };
    }
}), Page(i);