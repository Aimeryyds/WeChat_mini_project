var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
}, e = {
    isShow: !1
};

Component({
    properties: {
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
        }
    },
    options: {
        multipleSlots: !0
    },
    data: t({}, e),
    methods: {
        show: function(t) {
            this.setData({
                isShow: !0
            });
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        close: function() {
            this.hide(), this.triggerEvent("close");
        },
        preventD: function() {}
    }
});