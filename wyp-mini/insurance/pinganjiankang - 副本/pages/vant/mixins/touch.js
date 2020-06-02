Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.touch = void 0;

var t = 10;

var s = Behavior({
    methods: {
        resetTouchStatus: function() {
            this.direction = "", this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0;
        },
        touchStart: function(t) {
            this.resetTouchStatus();
            var s = t.touches[0];
            this.startX = s.clientX, this.startY = s.clientY;
        },
        touchMove: function(s) {
            var e, i, h = s.touches[0];
            this.deltaX = h.clientX - this.startX, this.deltaY = h.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), 
            this.offsetY = Math.abs(this.deltaY), this.direction = this.direction || (e = this.offsetX, 
            i = this.offsetY, e > i && e > t ? "horizontal" : i > e && i > t ? "vertical" : "");
        }
    }
});

exports.touch = s;