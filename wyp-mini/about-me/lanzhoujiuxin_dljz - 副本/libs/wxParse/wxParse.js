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
    var t = this, a = e.target.dataset.from, i = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && r(e, i, t, a);
}

function r(e, a, i, r) {
    var d, o = i.data[r];
    if (o && 0 != o.images.length) {
        var s = o.images, l = n(e.detail.width, e.detail.height, i, r), g = s[a].index, h = "" + r, m = !0, v = !1, u = void 0;
        try {
            for (var f, w = g.split(".")[Symbol.iterator](); !(m = (f = w.next()).done); m = !0) h += ".nodes[" + f.value + "]";
        } catch (e) {
            v = !0, u = e;
        } finally {
            try {
                !m && w.return && w.return();
            } finally {
                if (v) throw u;
            }
        }
        var c = h + ".width", x = h + ".height";
        i.setData((d = {}, t(d, c, l.imageWidth), t(d, x, l.imageheight), d));
    }
}

function n(e, t, a, i) {
    var r = 0, n = 0, d = 0, o = {}, g = a.data[i].view.imagePadding;
    return r = s - 2 * g, l, e > r ? (d = (n = r) * t / e, o.imageWidth = n, o.imageheight = d) : (o.imageWidth = e, 
    o.imageheight = t), o;
}

var d = e(require("./showdown.js")), o = e(require("./html2json.js")), s = 0, l = 0;

wx.getSystemInfo({
    success: function(e) {
        s = e.windowWidth, l = e.windowHeight;
    }
}), module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', n = arguments[3], s = arguments[4], l = arguments[5], g = n, h = {};
        if ("html" == t) h = o.default.html2json(r, e); else if ("md" == t || "markdown" == t) {
            var m = new d.default.Converter().makeHtml(r);
            h = o.default.html2json(m, e);
        }
        h.view = {}, h.view.imagePadding = 0, void 0 !== s && (h.view.imagePadding = s);
        var v = {}, u = h.nodes, f = u.length;
        if (l) for (var w = 0; w < f; w += 100) {
            var c = e + w, x = u.slice(w, w + 100), P = {};
            P[c] = x, g.setData(P);
        } else v[e] = h, g.setData(v);
        g.wxParseImgLoad = i, g.wxParseImgTap = a;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var r = [], n = i.data, d = null, o = 0; o < a; o++) {
            var s = n[t + o].nodes;
            r.push(s);
        }
        e = e || "wxParseTemArray", (d = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(d);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        o.default.emojisInit(e, t, a);
    }
};