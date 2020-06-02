var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger")), t = require("../../utils/common"), r = require("../../store/index"), a = require("../../services/report"), o = require("../../services/jump");

Component({
    properties: {
        isBlackTheme: Boolean,
        withHome: Boolean,
        withSearch: Boolean,
        searchPlaceholder: Array,
        title: {
            type: String,
            value: "腾讯新闻"
        },
        fromPage: String
    },
    data: {
        show: !0,
        menuHeight: "",
        height: 0,
        searchWidth: "",
        showBackArrow: !0
    },
    created: function() {
        this.currentPlaceholder = "";
    },
    attached: function() {
        try {
            if ("devtools" !== r.systemInfo.platform && (0, t.versionLt)(r.systemInfo.version, "7.0.0")) this.setData({
                show: !1
            }); else {
                var a = {}, o = r.systemInfo.menuButtonRect;
                o.top && o.height && Object.assign(a, {
                    height: o.top + o.height + o.height / 4,
                    menuHeight: o.height + o.height / 2,
                    searchWidth: o.right - o.width - 24
                });
                var i = getCurrentPages() || [];
                a.showBackArrow = i.length > 1, this.setData(a);
            }
        } catch (t) {
            e.default.error("计算顶部导航条位置出现错误:", t);
        }
    },
    ready: function() {
        this.data.show && this.data.withHome && (0, a.report)({
            opType: a.OP_TYPE.back_home_exposure,
            fromPage: this.data.fromPage
        });
    },
    methods: {
        none: function() {},
        tapNavigate: function(e) {
            this.data.withHome ? (wx.switchTab({
                url: o.PAGE_PATH.HOME
            }), (0, a.report)({
                opType: a.OP_TYPE.back_home_click,
                fromPage: this.data.fromPage
            })) : wx.navigateBack({
                delta: 1
            });
        },
        tapSearch: function(e) {
            (0, o.navigateTo)(o.PAGE_PATH.SEARCH, {
                keywords: e.currentTarget.dataset.keywords || this.currentPlaceholder || ""
            });
        },
        onChange: function(e) {
            this.currentPlaceholder = this.data.searchPlaceholder[e.detail.current];
        }
    }
});