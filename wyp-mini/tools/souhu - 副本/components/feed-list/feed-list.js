Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../utils/spm/index"), t = require("../../utils/spm/exposure"), i = require("../../config/feed-config");

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
                t.addExposure(".feed-item" + this.data.page, this);
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
        spmA: e.default.Config.spmCode.spma,
        isHideAd: !1,
        ViewType: i.ViewType,
        openType: "navigate"
    },
    methods: {
        closeAd: function() {
            this.setData({
                isHideAd: !0
            });
        },
        handleLoadAd: function(e) {
            this.triggerEvent("adLoad", e.detail);
        },
        handleErrorAd: function(e) {
            this.triggerEvent("adError", e.detail);
        }
    },
    attached: function() {
        getCurrentPages().length >= 10 && this.setData({
            openType: "redirect"
        });
    }
});