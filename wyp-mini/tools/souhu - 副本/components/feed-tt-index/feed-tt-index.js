Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../utils/event"), t = require("../../api/sh"), r = getApp();

Component({
    properties: {
        currentIdx: {
            type: Number,
            value: 0,
            observer: function(e, t) {
                e && e != t && this.setTab(e);
            }
        },
        list: {
            type: Array,
            value: []
        },
        pvId: {
            type: String,
            value: "0"
        },
        spmB: {
            type: String,
            value: "0"
        }
    },
    data: {
        currentIndex: 0,
        isFirstLoad: !0
    },
    attached: function() {
        e.on("goScrollTop", this, function() {
            t.sh.pageScrollTo({
                scrollTop: 0
            });
        });
    },
    methods: {
        handleIndexChange: function(e) {
            this.data.isFirstLoad = !1;
            var t = e.detail.current;
            this.setTab(t);
        },
        setTab: function(e) {
            e != this.data.currentIndex && (this.data.currentIndex = e, this.setData({
                currentIndex: this.data.currentIndex
            }));
        },
        feedExposure: function(e) {
            this.triggerEvent("feedExposure", e.detail);
        },
        onFeedListSetDataCallback: function(e) {
            2 == e.detail.page && this.data.isFirstLoad && r.ttPerformance();
        }
    }
});