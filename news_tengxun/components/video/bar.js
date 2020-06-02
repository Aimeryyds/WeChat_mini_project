require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../store/index");

Component({
    properties: {
        _uid: {
            type: String,
            observer: function(t) {
                var i = this;
                t && e.video.progressBarMap.set(t, function(e) {
                    i.data.value !== e && i.setData({
                        value: e
                    });
                });
            }
        },
        min: Number,
        max: Number
    },
    data: {
        value: 0
    },
    attached: function() {},
    detached: function() {},
    created: function() {},
    methods: {
        onChange: function(e) {
            this.triggerEvent("change", e && e.detail);
        },
        onChanging: function(t) {
            var i = t && t.detail || {};
            this.triggerEvent("changing", i), e.video.updateCurrentTime(this.data._uid, i.value);
        }
    }
});