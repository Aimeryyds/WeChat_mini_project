function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function a(e) {
    var t = this, a = e.target.dataset.src, i = e.target.dataset.from;
    void 0 !== i && i.length > 0 && wx.previewImage({
        current: a,
        urls: t.data[i].imageUrls
    });
}

function i(e) {
    var t = e.currentTarget.dataset.src;
    console.log(t), t && wx.navigateTo({
        url: t
    });
}

function r(e) {
    var t = this, a = e.target.dataset.from, i = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && n(e, i, t, a);
}

function n(e, a, i, r) {
    var n, d = i.data[r];
    if (d && 0 != d.images.length) {
        var s = d.images, l = o(e.detail.width, e.detail.height, i, r), g = s[a].index, h = "" + r, u = !0, m = !1, v = void 0;
        try {
            for (var w, f = g.split(".")[Symbol.iterator](); !(u = (w = f.next()).done); u = !0) h += ".nodes[" + w.value + "]";
        } catch (e) {
            m = !0, v = e;
        } finally {
            try {
                !u && f.return && f.return();
            } finally {
                if (m) throw v;
            }
        }
        var c = h + ".width", x = h + ".height", P = h + ".windowWidth";
        i.setData((n = {}, t(n, c, l.imageWidth), t(n, x, l.imageheight), t(n, P, l.windowWidth), 
        n));
    }
}

function o(e, t, a, i) {
    var r = 0, n = 0, o = 0, d = {}, s = a.data[i].view.imagePadding;
    return r = l - 2 * s, g, e > r ? (o = (n = r) * t / e, d.imageWidth = n, d.imageheight = o) : (d.imageWidth = e, 
    d.imageheight = t), d.windowWidth = r, d;
}

var d = e(require("./showdown.js")), s = e(require("./html2json.js")), l = 0, g = 0;

wx.getSystemInfo({
    success: function(e) {
        l = e.windowWidth, g = e.windowHeight;
    }
}), module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', o = arguments[3], l = arguments[4], g = o, h = {};
        if ("html" == t) h = s.default.html2json(n, e); else if ("md" == t || "markdown" == t) {
            var u = new d.default.Converter().makeHtml(n);
            h = s.default.html2json(u, e);
        }
        h.view = {}, h.view.imagePadding = 0, void 0 !== l && (h.view.imagePadding = l);
        var m = {};
        m[e] = h, console.log(h), g.setData(m), g.wxParseImgLoad = r, g.wxParseImgTap = a, 
        g.wxParseTagATap = i;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var r = [], n = i.data, o = null, d = 0; d < a; d++) {
            var s = n[t + d].nodes;
            r.push(s);
        }
        e = e || "wxParseTemArray", (o = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(o);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        s.default.emojisInit(e, t, a);
    }
};