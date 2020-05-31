Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../mergeBehavior.js")), i = {
    content: "",
    isCancelBtnFastHide: !0,
    isConfirmBtnFastHide: !0
}, n = {
    properties: {
        btnCancelColor: {
            type: String,
            value: "fc-dark-gray"
        },
        btnConfirmColor: {
            type: String,
            value: "fc-blue"
        },
        isShowCloseBtn: {
            type: Boolean,
            value: !1
        },
        textAlignClassName: {
            type: String,
            value: "center"
        },
        position: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: "弹窗标题"
        },
        cancelValue: {
            type: String,
            value: "取消"
        },
        confirmValue: {
            type: String,
            value: "确定"
        },
        isHideCancel: {
            type: Boolean,
            value: !1
        },
        isHideConfirm: {
            type: Boolean,
            value: !1
        }
    },
    data: t({}, i),
    ready: function() {
        this.popup = this.selectComponent("#popup");
    },
    methods: {
        initData: function(e) {
            e && this.setData(t({}, i, e));
        },
        show: function(e) {
            e && this.setData(t({}, e)), this.popup.show();
        },
        hide: function() {
            this.popup.hide();
        },
        emitEvent: function(t) {
            var e = this;
            this.triggerEvent(t, {
                hide: function() {
                    e.hide();
                }
            });
        },
        cancel: function() {
            this.emitEvent("cancel"), this.data.isCancelBtnFastHide && this.hide();
        },
        ok: function() {
            this.emitEvent("confirm"), this.data.isConfirmBtnFastHide && this.hide();
        },
        close: function() {
            this.triggerEvent("close");
        }
    }
};

exports.default = function(t) {
    return (0, e.default)(t, n);
};