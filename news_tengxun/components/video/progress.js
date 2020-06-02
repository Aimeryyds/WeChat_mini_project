var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (require("../../store/index"), 
t(require("../../utils/logger")));

Component({
    properties: {
        _uid: String,
        playing: Boolean,
        min: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: 100
        },
        durationStr: String,
        showFullscreenBtn: Boolean
    },
    data: {
        barAnimationData: []
    },
    created: function() {},
    attached: function() {},
    detached: function() {},
    methods: {
        tapPlayBtn: function() {
            e.default.info("点击播放/暂停按钮：", this.data.playing), this.triggerEvent("tapPlayBtn");
        },
        tapFullscreenBtn: function() {
            this.triggerEvent("tapFullscreenBtn");
        },
        onChange: function(t) {
            this.triggerEvent("change", t && t.detail);
        },
        onChanging: function(t) {
            this.triggerEvent("changing", t && t.detail);
        }
    }
});