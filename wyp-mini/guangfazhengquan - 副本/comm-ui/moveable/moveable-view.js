Component({
    properties: {
        index: {
            type: Number,
            value: 0
        },
        height: {
            type: Number,
            value: 10
        },
        moveable: {
            type: Boolean,
            value: !1
        },
        noBindEvent: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        moveY: 0,
        moving: !1
    },
    startY: 0,
    screenWidth: 750,
    ready: function() {
        var t = this;
        wx.createSelectorQuery().selectViewport().boundingClientRect(function(e) {
            t.screenWidth = e.width;
        }).exec();
    },
    methods: {
        touchstart: function(t) {
            this.moved = !1, this.data.moveable && (this.setData({
                moveY: this.data.height * this.data.index
            }), this.startY = t.touches[0].pageY);
        },
        touchend: function() {
            this.data.moveable && this.moved && (this.triggerEvent("change", {
                position: {
                    x: 0,
                    y: this.data.moveY
                }
            }), this.setData({
                moving: !1,
                moveY: this.data.height * this.data.index
            })), this.timer && (clearTimeout(this.timer), this.timer = null);
        },
        timer: null,
        moveEvt: null,
        touchmove: function(t) {
            var e = this, i = this;
            this.data.moveable && (this.moveEvt = t, this.timer || (i.timer = setTimeout(function() {
                var t = i.moveEvt.touches[0].pageY, a = 750 * (t - i.startY) / e.screenWidth;
                i.moved = !0, i.setData({
                    moving: !0,
                    moveY: i.data.moveY + a
                }), i.startY = t, i.timer = null;
            }, 10)));
        }
    }
});