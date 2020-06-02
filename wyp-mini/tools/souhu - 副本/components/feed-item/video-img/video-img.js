Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../utils/utils");

Component({
    properties: {
        config: {
            type: Object,
            value: {}
        },
        jumpUrl: {
            type: String,
            value: ""
        },
        videoSrc: {
            type: String,
            value: ""
        }
    },
    data: {
        authorImage: "",
        posterImage: "",
        showTitle: !0
    },
    pageLifetimes: {},
    attached: function() {
        this.setData({
            authorImage: e.URLPrefix(this.data.config.authorPic),
            posterImage: e.URLPrefix(this.data.config.cover)
        });
    },
    methods: {}
});