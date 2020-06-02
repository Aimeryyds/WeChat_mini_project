function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }
    return t;
}, a = t(require("../../../network/api")), o = t(require("../../../utils/notification")), n = t(require("../../../utils/const.js")), s = t(require("../../../dist/index"));

Page(Object.assign({}, s.default.Toast, {
    data: {
        statusType: [ "已发布", "草稿" ],
        currentType: 0,
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 5,
            status: 2
        }
    },
    onLoad: function(t) {
        var a = t.status, o = 2 == (a = a || 2) ? 0 : 1;
        this.setData({
            status: a,
            "query.status": a,
            currentType: o
        }), this.querySupplyMy(e({}, this.data.query), !0);
    },
    onShow: function() {
        var t = this;
        this.querySupplyMy(e({}, this.data.query), !0), o.default.register(n.default.action.SUPPLY_TYPE, this, function(e) {
            console.log("-------------------\x3e", e);
            var a = e.data.status;
            console.log("==========>", a);
            var o = 2 == (a = a || 2) ? 0 : 1;
            t.setData({
                status: a,
                "query.status": a,
                currentType: o
            });
        });
    },
    querySupplyMy: function(t, o) {
        var n = this;
        wx.showLoading({
            title: "请稍后"
        }), a.default.querySupplyMy(t).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), n.setData({
                gongqiuList: o ? t.data.data : n.data.gongqiuList.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: e({}, n.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            }), console.log(t, "++++++++++++");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    statusTap: function(t) {
        var a = t.currentTarget.dataset.index;
        console.log("curType---\x3e", a);
        var o = 0 == a ? 2 : 1 == a ? 1 : "";
        console.log("status---\x3e", o), this.setData({
            currentType: a,
            "query.status": o,
            "query.pageNo": 1
        }), this.querySupplyMy(e({}, this.data.query), !0), this.onShow();
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.querySupplyMy(e({}, this.data.query), !1));
    },
    editData: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.infotype;
        wx.navigateTo({
            url: "/pages/gongqiu/new/index?action=edit&id=" + e + "&infoType=" + a + "&isback=true"
        });
    },
    removeData: function(t) {
        var o = this, n = t.currentTarget.dataset.id;
        console.log(t.currentTarget.dataset.id, "22222222222222"), wx.showModal({
            content: "确定要删除吗？",
            success: function(t) {
                t.confirm ? a.default.querySupplyDel({
                    id: n
                }).then(function(t) {
                    console.log(t, "++++");
                    var a = o.data.gongqiuList.filter(function(t) {
                        return t.id != n;
                    });
                    console.log(a, "..................."), wx.hideLoading(), o.setData({
                        gongqiuList: a,
                        isShow: !0
                    }), o.data.loadmore && a.length < 5 && o.querySupplyMy(e({}, o.data.query), !1);
                }).catch(function(t) {
                    return console.log(t);
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    delReason: function(t) {
        var e = t.currentTarget.dataset.item.delReason;
        2 == t.currentTarget.dataset.item.source && this.showToast(e);
    },
    handleReleaseBtn: function(t) {
        console.log(t.currentTarget.dataset.ctrl, "8888888888888888"), wx.showActionSheet({
            itemList: [ "发供应", "发求购" ],
            success: function(t) {
                0 == t.tapIndex ? wx.navigateTo({
                    url: "/pages/gongqiu/new/index?infoType=2&action=new&isback=true"
                }) : 1 == t.tapIndex && wx.navigateTo({
                    url: "/pages/gongqiu/new/index?infoType=3&action=new&isback=true"
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        }), this.setData({});
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    onUnload: function() {
        o.default.remove(n.default.action.SUPPLY_TYPE, this);
    }
}));