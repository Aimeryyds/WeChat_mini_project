Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../utils/spm/exposure"), t = require("../../utils/spm/index");

Component({
    properties: {
        index: {
            type: Number,
            value: 0
        },
        page: {
            type: Number,
            value: 1
        },
        list: {
            type: Object,
            value: {},
            observer: function() {
                e.addExposure(".feed-item" + this.data.page, this);
            }
        },
        pvId: {
            type: String,
            value: ""
        },
        spmB: {
            type: String,
            value: "0"
        },
        spmC: {
            type: String,
            value: "fd-d"
        }
    },
    data: {
        spmA: t.default.Config.spmCode.spma
    },
    methods: {}
});