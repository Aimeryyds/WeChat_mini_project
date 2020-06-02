function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = e(require("../../component/o2o-orders/orders")), t = e(require("../../utils/util")), u = require("../../dist/index"), i = {
    data: {}
};

t.default.registComp(i, r.default, u), Page(i);