Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../utils/utils");

Component({
    properties: {
        config: {
            type: Object,
            value: {},
            observer: function(o) {
                var t = o.cover || o.images[0];
                this.setData({
                    cover: e.URLPrefix(t),
                    showCover: "string" == typeof t && t.length > 0
                });
            }
        },
        isRec: {
            type: Boolean,
            value: !1
        },
        hasAuthor: {
            type: Boolean,
            value: !0
        },
        noPv: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        cover: "",
        showCover: !0
    }
});