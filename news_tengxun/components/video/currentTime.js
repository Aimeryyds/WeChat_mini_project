require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("./service"), r = require("../../store/index");

Component({
    properties: {
        _uid: {
            type: String,
            observer: function(t) {
                var i = this;
                t && r.video.currentTimeMap.set(t, function(r) {
                    var t = (0, e.secToTimeStr)(r);
                    t !== i.data.currentTime && i.setData({
                        currentTime: t
                    });
                });
            }
        }
    },
    data: {
        currentTime: "00:00"
    },
    attached: function() {},
    detached: function() {},
    created: function() {},
    methods: {}
});