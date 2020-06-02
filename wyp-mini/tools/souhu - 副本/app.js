Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./utils/spm/index"), o = require("./utils/utils"), t = require("./api/sh");

App({
    globalData: {
        currentPage: {
            spm: "",
            info: {
                page_type_id: "",
                content_id: void 0,
                author_id: void 0
            }
        },
        isIphoneX: !1
    },
    onLaunch: function() {
        var e = this;
        t.sh.getSystemInfo({
            success: function(o) {
                -1 !== o.model.search("iPhone X") && "web" !== o.platform && (e.globalData.isIphoneX = !0);
            }
        });
    },
    reportPerformance: function() {
        t.sh.performance && t.sh.performance.mark("FMP");
    },
    setSnapShot: function() {
        t.sh.saveSnapshot && t.sh.saveSnapshot();
    },
    setCurrentPage: function(t) {
        void 0 === t && (t = {
            bCode: "0",
            cCode: "0",
            dCode: "0",
            pvId: 0,
            articleId: void 0,
            authorId: void 0
        }), this.globalData.currentPage = {
            spm: e.default.spmACode + "." + t.bCode + "." + (t.cCode || 0) + "." + (t.dCode || 0) + "." + t.pvId,
            info: {
                page_type_id: o.getPageType(t.bCode),
                content_id: t.articleId,
                author_id: t.authorId
            }
        };
    },
    jump404: function(o) {
        void 0 === o && (o = {
            bCode: "0",
            cCode: "0",
            dCode: "0",
            pvId: 0
        }), t.sh.redirectTo({
            url: "../404/404?spm=" + e.default.spmACode + "." + o.bCode + ".0.0." + o.pvId
        });
    }
});