var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), n = require("../common/component"), t = require("../mixins/button"), o = require("../mixins/open-type"), i = require("../common/color");

(0, n.VantComponent)({
    mixins: [ t.button, o.openType ],
    props: {
        show: {
            type: Boolean,
            observer: function(e) {
                !e && this.stopLoading();
            }
        },
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            value: 2e3
        },
        confirmButtonText: {
            type: String,
            value: "确认"
        },
        cancelButtonText: {
            type: String,
            value: "取消"
        },
        confirmButtonColor: {
            type: String,
            value: i.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: i.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: !0
        },
        overlay: {
            type: Boolean,
            value: !0
        },
        transition: {
            type: String,
            value: "scale"
        }
    },
    data: {
        loading: {
            confirm: !1,
            cancel: !1
        }
    },
    methods: {
        onConfirm: function() {
            this.handleAction("confirm");
        },
        onCancel: function() {
            this.handleAction("cancel");
        },
        onClickOverlay: function() {
            this.onClose("overlay");
        },
        handleAction: function(n) {
            this.data.asyncClose && this.setData((0, e.default)({}, "loading.".concat(n), !0)), 
            this.onClose(n);
        },
        close: function() {
            this.setData({
                show: !1
            });
        },
        stopLoading: function() {
            this.setData({
                loading: {
                    confirm: !1,
                    cancel: !1
                }
            });
        },
        onClose: function(e) {
            this.data.asyncClose || this.close(), this.$emit("close", e), this.$emit(e, {
                dialog: this
            });
            var n = this.data["confirm" === e ? "onConfirm" : "onCancel"];
            n && n(this);
        }
    }
});