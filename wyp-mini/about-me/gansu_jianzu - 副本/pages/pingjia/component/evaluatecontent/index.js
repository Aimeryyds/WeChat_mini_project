function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var t = e(require("../../../../network/api.js")), n = e(require("../../../../behaviors/toast.js"));

Component({
    behaviors: [ n.default ],
    properties: {
        evaluateData: {
            type: Object,
            value: {}
        },
        sType: {
            type: Number
        }
    },
    data: {},
    methods: {
        handleReleaseBtn: function(e) {
            console.log(e, "8888888888888888");
            var n = this, o = e.currentTarget.dataset, r = o.index, s = o.item, i = s.id, u = s.orderNo, d = s.type, l = s.anonymous, c = s.secondEvaluateContent, g = s.sType, j = [];
            j = "" == c && 4 != g && 5 != g ? 0 == l ? [ "发表追评", "设置匿名" ] : [ "发表追评", "取消匿名" ] : 0 == l ? [ "设置匿名" ] : [ "取消匿名" ], 
            wx.showActionSheet({
                itemList: j,
                success: function(e) {
                    0 == e.tapIndex && "" == c && 4 != g && 5 != g ? wx.navigateTo({
                        url: "/pages/pingjia/evaluateform/index?orderNo=" + u + "&type=" + d + "&id=" + i
                    }) : (console.log("jjjjjjjjjjjjjjjjj"), t.default.querySetAnonymous({
                        id: i,
                        anonymous: 0 == l ? 1 : 0
                    }).then(function(e) {
                        var t;
                        wx.hideLoading(), console.log(r, "555555555555555"), n.setData((t = {}, a(t, "evaluateData.data[" + r + "].anonymous", e.data.anonymous), 
                        a(t, "evaluateData.data[" + r + "].nickName", e.data.nickName), t)), n.showToast(0 == l ? "设置匿名成功" : "取消匿名成功");
                    }).catch(function(e) {
                        console.log(e, "7777777777"), wx.hideLoading(), n.showToast(0 == l ? "设置匿名失败" : "取消匿名失败");
                    }));
                },
                fail: function(e) {
                    console.log(e.errMsg);
                }
            }), this.setData({});
        },
        onTapPic: function(e) {
            console.log("4545454545454545", e.currentTarget.dataset.index);
            var a = e.currentTarget.dataset.type;
            wx.previewImage({
                current: e.currentTarget.dataset.link,
                urls: "first" == a ? this.data.evaluateData.data[e.currentTarget.dataset.index].firstEvaluateImgs : this.data.evaluateData.data[e.currentTarget.dataset.index].secondEvaluateImgs
            });
        }
    }
});