function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../component/map/map")), r = {
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 20
        }
    }
};

e(require("../../utils/util")).default.registComp(r, a.default), Page(r);