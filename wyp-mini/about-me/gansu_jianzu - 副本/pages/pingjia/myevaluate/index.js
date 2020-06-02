var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
    }
    return a;
}, t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../network/api.js"));

Page({
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 3
        }
    },
    onLoad: function(t) {
        this.setData({
            sType: t.sType
        }), this.queryMyEvaluate(a({}, this.data.query), !0);
    },
    queryMyEvaluate: function(e, o) {
        var r = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryMyEvaluate(e).then(function(t) {
            wx.hideLoading(), r.setData({
                evaluateData: o ? t.data : a({}, r.data.evaluateData, {
                    data: r.data.evaluateData.data.concat(t.data.data)
                }),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, r.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }),
                isShow: !0
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.queryMyEvaluate(a({}, this.data.query), !1));
    }
});