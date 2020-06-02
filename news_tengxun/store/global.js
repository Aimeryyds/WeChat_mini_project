Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    name: "global",
    state: {
        dev: !1,
        activeTab: "index",
        newsflashQuery: {},
        jumpTabQuery: -1,
        jumpTargetPage: "",
        jumpTargetPagePath: "",
        systemKeyboardHeight: 0,
        abtestExp: null,
        scene: "",
        mpQRFrom: "",
        pageStartFrom: "icon",
        pageStart: "",
        fromJump: "",
        appLaunchStartTs: 0,
        appShowStartTs: 0,
        appHideStartTs: 0,
        appColdBoot: "1",
        appHasHideOnce: !1,
        fromOutside: !1
    },
    getter: {
        reportParams: function() {
            return {
                openType: this.scene,
                openTypeFrom: this.mpQRFrom,
                pageStartFrom: this.pageStartFrom,
                pageStart: this.pageStart,
                fromJump: this.fromJump
            };
        }
    },
    method: {}
};

exports.default = e;