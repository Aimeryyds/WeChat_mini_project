var t = require("../../../netdisk_utils/common"), e = "暂不支持该格式预览，请在百度网盘App内查看", a = {
    DOC_CONTENT: [ "因小程序限制，较大的文档请在百度网盘App内查看", "因小程序限制，较大文档仅能查看前10页，更多内容请在百度网盘App内查看", "文档加载失败，请稍后重试或使用App打开", "音频较大，请在百度网盘App内查看", "图片较大，请在百度网盘App内查看" ],
    DOC_CANCEL_TEXT: [ "知道了", "浏览前10页", "确定" ]
}, n = !1;

Component({
    data: {
        appParameter: "bdnetdisk://n/action",
        content: e,
        cancelText: "知道了",
        confirmText: "使用App打开",
        types: "",
        filePath: "",
        copySurl: !1,
        naSurlStr: ""
    },
    ready: function() {
        this.popup = this.selectComponent("#popup");
    },
    methods: {
        isHideDialog: function() {
            n = !n, this.popup[n ? "show" : "hide"]();
        },
        setAppParameter: function(t, n, i, p) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, r = o.appParameter, s = o.copySurl, c = o.naSurlStr, l = n.path, u = wx.getStorageSync("uk");
            l = encodeURIComponent(l), this.setData({
                appParameter: r || "bdnetdisk://n/action." + t + "?m_n_v=8.3.0&uk=" + u + "&path=" + l + "&origin=1",
                content: a.DOC_CONTENT[i] || e,
                cancelText: a.DOC_CANCEL_TEXT[i] || "知道了",
                filePath: p || "",
                types: t,
                copySurl: s,
                naSurlStr: c
            });
        },
        cancelEvent: function(t) {
            var e = this.data.filePath;
            e && wx.openDocument({
                filePath: e
            }), this.isHideDialog();
        },
        confirmEvent: function(t) {
            var e = this.data.types;
            "DOC" === e ? wx.log.sharepage.doc.send() : "AUDIO" === e && wx.log.sharepage.audio.send(), 
            this.triggerEvent("confirmEvent", t);
        },
        lauchError: function(e) {
            var a = this.data.types;
            "DOC" === a ? wx.log.sharepage.docFail.send() : "AUDIO" === a && wx.log.sharepage.audioFail.send(), 
            this.isHideDialog(), this.triggerEvent("confirmEvent", e), wx.navigateTo({
                url: "/pages/netdisk_launchApp/launchApp"
            }), (0, t.openAppErr)(e.detail);
        },
        launchCal: function() {
            this.isHideDialog(), (0, t.openAppReport)();
        },
        lauchSuccess: function() {}
    }
});