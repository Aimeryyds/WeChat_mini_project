var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("./service");

e(require("../../utils/logger"));

Component({
    properties: {
        recommendList: {
            type: Array,
            value: [],
            observer: function(e) {
                var i = this;
                e.length > 0 && (0, t.getGuideInfo)().then(function(t) {
                    e.length > 3 ? (e.splice(3, 0, t), i.setData({
                        list: e,
                        flashPosition: 3
                    })) : (e.push(t), i.setData({
                        list: e,
                        flashPosition: e.length - 1
                    }));
                });
            }
        },
        titleText: {
            type: String,
            value: "精选推荐"
        },
        fromPage: String
    },
    data: {
        list: [],
        flashPosition: -1
    },
    created: function() {},
    attached: function() {},
    methods: {}
});