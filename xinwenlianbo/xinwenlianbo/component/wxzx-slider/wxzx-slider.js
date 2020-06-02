function t() {
    return 750 / wx.getSystemInfoSync().screenWidth;
}

Component({
    properties: {
        percent: {
            type: [ Number, String ],
            value: 100
        },
        width: {
            type: [ Number, String ],
            value: 700
        },
        strokeWidth: {
            type: [ Number, String ],
            value: 6
        },
        activeColor: {
            type: [ String, Array ],
            value: "#FFFAF0, #ff6600"
        },
        bufferColor: {
            type: String,
            value: "#00"
        },
        backgroundColor: {
            type: String,
            value: "#e5e5e5"
        },
        radius: {
            type: [ Number, String ],
            value: 5
        },
        blockSrc: {
            type: String,
            value: null
        },
        blockSize: {
            type: [ Number, String ],
            value: 40
        },
        blockColor: {
            type: String,
            value: "#FFFFFF"
        },
        value: {
            type: [ Number, String ],
            value: 0
        },
        max: {
            type: [ Number, String ],
            value: 100
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        isCustom: {
            type: Boolean,
            value: !1
        },
        blockImageWidth: {
            type: [ Number, String ],
            value: 0
        },
        blockImageHeight: {
            type: [ Number, String ],
            value: 0
        },
        orientation: {
            type: [ Number, String ],
            value: "landscape"
        },
        isMonitoring: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        screenRatio: 0,
        sliderStartX: 0,
        sliderStartY: 0,
        startValue: 0,
        portraitOrientation: "bottom",
        clickEnlargeSize: 60
    },
    attached: function() {
        var a = this.data.activeColor;
        ~a.indexOf(",") && this.setData({
            activeLineColor: a.split(",")
        });
        var e = this.data.blockSize;
        e > 40 ? this.setData({
            blockSize: 40
        }) : e < 20 && this.setData({
            blockSize: 20
        }), this.setData({
            screenRatio: t(),
            strokeWidth: Number(this.data.strokeWidth)
        });
    },
    methods: {
        sliderTap: function(t) {
            if (!this.data.disabled) {
                var a = this, e = t.changedTouches[0], i = 0;
                if ((i = "landscape" == this.data.orientation ? this.data.max * ((e.pageX - t.currentTarget.offsetLeft) * this.data.screenRatio / this.data.width) : this.data.max * ((this.data.width - (e.pageY - t.currentTarget.offsetTop) * this.data.screenRatio) / this.data.width)) < 0 || i > this.data.max) return;
                this.data.percent <= i / this.data.max * 100 ? this.setData({
                    value: a.data.percent * a.data.max / 100
                }) : this.setData({
                    value: i
                });
                var s = t.changedTouches, r = {};
                this.triggerEvent("sliderTap", s, r);
            }
        },
        sliderStart: function(t) {
            if (!this.data.disabled) {
                var a = t.changedTouches, e = {}, i = t.changedTouches[0];
                if (this.setData({
                    isMonitoring: !1
                }), 0 == this.data.sliderStartX && this.setData({
                    sliderStartX: i.pageX
                }), 0 == this.data.sliderStartY && this.setData({
                    sliderStartY: i.pageY
                }), 0 == this.data.startValue) {
                    var s = this.data.value;
                    this.setData({
                        startValue: s
                    });
                }
                this.triggerEvent("sliderStart", a, e);
            }
        },
        sliderChange: function(t) {
            if (!this.data.disabled) {
                var a = t.changedTouches[0], e = 0;
                (e = "landscape" == this.data.orientation ? (a.pageX - this.data.sliderStartX) * this.data.screenRatio / this.data.width * this.data.max + Number(this.data.startValue) : (this.data.sliderStartY - a.pageY) * this.data.screenRatio / this.data.width * this.data.max + Number(this.data.startValue)) < 0 && (e = 0), 
                e > this.data.max && (e = this.data.max), this.setData({
                    value: e
                });
                var i = t.changedTouches, s = {};
                this.triggerEvent("sliderChange", i, s);
            }
        },
        sliderEnd: function(t) {
            if (!this.data.disabled) {
                this.setData({
                    isMonitoring: !0
                });
                var a = this;
                this.data.percent <= this.data.value / this.data.max * 100 && this.setData({
                    value: a.data.percent * a.data.max / 100
                });
                var e = t.changedTouches, i = {};
                this.triggerEvent("sliderEnd", e, i);
            }
        },
        sliderCancel: function(t) {
            if (!this.data.disabled) {
                var a = this;
                this.setData({
                    isMonitoring: !0
                }), this.data.percent <= this.data.value / this.data.max * 100 && this.setData({
                    value: a.data.percent * a.data.max / 100
                });
                var e = t.changedTouches, i = {};
                this.triggerEvent("sliderCancel", e, i);
            }
        }
    }
});