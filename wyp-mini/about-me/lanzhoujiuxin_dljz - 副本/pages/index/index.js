function a(a) {
    var t = n.globalData._cardEntranceData;
    if (void 0 !== t) a.setData({
        cardEntranceType: 0,
        cardEntranceInfo: {
            id: t.id,
            avatorUrl: t.avator
        }
    }), delete n.globalData._cardEntranceData; else {
        r.getVisitedSimpleInfo(function(t) {
            var n = {
                cardEntranceType: 1
            };
            void 0 !== t.id && (n.cardEntranceInfo = {
                id: t.id,
                name: t.name,
                avatorUrl: t.avatorUrl
            }), a.setData(n);
        });
    }
}

function t(a) {
    var t = wx.createAnimation({
        duration: 1e3,
        timingFunction: "ease"
    });
    t.opacity(1).translateY(25).step(), a.setData({
        animationData: t.export()
    });
}

var n = getApp(), r = require("../../utils/api");

Page({
    data: {
        cardEntranceType: 0,
        cardEntranceInfo: null,
        cardEntranceId: 0,
        showCardEntrance: !1,
        pageScrollTop: 0,
        timmer: 0,
        hasCloseCard: !1,
        animationData: {}
    },
    components: {
        col: {
            isIndexCol: !0
        }
    },
    onLoad: function(a) {},
    onReady: function() {
        a(this);
    },
    onPageScroll: function(a) {
        if (this.data.cardEntranceInfo && !this.data.hasCloseCard && !this.data.showCardEntrance) {
            var n = this.data.timmer, r = this.data.pageScrollTop, e = this;
            n && clearTimeout(n), n = setTimeout(function() {
                r > a.scrollTop + 50 ? e.setData({
                    pageScrollTop: a.scrollTop,
                    showCardEntrance: !0
                }, function() {
                    t(e);
                }) : e.setData({
                    pageScrollTop: a.scrollTop
                });
            }, 100), this.setData({
                timmer: n
            });
        }
    },
    onReachBottom: function() {
        if (this.data.cardEntranceInfo && !this.data.hasCloseCard && !this.data.showCardEntrance) {
            var a = this;
            this.setData({
                showCardEntrance: !0
            }, function() {
                t(a);
            });
        }
    },
    closeCardEntrance: function() {
        this.setData({
            showCardEntrance: !1,
            hasCloseCard: !0
        });
    },
    backCardPage: function() {
        var a = "/pages/card/card?id=" + this.data.cardEntranceInfo.id;
        a = a + "&type=" + this.data.cardEntranceType, wx.navigateTo({
            url: a
        });
    }
});