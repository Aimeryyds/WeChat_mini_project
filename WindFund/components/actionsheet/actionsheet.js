function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../component"));

exports.default = {
    setDefaults: function() {
        return {
            theme: "ios",
            className: void 0,
            titleText: void 0,
            buttons: [],
            buttonClicked: function() {},
            cancelText: "取消",
            cancel: function() {},
            maxlength: -1,
            nobg: !1
        };
    },
    show: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = Object.assign({
            animateCss: void 0,
            visible: !1
        }, this.setDefaults(), n), u = new t.default({
            scope: "$wux.actionSheet",
            data: i,
            methods: {
                removeSheet: function(e) {
                    if (this.removed) return !1;
                    this.removed = !0, this.setHidden([ "wux-animate--slide-out-down", "wux-animate--fade-out" ]), 
                    "function" == typeof e && e(i.buttons);
                },
                showSheet: function() {
                    if (this.removed) return !1;
                    this.setVisible([ "wux-animate--slide-in-up", "wux-animate--fade-in" ]);
                },
                buttonClicked: function(e) {
                    var t = e.currentTarget.dataset.index;
                    !0 === i.buttonClicked(t, i.buttons[t]) && this.removeSheet();
                },
                inputClicked: function() {},
                inputTyping: function(t) {
                    this.setData(e({}, "$wux.actionSheet.inputtext", t.detail.value));
                },
                inputDone: function(e) {
                    !0 === i.inputDone() && this.removeSheet();
                },
                destructiveButtonClicked: function() {
                    !0 === i.destructiveButtonClicked() && this.removeSheet();
                },
                cancel: function() {
                    this.removeSheet(i.cancel);
                }
            }
        });
        return u.showSheet(), u.cancel;
    }
};