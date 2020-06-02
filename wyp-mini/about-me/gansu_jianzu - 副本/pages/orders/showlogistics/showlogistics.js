var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api"));

Page({
    data: {
        orderId: 0,
        steps: [],
        loading: !0
    },
    onLoad: function(t) {
        this.setData({
            orderId: t.id,
            loading: !0
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryOrderLogistics(t.id);
    },
    queryOrderLogistics: function(a) {
        var d = this;
        a && t.default.getLogistics({
            orderId: a
        }).then(function(t) {
            wx.hideLoading();
            var a = [];
            if (t) {
                if (console.log(), t.data.data && t.data.data.length > 0) for (var e = 0; e < t.data.data.length; e++) {
                    var o = {
                        done: !1,
                        current: !1,
                        text: t.data.data[e].context,
                        desc: t.data.data[e].time
                    };
                    0 == e && (o = {
                        done: !0,
                        current: !0,
                        text: t.data.data[e].context,
                        desc: t.data.data[e].time
                    }), a.push(o);
                }
                d.setData({
                    steps: a,
                    code: t.data.postId,
                    companyName: t.data.kdName,
                    status: t.data.state,
                    loading: !1
                });
            }
        }).catch(function(t) {
            console.log(t), wx.hideLoading();
        });
    }
});