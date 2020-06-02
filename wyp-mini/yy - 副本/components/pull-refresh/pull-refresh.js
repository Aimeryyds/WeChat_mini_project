var t = getApp(), e = 0, a = void 0, i = !1;

Component({
    properties: {
        hasPullReq: {
            type: Boolean,
            observer: function(t, e) {
                0 == t && t != e && (this.setData({
                    hidePullRefresh: !0
                }), this.pullUp(0, 300));
            }
        }
    },
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    data: {
        hidePullRefresh: !0
    },
    methods: {
        touchstart: function(t) {
            a = t.changedTouches.length && t.changedTouches[0].pageY, e = 0;
        },
        touchmove: function(s) {
            if (e = s.changedTouches[0].pageY - a, t.globalData.pullScrollTop <= 0 && e > 20 && !this.data.hasPullReq) {
                this.setData({
                    hidePullRefresh: !1
                });
                var o = i ? 60 : 80;
                this.pullUp(o, 400);
            }
        },
        touchend: function() {
            var t = this;
            this.data.hasPullReq || this.data.hidePullRefresh || (this.setData({
                hasPullReq: !0
            }), setTimeout(function() {
                t.triggerEvent("refreshData");
            }, 800));
        },
        pullUp: function(t, e, a) {
            e = e || 300, a = a || "ease";
            var i = wx.createAnimation({
                duration: e,
                timingFunction: a
            });
            this.animation = i, this.fadeDown(t);
        },
        fadeDown: function(t) {
            e = t, this.animation.height(t).step(), this.setData({
                animationData: this.animation.export()
            });
        }
    },
    ready: function() {
        this.pullUp(0);
        var e = t.globalData.systemInfo.system;
        i = e.toLocaleLowerCase().indexOf("ios") > -1;
    }
});