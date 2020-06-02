function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = e(require("../../component/brandlist/brandlist")), t = {
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 20
        }
    }
};

e(require("../../utils/util")).default.registComp(t, r.default), Page(t);