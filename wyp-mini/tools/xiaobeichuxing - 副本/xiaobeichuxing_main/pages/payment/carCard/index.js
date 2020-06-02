var t = require("../../../utils/https.js");

Page({
    data: {
        val: "0",
        selected: !0,
        selected1: !1,
        Travelnum: "4",
        Datanum: "7",
        numCar: [ {
            Price: "0.01",
            Travelnum: "4",
            Datanum: "7"
        }, {
            Price: "30",
            Travelnum: "20",
            Datanum: "15"
        }, {
            Price: "60",
            Travelnum: "50",
            Datanum: "30"
        } ],
        ExplainC: [ {
            cont: "· 次卡需要在有效期内使用，过期失效。"
        }, {
            cont: "· 次卡在结费时是否能够使用，以落锁时次卡状态为准。"
        }, {
            cont: "· 次卡次数用完或次卡过期，均视为失效。"
        }, {
            cont: "· 次卡生效期间，每次行程限前120分钟免费，超出部分按照正常计费规则计费。"
        }, {
            cont: "· 购买次卡成功后，相应费用不予退还。"
        }, {
            cont: "· 本次卡仅限中国境内使用。"
        } ],
        ExplainY: [ {
            cont: "· 畅骑卡需要在有效期内使用，过期失效。"
        }, {
            cont: "· 畅骑卡在结费时是否能够使用，以落锁时次卡状态为准。"
        }, {
            cont: "· 畅骑卡次数用完或次卡过期，均视为失效。"
        }, {
            cont: "· 畅骑卡生效期间，每次行程限前120分钟免费，超出部分按照正常计费规则计费。"
        }, {
            cont: "· 购买畅骑卡成功后，相应费用不予退还。"
        }, {
            cont: "· 本畅骑卡仅限中国境内使用。"
        } ],
        state: "",
        paynum: "0.01"
    },
    onLoad: function(t) {},
    selected: function(t) {
        this.setData({
            selected: !0,
            selected1: !1
        });
    },
    selected1: function(t) {
        this.setData({
            selected: !1,
            selected1: !0
        });
    },
    select_date: function(t) {
        var e = t.currentTarget.dataset.pic;
        this.setData({
            val: e
        }), this.setData({
            state: t.currentTarget.dataset.key,
            paynum: t.currentTarget.dataset.pic,
            Travelnum: t.currentTarget.dataset.tnum,
            Datanum: t.currentTarget.dataset.dnum
        });
    },
    buys: function(e) {
        var n = this, a = {
            uid: wx.getStorageSync("uid"),
            cardid: n.data.val,
            paytype: 1
        };
        t.req("User/BuyCard", a, function(t, e) {
            0 == e.data.code ? wx.showToast({
                title: "购卡成功"
            }) : wx.showModal({
                title: "购卡失败",
                content: e.data.retmsg,
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});