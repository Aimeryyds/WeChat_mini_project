Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFromChannel = function() {
    var r = !0, n = !1, f = void 0;
    try {
        for (var p, o = e[Symbol.iterator](); !(r = (p = o.next()).done); r = !0) {
            var l = p.value;
            if (l.appId == a) return l.fromChannel;
        }
    } catch (a) {
        n = !0, f = a;
    } finally {
        try {
            r || null == o.return || o.return();
        } finally {
            if (n) throw f;
        }
    }
    return "WXXCX";
};

var a = getApp().globalData.launchOptions.referrerInfo.appId || "", e = [ {
    appId: "wx86a7749953783c5d",
    fromChannel: "WXXCX_PAKJ"
}, {
    appId: "wxbc3a78d0fa6d51b6",
    fromChannel: "LLB"
}, {
    appId: "wx4cc4f4204fc40082",
    fromChannel: "LLB1"
}, {
    appId: "wxf9cc22ef362f9548",
    fromChannel: "LLB2"
}, {
    appId: "wx2bf16aec7bbf9cd8",
    fromChannel: "LLB3"
}, {
    appId: "wx1ae34dfc9785ad33",
    fromChannel: "LLB4"
}, {
    appId: "wx3072ec17d05674a7",
    fromChannel: "LLB5"
}, {
    appId: "wx2833acd373c93ef7",
    fromChannel: "LLB6"
} ];