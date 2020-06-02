var t, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../components/fruitMachine.js")), a = require("../../../utils/server"), i = require("../../../wxParse/wxParse"), r = "";

Page({
    data: {
        btnList: [ 1, 2, 3, 8, 0, 4, 7, 6, 5 ],
        myData: {},
        circleList: []
    },
    onShow: function() {
        console.log("onShow");
        for (var e = this, a = 7.5, i = 7.5, r = [], s = 0; s < 24; s++) {
            if (0 == s) i = 45, a = 10; else if (s < 6) i = 7.5, a += 102.5; else if (6 == s) i = 9, 
            a = 527; else if (s < 12) i += 94, a = 550; else if (12 == s) i = 565, a = 550; else if (s < 18) i = 515, 
            a -= 102.5; else if (18 == s) i = 515, a = 37; else {
                if (!(s < 24)) return;
                i -= 94, a = 7.5;
            }
            r.push({
                topCircle: i,
                leftCircle: a,
                index: s
            });
        }
        this.setData({
            "myData.circleList": r
        }), t = setInterval(function() {
            "#FFDF2F" == e.data.myData.colorCircleFirst ? e.setData({
                "myData.colorCircleFirst": "#F97B74",
                "myData.colorCircleSecond": "#FFDF2F"
            }) : e.setData({
                "myData.colorCircleFirst": "#FFDF2F",
                "myData.colorCircleSecond": "#F97B74"
            });
        }, 500);
    },
    onHide: function() {
        clearInterval(t);
    },
    onUnload: function() {
        clearInterval(t);
    },
    onLoad: function() {
        var t = this, e = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=lottery.lottery_id&type=3",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(r) {
                console.log(r), console.log("获取ID"), t.setData({
                    myId: r.data.result.id
                }), a.sendRequest({
                    url: "?r=lottery.lists",
                    data: {
                        utoken: e,
                        id: t.data.myId
                    },
                    method: "POST",
                    success: function(e) {
                        if (e.data.result.reward) {
                            var a = {
                                titleBtn: "立即抽奖"
                            };
                            e.data.result.lottery.lotteryinfo && i.wxParse("article", "html", e.data.result.lottery.lotteryinfo, t, 5), 
                            e.data.result.reward.splice(4, 0, a), t.setData({
                                prizeList1: e.data.result.reward,
                                prizeList: e.data.result.reward,
                                prizeResult: e.data.result
                            }), t.data.prizeList.splice(3, 1, t.data.prizeList1[8]), t.data.prizeList.splice(5, 1, t.data.prizeList1[3]), 
                            t.data.prizeList.splice(6, 1, t.data.prizeList1[7]), t.data.prizeList.splice(7, 1, t.data.prizeList1[6]), 
                            t.data.prizeList.splice(8, 1, t.data.prizeList1[5]), t.setData({
                                prizeList: t.data.prizeList
                            });
                            for (var r = 0; r < t.data.prizeList.length; r++) t.data.prizeList[r].id = t.data.btnList[r];
                            t.setData({
                                prizeList: t.data.prizeList
                            });
                        } else wx.showModal({
                            title: "提示",
                            content: "请添加活动",
                            success: function(t) {
                                t.confirm ? wx.navigateBack({
                                    delta: 1
                                }) : t.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                        0 == t.data.prizeResult.chance && t.setData({
                            "myData.btnDisabled": "disabled"
                        });
                    }
                });
            }
        });
    },
    startPrize: function() {
        var t = this, i = this;
        if (this.setData({
            "myData.btnDisabled": "disabled"
        }), this.fruitMachine = new e.default(this, {
            callback: function() {
                t.setData({
                    "myData.cover": !0
                });
            }
        }), i.data.prizeResult.chance > 0) {
            var s = wx.getStorageSync("utoken");
            a.sendRequest({
                url: "?r=lottery.reward",
                data: {
                    utoken: s,
                    id: i.data.myId
                },
                method: "POST",
                success: function(t) {
                    i.data.prizeResult.chance--, t.data.result.icon ? (i.setData({
                        luckDraw: t.data.result,
                        prizeResult: i.data.prizeResult
                    }), r = parseInt(i.data.luckDraw.id), i.fruitMachine.ret = r + 1, i.fruitMachine.speed = 80, 
                    i.start()) : i.setData({
                        "myData.cover": !0,
                        "luckDraw.info": "支付配置有误，请联系商家完善",
                        "luckDraw.icon": "https://tws.cnweisou.com/images/gameError.jpg"
                    });
                }
            });
        } else 0 == i.data.prizeResult.chance && (i.data.prizeResult.chance = 0, i.setData({
            prizeResult: i.data.prizeResult,
            "myData.btnDisabled": "disabled"
        }));
    },
    prizeOk: function() {
        var t = this;
        console.log("prizeOk"), t.fruitMachine.reset(), t.setData({
            "myData.btnDisabled": "",
            "myData.cover": !1
        });
    }
});