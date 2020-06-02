var e, t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../@babel/runtime/helpers/defineProperty")), i = t(require("../../utils/logger")), n = require("../../store/index"), s = require("../../services/userOption.js"), r = "M_E_NEWS", u = "HOT_NEWS";

Page({
    data: {
        pageStatus: n.constant.pageStatus,
        status: n.constant.pageStatus.loading,
        settingData: (e = {}, (0, a.default)(e, r, {
            image: "http://mat1.gtimg.com/www/js/news/set_ic_tuijian.png",
            title: "早晚报推荐",
            des: "每天8:00、18:00，第一时间获得早晚报",
            checked: !1
        }), (0, a.default)(e, u, {
            image: "http://mat1.gtimg.com/www/js/news/set_ic_tuisong.png",
            title: "热点新闻推送",
            des: "每天15:00，知晓今日热点新闻",
            checked: !1
        }), e)
    },
    onLoad: function(e) {},
    onShow: function(e) {},
    onReady: function() {},
    handleSwitch: function(e) {
        var t, n = this, o = (e && e.target && e.target.dataset || {}).field, c = (e && e.detail || {}).value ? "1" : "0";
        o === r ? t = {
            env: "debug",
            type: "pushZWMsgStatus",
            value: c
        } : o === u && (t = {
            env: "debug",
            type: "pushStatus",
            value: c
        }), (0, s.setUserOption)(t).catch(function(e) {
            var t = c ? "打开" : "关闭";
            wx.showToast({
                icon: "none",
                title: "".concat(t, "失败")
            }), n.setData((0, a.default)({}, "settingData.".concat(o, ".checked"), !c)), i.default.error("Error: setUserOption"), 
            i.default.error(e);
        });
    }
});