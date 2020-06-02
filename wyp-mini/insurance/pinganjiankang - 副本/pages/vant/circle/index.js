var e = require("../common/component"), t = require("../common/utils"), r = require("../common/color");

var a = 2 * Math.PI, n = -Math.PI / 2;

(0, e.VantComponent)({
    props: {
        text: String,
        lineCap: {
            type: String,
            value: "round"
        },
        value: {
            type: Number,
            value: 0,
            observer: "reRender"
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100
        },
        fill: String,
        layerColor: {
            type: String,
            value: r.WHITE
        },
        color: {
            type: [ String, Object ],
            value: r.BLUE,
            observer: "setHoverColor"
        },
        type: {
            type: String,
            value: ""
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        hoverColor: r.BLUE
    },
    methods: {
        getContext: function() {
            return this.ctx || (this.ctx = wx.createCanvasContext("van-circle", this)), this.ctx;
        },
        setHoverColor: function() {
            var e = this.data, r = e.color, a = e.size, n = e.type, i = n ? this.getContext(n) : this.getContext(), l = r;
            if ((0, t.isObj)(r)) {
                var o = i.createLinearGradient(a, 0, 0, 0);
                Object.keys(r).sort(function(e, t) {
                    return parseFloat(e) - parseFloat(t);
                }).map(function(e) {
                    return o.addColorStop(parseFloat(e) / 100, r[e]);
                }), l = o;
            }
            this.setData({
                hoverColor: l
            });
        },
        presetCanvas: function(e, t, r, a, n) {
            var i = this.data, l = i.strokeWidth, o = i.lineCap, s = i.clockwise, c = i.size / 2, u = c - l / 2;
            e.setStrokeStyle(t), e.setLineWidth(l), e.setLineCap(o), e.beginPath(), e.arc(c, c, u, r, a, !s), 
            e.stroke(), n && (e.setFillStyle(n), e.fill());
        },
        renderLayerCircle: function(e) {
            var t = this.data, r = t.layerColor, n = t.fill;
            this.presetCanvas(e, r, 0, a, n);
        },
        renderHoverCircle: function(e, t) {
            var r = this.data, i = r.clockwise, l = r.hoverColor, o = a * (t / 100), s = i ? n + o : 3 * Math.PI - (n + o);
            this.presetCanvas(e, l, n, s);
        },
        drawCircle: function(e) {
            var t = this.data, r = t.size, a = t.type, n = a ? this.getContext(a) : this.getContext();
            n.clearRect(0, 0, r, r), this.renderLayerCircle(n);
            var i, l = (i = e, Math.min(Math.max(i, 0), 100));
            0 !== l && this.renderHoverCircle(n, l), n.draw();
        },
        reRender: function() {
            var e = this, t = this.data, r = t.value, a = t.speed;
            a <= 0 || a > 1e3 ? this.drawCircle(r) : (this.clearInterval(), this.currentValue = this.currentValue || 0, 
            this.interval = setInterval(function() {
                e.currentValue !== r ? (e.currentValue < r ? e.currentValue += 1 : e.currentValue -= 1, 
                e.drawCircle(e.currentValue)) : e.clearInterval();
            }, 1e3 / a));
        },
        clearInterval: function(e) {
            function t() {
                return e.apply(this, arguments);
            }
            return t.toString = function() {
                return e.toString();
            }, t;
        }(function() {
            this.interval && (clearInterval(this.interval), this.interval = null);
        })
    },
    created: function() {
        var e = this.data.value;
        this.currentValue = e, this.drawCircle(e);
    },
    destroyed: function() {
        this.ctx = null, this.clearInterval();
    }
});