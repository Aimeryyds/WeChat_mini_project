function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var e = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, i = t(require("../../../network/api.js")), n = t(require("../../../utils/util.js"));

Page({
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10
        }
    },
    onLoad: function(t) {
        this.queryMyTuanList(this.data.query, !0);
    },
    startCount: function() {
        var t = this, e = this, i = this.data.mytuanList, o = void 0 === i ? [] : i;
        o.forEach(function(e, i) {
            t.setData(a({}, "mytuanList[" + i + "].leftTime", n.default.renderTimer(e.remainTime)));
        }), o.length > 0 && (this.stopCount(), this.timer = setInterval(function() {
            o.forEach(function(t, i) {
                var o, r = t.remainTime - 1;
                0 == r && e.setData(a({}, "mytuanList[" + i + "].status", 3)), e.setData((o = {}, 
                a(o, "mytuanList[" + i + "].remainTime", r), a(o, "mytuanList[" + i + "].leftTime", n.default.renderTimer(r)), 
                o));
            });
        }, 1e3));
    },
    stopCount: function() {
        this.timer && (clearInterval(this.timer), this.timer = void 0);
    },
    onUnload: function() {
        this.stopCount();
    },
    queryMyTuanList: function(t, a) {
        var n = this;
        wx.showLoading({
            title: "请稍后"
        }), i.default.queryMyTuanList(t).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), n.setData({
                mytuanList: a ? t.data.data : n.data.mytuanList.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: e({}, n.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }),
                isShow: !0
            }), console.log(t, "++++++++++++"), n.startCount();
        }).catch(function(t) {
            console.log(t), wx.hideLoading();
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.queryMyTuanList(e({}, this.data.query), !1));
    }
});