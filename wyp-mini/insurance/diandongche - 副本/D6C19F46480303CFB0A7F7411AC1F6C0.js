Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = Behavior({
    lifetimes: {
        created: function() {
            this.nextCallback = null;
        },
        detached: function() {
            this.cancelNextCallback();
        }
    },
    methods: {
        safeSetData: function(t, a) {
            var e = this;
            this.pendingData = Object.assign({}, this.data, t), a = this.setNextCallback(a), 
            this.setData(t, function() {
                e.pendingData = null, a();
            });
        },
        setNextCallback: function(t) {
            var a = this, e = !0;
            return this.nextCallback = function(l) {
                e && (e = !1, a.nextCallback = null, t.call(a, l));
            }, this.nextCallback.cancel = function() {
                e = !1;
            }, this.nextCallback;
        },
        cancelNextCallback: function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
        }
    }
});

exports.default = t;