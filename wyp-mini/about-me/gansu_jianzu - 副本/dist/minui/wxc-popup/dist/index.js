Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        modal: {
            type: Boolean,
            value: !1
        },
        animationMode: {
            type: String,
            value: "none"
        },
        align: {
            type: String,
            value: "center"
        },
        status: {
            type: String,
            value: "hide"
        }
    },
    data: {
        maskStatus: "hide"
    },
    methods: {
        showMask: function() {
            this.setData({
                maskStatus: "show"
            });
        },
        hideMask: function() {
            this.setData({
                maskStatus: "hide"
            });
        },
        show: function() {
            var t = this;
            "none" !== this.data.animationMode ? (this.showMask(), this.setData({
                status: "fadeIn"
            }), setTimeout(function() {
                t.setData({
                    status: "show"
                });
            }, 50)) : (this.showMask(), this.setData({
                status: "show"
            }));
        },
        forceHide: function() {
            this.setData({
                status: "hide"
            }), this.hideMask();
        },
        handleTap: function(t) {
            this.data.modal ? this.triggerEvent("onhide") : this.hide();
        },
        hide: function() {
            var t = this;
            "none" !== this.data.animationMode ? (this.setData({
                status: "fadeOut"
            }), clearTimeout(this._timer), this._timer = setTimeout(function() {
                t.forceHide();
            }, 300)) : this.forceHide();
        },
        onContentTap: function() {}
    }
});