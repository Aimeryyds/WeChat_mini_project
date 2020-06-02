function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

!function(e) {
    e && e.__esModule;
}(require("../../miniprogram_dist/poster/poster"));

var t, n = require("../../utils/https.js").imgurl;

Page((t = {
    data: {
        shareImg: n + "f_bg1.png",
        shareG: n + "f_g.png",
        shareB: n + "f_b.png",
        shareQ: n + "f_q.png",
        frid: n + "wxfx.png",
        quan: n + "pyq.png",
        wxImg: n + "f_wx.png",
        pyqImg: n + "f_py.png",
        shareList: [ {
            img: n + "f_wx.png",
            cont: "微信好友",
            bindtap: "bindtapWX",
            share: "share"
        }, {
            img: n + "f_py.png",
            cont: "朋友圈",
            bindtap: "bindtappyq"
        } ],
        qrCodePath: "",
        sharedesc: "",
        jdConfig: {
            width: 750,
            height: 1334,
            backgroundColor: "#fff",
            debug: !1,
            blocks: [ {
                width: 690,
                height: 808,
                x: 30,
                y: 183,
                borderWidth: 2,
                borderColor: "#f0c2a0",
                borderRadius: 20
            } ],
            texts: [ {
                x: 113,
                y: 61,
                baseLine: "middle",
                text: "name",
                fontSize: 32,
                color: "#8d8d8d"
            }, {
                x: 30,
                y: 113,
                baseLine: "top",
                text: "你的好友邀请你一起来骑小呗电单车!",
                fontSize: 28,
                color: "#080808"
            }, {
                x: 59,
                y: 935,
                baseLine: "middle",
                text: [ {
                    text: "邀请好友骑行",
                    fontSize: 28,
                    color: "#929292"
                }, {
                    text: "惊喜不断",
                    fontSize: 28,
                    color: "#929292",
                    marginLeft: 50
                }, {
                    text: "优惠不断",
                    fontSize: 28,
                    color: "#929292",
                    marginLeft: 50
                } ]
            }, {
                x: 360,
                y: 1115,
                baseLine: "top",
                text: "长按识别小程序码",
                fontSize: 38,
                color: "#080808"
            }, {
                x: 360,
                y: 1173,
                baseLine: "top",
                text: "小呗出行",
                fontSize: 28,
                color: "#929292"
            } ],
            images: [ {
                width: 62,
                height: 62,
                x: 30,
                y: 30,
                borderRadius: 62,
                url: n + "logo.png"
            }, {
                width: 634,
                height: 674,
                x: 59,
                y: 210,
                url: n + "shrae.jpg"
            }, {
                width: 220,
                height: 220,
                x: 92,
                y: 1080,
                url: n + "1.jpg"
            } ]
        }
    },
    onShareAppMessage: function() {
        return "button" === res.from ? {
            title: this.data.sharedesc,
            desc: this.data.sharedesc,
            path: "/pages/share/conten/index",
            success: function(e) {}
        } : {
            title: this.data.sharedesc,
            path: "/pages/share/conten/index"
        };
    },
    bindtapcontent: function() {},
    shareCont: function() {
        wx.navigateTo({
            url: "explain/index"
        });
    },
    bindtapWX: function(e) {
        this.onShareAppMessage();
    },
    bindtappyq: function() {},
    onPosterSuccess: function(e) {
        var t = e.detail;
        wx.previewImage({
            current: t,
            urls: [ t ]
        });
    },
    onPosterFail: function(e) {},
    onLoad: function(e) {
        var t = this, n = wx.getStorageSync("sharedesc");
        t.setData({
            sharedesc: n
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    }
}, e(t, "onShareAppMessage", function() {
    return {
        title: this.data.sharedesc,
        desc: this.data.sharedesc,
        path: "/pages/share/conten/index?uid=" + wx.getStorageSync("uid")
    };
}), e(t, "sharefriendc", function() {
    console.log("分享小程序");
}), t));