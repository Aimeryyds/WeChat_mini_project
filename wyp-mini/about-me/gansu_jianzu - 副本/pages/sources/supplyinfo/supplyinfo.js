function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var u = e(require("../../../component/supply/supply")), t = e(require("../../../utils/util")), i = require("../../../dist/index"), r = {
    data: {}
};

t.default.registComp(r, u.default, i.TopTips, {}), Page(r);