function e(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../network/api.js")), t = require("../../utils/util.js");

exports.default = {
    toggleTuanDialog: function() {
        console.log("close"), this.setData({
            showOpenTuanDialog: !this.data.showOpenTuanDialog
        });
    },
    handleTapTuanMore: function(e) {
        e.currentTarget.dataset.num <= 0 || this.getMoreOpenTuan();
    },
    getMoreOpenTuan: function() {
        var e = this, t = this;
        wx.showLoading({
            title: "请稍后"
        }), n.default.queryOpeningList({
            goodsId: this.data.goods.id
        }).then(function(n) {
            wx.hideLoading(), t.setData({
                openTuan: n.data
            }), t.toggleTuanDialog(), n.data && n.data.length > 0 && e.startCountMoreTuan();
        }).catch(function(e) {
            wx.hideLoading(), console.log(e);
        });
    },
    startCountMoreTuan: function() {
        var n = this, a = this;
        a.data.openTuan.forEach(function(n, o) {
            a.setData(e({}, "openTuan[" + o + "].leftTime", (0, t.renderTimer)(n.remainTime)));
        }), this.timerMore = setInterval(function() {
            a.data.openTuan.forEach(function(o, i) {
                var r;
                0 == o.remainTime && (clearInterval(n.timerMore), n.getMoreOpenTuan());
                var u = o.remainTime - 1;
                a.setData((r = {}, e(r, "openTuan[" + i + "].remainTime", u), e(r, "openTuan[" + i + "].leftTime", (0, 
                t.renderTimer)(u)), r));
            });
        }, 1e3);
    },
    startOpenTuanCount: function() {
        var n = this;
        n.data.goods.groupEvent.sponsoringList.forEach(function(a, o) {
            n.setData(e({}, "goods.groupEvent.sponsoringList[" + o + "].leftTime", (0, t.renderTimer)(a.remainTime)));
        }), this.openTuanTimer = setInterval(function() {
            n.data.goods.groupEvent.sponsoringList.forEach(function(a, o) {
                var i;
                0 == a.remainTime && (clearInterval(n.openTuanTimer), n.queryProductById(!1));
                var r = a.remainTime - 1;
                n.setData((i = {}, e(i, "goods.groupEvent.sponsoringList[" + o + "].remainTime", r), 
                e(i, "goods.groupEvent.sponsoringList[" + o + "].leftTime", (0, t.renderTimer)(r)), 
                i));
            });
        }, 1e3);
    }
};