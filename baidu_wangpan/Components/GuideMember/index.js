var e = require("../../netdisk_utils/common"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("miniprogram-computed")), r = require("../../netdiisk_requestapi/reportAction"), i = wx.ENV.staticPath, o = {
    "pages/netdisk_share/share": !0,
    "pages/netdisk_previewimage/previewimage": !0,
    "pages/netdisk_previewaudio/previewaudio": !0,
    "pages/netdisk_previewvideo/previewvideo": !0
};

Component({
    behaviors: [ t.default ],
    properties: {
        config: {
            type: Object,
            value: {}
        }
    },
    data: {
        closeIcon: i + "/feed-close.png",
        show: !0
    },
    computed: {
        reportType: function(e) {
            var t = e.config;
            return ({
                uploadVideo: "upload",
                uploadCopy: "upload",
                uploadLocal: "upload"
            }[t.trigger] || t.trigger) + "_" + t.reason + "_" + t.type;
        }
    },
    ready: function() {
        this.reportAction("show");
    },
    methods: {
        closeModal: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("close"), this.reportAction("close");
        },
        emptyTap: function() {},
        filterShareOptions: function(e, t) {
            var r = [ "surl", "pwd", "imagetype" ], i = {};
            return o[t] ? (r.forEach(function(t) {
                i[t] = e[t];
            }), i) : e;
        },
        handleNav: function() {
            var t = wx.getCurrentViewPage() || {}, r = t.options || {}, i = t.route || "pages/netdisk_index/index";
            r = this.filterShareOptions(r, i), o[i] && (i = "pages/netdisk_share/share"), i = ("/" === i[0] ? "" : "/") + i;
            var a = "", n = Object.keys(r);
            n.forEach(function(e, t) {
                a += e + "=" + r[e], t < n.length - 1 && (a += "&");
            }), a && (i += "?" + a);
            var p = this.data, s = (0, e.getMemberUrl)({
                from: p.reportType,
                category: p.config.type,
                backurl: i
            });
            wx.navigateTo({
                url: s
            }), this.reportAction("click");
        },
        reportAction: function(e) {
            (0, r.reportAction)({
                type: "wx_" + this.data.reportType + "_" + e,
                value: "会员引导弹窗" + e
            });
        }
    }
});