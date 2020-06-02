function o(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}

var n = require("../../../components/utils"), t = o(require("../../../components/event")), e = require("../../../components/bridge"), a = o(require("../../../services/portal/download"));

getApp().View(Object.assign({
    beacon: {
        name: "口令",
        canShare: !0,
        shareOptions: {
            title: "行情小程序"
        }
    },
    data: {
        buttonList: [],
        downloadInfo: {}
    },
    events: {
        goBack: {
            name: "返回自选页",
            handler: function() {
                (0, e.reLaunch)({
                    url: "/pages/quote/favourite/favourite"
                });
            }
        },
        handleGoService: {
            name: "推广口令",
            handler: function() {}
        }
    },
    onLoad: function(o) {
        (0, e.setNavigationBarTitle)({
            title: "发现"
        }), this.downloadId = o.viewId;
        var t = o.postion || "";
        o.navColor && wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: o.navColor
        }), this.downloadInfo(t);
        var a = [];
        a.length = 42, a.fill(null), (0, n.setData)(this, "buttonList", a);
    },
    downloadInfo: function(o) {
        var t = this;
        a.default.download({
            postion: o
        }).done(function(e) {
            var a = e.data.data, i = "";
            i = o ? a[0] : a.find(function(o) {
                return o._id == t.downloadId;
            }), (0, n.setData)(t, "downloadInfo", i);
        });
    }
}, t.default));