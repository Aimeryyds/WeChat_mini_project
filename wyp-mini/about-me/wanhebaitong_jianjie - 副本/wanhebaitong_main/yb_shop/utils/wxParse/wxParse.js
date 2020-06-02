function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    console.log(e);
    var t = e.target.dataset.src, a = e.target.dataset.from;
    void 0 !== a && 0 < a.length && wx.previewImage({
        current: t,
        urls: this.data[a].imageUrls
    });
}

function a(e) {
    var t = e.target.dataset.from, a = e.target.dataset.idx;
    void 0 !== t && 0 < t.length && i(e, a, this, t);
}

function i(e, t, a, i) {
    var n = a.data[i];
    if (n && 0 != n.images.length) {
        var d = n.images, s = r(e.detail.width, e.detail.height, a, i);
        d[t].width = s.imageWidth, d[t].height = s.imageheight, n.images = d;
        var o = {};
        o[i] = n, a.setData(o);
    }
}

function r(e, t, a, i) {
    var r = 0, n = 0, d = 0, s = {};
    return wx.getSystemInfo({
        success: function(o) {
            var g = a.data[i].view.imagePadding;
            r = o.windowWidth - 2 * g, o.windowHeight, r < e ? (d = (n = r) * t / e, s.imageWidth = n, 
            s.imageheight = d) : (s.imageWidth = e, s.imageheight = t);
        }
    }), s;
}

var n = e(require("./showdown.js")), d = e(require("./html2json.js"));

module.exports = {
    wxParse: function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "wxParseData", i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "html", r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', s = arguments[3], o = arguments[4], g = s, h = {};
        if ("html" == i) h = d.default.html2json(r, e); else if ("md" == i || "markdown" == i) {
            var l = new n.default.Converter().makeHtml(r);
            h = d.default.html2json(l, e), console.log(JSON.stringify(h, " ", " "));
        }
        h.view = {}, void (h.view.imagePadding = 0) !== o && (h.view.imagePadding = o);
        var m = {};
        m[e] = h, g.setData(m), g.wxParseImgLoad = a, g.wxParseImgTap = t;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var r = [], n = i.data, d = null, s = 0; s < a; s++) {
            var o = n[t + s].nodes;
            r.push(o);
        }
        e = e || "wxParseTemArray", (d = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(d);
    },
    emojisInit: function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        d.default.emojisInit(e, t, a);
    }
};