Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.basic = void 0;

var e = Behavior({
    methods: {
        $emit: function() {
            this.triggerEvent.apply(this, arguments);
        },
        set: function(e, t) {
            return this.setData(e, t), new Promise(function(e) {
                return wx.nextTick(e);
            });
        },
        getRect: function(e, t) {
            var r = this;
            return new Promise(function(i) {
                wx.createSelectorQuery().in(r)[t ? "selectAll" : "select"](e).boundingClientRect(function(e) {
                    t && Array.isArray(e) && e.length && i(e), !t && e && i(e);
                }).exec();
            });
        }
    }
});

exports.basic = e;