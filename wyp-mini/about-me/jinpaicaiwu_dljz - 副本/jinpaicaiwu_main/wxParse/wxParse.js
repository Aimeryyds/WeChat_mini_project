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
    if (void 0 !== i && i.length > 0) {
        var n = r(t, i);
        wx.previewImage({
            current: a,
            urls: n.imageUrls
        });
    }
}

function i(e) {
    var t = this, a = e.target.dataset.from, i = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && n(e, i, t, a);
}

function r(e, t) {
    for (var a = e.data, i = t.split("."), r = a, n = 0; n < i.length; n++) {
        var d = i[n], o = d.match(/^(.+?)\[(\d+)\]$/);
        if (o) {
            var s = parseInt(o[2]);
            r = r[o[1]][s];
        } else r = r[d];
    }
    return r;
}

function n(e, a, i, n) {
    var o, s = r(i, n);
    if (s && 0 != s.images.length) {
        var l = s.images, g = d(e.detail.width, e.detail.height, i, n), h = l[a].index, v = "" + n, m = !0, u = !1, f = void 0;
        try {
            for (var w, c = h.split(".")[Symbol.iterator](); !(m = (w = c.next()).done); m = !0) v += ".nodes[" + w.value + "]";
        } catch (e) {
            u = !0, f = e;
        } finally {
            try {
                !m && c.return && c.return();
            } finally {
                if (u) throw f;
            }
        }
        var x = v + ".width", P = v + ".height";
        i.setData((o = {}, t(o, x, g.imageWidth), t(o, P, g.imageheight), o));
    }
}

function d(e, t, a, i) {
    var n = 0, d = 0, o = 0, s = {}, h = r(a, i).view.imagePadding;
    return n = l - 2 * h, g, e > n ? (o = (d = n) * t / e, s.imageWidth = d, s.imageheight = o) : (s.imageWidth = e, 
    s.imageheight = t), s;
}

var o = e(require("./showdown.js")), s = e(require("./html2json.js")), l = 0, g = 0;

wx.getSystemInfo({
    success: function(e) {
        l = e.windowWidth, g = e.windowHeight;
    }
}), module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', n = arguments[3], d = arguments[4], l = n, g = {};
        if ("html" == t) g = s.default.html2json(r, e); else if ("md" == t || "markdown" == t) {
            var h = new o.default.Converter().makeHtml(r);
            g = s.default.html2json(h, e);
        }
        g.view = {}, g.view.imagePadding = 0, void 0 !== d && (g.view.imagePadding = d);
        var v = {};
        v[e] = g, l.setData(v), l.wxParseImgLoad = i, l.wxParseImgTap = a;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var n = [], d = (i.data, null), o = 0; o < a; o++) {
            var s = r(i, t + o).nodes;
            n.push(s);
        }
        (d = {})[e = e || "wxParseTemArray"] = n, i.setData(d);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        s.default.emojisInit(e, t, a);
    }
};