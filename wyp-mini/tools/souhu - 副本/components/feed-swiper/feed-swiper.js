Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = getApp();

Component({
    properties: {
        currentIdx: {
            type: Number,
            value: 0,
            observer: function(t, a) {
                t && t != a && this.setTab(t);
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
        isGetDataList: [],
        currentIndex: 0,
        animationDuration: 500,
        isFirstLoad: !0
    },
    attached: function() {
        this.setList();
    },
    methods: {
        setList: function() {
            var t = this;
            this.data.list.forEach(function(a, e) {
                t.data.isGetDataList.push(0 == e);
            }), this.setData({
                isGetDataList: this.data.isGetDataList
            });
        },
        handleIndexChange: function(t) {
            this.data.isFirstLoad = !1;
            var a = t.detail.current;
            this.setTab(a);
        },
        setTab: function(t) {
            var a = this;
            t != this.data.currentIndex && (this.data.currentIndex = t, this.data.isGetDataList[t] = !0, 
            this.setData({
                currentIndex: this.data.currentIndex
            }), setTimeout(function() {
                a.setData({
                    isGetDataList: a.data.isGetDataList
                });
            }, 300));
        },
        animationfinish: function(t) {
            var a, e = t.detail.current;
            this.setData((a = {}, a["isGetDataList[" + e + "]"] = !0, a));
        },
        feedExposure: function(t) {
            this.triggerEvent("feedExposure", t.detail);
        },
        onFeedListSetDataCallback: function(a) {
            2 == a.detail.page && this.data.isFirstLoad && t.ttPerformance();
        },
        handleLoadAd: function(t) {
            this.triggerEvent("adLoad", t.detail);
        },
        handleErrorAd: function(t) {
            this.triggerEvent("adError", t.detail);
        }
    }
});