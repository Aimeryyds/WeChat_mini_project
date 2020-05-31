Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        contentStyle: String
    },
    data: {
        menus: {},
        maxWidth: 0,
        isAdjusted: !1,
        startX: 0,
        contentStyle: "",
        rpx: 1
    },
    ready: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                var a = t.screenWidth;
                e.getMenusInfo(function(t) {
                    t && e.setData({
                        maxWidth: t.width,
                        rpx: a / 750
                    });
                });
            }
        });
    },
    methods: {
        getMenusInfo: function(t) {
            wx.createSelectorQuery().select(".menus-area .menu.main").boundingClientRect(function(e) {
                t && t(e);
            }).exec();
        },
        calculateMenuOffsetAndSpeedRatio: function(t) {
            var e = t.offsetTotalWidth, a = null, n = null, i = t.length;
            if (0 !== i) {
                1 === i && (a.relatedOffsetWidth = 0, t[0].speedRatio = 1);
                for (var s = 0; s < i; s++) a = t[s], 0 === s ? (a.relatedOffsetWidth = 0, a.calOffsetWidth = a.width) : (n = t[s - 1], 
                a.relatedOffsetWidth = n.relatedOffsetWidth || n.width, a.calOffsetWidth = a.width + n.calOffsetWidth), 
                a.speedRatio = parseFloat((a.calOffsetWidth / e).toFixed(5));
            }
        },
        parseStyleObject: function(t) {
            var e = {}, a = null;
            for (var n in t) {
                e[n] = "", a = t[n];
                for (var i in a) e[n] = i + ": " + a[i] + ";";
            }
        },
        onSlideStart: function(t) {
            var e = this, a = e.data.maxWidth;
            if (1 === t.touches.length) {
                var n = t.touches[0];
                e.setData({
                    startX: n.clientX,
                    startY: n.clientY
                }), Math.abs(t.currentTarget.offsetLeft) != a && e.triggerEvent("slidestart");
            }
        },
        onSlide: function(t) {
            if (1 === t.touches.length) {
                var e = this, a = t.touches[0], n = a.clientX - e.data.startX, i = a.clientY - e.data.startY;
                if (Math.abs(i) > Math.abs(n)) return;
                var s = e.data.maxWidth, d = "";
                n > 0 && (d = "left: " + -(s - n) + "px"), n < 0 && (d = "left: " + n + "px"), e.setData({
                    contentStyle: d
                });
            }
        },
        onSlideEnd: function(t) {
            var e = this;
            if (1 === t.changedTouches.length) {
                var a = t.changedTouches[0].clientX - e.data.startX, n = t.changedTouches[0].clientY - e.data.startY;
                if (Math.abs(n) > Math.abs(a)) return;
                e.data.isAdjusted;
                var i = e.data.maxWidth;
                if (a < 0 && Math.abs(a) > .1 * i) {
                    var s = "left: " + -i + "px;";
                    this.setData({
                        isAdjusted: !0,
                        contentStyle: s
                    }), e.triggerEvent("slideend", "left");
                }
                if (a >= 0) {
                    this.setData({
                        isAdjusted: !0,
                        contentStyle: "left: 0px;"
                    }), e.triggerEvent("slideend", "right");
                }
            }
        }
    }
});