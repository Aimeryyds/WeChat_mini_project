function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../components/circus/toast/toast.js")), a = e(require("../../../components/http")), i = require("../../../components/utils"), s = require("../../../components/bridge"), n = e(require("../../../config"));

getApp().View({
    beacon: {
        name: "消息详情",
        canShare: !0,
        shareOptions: {
            title: "消息详情"
        }
    },
    data: {},
    onLoad: function(e) {
        var a = this;
        (0, i.setData)(this, "market", e.market), (0, i.setData)(this, "code", e.code), 
        (0, i.setData)(this, "name", decodeURIComponent(e.name || "")), (0, i.setData)(this, "id", e.id), 
        this.beacon.shareOptions.path = "/pages/quote/message/message?market=" + e.market + "&code=" + e.code + "&name=" + encodeURIComponent(e.name) + "&id=" + e.id, 
        (0, s.setNavigationBarTitle)({
            title: "消息详情"
        }), this.reqMessage(e).done(function(e) {
            a.setMessage(e.data);
        }).fail(function() {
            t.default.show(a, "出错啦");
        });
    },
    reqMessage: function(e) {
        return (0, a.default)({
            url: n.default.SER_URL + "/api/wechat/info/1.0.0/info/read/" + e.id,
            data: {
                id: e.id
            }
        }, this, !0);
    },
    setMessage: function(e) {
        (0, i.setData)(this, "message", {
            title: (0, i.getProp)(e, "data.title"),
            datetime: (0, i.formatDate)(new Date(1e3 * (0, i.getProp)(e, "data.publishTime")), "yyyy-MM-dd"),
            media: (0, i.getProp)(e, "data.media"),
            content: (0, i.getProp)(e, "data.content")
        });
    }
});