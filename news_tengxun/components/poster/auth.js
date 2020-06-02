require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

Component({
    properties: {
        show: {
            type: Boolean,
            observer: function(e, t, o) {
                this._changeShow(e);
            }
        }
    },
    created: function() {},
    attached: function() {},
    methods: {
        closePopup: function() {
            this.setData({
                show: !1
            });
        },
        _changeShow: function(e) {
            this.setData({
                show: e
            });
        }
    }
});