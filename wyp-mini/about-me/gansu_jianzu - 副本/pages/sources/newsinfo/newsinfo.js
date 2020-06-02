var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../component/newsinfo/newsinfo"));

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
    onLoad: function(e) {
        e.dsId && this.setData({
            "query.dsId": e.dsId
        }), e.dataType && this.setData({
            "query.dataType": e.dataType
        }), e.type && this.setData({
            type: e.type
        }), e.categoryIds && this.setData({
            "query.cids": e.categoryIds
        }), e.from && this.setData({
            from: e.from,
            navToDetail: !0
        });
    }
}));