Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../utils/spm/index"), t = require("../../api/sh");

Component({
    properties: {
        list: {
            type: Array,
            value: []
        },
        shareInfo: {
            type: Object,
            value: {}
        },
        type: {
            type: Number,
            value: 1
        },
        aCode: {
            type: String,
            value: ""
        },
        bCode: {
            type: String,
            value: "content"
        },
        cCode: {
            type: String,
            value: "footer"
        },
        isIphoneX: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        spmParams: {},
        shareText: {
            leading: "",
            title: "",
            trailing: ""
        },
        showSharePanel: !1,
        emphasizeShare: !1
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {
        btnClick: function(e) {
            switch (e.currentTarget.dataset.detail.func) {
              case "readMore":
                this.readMore(e.currentTarget.dataset.detail.url);
                break;

              case "share":
                2 === this.properties.type && (this.share(), this.shareButtonTap()), this.triggerEvent("handleClick");
            }
        },
        readMore: function(e) {
            console.log(e + "?spm=" + this.properties.aCode + "." + this.properties.bCode + "." + this.properties.cCode), 
            t.sh.navigateTo({
                url: e + "?spm=" + this.properties.aCode + "." + this.properties.bCode + "." + this.properties.cCode
            });
        },
        share: function() {
            var e = this.properties.shareInfo, t = !!e.title;
            this.setData({
                shareText: {
                    leading: t ? "我分享了一个搜狐新闻给你：【" : "我分享了【",
                    title: e.title || "搜狐网",
                    trailing: (t ? "】" : "】给你，") + "快来看看吧! " + (e.url || "")
                },
                showSharePanel: !0
            });
        },
        shareButtonTap: function() {
            var e = this;
            t.sh.setClipboardData({
                data: this.data.shareText.leading + this.data.shareText.title + this.data.shareText.trailing,
                success: function() {
                    e.setData({
                        showSharePanel: !0
                    });
                },
                fail: function() {
                    t.sh.showToast({
                        title: "设置失败"
                    });
                }
            });
        },
        closePanel: function() {
            this.setData({
                showSharePanel: !1
            });
        },
        sendAction: function(t, a) {
            e.default.sendAction(Object.assign({}, this.data.spmParams, {
                actionCode: t,
                clkParam: a
            }));
        },
        addEmphasizeSare: function() {
            this.setData({
                emphasizeShare: !0
            });
        },
        removeEmphasizeSare: function() {
            this.setData({
                emphasizeShare: !1
            });
        }
    }
});