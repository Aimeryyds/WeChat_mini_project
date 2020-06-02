function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../component/map/map")), t = {
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 20
        }
    }
};

e(require("../../utils/util")).default.registComp(t, a.default, {
    onShareAppMessage: function() {
        return {
            path: "/tabs/home/index"
        };
    }
}), Page(t);