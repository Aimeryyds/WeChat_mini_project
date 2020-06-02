Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    _timer: null,
    behaviors: [],
    properties: {
        isShow: {
            type: Boolean,
            value: !1
        },
        type: {
            type: String,
            value: "mgj"
        },
        image: {
            type: String,
            value: ""
        },
        slip: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        show: function() {
            var t = this;
            this._timer && clearTimeout(this._timer), this._timer = setTimeout(function() {
                t._timer = null, t.setData({
                    isShow: !0
                });
            }, 500);
        },
        hide: function() {
            this._timer && (clearTimeout(this._timer), this._timer = null), this.setData({
                isShow: !1
            });
        }
    }
});