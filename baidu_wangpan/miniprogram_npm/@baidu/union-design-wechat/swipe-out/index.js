Component({
    externalClasses: [ "u-class" ],
    properties: {
        actions: {
            value: [],
            type: Array,
            observer: "_updateMoveSize"
        },
        closable: {
            type: Boolean,
            value: !0
        },
        toggle: {
            type: Boolean,
            value: !1,
            observer: "_resetPosition"
        },
        operateWidth: {
            type: Number,
            value: 160
        }
    },
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    data: {
        start: {
            pageX: 0,
            pageY: 0
        },
        position: {
            pageX: 0,
            pageY: 0
        },
        limitSpace: 0
    },
    attached: function() {
        this._updateMoveSize();
    },
    methods: {
        _updateMoveSize: function() {
            var t = this.data, e = t.actions, a = t.operateWidth, i = 0;
            e.length ? e.forEach(function(t) {
                i += t.width;
            }) : i = a, this.setData({
                limitSpace: i
            });
        },
        catchHandler: function() {},
        handleButtonTap: function(t) {
            this.data.closable && this._resetPosition(), this.triggerEvent("click", {
                index: t.currentTarget.dataset.index
            });
        },
        handleCustomTap: function() {
            this.data.closable && this._resetPosition();
        },
        _resetPosition: function() {
            this.setData({
                position: {
                    pageX: 0,
                    pageY: 0
                }
            });
        },
        handleTouchStart: function(t) {
            var e = t.touches ? t.touches[0] : {}, a = this.data.start;
            if (e) for (var i in a) a[i] = e[i];
        },
        handleTouchMove: function(t) {
            var e = t.touches ? t.touches[0] : {}, a = this.data.start;
            e && "left" === this.setSwiperDirection(a.pageX, e.pageX, a.pageY, e.pageY) && this.swiper(e);
        },
        handleTouchEnd: function(t) {
            var e = t.changedTouches ? t.changedTouches[0] : {}, a = this.data, i = a.start, s = a.limitSpace;
            if (e) {
                var o = this.setSwiperDirection(i.pageX, e.pageX, i.pageY, e.pageY), n = {
                    pageX: e.pageX - i.pageX,
                    pageY: e.pageY - i.pageY
                };
                Math.abs(n.pageX) >= 40 && "left" === o ? n.pageX = -s : n.pageX = 0, this.setData({
                    position: n
                });
            }
        },
        isExpand: function() {
            var t = this.data, e = t.position, a = t.limitSpace;
            return Math.abs(e.pageX) > a;
        },
        setSwiperDirection: function(t, e, a, i) {
            return Math.abs(a - i) ? t - e > 0 ? "left" : "right" : a - i > 0 ? "up" : "down";
        },
        swiper: function(t) {
            var e = this.data, a = e.start, i = e.limitSpace, s = {
                pageX: t.pageX - a.pageX,
                pageY: t.pageY - a.pageY
            };
            i < Math.abs(s.pageX) && (s.pageX = -i), this.setData({
                position: s
            });
        }
    }
});