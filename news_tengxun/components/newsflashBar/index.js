require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../store/index"), r = require("../../services/jump.js"), t = require("../../services/report");

Component({
    properties: {
        title: String,
        time: String,
        fromPage: String
    },
    ready: function() {},
    methods: {
        onTap: function() {
            wx.setStorageSync("FLASH_FROM_PAGE", "home"), wx.setTabBarItem({
                index: 0,
                text: "首页"
            }), e.global.activeTab = e.constant.tabItem.newsflash, e.global.newsflashQuery = {
                from: "home"
            }, wx.switchTab({
                url: r.PAGE_PATH.NEWS_FLASH
            }), (0, t.report)({
                fromPage: this.data.fromPage,
                opType: t.OP_TYPE.speed_news_click
            });
        }
    }
});