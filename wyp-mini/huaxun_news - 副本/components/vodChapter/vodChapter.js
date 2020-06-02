var t = getApp();

Component({
    properties: {
        lheight: {
            type: String,
            value: ""
        }
    },
    data: {
        currentTime: 0,
        chapterList: [],
        condition: !1
    },
    ready: function() {
        var e = this;
        this.channel = t.globalData.channel, this.channel.bind("onChapter", function(t) {
            console.log("获取到章节信息");
            for (var a = t.data.list, r = 0; r < a.length; r++) a[r].timeLong = n(a[r].starttimestamp);
            e.setData({
                chapterList: a,
                condition: !0
            });
        });
        var n = function(t) {
            var e = parseInt(t / 1e3), n = parseInt(e / 3600), r = parseInt(e % 3600 / 60), i = e % 60;
            return a(n) + ":" + a(r) + ":" + a(i);
        }, a = function(t) {
            return t > 9 ? t : "0" + t;
        };
        this.t = setInterval(function(n) {
            e.setData({
                currentTime: 1e3 * t.globalData.currentTime
            });
        }, 1e3);
    },
    methods: {
        goSeek: function(t) {
            var e = parseInt(t.currentTarget.dataset.start / 1e3), n = wx.createVideoContext("myVideo");
            wx.createSelectorQuery()._defaultComponent.refreshCanvas(), n.seek(e);
        }
    },
    onUnload: function(t) {
        clearInterval(this.t), this.t = null;
    }
});