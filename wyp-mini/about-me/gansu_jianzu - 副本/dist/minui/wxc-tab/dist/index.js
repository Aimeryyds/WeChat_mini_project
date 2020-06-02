Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./Event"));

exports.default = Component({
    options: {
        multipleSlots: !0
    },
    behaviors: [],
    properties: {
        defaultIndex: {
            type: Number,
            value: 0
        },
        componentId: {
            type: String,
            value: ""
        },
        animate: {
            type: Boolean,
            value: !1
        },
        textColor: {
            type: String,
            value: "#000"
        },
        activeTextColor: {
            type: String,
            value: "#ff5777"
        },
        lineColor: {
            type: String,
            value: "#ddd"
        },
        activeLineColor: {
            type: String,
            value: "#ff5777"
        }
    },
    data: {
        tabs: [],
        width: 0,
        activeKey: 0,
        move: 0
    },
    attached: function() {
        var e = this;
        this.componentId = this.data.componentId, this.tabs = [], t.default.on("tab-create-" + this.componentId, function(t) {
            e.type = t.label ? "simple" : "complex", e.tabs.push(t);
        });
    },
    ready: function() {
        var e = this.minAndMax(this.data.defaultIndex);
        this.onSwitch(e, "all"), this.listenSwitch();
        var n = this.tabs.length < 6 ? 100 / this.tabs.length : 20;
        "complex" === this.type && t.default.emit("label-width-" + this.componentId, n), 
        this.setData({
            tabs: this.tabs,
            width: n,
            type: this.type,
            move: n * e
        });
    },
    detached: function() {
        t.default.removeListener();
    },
    methods: {
        minAndMax: function(t) {
            var e = this.tabs.length - 1;
            return t > e ? e : t < 0 ? 0 : t;
        },
        listenSwitch: function() {
            var e = this;
            t.default.on("from-label-switch-" + this.componentId, function(t) {
                e.onSwitch(t, "to-panel");
            }), t.default.on("from-panel-switch-" + this.componentId, function(t) {
                e.onSwitch(t, "to-label");
            });
        },
        onSwitch: function(e, n) {
            n || (e = e.currentTarget.dataset.idx, n = "to-panel");
            var i = e * this.data.width;
            this.setData({
                activeKey: e,
                move: i
            }), "all" === n ? (t.default.emit("to-label-switch-" + this.componentId, e), t.default.emit("to-panel-switch-" + this.componentId, e)) : t.default.emit(n + "-switch-" + this.componentId, e), 
            this.afterSwitch(e);
        },
        afterSwitch: function(t) {
            this.triggerEvent("tabchange", {
                key: t,
                componentId: this.componentId
            });
        }
    }
});