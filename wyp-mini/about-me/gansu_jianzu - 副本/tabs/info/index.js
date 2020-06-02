var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../component/newsinfo/newsinfo"));

Page(Object.assign({}, e.default, {
    data: {
        list: [],
        categoryList: [],
        query: {
            pageNo: 1,
            pageSize: 10
        },
        loadmore: !1,
        loadingmore: !1
    },
    onLoad: function(e) {}
}));