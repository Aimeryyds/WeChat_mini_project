Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.link = void 0;

var e = Behavior({
    properties: {
        url: String,
        linkType: {
            type: String,
            value: "navigateTo"
        }
    },
    methods: {
        jumpLink: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "url", t = this.data[e];
            t && wx[this.data.linkType]({
                url: t
            });
        }
    }
});

exports.link = e;