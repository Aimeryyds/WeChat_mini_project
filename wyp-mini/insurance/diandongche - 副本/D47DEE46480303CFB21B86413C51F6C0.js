Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    return Behavior({
        lifetimes: {
            created: function() {
                this._oriTriggerEvent = this.triggerEvent, this.triggerEvent = this._triggerEvent;
            }
        },
        properties: {
            events: {
                type: Object,
                value: t
            }
        },
        data: {
            inputEvents: t
        },
        definitionFilter: function(e) {
            Object.assign(e.data = e.data || {}, {
                inputEvents: Object.assign({}, t, e.inputEvents)
            }), Object.assign(e.methods = e.methods || {}, {
                _triggerEvent: function(t, e, n, i) {
                    var s = !(2 < arguments.length && void 0 !== n) || n, r = 3 < arguments.length ? i : void 0, a = this.data.inputEvents["on".concat(t[0].toUpperCase()).concat(t.slice(1))];
                    s && "function" == typeof a && a.call(this, e), this._oriTriggerEvent(t, e, r);
                }
            }), Object.assign(e.observers = e.observers || {}, {
                events: function(e) {
                    this.setData({
                        inputEvents: Object.assign({}, t, this.data.inputEvents, e)
                    });
                }
            });
        }
    });
};

var t = {
    onChange: function() {}
};