Component({
    properties: {
        config: {
            type: Object,
            value: {}
        },
        preload: {
            type: Boolean,
            value: !1
        },
        hideLoading: {
            type: Boolean,
            value: !1
        }
    },
    ready: function() {
        var t = this;
        if (this.data.preload) {
            var e = this.selectComponent("#poster");
            this.downloadStatus = "doing", e.downloadResource(this.data.config.images).then(function() {
                t.downloadStatus = "success", t.trigger("downloadSuccess");
            }).catch(function(e) {
                t.downloadStatus = "fail", t.trigger("downloadFail", e);
            });
        }
    },
    methods: {
        trigger: function(t, e) {
            this.listener && "function" == typeof this.listener[t] && this.listener[t](e);
        },
        once: function(t, e) {
            void 0 === this.listener && (this.listener = {}), this.listener[t] = e;
        },
        downloadResource: function() {
            var t = this;
            return new Promise(function(e, o) {
                var n = t.selectComponent("#poster");
                t.downloadStatus && "fail" !== t.downloadStatus ? "success" === t.downloadStatus ? e() : (t.once("downloadSuccess", function() {
                    return e();
                }), t.once("downloadFail", function(t) {
                    return o(t);
                })) : n.downloadResource(t.data.config.images).then(function() {
                    t.downloadStatus = "success", e();
                }).catch(function(t) {
                    return o(t);
                });
            });
        },
        onCreate: function() {
            var t = this;
            return !this.data.hideLoading && wx.showLoading({
                mask: !0,
                title: "生成中"
            }), this.downloadResource().then(function() {
                !t.data.hideLoading && wx.hideLoading(), t.selectComponent("#poster").create(t.data.config);
            }).catch(function(e) {
                !t.data.hideLoading && wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: e.errMsg || "生成失败"
                }), console.error(e), t.triggerEvent("fail", e);
            });
        },
        onCreateSuccess: function(t) {
            var e = t.detail;
            this.triggerEvent("success", e);
        },
        onCreateFail: function(t) {
            console.error(t), this.triggerEvent("fail", t);
        }
    }
});