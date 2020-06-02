var e = null;

Component({
    properties: {},
    data: {
        text: "玩命加载中。。。"
    },
    ready: function() {
        var t = this, n = 0, a = 0;
        e = setInterval(function() {
            if (n++, ++a >= 60 && clearInterval(e), 1 == n) r = "玩命加载中。"; else if (2 == n) r = "玩命加载中。。"; else if (3 == n) r = "玩命加载中。。。"; else {
                var r = "玩命加载中";
                n = 0;
            }
            t.setData({
                text: r
            });
        }, 1e3);
    },
    detached: function() {
        clearInterval(e);
    },
    methods: {
        noMove: function() {
            return !1;
        }
    }
});