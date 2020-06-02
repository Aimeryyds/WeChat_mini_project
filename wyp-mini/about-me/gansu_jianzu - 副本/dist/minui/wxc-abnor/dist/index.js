Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./config"));

exports.default = Component({
    behaviors: [],
    properties: {
        type: {
            type: String,
            value: "",
            observer: function(e) {
                if (e && t.default[e]) {
                    var a = this.data.image || t.default[e].image, i = this.data.title || t.default[e].title, r = this.data.button || t.default[e].button, u = this.data.tip || t.default[e].tip;
                    this.setData({
                        image: a,
                        title: i,
                        button: r,
                        tip: u
                    });
                }
            }
        },
        image: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        tip: {
            type: String,
            value: ""
        },
        button: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        emitAbnorTap: function(t) {
            var e = t.detail, a = {};
            this.triggerEvent("abnortap", e, a);
        }
    }
});