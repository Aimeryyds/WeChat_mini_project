function t(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../component"));

exports.default = {
    setDefaults: function() {
        return {
            className: void 0,
            position: "bottomRight",
            backdrop: !1,
            buttons: [],
            buttonClicked: function() {},
            callback: function() {}
        };
    },
    data: function() {
        return [ {
            type: "topLeft",
            className: "wux-speed-dial--top-left"
        }, {
            type: "topRight",
            className: "wux-speed-dial--top-right"
        }, {
            type: "bottomLeft",
            className: "wux-speed-dial--bottom-left"
        }, {
            type: "bottomRight",
            className: "wux-speed-dial--bottom-right"
        } ];
    },
    init: function(o) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = Object.assign({
            animateCss: void 0,
            visible: !1
        }, this.setDefaults(), i);
        this.data().forEach(function(t, e) {
            t.type === n.position && (n.className = n.className ? t.className + " " + n.className : t.className);
        });
        var s = function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.setData(t({}, "$wux.button." + o + ".opened", i)), "function" == typeof n.callback && n.callback(e, i);
        }, a = new e.default({
            scope: "$wux.button." + o,
            data: n,
            methods: {
                hide: function() {
                    if (this.removed) return !1;
                    this.removed = !0, this.setHidden();
                },
                show: function() {
                    if (this.removed) return !1;
                    this.setVisible();
                },
                close: function() {
                    if (!this.opened) return !1;
                    this.opened = !1, s(this, !1);
                },
                open: function() {
                    if (this.opened) return !1;
                    this.opened = !0, s(this, !0);
                },
                buttonClicked: function(t) {
                    var e = t.currentTarget.dataset.index;
                    n.buttonClicked(e, n.buttons[e]);
                },
                toggle: function(t) {
                    this.opened ? this.close() : this.open();
                }
            }
        });
        return a.show(), a;
    }
};