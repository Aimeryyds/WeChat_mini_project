var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
};

Component({
    properties: {},
    data: {
        content: "分享文件",
        isShow: !0,
        scrollTop: 0,
        isTouchStart: !1,
        closureTimer: null,
        exitTimer: null,
        width: 252,
        disabled: !1
    },
    methods: {
        show: function(e) {
            this.setData(t({}, e)), this.data.isShow || this.setData(t({
                isShow: !0
            }));
        },
        hide: function() {
            this.data.isShow && this.setData({
                isShow: !1
            });
        },
        setDisabled: function(t) {
            this.setData({
                disabled: !!t
            });
        },
        getStatus: function() {
            return this.data.isShow;
        },
        tap: function() {
            this.data.disabled || (this.createShareTouchE(), this.triggerEvent("action", "onlyShare"));
        },
        toggleShowByOnScroll: function(t) {
            var e = this;
            clearTimeout(this.data.closureTimer), this.data.closureTimer = setTimeout(function() {
                var i = t.scrollTop, a = t.scrollHeight;
                i <= 0 ? (i = 0, e.show()) : a < i ? (i = a, e.hide()) : e.data.scrollTop <= i || a <= i ? e.hide() : e.show(), 
                e.setData({
                    scrollTop: i
                });
            }, 20);
        },
        createShareTouchS: function() {
            var t = this;
            this.setData({
                isTouchStart: !0
            }), clearTimeout(this.data.exitTimer), this.data.exitTimer = setTimeout(function() {
                t.createShareTouchE();
            }, 800);
        },
        createShareTouchE: function() {
            this.setData({
                isTouchStart: !1
            });
        }
    }
});