Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../utils/moment"), t = require("../../../utils/number");

Component({
    properties: {
        config: {
            type: Object,
            value: {},
            observer: function(a) {
                var o = a.articlePv;
                "number" != typeof a.articlePv && (o = 0);
                var r = a.publicTime;
                this.setData({
                    pvFormat: t.format(o),
                    noPv: 0 == o,
                    dateFormat: new e.default(r).fromNow()
                });
            }
        },
        isTop: {
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
        },
        articlePv: {
            type: Number,
            value: 0
        }
    },
    data: {
        dateFormat: "",
        pvFormat: ""
    }
});