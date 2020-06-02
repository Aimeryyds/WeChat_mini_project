var e = getApp();

Component({
    properties: {
        lheight: {
            type: String,
            value: ""
        }
    },
    data: {
        scrollTop: 0,
        condition: !1,
        allList: [],
        showR1: !1,
        showR2: !1
    },
    ready: function() {
        var t = this, n = [];
        this.channel = e.globalData.channel, this.channel.bind("onQAList", function(e) {
            console.log("收到问答消息");
            for (var s = e.data, a = s.list, i = t.data.allList, r = t.data.showR2, o = 0; o < a.length; o++) {
                var u, h = a[o].id.split("_")[0], l = t.qaid_in(n, h);
                if (a[o].answerBy.length > 8 && (a[o].answerBy = a[o].answerBy.substring(0, 8) + "..."), 
                a[o].submitor.length > 8 && (a[o].submitor = a[o].submitor.substring(0, 8) + "..."), 
                l && !a[o].answer) break;
                if (l || !a[o].answer) {
                    l ? (a[o].reply = !0, u = new Date(1e3 * parseInt(a[o].answerTime))) : (n.push(h), 
                    a[o].reply = !1, u = new Date(1e3 * parseInt(a[o].submitTime)));
                    var m = u.getHours(), p = u.getMinutes(), w = u.getSeconds();
                    a[o].time = t.numTen(m) + ":" + t.numTen(p) + ":" + t.numTen(w), i.push(a[o]);
                } else {
                    a[o].reply = !1, n.push(h);
                    var m = (u = new Date(1e3 * parseInt(a[o].submitTime))).getHours(), p = u.getMinutes(), w = u.getSeconds();
                    a[o].time = t.numTen(m) + ":" + t.numTen(p) + ":" + t.numTen(w), i.push(a[o]);
                    var d = {};
                    for (var g in a[o]) d[g] = a[o][g];
                    d.reply = !0, i.push(d);
                }
            }
            i.length > 0 && t.setData({
                allList: i,
                condition: !0
            }), "false" != s.more || r ? t.setData({
                showR1: !0,
                showR2: !1
            }) : t.setData({
                showR1: !1,
                showR2: !0
            });
        }), this.numTen = function(e) {
            return e > 9 ? e : "0" + e;
        }, this.qaid_in = function(e, t) {
            if (0 == e) return !1;
            for (var n in e) if (e[n] == t) return !0;
            return !1;
        };
    },
    methods: {
        lower: function(e) {
            var t = this, n = t.data.showR1, s = t.data.showR2;
            if (s) return !1;
            n || s || t.setData({
                showR1: !0
            }), t.channel.send("submitQAList", {});
        }
    }
});