var e = getApp(), a = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        mainColor: "",
        textColor: "",
        baseMileage_A: "无",
        baseTime_A: "无",
        baseTime_B: null,
        baseTime_C: null,
        bookBaseTime_A: "无",
        parkBaseTime_A: "无",
        headColor: "",
        areaMoney: "无",
        parkPointMoney: "",
        maxFee: "",
        capMile: ""
    },
    onLoad: function(t) {
        this.setData({
            mainColor: e.globalData.mainColor,
            textColor: e.globalData.textColor,
            headColor: e.globalData.headColor
        }), wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0,
            duration: 1e5
        });
        var i = t.machineNO;
        console.log("计价规则编号：" + i);
        var o = e.globalData.baseUrl + "accountFee/getByMachineNO.do", l = this;
        e.checkToken(function(e) {
            if (e.length > 0) {
                var t = {
                    token: e,
                    machineNO: i
                };
                a.request(o, t, function(e) {
                    wx.hideToast();
                    var a = e.data.baseMile, t = (Number(e.data.baseMileFee) / 100).toFixed(2), i = e.data.overMile, o = (Number(e.data.overMileFee) / 100).toFixed(2), r = e.data.baseTime, n = (Number(e.data.baseTimeFee) / 100).toFixed(2), d = e.data.overTime, m = (Number(e.data.overTimeFee) / 100).toFixed(2), s = (e.data.parkBaseTime, 
                    e.data.parkBaseTimeFee, e.data.parkTimeFee, e.data.minuteInput, e.data.freeTime), c = "无", u = "无", b = "无", p = "", T = "", F = "", M = null, x = null;
                    0 != a && (c = a + "公里内" + t + "元,超过" + a + "公里，按照" + o + "元/" + i + "公里计费"), 0 != r ? (void 0 != s && 0 != s && (x = "前" + s + "分钟内免费"), 
                    u = r + "分钟内" + n + "元", M = "超过" + r + "分钟按" + m + "元/" + d + "分钟计费") : u = "按" + m + "元/" + d + "分钟计费", 
                    e.data.dispatchSwitch && (b = "运营区域外还车额外收取" + (Number(e.data.areaMoney) / 100).toFixed(2) + "元", 
                    p = "站点外还车额外收取" + (Number(e.data.parkPointMoney) / 100).toFixed(2) + "元"), e.data.capMile && e.data.capMileFee && (F = e.data.capMile + "公里内，封顶" + (Number(e.data.capMileFee) / 100).toFixed(2) + "元"), 
                    e.data.capTime && e.data.capTimeFee && (T = e.data.capTime + "分钟内，封顶" + (Number(e.data.capTimeFee) / 100).toFixed(2) + "元"), 
                    l.setData({
                        baseMileage_A: c,
                        baseTime_A: u,
                        parkBaseTime_A: "有，按【计时费】规则计算",
                        baseTime_B: M,
                        baseTime_C: x,
                        areaMoney: b,
                        parkPointMoney: p,
                        maxFee: T,
                        capMile: F
                    });
                });
            }
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onReady: function() {},
    onShow: function() {}
});