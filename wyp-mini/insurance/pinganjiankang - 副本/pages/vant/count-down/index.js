var t = require("../common/component"), i = require("./utils");

function e(t) {
    return setTimeout(t, 30);
}

(0, t.VantComponent)({
    props: {
        useSlot: Boolean,
        millisecond: Boolean,
        time: {
            type: Number,
            observer: "reset"
        },
        format: {
            type: String,
            value: "HH:mm:ss"
        },
        autoStart: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        timeData: (0, i.parseTimeData)(0),
        formattedTime: "0"
    },
    destroyed: function() {
        clearTimeout(this.tid), this.tid = null;
    },
    methods: {
        start: function() {
            this.counting || (this.counting = !0, this.endTime = Date.now() + this.remain, this.tick());
        },
        pause: function() {
            this.counting = !1, clearTimeout(this.tid);
        },
        reset: function() {
            this.pause(), this.remain = this.data.time, this.setRemain(this.remain), this.data.autoStart && this.start();
        },
        tick: function() {
            this.data.millisecond ? this.microTick() : this.macroTick();
        },
        microTick: function() {
            var t = this;
            this.tid = e(function() {
                t.setRemain(t.getRemain()), 0 !== t.remain && t.microTick();
            });
        },
        macroTick: function() {
            var t = this;
            this.tid = e(function() {
                var e = t.getRemain();
                (0, i.isSameSecond)(e, t.remain) && 0 !== e || t.setRemain(e), 0 !== t.remain && t.macroTick();
            });
        },
        getRemain: function() {
            return Math.max(this.endTime - Date.now(), 0);
        },
        setRemain: function(t) {
            this.remain = t;
            var e = (0, i.parseTimeData)(t);
            this.data.useSlot && this.$emit("change", e), this.setData({
                formattedTime: (0, i.parseFormat)(this.data.format, e)
            }), 0 === t && (this.pause(), this.$emit("finish"));
        }
    }
});