Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api"));

exports.default = {
    onReady: function() {},
    onShow: function() {
        var t = getApp().getFlash("keyword");
        console.log(getApp().getFlash("keyword"), "++++++++++++++++", t), t || "" == t ? this.setData({
            keyword: t,
            "query.title": t,
            isShow: !1
        }) : this.setData({
            keyword: "",
            "query.title": ""
        }), this.setData({
            "query.pageNo": 1,
            scrollTop: 0
        }), this.data.isShow || wx.showLoading({
            title: "加载中"
        }), "group" == this.data.type ? this.queryGroupNewsinfoList(this.data.query, !0) : this.queryNewsinfoList(this.data.query, !0), 
        this.queryCategoryList();
    },
    handlenews: function(t) {
        console.log(t.currentTarget.dataset);
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/sources/newsinfo/newsinfodetail?id=" + a
        });
    },
    bindMultiPickerChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var a = this.data.categoryList;
        if (0 == t.detail.value[0]) this.setData({
            "query.categoryId": "",
            "query.pageNo": 1
        }), wx.showLoading({
            title: "加载中"
        }), this.queryNewsinfoList(this.data.query, !0); else {
            var e = void 0;
            e = "全部分类" == a[t.detail.value[0]].categoryList[0].name ? a[t.detail.value[0]].id : a[t.detail.value[0]].categoryList[t.detail.value[1]].id, 
            console.log(e), this.setData({
                "query.categoryId": e,
                "query.pageNo": 1
            }), wx.showLoading({
                title: "加载中"
            }), this.queryNewsinfoList(this.data.query, !0);
        }
    },
    bindMultiPickerColumnChange: function(t) {
        if (console.log("修改的列为", t.detail.column, "，值为", t.detail.value), 0 == t.detail.column) {
            var a = this.data.categoryList, e = [ a, a[t.detail.value].categoryList ], o = this.data.multiIndex;
            o[0] = t.detail.value, o[1] = 0, this.setData({
                multiArray: e,
                multiIndex: o
            });
        } else {
            var i = this.data.multiIndex;
            i[1] = t.detail.value, this.setData({
                multiIndex: i
            });
        }
    },
    queryCategoryList: function() {
        var t = this;
        a.default.queryCategoryList().then(function(a) {
            console.log(a.data, "res.data"), t.setData({
                categoryList: a.data
            });
            var e = t.data.categoryList, o = {
                name: "全部分类",
                categoryList: [ {
                    name: "全部分类"
                } ]
            };
            e.unshift(o);
            for (var i = 0; i < e.length; i++) !e[i].categoryList.length > 0 && (e[i].categoryList = [ {
                name: "全部分类"
            } ]);
            var s = [ e, e[0].categoryList ];
            t.setData({
                multiArray: s,
                categoryList: e,
                multiIndex: [ 0, 0 ]
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    queryNewsinfoList: function(e, o) {
        var i = this, s = this.data, r = s.from, n = s.navToDetail;
        a.default.queryNewsinfoList(e).then(function(a) {
            if (wx.hideLoading(), i.setData({
                list: o ? a.data.data : i.data.list.concat(a.data.data),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, i.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                }),
                scrollTop: o ? 0 : i.data.scrollTop,
                isShow: !0
            }), "page" == r && n && a.data.data && 1 == a.data.data.length) {
                var e = a.data.data[0];
                i.setData({
                    navToDetail: !1
                }), wx.redirectTo({
                    url: "/pages/sources/newsinfo/newsinfodetail?id=" + e.id
                });
            } else i.setData({
                navToDetail: !1
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    queryGroupNewsinfoList: function(e, o) {
        var i = this;
        a.default.queryGroupInfo(e).then(function(a) {
            wx.hideLoading(), i.setData({
                list: o ? a.data.data : i.data.list.concat(a.data.data),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, i.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                }),
                scrollTop: o ? 0 : i.data.scrollTop,
                isShow: !0
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    lower: function() {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), wx.showLoading({
            title: "加载中"
        }), "group" == this.data.type ? this.queryGroupNewsinfoList(this.data.query, !1) : this.queryNewsinfoList(this.data.query, !1));
    },
    handlescroll: function(t) {
        this.setData({
            scrollTop: t.detail.scrollTop
        });
    },
    handlesearch: function() {
        var t = this.data.keyword || "";
        wx.navigateTo({
            url: "/pages/sources/newsinfo/newssearch?keyword=" + t
        });
    }
};