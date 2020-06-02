function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (a[o] = t[o]);
    }
    return a;
}, t = a(require("../../../network/api")), o = a(require("../../../utils/util.js"));

Page({
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10
        }
    },
    renderMiaosha: function(a, e) {
        var t = a;
        return t.overTime = e, t.leftTime = o.default.renderTimer(e), t.allSeconds = a.allSeconds - 1, 
        3 == a.seckillStatus && 0 == a.overTime && (t.overTime = a.allSeconds, t.leftTime = o.default.renderTimer(a.allSeconds), 
        t.seckillStatus = 2), t;
    },
    onUnload: function() {
        clearInterval(this.timer), this.timer = void 0;
    },
    onLoad: function(a) {
        var e = this.data.query;
        console.log(a), a.dsId && "undefined" !== a.dsId && (e.dsId = a.dsId), a.location && "undefined" !== a.location && (e.location = a.location), 
        a.dataType && "undefined" !== a.dataType && (e.dataType = a.dataType), this.setData({
            query: e
        }), this.queryMiaoshaList(this.data.query, !0);
    },
    queryMiaoshaList: function(a, o) {
        var r = this;
        t.default.queryDatasourceMiaosha(a).then(function(a) {
            console.log(a), r.setData({
                data: o ? a.data.data : r.data.data.concat(a.data.data),
                isShow: !0,
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: e({}, r.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                })
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    makeMiaoItem: function(a) {
        var e = a.currentTarget.dataset.miao;
        wx.navigateTo({
            url: "/pages/products/show/show?id=" + e.goodsId
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(a), 
        this.setData({
            loadingmore: !0
        }), this.queryMiaoshaList(this.data.query, !1));
    }
});