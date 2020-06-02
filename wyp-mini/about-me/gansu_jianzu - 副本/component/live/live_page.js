function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../network/api.js");

Component({
    data: {
        tabs: [ {
            title: "当前活动",
            liveList: [],
            noDataTitle: "没有直播活动"
        }, {
            title: "历史活动",
            liveList: [],
            noDataTitle: "没有历史直播活动"
        } ],
        isPusher: !1
    },
    ready: function() {
        var t = this, e = this.selectComponent("#tab"), a = wx.createSelectorQuery().in(e);
        a.select(".tab__navbar").boundingClientRect(), a.exec(function(e) {
            wx.getSystemInfo({
                success: function(a) {
                    t.setData({
                        scrollHeight: a.windowHeight - e[0].height
                    });
                }
            });
        }), this.renderStartButton();
    },
    methods: {
        renderStartButton: function() {
            var t = this;
            (0, e.checkPusher)().then(function(e) {
                e.data.res && t.setData({
                    isPusher: !0
                });
            });
        },
        onTabChange: function(t) {
            var e = t.detail.key;
            switch (wx.showLoading({
                title: "请稍后",
                mask: !0
            }), e) {
              case 0:
                this.queryLives();
                break;

              case 1:
                this.queryHistories();
            }
        },
        queryLives: function() {
            var a = this;
            this.setData(t({}, "tabs[0].loading", !0)), (0, e.queryCurrentLives)({
                pageSize: 999
            }).then(function(e) {
                var i;
                wx.hideLoading(), a.setData((i = {}, t(i, "tabs[0].liveList", e.data.data), t(i, "tabs[0].loading", !1), 
                i));
            }).catch(function(e) {
                a.setData(t({}, "tabs[0].loading", !1)), wx.hideLoading();
            });
        },
        queryHistories: function() {
            var a = this;
            this.setData(t({}, "tabs[1].loading", !0)), (0, e.queryHistoryLives)({
                pageSize: 999
            }).then(function(e) {
                var i;
                wx.hideLoading(), a.setData((i = {}, t(i, "tabs[1].liveList", e.data.data), t(i, "tabs[1].loading", !1), 
                i));
            }).catch(function(e) {
                wx.hideLoading(), a.setData(t({}, "tabs[1].loading", !1));
            });
        }
    }
});