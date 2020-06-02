var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./wx-canvas")), a = function(t) {
    if (t && t.__esModule) return t;
    var a = {};
    if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e]);
    return a.default = t, a;
}(require("./echarts")), e = void 0;

Component({
    properties: {
        canvasId: {
            type: String,
            value: "ec-canvas"
        },
        ec: {
            type: Object
        }
    },
    data: {},
    ready: function() {
        this.data.ec ? this.data.ec.lazyLoad || this.init() : console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');
    },
    methods: {
        init: function(c) {
            var n = this, r = wx.version.version.split(".").map(function(t) {
                return parseInt(t, 10);
            });
            if (r[0] > 1 || 1 === r[0] && r[1] > 9 || 1 === r[0] && 9 === r[1] && r[2] >= 91) {
                e = wx.createCanvasContext(this.data.canvasId, this);
                var i = new t.default(e, this.data.canvasId);
                a.setCanvasCreator(function() {
                    return i;
                }), wx.createSelectorQuery().in(this).select(".ec-canvas").boundingClientRect(function(t) {
                    "function" == typeof c ? n.chart = c(i, t.width, t.height) : n.data.ec && "function" == typeof n.data.ec.onInit ? n.chart = n.data.ec.onInit(i, t.width, t.height) : n.triggerEvent("init", {
                        canvas: i,
                        width: t.width,
                        height: t.height
                    });
                }).exec();
            } else console.error("微信基础库版本过低，需大于等于 1.9.91。参见：https://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82");
        },
        canvasToTempFilePath: function(t) {
            var a = this;
            t.canvasId || (t.canvasId = this.data.canvasId), e.draw(!0, function() {
                wx.canvasToTempFilePath(t, a);
            });
        },
        touchStart: function(t) {
            if (this.chart && t.touches.length > 0) {
                var a = t.touches[0];
                this.chart._zr.handler.dispatch("mousedown", {
                    zrX: a.x,
                    zrY: a.y
                }), this.chart._zr.handler.dispatch("mousemove", {
                    zrX: a.x,
                    zrY: a.y
                });
            }
        },
        touchMove: function(t) {
            if (this.chart && t.touches.length > 0) {
                var a = t.touches[0];
                this.chart._zr.handler.dispatch("mousemove", {
                    zrX: a.x,
                    zrY: a.y
                });
            }
        },
        touchEnd: function(t) {
            if (this.chart) {
                var a = t.changedTouches ? t.changedTouches[0] : {};
                this.chart._zr.handler.dispatch("mouseup", {
                    zrX: a.x,
                    zrY: a.y
                }), this.chart._zr.handler.dispatch("click", {
                    zrX: a.x,
                    zrY: a.y
                });
            }
        }
    }
});