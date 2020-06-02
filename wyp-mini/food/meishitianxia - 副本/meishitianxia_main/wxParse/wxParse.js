function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function i(e) {
    return !1;
}

function a(e) {
    var t = this, i = e.target.dataset.from, a = e.target.dataset.idx;
    void 0 !== i && i.length > 0 && r(e, a, t, i);
}

function r(e, i, a, r) {
    var o, d = a.data[r];
    if (d && 0 != d.images.length) {
        var s = d.images, l = n(e.detail.width, e.detail.height, a, r), g = s[i].index, h = "" + r, u = !0, m = !1, v = void 0;
        try {
            for (var f, w = g.split(".")[Symbol.iterator](); !(u = (f = w.next()).done); u = !0) h += ".nodes[" + f.value + "]";
        } catch (e) {
            m = !0, v = e;
        } finally {
            try {
                !u && w.return && w.return();
            } finally {
                if (m) throw v;
            }
        }
        var c = h + ".width", x = h + ".height";
        a.setData((o = {}, t(o, c, l.imageWidth), t(o, x, l.imageheight), o));
    }
}

function n(e, t, i, a) {
    var r = 0, n = 0, o = 0, d = {}, g = i.data[a].view.imagePadding;
    return r = s - 2 * g, l, e > r ? (o = (n = r) * t / e, d.imageWidth = n, d.imageheight = o) : (d.imageWidth = e, 
    d.imageheight = t), d;
}

var o = e(require("./showdown.js")), d = e(require("./html2json.js")), s = 0, l = 0;

wx.getSystemInfo({
    success: function(e) {
        s = e.windowWidth, l = e.windowHeight;
    }
}), module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', n = arguments[3], s = arguments[4], l = n, g = {};
        if ("html" == t) g = d.default.html2json(r, e); else if ("md" == t || "markdown" == t) {
            var h = new o.default.Converter().makeHtml(r);
            g = d.default.html2json(h, e), console.log(JSON.stringify(g, " ", " "));
        }
        g.view = {}, g.view.imagePadding = 0, void 0 !== s && (g.view.imagePadding = s);
        var u = {};
        u[e] = g, l.setData(u), l.wxParseImgLoad = a, l.wxParseImgTap = i;
    },
    wxParseTemArray: function(e, t, i, a) {
        for (var r = [], n = a.data, o = null, d = 0; d < i; d++) {
            var s = n[t + d].nodes;
            r.push(s);
        }
        e = e || "wxParseTemArray", (o = JSON.parse('{"' + e + '":""}'))[e] = r, a.setData(o);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", i = arguments[2];
        d.default.emojisInit(e, t, i);
    }
};