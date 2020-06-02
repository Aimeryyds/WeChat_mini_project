Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        isShow: {
            type: Boolean,
            value: !1
        },
        text: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: ""
        },
        iconColor: {
            type: String,
            value: ""
        },
        iconImage: {
            type: String,
            value: ""
        },
        duration: {
            type: Number,
            value: 2e3
        }
    },
    data: {},
    methods: {
        show: function() {
            var t = this, e = this.data.duration;
            clearTimeout(this._timer), this.setData({
                isShow: !0
            }), e > 0 && e !== 1 / 0 && (this._timer = setTimeout(function() {
                t.hide(), t.triggerEvent("success", {}, {});
            }, e));
        },
        hide: function() {
            this._timer = clearTimeout(this._timer), this.setData({
                isShow: !1
            });
        }
    }
});