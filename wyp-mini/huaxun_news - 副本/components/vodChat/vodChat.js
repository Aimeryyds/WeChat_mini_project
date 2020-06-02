var e = getApp();

Component({
    properties: {
        lheight: {
            type: String,
            value: ""
        }
    },
    data: {
        allMessage: [],
        condition: !1,
        scrollTop: 0,
        showR1Text: "点击加载更多",
        showR1: !1,
        showR2: !1
    },
    ready: function() {
        var t = this;
        this.flag = !1;
        var s = wx.createSelectorQuery().in(t).select("#chat-page").boundingClientRect();
        this.channel = e.globalData.channel, this.channel.bind("onChat", function(e) {
            console.log("收到聊天信息");
            var s = e.data.list;
            t.analysisMess(s, 0);
        }), this.channel.bind("onChatSegmentList", function(e) {
            console.log("收到更多聊天");
            var s = e.data, n = t.data.showR2, a = s.list;
            if (n) return !1;
            t.analysisMess(a, 1), s.more || n ? t.setData({
                showR1Text: "点击加载更多"
            }) : t.setData({
                showR1Text: "点击加载更多",
                showR1: !1,
                showR2: !0
            });
        }), this.analysisMess = function(e, n) {
            t.data.showR1, t.data.showR2;
            var a = t.data.allMessage;
            parseInt(t.data.lheight);
            if (0 == n) for (u = 0; u < e.length; u++) {
                for (var i = (c = e[u]).senderRole.split(","), o = 0, h = 0; h < i.length; h++) o += parseInt(i[h]);
                o = 0 == o ? void 0 : o, c.sender.length > 8 && (c.sender = c.sender.substring(0, 8) + "...");
                var r = {
                    type: "public",
                    talkerId: c.senderId,
                    talkerName: c.sender,
                    senderRole: o,
                    msg: c.content
                }, l = (R = new Date(c.submitTime)).getHours(), d = R.getMinutes(), g = R.getSeconds();
                r.time = this.numTen(l) + ":" + this.numTen(d) + ":" + this.numTen(g), a.push(r);
            } else for (var u = e.length - 1; u > -1; u--) {
                for (var c = e[u], i = c.senderRole.split(","), o = 0, h = 0; h < i.length; h++) o += parseInt(i[h]);
                o = 0 == o ? void 0 : o, c.sender.length > 8 && (c.sender = c.sender.substring(0, 8) + "...");
                var r = {
                    type: "public",
                    talkerId: c.senderId,
                    talkerName: c.sender,
                    senderRole: o,
                    msg: c.content
                }, R = new Date(c.submitTime), l = R.getHours(), d = R.getMinutes(), g = R.getSeconds();
                r.time = this.numTen(l) + ":" + this.numTen(d) + ":" + this.numTen(g), a.unshift(r);
            }
            t.setData({
                allMessage: a,
                condition: !0
            }), s.exec(function(e) {
                t.setData({
                    scrollTop: e[0].height
                });
            }), t.flag = !1;
        }, this.numTen = function(e) {
            return e > 9 ? e : "0" + e;
        };
    },
    methods: {
        toUpper: function(e) {
            if (this.flag) return !1;
            this.flag = !0, this.setData({
                showR1Text: "正在加载中···"
            }), this.channel.send("submitChatSegment", {});
        },
        refreshChat: function(e) {
            this.setData({
                allMessage: [],
                showR1: !0,
                showR2: !1
            });
        },
        reset: function() {
            this.setData({
                condition: !1,
                allMessage: [],
                showR1Text: "点击加载更多",
                showR1: !1,
                showR2: !1
            });
        }
    },
    onUnload: function() {
        this.setData({
            showR1Text: "点击加载更多",
            showR1: !1,
            showR2: !1
        });
    }
});