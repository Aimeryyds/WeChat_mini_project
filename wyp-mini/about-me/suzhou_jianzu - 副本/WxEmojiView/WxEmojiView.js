function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t(e, t) {
    var i = {};
    i.showWxEmojiChooseView = 1, void 0 === (u = t) && (u = ""), i.WxEmojiTextArray = a(t), 
    i.textAreaText = u, i.emojiArray = s, n = i, r.setData({
        WxEmojiObjs: i
    });
}

function a(e) {
    for (var t = new RegExp("[" + o + "]"), a = e.split(t), i = [], r = 0; r < a.length; r++) {
        var n = a[r], s = {};
        x[n] ? (s.node = "element", s.tag = "emoji", s.text = x[n]) : (s.node = "text", 
        s.text = n), i.push(s);
    }
    return i;
}

var i, r, o, n, x = {}, s = [], u = "";

module.exports = (i = {
    init: function(e, t) {
        o = e, x = t, s = [];
        for (var a in x) s.push(a);
    },
    bindThis: function(e) {
        r = e;
        var t = {};
        t.showWxEmojiChooseView = 1, t.textAreaText = u, t.emojiArray = s, n = t, r.setData({
            WxEmojiObjs: t
        });
    },
    text: u,
    transEmojiStr: a,
    buildTextObjs: function(e, t) {
        var i = {};
        i.WxEmojiTextArray = a(t), r.setData({
            WxEmojiObjs: i
        });
    },
    buildTextAreaObjs: t
}, e(i, "buildTextAreaObjs", t), e(i, "WxEmojiTextareaFocus", function(e, t) {
    r = e;
}), e(i, "WxEmojiTextareaBlur", function(e, a) {
    r = e, 0 == a.detail.value.length && t(r, ""), t(r, a.detail.value);
}), e(i, "wxPreEmojiTap", function(e, a) {
    r = e;
    var i = a.target.dataset.text;
    0 != i.length && (u += i, n.textAreaText = u, r.setData({
        WxEmojiObjs: n
    }), t(r, u));
}), i);