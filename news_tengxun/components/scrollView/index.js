require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../store/index");

Component({
    properties: {
        enablePulldownRefresh: Boolean,
        withTopTips: {
            type: Boolean,
            value: !0
        },
        withBottomLoading: {
            type: Boolean,
            value: !0
        },
        pulldownText: {
            type: String,
            value: "下拉可以刷新"
        },
        releaseText: {
            type: String,
            value: "松开立即刷新"
        },
        loadingText: {
            type: String,
            value: "正在刷新"
        },
        finishText: {
            type: String,
            value: "刷新完成"
        },
        pulldownFinished: {
            type: Boolean,
            value: !0,
            observer: function(t) {
                var e = this;
                t ? this.data.finishText ? setTimeout(function() {
                    e.setData({
                        status: 3,
                        scrollTop: 0
                    }), setTimeout(function() {
                        return e.setData({
                            status: 0
                        });
                    }, 1e3);
                }, 500) : this.setData({
                    status: 0,
                    scrollTop: 0
                }) : this.setData({
                    status: 2
                });
            }
        },
        bottomLoadingStatus: {
            type: String,
            value: t.constant.pageStatus.loading
        },
        bottomLoadingText: {
            type: String,
            value: "正在加载"
        },
        bottomLoadingNoMoreText: {
            type: String,
            value: "没有更多了，稍后再试"
        },
        scrollTop: {
            type: Number,
            value: 0
        },
        hasMore: {
            type: Boolean,
            value: !0
        },
        scrollWithAnimation: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        status: 0
    },
    created: function() {
        Object.assign(this, {
            scrollTopThreshold: -50,
            lastScrollTop: 0
        });
    },
    attached: function() {},
    ready: function() {
        var t = this;
        this.$obQuery = this.createIntersectionObserver({
            thresholds: [ .5 ]
        }), this.$obQuery.relativeToViewport().observe(".bottom-loading-bar", function(e) {
            e.intersectionRatio >= .5 && t.triggerEvent("reachBottom");
        });
    },
    detached: function() {
        this.$obQuery && this.$obQuery.disconnect();
    },
    methods: {
        onScroll: function(t) {
            var e = t.detail.scrollTop;
            if (!(this.scrollTop <= 0 && 0 === e)) if (e > 0 && 2 === this.data.status) this.setData({
                scrollTop: 0
            }); else {
                if (this.scrollTop = e, 0 === this.data.status || 1 === this.data.status) {
                    var o = 0;
                    e < this.scrollTopThreshold && (o = 1), this.data.status !== o && this.setData({
                        status: o
                    });
                }
                this.triggerEvent("scroll", t.detail);
            }
        },
        onTouchEnd: function(t) {
            1 === this.data.status && (this.setData({
                status: 2
            }), this.triggerEvent("pullDownRefresh"));
        },
        onRetry: function() {
            this.triggerEvent("retry");
        }
    }
});