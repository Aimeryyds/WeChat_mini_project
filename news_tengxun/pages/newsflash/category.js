var t = require("../../services/report.js");

Component({
    properties: {
        list: Array
    },
    data: {
        tabIndex: 0,
        scrollLeft: 0,
        hasReport: []
    },
    created: function() {},
    attached: function() {},
    ready: function() {
        var e = this;
        this.observer = this.createIntersectionObserver({
            thresholds: [ .1 ],
            observeAll: !0
        }), this.observer.relativeTo(".classify-list-container").observe(".button-item", function(s) {
            var r = s.dataset.index, i = s.dataset.cateid;
            -1 === e.data.hasReport.indexOf(r) && (e.data.hasReport.push(r), (0, t.report)({
                fromPage: t.FROM_PAGE.speed_page,
                opType: t.OP_TYPE.speed_sort_exposure,
                ArticleSort: i
            }));
        });
    },
    detached: function() {
        this.observer && this.observer.disconnect();
    },
    methods: {
        onScroll: function(t) {
            this.scrollLeft = t.detail.scrollLeft;
        },
        onTap: function(e) {
            var s = this, r = 750 / wx.getSystemInfoSync().screenWidth, i = e.currentTarget.dataset.cateid, a = e.currentTarget.dataset.index;
            this.data.list.forEach(function(t) {
                t.id === i ? t.checked = !0 : t.checked = !1;
            }), this.setData({
                list: this.data.list
            });
            var c = this.createSelectorQuery(), o = 0, n = 0, l = 0, d = 22 / r;
            c.select(".classify-list-container").boundingClientRect(function(t) {
                o = t.width, n = t.left;
            }), a >= 0 && a < this.data.list.length && (a + 1 < this.data.list.length && c.select("#btn".concat(a + 1)).boundingClientRect(function(t) {
                l = t.left;
            }), c.select("#btn".concat(a)).boundingClientRect(function(t) {
                if (t.left - n + t.width >= o - d && a > 0) a < s.data.list.length - 1 ? s.scrollLeft ? s.scrollLeft = l - n - o + t.width + s.scrollLeft : s.scrollLeft = l - n - o + t.width : s.scrollLeft = t.left - n - o + t.width + s.scrollLeft, 
                s.setData({
                    scrollLeft: s.scrollLeft
                }); else if (t.left - n <= d) {
                    var e = 0;
                    a > 0 && (e = a - 1), s.setData({
                        tabIndex: e
                    });
                }
            }), c.exec()), this.triggerEvent("change", {
                cateId: i
            }), (0, t.report)({
                fromPage: t.FROM_PAGE.speed_page,
                opType: "speed_sort_click",
                ArticleSort: i
            });
        }
    }
});